// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1008-GameData";
import * as _dependency6 from "./g1008-GameEvent";
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
var n, i, e, o, s, a, r, c, u, l, f, p, h;
var d, v, y, T, w;
_dependency2.cclegacy._RF.push({}, "0e3f3WYpXxDk5DYIuIC4J4U", "TransitionView", void 0);
var S = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("TransitionView", (d = S("TransitionView"), v = _dependency4.inject("transitionSpine", _dependency2.sp.Skeleton), d((w = _dependency.applyDecoratedDescriptor((T = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
    return n = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "transitionSpine", w, _dependency.assertThisInitialized(n)), n;
  }
  _dependency.inheritsLoose(n, t);
  var a = n.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, a.start = function () {
    this.init();
  }, a.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, a.init = function () {}, a.showTransitionIn = function (t) {
    this.scheduleOnce(t, 0);
  }, a.showTransitionOut = function (t) {
    this.scheduleOnce(t, 0);
  }, a.reset = function () {}, a.setData = function (t) {}, a.show = function () {
    this.node.active = !0;
  }, a.hide = function () {
    this.node.active = !1, this.transitionSpine.node.scale = _dependency2.v3(1, 1, 1), this.transitionSpine.node.angle = 0;
  }, a.addEvents = function () {
    var t = this;
    this.on(_dependency6.GameEvent.SHOW_TRANSITION_IN, function (n) {
      t.showTransitionIn(n.data);
    }), this.on(_dependency6.GameEvent.SHOW_TRANSITION_OUT, function (n) {
      t.showTransitionOut(n.data);
    });
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), n;
}(_dependency3.default)).prototype, "transitionSpine", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = T)) || y));
_dependency2.cclegacy._RF.pop();
