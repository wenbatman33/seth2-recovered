import { createServer } from 'node:http';
import { stat } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { resolve, sep, extname, join } from 'node:path';

const root=resolve(process.argv[2]||'research/atg/hades/full-mirror-20261104');
const port=Number(process.argv[3]||8175);
const types={'.html':'text/html; charset=utf-8','.js':'application/javascript','.mjs':'application/javascript',
  '.json':'application/json','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg',
  '.webp':'image/webp','.mp3':'audio/mpeg','.ogg':'audio/ogg','.wav':'audio/wav','.wasm':'application/wasm',
  '.svg':'image/svg+xml','.ico':'image/x-icon','.pem':'text/plain'};
const server=createServer(async(req,res)=>{
  try{
    if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end();return;}
    const url=new URL(req.url,'http://127.0.0.1');
    const path=decodeURIComponent(url.pathname);
    let file=resolve(root,'.'+(path==='/'?'/local.html':path));
    if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403);res.end();return;}
    let info=await stat(file);if(info.isDirectory()){file=join(file,'index.html');info=await stat(file);}
    if(!info.isFile()){res.writeHead(404);res.end();return;}
    const local=path.includes('/local-runtime/')||extname(file)==='.html';
    res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','Content-Length':info.size,
      'Cache-Control':local?'no-store':'public, max-age=3600','X-Content-Type-Options':'nosniff'});
    if(req.method==='HEAD'){res.end();return;}
    createReadStream(file).on('error',()=>res.destroy()).pipe(res);
  }catch(error){res.writeHead(error.code==='ENOENT'?404:500);res.end();console.error('[preview]',req.url,error.code||error.message);}
});
server.keepAliveTimeout=65000;server.headersTimeout=66000;
server.listen(port,'127.0.0.1',1024,()=>console.log(`Original client local preview: http://127.0.0.1:${port}/local.html?gn=hades`));
