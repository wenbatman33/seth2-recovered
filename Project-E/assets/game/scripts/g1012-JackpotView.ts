// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency8 from "./g1012-GameConfigModel";
import * as _dependency9 from "./g1012-GameData";
import * as _dependency0 from "./g1012-GameEvent";
import * as _dependency1 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-LoadUtils";
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
var e, a, i, n, o, s, l, c, r, p, u, f, d, h, _, m, P, O, T, N, A, g, M, C, J;
var w, y, B, v, I, L, S, k, D, R, b, E;
_publish("EJackpotType", void 0), _dependency2.cclegacy._RF.push({}, "2c16aIEs0BMg59iTGaOAy4q", "JackpotView", void 0);
var j,
  U = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t.MINI = "jp-mini", t.MINOR = "jp-minor", t.MAJOR = "jp-major", t.GRAND = "jp-grand";
}(j || (j = _publish("EJackpotType", {})));
_publish("JackpotView", (w = U("JackpotView"), y = _dependency4.inject("alert", _dependency2.Node), B = _dependency4.inject("alert/effectBg", _dependency2.sp.Skeleton), v = _dependency4.inject("alert/effectFont", _dependency2.sp.Skeleton), I = _dependency4.inject("alert/totalWin", _dependency2.Label), w(((E = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectBg", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectFont", R, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWin", b, _dependency.assertThisInitialized(e)), e.jackpotFileNames = ["jp_mini", "jp_minor", "jp_major", "jp_grand"], e.jackpotTypes = [j.MINI, j.MINOR, j.MAJOR, j.GRAND], e.jackpotNamesMap = new Map(), e.completedCB = null, e.tweenNumTween = null, e;
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
    var e = this,
      a = this.data.getData().definition.digital,
      i = this.data.getData().parser.currentGameState,
      n = i.localRules && Number.isFinite(i.jpWinnings) ? i.jpWinnings : i.totalWinnings,
      o = i.isJp,
      s = +_dependency7.CmmSlotUtils.formatJPNumber(i.totalWinnings, !1, !1, a),
      l = {
        label: this.totalWin,
        start: 0,
        end: n,
        tweenTime: 10,
        digital: a,
        useThousandsSeparator: !0
      };
    this.totalWin.node.active = !1, this.completedCB = function () {
      t && t(), e.closeAlert();
    }, this.alert.active = !0, this.playAnimation(o, 10), _dependency2.tween(this).bindNodeState(false).delay(2).call(function () {
      e.totalWin.node.active = !0, e.alert.once(_dependency2.NodeEventType.TOUCH_END, e.showJpResult, e), dispatch(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: s,
          tweenTime: 10
        }
      }), e.tweenNumTween = _dependency7.CmmSlotUtils.tweenJPNum(l);
    }).start();
  }, s.closeAlert = function () {
    this.closeNodes(), _dependency2.Tween.stopAllByTarget(this), this.tweenNumTween && this.tweenNumTween.stop(), this.completedCB && (this.completedCB = null), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.JACKPOT_WIN
    }), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.JP_POPUP_LOOP_1
    }), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.JP_POPUP_LOOP_2
    }), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.JP_POPUP_IN_1
    }), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.JP_POPUP_IN_2
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
    this.alert.active = !1, this.effectBg.node.active = !1, this.effectFont.node.active = !1, this.totalWin.node.active = !1, _dependency2.Tween.stopAllByTarget(this.totalWin.node), this.totalWin.node.setScale(1, 1, 1), this.alert.targetOff(this), _dependency8.default.stopOnJpPrize && (_dependency5.default.active = !1);
  }, s.playAnimation = function (t, e) {
    var a = this,
      i = _dependency8.default.getData().filePaths.jackpotSpineDir,
      n = this.jackpotNamesMap.get(t),
      o = this.jackpotNamesMap.get(t) + "_bg",
      s = t == j.MINI || t == j.MINOR ? _dependency8.EBTM.JP_POPUP_IN_1 : _dependency8.EBTM.JP_POPUP_IN_2,
      l = t == j.MINI || t == j.MINOR ? _dependency8.EBTM.JP_POPUP_LOOP_1 : _dependency8.EBTM.JP_POPUP_LOOP_2,
      c = this.getJpVocal(t);
    App.globalAudio.pauseMusic(), dispatch(_dependency0.GameEvent.PLAY_BTM, {
      data: {
        url: c
      }
    }), dispatch(_dependency0.GameEvent.PLAY_BTM, {
      data: {
        url: s
      }
    }), this.effectFont.skeletonData = _dependency10.LoadUtils.getDirSkeleton(this.data.module, i, n), this.effectFont.node.active = !0, this.effectFont.setAnimation(0, "in", !1), this.effectFont.setCompleteListener(function () {
      a.effectFont.setCompleteListener(null), a.effectFont.setAnimation(0, "loop", !0);
    }), this.effectBg.skeletonData = _dependency10.LoadUtils.getDirSkeleton(this.data.module, i, o), this.effectBg.node.active = !0, this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      a.effectBg.setCompleteListener(null), a.effectBg.setAnimation(0, "loop", !0);
    }), _dependency2.tween(this).bindNodeState(false).delay(2).call(function () {
      dispatch(_dependency0.GameEvent.PLAY_BTM, {
        data: {
          url: l,
          loop: !0
        }
      });
    }).start(), _dependency2.tween(this).bindNodeState(false).delay(2 + e).call(function () {
      a.playBounceTween(a.totalWin.node), a.addClickAlertCompleteCb();
    }).start();
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
    var localStage = this.data.getData().parser.currentGameState,
      t = localStage.localRules && Number.isFinite(localStage.jpWinnings) ? localStage.jpWinnings : localStage.totalWinnings,
      e = this.data.getData().definition.digital;
    _dependency2.Tween.stopAllByTarget(this), this.tweenNumTween && this.tweenNumTween.stop(), this.totalWin.string = _dependency7.CmmSlotUtils.formatJPNumber(t, !1, !0, e), this.playBounceTween(this.totalWin.node), this.addClickAlertCompleteCb();
    var a = +_dependency7.CmmSlotUtils.formatJPNumber(localStage.totalWinnings, !1, !1, e);
    dispatch(_dependency0.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: a
    });
  }, s.addClickAlertCompleteCb = function () {
    var t = this,
      a = _dependency8.default.getData().bigwinAutoCloseTime,
      i = _dependency1.default.isReplay;
    _dependency2.Tween.stopAllByTarget(this);
    var n = !!i || a > 0,
      o = i ? e.REPLAY_AUTO_CLOSE_TIME : a;
    n && _dependency2.tween(this).bindNodeState(false).delay(o).call(function () {
      t.completedCB && t.completedCB();
    }).start(), this.alert.off(_dependency2.NodeEventType.TOUCH_END, this.showJpResult, this), this.alert.once(_dependency2.NodeEventType.TOUCH_END, this.completedCB, this);
  }, s.getJpVocal = function (t) {
    switch (t) {
      case j.MINI:
        return _dependency8.EBTM.JP_MINI_VOCAL;
      case j.MINOR:
        return _dependency8.EBTM.JP_MINOR_VOCAL;
      case j.MAJOR:
        return _dependency8.EBTM.JP_MAJOR_VOCAL;
      case j.GRAND:
        return _dependency8.EBTM.JP_GRAND_VOCAL;
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
}(_dependency3.default)).REPLAY_AUTO_CLOSE_TIME = 2, k = _dependency.applyDecoratedDescriptor((S = E).prototype, "alert", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(S.prototype, "effectBg", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(S.prototype, "effectFont", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), b = _dependency.applyDecoratedDescriptor(S.prototype, "totalWin", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = S)) || L));
_dependency2.cclegacy._RF.pop();
