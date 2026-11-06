// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as CompanyWaveEffect };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CompanyWaveEffect":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, a, n, r, s, o, p, l, c, u;
var v, w, h, d, f, y, m, _, b, g, P, z, H, S, N, W, q;
_dependency2.cclegacy._RF.push({}, "6cb62cHN4RMBZYKoc7SvcxK", "CompanyWaveEffect", void 0);
var C = _dependency2._decorator.ccclass,
  D = _dependency2._decorator.property;
_publish("CompanyWaveEffect", (v = C("CompanyWaveEffect"), w = D({
  displayName: "波的距離"
}), h = D({
  displayName: "波的移動速度"
}), d = D({
  displayName: "波的強度"
}), f = D({
  displayName: "波的開始位置"
}), y = D({
  displayName: "波的開始進度"
}), m = D({
  displayName: "波的頻率"
}), _ = D({
  displayName: "波的頻率"
}), v((P = _dependency.applyDecoratedDescriptor((g = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "waveDistance", P, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "waveSpeed", z, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "waveStrength", H, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "wavePosition", S, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "startW", N, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "waveFrequency", W, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "waveAmplitude", q, _dependency.assertThisInitialized(t)), t._trans = void 0, t._pass = void 0, t._handle = void 0, t._frequencyHandle = void 0, t._amplitudeHandle = void 0, t.waveProp = new _dependency2.Vec4(), t;
  }
  _dependency.inheritsLoose(t, e);
  var r = t.prototype;
  return r.onLoad = function () {
    this._trans = this.node.getComponent(_dependency2.UITransform), this.waveProp.w = 200, this.waveProp.z = this.waveStrength, this._pass = this.node.getComponent(_dependency2.Sprite).material.passes[0], this._handle = this._pass.getHandle("waveFactor"), this._frequencyHandle = this._pass.getHandle("waveFrequency"), this._amplitudeHandle = this._pass.getHandle("waveAmplitude");
  }, r.startWaveEffect = function (e) {
    e && (this.wavePosition = e);
    var t = this._trans.contentSize,
      i = t.x,
      a = t.y,
      n = new _dependency2.Vec4();
    n.x = (.5 * i + this.wavePosition.x) / i, n.y = 1 - (.5 * a + this.wavePosition.y) / a, n.w = this.startW, this.waveProp.set(n.x, n.y, this.waveProp.z, n.w), this._pass.setUniform(this._frequencyHandle, this.waveFrequency), this._pass.setUniform(this._amplitudeHandle, this.waveAmplitude);
  }, r.update = function (e) {
    this.waveProp.w < this.waveDistance && (this.waveProp.w += e * this.waveSpeed, this.waveProp.w > this.waveDistance && (this.waveProp.w = 200), this._pass.setUniform(this._handle, this.waveProp));
  }, t;
}(_dependency2.Component)).prototype, "waveDistance", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .4;
  }
}), z = _dependency.applyDecoratedDescriptor(g.prototype, "waveSpeed", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), H = _dependency.applyDecoratedDescriptor(g.prototype, "waveStrength", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .5;
  }
}), S = _dependency.applyDecoratedDescriptor(g.prototype, "wavePosition", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return _dependency2.v3(0, 0, 0);
  }
}), N = _dependency.applyDecoratedDescriptor(g.prototype, "startW", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .3;
  }
}), W = _dependency.applyDecoratedDescriptor(g.prototype, "waveFrequency", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 30;
  }
}), q = _dependency.applyDecoratedDescriptor(g.prototype, "waveAmplitude", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .05;
  }
}), b = g)) || b));
_dependency2.cclegacy._RF.pop();
