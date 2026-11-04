// Reproducible presentation wrapper for an official Creator GUI Web build.
// Game code, assets, UUIDs and saved wallets are untouched.
const { readFileSync, writeFileSync, existsSync, copyFileSync } = require('node:fs');
const { resolve } = require('node:path');
function prepareRecoveredBuild(directory) {
const root = resolve(directory);
if (!existsSync(resolve(root, 'application.js'))) throw Error('Expected an official Creator Web build');
const file = resolve(root, 'index.html');
// Desktop templates otherwise keep a fixed subframe after a viewport resize.
// Use Creator's browser-window sizing, as its mobile Web template does.
const settingsPath = resolve(root, 'src/settings.json');
const settings = JSON.parse(readFileSync(settingsPath, 'utf8'));
const gameBundles = (settings.assets?.projectBundles || []).filter(name => ['g1005', 'g1007'].includes(name));
if (gameBundles.length !== 1 || !existsSync(resolve(root, 'assets', gameBundles[0], 'config.json'))) {
  throw Error('Select exactly one game Bundle (g1005 or g1007) in the official GUI build configuration.');
}
const bundledGame = gameBundles[0] === 'g1007' ? 'hades' : 'golden-seth';
settings.screen.exactFitScreen = true;
writeFileSync(settingsPath, JSON.stringify(settings, null, 2) + '\n');
let html = readFileSync(file, 'utf8');
copyFileSync(resolve(__dirname, 'frontend-launch.js'), resolve(root, 'frontend-launch.js'));
if (!html.includes('src="./frontend-launch.js"')) {
  html = html.replace('</head>', '<script src="./frontend-launch.js"></script>\n</head>');
}
html = html.replace(/<script(?: data-game="[^"]*")? src="\.\/frontend-launch\.js"><\/script>/,
  `<script data-game="${bundledGame}" src="./frontend-launch.js"></script>`);
copyFileSync(resolve(__dirname, 'frontend-development-bridge.js'), resolve(root, 'frontend-development-bridge.js'));
if (!html.includes('src="./frontend-development-bridge.js"')) {
  html = html.replace('</head>', '<script src="./frontend-development-bridge.js"></script>\n</head>');
}
const id = 'recovered-viewport-wrapper';
if (!html.includes(`id="${id}"`)) {
  html = html.replace('</head>', `<style id="${id}">
html,body{width:100%;height:100%;overflow:hidden;background:#000}
body>.header,body>.footer{display:none}
#GameDiv{position:fixed;inset:0;margin:0;width:100%!important;height:100%!important;border:0;border-radius:0;box-shadow:none}
#Cocos3dGameContainer,#GameCanvas{width:100%;height:100%;touch-action:none}
</style>\n</head>`);
}
writeFileSync(file, html);
const applicationPath = resolve(root, 'application.js');
let application = readFileSync(applicationPath, 'utf8');
if (!application.includes('window.__recoveredLaunch.scene')) {
  const anchor = 'overrideSettings: {';
  if (!application.includes(anchor)) throw Error('Creator launch override anchor missing');
  application = application.replace(anchor, anchor + '\n                launch: { launchScene: window.__recoveredLaunch.scene },');
  writeFileSync(applicationPath, application);
}
console.log('Prepared responsive original-client wrapper:', root);
}
module.exports = { prepareRecoveredBuild };
