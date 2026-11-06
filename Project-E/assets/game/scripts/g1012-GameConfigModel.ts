import "../../shared/scripts/main-Application";
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency4 from "../../shared/scripts/main-BaseModel";
import * as _dependency5 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency7 from "./g1012-GameSender";
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
var e, t, a, i, n, m, o, _, r, b;
var u, l;
_publish({
  EBGM: void 0,
  EBTM: void 0
}), _dependency2.cclegacy._RF.push({}, "8bc42sQsSNHA5U9DsfoFpqx", "GameConfigModel", void 0), function (s) {
  s.MAINGAME = "assets/music/bgm/bgm_mg", s.FREEGAME = "assets/music/bgm/bgm_fg", s.FEVERTIME = "assets/music/bgm/bonus_up";
}(u || (u = _publish("EBGM", {}))), function (s) {
  s.CLICK = "assets/music/btm/btm_normal", s.DRAGON_LV1 = "assets/music/btm/btm_dargon_lv1", s.DRAGON_LV2 = "assets/music/btm/btm_dargon_lv2", s.DRAGON_LV3 = "assets/music/btm/btm_dargon_lv3", s.SMALL_PRIZE_IN = "assets/music/btm/btm_w_in_prize_s", s.WIN_LOOP = "assets/music/btm/btm_w_loop", s.S_PRIZE_LOOP = "assets/music/btm/btm_w_loop_prize_s", s.L_PRIZE_LOOP = "assets/music/btm/btm_w_loop_prize_l", s.MAIN_CHARACTER_WIN_A = "assets/music/btm/new/main_character_winA", s.MAIN_CHARACTER_WIN_B = "assets/music/btm/new/main_character_winB", s.MAIN_CHARACTER_WIN_C = "assets/music/btm/new/main_character_winC", s.FREE_CHARACTER_WIN_A = "assets/music/btm/new/free_character_winA", s.FREE_CHARACTER_WIN_B = "assets/music/btm/new/free_character_winB", s.FREE_CHARACTER_LAUGH = "assets/music/btm/new/free_laugh", s.BTM_POINT = "assets/music/btm/new/btm_point", s.MG_WIN_LINE = "assets/music/btm/new/win_line", s.BTM_BATS = "assets/music/btm/new/btm_bats", s.FULL_COMBO_FRAME = "assets/music/btm/new/btm_elect", s.FULL_COMBO = "assets/music/btm/new/btm_full_combo", s.JACKPOT_WIN = "assets/music/btm/btm_w_jp_line", s.JP_POPUP_IN_1 = "assets/music/btm/btm_w_jp_intro_1", s.JP_POPUP_IN_2 = "assets/music/btm/btm_w_jp_intro_2", s.JP_POPUP_LOOP_1 = "assets/music/btm/btm_w_jp_loop_1", s.JP_POPUP_LOOP_2 = "assets/music/btm/btm_w_jp_loop_2", s.JP_MINI_VOCAL = "assets/music/btm/btm_w_jp_mini_vocal", s.JP_MINOR_VOCAL = "assets/music/btm/btm_w_jp_minor_vocal", s.JP_MAJOR_VOCAL = "assets/music/btm/btm_w_major_vocal", s.JP_GRAND_VOCAL = "assets/music/btm/btm_w_grand_vocal", s.TRANSITION_IN_AND_OUT = "assets/music/btm/new/transitions_in&out", s.TRANSITIONS = "assets/music/btm/new/transitions", s.TRANSITION_ITEM_CLICK = "assets/music/btm/new/transitions_click", s.REEL_STOP = "assets/music/btm/new/spin", s.SPIN = "assets/music/btm/new/click", s.SCATTER_HIT = "assets/music/btm/new/scatter", s.SCATTER_WIN = "assets/music/btm/new/btm_scatter", s.SYMBOL_EXPECT = "assets/music/btm/new/tally", s.BIG_WIN_BG = "assets/music/btm/new/big_win_bg", s.BIG_WIN = "assets/music/btm/new/big_win", s.MEGA_CHARACTER = "assets/music/btm/new/btm_w_big", s.ULTRA_CHARACTER = "assets/music/btm/new/btm_w_mega", s.LEGENDARY_CHARACTER = "assets/music/btm/new/btm_w_super";
}(l || (l = _publish("EBTM", {})));
var c = [.25, .5, 1, 1.5],
  p = function (s) {
    var _nativeConstructor = a;
    function a() {
      var e;
      (e = Reflect.construct(s, [], new.target || _nativeConstructor) || this)._isTurbo = !1, e.isCanStop = !1, e.quickStopCount = 0, e.canQuickStopEarlySpin = !1, e.useProEffect = !0, e.stopOnBigwinPrize = !1, e.stopOnJpPrize = !0, e.stopOnFg = !0, e.isCanSkipTotalWinCash = !1, e.isSendClose = !1, e.normalTempo = {
        animStagger: .5,
        symbolWinTimeScale: 1,
        totalWinTweenTime: 1.5
      }, e.turboTempo = {
        animStagger: .2,
        symbolWinTimeScale: 1.5,
        totalWinTweenTime: 1.5
      };
      var t = _dependency8.default.getLanguageParam();
      return e.data = {
        tempoConfig: e.normalTempo,
        filePaths: {
          common: "assets/texture/common",
          localeSpriteFrame: "assets/texture/locale/" + t,
          font: "assets/font",
          symbolsSpriteFrame: "assets/texture/symbols",
          symbolsSpriteFrameBlur: "assets/texture/symbolsBlur",
          jackpotSpineDir: "assets/spine/new/jackpot",
          symbolsSkeletonData: "assets/spine/new/symbols",
          frameSkeletonData: "assets/spine/symbol_frame",
          lineItemPrefab: "prefabs/LineItem",
          lineSkeletonData: "assets/spine/line",
          fullComboSkeleton: "assets/spine/new/full_combo",
          alertBgSpineDir: "assets/spine/new/alert_bg",
          lineSpriteFrame: "assets/texture/common/new/common/line",
          bgMgSkeletonData: "assets/spine/new/A_bg",
          bgMgBatSkeletonData: "assets/spine/new/A_bat",
          symbolPrefab: "prefabs/GameSymbol",
          winCashPrefab: "prefabs/WinCash",
          gameAlertsSkeletonData: "assets/spine/prize",
          spinSkeleton: "assets/spine/spin/spin",
          timesMovingPrefab: "prefabs/TimesMoving",
          blueTimesMovingPrefab: "prefabs/BlueTimesMoving",
          purpleTimesMovingPrefab: "prefabs/PurpleTimesMoving",
          transitionsSkeletonData: "assets/spine/trans_fg",
          heavenlyTreasures: "prefabs/heavenlyTreasures",
          dragonSkeletonData: "assets/spine/dragon",
          symbolTransHaloAnimPrefab: "prefabs/SymbolTransHaloAnim",
          replayUIViewPPrefab: "prefabs/ReplayUIViewP",
          reelSettingDir: "script/data"
        },
        bigwinAutoCloseTime: 5,
        hasTimesSymbolsDelay: .35,
        nextSpinDelay: 0,
        symbolQuickInTime: .16,
        winAmountTime: 1,
        autoCloseTime: null,
        showTotalWinCashDelay: .5
      }, e;
    }
    _dependency.inheritsLoose(a, s), a.Instance = function () {
      return this._instance || (this._instance = new a());
    };
    var n = a.prototype;
    return n.setData = function (s) {
      this.setIsTurbo(s.platform.player.settings.advancedSettings.turbo);
      var e = _dependency5.default.getData(),
        t = e.autoConfirmTime,
        a = e.autoSpinInterval;
      this.data.autoCloseTime = t, this.data.nextSpinDelay = a, this.data.hasTimesSymbolsDelay = a, this.data.bigwinAutoCloseTime = s.engine.definition.prizeAutoNextDelay;
    }, n.sendSettingByTurbo = function () {
      var s = {
          turbo: _dependency6.default.turbo
        },
        e = {
          turbo: this.isTurbo
        },
        t = _dependency3.ObjectUtils.diffObjects(s, e);
      if (Object.keys(t).length > 0) {
        var a = {
          type: "game",
          data: t
        };
        App.senderManager.get(_dependency7.GameSender).setting(a);
      }
      _dependency6.default.turbo = this.isTurbo;
    }, n.setIsTurbo = function (s, e) {
      void 0 === e && (e = !0), this._isTurbo = s, this.data.tempoConfig = this._isTurbo ? this.turboTempo : this.normalTempo, _dependency9.default.getData().player.settings.advancedSettings.turbo = s, e && this.sendSettingByTurbo();
    }, n.getCountupTime = function (s, e, t) {
      var a = s / e;
      return t || a <= 1 ? c[0] : a <= 5 ? c[1] : a <= 10 ? c[2] : c[3];
    }, _dependency.createClass(a, [{
      key: "isTurbo",
      get: function () {
        return this._isTurbo;
      }
    }]), a;
  }(_dependency4.BaseModel);
p._instance = null;
_publish("default", p.Instance());
_dependency2.cclegacy._RF.pop();
