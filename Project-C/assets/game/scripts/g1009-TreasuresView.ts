// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UrlUtils";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency8 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency9 from "./g1009-GameConfigModel";
import * as _dependency0 from "./g1009-GameData";
import * as _dependency1 from "./g1009-GameEvent";
var _export;
export { _export as TreasuresView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TreasuresView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, o, a, s, l, r, c, u, h, p, f, d, m, w, _, N, T, W, B, g, y, S, C;
var I, b, A, O, P, E, v, M, U, D, R, G, L;
_dependency2.cclegacy._RF.push({}, "8aa14oMcU9NkqZLu7MuIsrF", "TreasuresView", void 0);
var H,
  k = _dependency2._decorator.ccclass,
  V = _dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.SHOW_BIGWIN = 1] = "SHOW_BIGWIN", t[t.SHOW_BIGWIN_NUMBER = 2] = "SHOW_BIGWIN_NUMBER", t[t.SHOW_BIGWIN_NUMBER_END = 3] = "SHOW_BIGWIN_NUMBER_END", t[t.BIGWIN_COMPLETED = 4] = "BIGWIN_COMPLETED";
}(H || (H = {}));
_publish("TreasuresView", (I = k("TreasuresView"), b = _dependency5.inject("alert", _dependency2.Node), A = V(_dependency2.Node), O = _dependency5.inject("alert/effectBg", _dependency2.sp.Skeleton), P = _dependency5.inject("alert/totalWin", _dependency2.Label), E = _dependency5.inject("alert/coinSprays", _dependency2.Node), I((U = _dependency.applyDecoratedDescriptor((M = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bbr", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectBg", R, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWin", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinSprays", L, _dependency.assertThisInitialized(e)), e.completedCB = null, e.tweenNumTween = null, e.showWinStatus = H.NONE, e.tweenTime = 8, e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/" + _dependency3.default.getViewModeParam() + "/TreasuresView";
  };
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    this.stopAllBTM(), t.prototype.onDestroy.call(this);
  }, s.init = function () {
    this.enabledKeyDown = !0;
  }, s.show = function (e) {
    t.prototype.show.call(this);
  }, s.onClose = function () {
    _dependency2.Tween.stopAllByTarget(this), this.stopAllBTM(), App.globalAudio.isMusicOn = !0, App.globalAudio.resumeMusic(), this.close();
  }, s.stopAllBTM = function () {
    dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.JP_POPUP_IN_2
    }), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.JP_POPUP_LOOP_2
    });
  }, s.playAnimation = function () {
    App.globalAudio.pauseMusic(), this.playWin();
  }, s.playWin = function () {
    var t = this,
      e = _dependency9.default.getData().bigwinAutoCloseTime;
    this.effectBg.node.active = !0, this.effectBg.clearTracks(), this.effectBg.setToSetupPose(), dispatch(_dependency1.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.JP_POPUP_IN_2,
        loop: !1
      }
    }), this.effectBg.setAnimation(0, "normal", !1), this.effectBg.setCompleteListener(function () {
      t.effectBg.setAnimation(0, "open", !1), t.effectBg.setCompleteListener(null), _dependency2.tween(t).bindNodeState(false).delay(.8).call(function () {
        dispatch(_dependency1.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency9.EBTM.JP_POPUP_LOOP_2,
            loop: !0
          }
        }), t.playCoinSprayAndRunScore();
      }).start();
    }), this.scheduleOnce(this.showWinResult, e + this.tweenTime);
  }, s.playCoinSprayAndRunScore = function () {
    var t = this,
      e = this.data.getData().gameState.noWinReward,
      i = this.data.getData().definition.digital,
      n = {
        label: this.totalWin,
        start: 0,
        end: e,
        tweenTime: this.tweenTime,
        digital: i,
        useThousandsSeparator: !0
      };
    this.showWinStatus = H.SHOW_BIGWIN_NUMBER, this.totalWin.node.active = !0, this.tweenNumTween = _dependency7.CmmSlotUtils.tweenNum(n), this.alert.once(_dependency2.NodeEventType.TOUCH_END, function () {
      t.showWinResult();
    }, this), this.showCoinSpray(), dispatch(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: e,
        tweenTime: this.tweenTime
      }
    }), dispatch(_dependency1.GameEvent.UPDATE_WIN_AMOUNT, {
      data: {
        value: e,
        tweenTime: this.tweenTime
      }
    });
  }, s.addClickAlertCompleteCb = function () {
    this.unschedule(this.addClickAlertCompleteCb), this.alert.once(_dependency2.NodeEventType.TOUCH_END, this.completedCB);
    var t = _dependency9.default.getData().bigwinAutoCloseTime;
    this.scheduleOnce(this.completedCB, t);
  }, s.playBounceTween = function (t, e) {
    _dependency2.tween(t).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(1.8, 1.8, 1.8)
    }).delay(.01).to(.1, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        e && e();
      }
    }).start();
  }, s.showCoinSpray = function () {
    var t = this,
      e = this.coinSprays.getComponentsInChildren(_dependency2.sp.Skeleton);
    this.coinSprays.active = !0;
    for (var i = function () {
        var i = e[n];
        0 == n ? (i.node.active = !0, i.setAnimation(0, "coin_01", !1)) : 1 == n ? t.scheduleOnce(function () {
          i.node.active = !0, i.setAnimation(0, "coin_02", !1);
        }, 1.3) : t.scheduleOnce(function () {
          var t = _dependency8.default.getRandomNumber(3, 6);
          i.node.active = !0, i.setAnimation(0, "radom_0" + t, !1), i.setCompleteListener(function () {
            var t = _dependency8.default.getRandomNumber(3, 6);
            i.setAnimation(0, "radom_0" + t, !1);
          });
        }, 2.8 + .5 * (n - 2));
      }, n = 0; n < e.length; n++) i();
  }, s.showWinResult = function () {
    var t = this.data.getData().gameState.noWinReward;
    this.showWinStatus = H.SHOW_BIGWIN_NUMBER_END, _dependency2.Tween.stopAllByTarget(this), this.tweenNumTween && this.tweenNumTween.stop(), this.totalWin.string = _dependency7.CmmSlotUtils.formatNumber(t), this.playBounceTween(this.totalWin.node), dispatch(_dependency1.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: t
    }), dispatch(_dependency1.GameEvent.QUICK_STOP_WIN_AMOUNT, {
      data: t
    }), this.unschedule(this.showWinResult), this.addClickAlertCompleteCb();
  }, s.showTreasureWin = function (t) {
    var e = this;
    this.totalWin.string = "0.00", this.showWinStatus = H.SHOW_BIGWIN, this.completedCB = function () {
      e.showWinStatus = H.BIGWIN_COMPLETED, t(), e.onClose();
    }, this.bbr.active = !0, App.globalAudio.pauseMusic(), App.globalAudio.isMusicOn = !1, this.playAnimation();
  }, s.onKeyDown = function (e) {
    if (t.prototype.onKeyDown.call(this, e), e.keyCode === _dependency2.KeyCode.SPACE) switch (this.showWinStatus) {
      case H.SHOW_BIGWIN_NUMBER:
        this.showWinResult();
        break;
      case H.SHOW_BIGWIN_NUMBER_END:
        this.completedCB();
    }
  }, s.addEvents = function () {}, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "alert", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(M.prototype, "bbr", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(M.prototype, "effectBg", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(M.prototype, "totalWin", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(M.prototype, "coinSprays", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = M)) || v));
_dependency2.cclegacy._RF.pop();
