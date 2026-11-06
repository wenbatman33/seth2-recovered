import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const tests=dirname(fileURLToPath(import.meta.url));
const manifest=JSON.parse(readFileSync(resolve(tests,'fixtures/source-manifest.json'),'utf8'));
for(const item of manifest.modules){const bytes=readFileSync(resolve(tests,item.file));assert.equal(createHash('sha256').update(bytes).digest('hex'),item.sha256,'Original public fixture hash changed: '+item.module);}
