// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Macros";
import * as _dependency4 from "./main-Bundles";
var _export;
export { _export as BundleManager };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BundleManager":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, o, t, a, l, u, r;
_dependency2.cclegacy._RF.push({}, "2e004QPo4RDaquC+p8l+fiE", "BundleManager", void 0), _publish("BundleManager", function () {
  function e() {
    this.module = null;
  }
  var t = e.prototype;
  return t.isEngineBundle = function (e) {
    return e == _dependency2.AssetManager.BuiltinBundleName.MAIN || e == _dependency2.AssetManager.BuiltinBundleName.RESOURCES || e == _dependency2.AssetManager.BuiltinBundleName.START_SCENE || e == _dependency2.AssetManager.BuiltinBundleName.INTERNAL;
  }, t.removeLoadedBundle = function (e) {
    var n = this,
      o = [];
    _dependency2.assetManager.bundles.forEach(function (e, t) {
      n.isEngineBundle(t) || o.push(t);
    });
    for (var t = o.length; t--;) {
      var a = o[t];
      if (-1 == e.indexOf(a)) {
        App.releaseManger.isExistBunble(a) || App.entryManager.onUnloadBundle(a);
        var u = this.getBundle(a);
        u && (App.cache.removeBundle(a), App.releaseManger.removeBundle(u));
      }
    }
  }, t.getBundle = function (e) {
    return e ? "string" == typeof e ? _dependency2.assetManager.getBundle(e) : e : null;
  }, t.getBundleName = function (e) {
    return e ? "string" == typeof e ? e : e.name : (Log.e("輸入引數錯誤 : " + e), _dependency3.Macro.UNKNOWN);
  }, t.enterBundle = function (e) {
    e ? App.updateManager.dowonLoad(e) : Log.e("無效的入口資訊");
  }, t.loadBundle = function (e) {
    var n, o;
    if (this.getBundle(e.bundle)) return Log.d(e.bundle + "已经加载在缓存中，直接使用"), App.releaseManger.onLoadBundle(e.bundle), void e.handler.onLoadBundleComplete(e);
    (e.handler.onStartLoadBundle(e), Log.d("loadBundle : " + e.bundle), null != (n = window) && n.updatingLoadingMsg) && (null == (o = window) || o.updatingLoadingMsg("" + e.bundle));
    this._loadBundle(e.bundle, function (n, o) {
      n ? (Log.e("load bundle : " + e.bundle + " fail !!!"), e.handler.onLoadBundleError(e, n)) : (App.releaseManger.onLoadBundle(e.bundle), Log.d("load bundle : " + e.bundle + " success !!!"), e.handler.onLoadBundleComplete(e));
    });
  }, t._loadBundle = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n, t) {
      var a, u, d, i, s, c, g;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (a = this.getHostType(window.location.hostname), n != _dependency4.EBundles[_dependency4.EBundles.slotFramework]) {
              e.next = 26;
              break;
            }
            if ("domain" != a) {
              e.next = 23;
              break;
            }
            return e.prev = 3, d = location.protocol + "//" + location.host + "/" + _dependency4.EBundles[_dependency4.EBundles.slotFramework] + "/manifest.json?" + new Date().getTime(), e.next = 7, fetch(d);
          case 7:
            return u = e.sent, e.next = 10, u.text();
          case 10:
            i = e.sent, s = JSON.parse(i), c = s.hash, g = location.protocol + "//" + location.host + "/" + _dependency4.EBundles[_dependency4.EBundles.slotFramework] + "/" + c, Log.e("slotFramework bundle url ::::", d), _dependency2.assetManager.loadBundle(g, t), e.next = 21;
            break;
          case 18:
            e.prev = 18, e.t0 = e.catch(3), Log.e("load bundle " + _dependency4.EBundles[_dependency4.EBundles.slotFramework] + " error:::", u, e.t0);
          case 21:
            e.next = 24;
            break;
          case 23:
            _dependency2.assetManager.loadBundle(n, t);
          case 24:
            e.next = 27;
            break;
          case 26:
            _dependency2.assetManager.loadBundle(n, t);
          case 27:
          case "end":
            return e.stop();
        }
      }, e, this, [[3, 18]]);
    }));
    return function (n, o) {
      return e.apply(this, arguments);
    };
  }(), t.getHostType = function (e) {
    return "localhost" === e ? "localhost" : /^\d/.test(e) ? "ip" : "domain";
  }, t.debug = function () {
    Log.d("-------Bundle管理器狀態資訊-------");
    var e = [];
    _dependency2.assetManager.bundles.forEach(function (n, o) {
      e.push(n.name);
    }), Log.d("當前所有載入完成的bundle : " + e.toString());
  }, e;
}()).module = "【Bundle管理器】", _dependency2.cclegacy._RF.pop();
