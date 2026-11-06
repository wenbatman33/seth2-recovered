import "../bootstrap/editor-globals";
import "../bootstrap/local-runtime";
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Alert";
import * as _dependency4 from "./main-GameAlert";
import * as _dependency5 from "./main-GlobalAudio";
import * as _dependency6 from "./main-Loading";
import * as _dependency7 from "./main-Tips";
import * as _dependency8 from "./main-UILoading";
import * as _dependency9 from "./main-UIReconnect";
import * as _dependency0 from "./main-UpdateLoading";
import * as _dependency1 from "./main-Config";
import * as _dependency10 from "./main-Bundles";
import * as _dependency11 from "./main-StageData";
import * as _dependency12 from "./main-CmmEntry";
import * as _dependency13 from "./main-CommonLanguage";
import * as _dependency14 from "./main-CmmUtils";
import * as _dependency15 from "./main-Framework";
import * as _dependency16 from "./main-CommandManager";
import * as _dependency17 from "./main-FlowManager";
import * as _dependency18 from "./main-Enums";
import * as _dependency19 from "./main-Singleton";
import * as _dependency20 from "./main-ColorManager";
import * as _dependency21 from "./main-Macros";
import * as _dependency22 from "./main-WrapperData";
import * as _dependency23 from "./main-UrlUtils";
import * as _dependency24 from "./main-AdapterEvent";
import * as _dependency25 from "./main-WaitLoading";
var _export;
export { _export as Application };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Application":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, o, a, r, i, u, s, c, g, l, d, f, p, A, y, k, m, M, h, C, L, E, U, _, R, w, v, B;
_dependency2.cclegacy._RF.push({}, "342b5hltVBEl6IfNcT0LCMW", "Application", void 0);
var D = new (_publish("Application", function (t) {
    var _nativeConstructor = o;
    function o() {
      for (var n, e = arguments.length, o = new Array(e), a = 0; a < e; a++) o[a] = arguments[a];
      return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this)._enterBackgroundTime = 0, n._wssCacertUrl = "", n._globalAudio = null, n;
    }
    _dependency.inheritsLoose(o, t);
    var M = o.prototype;
    return M.getColor = function (t, n) {
      n || (n = _dependency21.Macro.BUNDLE_RESOURCES);
      var e = [];
      return e.push("" + _dependency21.Macro.USING_COLOR_KEY + n + "." + t), this.colorManager.get(e);
    }, M.init = function () {
      t.prototype.init.call(this), _dependency2.macro.ENABLE_MULTI_TOUCH = !1, this.updateManager.hotUpdateUrl = _dependency1.Config.HOT_UPDATE_URL, this.updateManager.isAutoVersion = _dependency1.Config.USE_AUTO_VERSION, this.updateManager.isSkipCheckUpdate = _dependency1.Config.isSkipCheckUpdate, this.entryManager.delegate = new _dependency12.CmmEntry(), this.language.addDelegate(new _dependency13.CommonLanguage());
      var n = _dependency23.default.getViewModeParam(),
        e = _dependency24.EOrientationType.LANDSCAPE;
      n && ("landscape" == n ? e = _dependency24.EOrientationType.LANDSCAPE : "portrait" == n && (e = _dependency24.EOrientationType.PORTRAIT)), this.dataCenter.get(_dependency22.default).orientation = e;
    }, M.onLoad = function (t) {
      App.uiManager.onLoad(t), App.serviceManager.onLoad(), App.entryManager.onLoad(t), App.releaseManger.onLoad(t), gsap.registerPlugin(MotionPathPlugin);
    }, M.update = function (t) {
      App.serviceManager.update(), App.asset.remote.update();
    }, M.onDestroy = function (t) {
      App.serviceManager.onDestroy(), App.entryManager.onDestroy(t), App.releaseManger.onDestroy(t);
    }, M.onEnterBackground = function () {
      this._enterBackgroundTime = Date.timeNow(), Log.d("[MainController]", "onEnterBackground " + this._enterBackgroundTime), App.globalAudio.onEnterBackground(), App.serviceManager.onEnterBackground();
    }, M.onEnterForgeground = function () {
      var t = Date.timeNow(),
        n = t - this._enterBackgroundTime;
      Log.d("[MainController]", "onEnterForgeground " + t + " background total time : " + n), App.globalAudio.onEnterForgeground(n), App.serviceManager.onEnterForgeground(n);
    }, _dependency.createClass(o, [{
      key: "isLazyRelease",
      get: function () {
        return !0;
      }
    }, {
      key: "Bundles",
      get: function () {
        return _dependency10.EBundles;
      }
    }, {
      key: "isAutoReleaseUnuseResources",
      get: function () {
        return !0;
      }
    }, {
      key: "autoReleaseUnuseResourcesTimeout",
      get: function () {
        return 300;
      }
    }, {
      key: "utils",
      get: function () {
        return _dependency19.default.instance.get(_dependency14.CmmUtils);
      }
    }, {
      key: "uiReconnect",
      get: function () {
        return _dependency19.default.instance.get(_dependency9.UIReconnect);
      }
    }, {
      key: "tips",
      get: function () {
        return _dependency19.default.instance.get(_dependency7.default);
      }
    }, {
      key: "uiLoading",
      get: function () {
        return _dependency19.default.instance.get(_dependency8.default);
      }
    }, {
      key: "alert",
      get: function () {
        return _dependency19.default.instance.get(_dependency3.default);
      }
    }, {
      key: "gameAlert",
      get: function () {
        return _dependency19.default.instance.get(_dependency4.default);
      }
    }, {
      key: "loading",
      get: function () {
        return _dependency19.default.instance.get(_dependency6.default);
      }
    }, {
      key: "updateLoading",
      get: function () {
        return _dependency19.default.instance.get(_dependency0.default);
      }
    }, {
      key: "waitLoading",
      get: function () {
        return _dependency19.default.instance.get(_dependency25.default);
      }
    }, {
      key: "stageData",
      get: function () {
        return this.dataCenter.get(_dependency11.StageData);
      }
    }, {
      key: "flowManager",
      get: function () {
        return _dependency19.default.instance.get(_dependency17.FlowManager);
      }
    }, {
      key: "commandManager",
      get: function () {
        return _dependency19.default.instance.get(_dependency16.default);
      }
    }, {
      key: "colorManager",
      get: function () {
        return _dependency19.default.instance.get(_dependency20.ColorManager);
      }
    }, {
      key: "wssCacertUrl",
      get: function () {
        return this._wssCacertUrl;
      },
      set: function (t) {
        this._wssCacertUrl = t;
      }
    }, {
      key: "globalAudio",
      get: function () {
        return this._globalAudio || (this._globalAudio = this.uiManager.canvas.getComponent(_dependency5.default)), this._globalAudio;
      }
    }]), o;
  }(_dependency15.Framewok)))(),
  T = _dependency18.LogLevel.ERROR;
D.logger.level = T, window.App = D, D.init(), _dependency2.cclegacy._RF.pop();
