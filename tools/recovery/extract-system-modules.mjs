#!/usr/bin/env node
// Pure static capture: never evaluates a bundle or modifies installed assets.
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {parse} from '@babel/parser';
import traverseModule from '@babel/traverse';
const traverse=traverseModule.default;
export const sha256=value=>createHash('sha256').update(value).digest('hex');
export function containedFile(root,relative){
  if(typeof relative!=='string'||!relative||path.isAbsolute(relative)||relative.includes('\\'))throw Error('Unsafe relative path: '+relative);
  const target=path.resolve(root,relative),rel=path.relative(path.resolve(root),target);
  if(rel==='..'||rel.startsWith('..'+path.sep)||!rel)throw Error('Path escapes output root: '+relative);
  return target;
}
export function moduleFilename(id,index,extension='js'){
  if(typeof id!=='string'||!id||id.includes('\\')||id.includes('\0'))throw Error('Invalid module identity');
  let decoded;
  try{decoded=decodeURIComponent(id);}catch{throw Error('Invalid escaped module identity: '+id);}
  if(decoded.split('/').includes('..'))throw Error('Unsafe module identity: '+id);
  const basename=path.posix.basename(decoded).replace(/\.(?:ts|js)$/,'').replace(/[^a-zA-Z0-9_-]/g,'_').slice(0,80)||'module';
  return `${String(index).padStart(5,'0')}-${basename}-${sha256(id).slice(0,12)}.${extension}`;
}
export function extractModules(source){
  const ast=parse(source,{sourceType:'script'}),modules=[],seen=new Set(),skipped=[];
  traverse(ast,{CallExpression(p){
    const n=p.node,c=n.callee;
    if(c.type!=='MemberExpression'||c.computed||c.object.type!=='Identifier'||c.object.name!=='System'||c.property.name!=='register')return;
    if(n.arguments[0]?.type!=='StringLiteral'){skipped.push({reason:'anonymous System.register wrapper',start:n.start,end:n.end,sha256:sha256(source.slice(n.start,n.end))});return;}
    const id=n.arguments[0].value;
    if(seen.has(id))throw Error('Duplicate module identity: '+id);
    seen.add(id);
    const file=moduleFilename(id,modules.length),code=source.slice(n.start,n.end)+';\n';
    modules.push({id,file,start:n.start,end:n.end,sha256:sha256(code),code});
  }});
  modules.skipped=skipped;return modules;
}
export async function extractBundle(input,output){
  const source=await fs.readFile(input,'utf8'),modules=extractModules(source),root=path.resolve(output);
  // mkdir without recursive deliberately fails if output already exists.
  await fs.mkdir(root);
  const bundle=path.basename(path.dirname(path.resolve(input)));
  for(const item of modules)await fs.writeFile(containedFile(root,item.file),item.code,{flag:'wx'});
  const manifest={version:1,bundle,source:{file:path.resolve(input),sha256:sha256(source)},skipped:modules.skipped,modules:modules.map(({code,...item})=>({...item,bundle}))};
  await fs.writeFile(containedFile(root,'manifest.json'),JSON.stringify(manifest,null,2)+'\n',{flag:'wx'});
  return manifest;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
  if(process.argv.length!==4){console.error('Usage: extract-system-modules.mjs <bundle-file> <new-output-dir>');process.exitCode=1;}
  else try{const result=await extractBundle(process.argv[2],process.argv[3]);console.log(JSON.stringify({modules:result.modules.length,output:path.resolve(process.argv[3])}));}catch(error){console.error(error.message);process.exitCode=1;}
}
