# 本機還原進度（2026-11-04）

使用者指定的「全部遊戲」是本專案兩款：`g1005` 戰神賽特2、`g1007` 古神巴風特。以下最新結果優先於後面的早期工作紀錄；早期「尚待」欄保留當時狀態，不代表目前仍卡在相同項目。

## 最新交付狀態

- 使用原始發布客戶端的模組、Prefab、圖片、Spine 與音效，完成兩款前端整合；自有假後端明確標示，沒有還原或宣稱原 RNG、RTP、伺服器與機率。
- 官方 Creator 3.8.8 登入 Dashboard／GUI 建置：巴風特 21:50:28 成功、賽特2 21:52:16 成功。逐一檢查 `projectBundles` 與實際 bundle config；賽特2包含 main／mainPortrait，巴風特包含 main。
- 正式素材位置統一為 `assets/recovered/g1005` 與 `g1007`；911份巴風特子資產 `.meta` 位元組未變，Bundle目錄 `.meta` 亦原樣保留。舊固定盤面原型與205MB重複素材已移出 Creator 匯入，沒有正式資產引用它們。
- PC 1024×768 與手機390×844：賽特2使用不同原始 GameView／啟動場景，巴風特原始橫式玩法置於直式背景。已確認視窗縮放、原圖覆蓋與控制可點擊。
- 賽特2：一般轉動、免費局、覺醒之力500、不朽覺醒2000、MINI獎池、強制分裂／鎖定回合、原始雙階段得獎確認、最後入帳與回到可操作盤面均有實際 UI 紀錄。2000模式原次驗證只記錄第一下彈窗確認；相同元件的雙階段關閉另由500、獎池、分裂、鎖定驗證。
- 巴風特：一般轉動、XTRA、POWER、WRATH、FREE、SUPER FREE、LUCK OR BAD LUCK、消除／補牌／Wild／倍率、續局、12箱MINI選牌、Treasure、規則／紀錄／設定、自動轉動與停止均有實際 UI 紀錄。
- `npm test` 完整通過；後續入口守衛／原始旋轉按鈕相容修正另由 `test-responsive-launch.mjs` 通過。93個Spine頁面實檔與尺寸稽核無缺失。
- 原始推薦按鈕切換遊戲時，會跳往另一份獨立建置。沒有 `gn` 時使用建置所含遊戲；沒有選取遊戲 Bundle 時，建置後檢查會明確報錯，避免產生無法玩的成功頁。
- 自動建置後掛鉤已由官方 GUI 實際執行；採同步本機檔案處理，沒有網路或子程序。曾中止一次掛鉤收尾停滯的建置，修正後正式建置成功。
- 一般入口預設正常音樂／音效。開發獨立分頁加 `reaDevelopmentMute=1`、30FPS；已將使用者分頁恢復正常聲音入口。
- 本機正式入口已改為兩款官方建置：`http://127.0.0.1:8174/`；先前固定盤面已退出正式路徑。沒有推送研究鏡像、私有本機狀態、快取或重複預覽工程。

**驗證界線：**手機尺寸與滑鼠座標操作已測試；最終手機賽特2回合亦完成0.80獎金、closeSpin與9998.80顯示；尚未在實體手機上驗證真正觸控與瀏覽器音訊策略。不是原作者完整原始碼，也不宣稱所有裝置、每個隨機結果與逐幀畫面已完全相同。詳細流程、錢包與畫面見 `docs/evidence/creator-seth2-20261104.json`、`creator-hades-20261104.json` 與四張 PC／手機PNG。

## 以下為當日早期工作紀錄


## 原始資料與分析

- 古神巴風特來源為原始 `gn=hades` 發布客戶端，保存在 `research/atg/hades/full-mirror-20261104/`；原檔不改寫，本機服務邊界與入口在 `local-runtime/`、`local.html`。
- 下載器已修正 bundle 型別索引、帶 suffix 的壓縮 UUID、未打包 import、texture subasset native 參考；本次索引中的 import 缺失為零。這不保證未列入索引的延遲或平台變體全部存在。
- `full-runtime-manifest.json` 記錄目前下載數：resources 17 張、main 6 張、slotFramework 208 張、g1007 583 張圖及 96 個音訊；另有原始 import、packs、引擎及腳本。
- REA 6.8.0 已實際執行。全部 Hades 拆出模組分析讀取 45 個相關檔案，解析 44 個 JavaScript 檔案、83,409 個 AST nodes，parse failures 為零；語義圖仍有 23,246 個 unknown，不代表全部行為已理解。
- 完整分析證據檔：`research/atg/hades/rea-20261104-all-hades-modules`；摘要：同名 `-summary.json`。先前大 bundle timeout 與 Wakaru 平台限制證據也保留。

## 當日實際 UI 驗證

以下使用隔離的本機假後端，不代表原伺服器機率或 RNG。

| 遊戲／流程 | 實際觀察 | 尚待驗證 |
| --- | --- | --- |
| 賽特2普通局 | 原始角色、盤面；連續兩局有 spin、closeSpin，點數 10000 → 9999 → 9998 | 特殊模式完整回歸 |
| 賽特2免費遊戲 | 原始轉場、免費局次數與倍率、WIN 28.00 結果畫面 | 結果關閉與最終 closeSpin 尚未記錄 |
| 巴風特普通局 | 原始場景／Prefab／Spine 客戶端進入主畫面；普通 spin、closeSpin 並回到可操作狀態 | 桌面／手機各項完整回歸 |
| 巴風特購買免費遊戲 | 100 倍費用、原始購買確認、8 局免費遊戲、紅色場景轉換與最後 closeSpin；本次隨機結果為零獎金 | 有獎金、追加免費局、其他購買模式 |
| 巴風特 Jackpot | 三個 JP 觸發原始 12 箱畫面，依序觀察 MINOR／MINI／MAJOR／MINI；第五、第六次選牌已輸入 | 因降低電腦負載關閉測試，最終獎金畫面及 closeSpin 尚未觀察，不列為完成 |

`http://localhost:8174/` 仍是先前不完整的固定盤面切片，不能當成新還原成果。原始 Hades 客戶端診斷服務原使用 8175，目前為降低負載而停止。

## 已實作但不可混同 UI 驗收

- `tools/hades-original/backend.mjs` 是自行實作的本機假後端；公開賠率、連鎖、重力補位、Wild、倍率、免費局、五種購買及 Jackpot 選牌已具契約測試。
- 13 個後端測試通過，包含 300 局的存活符號移位／累計獎金與單次結算、購買確認不重複扣款、四種 Jackpot 單次結算、存檔失敗回滾。
- 權重、觸發率、彩金池、初始值、時序等仍為本機假設。巨大符號目前只實作部分 2×2 路徑；更多尺寸、Treasure、完整續局、歷史報表等尚待完成／核對。
- Hades 現在跑的是原始 Cocos 3.7.2 發布客戶端加本機服務邊界，尚未完成官方 Creator 3.8.8 工程整合；舊 `hades-runtime/` 切片也不等於完成工程。

## 電腦負載限制

使用者要求降低電腦負載後，已關閉本次建立的三個測試頁、停止 8175 診斷服務；REA 已結束，未留下分析／建置工作。18:33 的短取樣顯示整機 CPU 約 80% idle，不能用此單次數值保證長期負載。

- 後續只執行一個分析、建置或遊戲預覽工作，不同時開兩款動畫遊戲。
- 本機命令使用 `nice -n 15` 降低排程優先權；這不是 CPU 百分比硬上限。
- Hades `reaDevelopmentMute=1` 開發預覽加上 30 FPS 限制；Cocos 原有背景暫停保留。使用者驗證入口維持原配置。
- 載入診斷只於隔離 debug 模式啟動，完成載入即清除輪詢與 loader 強參考。
- 上述新降載程式僅通過語法檢查，尚未重新開啟 UI 驗證，避免立即增加渲染負載。
- 不終止使用者自己的 Chrome 分頁、Finder、WindowServer、編輯器或其他專案程序。

沒有 push、部署、發布或任何遠端寫入。


## 前端範圍確認與工程整合更新

使用者已明確指定只還原前端；缺少後端資料可使用假資料。後續驗收以原始前端的畫面、動畫、操作及流程為準，不要求取得原伺服器機率。

- 從捕獲的 System.register 模組恢復 44 個 Creator 腳本，原始 RF UUID 全部保留。前端類別名稱加 Hades_ 前綴避免與賽特2同名類別相撞；Prefab 仍按原 UUID 連接。
- 原始 Hades 資產已安裝到 `assets/recovered/hades-original/`，`g1007` 子目錄為正式 bundle；保留既有共享主場景與 marquee_bg 圖片，不建立重複 UUID。
- 目前安裝 774 項資產，包含 583 張原圖、96 個音訊、57 組 Spine、15 個 Prefab、15 個 BitmapFont，以及其他原始動畫等；同名不同 UUID 的 28 組資產已拆分路徑。未重新生成任何角色或背景。
- 對 93 張 Spine 頁面檢查實際圖檔、引用及像素尺寸，目前全部相符。證據：`research/atg/hades/creator-spine-page-audit.json`。
- 初版匯入曾把同名不同 UUID 原圖覆寫，造成巴風特符號只剩火焰；已定位並修復匯入器的路徑所有權，保留每個 UUID 的獨立原圖。新的乾淨匯入來源為 `creator-asset-staging-v3`。
- 36 處 Hades 原始父類別呼叫轉為 Reflect.construct，適配 Creator 3.8 原生類別。另修復既有轉譯腳本的 103 處建構子名稱被同名區域變數遮蔽問題，只變更錯誤 fallback，未重生舊腳本或 .meta。
- `main-GameDataBase` 與真正恢復的 Hades GameData 建構回歸測試通過。賽特2完整 npm test 再次通過；Hades 後端及相容測試合計 21 項通過。
- Creator 3.8.8 已透過登入的 Dashboard 開啟根工程，MCP 確認 project path 為目前工作區。新開編輯器及其工作程序設為 nice 15。根工程預覽服務使用 7457，舊 hades-runtime 編輯器使用 7456；不可混淆。
- Creator 前端已實際進入 Hades 介紹與主盤面；仍在校正與逐項驗證，不宣稱完成。`local-runtime.ts` 已改接原始 Hades 前端加假資料，不再掛上固定盤面的舊 overlay。
- 本機假後端已補回獎寶箱、2..5 尺寸巨大符號、原始歷史列表欄位，以及不中途重新抽取盤面／扣款的續局游標。19 項後端測試通過，游標的完整 Creator UI 續局仍需驗證。
- 原 3.7 診斷客戶端已驗證 5×5 巨大符號、大獎動畫、快進與 closeSpin；本次贏 250，測試餘額 10000 → 10249。原獎池測試錢包重新載入顯示 10019 且無待續局，與 1 點注額、20 點 MINI 獎金一致。

仍須完成：Creator 原圖修正後的 PC／手機操作回歸、所有購買／免費／獎池／回獎寶箱／續局／設定／自動旋轉流程、賽特2的實際 UI 回歸、正式 GUI 建置、可重新開啟的統一入口。舊 8174 固定盤面建置不可交付為完成版。

### 20:07 官方 GUI 獨立建置
- Creator 3.8.8 已登入 Dashboard 開啟主專案，以 `main.scene` / g1007 建置成功，輸出 `build/frontend-hades`。
- 修正隔離網路防護對隱藏 Node 全域的 Electron Builder executor 誤判；保留 Creator 自有傳輸。未改動原始遊戲素材 UUID。
- 遊戲 bootstrap 的 URL 預設與自有傳輸安裝僅在非 EDITOR 環境執行；原 App metadata 初始化保留，避免破壞 SlotApplication 的靜態依賴。
- `tools/prepare-recovered-build.mjs` 使用官方 `screen.exactFitScreen` 調整獨立 Web 容器為瀏覽器視窗，移除官方範本頁首頁尾，解決固定桌機 subframe 在手機尺寸切換時的拉伸。
- 獨立建置已實際完成一般 spin / closeSpin / MG_WAIT_SPIN_STATE；手機比例及其餘控制仍持續驗證，尚未宣稱全遊戲完成。
