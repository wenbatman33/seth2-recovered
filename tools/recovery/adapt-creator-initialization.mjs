#!/usr/bin/env node
// Explicit compatibility for Creator's unordered Editor prerequisite imports.
import fs from 'node:fs/promises';
import path from 'node:path';
import {randomUUID,createHash} from 'node:crypto';
const root=path.resolve(process.argv[2]||'');
if(!/^Project-[C-I]$/.test(path.basename(root)))throw Error('Expected a newly assembled Project-C through Project-I');
const manifestFile=path.join(root,'recovery-manifest.json'),manifest=JSON.parse(await fs.readFile(manifestFile,'utf8'));
if(manifest.compatibility.creatorInitialization)throw Error('Initialization compatibility already installed');
const hash=body=>createHash('sha256').update(body).digest('hex');
const modules=manifest.modules,app=modules.find(m=>m.bundle==='main'&&m.id.endsWith('/Application.ts'));
if(!app)throw Error('No original Application module');
const extensionsPath=path.join(manifest.capture.directory,'src/assets/scripts/framework/plugin/Extentions.js');
const extensions=await fs.readFile(extensionsPath,'utf8');
const helper=path.join(root,'assets/shared/bootstrap/editor-globals.ts');await fs.mkdir(path.dirname(helper),{recursive:true});
const code=`// @ts-nocheck
// Original extension helpers are required by the Editor singleton logger too.
// Captured Extentions.js SHA256: ${hash(extensions)}
import { EDITOR } from 'cc/env';
if(EDITOR){
${extensions}
}
`;
await fs.writeFile(helper,code,{flag:'wx'});
await fs.writeFile(helper+'.meta',JSON.stringify({ver:'4.0.24',importer:'typescript',imported:false,uuid:randomUUID(),files:[],subMetas:{},userData:{isPlugin:false}},null,2)+'\n',{flag:'wx'});
const changes=[];
async function update(module,mutate,reason){
 const file=path.join(root,module.file),old=await fs.readFile(file,'utf8'),next=mutate(old);
 if(old===next)throw Error('Compatibility anchor was not changed: '+module.id);
 await fs.writeFile(file,next);changes.push({file:module.file,reason,sourceSha256:hash(old),adaptedSha256:hash(next)});
}
await update(app,old=>'import "../bootstrap/editor-globals";\n'+old,'Original Log/Date/String extension helpers before singleton initialization in Editor');
for(const module of modules.filter(m=>/\/(?:GameEntry|WrapperEntry|SlotFrameworkEntry)\.ts$/.test(m.id))){
 let relative=path.relative(path.dirname(path.join(root,module.file)),path.join(root,app.file)).split(path.sep).join('/').replace(/\.ts$/,'');if(!relative.startsWith('.'))relative='./'+relative;
 await update(module,old=>'import '+JSON.stringify(relative)+';\n'+old,'Declare Application dependency before registerEntry decorator');
}
const utils=modules.find(m=>m.bundle==='main'&&m.id.endsWith('/CmmUtils.ts'));
await update(utils,old=>old.replace('return crypto.randomUUID().replace(/-/g, "").slice(0, 24);',`// Editor's packages: origin does not always expose randomUUID.
    if(typeof crypto!=='undefined'&&typeof crypto.randomUUID==='function')return crypto.randomUUID().replace(/-/g, "").slice(0,24);
    const bytes=new Uint8Array(12);
    if(typeof crypto!=='undefined'&&typeof crypto.getRandomValues==='function'){crypto.getRandomValues(bytes);return Array.from(bytes,v=>v.toString(16).padStart(2,'0')).join('');}
    throw new Error('Web Crypto is required for internal state identifiers');`),'Use existing Web Crypto getRandomValues for internal state IDs when randomUUID is absent');
manifest.compatibility.creatorInitialization={extensionsSha256:hash(extensions),changes,validation:'Requires Editor reload and runtime verification; original gameplay is unchanged'};
await fs.writeFile(manifestFile,JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({project:manifest.project,changed:changes.length}));
