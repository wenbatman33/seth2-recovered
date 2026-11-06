# 官方 Web 建置的啟動最佳化

本設定以 Project-I 在官方 Creator 3.8.8 GUI 的實測為依據，只改變 JavaScript 發布模式與匯入 JSON 的封裝方式，不刪除圖片、音效或原生遊戲功能，也不改素材 `.meta` UUID。

`tools/recovery/configure-startup-release.mjs` 預設只設定 Project-A 至 Project-H；也可明確指定中性專案資料夾。它不執行編譯或發布。

```sh
node tools/recovery/configure-startup-release.mjs Project-A
```

寫入 `build-config.json` 的四個欄位為 `debug:false`、`mainBundleCompressionType:"merge_all_json"`、`mangleProperties:false`、`md5Cache:false`。`inlineEnum`、場景／Bundle UUID、其他建置欄位均保留。關閉屬性名稱混淆可保留還原客戶端原有的動態屬性存取。

自訂 Bundle 的 Web 壓縮模式使用官方設定檔 `settings/v2/packages/builder.json` 的 `bundleConfig.custom.default.configs.web.preferredOptions.compressionType`。此欄位設為 `merge_all_json`，其他 native／miniGame／自訂 Bundle 覆寫設定保留；缺少的預設結構採用官方 UI 產生的結構。這項設定不放入 `build-config.bundleConfigs`，也不修改舊式資料夾 `.meta` 壓縮欄位。

`create-independent-project.mjs` 使用相同的純設定函式，讓後續新建的獨立工程也產生此設定；原有組裝介面、來源檢查、場景選擇與 UUID 保留規約不變。

## 必須驗證真正的建置輸出

設定檔正確不能證明 Creator 已套用它。每款仍須從官方 GUI 匯入建置設定，輸出至該專案的 `build/web`，然後執行：

```sh
node tools/recovery/check-startup-build.mjs Project-A \
  --report .cache/rea-new-games/Project-A/startup-release-output-verification.json
```

驗證器讀取真正的 `build/web/src/settings.json` 和每個實際輸出 Bundle，要求 engine 的 `debug` 為 false、設定要求的 Bundle 沒有漏出、每個 Bundle 的 `config.json` 存在、實際 import JSON 檔案數及宣告的 pack 數均不超過一個，且宣告的 pack 檔案確實存在並可解析。它保存這些成品的 SHA-256 作為證據，會拒絕舊 debug 成品、未合併的多 pack、額外 import JSON 或遺漏 Bundle。

CCON 資產在合併 JSON 後仍可保留二進位 companion；驗證器僅接受該 Bundle config 的 `.cconb` 索引明確指向的原始 UUID，不把任意 `.bin` 檔案視為合格。

此檢查不等於玩法、音效、圖片位元組一致性或啟動效能驗收。仍須使用同一份正式成品做冷載量測、原生操作與待完成回合恢復；圖片與音效另做來源位元組對照。九款已分別完成官方 GUI 正式建置及成品檢查，並實際執行首回合；詳細結果與限制見 [啟動最佳化結果](startup/all-projects-comparison.md)。設定工具本身成功仍不等於新成品已通過。
