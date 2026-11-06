import "../../shared/scripts/main-Application";
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UrlUtils";
import * as _dependency4 from "../../shared/scripts/main-BaseModel";
import * as _dependency5 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency7 from "../../shared/scripts/slotFramework-UrlModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency9 from "./g1009-GameSender";
import * as _dependency0 from "./g1009-GameData";
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
var s, e, _, i, a, m, o, n, r, u, l;
var b, c;
_publish({
  EBGM: void 0,
  EBTM: void 0
}), _dependency2.cclegacy._RF.push({}, "e5bb6o7O65Hert4BN+LmyiY", "GameConfigModel", void 0), function (t) {
  t.MAIN_GAME = "assets/music/bgm/BGM_MainGame", t.FREE_GAME = "assets/music/bgm/BGM_FreeGame", t.SPECIAL_FREE_GAME = "assets/music/bgm/BGM_SpecialFreeGame";
}(b || (b = _publish("EBGM", {}))), function (t) {
  t.UI_CLICK = "assets/music/btm/Btm_Button_UI", t.UI_CLOSE_CLICK = "assets/music/btm/Btm_Button_UI_Close", t.SPIN = "assets/music/btm/Btm_Button_Spin", t.FREE_GAME_IN = "assets/music/btm/Btm_Fg_Transition", t.FREE_GAME_OUT = "assets/music/btm/Btm_Fg_Result", t.SYMBOL_WIN = "assets/music/btm/Btm_Symbol_Win", t.SYMBOL_BREAK = "assets/music/btm/Btm_Symbol_Clear", t.SYMBOL_TURBO_FALL_OUT = "assets/music/btm/Btm_Spin_Fast", t.SYMBOL_TURBO_FALL_IN = "assets/music/btm/Btm_SpinStop_Fast", t.SYMBOL_NORMAL_FALL_OUT = "assets/music/btm/Btm_Spin", t.SYMBOL_NORMAL_FALL_IN = "assets/music/btm/Btm_SpinStop", t.FIREBALL_HIT = "assets/music/btm/Btm_Special_Symbol_hit_01", t.FIREBALL_HIT_100X = "assets/music/btm/Btm_Special_Symbol_hit_01_x100", t.RARE_FIREBALL_HIT = "assets/music/btm/Btm_Special_Symbol_hit_02", t.RARE_FIREBALL_HIT_100X = "assets/music/btm/Btm_Special_Symbol_hit_02_x100", t.MG_GIRL_WIN = "assets/music/btm/Btm_Char01_Skill_01", t.TIGER_WIN = "assets/music/btm/Btm_Char02_Skill_01", t.FG_GIRL_WIN = "assets/music/btm/Btm_Char03_Skill_01", t.SMALL_PRIZE_IN = "assets/music/btm/Btm_MegaWin_Intro", t.ULTRA_IN = "assets/music/btm/Btm_UltraWin_Intro", t.LEGEND_IN = "assets/music/btm/Btm_LegendaryWin_Intro", t.WIN_LOOP = "assets/music/btm/Btm_Win", t.S_PRIZE_LOOP = "assets/music/btm/Btm_MegaWin", t.L_PRIZE_LOOP = "assets/music/btm/Btm_LegendaryWin", t.SCATTER_IN = "assets/music/btm/Btm_Scatter_Hit", t.SCATTER_IN_X2 = "assets/music/btm/Btm_Scatter_Hit_Fast", t.SPG_SCATTER_IN = "assets/music/btm/Btm_Sfg_Scatter_Hit", t.SPG_SCATTER_IN_X2 = "assets/music/btm/Btm_Sfg_Scatter_Hit_Fast", t.SCATTER_WIN = "assets/music/btm/Btm_Fg_BonusAlarm", t.TIMES_SYMBOL_UPGRADE = "assets/music/btm/Btm_Special_Symbol_Upgrade", t.TIMES_MOVING = "assets/music/btm/Btm_Special_Symbol_Fx_Win", t.TOTAL_TIMES_UPGRADE = "assets/music/btm/Btm_FG_Multi_win", t.SYMBOL_HIT = "assets/music/btm/Btm_Symbol_Drop", t.TRANSITION = "assets/music/btm/Btm_Fg_Transition_Spin", t.SCORE = "assets/music/btm/Btm_FG_Multi_apply", t.FIREWORKS = "assets/music/btm/Btm_LegendaryWin_Fireworks", t.COUNTING = "assets/music/btm/Btm_Symbol_Win_Scoring", t.FG_REMAINING = "assets/music/btm/Btm_FG_Retrigger_NumberAdd", t.OPEN_FEATURE = "assets/music/btm/Btm_Feature_Button_Open", t.CLOSE_FEATURE = "assets/music/btm/Btm_Feature_Button_Close", t.JACKPOT_WIN = "assets/music/btm/Btm_JP_Alarm", t.JP_POPUP_IN_1 = "assets/music/btm/btm_w_jp_intro_1", t.JP_POPUP_IN_2 = "assets/music/btm/btm_w_jp_intro_2", t.JP_POPUP_LOOP_1 = "assets/music/btm/btm_w_jp_loop_1", t.JP_POPUP_LOOP_2 = "assets/music/btm/btm_w_jp_loop_2", t.JP_MINI_VOCAL = "assets/music/btm/btm_w_jp_mini_vocal", t.JP_MINOR_VOCAL = "assets/music/btm/btm_w_jp_minor_vocal", t.JP_MAJOR_VOCAL = "assets/music/btm/btm_w_major_vocal", t.JP_GRAND_VOCAL = "assets/music/btm/btm_w_grand_vocal", t.BIG_VOCAL = "assets/music/btm/btm_w_big_vocal", t.SUPER_VOCAL = "assets/music/btm/btm_w_super_vocal", t.MEGA_VOCAL = "assets/music/btm/btm_w_mega_vocal", t.ULTRA_VOCAL = "assets/music/btm/btm_w_ultra_vocal", t.LEGENDARY_VOCAL = "assets/music/btm/btm_w_legendary_vocal", t.TIMES_SPLIT_Lv1 = "assets/music/btm/Btm_Sfg_Special_Symbol_Copy_Lv1", t.TIMES_SPLIT_Lv2 = "assets/music/btm/Btm_Sfg_Special_Symbol_Copy_Lv2", t.TIMES_SPLIT_Lv3 = "assets/music/btm/Btm_Sfg_Special_Symbol_Copy_Lv3", t.TIMES_LOCK = "assets/music/btm/Btm_Sfg_Special_Symbol_lock", t.SPECIAL_FREE_GAME_IN = "assets/music/btm/Btm_Sfg_Transition", t.SPECIAL_FREE_GAME_OUT = "assets/music/btm/Btm_Sfg_Result", t.GOLDEN_FG_SYMBOL_CHA_LV1 = "assets/music/btm/Btm_Sfg_Symbol_Lock_Trigger_Lv1", t.GOLDEN_FG_SYMBOL_CHA_LV2 = "assets/music/btm/Btm_Sfg_Symbol_Lock_Trigger_Lv2", t.GOLDEN_FG_SYMBOL_CHA_LV3 = "assets/music/btm/Btm_Sfg_Symbol_Lock_Trigger_Lv3", t.GOLDEN_FG_SYMBOL_CHB_LV1 = "assets/music/btm/Btm_Sfg_Symbol_Copy_Trigger_Lv1", t.GOLDEN_FG_SYMBOL_CHB_LV2 = "assets/music/btm/Btm_Sfg_Symbol_Copy_Trigger_Lv2", t.GOLDEN_FG_SYMBOL_CHB_LV3 = "assets/music/btm/Btm_Sfg_Symbol_Copy_Trigger_Lv3", t.SCATTER_SYMBOL_INTRO = "assets/music/btm/Btm_Sfg_BonusAlarm", t.TIGER_ANIM_VOICE_LV1 = "assets/music/btm/Btm_Sfg_Char02_Skill_Lv1", t.TIGER_ANIM_VOICE_LV2 = "assets/music/btm/Btm_Sfg_Char02_Skill_Lv2", t.TIGER_ANIM_VOICE_LV3 = "assets/music/btm/Btm_Sfg_Char02_Skill_Lv3", t.FG_GIRL_VOICE_LV1 = "assets/music/btm/Btm_Sfg_Char03_Skill_Lv1", t.FG_GIRL_VOICE_LV2 = "assets/music/btm/Btm_Sfg_Char03_Skill_Lv2", t.FG_GIRL_VOICE_LV3 = "assets/music/btm/Btm_Sfg_Char03_Skill_Lv3";
}(c || (c = _publish("EBTM", {})));
var S = function (t) {
  var _nativeConstructor = _;
  function _() {
    var s;
    (s = Reflect.construct(t, [], new.target || _nativeConstructor) || this).turboMode = {
      animStagger: 0,
      speed: .16,
      characterFireSpeed: 2.5,
      fireBallSpeed: 2.8,
      totalTimesFireBallTime: .5
    }, s.normalMode = {
      animStagger: .03,
      speed: .23,
      characterFireSpeed: 1.4,
      fireBallSpeed: 1.4,
      totalTimesFireBallTime: .5
    }, s._isTurbo = !1, s.canQuickStop = !1, s.quickStopCount = 0, s.canQuickStopEarlySpin = !1, s.useProEffect = !0, s.stopOnBigwinPrize = !1, s.stopOnJpPrize = !0, s.stopOnFg = !0;
    var e = _dependency7.default.getLanguageParam(),
      _ = _dependency3.default.getViewModeParam();
    return s.data = {
      reelConfig: s.normalMode,
      filePaths: {
        symbolsSpriteFrame: "assets/texture/symbols/" + _,
        symbolPrefab: "prefabs/" + _ + "/Symbol",
        symbolsSkeletonData: "assets/spine/" + _ + "/symbol",
        winCashPrefab: "prefabs/" + _ + "/WinCash",
        fireBallPrefab: "prefabs/" + _ + "/Fireball",
        gameAlertsSkeletonData: "assets/spine/" + _ + "/prize",
        spinSkeleton: "assets/spine/" + _ + "/spin",
        common: "assets/texture/common/" + _,
        localeSpriteFrame: "assets/texture/locale/" + _ + "/" + e,
        font: "assets/font/" + _,
        timesMovingPrefab: "prefabs/" + _ + "/TimesMoving",
        blueTimesMovingPrefab: "prefabs/" + _ + "/BlueTimesMoving",
        purpleTimesMovingPrefab: "prefabs/" + _ + "/PurpleTimesMoving",
        transitionsSkeletonData: "assets/spine/" + _ + "/transition",
        buyFeatureBtnPrefab: "prefabs/" + _ + "/BuyFeatureButton",
        buyFeatureItemPrefab: "prefabs/" + _ + "/BuyFeatureItem",
        splitBlueTimesMovingPrefab: "prefabs/" + _ + "/Split",
        freeGameAlertViewPrefab: "prefabs/" + _ + "/FGAlertView",
        introSkeleton: "assets/spine/intro",
        testSpinDatas: "script/data/testSpin",
        testCloseSpinDatas: "script/data/testCloseSpin"
      },
      bigwinAutoCloseTime: 5,
      hasTimesSymbolsDelay: .35,
      nextSpinDelay: 0,
      symbolQuickInTime: .16,
      winAmountTime: 1.75,
      showTimesMoveDelay: .8,
      autoCloseTime: null
    }, s;
  }
  _dependency.inheritsLoose(_, t), _.Instance = function () {
    return this._instance || (this._instance = new _());
  };
  var a = _.prototype;
  return a.setData = function (t) {
    this.setIsTurbo(t.platform.player.settings.advancedSettings.turbo), App.dataCenter.get(_dependency0.default).originTurbo = t.platform.player.settings.advancedSettings.turbo;
    var s = _dependency5.default.getData(),
      e = s.autoConfirmTime,
      _ = s.autoSpinInterval;
    this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, this.data.autoCloseTime = e, this.data.nextSpinDelay = _, this.data.hasTimesSymbolsDelay = _, this.data.bigwinAutoCloseTime = t.engine.definition.prizeAutoNextDelay;
  }, a.setNewData = function (t) {
    this.setIsTurbo(t.platform.player.settings.advancedSettings.turbo), App.dataCenter.get(_dependency0.default).originTurbo = t.platform.player.settings.advancedSettings.turbo;
    var s = _dependency5.default.getData(),
      e = s.autoConfirmTime,
      _ = s.autoSpinInterval;
    this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, this.data.autoCloseTime = e, this.data.nextSpinDelay = _, this.data.hasTimesSymbolsDelay = _, this.data.bigwinAutoCloseTime = t.engine.definition.prizeAutoNextDelay;
  }, a.sendSettingByTurbo = function () {
    var t = {
        turbo: _dependency6.default.turbo
      },
      s = {
        turbo: this.isTurbo
      },
      e = _dependency8.ObjectUtils.diffObjects(t, s);
    if (Object.keys(e).length > 0) {
      var _ = {
        type: "game",
        data: e
      };
      App.senderManager.get(_dependency9.GameSender).setting(_);
    }
    _dependency6.default.turbo = this.isTurbo;
  }, a.setIsTurbo = function (t, s) {
    void 0 === s && (s = !0), this._isTurbo = t, this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, s && this.sendSettingByTurbo();
  }, _dependency.createClass(_, [{
    key: "isTurbo",
    get: function () {
      return this._isTurbo;
    }
  }]), _;
}(_dependency4.BaseModel);
S._instance = null;
_publish("default", S.Instance());
_dependency2.cclegacy._RF.pop();
