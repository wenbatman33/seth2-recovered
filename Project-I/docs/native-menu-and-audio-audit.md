# 原生選單與音效驗證界線

本工程保留原前端選單與來源圖像，使用獨立本機模擬資料。`tests/test-menu-metadata.mjs` 執行原 sender 與 record/history/table/avatar/ranking consumer 方法；不代表瀏覽器、觸控、動畫或實際聲音已驗收。

- 押注紀錄回 `data:Array`，只列本瀏覽器錢包已結算局；`getUserReport` 的 `content.list` 提供所選日期範圍的本機彙總。舊錢包沒有時間資料的記錄使用錢包更新時間並標註估計，不能冒充原伺服器歷史。
- 原手機機台按鈕只檢查 `platform.table` 是否存在；本機提供單一機台1、真實本機下注/贏分統計、detail/lock 與一頁 tableMeta。`mgCounts` 的原伺服器意義尚未核實，本機不製造該統計，三欄為0。沒有遠端機台、其他玩家或多人鎖台。
- 排行榜依原 `slotRankOn:false` 隱藏；直接要求名單回原生空狀態，沒有捏造排名與其他玩家。暱稱依原1至6字元規則驗證並在本機獨立錢包保存。
- 原公開程式列出 `https://play.riversense.tw/avatars/0.png` 與 a1至a20、0至39；單一來源請求遇 DNS 錯誤，未取得原頭像圖。因此 `avatars:[]`，以 local-only guard 避免原 AvatarViewBase 對空 map 取 `.node`，保留原空面板及關閉。未提供頭像選擇；不以邊框、生成圖或程式形狀代替原頭像。
- 來源 `AssetManager.loadImage` 對空 URL 直接回 null，不送遠端載圖。音量正常預設1；`reaDevelopmentMute=1` 僅為明確開發靜音。`spinId` 查詢參數會由原 GameView 進入重播靜音；本機一般入口不應附加它。

SHA、來源檔、音效常數存在性與未找到的常數在 `native-menu-and-audio-audit.json`。現有常數存在不等於原聲音實際播放、混音或自動播放解鎖已通過。

來源常數 SYMBOL_WIN 指向 assets/music/btm/btm_symbol_01_win，但原圖包內未見該音效；目前程式亦沒有 EBTM.SYMBOL_WIN 的 consumer 引用。其餘 GameConfigModel 音效常數都有對應原音檔；未補造或替換音效。

後續依原 UrlUtils 生產環境 location.origin 確認的單一原圖網址 `https://play.godeebxp.com/avatars/0.png` 回 HTTP403，未取得正確PNG，因此沒有展開選單圖下載，並停止其他來源探測。證據見 `avatar-source-status.json`。

本機 fresh-page 音效旗標修正：原 AudioData 將 Win/BigWin 暫停用的 isMusicOn/isEffectOn 一起存入共用 storage；若關頁時仍為false，原 initAudio 與音量滑桿即使100%也不會恢復。已加 owned-local 且非Editor的 `local-audio-flags.ts`，只在新的 AudioData 物件第一次初始化後恢復這兩個播放閘門。各音量、使用者0音量、原重播spinId靜音、開發輸出靜音bus均未改；同一頁後續原生Win/BigWin暫停不會被強行打開。原consumer與已安裝helper的離線測試在集合 `tests/test-source-audio-initialization.mjs`，來源hash與結果見本工程 `audio-initialization-audit.json`；不代表實際喇叭輸出或瀏覽器自動播放已驗收。
