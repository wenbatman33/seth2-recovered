import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {gzip} from 'node:zlib';
import {promisify} from 'node:util';
const compress=promisify(gzip),base=resolve(import.meta.dirname,'../..');
const roots={before:resolve(base,'.cache/startup-profile/Project-I-baseline'),after:resolve(base,'Project-I/build/web')};
const mime={'.html':'text/html','.js':'text/javascript','.json':'application/json','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.mp3':'audio/mpeg','.wav':'audio/wav','.wasm':'application/wasm','.ttf':'font/ttf','.woff':'font/woff'};
const cache=new Map(),latencyMs=40;
createServer(async(req,res)=>{
 try{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405).end();return;}
  const url=new URL(req.url,'http://127.0.0.1:8295'),parts=url.pathname.split('/').filter(Boolean),root=roots[(parts.shift()||'').split('-')[0]];
  if(!root)throw Error('Unknown comparison');
  const file=resolve(root,parts.length?decodeURIComponent(parts.join('/')):'index.html');
  if(!file.startsWith(root+'/'))throw Error('Invalid path');
  const info=await stat(file);if(!info.isFile())throw Error('Not a file');
  const zipped=/\.(?:html|js|json|css)$/.test(file)&&/gzip/.test(req.headers['accept-encoding']||'');
  const key=file+':'+info.mtimeMs+':'+zipped;
  let body=cache.get(key);if(!body){body=await readFile(file);if(zipped)body=await compress(body);if(cache.size<6000)cache.set(key,body);}
  const headers={'Content-Type':mime[extname(file)]||'application/octet-stream','Content-Length':body.length,'Cache-Control':'public, max-age=600','X-Startup-Comparison-Latency-Ms':String(latencyMs)};
  if(zipped)headers['Content-Encoding']='gzip';
  setTimeout(()=>{res.writeHead(200,headers);res.end(req.method==='HEAD'?undefined:body);},latencyMs);
 }catch{res.writeHead(404).end('Comparison file not found');}
}).listen(8295,'127.0.0.1',()=>console.log('Startup comparison: /before-RUN/ and /after-RUN/ on http://127.0.0.1:8295 (40ms/request, gzip, Pages cache headers; fresh RUN means cold URLs)'));
