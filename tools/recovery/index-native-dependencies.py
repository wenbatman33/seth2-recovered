"""Read native extensions from decoded records, including packed imports.

Only parses data; never executes captured scripts, shell files or game code.
"""
import importlib.util,json,sys
from pathlib import Path

here=Path(__file__).resolve().parent
sys.path.insert(0,str(here))
spec=importlib.util.spec_from_file_location('asset_staging',here/'stage-cocos-assets.py')
module=importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
records,bundles,natives,errors=module.load_records(Path(sys.argv[1]).resolve())
plan=[]
for uid,record in records.items():
    if not record['data'] or not isinstance(record['data'][0],dict):continue
    obj=record['data'][0]
    extension=obj.get('_native','')
    if not extension or (uid,extension) in natives:continue
    if not extension.startswith('.') or '/' in extension or '\\' in extension:
        errors.append({'uuid':uid,'reason':'unsupported native filename','native':extension})
        continue
    config=bundles[record['bundle']]
    matches=[i for i,raw in enumerate(config['uuids']) if module.decode_uuid(raw)==uid]
    if len(matches)!=1:continue
    plan.append({'bundle':record['bundle'],'index':matches[0],'uuid':uid,'extension':extension,'type':obj.get('__type__')})
print(json.dumps({'requests':plan,'decodeErrors':errors}))
