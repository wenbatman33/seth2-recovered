# 原生選單與音效驗證界線

本工程保留原前端選單與來源圖像，使用獨立本機模擬資料。`tests/test-menu-metadata.mjs` 執行原 sender 與 record/history/table/avatar/ranking consumer 方法；不代表瀏覽器、觸控、動畫或實際聲音已驗收。

- 押注紀錄回 `data:Array`，只列本瀏覽器錢包已結算局；`getUserReport` 的 `content.list` 提供所選日期範圍的本機彙總。舊錢包沒有時間資料的記錄使用錢包更新時間並標註估計，不能冒充原伺服器歷史。
- 原手機機台按鈕只檢查 `platform.table` 是否存在；本機提供單一機台1、真實本機下注/贏分統計、detail/lock 與一頁 tableMeta。`mgCounts` 的原伺服器意義尚未核實，本機不製造該統計，三欄為0。沒有遠端機台、其他玩家或多人鎖台。
- 排行榜依原 `slotRankOn:false` 隱藏；直接要求名單回原生空狀態，沒有捏造排名與其他玩家。暱稱依原1至6字元規則驗證並在本機獨立錢包保存。
- 原公開程式列出 `https://play.riversense.tw/avatars/0.png` 與 a1至a20、0至39；單一來源請求遇 DNS 錯誤，未取得原頭像圖。因此 `avatars:[]`，以 local-only guard 避免原 AvatarViewBase 對空 map 取 `.node`，保留原空面板及關閉。未提供頭像選擇；不以邊框、生成圖或程式形狀代替原頭像。
- 來源 `AssetManager.loadImage` 對空 URL 直接回 null，不送遠端載圖。音量正常預設1；`reaDevelopmentMute=1` 僅為明確開發靜音。`spinId` 查詢參數會由原 GameView 進入重播靜音；本機一般入口不應附加它。

SHA、來源檔、音效常數存在性與未找到的常數在 `native-menu-and-audio-audit.json`。現有常數存在不等於原聲音實際播放、混音或自動播放解鎖已通過。

E 的 Lucky Moment 已接入獨立本機模擬：一般主遊戲每局8%啟用 fever，FG 入口機率由2.5%乘2為5%（仍保留0.5%本機 jackpot），概率均可設定，非原伺服器概率。原規則05英文圖僅說 Lucky Moment 在主遊戲隨機出現且提高免費遊戲機會，沒有公布上述數值。回應同時提供 `engine.isLuckyMoment`（原 GameLogic 讀取）與 `engine.luckyMoment`（原 GameData 讀取），保存局重載時恢復 definition flag；關局時恢復原 loop/BGM。

同時可在啟用 fever 的普通主遊戲以自訂35%概率選最多5個普通符號，50%轉 WILD，否則轉同一個2/3/4圖案。來源有 transformInfo parser、getTransformAnimation 與原 symbol_trans Spine，但 E 發布 FSM 並無啟用的變換 phase。因此 `FeverHooks.ts` 是明列的本機銜接：原軸輪停下後使用原 GameSymbol節點/transformAnim Spine，等待原 Skeleton 完成事件才回原 FSM 贏線、summary、close 狀態。無生成素材、替代動畫或計時器偽造完成。獎金只按變換後盤面的原40線賠率計算，不增加任意獎金。

`tests/test-fever.mjs` 以原公開 Babel/FSM/GameState、GameLogic/BackgroundView/GameSymbol consumer 驗證旗標、進入/退出fevertime、完成前不前進、原贏線/結算路徑，以及保存變換局重載不重扣與不跳stage。Fixture 明確控制 Skeleton callback，**不代表實機動畫、音效與點擊已通過**。目前不在 FG、SCATTER觸發或 jackpot局同時變換；原變換概率、規則細節及缺失的作者phase仍未知，不宣稱原後端或原phase完整還原。

來源 DragonView 的三個 DRAGON_LV 音效常數沒有相應原檔，但目前 GameState 沒有引用 DragonView/DRAGON_STATE，沒有以其他音效替代。

後續依原 UrlUtils 生產環境 location.origin 確認的單一原圖網址 `https://play.godeebxp.com/avatars/0.png` 回 HTTP403，未取得正確PNG，因此沒有展開選單圖下載，並停止其他來源探測。證據見 `avatar-source-status.json`。

本機 fresh-page 音效旗標修正：原 AudioData 將 Win/BigWin 暫停用的 isMusicOn/isEffectOn 一起存入共用 storage；若關頁時仍為false，原 initAudio 與音量滑桿即使100%也不會恢復。已加 owned-local 且非Editor的 `local-audio-flags.ts`，只在新的 AudioData 物件第一次初始化後恢復這兩個播放閘門。各音量、使用者0音量、原重播spinId靜音、開發輸出靜音bus均未改；同一頁後續原生Win/BigWin暫停不會被強行打開。原consumer與已安裝helper的離線測試在集合 `tests/test-source-audio-initialization.mjs`，來源hash與結果見本工程 `audio-initialization-audit.json`；不代表實際喇叭輸出或瀏覽器自動播放已驗收。

本機贏分級別修正：原 `GameSender` 提供六個正值門檻，`win:20` 與 `bigWin:20` 兩個20皆必須保留。原 GameData 依排序值的索引決定動畫級別；少掉第一個分類槽會把20至50倍以下贏分降為level0，而原 BigwinView 對level0不啟動也不送完成事件。自有 definition 已恢復原六槽；`tests/test-native-win-completion.mjs` 重現舊錯誤，並以原 GameData、BigwinView 方法與明確控制的 Tween callbacks 驗證每級送結束一次。沒有以計時器或強行結算繞過原完成鏈。修正後已由主驗證流程使用2026-11-06 15:41:56官方GUI build驗證新局：10000扣2後，31.25x贏分分類level1，原MG_BIG_WIN_STATE收到SHOW_BIG_WIN_END後進close、回MG_WAIT_SPIN，62.5獎金只入帳一次至10060.5，無runtime錯誤；保存舊局重載也只結算一次。中途獎金彈窗未截得獨立畫面，此項證據為實際DOM callback鏈、錢包及結束主畫面，不延伸成全部玩法/手機驗收。可用 `reaDebug=1` 讀取 boundary 的有界 nativeStates、summaryStage 與 requests 診斷，不含原session或請求內容。證據見 `native-win-completion.json`。

免費遊戲選擇的原生時序已查明：普通進入在0.5秒後啟動固定10秒倒數，時間到自動確認，目前沒有改動。`autoConfirmTime:1.5` 並不控制這個選擇；原 showIntroAlert 讀到autoCloseTime後未使用，startCountdown只採原BEGIN_TIME=10。只有重播模式會在2秒自動揭牌。原操作允許左右箭頭、確認/空白鍵，並非點擊某倍率就向後端重新選倍率：回應在進場前已有selectFgMultiple（4/6/8），選中的卡片顯示該值，其餘兩值由原前端洗牌。原self-contained consumer fixture已驗三個倍率與三個卡位、手動確認防重及倒數路徑，但不把離線handler呼叫當成真實滑鼠驗收。

主驗證流程於390×844手機視窗實測一般spin進入6stages（入口+5FG），原免費介面顯示倍率6，走FG_BIG_WIN及原完成回呼後回主遊戲MG_WAIT_SPIN；錢包10000扣2、69.5總獎金只入帳一次至10067.5。三張卡片在截圖前已按原倒數自動確認，**尚未視覺驗證手動選牌**。證據和限制見 `native-fg-selection-audit.json`。

變換實機查修：2026-11-06 15:41:56 build 的 fever-transform-wild 在位置5誤報原動畫缺失，停在MG_SPIN_TO_STOP，未結算。原因是原 GameSymbol Prefab 的 transformAnim 節點起始inactive，官方 Skeleton.findAnimation 只讀已經__preload的_skeleton，而舊本機bridge在啟用節點之前查它。原SkeletonData與trans_01等動畫實際存在。已修正為先檢查原SkeletonData runtime animation，再啟用原節點觸發官方__preload、播放原動畫並等待原完成listener；不改來源圖、Prefab或UUID，沒有timeout完成。Fixture現在使用官方3.8.8原__preload/findAnimation方法與真Prefab起始狀態；修正後已在2026-11-06 16:50:31官方GUI build實測通過：e-fever-final-01錢包10000扣2至9998，原三格變WILD動畫完成，9條贏線共17.5，原MG_SPIN_TO_STOP→MG_SHOW_WIN_SUMMARY→MG_CLOSE→MG_WAIT，closeSpin只入帳17.5一次至10015.5；啟動MINOR1000正確，本次未出現新的E執行錯誤。建置產物5個後端資料案例另行通過，不以其取代GUI證據。此缺陷已解除；同一官方build另以e-fever-symbol-final-01實測原2格變角色符號動畫完成，10000扣2再入帳10至10008，closeSpin一次、回MG_WAIT_SPIN；原JP顯示MINI200也已確認，僅屬pool顯示，不代表JP得獎流程通過。同build另實測舊e-fever-01保存變換局：initial回同一project-e-local-1與9998點數，沒有新spin或重扣；點原恢復確認後播完原三WILD動畫，closeSpin只入帳17.5一次至10015.5，回MG_WAIT_SPIN。保存變換局實機重載已通過；另於同build以e-jp-final-01實測MINI得獎：10000扣2至9998，原DOM追蹤JP_WIN_STATE onEntry→SHOW_JP_END→MG_CLOSE_SPIN→MG_WAIT，closeSpin只入帳200一次至10198，native audit error為null。中途JP彈窗沒有獨立截圖，不宣稱所有獎池已視覺驗收；其餘MINOR/MAJOR/GRAND得獎、滿版特殊流程及完整操作矩陣仍未驗收，見 `fever-transform-gui-verification.json`。

最新16:50:31官方build另於390×844手機視窗，以e-manual-fg-final-01實際點spin，原選牌仍按倒數自動確認（沒有手點卡片），原FREE GAME顯示×8，入口+5FG共6stage。10000扣2至9998，close只入帳26一次至10024並回MG_WAIT。這驗證手機自動確認流程，不代表三卡手動選牌通過；該項仍待驗證。
