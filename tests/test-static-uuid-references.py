"""No Creator/GPU/network. Tiny serialized asset contracts, not generated art."""
import importlib.util
import json
import pathlib
import subprocess
import sys
import tempfile
import unittest

TOOLS = pathlib.Path(__file__).resolve().parents[1] / 'tools/recovery'
sys.path.insert(0, str(TOOLS))
spec = importlib.util.spec_from_file_location('uuid_audit', TOOLS / 'audit-static-uuid-references.py')
audit = importlib.util.module_from_spec(spec)
spec.loader.exec_module(audit)


def write(file, value):
    file.parent.mkdir(parents=True, exist_ok=True)
    file.write_text(json.dumps(value))


class StaticUuidAuditTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.base = pathlib.Path(self.temp.name)
        self.project = self.base / 'Project-Q'
        self.assets = self.project / 'assets'
        self.assets.mkdir(parents=True)
        self.engine = self.base / 'engine'
        self.engine.mkdir()

    def asset(self, name, document, uuid='prefab-main'):
        file = self.assets / name
        write(file, document)
        write(pathlib.Path(str(file) + '.meta'), {'uuid': uuid})
        return file

    def build(self, document, uuid='prefab-main'):
        root = self.project / 'build/web/assets/game'
        write(root / 'config.json', {'name': 'game', 'uuids': [uuid], 'paths': {uuid: ['main', 'cc.Prefab']}})
        write(root / 'import' / uuid[:2] / (uuid + '.json'), document)

    def test_deep_builtin_submetas_and_real_local_meta_are_distinct(self):
        owner = self.engine / 'cube.asset'
        owner.write_text('engine fixture')
        write(pathlib.Path(str(owner) + '.meta'), {'uuid': 'engine-root', 'subMetas': {
            'cube': {'uuid': 'engine-cube', 'subMetas': {'face': {'uuid': 'engine-face'}}}}})
        local = self.assets / 'local.asset'
        local.write_text('local fixture')
        write(pathlib.Path(str(local) + '.meta'), {'uuid': 'local-root', 'subMetas': {'frame': {'uuid': 'local-frame'}}})
        self.asset('main.scene', [{'frame': {'__uuid__': 'local-frame'}, 'cube': {'__uuid__': 'engine-face'}}])
        builtins, errors, count = audit.meta_inventory(self.engine)
        result = audit.audit_project(self.project, builtins)
        self.assertEqual((errors, count, len(builtins)), ([], 1, 3))
        self.assertEqual(result['categories'], {'actualLocalMeta': 1, 'installedEngineBuiltin': 1})
        self.assertEqual(result['summary']['missingUUIDs'], 0)

    def test_source_alias_does_not_falsely_resolve_absent_meta_and_uses_stable_fileid(self):
        self.asset('main.prefab', [{'__type__': 'cc.Prefab'}, {
            '__type__': 'cc.Sprite', '__prefab': {'__id__': 2}, '_spriteFrame': {'__uuid__': 'source-frame'}},
            {'__type__': 'cc.CompPrefabInfo', 'fileId': 'stable-component'}])
        image = self.assets / 'atlas.asset'
        image.write_text('opaque existing source asset')
        manifest = {'frameRecords': [{'uuid': 'source-frame', 'type': 'cc.SpriteFrame',
                                     'texture': {'imagePath': 'assets/atlas.asset'}}]}
        # Builder reorders/inlines the component; array-index matching would fail.
        self.build([{'__type__': 'cc.Prefab', 'nested': {
            '__type__': 'cc.Sprite', '__prefab': {'fileId': 'stable-component'}}}])
        result = audit.audit_project(self.project, {}, manifest, True)
        self.assertEqual(result['categories'], {'sourceMappedMissingMeta': 1})
        self.assertTrue(result['missing'][0]['sourceMappings'][0]['imageExists'])
        ref = result['staticReferences'][0]
        self.assertEqual(ref['componentFileId'], 'stable-component')
        self.assertEqual(ref['propertyPath'], ['_spriteFrame'])
        self.assertEqual(ref['buildResult'], 'omitted')
        self.assertNotIn('arrayIndex', ref)

    def test_prefab_instance_override_has_exact_identity_and_null_build_evidence(self):
        source = [{'__type__': 'cc.Prefab'},
                  {'__type__': 'CCPropertyOverrideInfo', 'value': {'__uuid__': 'source-frame'},
                   'propertyPath': ['_spriteFrame'], 'targetInfo': {'__id__': 3}},
                  {'__type__': 'cc.PrefabInstance', 'fileId': 'instance-a',
                   'propertyOverrides': [{'__id__': 1}]},
                  {'__type__': 'cc.TargetInfo', 'localID': ['nested-component']}]
        self.asset('main.prefab', source)
        self.build([{'__type__': 'cc.PrefabInstance', 'fileId': 'instance-a', 'propertyOverrides': [
            {'__type__': 'CCPropertyOverrideInfo', 'value': None, 'propertyPath': ['_spriteFrame'],
             'targetInfo': {'localID': ['nested-component']}}]}])
        result = audit.audit_project(self.project, {}, {}, True)
        ref = result['staticReferences'][0]
        self.assertEqual(ref['kind'], 'prefab-instance-property-override')
        self.assertEqual(ref['prefabInstanceFileId'], 'instance-a')
        self.assertEqual(ref['targetLocalId'], ['nested-component'])
        self.assertEqual(ref['buildResult'], 'changed-or-null')
        self.assertEqual(result['summary']['uncertainRestoreIdentities'], 0)

    def test_orphan_meta_is_missing_and_duplicate_owners_are_reported(self):
        write(self.assets / 'absent.asset.meta', {'uuid': 'orphan'})
        for name in ['one.asset', 'two.asset']:
            (self.assets / name).write_text('fixture')
            write(self.assets / (name + '.meta'), {'uuid': 'duplicate'})
        self.asset('main.mtl', {'effect': {'__uuid__': 'orphan'}, 'other': {'__uuid__': 'unknown'}})
        result = audit.audit_project(self.project, {})
        self.assertEqual(result['categories']['orphanLocalMeta'], 1)
        self.assertEqual(result['categories']['unresolvedMissingMeta'], 1)
        self.assertIn('duplicate', result['duplicateMetaOwners'])
        self.assertEqual(result['summary']['uncertainRestoreIdentities'], 2)

    def test_ambiguous_fileids_are_not_repaired_by_guessing_node_indexes(self):
        self.asset('main.prefab', [{'__type__': 'cc.Sprite', '__prefab': {'fileId': 'same'},
                                    '_spriteFrame': {'__uuid__': 'missing'}}])
        self.build([{'__type__': 'cc.Sprite', '__prefab': {'fileId': 'same'}},
                    {'__type__': 'cc.Sprite', '__prefab': {'fileId': 'same'}}])
        result = audit.audit_project(self.project, {}, {}, True)
        self.assertEqual(result['staticReferences'][0]['buildResult'], 'ambiguous-or-missing-owner')
        self.assertEqual(result['summary']['uncertainRestoreIdentities'], 1)

    def test_cli_refuses_overwriting_existing_report(self):
        self.asset('main.scene', [])
        report = self.base / 'report.json'
        report.write_text('keep')
        result = subprocess.run([sys.executable, str(TOOLS / 'audit-static-uuid-references.py'),
                                 str(self.project), '--engine-assets', str(self.engine), '--out', str(report)],
                                capture_output=True, text=True)
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(report.read_text(), 'keep')
        self.assertIn('must not already exist', result.stderr)


if __name__ == '__main__':
    unittest.main()
