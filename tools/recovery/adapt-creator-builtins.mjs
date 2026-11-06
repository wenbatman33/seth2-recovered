#!/usr/bin/env node
// Reuse an installed engine class by identity, preserving the captured Web fallback.
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
const root=path.resolve(process.argv[2]||'');
if(!/^Project-[C-I]$/.test(path.basename(root)))throw Error('Expected new Project-C through Project-I');
const file=path.join(root,'recovery-manifest.json'),manifest=JSON.parse(await fs.readFile(file,'utf8'));
if(manifest.compatibility.engineBuiltinBridge)throw Error('Builtin compatibility already installed');
const module=manifest.modules.find(m=>m.id.endsWith('/debug-view-runtime-control.ts'));
if(!module)throw Error('Expected captured debug-view-runtime-control module');
const sourceFile=path.join(root,module.file),source=await fs.readFile(sourceFile,'utf8');
const start=source.indexOf('_dependency2.cclegacy._RF.push(');
if(start<0||!source.includes('_publish("DebugViewRuntimeControl",'))throw Error('Unexpected original builtin module structure');
const result='import { js as __recoveryEngineJs } from "cc";\n'+source.slice(0,start)+`
// Capability bridge: Creator already registers this engine-owned class.
const __recoveryEngineDebug=__recoveryEngineJs.getClassById('b2bd1+njXxJxaFY3ymm06WU')||__recoveryEngineJs.getClassByName('internal.DebugViewRuntimeControl');
if(__recoveryEngineDebug){_publish('DebugViewRuntimeControl',__recoveryEngineDebug);}else{
`+source.slice(start)+'\n}\n';
await fs.writeFile(sourceFile,result);
const hash=x=>createHash('sha256').update(x).digest('hex');
manifest.compatibility.engineBuiltinBridge={file:module.file,classId:'b2bd1+njXxJxaFY3ymm06WU',sourceSha256:hash(source),adaptedSha256:hash(result),behavior:'Installed engine class when available; original captured implementation otherwise'};
await fs.writeFile(file,JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({project:manifest.project,file:module.file}));
