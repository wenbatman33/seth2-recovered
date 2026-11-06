import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,existsSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {runInNewContext} from 'node:vm';
import {packagePages} from '../tools/package-pages.mjs';

const root=mkdtempSync(join(tmpdir(),'pages-package-'));
try{
  writeFileSync(join(root,'games.json'),JSON.stringify({projects:['Project-A','Project-B']}));
  writeFileSync(join(root,'index.html'),'<title>Game menu</title><a href="./Project-A/">Project-A</a>');
  for(const [folder,bundle,gn] of [['Project-A','g1005','golden-seth'],['Project-B','g1007','hades']]){
    const build=join(root,folder,'build/web');mkdirSync(join(build,'src'),{recursive:true});mkdirSync(join(build,'assets',bundle),{recursive:true});
    writeFileSync(join(root,folder,'game.config.json'),JSON.stringify({id:bundle,title:folder,bundle,gn,buildDirectory:'build/web',scenes:{landscape:{url:'db://assets/scenes/Game.scene'}},defaultMode:'landscape'}));
    writeFileSync(join(build,'index.html'),'<head></head>');writeFileSync(join(build,'application.js'),'original application');writeFileSync(join(build,'frontend-launch.js'),'original launcher');
    writeFileSync(join(build,'src/settings.json'),JSON.stringify({assets:{projectBundles:['main',bundle]}}));writeFileSync(join(build,'assets',bundle,'config.json'),'{}');
  }
  const {output}=packagePages(root);
  assert.ok(existsSync(join(output,'.nojekyll')));assert.ok(existsSync(join(output,'robots.txt')));assert.ok(!existsSync(join(output,'README.md')));
  const catalogContext={window:{}};runInNewContext(readFileSync(join(output,'Project-A/frontend-game-config.js'),'utf8'),catalogContext);
  const catalog=catalogContext.window.__recoveredCatalog;
  assert.deepEqual(Array.from(catalog,g=>g.id),['Project-A','Project-B']);
  assert.equal(readFileSync(join(output,'Project-A/application.js'),'utf8'),'original application');
  assert.equal(readFileSync(join(root,'Project-A/build/web/index.html'),'utf8'),'<head></head>');
  assert.match(readFileSync(join(output,'Project-A/index.html'),'utf8'),/noindex,nofollow,noarchive/);
  // Preserve the repository prefix when an original client requests the other game.
  for(const [own,requested,path] of [['golden-seth','hades','Project-A'],['hades','golden-seth','Project-B']]){
    let target;runInNewContext(readFileSync(new URL('../Project-A/tools/frontend-launch.js',import.meta.url),'utf8'),{
      URL,window:{__recoveredCatalog:catalog},document:{currentScript:{dataset:{game:own}}},
      location:{href:'https://example.github.io/collection/'+path+'/?gn='+requested,replace(url){target=new URL(url);}}
    });assert.equal(target.pathname,'/collection/'+(path==='Project-A'?'Project-B':'Project-A')+'/');
  }
  packagePages(root); // Recognized generated output can be refreshed.
  const preview=packagePages(root,join(root,'.cache/pages/preview'),{preview:true});
  assert.deepEqual(preview.manifest.projects.map(project=>project.project),['Project-A']);
  assert.ok(!existsSync(join(preview.output,'Project-B')),'Disabled games must not be published in an interim preview');
  assert.throws(()=>packagePages(root,join(root,'Project-A')),/must stay inside/);
  rmSync(join(root,'Project-B/build/web/application.js'));
  assert.throws(()=>packagePages(root),/Missing official GUI build/);assert.ok(existsSync(join(output,'Project-A/application.js')),'A failed package must preserve the last valid output');
  console.log('PASS Pages build packaging, neutral routes, repository prefix, source preservation and missing-build failure');
}finally{rmSync(root,{recursive:true,force:true});}
