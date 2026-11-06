import "../../shared/scripts/main-Application";
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency4 from "../../shared/scripts/main-BaseModel";
import * as _dependency5 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency7 from "./g1008-GameSender";
import * as _dependency8 from "./g1008-GameData";
import * as _dependency9 from "../../shared/scripts/slotFramework-UrlModel";
import * as _dependency0 from "../../shared/scripts/main-UrlUtils";
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
var s, e, i, a, m, _, o, n, b, u, r;
var c, l;
_publish({
  EBGM: void 0,
  EBTM: void 0
}), _dependency2.cclegacy._RF.push({}, "c6c978nSfVELbVckgNmMCji", "GameConfigModel", void 0), function (t) {
  t.MAINGAME = "assets/music/bgm/bgm_mg", t.FREEGAME = "assets/music/bgm/bgm_fg", t.FG_IN_LOOP = "assets/music/btm/btm_fg_in_loop";
}(c || (c = _publish("EBGM", {}))), function (t) {
  t.SPIN = "assets/music/btm/btm_spin", t.CH_LOOP = "assets/music/btm/btm_ch_loop", t.FREEGAME_OUT = "assets/music/btm/btm_fg_out", t.SYMBOL_WIN = "assets/music/btm/btm_fx_symbol_frame", t.TIMES_SYMBOL_01 = "assets/music/btm/btm_muti_function_1", t.TIMES_SYMBOL_02 = "assets/music/btm/btm_muti_function_2", t.SYMBOL_TURBO_FALL_OUT = "assets/music/btm/btm_fall_auto_1", t.SYMBOL_TURBO_FALL_IN = "assets/music/btm/btm_fall_auto_2", t.SYMBOL_NORMAL_FALL_OUT = "assets/music/btm/btm_fall_normal_1", t.SYMBOL_NORMAL_FALL_IN = "assets/music/btm/btm_fall_normal_2", t.FIREBALL_IN = "assets/music/btm/btm_fx_symbol_function_1", t.FIREBALL_HIT = "assets/music/btm/btm_fx_symbol_function_2", t.FIREBALL_HIT_100X = "assets/music/btm/btm_fx_symbol_function_2_100x", t.SMALL_PRIZE_IN = "assets/music/btm/btm_w_in_prize_s", t.ULTRA_IN = "assets/music/btm/btm_w_ultra", t.LEGEND_IN = "assets/music/btm/btm_w_legend", t.WIN_LOOP = "assets/music/btm/btm_w_loop", t.S_PRIZE_LOOP = "assets/music/btm/btm_w_loop_prize_s", t.L_PRIZE_LOOP = "assets/music/btm/btm_w_loop_prize_l", t.JP_WIN = "assets/music/btm/btm_w_jp", t.FULLCOMBO = "assets/music/btm/btm_fc", t.SCATTER_IN = "assets/music/btm/btm_scatter_in", t.SCATTER_IN_X2 = "assets/music/btm/btm_scatter_in_x2", t.SCATTER_WIN = "assets/music/btm/btm_scatter_win", t.TIMES_SYMBOL_UPGRADE = "assets/music/btm/btm_muti_upgrade", t.TIMES_MOVING = "assets/music/btm/btm_muti_total", t.TOTAL_TIMES_UPGRADE = "assets/music/btm/btm_totalTimes_upgrade", t.MUTI_TOTAL_01 = "assets/music/btm/btm_muti_total_01", t.MUTI_TOTAL_02 = "assets/music/btm/btm_muti_total_02", t.BTM_CH_01 = "assets/music/btm/btm_ch_01", t.BTM_CH_02 = "assets/music/btm/btm_ch_02", t.SYMBOL_FUNCTION_01 = "assets/music/btm/btm_fx_symbol_function_01", t.SYMBOL_FUNCTION_02 = "assets/music/btm/btm_fx_symbol_function_02", t.SYMBOL_FUNCTION_01_100X = "assets/music/btm/btm_fx_symbol_function_01_100x", t.SYMBOL_FUNCTION_02_100X = "assets/music/btm/btm_fx_symbol_function_02_100x", t.TRANSITION = "assets/music/btm/btm_transitions", t.SCORE = "assets/music/btm/btm_score", t.SCORE_PLUS = "assets/music/btm/btm_score_plus", t.FIREWORKS = "assets/music/btm/btm_w_fireworks", t.COUNTING = "assets/music/btm/btm_counting", t.OPEN_FEATURE = "assets/music/btm/btm_open", t.OPEN_SUCCESS = "assets/music/btm/btm_open_success", t.CLOSE_FEATURE = "assets/music/btm/btm_close", t.JACKPOT_WIN = "assets/music/btm/btm_w_jp_line", t.JP_POPUP_IN_1 = "assets/music/btm/btm_w_jp_intro_1", t.JP_POPUP_IN_2 = "assets/music/btm/btm_w_jp_intro_2", t.JP_POPUP_LOOP_1 = "assets/music/btm/btm_w_jp_loop_1", t.JP_POPUP_LOOP_2 = "assets/music/btm/btm_w_jp_loop_2", t.JP_MINI_VOCAL = "assets/music/btm/btm_w_jp_mini_vocal", t.JP_MINOR_VOCAL = "assets/music/btm/btm_w_jp_minor_vocal", t.JP_MAJOR_VOCAL = "assets/music/btm/btm_w_major_vocal", t.JP_GRAND_VOCAL = "assets/music/btm/btm_w_grand_vocal", t.BIG_VOCAL = "assets/music/btm/btm_w_big_vocal", t.SUPER_VOCAL = "assets/music/btm/btm_w_super_vocal", t.MEGA_VOCAL = "assets/music/btm/btm_w_mega_vocal", t.ULTRA_VOCAL = "assets/music/btm/btm_w_ultra_vocal", t.LEGENDARY_VOCAL = "assets/music/btm/btm_w_legendary_vocal";
}(l || (l = _publish("EBTM", {})));
var f = function (t) {
  var _nativeConstructor = i;
  function i() {
    var s;
    (s = Reflect.construct(t, [], new.target || _nativeConstructor) || this).turboMode = {
      animStagger: 0,
      speed: .16,
      characterFireSpeed: 2.5,
      fireBallSpeed: 3.2,
      totalTimesFireBallTime: .5
    }, s.normalMode = {
      animStagger: .03,
      speed: .23,
      characterFireSpeed: 1.4,
      fireBallSpeed: 1.85,
      totalTimesFireBallTime: .5
    }, s._isTurbo = !1, s.canQuickStop = !1, s.quickStopCount = 0, s.canQuickStopEarlySpin = !1, s.useProEffect = !1, s.stopOnBigwinPrize = !1, s.stopOnJpPrize = !0, s.stopOnFg = !0;
    var e = _dependency9.default.getLanguageParam(),
      i = _dependency0.default.getViewModeParam();
    return s.data = {
      reelConfig: s.normalMode,
      filePaths: {
        symbolsSpriteFrame: "assets/texture/symbols/" + i,
        symbolsSpriteFrameBlur: "assets/texture/symbolsBlur/" + i,
        common: "assets/texture/common/" + i,
        localeSpriteFrame: "assets/texture/locale/" + i + "/" + e,
        font: "assets/font/" + i,
        gameAlertsSkeletonData: "assets/spine/" + i + "/prize",
        spinSkeleton: "assets/spine/" + i + "/spin",
        transitionsSkeletonData: "assets/spine/" + i + "/transition",
        symbolsSkeletonData: "assets/spine/" + i + "/symbol",
        symbolPrefab: "prefabs/" + i + "/Symbol",
        winCashPrefab: "prefabs/" + i + "/WinCash",
        fireBallPrefab: "prefabs/" + i + "/Fireball",
        timesMovingPrefab: "prefabs/" + i + "/TimesMoving",
        blueTimesMovingPrefab: "prefabs/" + i + "/BlueTimesMoving",
        purpleTimesMovingPrefab: "prefabs/" + i + "/PurpleTimesMoving",
        buyFeatureBtnPrefab: "prefabs/" + i + "/BuyFeatureButton",
        bgm: "assets/music/bgm",
        btm: "assets/music/btm"
      },
      bigwinAutoCloseTime: 5,
      hasTimesSymbolsDelay: .35,
      nextSpinDelay: 0,
      symbolQuickInTime: .16,
      winAmountTime: 1.75,
      autoCloseTime: null
    }, s;
  }
  _dependency.inheritsLoose(i, t), i.Instance = function () {
    return this._instance || (this._instance = new i());
  };
  var m = i.prototype;
  return m.setData = function (t) {
    this.setIsTurbo(t.platform.player.settings.advancedSettings.turbo), App.dataCenter.get(_dependency8.default).originTurbo = t.platform.player.settings.advancedSettings.turbo;
    var s = _dependency5.default.getData(),
      e = s.autoConfirmTime,
      i = s.autoSpinInterval;
    this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, this.data.autoCloseTime = e, this.data.nextSpinDelay = i, this.data.hasTimesSymbolsDelay = i, this.data.bigwinAutoCloseTime = t.engine.definition.prizeAutoNextDelay;
  }, m.setNewData = function (t) {
    this.setIsTurbo(t.platform.player.settings.advancedSettings.turbo), App.dataCenter.get(_dependency8.default).originTurbo = t.platform.player.settings.advancedSettings.turbo;
    var s = _dependency5.default.getData(),
      e = s.autoConfirmTime,
      i = s.autoSpinInterval;
    this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, this.data.autoCloseTime = e, this.data.nextSpinDelay = i, this.data.hasTimesSymbolsDelay = i, this.data.bigwinAutoCloseTime = t.engine.definition.prizeAutoNextDelay;
  }, m.sendSettingByTurbo = function () {
    var t = {
        turbo: _dependency6.default.turbo
      },
      s = {
        turbo: this.isTurbo
      },
      e = _dependency3.ObjectUtils.diffObjects(t, s);
    if (Object.keys(e).length > 0) {
      var i = {
        type: "game",
        data: e
      };
      App.senderManager.get(_dependency7.GameSender).setting(i);
    }
    _dependency6.default.turbo = this.isTurbo;
  }, m.setIsTurbo = function (t, s) {
    void 0 === s && (s = !0), this._isTurbo = t, this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, s && this.sendSettingByTurbo();
  }, _dependency.createClass(i, [{
    key: "isTurbo",
    get: function () {
      return this._isTurbo;
    }
  }]), i;
}(_dependency4.BaseModel);
f._instance = null;
_publish("default", f.Instance());
_dependency2.cclegacy._RF.pop();
