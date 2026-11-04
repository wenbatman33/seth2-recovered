import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';

const root=process.argv[2]||'research/atg/hades/full-mirror-20261104';
const source=await readFile(join(root,'index.html'),'utf8');
const html=source.replace("System.import('./index.js').catch(function (err) { console.error(err); })", "import('./local-runtime/bridge.mjs').catch(function (err) { console.error(err); })");
await mkdir(join(root,'local-runtime'),{recursive:true});
for(const file of ['bridge.mjs','backend.mjs'])await copyFile(join('tools/hades-original',file),join(root,'local-runtime',file));
await writeFile(join(root,'local.html'),html);
console.log('Prepared original-client diagnostic entry; source capture preserved: '+join(root,'local.html'));
