// Bounded, DOM-visible diagnostics for first-load errors in this owned preview.
(() => {
 const errors=[];
 function record(message){const text=String(message).slice(0,3500);if(errors.some(item=>item.message===text)||errors.length>=24)return;errors.push({message:text,time:new Date().toISOString()});document.documentElement.dataset.recoveryErrors=JSON.stringify(errors);}
 const originalError=console.error;console.error=function(...args){record(args.map(value=>value?.stack||String(value)).join(' '));return originalError.apply(this,args);};
 window.addEventListener('error',event=>record(event.error?.stack||event.message));
 window.addEventListener('unhandledrejection',event=>record(event.reason?.stack||event.reason));
})();
// Select the independently built game's original desktop/mobile scene.
(() => {
 const catalog=window.__recoveredCatalog;
 const url=new URL(location.href),own=catalog.find(g=>g.gn===document.currentScript.dataset.game);
 if(!own)throw Error('Missing local game configuration');
 const requested=catalog.find(g=>g.gn===url.searchParams.get('gn'))||own;
 if(requested.id!==own.id){const target=new URL('../'+requested.id+'/',url);target.search=url.search;target.searchParams.delete('gt');location.replace(target.href);return;}
 url.searchParams.set('gn',own.gn);
 const explicit=url.searchParams.get('view_mode'),layout=url.searchParams.get('layout');
 let mode=['landscape','portrait'].includes(explicit)?explicit:layout==='desktop'?'landscape':layout==='mobile'?'portrait':innerWidth>=800?'landscape':'portrait';
 if(!own.scenes[mode])mode=own.defaultMode;
 url.searchParams.set('view_mode',mode);history.replaceState(history.state,'',url);
 window.__recoveredLaunch={viewMode:mode,scene:own.scenes[mode].url};
 const segments=url.pathname.split('/'),folderIndex=Math.max(segments.lastIndexOf(own.project),segments.lastIndexOf(own.id));
 const menu=folderIndex>0?new URL(segments.slice(0,folderIndex).join('/')+'/',url.origin):new URL('./',url);
 menu.search='';menu.hash='';window.__recoveredLaunch.menuUrl=menu.href;
 url.searchParams.set('goback_url',menu.href);history.replaceState(history.state,'',url);
 window.viewMode=mode; // Match original model paths to the actually selected scene/layout.
 document.documentElement.dataset.gameLayout=mode;
})();
