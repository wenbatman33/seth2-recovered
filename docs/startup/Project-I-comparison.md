# Project-I 載入比較

Creator 3.8.8 官方 GUI 建置（2026-11-06 18:10:33），在固定延遲的本機測試中，兩次冷啟動的中位數由 **11.713 秒降為 6.969 秒，縮短 40.5%**。這不是公開 GitHub Pages 的速度測試。

| 指標 | 修改前 | 修改後 |
|---|---:|---:|
| 冷啟動樣本 | 12,382／11,043 ms | 6,967／6,971 ms |
| 啟動請求 | 1,075 | 522 |
| 啟動傳輸量 | 34,561,569 bytes | 34,147,638 bytes |
| 全部建置 JS 原始大小 | 11,880,803 bytes | 6,614,821 bytes |
| import JSON 檔案 | 1,649 | 6 |
| 圖片原始大小 | 39,204,587 bytes | 39,204,587 bytes |
| 音訊原始大小 | 9,669,987 bytes | 9,669,987 bytes |

每次使用新的 URL 前綴，伺服器固定每個請求增加 40 ms、對 JS／JSON／CSS／HTML 使用 gzip，並設 `Cache-Control: public,max-age=600`。載入完成以原生 Entry 的 `onEnterGameView` 回呼判定。每個版本僅兩次樣本；結果不可外推為每位使用者的網路速度。建置原始 JS 大小與瀏覽器傳輸量是不同指標。

有效設定為 `debug:false`、`mainBundleCompressionType:merge_all_json`，以及 Project Settings → Bundle 配置 → 預設配置 → 網頁 → 通用設定的「合併所有 JSON」。後者寫入 `settings/v2/packages/builder.json` 的 `bundleConfig.custom.default.configs.web.preferredOptions`。`mangleProperties:false`、`md5Cache:false` 保留。六個 bundle 的 pack 數均為 1。一般模式也停止將詳細素材載入 history 重複序列化到 DOM，`reaDebug=1` 仍可取得完整診斷。此次比較包含這些修改的合併效果，沒有分別估算其貢獻。

獨立逐檔 SHA256 比對確認 **806 個圖片檔與 116 個音訊檔的完整雜湊 multiset 相同**，包含重複檔案數與檔案大小。

實際瀏覽器已觀察到 1280×720 電腦版及 390×844 手機版的原始啟動／主畫面與排版。自有模擬後端的指定 transform 測試局共兩個階段：點數 10,000 → 扣注後 9,999 → 單次結算後 10,000，獎勵為 1。AudioContext 為 running，原生 BGM 長 36.3637 秒且循環，多個原生音效有觸發；開發測試的輸出匯流排靜音，沒有宣稱外放聽測。編譯後端 7 案與實際產物 6-bundle／6-JSON 檢查通過。

這些證據涵蓋載入及指定操作流程，並不代表全部特殊玩法驗收完成，也不代表還原了原伺服器 RNG／RTP。完整數值、素材雜湊摘要與證據來源見 [Project-I-comparison.json](Project-I-comparison.json)。
