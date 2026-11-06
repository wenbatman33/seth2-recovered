// @ts-nocheck
/** Own saved cursor bridge verified against G setNewInitData/setNextSpinData.
 * No native animation or response phase is replaced. */
export function installProgressHooks(GameData,runtime=globalThis.globalProjectG){
 if(!runtime?.markStage)throw Error('Project-G local transport must be installed first');const p=GameData.prototype;if(p.__projectGProgressHooks)return;
 const initial=p.setNewInitData,spin=p.setNewSpinData,next=p.setNextSpinData;
 function mark(model){const stage=model.currSpinData;if(!stage||!model.data?.spinId)return;const result=runtime.markStage(model.data.spinId,stage.currentView);if(result.status!==200)throw Error('Project-G progress failed: '+result.message);}
 p.setNewInitData=function(response){initial.call(this,response);if(response.localBackend===true&&response.isResuming&&Number.isInteger(response.localResumeIndex)){
  const index=response.localResumeIndex,states=this.data.newGameState;if(index<0||index>=states.length)throw RangeError('Invalid Project-G resume cursor');this.currSpinIndex=index;this.data.gameState=this.currSpinData;this.preSpinData=JSON.parse(JSON.stringify(states[Math.max(0,index-1)]));this.parseView(this.currSpinData);this.parseNewTimesSymbols(this.currSpinData);this.parseFullCombo(this.data.parser.view1D);
  if(this.currSpinData.action==='freeSpin'&&!this.previousGameType)this.previousGameType='mainGame';mark(this);
 }};
 p.setNewSpinData=function(response){spin.call(this,response);if(response.localBackend===true)mark(this);};p.setNextSpinData=function(){next.call(this);mark(this);};Object.defineProperty(p,'__projectGProgressHooks',{value:true,configurable:true});
}
