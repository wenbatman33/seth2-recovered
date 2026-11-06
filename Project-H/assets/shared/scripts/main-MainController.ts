// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
import * as _dependency4 from "./main-DebugView";
import * as _dependency5 from "./main-EventComponent";
import * as _dependency6 from "./main-AdapterEvent";
import * as _dependency7 from "./main-WrapperData";
import * as _dependency8 from "./main-UrlUtils";
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
var t, i, n, o, r, u, a, s, c, l, p, d, g, f, h, w, b, y, v, E;
var D, L, m, A, V, _, M, O, S, C;
_dependency2.cclegacy._RF.push({}, "8c7cfOZmplNMbf54sZ3NMG6", "MainController", void 0);
var z = _dependency2._decorator.ccclass,
  T = _dependency2._decorator.property,
  R = _dependency2._decorator.menu;
_publish("default", (D = R("Quick公共元件/MainController"), L = T(_dependency2.Asset), m = T({
  type: _dependency2.Enum(_dependency6.EOrientationType)
}), z(A = D((_ = _dependency.applyDecoratedDescriptor((V = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, i = arguments.length, r = new Array(i), u = 0; u < i; u++) r[u] = arguments[u];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "wssCacert", _, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "width", M, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "height", O, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "orientation", S, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "isLockDirection", C, _dependency.assertThisInitialized(t)), t.debugView = null, t.viewMode = null, t;
  }
  _dependency.inheritsLoose(t, e);
  var r = t.prototype;
  return r.onLoad = function () {
    var t = this;
    this.viewMode = _dependency8.default.getViewModeParam(), e.prototype.onLoad.call(this), App.onLoad(this.node), this.wssCacert;
    var i = _dependency2.find("debug", this.node);
    if (this.debugView = _dependency2.find("debugView", this.node), i && this.debugView) if (App.storage.getItem(_dependency3.Config.SHOW_DEBUG_INFO_KEY, !1) ? _dependency2.profiler.showStats() : _dependency2.profiler.hideStats(), _dependency3.Config.isShowDebugButton) {
      i.active = !0;
      var n = this.debugView.addComponent(_dependency4.DebugView);
      n && (n.debug = i), this.debugView.active = !1, i.on(_dependency2.Input.EventType.TOUCH_END, function () {
        i && (i.active = !1), t.debugView && (t.debugView.active = !0);
      }), this.onN(i, _dependency2.Input.EventType.TOUCH_END, function () {
        i && (i.active = !1), t.debugView && (t.debugView.active = !0);
      });
    } else i.destroy(), this.debugView.destroy();
    this.onG(_dependency2.Game.EVENT_HIDE, this.onEnterBackground), this.onG(_dependency2.Game.EVENT_SHOW, this.onEnterForgeground), this.onG(_dependency2.Game.EVENT_LOW_MEMORY, this.onLowMemory), this.orientation == _dependency6.EOrientationType.PORTRAIT ? _dependency2.view.setDesignResolutionSize(720, 1280, _dependency2.ResolutionPolicy.SHOW_ALL) : _dependency2.view.setDesignResolutionSize(1280, 720, _dependency2.ResolutionPolicy.SHOW_ALL);
  }, r.start = function () {
    /closeSwipe/i.test(navigator.userAgent) && App.waitLoading.show();
  }, r.update = function (e) {
    App.update(this.node);
  }, r.onDestroy = function () {
    App.onDestroy(this.node), e.prototype.onDestroy.call(this);
  }, r.onEnterBackground = function () {
    App.onEnterBackground();
  }, r.onEnterForgeground = function () {
    App.onEnterForgeground();
  }, r.onLowMemory = function () {
    App.onLowMemory();
  }, r.setOrientation = function () {
    App.dataCenter.get(_dependency7.default).orientation = this.orientation;
  }, r.setDesignResolutionSize = function (e, t) {
    _dependency2.view.setDesignResolutionSize(e, t, _dependency2.ResolutionPolicy.SHOW_ALL);
  }, t;
}(_dependency5.default)).prototype, "wssCacert", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(V.prototype, "width", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1280;
  }
}), O = _dependency.applyDecoratedDescriptor(V.prototype, "height", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 720;
  }
}), S = _dependency.applyDecoratedDescriptor(V.prototype, "orientation", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), C = _dependency.applyDecoratedDescriptor(V.prototype, "isLockDirection", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), A = V)) || A) || A));
_dependency2.cclegacy._RF.pop();
