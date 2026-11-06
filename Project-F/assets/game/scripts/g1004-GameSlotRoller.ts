// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./g1004-GameSlotSymbol";
import * as _dependency4 from "../../shared/scripts/main-ReelEnum";
import * as _dependency5 from "../../shared/scripts/main-ReelEvent";
import * as _dependency6 from "../../shared/scripts/main-EventComponent";
import * as _dependency7 from "./g1004-GameEvent";
import * as _dependency8 from "./g1004-GameSymbolID";
var _export;
export { _export as GameSlotRoller };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameSlotRoller":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, o, n, i, s, r, l, a, c, h, p, u, m, b, y, d, S, f, g, _, C, v, I, k, D, x, T, A;
var R, w, E, L, F, P, G, O, z, N, B, J, j, W, H, M, K, U, Y, V, q, Q, X, Z;
_dependency2.cclegacy._RF.push({}, "c1f157z1PtHnpEAlOgFFSS6", "GameSlotRoller", void 0);
var $ = _dependency2._decorator.ccclass,
  tt = _dependency2._decorator.property;
_dependency2._decorator.executeInEditMode, _publish("GameSlotRoller", (R = $("GameSlotRoller"), w = tt({
  type: _dependency2.Enum(_dependency4.EScrollDirection),
  displayName: "滾動方向"
}), E = tt({
  type: _dependency3.GameSlotSymbol,
  tooltip: "各滾輪symbol陣列"
}), L = tt({
  type: _dependency2.Prefab,
  tooltip: "Symbol預製物件"
}), F = tt({
  type: _dependency2.Node,
  tooltip: "遮罩"
}), P = tt({
  tooltip: "開始滾動彈回量"
}), G = tt({
  tooltip: "開始到開始滾動時間(sec)"
}), O = tt({
  tooltip: "滾動速度"
}), z = tt({
  tooltip: "停止到停止滾動時間(sec)"
}), N = tt({
  tooltip: "停止滾動彈回量"
}), B = tt(_dependency3.GameSlotSymbol), J = tt({
  override: !0,
  tooltip: "每輪有多少Symbol"
}), R((H = _dependency.applyDecoratedDescriptor((W = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, o = arguments.length, s = new Array(o), r = 0; r < o; r++) s[r] = arguments[r];
    return (e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this)._scroller = null, _dependency.initializerDefineProperty(e, "scrollDirection", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "symbols", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "symbolPrefab", K, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndDark", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "easeBackInAmount", Y, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startSpinTime", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spinSpeed", q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stopSpinTime", Q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "easeBackOutAmount", X, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stopFakeSymbol", Z, _dependency.assertThisInitialized(e)), e._spinning = !1, e._symbolLabels = [], e._symbolCount = 4, e._reelIndex = -1, e.status = _dependency4.EReelStatus.FINISH, e.isLastStrip = !1, e._needExpect = !1, e.moveDistance = 0, e.isTurbo = !1, e._reRollCount = 1, e.scatterAppear = !1, e.jackpotAppear = !1, e.hasScatter = !1, e.nextScatterIndex = 0, e.hasJackpot = !1, e.nextJackpotIndex = 0, e._isFreeGame = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var l = e.prototype;
  return l.onLoad = function () {
    var t, e;
    switch ((null != (t = this.node.getComponent(_dependency2.Mask)) ? t : this.node.addComponent(_dependency2.Mask)).type = _dependency2.Mask.Type.GRAPHICS_RECT, this._scroller = null != (e = this.node.getChildByName("Scroller")) ? e : new _dependency2.Node("Scroller"), this.scrollDirection) {
      case _dependency4.EScrollDirection.DOWN:
        this._scroller.y = this.node.getComponent(_dependency2.UITransform).height - this._scroller.getComponent(_dependency2.UITransform).height;
        break;
      case _dependency4.EScrollDirection.LEFT:
        this._scroller.x = this.node.getComponent(_dependency2.UITransform).width - this._scroller.getComponent(_dependency2.UITransform).width;
    }
    this._scroller.isChildOf(this.node) || this.node.addChild(this._scroller), 0 == this.symbols.length && (this.symbols = this._scroller.getComponentsInChildren(_dependency3.GameSlotSymbol));
  }, l.start = function () {
    this.symbols.forEach(function (t, e) {
      t.Label.string = e.toString(), t.symbolPosition = e;
    });
  }, l.createRandSymbols = function () {
    this.symbols.forEach(function (t) {
      return t.randomSymbol();
    });
  }, l.initSpinSetting = function () {
    this.status = _dependency4.EReelStatus.WAITING, this._reRollCount = 1, this.ndDark.getComponent(_dependency2.UIOpacity).opacity = 0, _dependency2.Tween.stopAllByTarget(this._scroller), this.scatterAppear = !1, this.jackpotAppear = !1, this.nextScatterIndex = 0, this.nextJackpotIndex = 0, this._scroller.y = -1500;
  }, l.startSpin = function (t, e) {
    var o = this;
    return void 0 === t && (t = !1), void 0 === e && (e = .2), new Promise(function (n) {
      switch (o.initSpinSetting(), o.isTurbo = t, o.scrollDirection) {
        case _dependency4.EScrollDirection.DOWN:
          o.isTurbo ? _dependency2.tween(o._scroller).bindNodeState(false).to(e, {
            position: new _dependency2.Vec3(o._scroller.x, -950, 0)
          }).call(function () {
            o.changeStartSpinStatus();
          }).start() : o.changeStartSpinStatus();
          break;
        case _dependency4.EScrollDirection.LEFT:
          o.isTurbo ? _dependency2.tween(o._scroller).bindNodeState(false).to(e, {
            position: new _dependency2.Vec3(o._scroller.x + 50, o._scroller.y, 0)
          }).call(function () {
            o.changeStartSpinStatus();
          }).start() : o.changeStartSpinStatus();
      }
      _dependency2.Tween.stopAllByTarget(o), _dependency2.tween(o).bindNodeState(false).delay(.0618).call(function () {
        n(!0);
      }).start();
    });
  }, l.changeStartSpinStatus = function () {
    this.spinning = !0, this.status = _dependency4.EReelStatus.START_SPIN;
  }, l.isEnableScrollLayout = function (t) {
    this._scroller.getComponent(_dependency2.Layout).enabled = t, this._scroller.getComponent(_dependency2.Layout).updateLayout();
  }, l.isEnableDark = function (t) {
    var e = this;
    _dependency2.Tween.stopAllByTarget(this.ndDark), this.ndDark.active = !0, _dependency2.tween(this.ndDark.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.4, {
      opacity: t ? 255 : 0
    }, {
      easing: _dependency2.easing.smooth
    }).call(function () {
      e.ndDark.active = !!t;
    }).start();
  }, l.update = function (t) {
    if (this.spinning) {
      var e = !1;
      switch (this.spinSpeed = this.spinSpeed - this.spinSpeed / this._reRollCount * t, this.moveDistance = this.spinSpeed * t, this.scrollDirection) {
        case _dependency4.EScrollDirection.DOWN:
          e = Math.abs(this._scroller.y - this.moveDistance) >= this.node.getComponent(_dependency2.UITransform).height;
          break;
        case _dependency4.EScrollDirection.LEFT:
          e = Math.abs(this._scroller.x - this.moveDistance) >= this.node.getComponent(_dependency2.UITransform).width;
      }
      if (this.spinning && e) {
        var o = this.symbols.slice(-1 * this.symbolCount),
          n = this.symbols.slice(-2 * this.symbolCount, -1 * this.symbolCount);
        switch (this._swapSymbol(o, n), e = !1, this.status === _dependency4.EReelStatus.START_SPIN && (this.status = _dependency4.EReelStatus.LOOP_SCROLLING, this.isLastStrip && dispatch(_dependency7.GameEvent.REEL_ALL_START)), this._reRollCount++, this._reRollCount) {
          case 2:
            this.spinSpeed = 1200;
            break;
          case 3:
            this.spinSpeed = 1e3;
            break;
          case 4:
            this.spinSpeed = 800;
            break;
          case 5:
            this.spinSpeed = 600;
        }
      }
      if (this.spinning) switch (this.scrollDirection) {
        case _dependency4.EScrollDirection.DOWN:
          this._scroller.y = (this._scroller.y - this.moveDistance) % this.node.getComponent(_dependency2.UITransform).height, this._reRollCount >= 5 && this.stopSpin();
      }
    }
  }, l._generateSymbolInstance = function () {
    if (this.symbolPrefab) {
      this.symbols.forEach(function (t) {
        return null == t ? void 0 : t.node.removeFromParent();
      });
      var t = _dependency2.instantiate(this.symbolPrefab);
      this.symbols = [];
      for (var e = 3 * this.symbolCount, o = 0; o < e; o++) {
        var n,
          i = _dependency2.instantiate(t);
        i.name = "symbol_" + o;
        var s = i.getComponent(_dependency3.GameSlotSymbol);
        s.symbolLabels = this.symbolLabels.slice(), this.symbols[o] = s, null == (n = this._scroller) || n.addChild(i);
      }
      if (this._scroller.getComponent(_dependency2.Layout).enabled = !1, this._scroller.getComponent(_dependency2.Layout).updateLayout(), this.symbolPrefab) {
        var r = _dependency2.instantiate(t);
        r.active = !1, this.node && this.node.addChild(r);
      }
    }
  }, l._swapSymbol = function (t, e) {
    this.initializeSymbols(t, e), this.checkScatterJackpotAppear(), this.reelIndex > 1 && this.reelIndex < 6 ? this.randomizeGroupedSymbols(e) : this.randomizeSymbols(e);
  }, l.checkScatterJackpotAppear = function () {
    this.nextScatterIndex < this._reRollCount ? this.scatterAppear = !1 : this.scatterAppear = !0, this.hasScatter && this._reRollCount >= 4 && (this.scatterAppear = !0), this.nextJackpotIndex < this._reRollCount ? this.jackpotAppear = !1 : this.jackpotAppear = !0, this.hasJackpot && this._reRollCount >= 4 && (this.jackpotAppear = !0);
  }, l.initializeSymbols = function (t, e) {
    for (var o = 0; o < t.length; o++) {
      var n = t[o],
        i = e[o];
      n.initData(), n.groupCount = i.groupCount, n.symbolID = i.symbolID, n.level = i.level, n.symbolID === _dependency8.EBackendSymbolID.RATE && (n.rate = 2);
    }
  }, l.randomizeSymbols = function (t) {
    for (var e = 0; e < t.length; e++) {
      var o = t[e];
      o.initData(), this.handleSpecialSymbols(o);
    }
  }, l.randomizeGroupedSymbols = function (t) {
    for (var e, o = this.getRandomSumTo5(), n = 0, i = 1 === this.reelIndex || 6 === this.reelIndex ? 2 : 1, r = _dependency.createForOfIteratorHelperLoose(o); !(e = r()).done;) for (var l = e.value, a = 0; a < l; a++) {
      var c = t[n];
      c.initData(), a === l - 1 && (c.groupCount = l, l > 1 ? (c.symbolID = _dependency2.randomRangeInt(i, 13), c.symbolID === _dependency8.EBackendSymbolID.WILD ? c.level = 3 : c.level = _dependency2.randomRangeInt(i, 3), c.symbolID === _dependency8.EBackendSymbolID.RATE && (c.rate = 2)) : this.handleSpecialSymbols(c)), n++;
    }
  }, l.handleSpecialSymbols = function (t) {
    t.randomSymbol();
    var e = 1 === this.reelIndex || 6 === this.reelIndex ? 2 : 1;
    switch (t.symbolID) {
      case _dependency8.EBackendSymbolID.SCATTER:
        this.scatterAppear ? (t.symbolID = _dependency2.randomRangeInt(e, 14), this.isFreeGame && t.symbolID === _dependency8.EBackendSymbolID.JACKPOT && (t.symbolID = _dependency2.randomRangeInt(e, 13))) : (this.nextScatterIndex = this._reRollCount + 1, this.scatterAppear = !0);
        break;
      case _dependency8.EBackendSymbolID.JACKPOT:
        this.jackpotAppear || this.isFreeGame ? t.symbolID = _dependency2.randomRangeInt(e, 13) : (this.nextJackpotIndex = this._reRollCount + 1, this.jackpotAppear = !0);
        break;
      case _dependency8.EBackendSymbolID.WILD:
        t.symbolID = _dependency2.randomRangeInt(e, 13);
    }
    t.symbolID === _dependency8.EBackendSymbolID.RATE && (t.rate = 2);
  }, l.getRandomSumTo5 = function () {
    for (var t = 0, e = 0, o = []; t < 5 && e < 5;) {
      var n = Math.floor(4 * Math.random()) + 1;
      if (t + n > 5) n = 5 - t;
      t += n, o.push(n), e++;
    }
    return o;
  }, l.stopSpin = function () {
    var t = this;
    return new Promise(function (e) {
      t.spinning = !1, t.status = _dependency4.EReelStatus.STOPPING, _dependency2.Tween.stopAllByTarget(t._scroller);
      var o = t.node.getComponent(_dependency2.UITransform).height - t._scroller.getComponent(_dependency2.UITransform).height,
        n = (t._scroller.y - o) / t.spinSpeed;
      _dependency2.tween(t._scroller).bindNodeState(false).to(1.6 * n, {
        position: new _dependency2.Vec3(t._scroller.x, o, 0)
      }, {
        easing: _dependency2.easing.sineOut
      }).call(function () {
        t.status = _dependency4.EReelStatus.FINISH, t.node.emit(_dependency5.SingleReelEvents.FINISH, t.reelIndex), e(!0);
      }).start();
    });
  }, l.updateStopFakeSymbolPosition = function () {
    var t = 0,
      e = 0;
    if (this._scroller) {
      var o = this._scroller ? this._scroller.getComponent(_dependency2.Layout) : null;
      o && (t = o.paddingTop, e = o.spacingY);
      var n = this._scroller.getComponent(_dependency2.UITransform).height,
        i = this.stopFakeSymbol.node.getComponent(_dependency2.UITransform);
      this.stopFakeSymbol && (this.stopFakeSymbol.node.y = this._scroller.y + n + i.height * i.anchorY - t + e);
    }
  }, l.setSpinResult = function (t) {
    var e = this;
    null != t && 0 != t.length ? t.map(function (t, o) {
      e.symbols[o].groupCount = 1, e.symbols[o].symbolID = t;
    }) : this.symbols.map(function (t) {
      return t.randomSymbol();
    });
  }, _dependency.createClass(e, [{
    key: "spinning",
    get: function () {
      return this._spinning;
    },
    set: function (t) {
      this._spinning = t;
    }
  }, {
    key: "symbolLabels",
    get: function () {
      return this._symbolLabels;
    },
    set: function (t) {
      this._symbolLabels = t.slice();
      for (var e = 0; e < this.symbols.length; e++) {
        var o = this.symbols[e];
        o && (o.symbolLabels = this._symbolLabels.slice());
      }
    }
  }, {
    key: "symbolCount",
    get: function () {
      return this._symbolCount;
    },
    set: function (t) {
      var e, o, n, i;
      switch (this._symbolCount = t, this._generateSymbolInstance(), this.scrollDirection) {
        case _dependency4.EScrollDirection.DOWN:
          (null == (e = this.symbols[0]) || null == (o = e.node) ? void 0 : o.getComponent(_dependency2.UITransform).height) && (this._scroller.y = this.node.getComponent(_dependency2.UITransform).height - this._scroller.getComponent(_dependency2.UITransform).height);
          break;
        case _dependency4.EScrollDirection.LEFT:
          (null == (n = this.symbols[0]) || null == (i = n.node) ? void 0 : i.getComponent(_dependency2.UITransform).width) && (this._scroller.x = this.node.getComponent(_dependency2.UITransform).width - this._scroller.getComponent(_dependency2.UITransform).width);
      }
    }
  }, {
    key: "reelIndex",
    get: function () {
      return this._reelIndex;
    },
    set: function (t) {
      this._reelIndex = t;
      for (var e = 0; e < this.symbols.length; e++) {
        var o = this.symbols[e];
        o && (o.reelIndex = this.reelIndex);
      }
    }
  }, {
    key: "needExpect",
    get: function () {
      return this._needExpect;
    },
    set: function (t) {
      this._needExpect = t;
    }
  }, {
    key: "isFreeGame",
    get: function () {
      return this._isFreeGame;
    },
    set: function (t) {
      this._isFreeGame = t, t && this.symbols.forEach(function (t) {
        return t.randomSymbol(1, 13);
      });
    }
  }]), e;
}(_dependency6.default)).prototype, "scrollDirection", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return _dependency4.EScrollDirection.DOWN;
  }
}), M = _dependency.applyDecoratedDescriptor(W.prototype, "symbols", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), K = _dependency.applyDecoratedDescriptor(W.prototype, "symbolPrefab", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(W.prototype, "ndDark", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(W.prototype, "easeBackInAmount", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1.4;
  }
}), V = _dependency.applyDecoratedDescriptor(W.prototype, "startSpinTime", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .2;
  }
}), q = _dependency.applyDecoratedDescriptor(W.prototype, "spinSpeed", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 20;
  }
}), Q = _dependency.applyDecoratedDescriptor(W.prototype, "stopSpinTime", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .45;
  }
}), X = _dependency.applyDecoratedDescriptor(W.prototype, "easeBackOutAmount", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), Z = _dependency.applyDecoratedDescriptor(W.prototype, "stopFakeSymbol", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _dependency.applyDecoratedDescriptor(W.prototype, "symbolCount", [J], Object.getOwnPropertyDescriptor(W.prototype, "symbolCount"), W.prototype), j = W)) || j));
_dependency2.cclegacy._RF.pop();
