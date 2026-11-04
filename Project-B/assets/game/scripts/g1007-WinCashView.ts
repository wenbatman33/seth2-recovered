// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/WinCashView.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-UIView";
import * as __dependency_3 from "../../shared/scripts/main-Decorators";
import * as __dependency_4 from "../../shared/scripts/framework-StakeModel";
import * as __dependency_5 from "../../shared/scripts/framework-CmmSlotUtils";
import * as __dependency_6 from "./g1007-GameConfigModel";
import * as __dependency_7 from "./g1007-GameData";
import * as __dependency_8 from "./g1007-GameEvent";
var __export_0;
export { __export_0 as WinCashView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WinCashView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, a, o, s, r, l, c, u, h, m, f, d, p, W, g, _, E, y, I, x, v, S, C;
var A, N, b, w, O, R, T, D, L;
__dependency_1.cclegacy._RF.push({}, "5495415h5hOKLekjMXNHg7Z", "WinCashView", void 0);
var M = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("WinCashView", (A = M("Hades_WinCashView"), N = __dependency_3.inject("totalWin2", __dependency_1.Label), b = __dependency_3.inject("totalWinWhite", __dependency_1.Label), w = __dependency_3.inject("multiEffect", __dependency_1.sp.Skeleton), A((T = __dependency_0.applyDecoratedDescriptor((R = function (t) {
  function e() {
    for (var e, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "totalWin", T, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "totalWinWhite", D, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "multiEffect", L, __dependency_0.assertThisInitialized(e)), e.timesIndexForAnim = [], e;
  }
  __dependency_0.inheritsLoose(e, t);
  var c = e.prototype;
  return c.onLoad = function () {
    t.prototype.onLoad.call(this), this.totalWinWhite.node.active = !1;
  }, c.start = function () {}, c.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, c.init = function () {
    var t = this.data.getData().definition.StoneMultiplierList;
    this.timesIndexForAnim = [3, 6, 9, 12, t.length - 1];
  }, c.showWinCash = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        i,
        a,
        o,
        s,
        c,
        u,
        h,
        d,
        _,
        E = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (e = this.data.getData().definition.digital, n = __dependency_4.default.totalStake, i = this.data.getData().parser.currentGameState, a = i.currentTimes, o = i.bonusTimes, i.totalWinnings, s = this.totalWin.getComponent(__dependency_1.UIOpacity), c = this.data.getWinningsSum(), u = __dependency_6.default.getData(), h = u.winAmountTime, !(c * (d = a > o ? a : o) < 1.2 * n)) {
              t.next = 12;
              break;
            }
            return t.next = 10, this.sleep(.8);
          case 10:
            return dispatch(__dependency_8.GameEvent.SHOW_WIN_SCORE_END), t.abrupt("return");
          case 12:
            s.opacity = 255, d > 1 && (this.totalWinWhite.node.active = !0, this.totalWinWhite.getComponent(__dependency_1.UIOpacity).opacity = 0), this.totalWin.node.active = !0, this.totalWin.string = __dependency_5.CmmSlotUtils.formatNumber(c, !1, !1, e), this.totalWinWhite.string = __dependency_5.CmmSlotUtils.formatNumber(c, !1, !1, e), this.totalWin.node.scale.set(0, 0, 0), _ = function () {
              E.totalWin.node.scale.set(1, 1, 1), E.totalWinWhite.node.scale.set(1, 1, 1);
              var t = E.totalWinWhite.getComponent(__dependency_1.UIOpacity);
              __dependency_1.tween(t).bindNodeState(false).delay(0).to(.2, {
                opacity: 0
              }, {
                easing: __dependency_1.easing.sineIn
              }).start(), __dependency_1.tween(s).bindNodeState(false).delay(.6).to(.5, {
                opacity: 0
              }, {
                easing: __dependency_1.easing.quintIn
              }).call(function () {
                E.totalWin.node.active = !1, E.multiEffect.node.active = !1, dispatch(__dependency_8.GameEvent.SHOW_WIN_SCORE_END);
              }).start();
            }, __dependency_1.Tween.stopAllByTarget(this.totalWin.node), this.totalWin.node.scale.set(1, 1, 1), this.totalWinWhite.node.scale.set(1, 1, 1), __dependency_1.tween(this.totalWin.node).bindNodeState(false).to(0, {
              scale: __dependency_1.v3(1, 1, 1)
            }, {
              easing: __dependency_1.easing.quintIn
            }).call(__dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
              return __dependency_0.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!(d > 1)) {
                      t.next = 15;
                      break;
                    }
                    return E.playMultiAnim(), dispatch(__dependency_8.GameEvent.SHOW_MULTI_BOARD_TO_WIN_EFFECT), t.next = 5, E.sleep(.9);
                  case 5:
                    return E.totalWinWhite.getComponent(__dependency_1.UIOpacity).opacity = 255, __dependency_1.tween(E.totalWinWhite.node).bindNodeState(false).to(.1, {
                      scale: __dependency_1.v3(1.3, 1.3, 1)
                    }, {
                      easing: __dependency_1.easing.sineIn
                    }).start(), __dependency_1.tween(E.totalWin.node).bindNodeState(false).to(.1, {
                      scale: __dependency_1.v3(1.3, 1.3, 1)
                    }, {
                      easing: __dependency_1.easing.sineIn
                    }).start(), t.next = 11, E.sleep(.2);
                  case 11:
                    __dependency_1.tween(E.totalWinWhite.node).bindNodeState(false).to(.2, {
                      scale: __dependency_1.v3(1, 1, 1)
                    }, {
                      easing: __dependency_1.easing.sineIn
                    }).start(), __dependency_1.tween(E.totalWin.node).bindNodeState(false).to(.2, {
                      scale: __dependency_1.v3(1, 1, 1)
                    }, {
                      easing: __dependency_1.easing.sineIn
                    }).start(), E.totalWin.string = __dependency_5.CmmSlotUtils.formatNumber(c * d, !1, !1, e), E.totalWinWhite.string = __dependency_5.CmmSlotUtils.formatNumber(c * d, !1, !1, e);
                  case 15:
                    return _(), d > 1 && d < 32 ? __dependency_6.EBTM.RUN_SCORE : d < 128 ? __dependency_6.EBTM.RUN_SCORE_02 : d > 128 && __dependency_6.EBTM.RUN_SCORE_03, t.next = 20, E.sleep(h);
                  case 20:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))).start();
          case 23:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), c.playMultiAnim = function () {
    var t = this.data.getData().parser.currentGameState,
      e = t.currentTimes,
      n = t.bonusTimes,
      i = this.data.getData().definition.StoneMultiplierList,
      a = [{
        aniName: "multi_score_1",
        maxIndex: this.timesIndexForAnim[0]
      }, {
        aniName: "multi_score_2",
        maxIndex: this.timesIndexForAnim[1]
      }, {
        aniName: "multi_score_3",
        maxIndex: this.timesIndexForAnim[2]
      }, {
        aniName: "multi_score_4",
        maxIndex: this.timesIndexForAnim[3]
      }, {
        aniName: "multi_score_5",
        maxIndex: this.timesIndexForAnim[4]
      }],
      s = a[a.length - 1],
      r = e > n ? e : n,
      l = i.indexOf(r),
      c = "multi_score_1";
    if (l >= s.maxIndex) c = s.aniName;else for (var u, h = __dependency_0.createForOfIteratorHelperLoose(a); !(u = h()).done;) {
      var d = u.value;
      if (l <= d.maxIndex) {
        c = d.aniName;
        break;
      }
    }
    this.multiEffect.node.active = !0, this.multiEffect.clearTracks(), this.multiEffect.setToSetupPose(), this.multiEffect.setAnimation(0, c, !1), __dependency_1.Tween.stopAllByTarget(this.node), __dependency_1.tween(this.node).bindNodeState(false).delay(1).call(function () {
      dispatch(__dependency_8.GameEvent.SHAKE_GAME_LAYER);
    }).start();
  }, c.sleep = function (t) {
    var e = this;
    return new Promise(function (n) {
      e.scheduleOnce(function () {
        n();
      }, t);
    });
  }, c.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(__dependency_8.GameEvent.PARSER_INIT_COMPLETED, function () {
      e.init();
    }), this.on(__dependency_8.GameEvent.PARSER_REPLAY_COMPLETED, function () {
      e.init();
    }), this.on(__dependency_8.GameEvent.SHOW_WIN_SCORE, function () {
      e.showWinCash();
    });
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_7.default);
    }
  }]), e;
}(__dependency_2.default)).prototype, "totalWin", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = __dependency_0.applyDecoratedDescriptor(R.prototype, "totalWinWhite", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = __dependency_0.applyDecoratedDescriptor(R.prototype, "multiEffect", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = R)) || O));
__dependency_1.cclegacy._RF.pop();
