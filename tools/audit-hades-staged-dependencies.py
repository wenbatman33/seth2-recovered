"""Read-only UUID closure audit of staged original Hades prefabs/scenes."""
import json,pathlib,collections,re
from restore_cocos_serialization import decode_uuid
roots=[pathlib.Path('assets'),pathlib.Path('research/atg/hades/creator-asset-staging/assets'),pathlib.Path('research/atg/hades/creator-script-staging'),pathlib.Path('/Applications/Cocos/Creator/3.8.8/CocosCreator.app/Contents/Resources/resources/3d/engine/editor/assets')]
uids=set()
for root in roots:
 for p in root.rglob('*.meta'):
  try:
   m=json.loads(p.read_text());uids.add(m['uuid']);uids.update(s['uuid'] for s in m.get('subMetas',{}).values())
  except (ValueError,KeyError):pass
missing=collections.defaultdict(set);unknown=collections.defaultdict(set)
def visit(v,file):
 if isinstance(v,dict):
  u=v.get('__uuid__')
  if u and u not in uids:missing[u].add(str(file))
  c=v.get('__type__','')
  if len(c) in (22,23) and re.fullmatch('[0-9a-f]{2}[A-Za-z0-9+/]+',c) and decode_uuid(c) not in uids:unknown[c].add(str(file))
  for child in v.values():visit(child,file)
 elif isinstance(v,list):
  for child in v:visit(child,file)
for p in roots[1].rglob('*'):
 if p.suffix in ['.prefab','.scene','.anim','.mtl']:visit(json.loads(p.read_text()),p)
result={'missingAssetUuids':{k:sorted(v) for k,v in missing.items()},'missingScriptUuids':{k:sorted(v)for k,v in unknown.items()}}
pathlib.Path('research/atg/hades/creator-asset-staging/dependency-audit.json').write_text(json.dumps(result,indent=2))
print(json.dumps({'missingAssets':len(missing),'missingScripts':len(unknown),'assetIds':list(missing)[:25],'scriptIds':list(unknown)[:10]},indent=2))
