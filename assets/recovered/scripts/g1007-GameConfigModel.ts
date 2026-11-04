// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameConfigModel.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-BaseModel";
import * as __dependency_3 from "./framework-DefinitionModel";
import * as __dependency_4 from "./framework-SettingsModel";
import * as __dependency_5 from "./framework-UrlModel";
import * as __dependency_6 from "./framework-ObjectUtils";
import * as __dependency_7 from "./g1007-GameSender";
var __export_0;
export { __export_0 as EBGM };
var __export_1;
export { __export_1 as EBTM };
var __export_2;
export { __export_2 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EBGM":
      __export_0 = value;
      break;
    case "EBTM":
      __export_1 = value;
      break;
    case "default":
      __export_2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, _, e, m, i, a, u, n, o;
var B, c;
__publish({
  EBGM: void 0,
  EBTM: void 0
}), __dependency_1.cclegacy._RF.push({}, "552b0otPEBKH4Mol0jufH0Z", "GameConfigModel", void 0), function (s) {
  s.MAIN_GAME = "assets/music/bgm/BGM_MainGame", s.FREE_GAME = "assets/music/bgm/BGM_FreeGame", s.BGM_JP = "assets/music/bgm/BGM_JP", s.FG_ALERT = "assets/music/bgm/BGM_FreeGame_Loading", s.BIGWIN = "assets/music/bgm/BGM_BigWin_01", s.SUPER_WIN = "assets/music/bgm/BGM_BigWin_02", s.MEGA_WIN = "assets/music/bgm/BGM_BigWin_03", s.ULTRA_WIN = "assets/music/bgm/BGM_BigWin_04", s.LEGEND_WIN = "assets/music/bgm/BGM_BigWin_05", s.BIGWIN_END = "assets/music/bgm/BGM_BigWin_End_01", s.SUPER_WIN_END = "assets/music/bgm/BGM_BigWin_End_02", s.MEGA_WIN_END = "assets/music/bgm/BGM_BigWin_End_03", s.ULTRA_WIN_END = "assets/music/bgm/BGM_BigWin_End_04", s.LEGEND_WIN_END = "assets/music/bgm/BGM_BigWin_End_05", s.TREASURE_BGM = "assets/music/bgm/BGM_Chest", s.TREASURE_BGM_END = "assets/music/bgm/BGM_Chest_End";
}(B || (B = __publish("EBGM", {}))), function (s) {
  s.UI_CLICK = "assets/music/btm/Btm_Button_UI", s.UI_CLOSE_CLICK = "assets/music/btm/Btm_Button_UI_Close", s.FEATURE_CLICK_OPEN = "assets/music/btm/Btm_Feature_Button_Open", s.FEATURE_CLICK_CLOSE = "assets/music/btm/Btm_Feature_Button_Close", s.FEATURE_SELECT_OPEN = "assets/music/btm/Btm_FeatureSelect_Button_Open", s.FEATURE_SELECT_CLOSE = "assets/music/btm/Btm_FeatureSelect_Button_Close", s.FEATURE_SELECT_BUY = "assets/music/btm/Btm_FeatureSelect_Button_Buy", s.XTRA_OPEN = "assets/music/btm/Btm_XtraBet_Open", s.XTRA_CLOSE = "assets/music/btm/Btm_XtraBet_Close", s.SPIN = "assets/music/btm/Btm_Button_Spin", s.SYMBOL_OUT = "assets/music/btm/Btm_Spin", s.SYMBOL_IN = "assets/music/btm/Btm_SpinStop", s.SYMBOL_OUT_FAST = "assets/music/btm/Btm_Spin_Fast", s.SYMBOL_IN_FAST = "assets/music/btm/Btm_SpinStop_Fast", s.SYMBOL_EXPECT_IN = "assets/music/btm/Btm_ReelSpeedUp_SpinStop", s.SYMBOL_02_WIN = "assets/music/btm/Btm_Symbol_Win_02", s.SYMBOL_03_WIN = "assets/music/btm/Btm_Symbol_Win_03", s.SYMBOL_04_WIN = "assets/music/btm/Btm_Symbol_Win_04", s.SYMBOL_05_WIN = "assets/music/btm/Btm_Symbol_Win_05", s.SYMBOL_06_WIN = "assets/music/btm/Btm_Symbol_Win_06", s.SYMBOL_REMOVE = "assets/music/btm/Btm_Symbol_Match_Clear", s.CREATE_WILD = "assets/music/btm/Btm_Symbol_Wild_Show", s.CURRENT_SYMBOLS_FALL = "assets/music/btm/Btm_Symbol_Win_SpinStop_01", s.SYMBOLS_RECHARGE = "assets/music/btm/Btm_Symbol_Win_SpinStop_02", s.RUN_SCORE = "assets/music/btm/Btm_Symbol_Win_Scoring", s.RUN_SCORE_02 = "assets/music/btm/Btm_Symbol_Win_Scoring02", s.RUN_SCORE_03 = "assets/music/btm/Btm_Symbol_Win_Scoring03", s.CREATE_GROUP_SYMBOL = "assets/music/btm/Btm_Symbol_Giant_Transform", s.SCATTER_HIT_01 = "assets/music/btm/Btm_Scatter_Hit_01", s.SCATTER_HIT_02 = "assets/music/btm/Btm_Scatter_Hit_02", s.SCATTER_HIT_03 = "assets/music/btm/Btm_Scatter_Hit_03", s.SCATTER_HIT_04 = "assets/music/btm/Btm_Scatter_Hit_04", s.SCATTER_HIT_05 = "assets/music/btm/Btm_Scatter_Hit_05", s.SCATTER_WIN = "assets/music/btm/Btm_BonusAlarm", s.NORMAL_EXPECT = "assets/music/btm/Btm_ReelSpeedUp", s.RECHARGE_EXPECT_HEARTBEAT = "assets/music/btm/Btm_ReelSpeedUp_HeartBeat", s.RECHARGE_EXPECT_FIRE = "assets/music/btm/Btm_ReelSpeedUp_Fire", s.CHAR_TRANS_4X4 = "assets/music/btm/Btm_Char_Skill_01", s.CHAR_TRANS_2X2_3X3 = "assets/music/btm/Btm_Char_Skill_02", s.CHAR_HIT_REEL = "assets/music/btm/Btm_Char_Skill_03", s.CHAR_FULL_EFFECT = "assets/music/btm/Btm_Char_Skill_04", s.MULTIPLE_MOVE_01 = "assets/music/btm/Btm_Multi_Upgrade_01", s.MULTIPLE_MOVE_02 = "assets/music/btm/Btm_Multi_Upgrade_02", s.MULTIPLE_MOVE_03 = "assets/music/btm/Btm_Multi_Upgrade_03", s.MULTIPLE_MOVE_04 = "assets/music/btm/Btm_Multi_Upgrade_04", s.MULTIPLE_MOVE_05 = "assets/music/btm/Btm_Multi_Upgrade_05", s.MULTIPLE_WIN_01 = "assets/music/btm/Btm_Multi_Upgrade_HIT_01", s.MULTIPLE_WIN_02 = "assets/music/btm/Btm_Multi_Upgrade_HIT_02", s.MULTIPLE_WIN_03 = "assets/music/btm/Btm_Multi_Upgrade_HIT_03", s.MULTIPLE_WIN_04 = "assets/music/btm/Btm_Multi_Upgrade_HIT_04", s.MULTIPLE_WIN_05 = "assets/music/btm/Btm_Multi_Upgrade_HIT_05", s.MULTIPLE_SPECIFY = "assets/music/btm/Btm_Multi_Upgrade_Glow", s.FG_EXTRA_TIMES = "assets/music/btm/Btm_Fg_BonusRetrigger", s.FG_RESULT = "assets/music/btm/Btm_Fg_Result", s.FG_RESULT_END = "assets/music/btm/Btm_Fg_Result_End", s.JP_HIT = "assets/music/btm/Btm_JP_Hit", s.JP_WIN = "assets/music/btm/Btm_JPAlarm", s.JP_SIX_STAR_SHOW = "assets/music/btm/Btm_jp_Preview", s.JP_TRANS_IN = "assets/music/btm/Btm_jp_transform_in", s.JP_BOX_OPEN = "assets/music/btm/Btm_jp_select", s.JP_SELECT_COMPLETED = "assets/music/btm/Btm_jp_confirm", s.JP_RESULT = "assets/music/btm/Btm_JP_result", s.JP_RESULT_CHEST_MONEY = "assets/music/btm/Btm_JP_result_Chest_Money", s.SYMBOL_02_5X5_WIN = "assets/music/btm/Btm_Symbol_MaxWin_02", s.SYMBOL_03_5X5_WIN = "assets/music/btm/Btm_Symbol_MaxWin_03", s.SYMBOL_04_5X5_WIN = "assets/music/btm/Btm_Symbol_MaxWin_04", s.SYMBOL_05_5X5_WIN = "assets/music/btm/Btm_Symbol_MaxWin_05", s.REEL_XTRA_BET_ON = "assets/music/btm/Btm_XtraBet_OpenFX", s.BIGWIN_ALERT = "assets/music/btm/Btm_BigWin_Alert", s.BTM_CHAR_SKILL_05 = "assets/music/btm/Btm_Char_Skill_05", s.Btm_FG_TRANSITION = "assets/music/btm/Btm_Fg_Transition", s.BTM_FG_TRANSITION_SPIN = "assets/music/btm/Btm_Fg_TransitionSpin", s.BTM_BONUS_ALARM = "assets/music/btm/Btm_BonusAlarm", s.BTM_SPIN_STOP_02 = "assets/music/btm/Btm_SpinStop 02", s.BTM_FG_RESULT_TRANSITION_CLOSE = "assets/music/btm/Btm_Fg_Result_Transition_Close", s.BTM_FG_RESULT_TRANSITION_OPEN = "assets/music/btm/Btm_Fg_Result_Transition_Open", s.BTM_CHAR_SKILL_06 = "assets/music/btm/Btm_Char_Skill_06", s.BTM_FG_TRANSITION_SPIN_OPEN = "assets/music/btm/Btm_Fg_TransitionSpin_Open", s.BTM_SYMBOL_GIANT_TRANSFORM_HUGE = "assets/music/btm/Btm_Symbol_Giant_Transform_Huge", s.BTM_SYMBOL_MATCH_LOCK = "assets/music/btm/Btm_Symbol_Match_Lock", s.BTM_MULTI_UPGRADE_RESET = "assets/music/btm/Btm_Multi_Upgrade_Reset";
}(c || (c = __publish("EBTM", {})));
var b = function (s) {
  function e() {
    var t;
    (t = Reflect.construct(s, [], new.target || this.constructor) || this)._isTurbo = !1, t.canQuickStop = !1, t.stopOnJpPrize = !0, t.stopOnFg = !0, t.symbolsOutResolved = !1, t.isRankReplayMode = !1, t.isHoldSpaceDown = !1, t.isPushSpin = !1, t.turboMode = {
      symbolOutTime: .25,
      fallTime: .18,
      currentFallTime: .13,
      symbolDelay: 0,
      overPosTime: .08,
      backTime: .05,
      overPosOffset: 4
    }, t.normalMode = {
      symbolOutTime: .35,
      fallTime: .25,
      currentFallTime: .2,
      symbolDelay: .02,
      overPosTime: .08,
      backTime: .04,
      overPosOffset: 5
    };
    var _ = __dependency_5.default.getLanguageParam();
    return t.data = {
      reelConfig: t.normalMode,
      filePaths: {
        common: "assets/texture/common",
        localeSpriteFrame: "assets/texture/locale/" + _,
        font: "assets/font",
        symbolsSpriteFrame: "assets/texture/symbols",
        normalSymbolsSkeletonData: "assets/spine/symbols/normalSymbol",
        groupSymbolsSkeletonData: "assets/spine/symbols/groupSymbol",
        symbolPrefab: "prefabs/GameSymbol",
        spinSkeleton: "assets/spine/spin/spin",
        transitionsSkeletonData: "assets/spine/transition",
        jpSummarySkeletonData: "assets/spine/jp",
        backgroundSkeletonData: "assets/spine/background",
        bgm: "assets/music/bgm",
        btm: "assets/music/btm"
      },
      bigwinAutoCloseTime: null,
      fgAlertAutoCloseTime: null,
      replayAutoCloseTime: 1,
      winAmountTime: 1.5,
      turboSpeedUp: 1.5,
      quickStopDelay: .35,
      isXtraBetOn: !1,
      autoSpinInterval: 0
    }, t;
  }
  __dependency_0.inheritsLoose(e, s), e.Instance = function () {
    return this._instance || (this._instance = new e());
  };
  var m = e.prototype;
  return m.setData = function (s) {
    var t = __dependency_3.default.getData(),
      _ = t.autoConfirmTime,
      e = t.prizeAutoNextDelay,
      m = t.autoSpinInterval;
    this.data.autoSpinInterval = m, this.data.fgAlertAutoCloseTime = _, this.data.bigwinAutoCloseTime = e, this.setIsTurbo(s.platform.player.settings.advancedSettings.turbo);
  }, m.sendSettingByTurbo = function () {
    var s = {
        turbo: __dependency_4.default.turbo
      },
      t = {
        turbo: this.isTurbo
      },
      _ = __dependency_6.ObjectUtils.diffObjects(s, t);
    if (Object.keys(_).length > 0) {
      var e = {
        type: "game",
        data: _
      };
      App.senderManager.get(__dependency_7.GameSender).setting(e);
    }
    __dependency_4.default.turbo = this.isTurbo;
  }, m.setIsTurbo = function (s, t) {
    void 0 === t && (t = !0), this._isTurbo = s, this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, t && this.sendSettingByTurbo();
  }, m.setIsXtraBetOn = function (s) {
    this.data.isXtraBetOn = s;
  }, __dependency_0.createClass(e, [{
    key: "isTurbo",
    get: function () {
      return this._isTurbo;
    }
  }]), e;
}(__dependency_2.BaseModel);
b._instance = null;
__publish("default", b.Instance());
__dependency_1.cclegacy._RF.pop();
