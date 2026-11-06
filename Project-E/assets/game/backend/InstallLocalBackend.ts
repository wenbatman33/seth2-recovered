import { installLocalMenuMetadata } from './MenuMetadata';
// @ts-nocheck
/** In-process service adapter; preserves the original D sender/models/parser/UI.
 * Install before the original GameServiceBase is initialized. */
import {LocalGameBackend} from './LocalGameBackend';
export function selectWalletKey(search='',base='project-e.local-simulation.v1'){
 const p=new URLSearchParams(search),slug=p.get('reaTestWallet');return p.get('reaDebug')==='1'&&slug&&/^[A-Za-z0-9][A-Za-z0-9_-]{0,47}$/.test(slug)?base+'.test.'+slug:base;
}
export function installLocalBackend(GameServiceBase,options={}){
 const proto=GameServiceBase.prototype;if(proto.__projectETransport)return proto.__projectETransport;
 const original={},clients=new Set();let backend;
 const runtime={project:'Project-E',requests:[],created:false,original,markStage(spinId,currentView){return runtime.getBackend().request('progress',{spinId,currentView});},getBackend(){if(!backend){let storage=options.storage;try{if(storage===undefined)storage=globalThis.localStorage;}catch{storage=null;}
  const search=options.search??globalThis.location?.search??'',storageKey=selectWalletKey(search,options.storageKey),p=new URLSearchParams(search),qa=storageKey.includes('.test.')?p.get('reaScenario')||'':'';
  backend=new LocalGameBackend({...options,qaScenario:options.qaScenario||qa,quiet:options.quiet??p.get('reaDevelopmentMute')==='1',storage,storageKey});runtime.storageKey=storageKey;runtime.created=true;}return backend;}};
 function replace(k,v){original[k]=proto[k];proto[k]=v;}
 function deliver(event,payload,callback){return Promise.resolve().then(()=>{
  const owned=runtime.getBackend(),balanceBefore=owned.state.balanceCents/100,pendingAwardBefore=(owned.state.pending?.awardCents||0)/100;
  const response=owned.request(event,payload||{}),balanceAfter=owned.state.balanceCents/100,pending=owned.state.pending,stageCount=Array.isArray(response.engine?.gameState)?response.engine.gameState.length:0;
  runtime.requests.push({event,status:response.status,code:response.code||null,spinId:response.engine?.spinId||null,stageCount,roundStageCount:pending?.stages?.length||stageCount,currentView:pending?.currentView??response.localResumeIndex??null,balanceBefore,balanceAfter,award:event==='closeSpin'?(response.status===200?pendingAwardBefore:0):(pending?.awardCents||0)/100,pendingAward:(pending?.awardCents||0)/100,creditedAward:event==='closeSpin'&&response.status===200?balanceAfter-balanceBefore:0,localBackend:true});
  if(runtime.requests.length>100)runtime.requests.shift();
  if(typeof document!=='undefined'){const notice=document.getElementById('ProjectELocalRuntimeBoundary');if(notice)notice.dataset.requests=JSON.stringify(runtime.requests);}
  if(response.status===200){const notification=owned.jackpotNotification();for(const client of clients)client.listeners?.get('notify')?.(notification);}
  callback?.(response);return response;
 });}
 function connected(service){clients.add(service._client);service._client.isConnected=true;service._client._readyState=3;return Promise.resolve().then(()=>service.onOpen({type:'project-e-local-simulation',localBackend:true}));}
 replace('init',function(){original.init.call(this);const service=this,listeners=new Map();this._client={listeners,isConnected:false,_readyState:0,connectTimeOut:10,on(event,fn){listeners.set(event,fn);},emit(event,payload,cb){return deliver(event,payload,cb);},initSocket(){return connected(service);},close(){clients.delete(this);this.isConnected=false;this._readyState=0;},socketDisconnect(){this.close();}};clients.add(this._client);});
 replace('connect',function(){return connected(this);});replace('socketIOMessage',function(event,payload,cb){return deliver(event,payload,cb);});replace('socketIOMessageWithoutCheck',function(event,payload,cb){return deliver(event,payload,cb);});replace('buildPayload',async function(payload){return payload;});replace('sendHeartbeat',function(){});
 Object.defineProperty(proto,'__projectETransport',{value:runtime,configurable:true});globalThis.globalProjectE=runtime;
 if(typeof document!=='undefined'&&!document.getElementById('ProjectELocalRuntimeBoundary')){const notice=document.createElement('div');notice.id='ProjectELocalRuntimeBoundary';notice.textContent='本機模擬後端';Object.assign(notice.style,{position:'fixed',bottom:'0',left:'0',font:'11px sans-serif',color:'#ffe6ac',zIndex:'10000',pointerEvents:'none',padding:'2px 6px'});document.body.appendChild(notice);}
 return runtime;
}

// Owned per-project menu metadata; no provider accounts or global rankings.
installLocalMenuMetadata(LocalGameBackend,{project:"Project-E"});
