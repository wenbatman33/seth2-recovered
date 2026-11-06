#!/usr/bin/env python3
"""Read-only Cocos UUID/meta and optional official-build property audit.

Never edits projects, starts Creator, loads GPU resources, or repairs references.
An alias/source mapping is evidence for a repair, NOT a resolved local meta asset.
"""
import argparse
import collections
import hashlib
import json
import pathlib
import re
import sys

from restore_cocos_serialization import CompiledDecoder, decode_uuid, unpack

DEFAULT_ENGINE = pathlib.Path('/Applications/Cocos/Creator/3.8.8/CocosCreator.app/Contents/Resources/resources/3d/engine/editor/assets')


def normalize(value):
    try:
        return decode_uuid(value)
    except (ValueError, IndexError):
        return value


def digest(file):
    return hashlib.sha256(file.read_bytes()).hexdigest()


def meta_inventory(root):
    entries = collections.defaultdict(list)
    errors = []
    count = 0
    for file in sorted(root.rglob('*.meta')):
        try:
            document = json.loads(file.read_text())
        except (ValueError, OSError) as error:
            errors.append({'file': str(file), 'error': str(error)})
            continue
        count += 1
        owner = pathlib.Path(str(file)[:-5])

        def add(node, location='root'):
            if not isinstance(node, dict):
                return
            if isinstance(node.get('uuid'), str):
                entries[normalize(node['uuid'])].append({
                    'meta': str(file), 'node': location, 'importer': node.get('importer'),
                    'owner': str(owner), 'ownerExists': owner.exists(),
                })
            for name, child in (node.get('subMetas') or {}).items():
                add(child, location + '.subMetas.' + name)

        add(document)
    return entries, errors, count


def dictionaries(value):
    if isinstance(value, dict):
        yield value
        for child in value.values():
            yield from dictionaries(child)
    elif isinstance(value, list):
        for child in value:
            yield from dictionaries(child)


def references(value, location=()):
    if isinstance(value, dict):
        if isinstance(value.get('__uuid__'), str):
            yield normalize(value['__uuid__']), location, value
        for key, child in value.items():
            yield from references(child, location + (key,))
    elif isinstance(value, list):
        for index, child in enumerate(value):
            yield from references(child, location + (index,))


def resolve(document, value):
    return document[value['__id__']] if isinstance(value, dict) and '__id__' in value else value


def file_id(document, owner):
    info = resolve(document, owner.get('__prefab') or owner.get('__prefab__') or {})
    return info.get('fileId') if isinstance(info, dict) else None


def property_at(owner, path):
    for key in path:
        if isinstance(owner, dict) and key in owner:
            owner = owner[key]
        elif isinstance(owner, list) and isinstance(key, int) and 0 <= key < len(owner):
            owner = owner[key]
        else:
            return None, False
    return owner, True


def alias_inventory(manifest, root):
    result = collections.defaultdict(list)
    for group in ('frames', 'frameRecords', 'textures', 'images', 'atlases'):
        for entry in manifest.get(group, []):
            if not entry.get('uuid'):
                continue
            texture = entry.get('texture') or {}
            image = texture.get('imagePath')
            result[normalize(entry['uuid'])].append({
                'group': group, 'type': entry.get('type'), 'bundle': entry.get('bundle'),
                'path': entry.get('path'), 'imagePath': image,
                'imageExists': bool(image and (root / image).exists()),
                'textureSourceUuid': entry.get('textureSourceUuid'),
                'textureUuid': texture.get('textureUuid'), 'source': entry.get('source'),
            })
    return result


class BuiltAssets:
    """Decode only the official import/pack files needed for missing references."""
    def __init__(self, root):
        self.root = root
        self.configs = []
        self.documents = {}
        if root.exists():
            for file in sorted(root.glob('*/config.json')):
                self.configs.append((file, json.loads(file.read_text())))

    @staticmethod
    def find_import(bundle, asset_id):
        direct = bundle / 'import' / asset_id[:2] / (asset_id + '.json')
        if direct.exists():
            return direct
        versions = list(direct.parent.glob(asset_id + '.*.json')) if direct.parent.exists() else []
        if len(versions) == 1:
            return versions[0]
        raise ValueError('Expected a unique official import file for ' + asset_id)

    def load(self, uuid):
        for config_file, config in self.configs:
            uuids = [normalize(v) for v in config.get('uuids', [])]
            if uuid not in uuids:
                continue
            bundle = config_file.parent
            index = uuids.index(uuid)
            try:
                file = self.find_import(bundle, uuid)
                pack_index = None
            except ValueError:
                packs = []
                for key, values in config.get('packs', {}).items():
                    expanded = [uuids[v] if isinstance(v, int) else normalize(v) for v in values]
                    if uuid in expanded:
                        packs.append((key, expanded.index(uuid)))
                if len(packs) != 1:
                    raise ValueError('Expected a unique official pack for ' + uuid)
                pack, pack_index = packs[0]
                file = self.find_import(bundle, pack)
            if file not in self.documents:
                self.documents[file] = json.loads(file.read_text())
            raw = self.documents[file]
            if pack_index is not None:
                raw = unpack(raw)[pack_index]
            document = CompiledDecoder(raw).decode() if isinstance(raw, list) and len(raw) == 11 and raw[0] == 1 else raw
            return document, {
                'config': str(config_file), 'configSha256': digest(config_file),
                'file': str(file), 'fileSha256': digest(file), 'packIndex': pack_index,
            }
        return None, {'status': 'asset UUID absent from official build bundle configs'}


def restore_identity(document, location, source_uuid):
    """Use stable fileIds; source array indexes are never repair identities."""
    if not location or not isinstance(location[0], int):
        return {'uncertainReason': 'Reference has no source component object'}
    owner = document[location[0]]
    result = {
        'componentType': owner.get('__type__'), 'propertyPath': list(location[1:]),
        'sourceFrameUuid': source_uuid, 'componentFileId': file_id(document, owner),
    }
    if result['componentFileId']:
        result['kind'] = 'component-property'
        return result
    if owner.get('__type__') == 'CCPropertyOverrideInfo':
        parents = [obj for obj in dictionaries(document)
                   if obj.get('__type__') == 'cc.PrefabInstance'
                   and {'__id__': location[0]} in obj.get('propertyOverrides', [])]
        target = resolve(document, owner.get('targetInfo') or {})
        if len(parents) == 1 and parents[0].get('fileId') and target.get('localID'):
            result.update(kind='prefab-instance-property-override',
                          prefabInstanceFileId=parents[0]['fileId'],
                          targetLocalId=target['localID'],
                          overridePropertyPath=owner.get('propertyPath'))
            return result
    result['uncertainReason'] = 'No unique original component or prefab-instance override identity'
    return result


def compare_built(document, identity):
    if identity.get('kind') == 'component-property':
        matches = [obj for obj in dictionaries(document)
                   if file_id(document, obj) == identity['componentFileId']]
    elif identity.get('kind') == 'prefab-instance-property-override':
        matches = []
        for instance in dictionaries(document):
            if instance.get('__type__') != 'cc.PrefabInstance' or instance.get('fileId') != identity['prefabInstanceFileId']:
                continue
            for entry in instance.get('propertyOverrides', []):
                entry = resolve(document, entry)
                target = resolve(document, entry.get('targetInfo') or {})
                if target.get('localID') == identity['targetLocalId'] and entry.get('propertyPath') == identity['overridePropertyPath']:
                    matches.append(entry)
    else:
        return {'buildResult': 'uncertain-source-identity'}
    if len(matches) != 1:
        return {'buildResult': 'ambiguous-or-missing-owner', 'builtOwnerMatches': len(matches)}
    value, present = property_at(matches[0], identity['propertyPath'])
    outcome = 'omitted' if not present else 'preserved' if isinstance(value, dict) and normalize(value.get('__uuid__', '')) == identity['sourceFrameUuid'] else 'changed-or-null'
    return {'buildResult': outcome, 'builtOwnerMatches': 1,
            'builtPropertyPresent': present, 'builtPropertyValue': value}


def audit_project(root, builtins, manifest=None, inspect_build=False):
    local, errors, count = meta_inventory(root / 'assets')
    aliases = alias_inventory(manifest or {}, root)
    builder = BuiltAssets(root / 'build/web/assets') if inspect_build else None
    categories = collections.Counter()
    missing = collections.defaultdict(lambda: {'uses': []})
    used_builtin = {}
    unique = set()
    occurrence_count = document_count = 0
    static = []
    for suffix in ('*.scene', '*.prefab', '*.mtl'):
        for file in sorted((root / 'assets').rglob(suffix)):
            try:
                document = json.loads(file.read_text())
                items = list(references(document))
                document_count += 1
            except (ValueError, OSError) as error:
                errors.append({'file': str(file), 'error': str(error)})
                continue
            bad = []
            for uuid, location, ref in items:
                occurrence_count += 1
                if uuid not in unique:
                    category = 'actualLocalMeta' if uuid in local and any(v['ownerExists'] for v in local[uuid]) else 'orphanLocalMeta' if uuid in local else 'installedEngineBuiltin' if uuid in builtins else 'sourceMappedMissingMeta' if uuid in aliases else 'unresolvedMissingMeta'
                    categories[category] += 1
                    unique.add(uuid)
                if uuid in local and any(v['ownerExists'] for v in local[uuid]):
                    continue
                if uuid in builtins and uuid not in local:
                    used_builtin[uuid] = builtins[uuid]
                    continue
                missing[uuid]['uuid'] = uuid
                missing[uuid]['sourceMappings'] = aliases.get(uuid, [])
                missing[uuid]['uses'].append({'file': str(file.relative_to(root)), 'propertyLocation': list(location), 'expectedType': ref.get('__expectedType__')})
                bad.append((uuid, location))
            if not bad:
                continue
            meta = pathlib.Path(str(file) + '.meta')
            asset_uuid = json.loads(meta.read_text()).get('uuid') if meta.exists() else None
            built, evidence = builder.load(asset_uuid) if builder and asset_uuid else (None, {'status': 'build not inspected'})
            for uuid, location in bad:
                identity = restore_identity(document, location, uuid)
                identity.update(project=root.name, sourceAssetUuid=asset_uuid,
                                sourceAssetPath=str(file.relative_to(root)), sourceAssetSha256=digest(file))
                if builder:
                    identity['officialBuild'] = evidence
                    if built is not None:
                        identity.update(compare_built(built, identity))
                static.append(identity)
    rows = list(missing.values())
    duplicate = {key: values for key, values in local.items() if len({v['meta'] for v in values}) > 1}
    return {
        'project': root.name, 'status': 'static read-only evidence; no rendering/runtime acceptance',
        'metaFiles': count, 'metaUUIDs': len(local), 'documentFiles': document_count,
        'referenceOccurrences': occurrence_count, 'referencedUUIDs': len(unique),
        'categories': dict(categories), 'duplicateMetaOwners': duplicate, 'errors': errors,
        'missing': rows, 'installedEngineBuiltinsUsed': used_builtin,
        'staticReferences': static,
        'summary': {'missingUUIDs': len(rows), 'missingOccurrences': sum(len(v['uses']) for v in rows),
                    'sourceMappedUUIDs': sum(bool(v['sourceMappings']) for v in rows),
                    'unmappedUUIDs': sum(not v['sourceMappings'] for v in rows),
                    'uncertainRestoreIdentities': sum('uncertainReason' in v or v.get('buildResult') in ('uncertain-source-identity', 'ambiguous-or-missing-owner') for v in static),
                    'buildResults': dict(collections.Counter(v.get('buildResult', 'not-inspected') for v in static))},
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('projects', nargs='+', type=pathlib.Path)
    parser.add_argument('--engine-assets', type=pathlib.Path, default=DEFAULT_ENGINE)
    parser.add_argument('--alias-dir', type=pathlib.Path, help='Optional source-frame manifests named Project-X.json; otherwise use each project docs/static-uuid-source-aliases.json if present')
    parser.add_argument('--inspect-build', action='store_true', help='Compare missing references against current official build/web imports/packs')
    parser.add_argument('--out', type=pathlib.Path, help='Write a NEW JSON report; existing reports are never overwritten')
    parser.add_argument('--fail-unmapped', action='store_true', help='Exit1 for unmapped/orphan refs, duplicate owners, or read errors; mapped missing refs remain explicitly missing')
    args = parser.parse_args()
    if not args.engine_assets.is_dir():
        parser.error('Installed engine assets directory not found; use --engine-assets')
    if any(not (p / 'assets').is_dir() for p in args.projects):
        parser.error('Every project must contain an assets directory')
    if args.out and args.out.exists():
        parser.error('--out must not already exist')
    builtins, builtin_errors, builtin_count = meta_inventory(args.engine_assets)
    reports = []
    for root in args.projects:
        alias = args.alias_dir / (root.name + '.json') if args.alias_dir else root / 'docs/static-uuid-source-aliases.json'
        manifest = json.loads(alias.read_text()) if alias and alias.exists() else None
        report = audit_project(root, builtins, manifest, args.inspect_build)
        if alias and alias.exists():
            report['sourceAliasManifestSha256'] = digest(alias)
        reports.append(report)
    out = {'policy': 'Read-only project/build/engine scan; mappings do not imply a published local meta or surviving Builder dependency',
           'builtinMetaFiles': builtin_count, 'builtinUUIDs': len(builtins), 'builtinErrors': builtin_errors,
           'projects': reports}
    if args.out:
        args.out.parent.mkdir(parents=True, exist_ok=True)
        with args.out.open('x') as target:
            target.write(json.dumps(out, indent=2) + '\n')
        for report in reports:
            print(json.dumps({'project': report['project'], **report['summary']}))
    else:
        print(json.dumps(out, indent=2))
    failed = builtin_errors or any(r['summary']['unmappedUUIDs'] or r['categories'].get('orphanLocalMeta') or r['duplicateMetaOwners'] or r['errors'] for r in reports)
    return 1 if args.fail_unmapped and failed else 0


if __name__ == '__main__':
    raise SystemExit(main())
