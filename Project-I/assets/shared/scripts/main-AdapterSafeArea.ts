// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Adapter";
import * as _dependency4 from "./main-AdapterView";
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
var e, i, r, n, o, a, s, l, h;
var u, p, f, c, g, A, b, d, w, m, I, y;
_dependency2.cclegacy._RF.push({}, "07550mrXINByYEGIQGf/ueP", "AdapterSafeArea", void 0);
var P = _dependency2._decorator.ccclass,
  T = _dependency2._decorator.property,
  x = _dependency2._decorator.executeInEditMode,
  M = _dependency2._decorator.menu;
_publish("default", (u = x(!0), p = M("Quick適配元件/AdapterSafeArea"), f = T({
  tooltip: "是否包含安全區域和螢幕上邊界之間的縫隙"
}), c = T({
  tooltip: "是否包含安全區域和螢幕下邊界之間的縫隙"
}), g = T({
  tooltip: "是否包含安全區域和螢幕左邊界之間的縫隙"
}), A = T({
  tooltip: "是否包含安全區域和螢幕右邊界之間的縫隙"
}), P(b = u(b = p((w = _dependency.applyDecoratedDescriptor((d = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "withInsertTop", w, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "withInsertBottom", m, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "withInsertLeft", I, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "withInsertRight", y, _dependency.assertThisInitialized(e)), e;
  }
  return _dependency.inheritsLoose(e, t), e.prototype.onChangeSize = function () {
    var t = this.getComponent(_dependency2.Widget);
    t && t.enabled && (t.isAlignTop && this.withInsertTop && (t.isAbsoluteTop = !0, t.top = -_dependency4.default.screenPxToDesignPx(_dependency4.default.safeArea.safeAreaMarginTop), this.height += Math.abs(t.top)), t.isAlignBottom && this.withInsertBottom && (t.isAbsoluteBottom = !0, t.bottom = -_dependency4.default.screenPxToDesignPx(_dependency4.default.safeArea.safeAreaMarginBottom), this.height += Math.abs(t.bottom)), t.isAlignLeft && this.withInsertLeft && (t.isAbsoluteLeft = !0, t.left = -_dependency4.default.screenPxToDesignPx(_dependency4.default.safeArea.safeAreaMarginLeft), this.width += Math.abs(t.left)), t.isAlignRight && this.withInsertRight && (t.isAbsoluteRight = !0, t.right = -_dependency4.default.screenPxToDesignPx(_dependency4.default.safeArea.safeAreaMarginRight), this.width += Math.abs(t.right)), t.updateAlignment());
  }, e;
}(_dependency3.Adapter)).prototype, "withInsertTop", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), m = _dependency.applyDecoratedDescriptor(d.prototype, "withInsertBottom", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), I = _dependency.applyDecoratedDescriptor(d.prototype, "withInsertLeft", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), y = _dependency.applyDecoratedDescriptor(d.prototype, "withInsertRight", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), b = d)) || b) || b) || b));
_dependency2.cclegacy._RF.pop();
