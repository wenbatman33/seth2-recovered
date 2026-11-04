# 新增一款還原遊戲

1. 在集合根目錄新增中性名稱的獨立 Creator 專案資料夾。
2. 該目錄須包含自己的 `package.json`、`assets`、`settings`、`game.config.json`、`build-config.json`，並使用唯一的 Creator專案UUID。
3. 場景放 `assets/scenes`，遊戲程式、素材與自有後端分別放 `assets/game/scripts`、`content`、`backend`。
4. 將專案資料夾名加入根目錄 `games.json`，執行 `npm run catalog:sync` 更新各專案隨附的瀏覽器遊戲清單。
5. 執行 `node tools/check-projects.mjs`，再以登入 Dashboard／官方 GUI 建置並實測。

Bundle代號與原素材UUID可保留來源值；正式名稱若需保密，僅加入被忽略的 `.local-game-names.json`。中性命名不會抹除既有Git歷史或原始素材的可辨識內容。
