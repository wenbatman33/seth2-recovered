# 兩款遊戲的專案配置

本工程是一個 Creator 3.8.8 專案，包含兩個獨立遊戲 Bundle；共享基礎框架，各自輸出獨立網頁建置。

| 功能 | 賽特2 | 巴風特 |
| --- | --- | --- |
| Bundle | `g1005` | `g1007` |
| 原始素材與 Prefab | `assets/recovered/g1005` | `assets/recovered/g1007` |
| 還原程式前綴 | `g1005-` | `g1007-` |
| 本機模擬後端 | `LocalGameBackend.ts` 等 | `HadesLocalBackend.ts` |
| GUI 建置配置 | `tools/build-configs/seth2.json` | `tools/build-configs/hades.json` |
| 建置輸出 | `build/frontend-seth2` | `build/frontend-hades` |
| 本機入口 | `http://127.0.0.1:8174/seth2/` | `http://127.0.0.1:8174/hades/` |

`assets/recovered/main` 保存原始共用啟動場景；`slotFramework` 是共享 UI。腳本集中在 `assets/recovered/scripts`，用前綴保留原模組來源與相依關係；不為整理外觀重建其 UUID。

賽特2分別有原始 PC 橫式與手機直式 GameView。巴風特使用原始橫式玩法，直式視窗由原始背景圖填滿周圍。入口在引擎啟動前選擇正確場景，跨遊戲推薦按鈕會轉到另一份建置。

舊固定盤面原型與205MB重複素材移至本機 `archive/hades-visual-prototype`，退出 Creator 匯入，也不推送。原始正式 g1007 的911份子資產 `.meta` 內容逐一比對未變；Bundle目錄 `.meta` 亦原樣搬移。搬移前確認舊素材UUID在正式資產中沒有外部參照。

研究擷取與過程資料保留於本機 `research`；可分享的來源統計、頁面與尺寸稽核、修復紀錄放在 `docs/evidence`。`build`、`library`、`temp` 都是本機產物。Git保留可編輯原始資產、還原腳本、自有後端、建置工具及驗證紀錄。

一般入口預設正常聲音。代理開發預覽使用獨立分頁及 `reaDevelopmentMute=1`，與使用者分頁分開。
