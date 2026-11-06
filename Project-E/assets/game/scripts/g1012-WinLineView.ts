// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency7 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency8 from "./g1012-GameConfigModel";
import * as _dependency9 from "./g1012-GameData";
import * as _dependency0 from "./g1012-GameEvent";
import * as _dependency1 from "./g1012-lineItem";
import * as _dependency10 from "../../shared/scripts/main-CmmUtils";
import * as _dependency11 from "./g1012-WinCash";
import * as _dependency12 from "./g1012-GameSymbolID";
import * as _dependency13 from "../../shared/scripts/slotFramework-type2";
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
var t, n, a, i, s, c, o, r, l, u, h, _, p, f, d, w, L, S, W, C, m, g, N, I, T, b, v, A, E, O;
var y, k, B, P, D, H, R, M, F, U, Y, G, x, V;
_dependency2.cclegacy._RF.push({}, "73657sVTn9NP7ZCXO2VCO+2", "WinLineView", void 0), function (e) {
  e[e.TOTAL_WIN_CASH_DELAY = 300] = "TOTAL_WIN_CASH_DELAY";
}(V || (V = {}));
var K = _dependency2._decorator.ccclass,
  z = (_dependency2._decorator.property, _dependency2._decorator.disallowMultiple);
_publish("WinLineView", (y = K("WinLineView"), k = z(), B = _dependency4.inject("bbr", _dependency2.Node), P = _dependency4.inject("content", _dependency2.Node), D = _dependency4.inject("content/tempSymbolAnimContent", _dependency2.Node), H = _dependency4.inject("content/winLineContent", _dependency2.Node), y(R = k(((x = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, s = new Array(n), c = 0; c < n; c++) s[c] = arguments[c];
    return t = Reflect.construct(e, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "bbr", F, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "content", U, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "tempSymbolAnimContent", Y, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "winLineContent", G, _dependency.assertThisInitialized(t)), t._isSkipWinLine = !1, t._isClickSkipWinLine = !1, t._winCashNode = null, t._totalWinCashNode = null, t.skipTotalWinCashTween = null, t.tweenNumber = null, t.winLineCallBack = null, t.spinStatus = _dependency13.ESpinStatus.IDLE, t.totalWin = 0, t.winLineCycleCount = 0, t._skipHoldCb = null, t;
  }
  _dependency.inheritsLoose(t, e);
  var r = t.prototype;
  return r.onLoad = function () {
    e.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    this._skipHoldCb && (this.unschedule(this._skipHoldCb), this._skipHoldCb = null), this.removeEvents();
  }, t.getPrefabUrl = function () {
    return "prefabs/WinLineView";
  }, r.init = function () {
    this.createLinePool();
  }, r.callback = function () {
    this.showWinSummary([{
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
  }, r.createLinePool = function () {
    for (var e = _dependency8.default.getData().filePaths.lineItemPrefab, t = App.cache.get(this.data.module, e).data, n = App.pool.getPool("LINE_POOL"), a = 0; a < 10; a++) {
      var i = _dependency2.instantiate(t);
      n.cloneNode = i, n.put(i);
    }
  }, r.showWinSummary = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      var n = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            this._isSkipWinLine = !1, this._winCashNode = null, !this.data.isFullBoard(this.data.getData().parser.currentGameState.view, [_dependency12.EBackendSymbolID.WILD]) && this.activeBBR(!0), this.data.getData().parser.currentGameState.totalWinnings, dispatch(_dependency0.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency8.EBTM.MG_WIN_LINE
              }
            }), this.playAllWinLines(t), dispatch(_dependency0.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE, {
              data: t,
              complete: function () {
                n._isSkipWinLine || (n.clearWinLine(), dispatch(_dependency0.GameEvent.HIDE_SYMBOLS_WIN), _dependency2.tween(n).bindNodeState(false).delay(_dependency8.default.getData().showTotalWinCashDelay).call(function () {
                  dispatch(_dependency0.GameEvent.SHOW_TOTAL_WIN_CASH_END), dispatch(_dependency0.GameEvent.SHOW_WIN_SUMMARY_END), n.fadeOutTotalWinCash(.4, function () {});
                }).tag(V.TOTAL_WIN_CASH_DELAY).start());
              }
            });
          case 8:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), r.showWinLineCycle = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      var n,
        a = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            this.activeBBR(!0), n = 0, this.winLineCycleCount = 0, this._isSkipWinLine = !1, this.winLineCallBack = function () {
              n++, dispatch(_dependency0.GameEvent.HIDE_SYMBOLS_WIN), dispatch(_dependency0.GameEvent.CLEAR_ALL_WIN_LINE), n == t.length && a.winLineCycleCount++, n < t.length || (n = 0), a.showSingWinLine(t[n], a.winLineCallBack);
            }, this.showSingWinLine(t[n], this.winLineCallBack);
          case 6:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), r.showSingWinLine = function (e, t) {
    var n = this;
    this.activeBBR(!0);
    e.symbol;
    var a = e.winLine,
      i = e.winnings,
      s = a + 1,
      c = App.pool.getPool("LINE_POOL").get(),
      o = c.getComponent(_dependency1.lineItem),
      r = this.getLineSpriteFrame(s);
    c.setParent(this.winLineContent), c.setRTS(this.getLineRot(s), this.getLinePos(s), this.getLineScale(s)), o.setImage(r), this.showWinCash(i, this.getWinCashPos(s)), dispatch(_dependency0.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE, {
      data: [e],
      complete: function () {
        App.pool.getPool("LINE_POOL").put(c), dispatch(_dependency0.GameEvent.HIDE_SYMBOLS_WIN), dispatch(_dependency0.GameEvent.SET_SYMBOL_TO_ORIGIN_PARENT), n._winCashNode.parent = null, _dependency2.tween(n).bindNodeState(false).delay(_dependency8.default.getData().tempoConfig.animStagger).call(function () {
          n.activeBBR(!1), t && t();
        }).start();
      }
    });
  }, r.skipWinLine = function () {
    this._isSkipWinLine = !0, this._isClickSkipWinLine = !0, _dependency2.Tween.stopAllByTarget(this);
  }, r.scheduleSkipHold = function () {
    var e = this;
    if (!this._skipHoldCb) {
      var n = function () {
        e._skipHoldCb = null, e.clearWinLine(), dispatch(_dependency0.GameEvent.HIDE_SYMBOLS_WIN), dispatch(_dependency0.GameEvent.SHOW_TOTAL_WIN_CASH_END), dispatch(_dependency0.GameEvent.SHOW_WIN_SUMMARY_END), e.fadeOutTotalWinCash(.4, function () {});
      };
      this._skipHoldCb = n, this.scheduleOnce(n, t.SKIP_HOLD);
    }
  }, r.flushSkipHold = function () {
    var e = this._skipHoldCb;
    e && (this.unschedule(e), e());
  }, r.clearWinLine = function () {
    if (this.winLineContent) {
      for (var e = this.winLineContent.getComponentsInChildren(_dependency1.lineItem), t = 0; t < e.length; t++) e[t].reset();
      this.winLineContent.removeAllChildren();
    }
    dispatch(_dependency0.GameEvent.SET_SYMBOL_TO_ORIGIN_PARENT);
  }, r.fadeOutTotalWinCash = function (e, t) {
    if (void 0 === e && (e = .4), void 0 === t && (t = null), this._totalWinCashNode) {
      var n = this._totalWinCashNode,
        a = n.getComponent(_dependency11.WinCash).number.color;
      n.getComponent(_dependency11.WinCash).number.color = new _dependency2.Color(a.r, a.g, a.b, 255);
      var i = n.getComponent(_dependency11.WinCash).background.node.getComponent(_dependency2.UIOpacity);
      i.opacity = 255, _dependency2.tween(a).bindNodeState(false).to(e, {
        a: 0
      }, {
        easing: "cubicOut"
      }).call(function () {
        t && t();
      }).start(), _dependency2.tween(i).bindNodeState(false).to(e, {
        opacity: 0
      }, {
        easing: "cubicOut"
      }).call(function () {
        n.parent = null;
      }).start();
    }
  }, r.playAllWinLines = function (e) {
    var t = this,
      n = 30;
    e.map(function (e, a) {
      a % 2 == 0 && n--;
      var i = a * n / 1e3;
      _dependency2.tween(t).bindNodeState(false).delay(i).call(function () {
        e.symbol;
        var n = e.winLine,
          a = (e.winnings, n + 1),
          i = App.pool.getPool("LINE_POOL").get(),
          s = i.getComponent(_dependency1.lineItem),
          c = t.getLineSpriteFrame(a);
        i.setParent(t.winLineContent), i.setRTS(t.getLineRot(a), t.getLinePos(a), t.getLineScale(a)), s.setImage(c);
      }).start();
    });
  }, r.showWinCash = function (e, t) {
    if (console.log("[Tony][Debug] showWinCash - winnings : ", e), 0 !== e) {
      var n = this.data.getData().parser.currentGameState.multiple,
        a = App.cache.get(this.data.module, _dependency8.default.getData().filePaths.winCashPrefab).data,
        i = _dependency2.instantiate(a);
      i.setScale(new _dependency2.Vec3(.4, .4, .4)), this._winCashNode = i;
      var s = i.getComponent(_dependency11.WinCash).number;
      s.color.set(255, 255, 255, 255), i.setParent(this.content), i.setPosition(t), s.string = _dependency6.CmmSlotUtils.formatNumber(e * n);
    }
  }, r.showTotalWinCash = function (e, t) {
    var n = this;
    this.tweenNumber && this.tweenNumber.stop(), console.log("[Tony][Debug] showTotalWinCash - winnings : ", e);
    var a = App.cache.get(this.data.module, _dependency8.default.getData().filePaths.winCashPrefab).data,
      i = _dependency2.instantiate(a);
    this._totalWinCashNode = i;
    var s = i.getComponent(_dependency11.WinCash).number;
    s.color.set(255, 255, 255, 0), i.setParent(this.content), i.setScale(new _dependency2.Vec3(.1, .1, .1));
    var c = this.data.getData().definition.digital,
      o = (this.data.getData().parser.bigwinReach, {
        label: s,
        start: 0,
        end: Number(_dependency6.CmmSlotUtils.formatNumber(e, !1, !1, c)),
        tweenTime: .25,
        digital: c,
        useThousandsSeparator: !0,
        callback: function () {
          dispatch(_dependency0.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
            data: n.data.getData().parser.currentGameState.totalWinnings
          }), s.color.set(255, 255, 255, 255), _dependency2.tween(n._totalWinCashNode).bindNodeState(false).to(.1, {
            scale: _dependency2.Vec3.ONE
          }).start(), _dependency2.tween(n).bindNodeState(false).delay(.5).call(function () {
            dispatch(_dependency0.GameEvent.STOP_BTM, {
              data: {
                url: _dependency8.EBTM.BTM_POINT
              }
            }), t && t();
          }).start();
        }
      });
    dispatch(_dependency0.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency8.EBTM.BTM_POINT
      }
    }), this.tweenNumber = _dependency6.CmmSlotUtils.tweenNum(o), this.playTotalWinCashTween(i, .25), this.setSkipTotalWinCashTweenEvent(i);
  }, r.playTotalWinCashTween = function (e, t, n) {
    void 0 === n && (n = .4);
    var a = e.getComponent(_dependency11.WinCash),
      i = a.number.color;
    a.number.fontSize = 110;
    _dependency8.default.isTurbo;
    _dependency2.tween(a.node).bindNodeState(false).tag(_dependency10.CmmUtils.hashCode("playTotalWinCashTween")).to(t, {
      scale: _dependency2.Vec3.ONE
    }).call(function () {
      dispatch(_dependency0.GameEvent.CAN_SKIP_TOTAL_WIN_CASH);
    }).start(), _dependency2.tween(i).bindNodeState(false).tag(_dependency10.CmmUtils.hashCode("playTotalWinCashTween")).to(n, {
      a: 255
    }).start();
  }, r.setSkipTotalWinCashTweenEvent = function (e) {
    var t = this;
    this.skipTotalWinCashTween = _dependency2.tween(e).bindNodeState(false).call(function () {
      dispatch(_dependency0.GameEvent.SHOW_TOTAL_WIN_CASH_END), _dependency2.Tween.stopAllByTag(_dependency10.CmmUtils.hashCode("playTotalWinCashTween")), _dependency2.Tween.stopAllByTag(V.TOTAL_WIN_CASH_DELAY), t._isClickSkipWinLine = !1, t._totalWinCashNode = null, t.clearWinLine(), e.destroy(), dispatch(_dependency0.GameEvent.SHOW_WIN_SUMMARY_END);
    });
  }, r.activeBBR = function (e) {
    this.bbr.active = e, console.log("[Tony][Debug] activeBBR - isActive : " + e), this.bbr.getComponent(_dependency2.UIOpacity).opacity = e ? 255 : 0;
  }, r.playFadeInBBR = function () {
    this.bbr.active = !0, _dependency10.CmmUtils.fadeInTween(this.bbr, .3);
  }, r.playFadeOutBBR = function () {
    var e = this;
    _dependency10.CmmUtils.fadeOutTween(this.bbr, 0, function () {
      e.bbr.active = !1;
    });
  }, r.getLineSpriteFrame = function (e) {
    var t = "";
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
        t = "1_2_3_4";
        break;
      case 5:
      case 6:
        t = "5_6";
        break;
      case 7:
      case 8:
      case 11:
      case 12:
        t = "7_8_11_12";
        break;
      case 9:
      case 10:
      case 19:
      case 20:
        t = "9_10_19_20";
        break;
      case 13:
      case 14:
      case 17:
      case 18:
        t = "13_14_17_18";
        break;
      case 15:
      case 16:
        t = "15_16";
        break;
      case 21:
      case 22:
        t = "21_22";
        break;
      case 23:
      case 24:
      case 27:
      case 28:
        t = "23_24_27_28";
        break;
      case 25:
      case 26:
        t = "25_26";
        break;
      case 29:
      case 30:
      case 35:
      case 36:
        t = "29_30_35_36";
        break;
      case 31:
      case 32:
        t = "31_32";
        break;
      case 33:
      case 34:
        t = "33_34";
        break;
      case 37:
      case 38:
      case 39:
      case 40:
        t = "37_38_39_40";
    }
    var n = _dependency8.default.getData().filePaths.lineSpriteFrame;
    return _dependency7.LoadUtils.getDirSp(this.data.module, n, t);
  }, r.getLinePos = function (e) {
    switch (e) {
      case 1:
      case 13:
      case 17:
      case 22:
      case 26:
        return new _dependency2.Vec3(0, 50, 0);
      case 5:
      case 29:
        return new _dependency2.Vec3(0, -30, 0);
      case 6:
        return new _dependency2.Vec3(0, 10, 0);
      case 2:
      case 14:
      case 18:
      case 21:
        return new _dependency2.Vec3(0, -80, 0);
      case 3:
        return new _dependency2.Vec3(0, 185, 0);
      case 4:
        return new _dependency2.Vec3(0, -215, 0);
      case 8:
      case 11:
      case 33:
      case 39:
        return new _dependency2.Vec3(0, 30, 0);
      case 30:
      case 35:
      case 36:
      case 39:
        return new _dependency2.Vec3(0, -5, 0);
      case 7:
      case 12:
      case 32:
      case 34:
      case 37:
      case 40:
        return new _dependency2.Vec3(0, -50, 0);
      case 9:
      case 13:
        return new _dependency2.Vec3(0, 90, 0);
      case 24:
      case 28:
        return new _dependency2.Vec3(0, -150, 0);
      case 10:
      case 24:
        return new _dependency2.Vec3(0, -105, 0);
      case 23:
      case 27:
        return new _dependency2.Vec3(0, 130, 0);
      case 15:
      case 19:
        return new _dependency2.Vec3(0, 180, 0);
      case 16:
      case 20:
        return new _dependency2.Vec3(0, -180, 0);
      case 25:
        return new _dependency2.Vec3(0, -75, 0);
      case 31:
      case 38:
        return new _dependency2.Vec3(0, 20, 0);
    }
    return _dependency2.Vec3.ZERO;
  }, r.getWinCashPos = function (e) {
    switch (e) {
      case 1:
      case 7:
      case 12:
      case 13:
      case 17:
      case 19:
      case 22:
      case 26:
      case 27:
      case 30:
      case 35:
      case 37:
      case 40:
        return new _dependency2.Vec3(0, 50, 0);
      case 2:
      case 8:
      case 11:
      case 14:
      case 18:
      case 20:
      case 21:
      case 25:
      case 28:
      case 29:
      case 36:
      case 38:
      case 39:
        return new _dependency2.Vec3(0, -80, 0);
      case 5:
      case 16:
      case 24:
        return new _dependency2.Vec3(0, -203, 0);
      case 3:
      case 6:
      case 9:
      case 15:
      case 23:
      case 31:
      case 33:
        return new _dependency2.Vec3(0, 185, 0);
      case 4:
      case 10:
      case 32:
      case 34:
        return new _dependency2.Vec3(0, -215, 0);
    }
    return _dependency2.Vec3.ZERO;
  }, r.getLineRot = function (e) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 8:
      case 9:
      case 13:
      case 15:
      case 18:
      case 20:
      case 21:
      case 23:
      case 25:
      case 28:
      case 29:
      case 31:
      case 33:
      case 37:
        return new _dependency2.Vec3(0, 0, 0);
      case 6:
      case 10:
      case 12:
      case 19:
      case 35:
      case 39:
        return new _dependency2.Vec3(0, 0, 180);
      case 7:
      case 14:
      case 16:
      case 17:
      case 22:
      case 24:
      case 27:
      case 30:
      case 32:
      case 34:
      case 38:
        return new _dependency2.Vec3(180, 0, 0);
      case 11:
      case 26:
      case 36:
      case 40:
        return new _dependency2.Vec3(180, 0, 180);
    }
    return _dependency2.Vec3.ZERO;
  }, r.getLineScale = function (e) {
    return new _dependency2.Vec3(1, 1, 1);
  }, r.addEvents = function () {
    var e = this;
    this.on(_dependency0.GameEvent.SHOW_WIN_SUMMARY, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var n;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return n = e.data.getData().parser.winSymbols, t.prev = 1, t.next = 4, e.showWinSummary(n);
          case 4:
            t.next = 9;
            break;
          case 6:
            t.prev = 6, t.t0 = t.catch(1), Log.d("reject promise::::::::::::::", t.t0);
          case 9:
          case "end":
            return t.stop();
        }
      }, t, null, [[1, 6]]);
    }))), this.on(_dependency0.GameEvent.CLEAR_ALL_WIN_LINE, function () {
      e.flushSkipHold(), e.clearWinLine(), e.activeBBR(!1), _dependency2.Tween.stopAllByTarget(e);
    }), this.on(_dependency0.GameEvent.START_SPIN, function () {
      e.flushSkipHold(), e.winLineCallBack && (e.winLineCallBack = null), e.clearWinLine(), e._winCashNode && e._winCashNode.removeFromParent(), e._totalWinCashNode && e._totalWinCashNode.removeFromParent(), e.activeBBR(!1);
    }), this.on(_dependency5.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (t) {
      e.spinStatus = t.data;
    }), this.on(_dependency0.GameEvent.SHOW_WIN_LINE_CYCLE, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var n;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return n = e.data.getData().parser.winSymbols, t.prev = 1, t.next = 4, e.showWinLineCycle(n);
          case 4:
            t.next = 9;
            break;
          case 6:
            t.prev = 6, t.t0 = t.catch(1), Log.d("reject promise::::::::::::::", t.t0);
          case 9:
          case "end":
            return t.stop();
        }
      }, t, null, [[1, 6]]);
    }))), this.on(_dependency0.GameEvent.SHOW_ALL_WIN_LINE, function () {
      var t = e.data.getData().parser.winSymbols;
      try {
        e.playAllWinLines(t);
      } catch (e) {
        Log.e("show all win line error:::::", e);
      }
    }), this.on(_dependency0.GameEvent.SKIP_WIN_LINE, function () {
      e.skipWinLine(), e.scheduleSkipHold();
    }), this.on(_dependency0.GameEvent.SET_PARENT_TO_WIN_LINE_VIEW, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(n) {
      var a, i, s;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (a = n.data, !e.data.tempAnimTopMap.has(a.uuid)) {
              t.next = 3;
              break;
            }
            return t.abrupt("return");
          case 3:
            i = a.parent, e.data.tempAnimTopMap.set(a.uuid, {
              node: a,
              originParent: i
            }), s = a.getWorldPosition().clone(), a.setParent(e.tempSymbolAnimContent), a.setWorldPosition(s);
          case 8:
          case "end":
            return t.stop();
        }
      }, t);
    }))), this.on(_dependency0.GameEvent.SHOW_TOTAL_WIN_CASH, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(n) {
      var a, i, s, o, r;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            a = e.data.getData().parser.currentGameState, i = a.totalWinnings, s = a.currentWinnings, o = a.action, r = 0, r = "freeSpin" == o ? s : i, e.showTotalWinCash(r, function () {
              e._isClickSkipWinLine = !1;
            });
          case 4:
          case "end":
            return t.stop();
        }
      }, t);
    }))), this.on(_dependency0.GameEvent.SKIP_SHOW_TOTAL_WIN_CASH, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(n) {
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e.skipTotalWinCashTween.start();
          case 1:
          case "end":
            return t.stop();
        }
      }, t);
    }))), this.on(_dependency0.GameEvent.RESET_FG_CLICK_SKIP_WIN_LINE, function () {
      e._isClickSkipWinLine = !1;
    }), this.on(_dependency0.GameEvent.FADE_IN_WIN_LINE_BBR, function () {
      e.playFadeInBBR();
    }), this.on(_dependency0.GameEvent.FADE_OUT_WIN_LINE_BBR, function () {
      e.playFadeOutBBR();
    });
  }, r.removeEvents = function () {
    this.off(_dependency0.GameEvent.SHOW_WIN_SUMMARY), this.off(_dependency0.GameEvent.SKIP_WIN_LINE), this.off(_dependency0.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH), this.off(_dependency0.GameEvent.SET_PARENT_TO_WIN_LINE_VIEW), this.off(_dependency0.GameEvent.SHOW_TOTAL_WIN_CASH), this.off(_dependency0.GameEvent.RESET_FG_CLICK_SKIP_WIN_LINE), this.off(_dependency0.GameEvent.FADE_IN_WIN_LINE_BBR), this.off(_dependency0.GameEvent.FADE_OUT_WIN_LINE_BBR), this.off(_dependency0.GameEvent.START_SPIN);
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), t;
}(_dependency3.default)).SKIP_HOLD = .5, F = _dependency.applyDecoratedDescriptor((M = x).prototype, "bbr", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(M.prototype, "content", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(M.prototype, "tempSymbolAnimContent", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(M.prototype, "winLineContent", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = M)) || R) || R));
_dependency2.cclegacy._RF.pop();
