// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as ShakeWaveEffect };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ShakeWaveEffect":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, r, a, i, n, s, o, c;
var l, h, p, u, d, f, g, v, y, b, _;
_dependency2.cclegacy._RF.push({}, "815abevjXdMcKbpdHxGHTMY", "ShakeWaveEffect", void 0);
var m = _dependency2._decorator.ccclass,
  S = _dependency2._decorator.property;
_publish("ShakeWaveEffect", (l = m("ShakeWaveEffect"), h = S({
  displayName: "抖動速度"
}), p = S({
  displayName: "抖動強度"
}), u = S({
  displayName: "水平方向"
}), d = S({
  displayName: "垂直方向"
}), l((v = _dependency.applyDecoratedDescriptor((g = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "speedFactor", v, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "strengthFactor", y, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "isHorizontal", b, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "isVertical", _, _dependency.assertThisInitialized(e)), e._trans = void 0, e._pass = void 0, e._speedHandle = void 0, e._strengthHandler = void 0, e.waveStrength = 0, e;
  }
  _dependency.inheritsLoose(e, t);
  var n = e.prototype;
  return n.onLoad = function () {
    this._pass = this.node.getComponent(_dependency2.Sprite).material.passes[0], this._speedHandle = this._pass.getHandle("speedFactor"), this._strengthHandler = this._pass.getHandle("strengthFactor"), this.waveStrength = 0, this._pass.setUniform(this._strengthHandler, this.strengthFactor);
  }, n.startWaveEffect = function (t) {
    this.waveStrength = 0;
  }, n.update = function (t) {
    this.waveStrength < this.strengthFactor && (this.waveStrength += .1 * t, this.waveStrength > this.strengthFactor && (this.waveStrength = .5));
  }, e;
}(_dependency2.Component)).prototype, "speedFactor", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .4;
  }
}), y = _dependency.applyDecoratedDescriptor(g.prototype, "strengthFactor", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .5;
  }
}), b = _dependency.applyDecoratedDescriptor(g.prototype, "isHorizontal", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), _ = _dependency.applyDecoratedDescriptor(g.prototype, "isVertical", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), f = g)) || f));
_dependency2.cclegacy._RF.pop();
