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
Project-C/ 至 Project-I/   其餘七款各自的官方 Web 建置成品
.nojekyll                  保留原始靜態資源路徑
robots.txt                 請搜尋引擎不要索引
.pages-package.json        建置成品識別與校驗雜湊
```

打包只複製已完成的官方 GUI 建置，不重新編譯引擎或生成素材。公共路徑使用中性專案名稱；遊戲仍使用自己的 GN 與原始 Bundle。打包後的 `frontend-game-config.js` 將跨遊戲導向限制在同一網站子路徑內。原始 `build/web` 不被修改。

目前清單包含九款，但新增項目仍在驗證中。首頁的測試預覽或建置更新狀態不等同完整驗收；發布前須核對 [驗證紀錄](recovery/validation-ledger.json) 與最後一次官方建置。打包器會依 `games.json` 複製各專案的完整 `build/web`，沒有素材過濾或跨專案去重。建置更新中的項目不得以過時成品視為已驗證版本。

## 容量與最後量測

GitHub 文件列出的 Pages 網站大小上限為 **1 GB**，部署超過十分鐘會逾時。[官方 Pages 限制](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) 與 [官方上傳 Action 說明](https://github.com/actions/upload-pages-artifact#artifact-validation) 均以 1 GB 為支援範圍；上傳器另提到的 10 GB 絕對上限不能當成可用的網站額度。

2026-11-06 的唯讀量測以當時九份 `build/web` 為基礎，納入打包器會重寫的公開清單、首頁和識別檔後，網站內容預估為 **972,178,569 bytes（927.142 MiB）**、24,883 個檔案。按目前 Action 的 GNU tar 區塊與檔名開銷估算，未壓縮封存為 **997,693,440 bytes（951.475 MiB）**；距保守的十進位 1 GB 僅約 2.3 MB。這是當時成品的容量估算，沒有實際製作或上傳封存，亦不保證後續重建版本的大小。

最終官方重建與操作驗證完成後，重新執行 `npm run pages:package`，再從**實際的打包目錄**量測檔案邏輯大小；不要使用包含磁碟配置區塊的 `du` 數值替代：

```sh
python3 - <<'PY'
from pathlib import Path
root = Path('.cache/pages/site')
files = [p for p in root.rglob('*') if p.is_file()]
total = sum(p.stat().st_size for p in files)
print(f'{len(files)} files; {total} bytes; {total / 2**20:.3f} MiB')
print(f'Headroom below decimal 1 GB: {1_000_000_000 - total} bytes')
assert not any(p.is_symlink() for p in root.rglob('*')), 'Unexpected symlink'
assert total <= 1_000_000_000, 'Published site exceeds conservative 1 GB limit'
PY
```

因容量接近上限，發布準備時也應量測上傳器實際產生的未壓縮 tar。下列指令在具有 GNU tar 的 Linux 準備環境執行，沿用目前 `upload-pages-artifact@v3` 的封存選項，只把結果串流計數，不另存一份大型檔案：

```sh
nice -n 15 tar --dereference --hard-dereference \
  --directory .cache/pages/site --exclude=.git --exclude=.github -cf - . | wc -c
```

上述容量檢查不會修改路由、重編譯、壓縮圖片或去重素材。若最終量測超額，先記錄實際差額與部署需求，再決定調整方式；不能以 gzip 傳輸後的大小宣稱未壓縮網站已符合上限。另須照常從打包首頁逐款點擊並確認靜態子路徑下的實際遊戲、輸入和音效。

## 發布

發布時，將這份靜態輸出放到獨立的 `gh-pages` 分支，GitHub Pages 的 Source 使用 GitHub Actions。手動執行 `Publish verified game site` 工作，它會讀取 `gh-pages` 的已驗證成品、檢查必要檔案，然後發布。工作不會自行建置 Creator，也不會因一般原始碼推送而自動發布。主分支保留獨立 Creator 專案與測試；不要將整份原始碼目錄當作遊戲網站發布。每次更新仍需先完成官方 GUI 建置、打包及操作驗證。

建立發布分支的 Git 索引時，必須完整納入打包輸出，使用 `git add --force --all`，避免全域忽略規則漏掉引擎必要的 `src/settings.json`。推送前執行 `node tools/check-pages-release.mjs`，比對 `.cache/pages/site` 與 `.cache/pages/deploy.git` 的完整檔案清單。此檢查只針對已隔離的靜態發布目錄，不可對原始專案強制加入被忽略的檔案。

發布及切換 Pages 來源均需使用者當次明確指示。打包與本機測試不會推送或更新線上網站。`noindex` 與 robots 設定只能請求降低索引，不能保證不被搜尋或隱藏原始遊戲畫面。
