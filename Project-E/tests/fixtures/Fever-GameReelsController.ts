// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-ReelsController";
import * as _dependency4 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency5 from "./g1012-GameData";
import * as _dependency6 from "./g1012-GameSymbolID";
import * as _dependency7 from "./g1012-GameEvent";
import * as _dependency8 from "./g1012-GameSymbol";
import * as _dependency9 from "./g1012-GameConfigModel";
import * as _dependency0 from "../../shared/scripts/main-ReelDataSetting";
import * as _dependency1 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency10 from "../../shared/scripts/main-ReelEnum";
import * as _dependency11 from "./g1012-DampingDebugPanel";
import * as _dependency12 from "./g1012-SpeedDebugPanel";
var _export;
export { _export as MgReelStrip };
var _export2;
export { _export2 as GameReelsController };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "MgReelStrip":
      _export = value;
      break;
    case "GameReelsController":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, o, a, s, l, r, f, u, p, c, g, S, m, h, d, y, R, E, L, T, C, _, v, b, A, O, D;
var I, M, N, W, P, B, H, w, Y, G, k, F, x, z, K;
_dependency2.cclegacy._RF.push({}, "2d6deRQ1VtFo7FtOLEg4Ube", "GameReelsController", void 0);
var U = _dependency2._decorator.ccclass,
  V = _dependency2._decorator.property,
  Q = _dependency2._decorator.requireComponent,
  J = [[5, 4, 6, 2, 3, 8, 6, 5, 9, 8, 6, 5, 6, 1, 8, 4, 6, 5, 4, 7, 6, 8, 4, 8, 5, 8, 5, 4, 8, 6, 4, 8, 6, 3, 5, 4, 6, 6, 5, 8, 4, 8, 6, 2, 2, 2, 2, 5, 8, 8, 3, 5, 6, 4, 8, 5, 6, 3, 9, 8, 6, 8, 9, 8, 5, 7, 4, 5, 2, 6, 5, 4, 3, 2, 5, 6, 8, 6, 4, 6], [4, 6, 7, 4, 7, 4, 7, 6, 4, 4, 6, 9, 7, 1, 4, 7, 6, 7, 4, 7, 2, 2, 2, 2, 6, 6, 5, 4, 7, 7, 6, 3, 7, 6, 4, 7, 6, 6, 1, 1, 1, 1, 7, 8, 4, 3, 5, 3, 6, 4, 8, 6, 7, 4, 6, 4, 7, 2, 5, 3, 6, 4, 7, 4, 9, 3, 4, 7, 4, 6, 9, 7, 4, 6, 3, 7, 2, 6, 7, 7], [5, 3, 6, 2, 2, 2, 2, 5, 4, 7, 8, 3, 2, 1, 1, 1, 7, 8, 3, 7, 9, 4, 7, 2, 2, 2, 2, 7, 3, 8, 8, 5, 4, 7, 5, 7, 2, 2, 2, 2, 8, 7, 2, 7, 3, 5, 8, 6, 8, 9, 8, 6, 2, 2, 2, 2, 7, 8, 3, 9, 8, 5, 5, 7, 5, 2, 5, 3, 7, 8, 7, 2, 2, 2, 2, 8, 7, 5, 8, 7, 2, 2, 2, 2], [8, 7, 4, 7, 8, 7, 6, 8, 5, 3, 6, 7, 9, 1, 7, 2, 6, 3, 8, 7, 6, 4, 8, 5, 7, 8, 7, 6, 3, 8, 4, 8, 7, 6, 8, 7, 5, 2, 2, 2, 2, 7, 4, 7, 2, 4, 6, 8, 5, 3, 6, 8, 7, 8, 7, 2, 6, 3, 1, 4, 7, 9, 8, 5, 6, 8, 3, 8, 6, 8, 4, 8, 5, 6, 8, 5, 7, 6, 8, 7], [4, 7, 8, 7, 3, 7, 6, 4, 8, 6, 7, 6, 3, 1, 5, 8, 6, 8, 9, 7, 6, 8, 4, 5, 7, 8, 5, 3, 8, 6, 8, 4, 8, 7, 5, 7, 8, 6, 4, 8, 5, 7, 3, 7, 8, 4, 6, 3, 8, 7, 2, 2, 2, 2, 6, 8, 5, 8, 1, 7, 6, 8, 5, 4, 7, 2, 5, 8, 2, 6, 8, 4, 5, 7, 3, 7, 6, 5, 6, 9]],
  j = [[4, 5, 7, 3, 8, 4, 7, 2, 2, 2, 2, 7, 5, 8, 4, 8, 7, 5, 4, 7, 8, 3, 8, 6, 4, 8, 5, 4, 4, 7, 8, 4, 6, 7, 5, 8, 7, 3, 8, 8, 4, 5, 3, 7, 8, 4, 5, 2, 2, 2, 2, 7, 1, 1, 1, 1, 7, 8, 2, 7, 8, 4, 5, 7, 5, 4, 4, 5, 1, 4, 3, 3, 8, 7, 2, 2, 8, 5, 3, 7], [6, 5, 8, 4, 6, 3, 3, 5, 7, 8, 8, 5, 3, 8, 4, 5, 6, 2, 8, 3, 8, 8, 6, 5, 4, 6, 3, 8, 5, 6, 3, 6, 8, 2, 2, 2, 2, 5, 8, 6, 6, 2, 8, 3, 7, 3, 4, 5, 3, 8, 6, 5, 8, 6, 4, 5, 6, 8, 6, 7, 2, 2, 2, 2, 6, 8, 5, 6, 4, 6, 4, 4, 8, 2, 5, 8, 3, 5, 8, 6], [5, 8, 6, 2, 7, 8, 6, 3, 6, 7, 6, 5, 4, 7, 8, 4, 6, 3, 7, 3, 6, 3, 7, 6, 5, 7, 8, 4, 8, 1, 1, 1, 1, 8, 3, 7, 6, 8, 5, 8, 3, 8, 6, 2, 2, 2, 2, 8, 5, 4, 6, 3, 7, 1, 8, 4, 6, 7, 3, 8, 6, 7, 3, 8, 4, 8, 7, 5, 6, 6, 7, 7, 8, 3, 6, 4, 7, 8, 3, 8], [2, 7, 4, 6, 1, 4, 7, 3, 5, 5, 2, 2, 2, 2, 7, 7, 4, 8, 3, 7, 7, 1, 5, 7, 5, 6, 8, 3, 5, 8, 4, 8, 7, 8, 8, 3, 5, 7, 5, 4, 2, 7, 4, 6, 8, 4, 1, 1, 1, 1, 8, 7, 8, 2, 7, 7, 4, 5, 8, 4, 7, 4, 3, 5, 6, 5, 8, 1, 1, 1, 1, 4, 7, 8, 3, 5, 7, 8, 4, 6], [4, 7, 7, 5, 6, 8, 4, 6, 2, 2, 2, 2, 6, 7, 5, 7, 3, 8, 6, 4, 6, 1, 8, 6, 8, 5, 3, 6, 6, 7, 2, 4, 7, 3, 5, 7, 4, 6, 8, 4, 8, 7, 7, 6, 3, 8, 7, 4, 6, 2, 2, 2, 2, 6, 5, 3, 6, 7, 6, 4, 6, 8, 6, 5, 7, 8, 3, 8, 8, 5, 6, 4, 7, 3, 7, 5, 4, 2, 7, 5]],
  X = _publish("MgReelStrip", (I = U("MgReelStrip"), M = V({
    type: [_dependency2.CCInteger],
    displayName: "Symbol IDs"
  }), I((P = _dependency.applyDecoratedDescriptor((W = function () {
    _dependency.initializerDefineProperty(this, "symbols", P, this);
  }).prototype, "symbols", [M], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return [];
    }
  }), N = W)) || N));
_publish("GameReelsController", (B = U("GameReelsController"), H = Q(_dependency2.Mask), w = V(_dependency2.Prefab), Y = V({
  type: [X],
  displayName: "MG 數學軸帶"
}), G = V({
  type: [X],
  displayName: "FG 數學軸帶"
}), B(k = H((x = _dependency.applyDecoratedDescriptor((F = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "gameSymbol", x, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "mgReelStrip", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgReelStrip", K, _dependency.assertThisInitialized(e)), e.scatterCount = 0, e.bonusCount = 0, e.isNoWinExpecting = !1, e.isClickQuickStop = !1, e.dampingDebugPanel = null, e.dampingConfig = null, e.speedDebugPanel = null, e.speedConfig = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var l = e.prototype;
  return l.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, l.start = function () {
    this.init(), t.prototype.start.call(this), this.loadDampingConfig(), this.loadSpeedConfig();
  }, l.onDestroy = function () {
    this.removeEvents();
  }, l.init = function () {}, l.hideSymbolAnime = function () {
    this.reelList.forEach(function (t) {
      t.symbolList.forEach(function (t) {
        t.getComponent(_dependency8.GameSymbol).hideSymbolAnime();
      });
    });
  }, l.resetStatus = function () {
    this.initSingleReels(), this.reelList.forEach(function (t, e) {
      t.status = _dependency10.EReelStatus.FINISH;
    }), this.status = _dependency10.EReelStatus.FINISH;
  }, l.initSymbolNode = function () {
    var t = _dependency2.instantiate(this.gameSymbol);
    this.reelSetting.symbolNode = t;
  }, l.initLayout = function () {
    var t = this.node.getComponent(_dependency2.Layout);
    t.type = _dependency2.Layout.Type.HORIZONTAL, t.resizeMode = _dependency2.Layout.ResizeMode.CONTAINER;
  }, l.playSymbolWin = function (t, e, i, n) {
    var o = this;
    void 0 === n && (n = !1);
    var a = this.reelList[0].singleReelSetting.topCount,
      s = this.getWinSymbolLength(t),
      l = new Set(),
      r = 0;
    t.forEach(function (t) {
      t.positions.forEach(function (t) {
        var f = t.toString();
        if (!l.has(f)) {
          l.add(f);
          var u = t[0],
            p = t[1] + a;
          o.reelList[u].symbolList[p].getComponent(_dependency8.GameSymbol).playWinAnim(e, function () {
            ++r == s && i && i();
          }, n);
        }
      });
    }), l.clear();
  }, l.getWinSymbolLength = function (t) {
    var e = new Set();
    return t.forEach(function (t) {
      t.positions.forEach(function (t) {
        if (t[1] >= 0) {
          var i = t.toString();
          e.has(i) || e.add(i);
        }
      });
    }), e.size;
  }, l.checkAndPlayScatterHit = function (t) {
    this.reelList[t].getMidSymbolList().forEach(function (t, e) {
      t.getComponent(_dependency8.GameSymbol).id === _dependency6.EBackendSymbolID.SCATTER ? (dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency9.EBTM.SCATTER_HIT
        }
      }), t.getComponent(_dependency8.GameSymbol).playScatterHitAnim()) : t.getComponent(_dependency8.GameSymbol).id === _dependency6.EBackendSymbolID.WILD && t.getComponent(_dependency8.GameSymbol).playWildHitAnim();
    });
  }, l.playScatterWin = function (t) {
    var e = this,
      i = !1;
    dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.SCATTER_WIN
      }
    });
    for (var n, o = [], s = _dependency.createForOfIteratorHelperLoose(this.reelList); !(n = s()).done;) for (var l, r = n.value, f = _dependency.createForOfIteratorHelperLoose(r.symbolList); !(l = f()).done;) {
      var u = l.value;
      u.getComponent(_dependency8.GameSymbol).id === _dependency6.EBackendSymbolID.SCATTER && o.push(u);
    }
    o.forEach(function (n) {
      n.getComponent(_dependency8.GameSymbol).playScatterWinAnim(function () {
        i || (i = !0, e.scheduleOnce(function () {
          t();
        }, .1));
      });
    });
  }, l.removeDuplicates = function (t) {
    var e = t.map(function (t) {
        return t.positions;
      }),
      i = [];
    e.forEach(function (t) {
      t.forEach(function (t) {
        i.push(t);
      });
    });
    var n = new Set(),
      o = [];
    return i.forEach(function (t) {
      var e = JSON.stringify(t);
      n.has(e) || (n.add(e), o.push(t));
    }), o;
  }, l.beforeScroll = function () {
    t.prototype.beforeScroll.call(this);
    for (var e = 0; e < this.reelList.length; e++) this.reelList[e].reorderChildren();
    this.dampingConfig && this.applyDampingConfig(), this.speedConfig && this.applySpeedConfig();
  }, l.loadDampingConfig = function () {
    var t = this,
      e = _dependency2.assetManager.getBundle(this.data.module);
    e && e.load("script/data/dampingConfig", _dependency2.JsonAsset, function (e, i) {
      if (!e && i) {
        var n = i.json;
        Array.isArray(n) && (t.dampingConfig = n, t.applyDampingConfig());
      }
    });
  }, l.applyDampingConfig = function () {
    if (this.dampingConfig) for (var t = _dependency9.default.isTurbo ? "turbo" : "normal", e = 0; e < this.reelList.length; e++) {
      var i = this.dampingConfig[e],
        n = i ? i[t] : null;
      if (n) {
        var o = this.reelList[e].singleReelSetting.dampingSetting;
        o.firstDamping = n.firstDamping, o.firstDampingTime = n.firstDampingTime, o.firstDampingAmplitude = n.firstDampingAmplitude, o.firstDampingDelay = n.firstDampingDelay, o.lastDamping = n.lastDamping, o.lastDampingTime = n.lastDampingTime, o.lastDampingAmplitude = n.lastDampingAmplitude;
      }
    }
  }, l.loadSpeedConfig = function () {
    var t = this,
      e = _dependency2.assetManager.getBundle(this.data.module);
    e && e.load("script/data/speedConfig", _dependency2.JsonAsset, function (e, i) {
      if (!e && i) {
        var n = i.json;
        Array.isArray(n) && (t.speedConfig = n, t.applySpeedConfig());
      }
    });
  }, l.applySpeedConfig = function () {
    if (this.speedConfig) for (var t = _dependency9.default.isTurbo ? "turbo" : "normal", e = 0; e < this.reelList.length; e++) {
      var i = this.speedConfig[e],
        n = i ? i[t] : null;
      if (n) {
        var o = this.reelList[e].singleReelSetting;
        o.moveOneSymbolTime = n.moveOneSymbolTime, o.step = n.step, o.stopReelTime = n.stopReelTime;
      }
    }
  }, l.initSymbolView = function (t, e) {
    var i = this;
    void 0 === e && (e = null);
    _dependency6.EBackendSymbolID.WILD, _dependency6.EBackendSymbolID.HAT, _dependency6.EBackendSymbolID.STICK, _dependency6.EBackendSymbolID.FORK, _dependency6.EBackendSymbolID.A, _dependency6.EBackendSymbolID.K, _dependency6.EBackendSymbolID.Q, _dependency6.EBackendSymbolID.J, _dependency6.EBackendSymbolID.SCATTER, _dependency6.EBackendSymbolID.JACKPOT;
    t && t.forEach(function (t, n) {
      if (e && e.length > 0) {
        for (var o = i.reelList[n].singleReelSetting.topCount, a = 0; a < o; a++) {
          var s = _dependency2.randomRangeInt(0, e[n].length);
          t.unshift(e[n][s]);
        }
        for (var l = i.reelList[n].singleReelSetting.downCount, r = 0; r < l; r++) {
          var f = _dependency2.randomRangeInt(0, e[n].length);
          t.push(e[n][f]);
        }
      } else {
        var u = _dependency2.randomRangeInt(0, i.reelList[n].singleReelSetting.randomSymbolList.length),
          p = i.reelList[n].singleReelSetting.randomSymbolList[u];
        t.unshift(p);
      }
    }), this.initSingleReels(e, t), _dependency2.Tween.stopAllByTarget(this.node);
  }, l.finish = function () {
    this.isNoWinExpecting = !1, _dependency2.Tween.stopAllByTarget(this);
    for (var t = 0; t < this.reelList.length; t++) this.stopExpect(t);
    dispatch(_dependency7.GameEvent.REEL_ALL_STOP);
  }, l.onStartExpect = function (t) {
    dispatch(_dependency7.GameEvent.SHOW_EXPECT, {
      data: t
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.SYMBOL_EXPECT
      }
    }), this.isNoWinExpecting = !0;
  }, l.stopExpect = function (t) {
    dispatch(_dependency7.GameEvent.STOP_EXPECT, {
      data: t
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.SYMBOL_EXPECT
    });
  }, l.onEndScroll = function (t) {
    this.reelList[t] && 0 == this.reelList[t].isExpecting && (dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.REEL_STOP
      }
    }), this.checkAndPlayScatterHit(t));
  }, l.onSingleReelFinish = function (e) {
    t.prototype.onSingleReelFinish.call(this, e), this.reelList[e] && (1 == this.reelList[e].isExpecting || _dependency0.ReelDataSettingObj.getAllStop()) && dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.REEL_STOP
      }
    });
  }, l.setReelResult = function (e, i) {
    t.prototype.setReelResult.call(this, e, i), this.isClickQuickStop = !1;
  }, l.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency4.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function (t) {
      e.initSymbolView(e.data.getData().parser.reelResult.slice(), e.mgReel);
    }), this.on(_dependency7.GameEvent.PARSER_REPLAY_COMPLETED, function (t) {
      var i = _dependency1.default.transposeArray(e.data.getData().gameState[0].view);
      e.initSymbolView(i, e.mgReel);
    }), this.on(_dependency7.GameEvent.SET_SYMBOL_VIEW, function (t) {
      var i = t.data;
      e.initSymbolView(i, e.mgReel);
    }), this.on(_dependency7.GameEvent.CHANGE_GAME_STYLE, function (t) {
      if (t.data) for (var i = 0; i < e.reelList.length; i++) e.reelList[i].initMathReel(e.mgReel[i]);else {
        var n = e.data.getData().parser.reelResult.slice();
        e.initSymbolView(n, e.fgReel);
      }
    }), this.on(_dependency7.GameEvent.START_SPIN, function () {
      var t = _dependency9.default.isTurbo ? 3 : 0;
      _dependency0.ReelDataSettingObj.setSpeedIndex(t), dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency9.EBTM.SPIN
        }
      }), _dependency9.default.isTurbo || e.startScroll();
    }), this.on(_dependency7.GameEvent.START_SCROLL, function () {
      e.startScroll();
    }), this.on(_dependency7.GameEvent.SET_REEL_RESULT, function () {
      if (_dependency2.Tween.stopAllByTarget(e), _dependency9.default.isTurbo) {
        e.startScroll();
        var t = e.reelList[0].singleReelSetting.dampingSetting.firstDampingDelay + e.reelList[0].singleReelSetting.dampingSetting.firstDampingTime;
        Log.e("delay set reel result:::::", t), _dependency2.Tween.stopAllByTarget(e), _dependency2.tween(e).bindNodeState(false).delay(t).call(function () {
          e.setReelResult(e.data.getData().parser.reelResult);
        }).start();
      } else e.setReelResult(e.data.getData().parser.reelResult);
    }), this.on(_dependency7.GameEvent.SHOW_SYMBOLS_WIN, function (t) {
      var i = t.complete,
        n = void 0 === i ? null : i,
        o = t.data,
        a = e.data.getData().parser.winSymbols;
      e.playSymbolWin(a, !0, function () {
        n && n();
      }, o);
    }), this.on(_dependency7.GameEvent.SHOW_JP_SYMBOLS_WIN, function (t) {
      e.data.getData().parser.reelResult.forEach(function (t, i) {
        t.forEach(function (n, o) {
          var a = e.reelList[i].singleReelSetting.topCount,
            s = e.reelList[i].getMidSymbolList().length;
          n == _dependency6.EBackendSymbolID.JACKPOT && (t.length == s ? e.reelList[i].getMidSymbolList()[o].getComponent(_dependency8.GameSymbol).playWinAnim(!0) : o >= a && o < a + s && e.reelList[i].symbolList[o].getComponent(_dependency8.GameSymbol).playWinAnim(!0));
        });
      });
    }), this.on(_dependency7.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE, function (t) {
      var i = t.data,
        n = t.complete;
      e.playSymbolWin(i, !0, n);
    }), this.on(_dependency7.GameEvent.SHOW_SCATTER_WIN, function (t) {
      e.playScatterWin(function () {
        dispatch(_dependency7.GameEvent.SHOW_SCATTER_WIN_END);
      });
    }), this.on(_dependency7.GameEvent.START_QUICK_STOP, function () {
      e.isClickQuickStop = !0, e.directShowStopSingleReel();
    }), this.on(_dependency7.GameEvent.RESET_REELS_STATUS, function (t) {
      e.resetStatus();
    });
  }, l.removeEvents = function () {
    this.off(_dependency4.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN), this.off(_dependency7.GameEvent.PARSER_REPLAY_COMPLETED), this.off(_dependency7.GameEvent.SET_SYMBOL_VIEW), this.off(_dependency7.GameEvent.START_SPIN), this.off(_dependency7.GameEvent.START_SCROLL), this.off(_dependency7.GameEvent.SET_REEL_RESULT), this.off(_dependency7.GameEvent.SHOW_SYMBOLS_WIN), this.off(_dependency7.GameEvent.SHOW_SYMBOL_TRANSFORM), this.off(_dependency7.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE), this.off(_dependency7.GameEvent.SHOW_SCATTER_WIN), this.off(_dependency7.GameEvent.SHOW_BONUS_WIN), this.off(_dependency7.GameEvent.SHOW_DROP_SYMBOL), this.off(_dependency7.GameEvent.START_QUICK_STOP), this.off(_dependency7.GameEvent.RESET_REELS_STATUS);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }, {
    key: "mgReel",
    get: function () {
      return this.mgReelStrip.map(function (t) {
        return t.symbols;
      });
    }
  }, {
    key: "fgReel",
    get: function () {
      return this.fgReelStrip.map(function (t) {
        return t.symbols;
      });
    }
  }]), e;
}(_dependency3.ReelsController)).prototype, "gameSymbol", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(F.prototype, "mgReelStrip", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return J.map(function (t) {
      var e = new X();
      return e.symbols = t.slice(), e;
    });
  }
}), K = _dependency.applyDecoratedDescriptor(F.prototype, "fgReelStrip", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return j.map(function (t) {
      var e = new X();
      return e.symbols = t.slice(), e;
    });
  }
}), k = F)) || k) || k));
_dependency2.cclegacy._RF.pop();
