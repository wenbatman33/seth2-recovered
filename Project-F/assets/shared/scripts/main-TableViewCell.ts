// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventComponent";
var _export;
export { _export as TableViewCell };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TableViewCell":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, n, r, l, o, c;
var a, u, s, p, f, y;
_dependency2.cclegacy._RF.push({}, "911aez3VC9D84ngrsmXq6sf", "TableViewCell", void 0);
var d = _dependency2._decorator.ccclass,
  v = _dependency2._decorator.property,
  b = _dependency2._decorator.menu;
_publish("TableViewCell", (a = b("QuickUI组件/TableViewCell"), u = v({
  displayName: "Type",
  tooltip: "列表項型別"
}), d(s = a(((y = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, i = arguments.length, l = new Array(i), o = 0; o < i; o++) l[o] = arguments[o];
    return (t = Reflect.construct(e, [this].concat(l).slice(1), new.target || _nativeConstructor) || this).view = null, t.index = -1, _dependency.initializerDefineProperty(t, "type", f, _dependency.assertThisInitialized(t)), t;
  }
  _dependency.inheritsLoose(t, e);
  var l = t.prototype;
  return l.reset = function () {
    this.index = -1;
  }, l.init = function () {}, l.willRecycle = function () {}, t;
}(_dependency3.default)).INVALID_INDEX = -1, f = _dependency.applyDecoratedDescriptor((p = y).prototype, "type", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), s = p)) || s) || s));
_dependency2.cclegacy._RF.pop();
