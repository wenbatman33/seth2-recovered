import {readdirSync,readFileSync,existsSync} from 'node:fs';
import {join,resolve,dirname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {execFileSync} from 'node:child_process';

function files(root,prefix=''){
  return readdirSync(join(root,prefix),{withFileTypes:true}).flatMap(entry=>{
    const name=prefix?prefix+'/'+entry.name:entry.name;
    if(entry.isSymbolicLink())throw Error('Symlink in static release: '+name);
    return entry.isDirectory()?files(root,name):[name];
  });
}
export function checkPagesRelease(site,gitDirectory){
  const expected=files(site).sort();
  const tracked=execFileSync('git',['--git-dir='+resolve(gitDirectory),'--work-tree='+resolve(site),'ls-files','-z'],{encoding:'utf8'}).split('\0').filter(Boolean).sort();
  const trackedSet=new Set(tracked),expectedSet=new Set(expected);
  const missing=expected.filter(name=>!trackedSet.has(name)),extra=tracked.filter(name=>!expectedSet.has(name));
  if(missing.length||extra.length)throw Error('Static release differs from the packaged site. Missing: '+missing.join(', ')+'; extra: '+extra.join(', '));
  const manifest=JSON.parse(readFileSync(join(site,'.pages-package.json'),'utf8'));
  for(const project of manifest.projects)for(const file of ['index.html','application.js','src/settings.json',`assets/${project.bundle}/config.json`]){
    const name=project.project+'/'+file;
    if(!existsSync(join(site,name))||!trackedSet.has(name))throw Error('Required game file missing from release: '+name);
  }
  return {files:expected.length,projects:manifest.projects.length};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){
  const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
  console.log('PASS complete static release:',checkPagesRelease(join(root,'.cache/pages/site'),join(root,'.cache/pages/deploy.git')));
}
