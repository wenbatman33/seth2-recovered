"""Disambiguate original png/jpg siblings while retaining their .meta UUIDs."""
import pathlib,json,os,re
root=pathlib.Path('assets/recovered/g1007')
moves={}
for p in root.rglob('*.jpg'):
 if p.with_suffix('.png').exists():
  uid=json.loads(pathlib.Path(str(p)+'.meta').read_text())['uuid']
  dest=p.with_name(p.stem+'-'+uid[:8]+p.suffix)
  if dest.exists():raise RuntimeError('Destination already exists: '+str(dest))
  moves[p.resolve()]=dest.resolve()
for p in root.rglob('*'):
 if p.suffix not in ['.atlas','.fnt']:continue
 original=p.read_text();text=original
 if p.suffix=='.atlas':
  text='\n'.join(os.path.relpath(moves[(p.parent/line).resolve()],p.parent) if (p.parent/line).resolve() in moves else line for line in text.split('\n'))
 else:
  def replace(m):
   target=(p.parent/m[1]).resolve()
   return 'file="'+os.path.relpath(moves[target],p.parent)+'"' if target in moves else m[0]
  text=re.sub(r'file="([^"]+)"',replace,text)
 if text!=original:p.write_text(text)
for src,dst in moves.items():
 src.rename(dst);pathlib.Path(str(src)+'.meta').rename(str(dst)+'.meta')
report={str(k):str(v)for k,v in moves.items()}
pathlib.Path('research/atg/hades/creator-image-path-renames.json').write_text(json.dumps(report,indent=2))
print('Renamed original image variants without changing UUID:',len(moves))
