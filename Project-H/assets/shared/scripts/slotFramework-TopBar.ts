// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-EventComponent";
import * as _dependency5 from "./main-Decorators";
import * as _dependency6 from "./slotFramework-JpBarControllerL";
import * as _dependency7 from "./slotFramework-CmmSlotUtils";
import * as _dependency8 from "./slotFramework-JpBarControllerP";
import * as _dependency9 from "./slotFramework-SlotFrameworkData";
import * as _dependency0 from "./slotFramework-MenuController";
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
var e, n, o, r, i, a, s, c, u, l, p, f, d, h, g, v, b, B;
var m, y, C, N, P, j, D;
_dependency2.cclegacy._RF.push({}, "4754e6U6IpHNbNutG0zqCYm", "TopBar", void 0);
_dependency2._decorator.ccclass, _dependency2._decorator.property, _publish("default", (m = _dependency5.inject("content/version", _dependency2.Label), y = _dependency5.inject("content/bg", _dependency2.Node), C = _dependency5.inject("JpBar", _dependency2.Node), P = _dependency.applyDecoratedDescriptor((N = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "version", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "barBgNode", j, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "jpBarNode", D, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var a = e.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this), this.setUI(), this.setEventTouch();
  }, a.start = function () {
    this.init();
  }, a.onDestroy = function () {}, a.init = function () {}, a.setEventTouch = function () {}, a.showHideJPBar = function (t) {
    void 0 === t && (t = !0), this.jpBarNode && (this.jpBarNode.active = t, this.barBgNode.active = t);
  }, a.setUI = function () {
    var t = this.slotData.getData().filePaths,
      e = t.jpBarLPrefab,
      n = t.jpBarPPrefab,
      o = t.menuLPrefab,
      r = t.menuPPrefab,
      i = [{
        path: _dependency7.CmmSlotUtils.getOrientationTarget(o, r),
        component: _dependency7.CmmSlotUtils.getOrientationTarget(_dependency0.default, _dependency0.default)
      }, {
        path: _dependency7.CmmSlotUtils.getOrientationTarget(e, n),
        component: _dependency7.CmmSlotUtils.getOrientationTarget(_dependency6.default, _dependency8.default)
      }];
    this.addSlotUI(i);
  }, a.addSlotUI = function (t) {
    var e = this;
    t.forEach(function (t) {
      var n = t.path,
        o = t.component,
        r = App.cache.get(_dependency3.EBundles[_dependency3.EBundles.slotFramework], n).data,
        i = _dependency2.instantiate(r);
      o != _dependency6.default && o != _dependency8.default || (e.jpBarNode = i), i.addComponent(o), e.node.addChild(i);
    });
  }, a.setVersion = function (t) {
    this.version.string = t;
  }, a.addEvents = function () {
    t.prototype.addEvents.call(this);
  }, _dependency.createClass(e, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "version", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(N.prototype, "barBgNode", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(N.prototype, "jpBarNode", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N));
_dependency2.cclegacy._RF.pop();
