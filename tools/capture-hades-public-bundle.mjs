#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ORIGIN = 'https://play.godeezone1.com';
const GAME_ROOT = '/egames/37ab205b0990c6a3643e0dbb8c9ee4adb698123c/game';
const positional = process.argv.slice(2).filter((argument) => !argument.startsWith('--'));
const outputRoot = positional[0] ?? 'research/atg/hades/mirror';
const bundleRoot = `${GAME_ROOT}/assets/g1007`;
const captureNative = process.argv.includes('--native');

const coreFiles = [
  'index.js',
  'application.js',
  'src/settings.json',
  'src/import-map.json',
  'src/chunks/bundle.js',
  'assets/g1007/config.json',
  'assets/g1007/index.js',
];

async function download(relativePath) {
  const url = `${ORIGIN}${GAME_ROOT}/${relativePath}`;
  const destination = join(outputRoot, relativePath);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${relativePath}`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, bytes);
  return {
    path: relativePath,
    bytes: bytes.byteLength,
    sha256: createHash('sha256').update(bytes).digest('hex'),
  };
}

function decodeUuid(compressed) {
  if (compressed.length !== 22) return compressed;
  const hex = `${compressed.slice(0, 2)}${Buffer.from(`${compressed.slice(2)}==`, 'base64').toString('hex')}`;
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

async function tryDownloadNative(uuid, extensions) {
  const decoded = decodeUuid(uuid);
  for (const extension of extensions) {
    const relativePath = `assets/g1007/native/${decoded.slice(0, 2)}/${decoded}${extension}`;
    try {
      return await download(relativePath);
    } catch (error) {
      if (!String(error.message).startsWith('404 ')) throw error;
    }
  }
  return null;
}

async function boundedMap(items, worker, limit = 6) {
  const queue = [...items];
  const results = [];
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (queue.length) results.push(await worker(queue.shift()));
  }));
  return results;
}

await mkdir(outputRoot, { recursive: true });
const files = await boundedMap(coreFiles, download);
const config = JSON.parse(await readFile(join(outputRoot, 'assets/g1007/config.json'), 'utf8'));
const packPaths = Object.keys(config.packs).map((pack) => `assets/g1007/import/${pack.slice(0, 2)}/${pack}.json`);
const packs = await boundedMap(packPaths, download);
const imageAssetUuids = Object.entries(config.paths)
  .filter(([, value]) => value[1] === 4)
  .map(([index]) => config.uuids[Number(index)]);
const audioAssetUuids = Object.entries(config.paths)
  .filter(([, value]) => value[1] === 9)
  .map(([index]) => config.uuids[Number(index)]);
const nativeImages = captureNative
  ? (await boundedMap(imageAssetUuids, (uuid) => tryDownloadNative(uuid, ['.png', '.jpg', '.webp']))).filter(Boolean)
  : [];
const nativeAudio = captureNative
  ? (await boundedMap(audioAssetUuids, (uuid) => tryDownloadNative(uuid, ['.mp3', '.ogg', '.wav']))).filter(Boolean)
  : [];
const manifest = {
  source: `${ORIGIN}${GAME_ROOT}/?gn=hades`,
  bundle: config.name,
  cocosEngine: JSON.parse(await readFile(join(outputRoot, 'src/settings.json'), 'utf8')).CocosEngine,
  assetsIndexed: config.uuids.length,
  packsIndexed: packPaths.length,
  nativeImageAssetsIndexed: imageAssetUuids.length,
  nativeAudioAssetsIndexed: audioAssetUuids.length,
  files,
  packs,
  nativeImages,
  nativeAudio,
};
await writeFile(join(outputRoot, 'capture-manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(JSON.stringify({ bundle: manifest.bundle, assetsIndexed: manifest.assetsIndexed, packsCaptured: packs.length, nativeImagesCaptured: nativeImages.length, nativeAudioCaptured: nativeAudio.length }));
