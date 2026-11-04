// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/SymbolView.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmmUtils";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./framework-SlotFrameworkEvent";
import * as __dependency_6 from "./framework-ReplayModel";
import * as __dependency_7 from "./framework-ExitUtils";
import * as __dependency_8 from "./framework-MathUtil";
import * as __dependency_9 from "./g1007-GameConfigModel";
import * as __dependency_10 from "./g1007-GameData";
import * as __dependency_11 from "./g1007-GameSymbolID";
import * as __dependency_12 from "./g1007-GameEvent";
import * as __dependency_13 from "./g1007-GameSymbol";
import * as __dependency_14 from "./g1007-types";
import * as __dependency_15 from "./framework-LogUtils";
import * as __dependency_16 from "./framework-CmmSlotUtils";
var __export_0;
export { __export_0 as EPool };
var __export_1;
export { __export_1 as ESymbolEvent };
var __export_2;
export { __export_2 as SymbolView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EPool":
      __export_0 = value;
      break;
    case "ESymbolEvent":
      __export_1 = value;
      break;
    case "SymbolView":
      __export_2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, r, o, s, a, i, c, l, u, p, h, m, f, d, y, S, b, T, g, _, M, E, w, v, O, C, x, P, A, L, R, k, I, B, Y, D, G;
var N, H, W, K, z, U, Q, F, J, V, X, j, q, Z, $;
__publish({
  EPool: void 0,
  ESymbolEvent: void 0
}), __dependency_1.cclegacy._RF.push({}, "58e2apTQs9K7qW0JnWavBYm", "SymbolView", void 0);
var tt,
  et,
  nt = __dependency_1._decorator.ccclass,
  rt = __dependency_1._decorator.property;
!function (t) {
  t.SYMBOL_POOL = "symbolPool";
}(tt || (tt = __publish("EPool", {}))), function (t) {
  t.STOP_SYMBOL_OUT = "stopSymbolOut", t.STOP_SYMBOL_IN = "stopSymbolIn";
}(et || (et = __publish("ESymbolEvent", {})));
__publish("SymbolView", (N = nt("Hades_SymbolView"), H = __dependency_4.inject("symbolContainer", __dependency_1.Node), W = __dependency_4.inject("winContainer", __dependency_1.Node), K = __dependency_4.inject("expectContainer", __dependency_1.Node), z = __dependency_4.inject("signScatter", __dependency_1.sp.Skeleton), U = __dependency_4.inject("symbolMerge", __dependency_1.sp.Skeleton), Q = rt(__dependency_1.Prefab), N((V = __dependency_0.applyDecoratedDescriptor((J = function (t) {
  function e() {
    for (var e, n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "symbolContainer", V, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "winContainer", X, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "expectContainer", j, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "signScatter", q, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "symbolMerge", Z, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "gameSymbol", $, __dependency_0.assertThisInitialized(e)), e.GAME_HEIGHT = 720, e.SYMBOL_ROW = 5, e.SYMBOL_COL = 5, e.TOTAL_SYMBOL = e.SYMBOL_ROW * e.SYMBOL_COL, e.SYMBOL_MOVE_ORDERS = [20, 15, 21, 10, 16, 22, 5, 11, 17, 23, 0, 6, 12, 18, 24, 1, 7, 13, 19, 2, 8, 14, 3, 9, 4], e.SYMBOL_RECHARGE_ORDERS = [20, 15, 10, 5, 0, 21, 16, 11, 6, 1, 22, 17, 12, 7, 2, 23, 18, 13, 8, 3, 24, 19, 14, 9, 4], e.scatterHitBtm = [__dependency_9.EBTM.SCATTER_HIT_01, __dependency_9.EBTM.SCATTER_HIT_02, __dependency_9.EBTM.SCATTER_HIT_03, __dependency_9.EBTM.SCATTER_HIT_04, __dependency_9.EBTM.SCATTER_HIT_05], e.symbolOutTag = __dependency_2.CmmUtils.hashCode("symbolOutTag"), e.symbolInTag = __dependency_2.CmmUtils.hashCode("symbolInTag"), e.symbolDarkColor = new __dependency_1.Color(102, 102, 102, 255), e.symbolsMap = new Map(), e.outSymbolsMap = new Map(), e.needInitHeight = !1, e.isClickQuickIn = !1, e.isSymbolsInStopped = !1, e.isGambleExpecting = !1, e.isRechargeExpecting = !1, e.isNormalIn = !1, e;
  }
  __dependency_0.inheritsLoose(e, t);
  var l = e.prototype;
  return l.onLoad = function () {
    t.prototype.onLoad.call(this), this.symbolMerge.clearTracks(), this.symbolMerge.setToSetupPose(), this.symbolMerge.node.active = !1;
  }, l.start = function () {}, l.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, l.init = function () {
    this.createSymbolPool(), this.initSymbolView(), this.hideExpectNodes();
  }, l.createSymbolPool = function () {
    for (var t = 0; t < 75; t++) {
      var e = __dependency_1.instantiate(this.gameSymbol);
      App.pool.createPool(tt.SYMBOL_POOL).cloneNode = e, App.pool.createPool(tt.SYMBOL_POOL).put(e);
    }
  }, l.initSymbolView = function () {
    var t = this,
      e = this.data.getData().parser.currentGameState,
      n = e.view,
      r = e.groupSymbols,
      o = __dependency_8.default.flattenArray(n),
      s = new Set(r.reduce(function (t, e) {
        return t.concat(e.symbolPos);
      }, []));
    this.createGroupSymbols(!1), o.forEach(function (e, n) {
      s.has(n) || t.createSymbol(e, n, !1);
    }), this.signScatter.node.active = !1;
  }, l.createSymbol = function (t, e, n) {
    var r = this.data.getData().symbolPosConfig.get(e),
      o = r.x,
      s = r.y,
      a = r.z,
      i = App.pool.getPool(tt.SYMBOL_POOL).get(),
      c = i.getComponent(__dependency_13.GameSymbol),
      l = __dependency_1.v3(o, n ? s + this.GAME_HEIGHT : s, a),
      u = [__dependency_11.EBackendSymbolID.SCATTER, __dependency_11.EBackendSymbolID.JACKPOT],
      p = [__dependency_11.EBackendSymbolID.WILD, __dependency_11.EBackendSymbolID.JACKPOT, __dependency_11.EBackendSymbolID.HADES, __dependency_11.EBackendSymbolID.SCATTER],
      h = u.includes(t) ? 1 : .2;
    return i.setPosition(l), i.setParent(this.symbolContainer), c.setSymbol(t), c.setSymbolScale(h), c.frameScale = .2, p.includes(t) && c.playIdleAnim(), this.symbolsMap.set(e, {
      script: c,
      symbolId: t,
      node: i
    }), i;
  }, l.createSymbols = function () {
    var t = this;
    __dependency_8.default.flattenArray(this.data.getData().parser.currentGameState.view).forEach(function (e, n) {
      t.createSymbol(e, n, !0);
    }), this.setSymbolsSiblingIndex();
  }, l.createGroupSymbol = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(e, n) {
      var r, o, s, i, c, l, u, p, h;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            for (r = e.size, o = e.symbolId, s = e.symbolPos, i = App.pool.getPool(tt.SYMBOL_POOL).get(), c = i.getComponent(__dependency_13.GameSymbol), l = this.getBigSymbolPos(s), u = r / 5, s.sort(function (t, e) {
              return e - t;
            }), i.setPosition(l), i.setParent(this.symbolContainer), c.setSymbol(o), c.isGroupSymbol = !0, c.frameScale = u, p = 0; p < s.length; p++) h = 0 == p ? {
              script: c,
              symbolId: o,
              node: i
            } : null, this.symbolsMap.set(s[p], h);
            if (!n) {
              t.next = 20;
              break;
            }
            return c.setSymbolScale(0), i.setParent(this.winContainer), c.playTransInAnim(r), t.next = 18, c.setSymbolScaleByTween(u);
          case 18:
            t.next = 21;
            break;
          case 20:
            c.setSymbolScale(u);
          case 21:
            o == __dependency_11.EBackendSymbolID.HADES && c.playIdleAnim();
          case 22:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e, n) {
      return t.apply(this, arguments);
    };
  }(), l.createGroupSymbols = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(e) {
      var n,
        r,
        o,
        s = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return n = this.data.getData(), r = n.newGroupSymbols, o = [], r.forEach(function (t) {
              o.push(s.createGroupSymbol(t, e));
            }), t.next = 5, Promise.all(o);
          case 5:
            this.setSymbolsSiblingIndex();
          case 6:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }(), l.setSymbolsSiblingIndex = function (t) {
    void 0 === t && (t = !1);
    for (var e = [], n = [], r = [], o = [], s = [], a = 0, i = 0; i < this.TOTAL_SYMBOL; i++) {
      var c = this.symbolsMap.get(i),
        l = null == c ? void 0 : c.script;
      l && (l.isGroupSymbol ? e.push(l) : l.id === __dependency_11.EBackendSymbolID.SCATTER ? n.push(l) : l.id === __dependency_11.EBackendSymbolID.WILD ? r.push(l) : l.id === __dependency_11.EBackendSymbolID.JACKPOT ? o.push(l) : s.push(l));
    }
    (t ? [s, r, o, n, e] : [s, r, e, o, n]).forEach(function (t) {
      t.forEach(function (t) {
        t.node.setSiblingIndex(a++);
      });
    });
  }, l.showSymbolsOut = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r,
        o,
        s,
        i,
        c,
        l,
        u,
        p,
        h,
        m,
        f,
        d = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            for (e = __dependency_9.default.getData().reelConfig, n = e.symbolOutTime, r = e.symbolDelay, o = __dependency_9.default.isTurbo ? __dependency_9.EBTM.SYMBOL_OUT_FAST : __dependency_9.EBTM.SYMBOL_OUT, s = Array.from(this.outSymbolsMap).sort(function (t, e) {
              return t[0] - e[0];
            }), i = [], c = 0, l = 0, u = 0, __dependency_9.default.canQuickStop = !0, __dependency_9.default.symbolsOutResolved = !1, dispatch(__dependency_12.GameEvent.PLAY_BTM, {
              data: {
                url: o
              }
            }), this.moveSymbolToSymbolContainer(), p = 0; p < this.TOTAL_SYMBOL; p++) (h = s[p]) && h[1] && c++;
            m = __dependency_0.regeneratorRuntime().mark(function t() {
              var e, o, p, h, m;
              return __dependency_0.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e = d.SYMBOL_MOVE_ORDERS[f], o = s[e], p = l * r, l++, o && o[1] && (h = o[1].node, m = new Promise(function (t) {
                      __dependency_1.tween(h).bindNodeState(false).delay(p).by(n, {
                        position: new __dependency_1.Vec3(0, -d.GAME_HEIGHT, 0)
                      }, {
                        easing: __dependency_1.easing.sineIn
                      }).call(function () {
                        if (++u == c) for (var e = 0; e < d.outSymbolsMap.size; e++) {
                          var n = d.outSymbolsMap.get(e);
                          n && n.script.recycleSymbol(), e == d.outSymbolsMap.size - 1 && d.outSymbolsMap.clear();
                        }
                        t();
                      }).tag(d.symbolOutTag).start(), h.once(et.STOP_SYMBOL_OUT, function () {
                        t();
                      }, d);
                    }), i.length <= 5 && i.push(m));
                  case 5:
                  case "end":
                    return t.stop();
                }
              }, t);
            }), f = 0;
          case 14:
            if (!(f < this.SYMBOL_MOVE_ORDERS.length)) {
              t.next = 19;
              break;
            }
            return t.delegateYield(m(), "t0", 16);
          case 16:
            f++, t.next = 14;
            break;
          case 19:
            return t.next = 21, Promise.all(i);
          case 21:
            this.symbolsMap.clear(), __dependency_9.default.symbolsOutResolved = !0;
          case 23:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.stopSymbolsOut = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e, n;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            for (__dependency_1.Tween.stopAllByTag(this.symbolOutTag), e = 0; e < this.outSymbolsMap.size; e++) (n = this.outSymbolsMap.get(e)) && (n.node.emit(et.STOP_SYMBOL_OUT), n.script.recycleSymbol());
          case 2:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showSymbolsIn = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (e = __dependency_9.default.isTurbo, __dependency_9.default.canQuickStop = !0, __dependency_9.default.symbolsOutResolved = !0, this.isSymbolsInStopped = !1, !e && !this.isClickQuickIn) {
              t.next = 10;
              break;
            }
            return this.isClickQuickIn = !1, t.next = 8, this.showSymbolsQuickIn();
          case 8:
            t.next = 14;
            break;
          case 10:
            return t.next = 12, __dependency_16.CmmSlotUtils.delayTime(.618);
          case 12:
            return t.next = 14, this.showSymbolsNormalIn();
          case 14:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.stopSymbolsIn = function () {
    __dependency_1.Tween.stopAllByTag(this.symbolInTag), this.isSymbolsInStopped = !0, this.symbolsMap.forEach(function (t) {
      t && t.node.emit(et.STOP_SYMBOL_IN);
    });
  }, l.showSymbolsNormalIn = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e, n, r, o, s, i, c;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (__dependency_9.default.symbolsOutResolved) {
              t.next = 2;
              break;
            }
            return t.abrupt("return");
          case 2:
            if (e = this.data.getData(), n = e.buyFeatureType, r = this.data.checkIsMG(), o = this.data.checkIsExpect(), s = n == __dependency_14.EFeature.LUCK_OR_BAD_LUCK && r, i = [__dependency_14.EFeature.FREE_GAME, __dependency_14.EFeature.SUPER_FREE_GAME], c = i.includes(n) && r, this.isNormalIn = !0, !s) {
              t.next = 16;
              break;
            }
            return t.next = 12, this.showGambleExpect();
          case 12:
            return t.next = 14, this.showGambleIn();
          case 14:
            t.next = 23;
            break;
          case 16:
            if (!o || c) {
              t.next = 21;
              break;
            }
            return t.next = 19, this.showExpectIn();
          case 19:
            t.next = 23;
            break;
          case 21:
            return t.next = 23, this.showNormalIn();
          case 23:
            this.isNormalIn = !1;
          case 24:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showSymbolsQuickIn = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e, n, r, o, s;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (e = this.data.getData(), n = e.buyFeatureType, r = this.data.checkIsExpect(), o = this.data.checkIsMG(), s = n == __dependency_14.EFeature.LUCK_OR_BAD_LUCK && o, __dependency_9.default.canQuickStop = !1, dispatch(__dependency_12.GameEvent.PLAY_BTM, {
              data: {
                url: __dependency_9.EBTM.SYMBOL_IN_FAST
              }
            }), !s) {
              t.next = 15;
              break;
            }
            if (this.isGambleExpecting || this.isNormalIn) {
              t.next = 10;
              break;
            }
            return t.next = 10, this.showGambleExpect();
          case 10:
            return this.isNormalIn = !1, t.next = 13, this.showGambleQuickIn();
          case 13:
            t.next = 22;
            break;
          case 15:
            if (!r) {
              t.next = 20;
              break;
            }
            return t.next = 18, this.showExpectQuickIn();
          case 18:
            t.next = 22;
            break;
          case 20:
            return t.next = 22, this.showNormalQuickIn();
          case 22:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showNormalIn = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r,
        o,
        s,
        i,
        c,
        l,
        u,
        p,
        h,
        m,
        f,
        d,
        y = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            console.log("%c showNormalIn ", __dependency_15.getKeyStyle(__dependency_15.KeyStyle.Function)), e = this.data.getData(), n = e.symbolPosConfig, r = __dependency_9.default.getData().reelConfig, o = r.fallTime, s = r.symbolDelay, i = r.backTime, c = r.overPosOffset, l = Array.from(this.symbolsMap).sort(function (t, e) {
              return t[0] - e[0];
            }), u = [], p = 0, h = 0, __dependency_9.default.canQuickStop = !0, m = __dependency_0.regeneratorRuntime().mark(function t(e) {
              var r, m, f, d, T, g, _, M;
              return __dependency_0.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (h++, r = y.SYMBOL_MOVE_ORDERS[e], m = l[r], !(f = m[1].script).isMoveCompleted) {
                      t.next = 6;
                      break;
                    }
                    return t.abrupt("return", {
                      v: void 0
                    });
                  case 6:
                    d = n.get(m[0]), T = d.x, g = d.y, _ = d.z, M = new Promise(function (t) {
                      var n = h * s * .7;
                      __dependency_1.tween(f.node).bindNodeState(false).delay(n).to(1.3 * o, {
                        position: new __dependency_1.Vec3(T, g, _)
                      }, {
                        onComplete: function () {
                          f.id == __dependency_11.EBackendSymbolID.SCATTER ? (dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                            data: {
                              url: y.scatterHitBtm[p]
                            }
                          }), f.node.setParent(y.winContainer), p++) : f.id == __dependency_11.EBackendSymbolID.JACKPOT && dispatch(__dependency_12.GameEvent.PLAY_REPEAT_BTM, {
                            data: {
                              url: __dependency_9.EBTM.JP_HIT
                            }
                          }), 0 == e && dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                            data: {
                              url: __dependency_9.EBTM.SYMBOL_IN
                            }
                          });
                        }
                      }).to(i, {
                        position: new __dependency_1.Vec3(T, g + c, _)
                      }).to(i, {
                        position: new __dependency_1.Vec3(T, g, _)
                      }).to(i, {
                        position: new __dependency_1.Vec3(T, g + .5 * c, _)
                      }).to(i, {
                        position: new __dependency_1.Vec3(T, g, _)
                      }).call(function () {
                        y.isSymbolsInStopped || (f.isMoveCompleted = !0), t();
                      }).tag(y.symbolInTag).start(), f.node.once(et.STOP_SYMBOL_IN, function () {
                        t();
                      });
                    }), u.push(M);
                  case 9:
                  case "end":
                    return t.stop();
                }
              }, t);
            }), f = 0;
          case 10:
            if (!(f < this.SYMBOL_MOVE_ORDERS.length)) {
              t.next = 18;
              break;
            }
            return t.delegateYield(m(f), "t0", 12);
          case 12:
            if ("object" != typeof (d = t.t0)) {
              t.next = 15;
              break;
            }
            return t.abrupt("return", d.v);
          case 15:
            f++, t.next = 10;
            break;
          case 18:
            return t.next = 20, Promise.all(u);
          case 20:
            __dependency_9.default.canQuickStop = !1;
          case 21:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showNormalQuickIn = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r,
        o,
        s,
        i,
        c,
        l,
        u,
        p,
        h,
        m,
        f = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e = this.data.getData(), n = e.symbolPosConfig, r = __dependency_9.default.getData().reelConfig, o = r.fallTime, s = r.backTime, i = r.overPosOffset, c = Array.from(this.symbolsMap).sort(function (t, e) {
              return t[0] - e[0];
            }), l = [], u = 0, p = __dependency_0.regeneratorRuntime().mark(function t(e) {
              var r, p, h, m, d, y, T, g, M, E;
              return __dependency_0.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (p = f.SYMBOL_MOVE_ORDERS[e], h = c[p], m = null == (r = h[1]) ? void 0 : r.script) {
                      t.next = 5;
                      break;
                    }
                    return t.abrupt("return", {
                      v: void 0
                    });
                  case 5:
                    d = n.get(h[0]), y = d.x, T = d.y, g = d.z, M = f.needInitHeight ? {
                      position: new __dependency_1.Vec3(y, T + 300, g)
                    } : {}, m.isMoveCompleted || (E = new Promise(function (t) {
                      __dependency_1.tween(m.node).bindNodeState(false).delay(.00618 * e).set(M).to(o / 2, {
                        position: new __dependency_1.Vec3(y, T, g)
                      }, {
                        easing: __dependency_1.easing.quadOut
                      }).to(s, {
                        position: new __dependency_1.Vec3(y, T + i, g)
                      }).to(s, {
                        position: new __dependency_1.Vec3(y, T, g)
                      }).to(s, {
                        position: new __dependency_1.Vec3(y, T + .5 * i, g)
                      }).to(s, {
                        position: new __dependency_1.Vec3(y, T, g)
                      }).call(function () {
                        m.isMoveCompleted = !0, m.id == __dependency_11.EBackendSymbolID.SCATTER ? (dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                          data: {
                            url: f.scatterHitBtm[u]
                          }
                        }), m.node.setParent(f.winContainer), u++) : m.id == __dependency_11.EBackendSymbolID.JACKPOT && dispatch(__dependency_12.GameEvent.PLAY_REPEAT_BTM, {
                          data: {
                            url: __dependency_9.EBTM.JP_HIT
                          }
                        }), t();
                      }).start();
                    }), l.push(E));
                  case 8:
                  case "end":
                    return t.stop();
                }
              }, t);
            }), h = 0;
          case 7:
            if (!(h < this.SYMBOL_MOVE_ORDERS.length)) {
              t.next = 15;
              break;
            }
            return t.delegateYield(p(h), "t0", 9);
          case 9:
            if ("object" != typeof (m = t.t0)) {
              t.next = 12;
              break;
            }
            return t.abrupt("return", m.v);
          case 12:
            h++, t.next = 7;
            break;
          case 15:
            return t.next = 17, Promise.all(l);
          case 17:
            this.needInitHeight = !1;
          case 18:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showExpectIn = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r,
        o,
        s,
        i,
        c,
        l,
        u,
        p,
        h,
        m,
        f,
        d,
        y,
        T,
        g,
        _ = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (console.log("%c 全盤新物件進入 平轉瞇牌模式", __dependency_15.getKeyStyle(__dependency_15.KeyStyle.Important)), __dependency_9.default.symbolsOutResolved) {
              t.next = 3;
              break;
            }
            return t.abrupt("return");
          case 3:
            e = this.data.getData(), n = e.symbolPosConfig, r = __dependency_9.default.getData().reelConfig, o = r.fallTime, s = r.symbolDelay, i = r.backTime, c = r.overPosOffset, l = Array.from(this.symbolsMap).sort(function (t, e) {
              return t[0] - e[0];
            }), u = [], p = this.data.getScattersCols(), h = p[1] + 1, 1.1, m = Array.from({
              length: this.SYMBOL_COL
            }, function (t, e) {
              return e;
            }), f = 0, d = 0, __dependency_9.default.canQuickStop = !0, y = __dependency_0.regeneratorRuntime().mark(function t(e) {
              var r, p, y, T, g, M, E, w;
              return __dependency_0.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (d++, r = _.SYMBOL_MOVE_ORDERS[e], p = l[r], !(y = p[1].script).isMoveCompleted) {
                      t.next = 6;
                      break;
                    }
                    return t.abrupt("return", {
                      v: void 0
                    });
                  case 6:
                    T = n.get(p[0]), g = T.x, M = T.y, E = T.z, w = new Promise(function (t) {
                      var n = m.includes(r),
                        a = _.data.getPosToRowCol(r).col,
                        l = d * s,
                        u = a >= h ? l + 1.1 * (a - h + 1) : l;
                      __dependency_1.tween(y.node).bindNodeState(false).delay(u).to(o, {
                        position: new __dependency_1.Vec3(g, M, E)
                      }, {
                        onComplete: function () {
                          y.id == __dependency_11.EBackendSymbolID.SCATTER ? (dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                            data: {
                              url: _.scatterHitBtm[f]
                            }
                          }), y.node.setParent(_.winContainer), f++) : y.id == __dependency_11.EBackendSymbolID.JACKPOT && dispatch(__dependency_12.GameEvent.PLAY_REPEAT_BTM, {
                            data: {
                              url: __dependency_9.EBTM.JP_HIT
                            }
                          }), 0 == e && dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                            data: {
                              url: __dependency_9.EBTM.SYMBOL_IN
                            }
                          });
                        }
                      }).to(i, {
                        position: new __dependency_1.Vec3(g, M + c, E)
                      }).to(i, {
                        position: new __dependency_1.Vec3(g, M, E)
                      }).to(i, {
                        position: new __dependency_1.Vec3(g, M + .5 * c, E)
                      }).to(i, {
                        position: new __dependency_1.Vec3(g, M, E)
                      }).call(function () {
                        _.isSymbolsInStopped || (y.isMoveCompleted = !0, a >= h - 1 && n && (_.hideExpectNodes(), _.playExpectAnim(a + 1))), t();
                      }).tag(_.symbolInTag).start(), y.node.once(et.STOP_SYMBOL_IN, function () {
                        t();
                      });
                    }), u.push(w);
                  case 9:
                  case "end":
                    return t.stop();
                }
              }, t);
            }), T = 0;
          case 16:
            if (!(T < this.SYMBOL_MOVE_ORDERS.length)) {
              t.next = 24;
              break;
            }
            return t.delegateYield(y(T), "t0", 18);
          case 18:
            if ("object" != typeof (g = t.t0)) {
              t.next = 21;
              break;
            }
            return t.abrupt("return", g.v);
          case 21:
            T++, t.next = 16;
            break;
          case 24:
            return t.next = 26, Promise.all(u);
          case 26:
            __dependency_9.default.canQuickStop = !1;
          case 27:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showExpectQuickIn = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r,
        o,
        s,
        i,
        c,
        l,
        u,
        p,
        h,
        m = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e = this.data.getData(), n = e.symbolPosConfig, r = __dependency_9.default.getData().reelConfig, o = r.fallTime, s = r.backTime, i = r.overPosOffset, c = Array.from(this.symbolsMap).sort(function (t, e) {
              return t[0] - e[0];
            }), l = [], u = 0, p = __dependency_0.regeneratorRuntime().mark(function t(e) {
              var r, p, h, f, d, y, T, g;
              return __dependency_0.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    r = m.SYMBOL_MOVE_ORDERS[e], p = c[r], h = p[1].script, f = n.get(p[0]), d = f.x, y = f.y, T = f.z, h.isMoveCompleted || (g = new Promise(function (t) {
                      __dependency_1.tween(h.node).bindNodeState(false).delay(.00618 * e).to(o / 2, {
                        position: new __dependency_1.Vec3(d, y, T)
                      }, {
                        easing: __dependency_1.easing.quadOut
                      }).to(s, {
                        position: new __dependency_1.Vec3(d, y + i, T)
                      }).to(s, {
                        position: new __dependency_1.Vec3(d, y, T)
                      }).to(s, {
                        position: new __dependency_1.Vec3(d, y + .5 * i, T)
                      }).to(s, {
                        position: new __dependency_1.Vec3(d, y, T)
                      }).call(function () {
                        h.isMoveCompleted = !0, h.id == __dependency_11.EBackendSymbolID.SCATTER ? (dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                          data: {
                            url: m.scatterHitBtm[u]
                          }
                        }), h.node.setParent(m.winContainer), u++) : h.id == __dependency_11.EBackendSymbolID.JACKPOT && dispatch(__dependency_12.GameEvent.PLAY_REPEAT_BTM, {
                          data: {
                            url: __dependency_9.EBTM.JP_HIT
                          }
                        }), m.hideExpectNodes(), t();
                      }).start();
                    }), l.push(g));
                  case 5:
                  case "end":
                    return t.stop();
                }
              }, t);
            }), h = 0;
          case 7:
            if (!(h < this.SYMBOL_MOVE_ORDERS.length)) {
              t.next = 12;
              break;
            }
            return t.delegateYield(p(h), "t0", 9);
          case 9:
            h++, t.next = 7;
            break;
          case 12:
            return t.next = 14, Promise.all(l);
          case 14:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showGambleExpect = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r,
        o = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e = .5, n = this.expectContainer.children.length, __dependency_9.default.canQuickStop = !1, this.isGambleExpecting = !0, r = 0;
          case 5:
            if (!(r < n)) {
              t.next = 13;
              break;
            }
            if (this.playExpectAnim(r), !(r < n - 1)) {
              t.next = 10;
              break;
            }
            return t.next = 10, new Promise(function (t) {
              return o.scheduleOnce(t, e);
            });
          case 10:
            r++, t.next = 5;
            break;
          case 13:
            return t.next = 15, new Promise(function (t) {
              return o.scheduleOnce(t, 1);
            });
          case 15:
            this.isGambleExpecting = !1;
          case 16:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showGambleIn = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r,
        o,
        s,
        i,
        c,
        l,
        u,
        p,
        h,
        m,
        f,
        d,
        y,
        T,
        g,
        _ = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e = this.data.getData(), n = e.symbolPosConfig, r = e.gameState, o = __dependency_9.default.getData().reelConfig, s = o.fallTime, i = o.backTime, c = o.overPosOffset, l = Array.from(this.symbolsMap).sort(function (t, e) {
              return t[0] - e[0];
            }), u = r.length > (__dependency_6.default.isReplay ? 2 : 1), p = [], h = [0, 1, 2, 3, 4], m = [0, 1, .95, .9, .85], f = 0, d = 0, __dependency_9.default.canQuickStop = !0, y = 0;
          case 11:
            if (!(y < this.SYMBOL_COL)) {
              t.next = 22;
              break;
            }
            T = __dependency_0.regeneratorRuntime().mark(function t(e) {
              var r, o, y, T, g, M, E;
              return __dependency_0.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    d++, r = l[e], o = r[1].script, y = n.get(r[0]), T = y.x, g = y.y, M = y.z, E = new Promise(function (t) {
                      var n = _.data.getPosToRowCol(e).col,
                        r = .03 * d - .1 * n,
                        a = u ? r + h[n] : r + m[n];
                      __dependency_1.tween(o.node).bindNodeState(false).delay(a).to(s, {
                        position: new __dependency_1.Vec3(T, g, M)
                      }, {
                        onComplete: function () {
                          o.id == __dependency_11.EBackendSymbolID.SCATTER ? (dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                            data: {
                              url: _.scatterHitBtm[f]
                            }
                          }), o.node.setParent(_.winContainer), f++) : o.id == __dependency_11.EBackendSymbolID.JACKPOT && dispatch(__dependency_12.GameEvent.PLAY_REPEAT_BTM, {
                            data: {
                              url: __dependency_9.EBTM.JP_HIT
                            }
                          }), dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                            data: {
                              url: __dependency_9.EBTM.SYMBOL_IN
                            }
                          });
                        }
                      }).to(i, {
                        position: new __dependency_1.Vec3(T, g + c, M)
                      }).to(i, {
                        position: new __dependency_1.Vec3(T, g, M)
                      }).to(i, {
                        position: new __dependency_1.Vec3(T, g + .5 * c, M)
                      }).to(i, {
                        position: new __dependency_1.Vec3(T, g, M)
                      }).call(function () {
                        _.isSymbolsInStopped || (o.isMoveCompleted = !0), t();
                      }).tag(_.symbolInTag).start(), o.node.once(et.STOP_SYMBOL_IN, function () {
                        t();
                      });
                    }), p.push(E);
                  case 6:
                  case "end":
                    return t.stop();
                }
              }, t);
            }), g = this.TOTAL_SYMBOL - this.SYMBOL_ROW + y;
          case 14:
            if (!(g >= 0)) {
              t.next = 19;
              break;
            }
            return t.delegateYield(T(g), "t0", 16);
          case 16:
            g -= this.SYMBOL_ROW, t.next = 14;
            break;
          case 19:
            y++, t.next = 11;
            break;
          case 22:
            return t.next = 24, Promise.all(p);
          case 24:
            this.hideExpectNodes(), __dependency_9.default.canQuickStop = !1;
          case 26:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showGambleQuickIn = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r,
        o,
        s,
        i,
        c,
        l,
        u,
        p = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e = this.data.getData(), n = e.symbolPosConfig, r = __dependency_9.default.getData().reelConfig.fallTime, o = Array.from(this.symbolsMap).sort(function (t, e) {
              return t[0] - e[0];
            }), s = [], i = 0, c = 0;
          case 6:
            if (!(c < this.SYMBOL_COL)) {
              t.next = 17;
              break;
            }
            l = __dependency_0.regeneratorRuntime().mark(function t() {
              var e, c, l, h, m, f, d;
              return __dependency_0.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e = o[u], c = e[1].script, l = n.get(e[0]), h = l.x, m = l.y, f = l.z, c.isMoveCompleted || (d = new Promise(function (t) {
                      __dependency_1.tween(c.node).bindNodeState(false).to(r / 2, {
                        position: new __dependency_1.Vec3(h, m, f)
                      }, {
                        easing: function (t) {
                          return p.symbolsBezierByTime(t);
                        }
                      }).call(function () {
                        c.isMoveCompleted = !0, c.id == __dependency_11.EBackendSymbolID.SCATTER ? (dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                          data: {
                            url: p.scatterHitBtm[i]
                          }
                        }), c.node.setParent(p.winContainer), i++) : c.id == __dependency_11.EBackendSymbolID.JACKPOT && dispatch(__dependency_12.GameEvent.PLAY_REPEAT_BTM, {
                          data: {
                            url: __dependency_9.EBTM.JP_HIT
                          }
                        }), t();
                      }).start();
                    }), s.push(d));
                  case 4:
                  case "end":
                    return t.stop();
                }
              }, t);
            }), u = this.TOTAL_SYMBOL - this.SYMBOL_ROW + c;
          case 9:
            if (!(u >= 0)) {
              t.next = 14;
              break;
            }
            return t.delegateYield(l(), "t0", 11);
          case 11:
            u -= this.SYMBOL_ROW, t.next = 9;
            break;
          case 14:
            c++, t.next = 6;
            break;
          case 17:
            return t.next = 19, Promise.all(s);
          case 19:
            this.hideExpectNodes();
          case 20:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showSymbolTransHint = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r,
        o,
        s,
        i,
        c = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return e = this.data.getData(), n = e.newGroupSymbols, r = [], n.forEach(function (t) {
              var e = t.symbolPos;
              t.size;
              e.forEach(function (t) {
                var e = c.symbolsMap.get(t);
                e && !e.script.isGroupSymbol && r.push(e.script.playTransHintAnim());
              });
            }), o = n.map(function (t) {
              return t.size;
            }), s = Math.max.apply(Math, o), i = s < 4 ? __dependency_9.EBTM.CREATE_GROUP_SYMBOL : __dependency_9.EBTM.BTM_SYMBOL_GIANT_TRANSFORM_HUGE, __dependency_1.tween(this.node).bindNodeState(false).call(function () {
              dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                data: {
                  url: i
                }
              });
            }).start(), t.next = 9, Promise.all(r);
          case 9:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showGroupSignIn = function () {
    var t = this;
    return new Promise(__dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e(n) {
      var r, o, i, c, l, u, p;
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = t.data.getData(), o = r.newGroupSymbols, i = o.map(function (t) {
              return t.size;
            }), c = Math.max.apply(Math, i), l = c < 4 ? "sign_reel_bk01" : "sign_reel_bk02", u = c < 4 ? "sign_reel_01" : "sign_reel_02", p = c < 4 ? __dependency_9.EBTM.BTM_CHAR_SKILL_05 : __dependency_9.EBTM.BTM_CHAR_SKILL_06, dispatch(__dependency_12.GameEvent.SHOW_SIGN_LIGHTING), c < 4 ? dispatch(__dependency_12.GameEvent.SHAKE_GAME_LAYER, {
              data: {
                range: .2,
                duration: .04,
                repeatCount: 12
              }
            }) : dispatch(__dependency_12.GameEvent.SHAKE_GAME_LAYER, {
              data: {
                range: .4,
                duration: .05,
                repeatCount: 11
              }
            }), e.next = 10, __dependency_16.CmmSlotUtils.delayTime(.2);
          case 10:
            if (!(c < 4)) {
              e.next = 16;
              break;
            }
            return dispatch(__dependency_12.GameEvent.PLAY_BTM, {
              data: {
                url: p
              }
            }), e.next = 14, __dependency_16.CmmSlotUtils.delayTime(.6);
          case 14:
            e.next = 21;
            break;
          case 16:
            return dispatch(__dependency_12.GameEvent.PLAY_BTM, {
              data: {
                url: p
              }
            }), e.next = 19, __dependency_16.CmmSlotUtils.delayTime(.3);
          case 19:
            return e.next = 21, __dependency_16.CmmSlotUtils.delayTime(.3);
          case 21:
            return __dependency_1.tween(t.symbolMerge).bindNodeState(false).delay(.3).call(function () {
              t.symbolMerge.timeScale = 1;
            }).start(), t.symbolMerge.node.active = !0, t.symbolMerge.clearTracks(), t.symbolMerge.timeScale = .6, t.symbolMerge.setToSetupPose(), t.symbolMerge.setAnimation(0, l, !1), t.symbolMerge.setCompleteListener(__dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
              return __dependency_0.regeneratorRuntime().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    t.symbolMerge.setCompleteListener(null), t.symbolMerge.timeScale = 1, t.symbolMerge.clearTracks(), t.symbolMerge.setToSetupPose(), t.symbolMerge.setAnimation(0, u, !1), t.symbolMerge.setCompleteListener(__dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
                      return __dependency_0.regeneratorRuntime().wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            t.symbolMerge.setCompleteListener(null);
                          case 1:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    })));
                  case 6:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))), __dependency_1.tween(t.symbolMerge.node).bindNodeState(false).delay(2).call(function () {
              c < 4 ? dispatch(__dependency_12.GameEvent.SHAKE_GAME_LAYER, {
                data: {
                  range: .3,
                  duration: .05,
                  repeatCount: 5
                }
              }) : dispatch(__dependency_12.GameEvent.SHAKE_GAME_LAYER, {
                data: {
                  range: .6,
                  duration: .05,
                  repeatCount: 5
                }
              });
            }).start(), e.next = 31, __dependency_16.CmmSlotUtils.delayTime(1.8);
          case 31:
            n(!0);
          case 32:
          case "end":
            return e.stop();
        }
      }, e);
    })));
  }, l.removeSmallSymbols = function (t) {
    var e = this;
    void 0 === t && (t = 0);
    var n = this.data.getData().newGroupSymbols,
      r = [];
    n.forEach(function (t) {
      t.symbolPos.forEach(function (t) {
        var n = e.symbolsMap.get(t);
        n && !n.script.isGroupSymbol && (r.push(n), e.symbolsMap.set(t, null));
      });
    }), this.scheduleOnce(function () {
      r.forEach(function (t) {
        t.script.recycleSymbol();
      });
    }, t);
  }, l.playSymbolsWin = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r,
        o,
        s,
        i,
        c,
        l = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return e = this.data.getData(), n = e.newGroupSymbols, r = this.data.getData().parser.currentGameState.winSymbols, o = [__dependency_11.EBackendSymbolID.HADES, __dependency_11.EBackendSymbolID.PERSE, __dependency_11.EBackendSymbolID.DOG, __dependency_11.EBackendSymbolID.GHOST], s = [], i = [], c = !1, this.symbolsMap.forEach(function (t) {
              null == t || t.script.setSymbolColor(l.symbolDarkColor);
            }), n.forEach(function (t) {
              var e = t.size,
                n = t.symbolId;
              5 == e && o.includes(n) && (c = !0);
            }), r.forEach(function (t) {
              t.symbolPos.forEach(function (t) {
                var e = l.symbolsMap.get(t);
                if (e && !i.includes(t)) {
                  var n = e.node,
                    r = e.script;
                  n.setParent(l.winContainer), r.setSymbolColor(__dependency_1.Color.WHITE), s.push(r.playWinAnim(c)), c || s.push(r.playFrameWinAnim()), i.push(t);
                }
              });
            }), r.forEach(function (t) {
              var e = t.symbolId;
              e == __dependency_11.EBackendSymbolID.HADES ? dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                data: {
                  url: c ? __dependency_9.EBTM.SYMBOL_02_5X5_WIN : __dependency_9.EBTM.SYMBOL_02_WIN
                }
              }) : e == __dependency_11.EBackendSymbolID.PERSE ? dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                data: {
                  url: c ? __dependency_9.EBTM.SYMBOL_03_5X5_WIN : __dependency_9.EBTM.SYMBOL_03_WIN
                }
              }) : e == __dependency_11.EBackendSymbolID.DOG ? dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                data: {
                  url: c ? __dependency_9.EBTM.SYMBOL_04_5X5_WIN : __dependency_9.EBTM.SYMBOL_04_WIN
                }
              }) : e == __dependency_11.EBackendSymbolID.GHOST ? dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                data: {
                  url: c ? __dependency_9.EBTM.SYMBOL_05_5X5_WIN : __dependency_9.EBTM.SYMBOL_05_WIN
                }
              }) : dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                data: {
                  url: __dependency_9.EBTM.SYMBOL_06_WIN
                }
              });
            }), t.next = 12, Promise.all(s);
          case 12:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.playScattersWin = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r,
        o,
        s = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return e = this.data.checkIsMG(), n = this.data.getAllScattersPos(), r = [], o = e ? __dependency_9.EBTM.SCATTER_WIN : __dependency_9.EBTM.FG_EXTRA_TIMES, dispatch(__dependency_12.GameEvent.PLAY_BTM, {
              data: {
                url: o
              }
            }), this.symbolsMap.forEach(function (t) {
              null == t || t.script.setSymbolColor(s.symbolDarkColor);
            }), __dependency_1.tween(this.signScatter.node).bindNodeState(false).call(function () {
              s.signScatter.node.active = !0, s.signScatter.clearTracks(), s.signScatter.setToSetupPose(), s.signScatter.setAnimation(0, "sign_scatter", !1), s.signScatter.setCompleteListener(function () {
                s.signScatter.setCompleteListener(null), s.signScatter.node.active = !1;
              });
            }).delay(.25).call(function () {
              dispatch(__dependency_12.GameEvent.SHAKE_GAME_LAYER);
            }).start(), n.forEach(function (t) {
              var e = s.symbolsMap.get(t);
              if (e) {
                var n = e.node,
                  o = e.script;
                n.setParent(s.winContainer), o.setSymbolColor(__dependency_1.Color.WHITE), r.push(o.playWinToExpectAnim());
              }
            }), t.next = 10, Promise.all(r);
          case 10:
            this.symbolsMap.forEach(function (t) {
              null == t || t.script.setSymbolColor(__dependency_1.Color.WHITE);
            });
          case 11:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.playJackpotsWin = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return e = this.data.getAllJackpotsPos(), n = [], dispatch(__dependency_12.GameEvent.PLAY_BTM, {
              data: {
                url: __dependency_9.EBTM.JP_WIN
              }
            }), this.symbolsMap.forEach(function (t) {
              null == t || t.script.setSymbolColor(r.symbolDarkColor);
            }), e.forEach(function (t) {
              var e = r.symbolsMap.get(t);
              if (e) {
                var o = e.node,
                  s = e.script;
                o.setParent(r.winContainer), s.setSymbolColor(__dependency_1.Color.WHITE), n.push(s.playWinToIdleAnim());
              }
            }), t.next = 7, Promise.all(n);
          case 7:
            this.symbolsMap.forEach(function (t) {
              null == t || t.script.setSymbolColor(__dependency_1.Color.WHITE);
            });
          case 8:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.removeWinSymbols = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return this.data.getData().newGroupSymbols, e = this.data.getData().parser.currentGameState.winSymbols, n = [], e.forEach(function (t) {
              t.symbolPos.forEach(function (t) {
                var e = r.symbolsMap.get(t);
                e && n.push(e.script.playOutAnim()), r.symbolsMap.delete(t);
              });
            }), dispatch(__dependency_12.GameEvent.PLAY_BTM, {
              data: {
                url: __dependency_9.EBTM.SYMBOL_REMOVE
              }
            }), t.next = 7, Promise.all(n);
          case 7:
            this.symbolsMap.forEach(function (t) {
              null == t || t.script.setSymbolColor(__dependency_1.Color.WHITE);
            });
          case 8:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.createRandomWild = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e, n, r, o, s, i, c;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (e = this.data.getData().parser.currentGameState, n = e.randomWildPos, r = e.winSymbols, o = [], r.forEach(function (t) {
              var e = t.symbolPos;
              o.push.apply(o, e);
            }), o.includes(n)) {
              t.next = 8;
              break;
            }
            throw s = {
              text: "隨機wild生成在" + n + "，不在空缺的位置中",
              confirmCb: function (t) {
                __dependency_7.ExitUtils.exit();
              }
            }, App.gameAlert.show(s), console.error("隨機wild生成在錯誤的地方啦!!!", n), new Error("隨機wild生成在" + n + "，不在空缺的位置中");
          case 8:
            return i = this.createSymbol(__dependency_11.EBackendSymbolID.WILD, n, !1), (c = i.getComponent(__dependency_13.GameSymbol)).setSymbolScale(1), c.frameScale = .2, i.setParent(this.winContainer), dispatch(__dependency_12.GameEvent.PLAY_BTM, {
              data: {
                url: __dependency_9.EBTM.CREATE_WILD
              }
            }), t.next = 16, c.playWildInAnim();
          case 16:
            i.setParent(this.symbolContainer);
          case 17:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showCurrentViewFall = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e, n, r, o, s, i, c, l, u, p, h, m, f, d, y, S, b, T, g, _, M, E, w;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (e = __dependency_9.default.getData().reelConfig.symbolDelay, n = this.data.getData().parser.currentGameState, r = n.posTransform, o = n.groupPosTransform, 0 !== r.length || 0 !== o.length) {
              t.next = 4;
              break;
            }
            return t.abrupt("return");
          case 4:
            for (s = [], i = r.slice(), c = new Map(), l = [], dispatch(__dependency_12.GameEvent.PLAY_BTM, {
              data: {
                url: __dependency_9.EBTM.CURRENT_SYMBOLS_FALL
              }
            }), u = 0; u < o.length; u++) {
              for (p = o[u], h = p.beforePos, m = p.afterPos, h.sort(function (t, e) {
                return e - t;
              }), m.sort(function (t, e) {
                return e - t;
              }), f = 0; f < h.length; f++) i.push({
                beforePos: h[f],
                afterPos: m[f]
              }), l.push(h[f]);
              c.set(h[0], m);
            }
            for (i.sort(function (t, e) {
              return e.beforePos - t.beforePos;
            }), d = 0; d < i.length; d++) y = i[d], S = y.beforePos, b = y.afterPos, T = l.includes(S), g = e * d, T ? (_ = this.symbolsMap.get(S), M = c.get(S), this.symbolsMap.delete(S), this.symbolsMap.set(b, _), M && (E = this.symbolsMap.get(b).node, s.push(this.groupMoveTo(E, M, g)))) : (this.updateSymbolMapIndex(S, b), w = this.symbolsMap.get(b).node, s.push(this.currentMoveTo(w, b, g)));
            return t.next = 14, Promise.all(s);
          case 14:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.updateSymbolMapIndex = function (t, e) {
    var n = this.symbolsMap.get(t);
    this.symbolsMap.set(e, n), this.symbolsMap.delete(t);
  }, l.moveTo = function (t, e, n) {
    var r = this,
      o = __dependency_9.default.getData().reelConfig,
      s = o.fallTime,
      a = o.backTime,
      i = o.overPosOffset,
      c = this.data.getData().symbolPosConfig.get(e),
      l = c.x,
      u = c.y,
      p = c.z,
      h = t.node,
      m = Array.from(this.symbolsMap).reduce(function (t, e) {
        var n;
        return (null == (n = e[1]) ? void 0 : n.symbolId) == __dependency_11.EBackendSymbolID.SCATTER && t.push(e[0]), t;
      }, []).length - 1;
    return new Promise(function (e) {
      __dependency_1.tween(h).bindNodeState(false).delay(n).to(1.5 * s, {
        position: new __dependency_1.Vec3(l, u, p)
      }, {
        onComplete: function () {
          t.id == __dependency_11.EBackendSymbolID.SCATTER ? (dispatch(__dependency_12.GameEvent.PLAY_BTM, {
            data: {
              url: r.scatterHitBtm[m]
            }
          }), h.setParent(r.winContainer)) : t.id == __dependency_11.EBackendSymbolID.JACKPOT && dispatch(__dependency_12.GameEvent.PLAY_REPEAT_BTM, {
            data: {
              url: __dependency_9.EBTM.JP_HIT
            }
          });
        }
      }).to(a, {
        position: new __dependency_1.Vec3(l, u + i, p)
      }).to(a, {
        position: new __dependency_1.Vec3(l, u, p)
      }).to(a, {
        position: new __dependency_1.Vec3(l, u + .5 * i, p)
      }).to(a, {
        position: new __dependency_1.Vec3(l, u, p)
      }).call(e).start();
    });
  }, l.currentMoveTo = function (t, e, n) {
    var r = __dependency_9.default.getData().reelConfig,
      o = r.currentFallTime,
      s = r.backTime,
      a = r.overPosOffset,
      i = this.data.getData().symbolPosConfig.get(e),
      c = i.x,
      l = i.y,
      u = i.z;
    return new Promise(function (e) {
      __dependency_1.tween(t).bindNodeState(false).delay(n).to(.7 * o, {
        position: new __dependency_1.Vec3(c, l, u)
      }).to(s, {
        position: new __dependency_1.Vec3(c, l + a, u)
      }).to(s, {
        position: new __dependency_1.Vec3(c, l, u)
      }).to(s, {
        position: new __dependency_1.Vec3(c, l + .5 * a, u)
      }).to(s, {
        position: new __dependency_1.Vec3(c, l, u)
      }).call(e).start();
    });
  }, l.groupMoveTo = function (t, e, n) {
    var r = __dependency_9.default.getData().reelConfig,
      o = r.currentFallTime,
      s = r.backTime,
      a = r.overPosOffset,
      i = this.getBigSymbolPos(e),
      c = i.x,
      l = i.y,
      u = i.z;
    return new Promise(function (e) {
      __dependency_1.tween(t).bindNodeState(false).delay(n).to(.7 * o, {
        position: new __dependency_1.Vec3(c, l, u)
      }).to(s, {
        position: new __dependency_1.Vec3(c, l + a, u)
      }).to(s, {
        position: new __dependency_1.Vec3(c, l, u)
      }).to(s, {
        position: new __dependency_1.Vec3(c, l + .5 * a, u)
      }).to(s, {
        position: new __dependency_1.Vec3(c, l, u)
      }).call(e).start();
    });
  }, l.expectMoveTo = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(e) {
      var n,
        r,
        o,
        s,
        i,
        c,
        l,
        u,
        p,
        h,
        m,
        f,
        d,
        y,
        T,
        g,
        _,
        M,
        E,
        w,
        v = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return n = e.posId, r = e.delay, o = e.openExpect, s = e.highlightCols, i = e.emptyKeys, c = __dependency_9.default.getData().reelConfig, l = c.fallTime, u = c.backTime, p = c.overPosOffset, h = this.data.getData(), m = h.symbolPosConfig, f = m.get(n), d = f.x, y = f.y, T = f.z, g = this.symbolsMap.get(n).script, _ = Array.from(this.symbolsMap).reduce(function (t, e) {
              var n;
              return (null == (n = e[1]) ? void 0 : n.symbolId) == __dependency_11.EBackendSymbolID.SCATTER && t.push(e[0]), t;
            }, []), M = _.length - 1, E = 0, s.length > 0 && (E = .5, w = this.data.getPosToRowCol(n).col, __dependency_1.tween(this.node).bindNodeState(false).delay(r).call(function () {
              s.includes(w) && v.playExpectAnimOnce(w);
            }).start()), t.abrupt("return", new Promise(function (t) {
              __dependency_1.tween(g.node).bindNodeState(false).delay(r + E).to(l, {
                position: new __dependency_1.Vec3(d, y, T)
              }, {
                onComplete: function () {
                  g.id == __dependency_11.EBackendSymbolID.SCATTER ? (dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                    data: {
                      url: v.scatterHitBtm[M]
                    }
                  }), g.node.setParent(v.winContainer)) : g.id == __dependency_11.EBackendSymbolID.JACKPOT && dispatch(__dependency_12.GameEvent.PLAY_REPEAT_BTM, {
                    data: {
                      url: __dependency_9.EBTM.JP_HIT
                    }
                  }), dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                    data: {
                      url: __dependency_9.EBTM.SYMBOL_EXPECT_IN
                    }
                  });
                }
              }).to(u, {
                position: new __dependency_1.Vec3(d, y + p, T)
              }).to(u, {
                position: new __dependency_1.Vec3(d, y, T)
              }).to(u, {
                position: new __dependency_1.Vec3(d, y + .5 * p, T)
              }).to(u, {
                position: new __dependency_1.Vec3(d, y, T)
              }).call(function () {
                o && s.length && !v.isRechargeExpecting && v.setSymbolExpectDisplay(!0, s, i), t();
              }).start();
            }));
          case 10:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }(), l.showSymbolsRecharge = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e, n;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (e = this.data.getAllScattersCols(), n = e.length >= 2, __dependency_1.tween(this.node).bindNodeState(false).call(function () {
              dispatch(__dependency_12.GameEvent.PLAY_BTM, {
                data: {
                  url: __dependency_9.EBTM.SYMBOLS_RECHARGE
                }
              });
            }).start(), !n) {
              t.next = 8;
              break;
            }
            return t.next = 6, this.showExpectSymbolsRecharge();
          case 6:
            t.next = 10;
            break;
          case 8:
            return t.next = 10, this.showNormalSymbolsRecharge();
          case 10:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showNormalSymbolsRecharge = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r,
        o,
        s,
        i,
        c = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return e = __dependency_9.default.getData().reelConfig.symbolDelay, n = this.data.getData().parser.currentGameState, r = __dependency_8.default.flattenArray(n.view), o = Array.from({
              length: r.length
            }, function (t, e) {
              return e;
            }), s = o.filter(function (t) {
              return !c.symbolsMap.has(t);
            }), i = s.map(function (t) {
              var n = r[t],
                o = c.SYMBOL_RECHARGE_ORDERS.indexOf(t) * e * 1.3;
              c.createSymbol(n, t, !0);
              var s = c.symbolsMap.get(t).script;
              return c.moveTo(s, t, o);
            }), this.setSymbolsSiblingIndex(!0), t.next = 9, Promise.all(i);
          case 9:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.showExpectSymbolsRecharge = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        r,
        o,
        c,
        l,
        u,
        p,
        h,
        m,
        f,
        d,
        y,
        S,
        b,
        T,
        g,
        _,
        M,
        E,
        w,
        v,
        O,
        C,
        P,
        L,
        k,
        I = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e = __dependency_9.default.getData().reelConfig.symbolDelay, n = this.data.getData().parser.currentGameState, r = __dependency_8.default.flattenArray(n.view), o = Array.from({
              length: r.length
            }, function (t, e) {
              return e;
            }), c = o.filter(function (t) {
              return !I.symbolsMap.has(t);
            }), l = Array.from({
              length: this.SYMBOL_COL
            }, function (t, e) {
              return e;
            }), u = Array.from(this.symbolsMap).reduce(function (t, e) {
              var n;
              return (null == (n = e[1]) ? void 0 : n.symbolId) == __dependency_11.EBackendSymbolID.SCATTER && t.push(I.data.getPosToRowCol(e[0]).col), t;
            }, []).sort(function (t, e) {
              return t - e;
            }), p = this.data.getAllScattersCols(), h = p.filter(function (t) {
              return !u.includes(t);
            }), m = !0, f = null, d = [], y = c.slice().sort(function (t, e) {
              return e - t;
            }), S = __dependency_0.createForOfIteratorHelperLoose(y);
          case 14:
            if ((b = S()).done) {
              t.next = 24;
              break;
            }
            if (T = b.value, g = this.data.getPosToRowCol(T).col, _ = 0 === u.length && g <= h[1], !(1 === u.length && g <= h[0]) && !_) {
              t.next = 21;
              break;
            }
            return t.abrupt("continue", 22);
          case 21:
            d.push(g);
          case 22:
            t.next = 14;
            break;
          case 24:
            for (M = 0; M < c.length; M++) E = this.data.getPosToRowCol(c[M]).col, w = l.includes(c[M]), v = 0 === u.length && E <= h[1], O = 1 === u.length && E <= h[0], C = E == h[1] || E == h[0], (v || O) && w && C && (f = E);
            return P = [1, 2, 3, 4, 5], L = new Map(), k = c.map(__dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
              var o, s, i, l, p, y, S, b;
              return __dependency_0.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return o = r[n], s = I.data.getPosToRowCol(n).col, i = 0 === u.length && s <= h[1], l = 1 === u.length && s <= h[0], p = i || l, y = f == s, S = I.SYMBOL_RECHARGE_ORDERS.indexOf(n) * e, p || (L.has(s) || L.set(s, P.shift()), S += L.get(s)), y && m && (m = !1), I.createSymbol(o, n, !0), b = {
                      posId: n,
                      delay: S,
                      openExpect: y,
                      highlightCols: d,
                      emptyKeys: c
                    }, t.abrupt("return", I.expectMoveTo(b));
                  case 12:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))), m && d.length && this.setSymbolExpectDisplay(!0, d, c), this.setSymbolsSiblingIndex(!0), t.next = 32, Promise.all(k);
          case 32:
            this.setSymbolExpectDisplay(!1, d, c);
          case 33:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.setSymbolExpectDisplay = function (t, e, n) {
    var r = this;
    t ? (this.symbolsMap.forEach(function (t, o) {
      var s = r.data.getPosToRowCol(o).col;
      (null == t ? void 0 : t.symbolId) == __dependency_11.EBackendSymbolID.SCATTER ? (t.script.playScatterExpectAnim(), t.node.setParent(r.winContainer)) : e.includes(s) && n.includes(o) || null == t || t.script.setSymbolColorByTween(r.symbolDarkColor, .2);
    }), dispatch(__dependency_12.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_9.EBTM.RECHARGE_EXPECT_HEARTBEAT,
        loop: !0
      }
    })) : (this.symbolsMap.forEach(function (t) {
      (null == t ? void 0 : t.symbolId) == __dependency_11.EBackendSymbolID.SCATTER ? t.script.playIdleAnim() : null == t || t.script.setSymbolColor(__dependency_1.Color.WHITE);
    }), dispatch(__dependency_12.GameEvent.STOP_BTM, {
      data: __dependency_9.EBTM.RECHARGE_EXPECT_HEARTBEAT
    }), dispatch(__dependency_12.GameEvent.STOP_BTM, {
      data: __dependency_9.EBTM.RECHARGE_EXPECT_FIRE
    })), this.isRechargeExpecting = t;
  }, l.playExpectAnim = function (t) {
    var e = this.expectContainer.children[t];
    if (e) {
      var n = e.getComponent(__dependency_1.sp.Skeleton);
      e.active = !0, n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "in", !1), n.setCompleteListener(function () {
        n.setAnimation(0, "loop", !0), n.setCompleteListener(null);
      }), dispatch(__dependency_12.GameEvent.PLAY_REPEAT_BTM, {
        data: {
          url: __dependency_9.EBTM.NORMAL_EXPECT
        }
      });
    }
  }, l.playExpectAnimOnce = function (t) {
    var e = this.expectContainer.children[t];
    if (e) {
      var n = e.getComponent(__dependency_1.sp.Skeleton);
      e.active = !0, n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "in", !1), n.setCompleteListener(function () {
        n.clearTracks(), n.setToSetupPose(), n.setCompleteListener(null);
      }), dispatch(__dependency_12.GameEvent.PLAY_REPEAT_BTM, {
        data: {
          url: __dependency_9.EBTM.NORMAL_EXPECT
        }
      });
    }
  }, l.hideExpectNodes = function () {
    this.expectContainer.children.forEach(function (t) {
      var e = t.getComponent(__dependency_1.sp.Skeleton);
      e.setAnimation(0, "out", !1), e.setCompleteListener(function () {
        t.active = !1;
      });
    });
  }, l.getBigSymbolPos = function (t) {
    var e = this.data.getData().symbolPosConfig,
      n = new __dependency_1.Vec3(e.get(Math.min.apply(Math, t))),
      r = new __dependency_1.Vec3(e.get(Math.max.apply(Math, t)));
    return n.add(r).multiplyScalar(.5);
  }, l.symbolsBezierByTime = function (t) {
    return __dependency_1.bezierByTime([.33, 1.3, .68, .94], t);
  }, l.clearSymbols = function () {
    for (var t = 0; t < this.TOTAL_SYMBOL; t++) {
      var e,
        n = null == (e = this.symbolsMap.get(t)) ? void 0 : e.script;
      n && n.recycleSymbol(), t == this.TOTAL_SYMBOL - 1 && this.symbolsMap.clear();
    }
  }, l.setOutSymbolsMap = function () {
    this.outSymbolsMap.clear(), this.outSymbolsMap = new Map(this.symbolsMap);
  }, l.moveSymbolToSymbolContainer = function () {
    for (var t, e = this.winContainer.children.slice(), n = __dependency_0.createForOfIteratorHelperLoose(e); !(t = n()).done;) {
      t.value.setParent(this.symbolContainer);
    }
  }, l.handleSymbolsOut = function () {
    this.setOutSymbolsMap(), this.showSymbolsOut();
  }, l.handleSymbolsIn = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return this.createSymbols(), t.next = 3, this.showSymbolsIn();
          case 3:
            this.isSymbolsInStopped || dispatch(__dependency_12.GameEvent.SYMBOLS_IN_END);
          case 4:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.handleCreateGroupSymbols = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.next = 2, this.showGroupSignIn();
          case 2:
            return t.next = 4, this.showSymbolTransHint();
          case 4:
            return this.removeSmallSymbols(.35), t.next = 7, this.createGroupSymbols(!0);
          case 7:
            dispatch(__dependency_12.GameEvent.CREATE_GROUP_SYMBOLS_END);
          case 8:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.handleCreateFullGroupSymbol = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return this.removeSmallSymbols(), t.next = 3, this.createGroupSymbols(!1);
          case 3:
            this.setSymbolsSiblingIndex(), this.scheduleOnce(function () {
              dispatch(__dependency_12.GameEvent.CREATE_GROUP_SYMBOLS_END), App.globalAudio.resumeMusic();
            }, .25);
          case 5:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.handleShowScatterWin = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.next = 2, this.playScattersWin();
          case 2:
            dispatch(__dependency_12.GameEvent.SHOW_SCATTER_WIN_END);
          case 3:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.handleShowJackpotWin = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.next = 2, this.playJackpotsWin();
          case 2:
            dispatch(__dependency_12.GameEvent.SHOW_JACKPOT_WIN_END);
          case 3:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.handleRemoveWinSymbols = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return e = this.data.getData().parser.currentGameState.totalWinnings, __dependency_1.tween(this.node).bindNodeState(false).delay(.3).call(function () {
              dispatch(__dependency_5.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
                data: e
              });
            }).start(), t.next = 4, this.removeWinSymbols();
          case 4:
            dispatch(__dependency_12.GameEvent.REMOVE_WIN_SYMBOLS_END);
          case 5:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.handleCreateRandomWild = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.next = 2, this.sleep(.8);
          case 2:
            return t.next = 4, this.createRandomWild();
          case 4:
            this.setSymbolsSiblingIndex(), dispatch(__dependency_12.GameEvent.CREATE_RANDOM_WILD_END);
          case 6:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.handleCurrentSymbolsFall = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.next = 2, this.showCurrentViewFall();
          case 2:
            dispatch(__dependency_12.GameEvent.CURRENT_SYMBOLS_FALL_END);
          case 3:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.handleSymbolsRecharge = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.next = 2, this.showSymbolsRecharge();
          case 2:
            dispatch(__dependency_12.GameEvent.SYMBOLS_RECHARGE_END);
          case 3:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.handleQuickStop = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (__dependency_9.default.canQuickStop && 0 !== this.symbolsMap.size && !this.isGambleExpecting) {
              t.next = 2;
              break;
            }
            return t.abrupt("return");
          case 2:
            if (this.stopSymbolsOut(), !__dependency_9.default.symbolsOutResolved) {
              t.next = 12;
              break;
            }
            return __dependency_9.default.symbolsOutResolved = !1, this.needInitHeight = !1, this.stopSymbolsIn(), t.next = 9, this.showSymbolsQuickIn();
          case 9:
            dispatch(__dependency_12.GameEvent.SYMBOLS_IN_END), t.next = 15;
            break;
          case 12:
            __dependency_9.default.symbolsOutResolved = !0, this.needInitHeight = !0, this.isClickQuickIn = !0;
          case 15:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.sleep = function (t) {
    var e = this;
    return new Promise(function (n) {
      e.scheduleOnce(function () {
        n();
      }, t);
    });
  }, l.reset = function () {}, l.setData = function (t) {}, l.show = function () {
    this.node.active = !0;
  }, l.hide = function () {
    this.node.active = !1;
  }, l.addEvents = function () {
    var t = this;
    this.on(__dependency_12.GameEvent.PARSER_INIT_COMPLETED, function () {
      t.init();
    }), this.on(__dependency_12.GameEvent.PARSER_REPLAY_COMPLETED, function () {
      t.init();
    }), this.on(__dependency_12.GameEvent.INIT_SYMBOLS, function () {
      t.init();
    }), this.on(__dependency_5.SlotFrameworkEvent.KILL_SYMBOLS, function () {
      t.clearSymbols();
    }), this.on(__dependency_12.GameEvent.SYMBOLS_OUT, function () {
      t.handleSymbolsOut();
    }), this.on(__dependency_12.GameEvent.SYMBOLS_IN, function () {
      t.handleSymbolsIn();
    }), this.on(__dependency_12.GameEvent.CREATE_GROUP_SYMBOLS, function () {
      t.handleCreateGroupSymbols();
    }), this.on(__dependency_12.GameEvent.CREATE_GROUP_SYMBOLS_WITHOUT_HINT, function () {
      t.handleCreateFullGroupSymbol();
    }), this.on(__dependency_12.GameEvent.SHOW_SYMBOLS_WIN, function () {
      t.playSymbolsWin();
    }), this.on(__dependency_12.GameEvent.SHOW_SCATTER_WIN, function () {
      t.handleShowScatterWin();
    }), this.on(__dependency_12.GameEvent.SHOW_JACKPOT_WIN, function () {
      t.handleShowJackpotWin();
    }), this.on(__dependency_12.GameEvent.REMOVE_WIN_SYMBOLS, function () {
      t.handleRemoveWinSymbols();
    }), this.on(__dependency_12.GameEvent.CREATE_RANDOM_WILD, function () {
      t.handleCreateRandomWild();
    }), this.on(__dependency_12.GameEvent.CURRENT_SYMBOLS_FALL, function () {
      t.handleCurrentSymbolsFall();
    }), this.on(__dependency_12.GameEvent.SYMBOLS_RECHARGE, function () {
      t.handleSymbolsRecharge();
    }), this.on(__dependency_12.GameEvent.START_QUICK_STOP, function () {
      t.handleQuickStop();
    });
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_10.default);
    }
  }]), e;
}(__dependency_3.default)).prototype, "symbolContainer", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = __dependency_0.applyDecoratedDescriptor(J.prototype, "winContainer", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = __dependency_0.applyDecoratedDescriptor(J.prototype, "expectContainer", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = __dependency_0.applyDecoratedDescriptor(J.prototype, "signScatter", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = __dependency_0.applyDecoratedDescriptor(J.prototype, "symbolMerge", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = __dependency_0.applyDecoratedDescriptor(J.prototype, "gameSymbol", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = J)) || F));
__dependency_1.cclegacy._RF.pop();
