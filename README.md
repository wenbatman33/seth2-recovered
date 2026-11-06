# 多遊戲前端還原集合

目前收錄 **9 個獨立的 Cocos Creator 3.8.8 專案**：`Project-A` 至 `Project-I`。每款遊戲各有自己的資料夾、素材、程式、模擬後端與建置設定；在 Dashboard 匯入要編輯的那個 `Project-*` 資料夾。集合根目錄提供遊戲選單、專案清單與管理工具。

新增七款仍在進行官方 GUI 建置、遊玩與介面驗證，首頁會依目前狀態開放測試預覽或標示建置更新中。詳細證據、來源版本與未完成項目見 [驗證紀錄](docs/recovery/validation-ledger.json)；離線測試通過或建置成功不代表完整玩法已驗收。

```text
Project-A/                 第一款獨立 Creator 專案
Project-B/                 第二款獨立 Creator 專案
Project-C/                 第三款獨立 Creator 專案
Project-D/                 第四款獨立 Creator 專案
Project-E/                 第五款獨立 Creator 專案
Project-F/                 第六款獨立 Creator 專案
Project-G/                 第七款獨立 Creator 專案
Project-H/                 第八款獨立 Creator 專案
Project-I/                 第九款獨立 Creator 專案
```

每個專案的主要結構：

```text
Project-*/
  assets/
    scenes/                可開啟的入口場景
    game/
      content/             此遊戲的原始素材與 Prefab
      scripts/             此遊戲的還原程式
      backend/             此遊戲的自有模擬後端
    shared/                此專案隨附的公共框架
  settings/                Creator 引擎設定
  extensions/              此專案的建置後處理
  tools/                   此專案的預覽與建置工具
  package.json             Creator 專案識別
  game.config.json         遊戲代號、入口與輸出設定
  build-config.json        官方 GUI 建置預設
  開啟本遊戲預覽.command
  README.md
games.json                 集合收錄的專案清單
tools/                     集合管理工具
tests/                     實際來源程式的測試
docs/                      維護說明與驗證紀錄
開啟遊戲選單.command
```

## 開啟、建置與預覽

1. 在已登入的 Cocos Dashboard，匯入其中一個 `Project-*` 資料夾。
2. 使用 Creator3.8.8 開啟 `assets/scenes/` 的入口場景；有 PC／Mobile 場景的專案可分別選擇。
3. 在官方 GUI 建置面板匯入該專案的 `build-config.json`，確認輸出名稱仍為 `web`、輸出至該專案的 `build/web/`。Creator 可能自動改成 `web-001`，預覽工具不會改用那份成品。新增七款的建置還需包含 `sourcePackedImages` Bundle；建置後處理會檢查必要檔案並設定本專案的遊戲身分與版型。
4. 雙擊該專案的 `開啟本遊戲預覽.command`，或執行 `npm run preview`，啟動已建置成品的預覽服務。這個捷徑不會執行 Creator 編譯。
5. 集合根目錄的 `開啟遊戲選單.command`／`npm run preview` 提供統一入口：`http://127.0.0.1:8174/`。

一般入口保留正常音樂與音效；代理開發使用獨立分頁、`reaDevelopmentMute=1` 與30FPS。

## 來源、版型與模擬範圍

新增的 `Project-C` 至 `Project-I` 合計擷取並還原 **2,398 個客戶端程式模組**，使用實際來源的圖片、音效、場景與 Prefab。來源模組清單、雜湊、素材對應和相容性修正保留在各專案的 `recovery-manifest.json` 與 `docs/`。還原的執行期程式不是原始 TypeScript 工程，也不代表原伺服器已還原。

| 專案 | 遊戲版型 | 電腦與手機的呈現 |
| --- | --- | --- |
| Project-A | 橫版、直版 | 依裝置選擇入口 |
| Project-B | 橫版 | 保留橫向盤面並依螢幕縮放 |
| Project-C、Project-G | 來源橫版 | 手機沿用原橫版比例縮放 |
| Project-D | 來源橫版、直版 | 依裝置選擇對應的原生入口 |
| Project-E、Project-F、Project-H、Project-I | 來源直版 | 電腦和手機均使用原直版介面，依可用空間縮放 |

版型以各遊戲本身的素材與 Prefab 為依據；共用框架中存在另一方向的包裝場景，不表示遊戲另有完整的原生版型。

所有遊戲均接入明確標示的**自有本機模擬後端**，供前端展示與操作。盤面分布、特殊事件機率及部分獎池或購買設定屬於自有模擬，原 RNG、RTP 與伺服器規則未知。模擬點數、設定與待完成回合儲存在目前瀏覽器；各專案使用獨立儲存空間。來源可證實的規則、模擬假設、離線測試與實際 GUI 驗證分別紀錄。

## 新增專案

建立新的獨立 Creator 專案資料夾，提供與現有專案相同格式的 `game.config.json`，再加入 `games.json`，執行 `npm run catalog:sync`。請勿將另一款遊戲塞進既有專案的 `assets/game`。每個專案均需獨立建置與實測。

## 本機資料與版本控制

`library`、`temp`、`profiles`、`build` 與 `node_modules` 是本機產物，不推送。過時展示工程及研究鏡像已移出此集合。正式名稱對照只存在被忽略的本機檔案；公開文件使用中性專案代稱。既有 Git 歷史與原始素材仍可能辨識來源，這不是匿名化保證。

開發驗證：`npm ci --ignore-scripts --no-audit --no-fund`，再執行 `npm test`。

## 網站入口

GitHub Pages 使用獨立的靜態遊戲網站，首頁為 `index.html`；此 README 保留為工程說明。完成各專案官方 GUI 建置後，執行 `npm run pages:package` 與 `npm run pages:preview`。打包位置、子路徑驗證與發布方式見 [網站發布說明](docs/PAGES.md)。
