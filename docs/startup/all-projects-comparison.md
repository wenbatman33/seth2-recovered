# 九款正式建置的啟動最佳化結果

九款均由已登入的官方 Creator 3.8.8 GUI 建置至各自 `build/web`。此處記錄發布前的本機驗證。此處驗證啟動、成品封裝與代表回合，不代表所有特殊玩法已完整還原。

| 專案 | JavaScript 減少 | 匯入 JSON：前 → 後 |
|---|---:|---:|
| Project-A | 45.5% | 2,706 → 5 |
| Project-B | 45.5% | 1,649 → 5 |
| Project-C | 30.9% | 1,666 → 6 |
| Project-D | 43.9% | 2,053 → 6 |
| Project-E | 44.2% | 1,285 → 6 |
| Project-F | 44.2% | 1,891 → 6 |
| Project-G | 44.3% | 1,205 → 6 |
| Project-H | 43.7% | 1,452 → 6 |
| Project-I | 44.3% | 1,649 → 6 |

九款 JavaScript 合計由 98,947,298 降至 56,275,998 bytes，減少 43.1%。匯入 JSON 由 15,556 個降至 52 個。這是磁碟成品大小和檔案數，並非每次啟動都會下載全部檔案。

Project-I 在固定每請求延遲 40 ms、gzip、每次使用新 URL 的本機冷載比較中，原生主視圖建立時間中位數由 11.71 秒降至 6.97 秒（快 40.5%），啟動請求 1,075 → 522。這不是公開 Pages 或所有使用者的實際速度保證；各款網路與素材解碼成本不同。

所有先前建置中的圖片、音效 bytes 與重複數都保留。八款媒體集合完全相同；Project-C 額外打包一張工程內既有原圖，並與來源及別名追溯清單核對 SHA-256，沒有移除或重新壓縮舊素材。

實際成品驗證：九款 engine.debug=false；每個輸出 Bundle 的宣告 pack 與實際 import JSON 都完成合併；所有 Bundle 均存在。正式包保留原生動態屬性，不啟用屬性名稱混淆。正常發布聲音設定維持正常；開發測試使用靜音輸出。

瀏覽器驗證：九款均實際進入原始主畫面與首回合結算。Project-F 額外完成手機版免費遊戲、同回合重新載入、原生倍數恢復與單次總獎結算；Project-I 額外檢查手機排版、原生背景音樂和音效啟動。這些紀錄不覆蓋既有未完成的特殊流程或素材缺口。

詳細數據：[all-projects-comparison.json](all-projects-comparison.json)、[release-output-verification.json](release-output-verification.json)、[release-browser-smoke.json](release-browser-smoke.json)。設定與重建方法見 [STARTUP_RELEASE.md](../STARTUP_RELEASE.md)。
