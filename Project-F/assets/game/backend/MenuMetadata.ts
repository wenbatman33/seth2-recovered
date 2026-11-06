// @ts-nocheck
/** Owned metadata over the existing per-project wallet. No provider accounts,
 * remote rooms, original RNG/RTP, invented avatar portraits or global ranks. */
const clone=v=>JSON.parse(JSON.stringify(v)),money=n=>Math.round(n*100)/100;
function failure(code,message){return{status:400,code,message,localBackend:true};}
export function installLocalMenuMetadata(Backend,{project,title=project,avatarSources={}}){
 const p=Backend.prototype;if(p.__localMenuMetadata)return;
 const originalPlatform=p.platform,originalRequest=p.request,originalCommit=p.commit;
 const ownIds=Object.keys(avatarSources);if(ownIds.some(id=>typeof avatarSources[id]!=='string'||!avatarSources[id]))throw Error('Avatar source URLs must refer to available original portraits');
 function profile(backend,state=backend.state){return{displayName:'Local',avatar:ownIds[0]??0,...state.profile};}
 function record(backend,r,state=backend.state){const timestamp=Number(r.endTime??state.updatedAt);return{...clone(r),id:r.id??r.spinId,name:title,endTime:Number.isFinite(timestamp)?timestamp:0,totalStake:money(Number(r.totalStake)||0),winnings:money(Number(r.winnings)||0),profit:money((Number(r.winnings)||0)-(Number(r.totalStake)||0)),hasFree:r.hasFree===true,isFeature:r.isFeature===true,roomId:1,localSimulation:true,localTimestampEstimated:r.endTime==null};}
 function allRecords(backend,state=backend.state){return(state.records||[]).map(r=>record(backend,r,state));}
 function detail(backend,state=backend.state){const rows=allRecords(backend,state),now=backend.clock(),today=new Date(now);today.setHours(0,0,0,0);const day=rows.filter(r=>r.endTime>=today.getTime()),hour=rows.filter(r=>r.endTime>=now-3600000),sum=(rows,key)=>money(rows.reduce((n,r)=>n+r[key],0));return{dayWin:sum(day,'winnings'),dayBet:sum(day,'totalStake'),hourWin:sum(hour,'winnings'),hourBet:sum(hour,'totalStake'),todayBet:sum(day,'totalStake'),todayWin:sum(day,'winnings'),mgCounts:[0,0,0],localSimulation:true};}
 function lock(state){return{roomId:1,number:1,time:state.localTableLockTime||0,resetDef:300,expiredDef:300,localSimulation:true};}
 function table(backend,state=backend.state){const d=detail(backend,state),l=lock(state);return{roomId:1,number:1,status:l.time?'Locked':'Full',user:{userId:project.toLowerCase()+'-local-player'},win:d.dayWin,bet:d.dayBet,detail:d,lock:l,localSimulation:true};}
 p.platform=function(state=this.state){const out=originalPlatform.call(this,state),who=profile(this,state),t=table(this,state);out.player.displayName=who.displayName;out.player.avatar=who.avatar;out.player.avatarUrl=avatarSources[String(who.avatar)]||'';out.avatars=ownIds;out.table=t;out.tables=[clone(t)];out.tableMeta={currentPage:1,tablePerPage:1,totalPages:1,totalTableCount:1};out.localMenuSimulation=true;out.localMenuBoundary={accounts:'independent local wallet',tables:'one local room only; no provider occupancy',ranks:'disabled; no fabricated global rankings',avatars:ownIds.length?'verified original portraits':'original portrait endpoint unavailable; native empty selector closes safely',history:'only settled local rounds, maximum wallet retention'};return out;};
 p.commit=function(next){for(const row of next.records||[]){if(row.endTime!=null)continue;const pending=this.state.pending,id=row.id??row.spinId;row.endTime=this.clock();if(pending?.id===id){row.hasFree=pending.stages?.some(s=>s.action==='freeSpin')||false;row.isFeature=pending.purchase===true||!!pending.bonusState;}}return originalCommit.call(this,next);};
 p.request=function(event,payload={}){
  try{
   if(event==='getBetRecords'){
    const limit=payload.rows??16,lt=payload.lt==null?0:Number(payload.lt);if(!Number.isInteger(limit)||limit<1||limit>200||!Number.isFinite(lt)||lt<0)return failure('INVALID_HISTORY_QUERY','Invalid local record query');
    const rows=allRecords(this).filter(r=>!lt||r.endTime<lt).sort((a,b)=>b.endTime-a.endTime).slice(0,limit);return this.response({eventName:event,data:rows,localHistoryScope:'settled rounds in this browser wallet only'});
   }
   if(event==='getUserReport'){
    const start=payload.startTime==null?0:Number(payload.startTime),end=payload.endTime==null?this.clock():Number(payload.endTime);if(!Number.isFinite(start)||!Number.isFinite(end)||start>end)return failure('INVALID_HISTORY_QUERY','Invalid local report range');
    const rows=allRecords(this).filter(r=>r.endTime>=start&&r.endTime<=end),bet=money(rows.reduce((n,r)=>n+r.totalStake,0)),win=money(rows.reduce((n,r)=>n+r.winnings,0));return this.response({eventName:event,content:{list:rows.length?[{name:title,bet,win,profit:money(win-bet),betCount:rows.length,localSimulation:true}]:[]},localHistoryScope:'settled rounds in this browser wallet only'});
   }
   if(event==='slotBetranks'&&(!payload.action||payload.action==='list'))return this.response({eventName:event,data:{rankKey:'local-unranked',list:[]},localRankingBoundary:'global ranks disabled; no invented player rankings'});
   if(event==='getSlotTables')return this.response({eventName:event,data:{tables:[table(this)],lock:lock(this.state),detail:detail(this)}});
   if(event==='getSlotTableDetail'){if(payload.roomId!=null&&String(payload.roomId)!=='1')return failure('UNKNOWN_LOCAL_TABLE','Only local room 1 exists');return this.response({eventName:event,data:{tables:[table(this)],lock:lock(this.state),detail:detail(this)}});}
   if(event==='updateSlotTable'){if(String(payload.table?.roomId??payload.roomId)!=='1')return failure('UNKNOWN_LOCAL_TABLE','Only local room 1 exists');return this.response({eventName:event,status:304,message:'本機只有目前這一台',localTableUnchanged:true});}
   if(event==='lockSlotTable'){if(String(payload.roomId)!=='1')return failure('UNKNOWN_LOCAL_TABLE','Only local room 1 exists');const next=clone(this.state);next.localTableLockTime=this.clock();this.commit(next);return this.response({eventName:event,lock:lock(this.state),data:{lock:lock(this.state)}});}
   if(event==='updateAvatar'){const id=String(payload.avatarId),current=profile(this);if(!ownIds.includes(id)&&id!==String(current.avatar))return failure('AVATAR_NOT_AVAILABLE','Original avatar portrait unavailable');const next=clone(this.state);next.profile={...current,avatar:ownIds.includes(id)?id:current.avatar};this.commit(next);return this.response({eventName:event,data:{avatarId:next.profile.avatar,avatarUrl:avatarSources[id]||''}});}
   if(event==='updateDisplayName'){const name=payload.displayName;if(typeof name!=='string'||name.length<1||name.length>6||/[^A-Za-z0-9가-힣à-ỵ_\u3040-\u309F\u30A0-\u30FF\u0110-\u01B0\u4e00-\u9fff\u3105-\u3129]/.test(name)||/[ˇˋˊ˙]/.test(name))return failure('INVALID_DISPLAY_NAME','暱稱須為1至6個有效字元');const next=clone(this.state);next.profile={...profile(this),displayName:name};this.commit(next);return this.response({eventName:event,data:{displayName:name}});}
   return originalRequest.call(this,event,payload);
  }catch(error){return failure(error.code||'LOCAL_MENU_ERROR',error.message);}
 };
 Object.defineProperty(p,'__localMenuMetadata',{value:{project,originalPortraitCount:ownIds.length},configurable:true});
}
/** No portrait is synthesized when the source endpoint is unavailable. Original
 * AvatarViewBase.init/onClose are retained; avoid dereferencing an empty map. */
export function installEmptyAvatarMenuHook(AvatarView,PlatformModel){
 const p=AvatarView.prototype;if(p.__localEmptyAvatarMenu)return;const original=p.setCheckHighlight;
 p.setCheckHighlight=function(id){const platform=PlatformModel.getData();if(platform.localMenuSimulation===true&&!platform.avatars.length&&!this.avatarMap.has(String(id)))return;return original.call(this,id);};
 Object.defineProperty(p,'__localEmptyAvatarMenu',{value:true,configurable:true});
}

// Use the owned collection menu instead of the provider window-close fallback.
export function installLocalNavigationHooks(ExitUtils){
 if(ExitUtils.__localCollectionNavigation||typeof window==='undefined')return;
 for(const method of ['exitWeb','replayExitWeb']){const original=ExitUtils[method];ExitUtils[method]=function(destination){const menu=window.__recoveredLaunch?.menuUrl;if(menu&&(!destination||destination===menu)){this._window.location.href=menu;return;}return original.apply(this,arguments);};}
 Object.defineProperty(ExitUtils,'__localCollectionNavigation',{value:true});
}
