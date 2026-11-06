// @ts-nocheck
import {getOwnedBonusPoolAmounts} from './BonusRules';
/** I source jpDefs are MINI/MINOR stake multipliers; MAJOR/GRAND are filled
 * through native setJackpotValue({data:pools}). Preserve the two contracts. */
export function installOwnedJackpotDisplay(JpBarView,options={}){const p=JpBarView.prototype;if(p.__projectIOwnJackpotDisplay)return;const init=p.init,stake=p.setMiniMajorValue;
 function apply(view){const runtime=options.getRuntime?.()||globalThis.globalProjectI;if(runtime?.project!=='Project-I'||options.isReplay?.())return;const pools=getOwnedBonusPoolAmounts(runtime.getBackend().options.bonusConfig||{});view.setJackpotValue({data:pools});if(typeof document!=='undefined'){const notice=document.getElementById('ProjectILocalRuntimeBoundary');if(notice){notice.dataset.jpPools=JSON.stringify(pools);notice.dataset.jpPoolScope='own-local';}}}
 p.init=function(){const result=init.apply(this,arguments);apply(this);return result;};p.setMiniMajorValue=function(){const result=stake.apply(this,arguments);apply(this);return result;};Object.defineProperty(p,'__projectIOwnJackpotDisplay',{value:true,configurable:true});
}
