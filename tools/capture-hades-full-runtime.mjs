#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ORIGIN = 'https://play.godeezone1.com';
const GAME_ROOT = '/egames/37ab205b0990c6a3643e0dbb8c9ee4adb698123c/game';
const outputRoot = process.argv[2] ?? 'research/atg/hades/full-mirror-20261104';
const bundles = ['internal', 'resources', 'main', 'slotFramework', 'g1007'];

const rootFiles = [
  'index.html',
  'app.js',
  'style.css',
  'game.css',
  'index.js',
  'application.js',
  'src/settings.json',
  'src/import-map.json',
  'src/polyfills.bundle.js',
  'src/system.bundle.js',
  'src/chunks/bundle.js',
  'cocos-js/cc.js',
  'src/assets/scripts/plugin/CryptoJS.js',
  'src/assets/scripts/plugin/MotionPathPlugin.min.js',
  'src/assets/scripts/plugin/forge.min.js',
  'src/assets/scripts/plugin/gsap.min.js',
  'src/assets/scripts/plugin/mobile-detect.min.js',
  'src/assets/scripts/plugin/pako.min.js',
  'src/assets/scripts/plugin/protobuf.min.js',
  'src/assets/scripts/framework/plugin/Extentions.js',
  'src/assets/scripts/framework/core/net/socketIO/socket.io.js',
  'public/atg.png',
  'public/bg_blur.jpg',
  'assets/resources/native/38/38fa38b4-bda9-4e6b-9406-c33c4f73b3de.pem',
];

function decodeUuid(compressed) {
  const [base, ...suffix] = compressed.split('@');
  if (base.length !== 22) return compressed;
  const hex = `${base.slice(0, 2)}${Buffer.from(`${base.slice(2)}==`, 'base64').toString('hex')}`;
  const decoded = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  return `${decoded}${suffix.length ? `@${suffix.join('@')}` : ''}`;
}

async function download(relativePath, optional = false) {
  const destination = join(outputRoot, relativePath);
  try {
    const bytes = await readFile(destination);
    return { path: relativePath, bytes: bytes.byteLength, sha256: createHash('sha256').update(bytes).digest('hex') };
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  const response = await fetch(`${ORIGIN}${GAME_ROOT}/${relativePath}`);
  if (!response.ok) {
    if (optional && response.status === 404) return null;
    throw new Error(`${response.status} ${relativePath}`);
  }
  const bytes = new Uint8Array(await response.arrayBuffer());
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, bytes);
  return {
    path: relativePath,
    bytes: bytes.byteLength,
    sha256: createHash('sha256').update(bytes).digest('hex'),
  };
}

async function boundedMap(items, worker, limit = 12) {
  const queue = [...items];
  const results = [];
  await Promise.all(Array.from({ length: Math.min(limit, queue.length) }, async () => {
    while (queue.length) {
      const result = await worker(queue.shift());
      if (result) results.push(result);
    }
  }));
  return results;
}

async function downloadNative(bundle, uuid, extensions) {
  const decoded = decodeUuid(uuid);
  for (const extension of extensions) {
    const path = `assets/${bundle}/native/${decoded.slice(0, 2)}/${decoded}${extension}`;
    const result = await download(path, true);
    if (result) return result;
  }
  return null;
}

async function captureBundle(bundle) {
  const core = await boundedMap([
    `assets/${bundle}/config.json`,
    `assets/${bundle}/index.js`,
  ], (path) => download(path));
  const configPath = join(outputRoot, `assets/${bundle}/config.json`);
  const config = JSON.parse(await readFile(configPath, 'utf8'));
  const packs = await boundedMap(
    Object.keys(config.packs ?? {}).map((pack) => `assets/${bundle}/import/${pack.slice(0, 2)}/${pack}.json`),
    (path) => download(path),
  );
  const packedIndices = new Set(Object.values(config.packs ?? {}).flat().map(Number));
  const redirectedIndices = new Set((config.redirect ?? []).filter((_, i) => i % 2 === 0).map(Number));
  const packUuids = new Set(Object.keys(config.packs ?? {}));
  const importExtensions = new Map();
  for (const [extension, indices] of Object.entries(config.extensionMap ?? {})) {
    for (const index of indices) importExtensions.set(Number(index), extension);
  }
  const missingImports = [];
  const imports = await boundedMap(config.uuids.map((uuid, index) => ({ uuid, index }))
    .filter(({ uuid, index }) => !packedIndices.has(index) && !redirectedIndices.has(index) && !packUuids.has(uuid)),
  async ({ uuid, index }) => {
    const decoded = decodeUuid(uuid);
    const extension = importExtensions.get(index) ?? '.json';
    const path = `assets/${bundle}/import/${decoded.slice(0, 2)}/${decoded}${extension}`;
    const result = await download(path, true);
    if (!result) missingImports.push({ path, uuid, assetPath: config.paths?.[index]?.[0] });
    return result;
  });
  const imageUuids = [...new Set([
    ...Object.entries(config.paths ?? {})
      .filter(([, value]) => config.types[value[1]] === 'cc.ImageAsset')
      .map(([index]) => config.uuids[Number(index)]),
    ...config.uuids.filter((uuid) => uuid.endsWith('@6c48a')).map((uuid) => uuid.split('@')[0]),
  ])];
  const audioUuids = Object.entries(config.paths ?? {})
    .filter(([, value]) => config.types[value[1]] === 'cc.AudioClip')
    .map(([index]) => config.uuids[Number(index)]);
  const images = await boundedMap(imageUuids, (uuid) => downloadNative(bundle, uuid, ['.png', '.jpg', '.webp']));
  const audio = await boundedMap(audioUuids, (uuid) => downloadNative(bundle, uuid, ['.mp3', '.ogg', '.wav']));
  console.log(JSON.stringify({ bundle, imports: imports.length, missingImports: missingImports.length, images: images.length, audio: audio.length }));
  return {
    bundle,
    dependencies: config.deps ?? [],
    assetCount: config.uuids.length,
    core,
    packs,
    imports,
    missingImports,
    images,
    audio,
  };
}

await mkdir(outputRoot, { recursive: true });
const roots = await boundedMap(rootFiles, (path) => download(path));
const capturedBundles = [];
for (const bundle of bundles) capturedBundles.push(await captureBundle(bundle));

const manifest = {
  source: `${ORIGIN}${GAME_ROOT}/?gn=hades`,
  capturedAt: new Date().toISOString(),
  scope: 'Public Cocos client capture, with missing indexed imports recorded. Runtime dependency completeness requires browser verification. No authenticated server responses or server RNG.',
  roots,
  bundles: capturedBundles,
};
await writeFile(join(outputRoot, 'full-runtime-manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(JSON.stringify({
  bundles: capturedBundles.map(({ bundle, assetCount, packs, images, audio }) => ({
    bundle,
    assetCount,
    packs: packs.length,
    images: images.length,
    audio: audio.length,
  })),
}, null, 2));
