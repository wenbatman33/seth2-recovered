// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-EntryDelegate";
import * as _dependency3 from "./main-Macros";
var _export;
export { _export as EntryManager };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EntryManager":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, o;
_dependency.cclegacy._RF.push({}, "654eacHc69Fm50EILZ/ggOz", "EntryManager", void 0), _publish("EntryManager", function () {
  function e() {
    this.module = null, this.isResident = !0, this._entrys = new Map(), this.delegate = new _dependency2.EntryDelegate(), this.node = null;
  }
  var n = e.prototype;
  return n.register = function (e, n) {
    var t = this.getEntry(e.bundle);
    t && this._entrys.delete(e.bundle), (t = new e()).bundle = e.bundle, t.gameViewType = n, this._entrys.set(t.bundle, t), this.node && t.onLoad(this.node);
  }, n.onLoad = function (e) {
    var n = this;
    this.node = e, this._entrys.forEach(function (e, t) {
      e.isRunning || (e.onLoad(n.node), e.isMain && e.onEnter());
    });
  }, n.onDestroy = function (e) {
    this._entrys.forEach(function (e) {
      e.onDestroy();
    });
  }, n.onCheckUpdate = function () {
    this.delegate.onCheckUpdate();
  }, n.call = function (e, n) {
    var t = this.getEntry(e);
    if (t) {
      for (var o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++) r[i - 2] = arguments[i];
      t.call(n, r);
    }
  }, n.enterBundle = function (e, n) {
    var t = this.delegate.getEntryConfig(e);
    if (t) if (e == _dependency3.Macro.BUNDLE_RESOURCES) {
      var r = this.getEntry(e);
      this.delegate.onEnterMain(r, n);
    } else t.userData = n, App.bundleManager.enterBundle(t);
  }, n.backBundle = function (e) {
    var n = App.stageData.prevWhere;
    n ? this.enterBundle(n, e) : Log.d(this.module + "已經是最後一個場景，無法返回");
  }, n.onLoadBundleComplete = function (e) {
    e.isLoaded = !0;
    var n = this.getEntry(e.bundle);
    n && n.onEnter(e.userData);
  }, n.onEnterGameView = function (e, n) {
    var t = this.getEntry(e);
    t && (this.delegate.onEnterGameView(t, n), t.onEnterGameView(n));
  }, n.onShowGameView = function (e, n) {
    var t = this.getEntry(e);
    t && (this.delegate.onShowGameView(t, n), t.onShowGameView(n));
  }, n.onUnloadBundle = function (e) {
    var n = this.getEntry(e);
    n && n.onUnloadBundle();
  }, n.onDestroyGameView = function (e, n) {
    var t = this.getEntry(e);
    t && (t.onUnloadBundle(), t.onDestroyGameView(n));
  }, n.getEntry = function (e) {
    var n = App.bundleManager.getBundleName(e),
      t = this._entrys.get(n);
    return t || null;
  }, n.debug = function () {
    Log.d("-------Bundle入口管理器-------"), this._entrys.forEach(function (e) {
      Log.d("bundle : " + e.bundle);
    });
  }, e;
}()).module = "【入口管理器】", _dependency.cclegacy._RF.pop();
