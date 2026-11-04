# 古神巴風特模型接手文件

交接日期：2026-11-04，Asia/Taipei。使用者要求換模型接手，本輪到此停止遊戲實作，保留所有本機檔案。

## 使用者目標與驗收

- 在既有專案新增 Havespring 大廳「古神巴風特／BAPHOMET」的完整逆向還原。
- 指定遊戲識別是 `gn=hades`、bundle `g1007`，不是賽特2或其他遊戲。來源版本標示 `1.0.27_2`。
- 要求原版畫面、角色、Spine 動畫、音效、連鎖消除、倍率、免費遊戲、Xtra Bet、Buy Feature、Jackpot、選單、自動旋轉等完整行為。
- 使用者明確拒絕截圖冒充遊戲、只切換固定盤面、相似畫風替代與中途要求其盯進度／驗收。
- 未完成不可宣稱「完整復原」。本機假後端須明確標示，原伺服器 RNG／RTP 未取得。
- 僅本地開發；沒有 push、部署、發布或其他遠端寫入授權。

## 專案規範

先讀 `/Users/batman_work/claude/seth2-recovered/AGENTS.md` 及本對話使用者提供的額外素材規範。

- 使用原始圖片與音效；禁止程式繪圖、幾何 placeholder、Canvas 紋理、生成 SVG。
- 保留 `.meta` UUID，勿執行舊 workspace 的全量重生工具覆蓋修正。
- 官方 Creator 3.8.8及已登入 Dashboard／GUI 為工程建置規範；下面 3.7.2 發布包鏡像只是原始客戶端診斷，尚非 Creator 3.8.8 的完成工程。
- 開發測試使用 `reaDevelopmentMute=1` 或獨立靜音預覽。
- Git worktree 有未提交的既有修改，不可清除、覆寫或 reset。

## 已抓到的來源

公開來源（未帶帳號 token）：

`https://play.godeezone1.com/egames/37ab205b0990c6a3643e0dbb8c9ee4adb698123c/game/?gn=hades`

### 第一份 g1007 capture

目錄：`research/atg/hades/live-capture-20261104/`

- `capture-manifest.json`：資源下載路徑、bytes、SHA256。
- `assets/g1007/config.json`、`assets/g1007/index.js`：原版索引與程式。
- `assets/g1007/import/`：17 個 packed import JSON。
- `assets/g1007/native/`：582 張圖與96個音訊。
- `extracted/`：45個從原始 bundle 拆出的 System.register 模組，尚未美化。
- `rea-static-g1007.json`：靜態分析紀錄。

拆出的關鍵模組：`GameView.js`、`GameEntry.js`、`GameLogic.js`、`GameData.js`、`GameState.js`、`GameSender.js`、`GameHandler.js`、`GameConfigModel.js`、`ReelView.js`、`GameSymbol.js`、`GameSymbolID.js`、`JackpotGameView.js`、`BuyFeatureView.js`、`XtraBetButton.js`。

已確認符號 ID：1=WILD、2=HADES、3=PERSE、4=DOG、5=GHOST、6=A、7=K、8=Q、9=SCATTER、10=JACKPOT。

已在程式中確認請求入口：`initial`、`spin`、`closeSpin`、`spin` + `action:buyFeature`、Jackpot 選位等。尚未取得原伺服器完整成功回應／算獎資料。

### 新補抓的共用客戶端鏡像（仍缺檔！）

目錄：`research/atg/hades/full-mirror-20261104/`

腳本：`tools/capture-hades-full-runtime.mjs`

Manifest：`full-runtime-manifest.json`

已保存官方頁面啟動檔、Cocos 3.7.2 `cocos-js/cc.js`、插件與以下 bundle 的 `config.json`、`index.js`、packs：

| bundle | 索引項目 | packs | 腳本下載圖片 | 腳本下載音訊 |
| --- | ---: | ---: | ---: | ---: |
| internal | 29 | 1 | 0 | 0 |
| resources | 91 | 14 | 0 | 0 |
| main | 35 | 3 | 0 | 0 |
| slotFramework | 735 | 28 | 203 | 0 |
| g1007 | 2040 | 17 | 582 | 96 |

這些是目前已下載數量，**不是完整性證明**。Manifest 中 `scope` 字串寫 Complete 過度樂觀，需修正。下載腳本仍有以下缺陷，正是接手第一件要修的事：

1. `captureBundle` 用硬編碼型別索引 `value[1] === 4/9` 判斷 ImageAsset／AudioClip；各 bundle 的 `config.types` 排序不同。`resources` 的 ImageAsset 是3、Texture2D是4；`main` 沒有圖檔 paths，但 packs 會引用 native 圖片。應依 `config.types[value[1]]` 及 import 內容解析下載。
2. 只抓 `config.packs`，沒抓不在 packs／redirect 的單一 import UUID；`resources` 因此有缺失 JSON。
3. `decodeUuid` 只處理長度恰好22的字串，未處理 `@6c48a`／`@f9941` 等子資產 suffix；應分開解碼 UUID 本體再接 suffix。
4. 需解析 import pack 的 native 參考及 engine 的延遲載入檔，驗證實際 HTTP 請求沒有缺失後才可稱完整鏡像。

## 最新原版鏡像啟動狀態與卡點

`http://127.0.0.1:8175/?gn=hades`

最新實際觀察：原版引擎、插件、main／resources 程式與部分 packs 載入，停在 ATG logo，**還沒進入遊戲**。以下缺檔在本地 HTTP log 確認為404：

```text
assets/resources/import/b8/b80e1fc4-38ad-41cb-8a13-ed36ad54ac24.json
assets/resources/import/45/459ab307-ecdc-45d1-8801-f32e2c814063@f9941.json
assets/resources/import/7f/7fcfc232-ceb2-4b95-8c23-5ad30ed31bee.json
assets/resources/import/7d/7dfe24c9-4465-4059-a762-11bf13c7fac1.json
assets/resources/import/38/38fa38b4-bda9-4e6b-9406-c33c4f73b3de.json
assets/resources/import/81/8139f8bd-a152-4bb4-8128-738ff137f4fe.json
assets/main/native/b7/b730527c-3233-41c2-aaf7-7cdab58f9749.png
assets/main/native/20/20835ba4-6145-4fbc-a58a-051ce700aa3e.png
assets/main/native/54/544e49d6-3f05-4fa8-9a9e-091f98fc2ce8.png
assets/main/native/95/951249e0-9f16-456d-8b85-a6ca954da16b.png
assets/main/native/11/11bdc4b0-64a8-4eb7-a2a7-9fb9e233e977.png
assets/main/native/15/158e7e52-3220-4cd7-9694-713e0e6e8278.png
assets/resources/native/7d/7d8f9b89-4fd1-4c9f-a3ab-38ec7cded7ca.png
assets/resources/native/57/57520716-48c8-4a19-8acf-41c9f8777fb0.png
assets/resources/native/19/199a3e420.png
```

另有 `images/logos/atg.png`、favicon 缺失；前者來源也404，不應虛構。

原插件實際路徑在 `src/assets/scripts/...`；已補抓 CryptoJS、forge、gsap、MotionPath、mobile-detect、pako、protobuf、Extentions、socket.io。

## 舊的可操作切片：保留參考，不能視為完成

`hades-runtime/` 是獨立 Creator 3.8.8 工程。

- 場景：`hades-runtime/assets/recovered/hades/HadesPreview.scene`
- 控制器：`hades-runtime/assets/recovered/hades/HadesPreviewController.ts`
- 素材：`hades-runtime/assets/recovered/g1007/assets/`
- 建置模板：`hades-runtime/build-templates/web-desktop/`
- 建置輸出：`hades-runtime/build/web-desktop/`
- 服務網址：`http://localhost:8174/`
- 原始素材可正常顯示，1280×720桌面及390×844直式經瀏覽器觀察。
- Spin 只在兩個固定盤面切換，並未有真正回合或原玩法。人物為 loading atlas 裁片拼合，方向與拼接不正確，沒有原版 Spine 動畫。
- Buy Feature、Xtra Bet、下注加減、選單、自動旋轉尚未接功能。音效未完成。
- 已修 UUID-only動態載入導致 build 排除素材的黑屏，改以場景顯式引用。
- HTML透明 Spin hit area 僅輔助此切片，後續原版程式接手時應按實際命中區處理。
- 最後成功 Creator build log：`/tmp/hades-build11.log`。CLI曾回36，但log顯示建置成功；這不等於遊戲完整驗收。
- CSS手機置中16:9及原圖背景最後直接同步 patch至build template及build輸出。

## 本機服務與工作區

交接時 `lsof` 確認兩個 server 正在監聽：

- PID16326：Python HTTP server，127.0.0.1:8174，root為 `hades-runtime/build/web-desktop`。
- PID33063：Python HTTP server，127.0.0.1:8175，root為 `research/atg/hades/full-mirror-20261104`。
- PID及工具session可能在換模型後失效，先重新確認再操作。
- 工作樹未提交：`assets/recovered/bootstrap/local-runtime.ts`、`assets/recovered/scripts/main-slot.ts`、`package.json` 已修改；另有 g1007／hades／research／tools／tests 等 untracked，全部保留。
- `docs/RECOVERY_STATUS.md` 舊內容主要說賽特2，不應拿來當巴風特驗證證據。

## 接手順序

1. 修鏡像下載器的型別、未打包 import、native 參考與 suffix UUID 缺陷，補檔且更新完整性報告。
2. 在本地靜音預覽啟動原客戶端，確認原 GameEntry、場景、Prefab、Spine、共用 UI 真正進入主畫面。
3. 利用已下載的原程式解析初始化與回合資料契約，保留原客戶端狀態機／動畫，只在伺服器層接可追溯的本機模擬。不可自行猜測後就宣稱1:1。
4. 對原規則、計獎、消除補位、群組符號、倍率、免費遊戲、各購買模式、Xtra Bet、Jackpot選位、續局等補齊契約與動作驗證。
5. 按 AGENTS 的 Creator 3.8.8 工程規範完成整合；保留原素材UUID，不破壞既有賽特2內容。
6. 真正操作電腦滑鼠／手機觸控，逐項對照畫面、動畫、音訊及完整回合結果。完成後一次交付證據及仍不可還原的伺服器限制，不要求使用者替代QA。

## 重要誠實界線

目前尚未完整逆向，尚未有「完全一模一樣」的可驗證成品。已下載原版資源與程式可作為進一步還原依據，但索引數、asset下載數、啟動logo、固定盤面切換、build成功均不能證明完成。
