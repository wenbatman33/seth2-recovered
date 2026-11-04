import {mkdtempSync,mkdirSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
import {checkPagesRelease} from '../tools/check-pages-release.mjs';
const root=mkdtempSync(join(tmpdir(),'pages-release-'));
try{
  const site=join(root,'site'),git=join(root,'release.git'),ignore=join(root,'global-ignore');
  mkdirSync(join(site,'Project-A/src'),{recursive:true});mkdirSync(join(site,'Project-A/assets/g1005'),{recursive:true});
  for(const file of ['index.html','Project-A/index.html','Project-A/application.js','Project-A/src/settings.json','Project-A/assets/g1005/config.json'])writeFileSync(join(site,file),'{}');
  writeFileSync(join(site,'.pages-package.json'),JSON.stringify({projects:[{project:'Project-A',bundle:'g1005'}]}));
  writeFileSync(ignore,'settings.json\n');
  execFileSync('git',['init','--bare',git],{stdio:'ignore'});
  const args=['--git-dir='+git,'--work-tree='+site];
  execFileSync('git',[...args,'config','core.excludesFile',ignore]);
  execFileSync('git',[...args,'add','--all']);
  assert.throws(()=>checkPagesRelease(site,git),/Missing: Project-A\/src\/settings.json/);
  execFileSync('git',[...args,'add','--force','--all']);
  assert.equal(checkPagesRelease(site,git).files,6);
  console.log('PASS release completeness catches global-ignore omissions and verifies forced static staging');
}finally{rmSync(root,{recursive:true,force:true});}
