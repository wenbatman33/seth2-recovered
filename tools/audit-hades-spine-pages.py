"""Check reconstructed Spine page references against actual original raster sizes."""
import pathlib,struct,json
root=pathlib.Path('assets/recovered/g1007')
def dimensions(path):
 with path.open('rb')as f:
  raw=f.read(24)
  if raw.startswith(b'\x89PNG'):return struct.unpack('>II',raw[16:24])
  f.seek(2)
  while True:
   byte=f.read(1)
   if not byte:raise ValueError('No JPEG size')
   if byte!=b'\xff':continue
   marker=f.read(1)
   while marker==b'\xff':marker=f.read(1)
   if marker in (b'\xd8',b'\xd9'):continue
   size=struct.unpack('>H',f.read(2))[0]
   if marker and marker[0]in [0xc0,0xc1,0xc2,0xc3,0xc5,0xc6,0xc7,0xc9,0xca,0xcb,0xcd,0xce,0xcf]:
    _,height,width=struct.unpack('>BHH',f.read(5));return width,height
   f.seek(size-2,1)
checked=0;issues=[]
for atlas in root.rglob('*.atlas'):
 lines=atlas.read_text().splitlines()
 for i,line in enumerate(lines[:-1]):
  if not line or not lines[i+1].startswith('size:'):continue
  page=atlas.parent/line;expected=tuple(map(int,lines[i+1][5:].split(',')));checked+=1
  if not page.is_file():issues.append({'atlas':str(atlas),'page':line,'missing':True});continue
  actual=dimensions(page)
  if actual!=expected:issues.append({'atlas':str(atlas),'page':line,'expected':expected,'actual':actual})
report={'checkedPages':checked,'issues':issues}
pathlib.Path('research/atg/hades/creator-spine-page-audit.json').write_text(json.dumps(report,indent=2))
print(json.dumps(report));raise SystemExit(bool(issues))
