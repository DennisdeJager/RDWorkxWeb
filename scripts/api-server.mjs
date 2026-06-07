import { createServer } from 'node:http';
import nodemailer from 'nodemailer';

const host = process.env.HOST || '0.0.0.0';
const port = Number(process.env.PORT || 5176);
const requestLimitBytes = 16 * 1024;
const contactRateLimit = new Map();

function sendJson(res, status, body) {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

function readRequestJson(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    let body = '';

    req.on('data', (chunk) => {
      size += chunk.length;

      if (size > requestLimitBytes) {
        reject(Object.assign(new Error('Request body too large'), { statusCode: 413 }));
        req.destroy();
        return;
      }

      body += chunk;
    });

    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(Object.assign(new Error('Invalid JSON'), { statusCode: 400 }));
      }
    });

    req.on('error', reject);
  });
}

function normalizeText(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getAppEnv() {
  return String(process.env.APP_ENV || process.env.NODE_ENV || 'dev').trim().toLowerCase();
}

function redactSecretValues(value) {
  const secrets = [
    process.env.SMTP_PASS,
    process.env.TURNSTILE_SECRET_KEY,
    process.env.OPENAI_API_KEY,
    process.env.DATABASE_URL
  ].filter(Boolean);

  return secrets.reduce(
    (current, secret) => current.replaceAll(secret, '[redacted]'),
    String(value || '')
  );
}

function smtpConfigSummary() {
  return {
    contactFromSet: Boolean(process.env.CONTACT_FROM || process.env.SMTP_USER),
    contactToSet: Boolean(process.env.CONTACT_TO),
    databaseUrlSet: Boolean(process.env.DATABASE_URL),
    smtpHost: process.env.SMTP_HOST || '',
    smtpPassSet: Boolean(process.env.SMTP_PASS),
    smtpPort: process.env.SMTP_PORT || '587',
    smtpSecure: String(process.env.SMTP_SECURE || '').toLowerCase() === 'true',
    smtpUserSet: Boolean(process.env.SMTP_USER),
    turnstileAllowedHostnames: process.env.TURNSTILE_ALLOWED_HOSTNAMES || '',
    turnstileSecretSet: Boolean(process.env.TURNSTILE_SECRET_KEY),
    turnstileSiteKeySet: Boolean(process.env.TURNSTILE_SITE_KEY || process.env.VITE_TURNSTILE_SITE_KEY)
  };
}

function classifyServerError(error) {
  const text = `${error.code || ''} ${error.command || ''} ${error.responseCode || ''} ${error.response || ''} ${error.message || ''}`;

  if (/turnstile|captcha/i.test(text)) {
    return 'captcha_verification_error';
  }

  if (/535|534|EAUTH|Username and Password|Application-specific password/i.test(text)) {
    return 'smtp_auth_error';
  }

  if (/ECONNREFUSED|ETIMEDOUT|EHOSTUNREACH|ENOTFOUND|Connection closed|Greeting never received|ESOCKET/i.test(text)) {
    return 'smtp_connection_error';
  }

  if (/No recipients defined|recipient|RCPT/i.test(text)) {
    return 'smtp_recipient_error';
  }

  if (/MAIL FROM|sender|from/i.test(text)) {
    return 'smtp_sender_error';
  }

  return 'server_error';
}

function errorHint(category) {
  const hints = {
    captcha_verification_error: 'Controleer TURNSTILE_SECRET_KEY en TURNSTILE_ALLOWED_HOSTNAMES voor deze omgeving.',
    server_error: 'Bekijk de serverlogs voor de volledige stacktrace.',
    smtp_auth_error: 'Controleer SMTP_USER en SMTP_PASS. Voor Gmail moet SMTP_PASS een Google App Password zijn, niet het normale wachtwoord.',
    smtp_connection_error: 'Controleer SMTP_HOST, SMTP_PORT, SMTP_SECURE en of de server uitgaand SMTP-verkeer toestaat. Voor Gmail: poort 587 met SMTP_SECURE=false of poort 465 met SMTP_SECURE=true.',
    smtp_recipient_error: 'Controleer CONTACT_TO. Het ontvangeradres moet correct bestaan en door de mailprovider geaccepteerd worden.',
    smtp_sender_error: 'Controleer CONTACT_FROM. Bij Gmail moet dit meestal gelijk zijn aan SMTP_USER of als alias toegestaan zijn.'
  };

  return hints[category] || hints.server_error;
}

function formatServerError(error, status) {
  const appEnv = getAppEnv();
  const category = classifyServerError(error);
  const base = {
    category,
    error: 'Contactformulier kon de aanvraag niet verwerken.',
    hint: errorHint(category),
    ok: false
  };

  const detail = {
    code: error.code || '',
    command: error.command || '',
    message: redactSecretValues(error.message || ''),
    response: redactSecretValues(error.response || ''),
    responseCode: error.responseCode || '',
    status
  };

  if (appEnv === 'prod' || appEnv === 'production') {
    return base;
  }

  if (appEnv === 'test') {
    return {
      ...base,
      detail,
      environment: appEnv,
      smtpConfig: smtpConfigSummary()
    };
  }

  return {
    ...base,
    debug: {
      ...detail,
      stack: redactSecretValues(error.stack || '')
    },
    environment: appEnv,
    smtpConfig: smtpConfigSummary()
  };
}

function getClientAddress(req) {
  const forwardedFor = req.headers['x-forwarded-for'];

  if (typeof forwardedFor === 'string' && forwardedFor.trim()) {
    return forwardedFor.split(',')[0].trim();
  }

  return req.socket.remoteAddress || 'unknown';
}

function isRateLimited(req) {
  const key = getClientAddress(req);
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 5;
  const current = contactRateLimit.get(key) || { count: 0, resetAt: now + windowMs };

  if (current.resetAt <= now) {
    contactRateLimit.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  current.count += 1;
  contactRateLimit.set(key, current);
  return current.count > maxRequests;
}

async function verifyTurnstile(token, req) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return { ok: false, reason: 'captcha-not-configured' };
  }

  if (!token) {
    return { ok: false, reason: 'captcha-required' };
  }

  const formData = new URLSearchParams();
  formData.set('secret', secret);
  formData.set('response', token);
  formData.set('remoteip', getClientAddress(req));

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    body: formData,
    method: 'POST'
  });
  const result = await response.json();

  if (!result.success) {
    return { ok: false, reason: 'captcha-invalid' };
  }

  const allowedHostnames = String(process.env.TURNSTILE_ALLOWED_HOSTNAMES || '')
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);

  if (allowedHostnames.length > 0 && !allowedHostnames.includes(String(result.hostname || '').toLowerCase())) {
    return { ok: false, reason: 'captcha-hostname-mismatch' };
  }

  return { ok: true };
}

function createMailTransport() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return null;
  }

  return nodemailer.createTransport({
    auth: {
      pass: smtpPass,
      user: smtpUser
    },
    host: smtpHost,
    port: smtpPort,
    secure: String(process.env.SMTP_SECURE || '').toLowerCase() === 'true'
  });
}

async function handleContact(req, res) {
  if (req.method !== 'POST') {
    res.writeHead(405, { allow: 'POST' });
    res.end();
    return;
  }

  if (isRateLimited(req)) {
    sendJson(res, 429, { ok: false, error: 'Te veel aanvragen. Probeer het later nog eens.' });
    return;
  }

  const payload = await readRequestJson(req);

  if (payload.website) {
    sendJson(res, 200, { ok: true });
    return;
  }

  const captcha = await verifyTurnstile(payload.turnstileToken, req);

  if (!captcha.ok) {
    const status = captcha.reason === 'captcha-not-configured' ? 503 : 400;
    sendJson(res, status, { ok: false, error: 'Captcha-controle is niet gelukt.' });
    return;
  }

  const name = normalizeText(payload.name, 120);
  const company = normalizeText(payload.company, 160);
  const email = normalizeText(payload.email, 180);
  const message = normalizeText(payload.message, 4000);

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    sendJson(res, 400, { ok: false, error: 'Vul naam, geldig e-mailadres en bericht in.' });
    return;
  }

  const transport = createMailTransport();
  const contactTo = process.env.CONTACT_TO;
  const contactFrom = process.env.CONTACT_FROM || process.env.SMTP_USER;

  if (!transport || !contactTo || !contactFrom) {
    sendJson(res, 503, { ok: false, error: 'Contactformulier is nog niet geconfigureerd.' });
    return;
  }

  const subject = `Nieuwe RD Workx intake-aanvraag van ${name}`;
  const text = [
    'Nieuwe intake-aanvraag via rdworkx.nl',
    '',
    `Naam: ${name}`,
    `Bedrijf: ${company || '-'}`,
    `E-mail: ${email}`,
    '',
    'Bericht:',
    message
  ].join('\n');
  const html = `
    <h2>Nieuwe intake-aanvraag via rdworkx.nl</h2>
    <p><strong>Naam:</strong> ${escapeHtml(name)}</p>
    <p><strong>Bedrijf:</strong> ${escapeHtml(company || '-')}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Bericht:</strong></p>
    <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
  `;

  await transport.sendMail({
    from: contactFrom,
    html,
    replyTo: email,
    subject,
    text,
    to: contactTo
  });

  sendJson(res, 200, { ok: true });
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

    if (url.pathname === '/health') {
      sendJson(res, 200, { ok: true, service: 'rdworkxwebsite-api' });
      return;
    }

    if (url.pathname === '/ready') {
      sendJson(res, 200, {
        databaseUrlSet: Boolean(process.env.DATABASE_URL),
        ok: true,
        service: 'rdworkxwebsite-api'
      });
      return;
    }

    if (url.pathname === '/api/public-config') {
      sendJson(res, 200, {
        turnstileSiteKey: process.env.TURNSTILE_SITE_KEY || process.env.VITE_TURNSTILE_SITE_KEY || ''
      });
      return;
    }

    if (url.pathname === '/api/contact') {
      await handleContact(req, res);
      return;
    }

    sendJson(res, 404, { ok: false, error: 'API route niet gevonden.' });
  } catch (error) {
    const status = error.statusCode || 500;
    const body = status >= 500
      ? formatServerError(error, status)
      : { ok: false, error: error.message };
    sendJson(res, status, body);
  }
});

server.listen(port, host, () => {
  console.log(`RD Workx API listening on http://${host}:${port}`);
});
