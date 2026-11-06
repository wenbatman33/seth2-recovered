# Project-D

獨立 Cocos Creator 3.8.8 前端還原工程。已完成官方 GUI Web 建置；實際操作發現編譯後倍率清單格式錯誤，正在修復及重新驗證，尚未標記可玩。

assets/scenes 保留來源橫版及直版場景與原 UUID；依螢幕或入口參數選擇原生版型。assets/game/content 為此遊戲原素材；assets/game/scripts 與 assets/shared/scripts 為發布 runtime JavaScript 的機械還原，副檔名為 .ts，並非作者原始 TypeScript。

本工程使用獨立的本機模擬後端；一般點數、結果分布及未公開的特殊玩法獎金是自行實作，沒有還原原伺服器、RNG 或 RTP。原始 vendor 插件僅供 Web，禁止在 Editor 執行。

以 Dashboard 匯入本資料夾，使用官方 3.8.8 GUI 匯入 build-config.json 建置；建置後工具僅設定本工程入口及開發靜音參數。一般驗證預設保留聲音。

來源轉換與靜態檢查參見 recovery-manifest.json；靜態依賴完整不代表畫面、音效或互動已驗收。

建置時確認輸出資料夾名稱為 `web`。Creator 重新匯入配置有時會自動加流水號，請改回 `web`；集合入口固定使用 `build/web`。含 `sourcePackedImages` 的 bundle 必須勾選。

官方 Creator GUI 匯入建置設定後，請確認 `outputName` 仍為 `web`；Creator 可能自動改成 `web-001`。將名稱設回 `web` 再建置，並確認本次產物位於 `build/web`，包含 `assets/sourcePackedImages/config.json` 及更新後的主程式。預覽與建置檢查都使用這個固定輸出目錄。
