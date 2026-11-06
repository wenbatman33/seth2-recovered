// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency7 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency8 from "./g1011-GameConfigModel";
import * as _dependency9 from "./g1011-GameData";
import * as _dependency0 from "./g1011-GameEvent";
import * as _dependency1 from "../../shared/scripts/slotFramework-ReplayModel";
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
var e, a, i, n, o, s, l, c, r, p, u, f, d, h, _, P, O, m, A, T, N, J, g, C, L;
var M, w, y, v, I, B, D, k, S, b, E, U;
_publish("EJackpotType", void 0), _dependency2.cclegacy._RF.push({}, "697c4ZJK2hHCpVKUIvmoHod", "JackpotView", void 0);
var R,
  j = _dependency2._decorator.ccclass;
!function (t) {
  t.MINI = "jp-mini", t.MINOR = "jp-minor", t.MAJOR = "jp-major", t.GRAND = "jp-grand";
}(R || (R = _publish("EJackpotType", {})));
_publish("JackpotView", (M = j("JackpotView"), w = _dependency4.inject("alert", _dependency2.Node), y = _dependency4.inject("alert/effectBg", _dependency2.sp.Skeleton), v = _dependency4.inject("alert/effectFont", _dependency2.sp.Skeleton), I = _dependency4.inject("alert/totalWin", _dependency2.Label), M(((U = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectBg", S, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectFont", b, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWin", E, _dependency.assertThisInitialized(e)), e.jackpotFileNames = ["jp_mini", "jp_minor", "jp_major", "jp_grand"], e.jackpotTypes = [R.MINI, R.MINOR, R.MAJOR, R.GRAND], e.jackpotNamesMap = new Map(), e.completedCB = null, e.tweenNumTween = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.init = function () {
    for (var t = 0; t < this.jackpotFileNames.length; t++) this.jackpotNamesMap.set(this.jackpotTypes[t], this.jackpotFileNames[t]);
    this.closeNodes();
  }, s.showJp = function (t) {
    var a = this,
      i = this.data.getData().definition.digital,
      n = this.data.getData().parser.currentGameState,
      o = n.totalWinnings,
      s = n.isJp,
      l = {
        label: this.totalWin,
        start: 0,
        end: o,
        tweenTime: 2.5,
        digital: i,
        useThousandsSeparator: !0,
        callback: function () {
          var n = +_dependency6.CmmSlotUtils.formatJPNumber(o, !1, !1, i);
          dispatch(_dependency0.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
            data: n
          }), _dependency2.tween(a).bindNodeState(false).delay(e.JP_AUTO_CLOSE_DELAY).call(function () {
            t && t(), a.closeAlert();
          }).start();
        }
      };
    this.totalWin.color = new _dependency2.Color(this.totalWin.color.r, this.totalWin.color.g, this.totalWin.color.b, 0), this.totalWin.node.active = !0, _dependency2.tween(this.totalWin.color).bindNodeState(false).to(.2, {
      a: 255
    }).start(), this.tweenNumTween = _dependency6.CmmSlotUtils.tweenJPNum(l), this.completedCB = function () {
      t && t(), a.closeAlert();
    }, this.alert.active = !0, this.alert.once(_dependency2.Node.EventType.TOUCH_END, this.showJpResult, this), this.playAnimation(s, 2.5);
  }, s.closeAlert = function () {
    this.closeNodes(), _dependency2.Tween.stopAllByTarget(this), this.tweenNumTween && this.tweenNumTween.stop(), this.completedCB && (this.completedCB = null), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.JP_POPUP_IN_1
    }), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.JP_POPUP_IN_2
    }), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.JP_POPUP_LOOP_1
    }), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.JP_POPUP_LOOP_2
    }), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.JP_MINI_VOCAL
    }), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.JP_MINOR_VOCAL
    }), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.JP_MAJOR_VOCAL
    }), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.JP_GRAND_VOCAL
    }), App.globalAudio.resumeMusic(), dispatch(_dependency0.GameEvent.SHOW_JP_END);
  }, s.closeNodes = function () {
    this.alert.active = !1, this.effectBg.node.active = !1, this.effectFont.node.active = !1, this.totalWin.node.active = !1, this.alert.targetOff(this), _dependency8.default.stopOnJpPrize && (_dependency5.default.active = !1);
  }, s.playAnimation = function (t, a) {
    var i = this,
      n = _dependency8.default.getData().filePaths.jackpotSpineDir,
      o = this.jackpotNamesMap.get(t),
      s = this.jackpotNamesMap.get(t) + "_bg";
    App.globalAudio.pauseMusic(), this.effectFont.skeletonData = _dependency7.LoadUtils.getDirSkeleton(this.data.module, n, o), this.effectFont.node.active = !0, this.effectFont.setAnimation(0, "in", !1), this.effectFont.setCompleteListener(function () {
      i.effectFont.setCompleteListener(null), i.effectFont.setAnimation(0, "loop", !0);
    }), this.effectBg.skeletonData = _dependency7.LoadUtils.getDirSkeleton(this.data.module, n, s), this.effectBg.node.active = !0, this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      i.effectBg.setCompleteListener(null), i.effectBg.setAnimation(0, "loop", !0);
    });
    var l = this.isLowJackpot(t) ? _dependency8.EBTM.JP_POPUP_IN_1 : _dependency8.EBTM.JP_POPUP_IN_2,
      c = this.isLowJackpot(t) ? _dependency8.EBTM.JP_POPUP_LOOP_1 : _dependency8.EBTM.JP_POPUP_LOOP_2;
    dispatch(_dependency0.GameEvent.PLAY_BTM, {
      data: {
        url: l
      }
    });
    var p = this.getJpVocal(t);
    p && _dependency2.tween(this).bindNodeState(false).delay(e.JP_VOCAL_DELAY).call(function () {
      dispatch(_dependency0.GameEvent.PLAY_BTM, {
        data: {
          url: p
        }
      });
    }).start(), _dependency2.tween(this).bindNodeState(false).delay(e.JP_POPUP_LOOP_DELAY).call(function () {
      dispatch(_dependency0.GameEvent.PLAY_BTM, {
        data: {
          url: c,
          loop: !0
        }
      });
    }).start();
  }, s.isLowJackpot = function (t) {
    return t === R.MINI || t === R.MINOR;
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
  }, s.showJpResult = function () {
    var t,
      e = this.data.getData().parser.currentGameState.totalWinnings,
      a = this.data.getData().definition.digital;
    this.unscheduleAllCallbacks(), null == (t = this.tweenNumTween) || t.stop(), this.totalWin.string = _dependency6.CmmSlotUtils.formatJPNumber(e, !1, !0, a), this.playBounceTween(this.totalWin.node);
    var i = +_dependency6.CmmSlotUtils.formatJPNumber(e, !1, !1, a);
    dispatch(_dependency0.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: i
    }), dispatch(_dependency0.GameEvent.QUICK_STOP_WIN_AMOUNT, {
      data: i
    }), this.addClickAlertCompleteCb();
  }, s.addClickAlertCompleteCb = function () {
    var t = this,
      a = _dependency8.default.getData().bigwinAutoCloseTime,
      i = _dependency1.default.isReplay,
      n = !!i || a > 0,
      o = i ? e.REPLAY_AUTO_CLOSE_TIME : a;
    n && _dependency2.tween(this).bindNodeState(false).delay(o).call(function () {
      t.completedCB && t.completedCB();
    }).start(), this.alert.once(_dependency2.NodeEventType.TOUCH_END, this.completedCB);
  }, s.getJpVocal = function (t) {
    switch (t) {
      case R.MINI:
        return _dependency8.EBTM.JP_MINI_VOCAL;
      case R.MINOR:
        return _dependency8.EBTM.JP_MINOR_VOCAL;
      case R.MAJOR:
        return _dependency8.EBTM.JP_MAJOR_VOCAL;
      case R.GRAND:
        return _dependency8.EBTM.JP_GRAND_VOCAL;
      default:
        return null;
    }
  }, s.addEvents = function () {
    var e = this;
    this.on(_dependency0.GameEvent.SHOW_JP, function (t) {
      e.showJp(t.complete);
    }), t.prototype.addEvents.call(this);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), e;
}(_dependency3.default)).JP_VOCAL_DELAY = 1, U.JP_POPUP_LOOP_DELAY = 2, U.JP_AUTO_CLOSE_DELAY = 5, U.REPLAY_AUTO_CLOSE_TIME = 2, k = _dependency.applyDecoratedDescriptor((D = U).prototype, "alert", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = _dependency.applyDecoratedDescriptor(D.prototype, "effectBg", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), b = _dependency.applyDecoratedDescriptor(D.prototype, "effectFont", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = _dependency.applyDecoratedDescriptor(D.prototype, "totalWin", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = D)) || B));
_dependency2.cclegacy._RF.pop();
