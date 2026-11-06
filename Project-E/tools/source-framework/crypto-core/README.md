# crypto-core：Socket 加密核心（wasm）

`scripts/utils/CryptoTool.ts` 背後的加解密核心。stream-v1 的 keystream / shell 層、
masterKey 與 session 金鑰 K 全部在這支 wasm 內，JS 只進出壓縮後的明文與封包。

## 檔案

| 檔案 | 說明 |
| --- | --- |
| `crypto_core.c` | 核心原始碼，由後端交付的 `StreamCipher.ts` 逐行移植，不依賴 libc |
| `master_key.h` | `gen_key.mjs` 產生：kid 與「masterKey XOR 隨機遮罩」的兩組常數 |
| `gen_key.mjs` | 換 key 用：把後端給的 masterKey hex 拆成遮罩形式寫進 `master_key.h` |
| `build.sh` | 編譯、驗證、產出 `scripts/utils/CryptoCoreWasm.ts`（base64 內嵌） |
| `test/stream_cipher_ref.mjs` | 參考實作（`StreamCipher.ts` 原檔），只給驗證用，不進 bundle |
| `test/verify.mjs` | 用參考實作逐 byte 比對 wasm 的加解密結果 |

## 環境

```bash
brew install llvm@21 lld@21   # clang 出 wasm32 目標 + 配對版本的 wasm-ld
node -v                       # 18+
```

`build.sh` 選編譯器的順序：`CC` 環境變數 → Homebrew 的 llvm@21 + lld@21 → PATH 上的 `zig`（`zig cc` 內含 clang 與 wasm-ld）。
要指定其他工具鏈就設 `CC`，例如 `CC="zig cc"`。

## 重編

```bash
bash tools/crypto-core/build.sh
```

流程：測試 build（帶 `encrypt_nonce` 匯出）→ `verify.mjs` 全數通過 → 正式 build（strip、無測試匯出）
→ 覆寫 `scripts/utils/CryptoCoreWasm.ts`。中間產物在 mktemp，不留檔。

## 換 key（每次發版）

1. 向後端取得新的 `kid` 與 32-byte masterKey（hex）。
2. 把 hex 存成暫存檔（不要直接打在指令列），執行：

   ```bash
   node tools/crypto-core/gen_key.mjs <kid> /path/to/key.hex
   rm /path/to/key.hex
   bash tools/crypto-core/build.sh
   ```

3. 提交 `master_key.h` 與重產的 `CryptoCoreWasm.ts`。

## 匯出介面

| 匯出 | 說明 |
| --- | --- |
| `kid()` | 這一版的 kid |
| `in_buf(n)` | 取 n bytes 輸入區位址，0 代表記憶體成長失敗 |
| `out_ptr()` | 最近一次 encrypt / decrypt 的輸出起點 |
| `init_key(tokenLen)` | 以輸入區內的 token 算 K，回 1 成功 |
| `encrypt(plainLen)` | 回封包長度，-1 失敗 |
| `decrypt(frameLen)` | 回明文長度，-1 失敗 |
| `has_key()` / `clear_key()` | 查詢 / 清除 K |
| `last_error()` | 1 OOM、2 未 init、3 封包過短、4 kid 不符、5 參數錯 |

唯一的 import 是 `env.random_bytes(ptr, len)`，JS 以 `crypto.getRandomValues` 供應 nonce。

## 它防什麼、不防什麼

- 防：打開 JS bundle 用文字搜尋或兩個陣列一 XOR 就拿到 masterKey。
- 不防：在 DevTools dump `WebAssembly.Memory`、在 JS 邊界 hook `decrypt` 輸出。明文最終一定要回到遊戲邏輯。

## Cocos 注意事項

本資料夾位於 bundle 內，Cocos 編輯器會替這裡的檔案產生 `.meta`，屬正常現象，一起提交即可。
node 腳本用 `.mjs` 副檔名，避免被 Cocos 當成插件腳本載入。
