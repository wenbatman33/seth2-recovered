// @ts-nocheck
/** Local-only resume routing for the original Project-F async state machine.
 * Its executeStateAsync awaits transitionTo and requires a real destination ID.
 * Original presentation callbacks and original FSM implementation stay intact.
 */
export function installProjectFStateMachineCompatibility(GameState,GameEvent,dispatchEvent,options={}){
 const proto=GameState.prototype;if(proto.__projectFResumeStates)return;
 const originalGet=proto.getMachine;
 proto.getMachine=function(){
  const machine=this,wait=this.MG_WAIT_RESUME_STATE;
  if(wait&&!wait.__projectFResume){const original=wait.transitionTo;wait.transitionTo=function(input){
   const data=machine.data,state=data.getData(),stage=state.parser.currentGameState;
   if(data.__projectFLocalOperation&&input.event.name===GameEvent.START_RESUME){
    if(state.bonusState?.bonusType==='fortuneLanding')return state.bonusState.actionOptions.length?machine.MG_CLOSE_SPIN_STATE.id:machine.DROP_TREASURE_CLOSE_STATE.id;
    if(state.bonusState?.bonusType==='jpGame'||state.bonusState?.bonusType==='luckyWealth')return machine.MG_CLOSE_SPIN_STATE.id;
    const resume=data.__projectFRateResume;
    const destination=()=>{
     if(stage.action==='spin'&&stage.localMathRevision==='native-rate-bank-v2'&&!stage.winSymbols.length&&!stage.startFreeGame)return stage.totalWinnings>0?machine.MG_SHOW_TOTAL_WINNINGS_WIN_SCORE_STATE.id:machine.MG_CLOSE_SPIN_STATE.id;
     if(stage.action==='freeSpin'){
      if(!resume?.ready)dispatchEvent(GameEvent.CHANGE_GAME_STYLE,{data:'freeGame'});
      dispatchEvent(GameEvent.UPDATE_TIMES);
      return stage.currentView+1===stage.totalViews?machine.FG_SHOW_SUMMARY_ALERT_STATE.id:stage.winSymbols.length||stage.startFreeGame?machine.FG_SHOW_ALL_WIN_STATE.id:machine.FG_WAIT_SPIN_STATE.id;
     }
     return original.call(this,input);
    };
    if(resume?.stage===stage&&!resume.ready&&stage.localRateProvenance?.revision==='native-rate-resume-v1'){
     if(!resume.promise){
      dispatchEvent(GameEvent.CHANGE_GAME_STYLE,{data:stage.action==='freeSpin'?'freeGame':'mainGame'});
      if(typeof data.__projectFRestoreNativeRateResume!=='function')throw new Error('Native rate resume controller not initialized');
      // Return the actual restoration Promise to native sendAsync. Returning
      // '' and resending START_RESUME caused the first native send to reject.
      resume.promise=Promise.resolve(data.__projectFRestoreNativeRateResume()).then(()=>{resume.ready=true;return destination();},error=>{resume.error=String(error);throw error;});
     }
     return resume.promise;
    }
    return destination();
   }
   return original.call(this,input);
  };Object.defineProperty(wait,'__projectFResume',{value:true});}
  installNativeStateAudit(machine,options);
  return originalGet.apply(this,arguments);
 };
 Object.defineProperty(proto,'__projectFResumeStates',{value:true});
}
function installNativeStateAudit(owner,options){
 const params=new URLSearchParams(options.search??globalThis.location?.search??'');
 if(params.get('reaDebug')!=='1'||params.get('reaRateAudit')!=='1'||owner.__projectFNativeStateAudit||typeof owner.GET_ALL_STATES!=='function')return;
 const records=[],anomalies=[];
 function record(method,state,input,result,error){
  try{
   const runtime=globalThis.ProjectFCreatorLocalBackend,model=input?.sharedData||owner.data;
   if(!runtime?.installed||!runtime.created||!runtime.storageKey?.includes('.test.')||!model?.__projectFLocalOperation||typeof document==='undefined')return;
   const boundary=document.getElementById('ProjectFLocalRuntimeBoundary');if(!boundary)return;
   const data=model.getData(),parser=data.parser,stage=parser?.currentGameState;
   const row={method,state,event:input?.event?.name??null,result:typeof result==='string'?result:null,error:error?String(error.message||error):null,currentView:parser?.currentSpinIndex??null,action:stage?.action??null,freeGameCount:stage?.freeGameCount??null,totalWinnings:stage?.totalWinnings??null,resumeReady:model.__projectFRateResume?.ready??null};
   records.push(row);if(records.length>160)records.shift();
   if(error||(method==='transitionTo:return'&&result==='')){anomalies.push(row);if(anomalies.length>16)anomalies.shift();}
   if(method==='onEntry:call')boundary.dataset.nativeState=state;
   boundary.dataset.nativeStates=JSON.stringify(records);boundary.dataset.nativeStateAnomalies=JSON.stringify(anomalies);
  }catch{/* Diagnostic recording never changes original returns or throws. */}
 }
 for(const state of owner.GET_ALL_STATES()){
  if(state.__projectFNativeStateAudit)continue;
  for(const name of ['onEntry','onExit','transitionTo']){
   const original=state[name];if(typeof original!=='function')continue;
   state[name]=function(input,...args){record(name+':call',state.id,input);try{const result=original.call(this,input,...args);if(result&&typeof result.then==='function')return result.then(value=>{record(name+':return',state.id,input,value);return value;},error=>{record(name+':throw',state.id,input,null,error);throw error;});record(name+':return',state.id,input,result);return result;}catch(error){record(name+':throw',state.id,input,null,error);throw error;}};
  }
  Object.defineProperty(state,'__projectFNativeStateAudit',{value:true});
 }
 Object.defineProperty(owner,'__projectFNativeStateAudit',{value:true});
}
