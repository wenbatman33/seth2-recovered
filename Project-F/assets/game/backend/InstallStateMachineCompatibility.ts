// @ts-nocheck
/** Local-only resume routing for the original Project-F state machine.
 * Wrap before StateMachine.from consumes the instance's original state objects.
 * Presentation and real native completion callbacks remain in original states.
 */
export function installProjectFStateMachineCompatibility(GameState,GameEvent,dispatchEvent){
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
    if(resume?.stage===stage&&!resume.ready&&stage.localRateProvenance?.revision==='native-rate-resume-v1'){
     if(!resume.promise){
      dispatchEvent(GameEvent.CHANGE_GAME_STYLE,{data:stage.action==='freeSpin'?'freeGame':'mainGame'});
      if(typeof data.__projectFRestoreNativeRateResume!=='function')throw new Error('Native rate resume controller not initialized');
      resume.promise=data.__projectFRestoreNativeRateResume().then(()=>{resume.ready=true;dispatchEvent(GameEvent.START_RESUME);},error=>{resume.error=String(error);console.error('[Project-F local rate resume]',error);});
     }
     return '';
    }
    if(stage.action==='spin'&&stage.localMathRevision==='native-rate-bank-v2'&&!stage.winSymbols.length&&!stage.startFreeGame)return stage.totalWinnings>0?machine.MG_SHOW_TOTAL_WINNINGS_WIN_SCORE_STATE.id:machine.MG_CLOSE_SPIN_STATE.id;
    if(stage.action==='freeSpin'){if(!resume?.ready)dispatchEvent(GameEvent.CHANGE_GAME_STYLE,{data:'freeGame'});dispatchEvent(GameEvent.UPDATE_TIMES);return stage.currentView+1===stage.totalViews?machine.FG_SHOW_SUMMARY_ALERT_STATE.id:stage.winSymbols.length||stage.startFreeGame?machine.FG_SHOW_ALL_WIN_STATE.id:machine.FG_WAIT_SPIN_STATE.id;}
   }
   return original.call(this,input);
  };Object.defineProperty(wait,'__projectFResume',{value:true});}
  return originalGet.apply(this,arguments);
 };
 Object.defineProperty(proto,'__projectFResumeStates',{value:true});
}
