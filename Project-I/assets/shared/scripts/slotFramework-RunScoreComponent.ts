// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-CmmUtils";
import * as _dependency4 from "./main-UIView";
import * as _dependency5 from "./slotFramework-CmmSlotUtils";
import * as _dependency6 from "./slotFramework-SlotFrameworkEvent";
var _export;
export { _export as ERunScoreStatus };
var _export2;
export { _export2 as RunScoreComponent };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ERunScoreStatus":
      _export = value;
      break;
    case "RunScoreComponent":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, s, i, a, u, o, r, c, l, h, S;
var d;
_publish("ERunScoreStatus", void 0), _dependency2.cclegacy._RF.push({}, "2e10f/+JsNOcYn/Hx6g5/8F", "RunScoreComponent", void 0);
var N,
  E = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t.NONE = "NONE", t.RUN_SCORE = "RUN_SCORE", t.RUN_SCORE_END = "RUN_SCORE_END", t.WAIT_CLOSE = "WAIT_CLOSE";
}(N || (N = _publish("ERunScoreStatus", {})));
_publish("RunScoreComponent", E("RunScoreComponent")(d = function (t) {
  var _nativeConstructor = s;
  function s() {
    for (var e, n = arguments.length, s = new Array(n), i = 0; i < n; i++) s[i] = arguments[i];
    return (e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this)._status = N.NONE, e.tweenNumTween = null, e.currentLabel = null, e.totalScore = 0, e.digital = 0, e.closeTime = 0, e;
  }
  _dependency.inheritsLoose(s, t);
  var i = s.prototype;
  return i.start = function () {
    this.node.on(_dependency2.NodeEventType.TOUCH_END, this.handleTouchEnd, this), this.onI(_dependency2.Input.EventType.KEY_UP, _dependency3.CmmUtils.debounce(this.handleKeyDown.bind(this)));
  }, i.runScore = function (t, e, n, s, i, a) {
    var u = this;
    this.status = N.RUN_SCORE, this.currentLabel = t, this.currentLabel.node.active = !0, this.totalScore = e, this.digital = s, this.closeTime = i;
    var o = {
      label: this.currentLabel,
      start: 0,
      end: this.totalScore,
      tweenTime: n,
      digital: this.digital,
      useThousandsSeparator: !0,
      callback: function () {
        u.updateStatus(N.RUN_SCORE_END);
      }
    };
    this.tweenNumTween = _dependency5.CmmSlotUtils.tweenNum(o), a && dispatch(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: Number(_dependency5.CmmSlotUtils.formatNumber(this.totalScore, !1, !1, this.digital)),
        tweenTime: n
      }
    });
  }, i.handleTouchEnd = function () {
    this.updateStatusBasedOnCurrent();
  }, i.handleKeyDown = function (t) {
    t.keyCode === _dependency2.KeyCode.SPACE && this.updateStatusBasedOnCurrent();
  }, i.updateStatusBasedOnCurrent = function () {
    switch (this.status) {
      case N.RUN_SCORE:
        this.updateStatus(N.RUN_SCORE_END);
        break;
      case N.RUN_SCORE_END:
        this.updateStatus(N.WAIT_CLOSE);
    }
  }, i.updateStatus = function (t) {
    var e = this;
    this.status !== t && (this.status = t, this.tweenNumTween && this.tweenNumTween.stop(), t === N.RUN_SCORE_END && (this.currentLabel.string = _dependency5.CmmSlotUtils.formatNumber(this.totalScore, !1, !0, this.digital), _dependency2.tween(this.node).bindNodeState(false).delay(this.closeTime).call(function () {
      e.updateStatus(N.WAIT_CLOSE);
    }).start()), dispatch(t));
  }, _dependency.createClass(s, [{
    key: "status",
    get: function () {
      return this._status;
    },
    set: function (t) {
      this._status = t;
    }
  }]), s;
}(_dependency4.default)) || d);
_dependency2.cclegacy._RF.pop();
