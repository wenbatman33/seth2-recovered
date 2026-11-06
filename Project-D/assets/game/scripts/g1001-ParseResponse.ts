// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency4 from "./g1001-GameConfigModel";
import * as _dependency5 from "./g1001-GameData";
import * as _dependency6 from "./g1001-GameEvent";
import * as _dependency7 from "./g1001-types";
import * as _dependency8 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency9 from "./g1001-GameSender";
import * as _dependency0 from "../../shared/scripts/slotFramework-type2";
import * as _dependency1 from "../../shared/scripts/slotFramework-DefinitionModel";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, a, n, i, s, r, p, l, o, u, d, g;
_dependency2.cclegacy._RF.push({}, "8202bCWGH9EV5KQ35FrkQR6", "ParseResponse", void 0);
_publish("default", function () {
  function e() {}
  return e.parseInit = function (e) {}, e.parseNewInit = function (e) {
    var t;
    this.data.currSpinIndex = 0, this.data.setNewInitData(e), _dependency3.default.init({
      stakeList: e.platform.game.stakeValues,
      stakeIndex: e.platform.player.settings.stakeIndex,
      ratioList: e.platform.game.ratioValues,
      ratioIndex: e.platform.player.settings.ratioIndex,
      numWinlines: e.engine.definition.winlineDefs.length,
      totalBetValues: null == (t = e.platform) ? void 0 : t.game.stakeList
    }), _dependency4.default.setNewData(e), this.setNewGameType(), dispatch(_dependency6.GameEvent.PARSER_INIT_COMPLETED);
  }, e.parseSpin = function (e) {
    this.checkSpinErrorDebugLog(e), this.setGameType(e), dispatch(_dependency6.GameEvent.PARSER_SPIN_COMPLETED);
  }, e.parseNewSpin = function (e) {
    this.data.setNewSpinData(e), this.setNewGameType(), this.data.judgeIsOpenEarlyFlag(), dispatch(_dependency6.GameEvent.PARSER_SPIN_COMPLETED);
  }, e.parseNewEarlySpin = function (e) {
    this.data.setNewSpinData(e), this.setNewGameType(), this.data.judgeIsOpenEarlyFlag();
  }, e.parseEarlySpin = function (e) {
    this.data.earlyData = e;
  }, e.tempEarlyClose = function (e) {
    this.data.earlyCloseData = e;
  }, e.parseCloseSpin = function (e) {
    dispatch(_dependency6.GameEvent.PARSER_CLOSE_SPIN_COMPLETED);
  }, e.parseReplay = function (e) {
    this.parseReplayData(e);
    var t = _dependency8.default.index;
    this.data.setReplayInit(e), this.data.setReplayCurrentView(e.betData.theResult[t]), _dependency8.default.replayMode !== _dependency8.EReplayMode.RANKING_REPLAY && dispatch(_dependency6.GameEvent.PARSER_REPLAY_COMPLETED, !0);
  }, e.parseReplayAgain = function (e) {
    this.parseReplayData(e);
    var t = _dependency8.default.index;
    this.data.setReplayCurrentView(e.betData.theResult[t]), dispatch(_dependency6.GameEvent.PARSER_REPLAY_COMPLETED, !1);
  }, e.parseReplayData = function (e) {
    var t = e.definition ? e.definition.winlineDefs : _dependency1.default.getData().winlineDefs;
    _dependency3.default.init({
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
    "spin" === (null == (t = e.engine.gameState) ? void 0 : t.action) ? a = _dependency7.EGameType.MAIN_GAME : (a = _dependency7.EGameType.FREE_GAME, this.data.previousGameType || (a = _dependency7.EGameType.MAIN_GAME)), this.data.currentGameType = a;
  }, e.setNewGameType = function () {
    var e,
      t = this.data.currSpinData;
    "spin" === (null == t ? void 0 : t.action) ? e = _dependency7.EGameType.MAIN_GAME : (e = _dependency7.EGameType.FREE_GAME, this.data.previousGameType || (e = _dependency7.EGameType.MAIN_GAME)), this.data.currentGameType = e;
  }, e.checkSpinErrorDebugLog = function (e) {
    if (e.engine.gameState.view && e.engine.gameState.view.length > 0) {
      if (null !== this.data.preData.gameState) {
        var t = this.data.getData().gameState.view.join() === e.engine.gameState.view.join(),
          a = e.engine.gameState.spinId;
        t && (Log.e("spin資料(view)重複"), App.senderManager.get(_dependency9.GameSender).debugLog({
          level: _dependency0.EDebugLogLevel.ERROR,
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
      App.senderManager.get(_dependency9.GameSender).debugLog({
        level: _dependency0.EDebugLogLevel.ERROR,
        id: n,
        message: "沒有盤面資料",
        data: e.engine.gameState
      });
    }
  }, _dependency.createClass(e, null, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}());
_dependency2.cclegacy._RF.pop();
