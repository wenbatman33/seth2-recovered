// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, s, r;
var a;
_dependency2.cclegacy._RF.push({}, "539c1RLUZ1HfYSgRVHurL/Z", "FlashSpine", void 0);
var o = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", o("FlashSpine")(a = function (t) {
  var _nativeConstructor = i;
  function i() {
    for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
    return (e = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).duration = .5, e._median = 0, e._time = 0, e._material = null, e._skeleton = null, e;
  }
  _dependency.inheritsLoose(i, t);
  var n = i.prototype;
  return n.onLoad = function () {
    this._median = this.duration / 2, this._skeleton = this.node.getComponent(_dependency2.sp.Skeleton), this._material = this._skeleton.customMaterial, this._material.setProperty("u_rate", 1);
  }, n.update = function (t) {
    if (this._time > 0) {
      this._time -= t, this._time = this._time < 0 ? 0 : this._time;
      var e = 2 * Math.abs(this._time - this._median) / this.duration,
        i = this._skeleton._materialCache;
      for (var n in i) {
        i[n].setProperty("u_rate", e);
      }
    }
  }, n.clickFlash = function () {
    this._time = this.duration;
  }, i;
}(_dependency2.Component)) || a);
_dependency2.cclegacy._RF.pop();
