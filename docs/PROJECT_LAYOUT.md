# 專案配置

集合根目錄不是 Creator 專案。`Project-A`、`Project-B` 各自包含 `package.json`、`assets`、`settings`，可分別匯入 Dashboard，使用不同的專案 UUID。原始素材與腳本的 `.meta` UUID 均隨各專案保留。

每款遊戲的場景、素材、還原程式與模擬後端都在自己的專案內。`assets/shared` 是該獨立專案完整隨附的公共框架，因此單獨開啟不依賴另一款遊戲。

| 集合內容 | 用途 |
|---|---|
| `Project-A`／`Project-B` | 各自可匯入、建置、執行的 Creator 專案 |
| `games.json` | 集合收錄的專案目錄 |
| `tools` | 集合預覽、目錄同步、結構檢查 |
| `tests` | 直接驗證各遊戲實際來源程式 |
| `docs/evidence` | 原始擷取雜湊、素材稽核、UI實測與搬移紀錄 |
| `node_modules` | 本機開發測試依賴，不推送 |

舊共用工作區、研究鏡像與展示原型已移出集合，存放在本機歷史封存目錄。其位置與正式名稱對照只寫入不推送的本機對照檔。

一般聲音正常；開發靜音須使用獨立分頁或 `reaDevelopmentMute=1`。每個專案輸出 `build/web`，集合預覽依 `game.config.json` 尋找已建置成品。
