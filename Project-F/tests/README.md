# Project-F 驗證

在集合根目錄執行：

```sh
node --experimental-vm-modules Project-F/tests/test-backend.mjs
node tools/recovery/check-built-backend.mjs Project-F
```

第一項直接測試本工程的自有模擬後端、原始 consumer module 與來源規則；測試不需要 .cache。第二項需要先以官方 Creator GUI 建置，會執行實際編譯後的自有後端模組，防止編譯轉換改變資料結構。兩項都不代表畫面、操作、音效或完整玩法已驗收。

fixtures/source-manifest.json 記錄公開前端測試來源與 SHA256。沒有複製私人啟動參數或伺服器回合資料。
