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
 document.documentElement.dataset.gameLayout=mode;
})();
