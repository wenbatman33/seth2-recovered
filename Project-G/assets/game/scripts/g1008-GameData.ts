// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency5 from "../../shared/scripts/main-GameDataBase";
import * as _dependency6 from "./g1008-GameEvent";
import * as _dependency7 from "./g1008-types";
import * as _dependency8 from "./g1008-GameConfigModel";
import * as _dependency9 from "./g1008-GameSymbolID";
import * as _dependency0 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency10 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency13 from "../../shared/scripts/main-UrlUtils";
var _export;
export { _export as EInitName };
var _export2;
export { _export2 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EInitName":
      _export = value;
      break;
    case "default":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, a, i, n, s, r, o, l, u, d, p, h, m, c, g, f, y, S;
var w;
_publish("EInitName", void 0), _dependency2.cclegacy._RF.push({}, "e1342pMbi5K+KzsagZczAGi", "GameData", void 0), function (t) {
  t.INIT_GAME = "init_game", t.INIT_REPLAY = "init_replay";
}(w || (w = _publish("EInitName", {}))), _publish("default", function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var e, a = arguments.length, i = new Array(a), n = 0; n < a; n++) i[n] = arguments[n];
    return (e = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this).GAME_VERSION = "1.0.15_3", e.preData = void 0, e._currentGameType = void 0, e.previousGameType = void 0, e.originTurbo = null, e.currSpinIndex = 0, e.preSpinData = null, e.isEarlyFlag = !1, e.isOpenEarlyFlag = !1, e.isSendOutEarlyFlag = !1, e.earlySpinDelaying = !1, e.earlyData = null, e.isEarlyCloseFlag = !1, e.earlyCloseData = null, e.waitEarlyDataRetryInterval = null, e.waitEarlyCloseDataRetryInterval = null, e.delayEarlyTween = void 0, e.isSendClose = !1, e.cheatMgEmptySpinFlag = !1, e.originGameData = null, e;
  }
  _dependency.inheritsLoose(n, t);
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
      winBoardPosition: _dependency2.v3(),
      currentTimesPosition: _dependency2.v3()
    }, _dependency9.GameSymbolID.init(), this.data.symbolPosConfig = _dependency9.GameSymbolID.symbolPosConfig, "landscape" == _dependency13.default.getViewModeParam() ? (this.data.winBoardPosition = _dependency2.v3(50, 290, 0), this.data.currentTimesPosition = _dependency2.v3(388, 264, 0)) : (this.data.winBoardPosition = _dependency2.v3(0, -282, 0), this.data.currentTimesPosition = _dependency2.v3(293, 264, 0));
  }, r.onDestory = function () {}, r.clear = function () {}, r.debug = function () {
    Log.d("" + this.module);
  }, r.parseView = function (t) {
    this.data.parser.view1D = _dependency4.default.flattenArray(t.view);
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
    this.data.parser.view1D = _dependency4.default.flattenArray(t.engine.view);
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
    if (1 == this.data.newGameState.length && (_dependency0.default.spinsRemaining > 1 || -1 == _dependency0.default.spinsRemaining) && _dependency0.default.active && _dependency8.default.isTurbo && this.currentGameType == _dependency7.EGameType.MAIN_GAME) {
      this.isOpenEarlyFlag = !0;
      var t = this.data.newGameState[0].noWinReward;
      t && t > 0 && (this.isOpenEarlyFlag = !1);
    } else this.isOpenEarlyFlag = !1, this.earlyData = null;
  }, r.setNextSpinData = function () {
    this.setPreSpinData(), this.currSpinIndex++, this.data.gameState = this.currSpinData, this.parseView(this.currSpinData), this.parseNewTimesSymbols(this.currSpinData), this.parseFullCombo(this.data.parser.view1D);
  }, r.setReplayCurrentView = function (t) {
    this.setPreData(), this.data.gameState = t.engine, this.ReplayParseView(t), this.ReplayParseTimesSymbols(t);
  }, r.setReplayInit = function (t) {
    var e = t.definition ? t.definition.digital : _dependency12.default.getData().digital,
      i = t.definition ? t.definition.winOddsTypes : _dependency12.default.getData().winOddsTypes,
      n = t.definition ? t.definition.extraFgRounds : _dependency12.default.getData().extraFgRounds;
    this.data.definition = _dependency.extends({
      digital: e,
      winOddsTypes: this.parseReplayWinOddsType(i),
      extraFgRounds: n
    }, this.data.definition), _dependency8.default.getData().autoCloseTime = 3, _dependency8.default.getData().bigwinAutoCloseTime = 5;
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
    var e = _dependency8.default.getData().filePaths.symbolsSpriteFrame,
      a = "symbol_" + t,
      i = App.cache.get(n.module, e).data.find(function (t) {
        return t.name === a;
      });
    if (!i) throw new Error("NOT FIND 所需圖片 " + a);
    return i;
  }, r.getSymbolSpriteFrameBlur = function (t) {
    var e = _dependency8.default.getData().filePaths.symbolsSpriteFrameBlur,
      a = "symbol_" + t,
      i = App.cache.get(n.module, e).data.find(function (t) {
        return t.name === a;
      });
    if (!i) throw new Error("NOT FIND 所需圖片 " + a);
    return i;
  }, r.getSymbolAnimSpine = function (t, e) {
    var a = _dependency8.default.getData().filePaths.symbolsSkeletonData,
      i = "symbol_01-09";
    t > 9 && t < 14 ? i = "symbol_10-13" : t > 13 && (i = "symbol_" + t);
    var s = App.cache.get(n.module, a).data.find(function (t) {
      return t.name === i;
    });
    if (!s) throw new Error("NOT FIND 所需sp.SkeletonData " + i);
    return s;
  }, r.getGameAlertSpine = function (t) {
    var e = _dependency8.default.getData().filePaths.gameAlertsSkeletonData,
      a = App.cache.get(n.module, e).data.find(function (e) {
        return e.name === t;
      });
    if (!a) throw new Error("NOT FIND 所需sp.SkeletonData " + t);
    return a;
  }, r.getCommonSpriteFrame = function (t) {
    var e = _dependency8.default.getData().filePaths.common,
      a = App.cache.get(n.module, e).data.find(function (e) {
        return e.name === t;
      });
    if (!a) throw new Error("NOT FIND 所需spriteFrame " + t);
    return a;
  }, r.getLocaleSpriteFrame = function (t) {
    var e = _dependency8.default.getData().filePaths.localeSpriteFrame,
      a = App.cache.get(n.module, e).data.find(function (e) {
        return e.name === t;
      });
    if (!a) throw new Error("NOT FIND 所需spriteFrame " + t);
    return a;
  }, r.getFontSpriteFrame = function (t) {
    var e = _dependency8.default.getData().filePaths.font,
      a = App.cache.get(n.module, e).data.find(function (e) {
        return e.name === t;
      });
    if (!a) throw new Error("NOT FIND 所需spriteFrame " + t);
    return a;
  }, r.getTransitionSpine = function (t) {
    var e = _dependency8.default.getData().filePaths.transitionsSkeletonData,
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
    this.originGameData = _dependency1.ObjectUtils.clone(this.data), _dependency10.default.saveOriginData(), _dependency11.default.saveOriginData();
  }, r.restoreCurrentGameData = function () {
    this.originGameData ? (this.data = _dependency1.ObjectUtils.clone(this.originGameData), this.currentGameType = _dependency7.EGameType.MAIN_GAME, this.originGameData = null) : console.warn("No originGameData to restore."), _dependency10.default.restoreCurrentData(), _dependency11.default.restoreCurrentData();
  }, _dependency.createClass(n, [{
    key: "currentGameType",
    get: function () {
      return this._currentGameType;
    },
    set: function (t) {
      this.previousGameType = this._currentGameType, this._currentGameType = t, dispatch(_dependency6.GameEvent.UPDATE_GAME_TYPE, {
        data: this._currentGameType
      });
    }
  }, {
    key: "currSpinData",
    get: function () {
      return this.data.newGameState[this.currSpinIndex];
    }
  }]), n;
}(_dependency5.GameDataBase)).module = _dependency3.EBundles[_dependency3.EBundles.g1008], _dependency2.cclegacy._RF.pop();

// Local simulation saved-progress bridge; preserves original native parser methods.
import { EDITOR as __localEditor } from "cc/env";
import { installProgressHooks as __installLocalProgress } from "../backend/ProgressHooks";
if(!__localEditor)__installLocalProgress(_export2,globalThis.globalProjectG);
