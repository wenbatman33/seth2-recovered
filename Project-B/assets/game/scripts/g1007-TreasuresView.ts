// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/TreasuresView.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-UIView";
import * as __dependency_3 from "../../shared/scripts/main-Decorators";
import * as __dependency_4 from "../../shared/scripts/framework-SlotFrameworkEvent";
import * as __dependency_5 from "../../shared/scripts/framework-CmmSlotUtils";
import * as __dependency_6 from "../../shared/scripts/framework-MathUtil";
import * as __dependency_7 from "./g1007-GameConfigModel";
import * as __dependency_8 from "./g1007-GameData";
import * as __dependency_9 from "./g1007-GameEvent";
var __export_0;
export { __export_0 as TreasuresView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TreasuresView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, a, s, r, c, l, u, h, p, f, d, m, N, _, S, y, T, W, w, B, b, g, E;
var I, C, v, A, O, D, U, R, G, M, L, k, H;
__dependency_1.cclegacy._RF.push({}, "09445CmeItD/phpfEshU9Wx", "TreasuresView", void 0);
var P,
  z = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.SHOW_BIGWIN = 1] = "SHOW_BIGWIN", t[t.SHOW_BIGWIN_NUMBER = 2] = "SHOW_BIGWIN_NUMBER", t[t.SHOW_BIGWIN_NUMBER_END = 3] = "SHOW_BIGWIN_NUMBER_END", t[t.BIGWIN_COMPLETED = 4] = "BIGWIN_COMPLETED";
}(P || (P = {}));
__publish("TreasuresView", (I = z("Hades_TreasuresView"), C = __dependency_3.inject("alert", __dependency_1.Node), v = __dependency_3.inject("alert/effectBg", __dependency_1.sp.Skeleton), A = __dependency_3.inject("alert/totalWin", __dependency_1.Label), O = __dependency_3.inject("alert/coinSprays", __dependency_1.Node), D = __dependency_3.inject("alert/bbr", __dependency_1.Node), I((G = __dependency_0.applyDecoratedDescriptor((R = function (t) {
  function e() {
    for (var e, n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "alert", G, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "effectBg", M, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "totalWin", L, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "coinSprays", k, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "bbr", H, __dependency_0.assertThisInitialized(e)), e.completedCB = null, e.tweenNumTween = null, e.showWinStatus = P.NONE, e.skipDelayTime = 1.5, e;
  }
  __dependency_0.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/TreasuresView";
  };
  var c = e.prototype;
  return c.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, c.start = function () {
    this.init();
  }, c.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, c.init = function () {}, c.show = function (e) {
    t.prototype.show.call(this);
  }, c.onClose = function () {
    this.enabledKeyUp = !1, __dependency_1.Tween.stopAllByTarget(this), this.closeNodes(), App.globalAudio.isMusicOn = !0, App.globalAudio.resumeMusic(), this.close();
  }, c.closeNodes = function () {
    this.bbr && (this.bbr.active = !1), this.effectBg.node.active = !1, this.totalWin.node.active = !1, this.coinSprays.active = !1, this.coinSprays.children.forEach(function (t) {
      t.active = !1;
    }), this.alert.targetOff(this);
  }, c.playAnimation = function () {
    var t = this,
      e = __dependency_7.default.getData().bigwinAutoCloseTime,
      n = (void 0 === e ? 0 : e) + 8 + .5;
    this.effectBg.node.active = !0, this.effectBg.clearTracks(), this.effectBg.setToSetupPose(), this.effectBg.setAnimation(0, "in", !1), dispatch(__dependency_9.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_7.EBGM.TREASURE_BGM
      }
    }), this.effectBg.setCompleteListener(__dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            t.effectBg.setAnimation(0, "open", !1), t.effectBg.setCompleteListener(function () {
              t.effectBg.setAnimation(0, "loop", !0), t.effectBg.setCompleteListener(null);
            }), t.scheduleOnce(function () {
              t.playCoinSprayAndRunScore(8);
            }, .5), t.scheduleOnce(function () {
              t.enabledKeyUp = !0, t.alert.once(__dependency_1.NodeEventType.TOUCH_END, function () {
                t.showWinResult();
              }, t);
            }, t.skipDelayTime);
          case 4:
          case "end":
            return e.stop();
        }
      }, e);
    }))), this.scheduleOnce(this.showWinResult, n);
  }, c.playCoinSprayAndRunScore = function (t) {
    var e = this.data.getData().definition.digital,
      n = this.data.getData().bonusState.prize,
      i = {
        label: this.totalWin,
        start: 0,
        end: n,
        tweenTime: t,
        digital: e,
        useThousandsSeparator: !0
      };
    this.showWinStatus = P.SHOW_BIGWIN_NUMBER, this.totalWin.node.active = !0, this.tweenNumTween = __dependency_5.CmmSlotUtils.tweenNum(i), this.showCoinSpray(), dispatch(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: 0
      }
    }), dispatch(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: n,
        tweenTime: t
      }
    });
  }, c.addClickAlertCompleteCb = function () {
    var t = __dependency_7.default.getData().bigwinAutoCloseTime,
      e = void 0 === t ? 0 : t;
    this.alert.once(__dependency_1.NodeEventType.TOUCH_END, this.completedCB), null != e && this.scheduleOnce(this.completedCB, e);
  }, c.playBounceTween = function (t, e) {
    __dependency_1.tween(t).bindNodeState(false).to(.1, {
      scale: new __dependency_1.Vec3(1.8, 1.8, 1.8)
    }).delay(.01).to(.1, {
      scale: new __dependency_1.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        e && e();
      }
    }).start();
  }, c.showCoinSpray = function () {
    var t = this,
      e = this.coinSprays.getComponentsInChildren(__dependency_1.sp.Skeleton);
    this.coinSprays.active = !0;
    for (var n = function () {
        var n = e[i];
        0 == i ? (n.node.active = !0, n.setAnimation(0, "coin_01", !1)) : 1 == i ? t.scheduleOnce(function () {
          n.node.active = !0, n.setAnimation(0, "coin_02", !1);
        }, 1.3) : t.scheduleOnce(function () {
          var t = __dependency_6.default.getRandomNumber(3, 6);
          n.node.active = !0, n.setAnimation(0, "radom_0" + t, !1), n.setCompleteListener(function () {
            var t = __dependency_6.default.getRandomNumber(3, 6);
            n.setAnimation(0, "radom_0" + t, !1);
          });
        }, 2.8 + .5 * (i - 2));
      }, i = 0; i < e.length; i++) n();
  }, c.showWinResult = function () {
    var t = this,
      e = this.data.getData().bonusState.prize;
    this.showWinStatus = P.SHOW_BIGWIN_NUMBER_END, this.tweenNumTween && this.tweenNumTween.stop(), __dependency_1.Tween.stopAllByTarget(this), this.unschedule(this.showWinResult), this.alert.targetOff(this), this.enabledKeyUp = !1, this.totalWin.string = __dependency_5.CmmSlotUtils.formatNumber(e), dispatch(__dependency_9.GameEvent.STOP_BTM, {
      data: __dependency_7.EBGM.TREASURE_BGM
    }), dispatch(__dependency_9.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_7.EBGM.TREASURE_BGM_END
      }
    }), dispatch(__dependency_4.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: e
    }), this.playBounceTween(this.totalWin.node), this.scheduleOnce(function () {
      t.enabledKeyUp = !0, t.addClickAlertCompleteCb();
    }, this.skipDelayTime);
  }, c.showTreasureWin = function () {
    var t = this,
      e = this.data.getData().bonusState.prize;
    this.totalWin.string = "0.00", this.showWinStatus = P.SHOW_BIGWIN, this.completedCB = function () {
      t.showWinStatus = P.BIGWIN_COMPLETED, dispatch(__dependency_9.GameEvent.SHOW_TREASURE_VIEW_END), dispatch(__dependency_9.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: e
      }), t.onClose();
    }, App.globalAudio.pauseMusic(), App.globalAudio.isMusicOn = !1, this.scheduleOnce(function () {
      t.bbr.active = !0;
    }, .1), this.scheduleOnce(function () {
      t.playAnimation();
    }, .6);
  }, c.onKeyUp = function (e) {
    if (t.prototype.onKeyUp.call(this, e), e.keyCode === __dependency_1.KeyCode.SPACE) switch (this.showWinStatus) {
      case P.SHOW_BIGWIN_NUMBER:
        this.showWinResult();
        break;
      case P.SHOW_BIGWIN_NUMBER_END:
        this.completedCB();
    }
  }, c.addEvents = function () {}, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_8.default);
    }
  }]), e;
}(__dependency_2.default)).prototype, "alert", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = __dependency_0.applyDecoratedDescriptor(R.prototype, "effectBg", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = __dependency_0.applyDecoratedDescriptor(R.prototype, "totalWin", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = __dependency_0.applyDecoratedDescriptor(R.prototype, "coinSprays", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = __dependency_0.applyDecoratedDescriptor(R.prototype, "bbr", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = R)) || U));
__dependency_1.cclegacy._RF.pop();
