#!/usr/bin/env node
/**
 * 用參考實作（stream_cipher_ref.mjs，即後端交付的 StreamCipher.ts）逐 byte 驗證 wasm 核心。
 *
 * 用法：node verify.mjs <crypto_core_test.wasm> <master_key.h>
 * 需要測試 build（-DCRYPTO_TESTVEC）才有 encrypt_nonce 匯出。
 *
 * 驗證項目：
 *   1. kid 匯出與 master_key.h 一致
 *   2. 固定 nonce 加密結果與參考實作相同（多種長度，含 0 / block 邊界 / 跨多頁記憶體）
 *   3. 參考實作加密 → wasm 解密 還原明文
 *   4. wasm 加密（隨機 nonce）→ 參考實作解密 還原明文
 *   5. kid 不符、封包過短、未 init 的錯誤路徑
 *   6. clear_key 後 has_key 為 0，重新 init 後結果一致
 */
import { readFileSync } from "node:fs";
import { createHash, randomBytes } from "node:crypto";
import { encryptFrame, decryptFrame } from "./stream_cipher_ref.mjs";

const [wasmPath, headerPath] = process.argv.slice(2);
if (!wasmPath || !headerPath) {
    console.error("用法：node verify.mjs <crypto_core_test.wasm> <master_key.h>");
    process.exit(1);
}

// ---------- 從 master_key.h 還原 masterKey（只在記憶體，不印出） ----------
const header = readFileSync(headerPath, "utf8");
const kidMatch = header.match(/#define\s+CRYPTO_KID\s+(\d+)/);
const arr = (name) => {
    const m = header.match(new RegExp(`${name}\\[32\\]\\s*=\\s*\\{([^}]*)\\}`));
    if (!m) throw new Error(`master_key.h 缺 ${name}`);
    const bytes = m[1].match(/0x[0-9a-fA-F]{2}/g).map((h) => parseInt(h, 16));
    if (bytes.length !== 32) throw new Error(`${name} 不是 32 bytes`);
    return Uint8Array.from(bytes);
};
const KID = Number(kidMatch[1]);
const masked = arr("MK_MASKED");
const mask = arr("MK_MASK");
const masterKey = Uint8Array.from(masked, (b, i) => b ^ mask[i]);

const deriveKey = (token) =>
    new Uint8Array(createHash("sha256").update(masterKey).update(token, "utf8").digest());

// ---------- 載入 wasm ----------
let memory;
const { instance } = await WebAssembly.instantiate(readFileSync(wasmPath), {
    env: {
        random_bytes: (ptr, len) => {
            new Uint8Array(memory.buffer, ptr, len).set(randomBytes(len));
        },
    },
});
const e = instance.exports;
memory = e.memory;
if (typeof e.encrypt_nonce !== "function") {
    console.error("這不是測試 build（缺 encrypt_nonce），請用 -DCRYPTO_TESTVEC 編譯");
    process.exit(1);
}

const view = (ptr, len) => new Uint8Array(memory.buffer, ptr, len);
const writeIn = (bytes) => {
    const p = e.in_buf(bytes.length);
    if (!p) throw new Error("in_buf 失敗 err=" + e.last_error());
    view(p, bytes.length).set(bytes);
    return p;
};
const readOut = (len) => view(e.out_ptr(), len).slice();

const wasmInitKey = (token) => {
    const t = new TextEncoder().encode(token);
    writeIn(t);
    const r = e.init_key(t.length);
    if (r !== 1) throw new Error("init_key 失敗 err=" + e.last_error());
};
const wasmEncryptNonce = (nonce, plain) => {
    const buf = new Uint8Array(8 + plain.length);
    buf.set(nonce, 0);
    buf.set(plain, 8);
    writeIn(buf);
    const n = e.encrypt_nonce(buf.length);
    if (n === -1) throw new Error("encrypt_nonce 失敗 err=" + e.last_error());
    return readOut(n);
};
const wasmEncrypt = (plain) => {
    writeIn(plain);
    const n = e.encrypt(plain.length);
    if (n === -1) throw new Error("encrypt 失敗 err=" + e.last_error());
    return readOut(n);
};
const wasmDecrypt = (frame) => {
    writeIn(frame);
    const n = e.decrypt(frame.length);
    if (n === -1) return null;
    return readOut(n);
};

const equal = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
let passed = 0;
const check = (name, ok, extra = "") => {
    if (!ok) {
        console.error(`✗ ${name} ${extra}`);
        process.exit(1);
    }
    passed++;
};

// ---------- 1. kid ----------
check("kid 與 master_key.h 一致", e.kid() === KID, `wasm=${e.kid()} header=${KID}`);

// ---------- 2~4. 加解密 ----------
const tokens = ["", "abc", "token-" + "x".repeat(200), "中文 token 測試 🙂"];
const lengths = [0, 1, 7, 8, 9, 63, 64, 65, 127, 128, 129, 1000, 4096, 70000, 200000];

for (const token of tokens) {
    wasmInitKey(token);
    check(`has_key (token len ${token.length})`, e.has_key() === 1);
    const ctx = { kid: KID, masterKey, key: deriveKey(token) };

    for (const len of lengths) {
        const plain = randomBytes(len);
        const nonce = randomBytes(8);

        const expected = encryptFrame(ctx, plain, nonce);
        const actual = wasmEncryptNonce(nonce, plain);
        check(`固定 nonce 加密一致 len=${len}`, equal(actual, expected));

        const dec = wasmDecrypt(expected);
        check(`wasm 解密參考封包 len=${len}`, dec !== null && equal(dec, plain));

        const fromWasm = wasmEncrypt(plain);
        check(`wasm 封包 header len=${len}`, fromWasm.length === 9 + len && fromWasm[0] === KID);
        const refDec = decryptFrame(ctx, fromWasm);
        check(`參考實作解密 wasm 封包 len=${len}`, equal(refDec, plain));
    }
}

// 兩次隨機 nonce 不同
{
    const a = wasmEncrypt(new Uint8Array(16));
    const b = wasmEncrypt(new Uint8Array(16));
    check("隨機 nonce 每包不同", !equal(a.subarray(1, 9), b.subarray(1, 9)));
}

// ---------- 5. 錯誤路徑 ----------
{
    const good = wasmEncrypt(randomBytes(20));
    const badKid = good.slice();
    badKid[0] = (KID % 255) + 1;
    check("kid 不符回 -1", wasmDecrypt(badKid) === null && e.last_error() === 4);
    check("封包過短回 -1", wasmDecrypt(good.subarray(0, 8)) === null && e.last_error() === 3);

    e.clear_key();
    check("clear_key 後 has_key=0", e.has_key() === 0);
    check("未 init 解密回 -1", wasmDecrypt(good) === null && e.last_error() === 2);
    writeIn(new Uint8Array(4));
    check("未 init 加密回 -1", e.encrypt(4) === -1 && e.last_error() === 2);
}

// ---------- 6. 重新 init ----------
{
    wasmInitKey("again");
    const ctx = { kid: KID, masterKey, key: deriveKey("again") };
    const plain = randomBytes(300);
    const nonce = randomBytes(8);
    check("重新 init 後加密一致", equal(wasmEncryptNonce(nonce, plain), encryptFrame(ctx, plain, nonce)));
}

console.log(`✓ verify 通過 ${passed} 項（memory ${memory.buffer.byteLength / 65536} pages）`);
