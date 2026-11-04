import {readFileSync,existsSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
export const collectionRoot=resolve(dirname(fileURLToPath(import.meta.url)),'..');
export function loadGames(){
 const index=JSON.parse(readFileSync(resolve(collectionRoot,'games.json'),'utf8'));
 let names={};try{names=JSON.parse(readFileSync(resolve(collectionRoot,'.local-game-names.json'),'utf8'));}catch{}
 return index.projects.map(folder=>{const projectRoot=resolve(collectionRoot,folder),game=JSON.parse(readFileSync(resolve(projectRoot,'game.config.json'),'utf8'));return {...game,folder,projectRoot,displayTitle:names[folder]||game.title,root:resolve(projectRoot,game.buildDirectory),available:existsSync(resolve(projectRoot,game.buildDirectory,'index.html'))};});
}
