#!/usr/bin/env bash
# 建置 Socket 加密核心 wasm，並重產 scripts/utils/CryptoCoreWasm.ts。
#
# 需求（macOS / Homebrew）：
#   brew install llvm@21 lld@21   # clang 出 wasm32 目標 + wasm-ld（或 brew install zig）
#   node 18+                      # 驗證與 base64 產出
#
# 流程：
#   1. 測試 build（-DCRYPTO_TESTVEC，多一個 encrypt_nonce 匯出）→ 跑 test/verify.mjs 與參考實作逐 byte 比對
#   2. 正式 build（無測試匯出、strip 全部符號）→ base64 內嵌到 scripts/utils/CryptoCoreWasm.ts
# 中間產物放在 mktemp 目錄，不留在 bundle 內。
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
OUT_TS="$HERE/../../scripts/utils/CryptoCoreWasm.ts"

# 編譯器選擇（依序）：
#   1. CC 環境變數（完整指令，例如 CC="zig cc"）
#   2. Homebrew llvm@21 的 clang + lld@21 的 wasm-ld
#   3. PATH 上的 zig（zig cc 內含 clang 與 wasm-ld）
TARGET=wasm32
if [[ -n "${CC:-}" ]]; then
  read -r -a CC_CMD <<< "$CC"
  [[ "${CC_CMD[0]}" == zig ]] && TARGET=wasm32-freestanding
elif [[ -x "$(brew --prefix llvm@21 2>/dev/null)/bin/clang" && -x "$(brew --prefix lld@21 2>/dev/null)/bin/wasm-ld" ]]; then
  CC_CMD=("$(brew --prefix llvm@21)/bin/clang" "--ld-path=$(brew --prefix lld@21)/bin/wasm-ld")
elif command -v zig >/dev/null 2>&1; then
  CC_CMD=(zig cc)
  TARGET=wasm32-freestanding
else
  echo "找不到編譯器：brew install llvm@21 lld@21（或 brew install zig），或設 CC" >&2; exit 1
fi
echo "→ 編譯器：${CC_CMD[*]}（target ${TARGET}）"
if [[ ! -f "$HERE/master_key.h" ]]; then echo "缺 master_key.h，先跑 gen_key.mjs" >&2; exit 1; fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

COMMON_FLAGS=(
  --target="$TARGET"
  -nostdlib -ffreestanding -fno-builtin
  -Oz
  -fvisibility=hidden
  -Wall -Wextra
  -Wno-unused-command-line-argument
  -Wl,--no-entry
  -Wl,--strip-all
  -Wl,-z,stack-size=16384
  -Wl,--initial-memory=131072
)

echo "→ 測試 build"
"${CC_CMD[@]}" "${COMMON_FLAGS[@]}" -DCRYPTO_TESTVEC -o "$TMP/crypto_core_test.wasm" "$HERE/crypto_core.c"

echo "→ 驗證（與 test/stream_cipher_ref.mjs 逐 byte 比對）"
node "$HERE/test/verify.mjs" "$TMP/crypto_core_test.wasm" "$HERE/master_key.h"

echo "→ 正式 build"
"${CC_CMD[@]}" "${COMMON_FLAGS[@]}" -o "$TMP/crypto_core.wasm" "$HERE/crypto_core.c"

echo "→ 檢查正式 build 的匯出表"
node -e '
const fs = require("fs");
const mod = new WebAssembly.Module(fs.readFileSync(process.argv[1]));
const names = WebAssembly.Module.exports(mod).map(e => e.name).sort();
console.log("  exports:", names.join(", "));
if (names.includes("encrypt_nonce")) { console.error("正式 build 不該有 encrypt_nonce"); process.exit(1); }
const imports = WebAssembly.Module.imports(mod).map(i => i.module + "." + i.name);
console.log("  imports:", imports.join(", "));
' "$TMP/crypto_core.wasm"

echo "→ 產出 $OUT_TS"
node -e '
const fs = require("fs");
const crypto = require("crypto");
const [wasmPath, outPath] = process.argv.slice(1);
const bytes = fs.readFileSync(wasmPath);
const b64 = bytes.toString("base64");
const digest = crypto.createHash("sha256").update(bytes).digest("hex").slice(0, 16);
const stamp = new Date().toISOString().slice(0, 10);
const ts = `/**
 * 自動產生，勿手改：由 tools/crypto-core/build.sh 產出。
 * Socket 加密核心（stream-v1）的 wasm 二進位，以 base64 內嵌，由 CryptoWasm.ts 載入。
 * 原始碼：tools/crypto-core/crypto_core.c；換 key / 重編流程見 tools/crypto-core/README.md。
 */
export const CRYPTO_CORE_WASM_BUILD = "${stamp} ${digest}";
export const CRYPTO_CORE_WASM_SIZE = ${bytes.length};
export const CRYPTO_CORE_WASM_B64 =
    "${b64}";
`;
fs.writeFileSync(outPath, ts);
console.log(`  ${bytes.length} bytes wasm → ${outPath}`);
' "$TMP/crypto_core.wasm" "$OUT_TS"

echo "完成"
