// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Decorators";
import * as _dependency4 from "./g1002-GameData";
import * as _dependency5 from "../../shared/scripts/main-SymbolBase";
var _export;
export { _export as MutipleSymbol };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "MutipleSymbol":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, n, r, a, o, l, u, s, c, p, f;
var b, d, y, m, h, g, v, L, x, z;
_dependency2.cclegacy._RF.push({}, "ab582cgRo9E64Z/ccwAtW+5", "MutipleSymbol", void 0);
var S = _dependency2._decorator.ccclass,
  I = _dependency2._decorator.property,
  D = _dependency2._decorator.executeInEditMode;
_publish("MutipleSymbol", (b = S("MutipleSymbol"), d = D(), y = I({
  type: _dependency2.CCInteger,
  override: !0
}), m = I({
  type: _dependency2.CCInteger,
  override: !0
}), h = _dependency3.inject("mutipleLabel", _dependency2.Label), b(g = d((L = _dependency.applyDecoratedDescriptor((v = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "id", L, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "zIndex", x, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "mutipleLabel", z, _dependency.assertThisInitialized(t)), t.mutiple = 0, t;
  }
  _dependency.inheritsLoose(t, e);
  var o = t.prototype;
  return o.start = function () {
    this.init();
  }, o.setSymbol = function (e) {
    var t = this,
      i = this.data.getData().bonusParserElixirFurnace.timesList;
    if (i) {
      var n = i.indexOf(e);
      this.node.zIndex = this.zIndex, this.id = e, this.mutiple = i[n], this.scheduleOnce(function () {
        var e;
        t.setLabel((null != (e = i[n]) ? e : 0) + "x");
      });
    }
  }, o.init = function () {}, o.setLabel = function (e) {
    this.mutipleLabel.string = e;
  }, o.reset = function () {
    this.mutiple = 0;
  }, o.addEvents = function () {}, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }]), t;
}(_dependency5.SymbolBase)).prototype, "id", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), x = _dependency.applyDecoratedDescriptor(v.prototype, "zIndex", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), z = _dependency.applyDecoratedDescriptor(v.prototype, "mutipleLabel", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), g = v)) || g) || g));
_dependency2.cclegacy._RF.pop();
