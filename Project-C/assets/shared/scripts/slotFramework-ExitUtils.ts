import {EDITOR as __localNavigationEditor} from 'cc/env';
import {installLocalNavigationHooks as __installLocalNavigation} from '../../game/backend/MenuMetadata';
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./slotFramework-UrlUtils2";
import * as _dependency3 from "./main-CmmUtils";
import * as _dependency4 from "./slotFramework-InitialModel";
var _export;
export { _export as EClientTypes };
var _export2;
export { _export2 as ExitUtils };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EClientTypes":
      _export = value;
      break;
    case "ExitUtils":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i, t, n, s;
var o;
_publish("EClientTypes", void 0), _dependency.cclegacy._RF.push({}, "c25f9RY6O1CGaE/8HBnBB+O", "ExitUtils", void 0), function (e) {
  e.WEB = "web", e.WAP = "wap", e.ANDROID = "android", e.IOS = "ios", e.RN = "rn", e.UNITY_WEBVIEW = "uniWebView";
}(o || (o = _publish("EClientTypes", {}))), _publish("ExitUtils", function () {
  function e() {}
  return e.exit = function () {
    var e = _dependency3.CmmUtils.getClientType(),
      i = this.getGoBackUrl();
    if (i) this.exitWeb(i);else switch (this._window.close(), e) {
      case o.WEB:
      case o.WAP:
        this.exitWeb();
        break;
      case o.ANDROID:
        this.exitWVJB(), this.exitAndroid();
        break;
      case o.IOS:
        this.exitWVJB(), this.exitIOS();
        break;
      case o.RN:
        this.exitRN();
        break;
      case o.UNITY_WEBVIEW:
        window.location.href = "uniwebview://exit";
        break;
      default:
        this.exitWeb();
    }
  }, e.getGoBackUrl = function () {
    var e,
      i = _dependency2.default.getParam("goback_url"),
      n = null == (e = _dependency4.default.getData()) ? void 0 : e.lobbyUrl;
    return n && function (e) {
      var i = new URL(e),
        t = Number(i.searchParams.get("ts"));
      return new Date().getTime() - t < 0;
    }(n) && (i = n), i;
  }, e.exitWeb = function (e) {
    var i = this;
    e && (this._window.location.href = e);
    var t = "error.html",
      n = this._window.location.href,
      s = new URL(n).searchParams.get("l");
    s && (t += "?l=" + encodeURIComponent(s)), setTimeout(function () {
      window.close(), i._window.open(t, "_self"), i._window.close();
    }, 1e3);
  }, e.webClose = function () {
    if (this._window.navigator.appName.indexOf("Explorer") < 0) {
      var e = navigator.userAgent.indexOf("MSIE") + 5,
        i = Number(navigator.userAgent.substring(e, e + 1));
      i >= 7 ? (this._window.open("", "_self", ""), this._window.close()) : 6 == i ? (this._window.opener = null, this._window.close()) : (this._window.opener = "", this._window.close());
    } else {
      var t = this._window.location.href;
      this._window.open(t, "_self").close();
    }
  }, e.exitWVJB = function () {
    var e = (this._window || {}).WebViewJavascriptBridge;
    e && (e.callHandler("UnityBack", {
      message: "back"
    }, function (e) {}), e.callHandler("TwGameBack", {
      message: "back"
    }, function (e) {}));
  }, e.exitAndroid = function () {
    var e = (this._window || {}).androidFunc;
    null == e || null == e.finish || e.finish();
  }, e.exitRN = function () {
    var e;
    null == (e = this._window) || null == e.postMessage || e.postMessage(JSON.stringify({
      type: "iosback"
    }));
  }, e.exitIOS = function () {
    var e = (this._window || {}).webkit;
    if (null != e && e.messageHandlers) {
      var i,
        t,
        n = e.messageHandlers;
      if (null != (i = n.TwGameBack) && i.postMessage) return n.TwGameBack.postMessage({
        action: "exit"
      });
      if (null != (t = n.UnityBack) && t.postMessage) return n.UnityBack.postMessage({
        action: "exit"
      });
    }
  }, e.replayExitWeb = function (e) {
    var i = this;
    e && (this._window.location.href = e), setTimeout(function () {
      window.close(), i._window.open("error.html", "_self"), i._window.close(), console.error("replayExitWeb error.html");
    }, 1e3);
  }, e;
}())._window = window, _dependency.cclegacy._RF.pop();

if(!__localNavigationEditor)__installLocalNavigation(_export2);
