// @ts-nocheck
/** Opt-in bridge for own simulation persistence. Recovered rendering/parsing is
 * retained; these hooks only restore its stage cursor and persist advancement. */
export function installProgressHooks(GameData,runtime=globalThis.globalProjectD){
 if(!runtime||typeof runtime.markStage!=='function')throw Error('Install Project-D transport before progress hooks');
 const proto=GameData.prototype;if(proto.__projectDProgressHooks)return;
 const initial=proto.setNewInitData,spin=proto.setNewSpinData,next=proto.setNextSpinData;
 function mark(instance){const id=instance.data?.spinId,stage=instance.currSpinData;if(!id||!stage)return;const response=runtime.markStage(id,stage.currentView);if(response.status!==200)throw Error('Project-D progress persistence failed: '+response.message);}
 proto.setNewInitData=function(response){initial.call(this,response);if(response.localBackend===true&&response.isResuming&&Number.isInteger(response.localResumeIndex)){
  const index=response.localResumeIndex,states=this.data.newGameState;if(index<0||index>=states.length)throw RangeError('Invalid Project-D resume index');
  this.currSpinIndex=index;this.data.gameState=this.currSpinData;this.preSpinData=JSON.parse(JSON.stringify(states[Math.max(0,index-1)]));this.parseView(this.currSpinData);this.parseNewTimesSymbols(this.currSpinData);this.parseFullCombo(this.data.parser.view1D);if(this.currSpinData.action==='freeSpin'&&!this.previousGameType)this.previousGameType='mainGame';mark(this);
 }};
 proto.setNewSpinData=function(response){spin.call(this,response);if(response.localBackend===true)mark(this);};
 proto.setNextSpinData=function(){next.call(this);mark(this);};
 Object.defineProperty(proto,'__projectDProgressHooks',{value:true,configurable:true});
}
