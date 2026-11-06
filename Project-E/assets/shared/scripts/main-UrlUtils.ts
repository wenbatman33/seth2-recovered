// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-env";
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
var n, t, i;
_dependency.cclegacy._RF.push({}, "968b8vP7BtFM6aNpdaUJsj5", "UrlUtils", void 0), _publish("default", function () {
  function e() {}
  return e.getParam = function (e, n) {
    if (void 0 === n && (n = window.location.href), !_dependency.sys.isNative) return new URL(n).searchParams.get(e);
  }, e.hasParam = function (e, n) {
    if (void 0 === n && (n = window.location.href), !_dependency.sys.isNative) return "" !== n && new URL(n).searchParams.has(e);
  }, e.getSearchString = function () {
    if (!_dependency.sys.isNative) return new URL(window.location.href).searchParams.toString();
  }, e.getUrlProtocol = function () {
    if (!_dependency.sys.isNative) return new URL(window.location.href).protocol;
  }, e.getBaseUrl = function () {
    if (!_dependency.sys.isNative) return new URL(window.location.href).origin;
  }, e.getTokenFromUrl = function () {
    return new window.URL(window.location.href).searchParams.get("t");
  }, e.getHostname = function () {
    return new URL(window.location.href).hostname;
  }, e.GetBaseUrl = function () {
    return "localhost" === new URL(window.location.href).hostname ? _dependency2.ENV.local.baseUrl : e.getBaseUrl();
  }, e.GetAvatarUrl = function (n) {
    if (n) {
      if (n.includes("http")) {
        var t = n.split(".");
        t.includes("png") || t.includes("jpg") || (n += ".png");
      } else n = e.GetBaseUrl() + "/avatars/" + n + ".png";
      return n;
    }
  }, e.getViewModeParam = function () {
    var n = e.getParam("gn") + "_view_mode",
      t = localStorage.getItem(n);
    return null != t ? null != window.viewMode ? window.viewMode : (window.viewMode = t, t) : e.getParam("view_mode") ? e.getParam("view_mode") : "landscape";
  }, e;
}()).viewMode = null, _dependency.cclegacy._RF.pop();
