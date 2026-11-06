import {createServer} from 'node:http';
import {createReadStream,existsSync,statSync} from 'node:fs';
import {dirname,extname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'../.cache/pages/site');
const prefix='/seth2-recovered/',port=8294;
const development=process.argv.includes('--development');
if(!existsSync(resolve(root,'.pages-package.json')))throw Error('Run npm run pages:package first.');
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript','.json':'application/json','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.mp3':'audio/mpeg','.ogg':'audio/ogg','.wav':'audio/wav','.wasm':'application/wasm','.ttf':'font/ttf','.woff':'font/woff'};
createServer((request,response)=>{
  try{
    if(!['GET','HEAD'].includes(request.method)){response.writeHead(405).end();return;}
    const url=new URL(request.url,'http://127.0.0.1:'+port);
    if(development&&/^\/seth2-recovered\/Project-[A-Z]\/$/.test(url.pathname)&&!url.searchParams.has('reaDevelopmentMute')){
      url.searchParams.set('reaDevelopmentMute','1');
      response.writeHead(302,{Location:url.pathname+url.search}).end();return;
    }
    if(url.pathname===prefix.slice(0,-1)){response.writeHead(301,{Location:prefix+url.search}).end();return;}
    if(!url.pathname.startsWith(prefix))throw Error('Outside site prefix');
    let file=resolve(root,'.'+decodeURIComponent(url.pathname.slice(prefix.length-1)));
    if(file!==root&&!file.startsWith(root+'/'))throw Error('Outside site directory');
    if(statSync(file).isDirectory()){
      if(!url.pathname.endsWith('/')){response.writeHead(301,{Location:url.pathname+'/'+url.search}).end();return;}
      file=resolve(file,'index.html');
    }
    const stat=statSync(file);if(!stat.isFile())throw Error('Not a file');
    response.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Content-Length':stat.size,'Cache-Control':'no-store','X-Robots-Tag':'noindex, nofollow'});
    if(request.method==='HEAD')response.end();else createReadStream(file).pipe(response);
  }catch{response.writeHead(404,{'Content-Type':'text/plain'}).end('Static site file not found');}
}).listen(port,'127.0.0.1',()=>console.log('Pages path preview: http://127.0.0.1:'+port+prefix));
