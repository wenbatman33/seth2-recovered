import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import assert from 'node:assert/strict';
for(const folder of ['Project-A','Project-B']){
  const source=readFileSync(new URL('../'+folder+'/assets/shared/scripts/main-BundleManager.ts',import.meta.url),'utf8').replace(/^import .*;$/gm,'').replace(/^export .*;$/gm,'');
  const calls=[],context={
    window:{location:{hostname:'example.github.io'},__recoveredLaunch:{scene:'db://assets/scenes/Game.scene'}},
    __dependency_0:{asyncToGenerator:()=>()=>{throw Error('Provider manifest branch must not run');},regeneratorRuntime:()=>({mark:fn=>fn})},
    __dependency_1:{cclegacy:{_RF:{push(){},pop(){}}},assetManager:{loadBundle(name,callback){calls.push(name);callback(null,{name});}}},
    __dependency_2:{Macro:{}},__dependency_3:{EBundles:{slotFramework:0,0:'slotFramework'}},Promise
  };
  runInNewContext(source+'\nglobalThis.TestBundleManager=__export_0;',context);
  const manager=new context.TestBundleManager();let completed=0;
  for(const bundle of ['slotFramework',folder==='Project-A'?'g1005':'g1007'])await manager._loadBundle(bundle,(error,result)=>{assert.equal(error,null);assert.equal(result.name,bundle);completed++;});
  assert.equal(completed,2);assert.deepEqual(calls,['slotFramework',folder==='Project-A'?'g1005':'g1007']);
}
console.log('PASS both recovered clients load packaged bundles on production domains without a provider manifest');
