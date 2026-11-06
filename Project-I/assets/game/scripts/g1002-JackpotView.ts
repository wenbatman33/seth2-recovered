// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency8 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency9 from "./g1002-GameConfigModel";
import * as _dependency0 from "./g1002-GameData";
import * as _dependency1 from "./g1002-GameEvent";
import * as _dependency10 from "../../shared/scripts/slotFramework-ReplayModel";
var _export;
export { _export as EJackpotType };
var _export2;
export { _export2 as JackpotView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EJackpotType":
      _export = value;
      break;
    case "JackpotView":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, a, o, s, c, l, r, u, p, h, f, d, m, _, g, N, A, O, P, v, w, C;
var y, T, M, b, I, J, S, k, R, D, j, B, L;
_publish("EJackpotType", void 0), _dependency2.cclegacy._RF.push({}, "2c16aIEs0BMg59iTGaOAy4q", "JackpotView", void 0);
var U,
  E = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t.MINI = "jp-mini", t.MINOR = "jp-minor", t.MAJOR = "jp-major", t.GRAND = "jp-grand";
}(U || (U = _publish("EJackpotType", {})));
_publish("JackpotView", (y = E("JackpotView"), T = _dependency4.inject("alert", _dependency2.Node), M = _dependency4.inject("alert/effectBg", _dependency2.sp.Skeleton), b = _dependency4.inject("alert/effectFont", _dependency2.sp.Skeleton), I = _dependency4.inject("alert/totalWin", _dependency2.Label), J = _dependency4.inject("alert/coinSprays", _dependency2.Node), y((R = _dependency.applyDecoratedDescriptor((k = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", R, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectBg", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectFont", j, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWin", B, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinSprays", L, _dependency.assertThisInitialized(e)), e.jackpotFileNames = ["jp_mini", "jp_minor", "jp_major", "jp_grand"], e.jackpotTypes = [U.MINI, U.MINOR, U.MAJOR, U.GRAND], e.jackpotNamesMap = new Map(), e.completedCB = null, e.tweenNumTween = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {}, s.init = function () {
    for (var t = 0; t < this.jackpotFileNames.length; t++) this.jackpotNamesMap.set(this.jackpotTypes[t], this.jackpotFileNames[t]);
    this.closeNodes();
  }, s.showJp = function (t) {
    var e = this,
      i = this.data.getData().definition.digital,
      n = this.data.getData().gameState,
      a = n.totalWinnings,
      o = n.isJp,
      s = {
        label: this.totalWin,
        start: 0,
        end: a,
        tweenTime: 10,
        digital: i,
        useThousandsSeparator: !0
      };
    this.completedCB = function () {
      t(), e.closeAlert();
    }, this.alert.active = !0, this.playAnimation(o, 10), this.scheduleOnce(function () {
      e.totalWin.node.active = !0, e.tweenNumTween = _dependency7.CmmSlotUtils.tweenNum(s), e.alert.once(_dependency2.NodeEventType.TOUCH_END, e.showJpResult, e), dispatch(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: a,
          tweenTime: 10
        }
      }), dispatch(_dependency1.GameEvent.UPDATE_WIN_AMOUNT, {
        data: {
          value: a,
          tweenTime: 10
        }
      });
    }, 2);
  }, s.closeAlert = function () {
    this.closeNodes(), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.JP_POPUP_LOOP_1
    }), dispatch(_dependency1.GameEvent.STOP_BTM, {
      data: _dependency9.EBTM.JP_POPUP_LOOP_2
    }), App.globalAudio.resumeMusic();
  }, s.closeNodes = function () {
    this.alert.active = !1, this.effectBg.node.active = !1, this.effectFont.node.active = !1, this.totalWin.node.active = !1, this.coinSprays.active = !1, this.coinSprays.children.forEach(function (t) {
      t.active = !1;
    }), this.alert.targetOff(this), _dependency9.default.stopOnJpPrize && (_dependency5.default.active = !1);
  }, s.playAnimation = function (t, e) {
    var i = this,
      n = _dependency9.default.getData().bigwinAutoCloseTime,
      a = this.jackpotNamesMap.get(t),
      o = t == U.GRAND ? a + "_bg" : "jp_major_minor_mini_bg",
      s = t == U.MINI || t == U.MINOR ? _dependency9.EBTM.JP_POPUP_IN_1 : _dependency9.EBTM.JP_POPUP_IN_2,
      c = t == U.MINI || t == U.MINOR ? _dependency9.EBTM.JP_POPUP_LOOP_1 : _dependency9.EBTM.JP_POPUP_LOOP_2,
      l = this.getJpVocal(t);
    App.globalAudio.pauseMusic(), this.effectBg.node.active = !0, this.effectFont.node.active = !0, this.effectFont.skeletonData = this.data.getGameAlertSpine(a), this.effectFont.setAnimation(0, "in", !1), this.effectFont.setCompleteListener(function () {
      i.effectFont.setAnimation(0, "loop", !0);
    }), this.effectBg.skeletonData = this.data.getGameAlertSpine(o), this.effectBg.setAnimation(0, "loop", !0), dispatch(_dependency1.GameEvent.PLAY_BTM, {
      data: {
        url: l
      }
    }), dispatch(_dependency1.GameEvent.PLAY_BTM, {
      data: {
        url: s
      }
    }), this.scheduleOnce(function () {
      i.showCoinSpray(), dispatch(_dependency1.GameEvent.PLAY_BTM, {
        data: {
          url: c,
          loop: !0
        }
      });
    }, 2), n && this.scheduleOnce(this.showJpResult, n + 2 + e), this.scheduleOnce(this.addClickAlertCompleteCb, 2 + e);
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
  }, s.showJpResult = function () {
    var t = this.data.getData().gameState.totalWinnings;
    this.unschedule(this.completedCB), this.unschedule(this.showJpResult), this.tweenNumTween && this.tweenNumTween.stop(), this.totalWin.string = _dependency7.CmmSlotUtils.formatNumber(t), this.playBounceTween(this.totalWin.node), this.addClickAlertCompleteCb(), dispatch(_dependency1.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: t
    }), dispatch(_dependency1.GameEvent.QUICK_STOP_WIN_AMOUNT, {
      data: t
    });
  }, s.addClickAlertCompleteCb = function () {
    if (_dependency10.default.isReplay) {
      var t = _dependency9.default.getData().bigwinAutoCloseTime;
      this.scheduleOnce(this.completedCB, t);
    } else this.alert.once(_dependency2.NodeEventType.TOUCH_END, this.completedCB), this.unschedule(this.addClickAlertCompleteCb);
  }, s.getJpVocal = function (t) {
    switch (t) {
      case U.MINI:
        return _dependency9.EBTM.JP_MINI_VOCAL;
      case U.MINOR:
        return _dependency9.EBTM.JP_MINOR_VOCAL;
      case U.MAJOR:
        return _dependency9.EBTM.JP_MAJOR_VOCAL;
      case U.GRAND:
        return _dependency9.EBTM.JP_GRAND_VOCAL;
    }
  }, s.reset = function () {}, s.setData = function (t) {}, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {
    var t = this;
    this.on(_dependency1.GameEvent.SHOW_JP, function (e) {
      t.showJp(e.complete);
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "alert", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(k.prototype, "effectBg", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(k.prototype, "effectFont", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(k.prototype, "totalWin", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(k.prototype, "coinSprays", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = k)) || S));
_dependency2.cclegacy._RF.pop();
