#!/usr/bin/env python3
"""Compare captured public bundle paths with a real Creator build, without execution.
A missing path is evidence to investigate, not proof that the original image is absent.
"""
import argparse, hashlib, importlib.util, json
from pathlib import Path
spec=importlib.util.spec_from_file_location('serialization',Path(__file__).with_name('restore_cocos_serialization.py'))
serialization=importlib.util.module_from_spec(spec);spec.loader.exec_module(serialization)
parser=argparse.ArgumentParser();parser.add_argument('project',type=Path);parser.add_argument('--capture',type=Path);parser.add_argument('--report',type=Path);args=parser.parse_args()
root=args.project.resolve();capture=args.capture or root.parent/'.cache/rea-new-games'/root.name/'capture'
original=[];built=[];hashes=[]
def collect(base,source):
 rows=[]
 for file in sorted(base.glob('*/config*.json')):
  if file.name!='config.json':continue
  d=json.loads(file.read_text());bundle=d.get('name',file.parent.name);uuids=d.get('uuids',[]);types=d.get('types',[])
  for key,value in d.get('paths',{}).items():
   uid=uuids[int(key)] if key.isdigit() and int(key)<len(uuids) else key
   uid=serialization.decode_uuid(uid);kind=types[value[1]] if isinstance(value[1],int) else value[1]
   rows.append({'bundle':bundle,'path':value[0],'type':kind,'uuid':uid})
  hashes.append({'scope':'captured' if source else 'built','file':str(file.relative_to(capture if source else root)),'sha256':hashlib.sha256(file.read_bytes()).hexdigest()})
 return rows
original=collect(capture/'assets',True);built=collect(root/'build/web/assets',False)
by_path={(r['bundle'],r['path'],r['type']):r for r in built};by_uuid={r['uuid']:r for r in built};missing=[];identity=[]
for r in original:
 if r['type'] not in ['cc.SpriteFrame','cc.SpriteAtlas','cc.Texture2D','cc.ImageAsset','cc.Prefab','cc.BitmapFont','cc.AudioClip','cc.AnimationClip','sp.SkeletonData']:continue
 actual=by_path.get((r['bundle'],r['path'],r['type']))
 if actual:
  if actual['uuid']!=r['uuid']:identity.append({'source':r,'built':actual})
 else:missing.append({**r,'sameUuidElsewhere':by_uuid.get(r['uuid'])})
report={'project':root.name,'status':'static path comparison; runtime alias bridges require separate validation','sourcePathCount':len(original),'builtPathCount':len(built),'missingOriginalPaths':missing,'identityMismatches':identity,'evidence':hashes}
if args.report:args.report.parent.mkdir(parents=True,exist_ok=True);args.report.write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({'project':root.name,'sourcePaths':len(original),'builtPaths':len(built),'missingOriginalPaths':len(missing),'missingUuidPathEntries':sum(r['sameUuidElsewhere'] is None for r in missing),'identityMismatches':len(identity),'report':str(args.report) if args.report else None}))
