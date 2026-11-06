# 原始素材缺項

只記錄實際來源的缺項；不建立替代圖、別名或生成素材。取得可追溯的原始素材與對應資料後，再恢復相關流程驗證。

## Project-H：`popup_02`

- **狀態**：目前擷取來源未包含所需 SpriteFrame，原生掉落寶箱流程因此阻塞。不是已證實的 `loadDir` 遺漏或 trim／rotation 修正問題。
- **名稱與用途**：`popup_02`，`HeavenlyTreasuresView` 結果視窗的標題圖片，對應原 Prefab 的 `ndResultPopup/popup_02` Sprite。
- **原生查找位置**：`g1011` Bundle 的 `assets/texture/locale/<language>/` SpriteFrame 快取；當前介面使用 `zh-tw`。
- **原始圖片尺寸**：未知。原 Prefab 的標題節點 UITransform 為 **720 × 219**；這是容器尺寸，不能當作遺失圖片的原始尺寸。
- **風格與內容**：須由該遊戲原始圖片確認；目前無法證實其標題文字、像素內容、裁切範圍、offset 或 atlas 位置，不以其他圖片替代。

### 已確認的來源證據

1. 原始 `HeavenlyTreasuresView.setData` 無條件呼叫 `LoadUtils.getDirSp(this.data.module, localeSpriteFrame, "popup_02")`。原始 `LoadUtils.getDirSp` 依 SpriteFrame 的 `name` 查找，查無即丟出 `NOT FIND 所需SpriteFrame popup_02`。
2. Project-H 的完整來源別名清單含 **655 個 SpriteFrame 路徑、668 個獨立 SpriteFrame 定義**；所有 Bundle、六種語系均沒有 `popup_02` 路徑或 frame 名稱。`g1011` 的 `zh-tw` 來源目錄有 19 個 SpriteFrame，沒有此項。
3. 獨立重新解碼全部 **2,442 筆**原始資產紀錄，解碼錯誤為 0；`popup_02` 僅出現在 `HeavenlyTreasures` Prefab 的節點名稱。該原始節點上的 `cc.Sprite` 沒有 `_spriteFrame` 欄位，也沒有可恢復的圖片 UUID。現有工程保留相同的空白來源關係。
4. 原始 Prefab UUID：`7c51c0fa-029b-4ee6-ba34-a7af2efef73e`。擷取的 pack 來源為 `.cache/rea-new-games/Project-H/capture/assets/g1011/import/07/07158ce62.json`，SHA-256：`ea78b2863692e3a301887a1aaa5f90559bd5de440c50ec40128fb76f1dfad876`。
5. 公開的原始程式 fixture：`Project-H/tests/fixtures/H-g1011-HeavenlyTreasuresView.ts.js`，SHA-256：`3387966cf2881c332d4937b08672e0c0b7fcc774bbf7453e37ae1cca11a46474`。來源影格定義及其查找路徑可查 `Project-H/docs/source-asset-alias-manifest.json`。

### 實際阻塞與驗證界線

2026-11-06，父代理回報官方 Creator 3.8.8 的 17:18:16 建置，在測試錢包 `h-fortune-final-01`、情境 `fortuneLanding` 發生此錯誤。普通請求下注 1，餘額由 10000 降至 9999；`closeSpin` 回傳 bonus 後，原介面建立流程在 `setData` 停止。日誌時間 `09:25:22.690`，堆疊為 `getDirSp → setData → show → createNode`。

此待完成操作保留，沒有宣稱寶箱視窗、點擊收集、結束或派彩已通過實機驗證。既有離線 collect／finish 契約測試不代表原始圖像齊備。

### 待補資料

須取得這個標題的原始 SpriteFrame／atlas 記錄及其真正 PNG、JPG 或 WebP 圖片，包含語系、原始 UUID、rect、originalSize、offset、rotation 與必要邊框資料；或取得來源能證實的另一個正式查找路徑。未取得前，不猜別名、不切換語系、不繪製替代圖、不修改原圖 `.meta` UUID，也不繼續該流程的完整驗收。
