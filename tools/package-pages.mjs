import {cpSync,existsSync,mkdirSync,mkdtempSync,readFileSync,renameSync,rmSync,writeFileSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';

const collectionRoot=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const digest=file=>createHash('sha256').update(readFileSync(file)).digest('hex');
const readJson=file=>JSON.parse(readFileSync(file,'utf8'));

// Package already verified official GUI builds. This never compiles or regenerates assets.
export function packagePages(root=collectionRoot,output=join(root,'.cache/pages/site'),{preview=false}={}){
  root=resolve(root);output=resolve(output);
  const cache=join(root,'.cache/pages');
  if(!output.startsWith(cache+'/'))throw Error('Pages output must stay inside .cache/pages/');
  const homepage=readFileSync(join(root,'index.html'),'utf8');
  const folders=readJson(join(root,'games.json')).projects.filter(folder=>!preview||homepage.includes(`href="./${folder}/"`));
  if(!folders.length)throw Error('No enabled games to package');
  const catalog=folders.map(folder=>{
    if(!/^[A-Za-z0-9_-]+$/.test(folder))throw Error('Invalid public project directory');
    const game=readJson(join(root,folder,'game.config.json'));
    const build=resolve(root,folder,game.buildDirectory);
    if(!build.startsWith(join(root,folder)+'/'))throw Error('Invalid build path');
    for(const file of ['index.html','application.js','src/settings.json','frontend-launch.js',`assets/${game.bundle}/config.json`]){
      if(!existsSync(join(build,file)))throw Error(`Missing official GUI build: ${folder}/${file}`);
    }
    const settings=readJson(join(build,'src/settings.json'));
    const gameBundles=(settings.assets?.projectBundles||[]).filter(name=>/^g\d+$/.test(name));
    if(gameBundles.length!==1||gameBundles[0]!==game.bundle)throw Error('Unexpected game bundle: '+folder);
    // Public directory IDs are neutral; GN and original bundle identity remain unchanged.
    return {folder,build,publicConfig:{...game,id:folder,title:folder}};
  });
  if(existsSync(output)&&!existsSync(join(output,'.pages-package.json')))throw Error('Refusing to replace an unrecognized output directory');
  mkdirSync(dirname(output),{recursive:true});
  const staging=mkdtempSync(join(dirname(output),'.site-'));
  try{
    cpSync(join(root,'index.html'),join(staging,'index.html'));
    writeFileSync(join(staging,'.nojekyll'),'');
    writeFileSync(join(staging,'robots.txt'),'User-agent: *\nDisallow: /\n');
    const publicCatalog=catalog.map(game=>game.publicConfig);
    const manifest={format:1,projects:[]};
    for(const game of catalog){
      const destination=join(staging,game.folder);
      cpSync(game.build,destination,{recursive:true});
      writeFileSync(join(destination,'frontend-game-config.js'),'window.__recoveredCatalog = '+JSON.stringify(publicCatalog)+';\n');
      const htmlPath=join(destination,'index.html');let html=readFileSync(htmlPath,'utf8');
      if(!html.includes('name="robots"'))html=html.replace('</head>','<meta name="robots" content="noindex,nofollow,noarchive">\n</head>');
      writeFileSync(htmlPath,html);
      manifest.projects.push({project:game.folder,bundle:game.publicConfig.bundle,applicationSha256:digest(join(destination,'application.js')),settingsSha256:digest(join(destination,'src/settings.json'))});
    }
    writeFileSync(join(staging,'.pages-package.json'),JSON.stringify(manifest,null,2)+'\n');
    if(existsSync(output))rmSync(output,{recursive:true});
    renameSync(staging,output);
    return {output,manifest};
  }catch(error){rmSync(staging,{recursive:true,force:true});throw error;}
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){
  const result=packagePages(collectionRoot,join(collectionRoot,'.cache/pages/site'),{preview:process.argv.includes('--preview')});console.log('Packaged '+result.manifest.projects.length+' official GUI builds: '+result.output);
}
