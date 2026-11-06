#!/usr/bin/env node
// Emit compact runtime addressing data from the public, source-traceable manifest.
// Does not alter image/meta/prefab/scene files or build/deploy anything.
import fs from 'node:fs/promises';import path from 'node:path';import {createHash} from 'node:crypto';
const root=path.resolve(process.argv[2]||'');if(!/^Project-[C-I]$/.test(path.basename(root)))throw Error('Expected an independent Project-C through Project-I root');
const input=path.join(root,'docs/source-asset-alias-manifest.json'),bytes=await fs.readFile(input),source=JSON.parse(bytes);if(source.project!==path.basename(root)||source.unresolved?.length)throw Error('Manifest identity/unresolved inventory mismatch');
const hash=createHash('sha256').update(bytes).digest('hex'),pixels=[],indices=new Map();
function canonical(v){return Array.isArray(v)?v.map(canonical):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])])):v;}
function texture(value){const key=JSON.stringify(canonical(value));if(!indices.has(key)){indices.set(key,pixels.length);pixels.push(value);}return indices.get(key);}
const records=source.frameRecords.map(r=>({uuid:r.uuid,type:r.type,serialized:r.serialized,textureSourceUuid:r.textureSourceUuid,textureIndex:texture(r.texture)})),paths=[];
for(const group of ['frames','atlases','images','textures'])for(const r of source[group]){const item={bundle:r.bundle,path:r.path,uuid:r.uuid,type:r.type,sourceIndex:r.sourceIndex};if(group==='atlases'){item.name=r.name;item.frames=r.frames;}else if(r.texture)item.textureIndex=texture(r.texture);paths.push(item);}
const fields=['sourceAssetUuid','componentFileId','componentType','propertyPath','sourceFrameUuid','kind','prefabInstanceFileId','targetLocalId','overridePropertyPath'];const references=(source.staticReferences||[]).map(r=>Object.fromEntries(Object.entries(r).filter(([key])=>fields.includes(key))));
let code='// @ts-nocheck\n// Original public packed-frame metadata; original pixel files remain unchanged.\n// Complete provenance docs/source-asset-alias-manifest.json SHA256 '+hash+'\n';
code+='const pixelSources='+JSON.stringify(pixels)+';\nconst frameRecords='+JSON.stringify(records)+';\nconst sourcePaths='+JSON.stringify(paths)+';\n';
code+='frameRecords.forEach(record=>{record.texture=pixelSources[record.textureIndex];delete record.textureIndex;});\nsourcePaths.forEach(record=>{if(record.textureIndex!==undefined){record.texture=pixelSources[record.textureIndex];delete record.textureIndex;}});\n';
code+='export const sourceAssetAliasManifest={project:'+JSON.stringify(source.project)+",frameRecords,frames:sourcePaths.filter(r=>r.type==='cc.SpriteFrame'),atlases:sourcePaths.filter(r=>r.type==='cc.SpriteAtlas'),images:sourcePaths.filter(r=>r.type==='cc.ImageAsset'),textures:sourcePaths.filter(r=>r.type==='cc.Texture2D'),staticReferences:"+JSON.stringify(references)+',unresolved:[]};\n';
const output=path.join(root,'assets/shared/bootstrap/source-asset-alias-manifest.ts');let before='';try{before=await fs.readFile(output,'utf8');}catch(error){if(error.code!=='ENOENT')throw error;}if(before!==code)await fs.writeFile(output,code);console.log(JSON.stringify({project:source.project,changed:before!==code,frames:records.length,paths:paths.length,sourceManifestSha256:hash}));
