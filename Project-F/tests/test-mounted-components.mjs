/** Original nested component contract; --built verifies actual official artifacts.
 * No Creator invocation, asset regeneration, runtime guards or GUI acceptance claim.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
const tests=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(tests,'..');
const fixture=JSON.parse(fs.readFileSync(path.join(tests,'fixtures/GameView-mounted-components-source.json'),'utf8'));
const gameView='assets/game/content/prefabs/GameView.prefab',roller='assets/game/content/prefabs/slots/SlotRoller.prefab';
const a=JSON.parse(fs.readFileSync(path.join(root,gameView),'utf8')),b=JSON.parse(fs.readFileSync(path.join(root,roller),'utf8'));
const type=fixture.mounts[0].componentType,fileId=fixture.mounts[0].componentFileId,baseUuid='bf3270d9-02cc-4891-961b-d738a6f289e1';
assert.equal(JSON.parse(fs.readFileSync(path.join(root,gameView+'.meta'),'utf8')).uuid,fixture.assetUuid);
assert.equal(JSON.parse(fs.readFileSync(path.join(root,roller+'.meta'),'utf8')).uuid,baseUuid);
const deref=(doc,value)=>value&&Number.isInteger(value.__id__)?doc[value.__id__]:value;
function baseComponent(doc){const component=doc.find(row=>row?.__type__===type);assert(component,'Actual base prefab must retain original custom class');assert.equal(deref(doc,component.__prefab).fileId,fileId);assert.equal(component.symbolPrefab.__uuid__,fixture.mounts[0].symbolPrefabUuid);const node=deref(doc,component.node);assert(node._components.some(ref=>deref(doc,ref)===component),'Native base node must own original component');return component;}
baseComponent(b);
const controller=a.find(row=>Array.isArray(row.slotReels)&&Array.isArray(row.slotRollers));assert(controller);assert.equal(controller.slotRollers.length,6);
for(const [index,reference]of controller.slotRollers.entries()){
 const expected=fixture.mounts[index],component=deref(a,reference);assert.equal(component.__type__,type);assert.equal(deref(a,component.__prefab).fileId,fileId);const node=deref(a,component.node),prefab=deref(a,node._prefab),instance=deref(a,prefab.instance);assert.equal(prefab.asset.__uuid__,baseUuid);assert.equal(prefab.fileId,expected.nodeFileId);assert.equal(instance.fileId,expected.instanceFileId);
 assert(!instance.mountedComponents.some(ref=>deref(a,ref).components.some(item=>deref(a,item)===component)),'Custom component must be native inherited, not mounted twice');
}
console.log('PASS original component, nested node, instance, script and asset identities retained');
function instanceContracts(doc,requireSourceIds){
 const controller=doc.find(row=>Array.isArray(row.slotRollers));assert(controller&&controller.slotRollers.length===6);const overrides=doc.filter(row=>row?.__type__==='cc.TargetOverrideInfo'&&row.propertyPath?.[0]==='slotRollers');assert.equal(overrides.length,6,'Exactly six native nested component targets');
 const nodes=new Set();
 for(const [index,expected]of fixture.mounts.entries()){
  const override=overrides.find(row=>Number(row.propertyPath[1])===index);assert(override);assert.equal(deref(doc,override.source),controller,'Target override must point to original controller');assert.deepEqual(deref(doc,override.targetInfo).localID,[fileId]);const node=deref(doc,override.target);assert(node&&node.__type__==='cc.Node');assert(!nodes.has(node));nodes.add(node);const prefab=deref(doc,node._prefab);assert.equal(prefab.asset.__uuid__,baseUuid);assert.equal(prefab.fileId,expected.nodeFileId);const instance=deref(doc,prefab.instance);assert.equal(instance.fileId,expected.instanceFileId);
  const dark=instance.propertyOverrides.map(ref=>deref(doc,ref)).filter(row=>row.propertyPath?.join('.')==='ndDark'&&deref(doc,row.targetInfo).localID.join('/')===fileId);assert.equal(dark.length,1);const darkNode=deref(doc,dark[0].value);assert(darkNode&&darkNode.__type__==='cc.Node');assert.equal(darkNode._name,'dark');assert.equal(deref(doc,darkNode._parent),node,'Native inherited roller gets its own original dark node');
  if(requireSourceIds){const original=deref(doc,controller.slotRollers[index]);assert.equal(deref(doc,original.node),node);}
 }
 return nodes.size;
}
assert.equal(instanceContracts(a,true),6);
console.log('PASS six native component targets and original per-instance dark references');
let compiled=false;
if(process.argv.includes('--built')){
 const code=String.raw`
from pathlib import Path
import json,sys
sys.dont_write_bytecode=True;sys.path.insert(0,sys.argv[1])
from restore_cocos_serialization import unpack,CompiledDecoder,editor_document
base=Path(sys.argv[2])/'build/web/assets/g1004';config=json.loads((base/'config.json').read_text());result=[]
for uid in sys.argv[3:]:
 for pack,values in config['packs'].items():
  if uid in values:
   file=next((base/'import'/pack[:2]).glob(pack+'*.json'));result.append(editor_document(CompiledDecoder(unpack(json.loads(file.read_text()))[values.index(uid)]).decode(),uid));break
 else:raise ValueError('Actual build missing original prefab '+uid)
print(json.dumps(result))
`;
 const [view,base]=JSON.parse(execFileSync('python3',['-c',code,path.resolve(root,'../tools/recovery'),root,fixture.assetUuid,baseUuid],{encoding:'utf8',maxBuffer:4*1024*1024}));baseComponent(base);assert.equal(instanceContracts(view,false),6);compiled=true;
 console.log('PASS official compiled base class and six original nested component-resolution contracts');
}
console.log(JSON.stringify({project:'Project-F',passed:compiled?3:2,originalRollerInstances:6,compiledResolutionContractVerified:compiled,actualRuntimeComponentsVerified:false,guiVerified:false}));
