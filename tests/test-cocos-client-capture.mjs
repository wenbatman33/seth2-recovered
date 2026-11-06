import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {capture,decodeUuid,versionedAsset} from '../tools/recovery/capture-cocos-client.mjs';

test('asset identities and CDN versions retain sub-assets',()=>{
 const uid='fc991dd7-0033-4b80-9d41-66c45614391b';
 assert.equal(decodeUuid(uid+'@6c48a'),uid+'@6c48a');
 assert.equal(versionedAsset({uuids:[uid],versions:{native:[0,'abc']}},'native',0,'.png'),'native/fc/'+uid+'.abc.png');
 assert.equal(versionedAsset({versions:{import:['pack1','v2']}},'import','pack1','.json'),'import/pa/pack1.v2.json');
});

test('capture records exact hashes, resumes only same source and never executes scripts',async()=>{
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'client-capture-'));
 const originalFetch=globalThis.fetch,requests=[];
 const settings={assets:{projectBundles:['g1'],bundleVers:{g1:'v3'}},plugins:{jsList:[]}};
 globalThis.fetch=async url=>{
  const p=new URL(url).pathname.split('/game/')[1];requests.push(p);
  let body=p==='src/settings.json'?JSON.stringify(settings):p==='assets/g1/config.v3.json'?JSON.stringify({name:'g1',uuids:[],packs:{},paths:{},versions:{}}):'/* inert source; throw would execute if evaluated */';
  return new Response(body,{status:200});
 };
 try{
  const metadata={project:'Project-X',baseUrl:'https://example.test/game/'};
  const first=await capture(metadata,root);assert.equal(first.missing,0);assert.ok(requests.includes('assets/g1/index.v3.js'));
  const manifest=JSON.parse(await fs.readFile(path.join(root,'capture-manifest.json')));
  assert.ok(manifest.files.every(x=>/^[0-9a-f]{64}$/.test(x.sha256)));
  requests.length=0;await capture(metadata,root);assert.equal(requests.length,0);
  await assert.rejects(capture({...metadata,baseUrl:'https://different.test/game/'},root),/source differs/);
  await assert.rejects(capture({...metadata,baseUrl:'https://example.test/game/?token=x'},root),/without credentials/);
 }finally{globalThis.fetch=originalFetch;await fs.rm(root,{recursive:true,force:true});}
});
