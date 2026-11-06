// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as WaveSpineEffect };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WaveSpineEffect":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, a, n, r, o, s, p, c, l, v;
var u, w, f, h, d, y, m, P, b, g, S;
_dependency2.cclegacy._RF.push({}, "da8b4a+r7dFqpLwugndcZIG", "WaveSpineEffect", void 0);
var _ = _dependency2._decorator.ccclass,
  z = _dependency2._decorator.property;
_publish("WaveSpineEffect", (u = _("WaveSpineEffect"), w = z({
  displayName: "波的距離"
}), f = z({
  displayName: "波的移動速度"
}), h = z({
  displayName: "波的強度"
}), d = z({
  displayName: "波的開始位置"
}), u((P = _dependency.applyDecoratedDescriptor((m = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "waveDistance", P, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "waveSpeed", b, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "waveStrength", g, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "wavePosition", S, _dependency.assertThisInitialized(t)), t._trans = void 0, t._pass = void 0, t._handle = void 0, t.waveProp = new _dependency2.Vec4(), t._material = null, t;
  }
  _dependency.inheritsLoose(t, e);
  var r = t.prototype;
  return r.onLoad = function () {
    this._trans = this.node.getComponent(_dependency2.UITransform), this.waveProp.w = 200, this.waveProp.z = this.waveStrength;
    var e = this.node.getComponent(_dependency2.sp.Skeleton);
    this._material = e.customMaterial;
  }, r.start = function () {
    this.startWaveEffect(_dependency2.v3(0, 0, 0));
  }, r.startWaveEffect = function (e) {
    e && (this.wavePosition = e);
    var t = this._trans.contentSize,
      i = t.x,
      a = t.y,
      n = new _dependency2.Vec4();
    n.x = (.5 * i + this.wavePosition.x) / i, n.y = 1 - (.5 * a + this.wavePosition.y) / a, n.w = .3, this.waveProp.set(n.x, n.y, this.waveProp.z, n.w);
  }, r.update = function (e) {
    this.waveProp.w < 1 && (this.waveProp.w > this.waveDistance && (this.waveProp.w = 0), this._material.setProperty("waveFactor", this.waveProp));
  }, t;
}(_dependency2.Component)).prototype, "waveDistance", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .4;
  }
}), b = _dependency.applyDecoratedDescriptor(m.prototype, "waveSpeed", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), g = _dependency.applyDecoratedDescriptor(m.prototype, "waveStrength", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .5;
  }
}), S = _dependency.applyDecoratedDescriptor(m.prototype, "wavePosition", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return _dependency2.v3(0, 0, 0);
  }
}), y = m)) || y));
_dependency2.cclegacy._RF.pop();
