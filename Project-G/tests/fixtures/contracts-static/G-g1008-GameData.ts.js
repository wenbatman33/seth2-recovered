System.register("chunks:///_virtual/GameData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Bundles.ts", "./MathUtil.ts", "./GameDataBase.ts", "./GameEvent.ts", "./types.ts", "./GameConfigModel.ts", "./GameSymbolID.ts", "./AutoPlayModel.ts", "./ObjectUtils.ts", "./PlatformModel.ts", "./StakeModel.ts", "./DefinitionModel.ts", "./UrlUtils.ts"], function (t) {
  "use strict";

  var e, a, i, n, s, r, o, l, u, d, p, h, m, c, g, f, y, S;
  return {
    setters: [function (t) {
      e = t.inheritsLoose, a = t.extends, i = t.createClass;
    }, function (t) {
      n = t.cclegacy, s = t.v3;
    }, function (t) {
      r = t.EBundles;
    }, function (t) {
      o = t.default;
    }, function (t) {
      l = t.GameDataBase;
    }, function (t) {
      u = t.GameEvent;
    }, function (t) {
      d = t.EGameType;
    }, function (t) {
      p = t.default;
    }, function (t) {
      h = t.GameSymbolID;
    }, function (t) {
      m = t.default;
    }, function (t) {
      c = t.ObjectUtils;
    }, function (t) {
      g = t.default;
    }, function (t) {
      f = t.default;
    }, function (t) {
      y = t.default;
    }, function (t) {
      S = t.default;
    }],
    execute: function () {
      var w;
      t("EInitName", void 0), n._RF.push({}, "e1342pMbi5K+KzsagZczAGi", "GameData", void 0), function (t) {
        t.INIT_GAME = "init_game", t.INIT_REPLAY = "init_replay";
      }(w || (w = t("EInitName", {}))), t("default", function (t) {
        function n() {
          for (var e, a = arguments.length, i = new Array(a), n = 0; n < a; n++) i[n] = arguments[n];
          return (e = t.call.apply(t, [this].concat(i)) || this).GAME_VERSION = "1.0.15_3", e.preData = void 0, e._currentGameType = void 0, e.previousGameType = void 0, e.originTurbo = null, e.currSpinIndex = 0, e.preSpinData = null, e.isEarlyFlag = !1, e.isOpenEarlyFlag = !1, e.isSendOutEarlyFlag = !1, e.earlySpinDelaying = !1, e.earlyData = null, e.isEarlyCloseFlag = !1, e.earlyCloseData = null, e.waitEarlyDataRetryInterval = null, e.waitEarlyCloseDataRetryInterval = null, e.delayEarlyTween = void 0, e.isSendClose = !1, e.cheatMgEmptySpinFlag = !1, e.originGameData = null, e;
        }
        e(n, t);
        var r = n.prototype;
        return r.init = function () {
          this.data = {
            symbolPosConfig: new Map(),
            gameState: null,
            definition: null,
            isResuming: !1,
            parser: {
              view1D: [],
              newTimesSymbols: [],
              winOdds: [],
              bigwinReach: null,
              isFullCombo: !1
            },
            winBoardPosition: s(),
            currentTimesPosition: s()
          }, h.init(), this.data.symbolPosConfig = h.symbolPosConfig, "landscape" == S.getViewModeParam() ? (this.data.winBoardPosition = s(50, 290, 0), this.data.currentTimesPosition = s(388, 264, 0)) : (this.data.winBoardPosition = s(0, -282, 0), this.data.currentTimesPosition = s(293, 264, 0));
        }, r.onDestory = function () {}, r.clear = function () {}, r.debug = function () {
          Log.d("" + this.module);
        }, r.parseView = function (t) {
          this.data.parser.view1D = o.flattenArray(t.view);
        }, r.parseTimesSymbols = function (t) {
          var e,
            a,
            i = t.action,
            n = t.currentView,
            s = t.timesSymbols,
            r = null == (e = this.preData.gameState) ? void 0 : e.winSymbols,
            o = null == (a = this.preData.gameState) ? void 0 : a.timesSymbols;
          r && o && (this.data.parser.newTimesSymbols = [], 0 == n || !r.length && "freeSpin" == i ? this.data.parser.newTimesSymbols = s : s.length > o.length && (this.data.parser.newTimesSymbols = s.slice(o.length)));
        }, r.parseNewTimesSymbols = function (t) {
          var e,
            a,
            i = t.action,
            n = t.currentView,
            s = t.timesSymbols,
            r = null == (e = this.preSpinData) ? void 0 : e.winSymbols,
            o = null == (a = this.preSpinData) ? void 0 : a.timesSymbols;
          r && o && (this.data.parser.newTimesSymbols = [], 0 == n || !r.length && "freeSpin" == i ? this.data.parser.newTimesSymbols = s : s.length > o.length && (this.data.parser.newTimesSymbols = s.slice(o.length)));
        }, r.ReplayParseView = function (t) {
          this.data.parser.view1D = o.flattenArray(t.engine.view);
        }, r.ReplayParseTimesSymbols = function (t) {
          var e,
            a,
            i = t.engine,
            n = i.action,
            s = i.currentView,
            r = i.timesSymbols,
            o = null == (e = this.preData.gameState) ? void 0 : e.winSymbols,
            l = null == (a = this.preData.gameState) ? void 0 : a.timesSymbols;
          o && l && (this.data.parser.newTimesSymbols = [], 0 == s || !o.length && "freeSpin" == n ? this.data.parser.newTimesSymbols = r : r.length > l.length && (this.data.parser.newTimesSymbols = r.slice(l.length)));
        }, r.setPreData = function () {
          this.preData = JSON.parse(JSON.stringify(this.data));
        }, r.setPreSpinData = function () {
          this.preSpinData = JSON.parse(JSON.stringify(this.currSpinData));
        }, r.parseReplayWinOddsType = function (t) {
          var e = Object.keys(t),
            a = Object.values(t).sort(function (t, e) {
              return t < e ? -1 : t > e ? 1 : 0;
            });
          this.data.parser.winOdds = [];
          for (var i = 0; i < e.length; i++) this.data.parser.winOdds.push({
            level: i,
            reachRate: a[i]
          });
          Log.w("parseReplayWinOddsType", this.data.parser.winOdds);
        }, r.parseWinOddsTypes = function (t) {
          var e = t.winOddsTypes,
            a = Object.keys(e),
            i = Object.values(e).sort(function (t, e) {
              return t < e ? -1 : t > e ? 1 : 0;
            });
          this.data.parser.winOdds = [];
          for (var n = 0; n < a.length; n++) this.data.parser.winOdds.push({
            level: n,
            reachRate: i[n]
          });
          Log.w("parseWinOddsTypes", this.data.parser.winOdds);
        }, r.parseFullCombo = function (t) {
          this.data.parser.isFullCombo = t.every(function (e) {
            return e === t[0];
          });
        }, r.setNewInitData = function (t) {
          var e = t.engine,
            a = t.isResuming;
          this.data.newGameState = e.gameState.slice(), this.setPreSpinData(), this.data.definition = e.definition, this.data.isResuming = a, this.data.spinId = e.spinId, 0 == this.data.isResuming && (this.currSpinIndex = this.data.newGameState.length - 1), this.data.gameState = this.currSpinData, this.parseView(this.currSpinData), this.parseWinOddsTypes(e.definition), this.parseFullCombo(this.data.parser.view1D);
        }, r.setNewSpinData = function (t) {
          var e = t.engine;
          this.data.newGameState = e.gameState.slice(), this.data.spinId = e.spinId, this.currSpinIndex = 0, this.setPreSpinData(), this.data.gameState = this.currSpinData, this.parseView(this.currSpinData), this.parseNewTimesSymbols(this.currSpinData), this.parseFullCombo(this.data.parser.view1D);
        }, r.judgeIsOpenEarlyFlag = function () {
          if (1 == this.data.newGameState.length && (m.spinsRemaining > 1 || -1 == m.spinsRemaining) && m.active && p.isTurbo && this.currentGameType == d.MAIN_GAME) {
            this.isOpenEarlyFlag = !0;
            var t = this.data.newGameState[0].noWinReward;
            t && t > 0 && (this.isOpenEarlyFlag = !1);
          } else this.isOpenEarlyFlag = !1, this.earlyData = null;
        }, r.setNextSpinData = function () {
          this.setPreSpinData(), this.currSpinIndex++, this.data.gameState = this.currSpinData, this.parseView(this.currSpinData), this.parseNewTimesSymbols(this.currSpinData), this.parseFullCombo(this.data.parser.view1D);
        }, r.setReplayCurrentView = function (t) {
          this.setPreData(), this.data.gameState = t.engine, this.ReplayParseView(t), this.ReplayParseTimesSymbols(t);
        }, r.setReplayInit = function (t) {
          var e = t.definition ? t.definition.digital : y.getData().digital,
            i = t.definition ? t.definition.winOddsTypes : y.getData().winOddsTypes,
            n = t.definition ? t.definition.extraFgRounds : y.getData().extraFgRounds;
          this.data.definition = a({
            digital: e,
            winOddsTypes: this.parseReplayWinOddsType(i),
            extraFgRounds: n
          }, this.data.definition), p.getData().autoCloseTime = 3, p.getData().bigwinAutoCloseTime = 5;
        }, r.setBigWinReach = function (t) {
          var e = this.data.gameState.totalStake,
            a = this.data.parser.winOdds,
            i = t / e;
          this.data.parser.bigwinReach = null;
          for (var n = 0; n < a.length; n++) i >= a[n].reachRate && (this.data.parser.bigwinReach = a[n]);
          return this.data.parser.bigwinReach;
        }, r.setNewBigWinReach = function (t) {
          var e = this.currSpinData.totalStake,
            a = this.data.parser.winOdds,
            i = t / e;
          this.data.parser.bigwinReach = null;
          for (var n = 0; n < a.length; n++) i >= a[n].reachRate && (this.data.parser.bigwinReach = a[n]);
          return this.data.parser.bigwinReach;
        }, r.getSymbolSpriteFrame = function (t) {
          var e = p.getData().filePaths.symbolsSpriteFrame,
            a = "symbol_" + t,
            i = App.cache.get(n.module, e).data.find(function (t) {
              return t.name === a;
            });
          if (!i) throw new Error("NOT FIND 所需圖片 " + a);
          return i;
        }, r.getSymbolSpriteFrameBlur = function (t) {
          var e = p.getData().filePaths.symbolsSpriteFrameBlur,
            a = "symbol_" + t,
            i = App.cache.get(n.module, e).data.find(function (t) {
              return t.name === a;
            });
          if (!i) throw new Error("NOT FIND 所需圖片 " + a);
          return i;
        }, r.getSymbolAnimSpine = function (t, e) {
          var a = p.getData().filePaths.symbolsSkeletonData,
            i = "symbol_01-09";
          t > 9 && t < 14 ? i = "symbol_10-13" : t > 13 && (i = "symbol_" + t);
          var s = App.cache.get(n.module, a).data.find(function (t) {
            return t.name === i;
          });
          if (!s) throw new Error("NOT FIND 所需sp.SkeletonData " + i);
          return s;
        }, r.getGameAlertSpine = function (t) {
          var e = p.getData().filePaths.gameAlertsSkeletonData,
            a = App.cache.get(n.module, e).data.find(function (e) {
              return e.name === t;
            });
          if (!a) throw new Error("NOT FIND 所需sp.SkeletonData " + t);
          return a;
        }, r.getCommonSpriteFrame = function (t) {
          var e = p.getData().filePaths.common,
            a = App.cache.get(n.module, e).data.find(function (e) {
              return e.name === t;
            });
          if (!a) throw new Error("NOT FIND 所需spriteFrame " + t);
          return a;
        }, r.getLocaleSpriteFrame = function (t) {
          var e = p.getData().filePaths.localeSpriteFrame,
            a = App.cache.get(n.module, e).data.find(function (e) {
              return e.name === t;
            });
          if (!a) throw new Error("NOT FIND 所需spriteFrame " + t);
          return a;
        }, r.getFontSpriteFrame = function (t) {
          var e = p.getData().filePaths.font,
            a = App.cache.get(n.module, e).data.find(function (e) {
              return e.name === t;
            });
          if (!a) throw new Error("NOT FIND 所需spriteFrame " + t);
          return a;
        }, r.getTransitionSpine = function (t) {
          var e = p.getData().filePaths.transitionsSkeletonData,
            a = App.cache.get(n.module, e).data.find(function (e) {
              return e.name === t;
            });
          if (!a) throw new Error("NOT FIND 所需skeletonData " + t);
          return a;
        }, r.getIsFGFinish = function () {
          var t = this.data.gameState,
            e = t.currentView,
            a = t.totalViews,
            i = (t.spinId, t.startFreeGame, t.action);
          return e + 1 === a && "freeSpin" == i;
        }, r.getIsBigWinReach = function () {
          return null != this.data.parser.bigwinReach;
        }, r.saveOriginGameData = function () {
          this.originGameData = c.clone(this.data), g.saveOriginData(), f.saveOriginData();
        }, r.restoreCurrentGameData = function () {
          this.originGameData ? (this.data = c.clone(this.originGameData), this.currentGameType = d.MAIN_GAME, this.originGameData = null) : console.warn("No originGameData to restore."), g.restoreCurrentData(), f.restoreCurrentData();
        }, i(n, [{
          key: "currentGameType",
          get: function () {
            return this._currentGameType;
          },
          set: function (t) {
            this.previousGameType = this._currentGameType, this._currentGameType = t, dispatch(u.UPDATE_GAME_TYPE, {
              data: this._currentGameType
            });
          }
        }, {
          key: "currSpinData",
          get: function () {
            return this.data.newGameState[this.currSpinIndex];
          }
        }]), n;
      }(l)).module = r[r.g1008], n._RF.pop();
    }
  };
});
