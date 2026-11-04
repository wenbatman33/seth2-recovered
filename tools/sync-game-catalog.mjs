import {readFileSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {collectionRoot,loadGames} from './project-registry.mjs';
const entries=JSON.parse(readFileSync(resolve(collectionRoot,'games.json'),'utf8')).projects;
const catalog=entries.map(p=>JSON.parse(readFileSync(resolve(collectionRoot,p,'game.config.json'),'utf8')));
const ids=new Set(),bundles=new Set();for(const game of catalog){if(ids.has(game.id)||bundles.has(game.bundle))throw Error('Duplicate game id or bundle');ids.add(game.id);bundles.add(game.bundle);}
for(const project of entries)writeFileSync(resolve(collectionRoot,project,'tools/browser-game-catalog.json'),JSON.stringify(catalog,null,2)+'\n');
console.log('Updated independent project catalogs:',entries.join(', '));
