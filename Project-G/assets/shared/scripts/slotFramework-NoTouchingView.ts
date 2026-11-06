// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-UIView";
import * as _dependency4 from "./main-Decorators";
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
var e, n, o, r, i, c, u, a, s;
var l, p, f, h, y;
_dependency2.cclegacy._RF.push({}, "04c14KjGyBAgrMEUnn/4rgt", "NoTouchingView", void 0);
var g = _dependency2._decorator.ccclass;
_publish("default", (l = g("NoTouchingView"), p = _dependency4.inject("content", _dependency2.Node), l((y = _dependency.applyDecoratedDescriptor((h = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
    return e = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "content", y, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/view/NoTouchingView";
  };
  var i = e.prototype;
  return i.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, i.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e;
}(_dependency3.default)).prototype, "content", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), f = h)) || f));
_dependency2.cclegacy._RF.pop();
