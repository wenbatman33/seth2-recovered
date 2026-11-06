import "../../shared/scripts/main-Application";
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency4 from "../../shared/scripts/main-BaseModel";
import * as _dependency5 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency7 from "./g1004-GameSender";
import * as _dependency8 from "../../shared/scripts/slotFramework-UrlModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-PlatformModel";
var _export;
export { _export as EBGM };
var _export2;
export { _export2 as EBTM };
var _export3;
export { _export3 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EBGM":
      _export = value;
      break;
    case "EBTM":
      _export2 = value;
      break;
    case "default":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, e, s, o, a, m, l, i, n, b;
_publish({
  EBGM: void 0,
  EBTM: void 0
}), _dependency2.cclegacy._RF.push({}, "8bc42sQsSNHA5U9DsfoFpqx", "GameConfigModel", void 0);
var L,
  E,
  I = "assets/music/bgm/",
  r = "assets/music/btm/",
  T = "assets/music/btm/common/",
  G = "assets/music/btm/featureGame/",
  H = "assets/music/btm/bigWin/",
  O = "assets/music/btm/jpWin/",
  A = "assets/music/btm/jpGame/";
!function (_) {
  _[_.MAIN_GAME = I + "bgm_mg"] = "MAIN_GAME", _[_.FREE_GAME = I + "bgm_fg"] = "FREE_GAME", _[_.JP_GAME = I + "bgm_jp"] = "JP_GAME", _[_.HEAVENLY_TREASURES = I + "bgm_crates"] = "HEAVENLY_TREASURES", _[_.HEAVENLY_TREASURES2 = I + "bgm_crates_total"] = "HEAVENLY_TREASURES2";
}(L || (L = _publish("EBGM", {}))), function (_) {
  _[_.CLICK = T + "btm_normal"] = "CLICK", _[_.DRAGON_LV1 = T + "btm_dargon"] = "DRAGON_LV1", _[_.DRAGON_LV2 = T + "btm_dargon"] = "DRAGON_LV2", _[_.DRAGON_LV3 = T + "btm_dargon"] = "DRAGON_LV3", _[_.JP_POPUP_IN_1 = O + "btm_w_jp_intro_1"] = "JP_POPUP_IN_1", _[_.JP_POPUP_IN_2 = O + "btm_w_jp_intro_2"] = "JP_POPUP_IN_2", _[_.JP_POPUP_LOOP_1 = O + "btm_w_jp_loop_1"] = "JP_POPUP_LOOP_1", _[_.JP_POPUP_LOOP_2 = O + "btm_w_jp_loop_2"] = "JP_POPUP_LOOP_2", _[_.JP_MINI_VOCAL = O + "btm_w_jp_mini_vocal"] = "JP_MINI_VOCAL", _[_.JP_MINOR_VOCAL = O + "btm_w_jp_minor_vocal"] = "JP_MINOR_VOCAL", _[_.JP_MAJOR_VOCAL = O + "btm_w_major_vocal"] = "JP_MAJOR_VOCAL", _[_.JP_GRAND_VOCAL = O + "btm_w_grand_vocal"] = "JP_GRAND_VOCAL", _[_.BIG_INTRO = H + "btm_w_intro"] = "BIG_INTRO", _[_.BIG_VOCAL = H + "big_m"] = "BIG_VOCAL", _[_.SUPER_VOCAL = H + "super_m"] = "SUPER_VOCAL", _[_.MEGA_VOCAL = H + "mega_m"] = "MEGA_VOCAL", _[_.ULTRA_VOCAL = H + "ultra_m"] = "ULTRA_VOCAL", _[_.LEGENDARY_VOCAL = H + "legendary_m"] = "LEGENDARY_VOCAL", _[_.BIG_WIN = H + "btm_w_big"] = "BIG_WIN", _[_.BIG_WIN_END = H + "btm_w_big_end"] = "BIG_WIN_END", _[_.SUPER_WIN = H + "btm_w_super"] = "SUPER_WIN", _[_.SUPER_WIN_END = H + "btm_w_super_end"] = "SUPER_WIN_END", _[_.MEGA_WIN = H + "btm_w_mega"] = "MEGA_WIN", _[_.MEGA_WIN_END = H + "btm_w_mega_end"] = "MEGA_WIN_END", _[_.ULTRA_WIN = H + "btm_w_ultra"] = "ULTRA_WIN", _[_.ULTRA_WIN_END = H + "btm_w_ultra_end"] = "ULTRA_WIN_END", _[_.LEGENDARY_WIN = H + "btm_w_legendary"] = "LEGENDARY_WIN", _[_.LEGENDARY_WIN_END = H + "btm_w_legendary_end"] = "LEGENDARY_WIN_END", _[_.JP_FLIP = A + "jp_flip"] = "JP_FLIP", _[_.JP_OUT = A + "jp_out"] = "JP_OUT", _[_.JP_TRANS = A + "jp_trans"] = "JP_TRANS", _[_.JP_CONFIRM = A + "jp_confirm"] = "JP_CONFIRM", _[_.CHEST_OPEN = A + "chest_open"] = "CHEST_OPEN", _[_.JP_FISH = A + "btm_jp_fish"] = "JP_FISH", _[_.JP_FROG = A + "btm_jp_frog"] = "JP_FROG", _[_.JP_LION = A + "btm_jp_lion"] = "JP_LION", _[_.JP_DRAGON = A + "btm_jp_dragon"] = "JP_DRAGON", _[_.JP_FISH_END = A + "btm_jp_fish_end"] = "JP_FISH_END", _[_.JP_FROG_END = A + "btm_jp_frog_end"] = "JP_FROG_END", _[_.JP_LION_END = A + "btm_jp_lion_end"] = "JP_LION_END", _[_.JP_DRAGON_END = A + "btm_jp_dragon_end"] = "JP_DRAGON_END", _[_.SPIN = r + "btm_spin"] = "SPIN", _[_.BUY_FEATURE_CLICK = r + "btm_button"] = "BUY_FEATURE_CLICK", _[_.RUN_SCORE = r + "btm_w_point_run_V2"] = "RUN_SCORE", _[_.UPDATE_SCORE = r + "btm_point_win"] = "UPDATE_SCORE", _[_.UPDATE_TOTAL_SCORE = r + "btm_point_total"] = "UPDATE_TOTAL_SCORE", _[_.SCATTER_HIT = r + "btm_scatter_symbol_01"] = "SCATTER_HIT", _[_.JACKPOT_HIT = r + "btm_jp_01"] = "JACKPOT_HIT", _[_.WILD_HIT = r + "btm_wild"] = "WILD_HIT", _[_.SCATTER_WIN = r + "btm_scatter_symbol_hit"] = "SCATTER_WIN", _[_.JACKPOT_WIN = r + "btm_jp_symbol"] = "JACKPOT_WIN", _[_.SYMBOL_UPGRADE = r + "btm_symbol_change"] = "SYMBOL_UPGRADE", _[_.SYMBOL_UPGRADE_END = r + "btm_symbol_change_end"] = "SYMBOL_UPGRADE_END", _[_.GOT_RATE = r + "btm_point_move"] = "GOT_RATE", _[_.COLLECT_RATE = r + "btm_point_hit"] = "COLLECT_RATE", _[_.RUN_EXPECT = r + "btm_symbol_expect"] = "RUN_EXPECT", _[_.EXPECT_FAIL = r + "btm_symbol_expect_fail"] = "EXPECT_FAIL", _[_.ENTER_EXPECT_LV1 = r + "btm_symbol_predict01"] = "ENTER_EXPECT_LV1", _[_.ENTER_EXPECT_LV2 = r + "btm_symbol_predict02"] = "ENTER_EXPECT_LV2", _[_.ENTER_EXPECT_DROP = r + "btm_symbol_predict_drop"] = "ENTER_EXPECT_DROP", _[_.REEL_SCROLL = r + "btm_reel_scroll"] = "REEL_SCROLL", _[_.REEL_STOP = r + "btm_reel_stop_01"] = "REEL_STOP", _[_.FG_BOARD_OPEN = G + "btm_fg_board"] = "FG_BOARD_OPEN", _[_.FG_TOTAL_WIN = G + "btm_total_win"] = "FG_TOTAL_WIN", _[_.FG_TOTAL_WIN_END = G + "btm_total_win_end"] = "FG_TOTAL_WIN_END", _[_.LUCKY_WEALTH_INTRO = r + "btm_jp_intro"] = "LUCKY_WEALTH_INTRO", _[_.HIGH_LIGHT_LV1_3 = r + "btm_symbol_lv1_3"] = "HIGH_LIGHT_LV1_3", _[_.HIGH_LIGHT_LV1_4 = r + "btm_symbol_lv1_4"] = "HIGH_LIGHT_LV1_4", _[_.HIGH_LIGHT_LV1_5 = r + "btm_symbol_lv1_5"] = "HIGH_LIGHT_LV1_5", _[_.HIGH_LIGHT_LV1_6 = r + "btm_symbol_lv1_6"] = "HIGH_LIGHT_LV1_6", _[_.HIGH_LIGHT_LV2_3 = r + "btm_symbol_lv2_3"] = "HIGH_LIGHT_LV2_3", _[_.HIGH_LIGHT_LV2_4 = r + "btm_symbol_lv2_4"] = "HIGH_LIGHT_LV2_4", _[_.HIGH_LIGHT_LV2_5 = r + "btm_symbol_lv2_5"] = "HIGH_LIGHT_LV2_5", _[_.HIGH_LIGHT_LV2_6 = r + "btm_symbol_lv2_6"] = "HIGH_LIGHT_LV2_6", _[_.HIGH_LIGHT_LV3_3 = r + "btm_symbol_lv3_3"] = "HIGH_LIGHT_LV3_3", _[_.HIGH_LIGHT_LV3_4 = r + "btm_symbol_lv3_4"] = "HIGH_LIGHT_LV3_4", _[_.HIGH_LIGHT_LV3_5 = r + "btm_symbol_lv3_5"] = "HIGH_LIGHT_LV3_5", _[_.HIGH_LIGHT_LV3_6 = r + "btm_symbol_lv3_6"] = "HIGH_LIGHT_LV3_6", _[_.HIGH_LIGHT_LV4_3 = r + "btm_symbol_lv4_3"] = "HIGH_LIGHT_LV4_3", _[_.HIGH_LIGHT_LV4_4 = r + "btm_symbol_lv4_4"] = "HIGH_LIGHT_LV4_4", _[_.HIGH_LIGHT_LV4_5 = r + "btm_symbol_lv4_5"] = "HIGH_LIGHT_LV4_5", _[_.HIGH_LIGHT_LV4_6 = r + "btm_symbol_lv4_6"] = "HIGH_LIGHT_LV4_6", _[_.HIGH_LIGHT_LV5_3 = r + "btm_symbol_lv5_3"] = "HIGH_LIGHT_LV5_3", _[_.HIGH_LIGHT_LV5_4 = r + "btm_symbol_lv5_4"] = "HIGH_LIGHT_LV5_4", _[_.HIGH_LIGHT_LV5_5 = r + "btm_symbol_lv5_5"] = "HIGH_LIGHT_LV5_5", _[_.HIGH_LIGHT_LV5_6 = r + "btm_symbol_lv5_6"] = "HIGH_LIGHT_LV5_6", _[_.SYMBOL_SHINE_LV1 = r + "btm_symbol_shine_lv1"] = "SYMBOL_SHINE_LV1", _[_.SYMBOL_SHINE_LV2 = r + "btm_symbol_shine_lv2"] = "SYMBOL_SHINE_LV2", _[_.SYMBOL_SHINE_LV3 = r + "btm_symbol_shine_lv3"] = "SYMBOL_SHINE_LV3", _[_.RATE_TO_SCORE_LV1 = r + "btm_point_hit_lv1"] = "RATE_TO_SCORE_LV1", _[_.RATE_TO_SCORE_LV2 = r + "btm_point_hit_lv2"] = "RATE_TO_SCORE_LV2", _[_.RATE_TO_SCORE_LV3 = r + "btm_point_hit_lv3"] = "RATE_TO_SCORE_LV3", _[_.RATE_MOVE_LV1 = r + "rate_move_lv1"] = "RATE_MOVE_LV1";
}(E || (E = _publish("EBTM", {})));
var P = function (_) {
  var _nativeConstructor = s;
  function s() {
    var t;
    (t = Reflect.construct(_, [], new.target || _nativeConstructor) || this).turboMode = {
      animStagger: 0,
      speed: .16,
      characterFireSpeed: 1.8,
      fireBallSpeed: 3.2,
      totalTimesFireBallTime: .5
    }, t.normalMode = {
      animStagger: .03,
      speed: .23,
      characterFireSpeed: 1.4,
      fireBallSpeed: 1.85,
      totalTimesFireBallTime: .5
    }, t._isTurbo = !1, t.canQuickStop = !1, t.quickStopCount = 0, t.canQuickStopEarlySpin = !1, t.useProEffect = !0, t.stopOnBigWinPrize = !1, t.stopOnJpPrize = !0, t.stopOnFg = !0;
    var e = _dependency8.default.getLanguageParam(),
      s = "assets/spine";
    return t.data = {
      reelConfig: t.normalMode,
      filePaths: {
        common: "assets/texture/common",
        localeSpriteFrame: "assets/texture/locale/" + e,
        font: "assets/font",
        symbolsSpriteAtlas: "assets/atlas/symbols",
        symbolsSpriteBlurAtlas: "assets/atlas/symbolsBlur",
        symbolsBGAtlas: "assets/atlas/symbols_bg",
        symbolsBlurBGAtlas: "assets/atlas/symbols_bg_blur",
        symbolsSpriteFrame: "assets/texture/symbols",
        symbolsSpriteFrameBlur: "assets/texture/symbolsBlur",
        transitionsSkeletonData: s + "/transition",
        lineSkeletonData: s + "/line",
        bgMgSkeletonData: s + "/bg_mg",
        bgFgSkeletonData: s + "/bg_fg",
        symbolsSkeletonData: s + "/slots/symbols",
        frameSkeletonData: s + "/slots/symbol_frame",
        gameAlertsSkeletonData: s + "/prize",
        spinSkeleton: s + "/spin",
        dragonSkeletonData: "assets/spine/dragon",
        dragonPrefab: "prefabs/normal/DragonView",
        buyFeatureViewPrefab: "prefabs/featureGame/BuyFeatureView",
        luckyWealthViewPrefab: "prefabs/bonusGame/LuckyWealthView",
        heavenlyTreasuresPrefab: "prefabs/bonusGame/HeavenlyTreasures",
        jackpotGameViewPrefab: "prefabs/jackpotGame/JackpotGameView",
        music: "assets/music"
      },
      bigWinAutoCloseTime: 5,
      hasTimesSymbolsDelay: .35,
      nextSpinDelay: 0,
      symbolQuickInTime: .16,
      winAmountTime: 1,
      autoCloseTime: null,
      replayAutoCloseTime: 1
    }, t;
  }
  _dependency.inheritsLoose(s, _), s.Instance = function () {
    return this._instance || (this._instance = new s());
  };
  var a = s.prototype;
  return a.setData = function (_) {
    this.setIsTurbo(_.platform.player.settings.advancedSettings.turbo);
    var t = _dependency5.default.getData(),
      e = t.autoConfirmTime,
      s = t.autoSpinInterval;
    this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, this.data.autoCloseTime = e, this.data.nextSpinDelay = s, this.data.hasTimesSymbolsDelay = s, this.data.bigWinAutoCloseTime = _.engine.definition.prizeAutoNextDelay;
  }, a.sendSettingByTurbo = function () {
    var _ = {
        turbo: _dependency6.default.turbo
      },
      t = {
        turbo: this.isTurbo
      },
      e = _dependency3.ObjectUtils.diffObjects(_, t);
    if (Object.keys(e).length > 0) {
      var s = {
        type: "game",
        data: e
      };
      App.senderManager.get(_dependency7.GameSender).setting(s);
    }
    _dependency6.default.turbo = this.isTurbo;
  }, a.setIsTurbo = function (_, t) {
    void 0 === t && (t = !0), this.isTurbo = _, _dependency9.default.getData().player.settings.advancedSettings.turbo = _, t && this.sendSettingByTurbo();
  }, _dependency.createClass(s, [{
    key: "isTurbo",
    get: function () {
      return this._isTurbo;
    },
    set: function (_) {
      this._isTurbo = _;
    }
  }]), s;
}(_dependency4.BaseModel);
P._instance = null;
_publish("default", P.Instance());
_dependency2.cclegacy._RF.pop();
