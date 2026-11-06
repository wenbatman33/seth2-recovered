// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./slotFramework-UrlModel";
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
var t, e, r;
_dependency.cclegacy._RF.push({}, "dc9242KCylKNaq6Yhlr3KQP", "UrlUtils", void 0);
_publish("default", function () {
  function n() {}
  return n.getParam = function (n) {
    if (!_dependency.sys.isNative) return new URL(window.location.href).searchParams.get(n);
  }, n.getUrlParam = function (n, t) {
    if (!_dependency.sys.isNative) return new URL(n).searchParams.get(t);
  }, n.hasParam = function (n, t) {
    if (void 0 === t && (t = window.location.href), !_dependency.sys.isNative) return new URL(t).searchParams.has(n);
  }, n.getSearchString = function () {
    if (!_dependency.sys.isNative) return new URL(window.location.href).searchParams.toString();
  }, n.getUrlProtocol = function () {
    if (!_dependency.sys.isNative) return new URL(window.location.href).protocol;
  }, n.getBaseUrl = function () {
    if (!_dependency.sys.isNative) return new URL(window.location.href).origin;
  }, n.getTokenFromUrl = function () {
    return new window.URL(window.location.href).searchParams.get("t");
  }, n.getHostname = function () {
    return new URL(window.location.href).hostname;
  }, n.GetAvatarUrl = function (n) {
    if (n) {
      if (n.includes("http")) {
        var t = n.split(".");
        t.includes("png") || t.includes("jpg") || (n += ".png");
      } else n = _dependency2.default.base_url + "/avatars/" + n + ".png";
      return n;
    }
  }, n;
}());
_dependency.cclegacy._RF.pop();
