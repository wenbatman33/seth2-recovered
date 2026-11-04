# 自行實作的本機假後端

這個目錄是新寫的本機後端，不是原伺服器原始碼，不讀取擷取回合、testSpin、原網站 API 或固定樣本重播。圖片、前端模型和動畫仍來自還原客戶端。

`InstallLocalBackend.ts` 在 Application 初始化前替換服務傳輸，保留原 GameSender、ParseResponse、GameData 與動畫流程。`LocalGameBackend.ts` 負責 initial／spin／progress／closeSpin／updateSettings、整數分計價、待結算與重送冪等；狀態存在本機 localStorage。

一般盤面、連消與公開賠率計分見 `OrdinaryRules.ts`。免費、覺醒、購買、倍率、分裂、鎖定見 `FeatureRules.ts` 和 `FeatureDefinitions.ts`；彩金池與續接見 `JackpotRules.ts` 和 `LocalJackpotContinuation.ts`。詳細自行假設見 `FeatureRules.md`，原廠 RNG／RTP 未還原。

使用者驗證預設正常音量；只有明確的 `reaDevelopmentMute=1` 才對代理測試個體靜音，該選項不寫回玩家的保存設定。`reaDebug=1&reaTestWallet=名稱` 使用獨立測試錢包，正常錢包不會自動清除。

完整使用方法見根目錄 README；在根目錄執行 `npm ci --ignore-scripts`、`npm test` 可跑實際後端與部分前端方法的契約測試。測試通過不等於所有原動畫與所有玩法組合已通過 Creator UI 驗收，多分頁交易與正式金流也不在承諾範圍。
