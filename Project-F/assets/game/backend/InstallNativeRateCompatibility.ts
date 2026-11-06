// @ts-nocheck
/** Own local-operation adapter for native resume preconditions. The original
 * collector/tweens increment the bank; this never writes a final award caption.
 */
export function nativeRateResumeSnapshot(controller){
 const data=controller.data,state=data?.getData(),context=data?.__projectFRateResume,stage=state?.parser?.currentGameState;
 if(!data?.__projectFLocalOperation||!context||context.stage!==stage||context.spinId!==state.spinId||context.index!==state.parser.currentSpinIndex)return null;
 const p=stage?.localRateProvenance;if(stage.localMathRevision!=='native-rate-bank-v2'||p?.revision!=='native-rate-resume-v1')return null;
 const unique=values=>Array.isArray(values)&&new Set(values).size===values.length&&values.every(pos=>Number.isInteger(pos)&&pos>=0&&pos<34);
 if(!Number.isInteger(p.bankBefore)||p.bankBefore<0||p.bankBefore%2||p.bankAfter!==stage.currentTimes||!unique(p.femalePositions)||!unique(p.newMarkerPositions)||!unique(p.collectPositions)||p.bankAfter!==p.bankBefore+p.collectPositions.length*2)throw new Error('Invalid owned native rate resume provenance');
 for(const pos of p.femalePositions)if(controller.allReelsPositionMap.get(pos)?.symbolID!==2)throw new Error('Native resume female identity mismatch at '+pos);
 if(p.newMarkerPositions.some(pos=>!p.femalePositions.includes(pos))||p.collectPositions.some(pos=>!p.newMarkerPositions.includes(pos)))throw new Error('Invalid owned rate marker subset');
 return{context,stage,provenance:p};
}
export function prepareNativeRateResume(controller,options={}){
 const snapshot=nativeRateResumeSnapshot(controller);if(!snapshot)return Promise.resolve(false);
 const{context,stage,provenance:p}=snapshot;if(context.nativePrepared)return context.nativePrepared;
 // Source initReelView resets0; source FG CHANGE_GAME_STYLE resets2. Restore
 // only the pre-presentation bank and original per-token collected flags.
 controller.winRate=p.bankBefore;
 controller.txtRateTitle.node.active=stage.action==='freeSpin'||p.bankBefore>0;
 const opacity=options.UIOpacity&&controller.txtRateTitle.node.getComponent(options.UIOpacity);if(opacity)opacity.opacity=controller.txtRateTitle.node.active?255:0;
 for(const[pos,symbol]of Array.from(controller.allReelsPositionMap.entries()))if(symbol.symbolID===2)symbol.rate=p.newMarkerPositions.includes(pos)?2:0;
 options.audit?.(controller,'resume-before-native-collection');
 context.nativePrepared=Promise.resolve().then(async()=>{
  // The original FG no-win stop/drop path collects before choosing wait or
  // summary. Its resume path bypassed that stop, so await the real collector.
  if(p.route==='free-no-win'&&p.collectPositions.length){
   const symbols=p.collectPositions.map(pos=>controller.allReelsPositionMap.get(pos));
   await controller.playRateOnlyCollect(symbols);
   if(controller.winRate!==p.bankAfter)throw new Error('Native resume collector bank mismatch');
  }
  options.audit?.(controller,'resume-preconditions-restored');return true;
 });return context.nativePrepared;
}
export function installProjectFNativeRateCompatibility(Controller,options={}){
 const proto=Controller.prototype;if(proto.__projectFNativeRateCompatibility)return;
 const original={initReelView:proto.initReelView,showWinRateFlow:proto.showWinRateFlow,playRateOnlyCollect:proto.playRateOnlyCollect};
 const records=[];
 function audit(controller,phase){
  const runtime=globalThis.ProjectFCreatorLocalBackend,search=options.search??globalThis.location?.search??'',params=new URLSearchParams(search);
  if(params.get('reaDebug')!=='1'||params.get('reaRateAudit')!=='1'||!runtime?.installed||!runtime.created||!runtime.storageKey?.includes('.test.'))return;
  const data=controller.data;if(!data?.__projectFLocalOperation)return;
  const state=data.getData(),stage=state.parser.currentGameState,p=stage?.localRateProvenance;
  records.push({phase,spinId:state.spinId,stage:state.parser.currentSpinIndex,action:stage?.action,bank:controller.winRate,expectedBank:p?.bankAfter??null,beforeBank:p?.bankBefore??null,mathRevision:stage?.localMathRevision??'legacy',route:p?.route??null,newMarkerPositions:p?.newMarkerPositions||[],collectPositions:p?.collectPositions||[],rollers:controller.slotRollers?.filter(Boolean).length??null,symbols:Array.from(controller.allReelsPositionMap.entries()).slice(0,34).map(([position,symbol])=>({position,symbol:symbol.symbolID,rate:symbol.rate}))});
  if(records.length>16)records.shift();
  if(typeof document!=='undefined'){
   let element=document.getElementById('ProjectFNativeRateAudit');if(!element){element=document.createElement('div');element.id='ProjectFNativeRateAudit';element.hidden=true;document.body.appendChild(element);}element.dataset.records=JSON.stringify(records);
  }
 }
 proto.initReelView=function(){const result=original.initReelView.apply(this,arguments);const data=this.data;if(data?.__projectFLocalOperation)data.__projectFRestoreNativeRateResume=()=>prepareNativeRateResume(this,{...options,audit});audit(this,'native-init');return result;};
 for(const method of ['showWinRateFlow','playRateOnlyCollect'])proto[method]=function(){const value=original[method].apply(this,arguments);return Promise.resolve(value).then(result=>{audit(this,'after-'+method);return result;});};
 Object.defineProperty(proto,'__projectFNativeRateCompatibility',{value:{original,records},configurable:true});
}
