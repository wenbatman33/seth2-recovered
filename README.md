# 多遊戲前端還原集合

每個遊戲都是獨立的 **Cocos Creator3.8.8 專案**。在 Dashboard 分別匯入 `Project-A` 或 `Project-B`；集合根目錄負責遊戲清單與開發工具。

```text
Project-A/                 第一款獨立 Creator 專案
Project-B/                 第二款獨立 Creator 專案
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
3. 在官方 GUI 建置面板匯入該專案的 `build-config.json`，輸出至該專案的 `build/web/`。建置後會自動設定本專案的遊戲身分與版型。
4. 雙擊該專案的 `開啟本遊戲預覽.command`，或執行 `npm run preview`，啟動已建置成品的預覽服務。這個捷徑不會執行 Creator 編譯。
5. 集合根目錄的 `開啟遊戲選單.command`／`npm run preview` 提供統一入口：`http://127.0.0.1:8174/`。

一般入口保留正常音樂與音效；代理開發使用獨立分頁、`reaDevelopmentMute=1` 與30FPS。兩款客戶端使用原始素材，後端為明確標示的自有模擬資料，沒有宣稱原始 RNG、RTP或伺服器行為。

## 新增專案

建立新的獨立 Creator 專案資料夾，提供與現有專案相同格式的 `game.config.json`，再加入 `games.json`，執行 `npm run catalog:sync`。請勿將另一款遊戲塞進既有專案的 `assets/game`。每個專案均需獨立建置與實測。

## 本機資料與版本控制

`library`、`temp`、`profiles`、`build` 與 `node_modules` 是本機產物，不推送。過時展示工程及研究鏡像已移出此集合。正式名稱對照只存在被忽略的本機檔案；公開文件使用中性專案代稱。既有 Git 歷史與原始素材仍可能辨識來源，這不是匿名化保證。

開發驗證：`npm ci --ignore-scripts --no-audit --no-fund`，再執行 `npm test`。

## 網站入口

GitHub Pages 使用獨立的靜態遊戲網站，首頁為 `index.html`；此 README 保留為工程說明。完成各專案官方 GUI 建置後，執行 `npm run pages:package` 與 `npm run pages:preview`。打包位置、子路徑驗證與發布方式見 [網站發布說明](docs/PAGES.md)。
