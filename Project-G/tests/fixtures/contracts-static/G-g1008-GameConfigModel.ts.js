System.register("chunks:///_virtual/GameConfigModel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ObjectUtils.ts", "./BaseModel.ts", "./DefinitionModel.ts", "./SettingsModel.ts", "./GameSender.ts", "./GameData.ts", "./UrlModel.ts", "./UrlUtils.ts"], function (t) {
  "use strict";

  var s, e, i, a, m, _, o, n, b, u, r;
  return {
    setters: [function (t) {
      s = t.inheritsLoose, e = t.createClass;
    }, function (t) {
      i = t.cclegacy;
    }, function (t) {
      a = t.ObjectUtils;
    }, function (t) {
      m = t.BaseModel;
    }, function (t) {
      _ = t.default;
    }, function (t) {
      o = t.default;
    }, function (t) {
      n = t.GameSender;
    }, function (t) {
      b = t.default;
    }, function (t) {
      u = t.default;
    }, function (t) {
      r = t.default;
    }],
    execute: function () {
      var c, l;
      t({
        EBGM: void 0,
        EBTM: void 0
      }), i._RF.push({}, "c6c978nSfVELbVckgNmMCji", "GameConfigModel", void 0), function (t) {
        t.MAINGAME = "assets/music/bgm/bgm_mg", t.FREEGAME = "assets/music/bgm/bgm_fg", t.FG_IN_LOOP = "assets/music/btm/btm_fg_in_loop";
      }(c || (c = t("EBGM", {}))), function (t) {
        t.SPIN = "assets/music/btm/btm_spin", t.CH_LOOP = "assets/music/btm/btm_ch_loop", t.FREEGAME_OUT = "assets/music/btm/btm_fg_out", t.SYMBOL_WIN = "assets/music/btm/btm_fx_symbol_frame", t.TIMES_SYMBOL_01 = "assets/music/btm/btm_muti_function_1", t.TIMES_SYMBOL_02 = "assets/music/btm/btm_muti_function_2", t.SYMBOL_TURBO_FALL_OUT = "assets/music/btm/btm_fall_auto_1", t.SYMBOL_TURBO_FALL_IN = "assets/music/btm/btm_fall_auto_2", t.SYMBOL_NORMAL_FALL_OUT = "assets/music/btm/btm_fall_normal_1", t.SYMBOL_NORMAL_FALL_IN = "assets/music/btm/btm_fall_normal_2", t.FIREBALL_IN = "assets/music/btm/btm_fx_symbol_function_1", t.FIREBALL_HIT = "assets/music/btm/btm_fx_symbol_function_2", t.FIREBALL_HIT_100X = "assets/music/btm/btm_fx_symbol_function_2_100x", t.SMALL_PRIZE_IN = "assets/music/btm/btm_w_in_prize_s", t.ULTRA_IN = "assets/music/btm/btm_w_ultra", t.LEGEND_IN = "assets/music/btm/btm_w_legend", t.WIN_LOOP = "assets/music/btm/btm_w_loop", t.S_PRIZE_LOOP = "assets/music/btm/btm_w_loop_prize_s", t.L_PRIZE_LOOP = "assets/music/btm/btm_w_loop_prize_l", t.JP_WIN = "assets/music/btm/btm_w_jp", t.FULLCOMBO = "assets/music/btm/btm_fc", t.SCATTER_IN = "assets/music/btm/btm_scatter_in", t.SCATTER_IN_X2 = "assets/music/btm/btm_scatter_in_x2", t.SCATTER_WIN = "assets/music/btm/btm_scatter_win", t.TIMES_SYMBOL_UPGRADE = "assets/music/btm/btm_muti_upgrade", t.TIMES_MOVING = "assets/music/btm/btm_muti_total", t.TOTAL_TIMES_UPGRADE = "assets/music/btm/btm_totalTimes_upgrade", t.MUTI_TOTAL_01 = "assets/music/btm/btm_muti_total_01", t.MUTI_TOTAL_02 = "assets/music/btm/btm_muti_total_02", t.BTM_CH_01 = "assets/music/btm/btm_ch_01", t.BTM_CH_02 = "assets/music/btm/btm_ch_02", t.SYMBOL_FUNCTION_01 = "assets/music/btm/btm_fx_symbol_function_01", t.SYMBOL_FUNCTION_02 = "assets/music/btm/btm_fx_symbol_function_02", t.SYMBOL_FUNCTION_01_100X = "assets/music/btm/btm_fx_symbol_function_01_100x", t.SYMBOL_FUNCTION_02_100X = "assets/music/btm/btm_fx_symbol_function_02_100x", t.TRANSITION = "assets/music/btm/btm_transitions", t.SCORE = "assets/music/btm/btm_score", t.SCORE_PLUS = "assets/music/btm/btm_score_plus", t.FIREWORKS = "assets/music/btm/btm_w_fireworks", t.COUNTING = "assets/music/btm/btm_counting", t.OPEN_FEATURE = "assets/music/btm/btm_open", t.OPEN_SUCCESS = "assets/music/btm/btm_open_success", t.CLOSE_FEATURE = "assets/music/btm/btm_close", t.JACKPOT_WIN = "assets/music/btm/btm_w_jp_line", t.JP_POPUP_IN_1 = "assets/music/btm/btm_w_jp_intro_1", t.JP_POPUP_IN_2 = "assets/music/btm/btm_w_jp_intro_2", t.JP_POPUP_LOOP_1 = "assets/music/btm/btm_w_jp_loop_1", t.JP_POPUP_LOOP_2 = "assets/music/btm/btm_w_jp_loop_2", t.JP_MINI_VOCAL = "assets/music/btm/btm_w_jp_mini_vocal", t.JP_MINOR_VOCAL = "assets/music/btm/btm_w_jp_minor_vocal", t.JP_MAJOR_VOCAL = "assets/music/btm/btm_w_major_vocal", t.JP_GRAND_VOCAL = "assets/music/btm/btm_w_grand_vocal", t.BIG_VOCAL = "assets/music/btm/btm_w_big_vocal", t.SUPER_VOCAL = "assets/music/btm/btm_w_super_vocal", t.MEGA_VOCAL = "assets/music/btm/btm_w_mega_vocal", t.ULTRA_VOCAL = "assets/music/btm/btm_w_ultra_vocal", t.LEGENDARY_VOCAL = "assets/music/btm/btm_w_legendary_vocal";
      }(l || (l = t("EBTM", {})));
      var f = function (t) {
        function i() {
          var s;
          (s = t.call(this) || this).turboMode = {
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
          var e = u.getLanguageParam(),
            i = r.getViewModeParam();
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
        s(i, t), i.Instance = function () {
          return this._instance || (this._instance = new i());
        };
        var m = i.prototype;
        return m.setData = function (t) {
          this.setIsTurbo(t.platform.player.settings.advancedSettings.turbo), App.dataCenter.get(b).originTurbo = t.platform.player.settings.advancedSettings.turbo;
          var s = _.getData(),
            e = s.autoConfirmTime,
            i = s.autoSpinInterval;
          this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, this.data.autoCloseTime = e, this.data.nextSpinDelay = i, this.data.hasTimesSymbolsDelay = i, this.data.bigwinAutoCloseTime = t.engine.definition.prizeAutoNextDelay;
        }, m.setNewData = function (t) {
          this.setIsTurbo(t.platform.player.settings.advancedSettings.turbo), App.dataCenter.get(b).originTurbo = t.platform.player.settings.advancedSettings.turbo;
          var s = _.getData(),
            e = s.autoConfirmTime,
            i = s.autoSpinInterval;
          this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, this.data.autoCloseTime = e, this.data.nextSpinDelay = i, this.data.hasTimesSymbolsDelay = i, this.data.bigwinAutoCloseTime = t.engine.definition.prizeAutoNextDelay;
        }, m.sendSettingByTurbo = function () {
          var t = {
              turbo: o.turbo
            },
            s = {
              turbo: this.isTurbo
            },
            e = a.diffObjects(t, s);
          if (Object.keys(e).length > 0) {
            var i = {
              type: "game",
              data: e
            };
            App.senderManager.get(n).setting(i);
          }
          o.turbo = this.isTurbo;
        }, m.setIsTurbo = function (t, s) {
          void 0 === s && (s = !0), this._isTurbo = t, this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, s && this.sendSettingByTurbo();
        }, e(i, [{
          key: "isTurbo",
          get: function () {
            return this._isTurbo;
          }
        }]), i;
      }(m);
      f._instance = null;
      t("default", f.Instance());
      i._RF.pop();
    }
  };
});
