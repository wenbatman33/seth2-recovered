#!/usr/bin/env node

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';

const traverse = traverseModule.default;
const input = process.argv[2] ?? 'research/atg/hades/mirror/assets/g1007/index.js';
const outputRoot = process.argv[3] ?? 'research/atg/hades/extracted';
const source = await readFile(input, 'utf8');
const ast = parse(source, { sourceType: 'script', errorRecovery: false });
const modules = [];

traverse(ast, {
  CallExpression(path) {
    const { node } = path;
    if (node.callee.type !== 'MemberExpression' || node.callee.computed) return;
    if (node.callee.object.type !== 'Identifier' || node.callee.object.name !== 'System') return;
    if (node.callee.property.type !== 'Identifier' || node.callee.property.name !== 'register') return;
    const name = node.arguments[0];
    if (name?.type !== 'StringLiteral' || !name.value.startsWith('chunks:///_virtual/')) return;
    modules.push({
      virtualPath: name.value.slice('chunks:///_virtual/'.length),
      start: node.start,
      end: node.end,
      source: source.slice(node.start, node.end),
    });
  },
});

for (const module of modules) {
  const safePath = module.virtualPath.replaceAll('..', '__');
  const destination = join(outputRoot, safePath.replace(/\.ts$/, '.js'));
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, `// Extracted from ${relative(process.cwd(), input)} bytes ${module.start}-${module.end}\n${module.source}\n`);
}

await writeFile(join(outputRoot, 'manifest.json'), `${JSON.stringify(modules.map(({ source: _source, ...module }) => module), null, 2)}\n`);
console.log(JSON.stringify({ modules: modules.length, outputRoot }));
