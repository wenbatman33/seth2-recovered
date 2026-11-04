#!/usr/bin/env node

import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, extname, join } from 'node:path';

const mirrorRoot = process.argv[2] ?? 'research/atg/hades/mirror';
const destinationRoot = process.argv[3] ?? 'assets/recovered/g1007';
const config = JSON.parse(await readFile(join(mirrorRoot, 'assets/g1007/config.json'), 'utf8'));
const capture = JSON.parse(await readFile(join(mirrorRoot, 'capture-manifest.json'), 'utf8'));

function decodeUuid(compressed) {
  if (compressed.length !== 22) return compressed;
  const hex = `${compressed.slice(0, 2)}${Buffer.from(`${compressed.slice(2)}==`, 'base64').toString('hex')}`;
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

const byUuid = new Map();
for (const file of [...(capture.nativeImages ?? []), ...(capture.nativeAudio ?? [])]) {
  const filename = basename(file.path);
  byUuid.set(filename.slice(0, -extname(filename).length), file.path);
}

const copied = [];
const destinationOwners = new Map();
for (const [index, asset] of Object.entries(config.paths)) {
  const [assetPath, type] = asset;
  if (type !== 4 && type !== 9) continue;
  const uuid = decodeUuid(config.uuids[Number(index)]);
  const sourceRelativePath = byUuid.get(uuid);
  if (!sourceRelativePath) continue;
  const extension = extname(sourceRelativePath);
  // Cocos can map more than one UUID to one readable source path (notably
  // Spine page variants). Keep every exact native asset by UUID first; a
  // human-readable path is only an alias and must never discard a variant.
  const uuidDestination = join(destinationRoot, 'native-by-uuid', `${uuid}${extension}`);
  await mkdir(dirname(uuidDestination), { recursive: true });
  await copyFile(join(mirrorRoot, sourceRelativePath), uuidDestination);

  const destination = join(destinationRoot, `${assetPath}${extension}`);
  await mkdir(dirname(destination), { recursive: true });
  const previousOwner = destinationOwners.get(destination);
  // Preserve the first logical alias deterministically. The UUID copy above is
  // authoritative for every variant, including later path collisions.
  if (!previousOwner) {
    await copyFile(join(mirrorRoot, sourceRelativePath), destination);
    destinationOwners.set(destination, uuid);
  }
  copied.push({ uuid, type, source: sourceRelativePath, destination, uuidDestination, logicalPathCollisionWith: previousOwner ?? null });
}

await writeFile(join(destinationRoot, 'SOURCE_ASSET_MANIFEST.json'), `${JSON.stringify({ source: capture.source, bundle: capture.bundle, copied }, null, 2)}\n`);
console.log(JSON.stringify({ copied: copied.length, images: copied.filter(x => x.type === 4).length, audio: copied.filter(x => x.type === 9).length }));
