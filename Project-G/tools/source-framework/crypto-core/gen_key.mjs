#!/usr/bin/env node
/**
 * 產生 master_key.h：把後端給的 masterKey 以隨機遮罩拆成 MK_MASKED / MK_MASK 兩組常數嵌進 wasm。
 *
 * 用法：
 *   node gen_key.mjs <kid> <masterKey.hex 檔路徑>
 *
 * 金鑰以「檔案路徑」傳入而不是直接寫在指令列，避免留在 shell history。
 * hex 檔內容為 64 個 hex 字元（32 bytes），可含換行。用完請刪掉該檔。
 *
 * 換 key 流程（每次發版）：
 *   1. 向後端取得新的 kid 與 masterKey
 *   2. node gen_key.mjs <kid> <hex 檔>      → 覆寫 master_key.h
 *   3. bash build.sh                        → 重編 wasm、跑驗證、重產 scripts/utils/CryptoCoreWasm.ts
 */
import { randomBytes } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const [kidArg, hexPath] = process.argv.slice(2);

if (!kidArg || !hexPath) {
    console.error("用法：node gen_key.mjs <kid> <masterKey.hex 檔路徑>");
    process.exit(1);
}

const kid = Number(kidArg);
if (!Number.isInteger(kid) || kid < 1 || kid > 255) {
    console.error("kid 必須是 1..255 的整數");
    process.exit(1);
}

const hex = readFileSync(resolve(hexPath), "utf8").replace(/\s+/g, "");
if (!/^[0-9a-fA-F]{64}$/.test(hex)) {
    console.error("masterKey 必須是 64 個 hex 字元（32 bytes）");
    process.exit(1);
}

const key = Buffer.from(hex, "hex");
const mask = randomBytes(32);
const masked = Buffer.from(key.map((b, i) => b ^ mask[i]));

const fmt = (buf) => {
    const lines = [];
    for (let i = 0; i < 32; i += 8) {
        const row = Array.from(buf.subarray(i, i + 8), (b) => "0x" + b.toString(16).padStart(2, "0")).join(", ");
        lines.push(`    ${row},`);
    }
    return lines.join("\n");
};

const header = `/*
 * 自動產生，勿手改：node tools/crypto-core/gen_key.mjs <kid> <hex 檔>
 *
 * masterKey 以「真值 XOR 隨機遮罩」拆成兩組常數，執行期在 wasm 內還原到線性記憶體。
 * 這支檔案只進 wasm 的 data section，不會出現在 JS bundle。
 */
#ifndef CRYPTO_MASTER_KEY_H
#define CRYPTO_MASTER_KEY_H

#include <stdint.h>

#define CRYPTO_KID ${kid}

static const uint8_t MK_MASKED[32] = {
${fmt(masked)}
};

static const uint8_t MK_MASK[32] = {
${fmt(mask)}
};

#endif
`;

writeFileSync(resolve(here, "master_key.h"), header);
console.log(`已寫入 master_key.h（kid=${kid}）。記得刪掉 ${hexPath}，並執行 build.sh 重編。`);
