/** Independent contract/oracle for source frame alias manifests.
 * Default: small public-data regression fixtures, no cache/engine required.
 * Full oracle: node tests/test-source-frame-manifest.mjs --manifest file.json
 *   --project Project-F --capture .cache/rea-new-games/Project-F/capture/assets
 * This reads source records through the existing pure decoder; it never writes
 * assets, rewrites UUIDs, builds a project, or executes recovered game modules.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
const sha = value => createHash('sha256').update(value).digest('hex');
// Original publications may contain multiple UUIDs at the same path/type.
// Retain those entries; a runtime single-load must use source config precedence.
const key = row => JSON.stringify([row.bundle, row.path, row.type, row.uuid]);
const clone = value => JSON.parse(JSON.stringify(value));
function relative(value, label) {
  assert(typeof value === 'string' && value.length > 0 && !path.isAbsolute(value) && !value.split('/').includes('..') && !value.includes('\\'), 'Unsafe ' + label);
}
function pngSize(buffer) {
  if (buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  return null; // JPEG dimensions are not guessed; source identity is still checked.
}
export function validateFrameManifest(manifest, oracle, projectRoot = null) {
  assert(manifest && /^Project-[C-I]$/.test(manifest.project), 'Unknown source frame project');
  assert(Array.isArray(manifest.frames) && Array.isArray(manifest.atlases), 'Missing source collections');
  assert(Array.isArray(manifest.unresolved) && manifest.unresolved.length === 0, 'Unresolved source frames remain');
  const rasterCache = new Map();
  function verifyFrame(row, raw, label) {
    assert.deepEqual(row.serialized, raw.serialized, 'Original frame geometry/name changed: ' + label);
    assert.equal(row.textureSourceUuid, raw.textureSourceUuid, 'Original textureSourceUuid changed');
    const texture = row.texture;
    assert(texture, 'Frame texture resolution missing: ' + label);
    assert.equal(texture.originalUuid, raw.textureSourceUuid.split('@')[0], 'Opaque original texture ID was replaced');
    assert(typeof texture.imageMetaUuid === 'string' && typeof texture.textureUuid === 'string', 'Runtime texture identities missing');
    if (raw.textureKind === 'cc.RenderTexture') {
      assert(texture.renderTexture === true || texture.kind === 'renderTexture' || texture.type === 'cc.RenderTexture', 'RenderTexture must be explicit, never a fabricated PNG');
      assert.equal(texture.imagePath, null, 'RenderTexture must not masquerade as a raster');
      if (raw.renderTextureSize) {
        assert.equal(texture.width, raw.renderTextureSize.width);
        assert.equal(texture.height, raw.renderTextureSize.height);
      }
      if (projectRoot) {
        relative(texture.assetPath, 'render texture asset');
        const meta = JSON.parse(fs.readFileSync(path.resolve(projectRoot, texture.assetPath) + '.meta', 'utf8'));
        assert.equal(meta.uuid, texture.textureUuid, 'Creator RenderTexture identity changed');
        assert.equal(meta.userData.width, texture.width);
        assert.equal(meta.userData.height, texture.height);
      }
      return;
    }
    if (texture.builtin === true) {
      assert(raw.builtin === true, 'Unverified builtin texture claim: ' + label);
      assert.equal(texture.imagePath, null);
      assert.equal(texture.ownerBundle, 'internal');
      assert.equal(texture.textureUuid, raw.textureSourceUuid);
      return;
    }
    relative(texture.imagePath, 'source raster path');
    assert(typeof texture.ownerBundle === 'string' && typeof texture.loadPath === 'string', 'Runtime texture load location missing');
    if (!projectRoot) return;
    const raster = path.resolve(projectRoot, texture.imagePath);
    assert(raster.startsWith(path.resolve(projectRoot) + path.sep), 'Raster escapes project');
    if (!rasterCache.has(raster)) {
      const bytes = fs.readFileSync(raster), meta = JSON.parse(fs.readFileSync(raster + '.meta', 'utf8'));
      rasterCache.set(raster, { digest: sha(bytes), dimensions: pngSize(bytes), meta });
    }
    const { digest, dimensions, meta } = rasterCache.get(raster);
    assert.equal(meta.uuid, texture.imageMetaUuid, 'Actual Creator image UUID differs from manifest');
    assert.equal(meta.subMetas?.['6c48a']?.uuid, texture.textureUuid, 'Actual Creator texture subUUID differs from manifest');
    if (raw.nativeSha256) assert.equal(digest, raw.nativeSha256, 'Packed raster pixels/source file were replaced');
    if (texture.imageSha256) assert.equal(digest, texture.imageSha256, 'Manifest raster hash differs from actual file');
    const { rect, rotated } = row.serialized;
    if (dimensions) {
      // Exact checkRect semantics from installed Creator 3.8.8 SpriteFrame.
      const maxX = rect.x + (rotated ? rect.height : rect.width), maxY = rect.y + (rotated ? rect.width : rect.height);
      assert(rect.x >= 0 && rect.y >= 0 && maxX <= dimensions.width && maxY <= dimensions.height, 'Frame exceeds original packed PNG: ' + label);
    }
  }
  const actual = [...manifest.frames, ...manifest.atlases], byPath = new Map();
  for (const row of actual) {
    relative(row.path, 'source bundle load path');
    assert(!byPath.has(key(row)), 'Duplicate source bundle/path/type: ' + key(row));
    byPath.set(key(row), row);
  }
  assert.equal(actual.length, oracle.paths.length, 'Source alias count changed (do not deduplicate by UUID or name)');
  const pathIdentity = row => JSON.stringify([row.bundle, row.path, row.type]);
  const ordered = new Map();
  for (const row of oracle.paths) {
    const id = pathIdentity(row);
    if (!ordered.has(id)) ordered.set(id, []);
    ordered.get(id).push(row.uuid);
  }
  for (const [id, uuids] of ordered) if (uuids.length > 1) {
    assert.deepEqual(actual.filter(row => pathIdentity(row) === id).map(row => row.uuid), uuids, 'Original typed single-load precedence changed: ' + id);
  }
  for (const expected of oracle.paths) {
    const row = byPath.get(key(expected));
    assert(row, 'Missing source bundle/path/type: ' + key(expected));
    assert.equal(row.uuid, expected.uuid, 'Original source identity changed: ' + key(expected));
    const raw = oracle.records[expected.uuid];
    assert(raw, 'No raw source record: ' + expected.uuid);
    assert.deepEqual(row.source, raw.source, 'Original public source evidence changed: ' + expected.uuid);
    if (row.type === 'cc.SpriteAtlas') {
      assert.deepEqual(row.frames, raw.frames, 'Atlas frame names/order/UUIDs changed: ' + expected.path);
      continue;
    }
    assert.equal(row.type, 'cc.SpriteFrame');
    verifyFrame(row, raw, expected.path);
  }
  if (oracle.frameRecordUuids) {
    assert.equal(manifest.frameRecords.length, oracle.frameRecordUuids.length, 'Unique source frame record count changed');
    const records = new Map();
    for (const row of manifest.frameRecords) {
      assert.equal(row.type, 'cc.SpriteFrame');
      assert.equal(row.path, null);
      assert(!records.has(row.uuid), 'Duplicate unique frame record UUID');
      records.set(row.uuid, row);
    }
    for (const uid of oracle.frameRecordUuids) {
      const row = records.get(uid), raw = oracle.records[uid];
      assert(row, 'Unique source frame record missing: ' + uid);
      assert.deepEqual(row.source, raw.source, 'Unique frame raw source SHA changed');
      verifyFrame(row, raw, uid);
    }
    for (const atlas of manifest.atlases) for (const frame of atlas.frames) {
      assert(records.has(frame.uuid), 'Atlas references absent frame record: ' + frame.name);
      assert.equal(records.get(frame.uuid).serialized.name, frame.name, 'Atlas name disagrees with raw frame');
    }
  }
  for (const [collection, expected] of [['images', oracle.images], ['textures', oracle.textures]]) {
    if (!expected) continue;
    assert.equal(manifest[collection].length, expected.length, 'Original ' + collection + ' alias count changed');
    const rows = new Map(manifest[collection].map(row => [key(row), row]));
    assert.equal(rows.size, expected.length, 'Duplicate image/texture source path');
    for (const source of expected) assert.equal(rows.get(key(source))?.uuid, source.uuid, 'Original image/texture source identity changed');
  }
  if (oracle.configs) {
    assert.equal(manifest.sourceConfigs.length, oracle.configs.length, 'Source config evidence count changed');
    const configs = new Map(manifest.sourceConfigs.map(row => [row.bundle, row.sha256]));
    for (const row of oracle.configs) assert.equal(configs.get(row.bundle), row.sha256, 'Source bundle config hash changed: ' + row.bundle);
  }
  return { project: manifest.project, frames: manifest.frames.length, atlases: manifest.atlases.length, sourceAliases: actual.length };
}

// A single original UUID deliberately has two different public load paths.
// A different UUID deliberately has the same serialized name. Neither collapses.
const atlasId = 'b9f350ae-326e-42ea-bbe7-a5dda32f8db8', frameId = atlasId + '@3f813';
const geometry = { name: 'symbol_13', rect: { x: 1222, y: 1349, width: 141, height: 109 }, offset: { x: -.5, y: .5 }, originalSize: { width: 142, height: 110 }, rotated: false, capInsets: [0, 0, 0, 0] };
const record = { source: { file: 'g1004/import/08/08552569d.json', sha256: 'a'.repeat(64) }, serialized: geometry, textureSourceUuid: '15091da9e@6c48a' };
const rows = [
  { bundle: 'g1004', path: 'assets/atlas/symbols/symbol_13', type: 'cc.SpriteFrame', uuid: frameId },
  { bundle: 'g1004', path: 'assets/texture/alias/symbol_13/spriteFrame', type: 'cc.SpriteFrame', uuid: frameId },
  { bundle: 'g1004', path: 'assets/atlas/symbols/symbol_13', type: 'cc.SpriteFrame', uuid: '11111111-1111-4111-8111-111111111111@f9941' },
  { bundle: 'g1004', path: 'assets/atlas/symbols', type: 'cc.SpriteAtlas', uuid: atlasId },
];
const atlasOnlyId = atlasId + '@abcde';
const oracle = { paths: rows, frameRecordUuids: [frameId, rows[2].uuid, atlasOnlyId], records: {
  [frameId]: record, [rows[2].uuid]: record,
  [atlasOnlyId]: { ...clone(record), serialized: { ...clone(geometry), name: 'atlas-only' } },
  [atlasId]: { source: record.source, frames: [{ name: 'symbol_13', uuid: frameId }, { name: 'atlas-only', uuid: atlasOnlyId }] },
} };
function fixture() {
  const frames = rows.slice(0, 3).map(row => ({ ...clone(row), ...clone(record), texture: { originalUuid: '15091da9e', imagePath: 'assets/shared/images/g1004/15091da9e.png', imageMetaUuid: '22222222-2222-4222-8222-222222222222', textureUuid: '22222222-2222-4222-8222-222222222222@6c48a', ownerBundle: 'main', loadPath: 'shared/images/g1004/15091da9e/texture', requiresInclude: true } }));
  const frameRecords = oracle.frameRecordUuids.map(uuid => ({ ...clone(frames[0]), ...clone(oracle.records[uuid]), uuid, path: null }));
  return { project: 'Project-F', frames, frameRecords, atlases: [{ ...clone(rows[3]), ...clone(oracle.records[atlasId]) }], unresolved: [] };
}
function regressions() {
  assert.equal(validateFrameManifest(fixture(), oracle).sourceAliases, 4);
  for (const mutate of [
    manifest => manifest.frames.splice(1, 1),
    manifest => { manifest.frames[0].uuid = rows[2].uuid; },
    manifest => { manifest.frames[0].serialized.offset.y = -.5; },
    manifest => { manifest.frames[0].serialized.rotated = true; },
    manifest => { manifest.frames[0].serialized.originalSize.width = 141; },
    manifest => { manifest.frames[0].texture.originalUuid = manifest.frames[0].texture.imageMetaUuid; },
    manifest => { manifest.frames[0].texture.builtin = true; },
    manifest => { manifest.frames.reverse(); },
    manifest => { manifest.atlases[0].frames = []; },
    manifest => { manifest.frameRecords.pop(); },
    manifest => { manifest.frames[0].path = '../outside'; },
    manifest => { manifest.unresolved.push({ uuid: frameId }); },
  ]) {
    const manifest = fixture(); mutate(manifest); assert.throws(() => validateFrameManifest(manifest, oracle));
  }
  console.log('PASS source frame contract: aliases, raw identity, offset/rotation/originalSize, opaque texture ID and atlas names');
}
function sourceOracle(capture) {
  // Reuse the existing pure serialization decoder, not the new alias extractor.
  // No creator/editor process, orchestration, network access or asset writes.
  const tools = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../tools/recovery');
  const python = String.raw`
import json,sys,importlib.util,hashlib
from pathlib import Path
sys.dont_write_bytecode=True;sys.path.insert(0,sys.argv[1])
spec=importlib.util.spec_from_file_location('staging',Path(sys.argv[1])/'stage-cocos-assets.py');s=importlib.util.module_from_spec(spec);spec.loader.exec_module(s)
capture=Path(sys.argv[2]);records,bundles,native,errors=s.load_records(capture)
if errors:raise ValueError('Original capture inventory errors: '+str(errors[:3]))
paths=[];expected={};configs=[];images=[];textures=[];frameids=[];hashes={}
def digest(file):
 file=str(file)
 if file not in hashes:hashes[file]=hashlib.sha256(Path(file).read_bytes()).hexdigest()
 return hashes[file]
builtins=s.load_builtin_assets(Path('/Applications/Cocos/Creator/3.8.8/CocosCreator.app/Contents/Resources/resources/3d/engine/editor/assets'))
for uid,row in records.items():
 obj=row['data'][0]
 if not isinstance(obj,dict)or obj.get('__type__')not in ['cc.SpriteFrame','cc.SpriteAtlas']:continue
 kind=obj['__type__'];source=dict(file='assets/'+row['source'],sha256=digest(capture/row['source']))
 if kind=='cc.SpriteAtlas':
  frames=obj['_serialized']['spriteFrames'];expected[uid]=dict(source=source,frames=[dict(name=name,uuid=s.decode_uuid(short))for name,short in zip(frames[::2],frames[1::2])])
 else:
  frameids.append(uid);tex=obj.get('_textureSource',{}).get('__uuid__','');texid=tex.split('@')[0];raster=next((native[(texid,ext)]for ext in ['.png','.jpg','.jpeg','.webp']if(texid,ext)in native),None);texture=records.get(texid,{}).get('data',[{}])[0]
  size=texture.get('_serialized',{})
  expected[uid]=dict(source=source,serialized=obj['_serialized'],textureSourceUuid=tex,nativeSha256=digest(raster)if raster else None,builtin=tex in builtins or texid in builtins,textureKind=texture.get('__type__'),renderTextureSize=dict(width=size.get('w'),height=size.get('h'))if texture.get('__type__')=='cc.RenderTexture'else None)
for config in sorted(capture.glob('*/config.json')):
 data=json.loads(config.read_text());configs.append(dict(bundle=data['name'],sha256=digest(config)))
 for index,info in data.get('paths',{}).items():
  kind=data['types'][info[1]];uid=s.decode_uuid(data['uuids'][int(index)])
  if kind=='cc.ImageAsset':images.append(dict(bundle=data['name'],path=info[0],type=kind,uuid=uid))
  if kind=='cc.Texture2D':textures.append(dict(bundle=data['name'],path=info[0],type=kind,uuid=uid))
  if kind not in ['cc.SpriteFrame','cc.SpriteAtlas']:continue
  paths.append(dict(bundle=data['name'],path=info[0],type=kind,uuid=uid))
  if uid not in expected:raise ValueError('Source record absent: '+uid)
print(json.dumps(dict(paths=paths,records=expected,configs=configs,frameRecordUuids=frameids,images=images,textures=textures)))
`;
  return JSON.parse(execFileSync('python3', ['-c', python, tools, path.resolve(capture)], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }));
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  regressions();
  const argument = name => { const index = process.argv.indexOf(name); return index >= 0 ? process.argv[index + 1] : null; };
  if (argument('--manifest')) {
    assert(argument('--capture') && argument('--project'), 'Full oracle requires --capture assets-dir and --project root');
    const manifest = JSON.parse(fs.readFileSync(argument('--manifest'), 'utf8'));
    console.log(JSON.stringify(validateFrameManifest(manifest, sourceOracle(argument('--capture')), argument('--project'))));
  }
}
