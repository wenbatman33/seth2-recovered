import { createServer, get } from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { dirname, resolve, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
const project = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.argv[2] || 8174);
const development = process.argv.includes('--development');
const games = { hades: { title: '古神巴風特', gn: 'hades', view: 'landscape', root: 'frontend-hades' },
  seth2: { title: '戰神賽特2', gn: 'golden-seth', view: 'portrait', root: 'frontend-seth2' } };
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.wav': 'audio/wav', '.wasm': 'application/wasm', '.ttf': 'font/ttf', '.woff': 'font/woff' };
const page = `<!doctype html><html lang="zh-Hant"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>本機遊戲前端</title><style>body{margin:0;padding:32px;background:#101318;color:#eee;font:18px system-ui}main{max-width:600px;margin:auto}a{display:block;padding:20px;margin:20px 0;color:#ffe1a0;border:1px solid #695b3c;border-radius:8px;text-decoration:none}small{color:#bbb}</style><main><h1>本機遊戲前端</h1><small>使用原始客戶端素材與自有模擬後端</small>${Object.entries(games).map(([key,g])=>`<a href="/${key}/?gn=${g.gn}&l=zh-tw">${g.title}</a>`).join('')}</main></html>`;
const server = createServer((request, response) => {
  const url = new URL(request.url, `http://127.0.0.1:${port}`);
  if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405).end(); return; }
  if (url.pathname === '/__recovered_health') { response.setHeader('Content-Type','application/json'); response.end(JSON.stringify({ project, games: Object.keys(games), development })); return; }
  if (url.pathname === '/') { response.setHeader('Content-Type','text/html; charset=utf-8'); response.end(request.method === 'HEAD' ? '' : development ? page.replaceAll('&l=zh-tw','&l=zh-tw&reaDevelopmentMute=1') : page); return; }
  try {
    const [key, ...parts] = decodeURIComponent(url.pathname).split('/').filter(Boolean), game = games[key];
    if (!game) throw Error('Unknown game');
    if (!parts.length && (!url.pathname.endsWith('/') || !url.searchParams.has('gn'))) {
      url.pathname = `/${key}/`; url.searchParams.set('gn',game.gn);
      response.writeHead(302, { Location: url.pathname + url.search }).end(); return;
    }
    const root = resolve(project, 'build', game.root), path = resolve(root, parts.join('/') || 'index.html');
    const subpath = relative(root,path);
    if (subpath.startsWith('..') || subpath.startsWith('/')) throw Error('Invalid path');
    const stat = statSync(path); if (!stat.isFile()) throw Error('Not a file');
    response.writeHead(200, { 'Content-Type': mime[extname(path)] || 'application/octet-stream', 'Content-Length': stat.size,
      'Cache-Control': /\.(png|jpe?g|webp|mp3|ogg|wav|ttf|woff)$/.test(path) ? 'public, max-age=3600' : 'no-store' });
    if (request.method === 'HEAD') response.end(); else createReadStream(path).pipe(response);
  } catch { response.writeHead(404, { 'Content-Type': 'text/plain' }).end('Local build file not found'); }
});
server.on('error', error => {
  if (error.code !== 'EADDRINUSE') throw error;
  const probe = get(`http://127.0.0.1:${port}/__recovered_health`, response => {
    let data = ''; response.on('data', chunk => data += chunk);
    response.on('end', () => {
      try { if (JSON.parse(data).project === project) { console.log(`Recovered frontends already available: http://127.0.0.1:${port}/`); return; } } catch {}
      console.error(`Port ${port} belongs to a different service; left untouched.`); process.exitCode = 1;
    });
  });
  probe.setTimeout(1500, () => probe.destroy());
  probe.on('error', () => { console.error(`Port ${port} is unavailable; existing service left untouched.`); process.exitCode = 1; });
});
server.listen(port, '127.0.0.1', () => console.log(`Recovered frontends: http://127.0.0.1:${port}/`));
