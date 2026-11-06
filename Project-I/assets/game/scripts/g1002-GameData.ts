import { EDITOR as __projectILocalEditor } from 'cc/env';
import { installProgressHooks as __projectIInstallHook } from '../backend/ProgressHooks';
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/main-GameDataBase";
import * as _dependency5 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency6 from "./g1002-types";
import * as _dependency7 from "./g1002-GameConfigModel";
import * as _dependency8 from "./g1002-GameSymbolID";
import * as _dependency9 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency0 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency11 from "../../shared/scripts/slotFramework-DefinitionModel";
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
var e, a, r, s, n, i, u, o, l, d, h, p, c, m, S, f, b, g;
_dependency2.cclegacy._RF.push({}, "8a48ab3QoBBJ43ntUu5ljum", "GameData", void 0), _publish("default", function (t) {
  var _nativeConstructor = r;
  function r() {
    for (var e, a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
    return (e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this).GAME_VERSION = "1.2.4_2", e.preData = void 0, e._currentGameType = void 0, e.previousGameType = void 0, e.tempAnimTopMap = new Map(), e.testStaticSpinFlag = !1, e.originTurbo = !1, e.replayData = null, e.tempReplayResponse = null, e.originGameData = null, e;
  }
  _dependency.inheritsLoose(r, t);
  var i = r.prototype;
  return i.getExpectWinScatterRandomSymbolList = function (t) {
    void 0 === t && (t = 0);
    var e = this.generateSequenceNumberList(2, 8, 9, 9);
    e = App.utils.shuffle(e);
    var a = [[3], [2], [1], [4], [5], [5], [5], [6], [2, 5], [1, 4], [1, 4], [0, 4], [0, 4]];
    2 == t && (a = [[3], [2], [1], [4], [5], [5], [5], [6], [2, 5], [1, 4], [1, 4], [0, 4], [0, 4]]);
    var r = a[_dependency2.randomRangeInt(0, a.length)];
    return this.substituteItemInArray(e, r, 9), e.slice();
  }, i.getExpectNoWinScatterRandomSymbolList = function () {
    var t = this.generateSequenceNumberList(2, 8, 12, 9);
    t = App.utils.shuffle(t);
    var e = [[1, 5, 9], [1, 5, 9], [1, 6, 10], [1, 6, 10], [1, 6, 10], [1, 4, 7], [0, 4, 9], [0, 4, 9], [0, 5, 9], [0, 6, 10], [0, 6], [0, 5], [0, 7]],
      a = e[_dependency2.pseudoRandomRangeInt(Date.now(), 0, e.length)];
    return this.substituteItemInArray(t, a, 9), t.slice();
  }, i.getExpectWinBonusRandomSymbolList = function (t) {
    void 0 === t && (t = 0);
    var e = this.generateSequenceNumberList(2, 8, 9, 10);
    e = App.utils.shuffle(e);
    var a = [[3], [2], [1], [4], [5], [5], [5], [6], [2, 5], [1, 4], [1, 4], [0, 4], [0, 4]];
    2 == t && (a = [[3], [2], [1], [4], [5], [5], [5], [6], [2, 5], [1, 4], [1, 4], [0, 4], [0, 4]]);
    var r = _dependency2.pseudoRandomRangeInt(Date.now(), 0, a.length);
    Log.w("get bonus expect win::::stripIndex:::", r);
    var s = a[r];
    return this.substituteItemInArray(e, s, 10), Log.w("get bonus expect win::::reel:::", e), e.slice();
  }, i.getExpectNoWinBonusRandomSymbolList = function () {
    var t = this.generateSequenceNumberList(2, 8, 12, 10);
    t = App.utils.shuffle(t);
    var e = [[1, 5, 9], [1, 5, 9], [1, 6, 10], [1, 6, 10], [1, 6, 10], [1, 4, 7], [0, 4, 9], [0, 4, 9], [0, 5, 9], [0, 6, 10], [0, 6], [0, 5], [0, 7]],
      a = e[_dependency2.pseudoRandomRangeInt(Date.now(), 0, e.length)];
    return this.substituteItemInArray(t, a, 10), t.slice();
  }, i.getFullExpectNoWinRandomSymbolList = function (t) {
    var e = this.generateSequenceNumberList(1, 8, 9, t);
    e = App.utils.shuffle(e);
    var a = [[5, 6, 7], [2, 3, 4], [1, 2, 3]],
      r = a[_dependency2.randomRangeInt(0, a.length)];
    return this.substituteItemInArray(e, r, t), Log.w("full expect no win random symbol list", e), e.slice();
  }, i.getFullExpectWinRandomSymbolList = function (t) {
    var e = this.generateSequenceNumberList(1, 8, 9, t);
    e = App.utils.shuffle(e);
    var a = [[8], [2, 3, 4, 8], [4, 5, 8], [1, 2, 8], [8]],
      r = a[_dependency2.randomRangeInt(0, a.length)];
    return this.substituteItemInArray(e, r, t), Log.w("full expect  win random symbol list", e), e.slice();
  }, i.substituteItemInArray = function (t, e, a) {
    for (var r = 0; r < e.length; r++) {
      var s = e[r];
      void 0 !== t[s] && (t[s] = a);
    }
    return t;
  }, i.generateSequenceNumberList = function (t, e, a, r) {
    void 0 === r && (r = void 0);
    for (var s = t, n = [], i = 0; i < a; i++) s > e && (s = t), s != r ? n.push(s) : n.push(++s), s++;
    return n;
  }, i.getCurrentFullComboSymbolId = function () {
    var t = this.data.parser.currentGameState.view[0][0];
    return Log.w("current full combo symbol id:::::::", t), t;
  }, i.isFullBoard = function (t) {
    if (!t || 0 === t.length) return !1;
    for (var e = t[0][0], a = 0; a < t.length; a++) for (var r = 0; r < t[a].length; r++) {
      var s = t[a][r];
      if (s !== e && s !== _dependency8.EBackendSymbolID.WILD) return !1;
    }
    return !0;
  }, i.init = function () {
    this.data = {
      gameState: null,
      definition: null,
      isResuming: !1,
      spinId: "",
      parser: {
        reelResult: null,
        currentSpinIndex: null,
        currentGameState: null,
        winSymbols: null,
        toSymbolWildVO: null,
        bigwinReach: null,
        winOdds: [],
        currentSpinIsEmpty: null,
        currentViewWin: null
      },
      bonusState: null,
      bonusParserElixirFurnace: {
        timesList: null,
        timesListSort: null,
        currentTimes: null,
        currentTimesIndex: null
      }
    };
  }, i.onDestory = function () {}, i.clear = function () {}, i.debug = function () {
    Log.d("" + this.module);
  }, i.parseWinOddsTypes = function (t) {
    for (var e = t.winOddsTypes, a = Object.keys(e), r = Object.values(e), s = 0; s < a.length; s++) this.data.parser.winOdds.push({
      level: s,
      reachRate: r[s]
    });
  }, i.parserWinSymbols = function (t) {
    for (var e = this, a = [], r = function () {
        var r = t[s];
        if (r) {
          var n = [];
          r.symbolPos.map(function (t) {
            var a = e.getReelAndIndex(t),
              r = a.reel,
              s = a.index;
            n.push([r, s]);
          }), a.push({
            symbol: r.symbol,
            positions: n,
            winLine: r.winLine,
            winnings: r.winnings
          });
        }
      }, s = 0; s < t.length; s++) r();
    return a;
  }, i.parserTransformVO = function (t) {
    var e = this;
    if (t && (0 !== t.toSymbol.length || 0 !== t.toWild.length)) {
      var a;
      t.toSymbol && t.toSymbol.length > 0 ? a = t.toSymbol.slice() : t.toWild && t.toWild.length > 0 && (a = t.toWild.slice());
      var r = a.map(function (t) {
        var a = t.position,
          r = e.getReelAndIndex(a);
        return [r.reel, r.index];
      });
      return {
        symbol: a[0].newSymbol,
        positions: r
      };
    }
  }, i.getReelAndIndex = function (t) {
    var e = this.data.parser.reelResult.length;
    return {
      reel: t % e,
      index: Math.floor(t / e)
    };
  }, i.parserBetData = function (t) {
    return t.theResult.map(function (t) {
      return t.engine;
    });
  }, i.saveOriginGameData = function () {
    this.originGameData = _dependency10.ObjectUtils.clone(this.data), _dependency0.default.saveOriginData(), _dependency1.default.saveOriginData();
  }, i.restoreCurrentGameData = function () {
    this.originGameData ? (this.data = _dependency10.ObjectUtils.clone(this.originGameData), this.currentGameType = _dependency6.EGameType.MAIN_GAME, this.originGameData = null) : console.warn("No originGameData to restore."), _dependency0.default.restoreCurrentData(), _dependency1.default.restoreCurrentData();
  }, i.setReplayInitData = function (t) {
    this.replayData = t;
    var e = t.betData,
      a = t.definition;
    switch (a || (a = _dependency11.default.getData()), _dependency9.default.isReplay = !0, e.isJp) {
      case _dependency6.EBonusType.ELIXIR_FURNACE:
        var r,
          s = e.theResult[2];
        this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.bonusState = s.engine, this.data.parser.currentSpinIndex = 1, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.data.parser.toSymbolWildVO = this.parserTransformVO(null == (r = this.data.parser.currentGameState) ? void 0 : r.transformInfo), this.parseWinOddsTypes(a);
        break;
      case _dependency6.EBonusType.LUCKY_WEALTH:
        var n,
          i = e.theResult[2];
        this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.bonusState = i.engine, this.data.parser.currentSpinIndex = 1, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.data.parser.toSymbolWildVO = this.parserTransformVO(null == (n = this.data.parser.currentGameState) ? void 0 : n.transformInfo), this.parseWinOddsTypes(a);
        break;
      case _dependency6.EBonusType.FORTUNE_LANDING:
        var u,
          l = e.theResult[2];
        this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.bonusState = l.engine, this.data.parser.currentSpinIndex = 1, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.data.parser.toSymbolWildVO = this.parserTransformVO(null == (u = this.data.parser.currentGameState) ? void 0 : u.transformInfo), this.parseWinOddsTypes(a);
        break;
      case _dependency6.EBonusType.JP_GAME:
      case "jp-mini":
      case "jp-minor":
      case "jp-major":
      case "jp-grand":
        var h,
          p = e.theResult[2].engine;
        null != (null == p ? void 0 : p.pickPositions) || (p.pickPositions = []), this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.bonusState = p, this.data.parser.currentSpinIndex = 2, this.data.parser.currentGameState = this.data.gameState[1], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.data.parser.toSymbolWildVO = this.parserTransformVO(null == (h = this.data.parser.currentGameState) ? void 0 : h.transformInfo), this.parseWinOddsTypes(a);
        break;
      default:
        var c;
        this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.bonusState = e.bonusData, this.data.parser.currentSpinIndex = 1, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.data.parser.currentViewWin = this.data.parser.winSymbols.reduce(function (t, e) {
          return t + e.winnings;
        }, 0), this.data.parser.toSymbolWildVO = this.parserTransformVO(null == (c = this.data.parser.currentGameState) ? void 0 : c.transformInfo), this.parseWinOddsTypes(a);
    }
  }, i.setInitData = function (t) {
    var e,
      a = t.engine,
      r = t.isResuming;
    this.data.gameState = a.gameState.slice(), this.data.spinId = a.spinId, this.data.definition = a.definition, this.data.isResuming = r, this.setBonusState(t), this.data.parser.currentSpinIndex = 0, this.data.isResuming ? this.data.parser.currentGameState = this.data.gameState[0] : this.data.parser.currentGameState = this.data.gameState[this.data.gameState.length - 1], this.data.parser.currentGameState = this.data.gameState[0], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.data.parser.currentViewWin = this.data.parser.winSymbols.reduce(function (t, e) {
      return t + e.winnings;
    }, 0), this.data.parser.toSymbolWildVO = this.parserTransformVO(null == (e = this.data.parser.currentGameState) ? void 0 : e.transformInfo), this.parseWinOddsTypes(a.definition);
  }, i.setSpinData = function (t) {
    t.engine.spinId !== this.data.spinId && (this.data.gameState = t.engine.gameState), this.data.gameState = t.engine.gameState, this.data.parser.currentSpinIndex = 0, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.data.parser.currentViewWin = this.data.parser.winSymbols.reduce(function (t, e) {
      return t + e.winnings;
    }, 0), this.data.parser.toSymbolWildVO = this.parserTransformVO(this.data.parser.currentGameState.transformInfo), this.data.spinId = t.engine.spinId, this.setBonusState(t), this.data.parser.currentSpinIsEmpty = 0 === this.data.gameState[this.data.parser.currentSpinIndex].winSymbols.length && 0 === this.data.parser.currentSpinIndex;
  }, i.reset = function () {
    this.data.parser.currentSpinIndex = 0;
  }, i.setBonusState = function (t) {
    var e, a;
    if (this.data.bonusState = null == (e = t.engine) ? void 0 : e.bonusState, (null == (a = this.data.bonusState) ? void 0 : a.bonusType) === _dependency6.EBonusType.ELIXIR_FURNACE) {
      var r;
      if ((null == (r = this.data.bonusState) ? void 0 : r.action) !== _dependency6.BonusStateAction.GAMBLE) return;
      if (!this.data.bonusState.gambleResults) return;
      var s = this.data.bonusState;
      this.data.bonusParserElixirFurnace.timesList = s.gambleResults.map(function (t) {
        return t.times;
      }), this.data.bonusParserElixirFurnace.timesListSort = this.data.bonusParserElixirFurnace.timesList.slice().sort(function (t, e) {
        return t - e;
      }), this.data.bonusParserElixirFurnace.currentTimes = s.gambleResults[0].times, this.data.bonusParserElixirFurnace.currentTimesIndex = this.data.bonusParserElixirFurnace.timesList.indexOf(this.data.bonusParserElixirFurnace.currentTimes);
    }
  }, i.setNextSpinData = function () {
    this.setPreData(), this.data.parser.currentSpinIndex++, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.data.parser.currentViewWin = this.data.parser.winSymbols.reduce(function (t, e) {
      return t + e.winnings;
    }, 0), this.data.parser.toSymbolWildVO = this.parserTransformVO(this.data.parser.currentGameState.transformInfo), Log.d("*** next spin ***", this.data);
  }, i.setReplayNextBonusData = function (t) {
    var e, a, r;
    if (void 0 === t && (t = !1), (null == (e = this.data.bonusState) ? void 0 : e.bonusType) === _dependency6.EBonusType.ELIXIR_FURNACE) {
      if (!t && this.data.parser.currentSpinIndex++, this.data.bonusState = this.replayData.betData.theResult[this.data.parser.currentSpinIndex].engine, (null == (r = this.data.bonusState) ? void 0 : r.action) === _dependency6.BonusStateAction.GAMBLE && this.data.bonusState.gambleResults) {
        var s = this.data.bonusState;
        this.data.bonusParserElixirFurnace.timesList = s.gambleResults.map(function (t) {
          return t.times;
        }), this.data.bonusParserElixirFurnace.timesListSort = this.data.bonusParserElixirFurnace.timesList.slice().sort(function (t, e) {
          return t - e;
        }), this.data.bonusParserElixirFurnace.currentTimes = s.gambleResults[0].times, this.data.bonusParserElixirFurnace.currentTimesIndex = this.data.bonusParserElixirFurnace.timesList.indexOf(this.data.bonusParserElixirFurnace.currentTimes);
      }
    } else if ((null == (a = this.data.bonusState) ? void 0 : a.bonusType) === _dependency6.EBonusType.JP_GAME) {
      !t && this.data.parser.currentSpinIndex++, this.data.bonusState = this.replayData.betData.theResult[this.data.parser.currentSpinIndex].engine;
      var n = this.data.bonusState.positions,
        i = this.data.bonusState.pickData,
        u = this.data.bonusState.prize;
      this.data.bonusState.pickPositions = [{
        position: n,
        category: i
      }], this.data.bonusState.totalWinnings = u;
    }
  }, i.setPreData = function () {
    this.preData = _dependency10.ObjectUtils.clone(this.data);
  }, i.setBigWinReach = function (t) {
    var e = this.data.parser.currentGameState.totalStake,
      a = this.data.parser.winOdds,
      r = t / e;
    this.data.parser.bigwinReach = null;
    for (var s = 0; s < a.length; s++) r >= a[s].reachRate && (this.data.parser.bigwinReach = a[s]);
    return this.data.parser.bigwinReach;
  }, i.getLocaleSpriteFrame = function (t) {
    var e = _dependency7.default.getData().filePaths.localeSpriteFrame,
      a = App.cache.get(r.module, e).data.find(function (e) {
        return e.name === t;
      });
    if (!a) throw new Error("NOT FIND 所需spriteFrame " + t);
    return a;
  }, i.getTransitionSpine = function (t) {
    var e = _dependency7.default.getData().filePaths.transitionsSkeletonData,
      a = App.cache.get(r.module, e).data.find(function (e) {
        return e.name === t;
      });
    if (!a) throw new Error("NOT FIND 所需skeletonData " + t);
    return a;
  }, i.getGameAlertSpine = function (t) {
    var e = _dependency7.default.getData().filePaths.gameAlertsSkeletonData,
      a = App.cache.get(r.module, e);
    Log.d("%c data ", "color:#ff0000", a);
    var s = a.data.find(function (e) {
      return e.name === t;
    });
    if (!s) throw new Error("NOT FIND 所需sp.SkeletonData " + t);
    return s;
  }, i.areAllElementsEqual = function (t) {
    if (0 === t.length || 0 === t[0].length) return !0;
    for (var e = t[0][0], a = 0; a < t.length; a++) for (var r = 0; r < t[a].length; r++) if (t[a][r] !== e) return !1;
    return !0;
  }, i.is30TimesAnd5Trans = function () {
    var t = this.getData().parser.currentGameState,
      e = t.transformInfo,
      a = t.currentTimes,
      r = this.getData().parser.currentViewWin,
      s = _dependency1.default.getData().totalStake,
      n = [].concat(e.toSymbol, e.toWild);
    return r * a >= 30 * s && n.length >= 5;
  }, _dependency.createClass(r, [{
    key: "currentGameType",
    get: function () {
      return this._currentGameType;
    },
    set: function (t) {
      this.previousGameType = this._currentGameType, this._currentGameType = t;
    }
  }]), r;
}(_dependency4.GameDataBase)).module = _dependency3.EBundles[_dependency3.EBundles.g1002], _dependency2.cclegacy._RF.pop();

// Project-I owned progress hook: preserve the original frontend and Editor isolation.
if(!__projectILocalEditor)__projectIInstallHook(_export, globalThis.globalProjectI);
