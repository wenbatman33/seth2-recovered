#!/usr/bin/env node
// Run portable per-game tests serially to keep development load bounded.
import {spawnSync} from 'node:child_process';
import {readdirSync,readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {resolve,dirname,basename} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const collection=resolve(dirname(fileURLToPath(import.meta.url)),'../..');
const requested=process.argv.find(a=>a.startsWith('--projects='))?.slice(11).split(',')||'CDEFGHI'.split('').map(x=>'Project-'+x);
if(requested.some(p=>!/^Project-[C-I]$/.test(p)))throw Error('Choose Project-C through Project-I');
const output=process.argv.indexOf('--report'),report={scope:'portable source/backend consumer tests; not UI, audio or original-server acceptance',projects:[]};
let failures=0;
for(const project of requested){
 const root=resolve(collection,project),directory=resolve(root,'tests'),entry={project,tests:[]};
 for(const name of readdirSync(directory).filter(n=>/^test-.*\.mjs$/.test(n)).sort()){
  const file=resolve(directory,name),result=spawnSync(process.execPath,['--experimental-vm-modules',file],{cwd:collection,encoding:'utf8',maxBuffer:4*1024*1024});
  const lines=result.stdout?.trim().split('\n')||[];let summary;for(const line of lines.toReversed()){try{summary=JSON.parse(line);break;}catch{}}
  const test={file:project+'/tests/'+name,sha256:createHash('sha256').update(readFileSync(file)).digest('hex'),exitCode:result.status,summary};entry.tests.push(test);
  if(result.status!==0){failures++;process.stderr.write(project+'/'+name+' failed\n'+(result.stderr||'')+'\n'+(result.stdout||''));}
 }
 report.projects.push(entry);console.log(project+': '+entry.tests.length+' portable test files, '+entry.tests.filter(t=>t.exitCode!==0).length+' failures');
}
report.failures=failures;
if(output>=0){const file=resolve(process.argv[output+1]);mkdirSync(dirname(file),{recursive:true});writeFileSync(file,JSON.stringify(report,null,2)+'\n');}
process.exitCode=failures?1:0;
