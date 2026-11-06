// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-CmmUtils";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency7 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency8 from "./g1012-GameConfigModel";
import * as _dependency9 from "./g1012-GameData";
import * as _dependency0 from "./g1012-GameEvent";
var _export;
export { _export as WinView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WinView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i, e, n, r, o, a, s, u, c, l, h, g, p, f, d, m, W, B, S, w, C, T, N, v;
var _, y, b, A, E, O, R, D, L, F, U, P, I, k;
_dependency2.cclegacy._RF.push({}, "3635fPTVhtCfYHPw7SD+9/h", "WinView", void 0);
var M,
  z = _dependency2._decorator.ccclass,
  H = _dependency2._decorator.property;
!function (t) {
  t[t.RUN_SCORE = 0] = "RUN_SCORE", t[t.RUN_SCORE_END = 1] = "RUN_SCORE_END", t[t.WAIT_CLOSE = 2] = "WAIT_CLOSE";
}(M || (M = {}));
_publish("WinView", (_ = z("WinView"), y = _dependency5.inject("alert", _dependency2.Node), b = _dependency5.inject("alert/totalWin", _dependency2.Label), A = H(_dependency2.sp.Skeleton), E = H(_dependency2.sp.Skeleton), O = H(_dependency2.Node), _(((k = function (t) {
  var _nativeConstructor = i;
  function i() {
    for (var i, e = arguments.length, o = new Array(e), a = 0; a < e; a++) o[a] = arguments[a];
    return i = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(i, "alert", L, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "totalWin", F, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "arrBg", U, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "arrFont", P, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "coinSprays", I, _dependency.assertThisInitialized(i)), i.totalWinNumber = 0, i.tweenNumTween = null, i.showWinStatus = null, i.currBigWinBg = null, i.currBigWinFont = null, i.currBigWinCoinSpray = null, i.playLoopCoinSpraysSchedule = null, i;
  }
  _dependency.inheritsLoose(i, t);
  var a = i.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, a.start = function () {
    this.init();
  }, a.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, i.getPrefabUrl = function () {
    return "prefabs/WinView";
  }, a.init = function () {
    this.setEventTouch();
  }, a.setEventTouch = function () {
    var t = this;
    this.onI(_dependency2.Input.EventType.KEY_DOWN, _dependency3.CmmUtils.debounce(function (e) {
      if (e.keyCode === _dependency2.KeyCode.SPACE) {
        if (!App.uiManager.isShow(i)) return;
        switch (t.showWinStatus) {
          case M.RUN_SCORE:
            t.directShowResult();
            break;
          case M.RUN_SCORE_END:
            t.removeAllTween();
            break;
          case M.WAIT_CLOSE:
        }
      }
    }));
  }, a.showCoinSpray = function (t) {
    var i = this,
      e = t.getComponentsInChildren(_dependency2.sp.Skeleton);
    t.active = !0;
    for (var n = function () {
        var t = e[r];
        0 == r ? (t.node.active = !0, t.setAnimation(0, "coin_01", !1)) : 1 == r ? i.scheduleOnce(function () {
          t.node.active = !0, t.setAnimation(0, "coin_02", !1);
        }, 1.3) : i.scheduleOnce(function () {
          var i = _dependency7.default.getRandomNumber(3, 6);
          t.node.active = !0, t.setAnimation(0, "radom_0" + i, !1), t.setCompleteListener(function () {
            var i = _dependency7.default.getRandomNumber(3, 6);
            t.setAnimation(0, "radom_0" + i, !1);
          });
        }, 2.8 + .5 * (r - 2));
      }, r = 0; r < e.length; r++) n();
  }, a.showWin = function (t, e) {
    var n = this;
    this.totalWinNumber = t;
    var r = this.data.setBigWinReach(t);
    if (r && r.level) {
      this.totalWin.string = t.toString(), this.totalWin.node.active = !0;
      var o = this.data.getData().definition.digital,
        a = {
          label: this.totalWin,
          start: 0,
          end: Number(_dependency6.CmmSlotUtils.formatNumber(t, !1, !1, o)),
          tweenTime: e,
          digital: o,
          useThousandsSeparator: !0,
          callback: this.directShowResult.bind(this)
        };
      this.tweenNumTween = _dependency6.CmmSlotUtils.tweenNum(a), this.showWinStatus = M.RUN_SCORE, this.currBigWinFont = this.arrFont[0], this.currBigWinBg = this.arrBg[0], this.currBigWinCoinSpray = this.coinSprays[0], this.currBigWinFont.node.active = !0, this.currBigWinBg.node.active = !0, this.currBigWinBg.clearTracks(), this.currBigWinBg.setToSetupPose(), this.currBigWinBg.setAnimation(0, "in", !1), this.currBigWinBg.setCompleteListener(function () {
        n.currBigWinBg.setCompleteListener(null), n.currBigWinBg.setAnimation(0, "loop", !0);
      }), this.currBigWinFont.clearTracks(), this.currBigWinFont.setToSetupPose(), this.currBigWinFont.setAnimation(0, "in", !1), this.currBigWinFont.setCompleteListener(function () {
        n.currBigWinFont.setCompleteListener(null), n.currBigWinFont.setAnimation(0, "loop", !0);
      }), this.alert.once(_dependency2.NodeEventType.TOUCH_END, this.directShowResult, this), App.globalAudio.pauseMusic(), this.playLoopCoinSpraysSchedule = function () {
        n.showCoinSpray(n.currBigWinCoinSpray);
      }, this.scheduleOnce(this.playLoopCoinSpraysSchedule, i.COIN_SPRAY_DELAY), dispatch(_dependency0.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency8.EBTM.WIN_LOOP,
          loop: !0
        }
      });
    }
  }, a.directShowResult = function () {
    var t = this;
    this.alert.off(_dependency2.NodeEventType.TOUCH_END, this.directShowResult), this.showWinStatus = M.RUN_SCORE_END, this.currBigWinBg && (this.currBigWinBg.setCompleteListener(null), this.currBigWinBg.setAnimation(0, "loop", !0)), this.currBigWinFont && (this.currBigWinFont.setCompleteListener(null), this.currBigWinFont.setAnimation(0, "loop", !0)), this.tweenNumTween && this.tweenNumTween.stop();
    var i = this.data.getData().definition.digital;
    this.totalWin.string = _dependency6.CmmSlotUtils.formatNumber(this.totalWinNumber, !1, !0, i), dispatch(_dependency0.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: this.data.getData().parser.currentGameState.totalWinnings
    }), _dependency2.tween(this.node).bindNodeState(false).delay(1).call(function () {
      t.alert.once(_dependency2.NodeEventType.TOUCH_END, t.removeAllTween, t);
    }).start();
    var e = _dependency8.default.getData().bigwinAutoCloseTime;
    _dependency2.tween(this.node).bindNodeState(false).delay(e).call(function () {
      t.removeAllTween();
    }).start();
  }, a.removeAllTween = function () {
    this.alert.off(_dependency2.NodeEventType.TOUCH_END, this.removeAllTween), _dependency2.Tween.stopAllByTarget(this.node), this.currBigWinBg && (this.currBigWinBg.clearTracks(), this.currBigWinBg.setToSetupPose(), this.currBigWinBg.node.active = !1), this.currBigWinFont && (this.currBigWinFont.clearTracks(), this.currBigWinFont.setToSetupPose(), this.currBigWinFont.node.active = !1), this.tweenNumTween && this.tweenNumTween.stop(), dispatch(_dependency0.GameEvent.STOP_BTM, {
      data: _dependency8.EBTM.WIN_LOOP
    }), App.globalAudio.resumeMusic(), this.coinSprays.forEach(function (t) {
      t.active = !1, t.children.forEach(function (t) {
        t.active = !1;
      });
    }), dispatch(_dependency0.GameEvent.SHOW_WIN_END), this.close();
  }, _dependency.createClass(i, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), i;
}(_dependency4.default)).COIN_SPRAY_DELAY = 2.5, L = _dependency.applyDecoratedDescriptor((D = k).prototype, "alert", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(D.prototype, "totalWin", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(D.prototype, "arrBg", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), P = _dependency.applyDecoratedDescriptor(D.prototype, "arrFont", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), I = _dependency.applyDecoratedDescriptor(D.prototype, "coinSprays", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), R = D)) || R));
_dependency2.cclegacy._RF.pop();
