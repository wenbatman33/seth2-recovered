// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Dispatcher";
import * as _dependency4 from "./main-UIManager";
import * as _dependency5 from "./main-LocalStorage";
import * as _dependency6 from "./main-AssetManager";
import * as _dependency7 from "./main-CacheManager";
import * as _dependency8 from "./main-NodePoolManager";
import * as _dependency9 from "./main-UpdateManager";
import * as _dependency0 from "./main-BundleManager";
import * as _dependency1 from "./main-CocosExtention";
import * as _dependency10 from "./main-Language";
import * as _dependency11 from "./main-Macros";
import * as _dependency12 from "./main-ProtoManager";
import * as _dependency13 from "./main-EntryManager";
import * as _dependency14 from "./main-DataCenter";
import * as _dependency15 from "./main-LogicManager";
import * as _dependency16 from "./main-Logger";
import * as _dependency17 from "./main-ServiceManager";
import * as _dependency18 from "./main-ReleaseManager";
import * as _dependency19 from "./main-HttpClient";
import * as _dependency20 from "./main-Singleton";
import * as _dependency21 from "./main-LayoutManager";
import * as _dependency22 from "./main-SenderManager";
import * as _dependency23 from "./main-HandlerManager";
import * as _dependency24 from "./main-Utils";
import * as _dependency25 from "./main-CanvasHelper";
import * as _dependency26 from "./main-Platform";
var _export;
export { _export as Framewok };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Framewok":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, a, r, i, o, u, g, c, s, f, l, M, y, k, p, h, d, L, m, C, S, v, w, U, E, H, P;
_dependency2.cclegacy._RF.push({}, "1fa052sIW5GVb6Iw0KrOz1L", "Framework", void 0);
_publish("Framewok", function () {
  function e() {
    this.gameView = null;
  }
  var t = e.prototype;
  return t.getGameView = function () {
    return this.gameView;
  }, t.getLanguage = function (e, n, t) {
    t || (t = _dependency11.Macro.BUNDLE_RESOURCES), n || (n = []);
    var a = [];
    return a.push("" + _dependency11.Macro.USING_LAN_KEY + t + "." + e), a.push.apply(a, n), this.language.get(a);
  }, t.init = function () {
    _dependency1.CocosExtentionInit();
  }, t.onLowMemory = function () {
    this.releaseManger.onLowMemory();
  }, _dependency.createClass(e, [{
    key: "isLazyRelease",
    get: function () {
      return !1;
    }
  }, {
    key: "releaseManger",
    get: function () {
      return _dependency20.default.instance.get(_dependency18.ReleaseManager);
    }
  }, {
    key: "serviceManager",
    get: function () {
      return _dependency20.default.instance.get(_dependency17.ServiceManager);
    }
  }, {
    key: "senderManager",
    get: function () {
      return _dependency20.default.instance.get(_dependency22.SenderManager);
    }
  }, {
    key: "handlerManager",
    get: function () {
      return _dependency20.default.instance.get(_dependency23.HandlerManager);
    }
  }, {
    key: "logger",
    get: function () {
      return _dependency20.default.instance.get(_dependency16.LoggerImpl);
    }
  }, {
    key: "logicManager",
    get: function () {
      return _dependency20.default.instance.get(_dependency15.LogicManager);
    }
  }, {
    key: "dataCenter",
    get: function () {
      return _dependency20.default.instance.get(_dependency14.DataCenter);
    }
  }, {
    key: "entryManager",
    get: function () {
      return _dependency20.default.instance.get(_dependency13.EntryManager);
    }
  }, {
    key: "utils",
    get: function () {
      return _dependency20.default.instance.get(_dependency24.Utils);
    }
  }, {
    key: "protoManager",
    get: function () {
      return _dependency20.default.instance.get(_dependency12.ProtoManager);
    }
  }, {
    key: "bundleManager",
    get: function () {
      return _dependency20.default.instance.get(_dependency0.BundleManager);
    }
  }, {
    key: "updateManager",
    get: function () {
      return _dependency20.default.instance.get(_dependency9.UpdateManager);
    }
  }, {
    key: "retainMemory",
    get: function () {
      return this.uiManager.retainMemory;
    }
  }, {
    key: "language",
    get: function () {
      return _dependency20.default.instance.get(_dependency10.Language);
    }
  }, {
    key: "dispatcher",
    get: function () {
      return _dependency20.default.instance.get(_dependency3.Dispatcher);
    }
  }, {
    key: "uiManager",
    get: function () {
      return _dependency20.default.instance.get(_dependency4.UIManager);
    }
  }, {
    key: "localStorage",
    get: function () {
      return this.storage;
    }
  }, {
    key: "storage",
    get: function () {
      return _dependency20.default.instance.get(_dependency5.LocalStorage);
    }
  }, {
    key: "assetManager",
    get: function () {
      return this.asset;
    }
  }, {
    key: "asset",
    get: function () {
      return _dependency20.default.instance.get(_dependency6._AssetManager);
    }
  }, {
    key: "cacheManager",
    get: function () {
      return this.cache;
    }
  }, {
    key: "cache",
    get: function () {
      return _dependency20.default.instance.get(_dependency7.CacheManager);
    }
  }, {
    key: "nodePoolManager",
    get: function () {
      return this.pool;
    }
  }, {
    key: "pool",
    get: function () {
      return _dependency20.default.instance.get(_dependency8.NodePoolManager);
    }
  }, {
    key: "http",
    get: function () {
      return _dependency20.default.instance.get(_dependency19.HttpClient);
    }
  }, {
    key: "tips",
    get: function () {
      return null;
    }
  }, {
    key: "uiLoading",
    get: function () {
      return null;
    }
  }, {
    key: "wssCacertUrl",
    get: function () {
      return "";
    }
  }, {
    key: "layout",
    get: function () {
      return _dependency20.default.instance.get(_dependency21.LayoutManager);
    }
  }, {
    key: "canvasHelper",
    get: function () {
      return _dependency20.default.instance.get(_dependency25.CanvasHelper);
    }
  }, {
    key: "platform",
    get: function () {
      return _dependency20.default.instance.get(_dependency26.Platform);
    }
  }]), e;
}());
_dependency2.cclegacy._RF.pop();
