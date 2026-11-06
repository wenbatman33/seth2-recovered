// @ts-nocheck
// Project-C simulation hooks v1; original nonlocal behavior retained.
;
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency4 from "./g1009-GameConfigModel";
import * as _dependency5 from "./g1009-GameData";
import * as _dependency6 from "./g1009-GameEvent";
import * as _dependency7 from "./g1009-types";
import * as _dependency8 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-DefinitionModel";
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
var e, a, n, i, s, l, o, r, p, u, d;
_dependency2.cclegacy._RF.push({}, "489feosKDxE2p8FARjlU5pN", "ParseResponse", void 0);
_publish("default", function () {
  function t() {}
  return t.parseNewInit = function (t) {
    var e;
    this.data.currSpinIndex = 0, this.data.setNewInitData(t), _dependency3.default.init({
      stakeList: t.platform.game.stakeValues,
      stakeIndex: t.platform.player.settings.stakeIndex,
      ratioList: t.platform.game.ratioValues,
      ratioIndex: t.platform.player.settings.ratioIndex,
      numWinlines: t.engine.definition.winlineDefs.length,
      totalBetValues: null == (e = t.platform) ? void 0 : e.game.stakeList
    }), _dependency4.default.setNewData(t), this.setNewGameType(), dispatch(_dependency6.GameEvent.PARSER_INIT_COMPLETED);
  }, t.parseNewSpin = function (t) {
    this.data.setNewSpinData(t), this.setNewGameType(), this.data.judgeIsOpenEarlyFlag(), dispatch(_dependency6.GameEvent.PARSER_SPIN_COMPLETED);
  }, t.parseNewEarlySpin = function (t) {
    this.data.setNewSpinData(t), this.setNewGameType(), this.data.judgeIsOpenEarlyFlag();
  }, t.parseEarlySpin = function (t) {
    this.data.earlyData = t;
  }, t.tempEarlyClose = function (t) {
    this.data.earlyCloseData = t;
  }, t.parseCloseSpin = function (t) {
    dispatch(_dependency6.GameEvent.PARSER_CLOSE_SPIN_COMPLETED);
  }, t.parseReplay = function (t) {
    this.parseReplayData(t);
    var e = _dependency8.default.index;
    this.data.setReplayInit(t), this.data.setReplayCurrentView(t.betData.theResult[e]), _dependency8.default.replayMode !== _dependency8.EReplayMode.RANKING_REPLAY && dispatch(_dependency6.GameEvent.PARSER_REPLAY_COMPLETED, !0);
  }, t.parseReplayAgain = function (t) {
    this.parseReplayData(t);
    var e = _dependency8.default.index;
    this.data.setReplayCurrentView(t.betData.theResult[e]), dispatch(_dependency6.GameEvent.PARSER_REPLAY_COMPLETED, !1);
  }, t.parseReplayData = function (t) {
    var e = t.definition ? t.definition.winlineDefs : _dependency9.default.getData().winlineDefs;
    _dependency3.default.init({
      stakeList: t.betData.replayMeta.stakeValues,
      stakeIndex: t.betData.replayMeta.stakeIndex,
      ratioList: t.betData.replayMeta.ratioValues,
      ratioIndex: t.betData.replayMeta.ratioIndex,
      numWinlines: e.length
    });
    var a = t.betData.theResult[0].engine,
      i = t.betData.theResult[1].engine;
    a.currentView = 0, a.totalWinnings = 0, a.roundWinnings = 0, a.action = "spin", a.isJp = "", a.timesSymbols = [], t.betData.theResult.forEach(function (e, n) {
      n > 0 && (e.engine.totalViews += 1, e.engine.currentView += 1, a.totalViews = i.totalViews, t.betData.totalViews = a.totalViews);
    });
  }, t.setNewGameType = function () {
    var t,
      e = this.data.currSpinData;
    (null == e ? void 0 : e.action) === _dependency7.EActionType.SPIN || (null == e ? void 0 : e.action) === _dependency7.EActionType.SUPER_GAME ? t = _dependency7.EGameType.MAIN_GAME : (t = _dependency7.EGameType.FREE_GAME, this.data.previousGameType || (t = _dependency7.EGameType.MAIN_GAME)), this.data.currentGameType = t;
    if (this.data.__projectCLocalOperation && this.data.getData().isResuming && this.data.currSpinData.action === _dependency7.EActionType.FREE_GAME) this.data.currentGameType = _dependency7.EGameType.FREE_GAME;
  }, _dependency.createClass(t, null, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), t;
}());
_dependency2.cclegacy._RF.pop();
