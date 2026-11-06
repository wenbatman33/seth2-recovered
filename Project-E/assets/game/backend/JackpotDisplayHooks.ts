// @ts-nocheck
/** The local initial notification precedes native GameView creation. Read the
 * same owned notification lazily; keep native amount formatting and rotation. */
export function installOwnedJackpotDisplay(JpBarView,options={}){const p=JpBarView.prototype;if(p.__projectEOwnJackpotDisplay)return;const init=p.init,update=p.updateJPNumber;
 function apply(view,refresh=false){const runtime=options.getRuntime?.()||globalThis.globalProjectE;if(runtime?.project!=='Project-E'||options.isReplay?.())return;const notification=runtime.getBackend().jackpotNotification();view.setJackpotValue(notification);if(refresh&&typeof update==='function')update.call(view);if(typeof document!=='undefined'){const notice=document.getElementById('ProjectELocalRuntimeBoundary');if(notice){notice.dataset.jpPools=JSON.stringify(notification.data);notice.dataset.jpPoolScope='own-local';}}}
 p.init=function(){const view=this,result=init.apply(this,arguments);return Promise.resolve(result).then(value=>{apply(view,true);return value;});};if(typeof update==='function')p.updateJPNumber=function(){apply(this);return update.apply(this,arguments);};Object.defineProperty(p,'__projectEOwnJackpotDisplay',{value:true,configurable:true});
}
