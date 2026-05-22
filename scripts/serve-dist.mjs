import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const host = process.env.HOST || '0.0.0.0';
const port = Number(process.env.PORT || 5175);
const root = join(process.cwd(), 'dist');

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

    const requestedPath = url.pathname === '/'
      ? 'index.html'
      : normalize(decodeURIComponent(url.pathname))
        .replace(/^[/\\]+/, '')
        .replace(/^(\.\.[/\\])+/, '');
    const filePath = join(root, requestedPath);
    const safePath = filePath.startsWith(root) && existsSync(filePath) ? filePath : join(root, 'index.html');

    await serveFile(res, safePath);
  } catch (error) {
    sendJson(res, 500, { ok: false, error: error.message });
  }
});

server.listen(port, host, () => {
  console.log(`R&D Workx server listening on http://${host}:${port}`);
});
