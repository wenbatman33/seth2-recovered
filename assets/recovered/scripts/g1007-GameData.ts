// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameData.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-GameDataBase";
import * as __dependency_4 from "./framework-StakeModel";
import * as __dependency_5 from "./framework-DefinitionModel";
import * as __dependency_6 from "./framework-PlatformModel";
import * as __dependency_7 from "./framework-ReplayModel";
import * as __dependency_8 from "./framework-MathUtil";
import * as __dependency_9 from "./framework-ObjectUtils";
import * as __dependency_10 from "./g1007-types";
import * as __dependency_11 from "./g1007-GameConfigModel";
import * as __dependency_12 from "./g1007-GameSymbolID";
import * as __dependency_13 from "./framework-SlotFrameworkEvent";
var __export_0;
export { __export_0 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, a, n, r, i, s, u, o, c, l, d, p, h, f, m, S, g, y;
__dependency_1.cclegacy._RF.push({}, "893bd+Gwy1HOq/h+7Tpfurr", "GameData", void 0), __publish("default", function (t) {
  function n() {
    for (var e, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
    return (e = Reflect.construct(t, [this].concat(n).slice(1), new.target || this.constructor) || this).GAME_VERSION = "1.0.27_2", e.preData = void 0, e._currentGameType = void 0, e.previousGameType = void 0, e.originTurbo = !1, e.replayData = null, e.originGameData = null, e.featureData = null, e;
  }
  __dependency_0.inheritsLoose(n, t);
  var r = n.prototype;
  return r.init = function () {
    this.data = {
      symbolPosConfig: __dependency_12.GameSymbolID.makeSymbolPosConfig(),
      gameState: null,
      buyFeatureType: null,
      buyFeature: null,
      definition: null,
      isResuming: !1,
      isXtraBet: !1,
      spinId: "",
      parser: {
        currentSpinIndex: null,
        currentGameState: null,
        bigwinReach: null,
        winOdds: [],
        currentSpinIsEmpty: null
      },
      bonusState: null,
      newGroupSymbols: null
    };
  }, r.onDestory = function () {}, r.clear = function () {}, r.debug = function () {
    Log.d("" + this.module);
  }, r.parseWinOddsTypes = function (t) {
    var e = t.winOddsTypes,
      a = Object.values(e);
    a.sort(function (t, e) {
      return t - e;
    });
    for (var n = 0; n < a.length; n++) this.data.parser.winOdds.push({
      level: n,
      reachRate: a[n]
    });
  }, r.setInitData = function (t) {
    var e = this,
      a = t.engine,
      n = t.isResuming,
      r = t.platform;
    this.data.gameState = a.gameState.slice(), this.data.buyFeatureType = a.buyFeatureType, this.data.buyFeature = a.definition.buyFeature, r.game.buyFeatureStakeLimit && Object.entries(r.game.buyFeatureStakeLimit).forEach(function (t) {
      var a = t[0],
        n = t[1];
      console.log("Key: " + a + ", Value: " + n), e.data.buyFeature.forEach(function (t) {
        t.feature == a && (t.stakeLimit = n);
      });
    }), this.data.spinId = a.spinId, this.data.definition = a.definition, this.data.bonusState = null == a ? void 0 : a.bonusState, this.data.isResuming = n, this.data.isXtraBet = a.isXtraBet, this.data.parser.currentSpinIndex = 0, this.data.isResuming ? this.data.parser.currentGameState = this.data.gameState[0] : this.data.parser.currentGameState = this.data.gameState[this.data.gameState.length - 1], this.parseWinOddsTypes(a.definition), this.data.newGroupSymbols = this.data.parser.currentGameState.groupSymbols;
  }, r.setReplayInitData = function (t) {
    var e,
      a = t.betData,
      n = t.definition,
      r = t.betData.replayMeta;
    switch (n || (n = __dependency_5.default.getData()), __dependency_7.default.isReplay = !0, this.replayData = t, __dependency_6.default.amount = r.amount, dispatch(__dependency_13.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
      data: {
        balance: r.amount
      }
    }), a.isJp) {
      case __dependency_10.EBonusType.NO_WIN_REWARD:
      case __dependency_10.EBonusType.JP_GAME:
      case __dependency_10.EJackpotType.MINI:
      case __dependency_10.EJackpotType.MINOR:
      case __dependency_10.EJackpotType.MAJOR:
      case __dependency_10.EJackpotType.GRAND:
        var i;
        null != (null == (i = e = a.theResult[2].engine) ? void 0 : i.picked) || (e.picked = []);
        break;
      default:
        e = a.bonusData;
    }
    this.data.gameState = this.parserBetData(a), this.data.definition = n, this.data.bonusState = e, this.data.parser.currentSpinIndex = 0, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.data.newGroupSymbols = this.data.parser.currentGameState.groupSymbols, this.data.buyFeatureType = null == r ? void 0 : r.buyFeatureType, this.data.buyFeature = null == r ? void 0 : r.buyFeature, this.data.isXtraBet = null == r ? void 0 : r.isXtraBet, this.parseWinOddsTypes(n), __dependency_11.default.setIsXtraBetOn(null == r ? void 0 : r.isXtraBet);
  }, r.setSpinData = function (t) {
    var e;
    t.engine.spinId !== this.data.spinId && (this.data.gameState = t.engine.gameState), this.data.parser.currentSpinIndex = 0, this.data.parser.currentGameState = this.data.gameState[0], this.data.parser.currentSpinIsEmpty = 0 === this.data.gameState[0].winSymbols.length, this.data.spinId = t.engine.spinId, this.data.bonusState = null == (e = t.engine) ? void 0 : e.bonusState, this.data.buyFeatureType = t.engine.buyFeatureType, this.data.isXtraBet = t.engine.isXtraBet, this.data.newGroupSymbols = this.data.parser.currentGameState.groupSymbols.filter(function (t) {
      return t.isNew;
    });
  }, r.saveOriginGameData = function () {
    this.originGameData = __dependency_9.ObjectUtils.clone(this.data), __dependency_6.default.saveOriginData(), __dependency_4.default.saveOriginData();
  }, r.restoreCurrentGameData = function () {
    this.originGameData ? (this.data = __dependency_9.ObjectUtils.clone(this.originGameData), this.currentGameType = __dependency_10.EGameType.MAIN_GAME, this.originGameData = null) : Log.w("No originGameData to restore."), __dependency_6.default.restoreCurrentData(), __dependency_4.default.restoreCurrentData();
  }, r.parserBetData = function (t) {
    return t.theResult.map(function (t) {
      return t.engine;
    });
  }, r.reset = function () {
    this.data.parser.currentSpinIndex = 0;
  }, r.setNextSpinData = function () {
    this.setPreData(), this.data.parser.currentSpinIndex++, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.data.newGroupSymbols = this.data.parser.currentGameState.groupSymbols.filter(function (t) {
      return t.isNew;
    });
  }, r.setReplayNextBonusData = function () {
    var t;
    (null == (t = this.data.bonusState) ? void 0 : t.bonusType) === __dependency_10.EBonusType.JP_GAME && (this.data.parser.currentSpinIndex++, this.data.bonusState = this.replayData.betData.theResult[this.data.parser.currentSpinIndex].engine);
  }, r.setReplayInitBonusData = function () {
    this.data.parser.currentSpinIndex = 2, this.data.bonusState = this.replayData.betData.theResult[2].engine;
  }, r.setPreData = function () {
    this.preData = JSON.parse(JSON.stringify(this.data));
  }, r.getAllScattersPos = function () {
    var t = __dependency_8.default.flattenArray(this.data.parser.currentGameState.view),
      e = [];
    return t.forEach(function (t, a) {
      t == __dependency_12.EBackendSymbolID.SCATTER && e.push(a);
    }), e;
  }, r.getAllJackpotsPos = function () {
    var t = __dependency_8.default.flattenArray(this.data.parser.currentGameState.view),
      e = [];
    return t.forEach(function (t, a) {
      t == __dependency_12.EBackendSymbolID.JACKPOT && e.push(a);
    }), e;
  }, r.getScattersCols = function () {
    for (var t = __dependency_8.default.flattenArray(this.data.parser.currentGameState.view), e = [], a = 0; a < __dependency_12.GameSymbolID.COL - 1; a++) for (var n = __dependency_12.GameSymbolID.TOTAL_SYMBOL - __dependency_12.GameSymbolID.ROW + a; n >= 0; n -= __dependency_12.GameSymbolID.ROW) t[n] == __dependency_12.EBackendSymbolID.SCATTER && e.push(this.getPosToRowCol(n).col);
    return e.sort(function (t, e) {
      return t - e;
    });
  }, r.getAllScattersCols = function () {
    var t = this,
      e = __dependency_8.default.flattenArray(this.data.parser.currentGameState.view),
      a = [];
    return e.forEach(function (e, n) {
      if (e == __dependency_12.EBackendSymbolID.SCATTER) {
        var r = t.getPosToRowCol(n).col;
        a.push(r);
      }
    }), a.sort(function (t, e) {
      return t - e;
    });
  }, r.getWinningsSum = function () {
    var t = this.data.parser.currentGameState.winSymbols,
      e = 0;
    return t.forEach(function (t) {
      e += t.winnings;
    }), e;
  }, r.getMultipleWinnings = function () {
    var t = this.data.parser.currentGameState,
      e = t.winSymbols,
      a = t.currentTimes,
      n = t.bonusTimes,
      r = a > n ? a : n,
      i = 0;
    return e.forEach(function (t) {
      i += t.winnings;
    }), i * r;
  }, r.checkIsMG = function () {
    return "spin" == this.data.parser.currentGameState.action;
  }, r.setBigWinReach = function (t) {
    var e = this.data.parser.currentGameState.totalStake,
      a = this.data.parser.winOdds,
      n = t / e;
    this.data.parser.bigwinReach = null;
    for (var r = 0; r < a.length; r++) n >= a[r].reachRate && (this.data.parser.bigwinReach = a[r]);
    return this.data.parser.bigwinReach;
  }, r.checkIsExpect = function () {
    return this.getScattersCols().length >= 2;
  }, r.checkIsSpecifyMultiple = function () {
    return this.data.parser.currentGameState.bonusTimes > 0;
  }, r.checkIsEmptySpinWithJP = function () {
    var t;
    if (0 == this.data.parser.currentGameState.currentView) return (null == (t = this.data.bonusState) ? void 0 : t.bonusType) == __dependency_10.EBonusType.JP_GAME;
  }, r.checkIsBigPrize = function () {
    return this.data.parser.currentGameState.isBigPrize;
  }, r.getRowColToPos = function (t, e) {
    return t * __dependency_12.GameSymbolID.COL + e;
  }, r.getPosToRowCol = function (t) {
    return {
      row: Math.floor(t / __dependency_12.GameSymbolID.COL),
      col: t % __dependency_12.GameSymbolID.COL
    };
  }, __dependency_0.createClass(n, [{
    key: "currentGameType",
    get: function () {
      return this._currentGameType;
    },
    set: function (t) {
      this.previousGameType = this._currentGameType, this._currentGameType = t;
    }
  }]), n;
}(__dependency_3.GameDataBase)).module = __dependency_2.EBundles[__dependency_2.EBundles.g1007], __dependency_1.cclegacy._RF.pop();
// Owned local continuation hook; original parsers and animation state remain.
const __advanceLocalStage=__export_0.prototype.setNextSpinData;
__export_0.prototype.setNextSpinData=function(...args){const result=__advanceLocalStage.apply(this,args);const data=this.getData();globalThis.__hadesLocalProgress?.(data.spinId,data.parser.currentGameState.currentView);return result;};
