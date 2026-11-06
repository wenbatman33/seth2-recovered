"""Small offline fixtures for the asset stager; no Creator, browser, or network.

Run: python3 tests/test-stage-cocos-assets.py
Native fixture bytes are opaque test data, never product/game artwork.
"""
from pathlib import Path
import json
import struct
import subprocess
import sys
import tempfile
import unittest
import uuid
import importlib.util

ROOT=Path(__file__).resolve().parents[1]
SCRIPT=ROOT/'tools/recovery/stage-cocos-assets.py'
sys.path.insert(0,str(SCRIPT.parent))
spec=importlib.util.spec_from_file_location('stage_cocos_assets',SCRIPT)
stager=importlib.util.module_from_spec(spec);spec.loader.exec_module(stager)


def uid(name):return str(uuid.uuid5(uuid.NAMESPACE_URL,'asset-stager-fixture:'+name))


def compiled(kind,name,**props):
    keys=['_name',*props]
    return [1,0,0,[[kind,keys,len(keys)+1]],[[0,*range(len(keys)),len(keys)+1]],[[0,name,*props.values()]],0,0,[],[],[]]


class StagerFixture(unittest.TestCase):
    def setUp(self):
        self.temp=tempfile.TemporaryDirectory()
        self.root=Path(self.temp.name)
        self.capture=self.root/'capture-assets'
        self.capture.mkdir()
        self.output=self.root/'new-project'

    def tearDown(self):self.temp.cleanup()

    def bundle(self,name,assets,pack=False,versioned=False,scenes=None):
        base=self.capture/name
        base.mkdir()
        (base/'import/00').mkdir(parents=True)
        config={'name':name,'uuids':[item[0] for item in assets],'paths':{str(i):[item[1],0] for i,item in enumerate(assets)},'scenes':scenes or {},'packs':{},'redirect':[],'types':[]}
        suffix='.release123' if versioned else ''
        if pack:
            packid='0fixture0'
            config['packs']={packid:list(range(len(assets)))}
            config['uuids'].append(packid)  # Real builds also list pack IDs here.
            docs=[item[2] for item in assets]
            first=docs[0]
            # Cocos packed form shares the first five tables between sections.
            assert all(doc[:5]==first[:5] for doc in docs)
            document=first[:5]+[[doc[5:] for doc in docs]]
            (base/'import/00'/f'{packid}{suffix}.json').write_text(json.dumps(document))
        else:
            for key,_,doc in assets:
                (base/'import/00'/f'{key}{suffix}.json').write_text(json.dumps(doc))
        (base/('config.release123.json' if versioned else 'config.json')).write_text(json.dumps(config))
        return base

    def native(self,base,key,extension='.png',content=b'opaque native fixture',versioned=False):
        target=base/'native/00'/f'{key}{".release123" if versioned else ""}{extension}'
        target.parent.mkdir(parents=True,exist_ok=True)
        target.write_bytes(content)
        return target

    def run_stage(self,output=None):
        result=subprocess.run([sys.executable,str(SCRIPT),str(self.capture),str(output or self.output)],capture_output=True,text=True)
        report=json.loads(self.output.joinpath('asset-map.json').read_text()) if self.output.joinpath('asset-map.json').exists() else None
        return result,report

    def test_all_bundles_versioned_filenames_and_scene_reordering(self):
        image=uid('image');text=uid('text');scene=uid('scene');framework=uid('framework')
        game=self.bundle('g1999',[(image,'assets/symbol',compiled('cc.ImageAsset','symbol'))],versioned=True)
        original=self.native(game,image,versioned=True)
        self.bundle('resources',[(text,'config/example',compiled('cc.JsonAsset','settings',json={'fixture':True}))],versioned=True)
        self.bundle('slotFramework',[(framework,'layout',compiled('cc.TextAsset','layout',text='framework'))])
        doc=[{'__type__':'cc.SceneAsset','scene':{'__id__':2}},{'__type__':'cc.Node','_name':'child','_parent':{'__id__':2}},{'__type__':'cc.Scene','_children':[{'__id__':1}]}]
        main=self.bundle('main',[],scenes={'db://assets/main.scene':0})
        config=json.loads((main/'config.json').read_text());config['uuids']=[scene]
        (main/'config.json').write_text(json.dumps(config))
        payload=json.dumps(doc).encode()
        (main/'import/00'/f'{scene}.release123.cconb').write_bytes(struct.pack('<IIII',0x4e4f4343,1,len(payload)+16,len(payload))+payload)
        result,report=self.run_stage()
        self.assertEqual(result.returncode,0,result.stderr+result.stdout)
        self.assertEqual(report['bundles'],['g1999','main','resources','slotFramework'])
        raster=self.output/'assets/game/content/assets/symbol.png'
        self.assertEqual(raster.read_bytes(),original.read_bytes())
        self.assertEqual(json.loads(Path(str(raster)+'.meta').read_text())['uuid'],image)
        self.assertTrue((self.output/'assets/resources/config/example.json').exists())
        self.assertTrue((self.output/'assets/shared/framework/layout.txt').exists())
        restored=json.loads((self.output/'assets/scenes/main.scene').read_text())
        self.assertEqual(restored[1]['__type__'],'cc.Scene')
        self.assertEqual(restored[0]['scene'],{'__id__':1})
        self.assertEqual(restored[2]['_parent'],{'__id__':1})
        self.assertEqual(restored[1]['_children'],[{'__id__':2}])

    def test_versioned_pack_preserves_all_original_uuids(self):
        first,second=uid('packed1'),uid('packed2')
        self.bundle('resources',[(first,'a',compiled('cc.JsonAsset','a',json={'a':1})),(second,'b',compiled('cc.JsonAsset','b',json={'b':2}))],pack=True,versioned=True)
        result,report=self.run_stage()
        self.assertEqual(result.returncode,0,result.stderr+result.stdout)
        self.assertEqual({item['uuid'] for item in report['outputs']},{first,second})

    def test_identical_cross_bundle_uuid_is_emitted_once(self):
        image=uid('shared-image');document=compiled('cc.ImageAsset','shared')
        for name in ['g1999','slotFramework']:
            base=self.bundle(name,[(image,'shared',document)])
            self.native(base,image,versioned=True)
        result,report=self.run_stage()
        self.assertEqual(result.returncode,0,result.stderr+result.stdout)
        self.assertEqual(len(report['outputs']),1)

    def test_conflicting_cross_bundle_uuid_fails(self):
        key=uid('conflict')
        for index,name in enumerate(['g1999','resources']):
            self.bundle(name,[(key,'same',compiled('cc.JsonAsset','same',json={'value':index}))])
        result,report=self.run_stage()
        self.assertNotEqual(result.returncode,0)
        self.assertTrue(any('conflicting decoded content' in e['reason'] for e in report['unresolved']))

    def test_redirect_path_does_not_steal_dependency_bundle_ownership(self):
        key=uid('redirected')
        game=self.bundle('g1999',[])
        config=json.loads((game/'config.json').read_text())
        config.update(uuids=[key],paths={'0':['wrong-owner',0]},redirect=[0,'0'])
        (game/'config.json').write_text(json.dumps(config))
        self.bundle('resources',[(key,'right-owner',compiled('cc.JsonAsset','shared',json={'ok':True}))])
        result,report=self.run_stage()
        self.assertEqual(result.returncode,0,result.stderr+result.stdout)
        self.assertEqual(report['outputs'][0]['path'],'assets/resources/right-owner.json')

    def test_conflicting_native_uuid_fails(self):
        key=uid('native-conflict')
        for name in ['g1999','resources']:
            base=self.bundle(name,[(key,'same',compiled('cc.ImageAsset','same'))])
            self.native(base,key,content=name.encode())
        result,report=self.run_stage()
        self.assertNotEqual(result.returncode,0)
        self.assertTrue(any('conflicting native content' in e['reason'] for e in report['unresolved']))

    def test_missing_native_unknown_type_and_valid_staging_are_all_reported(self):
        self.bundle('g1999',[(uid('audio'),'audio',compiled('cc.AudioClip','sound',_native='.mp3')),(uid('unknown'),'unknown',compiled('cc.FutureAsset','future')),(uid('valid'),'valid',compiled('cc.JsonAsset','valid',json={'ok':True}))])
        result,report=self.run_stage()
        self.assertEqual(result.returncode,1)
        self.assertEqual(report['status'],'incomplete')
        self.assertTrue(any('native audio missing'==e['reason'] for e in report['unresolved']))
        self.assertEqual(report['unknownTypes'][0]['type'],'cc.FutureAsset')
        self.assertTrue((self.output/'assets/game/content/valid.json').exists())

    def test_existing_output_even_empty_is_never_modified(self):
        self.bundle('resources',[])
        self.output.mkdir();sentinel=self.output/'keep.txt';sentinel.write_text('editor changes')
        result,_=self.run_stage()
        self.assertEqual(result.returncode,2)
        self.assertEqual(list(self.output.iterdir()),[sentinel])
        self.assertEqual(sentinel.read_text(),'editor changes')

    def test_input_and_protected_projects_are_never_output(self):
        self.bundle('resources',[])
        for target in [self.capture/'child',ROOT/'Project-A'/'no-staging-here',ROOT/'Project-B'/'no-staging-here']:
            result,_=self.run_stage(target)
            self.assertEqual(result.returncode,2,result.stdout+result.stderr)
            self.assertFalse(target.exists())

    def test_unsafe_captured_path_fails_without_writing_outside_root(self):
        self.bundle('resources',[(uid('unsafe'),'../../escape',compiled('cc.JsonAsset','unsafe',json={}))])
        result,report=self.run_stage()
        self.assertEqual(result.returncode,1)
        self.assertFalse((self.root/'escape.json').exists())
        self.assertEqual(report['status'],'incomplete')

    def test_unknown_compiled_field_type_fails_closed(self):
        doc=[1,0,0,[['cc.FutureAsset',['property'],3,999]],[[0,0,1]],[[0,'value']],0,0,[],[],[]]
        self.bundle('resources',[(uid('unknown-field'),'unknown',doc)])
        result,report=self.run_stage()
        self.assertEqual(result.returncode,1)
        self.assertTrue(any('Unknown data type 999' in e.get('detail','') for e in report['unresolved']))

    def test_builtin_index_includes_nested_cubemap_faces(self):
        engine=self.root/'engine';engine.mkdir()
        root=uid('builtin-root');cube=root+'@b47c0';face=cube+'@40c10'
        (engine/'skybox.png.meta').write_text(json.dumps({'uuid':root,'subMetas':{'b47c0':{'uuid':cube,'subMetas':{'40c10':{'uuid':face,'subMetas':{}}}}}}))
        indexed=stager.load_builtin_assets(engine)
        self.assertEqual(set(indexed),{root,cube,face})
        self.assertEqual(indexed[face][0],engine/'skybox.png')

    def test_original_builtin_cubemap_and_face_do_not_require_user_native_files(self):
        engine=Path('/Applications/Cocos/Creator/3.8.8/CocosCreator.app/Contents/Resources/resources/3d/engine/editor/assets/default_skybox/default_skybox.png.meta')
        if not engine.exists():self.skipTest('Official Creator3.8.8 builtin unavailable')
        root='6f01cf7f-81bf-4a7e-bd5d-0afc19696480';cube=root+'@b47c0';face=cube+'@40c10'
        self.bundle('internal',[(cube,'skybox',compiled('cc.TextureCube','skybox')),(face,'skybox-face',compiled('cc.ImageAsset','face'))])
        result,report=self.run_stage()
        self.assertEqual(result.returncode,0,result.stderr+result.stdout)
        self.assertEqual(report['outputs'],[])
        self.assertEqual({item['uuid'] for item in report['builtinReferences']},{cube,face})


if __name__=='__main__':unittest.main()
