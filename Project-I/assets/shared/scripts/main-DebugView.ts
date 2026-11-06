// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventComponent";
import * as _dependency4 from "./main-Decorators";
import * as _dependency5 from "./main-Enums";
import * as _dependency6 from "./main-Singleton";
import * as _dependency7 from "./main-Config";
var _export;
export { _export as DebugView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "DebugView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, i, o, r, g, a, s, u, h, d, l, c, p, b, w, f, v;
var S, E, L, M, A, D, y, V, z, C, m;
_dependency2.cclegacy._RF.push({}, "c0535WAUCFLAaS7ODYfqrlE", "DebugView", void 0);
var R = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("DebugView", (S = R("DebugView"), E = _dependency4.inject("logView", _dependency2.Node), L = _dependency4.inject("content", _dependency2.Node), M = _dependency4.inject("background", _dependency2.Node), A = _dependency4.inject("background", _dependency2.Node, "logView"), S((V = _dependency.applyDecoratedDescriptor((y = function (e) {
  var _nativeConstructor = n;
  function n() {
    for (var n, t = arguments.length, r = new Array(t), g = 0; g < t; g++) r[g] = arguments[g];
    return n = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "logView", V, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "content", z, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "background", C, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "logViewBackground", m, _dependency.assertThisInitialized(n)), n.debug = null, n;
  }
  _dependency.inheritsLoose(n, e);
  var r = n.prototype;
  return r.onLoad = function () {
    this.bindEvent("showUI", this.onShowUI), this.bindEvent("showNode", this.onShowNode), this.bindEvent("showRes", this.onShowRes), this.bindEvent("showComponent", this.onShowComp), this.bindEvent("showDebugInfo", this.onShowDebugInfo), this.bindEvent("log", this.onLog), this.bindEvent("logic", this.onLogicManager), this.bindEvent("dataCenter", this.onDataCenter), this.bindEvent("entry", this.onEntry), this.bindEvent("proto", this.onProto), this.bindEvent("bundleMgr", this.onBundleMgr), this.bindEvent("pool", this.onPool), this.bindEvent("sender", this.onSender), this.bindEvent("handler", this.onHandler), this.bindEvent("serviceManager", this.onServiceManager), this.bindEvent("hotupdate", this.onHotUpdate), this.bindEvent("lowMemory", this.onLowMemory), this.bindEvent("releaseManager", this.onReleaseManager), this.bindEvent("adaptor", this.onAdaptor), this.bindEvent("singleton", this.onSingleton), this.doOther();
  }, r.doOther = function () {
    var e = this;
    this.logView && (this.logView.active = !1, this.initLogView()), this.onN(this.background, _dependency2.Input.EventType.TOUCH_END, function () {
      e.node.active = !1, e.debug && (e.debug.active = !0);
    });
  }, r.bindEvent = function (e, n) {
    var t = _dependency2.find(e, this.content);
    this.onN(t, _dependency2.Input.EventType.TOUCH_END, n);
  }, r.initLogView = function () {
    var e = this;
    this.onN(this.logViewBackground, _dependency2.Input.EventType.TOUCH_END, function () {
      e.logView.active = !1;
    });
    var n = _dependency2.find("level", this.logView);
    if (n) for (var t = function (t) {
        var i = _dependency2.find("type" + t, n);
        if (i) {
          var o = i.getComponent(_dependency2.Toggle);
          o && (o.isChecked = App.logger.isValid(e.getLogLevel(t))), e.onN(i, "toggle", function (n) {
            n.isChecked ? App.logger.attach(e.getLogLevel(t)) : App.logger.detach(e.getLogLevel(t));
          });
        }
      }, i = 0; i < n.children.length - 1; i++) t(i);
  }, r.getLogLevel = function (e) {
    switch (e) {
      case 0:
        return _dependency5.LogLevel.DEBUG;
      case 1:
        return _dependency5.LogLevel.WARN;
      case 2:
        return _dependency5.LogLevel.ERROR;
      case 3:
        return _dependency5.LogLevel.DUMP;
      default:
        return _dependency5.LogLevel.DEBUG;
    }
  }, r.onLogicManager = function () {
    App.logicManager.debug();
  }, r.onDataCenter = function () {
    App.dataCenter.debug();
  }, r.onEntry = function () {
    App.entryManager.debug();
  }, r.onProto = function () {
    App.protoManager.debug();
  }, r.onBundleMgr = function () {
    App.bundleManager.debug();
  }, r.onPool = function () {
    App.pool.debug();
  }, r.onLog = function () {
    this.logView.active = !0;
  }, r.onShowDebugInfo = function () {
    _dependency2.profiler.isShowingStats() ? _dependency2.profiler.hideStats() : _dependency2.profiler.showStats(), App.storage.setItem(_dependency7.Config.SHOW_DEBUG_INFO_KEY, _dependency2.profiler.isShowingStats());
  }, r.onShowUI = function () {
    App.uiManager.debug({
      showViews: !0
    });
  }, r.onShowNode = function () {
    App.uiManager.debug({
      showChildren: !0
    });
  }, r.onShowRes = function () {
    App.cache.debug();
  }, r.onShowComp = function () {
    App.uiManager.debug({
      showComp: !0
    });
  }, r.onSender = function () {
    App.senderManager.debug();
  }, r.onHandler = function () {
    App.handlerManager.debug();
  }, r.onServiceManager = function () {
    App.serviceManager.debug();
  }, r.onHotUpdate = function () {
    App.updateManager.debug();
  }, r.onLowMemory = function () {
    App.onLowMemory();
  }, r.onReleaseManager = function () {
    App.releaseManger.debug();
  }, r.onAdaptor = function () {
    Log.d("-----------------------------適配資訊-----------------------------------------------"), Log.d("螢幕解析度: " + _dependency2.screen.windowSize.width + " x " + _dependency2.screen.windowSize.height), Log.d("檢視視窗可見區域解析度: " + _dependency2.view.getVisibleSize().width + " x " + _dependency2.view.getVisibleSize().height), Log.d("檢視中邊框尺寸: " + _dependency2.screen.windowSize.width + " x " + _dependency2.screen.windowSize.height), Log.d("裝置或瀏覽器畫素比例: " + _dependency2.screen.devicePixelRatio), Log.d("返回檢視視窗可見區域畫素尺寸: " + _dependency2.view.getVisibleSizeInPixel().width + " x " + _dependency2.view.getVisibleSizeInPixel().height), Log.d("當前場景設計解析度: " + _dependency2.view.getDesignResolutionSize().width + " x " + _dependency2.view.getDesignResolutionSize().height);
    var e = _dependency2.screen.windowSize.width / _dependency2.screen.windowSize.height,
      n = _dependency2.view.getDesignResolutionSize().width / _dependency2.view.getDesignResolutionSize().height;
    Log.d("檢視寬高比:" + e), Log.d("設定解析度寬高比:" + n);
  }, r.onSingleton = function () {
    _dependency6.default.instance.debug();
  }, n;
}(_dependency3.default)).prototype, "logView", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(y.prototype, "content", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = _dependency.applyDecoratedDescriptor(y.prototype, "background", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = _dependency.applyDecoratedDescriptor(y.prototype, "logViewBackground", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = y)) || D));
_dependency2.cclegacy._RF.pop();
