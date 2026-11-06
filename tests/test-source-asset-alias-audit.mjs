import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

// Execute the actual loader module with tiny metadata fixtures; no engine,
// renderer, original image decoding or network is needed for the DOM contract.
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const defaults=['tools/recovery/templates/source-asset-aliases.ts',...'CDEFGHI'.split('').map(p=>`Project-${p}/assets/shared/bootstrap/source-asset-aliases.ts`)];
const sources=process.argv.slice(2).length?process.argv.slice(2):defaults;
let passed=0;
async function fixture(source,search,withDocument=true){
 class Asset{constructor(){this.isValid=true;}addRef(){return this;}}
 class SpriteFrame extends Asset{_deserialize(){}reset(value){Object.assign(this,value);}}
 class SpriteAtlas extends Asset{}
 class Texture2D extends Asset{}
 class ImageAsset extends Asset{}
 class Rect{constructor(x,y,width,height){Object.assign(this,{x,y,width,height});}}
 class Size{constructor(width,height){Object.assign(this,{width,height});}}
 class Vec2{constructor(x,y){Object.assign(this,{x,y});}}
 class Prefab extends Asset{}
 class SceneAsset extends Asset{}
 class Sprite extends Asset{}
 class Button extends Asset{}
 class Bundle{get(){return null;}getInfoWithPath(){return null;}getDirWithPath(){return [];}}
 const assets=new Map();assets.add=assets.set.bind(assets);
 let rawCalls=0,runtime,historySerializations=0;
 const assetManager={assets,pipeline:{insert(){},append(){}},getBundle(){return null;},loadAny(request,options,callback){
  if(typeof options==='function')callback=options;
  rawCalls++;
  if(request.uuid==='missing-native'){callback(Error('Fixture missing original native texture'));return;}
  const texture=new Texture2D();Object.assign(texture,{_uuid:request.uuid,width:64,height:64});callback(null,texture);
 }};
 const cc={assetManager,AssetManager:{Bundle},Asset,SpriteFrame,SpriteAtlas,Texture2D,ImageAsset,Rect,Size,Vec2,Prefab,SceneAsset,Sprite,Button};
 const elements=new Map(),document={getElementById:id=>elements.get(id),createElement:()=>({dataset:{}}),body:{appendChild:element=>elements.set(element.id,element)}};
 const context=vm.createContext({console,Promise,Map,Set,WeakSet,Array,Object,Error,URLSearchParams,location:{search},...(withDocument?{document}:{}),JSON:{parse:JSON.parse,stringify(value,...args){if(runtime&&value===runtime.requests)historySerializations++;return JSON.stringify(value,...args);}}});
 const module=new vm.SourceTextModule(await fs.readFile(path.join(root,source),'utf8'),{context,identifier:source});
 await module.link(()=>new vm.SyntheticModule(Object.keys(cc),function(){for(const[key,value]of Object.entries(cc))this.setExport(key,value);},{context}));
 await module.evaluate();
 const frame=(uuid,native)=>({uuid,bundle:'fixture',path:uuid,type:'cc.SpriteFrame',sourceIndex:0,textureSourceUuid:native,texture:{originalUuid:native,imageMetaUuid:native,textureUuid:native},serialized:{name:uuid,rect:{x:0,y:0,width:16,height:16},originalSize:{width:16,height:16},offset:{x:0,y:0},rotated:false}});
 const good=frame('good-frame','real-fixture-native'),bad=frame('bad-frame','missing-native');
 runtime=module.namespace.installSourceAssetAliases({project:'Fixture',unresolved:[],frameRecords:[good,bad],frames:[good,bad],atlases:[],images:[],textures:[],staticReferences:[]});
 const load=uuid=>new Promise((resolve,reject)=>assetManager.loadAny({uuid},(error,asset)=>error?reject(error):resolve(asset)));
 const first=await load(good.uuid);
 for(let i=0;i<110;i++)assert.equal(await load(good.uuid),first,'native cache identity stays unchanged');
 assert.equal(rawCalls,1,'repeated audits do not re-load physical assets');
 assert.equal(runtime.requests.length,100,'bounded in-memory QA interface survives in all modes');
 const notice=elements.get('SourceAssetAliasesAudit'),debug=new URLSearchParams(search).get('reaDebug')==='1';
 if(withDocument){
  assert.equal(notice.dataset.ready,'1');assert.equal(notice.dataset.frameCount,'1');assert.equal(notice.dataset.atlasCount,'0');
  if(debug){assert.ok(historySerializations>0);assert.equal(JSON.parse(notice.dataset.requests).length,100);}
  else{assert.equal(historySerializations,0,'ordinary loading never serializes audit history');assert.equal(Object.hasOwn(notice.dataset,'requests'),false);}
 }else assert.equal(historySerializations,0,'headless loader has no DOM projection');
 await assert.rejects(load(bad.uuid),/Fixture missing original native texture/,'actual asset failures still reject caller');
 assert.equal(runtime.requests.at(-1).kind,'failure');
 if(withDocument){assert.equal(notice.dataset.status,'error');assert.equal(notice.dataset.errorCount,'1');assert.match(notice.dataset.lastError,/missing original native texture/);}
 await load(good.uuid);
 if(withDocument)assert.match(notice.dataset.lastError,/missing original native texture/,'later ready events do not hide the failure');
 if(!debug||!withDocument)assert.equal(historySerializations,0);
 passed++;
 console.log(`PASS ${source} ${withDocument?(debug?'debug history':'ordinary counters/errors'):'headless failure propagation'}`);
}
for(const source of sources){await fixture(source,'');await fixture(source,'?reaDebug=0');await fixture(source,'?reaDebug=1');await fixture(source,'?reaDebug=1',false);}
console.log(JSON.stringify({passed,sourceFiles:sources.length,engine:false,browser:false,network:false}));
