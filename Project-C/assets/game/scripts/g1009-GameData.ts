// @ts-nocheck
// Project-C simulation hooks v1; original nonlocal behavior retained.
;
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UrlUtils";
import * as _dependency4 from "../../shared/scripts/main-Bundles";
import * as _dependency5 from "../../shared/scripts/main-GameDataBase";
import * as _dependency6 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency7 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency0 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency1 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency10 from "./g1009-GameEvent";
import * as _dependency11 from "./g1009-types";
import * as _dependency12 from "./g1009-GameConfigModel";
import * as _dependency13 from "./g1009-GameSymbolID";
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
var t, a, i, s, n, r, o, l, m, c, u, d, p, h, y, f, g, S, w;
var b;
_publish("EInitName", void 0), _dependency2.cclegacy._RF.push({}, "1ccecTxaNJLsI8drIc74lIn", "GameData", void 0), function (e) {
  e.INIT_GAME = "init_game", e.INIT_REPLAY = "init_replay";
}(b || (b = _publish("EInitName", {}))), _publish("default", function (e) {
  var _nativeConstructor = s;
  function s() {
    for (var t, a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
    return (t = Reflect.construct(e, [this].concat(i).slice(1), new.target || _nativeConstructor) || this).GAME_VERSION = "1.0.5_2", t.preData = void 0, t._currentGameType = void 0, t.previousGameType = void 0, t.originTurbo = null, t.currSpinIndex = 0, t.preSpinData = null, t.isEarlyFlag = !1, t.isOpenEarlyFlag = !1, t.isSendOutEarlyFlag = !1, t.earlySpinDelaying = !1, t.earlyData = null, t.newEarlyData = null, t.isEarlyCloseFlag = !1, t.earlyCloseData = null, t.waitEarlyDataRetryInterval = null, t.waitEarlyCloseDataRetryInterval = null, t.isHaveNewLock = !1, t.newLockTimesSymbols = new Map(), t.delayEarlyTween = void 0, t.isSendClose = !1, t.originGameData = null, t;
  }
  _dependency.inheritsLoose(s, e);
  var o = s.prototype;
  return o.init = function () {
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
        isFullCombo: !1,
        lockTimesSymbols: new Map(),
        isHaveLockSymbol: !1,
        isSplitSymbol: !1
      },
      winBoardPosition: _dependency2.v3(),
      currentTimesPosition: _dependency2.v3(),
      currentBuyFeatureIndex: 0,
      superMgRealStakeLimit: 0
    }, _dependency13.GameSymbolID.init(), this.data.symbolPosConfig = _dependency13.GameSymbolID.symbolPosConfig, "landscape" == _dependency3.default.getViewModeParam() ? (this.data.winBoardPosition = _dependency2.v3(50, 290, 0), this.data.currentTimesPosition = _dependency2.v3(388, 264, 0)) : (this.data.winBoardPosition = _dependency2.v3(50, -282, 0), this.data.currentTimesPosition = _dependency2.v3(293, 264, 0));
  }, o.onDestory = function () {}, o.clear = function () {}, o.debug = function () {
    Log.d("" + this.module);
  }, o.parseView = function (e) {
    this.data.parser.view1D = _dependency0.default.flattenArray(e.view);
  }, o.parseNewTimesSymbols = function (e) {
    var t = e.newTimesSymbols;
    this.data.parser.newTimesSymbols = t.slice();
  }, o.ReplayParseView = function (e) {
    this.data.parser.view1D = _dependency0.default.flattenArray(e.engine.view);
  }, o.ReplayParseTimesSymbols = function (e) {
    var t = e.engine.newTimesSymbols,
      a = void 0 === t ? [] : t;
    this.data.parser.newTimesSymbols = a.slice();
  }, o.setPreData = function () {
    this.preData = JSON.parse(JSON.stringify(this.data));
  }, o.setPreSpinData = function () {
    this.preSpinData = JSON.parse(JSON.stringify(this.currSpinData));
  }, o.compareFunction = function (e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
  }, o.parseReplayWinOddsType = function (e) {
    for (var t = Object.keys(e), a = Object.values(e).sort(this.compareFunction), i = 0; i < t.length; i++) this.data.parser.winOdds.push({
      level: i,
      reachRate: a[i]
    });
    Log.w("parseReplayWinOddsType", this.data.parser.winOdds);
  }, o.parseWinOddsTypes = function (e) {
    var t = e.winOddsTypes,
      a = Object.keys(t),
      i = Object.values(t).sort(this.compareFunction);
    Log.w("BigWinOdd values::::::::::", i);
    for (var s = 0; s < a.length; s++) this.data.parser.winOdds.push({
      level: s,
      reachRate: i[s]
    });
    Log.w("parseWinOddsTypes", this.data.parser.winOdds);
  }, o.parseLockTimesSymbol = function () {
    var e = this.currSpinData,
      t = this.preSpinData.timesSymbols;
    if (void 0 !== t) for (var a = 0; a < t.length; a++) {
      var i = t[a];
      void 0 !== i.lock && 1 == i.lock && this.data.parser.lockTimesSymbols.has(i.symbolPos) && this.data.parser.lockTimesSymbols.delete(i.symbolPos);
    }
    if (e.timesSymbols && e.timesSymbols.length > 0) {
      var s = e.timesSymbols.slice();
      this.isHaveNewLock = !1, this.newLockTimesSymbols.clear();
      for (var n = 0; n < s.length; n++) {
        var r = s[n];
        if (null != r.lock && r.lock > 0) {
          if (this.data.parser.lockTimesSymbols.get(r.symbolPos)) {
            this.data.parser.lockTimesSymbols.set(r.symbolPos, r);
            continue;
          }
          this.newLockTimesSymbols.set(r.symbolPos, r), this.isHaveNewLock = !0, this.data.parser.lockTimesSymbols.set(r.symbolPos, r);
        }
      }
      this.data.parser.lockTimesSymbols.size > 0 ? this.data.parser.isHaveLockSymbol = !0 : this.data.parser.isHaveLockSymbol = !1;
    } else this.data.parser.isHaveLockSymbol = !1;
  }, o.parseReplayLockTimesSymbol = function () {
    var e = this.data.gameState;
    if (this.isHaveNewLock = !1, this.preData.gameState) {
      var t = this.preData.gameState.timesSymbols;
      if (void 0 !== t) for (var a = 0; a < t.length; a++) {
        var i = t[a];
        i.lock && 1 == i.lock && this.data.parser.lockTimesSymbols.has(i.symbolPos) && this.data.parser.lockTimesSymbols.delete(i.symbolPos);
      }
    }
    for (var s = e.timesSymbols.slice(), n = 0; n < s.length; n++) {
      var r = s[n];
      if (null != r.lock && r.lock > 0) {
        if (this.data.parser.lockTimesSymbols.get(r.symbolPos)) {
          this.data.parser.lockTimesSymbols.set(r.symbolPos, r);
          continue;
        }
        this.newLockTimesSymbols.set(r.symbolPos, r), this.isHaveNewLock = !0, this.data.parser.lockTimesSymbols.set(r.symbolPos, r);
      }
    }
    this.data.parser.lockTimesSymbols.size > 0 ? this.data.parser.isHaveLockSymbol = !0 : this.data.parser.isHaveLockSymbol = !1;
  }, o.setNewInitData = function (e) {
    this.__projectCLocalOperation = e.localBackend === true;
    if (this.__projectCLocalOperation && e.isResuming) {
      if (!Number.isInteger(e.localResumeIndex) || e.localResumeIndex < 0 || e.localResumeIndex >= e.engine.gameState.length) throw new RangeError('Invalid Project-C resume cursor');
      this.currSpinIndex = e.localResumeIndex;
    }
    var t = e.engine,
      a = e.isResuming,
      i = e.platform;
    i.game.superMgRealStakeLimit && i.game.superMgRealStakeLimit > 0 && (this.data.superMgRealStakeLimit = i.game.superMgRealStakeLimit), this.data.newGameState = t.gameState.slice(), this.setPreSpinData(), this.data.definition = t.definition, this.data.isResuming = a, this.data.spinId = t.spinId, 0 == this.data.isResuming && (this.currSpinIndex = this.data.newGameState.length - 1), this.data.gameState = this.currSpinData, this.parseView(this.currSpinData), this.parseWinOddsTypes(t.definition);
    if (this.__projectCLocalOperation && e.isResuming) {
      // Resume flow reads the genuinely preceding winning stage for multiplier
      // movement; the original initialization snapshots the current stage.
      if (this.currSpinIndex > 0) this.preSpinData = JSON.parse(JSON.stringify(this.data.newGameState[this.currSpinIndex - 1]));
      this.parseNewTimesSymbols(this.currSpinData);
      this.data.parser.lockTimesSymbols.clear();
      this.parseLockTimesSymbol();
    }
  }, o.setNewSpinData = function (e) {
    this.__projectCLocalOperation = e.localBackend === true;
    var t = e.engine;
    this.data.newGameState = t.gameState.slice(), this.data.spinId = t.spinId, this.currSpinIndex = 0, this.setPreSpinData(), this.data.gameState = this.currSpinData, this.parseView(this.currSpinData), this.parseNewTimesSymbols(this.currSpinData), this.parseLockTimesSymbol();
  }, o.judgeIsOpenEarlyFlag = function () {
    1 == this.data.newGameState.length && (_dependency6.default.spinsRemaining > 1 || -1 == _dependency6.default.spinsRemaining) && _dependency6.default.active && _dependency12.default.isTurbo && this.currentGameType == _dependency11.EGameType.MAIN_GAME ? this.isOpenEarlyFlag = !0 : (this.isOpenEarlyFlag = !1, this.earlyData = null);
  }, o.setNextSpinData = function () {
    this.setPreSpinData(), this.currSpinIndex++, this.data.gameState = this.currSpinData, this.parseView(this.currSpinData), this.parseNewTimesSymbols(this.currSpinData), this.parseLockTimesSymbol();
    const runtime = globalThis.ProjectCCreatorLocalBackend;
    if (this.__projectCLocalOperation && runtime && typeof runtime.markStage === 'function') runtime.markStage(this.data.spinId, this.currSpinData.currentView);
  }, o.setReplayCurrentView = function (e) {
    this.setPreData(), this.data.gameState = e.engine, this.ReplayParseView(e), this.ReplayParseTimesSymbols(e), this.parseReplayLockTimesSymbol();
  }, o.setReplayInit = function (e) {
    var t = e.definition ? e.definition.digital : _dependency8.default.getData().digital,
      i = e.definition ? e.definition.winOddsTypes : _dependency8.default.getData().winOddsTypes,
      s = e.definition ? e.definition.extraFgRounds : _dependency8.default.getData().extraFgRounds;
    this.data.definition = _dependency.extends({
      digital: t,
      winOddsTypes: this.parseReplayWinOddsType(i),
      extraFgRounds: s
    }, this.data.definition), _dependency12.default.getData().autoCloseTime = 3, _dependency12.default.getData().bigwinAutoCloseTime = 5;
  }, o.setBigWinReach = function (e) {
    var t = this.data.gameState.totalStake,
      a = this.data.parser.winOdds,
      i = e / t;
    this.data.parser.bigwinReach = null;
    for (var s = 0; s < a.length; s++) i >= a[s].reachRate && (this.data.parser.bigwinReach = a[s]);
    return this.data.parser.bigwinReach;
  }, o.setNewBigWinReach = function (e) {
    var t = this.currSpinData.totalStake,
      a = this.data.parser.winOdds,
      i = e / t;
    this.data.parser.bigwinReach = null;
    for (var s = 0; s < a.length; s++) i >= a[s].reachRate && (this.data.parser.bigwinReach = a[s]);
    return this.data.parser.bigwinReach;
  }, o.getSymbolSpriteFrame = function (e) {
    var t = _dependency12.default.getData().filePaths.symbolsSpriteFrame,
      a = "symbol_" + e,
      i = App.cache.get(s.module, t).data.find(function (e) {
        return e.name === a;
      });
    if (!i) throw new Error("NOT FIND 所需圖片 " + a);
    return i;
  }, o.getSymbolAnimSpine = function (e) {
    var t = _dependency12.default.getData().filePaths.symbolsSkeletonData,
      a = "symbol_" + e,
      i = App.cache.get(s.module, t).data.find(function (e) {
        return e.name === a;
      });
    if (!i) throw new Error("NOT FIND 所需sp.SkeletonData " + a);
    return i;
  }, o.getGameAlertSpine = function (e) {
    var t = _dependency12.default.getData().filePaths.gameAlertsSkeletonData,
      a = App.cache.get(s.module, t).data.find(function (t) {
        return t.name === e;
      });
    if (!a) throw new Error("NOT FIND 所需sp.SkeletonData " + e);
    return a;
  }, o.getCommonSpriteFrame = function (e) {
    var t = _dependency12.default.getData().filePaths.common,
      a = App.cache.get(s.module, t).data.find(function (t) {
        return t.name === e;
      });
    if (!a) throw new Error("NOT FIND 所需spriteFrame " + e);
    return a;
  }, o.getLocaleSpriteFrame = function (e) {
    var t = _dependency12.default.getData().filePaths.localeSpriteFrame,
      a = App.cache.get(s.module, t).data.find(function (t) {
        return t.name === e;
      });
    if (!a) throw new Error("NOT FIND 所需spriteFrame " + e);
    return a;
  }, o.getTransitionSpine = function (e) {
    var t = _dependency12.default.getData().filePaths.transitionsSkeletonData,
      a = App.cache.get(s.module, t).data.find(function (t) {
        return t.name === e;
      });
    if (!a) throw new Error("NOT FIND 所需skeletonData " + e);
    return a;
  }, o.getIsFGFinish = function () {
    var e = this.data.gameState,
      t = e.currentView,
      a = e.totalViews,
      i = (e.spinId, e.startFreeGame, e.action);
    return t + 1 === a && "freeSpin" == i;
  }, o.getIsSuperMainGameFinish = function () {
    var e = this.data.gameState,
      t = e.currentView,
      a = e.totalViews,
      i = (e.spinId, e.startFreeGame, e.action);
    return t + 1 === a && i == _dependency11.EActionType.SUPER_GAME;
  }, o.getIsBigWinReach = function () {
    return null != this.data.parser.bigwinReach;
  }, o.saveOriginGameData = function () {
    this.originGameData = _dependency1.ObjectUtils.clone(this.data), _dependency9.default.saveOriginData(), _dependency7.default.saveOriginData();
  }, o.restoreCurrentGameData = function () {
    this.originGameData ? (this.data = _dependency1.ObjectUtils.clone(this.originGameData), this.currentGameType = _dependency11.EGameType.MAIN_GAME, this.originGameData = null) : console.warn("No originGameData to restore."), _dependency9.default.restoreCurrentData(), _dependency7.default.restoreCurrentData();
  }, _dependency.createClass(s, [{
    key: "currentGameType",
    get: function () {
      return this._currentGameType;
    },
    set: function (e) {
      this.previousGameType = this._currentGameType, this._currentGameType = e, dispatch(_dependency10.GameEvent.UPDATE_GAME_TYPE, {
        data: this._currentGameType
      });
    }
  }, {
    key: "currSpinData",
    get: function () {
      return this.data.newGameState[this.currSpinIndex];
    }
  }]), s;
}(_dependency5.GameDataBase)).module = _dependency4.EBundles[_dependency4.EBundles.g1009], _dependency2.cclegacy._RF.pop();
