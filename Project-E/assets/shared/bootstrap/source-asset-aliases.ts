// @ts-nocheck
/** Restore captured Cocos addressing/packed-frame metadata at the loading edge.
 * Pixels come only from existing original ImageAsset/Texture2D sources. No
 * drawing, raster generation, UUID rewrite of files or language substitution.
 * Engine API/geometry semantics verified against installed Creator3.8.8 source.
 */
import {assetManager,AssetManager,Asset,SpriteFrame,SpriteAtlas,Texture2D,ImageAsset,Rect,Size,Vec2,Prefab,SceneAsset,Sprite,Button} from 'cc';
const copy=value=>JSON.parse(JSON.stringify(value));
export function installSourceAssetAliases(manifest){
 const proto=AssetManager.Bundle.prototype;if(proto.__sourceAssetAliasRuntime){if(proto.__sourceAssetAliasRuntime.project!==manifest.project)throw Error('Cannot mix independent source alias manifests');return proto.__sourceAssetAliasRuntime;}
 if(manifest.unresolved?.length)throw Error('Source alias inventory has unresolved assets');
 const classes={'cc.SpriteFrame':SpriteFrame,'cc.SpriteAtlas':SpriteAtlas,'cc.Texture2D':Texture2D,'cc.ImageAsset':ImageAsset};
 const oldAny=assetManager.loadAny,oldGet=proto.get,oldInfo=proto.getInfoWithPath,oldDir=proto.getDirWithPath;
 const records=new Map(manifest.frameRecords.map(r=>[r.uuid,r])),paths=manifest.frames.concat(manifest.atlases,manifest.images,manifest.textures).slice().sort((a,b)=>a.sourceIndex-b.sourceIndex),byUuid=new Map(),frameCache=new Map(),atlasCache=new Map(),pending=new Map(),textures=new Map(),bundles=new Map(),identityViews=new Map();
 paths.forEach(entry=>{if(!byUuid.has(entry.uuid))byUuid.set(entry.uuid,entry);});
 manifest.frameRecords.forEach(entry=>{if(!byUuid.has(entry.uuid))byUuid.set(entry.uuid,entry);});
 manifest.frameRecords.forEach(entry=>{const texture=entry.texture;if(!texture.renderTexture&&!byUuid.has(entry.textureSourceUuid))byUuid.set(entry.textureSourceUuid,{uuid:entry.textureSourceUuid,type:'cc.Texture2D',texture});if(!texture.renderTexture&&!byUuid.has(texture.originalUuid))byUuid.set(texture.originalUuid,{uuid:texture.originalUuid,type:'cc.ImageAsset',texture});});
 const runtime={project:manifest.project,requests:[],frames:frameCache,atlases:atlasCache,textureMappings:[],originalPixelSourcesOnly:true};
 let notice;if(typeof document!=='undefined'){notice=document.getElementById('SourceAssetAliasesAudit');if(!notice){notice=document.createElement('div');notice.id='SourceAssetAliasesAudit';notice.hidden=true;document.body.appendChild(notice);}notice.dataset.project=manifest.project;}
 // Detailed DOM history is an opt-in QA projection. Keep the bounded in-memory
 // interface and failure callbacks unchanged during normal asset loading.
 const detailedAudit=typeof location!=='undefined'&&typeof URLSearchParams!=='undefined'&&new URLSearchParams(location.search).get('reaDebug')==='1';let errorCount=0;
 function audit(data){runtime.requests.push(data);if(runtime.requests.length>100)runtime.requests.shift();if(notice){if(detailedAudit)notice.dataset.requests=JSON.stringify(runtime.requests);notice.dataset.frameCount=String(frameCache.size);notice.dataset.atlasCount=String(atlasCache.size);if(data.status==='error'||data.kind==='failure'){notice.dataset.status='error';notice.dataset.errorCount=String(++errorCount);notice.dataset.lastError=String(data.message||data.kind||'Source asset loading failed');}}}
 function normalized(path){return String(path||'').replace(/\\/g,'/').replace(/^(?:\.\/|\/)/,'').replace(/\/$/,'');}
 function matches(entry,type){return !type||type===Asset||classes[entry.type]===type||(type.prototype&&classes[entry.type]?.prototype instanceof type);}
 function entries(bundle,path,type,dir=false){const query=normalized(path),groups=new Map();paths.forEach(entry=>{if(entry.bundle!==bundle||!(dir?(!query||entry.path===query||entry.path.startsWith(query+'/')):entry.path===query))return;if(!groups.has(entry.path))groups.set(entry.path,[]);const list=groups.get(entry.path);
  // Source config inventory: every SpriteFrame/Texture2D is a subasset;
  // ImageAsset/Atlas are primary. Native Config._initPath pushes subassets and
  // unshifts primary entries, then getDir iterates first-seen path groups.
  if(entry.type==='cc.SpriteFrame'||entry.type==='cc.Texture2D')list.push(entry);else list.unshift(entry);});const result=[];groups.forEach(list=>list.forEach(entry=>{if(matches(entry,type))result.push(entry);}));return result;}
 function first(bundle,path,type){return entries(bundle,path,type)[0]||null;}
 function info(entry){return{uuid:entry.uuid,path:entry.path,ctor:classes[entry.type],sourceAssetAlias:true};}
 function cache(uuid,asset){if(!asset||asset.isValid===false)throw Error('Invalid restored source asset '+uuid);assetManager.assets.add(uuid,asset);return asset;}
 function once(key,fn){if(pending.has(key))return pending.get(key);const promise=Promise.resolve().then(fn);pending.set(key,promise);promise.then(()=>pending.delete(key),()=>pending.delete(key));return promise;}
 function ensureBundle(name){const existing=assetManager.getBundle(name);if(existing)return Promise.resolve(existing);if(bundles.has(name))return bundles.get(name);const promise=new Promise((resolve,reject)=>assetManager.loadBundle(name,(error,bundle)=>error?reject(error):resolve(bundle)));bundles.set(name,promise);promise.catch(()=>bundles.delete(name));return promise;}
 function raw(uuid){return new Promise((resolve,reject)=>oldAny.call(assetManager,{uuid},(error,value)=>error?reject(error):resolve(value)));}
 async function originalTexture(descriptor,image=false){
  let uuid=image?descriptor.imageMetaUuid:descriptor.textureUuid;if(!uuid||descriptor.unresolved)throw Error('Missing original texture mapping '+descriptor.originalUuid);
  // First official import may replace an opaque source image ID. Resolve the
  // current build's physical path through the captured native Bundle API, not
  // through source aliases or a possibly pre-import metadata UUID snapshot.
  if(descriptor.ownerBundle){const owner=await ensureBundle(descriptor.ownerBundle);if(descriptor.loadPath){const path=image?descriptor.loadPath.replace(/\/texture$/,''):descriptor.loadPath,type=descriptor.renderTexture?null:image?ImageAsset:Texture2D,resolved=oldInfo.call(owner,path,type);if(!resolved)throw Error('Current packed pixel source is absent '+descriptor.ownerBundle+'/'+path);uuid=resolved.uuid;}}
  const key=(image?'image:':'texture:')+uuid;if(textures.has(key))return textures.get(key);
  return once(key,async()=>{const value=await raw(uuid);if(!value)throw Error('Original pixel source did not load '+uuid);value.addRef?.();textures.set(key,value);runtime.textureMappings.push({originalUuid:descriptor.originalUuid,declaredUuid:image?descriptor.imageMetaUuid:descriptor.textureUuid,currentUuid:uuid,imagePath:descriptor.imagePath||descriptor.assetPath||null,builtin:!!descriptor.builtin,renderTexture:!!descriptor.renderTexture});return value;});
 }

 async function ensureFrame(uuid){
  if(frameCache.has(uuid)&&frameCache.get(uuid).isValid!==false)return frameCache.get(uuid);
  return once('frame:'+uuid,async()=>{const record=records.get(uuid);if(!record)throw Error('Captured frame definition is absent '+uuid);const texture=await originalTexture(record.texture),s=copy(record.serialized),caps=s.capInsets||[0,0,0,0],rect=s.rect,width=rect.x+(s.rotated?rect.height:rect.width),height=rect.y+(s.rotated?rect.width:rect.height);
   if(width>texture.width+.001||height>texture.height+.001||rect.x<0||rect.y<0)throw Error('Captured packed frame exceeds original texture '+uuid);
   const existing=assetManager.assets.get(uuid),frame=existing instanceof SpriteFrame&&existing.isValid!==false?existing:new SpriteFrame();
   // Native deserialization preserves source mesh vertices/pixelsToUnit/pivot;
   // reset uses the source-proven border order Left,Top,Right,Bottom.
   s.packable=false;s.pixelsToUnit=s.pixelsToUnit??100;s.meshType=s.meshType??0;s.pivot=s.pivot||{x:.5,y:.5};frame._deserialize(s,{result:[]});
   // clearData=true clears stale rotation before native reset checks its
   // transient full-texture rect; final source isRotate/trim/borders are reapplied.
   frame.reset({texture,rect:new Rect(rect.x,rect.y,rect.width,rect.height),originalSize:new Size(s.originalSize.width,s.originalSize.height),offset:new Vec2(s.offset.x,s.offset.y),isRotate:!!s.rotated,borderLeft:caps[0],borderTop:caps[1],borderRight:caps[2],borderBottom:caps[3]},true);
   frame.packable=false;frame._uuid=uuid;frame.name=s.name||'';frame.addRef();cache(uuid,frame);frameCache.set(uuid,frame);audit({kind:'frame',status:'ready',uuid,textureUuid:record.texture.textureUuid});return frame;});
 }
 async function ensureAtlas(entry){if(atlasCache.has(entry.uuid)&&atlasCache.get(entry.uuid).isValid!==false)return atlasCache.get(entry.uuid);return once('atlas:'+entry.uuid,async()=>{const frames=await Promise.all(entry.frames.map(f=>ensureFrame(f.uuid))),existing=assetManager.assets.get(entry.uuid),atlas=existing instanceof SpriteAtlas&&existing.isValid!==false?existing:new SpriteAtlas();atlas.spriteFrames=Object.create(null);entry.frames.forEach((f,i)=>{atlas.spriteFrames[f.name]=frames[i];});atlas._uuid=entry.uuid;atlas.name=entry.name||'';atlas.addRef();cache(entry.uuid,atlas);atlasCache.set(entry.uuid,atlas);audit({kind:'atlas',status:'ready',uuid:entry.uuid,frameCount:entry.frames.length});return atlas;});}
 function originalIdentity(entry,asset){if(asset._uuid===entry.uuid)return cache(entry.uuid,asset);const key=entry.type+':'+entry.uuid;if(identityViews.has(key))return cache(entry.uuid,identityViews.get(key));const functions=new Map(),view=new Proxy(asset,{get(target,key){if(key==='_uuid'||key==='uuid')return entry.uuid;const value=Reflect.get(target,key,target);if(typeof value!=='function'||key==='constructor')return value;if(!functions.has(key))functions.set(key,value.bind(target));return functions.get(key);},set(target,key,value){if(key==='_uuid'||key==='uuid'){if(value!==entry.uuid)throw Error('Cannot rewrite original source identity');return true;}return Reflect.set(target,key,value,target);}});identityViews.set(key,view);cache(entry.uuid,view);audit({kind:'identity',status:'ready',uuid:entry.uuid,currentUuid:asset._uuid});return view;}
 async function ensure(entry){switch(entry.type){case'cc.SpriteFrame':return ensureFrame(entry.uuid);case'cc.SpriteAtlas':return ensureAtlas(entry);case'cc.Texture2D':return originalIdentity(entry,await originalTexture(entry.texture));case'cc.ImageAsset':return originalIdentity(entry,await originalTexture(entry.texture,true));default:throw Error('Unsupported captured alias type '+entry.type);}}

 proto.getInfoWithPath=function(path,type){const entry=first(this.name,path,type);return entry?info(entry):oldInfo.call(this,path,type);};
 proto.getDirWithPath=function(path,type,out){const declared=entries(this.name,path,type,true);if(!declared.length)return oldDir.call(this,path,type,out);const result=out||[];declared.forEach(entry=>result.push(info(entry)));return result;};
 proto.get=function(path,type){const entry=first(this.name,path,type);if(!entry)return oldGet.call(this,path,type);if(entry.type==='cc.SpriteFrame')return frameCache.get(entry.uuid)||null;if(entry.type==='cc.SpriteAtlas')return atlasCache.get(entry.uuid)||null;return assetManager.assets.get(entry.uuid)||null;};
 function argumentsOf(args){const last=args.length-1,complete=typeof args[last]==='function'?args[last]:null,progress=last>1&&typeof args[last-1]==='function'?args[last-1]:null,options=args[1]&&typeof args[1]==='object'?args[1]:{};return{options,complete,progress};}
 function aliasFor(request,options){if(typeof request==='string'){if(options.__requestType__==='path')return first(options.bundle,request,options.type);return byUuid.get(request)||null;}if(request&&typeof request==='object'){if(request.uuid)return byUuid.get(request.uuid)||null;if(request.path)return first(request.bundle||options.bundle,request.path,request.type||options.type);}return null;}
 function directory(request,options){return options.__requestType__==='dir'&&typeof request==='string'?entries(options.bundle,request,options.type,true):null;}
 assetManager.loadAny=function(){const args=Array.from(arguments),{options,complete,progress}=argumentsOf(args),request=args[0],dir=directory(request,options),list=Array.isArray(request)?request:[request];
  if((!dir||!dir.length)&&!list.some(item=>aliasFor(item,options)))return oldAny.apply(this,args);
  const work=dir&&dir.length?dir.map(entry=>({entry})):list.map(item=>({item,entry:aliasFor(item,options)}));let finished=0;
  Promise.all(work.map(async task=>{let value;if(task.entry)value=await ensure(task.entry);else value=await new Promise((resolve,reject)=>oldAny.call(assetManager,task.item,options,(error,asset)=>error?reject(error):resolve(asset)));progress?.(++finished,work.length,{uuid:task.entry?.uuid||task.item,path:task.entry?.path});return value;})).then(values=>{audit({kind:dir?'directory':'request',bundle:options.bundle||null,path:typeof request==='string'?request:null,status:'ready',count:values.length});complete?.(null,Array.isArray(request)||options.__outputAsArray__?values:values[0]);},error=>{audit({kind:'failure',status:'error',message:error.message});complete?.(error,null);});
 };
 // The engine's loadDepends recurses directly through pipeline.async, bypassing
 // public loadAny. Prepare exact source-UUID frame/atlas assets before preprocess
 // for Scene/Prefab dependencies as well as dynamic loadDir calls. Opaque texture/image IDs use identity views over the same real asset/GPU;
 // native setProperties sees the original ID while live physical IDs stay intact.
 assetManager.pipeline.insert(function sourceFrameDependencies(task,done){const input=task.input,items=Array.isArray(input)?input:[input],work=[];task.output=input;
  items.forEach(item=>{if(item&&typeof item==='object'&&item.__isNative__||task.options?.__isNative__)return;const uuid=typeof item==='string'?(task.options?.__requestType__&&task.options.__requestType__!=='uuid'?null:item):item?.uuid,entry=uuid&&byUuid.get(uuid);if(entry&&!work.some(e=>e.uuid===entry.uuid)){const frame=entry.type==='cc.SpriteFrame'||entry.type==='cc.SpriteAtlas',mapped=entry.type==='cc.ImageAsset'?entry.texture?.imageMetaUuid:entry.texture?.textureUuid;if(frame||(entry.type==='cc.Texture2D'||entry.type==='cc.ImageAsset')&&(entry.uuid!==mapped||entry.uuid.split('@')[0].length!==36))work.push(entry);}});
  if(!work.length){done();return;}Promise.all(work.map(ensure)).then(()=>{audit({kind:'dependency',status:'ready',count:work.length});done();},error=>{audit({kind:'dependency',status:'error',message:error.message});done(error);});
 },0);
 const repairedAssets=new WeakSet();
 async function restoreStaticReferences(asset){const repairs=(manifest.staticReferences||[]).filter(r=>r.sourceAssetUuid===asset?._uuid);if(!repairs.length||repairedAssets.has(asset))return;const root=asset instanceof Prefab?asset.data:asset instanceof SceneAsset?asset.scene:null;if(!root)throw Error('Original source-reference owner is not a Prefab/Scene '+asset._uuid);
  const nodes=[],components=[];function walk(node){nodes.push(node);(node.components||node._components||[]).forEach(component=>components.push(component));(node.children||node._children||[]).forEach(walk);}walk(root);
  for(const repair of repairs){const frame=await ensureFrame(repair.sourceFrameUuid);if(repair.kind==='component-property'){const candidates=components.filter(component=>component.__prefab?.fileId===repair.componentFileId);if(candidates.length!==1)throw Error('Source component identity is missing/ambiguous '+asset._uuid+' '+repair.componentFileId);const component=candidates[0];if(repair.componentType==='cc.Sprite'&&!(component instanceof Sprite)||repair.componentType==='cc.Button'&&!(component instanceof Button))throw Error('Source component class mismatch '+repair.componentFileId);let owner=component;const keys=repair.propertyPath;for(let i=0;i<keys.length-1;i++){owner=owner[keys[i]];if(!owner)throw Error('Source property owner missing '+repair.componentFileId);}owner[keys[keys.length-1]]=frame;
   }else if(repair.kind==='prefab-instance-property-override'){const candidates=nodes.filter(node=>node.prefab?.instance?.fileId===repair.prefabInstanceFileId);if(candidates.length!==1)throw Error('Source prefab instance identity missing/ambiguous '+repair.prefabInstanceFileId);const node=candidates[0],instance=node.prefab.instance,overrides=instance.propertyOverrides.filter(override=>JSON.stringify(override.targetInfo?.localID)===JSON.stringify(repair.targetLocalId)&&JSON.stringify(override.propertyPath)===JSON.stringify(repair.overridePropertyPath));if(overrides.length!==1)throw Error('Source prefab override identity missing/ambiguous '+repair.prefabInstanceFileId);overrides[0].value=frame;Prefab._utils.applyPropertyOverrides(node,overrides,instance.targetMap);
   }else throw Error('Unknown source reference repair kind');audit({kind:'source-reference',status:'ready',assetUuid:asset._uuid,fileId:repair.componentFileId||repair.prefabInstanceFileId,frameUuid:repair.sourceFrameUuid});
  }if(asset instanceof Prefab)asset._createFunction=null;repairedAssets.add(asset);
 }
 // Creator strips unknown asset properties while building. Restore only exact
 // captured fileId/property references after native deserialization/onLoaded and
 // before the caller can instantiate/activate the Prefab or Scene. No node index
 // guesses and no mutation of source prefab files or their metadata UUIDs.
 assetManager.pipeline.append(function sourcePrefabReferences(task,done){const input=task.input,assets=Array.isArray(input)?input:[input];task.output=input;Promise.all(assets.filter(Boolean).map(restoreStaticReferences)).then(()=>done(),error=>{audit({kind:'source-reference',status:'error',message:error.message});done(error);});});
 // Expose only the owned diagnostic DOM/manifest; no remote/session data.
 Object.defineProperty(proto,'__sourceAssetAliasRuntime',{value:runtime,configurable:true});if(notice)notice.dataset.ready='1';return runtime;
}
