// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-GameViewBase";
import * as _dependency5 from "./main-Decorators";
import * as _dependency6 from "./slotFramework-GameNameMap";
import * as _dependency7 from "./slotFramework-SlotFrameworkData";
import * as _dependency8 from "./slotFramework-SlotFrameworkLogic";
import * as _dependency9 from "./slotFramework-UrlModel";
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
var e, n, r, o, a, i, c, l, s, u, f, p, d, b, y;
var g, m, v, w, h;
_dependency2.cclegacy._RF.push({}, "07814um1flLw5Lo3vVTUktG", "SlotFrameworkView", void 0);
var B = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (g = _dependency5.inject("content/bbr", _dependency2.Node), B(((h = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bbr", w, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/view/SlotFrameworkView";
  };
  var i = e.prototype;
  return i.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, i.start = function () {
    this.enableBBR(!0), this.init();
  }, i.onDestroy = function () {}, i.init = function () {
    var t = _dependency9.default.searchParams.gn;
    if (null != t) {
      var e = _dependency6.GameNameMap[t];
      App.entryManager.enterBundle(e);
    } else App.entryManager.enterBundle(_dependency3.EBundles[_dependency3.EBundles.g1001]);
  }, i.enableBBR = function (t) {
    this.bbr.active = t;
  }, i.addEvents = function () {
    t.prototype.addEvents.call(this);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), e;
}(_dependency4.default)).logicType = _dependency8.SlotFrameworkLogic, w = _dependency.applyDecoratedDescriptor((v = h).prototype, "bbr", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), m = v)) || m));
_dependency2.cclegacy._RF.pop();
