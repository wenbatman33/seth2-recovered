// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-env";
import * as _dependency4 from "./main-BaseModel";
import * as _dependency5 from "./slotFramework-UrlUtils2";
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
var a, e, r, n, s, o, i;
_dependency2.cclegacy._RF.push({}, "6dd8fCAZ6xLaL/QZ37w0QYU", "UrlModel", void 0);
var c = function (t) {
  var _nativeConstructor = r;
  function r() {
    var a;
    return (a = Reflect.construct(t, [], new.target || _nativeConstructor) || this).data = {
      base_api: "",
      base_url: "",
      socket_url: "",
      searchParams: null
    }, a;
  }
  _dependency.inheritsLoose(r, t), r.Instance = function () {
    return this._instance || (this._instance = new r());
  };
  var o = r.prototype;
  return o.init = function () {
    var t = new URL(window.location.href).hostname;
    this.data.base_url = "localhost" === t ? _dependency3.ENV.local.baseUrl : _dependency5.default.getBaseUrl();
  }, o.getData = function () {
    return this.data;
  }, o.setSearchParams = function () {
    if (!_dependency2.sys.isNative) {
      this.init(), this.data.searchParams = {
        t: _dependency5.default.getParam("t"),
        gn: _dependency5.default.getParam("gn"),
        l: this.getLanguageParam(),
        ct: _dependency5.default.getParam("ct"),
        gt: _dependency5.default.getParam("gt"),
        ts: _dependency5.default.getParam("ts"),
        view_mode: _dependency5.default.getParam("view_mode"),
        p: _dependency5.default.getParam("p"),
        wv: _dependency5.default.getParam("wv"),
        gv: _dependency5.default.getParam("gv"),
        client_type: _dependency5.default.getParam("client_type"),
        goback_url: _dependency5.default.getParam("goback_url"),
        table: _dependency5.default.getParam("table"),
        protocol: _dependency5.default.getParam("protocol")
      };
      var t = _dependency5.default.getParam("socket_url");
      if (t) {
        var a = _dependency5.default.getParam("protocol"),
          e = a || _dependency5.default.getUrlProtocol();
        this.data.socket_url = e + "//" + t;
      }
      Log.d("url data ==> ", this.data);
    }
  }, o.getLanguageParam = function () {
    var t = _dependency5.default.getParam("l") ? _dependency5.default.getParam("l") : "zh-tw";
    return App.language.getSupportLanguages().includes(t) ? t : (console.error("語系設定錯誤"), "zh-tw");
  }, o.getViewModeParam = function () {
    return _dependency5.default.getParam("view_mode") ? _dependency5.default.getParam("view_mode") : "landscape";
  }, _dependency.createClass(r, [{
    key: "base_api",
    get: function () {
      return this.data.base_api;
    }
  }, {
    key: "base_url",
    get: function () {
      return this.data.base_url;
    }
  }, {
    key: "socket_url",
    get: function () {
      return this.data.socket_url;
    }
  }, {
    key: "searchParams",
    get: function () {
      return this.data.searchParams;
    }
  }, {
    key: "socket_token",
    get: function () {
      return this.data.searchParams.t;
    },
    set: function (t) {
      this.data.searchParams.t = t;
    }
  }]), r;
}(_dependency4.BaseModel);
c._instance = null;
_publish("default", c.Instance());
_dependency2.cclegacy._RF.pop();
