// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency7 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency8 from "./g1002-GameConfigModel";
import * as _dependency9 from "./g1002-GameData";
import * as _dependency0 from "./g1002-GameEvent";
import * as _dependency1 from "./g1002-types";
import * as _dependency10 from "./g1002-lineItem";
import * as _dependency11 from "../../shared/scripts/main-CmmUtils";
var _export;
export { _export as WinLineView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WinLineView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, a, r, o, s, c, l, u, p, _, h, f, d, L, m, W, N, T, w, S, I, g, C, E, v, b, A;
var k, y, O, P, B, D, R, G, H, x, M, F;
_dependency2.cclegacy._RF.push({}, "73657sVTn9NP7ZCXO2VCO+2", "WinLineView", void 0);
var U = _dependency2._decorator.ccclass,
  V = (_dependency2._decorator.property, _dependency2._decorator.disallowMultiple);
_publish("WinLineView", (k = U("WinLineView"), y = V(), O = _dependency4.inject("bbr", _dependency2.Node), P = _dependency4.inject("content", _dependency2.Node), B = _dependency4.inject("content/tempSymbolAnimContent", _dependency2.Node), D = _dependency4.inject("content/winLineContent", _dependency2.Node), k(R = y((H = _dependency.applyDecoratedDescriptor((G = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bbr", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "content", x, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "tempSymbolAnimContent", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "winLineContent", F, _dependency.assertThisInitialized(e)), e._isSkipWinLine = !1, e._isClickSkipWinLine = !1, e._winCashNode = null, e._totalWinCashNode = null, e.skipTotalWinCashTween = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var l = e.prototype;
  return l.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, l.start = function () {
    this.init();
  }, l.onDestroy = function () {
    this.removeEvents();
  }, e.getPrefabUrl = function () {
    return "prefabs/WinLineView";
  }, l.init = function () {
    this.createLinePool();
  }, l.callback = function () {
    Log.e("callback:::::::"), this.processWinSymbols([{
      symbol: 3,
      positions: [[1, 2]],
      winLine: 1,
      winnings: 3
    }, {
      symbol: 4,
      positions: [[1, 2]],
      winLine: 3,
      winnings: 3
    }, {
      symbol: 6,
      positions: [[1, 2]],
      winLine: 4,
      winnings: 3
    }, {
      symbol: 7,
      positions: [[1, 2]],
      winLine: 5,
      winnings: 3
    }]);
  }, l.createLinePool = function () {
    for (var t = _dependency8.default.getData().filePaths.lineItemPrefab, e = App.cache.get(this.data.module, t).data, n = App.pool.getPool("LINE_POOL"), i = 0; i < 10; i++) {
      var a = _dependency2.instantiate(e);
      n.cloneNode = a, n.put(a);
    }
  }, l.processWinSymbols = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
      var n,
        i,
        a,
        r,
        s,
        l,
        u,
        p,
        _,
        h,
        f,
        d,
        L,
        m,
        W,
        N,
        T,
        w,
        S,
        I,
        g,
        C,
        b,
        A,
        k,
        y,
        O = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            n = [], i = [], a = _dependency.createForOfIteratorHelperLoose(e);
          case 3:
            if ((r = a()).done) {
              t.next = 13;
              break;
            }
            if (s = r.value, 1 !== (l = s.symbol)) {
              t.next = 10;
              break;
            }
            return t.abrupt("return");
          case 10:
            l >= 2 && l <= 4 ? n.push(s) : i.push(s);
          case 11:
            t.next = 3;
            break;
          case 13:
            n.length > 0 && i.length > 0 && n[0].winLine < i[0].winLine ? n[0] : i[0], n.reduce(function (t, e) {
              return t + e.winnings;
            }, 0), i.reduce(function (t, e) {
              return t + e.winnings;
            }, 0), u = this.data.currentGameType === _dependency1.EGameType.MAIN_GAME, !(p = this.data.isFullBoard(this.data.getData().parser.currentGameState.resultView)) && this.activeBBR(!0), _ = [], h = _dependency.regeneratorRuntime().mark(function t(e) {
              return _dependency.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    p ? _.push(function () {
                      return O.playAllWinLines([n[e]], e);
                    }) : _.push(function () {
                      return O.playWinLines([n[e]]);
                    });
                  case 1:
                  case "end":
                    return t.stop();
                }
              }, t);
            }), f = 0;
          case 22:
            if (!(f < n.length)) {
              t.next = 27;
              break;
            }
            return t.delegateYield(h(f), "t0", 24);
          case 24:
            f++, t.next = 22;
            break;
          case 27:
            d = _dependency.createForOfIteratorHelperLoose(_.entries());
          case 28:
            if ((L = d()).done) {
              t.next = 39;
              break;
            }
            if (m = L.value, W = m[0], N = m[1], !this._isSkipWinLine) {
              t.next = 32;
              break;
            }
            return t.abrupt("break", 39);
          case 32:
            return T = 0 === W, u && T && dispatch(_dependency0.GameEvent.PLAY_SON_CHARACTER_WIN_ANIM), t.next = 36, N();
          case 36:
            dispatch(_dependency0.GameEvent.SET_SYMBOL_TO_ORIGIN_PARENT);
          case 37:
            t.next = 28;
            break;
          case 39:
            w = [], S = _dependency.regeneratorRuntime().mark(function t(e) {
              return _dependency.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    p ? w.push(function () {
                      return O.playAllWinLines([i[e]], e);
                    }) : w.push(function () {
                      return O.playWinLines([i[e]]);
                    });
                  case 1:
                  case "end":
                    return t.stop();
                }
              }, t);
            }), I = 0;
          case 42:
            if (!(I < i.length)) {
              t.next = 47;
              break;
            }
            return t.delegateYield(S(I), "t1", 44);
          case 44:
            I++, t.next = 42;
            break;
          case 47:
            g = _dependency.createForOfIteratorHelperLoose(w.entries());
          case 48:
            if ((C = g()).done) {
              t.next = 59;
              break;
            }
            if (b = C.value, A = b[0], k = b[1], !this._isSkipWinLine) {
              t.next = 52;
              break;
            }
            return t.abrupt("break", 59);
          case 52:
            return y = 0 === A, u && y && dispatch(_dependency0.GameEvent.PLAY_TWO_CHARACTER_WIN_ANIM), t.next = 56, k();
          case 56:
            dispatch(_dependency0.GameEvent.SET_SYMBOL_TO_ORIGIN_PARENT);
          case 57:
            t.next = 48;
            break;
          case 59:
            this.activeBBR(!1);
          case 60:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }(), l.skipWinLine = function () {
    this._isSkipWinLine = !0, this._isClickSkipWinLine = !0, this.clearWinLine();
  }, l.clearWinLine = function () {
    if (this._winCashNode && this._winCashNode.removeFromParent(), this._totalWinCashNode && this._totalWinCashNode.removeFromParent(), this.winLineContent) {
      for (var t = this.winLineContent.getComponentsInChildren(_dependency10.lineItem), e = 0; e < t.length; e++) t[e].reset();
      this.winLineContent.removeAllChildren();
    }
    dispatch(_dependency0.GameEvent.SET_SYMBOL_TO_ORIGIN_PARENT);
  }, l.playAllWinLines = function (t, e) {
    var n = this,
      i = t.length > 0 && t[0].symbol;
    if (t.length > 0 && i >= 2 && i <= 4) {
      var a = "spin" === this.data.getData().parser.currentGameState.action ? _dependency8.EBTM.MG_LINE_RED : _dependency8.EBTM.FG_LINE_RED;
      0 === e && dispatch(_dependency0.GameEvent.PLAY_BTM, {
        data: {
          url: a
        }
      });
    } else {
      var r = "spin" === this.data.getData().parser.currentGameState.action ? _dependency8.EBTM.MG_LINE_BLUE : _dependency8.EBTM.FG_LINE_BLUE;
      0 === e && dispatch(_dependency0.GameEvent.PLAY_BTM, {
        data: {
          url: r
        }
      });
    }
    var o = t.map(function (t) {
      return new Promise(function (e, i) {
        n._isSkipWinLine && i(new Error("SkipWinLine"));
        var a = t.symbol,
          r = t.winLine,
          o = (t.winnings, App.pool.getPool("LINE_POOL").get()),
          s = o.getComponent(_dependency10.lineItem),
          c = "line_" + (a >= 5 && a <= 8 ? "blue" : "red") + "_" + (n.data.currentGameType === _dependency1.EGameType.MAIN_GAME ? "mg" : "fg"),
          l = _dependency8.default.getData().filePaths.lineSkeletonData,
          u = _dependency7.LoadUtils.getDirSkeleton(n.data.module, l, c);
        o.setParent(n.winLineContent), s.play(u, n.formatWinLine(r), function () {
          n._isSkipWinLine && i(new Error("SkipWinLine")), App.pool.getPool("LINE_POOL").put(o);
        }), setTimeout(function () {
          e(!0);
        }, 20);
      });
    });
    return Promise.all(o);
  }, l.playWinLines = function (t) {
    var e = this;
    this.showWinCash(t[0].winnings);
    var n = t.length > 0 && t[0].symbol;
    if (t.length > 0 && n >= 2 && n <= 4) {
      var i = "spin" === this.data.getData().parser.currentGameState.action ? _dependency8.EBTM.MG_LINE_RED : _dependency8.EBTM.FG_LINE_RED;
      dispatch(_dependency0.GameEvent.PLAY_BTM, {
        data: {
          url: i
        }
      });
    } else {
      var a = "spin" === this.data.getData().parser.currentGameState.action ? _dependency8.EBTM.MG_LINE_BLUE : _dependency8.EBTM.FG_LINE_BLUE;
      dispatch(_dependency0.GameEvent.PLAY_BTM, {
        data: {
          url: a
        }
      });
    }
    dispatch(_dependency0.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE, {
      data: t
    });
    var r = t.map(function (t) {
      return new Promise(function (n, i) {
        e._isSkipWinLine && i(new Error("SkipWinLine"));
        var a = t.symbol,
          r = t.winLine,
          o = (t.winnings, App.pool.getPool("LINE_POOL").get()),
          s = o.getComponent(_dependency10.lineItem),
          c = "line_" + (a >= 5 && a <= 8 ? "blue" : "red") + "_" + (e.data.currentGameType === _dependency1.EGameType.MAIN_GAME ? "mg" : "fg"),
          l = _dependency8.default.getData().filePaths.lineSkeletonData,
          u = _dependency7.LoadUtils.getDirSkeleton(e.data.module, l, c);
        o.setParent(e.winLineContent), s.play(u, e.formatWinLine(r), function () {
          e._isSkipWinLine ? i(new Error("SkipWinLine")) : n(!0), App.pool.getPool("LINE_POOL").put(o);
        });
      });
    });
    return Promise.all(r);
  }, l.formatWinLine = function (t) {
    if (t >= 0 && t <= 19) {
      var e = t + 1;
      return "line_" + (e >= 1 && e <= 9 ? "0" + e : e.toString());
    }
    if (20 === t) return "line_01";
    Log.e("win line id 超出範圍 不正確");
  }, l.showWinCash = function (t) {
    if (0 !== t) {
      var e = this.data.getData().parser.currentGameState.currentTimes,
        n = App.cache.get(this.data.module, _dependency8.default.getData().filePaths.winCashPrefab).data,
        i = _dependency2.instantiate(n);
      this._winCashNode = i;
      var a = i.getComponent(_dependency2.Label);
      a.color.set(255, 255, 255, 255), i.setParent(this.content), a.string = _dependency6.CmmSlotUtils.formatNumber(t * e), this.playWinCashTween(i), dispatch(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          accValue: t * e,
          tweenTime: .7
        }
      });
    }
  }, l.playWinCashTween = function (t) {
    var e = t.getComponent(_dependency2.Label).color;
    _dependency2.tween(t).bindNodeState(false).by(1, {
      position: new _dependency2.Vec3(0, 50, 0)
    }, {
      easing: "fade",
      onComplete: function () {
        t.active = !1, t.setPosition(0, 0, 0), t.destroy();
      }
    }).start(), _dependency2.tween(e).bindNodeState(false).delay(.5).to(.7, {
      a: 0
    }, {
      easing: "fade"
    }).start();
  }, l.showTotalWinCash = function (t, e) {
    var n = App.cache.get(this.data.module, _dependency8.default.getData().filePaths.winCashPrefab).data,
      i = _dependency2.instantiate(n);
    this._totalWinCashNode = i;
    var a = i.getComponent(_dependency2.Label);
    a.color.set(255, 255, 255, 255), i.setParent(this.content), a.string = _dependency6.CmmSlotUtils.formatNumber(t), this.playTotalWinCashTween(i, e), this.setSkipTotalWinCashTweenEvent(i);
  }, l.playTotalWinCashTween = function (t, e) {
    var n = t.getComponent(_dependency2.Label).color;
    t.getComponent(_dependency2.Label).fontSize = 110;
    var i = _dependency8.default.isTurbo,
      a = .3;
    (this._isSkipWinLine || i) && (a = .2);
    _dependency2.tween(n).bindNodeState(false).tag(_dependency11.CmmUtils.hashCode("playTotalWinCashTween")).delay(.3).to(a, {
      a: 0
    }, {
      easing: "fade",
      onComplete: function () {
        t.active = !1, t.getComponent(_dependency2.Label).fontSize = 70, t.destroy(), e && e();
      }
    }).start();
  }, l.setSkipTotalWinCashTweenEvent = function (t) {
    var e = this;
    this.skipTotalWinCashTween = _dependency2.tween(t).bindNodeState(false).call(function () {
      _dependency2.Tween.stopAllByTag(_dependency11.CmmUtils.hashCode("playTotalWinCashTween")), t.getComponent(_dependency2.Label).color.set(255, 255, 255, 255), e._isClickSkipWinLine = !1, e.activeBBR(!1), t.destroy(), dispatch(_dependency0.GameEvent.SHOW_TOTAL_WIN_CASH_END);
    });
  }, l.activeBBR = function (t) {
    this.bbr.active = t, this.bbr.getComponent(_dependency2.UIOpacity).opacity = t ? 255 : 0;
  }, l.playFadeInBBR = function () {
    this.bbr.active = !0, _dependency11.CmmUtils.fadeInTween(this.bbr, .3);
  }, l.playFadeOutBBR = function () {
    var t = this;
    _dependency11.CmmUtils.fadeOutTween(this.bbr, 0, function () {
      t.bbr.active = !1;
    });
  }, l.showLineAwards = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return this._isSkipWinLine = !1, this._winCashNode = null, t.next = 4, this.processWinSymbols(e);
          case 4:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }(), l.addEvents = function () {
    var t = this;
    this.on(_dependency0.GameEvent.SHOW_WIN_LINE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      var n;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = t.data.getData().parser.winSymbols, e.prev = 1, e.next = 4, t.showLineAwards(n);
          case 4:
            if (!t._isSkipWinLine) {
              e.next = 6;
              break;
            }
            return e.abrupt("return");
          case 6:
            dispatch(_dependency0.GameEvent.SHOW_WIN_LINE_END), e.next = 12;
            break;
          case 9:
            e.prev = 9, e.t0 = e.catch(1), Log.d("reject promise::::::::::::::", e.t0);
          case 12:
          case "end":
            return e.stop();
        }
      }, e, null, [[1, 9]]);
    }))), this.on(_dependency0.GameEvent.SKIP_WIN_LINE, function () {
      t.skipWinLine(), dispatch(_dependency0.GameEvent.SHOW_WIN_LINE_END);
    }), this.on(_dependency0.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH, function (e) {
      var n = t.data.getData().parser,
        i = n.winSymbols,
        a = n.currentGameState,
        r = i.reduce(function (t, e) {
          return t + e.winnings;
        }, 0);
      t.activeBBR(!0), t.data.isFullBoard(t.data.getData().parser.currentGameState.resultView) || dispatch(_dependency0.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency8.EBTM.POINT
        }
      }), t.showTotalWinCash(r * a.currentTimes, function () {
        t.activeBBR(!1), dispatch(_dependency0.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_END);
      });
      _dependency8.default.getData().winAmountTime;
      var o = t.data.getData().parser.currentGameState.totalWinnings;
      dispatch(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: o,
          tweenTime: .01
        }
      });
    }), this.on(_dependency0.GameEvent.SET_PARENT_TO_WIN_LINE_VIEW, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      var i, a, r;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            i = n.data, a = i.parent, t.data.tempAnimTopMap.set(i.uuid, {
              node: i,
              originParent: a
            }), r = i.getWorldPosition().clone(), i.setParent(t.tempSymbolAnimContent), i.setWorldPosition(r);
          case 6:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency0.GameEvent.SHOW_TOTAL_WIN_CASH, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      var i, a, r, s;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            i = t.data.getData().parser.currentGameState, a = i.totalWinnings, i.roundWinnings, _dependency2.tween(t.node).bindNodeState(false).delay(.1).call(function () {
              dispatch(_dependency0.GameEvent.CAN_SKIP_TOTAL_WIN_CASH);
            }).start(), t.activeBBR(!0), dispatch(_dependency0.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency8.EBTM.BTM_TOTAL_POINT
              }
            }), t.showTotalWinCash(a, function () {
              t._isClickSkipWinLine = !1, t.activeBBR(!1), dispatch(_dependency0.GameEvent.SHOW_TOTAL_WIN_CASH_END);
            }), r = _dependency8.default.getData(), s = r.winAmountTime, dispatch(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
              data: {
                value: a,
                tweenTime: s
              }
            });
          case 7:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency0.GameEvent.SKIP_SHOW_TOTAL_WIN_CASH, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            t.skipTotalWinCashTween.start();
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency0.GameEvent.SHOW_FG_ROUND_WIN_CASH, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
      var i, a, r, s, c;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            i = t.data.getData().parser.currentGameState, a = i.roundWinnings, r = i.totalWinnings, t.activeBBR(!0), dispatch(_dependency0.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency8.EBTM.POINT
              }
            }), t.showTotalWinCash(a, function () {
              t._isClickSkipWinLine = !1, t.activeBBR(!1), dispatch(_dependency0.GameEvent.SHOW_FG_ROUND_WIN_CASH_END);
            }), s = _dependency8.default.getData(), c = s.winAmountTime, dispatch(_dependency5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
              data: {
                value: r,
                tweenTime: c
              }
            });
          case 6:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.on(_dependency0.GameEvent.RESET_FG_CLICK_SKIP_WIN_LINE, function () {
      t._isClickSkipWinLine = !1;
    }), this.on(_dependency0.GameEvent.FADE_IN_WIN_LINE_BBR, function () {
      t.playFadeInBBR();
    }), this.on(_dependency0.GameEvent.FADE_OUT_WIN_LINE_BBR, function () {
      t.playFadeOutBBR();
    });
  }, l.removeEvents = function () {
    this.off(_dependency0.GameEvent.SHOW_WIN_LINE), this.off(_dependency0.GameEvent.SKIP_WIN_LINE), this.off(_dependency0.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH), this.off(_dependency0.GameEvent.SET_PARENT_TO_WIN_LINE_VIEW), this.off(_dependency0.GameEvent.SHOW_TOTAL_WIN_CASH), this.off(_dependency0.GameEvent.SHOW_FG_ROUND_WIN_CASH), this.off(_dependency0.GameEvent.RESET_FG_CLICK_SKIP_WIN_LINE), this.off(_dependency0.GameEvent.FADE_IN_WIN_LINE_BBR), this.off(_dependency0.GameEvent.FADE_OUT_WIN_LINE_BBR);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "bbr", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(G.prototype, "content", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(G.prototype, "tempSymbolAnimContent", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(G.prototype, "winLineContent", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = G)) || R) || R));
_dependency2.cclegacy._RF.pop();
