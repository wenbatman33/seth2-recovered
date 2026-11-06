// @ts-nocheck
// Local-only persisted cursor adapter. Original parsing and state machines remain.
export function installProgressHooks(GameData,runtime){
 const proto=GameData.prototype;if(proto.__projectELocalProgress)return;
 const originalInit=proto.setInitData,originalSpin=proto.setSpinData,originalNext=proto.setNextSpinData;
 function restore(data,response){
  const states=response.engine?.gameState,index=response.localResumeIndex;
  if(!Array.isArray(states)||!Number.isInteger(index)||index<0||index>=states.length)throw Error('Invalid Project-E resume cursor');
  const s=states[index],d=data.getData();if(!Array.isArray(s.view)||s.view.length!==4||s.view.some(row=>row.length!==5))throw Error('Invalid Project-E resume board');
  d.parser.currentSpinIndex=index;d.parser.currentGameState=s;d.parser.reelResult=s.view[0].map((_,c)=>s.view.map(row=>row[c]));d.parser.winSymbols=data.parserWinSymbols(s.winSymbols);d.parser.currentViewWin=d.parser.winSymbols.reduce((n,w)=>n+w.winnings,0);d.parser.toSymbolWildVO=data.parserTransformVO(s.transformInfo);d.parser.currentSpinIsEmpty=!d.parser.winSymbols.length&&index===0;data.currentGameType=s.action==='freeSpin'?'freeGame':'mainGame';
 }
 function mark(data){const d=data.getData(),s=d.parser.currentGameState;if(!data.__projectELocalRound||!s?.localRules)return;writeNativeAudit('progress',null,null,data);const result=runtime.markStage(d.spinId,d.parser.currentSpinIndex);if(result?.status!==200)throw Error('Project-E local progress rejected: '+(result?.message||'unknown'));}
 proto.setInitData=function(response){const result=originalInit.call(this,response);this.__projectELocalRound=response.localBackend===true&&response.isResuming===true;if(this.__projectELocalRound){restore(this,response);mark(this);}return result;};
 proto.setSpinData=function(response){const result=originalSpin.call(this,response);this.__projectELocalRound=response.localBackend===true;if(this.__projectELocalRound)mark(this);return result;};
 proto.setNextSpinData=function(...args){const result=originalNext.apply(this,args);mark(this);return result;};
 Object.defineProperty(proto,'__projectELocalProgress',{value:true,configurable:true});
}

/** Resume the saved local FG stage in the ORIGINAL FSM, without replaying the
 * selector or triggering CHANGE_FG_SPIN_TO_STOP_STATE (which advances its index).
 * Main-game, jackpot, trigger and nonlocal response routes remain original.
 */
export function installStateHooks(GameState,options){
 const p=GameState.prototype;if(p.__projectELocalStateProgress)return;
 const original=p.GET_ALL_STATES,{GameEvent,SlotFrameworkEvent,GameConfigModel,EBGM,ESpinStatus,ReelDataSettingObj}=options,emit=options.dispatch??globalThis.dispatch;
 if(typeof original!=='function'||typeof emit!=='function'||!GameEvent||!SlotFrameworkEvent)throw Error('Original E state/event dependencies required');
 const decorated=new WeakSet();
 p.GET_ALL_STATES=function(){
  const states=original.call(this);if(decorated.has(this))return states;
  const owner=this,wait=this.MG_WAIT_RESUME_STATE,fg=this.FG_SPIN_TO_STOP_STATE;
  if(!wait||!fg||!states.includes(wait)||!states.includes(fg))throw Error('Original E native resume states missing');
  decorated.add(this);const transition=wait.transitionTo;
  wait.transitionTo=function(context){
   const model=context.sharedData||owner.data,d=model.getData(),stage=d.parser.currentGameState;
   if(model.__projectELocalRound===true&&d.isResuming===true&&stage?.localRules===true&&stage.action==='freeSpin'&&context.event.name===GameEvent.START_RESUME){
    if(model.currentGameType!=='freeGame')model.currentGameType='freeGame';
    // Match the original FreeGameAlertView.startFreeGame initialization while
    // retaining its already chosen factor and bypassing its choice animation.
    model.originTurbo=GameConfigModel.isTurbo;GameConfigModel.setIsTurbo(false,false);ReelDataSettingObj.setSpeedIndex(0);
    emit(SlotFrameworkEvent.UPDATE_SPIN_STATUS,{data:ESpinStatus.SPINING});
    emit(GameEvent.START_EXTENSION_SCHEDULE);emit(GameEvent.PLAY_BGM,{data:EBGM.FREEGAME});emit(GameEvent.CHANGE_GAME_STYLE,{data:false});emit(GameEvent.UPDATE_FG_REMAINING);
    emit(GameEvent.CLEAR_ALL_WIN_LINE);model.tempAnimTopMap.clear();emit(GameEvent.START_SCROLL);
    return fg.id;
   }
   return transition.call(this,context);
  };installNativeStateAudit(states,owner);return states;
 };
 Object.defineProperty(p,'__projectELocalStateProgress',{value:true,configurable:true});
}

/** Opt-in, bounded inspection of ORIGINAL state calls. No timers, event emission,
 * settlement or replacement state is introduced by this observer. */
function writeNativeAudit(method,state,event,model,result,error){
 try{if(typeof document==='undefined'||new URLSearchParams(globalThis.location?.search||'').get('reaDebug')!=='1')return;
  const notice=document.getElementById('ProjectELocalRuntimeBoundary');if(!notice)return;
  const data=model?.getData?.(),parser=data?.parser,stage=parser?.currentGameState;
  if(model?.__projectELocalRound!==true)return;
  const summary={totalWinnings:stage?.totalWinnings??null,bigwinReach:parser?.bigwinReach??null,currentView:parser?.currentSpinIndex??null,action:stage?.action??null,winLines:parser?.winSymbols?.length??0};
  notice.dataset.summaryStage=JSON.stringify(summary);
  if(state&&method==='onEntry:call')notice.dataset.nativeState=state;
  const log=JSON.parse(notice.dataset.nativeStates||'[]');log.push({method,state,event:event?.name??event??null,result:typeof result==='string'?result:null,error:error?String(error.message||error):null,...summary});if(log.length>160)log.splice(0,log.length-160);notice.dataset.nativeStates=JSON.stringify(log);
 }catch{/* Diagnostics never alter the original consumer return/throw. */}
}
function installNativeStateAudit(states,owner){
 for(const state of states){if(state.__projectENativeAudit)continue;
  for(const name of ['onEntry','onExit','transitionTo']){const original=state[name];if(typeof original!=='function')continue;
   state[name]=function(context,...args){const model=context?.sharedData||owner.data;writeNativeAudit(name+':call',state.id,context?.event,model);
    try{const result=original.call(this,context,...args);if(result&&typeof result.then==='function')return result.then(value=>{writeNativeAudit(name+':return',state.id,context?.event,model,value);return value;},error=>{writeNativeAudit(name+':throw',state.id,context?.event,model,null,error);throw error;});writeNativeAudit(name+':return',state.id,context?.event,model,result);return result;}catch(error){writeNativeAudit(name+':throw',state.id,context?.event,model,null,error);throw error;}
   };
  }Object.defineProperty(state,'__projectENativeAudit',{value:true});
 }
}
