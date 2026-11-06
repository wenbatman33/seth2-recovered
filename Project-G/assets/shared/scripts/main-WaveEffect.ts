// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as WaveEffect };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WaveEffect":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, a, n, r, o, s, p, c, v, l;
var w, h, u, f, d, y, P, g, m, _, b;
_dependency2.cclegacy._RF.push({}, "78635vcYy5ELqS6GWiYgK4W", "WaveEffect", void 0);
var S = _dependency2._decorator.ccclass,
  z = _dependency2._decorator.property;
_publish("WaveEffect", (w = S("WaveEffect"), h = z({
  displayName: "波的距離"
}), u = z({
  displayName: "波的移動速度"
}), f = z({
  displayName: "波的強度"
}), d = z({
  displayName: "波的開始位置"
}), w((g = _dependency.applyDecoratedDescriptor((P = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "waveDistance", g, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "waveSpeed", m, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "waveStrength", _, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "wavePosition", b, _dependency.assertThisInitialized(t)), t._trans = void 0, t._pass = void 0, t._handle = void 0, t.waveProp = new _dependency2.Vec4(), t;
  }
  _dependency.inheritsLoose(t, e);
  var r = t.prototype;
  return r.onLoad = function () {
    this._trans = this.node.getComponent(_dependency2.UITransform), this.waveProp.w = 200, this.waveProp.z = this.waveStrength, this._pass = this.node.getComponent(_dependency2.Sprite).material.passes[0], this._handle = this._pass.getHandle("waveFactor");
  }, r.startWaveEffect = function (e) {
    e && (this.wavePosition = e);
    var t = this._trans.contentSize,
      i = t.x,
      a = t.y,
      n = new _dependency2.Vec4();
    n.x = (.5 * i + this.wavePosition.x) / i, n.y = 1 - (.5 * a + this.wavePosition.y) / a, n.w = 0, this.waveProp.set(n.x, n.y, this.waveProp.z, n.w);
  }, r.update = function (e) {
    this.waveProp.w < 200 && (this.waveProp.w += e * this.waveSpeed, this.waveProp.w > this.waveDistance && (this.waveProp.w = 200), this._pass.setUniform(this._handle, this.waveProp));
  }, t;
}(_dependency2.Component)).prototype, "waveDistance", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .4;
  }
}), m = _dependency.applyDecoratedDescriptor(P.prototype, "waveSpeed", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), _ = _dependency.applyDecoratedDescriptor(P.prototype, "waveStrength", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .5;
  }
}), b = _dependency.applyDecoratedDescriptor(P.prototype, "wavePosition", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return _dependency2.v3(0, 0, 0);
  }
}), y = P)) || y));
_dependency2.cclegacy._RF.pop();
