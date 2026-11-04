// Official GUI post-build configuration; original engine/assets are untouched.
const fs=require('node:fs'),path=require('node:path');
function prepareRecoveredBuild(directory){
 const root=path.resolve(directory),project=path.resolve(__dirname,'..');
 const own=JSON.parse(fs.readFileSync(path.join(project,'game.config.json'),'utf8'));
 const catalog=JSON.parse(fs.readFileSync(path.join(__dirname,'browser-game-catalog.json'),'utf8'));
 if(!fs.existsSync(path.join(root,'application.js')))throw Error('Expected official Creator GUI Web build');
 const settingsFile=path.join(root,'src/settings.json'),settings=JSON.parse(fs.readFileSync(settingsFile,'utf8'));
 const included=(settings.assets?.projectBundles||[]).filter(b=>catalog.some(g=>g.bundle===b));
 if(included.length!==1||included[0]!==own.bundle||!fs.existsSync(path.join(root,'assets',own.bundle,'config.json')))throw Error('Build must contain this project game Bundle: '+own.bundle);
 settings.screen.exactFitScreen=true;fs.writeFileSync(settingsFile,JSON.stringify(settings,null,2)+'\n');
 for(const file of ['frontend-launch.js','frontend-development-bridge.js'])fs.copyFileSync(path.join(__dirname,file),path.join(root,file));
 fs.writeFileSync(path.join(root,'frontend-game-config.js'),'window.__recoveredCatalog = '+JSON.stringify(catalog)+';\n');
 const htmlPath=path.join(root,'index.html');let html=fs.readFileSync(htmlPath,'utf8');
 html=html.replace(/<script[^>]*src="\.\/frontend-(?:game-config|launch|development-bridge)\.js"[^>]*><\/script>\s*/g,'');
 html=html.replace('</head>','<script src="./frontend-game-config.js"></script>\n<script data-game="'+own.gn+'" src="./frontend-launch.js"></script>\n<script src="./frontend-development-bridge.js"></script>\n</head>');
 if(!html.includes('id="recovered-viewport-wrapper"'))html=html.replace('</head>','<style id="recovered-viewport-wrapper">html,body{width:100%;height:100%;overflow:hidden;background:#000}body>.header,body>.footer{display:none}#GameDiv{position:fixed;inset:0;margin:0;width:100%!important;height:100%!important;border:0;border-radius:0;box-shadow:none}#Cocos3dGameContainer,#GameCanvas{width:100%;height:100%;touch-action:none}</style></head>');
 fs.writeFileSync(htmlPath,html);
 const appPath=path.join(root,'application.js');let app=fs.readFileSync(appPath,'utf8');
 if(!app.includes('window.__recoveredLaunch.scene')){if(!app.includes('overrideSettings: {'))throw Error('Creator launch override anchor missing');app=app.replace('overrideSettings: {','overrideSettings: {\n launch: {launchScene:window.__recoveredLaunch.scene},');fs.writeFileSync(appPath,app);}
 console.log('Prepared '+own.title+': '+root);
}
module.exports={prepareRecoveredBuild};
