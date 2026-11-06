// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Decorators";
import * as _dependency4 from "./slotFramework-SlotTableViewBase";
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
var e, n, o, r, i, u, l, a, c;
var p, s, f, b, w, v, y, m, d;
_dependency2.cclegacy._RF.push({}, "49ca1rykUpMAZqUFn48LMgp", "SlotTableViewL_v2", void 0);
var h = _dependency2._decorator.ccclass;
_publish("default", (p = h("SlotTableViewL_v2"), s = _dependency3.inject("content/infoContent/content/rowContent/row2/notOpenContent/number", _dependency2.Label), f = _dependency3.inject("content/infoContent/content/rowContent/row2/previousOneContent/number", _dependency2.Label), b = _dependency3.inject("content/infoContent/content/rowContent/row2/previousTwoContent/number", _dependency2.Label), p((y = _dependency.applyDecoratedDescriptor((v = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, i = new Array(n), u = 0; u < n; u++) i[u] = arguments[u];
    return e = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "notOpenContentNumber", y, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "previousOneNumber", m, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "previousTwoNumber", d, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/view/SlotTableViewL_v2";
  };
  var i = e.prototype;
  return i.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, i.start = function () {
    t.prototype.start.call(this);
  }, i.update = function () {
    t.prototype.update.call(this);
  }, i.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e;
}(_dependency4.default)).prototype, "notOpenContentNumber", [s], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = _dependency.applyDecoratedDescriptor(v.prototype, "previousOneNumber", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), d = _dependency.applyDecoratedDescriptor(v.prototype, "previousTwoNumber", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = v)) || w));
_dependency2.cclegacy._RF.pop();
