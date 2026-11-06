import "../../shared/scripts/main-Application";
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency4 from "../../shared/scripts/main-BaseModel";
import * as _dependency5 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency7 from "./g1011-GameSender";
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
var t, _, e, m, i, a, b, n, c, u;
var o, r;
_publish({
  EBGM: void 0,
  EBTM: void 0
}), _dependency2.cclegacy._RF.push({}, "8bc42sQsSNHA5U9DsfoFpqx", "GameConfigModel", void 0), function (s) {
  s.MAIN_GAME = "assets/music/bgm/main_game", s.FREE_GAME = "assets/music/bgm/free_game", s.TRANSITIONS = "assets/music/bgm/transitions", s.FEVERTIME = "assets/music/bgm/bonus_up", s.BIG_WIN_BG = "assets/music/bgm/big_win_bg";
}(o || (o = _publish("EBGM", {}))), function (s) {
  s.CLICK = "assets/music/btm/btm_normal", s.SPIN = "assets/music/btm/btm_spin", s.REEL_SCROLL = "assets/music/btm/btm_reel_scroll", s.REEL_STOP = "assets/music/btm/new/spin", s.FG_TRANSITION_IN = "assets/music/btm/btm_t_fg_in", s.MG_LINE_BLUE = "assets/music/btm/btm_lineA_mg", s.MG_LINE_RED = "assets/music/btm/btm_lineB_mg", s.FG_LINE_BLUE = "assets/music/btm/btm_lineA_fg", s.FG_LINE_RED = "assets/music/btm/btm_lineB_fg", s.FIRE_FRAME_OUT = "assets/music/btm/btm_fire_symbol_out", s.FIRE_FRAME_OUT_FG = "assets/music/btm/btm_fire_symbol_out_fg", s.ICE_FRAME_OUT = "assets/music/btm/btm_ice_symbol_out", s.FULL_COMBO_FIRE_FRAME_OUT = "assets/music/btm/btm_all_fire_ex", s.FULL_COMBO_ICE_FRAME_OUT = "assets/music/btm/btm_all_ice_ex", s.MG_CH_SON_ACT = "assets/music/btm/btm_mg_chA_act_01", s.MG_CH_SON_ACT_2 = "assets/music/btm/btm_mg_chA_act_02", s.MG_CH_TWO_ACT = "assets/music/btm/btm_mg_chB_act_01", s.SCATTER_WIN = "assets/music/btm/btm_scatter_symbol_win", s.BONUS_HIT_FIRST = "assets/music/btm/btm_bonus_symbol_expect_01", s.BONUS_HIT_SECOND = "assets/music/btm/btm_bonus_symbol_expect_02", s.SCATTER_HIT_FIRST = "assets/music/btm/btm_scatter_symbol_expect_01", s.SCATTER_HIT_SECOND = "assets/music/btm/btm_scatter_symbol_expect_02", s.BONUS_WIN = "assets/music/btm/btm_bonus_symbol_win", s.BONUS_WIN_COMPLETE = "assets/music/btm/btm_trans_confirm2", s.SYMBOL_WILD_HIT = "assets/music/btm/btm_symbol_wild_hit", s.FG_CH_SON_ACT = "assets/music/btm/btm_fg_chA_act_01", s.FG_CH_SON_ACT_LONG = "assets/music/btm/btm_fg_chA_act_02", s.FG_CH_TWO_ACT = "assets/music/btm/btm_fg_chB_act_01 (mp3cut.net)", s.SYMBOL_CHANGE_WILD = "assets/music/btm/btm_symbol_01_wild(牛)", s.SYMBOL_CHANGE_WILD_PLUS = "assets/music/btm/btm_fg_chA_act_03", s.SYMBOL_CHANGE_WILD_PLUS_A = "assets/music/btm/btm_fg_chA_act_03a", s.SYMBOL_CHANGE_WILD_PLUS_B = "assets/music/btm/btm_fg_chA_act_03b", s.SYMBOL_CHANGE_SYMBOL = "assets/music/btm/btm_symbol_02_wild(牛)", s.SYMBOL_CHANGE_SYMBOL_PLUS = "assets/music/btm/btm_fg_chB_act_03 (mp3cut.net)", s.SYMBOL_EXPECT = "assets/music/btm/btm_symbol_expect", s.CHEST_OPEN = "assets/music/btm/btm_chest_open", s.BN_ITEM = "assets/music/btm/btm_bn_item", s.BN_CLOCK = "assets/music/btm/btm_bn_clock", s.BN_START_01 = "assets/music/btm/btm_bn_start_01", s.BN_FIRE = "assets/music/btm/btm_bn_fire", s.BN_TRANSITION_02 = "assets/music/btm/btm_bn_transition_02", s.BN_CLICK = "assets/music/btm/btm_bn_click", s.BN_CONTINUE = "assets/music/btm/btm_bn_continue", s.BN_TW = "assets/music/btm/btm_bn_tw", s.BN_FAILED = "assets/music/btm/btm_bn_failed", s.BN_END = "assets/music/btm/btm_bn_end", s.BN_TRANSITION_01 = "assets/music/btm/btm_bn_transition_01", s.JP_FLIP = "assets/music/btm/btm_jp_flip", s.JP_OUT = "assets/music/btm/jp_out", s.JP_CONFIRM = "assets/music/btm/btm_jp_confirm", s.JP_TRANS = "assets/music/btm/btm_jp_trans", s.FG_CH_SON_IDLE = "assets/music/btm/btm_fg_chA_idle", s.LUCKY_WEALTH = "assets/music/btm/btm_sg_01", s.FALL_MONEY = "assets/music/btm/btm_sg_money", s.BUY_FEATURE_CLICK = "assets/music/btm/btm_fg_board", s.BUY_FEATURE_CONFIRM = "assets/music/btm/btm_fg_start", s.BIG_VOCAL = "assets/music/btm/btm_w_big_vocal", s.SUPER_VOCAL = "assets/music/btm/btm_w_super_vocal", s.MEGA_VOCAL = "assets/music/btm/btm_w_mega_vocal", s.ULTRA_VOCAL = "assets/music/btm/btm_w_ultra_vocal", s.LEGENDARY_VOCAL = "assets/music/btm/btm_w_legendary_vocal", s.SMALL_PRIZE_IN = "assets/music/btm/btm_w_in_prize_s", s.ULTRA_IN = "assets/music/btm/btm_w_ultra", s.LEGEND_IN = "assets/music/btm/btm_w_legend", s.WIN_LOOP = "assets/music/btm/btm_w_loop", s.S_PRIZE_LOOP = "assets/music/btm/btm_w_loop_prize_s", s.L_PRIZE_LOOP = "assets/music/btm/btm_w_loop_prize_l", s.JP_POPUP_IN_1 = "assets/music/btm/btm_w_jp_intro_1", s.JP_POPUP_IN_2 = "assets/music/btm/btm_w_jp_intro_2", s.JP_POPUP_LOOP_1 = "assets/music/btm/btm_w_jp_loop_1", s.JP_POPUP_LOOP_2 = "assets/music/btm/btm_w_jp_loop_2", s.JP_MINI_VOCAL = "assets/music/btm/btm_w_jp_mini_vocal", s.JP_MINOR_VOCAL = "assets/music/btm/btm_w_jp_minor_vocal", s.JP_MAJOR_VOCAL = "assets/music/btm/btm_w_major_vocal", s.JP_GRAND_VOCAL = "assets/music/btm/btm_w_grand_vocal", s.POINT = "assets/music/btm/btm_point", s.MG_WHEEL_STOP = "assets/music/btm/btm_mg_wheel_stop", s.SCATTER_WIN_COMPLETE = "assets/music/btm/new/btm_trans_confirm", s.FG_OUT_INTRO = "assets/music/btm/btm_total_win", s.FU_OUT_DIRECT = "assets/music/btm/btm_total_win_end", s.MONEY_SCROLL = "assets/music/btm/btm_total_win_scroll", s.BONUS_REEL_SCROLL = "assets/music/btm/btm_bonus_reel_scroll", s.BONUS_REEL_SCROLL_SLOW = "assets/music/btm/btm_bonus_reel_slow", s.BONUS_SUCCESS = "assets/music/btm/btm_bonus_success", s.BONUS_FAIL = "assets/music/btm/btm_bonus_fail", s.FULL_COMBO = "assets/music/btm/new/btm_full_combo", s.BTM_TOTAL_POINT = "assets/music/btm/btm_totalpoint", s.BTM_X2 = "assets/music/btm/btm_x2", s.BTM_X3 = "assets/music/btm/btm_x3", s.BTM_X5 = "assets/music/btm/btm_x5", s.SFX_CLICK = "assets/music/btm/new/click", s.SFX_FREE_MULTIPLE = "assets/music/btm/new/free_character_win_ABCD", s.SFX_FREE_WIN = "assets/music/btm/new/free_character_win", s.SFX_FREE_GAME_WILD_DOWN = "assets/music/btm/new/free_game_wild_down", s.SFX_MAIN_CHARACTER_WINA = "assets/music/btm/new/main_character_winA", s.SFX_MAIN_CHARACTER_WINB = "assets/music/btm/new/main_character_winB", s.SFX_MAIN_CHARACTER_WINC = "assets/music/btm/new/main_character_winC", s.SFX_MAIN_CHARACTER_WIND = "assets/music/btm/new/main_character_winD", s.SFX_LINE_WIN = "assets/music/btm/new/win_line", s.SFX_SCORE = "assets/music/btm/new/score", s.SFX_SCATTER = "assets/music/btm/new/scatter", s.SFX_BIG_WIN = "assets/music/btm/new/big_win", s.BIG_WIN_BG = "assets/music/btm/new/big_win_bg", s.BIG_WIN = "assets/music/btm/new/big_win", s.SFX_MAIN_TALLY = "assets/music/btm/new/main_game_tally", s.SFX_FREE_TALLY = "assets/music/btm/new/free_game_tally", s.SFX_JP_DOWN = "assets/music/btm/new/JP_down";
}(r || (r = _publish("EBTM", {})));
var l = function (s) {
  var _nativeConstructor = e;
  function e() {
    var t;
    (t = Reflect.construct(s, [], new.target || _nativeConstructor) || this)._isTurbo = !1, t.isCanStop = !1, t.quickStopCount = 0, t.canQuickStopEarlySpin = !1, t.useProEffect = !0, t.stopOnBigWinPrize = !1, t.stopOnJpPrize = !0, t.stopOnFg = !0, t.isCanSkipTotalWinCash = !1, t.isSendClose = !1, t.normalTempo = {
      animStagger: .5,
      speed: 1,
      characterFireSpeed: 1,
      fireBallSpeed: 1,
      totalTimesFireBallTime: 1
    }, t.turboTempo = {
      animStagger: .2,
      speed: 1,
      characterFireSpeed: 1,
      fireBallSpeed: 1,
      totalTimesFireBallTime: 1
    };
    var _ = _dependency8.default.getLanguageParam();
    return t.data = {
      filePaths: {
        common: "assets/texture/common",
        localeSpriteFrame: "assets/texture/locale/" + _ + "/",
        font: "assets/font",
        symbolsSpriteFrame: "assets/texture/symbols",
        symbolsSpriteFrameBlur: "assets/texture/symbolsBlur",
        symbolsSkeletonData: "assets/spine/New/spine2/high/symbols",
        symbolPrefab: "prefabs/GameSymbol",
        winCashPrefab: "prefabs/WinCash",
        gameAlertsSkeletonData: "assets/spine/prize",
        spinSkeleton: "assets/spine/spin/spin",
        heavenlyTreasures: "prefabs/heavenlyTreasures",
        replayUIViewPPrefab: "prefabs/ReplayUIViewP",
        jackpotSpineDir: "assets/spine/jackpot",
        expectSkeletonData: "assets/spine/symbol_expect",
        shiningSpriteFrame: "assets/animation/F_shining_029",
        wildFrameSpriteFrame: "assets/animation/F_frame_015"
      },
      bigwinAutoCloseTime: 5,
      hasTimesSymbolsDelay: .35,
      nextSpinDelay: 0,
      symbolQuickInTime: .16,
      winAmountTime: 1,
      autoCloseTime: null
    }, t;
  }
  _dependency.inheritsLoose(e, s), e.Instance = function () {
    return this._instance || (this._instance = new e());
  };
  var i = e.prototype;
  return i.setData = function (s) {
    this.setIsTurbo(s.platform.player.settings.advancedSettings.turbo);
    var t = _dependency5.default.getData(),
      _ = t.autoConfirmTime,
      e = t.autoSpinInterval;
    this.data.autoCloseTime = _, this.data.nextSpinDelay = e, this.data.hasTimesSymbolsDelay = e, this.data.bigwinAutoCloseTime = s.engine.definition.prizeAutoNextDelay;
  }, i.sendSettingByTurbo = function () {
    var s = {
        turbo: _dependency6.default.turbo
      },
      t = {
        turbo: this.isTurbo
      },
      _ = _dependency3.ObjectUtils.diffObjects(s, t);
    if (Object.keys(_).length > 0) {
      var e = {
        type: "game",
        data: _
      };
      App.senderManager.get(_dependency7.GameSender).setting(e);
    }
    _dependency6.default.turbo = this.isTurbo;
  }, i.setIsTurbo = function (s, t) {
    void 0 === t && (t = !0), this._isTurbo = s, _dependency9.default.getData().player.settings.advancedSettings.turbo = s, t && this.sendSettingByTurbo();
  }, _dependency.createClass(e, [{
    key: "tempoConfig",
    get: function () {
      return this._isTurbo ? this.turboTempo : this.normalTempo;
    }
  }, {
    key: "isTurbo",
    get: function () {
      return this._isTurbo;
    }
  }]), e;
}(_dependency4.BaseModel);
l._instance = null;
_publish("default", l.Instance());
_dependency2.cclegacy._RF.pop();
