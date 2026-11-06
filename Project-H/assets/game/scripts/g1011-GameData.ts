// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/main-GameDataBase";
import * as _dependency5 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency6 from "./g1011-types";
import * as _dependency7 from "./g1011-GameConfigModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency0 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency10 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency12 from "./g1011-NoBodyView";
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
var e, a, n, r, i, s, u, o, l, d, p, h, c, m, S, f, g, y, b;
_dependency2.cclegacy._RF.push({}, "8a48ab3QoBBJ43ntUu5ljum", "GameData", void 0), _publish("default", function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var e, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
    return (e = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).GAME_VERSION = "1.0.25", e.preData = void 0, e._currentGameType = _dependency6.EGameType.MAIN_GAME, e.previousGameType = void 0, e.tempAnimTopMap = new Map(), e.testStaticSpinFlag = !1, e.originTurbo = !1, e.replayData = null, e.tempReplayResponse = null, e.originGameData = null, e._wildDisplayedCols = new Set(), e;
  }
  _dependency.inheritsLoose(n, t);
  var s = n.prototype;
  return s.getExpectWinScatterRandomSymbolList = function (t) {
    var e = this.generateSequenceNumberList(2, 8, 9, 9);
    e = App.utils.shuffle(e);
    var a = [[3], [2], [1], [4], [5], [5], [5], [6], [2, 5], [1, 4], [1, 4], [0, 4], [0, 4]],
      n = a[_dependency2.randomRangeInt(0, a.length)];
    return this.substituteItemInArray(e, n, 9), e.slice();
  }, s.getExpectNoWinScatterRandomSymbolList = function () {
    var t = this.generateSequenceNumberList(2, 8, 12, 9);
    t = App.utils.shuffle(t);
    var e = [[1, 5, 9], [1, 5, 9], [1, 6, 10], [1, 6, 10], [1, 6, 10], [1, 4, 7], [0, 4, 9], [0, 4, 9], [0, 5, 9], [0, 6, 10], [0, 6], [0, 5], [0, 7]],
      a = e[_dependency2.pseudoRandomRangeInt(Date.now(), 0, e.length)];
    return this.substituteItemInArray(t, a, 9), t.slice();
  }, s.getExpectWinBonusRandomSymbolList = function (t) {
    var e = this.generateSequenceNumberList(2, 8, 9, 10);
    e = App.utils.shuffle(e);
    var a = [[3], [2], [1], [4], [5], [5], [5], [6], [2, 5], [1, 4], [1, 4], [0, 4], [0, 4]],
      n = a[_dependency2.pseudoRandomRangeInt(Date.now(), 0, a.length)];
    return this.substituteItemInArray(e, n, 10), e.slice();
  }, s.getExpectNoWinBonusRandomSymbolList = function () {
    var t = this.generateSequenceNumberList(2, 8, 12, 10);
    t = App.utils.shuffle(t);
    var e = [[1, 5, 9], [1, 5, 9], [1, 6, 10], [1, 6, 10], [1, 6, 10], [1, 4, 7], [0, 4, 9], [0, 4, 9], [0, 5, 9], [0, 6, 10], [0, 6], [0, 5], [0, 7]],
      a = e[_dependency2.pseudoRandomRangeInt(Date.now(), 0, e.length)];
    return this.substituteItemInArray(t, a, 10), t.slice();
  }, s.getFullExpectNoWinRandomSymbolList = function (t) {
    var e = this.generateSequenceNumberList(1, 8, 9, t);
    e = App.utils.shuffle(e);
    var a = [[5, 6, 7], [2, 3, 4], [1, 2, 3]],
      n = a[_dependency2.randomRangeInt(0, a.length)];
    return this.substituteItemInArray(e, n, t), e.slice();
  }, s.getFullExpectWinRandomSymbolList = function (t) {
    var e = this.generateSequenceNumberList(1, 8, 9, t);
    e = App.utils.shuffle(e);
    var a = [[8], [2, 3, 4, 8], [4, 5, 8], [1, 2, 8], [8]],
      n = a[_dependency2.randomRangeInt(0, a.length)];
    return this.substituteItemInArray(e, n, t), e.slice();
  }, s.substituteItemInArray = function (t, e, a) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      void 0 !== t[r] && (t[r] = a);
    }
    return t;
  }, s.generateSequenceNumberList = function (t, e, a, n) {
    void 0 === n && (n = void 0);
    for (var r = t, i = [], s = 0; s < a; s++) r > e && (r = t), r != n ? i.push(r) : i.push(++r), r++;
    return i;
  }, s.getCurrentFullComboSymbolId = function () {
    var t,
      e = null == (t = this.data.parser.currentGameState) ? void 0 : t.view;
    return e && e[0] ? e[0][0] : -1;
  }, s.getModifierCols = function () {
    var t,
      e,
      a,
      n = null == (t = this.data) || null == (e = t.parser) || null == (a = e.currentGameState) ? void 0 : a.modifier;
    if (!n || 0 === n.length) return [];
    var r = [];
    return n.forEach(function (t) {
      null != t && null != t.col && (r.includes(t.col) || r.push(t.col));
    }), r;
  }, s.addWildDisplayedCol = function (t) {
    this._wildDisplayedCols.add(t);
  }, s.removeWildDisplayedCol = function (t) {
    this._wildDisplayedCols.delete(t);
  }, s.isWildDisplayed = function (t) {
    return this._wildDisplayedCols.has(t);
  }, s.isWildCovered = function (t) {
    return this._wildDisplayedCols.has(t) || this.getModifierCols().includes(t);
  }, s.getWildCoveredCols = function () {
    var t = [].concat(this._wildDisplayedCols);
    return this.getModifierCols().forEach(function (e) {
      t.includes(e) || t.push(e);
    }), t.sort(function (t, e) {
      return t - e;
    });
  }, s.init = function () {
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
  }, s.onDestory = function () {}, s.clear = function () {}, s.debug = function () {
    Log.d("" + this.module);
  }, s.parseWinOddsTypes = function (t) {
    var e = t.winOddsTypes,
      a = Object.values(e).map(function (t) {
        return {
          reachRate: t
        };
      }).sort(function (t, e) {
        return t.reachRate - e.reachRate;
      });
    this.data.parser.winOdds = a.map(function (t, e) {
      return {
        level: e,
        reachRate: t.reachRate
      };
    });
  }, s.parserWinSymbols = function (t) {
    var e = this,
      a = [];
    if (null == t) return a;
    for (var n = function () {
        var n = t[r];
        if (n) {
          var i = [],
            s = 0;
          n.symbolPos.map(function (t) {
            var a = e.getPower(t);
            i.push([s, a]), s++;
          }), a.push({
            counts: n.counts,
            symbol: n.symbol,
            positions: i,
            winLine: n.winLine,
            winnings: n.winnings,
            symbolPos: n.symbolPos,
            payoutFactory: n.payoutFactory,
            type: n.type
          });
        }
      }, r = 0; r < t.length; r++) n();
    return a;
  }, s.parserTransformVO = function (t) {
    var e = this;
    if (t && (0 !== t.toSymbol.length || 0 !== t.toWild.length)) {
      var a;
      t.toSymbol && t.toSymbol.length > 0 ? a = t.toSymbol.slice() : t.toWild && t.toWild.length > 0 && (a = t.toWild.slice());
      var n = a.map(function (t) {
        var a = t.position,
          n = e.getReelAndIndex(a);
        return [n.reel, n.index];
      });
      return {
        symbol: a[0].newSymbol,
        positions: n
      };
    }
  }, s.getReelAndIndex = function (t) {
    var e = this.data.parser.reelResult.length;
    return {
      reel: t % e,
      index: Math.floor(t / e)
    };
  }, s.parserBetData = function (t) {
    return t.theResult.map(function (t) {
      return t.engine;
    });
  }, s.saveOriginGameData = function () {
    this.originGameData = _dependency1.ObjectUtils.clone(this.data), _dependency9.default.saveOriginData(), _dependency0.default.saveOriginData();
  }, s.restoreCurrentGameData = function () {
    this.originGameData ? (this.data = _dependency1.ObjectUtils.clone(this.originGameData), this.currentGameType = _dependency6.EGameType.MAIN_GAME, this.originGameData = null) : console.warn("No originGameData to restore."), _dependency9.default.restoreCurrentData(), _dependency0.default.restoreCurrentData();
  }, s.setReplayInitData = function (t) {
    this.replayData = t;
    var e = t.betData,
      a = t.definition;
    switch (a || (a = _dependency10.default.getData()), _dependency8.default.isReplay = !0, e.isJp) {
      case _dependency6.EBonusType.LUCKY_WEALTH:
        var n = e.theResult[2];
        this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.bonusState = n.engine, this.data.parser.currentSpinIndex = 1, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.parseWinOddsTypes(a);
        break;
      case _dependency6.EBonusType.FORTUNE_LANDING:
        var r = e.theResult[2];
        this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.bonusState = r.engine, this.data.parser.currentSpinIndex = 1, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.parseWinOddsTypes(a);
        break;
      case "jp-mini":
      case "jp-minor":
      case "jp-major":
      case "jp-grand":
        this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.parser.currentSpinIndex = 2, this.data.parser.currentGameState = this.data.gameState[1], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.parseWinOddsTypes(a);
        break;
      case _dependency6.EBonusType.JP_GAME:
        var i = e.theResult[2].engine;
        null != (null == i ? void 0 : i.pickPositions) || (i.pickPositions = []), this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.bonusState = i, this.data.parser.currentSpinIndex = 2, this.data.parser.currentGameState = this.data.gameState[1], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.parseWinOddsTypes(a);
        break;
      default:
        this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.bonusState = e.bonusData, this.data.parser.currentSpinIndex = 1, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.data.parser.currentViewWin = this.data.parser.winSymbols.reduce(function (t, e) {
          return t + e.winnings;
        }, 0), this.parseWinOddsTypes(a);
    }
    void 0 !== (null == e ? void 0 : e.isLuckyMoment) && (this.data.definition.isLuckyMoment = e.isLuckyMoment), Log.d("%c Replay Init Data ", _dependency11.getKeyStyle(_dependency11.KeyStyle.Response), this.data);
  }, s.setInitData = function (t) {
    var e = t.engine,
      a = t.isResuming;
    this.data.gameState = e.gameState.slice(), this.data.spinId = e.spinId, this.data.definition = e.definition, this.data.isResuming = a, this.data.parser.currentSpinIndex = 0, this.data.isResuming ? this.data.parser.currentGameState = this.data.gameState[0] : (this.data.parser.currentGameState = this.data.gameState[this.data.gameState.length - 1], this.data.parser.currentGameState.totalWinnings = 0), this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.data.parser.currentViewWin = this.data.parser.winSymbols.reduce(function (t, e) {
      return t + e.winnings;
    }, 0), this.parseWinOddsTypes(e.definition), Log.d("%c New Init Data ", _dependency11.getKeyStyle(_dependency11.KeyStyle.Response), this.data);
  }, s.setSpinData = function (t) {
    var e;
    (t.engine.spinId !== this.data.spinId || _dependency12.NoBodyView.isOpting) && (this.data.gameState = t.engine.gameState);
    var a = null != (e = t.engine.luckyMoment) ? e : t.engine.isLuckyMoment;
    void 0 !== a && (this.data.definition.isLuckyMoment = a), this.data.parser.currentSpinIndex = 0, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.data.parser.currentViewWin = this.data.parser.winSymbols.reduce(function (t, e) {
      return t + e.winnings;
    }, 0), this.data.spinId = t.engine.spinId, this.data.parser.currentSpinIsEmpty = (null == this.data.gameState[this.data.parser.currentSpinIndex].winSymbols || 0 === this.data.gameState[this.data.parser.currentSpinIndex].winSymbols.length) && 0 === this.data.parser.currentSpinIndex, Log.d("%c Spin Data ", _dependency11.getKeyStyle(_dependency11.KeyStyle.Response), this.data);
  }, s.reset = function () {
    this.data.parser.currentSpinIndex = 0;
  }, s.setNextSpinData = function () {
    this.setPreData(), this.data.parser.currentSpinIndex++, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.data.parser.reelResult = _dependency5.default.transposeArray(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.parserWinSymbols(this.data.parser.currentGameState.winSymbols), this.data.parser.currentViewWin = this.data.parser.winSymbols.reduce(function (t, e) {
      return t + e.winnings;
    }, 0), Log.d("%c next spin ", _dependency11.getKeyStyle(_dependency11.KeyStyle.Response), this.data);
  }, s.setReplayNextBonusData = function (t) {
    var e;
    if (void 0 === t && (t = !1), (null == (e = this.data.bonusState) ? void 0 : e.bonusType) === _dependency6.EBonusType.JP_GAME) {
      !t && this.data.parser.currentSpinIndex++, this.data.bonusState = this.replayData.betData.theResult[this.data.parser.currentSpinIndex].engine;
      var a = this.data.bonusState;
      a.pickPositions = [{
        position: a.positions,
        category: a.pickData
      }], a.totalWinnings = a.prize;
    }
  }, s.setPreData = function () {
    this.preData = _dependency1.ObjectUtils.clone(this.data);
  }, s.hasWinSymbols = function () {
    var t = this.data.parser.currentGameState.winSymbols;
    return null != t && t.length > 0;
  }, s.hasWinnings = function () {
    var t = this.data.parser.currentGameState.currentWinnings;
    return this.hasWinSymbols() || t > 0;
  }, s.setBigWinReach = function (t) {
    var e = this.data.parser.currentGameState.totalStake,
      a = this.data.parser.winOdds,
      n = t / e;
    this.data.parser.bigwinReach = null;
    for (var r = 0; r < a.length; r++) n >= a[r].reachRate && (this.data.parser.bigwinReach = a[r]);
    return this.data.parser.bigwinReach;
  }, s.getLocaleSpriteFrame = function (t) {
    var e = _dependency7.default.getData().filePaths.localeSpriteFrame,
      a = App.cache.get(n.module, e).data.find(function (e) {
        return e.name === t;
      });
    if (!a) throw new Error("NOT FIND 所需spriteFrame " + t);
    return a;
  }, s.getGameAlertSpine = function (t) {
    var e = _dependency7.default.getData().filePaths.gameAlertsSkeletonData,
      a = App.cache.get(n.module, e);
    Log.d("%c data ", "color:#ff0000", a);
    var r = a.data.find(function (e) {
      return e.name === t;
    });
    if (!r) throw new Error("NOT FIND 所需sp.SkeletonData " + t);
    return r;
  }, s.areAllElementsEqual = function (t) {
    if (0 === t.length || 0 === t[0].length) return !0;
    for (var e = t[0][0], a = 0; a < t.length; a++) for (var n = 0; n < t[a].length; n++) if (t[a][n] !== e) return !1;
    return !0;
  }, s.getPower = function (t) {
    return t <= 0 || 0 != (t & t - 1) ? -1 : Math.log2(t);
  }, _dependency.createClass(n, [{
    key: "currentGameType",
    get: function () {
      return this._currentGameType;
    },
    set: function (t) {
      this.previousGameType = this._currentGameType, this._currentGameType = t;
    }
  }]), n;
}(_dependency4.GameDataBase)).module = _dependency3.EBundles[_dependency3.EBundles.g1011], _dependency2.cclegacy._RF.pop();

// Local simulation saved-progress bridge; preserves original native parser methods.
import { EDITOR as __localEditor } from "cc/env";
import { installProgressHooks as __installLocalProgress } from "../backend/ProgressHooks";
if(!__localEditor)__installLocalProgress(_export,globalThis.globalProjectH);
