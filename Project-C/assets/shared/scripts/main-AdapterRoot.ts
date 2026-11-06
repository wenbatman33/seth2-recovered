// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Adapter";
import * as _dependency4 from "./main-AdapterEvent";
import * as _dependency5 from "./main-Macros";
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
var e, i, h, n, r, o, s, a;
var c;
_dependency2.cclegacy._RF.push({}, "f32e31t7khMV4GDh7KIqIvX", "AdapterRoot", void 0);
var u = _dependency2._decorator.ccclass,
  d = (_dependency2._decorator.property, _dependency2._decorator.executeInEditMode),
  p = _dependency2._decorator.menu;
_publish("default", u(c = d(!0)(c = p("Quick適配元件/AdapterRoot")(c = function (t) {
  var _nativeConstructor = i;
  function i() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(i, t), i.prototype.onChangeSize = function () {
    var t = _dependency2.screen.windowSize,
      e = t.width / this.width,
      i = t.height / this.height,
      h = Math.min(e, i),
      o = this.width * h,
      c = this.height * h;
    e = t.width / o, i = t.height / c;
    var u = Math.max(e, i);
    _dependency2.view.getVisibleSize().width, _dependency2.view.getVisibleSize().height;
    this.width = o * u, this.height = c * u;
    var d = t.width / t.height > 1;
    _dependency5.Macro.SUPPORT_ORIENTATION.portrait || (d = !0), _dependency5.Macro.SUPPORT_ORIENTATION.landscape || (d = !1);
    d ? _dependency4.EOrientationType.LANDSCAPE : _dependency4.EOrientationType.PORTRAIT;
  }, i;
}(_dependency3.Adapter)) || c) || c) || c);
_dependency2.cclegacy._RF.pop();
