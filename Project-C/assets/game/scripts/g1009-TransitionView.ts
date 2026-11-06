// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1009-GameConfigModel";
import * as _dependency6 from "./g1009-GameData";
import * as _dependency7 from "./g1009-GameEvent";
var _export;
export { _export as TransitionView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TransitionView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, i, e, o, a, s, r, c, u, p, h, l, f;
var d, S, T, v, y;
_dependency2.cclegacy._RF.push({}, "cf46aVALiNB1qFK0SbfIWDC", "TransitionView", void 0);
var I = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("TransitionView", (d = I("TransitionView"), S = _dependency4.inject("transitionSpine", _dependency2.sp.Skeleton), d((y = _dependency.applyDecoratedDescriptor((v = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
    return n = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "transitionSpine", y, _dependency.assertThisInitialized(n)), n;
  }
  _dependency.inheritsLoose(n, t);
  var s = n.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.init = function () {}, s.showTransitionIn = function (t) {
    var n = this;
    this.transitionSpine.node.active = !0, this.transitionSpine.skeletonData = this.data.getTransitionSpine("transition"), this.transitionSpine.setAnimation(0, "transition_in", !1), this.transitionSpine.setCompleteListener(function () {
      n.transitionSpine.node.active = !1;
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.TRANSITION
      }
    }), this.scheduleOnce(t, 1);
  }, s.showTransitionOut = function (t) {
    var n = this;
    this.transitionSpine.node.active = !0, this.transitionSpine.skeletonData = this.data.getTransitionSpine("transition"), this.transitionSpine.setAnimation(0, "transition_out", !1), this.transitionSpine.setCompleteListener(function () {
      n.transitionSpine.node.active = !1;
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.TRANSITION
      }
    }), this.scheduleOnce(t, 1);
  }, s.reset = function () {}, s.setData = function (t) {}, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {
    var t = this;
    this.on(_dependency7.GameEvent.SHOW_TRANSITION_IN, function (n) {
      t.showTransitionIn(n.data);
    }), this.on(_dependency7.GameEvent.SHOW_TRANSITION_OUT, function (n) {
      t.showTransitionOut(n.data);
    });
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), n;
}(_dependency3.default)).prototype, "transitionSpine", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = v)) || T));
_dependency2.cclegacy._RF.pop();
