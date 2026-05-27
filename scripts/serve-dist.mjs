import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import nodemailer from 'nodemailer';

const host = process.env.HOST || '0.0.0.0';
const port = Number(process.env.PORT || 5175);
const root = join(process.cwd(), 'dist');
const requestLimitBytes = 16 * 1024;
const contactRateLimit = new Map();

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

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

async function serveFile(res, path) {
  const extension = extname(path);
  const content = await readFile(path);
  res.writeHead(200, {
    'cache-control': extension === '.html' ? 'no-store' : 'public, max-age=31536000, immutable',
    'content-type': mimeTypes[extension] || 'application/octet-stream'
  });
  res.end(content);
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

    if (url.pathname === '/health') {
      sendJson(res, 200, { ok: true });
      return;
    }

    if (url.pathname === '/ready') {
      sendJson(res, existsSync(join(root, 'index.html')) ? 200 : 503, {
        ok: existsSync(join(root, 'index.html'))
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

    const requestedPath = url.pathname === '/'
      ? 'index.html'
      : normalize(decodeURIComponent(url.pathname))
        .replace(/^[/\\]+/, '')
        .replace(/^(\.\.[/\\])+/, '');
    const filePath = join(root, requestedPath);
    const safePath = filePath.startsWith(root) && existsSync(filePath) ? filePath : join(root, 'index.html');

    await serveFile(res, safePath);
  } catch (error) {
    const status = error.statusCode || 500;
    const message = status >= 500 ? 'Serverfout bij het verwerken van de aanvraag.' : error.message;
    sendJson(res, status, { ok: false, error: message });
  }
});

server.listen(port, host, () => {
  console.log(`R&D Workx server listening on http://${host}:${port}`);
});
