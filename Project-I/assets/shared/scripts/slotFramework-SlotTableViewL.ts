// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./slotFramework-SlotTableViewBase";
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
var t, n, o, r, i, u, l, a, c;
var s, p, b, f, w, m, v, C, y;
_dependency2.cclegacy._RF.push({}, "677890tmOpIxatfJJzDqy+M", "SlotTableViewL", void 0);
var T = _dependency2._decorator.ccclass;
_publish("default", (s = T("SlotTableViewL"), p = _dependency4.inject("content/infoContent/content/rowContent/row2/notOpenContent/number", _dependency2.Label), b = _dependency4.inject("content/infoContent/content/rowContent/row2/previousOneContent/number", _dependency2.Label), f = _dependency4.inject("content/infoContent/content/rowContent/row2/previousTwoContent/number", _dependency2.Label), s((v = _dependency.applyDecoratedDescriptor((m = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, i = new Array(n), u = 0; u < n; u++) i[u] = arguments[u];
    return t = Reflect.construct(e, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "notOpenContentNumber", v, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "previousOneNumber", C, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "previousTwoNumber", y, _dependency.assertThisInitialized(t)), t;
  }
  return _dependency.inheritsLoose(t, e), t.getPrefabUrl = function () {
    return "prefabs/view/SlotTableViewL";
  }, t;
}(_dependency3.default)).prototype, "notOpenContentNumber", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = _dependency.applyDecoratedDescriptor(m.prototype, "previousOneNumber", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = _dependency.applyDecoratedDescriptor(m.prototype, "previousTwoNumber", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = m)) || w));
_dependency2.cclegacy._RF.pop();
