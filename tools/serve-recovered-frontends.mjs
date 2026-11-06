import { createServer, get } from 'node:http';
import { createReadStream, statSync, readFileSync } from 'node:fs';
import { dirname, resolve, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import {loadGames} from './project-registry.mjs';
const project = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.argv[2] || 8174);
const development = process.argv.includes('--development');
const listedGames=loadGames();
// The same folder links work on the local preview and the packaged static site.
// Original neutral route IDs remain accepted for existing bookmarks.
const games=Object.fromEntries(listedGames.flatMap(g=>[[g.id,g],[g.folder,g]]));
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.wav': 'audio/wav', '.wasm': 'application/wasm', '.ttf': 'font/ttf', '.woff': 'font/woff' };
function catalogPage(){return readFileSync(resolve(project,'index.html'),'utf8');}
const server = createServer((request, response) => {
  const url = new URL(request.url, `http://127.0.0.1:${port}`);
  if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405).end(); return; }
  if (url.pathname === '/__recovered_health') { response.setHeader('Content-Type','application/json'); response.end(JSON.stringify({ project, catalogVersion:2, games:listedGames.map(g=>g.id), development })); return; }
  if (url.pathname === '/') { response.setHeader('Content-Type','text/html; charset=utf-8'); response.end(request.method === 'HEAD' ? '' : catalogPage()); return; }
  try {
    const [key, ...parts] = decodeURIComponent(url.pathname).split('/').filter(Boolean), game = games[key];
    if (!game) throw Error('Unknown game');
    if (!parts.length && (!url.pathname.endsWith('/') || !url.searchParams.has('gn') || development && !url.searchParams.has('reaDevelopmentMute'))) {
      url.pathname = `/${key}/`; url.searchParams.set('gn',game.gn);
      if(development)url.searchParams.set('reaDevelopmentMute','1');
      response.writeHead(302, { Location: url.pathname + url.search }).end(); return;
    }
    const root = game.root, path = resolve(root, parts.join('/') || 'index.html');
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
