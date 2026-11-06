// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./g1012-GameEvent";
var _export;
export { _export as TestTools };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TestTools":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, s, r, n, o, a, c;
var u, l, T, p;
_dependency2.cclegacy._RF.push({}, "b60906+z8hIM6zhQ/5W27Jc", "TestTools", void 0);
var f = _dependency2._decorator.ccclass,
  h = _dependency2._decorator.property;
_publish("TestTools", f("TestTools")((T = _dependency.applyDecoratedDescriptor((l = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "isTest01", T, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "isTest02", p, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var n = e.prototype;
  return n.start = function () {}, n.update = function (t) {
    this.isTest01 && (this.isTest01 = !1, dispatch(_dependency3.GameEvent.UPDATE_BAT_FEVERTIME_STATUS, {
      data: !0
    })), this.isTest02 && (this.isTest02 = !1, dispatch(_dependency3.GameEvent.UPDATE_BAT_FEVERTIME_STATUS, {
      data: !1
    }));
  }, e;
}(_dependency2.Component)).prototype, "isTest01", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), p = _dependency.applyDecoratedDescriptor(l.prototype, "isTest02", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), u = l)) || u);
_dependency2.cclegacy._RF.pop();
