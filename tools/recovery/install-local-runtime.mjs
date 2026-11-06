#!/usr/bin/env node
// Install an explicitly owned simulation in a newly assembled independent game.
import fs from 'node:fs/promises';
import path from 'node:path';
import {randomUUID,createHash} from 'node:crypto';
const [projectArg,backendArg]=process.argv.slice(2);
if(!backendArg)throw Error('Usage: install-local-runtime.mjs <new-project-root> <owned-backend-dir>');
const root=path.resolve(projectArg),source=path.resolve(backendArg);
if(!/^Project-[C-I]$/.test(path.basename(root)))throw Error('Only new Project-C through Project-I are allowed');
const manifestPath=path.join(root,'recovery-manifest.json'),manifest=JSON.parse(await fs.readFile(manifestPath,'utf8'));
const config=JSON.parse(await fs.readFile(path.join(root,'game.config.json'),'utf8'));
if(manifest.backend!=='not-installed')throw Error('Existing backend installation is never overwritten');
const modules=manifest.modules;
function modulePath(bundle,name){const hits=modules.filter(m=>m.bundle===bundle&&m.id.endsWith('/'+name+'.ts'));if(hits.length!==1)throw Error('Expected one '+bundle+':'+name);return path.join(root,hits[0].file);}
function relativeImport(from,to){let p=path.relative(path.dirname(from),to).split(path.sep).join('/').replace(/\.ts$/,'');return p.startsWith('.')?p:'./'+p;}
const meta=(uuid,importer='typescript')=>JSON.stringify({ver:'4.0.24',importer,imported:false,uuid,files:[],subMetas:{},userData:{isPlugin:false}},null,2)+'\n';
const backend=path.join(root,'assets/game/backend');
const installSource=await fs.readFile(path.join(source,'InstallLocalBackend.ts'),'utf8');
if(!installSource.includes('export function installLocalBackend'))throw Error('Owned backend must export installLocalBackend');
await fs.mkdir(backend);const backendFiles=[];
for(const file of await fs.readdir(source)){
 if(!/\.(ts|json|md)$/.test(file))continue;
 const bytes=await fs.readFile(path.join(source,file));await fs.writeFile(path.join(backend,file),bytes,{flag:'wx'});
 if(file.endsWith('.ts'))await fs.writeFile(path.join(backend,file+'.meta'),meta(randomUUID()),{flag:'wx'});
 backendFiles.push({file:'assets/game/backend/'+file,sha256:createHash('sha256').update(bytes).digest('hex')});
}
const bootstrap=path.join(root,'assets/shared/bootstrap/local-runtime.ts');await fs.mkdir(path.dirname(bootstrap),{recursive:true});
const service=modulePath('slotFramework','GameServiceBase'),configModule=modulePath('main','Config'),bundleManager=modulePath('main','BundleManager');
const code=`// @ts-nocheck
// Owned local simulation. Original backend RNG, RTP and hidden probabilities are unknown.
import { EDITOR } from 'cc/env';
import { game, Game, settings, assetManager } from 'cc';
import { GameServiceBase } from ${JSON.stringify(relativeImport(bootstrap,service))};
import { Config } from ${JSON.stringify(relativeImport(bootstrap,configModule))};
import { BundleManager } from ${JSON.stringify(relativeImport(bootstrap,bundleManager))};
import { installLocalBackend } from ${JSON.stringify(relativeImport(bootstrap,path.join(backend,'InstallLocalBackend.ts')))};
if(!EDITOR){
 const url=new URL(location.href),scene=String(settings.querySettings('launch','launchScene')||'');
 const portrait=scene.includes(${JSON.stringify(config.scenes.portrait?.uuid||'--no-portrait--')})||/Portrait|Mobile/.test(scene);
 const defaults={gn:${JSON.stringify(config.gn)},gt:${JSON.stringify(config.gt)},l:'zh-tw',ct:'slot',view_mode:portrait?'portrait':'landscape',t:'creator-local',socket_url:'browser-local',gv:'local-simulation',table:'1'};
 url.searchParams.set('gn',defaults.gn);url.searchParams.set('gt',defaults.gt);
 for(const[key,value]of Object.entries(defaults))if(!url.searchParams.has(key))url.searchParams.set(key,value);
 history.replaceState(history.state,'',url);
 window.__recoveredLaunch=window.__recoveredLaunch||{viewMode:url.searchParams.get('view_mode'),scene:scene};
 Config.isSkipCheckUpdate=true;Config.USE_AUTO_VERSION=false;Config.HOT_UPDATE_URL='';
 // All bundles belong to this static build; no provider root-domain manifest.
 BundleManager.prototype._loadBundle=function(name,complete){assetManager.loadBundle(name,complete);return Promise.resolve();};
 installLocalBackend(GameServiceBase);
 if(url.searchParams.get('reaDevelopmentMute')==='1')game.on(Game.EVENT_GAME_INITED,()=>{game.frameRate=30;});
}
`;
await fs.writeFile(bootstrap,code,{flag:'wx'});await fs.writeFile(bootstrap+'.meta',meta(randomUUID()),{flag:'wx'});
const application=modulePath('main','Application'),gameConfig=modulePath(config.bundle,'GameConfigModel');
const patches=[];
async function prepend(file,statement,reason){const original=await fs.readFile(file,'utf8');await fs.writeFile(file,statement+'\n'+original);patches.push({file:path.relative(root,file),reason,sourceSha256:createHash('sha256').update(original).digest('hex'),adaptedSha256:createHash('sha256').update(statement+'\n'+original).digest('hex')});}
await prepend(application,'import '+JSON.stringify(relativeImport(application,bootstrap))+';','Install local transport and static bundle loading before Application.init');
await prepend(gameConfig,'import '+JSON.stringify(relativeImport(gameConfig,application))+';','Explicit Application dependency before game model singleton initialization');
manifest.backend={kind:'owned-local-simulation',originalServerRestored:false,originalRngRestored:false,originalRtpRestored:false,files:backendFiles};
manifest.compatibility={...manifest.compatibility,localRuntimePatches:patches};manifest.status='local simulation installed; runtime not verified';
await fs.writeFile(manifestPath,JSON.stringify(manifest,null,2)+'\n');
config.backend='owned-local-simulation';config.status='awaiting-official-build-and-gameplay-validation';await fs.writeFile(path.join(root,'game.config.json'),JSON.stringify(config,null,2)+'\n');
console.log(JSON.stringify({project:config.project,backendFiles:backendFiles.length,status:manifest.status}));
