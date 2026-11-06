// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/main-GameDataBase";
import * as _dependency5 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency6 from "./g1004-types";
import * as _dependency7 from "./g1004-GameConfigModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency9 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency0 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-ReplayModel";
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
var e, a, r, n, i, s, o, u, l, p, d, c, h, m, S;
_dependency2.cclegacy._RF.push({}, "8a48ab3QoBBJ43ntUu5ljum", "GameData", void 0), _publish("default", function (t) {
  var _nativeConstructor = r;
  function r() {
    for (var e, a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
    return (e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this).GAME_VERSION = "1.1.3_1", e.preData = void 0, e._originTurbo = null, e._currentGameType = _dependency6.EGameType.MAIN_GAME, e.previousGameType = void 0, e.originGameData = null, e.replayData = null, e.tempReplayResponse = null, e.oldTick = _dependency2.director.tick, e._speed = 1, e;
  }
  _dependency.inheritsLoose(r, t);
  var i = r.prototype;
  return i.init = function () {
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
        bigWinReach: null,
        winOdds: [],
        currentSpinIsEmpty: null,
        currentViewMap: null
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
    for (var e = t.winOddsTypes, a = Object.keys(e), r = Object.values(e), n = 0; n < a.length; n++) this.data.parser.winOdds.push({
      level: n,
      reachRate: r[n]
    });
  }, i.parserTransformVO = function (t) {
    var e = this;
    if (t && (0 !== t.toSymbol.length || 0 !== t.toWild.length)) {
      var a = (null == t ? void 0 : t.toSymbol) || (null == t ? void 0 : t.toWild),
        r = a.map(function (t) {
          var a = t.position,
            r = e.getReelAndIndex(a);
          return [r.reel, r.index];
        });
      return r.sort(function (t, e) {
        return t[0] - e[0];
      }), {
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
  }, i.setInitData = function (t) {
    var e,
      a = t.engine,
      r = t.isResuming;
    this.data.gameState = a.gameState.slice(), this.data.spinId = a.spinId, this.data.definition = a.definition, this.data.bonusState = a.bonusState, this.data.isResuming = r;
    var n = this.data.parser;
    n.currentSpinIndex = 0, n.currentGameState = r ? this.data.gameState[0] : this.data.gameState[this.data.gameState.length - 1], this.parserViewMapToResult(n.currentGameState.view), n.winSymbols = n.currentGameState.winSymbols, n.toSymbolWildVO = this.parserTransformVO(null == (e = n.currentGameState) ? void 0 : e.transformInfo), this.parseWinOddsTypes(a.definition);
  }, i.setSpinData = function (t) {
    var e = t.engine;
    e.spinId !== this.data.spinId && (this.data.gameState = e.gameState), this.data.spinId = e.spinId, this.data.bonusState = null == e ? void 0 : e.bonusState;
    var a = this.data.parser;
    a.currentSpinIndex = 0;
    var r = this.data.gameState[a.currentSpinIndex];
    r && (a.currentGameState = r, this.parserViewMapToResult(r.view), a.winSymbols = r.winSymbols, a.toSymbolWildVO = this.parserTransformVO(r.transformInfo), a.currentSpinIsEmpty = 0 === r.winSymbols.length && 0 === a.currentSpinIndex);
  }, i.setNextSpinData = function () {
    this.setPreData();
    var t = this.data.parser;
    t.currentSpinIndex++;
    var e = this.data.gameState[t.currentSpinIndex];
    e && (t.currentGameState = e, this.parserViewMapToResult(e.view), t.winSymbols = e.winSymbols, t.toSymbolWildVO = this.parserTransformVO(e.transformInfo));
  }, i.parserViewMapToResult = function (t) {
    var e = this.data.parser;
    return e.totalResult = t.slice(0, 1).concat(_dependency5.default.transposeArray(t.slice(1, 6))), this.parserResultToViewMap(e.totalResult);
  }, i.parserResultToViewMap = function (t) {
    var e = this.data.parser,
      a = 0,
      r = new Map();
    return t.forEach(function (t, e) {
      if (0 === e) t.forEach(function (t, n) {
        var i = {
          position: a,
          symbolID: t,
          order: a + 2,
          reelIndex: e,
          groupCount: 1,
          level: 0
        };
        r.set(a, i), a++;
      });else {
        t.forEach(function (t, a) {
          var n = 4 + e + (a > 0 ? 6 : 0) * a - 1,
            i = {
              position: n,
              symbolID: t,
              order: e,
              reelIndex: e,
              groupCount: 1,
              level: 0
            };
          r.set(n, i);
        });
      }
    }), e.currentViewMap = r, this.parserGroupSymbols(), this.parserGroupLevelSymbols(), e.currentViewMap;
  }, i.parserGroupSymbols = function () {
    var t = this.data.parser.currentGameState.groupSymbols,
      e = this.data.parser.currentViewMap;
    t && t.map(function (t) {
      for (var a = t.symbolPos.length, r = 0; r < a; r++) {
        e.get(t.symbolPos[r]).groupCount = r === a - 1 ? a : 0;
      }
    });
  }, i.parserGroupLevelSymbols = function () {
    var t = this.data.parser.currentGameState.groupUpgrade,
      e = this.data.parser.currentViewMap;
    t && t.map(function (t) {
      var a = t.symbolPos.length,
        r = t.symbolPos[a - 1];
      e.get(r).level = t.beforeLevel;
    });
  }, i.setBigWinReach = function (t) {
    var e = this.data.parser,
      a = e.winOdds,
      r = t / e.currentGameState.totalStake;
    e.bigWinReach = null;
    for (var n = 0; n < a.length; n++) r >= a[n].reachRate && (e.bigWinReach = a[n]);
    return e.bigWinReach;
  }, i.setPreData = function () {
    this.preData = JSON.parse(JSON.stringify(this.data));
  }, i.reset = function () {
    this.data.parser.currentSpinIndex = 0;
  }, i.getLocaleSpriteFrame = function (t) {
    var e = _dependency7.default.getData().filePaths.localeSpriteFrame,
      a = App.cache.get(r.module, e).data.find(function (e) {
        return e.name === t;
      });
    if (!a) throw new Error("NOT FIND 所需spriteFrame " + t);
    return a;
  }, i.getGameAlertSpine = function (t) {
    var e = _dependency7.default.getData().filePaths.gameAlertsSkeletonData,
      a = App.cache.get(r.module, e).data.find(function (e) {
        return e.name === t;
      });
    if (!a) throw new Error("NOT FIND 所需sp.SkeletonData " + t);
    return a;
  }, i.saveOriginGameData = function () {
    this.originGameData = _dependency9.ObjectUtils.clone(this.data), _dependency0.default.saveOriginData(), _dependency1.default.saveOriginData();
  }, i.restoreCurrentGameData = function () {
    this.originGameData ? (this.data = _dependency9.ObjectUtils.clone(this.originGameData), this.currentGameType = _dependency6.EGameType.MAIN_GAME, this.originGameData = null) : console.warn("No originGameData to restore."), _dependency0.default.restoreCurrentData(), _dependency1.default.restoreCurrentData();
  }, i.setReplayInitData = function (t) {
    this.replayData = t;
    var e = t.betData,
      a = t.definition;
    switch (a || (a = _dependency11.default.getData()), _dependency10.default.isReplay = !0, e.isJp) {
      case _dependency6.EBonusType.LUCKY_WEALTH:
        var r,
          n = e.theResult[2];
        this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.bonusState = n.engine, this.data.parser.currentSpinIndex = 0, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.parserViewMapToResult(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.data.parser.currentGameState.winSymbols, this.data.parser.toSymbolWildVO = this.parserTransformVO(null == (r = this.data.parser.currentGameState) ? void 0 : r.transformInfo), this.parseWinOddsTypes(a);
        break;
      case _dependency6.EBonusType.FORTUNE_LANDING:
        var i,
          s = e.theResult[2];
        this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.bonusState = s.engine, this.data.parser.currentSpinIndex = 0, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.parserViewMapToResult(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.data.parser.currentGameState.winSymbols, this.data.parser.toSymbolWildVO = this.parserTransformVO(null == (i = this.data.parser.currentGameState) ? void 0 : i.transformInfo), this.parseWinOddsTypes(a);
        break;
      case _dependency6.EBonusType.JP_GAME:
      case "jp-mini":
      case "jp-minor":
      case "jp-major":
      case "jp-grand":
        var o,
          u = e.theResult[2].engine;
        null != (null == u ? void 0 : u.pickPositions) || (u.pickPositions = []), this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.bonusState = u, this.data.parser.currentSpinIndex = 0, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.parserViewMapToResult(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.data.parser.currentGameState.winSymbols, this.data.parser.toSymbolWildVO = this.parserTransformVO(null == (o = this.data.parser.currentGameState) ? void 0 : o.transformInfo), this.parseWinOddsTypes(a);
        break;
      default:
        var p;
        this.data.gameState = this.parserBetData(e), this.data.definition = a, this.data.bonusState = e.bonusData, this.data.parser.currentSpinIndex = 0, this.data.parser.currentGameState = this.data.gameState[this.data.parser.currentSpinIndex], this.parserViewMapToResult(this.data.parser.currentGameState.view), this.data.parser.winSymbols = this.data.parser.currentGameState.winSymbols, this.data.parser.toSymbolWildVO = this.parserTransformVO(null == (p = this.data.parser.currentGameState) ? void 0 : p.transformInfo), this.parseWinOddsTypes(a);
    }
  }, i.setReplayNextBonusData = function (t) {
    var e;
    if (void 0 === t && (t = !1), (null == (e = this.data.bonusState) ? void 0 : e.bonusType) === _dependency6.EBonusType.JP_GAME) {
      !t && this.data.parser.currentSpinIndex++, this.data.bonusState = this.replayData.betData.theResult[this.data.parser.currentSpinIndex].engine;
      var a = this.data.bonusState.positions,
        r = this.data.bonusState.pickData,
        n = this.data.bonusState.prize;
      this.data.bonusState.pickPositions = [{
        position: a,
        category: r
      }], this.data.bonusState.totalWinnings = n;
    }
  }, i.parserBetData = function (t) {
    return t.theResult.map(function (t) {
      return t.engine;
    });
  }, _dependency.createClass(r, [{
    key: "originTurbo",
    get: function () {
      return this._originTurbo;
    },
    set: function (t) {
      this._originTurbo = t;
    }
  }, {
    key: "currentGameType",
    get: function () {
      return this._currentGameType;
    },
    set: function (t) {
      this.previousGameType = this._currentGameType, this._currentGameType = t;
    }
  }, {
    key: "speed",
    get: function () {
      return this._speed;
    },
    set: function (t) {
      var e = this;
      this._speed = t, _dependency2.director.tick = function (t) {
        e.oldTick.call(_dependency2.director, t * e._speed);
      };
    }
  }]), r;
}(_dependency4.GameDataBase)).module = _dependency3.EBundles[_dependency3.EBundles.g1004], _dependency2.cclegacy._RF.pop();

// Local simulation consumer compatibility.
import { EDITOR as __localEditor } from "cc/env";
import { installProjectFGameDataCompatibility as __installLocalCompatibility } from "../backend/InstallGameDataCompatibility";
if(!__localEditor)__installLocalCompatibility(_export);
