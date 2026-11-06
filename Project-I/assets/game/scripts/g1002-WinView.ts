// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-CmmUtils";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency7 from "./g1002-GameConfigModel";
import * as _dependency8 from "./g1002-GameData";
import * as _dependency9 from "./g1002-GameEvent";
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
var i, e, n, r, o, s, a, u, l, c, h, g, p, W, f, B, d, m, w, T, N, S, C;
var _, b, v, E, A, y, O, R, D, F, U;
_dependency2.cclegacy._RF.push({}, "3635fPTVhtCfYHPw7SD+9/h", "WinView", void 0);
var L,
  P = _dependency2._decorator.ccclass,
  I = _dependency2._decorator.property;
!function (t) {
  t[t.RUN_SCORE = 0] = "RUN_SCORE", t[t.RUN_SCORE_END = 1] = "RUN_SCORE_END", t[t.WAIT_CLOSE = 2] = "WAIT_CLOSE";
}(L || (L = {}));
_publish("WinView", (_ = P("WinView"), b = _dependency5.inject("alert", _dependency2.Node), v = _dependency5.inject("alert/totalWin", _dependency2.Label), E = I(_dependency2.sp.Skeleton), A = I(_dependency2.sp.Skeleton), _((R = _dependency.applyDecoratedDescriptor((O = function (t) {
  var _nativeConstructor = i;
  function i() {
    for (var i, e = arguments.length, o = new Array(e), s = 0; s < e; s++) o[s] = arguments[s];
    return i = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(i, "alert", R, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "totalWin", D, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "arrBg", F, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "arrFont", U, _dependency.assertThisInitialized(i)), i.totalWinNumber = 0, i.tweenNumTween = null, i.showWinStatus = null, i.currBigWinBg = null, i.currBigWinFont = null, i;
  }
  _dependency.inheritsLoose(i, t);
  var s = i.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, i.getPrefabUrl = function () {
    return "prefabs/WinView";
  }, s.init = function () {
    this.setEventTouch();
  }, s.setEventTouch = function () {
    var t = this;
    this.onI(_dependency2.Input.EventType.KEY_DOWN, _dependency3.CmmUtils.debounce(function (e) {
      if (e.keyCode === _dependency2.KeyCode.SPACE) {
        if (!App.uiManager.isShow(i)) return;
        switch (t.showWinStatus) {
          case L.RUN_SCORE:
            t.directShowResult();
            break;
          case L.RUN_SCORE_END:
            t.removeAllTween();
            break;
          case L.WAIT_CLOSE:
        }
      }
    }));
  }, s.showWin = function (t, i) {
    var e = this;
    this.totalWinNumber = t;
    var n = this.data.setBigWinReach(t);
    if (n && n.level) {
      this.totalWin.string = t.toString(), this.totalWin.node.active = !0;
      var r = this.data.getData().definition.digital,
        o = {
          label: this.totalWin,
          start: 0,
          end: Number(_dependency6.CmmSlotUtils.formatNumber(t, !1, !1, r)),
          tweenTime: i,
          digital: r,
          useThousandsSeparator: !0,
          callback: this.directShowResult.bind(this)
        };
      this.tweenNumTween = _dependency6.CmmSlotUtils.tweenNum(o), this.showWinStatus = L.RUN_SCORE, this.currBigWinFont = this.arrFont[0], this.currBigWinBg = this.arrBg[0], this.currBigWinFont.node.active = !0, this.currBigWinBg.node.active = !0, this.currBigWinBg.clearTracks(), this.currBigWinBg.setToSetupPose(), this.currBigWinBg.setAnimation(0, "in", !1), this.currBigWinBg.setCompleteListener(function () {
        e.currBigWinBg.setCompleteListener(null), e.currBigWinBg.setAnimation(0, "loop", !0);
      }), this.currBigWinFont.clearTracks(), this.currBigWinFont.setToSetupPose(), this.currBigWinFont.setAnimation(0, "in", !1), this.currBigWinFont.setCompleteListener(function () {
        e.currBigWinFont.setCompleteListener(null), e.currBigWinFont.setAnimation(0, "loop", !0);
      }), this.alert.once(_dependency2.NodeEventType.TOUCH_END, this.directShowResult, this), App.globalAudio.pauseMusic(), dispatch(_dependency9.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency7.EBTM.WIN_LOOP,
          loop: !0
        }
      });
    }
  }, s.directShowResult = function () {
    var t = this;
    this.alert.off(_dependency2.NodeEventType.TOUCH_END, this.directShowResult), this.showWinStatus = L.RUN_SCORE_END, this.currBigWinBg && (this.currBigWinBg.setCompleteListener(null), this.currBigWinBg.setAnimation(0, "loop", !0)), this.currBigWinFont && (this.currBigWinFont.setCompleteListener(null), this.currBigWinFont.setAnimation(0, "loop", !0)), this.tweenNumTween && this.tweenNumTween.stop();
    var i = this.data.getData().definition.digital;
    this.totalWin.string = _dependency6.CmmSlotUtils.formatNumber(this.totalWinNumber, !1, !0, i), dispatch(_dependency9.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: this.data.getData().parser.currentGameState.totalWinnings
    }), _dependency2.tween(this.node).bindNodeState(false).delay(1).call(function () {
      t.alert.once(_dependency2.NodeEventType.TOUCH_END, t.removeAllTween, t);
    }).start();
    var e = _dependency7.default.getData().bigwinAutoCloseTime;
    _dependency2.tween(this.node).bindNodeState(false).delay(e).call(function () {
      t.removeAllTween();
    }).start();
  }, s.removeAllTween = function () {
    this.alert.off(_dependency2.NodeEventType.TOUCH_END, this.removeAllTween), _dependency2.Tween.stopAllByTarget(this.node), this.currBigWinBg && (this.currBigWinBg.clearTracks(), this.currBigWinBg.setToSetupPose(), this.currBigWinBg.node.active = !1), this.currBigWinFont && (this.currBigWinFont.clearTracks(), this.currBigWinFont.setToSetupPose(), this.currBigWinFont.node.active = !1), this.tweenNumTween && this.tweenNumTween.stop(), dispatch(_dependency9.GameEvent.STOP_BTM, {
      data: _dependency7.EBTM.WIN_LOOP
    }), App.globalAudio.resumeMusic(), dispatch(_dependency9.GameEvent.SHOW_WIN_END), this.close();
  }, _dependency.createClass(i, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), i;
}(_dependency4.default)).prototype, "alert", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(O.prototype, "totalWin", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(O.prototype, "arrBg", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), U = _dependency.applyDecoratedDescriptor(O.prototype, "arrFont", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), y = O)) || y));
_dependency2.cclegacy._RF.pop();
