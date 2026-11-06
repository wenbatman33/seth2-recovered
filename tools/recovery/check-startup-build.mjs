#!/usr/bin/env node
// Inspect the actual canonical GUI output; source configuration is not evidence
// that Creator applied release mode or custom-bundle JSON packing.
import {readFile,readdir,writeFile,mkdir} from 'node:fs/promises';
import {resolve,dirname,relative,join} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {decodeUuid} from './capture-cocos-client.mjs';
const collection=resolve(dirname(fileURLToPath(import.meta.url)),'../..');
const json=async file=>JSON.parse(await readFile(file,'utf8'));
const digest=body=>createHash('sha256').update(body).digest('hex');
async function importFiles(directory){const files=[];let entries;try{entries=await readdir(directory,{withFileTypes:true});}catch(error){if(error.code==='ENOENT')return files;throw error;}for(const entry of entries){const file=join(directory,entry.name);if(entry.isSymbolicLink())throw Error('Unexpected import symlink: '+file);if(entry.isDirectory())files.push(...await importFiles(file));else if(entry.isFile())files.push(file);}return files;}
function safeName(name){if(typeof name!=='string'||!/^[-A-Za-z0-9_]+$/.test(name))throw Error('Invalid built bundle name');return name;}
export async function checkStartupBuild(projectRoot){const root=resolve(projectRoot),build=resolve(root,'build/web'),settingsFile=join(build,'src/settings.json'),settingsBody=await readFile(settingsFile),settings=JSON.parse(settingsBody);
 if(settings.engine?.debug!==false)throw Error('Actual canonical settings.engine.debug must be false; rebuild in official Creator release mode');
 const listed=settings.assets?.projectBundles;if(!Array.isArray(listed)||!listed.length||new Set(listed).size!==listed.length)throw Error('Actual projectBundles is missing, empty or duplicated');listed.forEach(safeName);
 const expected=(await json(join(root,'build-config.json'))).bundleConfigs?.filter(item=>item.output===true).map(item=>safeName(item.name))||[];for(const name of expected)if(!listed.includes(name))throw Error('Actual settings is missing configured output bundle '+name);
 const reports=[];for(const name of listed){const directory=join(build,'assets',name),configFile=join(directory,'config.json');let body;try{body=await readFile(configFile);}catch(error){throw Error('Actual bundle/config is absent: '+name,{cause:error});}const config=JSON.parse(body);if(config.name!==name)throw Error('Actual bundle identity mismatch: '+name);
  const packKeys=Object.keys(config.packs||{});if(packKeys.length>1)throw Error('Actual '+name+' still has '+packKeys.length+' import packs; custom JSON merging was not applied');
  const importBase=config.importBase||'import';if(importBase!=='import')throw Error('Unsupported canonical import directory for '+name);
  const files=await importFiles(join(directory,importBase)),imports=files.filter(file=>file.endsWith('.json')),other=files.filter(file=>!file.endsWith('.json'));if(imports.length>1)throw Error('Actual '+name+' still has '+imports.length+' import JSON files; rebuild with merge_all_json');
  // CCON assets retain declared binary companions after all JSON is merged.
  // They are not extra JSON packs; accept only exact config-indexed identities.
  const binaryPaths=new Set();for(const index of config.extensionMap?.['.cconb']||[]){const uuid=decodeUuid(config.uuids[index]);for(const extension of ['.bin','.cconb'])binaryPaths.add(join(directory,importBase,uuid.slice(0,2),uuid+extension));}for(const file of other)if(!binaryPaths.has(file))throw Error('Undeclared non-JSON import payload for '+name+'; packing needs explicit verification');
  let packFile=null;if(packKeys.length){const key=packKeys[0];if(!/^[-A-Za-z0-9_@]+$/.test(key))throw Error('Unsupported canonical pack ID '+name);packFile=join(directory,importBase,key.slice(0,2),key+'.json');if(!imports.includes(packFile))throw Error('Declared merged pack is absent from actual '+name+' import output');}
  const payloads=[];for(const file of imports){const payload=await readFile(file);JSON.parse(payload);payloads.push({path:relative(root,file).split('\\').join('/'),bytes:payload.length,sha256:digest(payload)});}
  reports.push({bundle:name,configPath:relative(root,configFile).split('\\').join('/'),configSha256:digest(body),packCount:packKeys.length,importJsonCount:imports.length,declaredBinaryCompanions:other.map(file=>relative(root,file).split('\\').join('/')),importBytes:payloads.reduce((sum,item)=>sum+item.bytes,0),imports:payloads});
 }
 return{project:root.split(/[\\/]/).at(-1),status:'actual canonical release/merged-import output verified',observedAt:new Date().toISOString(),buildDirectory:'build/web',engineDebug:settings.engine.debug,settingsSha256:digest(settingsBody),bundles:reports,totalImportJsonFiles:reports.reduce((sum,item)=>sum+item.importJsonCount,0),gameplayVerified:false,imageByteIdentityVerified:false,sourceAssetsModifiedByVerifier:false};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){const args=process.argv.slice(2),name=args[0];if(!name||!/^Project-[A-Z]+$/.test(name))throw Error('Usage: check-startup-build.mjs Project-X [--report path]');const result=await checkStartupBuild(resolve(collection,name)),at=args.indexOf('--report');if(at>=0){if(!args[at+1])throw Error('Missing report path');const file=resolve(args[at+1]);await mkdir(dirname(file),{recursive:true});await writeFile(file,JSON.stringify(result,null,2)+'\n');}console.log(JSON.stringify(result,null,2));}
