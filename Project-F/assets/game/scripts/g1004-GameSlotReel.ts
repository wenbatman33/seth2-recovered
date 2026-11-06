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
export { _export as ReelStopType };
var _export2;
export { _export2 as GameSlotReel };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ReelStopType":
      _export = value;
      break;
    case "GameSlotReel":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, o, s, i, n, l, r, a, c, h, p, u, m, b, d, S, y, _, f, g, C, k, T, v, I, E, F;
var D, x, P, L, w, A, R, O, N, G, B, W, z, H, J, j;
_dependency2.cclegacy._RF.push({}, "894a1jA55VAFJ1THfT9x9Po", "GameSlotReel", void 0);
var U = _dependency2._decorator.ccclass,
  Y = _dependency2._decorator.property,
  X = (_dependency2._decorator.executeInEditMode, _publish("ReelStopType", {
    Base: 0,
    BottomToTop: 1
  }));
_publish("GameSlotReel", (D = U("GameSlotReel"), x = Y({
  type: _dependency2.Enum(_dependency4.EScrollDirection),
  displayName: "滾動方向"
}), P = Y({
  type: _dependency3.GameSlotSymbol,
  tooltip: "各滾輪symbol陣列"
}), L = Y({
  type: _dependency2.Prefab,
  tooltip: "Symbol預製物件"
}), w = Y({
  tooltip: "滾動速度"
}), A = Y({
  tooltip: "停止到停止滾動時間(sec)"
}), R = Y({
  type: _dependency3.GameSlotSymbol,
  tooltip: "停止滾輪用的假symbol"
}), O = Y({
  override: !0,
  tooltip: "每輪有多少Symbol"
}), D((B = _dependency.applyDecoratedDescriptor((G = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, o = arguments.length, n = new Array(o), l = 0; l < o; l++) n[l] = arguments[l];
    return e = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "scrollDirection", B, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "symbols", W, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "symbolPrefab", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spinSpeed", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stopSpinTime", J, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stopFakeSymbol", j, _dependency.assertThisInitialized(e)), e.easeBackOutAmount = .4, e._scroller = null, e._spinning = !1, e._symbolLabels = [], e._symbolCount = 4, e._reelIndex = -1, e._needExpect = !1, e.status = _dependency4.EReelStatus.FINISH, e.isLastStrip = !1, e._moveDistance = 0, e._isTurbo = !1, e._reRollCount = 1, e._scrollerHeight = 0, e._scrollerWidth = 0, e.scatterAppear = !1, e.jackpotAppear = !1, e.hasScatter = !1, e.nextScatterIndex = 0, e.hasJackpot = !1, e.nextJackpotIndex = 0, e._isFreeGame = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    var t, e;
    switch ((null != (t = this.node.getComponent(_dependency2.Mask)) ? t : this.node.addComponent(_dependency2.Mask)).type = _dependency2.Mask.Type.GRAPHICS_RECT, this._scroller = null != (e = this.node.getChildByName("Scroller")) ? e : new _dependency2.Node("Scroller"), this._scroller.isChildOf(this.node) || this.node.addChild(this._scroller), 0 == this.symbols.length && (this.symbols = this._scroller.getComponentsInChildren(_dependency3.GameSlotSymbol)), this.scrollDirection) {
      case _dependency4.EScrollDirection.DOWN:
        this._scroller.y = this.node.getComponent(_dependency2.UITransform).height - this._scroller.getComponent(_dependency2.UITransform).height;
        break;
      case _dependency4.EScrollDirection.LEFT:
        this._scroller.x = this.node.getComponent(_dependency2.UITransform).width - this._scroller.getComponent(_dependency2.UITransform).width;
    }
  }, r.start = function () {
    this._scrollerHeight = this._scroller.getComponent(_dependency2.UITransform).height, this._scrollerWidth = this._scroller.getComponent(_dependency2.UITransform).width;
  }, r.initSpinSetting = function () {
    this.status = _dependency4.EReelStatus.WAITING, this._reRollCount = 1, _dependency2.Tween.stopAllByTarget(this), _dependency2.Tween.stopAllByTarget(this._scroller), this.scatterAppear = !1, this.jackpotAppear = !1, this.nextScatterIndex = 0, this.nextJackpotIndex = 0, this.stopFakeSymbol && (this.stopFakeSymbol.node.active = !1);
  }, r.startSpin = function (t, e) {
    var o = this;
    return void 0 === t && (t = !1), void 0 === e && (e = .2), new Promise(function (s) {
      o.initSpinSetting(), o._isTurbo = t;
      var i = new _dependency2.Vec3(0, 0, 0);
      switch (o.scrollDirection) {
        case _dependency4.EScrollDirection.DOWN:
          i = new _dependency2.Vec3(o._scroller.x, -950, 0);
          break;
        case _dependency4.EScrollDirection.LEFT:
          i = new _dependency2.Vec3(o._scroller.x + 50, o._scroller.y, 0);
      }
      o._isTurbo ? _dependency2.tween(o._scroller).bindNodeState(false).to(e, {
        position: i
      }).call(function () {
        o.changeStartSpinStatus();
      }).start() : o.changeStartSpinStatus(), _dependency2.tween(o).bindNodeState(false).delay(.0618).call(function () {
        s(!0);
      }).start();
    });
  }, r.update = function (t) {
    if (this._spinning) {
      var e = !1;
      switch (this._moveDistance = this.spinSpeed * t, this.scrollDirection) {
        case _dependency4.EScrollDirection.DOWN:
          e = Math.abs(this._scroller.y - this._moveDistance) >= this.node.getComponent(_dependency2.UITransform).height;
          break;
        case _dependency4.EScrollDirection.LEFT:
          e = Math.abs(this._scroller.x - this._moveDistance) >= this.node.getComponent(_dependency2.UITransform).width;
      }
      if (this._spinning) switch (this.scrollDirection) {
        case _dependency4.EScrollDirection.DOWN:
          this._scroller.y = (this._scroller.y - this._moveDistance) % this.node.getComponent(_dependency2.UITransform).height;
          break;
        case _dependency4.EScrollDirection.LEFT:
          this._scroller.x = (this._scroller.x - this._moveDistance) % this.node.getComponent(_dependency2.UITransform).width;
      }
      if (this._spinning && e) {
        this._reRollCount++, e = !1;
        var o = this.symbols.slice(-1 * this.symbolCount),
          s = this.symbols.slice(-2 * this.symbolCount, -1 * this.symbolCount);
        this._swapSymbol(o, s), this.status === _dependency4.EReelStatus.START_SPIN && this._reRollCount > 2 && (this.status = _dependency4.EReelStatus.LOOP_SCROLLING, this.isLastStrip && this._scroller.y >= -500 && dispatch(_dependency7.GameEvent.REEL_ALL_START), this._isTurbo && (dispatch(_dependency7.GameEvent.REEL_ALL_START), this.stopSpin()));
      }
    }
  }, r.stopSpin = function (t) {
    if (void 0 === t && (t = X.Base), !this.needExpect && this.status === _dependency4.EReelStatus.LOOP_SCROLLING) switch (_dependency2.Tween.stopAllByTarget(this._scroller), this._spinning = !1, this.status = _dependency4.EReelStatus.STOPPING, this.stopFakeSymbol && (this.updateStopFakeSymbolPosition(), this.stopFakeSymbol.randomSymbol()), t) {
      case X.Base:
        this.baseStop();
        break;
      case X.BottomToTop:
        this.stopBottomToTop();
    }
  }, r.isEnableScrollLayout = function (t) {
    this._scroller.getComponent(_dependency2.Layout).enabled = t, this._scroller.getComponent(_dependency2.Layout).updateLayout();
  }, r.createRandSymbols = function () {
    this.symbols.forEach(function (t) {
      return t.randomSymbol();
    });
  }, r.setSpinResult = function (t) {
    var e = this;
    null != t && 0 != t.length ? t.map(function (t, o) {
      e.symbols[o].groupCount = 1, e.symbols[o].symbolID = t;
    }) : this.symbols.map(function (t) {
      return t.randomSymbol();
    });
  }, r.quicklyStop = function (t) {
    var e = this;
    void 0 === t && (t = 0), _dependency2.Tween.stopAllByTarget(this._scroller), this._spinning = !1, this.status = _dependency4.EReelStatus.STOPPING, this.stopFakeSymbol && (this.updateStopFakeSymbolPosition(), this.stopFakeSymbol.randomSymbol());
    var o = new _dependency2.Vec3(0, 0, 0);
    switch (this.scrollDirection) {
      case _dependency4.EScrollDirection.DOWN:
        o = this.getStopPositionY();
        break;
      case _dependency4.EScrollDirection.LEFT:
        o = this.getStopPositionX();
    }
    _dependency2.tween(this._scroller).bindNodeState(false).to(t, {
      position: o
    }).call(function () {
      return e.stopSpinEndCallback();
    }).start();
  }, r.stopBottomToTop = function () {
    var t = this;
    switch (this.scrollDirection) {
      case _dependency4.EScrollDirection.DOWN:
        this._scroller.y = -this.node.getComponent(_dependency2.UITransform).height, this._isTurbo ? _dependency2.tween(this._scroller).bindNodeState(false).to(this.stopSpinTime, {
          position: this.getStopPositionY()
        }, {
          easing: _dependency2.easing.circOut
        }).call(function () {
          return t.stopSpinEndCallback();
        }).start() : _dependency2.tween(this._scroller).bindNodeState(false).to(this.stopSpinTime / 2, {
          position: this.getStopPositionY(12)
        }, {
          onUpdate: function () {
            t.updateStopFakeSymbolPosition();
          }
        }).call(function () {
          dispatch(_dependency7.GameEvent.REEL_STOP, t.reelIndex), t.symbols.forEach(function (t) {
            return t.status = _dependency4.EReelStatus.FINISH;
          }), _dependency2.tween(t._scroller).bindNodeState(false).to(t.stopSpinTime / 2, {
            position: t.getStopPositionY()
          }, {
            onUpdate: function () {
              t.updateStopFakeSymbolPosition();
            }
          }).call(function () {
            return t.stopSpinEndCallback();
          }).start();
        }).start();
        break;
      case _dependency4.EScrollDirection.LEFT:
        this._scroller.x = -this.node.getComponent(_dependency2.UITransform).width, this._isTurbo ? _dependency2.tween(this._scroller).bindNodeState(false).to(this.stopSpinTime, {
          position: this.getStopPositionX()
        }, {
          easing: _dependency2.easing.circOut
        }).call(function () {
          return t.stopSpinEndCallback();
        }).start() : _dependency2.tween(this._scroller).bindNodeState(false).to(this.stopSpinTime / 2, {
          position: this.getStopPositionX(12)
        }, {
          onUpdate: function () {
            t.updateStopFakeSymbolPosition();
          }
        }).call(function () {
          dispatch(_dependency7.GameEvent.REEL_STOP, t.reelIndex), t.symbols.forEach(function (t) {
            return t.status = _dependency4.EReelStatus.FINISH;
          }), _dependency2.tween(t._scroller).bindNodeState(false).to(t.stopSpinTime / 2, {
            position: t.getStopPositionX()
          }, {
            onUpdate: function () {
              t.updateStopFakeSymbolPosition();
            }
          }).call(function () {
            return t.stopSpinEndCallback();
          }).start();
        }).start();
    }
  }, r.baseStop = function () {
    var t = this;
    switch (this.scrollDirection) {
      case _dependency4.EScrollDirection.DOWN:
        this._scroller.y = -this.node.getComponent(_dependency2.UITransform).height, this._isTurbo ? _dependency2.tween(this._scroller).bindNodeState(false).to(this.stopSpinTime, {
          position: this.getStopPositionY()
        }, {
          easing: _dependency2.easing.circOut,
          onUpdate: function () {
            t.updateStopFakeSymbolPosition();
          }
        }).call(function () {
          return t.stopSpinEndCallback();
        }).start() : _dependency2.tween(this._scroller).bindNodeState(false).to(this.stopSpinTime, {
          position: this.getStopPositionY()
        }, {
          easing: function (e) {
            return (e -= 1) * e * ((t.easeBackOutAmount + 1) * e + t.easeBackOutAmount) + 1;
          },
          onUpdate: function () {
            t.updateStopFakeSymbolPosition();
          }
        }).call(function () {
          return t.stopSpinEndCallback();
        }).start();
        break;
      case _dependency4.EScrollDirection.LEFT:
        this._scroller.x = -this.node.getComponent(_dependency2.UITransform).width, this._isTurbo ? _dependency2.tween(this._scroller).bindNodeState(false).to(this.stopSpinTime, {
          position: this.getStopPositionX()
        }, {
          easing: _dependency2.easing.circOut,
          onUpdate: function () {
            t.updateStopFakeSymbolPosition();
          }
        }).call(function () {
          return t.stopSpinEndCallback();
        }).start() : _dependency2.tween(this._scroller).bindNodeState(false).to(this.stopSpinTime, {
          position: this.getStopPositionX()
        }, {
          easing: function (e) {
            return (e -= 1) * e * ((t.easeBackOutAmount + 1) * e + t.easeBackOutAmount) + 1;
          },
          onUpdate: function () {
            t.updateStopFakeSymbolPosition();
          }
        }).call(function () {
          return t.stopSpinEndCallback();
        }).start();
    }
  }, r.stopSpinEndCallback = function () {
    this.stopFakeSymbol && (this.stopFakeSymbol.node.active = !1), this.status = _dependency4.EReelStatus.FINISH, this.symbols.forEach(function (t) {
      return t.status = _dependency4.EReelStatus.FINISH;
    }), this.node.emit(_dependency5.SingleReelEvents.FINISH, this.reelIndex);
  }, r.getStopPositionY = function (t) {
    void 0 === t && (t = 0);
    var e = this.node.getComponent(_dependency2.UITransform).height - this._scrollerHeight;
    return new _dependency2.Vec3(this._scroller.x, e - t, 0);
  }, r.getStopPositionX = function (t) {
    void 0 === t && (t = 0);
    var e = this.node.getComponent(_dependency2.UITransform).width - this._scrollerWidth;
    return new _dependency2.Vec3(e - t, this._scroller.y, 0);
  }, r._generateSymbolInstance = function () {
    if (this.symbolPrefab) {
      this.symbols.forEach(function (t) {
        return null == t ? void 0 : t.node.removeFromParent();
      });
      var t = _dependency2.instantiate(this.symbolPrefab);
      this.symbols = [];
      for (var e = 3 * this.symbolCount, o = 0; o < e; o++) {
        var s,
          i = _dependency2.instantiate(t);
        i.name = "symbol_" + o;
        var n = i.getComponent(_dependency3.GameSlotSymbol);
        n.symbolLabels = this.symbolLabels.slice(), this.symbols[o] = n, null == (s = this._scroller) || s.addChild(i);
      }
      if (this._scroller.getComponent(_dependency2.Layout).enabled = !1, this._scroller.getComponent(_dependency2.Layout).updateLayout(), this.symbolPrefab) {
        var l = _dependency2.instantiate(t);
        l.active = !1, this.node && this.node.addChild(l);
      }
    }
  }, r._swapSymbol = function (t, e) {
    this._scroller.getComponent(_dependency2.Layout).enabled = !1, this.initializeSymbols(t, e), this.checkScatterJackpotAppear(), this.reelIndex > 1 && this.reelIndex < 6 ? this.randomizeGroupedSymbols(e) : this.randomizeSymbols(e), this._scroller.getComponent(_dependency2.Layout).enabled = !0;
  }, r.checkScatterJackpotAppear = function () {
    this.nextScatterIndex < this._reRollCount ? this.scatterAppear = !1 : this.scatterAppear = !0, this.hasScatter && this._reRollCount >= 4 && (this.scatterAppear = !0), this.nextJackpotIndex < this._reRollCount ? this.jackpotAppear = !1 : this.jackpotAppear = !0, this.hasJackpot && this._reRollCount >= 4 && (this.jackpotAppear = !0);
  }, r.initializeSymbols = function (t, e) {
    for (var o = 0; o < t.length; o++) {
      var s = t[o],
        i = e[o];
      s.initData(), s.groupCount = i.groupCount, s.symbolID = i.symbolID, s.level = i.level, s.symbolID === _dependency8.EBackendSymbolID.RATE && (s.rate = 2);
    }
  }, r.randomizeSymbols = function (t) {
    for (var e = 0; e < t.length; e++) {
      var o = t[e];
      o.initData(), this.handleSpecialSymbols(o);
    }
  }, r.randomizeGroupedSymbols = function (t) {
    for (var e, o = this.getRandomSumTo5(), s = 0, i = 1 === this.reelIndex || 6 === this.reelIndex ? 2 : 1, l = _dependency.createForOfIteratorHelperLoose(o); !(e = l()).done;) for (var r = e.value, a = 0; a < r; a++) {
      var c = t[s];
      c.initData(), a === r - 1 && (c.groupCount = r, r > 1 ? (c.symbolID = _dependency2.randomRangeInt(i, 13), c.symbolID === _dependency8.EBackendSymbolID.WILD ? c.level = 3 : c.level = _dependency2.randomRangeInt(i, 3), c.symbolID === _dependency8.EBackendSymbolID.RATE && (c.rate = 2)) : this.handleSpecialSymbols(c)), s++;
    }
  }, r.handleSpecialSymbols = function (t) {
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
  }, r.getRandomSumTo5 = function () {
    for (var t = 0, e = 0, o = []; t < 5 && e < 5;) {
      var s = Math.floor(4 * Math.random()) + 1;
      if (t + s > 5) s = 5 - t;
      t += s, o.push(s), e++;
    }
    return o;
  }, r.updateStopFakeSymbolPosition = function () {
    if (this.stopFakeSymbol) {
      var t = 0,
        e = 0;
      if (this._scroller) {
        var o = this._scroller ? this._scroller.getComponent(_dependency2.Layout) : null;
        o && (t = o.paddingTop, e = o.spacingY), this.stopFakeSymbol.node.active = !0;
        var s = this._scroller.getComponent(_dependency2.UITransform).height,
          i = this._scroller.getComponent(_dependency2.UITransform).width,
          n = this.stopFakeSymbol.node.getComponent(_dependency2.UITransform);
        switch (this.scrollDirection) {
          case _dependency4.EScrollDirection.LEFT:
            this.stopFakeSymbol.node.x = this._scroller.x + i + n.width * n.anchorX - t + e;
            break;
          case _dependency4.EScrollDirection.DOWN:
            this.stopFakeSymbol.node.y = this._scroller.y + s + n.height * n.anchorY - t + e;
        }
      }
    }
  }, r.changeStartSpinStatus = function () {
    this._spinning = !0, this.status = _dependency4.EReelStatus.START_SPIN, this.symbols.forEach(function (t) {
      return t.status = _dependency4.EReelStatus.START_SPIN;
    });
  }, _dependency.createClass(e, [{
    key: "symbolLabels",
    get: function () {
      return this._symbolLabels;
    },
    set: function (t) {
      this._symbolLabels = t.slice();
      for (var e = 0; e < this.symbols.length; e++) {
        var o = this.symbols[e];
        o && (o.symbolLabels = this._symbolLabels.slice()), this.stopFakeSymbol && (this.stopFakeSymbol.symbolLabels = this._symbolLabels.slice());
      }
    }
  }, {
    key: "symbolCount",
    get: function () {
      return this._symbolCount;
    },
    set: function (t) {
      var e, o, s, i;
      switch (this._symbolCount = t, this._generateSymbolInstance(), this.scrollDirection) {
        case _dependency4.EScrollDirection.DOWN:
          (null == (e = this.symbols[0]) || null == (o = e.node) ? void 0 : o.getComponent(_dependency2.UITransform).height) && (this._scroller.y = this.node.getComponent(_dependency2.UITransform).height - this._scroller.getComponent(_dependency2.UITransform).height);
          break;
        case _dependency4.EScrollDirection.LEFT:
          (null == (s = this.symbols[0]) || null == (i = s.node) ? void 0 : i.getComponent(_dependency2.UITransform).width) && (this._scroller.x = this.node.getComponent(_dependency2.UITransform).width - this._scroller.getComponent(_dependency2.UITransform).width);
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
      this._isFreeGame = t;
    }
  }]), e;
}(_dependency6.default)).prototype, "scrollDirection", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return _dependency4.EScrollDirection.DOWN;
  }
}), W = _dependency.applyDecoratedDescriptor(G.prototype, "symbols", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), z = _dependency.applyDecoratedDescriptor(G.prototype, "symbolPrefab", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(G.prototype, "spinSpeed", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 20;
  }
}), J = _dependency.applyDecoratedDescriptor(G.prototype, "stopSpinTime", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .45;
  }
}), j = _dependency.applyDecoratedDescriptor(G.prototype, "stopFakeSymbol", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _dependency.applyDecoratedDescriptor(G.prototype, "symbolCount", [O], Object.getOwnPropertyDescriptor(G.prototype, "symbolCount"), G.prototype), N = G)) || N));
_dependency2.cclegacy._RF.pop();
