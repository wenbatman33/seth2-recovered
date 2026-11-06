#!/usr/bin/env node
// Capture public, manifest-indexed Cocos client files. Never executes target JS.
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';

export function decodeUuid(raw){
 const [s,...suffix]=raw.split('@');
 if(![22,23].includes(s.length))return raw;
 const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
 const prefix=s.length===23?5:2;let hex=s.slice(0,prefix);
 for(let i=prefix;i<s.length;i+=2){const a=alphabet.indexOf(s[i]),b=alphabet.indexOf(s[i+1]);if(a<0||b<0)throw Error('Invalid UUID');hex+=(a*64+b).toString(16).padStart(3,'0');}
 if(hex.length!==32)throw Error('Invalid UUID width');
 return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}${suffix.length?'@'+suffix.join('@'):''}`;
}
export function versionedAsset(config,kind,key,extension){
 const list=config.versions?.[kind]||[];let version='';
 for(let i=0;i<list.length;i+=2){if(String(list[i])===String(key)){version='.'+list[i+1];break;}}
 const raw=typeof key==='number'?config.uuids[key]:key;
 const uid=decodeUuid(raw);
 return `${kind}/${uid.slice(0,2)}/${uid}${version}${extension}`;
}
const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
async function pool(items,fn){let i=0;await Promise.all(Array.from({length:Math.min(2,items.length)},async()=>{while(i<items.length)await fn(items[i++]);}));}

export async function capture(metadata,output,{assets=false,nativeOnly=false}={}){
 const base=new URL(metadata.baseUrl);if(base.protocol!=='https:'||base.search||base.hash)throw Error('Expected public HTTPS asset base without credentials');
 const root=path.resolve(output),files=new Map(),missing=[];
 await fs.mkdir(root,{recursive:true});
 const manifestFile=path.join(root,'capture-manifest.json');
 try{const prior=JSON.parse(await fs.readFile(manifestFile,'utf8'));if(prior.baseUrl!==base.href)throw Error('Capture source differs');for(const f of prior.files)files.set(f.path,f);}catch(e){if(e.code!=='ENOENT')throw e;}
 async function get(relative,{optional=false}={}){
  if(relative.startsWith('/')||relative.split('/').includes('..')||new URL(relative,base).origin!==base.origin)throw Error('Unsafe capture path '+relative);
  const dest=path.resolve(root,relative);if(!dest.startsWith(root+path.sep))throw Error('Outside capture root');
  const cached=files.get(relative);
  if(cached){try{const bytes=await fs.readFile(dest);if(digest(bytes)===cached.sha256)return bytes;}catch(e){if(e.code!=='ENOENT')throw e;}}
  const r=await fetch(new URL(relative,base),{signal:AbortSignal.timeout(30000),headers:{'User-Agent':'Mozilla/5.0'}});
  if(!r.ok){if(optional&&r.status===404)return null;throw Error(`HTTP ${r.status}: ${relative}`);}
  const bytes=Buffer.from(await r.arrayBuffer());
  if(!/\.html$/.test(relative)&&/text\/html/.test(r.headers.get('content-type')||''))throw Error('Unexpected HTML '+relative);
  await fs.mkdir(path.dirname(dest),{recursive:true});await fs.writeFile(dest,bytes);
  files.set(relative,{path:relative,url:new URL(relative,base).href,bytes:bytes.length,sha256:digest(bytes)});
  return bytes;
 }
 const save=async()=>fs.writeFile(manifestFile,JSON.stringify({schemaVersion:1,project:metadata.project,baseUrl:base.href,capturedAt:new Date().toISOString(),scope:assets?'manifest-indexed client assets; dependency completeness not yet verified':'scripts and manifests only',files:[...files.values()].sort((a,b)=>a.path.localeCompare(b.path)),missing,validation:'Not executed; no gameplay or original server RNG/RTP claim'},null,2)+'\n');
 try{
  await get('index.html');const settings=JSON.parse(await get('src/settings.json'));
  await pool(['app.js','index.js','application.js','src/import-map.json','src/chunks/bundle.js'],p=>get(p));
  const bundles=settings.assets.projectBundles;
  for(const name of bundles){
   const v=settings.assets.bundleVers?.[name];
   const configFile=`assets/${name}/config${v?'.'+v:''}.json`;
   const config=JSON.parse(await get(configFile));
   await get(`assets/${name}/index${v?'.'+v:''}.js`,{optional:true});
   if(!assets||nativeOnly)continue;
   const packed=new Set(Object.values(config.packs||{}).flat().map(Number));
   const redirects=new Set((config.redirect||[]).filter((_,i)=>i%2===0).map(Number));
   const extMap=new Map();for(const[ext,indices]of Object.entries(config.extensionMap||{}))for(const i of indices)extMap.set(Number(i),ext);
   const paths=Object.keys(config.packs||{}).map(k=>`assets/${name}/`+versionedAsset(config,'import',k,'.json'));
   config.uuids.forEach((u,i)=>{if(!packed.has(i)&&!redirects.has(i)&&!Object.hasOwn(config.packs||{},u))paths.push(`assets/${name}/`+versionedAsset(config,'import',i,extMap.get(i)||'.json'));});
   await pool(paths,async p=>{if(!await get(p,{optional:true}))missing.push({path:p,phase:'indexed import'});});
   const native=new Map();
   for(const[i,info]of Object.entries(config.paths||{})){
    const type=config.types[info[1]],uid=config.uuids[Number(i)];
    if(type==='cc.ImageAsset')native.set(Number(i),['.png','.jpg','.webp']);
    if(type==='cc.AudioClip')native.set(Number(i),['.mp3','.ogg','.wav']);
   }
   config.uuids.forEach((uid,i)=>{if(uid.endsWith('@6c48a')){const n=config.uuids.indexOf(uid.split('@')[0]);if(n>=0&&!native.has(n))native.set(n,['.png','.jpg','.webp']);}});
   // Extra native types declare their file extension inside the captured import.
   for(const[i,info]of Object.entries(config.paths||{})){
    const type=config.types[info[1]];if(!['cc.Asset','cc.TTFFont','cc.ParticleAsset'].includes(type))continue;
    const uid=decodeUuid(config.uuids[Number(i)]);
    const own=files.get(`assets/${name}/`+versionedAsset(config,'import',Number(i),extMap.get(Number(i))||'.json'));
    if(own){const text=await fs.readFile(path.join(root,own.path),'utf8');const exts=[...new Set([...text.matchAll(/"(\.[a-zA-Z0-9]{1,8})"/g)].map(m=>m[1]))];if(exts.length===1)native.set(Number(i),exts);}
   }
   await pool([...native],async([i,exts])=>{let found=false;for(const ext of exts){const p=`assets/${name}/`+versionedAsset(config,'native',i,ext);if(await get(p,{optional:true})){found=true;break;}}if(!found)missing.push({bundle:name,uuid:decodeUuid(config.uuids[i]),phase:'native',extensions:exts});});
   console.log(JSON.stringify({project:metadata.project,bundle:name,indexedAssets:config.uuids.length,files:files.size,missing:missing.length}));await save();
  }
  if(assets){
   const script=fileURLToPath(new URL('./index-native-dependencies.py',import.meta.url));
   const plan=JSON.parse(execFileSync('python3',[script,path.join(root,'assets')],{maxBuffer:4*1024*1024,encoding:'utf8'}));
   await pool(plan.requests,async item=>{
    const configFile=[...files.keys()].find(p=>p.startsWith(`assets/${item.bundle}/config`)&&p.endsWith('.json'));
    const config=JSON.parse(await fs.readFile(path.join(root,configFile),'utf8'));
    const p=`assets/${item.bundle}/`+versionedAsset(config,'native',item.index,item.extension);
    if(!await get(p,{optional:true}))missing.push({path:p,phase:'decoded native dependency',type:item.type});
   });
   for(const error of plan.decodeErrors)missing.push({...error,phase:'native dependency decode'});
  }
  if(assets&&!nativeOnly){
   await pool(['style.css','game.css','src/polyfills.bundle.js','src/system.bundle.js',...settings.plugins.jsList.map(p=>'src/'+p)],p=>get(p));
  }
 }finally{await save();}
 return {project:metadata.project,files:files.size,missing:missing.length,manifestFile};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const [catalogFile,project,out,...args]=process.argv.slice(2);
 if(!out)throw Error('Usage: capture-cocos-client.mjs <private-catalog.json> <Project-X> <capture-dir> [--assets]');
 const items=JSON.parse(await fs.readFile(catalogFile,'utf8')),metadata=items.find(x=>x.project===project);if(!metadata)throw Error('Unknown project');
 console.log(JSON.stringify(await capture(metadata,out,{assets:args.includes('--assets')||args.includes('--native-only'),nativeOnly:args.includes('--native-only')})));
}
