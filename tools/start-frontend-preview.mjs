import { spawn } from 'node:child_process';
import { openSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const project = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const development = process.argv.includes('--development');
const port = development ? 8178 : 8174, base = `http://127.0.0.1:${port}`;
for (const game of ['hades', 'seth2']) if (!existsSync(resolve(project, 'build/frontend-' + game, 'index.html'))) {
  throw Error('Missing official GUI build: build/frontend-' + game);
}
async function ours() {
  try { const response = await fetch(base + '/__recovered_health', { signal: AbortSignal.timeout(700) }); return (await response.json()).project === project; } catch { return false; }
}
if (!await ours()) {
  const logs = resolve(project, 'temp/local-preview'); mkdirSync(logs, { recursive: true });
  const log = openSync(resolve(logs, development ? 'frontends-development.log' : 'frontends.log'), 'a');
  const args = [resolve(project, 'tools/serve-recovered-frontends.mjs'), String(port), ...(development ? ['--development'] : [])];
  const unix = process.platform !== 'win32';
  const child = spawn(unix ? 'nice' : process.execPath, unix ? ['-n', '15', process.execPath, ...args] : args,
    { cwd: project, detached: true, stdio: ['ignore', log, log] }); child.unref();
  let ready = false;
  for (let attempt = 0; attempt < 40; attempt++) { if (await ours()) { ready = true; break; } await new Promise(resolve => setTimeout(resolve, 100)); }
  if (!ready) throw Error('Preview service unavailable; inspect ' + logs + '. No unrelated service was stopped.');
}
console.log((development ? '靜音開發預覽：' : '兩款遊戲本機入口：') + base + '/');
