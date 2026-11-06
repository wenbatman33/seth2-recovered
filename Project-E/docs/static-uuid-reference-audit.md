# 靜態 UUID 引用審查

本報告只讀取本工程 assets、現有官方 build 與已安裝 Creator 引擎 metadata；沒有修改素材、啟動 Creator 或預熱 GPU。來源 alias 能證明修復所需原圖存在，不能代表 UUID 已被本機 meta 發行或 Builder 保留了依賴。

可從集合根目錄重跑：

```sh
python3 tools/recovery/audit-static-uuid-references.py Project-E --inspect-build --out /tmp/project-e-uuid-audit.json
```

輸出檔必須尚不存在。工具預設讀本工程 `docs/static-uuid-source-aliases.json`，不需要 ignored cache 或私人 launch/session JSON。

本次結果：95 個 scene/prefab/material 檔、1980 處引用；1 個 UUID 沒有實際本機 meta，共 1 處引用；全部有可核對的原始 SpriteFrame/texture 圖片映射。

精確資料在 `static-uuid-reference-audit.json`。修復定位使用主 asset UUID、原 CompPrefabInfo.fileId、propertyPath；PrefabInstance override 使用 instance.fileId、targetInfo.localID、override.propertyPath，禁止用易變陣列 index 猜測目標。

缺少的原 SpriteFrame 位於 A_jp_light.prefab。可從原atlas image重建該frame；本次未檢查此工程的官方build輸出，不能推定Builder是否仍保留該依賴。

這份來源報告保存修復前靜態證據；實際runtime bridge或後續build若改變結果，應重跑並保留新報告，不以舊結果宣稱瀏覽器渲染已驗收。
