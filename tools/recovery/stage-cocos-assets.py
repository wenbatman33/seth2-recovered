"""Stage captured Cocos assets into a BRAND NEW project directory.

Pure offline asset reconstruction: no engine execution, network, build, scripts,
or installed-project mutation. asset-map.json records unresolved source gaps;
nonzero exit means the staging is incomplete and must not be treated as accepted.
"""
from pathlib import Path
from copy import deepcopy
import argparse,hashlib,json,shutil,sys,os,re
sys.dont_write_bytecode=True
from recover_cocos_effect import effect_source
from restore_cocos_serialization import CompiledDecoder,unpack,decode_uuid,editor_document,decode_ccon_binary

def meta(path,uid,importer,version='1.0.0',user=None):
    target=Path(str(path)+'.meta')
    target.write_text(json.dumps(dict(ver=version,importer=importer,imported=False,uuid=uid,files=[],subMetas={},userData=user or {}),indent=2)+'\n')

def asset_key(path):
    """Cocos publication appends `.version` before the real file extension."""
    return decode_uuid(path.stem.split('.',1)[0])


def safe_relative(value):
    # Bundle paths are runtime load keys. A literal leading `assets/` belongs
    # inside the bundle and must not be removed during editor reconstruction.
    path=Path(value)
    if path.is_absolute() or '..' in path.parts or not value or '\\' in value:
        raise ValueError(f'Unsafe captured asset path: {value!r}')
    return path


def asset_root(project,bundle):
    safe_relative(bundle)
    if re.fullmatch(r'g\d+',bundle):return project/'assets/game/content'
    return project/({'resources':'assets/resources','main':'assets/shared/app','slotFramework':'assets/shared/framework'}.get(bundle,'assets/shared/'+bundle))


def decoded_document(doc):
    if isinstance(doc,list) and len(doc)==11 and doc[0]==1:return CompiledDecoder(doc).decode()
    if isinstance(doc,list) and doc and isinstance(doc[0],dict):return doc
    if isinstance(doc,dict) and '__type__' in doc:return [doc]
    raise ValueError('Unknown imported document structure')


def canonical(data):return json.dumps(data,sort_keys=True,separators=(',',':'),ensure_ascii=False)


def load_records(capture):
    """Inventory ALL bundle manifests; conflicting duplicate UUIDs fail closed.

    Redirected UUIDs refer to another bundle and are not local missing imports.
    Pack IDs may be short non-UUID hashes; asset IDs preserve original sub-UUIDs.
    """
    records={};bundles={};native={};errors=[];native_hashes={}
    def add(uid,data,bundle,source):
        uid=decode_uuid(uid)
        item=dict(bundle=bundle,source=str(source.relative_to(capture)),data=data)
        if uid in records:
            previous=records[uid]
            if canonical(previous['data'])!=canonical(data):
                errors.append(dict(uuid=uid,bundle=bundle,source=item['source'],previousSource=previous['source'],reason='duplicate UUID has conflicting decoded content'))
        else:records[uid]=item
    configs=[p for p in sorted(capture.rglob('config*.json')) if re.fullmatch(r'config(?:\.[^.]+)?\.json',p.name)]
    if not configs:errors.append(dict(reason='no bundle configs found'))
    for config in configs:
        try:
            c=json.loads(config.read_text());base=config.parent;name=c['name'];safe_relative(name)
            if name in bundles:
                if canonical(bundles[name])!=canonical(c):errors.append(dict(bundle=name,reason='conflicting duplicate bundle config',source=str(config.relative_to(capture))))
                continue
            bundles[name]=c
            for p in sorted((base/safe_relative(c.get('nativeBase','native'))).rglob('*')):
                if not p.is_file():continue
                key=(asset_key(p),p.suffix.lower())
                digest=hashlib.sha256(p.read_bytes()).hexdigest()
                if key in native and native_hashes[key]!=digest:
                    errors.append(dict(uuid=key[0],extension=key[1],bundle=name,reason='duplicate UUID has conflicting native content',source=str(p.relative_to(capture)),previousSource=str(native[key].relative_to(capture))))
                else:native.setdefault(key,p);native_hashes[key]=digest
            docs={}
            imported=base/safe_relative(c.get('importBase','import'))
            for p in sorted(imported.rglob('*.json')):
                try:
                    key=asset_key(p);items=unpack(json.loads(p.read_text()))
                    if key in docs and canonical(docs[key][1])!=canonical(items):
                        errors.append(dict(bundle=name,uuid=key,source=str(p.relative_to(capture)),reason='conflicting versioned import documents'))
                    else:docs.setdefault(key,(p,items))
                except (ValueError,KeyError,TypeError,IndexError) as exc:
                    errors.append(dict(bundle=name,source=str(p.relative_to(capture)),reason='import JSON decode failed',detail=str(exc)))
            packed=set()
            pack_keys={decode_uuid(pack) for pack in c.get('packs',{})}
            for pack,indices in c.get('packs',{}).items():
                key=decode_uuid(pack)
                if key not in docs:
                    errors.append(dict(bundle=name,missingPack=pack,reason='required import pack missing'));continue
                source,items=docs[key]
                if len(indices)!=len(items):
                    errors.append(dict(bundle=name,source=str(source.relative_to(capture)),reason='pack item count mismatch',expected=len(indices),actual=len(items)));continue
                for ix,doc in zip(indices,items):
                    uid=decode_uuid(c['uuids'][int(ix)]);packed.add(uid)
                    try:add(uid,decoded_document(doc),name,source)
                    except (ValueError,KeyError,TypeError,IndexError) as exc:errors.append(dict(uuid=uid,bundle=name,source=str(source.relative_to(capture)),reason='compiled asset decode failed',detail=str(exc)))
            for raw in c.get('uuids',[]):
                uid=decode_uuid(raw)
                if uid in packed or uid in pack_keys or uid not in docs:continue
                source,items=docs[uid]
                if len(items)!=1:
                    errors.append(dict(uuid=uid,bundle=name,reason='unpacked import has multiple documents'));continue
                try:add(uid,decoded_document(items[0]),name,source)
                except (ValueError,KeyError,TypeError,IndexError) as exc:errors.append(dict(uuid=uid,bundle=name,source=str(source.relative_to(capture)),reason='compiled asset decode failed',detail=str(exc)))
            for p in sorted(imported.rglob('*.cconb')):
                uid=asset_key(p)
                try:add(uid,decode_ccon_binary(p.read_bytes()),name,p)
                except (ValueError,KeyError,TypeError,IndexError) as exc:errors.append(dict(uuid=uid,bundle=name,source=str(p.relative_to(capture)),reason='CCON decode failed',detail=str(exc)))
            redirected={int(i) for i in c.get('redirect',[])[::2]}
            required={int(i) for i in c.get('paths',{})}|{int(i) for i in c.get('scenes',{}).values()}
            for index in sorted(required-redirected):
                uid=decode_uuid(c['uuids'][index])
                if uid not in records:errors.append(dict(uuid=uid,bundle=name,reason='required asset import missing'))
        except (OSError,ValueError,KeyError,TypeError,IndexError) as exc:
            errors.append(dict(source=str(config.relative_to(capture)),reason='bundle inventory failed',detail=str(exc)))
    return records,bundles,native,errors

def load_builtin_assets(engine_assets):
    """Index original engine roots AND recursive subassets (cube faces nest twice).

    A subasset remains backed by its original engine source file; never emit a
    duplicate user asset or invent native raster data for an engine builtin.
    """
    result={}
    def add(meta,source):
        if meta.get('uuid'):result[meta['uuid']]=(source,meta)
        for child in meta.get('subMetas',{}).values():add(child,source)
    for path in engine_assets.rglob('*.meta'):
        try:add(json.loads(path.read_text()),Path(str(path)[:-5]))
        except (ValueError,KeyError):pass
    return result


def stage(capture, project):
    PROJECT=project
    records,bundles,native,errors=load_records(capture)
    writes=[];builtin=[];warnings=[]
    engine_assets=Path('/Applications/Cocos/Creator/3.8.8/CocosCreator.app/Contents/Resources/resources/3d/engine/editor/assets')
    builtin_assets=load_builtin_assets(engine_assets)
    source_paths={}
    for bundle,c in bundles.items():
        redirected={int(i) for i in c.get('redirect',[])[::2]}
        for index,path_info in c.get('paths',{}).items():
            if int(index) in redirected:continue
            uid=decode_uuid(c['uuids'][int(index)])
            if '@' not in uid and not path_info[0].startswith('db:'):
                source_paths.setdefault(uid,(bundle,path_info[0]))
        for scene_path,index in c.get('scenes',{}).items():
            uid=decode_uuid(c['uuids'][int(index)])
            source_paths[uid]=(bundle,scene_path.removeprefix('db://assets/').removeprefix('db:/assets/'))
    destination_owners={}
    destinations={}
    def source_destination(path,uid):
        if uid in destinations:return destinations[uid]
        is_scene=records.get(uid,{}).get('data',[{}])[0].get('__type__')=='cc.SceneAsset'
        if is_scene:path=PROJECT/'assets/scenes'/path.name
        if uid in source_paths:
            bundle,relative=source_paths[uid]
            relative=safe_relative(relative)
            if relative.suffix==path.suffix:relative=relative.with_suffix('')
            root=asset_root(PROJECT,bundle)
            if is_scene:root=PROJECT/'assets/scenes'
            path=root/(str(relative)+path.suffix)
        owner_key=str(path.with_suffix('')) if path.suffix in ['.png','.jpg','.jpeg','.webp'] else str(path)
        owner=destination_owners.get(owner_key)
        if owner and owner!=uid:
            path=path.with_name(path.stem+'-'+uid.replace('@','-')+path.suffix)
        if not path.resolve().is_relative_to(PROJECT):
            raise ValueError(f'Captured asset destination escapes output: {path}')
        destination_owners[owner_key]=uid
        destinations[uid]=path
        return path
    # Never derive source metadata from the active editor asset-db: an early
    # CLI startup without engine importers can downgrade every file to '*'.
    image_template=dict(ver='1.0.27',importer='image',imported=False,uuid='00000000-0000-0000-0000-000000000000',files=[],subMetas={},userData=dict(type='sprite-frame',fixAlphaTransparencyArtifacts=False,hasAlpha=True,redirect='00000000-0000-0000-0000-000000000000@6c48a'))
    image_template['subMetas']['6c48a']=dict(importer='texture',uuid='00000000-0000-0000-0000-000000000000@6c48a',displayName='texture',id='6c48a',name='texture',userData=dict(wrapModeS='clamp-to-edge',wrapModeT='clamp-to-edge',imageUuidOrDatabaseUri='00000000-0000-0000-0000-000000000000',isUuid=True,visible=False,minfilter='linear',magfilter='linear',mipfilter='none',anisotropy=0),ver='1.0.22',imported=False,files=[],subMetas={})
    image_template['subMetas']['f9941']=dict(importer='sprite-frame',uuid='00000000-0000-0000-0000-000000000000@f9941',displayName='spriteFrame',id='f9941',name='spriteFrame',userData=dict(trimThreshold=1,rotated=False,offsetX=0,offsetY=0,trimX=0,trimY=0,width=0,height=0,rawWidth=0,rawHeight=0,borderTop=0,borderBottom=0,borderLeft=0,borderRight=0,packable=True,pixelsToUnit=100,pivotX=.5,pivotY=.5,meshType=0,vertices={},isUuid=True,imageUuidOrDatabaseUri='00000000-0000-0000-0000-000000000000@6c48a',atlasUuid='',trimType='custom'),ver='1.0.12',imported=False,files=[],subMetas={})
    image_paths={}
    def write(path,body,uid,kind,version='1.0.0',user=None):
        path=source_destination(path,uid)
        path.parent.mkdir(parents=True,exist_ok=True)
        if isinstance(body,Path):shutil.copyfile(body,path)
        else:path.write_text(body)
        meta(path,uid,kind,version,user)
        writes.append(dict(uuid=uid,path=str(path.relative_to(PROJECT)),type=kind,source=records.get(uid,{}).get('source'),nativeSource=str(body.relative_to(capture))if isinstance(body,Path)else None))
        return path
    def body(d):return json.dumps(d,ensure_ascii=False,indent=2)+'\n'
    for uid,r in records.items():
        try:
            obj=r['data'][0];kind=obj.get('__type__') if isinstance(obj,dict) else None
            if kind=='cc.ImageAsset':
                if uid in builtin_assets:
                    image_paths[uid]=builtin_assets[uid][0]
                    builtin.append(dict(uuid=uid,type=kind,source=str(builtin_assets[uid][0])));continue
                native_image=next((native[(uid,ext)]for ext in ['.png','.jpg','.jpeg','.webp']if(uid,ext)in native),None)
                if not native_image:errors.append(dict(uuid=uid,type=kind,reason='native raster not found'));continue
                dest=source_destination(PROJECT/'assets/shared/images'/r['bundle']/(uid+native_image.suffix),uid)
                write(dest,native_image,uid,'image','1.0.27');image_paths[uid]=dest
                m=deepcopy(image_template);old=m['uuid'];m['uuid']=uid;m['imported']=False
                def replace(x):
                    if isinstance(x,dict):return{k:replace(v)for k,v in x.items()}
                    if isinstance(x,list):return[replace(v)for v in x]
                    return x.replace(old,uid)if isinstance(x,str)else x
                m=replace(m)
                for sub in m['subMetas'].values():sub['displayName']=dest.stem
                sampler=records.get(uid+'@6c48a',{}).get('data',[{}])[0].get('_serialized',[])
                if isinstance(sampler,list)and sampler and isinstance(sampler[0],str):
                    fields=[int(x)for x in sampler[0].split(',')]
                    if len(fields)>=6:
                        filters={0:'none',1:'nearest',2:'linear',3:'anisotropic'}
                        wraps={0:'repeat',1:'mirrored-repeat',2:'clamp-to-edge',3:'clamp-to-border'}
                        m['subMetas']['6c48a']['userData'].update(minfilter=filters[fields[0]],magfilter=filters[fields[1]],wrapModeS=wraps[fields[2]],wrapModeT=wraps[fields[3]],mipfilter=filters[fields[4]],anisotropy=fields[5])
                for sub in m['subMetas'].values():sub['imported']=False
                frame=records.get(uid+'@f9941',{}).get('data',[{}])[0]
                if frame.get('_serialized'):
                    f=frame['_serialized'];u=m['subMetas']['f9941']['userData'];rect=f['rect'];size=f['originalSize'];off=f['offset'];caps=f.get('capInsets',[0,0,0,0])
                    u.update(trimType='custom',rotated=f.get('rotated',False),offsetX=off['x'],offsetY=off['y'],trimX=rect['x'],trimY=rect['y'],width=rect['width'],height=rect['height'],rawWidth=size['width'],rawHeight=size['height'],borderLeft=caps[0],borderTop=caps[1],borderRight=caps[2],borderBottom=caps[3],packable=f.get('packable',True),pixelsToUnit=f.get('pixelsToUnit',100))
                    vertices=deepcopy(f.get('vertices',{}))
                    for k in ['minPos','maxPos']:
                        if isinstance(vertices.get(k),dict):vertices[k]=[vertices[k].get(c,0)for c in ['x','y','z']]
                    # Auto-atlas publication rewrites frame coordinates to packed
                    # atlas space. We restore original individual raster sources,
                    # so derive their trim origin from originalSize/offset instead.
                    texture_uid=frame.get('_textureSource',{}).get('__uuid__','').split('@')[0]
                    if texture_uid and texture_uid!=uid:
                        u['rotated']=False
                        u['trimX']=(size['width']-rect['width'])/2+off['x']
                        u['trimY']=(size['height']-rect['height'])/2-off['y']
                        vertices={}
                    for key in ['rawPosition','indexes','uv','nuv','minPos','maxPos']:vertices.setdefault(key,[])
                    u['vertices']=vertices
                else:m['subMetas'].pop('f9941',None);m['userData']['type']='texture'
                Path(str(dest)+'.meta').write_text(body(m))
        except Exception as exc:
            errors.append(dict(uuid=uid,bundle=r["bundle"],reason="image restoration failed",detail=f"{type(exc).__name__}: {exc}"))
    for uid,r in sorted(records.items(),key=lambda item:isinstance(item[1]['data'][0],dict)and item[1]['data'][0].get('__type__')=='sp.SkeletonData'):
        try:
            data=r['data'];obj=data[0];kind=obj.get('__type__') if isinstance(obj,dict) else None
            if uid in builtin_assets:
                if kind!='cc.ImageAsset':builtin.append(dict(uuid=uid,type=kind,source=str(builtin_assets[uid][0])))
                continue
            safe_name=(obj.get('_name')or uid).replace('/','_').replace('\\','_')
            folder=asset_root(PROJECT,r['bundle'])
            if kind in ['cc.SceneAsset','cc.Prefab','cc.AnimationClip','cc.Material']:
                ext,imp,ver={'cc.SceneAsset':('.scene','scene','1.1.50'),'cc.Prefab':('.prefab','prefab','1.1.50'),'cc.AnimationClip':('.anim','animation-clip','2.0.3'),'cc.Material':('.mtl','material','1.0.21')}[kind]
                if kind=='cc.Material':
                    obj=deepcopy(obj);obj.setdefault('_techIdx',0);obj.setdefault('_objFlags',0);obj.setdefault('_native','')
                    if isinstance(obj.get('_effectAsset'),dict):obj['_effectAsset']['__expectedType__']='cc.EffectAsset'
                write(folder/(safe_name+'-'+uid[:8]+ext),body(obj if kind=='cc.Material' else editor_document(data,uid)),uid,imp,ver)
            elif kind=='cc.AudioClip':
                p=native.get((uid,obj.get('_native','.mp3')))
                if p:write(folder/'audio'/(safe_name+'-'+uid[:8]+p.suffix),p,uid,'audio-clip','1.0.11')
                else:errors.append(dict(uuid=uid,type=kind,reason='native audio missing'))
            elif kind=='cc.TTFFont':
                p=native.get((uid,obj.get('_native','.ttf')))
                if p:write(folder/'fonts'/(safe_name+'-'+uid[:8]+p.suffix),p,uid,'ttf-font','1.0.2')
                else:errors.append(dict(uuid=uid,type=kind,reason='native font missing'))
            elif kind=='cc.JsonAsset':write(folder/'json'/(safe_name+'-'+uid[:8]+'.json'),body(obj.get('json',obj.get('_json',{}))),uid,'json','1.0.3')
            elif kind=='cc.BitmapFont':
                cfg=obj['fntConfig'];frame_uid=obj.get('spriteFrame',{}).get('__uuid__','');image=image_paths.get(frame_uid.split('@')[0])
                if not image:errors.append(dict(uuid=uid,type=kind,reason='font texture missing',spriteFrame=frame_uid));continue
                dest=source_destination(folder/'fonts'/(safe_name+'-'+uid[:8]+'.fnt'),uid)
                frame=records[frame_uid]['data'][0]['_serialized'];size=frame['originalSize']
                page=os.path.relpath(image,dest.parent)
                lines=[f'info face="{safe_name}" size={cfg["fontSize"]} bold=0 italic=0 charset="" unicode=1 stretchH=100 smooth=1 aa=1 padding=0,0,0,0 spacing=0,0',f'common lineHeight={cfg["commonHeight"]} base={cfg["fontSize"]} scaleW={size["width"]} scaleH={size["height"]} pages=1 packed=0',f'page id=0 file="{page}"',f'chars count={len(cfg["fontDefDictionary"])}']
                for char,glyph in cfg['fontDefDictionary'].items():
                    rect=glyph['rect'];lines.append(f'char id={char} x={rect["x"]} y={rect["y"]} width={rect["width"]} height={rect["height"]} xoffset={glyph["xOffset"]} yoffset={glyph["yOffset"]} xadvance={glyph["xAdvance"]} page=0 chnl=15')
                kern=cfg.get('kerningDict',{});lines.append(f'kernings count={len(kern)}')
                for pair,amount in kern.items():
                    pair=int(pair);lines.append(f'kerning first={pair>>16} second={pair&65535} amount={amount}')
                write(dest,'\n'.join(lines)+'\n',uid,'bitmap-font','1.0.6',dict(_fntConfig=cfg,fontSize=cfg['fontSize'],textureUuid=frame_uid.split('@')[0]))
            elif kind=='cc.TextAsset':write(folder/'text'/(safe_name+'-'+uid[:8]+'.txt'),obj.get('text',''),uid,'text','1.0.2')
            elif kind=='cc.Asset':
                p=native.get((uid,obj.get('_native','')))
                if p:write(folder/'native'/(safe_name+'-'+uid[:8]+p.suffix),p,uid,'*','0.0.1')
                else:errors.append(dict(uuid=uid,type=kind,name=safe_name,reason='nonvisual native source absent',native=obj.get('_native')))
            elif kind=='cc.ParticleAsset':
                p=native.get((uid,'.plist'))
                if p:write(folder/'particles'/(safe_name+'-'+uid[:8]+'.plist'),p,uid,'particle','1.0.2',dict(spriteFrameUuid=obj.get('spriteFrame',{}).get('__uuid__')))
                else:errors.append(dict(uuid=uid,type=kind,reason='native plist absent'))
            elif kind=='cc.SpriteAtlas':
                # The packed atlas contains its exact frame UUID/name list but no
                # author packing settings. Recreate editable auto-atlas definition
                # over restored originals; Creator will repack it during build.
                template=engine_assets/'default_file_content/auto-atlas/default.pac.meta'
                user=json.loads(template.read_text())['userData']
                user.update(filterUnused=False,removeSpriteAtlasInBundle=False)
                write(folder/(safe_name+'-'+uid[:8]+'.pac'),body({'__type__':'cc.SpriteAtlas'}),uid,'auto-atlas','1.0.8',user)
                warnings.append(dict(uuid=uid,reason='auto-atlas packing settings reconstructed from installed Creator defaults; author packing settings unavailable'))
            elif kind=='cc.EffectAsset':
                if uid in builtin_assets:
                    # References resolve to installed engine built-ins. Do not create
                    # duplicate UUIDs in the user project.
                    builtin.append(dict(uuid=uid,type=kind,source=str(builtin_assets[uid][0])))
                else:
                    write(folder/'effects'/(safe_name+'-'+uid[:8]+'.effect'),effect_source(obj),uid,'effect','1.7.1')
            elif kind=='cc.RenderTexture':
                content=obj['_serialized'];dest=source_destination(folder/(safe_name+'-'+uid[:8]+'.rt'),uid)
                write(dest,body(dict(__type__='cc.RenderTexture',_objFlags=0,_native='',content=content)),uid,'render-texture','1.2.1',dict(width=content['w'],height=content['h'],anisotropy=0,minfilter='linear',magfilter='linear',mipfilter='none',wrapModeS='repeat',wrapModeT='repeat',redirect=uid+'@f9941'))
                m=json.loads(Path(str(dest)+'.meta').read_text());m['subMetas']['f9941']=dict(importer='rt-sprite-frame',uuid=uid+'@f9941',displayName=safe_name,id='f9941',name='spriteFrame',userData=dict(imageUuidOrDatabaseUri=uid,width=content['w'],height=content['h']),ver='1.0.0',imported=False,files=[],subMetas={});Path(str(dest)+'.meta').write_text(body(m))
            elif kind=='cc.PhysicsMaterial':
                if uid in builtin_assets:builtin.append(dict(uuid=uid,type=kind,source=str(builtin_assets[uid][0])))
                else:write(folder/(safe_name+'-'+uid[:8]+'.pmtl'),body(obj),uid,'physics-material','1.0.1')
            elif kind=='sp.SkeletonData':
                skeleton=obj.get('_skeletonJson')
                native_skeleton=None if skeleton else native.get((uid,obj.get('_native','.bin')))
                if not skeleton and not native_skeleton:
                    errors.append(dict(uuid=uid,type=kind,reason='native spine skeleton missing'));continue
                dest=source_destination(folder/'spine'/(safe_name+'-'+uid[:8]+('.json' if skeleton else '.skel')),uid)
                atlas=obj.get('_atlasText','')
                if not atlas:errors.append(dict(uuid=uid,type=kind,reason='spine atlas text missing'))
                if len(obj.get('textureNames',[]))!=len(obj.get('textures',[])):
                    errors.append(dict(uuid=uid,type=kind,reason='spine texture name/reference count mismatch'))
                for name,texture in zip(obj.get('textureNames',[]),obj.get('textures',[])):
                    image=image_paths.get(texture.get('__uuid__','').split('@')[0])
                    if image:
                        rel=os.path.relpath(image,dest.parent)
                        atlas='\n'.join(rel if line==name else line for line in atlas.split('\n'))
                    else:errors.append(dict(uuid=uid,type=kind,texture=texture,reason='spine native texture missing'))
                write(dest,body(skeleton) if skeleton else native_skeleton,uid,'spine-data','1.2.5')
                atlas_path=dest.with_suffix('.atlas');atlas_path.write_text(atlas)
            elif kind not in ['cc.ImageAsset','cc.SpriteFrame','cc.Texture2D']:
                errors.append(dict(uuid=uid,type=kind,reason='source importer restoration not implemented'))
        except Exception as exc:
            errors.append(dict(uuid=uid,bundle=r["bundle"],reason="asset restoration failed",detail=f"{type(exc).__name__}: {exc}"))
    unknown=[e for e in errors if e.get('reason')=='source importer restoration not implemented']
    report=dict(status='incomplete' if errors else 'assets-staged-not-runtime-verified',capture=str(capture),bundles=sorted(bundles),records=len(records),outputs=writes,builtinReferences=builtin,warnings=warnings,unknownTypes=unknown,unresolved=errors)
    (PROJECT/'asset-map.json').write_text(body(report))
    print(json.dumps(dict(status=report['status'],records=len(records),written=len(writes),unresolved=len(errors))))
    return 1 if errors else 0


def main(argv=None):
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('capture_assets_dir',type=Path)
    parser.add_argument('brand_new_output_project',type=Path)
    args=parser.parse_args(argv)
    capture=args.capture_assets_dir.expanduser().resolve()
    requested=args.brand_new_output_project.expanduser()
    project=requested.resolve()
    repo=Path(__file__).resolve().parents[2]
    if not capture.is_dir():parser.error('Capture assets directory does not exist')
    for protected in [repo/'Project-A',repo/'Project-B',capture]:
        if project==protected or project.is_relative_to(protected):parser.error('Output overlaps a protected project or the capture directory')
    if capture.is_relative_to(project):parser.error('Output cannot contain the capture directory')
    if requested.exists() or requested.is_symlink():parser.error('Output must be brand new; existing roots are never overwritten')
    if not list(capture.rglob('config*.json')):parser.error('Capture contains no bundle configs')
    try:
        project.parent.mkdir(parents=True,exist_ok=True)
        project.mkdir(exist_ok=False)
    except FileExistsError:parser.error('Output already exists; no files were changed')
    try:return stage(capture,project)
    except Exception as exc:
        # Keep an inspectable failure report, never claim success after partial output.
        (project/'asset-map.json').write_text(json.dumps({'status':'incomplete','unresolved':[{'reason':'staging exception','type':type(exc).__name__,'detail':str(exc)}]},indent=2)+'\n')
        print(f'Staging incomplete: {type(exc).__name__}: {exc}',file=sys.stderr)
        return 1

if __name__=='__main__':sys.exit(main())
