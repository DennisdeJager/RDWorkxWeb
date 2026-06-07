import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const host = process.env.HOST || '0.0.0.0';
const port = Number(process.env.PORT || 5175);
const apiInternalUrl = process.env.API_INTERNAL_URL || 'http://api:5176';
const root = join(process.cwd(), 'dist');

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8'
};

function sendJson(res, status, body) {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

function proxiedResponseHeaders(response) {
  const blockedHeaders = new Set([
    'connection',
    'content-encoding',
    'content-length',
    'keep-alive',
    'proxy-authenticate',
    'proxy-authorization',
    'te',
    'trailer',
    'transfer-encoding',
    'upgrade'
  ]);
  const headers = {};

  for (const [key, value] of response.headers.entries()) {
    if (!blockedHeaders.has(key.toLowerCase())) {
      headers[key] = value;
    }
  }

  return headers;
}

async function proxyApi(req, res, url) {
  const target = new URL(url.pathname + url.search, apiInternalUrl);
  const headers = new Headers();

  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'string') {
      headers.set(key, value);
    }
  }

  headers.set('x-forwarded-host', req.headers.host || '');
  headers.set('x-forwarded-proto', 'http');

  const response = await fetch(target, {
    body: req.method === 'GET' || req.method === 'HEAD' ? undefined : req,
    duplex: 'half',
    headers,
    method: req.method
  });

  res.writeHead(response.status, proxiedResponseHeaders(response));

  if (response.body) {
    for await (const chunk of response.body) {
      res.write(chunk);
    }
  }

  res.end();
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
      sendJson(res, 200, { ok: true, service: 'rdworkxwebsite-web' });
      return;
    }

    if (url.pathname === '/ready') {
      sendJson(res, existsSync(join(root, 'index.html')) ? 200 : 503, {
        ok: existsSync(join(root, 'index.html')),
        service: 'rdworkxwebsite-web'
      });
      return;
    }

    if (url.pathname.startsWith('/api/')) {
      await proxyApi(req, res, url);
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
    console.error(error);
    sendJson(res, 502, {
      error: 'Webserver kon het verzoek niet verwerken.',
      ok: false
    });
  }
});

server.listen(port, host, () => {
  console.log(`RD Workx web listening on http://${host}:${port}`);
});
