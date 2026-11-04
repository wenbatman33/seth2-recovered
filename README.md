# 戰神賽特2 · Cocos Creator 可編輯工程

使用 **Cocos Creator 3.8.8** 開啟本倉庫根目錄，即可編輯場景、Prefab、原始圖片、音效與還原腳本。遊戲搭配自行實作的本機假後端，無需原網站帳號、手機驗證或遊戲伺服器。

這是發布客戶端的還原工程，**不是原作者完整原始碼或原伺服器**。原廠 RNG／RTP 未還原；部分還原 `.ts` 仍是反編譯 JavaScript。已驗證的操作與限制見 [還原狀態](docs/RECOVERY_STATUS.md)。

## 第一次開啟

1. 安裝官方 Cocos Dashboard 與 **Creator 3.8.8**，在 Dashboard 完成登入。
2. 下載本倉庫，或執行：

   ```sh
   git clone https://github.com/wenbatman33/seth2-recovered.git
   cd seth2-recovered
   ```

3. Dashboard →「專案」→「匯入」，選擇這個包含 `package.json`、`assets/`、`settings/` 的根目錄。
4. 用 Creator 3.8.8 開啟，等待第一次素材匯入與腳本編譯結束。
5. 資源管理器中雙擊 **`assets/recovered/main/mainPortrait.scene`**。
6. 工具列選「當前場景」，按 **▶ 播放**。瀏覽器載入後按「開始遊戲」，即可轉動。

`assets/inspection/MaskNative388Diagnostic.scene` 是診斷場景，不是遊戲入口。Creator 預覽埠由編輯器分配，可能是7456或7457，以按播放後開啟的網址為準。

原程式缺少 `gn` 時會載入另一款 `g1001`，導致 `Get .../assets/g1001/index.js failed`。本工程的 `assets/recovered/bootstrap/local-runtime.ts` 已自動補入賽特2參數；直接按播放不需要手工拼網址。更新工程後，舊的錯誤分頁需要重新整理。

快速連點停輪曾因 Creator 3.8對停用 Node 的 tween 綁定而卡住；已在 `SymbolView.showSymbolsQuickIn` 補上與正常入場相同的相容設定，保留原完成回呼，不會用超時計時器直接跳過結算。

## 聲音與測試錢包

- 使用者播放與正式建置 **預設正常聲音**；瀏覽器可能需先按「開始遊戲」才能播放音效。
- 代理自行測試時，在 Creator 預覽網址加 `?reaDevelopmentMute=1`。若網址已有 `?`，改接 `&reaDevelopmentMute=1`。
- 獨立測試錢包使用 `reaDebug=1&reaTestWallet=my-test`；測試不會清除一般錢包。
- 點數、待結算局與操作紀錄保存在該瀏覽器 origin 的 localStorage。換埠或換瀏覽器會形成不同的本機資料；不要用清除儲存空間來掩蓋結算問題。

## 重新建置成網頁

1. 在已登入的 Creator 內開啟上述主場景。
2.「專案 → 構建發布」，新增 **Web Mobile** 工作；需要時可另建 Web Desktop。
3. 將 `mainPortrait` 加入參與建置場景，設為啟動場景。其 UUID 是 `ed1c7a5d-01d8-4ed0-9393-741fe7f675a0`。
4. 使用工程已保存的引擎與 Spine 模組設定；不要任意切換渲染管線或刪除 Mask。按「構建」，以 GUI 顯示成功且實際可玩為驗收依據。
5. 以實際產生的輸出資料夾為準，例如 `build/web-mobile`。不要直接用 `file://` 開啟輸出。

可以使用內附工具將 GUI 輸出複製為獨立預覽，**不改動素材來源或原建置**：

```sh
# 使用者驗證：正常聲音
python3 tools/prepare_preview.py build/web-mobile --normal-audio
python3 tools/start_preview.py

# 代理開發：獨立靜音建置
python3 tools/prepare_preview.py build/web-mobile
python3 tools/start_preview.py --development
```

把範例 `build/web-mobile` 換成你的實際輸出路徑。正常入口是 <http://127.0.0.1:18992/>，開發入口是 <http://127.0.0.1:18993/development-muted/>。macOS 也可雙擊根目錄的 `啟動預覽.command` 啟動已準備的正常預覽。

新 clone **不包含** `library/`、`temp/`、`build/`、`previews/` 或 `node_modules/`；Creator 會重建快取，預覽須先按上述流程建置。啟動器不會把別的服務當成目前專案、不會終止其他程序，也不會重設錢包。

不建議直接冷啟動 Creator 二進位做 CLI 建置：先前未經 Dashboard 登入的 CLI 曾導致 importer 異常；本工程採用已登入的 GUI 建置流程。

## 在哪裡修改

| 位置 | 用途 |
| --- | --- |
| `assets/recovered/main/mainPortrait.scene` | 遊戲啟動場景 |
| `assets/recovered/g1005/` | 賽特2的場景、Prefab、原圖、音效與動畫素材 |
| `assets/recovered/slotFramework/` | 共享遊戲介面與資產 |
| `assets/recovered/scripts/` | 還原腳本與 Creator 相容修正 |
| `assets/recovered/bootstrap/local-runtime.ts` | 啟動參數、自有後端安裝、開發靜音選項 |
| `assets/local-backend/LocalGameBackend.ts` | 虛擬錢包、扣注、待結算、冪等與續局 |
| `assets/local-backend/OrdinaryRules.ts` | 一般盤面、計分、消除與補牌 |
| `assets/local-backend/FeatureRules.ts` | 免費、覺醒、倍率、分裂與鎖定的本機規則 |
| `assets/local-backend/FeatureDefinitions.ts` | 三種購買模式的公開顯示倍率與欄位 |
| `assets/local-backend/JackpotRules.ts` | 自訂彩金池、貢獻與觸發設定 |
| `assets/local-rules/displayed-paytable.json` | 顯示賠率的轉錄與來源資訊 |
| `tests/` | 直接執行現有後端與部分前端方法的契約測試 |

調整符號權重、功能觸發與彩金參數，請修改自有後端的 options／設定；這些是本機模擬分布，不可把調參稱為原廠勝率或 RTP。圖片、Prefab 與 `.meta` UUID 應一起保留，移動資產優先使用 Creator 資源管理器。

## Cocos MCP（選用）

內附使用者指定的 [DaxianLee/cocos-mcp-server](https://github.com/DaxianLee/cocos-mcp-server) 1.5.4及其原始碼、編譯檔。遊戲本身不依賴 MCP 服務。需要 AI 控制編輯器時，先安裝插件依賴：

```sh
npm ci --prefix extensions/cocos-mcp-server --ignore-scripts
```

重開 Creator，在「擴充 → Cocos MCP Server」面板啟動服務，再以面板顯示的連接埠設定客戶端。隨附修正版只綁定 `127.0.0.1`；它不會自動開放公網。插件設定、面板語言與功能另見其 [繁中說明](extensions/cocos-mcp-server/README.zh-TW.md)。

## 自動測試

需要 Node.js 22以上。遊戲啟動不需要先跑這些測試；開發修改後可執行：

```sh
npm ci --ignore-scripts
npm test
```

測試涵蓋新生成盤面、計分、重複扣注／領獎防護、重新載入續局、免費／覺醒／購買、彩金續接、部分實際前端方法，以及 Creator 無參數啟動與聲音模式。**測試通過不代表所有動畫與所有操作組合都已驗收。** `.github/workflows/validate.yml` 會在推送時執行相同測試，不會自動部署遊戲。

## 來源與限制

原圖與還原腳本保留在工程內，執行時不需要舊 `pg遊戲` 工作區或原站伺服器。還原腳本註解中的 `research/...` 是來源追溯標籤，不是執行時讀檔位置。本倉庫沒有原站帳密、登入封包或正式金流。

素材與第三方程式的權利仍屬各權利人，本倉庫不主張取得原廠素材的再授權。完整驗證範圍、已知相容警告與後端設計界線請見 [還原狀態](docs/RECOVERY_STATUS.md)。
