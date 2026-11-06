import {installLocalMenuMetadata} from './MenuMetadata';
// @ts-nocheck
/** In-process service adapter; preserves the original D sender/models/parser/UI.
 * Install before the original GameServiceBase is initialized. */
import {LocalGameBackend} from './LocalGameBackend';
export function selectWalletKey(search='',base='project-d.local-simulation.v1'){
 const p=new URLSearchParams(search),slug=p.get('reaTestWallet');return p.get('reaDebug')==='1'&&slug&&/^[A-Za-z0-9][A-Za-z0-9_-]{0,47}$/.test(slug)?base+'.test.'+slug:base;
}
export function installLocalBackend(GameServiceBase,options={}){
 const proto=GameServiceBase.prototype;if(proto.__projectDTransport)return proto.__projectDTransport;
 const original={},clients=new Set();let backend;
 const runtime={project:'Project-D',requests:[],created:false,original,markStage(spinId,currentView){return runtime.getBackend().request('progress',{spinId,currentView});},getBackend(){if(!backend){let storage=options.storage;try{if(storage===undefined)storage=globalThis.localStorage;}catch{storage=null;}
  const search=options.search??globalThis.location?.search??'',storageKey=selectWalletKey(search,options.storageKey),p=new URLSearchParams(search),qa=storageKey.includes('.test.')?p.get('reaScenario')||'':'';
  backend=new LocalGameBackend({...options,qaScenario:options.qaScenario||qa,quiet:options.quiet??p.get('reaDevelopmentMute')==='1',storage,storageKey});runtime.storageKey=storageKey;runtime.created=true;}return backend;}};
 function replace(k,v){original[k]=proto[k];proto[k]=v;}
 function deliver(event,payload,callback){return Promise.resolve().then(()=>{const backend=runtime.getBackend(),before=backend.state.balanceCents,response=backend.request(event,payload||{});if(response.status===200){const notification=runtime.getBackend().jackpotNotification();for(const client of clients){const listener=client.listeners.get('notify');if(listener)listener(notification);}}runtime.requests.push({event,status:response.status,code:response.code,spinId:response.engine?.spinId,stageCount:Array.isArray(response.engine?.gameState)?response.engine.gameState.length:0,localBackend:true,balanceBefore:before/100,balanceAfter:backend.state.balanceCents/100,totalWinnings:backend.state.pending?.awardCents/100,timesPositions:Array.isArray(response.engine?.gameState)?response.engine.gameState.map(s=>s.timesSymbols?.map(b=>b.symbolPos)):null});if(typeof document!=='undefined'){const boundary=document.getElementById('ProjectDLocalRuntimeBoundary');if(boundary)boundary.dataset.requests=JSON.stringify(runtime.requests.slice(-100));}if(runtime.requests.length>100)runtime.requests.shift();callback?.(response);return response;});}
 function connected(service){clients.add(service._client);service._client.isConnected=true;service._client._readyState=3;return Promise.resolve().then(()=>service.onOpen({type:'project-d-local-simulation',localBackend:true}));}
 replace('init',function(){original.init.call(this);const service=this,listeners=new Map();this._client={listeners,isConnected:false,_readyState:0,connectTimeOut:10,on(event,fn){listeners.set(event,fn);},emit(event,payload,cb){return deliver(event,payload,cb);},initSocket(){return connected(service);},close(){clients.delete(this);this.isConnected=false;this._readyState=0;},socketDisconnect(){this.close();}};clients.add(this._client);});
 replace('connect',function(){return connected(this);});replace('socketIOMessage',function(event,payload,cb){return deliver(event,payload,cb);});replace('socketIOMessageWithoutCheck',function(event,payload,cb){return deliver(event,payload,cb);});replace('buildPayload',async function(payload){return payload;});replace('sendHeartbeat',function(){});
 Object.defineProperty(proto,'__projectDTransport',{value:runtime,configurable:true});globalThis.globalProjectD=runtime;
 if(typeof document!=='undefined'&&!document.getElementById('ProjectDLocalRuntimeBoundary')){const notice=document.createElement('div');notice.id='ProjectDLocalRuntimeBoundary';notice.textContent='本機模擬後端';Object.assign(notice.style,{position:'fixed',bottom:'0',left:'0',font:'11px sans-serif',color:'#ffe6ac',zIndex:'10000',pointerEvents:'none',padding:'2px 6px'});document.body.appendChild(notice);}
 return runtime;
}

installLocalMenuMetadata(LocalGameBackend,{project:'Project-D'});
