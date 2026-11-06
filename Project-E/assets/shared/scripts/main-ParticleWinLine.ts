// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-SlotPrefabLineAnimation";
var _export;
export { _export as ParticleWinLine };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ParticleWinLine":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i, t, r, n, a, o, l, u;
var f, s, c, b, p, h, g, m, y, L, v, P, A, D, w;
_dependency2.cclegacy._RF.push({}, "5c30ci4WAhBrbFCRHI9SgRg", "ParticleWinLine", void 0);
var z = _dependency2._decorator.ccclass,
  d = _dependency2._decorator.property,
  C = _dependency2._decorator.menu;
_publish("ParticleWinLine", (f = z("ParticleWinLine"), s = C("Greensock/gsap/particle-win-line"), c = d(_dependency3.SlotPrefabLineAnimation), b = d(_dependency3.SlotPrefabLineAnimation), f(p = s((g = _dependency.applyDecoratedDescriptor((h = function (e) {
  var _nativeConstructor = i;
  function i() {
    for (var i, t = arguments.length, a = new Array(t), o = 0; o < t; o++) a[o] = arguments[o];
    return i = Reflect.construct(e, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(i, "leftPrefabLineAnimation", g, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "rightPrefabLineAnimation", m, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "leftGenerateNumber", y, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "rightGenerateNumber", L, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "leftCurviness", v, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "rightCurviness", P, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "generateDelay", A, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "leftDuration", D, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "rightDuration", w, _dependency.assertThisInitialized(i)), i;
  }
  _dependency.inheritsLoose(i, e);
  var a = i.prototype;
  return a.setLeftLine = function (e) {
    if (this.leftPrefabLineAnimation) for (var i = 0; i < this.leftGenerateNumber; i++) this.leftPrefabLineAnimation.startAnimation({
      delay: i * this.generateDelay,
      path: e,
      duration: this.leftDuration,
      curviness: this.leftCurviness
    });
  }, a.setRightLine = function (e) {
    if (this.rightPrefabLineAnimation) for (var i = 0; i < this.rightGenerateNumber; i++) this.rightPrefabLineAnimation.startAnimation({
      delay: i * this.generateDelay,
      path: e,
      duration: this.rightDuration,
      curviness: this.rightCurviness
    });
  }, i;
}(_dependency2.Component)).prototype, "leftPrefabLineAnimation", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = _dependency.applyDecoratedDescriptor(h.prototype, "rightPrefabLineAnimation", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = _dependency.applyDecoratedDescriptor(h.prototype, "leftGenerateNumber", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), L = _dependency.applyDecoratedDescriptor(h.prototype, "rightGenerateNumber", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), v = _dependency.applyDecoratedDescriptor(h.prototype, "leftCurviness", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .25;
  }
}), P = _dependency.applyDecoratedDescriptor(h.prototype, "rightCurviness", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .25;
  }
}), A = _dependency.applyDecoratedDescriptor(h.prototype, "generateDelay", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .02;
  }
}), D = _dependency.applyDecoratedDescriptor(h.prototype, "leftDuration", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 3;
  }
}), w = _dependency.applyDecoratedDescriptor(h.prototype, "rightDuration", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 3;
  }
}), p = h)) || p) || p));
_dependency2.cclegacy._RF.pop();
