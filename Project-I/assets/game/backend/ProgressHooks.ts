// @ts-nocheck
/** Own persisted-cursor adapter around ORIGINAL I parsing and native states.
 * No replacement state machine, wallet changes, timers, or synthesized callbacks.
 */
function localResume(model,response){return response?.localBackend===true&&response.isResuming===true&&model.__localProjectI===true;}
function currentType(model){return model.getData().parser.currentGameState.action==='freeSpin'?'freeGame':'mainGame';}
function setCurrentType(model){const type=currentType(model);if(model.currentGameType!==type)model.currentGameType=type;}
export function installProgressHooks(GameData,runtime=globalThis.globalProjectI,options={}){
 if(!runtime?.markStage)throw Error('Install the Project-I local transport before progress hooks');const p=GameData.prototype;if(p.__projectIProgressHooks){if(options.ParseResponse)installParseHooks(options.ParseResponse);if(options.GameLogic)installGameLogicHooks(options.GameLogic);return;}
 const init=p.setInitData,spin=p.setSpinData,next=p.setNextSpinData;
 function mark(model){if(!model.__localProjectI)return;const d=model.getData(),index=d.parser.currentSpinIndex;const result=runtime.markStage(d.spinId,index);if(result?.status!==200)throw Error('Project-I progress persistence failed: '+(result?.message||'unknown'));}
 function restore(model,index){
  const d=model.getData();if(!Number.isInteger(index)||index<0||index>=d.gameState.length)throw RangeError('Invalid Project-I resume cursor');const state=d.gameState[index];
  if(!Array.isArray(state.view)||state.view.length!==3||state.view.some(row=>!Array.isArray(row)||row.length!==5))throw Error('Original Project-I resume board must have three rows/five columns');
  d.parser.currentSpinIndex=index;d.parser.currentGameState=state;d.parser.reelResult=Array.from({length:5},(_,col)=>state.view.map(row=>row[col]));d.parser.winSymbols=model.parserWinSymbols(state.winSymbols);d.parser.currentViewWin=d.parser.winSymbols.reduce((n,w)=>n+w.winnings,0);d.parser.toSymbolWildVO=model.parserTransformVO(state.transformInfo||{toSymbol:[],toWild:[]});d.parser.currentSpinIsEmpty=d.parser.winSymbols.length===0&&index===0;setCurrentType(model);
 }
 p.setInitData=function(response){const result=init.call(this,response);this.__localProjectI=response.localBackend===true;if(localResume(this,response)){restore(this,response.localResumeIndex??0);mark(this);}return result;};
 p.setSpinData=function(response){const result=spin.call(this,response);this.__localProjectI=response.localBackend===true;if(this.__localProjectI)mark(this);return result;};
 p.setNextSpinData=function(...args){const result=next.apply(this,args);mark(this);return result;};
 Object.defineProperty(p,'__projectIProgressHooks',{value:true,configurable:true});
 if(options.ParseResponse)installParseHooks(options.ParseResponse);if(options.GameLogic)installGameLogicHooks(options.GameLogic);
}
function installTypeHook(holder,marker){
 if(holder[marker])return;const original=holder.setGameType;if(typeof original!=='function')throw Error('Original I setGameType method missing');
 holder.setGameType=function(response){const model=this.data;if(localResume(model,response)){setCurrentType(model);return;}return original.call(this,response);};Object.defineProperty(holder,marker,{value:true,configurable:true});
}
// parseInit would otherwise overwrite the restored FG type using gameState[0].
export function installParseHooks(ParseResponse){installTypeHook(ParseResponse,'__projectIParseHooks');}
// Actual I GameLogic also has its own copy of the same first-stage type logic.
export function installGameLogicHooks(GameLogic){installTypeHook(GameLogic.prototype,'__projectILogicHooks');}
export function installStateHooks(GameState,options){
 const p=GameState.prototype;if(p.__projectIStateHooks)return;const original=p.GET_ALL_STATES,{GameEvent,SlotFrameworkEvent,GameConfigModel,EBGM,ESpinStatus}=options,emit=options.dispatch??globalThis.dispatch;
 if(!GameEvent||!SlotFrameworkEvent||typeof emit!=='function')throw Error('Original I event namespaces and dispatch are required');const decorated=new WeakSet();
 p.GET_ALL_STATES=function(){
  const states=original.call(this);if(decorated.has(this))return states;const owner=this,wait=this.MG_WAIT_RESUME_STATE,fg=this.FG_SPIN_TO_STOP_STATE,dragon=this.DRAGON_STATE;
  if(!wait||!fg||!states.includes(wait)||!states.includes(fg))throw Error('Original I resume/FG states missing');decorated.add(this);const transition=wait.transitionTo;
  wait.transitionTo=function(context){
   const model=context.sharedData||owner.data,d=model.getData(),state=d.parser.currentGameState;
   if(model.__localProjectI&&d.isResuming&&state.action==='freeSpin'&&context.event.name===GameEvent.START_RESUME){
    setCurrentType(model);if(GameConfigModel){model.originTurbo=GameConfigModel.isTurbo;GameConfigModel.setIsTurbo(false,false);}
    emit(SlotFrameworkEvent.UPDATE_SPIN_STATUS,{data:ESpinStatus?.SPINING??'spining'});emit(GameEvent.CHANGE_GAME_STYLE,{data:false});const music=EBGM?.FREEGAME??EBGM?.FREE_GAME;if(music)emit(GameEvent.PLAY_BGM,{data:music});emit(GameEvent.UPDATE_TIMES);emit(GameEvent.UPDATE_FG_REMAINING);emit(GameEvent.START_SCROLL);
    // Original GameLogic handles CHANGE_FG_SPIN_TO_STOP_STATE by dispatching
    // NEXT_SPIN. Emitting it here would SKIP the saved stage. Enter its original
    // reel-stop phase directly, preserving the native optional dragon branch.
    if(state.dragonLevel){if(!dragon||!states.includes(dragon))throw Error('Original I dragon state missing');return dragon.id;}return fg.id;
   }
   return transition.call(this,context);
  };return states;
 };
 Object.defineProperty(p,'__projectIStateHooks',{value:true,configurable:true});
}
/** Disable already chosen ORIGINAL material nodes only for the owned simulation.
 * Keep every original sprite/Spine and animation body; eligibility is the patch.
 */
export function installDropMaterialHooks(DropMaterials,{DragItem,randomIndex=count=>Math.floor(Math.random()*count)}){
 const p=DropMaterials.prototype;if(p.__projectIMaterialHooks)return;const enable=p.isEnableDragItems,drop=p.dropItemAnimation,timeout=p.selectTimeUP;
 function owned(view){const b=view.data.getData().bonusState;return b?.localBonusSimulation===true&&b.bonusType==='elixirFurnace'?b:null;}
 function remaining(view,b){const selected=b.localSelectedMaterials||b._local?.selectedMaterials||[];return b.action==='purify'?view.items.filter(item=>!selected.includes(Number(item.name))):[];}
 p.isEnableDragItems=function(value){const result=enable.call(this,value),b=owned(this);if(b&&value){const allowed=remaining(this,b);for(const item of this.items)if(!allowed.includes(item))item.getComponent(DragItem).onDisable();}return result;};
 p.dropItemAnimation=function(item){const b=owned(this);if(b&&!remaining(this,b).includes(item)){this.currentItem=null;if(b.action==='purify')this.reStartSelect();return;}return drop.call(this,item);};
 p.selectTimeUP=function(...args){const b=owned(this);if(b){const allowed=remaining(this,b);if(!allowed.length)return;if(!allowed.includes(this.currentItem)){const index=randomIndex(allowed.length);if(!Number.isInteger(index)||index<0||index>=allowed.length)throw Error('Invalid owned material timeout selection');this.currentItem=allowed[index];}}return timeout.apply(this,args);};
 Object.defineProperty(p,'__projectIMaterialHooks',{value:true,configurable:true});
}
