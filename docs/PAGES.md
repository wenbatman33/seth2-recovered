# 網站發布

網站首頁為根目錄的 `index.html`。README 用於程式倉庫說明，不能取代遊戲首頁。

每個專案先透過官方 Creator3.8.8 GUI 建置並驗證，再執行：

```sh
npm run pages:package
npm run pages:preview
```

本機路徑驗證入口：`http://127.0.0.1:8294/seth2-recovered/`。此入口以純靜態檔案服務，包含網站子路徑；遊戲不依賴集合的 Node 預覽 API。

打包輸出在被忽略的 `.cache/pages/site`，包含：

```text
index.html                 遊戲選單
Project-A/                 第一款官方 Web 建置成品
Project-B/                 第二款官方 Web 建置成品
.nojekyll                  保留原始靜態資源路徑
robots.txt                 請搜尋引擎不要索引
.pages-package.json        建置成品識別與校驗雜湊
```

打包只複製已完成的官方 GUI 建置，不重新編譯引擎或生成素材。公共路徑使用中性專案名稱；遊戲仍使用自己的 GN 與原始 Bundle。打包後的 `frontend-game-config.js` 將跨遊戲導向限制在同一網站子路徑內。原始 `build/web` 不被修改。

發布時，將這份靜態輸出放到獨立的 `gh-pages` 分支，並將 GitHub Pages 來源設為該分支根目錄。主分支保留獨立 Creator 專案與測試；不要將整份原始碼目錄當作遊戲網站發布。每次更新仍需先完成官方 GUI 建置、打包及操作驗證。

發布及切換 Pages 來源均需使用者當次明確指示。打包與本機測試不會推送或更新線上網站。`noindex` 與 robots 設定只能請求降低索引，不能保證不被搜尋或隱藏原始遊戲畫面。
