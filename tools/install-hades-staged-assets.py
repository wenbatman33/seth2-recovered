"""Install only Hades assets; preserve existing UUIDs and the shared scene."""
import pathlib,json,shutil
stage=pathlib.Path('research/atg/hades/creator-asset-staging-v3')
root=pathlib.Path('assets/recovered')
report=json.loads((stage/'asset-map.json').read_text())
skip={'ed1c7a5d-01d8-4ed0-9393-741fe7f675a0','731f9493-31a3-4e03-96c8-56195b811e8d'}
existing={}
for p in root.rglob('*.meta'):
 try:existing[json.loads(p.read_text())['uuid']]=pathlib.Path(str(p)[:-5])
 except (ValueError,KeyError):pass
targets={}
for item in report['outputs']:
 if item['uuid'] in skip:continue
 relative=pathlib.Path(item['path']).relative_to('assets/recovered')
 targets[item['uuid']]=(stage/item['path'],root/relative)
relocations=[]
for uid,(src,dst)in targets.items():
 current=existing.get(uid)
 if current and current!=dst:
  if dst.exists():raise RuntimeError('Refusing occupied relocation '+str(dst))
  relocations.append((current,dst,uid))
for current,dst,uid in relocations:
 dst.parent.mkdir(parents=True,exist_ok=True)
 current.rename(dst);pathlib.Path(str(current)+'.meta').rename(str(dst)+'.meta')
for uid,(src,dst)in targets.items():
 dst.parent.mkdir(parents=True,exist_ok=True)
 meta=pathlib.Path(str(dst)+'.meta')
 if meta.exists() and json.loads(meta.read_text())['uuid']!=uid:raise RuntimeError('Refusing different UUID '+str(dst))
 shutil.copyfile(src,dst);shutil.copyfile(str(src)+'.meta',meta)
 if src.suffix=='.json' and src.with_suffix('.atlas').exists():shutil.copyfile(src.with_suffix('.atlas'),dst.with_suffix('.atlas'))
after={json.loads(p.read_text()).get('uuid')for p in root.rglob('*.meta')}
assert set(existing)<=after,'An installed UUID was lost'
summary={'installed':len(targets),'relocatedPreservingUuid':len(relocations),'preservedShared':sorted(skip)}
pathlib.Path('research/atg/hades/creator-asset-installation.json').write_text(json.dumps(summary,indent=2))
print(json.dumps(summary))
