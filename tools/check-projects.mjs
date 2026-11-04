import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {resolve,join,dirname} from 'node:path';
import assert from 'node:assert/strict';
import {loadGames,collectionRoot} from './project-registry.mjs';
function files(root){return readdirSync(root,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(join(root,e.name)):[join(root,e.name)]);}
const projectIds=new Set();
for(const game of loadGames()){
 const pkg=JSON.parse(readFileSync(join(game.projectRoot,'package.json'),'utf8'));assert.equal(pkg.creator.version,'3.8.8');assert.ok(!projectIds.has(pkg.uuid));projectIds.add(pkg.uuid);
 const metaIds=new Set();let imports=0;
 for(const file of files(join(game.projectRoot,'assets'))){
  if(file.endsWith('.meta')){const meta=JSON.parse(readFileSync(file,'utf8'));assert.ok(!metaIds.has(meta.uuid),'Duplicate UUID: '+file);metaIds.add(meta.uuid);}
  if(file.endsWith('.ts'))for(const match of readFileSync(file,'utf8').matchAll(/(?:from\s*|import\s*)["'](\.[^"']+)["']/g)){
   const target=resolve(dirname(file),match[1]);assert.ok([target,target+'.ts',target+'.js'].some(existsSync),'Missing relative import: '+file+' -> '+match[1]);assert.ok(target.startsWith(game.projectRoot+'/'),'Cross-project source dependency: '+file);imports++;
  }
 }
 const build=JSON.parse(readFileSync(join(game.projectRoot,'build-config.json'),'utf8'));const bundles=build.bundleConfigs.filter(b=>/^g\d+$/.test(b.name));assert.equal(bundles.length,1);assert.equal(bundles[0].name,game.bundle);
 for(const scene of Object.values(game.scenes)){const meta=JSON.parse(readFileSync(join(game.projectRoot,scene.url.replace('db://','')+'.meta'),'utf8'));assert.equal(scene.uuid,meta.uuid);}
 console.log(game.folder+': independent project, '+metaIds.size+' unique asset metadata IDs, '+imports+' local module imports');
}
for(const file of ['README.md','Project-A/README.md','Project-B/README.md'])assert.ok(!/戰神賽特|古神巴風特|Baphomet|Seth2/i.test(readFileSync(join(collectionRoot,file),'utf8')),'Public README exposes a formal title: '+file);
console.log('PASS independent projects, scene/bundle configuration and neutral public naming');
