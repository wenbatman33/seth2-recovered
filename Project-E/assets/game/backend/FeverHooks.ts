// @ts-nocheck
/** OWN local presentation bridge using ORIGINAL reel nodes, GameSymbol methods,
 * transformAnim Skeleton and native FSM states. The published E FSM lacks an
 * active transform phase; this bridge is traceable adaptation, not author TS. */
const reelsByModel=new WeakMap(),completed=new WeakSet(),running=new WeakMap();
function changes(stage){return[].concat(stage?.transformInfo?.toWild||[],stage?.transformInfo?.toSymbol||[]);}
function owned(model,stage){return model.__projectELocalRound===true&&stage?.localRules===true;}
function finalReels(stage){if(!Array.isArray(stage.resultView)||stage.resultView.length!==4||stage.resultView.some(r=>!Array.isArray(r)||r.length!==5))throw Error('Owned E transform needs a final4x5 view');return stage.resultView[0].map((_,c)=>stage.resultView.map(r=>r[c]));}
export function installFeverReelsHooks(ReelsController,{GameSymbol,Skeleton}){
 const p=ReelsController.prototype;if(p.__projectEFeverReels)return;const add=p.addEvents,remove=p.removeEvents;
 p.addEvents=function(...args){const result=add.apply(this,args);reelsByModel.set(this.data,{controller:this,GameSymbol,Skeleton});return result;};
 p.removeEvents=function(...args){if(reelsByModel.get(this.data)?.controller===this)reelsByModel.delete(this.data);return remove.apply(this,args);};
 Object.defineProperty(p,'__projectEFeverReels',{value:true,configurable:true});
}
export function presentOwnTransform(model,stage){
 if(!owned(model,stage)||!changes(stage).length||completed.has(stage))return Promise.resolve();if(running.has(stage))return running.get(stage);
 const host=reelsByModel.get(model);if(!host)throw Error('Original E reel controller is not registered for transform presentation');const {controller,GameSymbol,Skeleton}=host,seen=new Set(),list=changes(stage),final=finalReels(stage);
 // Validate every original node before starting any effect; never generate a
 // replacement sprite, substitute an animation or invent completion timers.
 const targets=list.map(item=>{const {position,newSymbol}=item;if(!Number.isInteger(position)||position<0||position>=20||seen.has(position)||!Number.isInteger(newSymbol)||newSymbol<1||newSymbol>8)throw Error('Invalid owned E transform target');seen.add(position);const col=position%5,row=Math.floor(position/5),node=controller.reelList[col]?.getMidSymbolList()[row],symbol=node?.getComponent(GameSymbol),effect=symbol?.transformAnim,skeleton=effect?.getComponent(Skeleton),animation=symbol?.getTransformAnimation(newSymbol);if(!symbol||!effect||!skeleton||!animation)throw Error('Original E transform node/component missing at '+position);const sourceData=skeleton.skeletonData,runtimeData=sourceData?.getRuntimeData?.();if(!runtimeData?.findAnimation(animation))throw Error('Original E transform SkeletonData animation missing at '+position+': '+animation);if(final[col][row]!==newSymbol)throw Error('Owned E final board disagrees with transformInfo');return{symbol,effect,skeleton,animation,newSymbol};});
 const promise=Promise.all(targets.map(({symbol,effect,skeleton,animation,newSymbol})=>new Promise(resolve=>{// The source effect node is initially inactive. Activation runs Creator's
 // original Skeleton.__preload; findAnimation is invalid before that lifecycle.
 effect.active=true;if(!skeleton.findAnimation(animation))throw Error('Original E activated transform Skeleton did not initialize: '+animation);skeleton.clearTracks();skeleton.setToSetupPose();skeleton.setCompleteListener(()=>{skeleton.setCompleteListener(null);symbol.setSymbol(newSymbol,false,false);effect.active=false;resolve();});skeleton.setAnimation(0,animation,false);}))).then(()=>{model.getData().parser.reelResult=final;completed.add(stage);running.delete(stage);});
 running.set(stage,promise);return promise;
}
export function installFeverStateHooks(GameState,{GameEvent,SlotFrameworkEvent,ESpinStatus,dispatch:emit}){
 const p=GameState.prototype;if(p.__projectEFeverStates)return;const original=p.GET_ALL_STATES,decorated=new WeakSet();
 p.GET_ALL_STATES=function(){const states=original.call(this);if(decorated.has(this))return states;decorated.add(this);const owner=this;
  for(const name of ['MG_SPIN_TO_STOP_STATE','FG_SPIN_TO_STOP_STATE']){const state=this[name];if(!state||!states.includes(state))throw Error('Original E reel-stop state missing');const transition=state.transitionTo;
   state.transitionTo=function(context){const model=context.sharedData||owner.data,stage=model.getData().parser.currentGameState;if(!owned(model,stage)||!changes(stage).length||context.event.name!==GameEvent.REEL_ALL_STOP)return transition.call(this,context);
    return presentOwnTransform(model,stage).then(()=>{const parser=model.getData().parser,originalState=parser.currentGameState;
     // The source routing checks view for full-combo. Present the final board
     // to that synchronous ORIGINAL decision, retaining its captured pre-view.
     parser.currentGameState={...stage,view:stage.resultView};try{return transition.call(this,context);}finally{parser.currentGameState=originalState;}
    });
   };
  }
  const wait=this.MG_WAIT_RESUME_STATE,transition=wait.transitionTo;wait.transitionTo=function(context){const model=context.sharedData||owner.data,data=model.getData(),stage=data.parser.currentGameState;if(owned(model,stage)&&data.isResuming===true&&stage.action==='spin'&&changes(stage).length&&context.event.name===GameEvent.START_RESUME){emit(SlotFrameworkEvent.UPDATE_SPIN_STATUS,{data:ESpinStatus.SPINING});emit(GameEvent.START_SCROLL);return owner.MG_SPIN_TO_STOP_STATE.id;}return transition.call(this,context);};return states;
 };
 Object.defineProperty(p,'__projectEFeverStates',{value:true,configurable:true});
}
export function installFeverDataHooks(GameData,{GameEvent,dispatch:emit}){
 const p=GameData.prototype;if(p.__projectEFeverData)return;const reset=p.reset;
 p.reset=function(...args){const local=this.__projectELocalRound===true,wasFever=local&&this.getData().definition?.isLuckyMoment===true,result=reset.apply(this,args);if(wasFever){this.getData().definition.isLuckyMoment=false;emit(GameEvent.UPDATE_BAT_FEVERTIME_STATUS,{data:false});}return result;};
 Object.defineProperty(p,'__projectEFeverData',{value:true,configurable:true});
}
