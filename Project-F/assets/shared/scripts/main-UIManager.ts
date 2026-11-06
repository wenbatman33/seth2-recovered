// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Enums";
import * as _dependency4 from "./main-Macros";
import * as _dependency5 from "./main-AdapterView";
import * as _dependency6 from "./main-Resource";
var _export;
export { _export as ViewDynamicLoadData };
var _export2;
export { _export2 as UIManager };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ViewDynamicLoadData":
      _export = value;
      break;
    case "UIManager":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, i, o, a, s, r, l, u, d, c, h, f, v;
_dependency2.cclegacy._RF.push({}, "63b76CYxi5BSLOyiSlM2dNn", "UIManager", void 0);
var p = "DYNAMIC_LOAD_GARBAGE",
  w = _publish("ViewDynamicLoadData", function () {
    function e(e) {
      void 0 === e && (e = null), this.local = new Map(), this.remote = new Map(), this.name = void 0, this.name = e;
    }
    var t = e.prototype;
    return t.addLocal = function (e, t) {
      e && e.url && (this.name == p && Log.e("找不到資源持有者: " + e.url), this.local.has(e.url) || (App.asset.retainAsset(e), this.local.set(e.url, e)));
    }, t.addRemote = function (e, t) {
      e && e.data && !this.remote.has(e.url) && (this.name == p && Log.e("找不到資源持有者 : " + e.url), App.cache.remoteCaches.retainAsset(e), this.remote.set(e.url, e));
    }, t.clear = function () {
      this.name == p ? ((this.local.size > 0 || this.remote.size > 0) && Log.e("當前未能釋放資源如下:"), this.local && this.local.size > 0 && (Log.e("-----------local-----------"), this.local && this.local.forEach(function (e) {
        Log.e(e.url);
      })), this.remote && this.remote.size > 0 && (Log.e("-----------remote-----------"), this.remote && this.remote.forEach(function (e, t) {
        Log.e(e.url);
      }))) : (this.local && (this.local.forEach(function (e) {
        App.asset.releaseAsset(e);
      }), this.local.clear()), this.remote && (this.remote.forEach(function (e, t) {
        App.cache.remoteCaches.releaseAsset(e);
      }), this.remote.clear()));
    }, e;
  }()),
  m = function () {
    function e() {
      this.isLoaded = !1, this.status = _dependency3.ViewStatus.WAITTING_NONE, this.view = null, this.finishCb = [], this.getViewCb = [], this.isPreload = !1, this.isPrefab = !0, this.info = null, this.viewType = null, this.bundle = null, this.loadData = new w(), this.node = null;
    }
    var t = e.prototype;
    return t.doGet = function (e, t, n) {
      for (var i = 0; i < this.getViewCb.length; i++) {
        var o = this.getViewCb[i];
        o && o(e);
      }
      this.getViewCb = [];
    }, t.doFinish = function (e, t, n) {
      for (var i = 0; i < this.finishCb.length; i++) {
        var o = this.finishCb[i];
        o && o(e);
      }
      this.finishCb = [];
    }, t.doCallback = function (e, t, n) {
      this.doFinish(e, t, n), this.doGet(e, t, n);
    }, e;
  }();
_publish("UIManager", function () {
  function e() {
    this.isResident = !0, this.module = null, this._viewDatas = new Map(), this.garbage = new w(p), this.retainMemory = new w("DYNAMIC_LOAD_RETAIN_MEMORY"), this._canvas = null, this._viewRoot = null, this._componentRoot = null, this._effectRoot = null, this._mainController = null, this._prefabs = null, this._root3D = null;
  }
  var i = e.prototype;
  return i.getViewData = function (e) {
    var t = this.getClassName(e);
    if (t) return this._viewDatas.has(t) ? this._viewDatas.get(t) : void 0;
  }, i.IsOnlyGameViewOpen = function (e) {
    for (var n, i, o = !0, a = _dependency.createForOfIteratorHelperLoose(this._viewDatas); !(n = a()).done;) {
      var s,
        r = n.value,
        l = r[0],
        u = r[1];
      if (l != e) if (null != (s = u.node) && s.parent) {
        o = !1;
        break;
      }
    }
    this._viewDatas.has(e) && (null != (i = this._viewDatas.get(e).node) && i.parent || (o = !1));
    return o;
  }, i.getViewType = function (e) {
    if (!_dependency2.isValid(e)) return null;
    var t = e.className;
    if (!t) return null;
    var n = this._viewDatas.get(t);
    return n ? n.viewType : null;
  }, i.getClassName = function (e) {
    if (e) {
      return "string" == typeof e ? e : _dependency2.js.getClassName(e);
    }
  }, i.defaultOpenOption = function (e) {
    var t = {
      bundle: _dependency4.Macro.BUNDLE_RESOURCES,
      delay: e.delay,
      name: e.name,
      zIndex: 0,
      preload: !1,
      type: e.type,
      args: e.args
    };
    return null != e.bundle && (t.bundle = e.bundle), null != e.zIndex && (t.zIndex = e.zIndex), null != e.preload && (t.preload = e.preload), t;
  }, i.preload = function (e, t) {
    return this.open({
      type: e,
      preload: !0,
      bundle: t
    });
  }, i.parsePrefabUrl = function (e) {
    return "@" == e[0] ? {
      isPrefab: !1,
      url: e.substr(1)
    } : {
      isPrefab: !0,
      url: e
    };
  }, i.open = function (e) {
    var t = this.defaultOpenOption(e);
    return this._open(t);
  }, i._open = function (e) {
    var t = this;
    return new Promise(function (n, i) {
      if (e.type) {
        var r = _dependency2.js.getClassName(e.type);
        if (t.viewRoot) {
          var l = t.getViewData(e.type);
          if (l) return l.isPreload = e.preload, l.isLoaded ? (l.status = _dependency3.ViewStatus.WAITTING_NONE, e.preload || l.view && _dependency2.isValid(l.node) && (l.node.zIndex = e.zIndex, l.node.parent || t.addView(l.node, e.zIndex), l.view.show(e.args)), void n(l.view)) : (l.status = _dependency3.ViewStatus.WAITTING_NONE, e.preload || App.uiLoading.show(e.delay, e.name), void l.finishCb.push(n));
          (l = new m()).loadData.name = r;
          var u = e.type.getPrefabUrl(),
            d = t.parsePrefabUrl(u);
          if (l.isPreload = e.preload, l.isPrefab = d.isPrefab, l.viewType = e.type, l.bundle = e.bundle, t._viewDatas.set(r, l), !d.isPrefab) return l.info = new _dependency6.Resource.Info(), l.info.url = d.url, l.info.type = _dependency2.Prefab, l.info.data = t.getScenePrefab(d.url), l.info.bundle = e.bundle, void t.createNode(l, n, e);
          var h = null;
          e.preload || (App.uiLoading.show(e.delay, e.name), h = function (e, t, n) {
            var i = Math.ceil(e / t * 100);
            App.uiLoading.updateProgress(i);
          }), t.loadPrefab(e.bundle, u, h).then(function (i) {
            l.info = new _dependency6.Resource.Info(), l.info.url = u, l.info.type = _dependency2.Prefab, l.info.data = i, l.info.bundle = e.bundle, App.asset.retainAsset(l.info), t.createNode(l, n, e), App.uiLoading.hide();
          }).catch(function (i) {
            l.isLoaded = !0, Log.e(i), t.close(e.type), l.doCallback(null, r, "開啟介面異常"), n(null);
            var o = "";
            e.name && (o = e.name), App.tips.show("加载界面" + o + "失败，请重试"), App.uiLoading.hide();
          });
        } else n(null);
      } else n(null);
    });
  }, i._addComponent = function (e, t, n) {
    if (e) {
      var i = this.getClassName(t.viewType),
        o = e.getComponent(t.viewType);
      if (!o && !(o = e.addComponent(t.viewType))) return null;
      o.className = i, o.bundle = n.bundle, t.view = o, o.args = n.args;
      var a = o.getComponent(_dependency2.Widget);
      return a && a.destroy(), o.getComponent(_dependency5.default) || o.addComponent(_dependency5.default), t.isPreload || this.addView(e, n.zIndex), o;
    }
    return null;
  }, i.createNode = function (e, t, n) {
    e.isLoaded = !0;
    var i = this.getClassName(e.viewType);
    if (e.status == _dependency3.ViewStatus.WAITTING_CLOSE) return t(null), void e.doCallback(null, i, "獲取界內已經關閉");
    var o = _dependency2.instantiate(e.info.data);
    e.node = o;
    var a = this._addComponent(o, e, n);
    a ? e.status == _dependency3.ViewStatus.WATITING_HIDE ? (a.hide(), t(a), e.doCallback(a, i, "載入完成，但載入過程中被隱藏")) : (e.isPreload || a.show(n.args), t(a), e.doCallback(a, i, "載入完成，回撥之前載入中的介面")) : t(null);
  }, i.loadPrefab = function (e, t, n) {
    return new Promise(function (i, o) {
      App.asset.load(e, t, _dependency2.Prefab, n, function (e) {
        e && e.data && e.data instanceof _dependency2.Prefab ? i(e.data) : o("載入prefab : " + t + " 失敗");
      });
    });
  }, i.getScenePrefab = function (e) {
    return _dependency2.find(e, this.prefabs);
  }, i.onLoad = function (e) {
    this._canvas = e;
  }, i.addView = function (e, t) {
    this.viewRoot.addChild(e), e.zIndex = t, window.cc.updateZIndex(this.viewRoot);
  }, i.addLocal = function (e, t) {
    if (e) {
      var n = this.getViewData(t);
      n && n.loadData.addLocal(e, t);
    }
  }, i.addRemote = function (e, t) {
    if (e) {
      var n = this.getViewData(t);
      n && n.loadData.addRemote(e, t);
    }
  }, i.close = function (e) {
    var t = this.getViewData(e);
    if (t) {
      t.status = _dependency3.ViewStatus.WAITTING_CLOSE;
      var n = this.getClassName(e);
      t.view && _dependency2.isValid(t.node) && (t.node.removeFromParent(), t.node.destroy()), t.loadData.clear(), t.isPrefab && App.asset.releaseAsset(t.info), this._viewDatas.delete(n), Log.d(this.module + " close view : " + n);
    }
  }, i.closeExcept = function (e) {
    var t = this;
    if (null != e && null != e && 0 != e.length) {
      for (var n = new Set(), i = 0; i < e.length; i++) n.add(this.getClassName(e[i]));
      this._viewDatas.forEach(function (e, i) {
        n.has(i) || t.close(i);
      });
    } else this._viewDatas.forEach(function (e, n) {
      t.close(n);
    });
  }, i.closeBundleView = function (e) {
    var t = this;
    this._viewDatas.forEach(function (n, i) {
      n.bundle == e && t.close(i);
    });
  }, i.hide = function (e) {
    var t = this.getViewData(e);
    t && (t.isLoaded ? t.view && _dependency2.isValid(t.view.node) && t.view.hide() : t.status = _dependency3.ViewStatus.WATITING_HIDE);
  }, i.getView = function (e) {
    var t = this;
    return new Promise(function (n, i) {
      if (null != e && null != e) {
        var o = t.getViewData(e);
        o ? o.isPreload ? n(null) : o.isLoaded ? n(o.view) : o.getViewCb.push(n) : n(null);
      } else n(null);
    });
  }, i.checkView = function (e, t) {}, i.isShow = function (e) {
    var t = this.getViewData(e);
    return !!t && !(!t.isLoaded || t.status != _dependency3.ViewStatus.WAITTING_NONE || !t.view) && t.view.node.active;
  }, i.addComponent = function (e) {
    var t = this.componentRoot;
    if (t) {
      var n = t.getComponent(e);
      return n || t.addComponent(e);
    }
    return null;
  }, i.removeComponent = function (e) {
    var t = this.componentRoot;
    if (t) {
      var n = t.getComponent(e);
      n && n.destroy();
    }
  }, i.debug = function (e) {
    if (e || ((e = {}).showChildren = !0, e.showComp = !0, e.showViews = !0), e.showViews && (Log.d("-----------當前所有檢視------------"), this._viewDatas.forEach(function (e, t) {
      Log.d("[" + t + "] isLoaded : " + e.isLoaded + " status : " + e.status + " view : " + _dependency2.js.getClassName(e.view) + " active : " + (!(!e.view || !e.view.node) && e.view.node.active));
    })), e.showChildren) {
      var t = this.viewRoot;
      if (t) {
        Log.d("-----------當前所有節點資訊------------");
        for (var n = t.children, i = 0; i < n.length; i++) {
          var o = n[i];
          Log.d(o.name + " active : " + o.active);
        }
      }
    }
    if (e.showComp) {
      var s = this.componentRoot;
      if (s) {
        Log.d("-----------當前所有元件資訊------------");
        for (var r = s._components, l = 0; l < r.length; l++) Log.d(_dependency2.js.getClassName(r[l]));
      }
    }
  }, _dependency.createClass(e, [{
    key: "viewRoot",
    get: function () {
      return this._viewRoot || _dependency2.isValid(this._viewRoot) || (this._viewRoot = _dependency2.find("viewRoot", this.canvas)), this._viewRoot;
    }
  }, {
    key: "componentRoot",
    get: function () {
      return this._componentRoot || _dependency2.isValid(this._componentRoot) || (this._componentRoot = _dependency2.find("componentRoot", this.canvas)), this._componentRoot;
    }
  }, {
    key: "effectRoot",
    get: function () {
      return this._effectRoot || _dependency2.isValid(this._effectRoot) || (this._effectRoot = _dependency2.find("effectRoot", this.viewRoot)), this._effectRoot;
    }
  }, {
    key: "mainController",
    get: function () {
      if (!this._mainController && !_dependency2.isValid(this._mainController)) return this._mainController;
      var e = this.canvas;
      return e ? (this._mainController = e.getComponent("MainController"), this._mainController) : null;
    }
  }, {
    key: "prefabs",
    get: function () {
      return this._prefabs || _dependency2.isValid(this._prefabs) || (this._prefabs = _dependency2.find("prefabs", this.canvas)), this._prefabs;
    }
  }, {
    key: "root3D",
    get: function () {
      return _dependency2.find("3d", this.canvas.parent);
    }
  }, {
    key: "camera3d",
    get: function () {
      var e;
      return null == (e = _dependency2.find("Camera3D", this.canvas.parent)) ? void 0 : e.getComponent(_dependency2.Camera);
    }
  }, {
    key: "screenShotCamera",
    get: function () {
      var e;
      return null == (e = _dependency2.find("ScreenShotCamera", this.canvas)) ? void 0 : e.getComponent(_dependency2.Camera);
    }
  }, {
    key: "uiCamera",
    get: function () {
      var e;
      return null == (e = _dependency2.find("UICamera", this.canvas)) ? void 0 : e.getComponent(_dependency2.Camera);
    }
  }, {
    key: "effectCamera",
    get: function () {
      var e;
      return null == (e = _dependency2.find("EffectCamera", this.canvas)) ? void 0 : e.getComponent(_dependency2.Camera);
    }
  }, {
    key: "canvas",
    get: function () {
      return this._canvas;
    }
  }]), e;
}()).module = "【UI管理器】", _dependency2.cclegacy._RF.pop();
