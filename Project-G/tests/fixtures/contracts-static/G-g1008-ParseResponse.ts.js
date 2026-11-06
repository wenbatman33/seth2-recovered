System.register("chunks:///_virtual/ParseResponse.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./StakeModel.ts", "./GameConfigModel.ts", "./GameData.ts", "./GameEvent.ts", "./types.ts", "./ReplayModel.ts", "./GameSender.ts", "./type2.ts", "./DefinitionModel.ts"], function (e) {
  "use strict";

  var t, a, n, i, s, r, l, p, o, u, d, g;
  return {
    setters: [function (e) {
      t = e.createClass;
    }, function (e) {
      a = e.cclegacy;
    }, function (e) {
      n = e.default;
    }, function (e) {
      i = e.default;
    }, function (e) {
      s = e.default;
    }, function (e) {
      r = e.GameEvent;
    }, function (e) {
      l = e.EGameType;
    }, function (e) {
      p = e.default, o = e.EReplayMode;
    }, function (e) {
      u = e.GameSender;
    }, function (e) {
      d = e.EDebugLogLevel;
    }, function (e) {
      g = e.default;
    }],
    execute: function () {
      a._RF.push({}, "9dc17o4tElGnq3JlyVnvk0h", "ParseResponse", void 0);
      e("default", function () {
        function e() {}
        return e.parseInit = function (e) {}, e.parseNewInit = function (e) {
          var t;
          this.data.currSpinIndex = 0, this.data.setNewInitData(e), n.init({
            stakeList: e.platform.game.stakeValues,
            stakeIndex: e.platform.player.settings.stakeIndex,
            ratioList: e.platform.game.ratioValues,
            ratioIndex: e.platform.player.settings.ratioIndex,
            numWinlines: e.engine.definition.winlineDefs.length,
            totalBetValues: null == (t = e.platform) ? void 0 : t.game.stakeList
          }), i.setNewData(e), this.setNewGameType(), dispatch(r.PARSER_INIT_COMPLETED);
        }, e.parseSpin = function (e) {
          this.checkSpinErrorDebugLog(e), this.setGameType(e), dispatch(r.PARSER_SPIN_COMPLETED);
        }, e.parseNewSpin = function (e) {
          this.data.setNewSpinData(e), this.setNewGameType(), this.data.judgeIsOpenEarlyFlag(), dispatch(r.PARSER_SPIN_COMPLETED);
        }, e.parseNewEarlySpin = function (e) {
          this.data.setNewSpinData(e), this.setNewGameType(), this.data.judgeIsOpenEarlyFlag();
        }, e.parseEarlySpin = function (e) {
          this.data.earlyData = e;
        }, e.tempEarlyClose = function (e) {
          this.data.earlyCloseData = e;
        }, e.parseCloseSpin = function (e) {
          dispatch(r.PARSER_CLOSE_SPIN_COMPLETED);
        }, e.parseReplay = function (e) {
          this.parseReplayData(e);
          var t = p.index;
          this.data.setReplayInit(e), this.data.setReplayCurrentView(e.betData.theResult[t]), p.replayMode !== o.RANKING_REPLAY && dispatch(r.PARSER_REPLAY_COMPLETED, !0);
        }, e.parseReplayAgain = function (e) {
          this.parseReplayData(e);
          var t = p.index;
          this.data.setReplayCurrentView(e.betData.theResult[t]), dispatch(r.PARSER_REPLAY_COMPLETED, !1);
        }, e.parseReplayData = function (e) {
          var t = e.definition ? e.definition.winlineDefs : g.getData().winlineDefs;
          n.init({
            stakeList: e.betData.replayMeta.stakeValues,
            stakeIndex: e.betData.replayMeta.stakeIndex,
            ratioList: e.betData.replayMeta.ratioValues,
            ratioIndex: e.betData.replayMeta.ratioIndex,
            numWinlines: t.length
          });
          var a = e.betData.theResult[0].engine,
            i = e.betData.theResult[1].engine;
          a.currentView = 0, a.totalWinnings = 0, a.roundWinnings = 0, a.action = "spin", a.isJp = "", a.timesSymbols = [], e.betData.theResult.forEach(function (t, n) {
            n > 0 && (t.engine.totalViews += 1, t.engine.currentView += 1, a.totalViews = i.totalViews, e.betData.totalViews = a.totalViews);
          });
        }, e.setGameType = function (e) {
          var t, a;
          "spin" === (null == (t = e.engine.gameState) ? void 0 : t.action) ? a = l.MAIN_GAME : (a = l.FREE_GAME, this.data.previousGameType || (a = l.MAIN_GAME)), this.data.currentGameType = a;
        }, e.setNewGameType = function () {
          var e,
            t = this.data.currSpinData;
          "spin" === (null == t ? void 0 : t.action) ? e = l.MAIN_GAME : (e = l.FREE_GAME, this.data.previousGameType || (e = l.MAIN_GAME)), this.data.currentGameType = e;
        }, e.checkSpinErrorDebugLog = function (e) {
          if (e.engine.gameState.view && e.engine.gameState.view.length > 0) {
            if (null !== this.data.preData.gameState) {
              var t = this.data.getData().gameState.view.join() === e.engine.gameState.view.join(),
                a = e.engine.gameState.spinId;
              t && (Log.e("spin資料(view)重複"), App.senderManager.get(u).debugLog({
                level: d.ERROR,
                id: a,
                message: "spin資料(view)重複",
                data: {
                  resData: e.engine.gameState,
                  currentData: this.data.getData().gameState,
                  preData: this.data.preData.gameState
                },
                tag: "repeatSpinData"
              }));
            }
          } else {
            var n = e.engine.gameState.spinId;
            App.senderManager.get(u).debugLog({
              level: d.ERROR,
              id: n,
              message: "沒有盤面資料",
              data: e.engine.gameState
            });
          }
        }, t(e, null, [{
          key: "data",
          get: function () {
            return App.dataCenter.get(s);
          }
        }]), e;
      }());
      a._RF.pop();
    }
  };
});
