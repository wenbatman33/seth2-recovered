// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-UIView";
var _export;
export { _export as WebUiView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WebUiView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, s, n, r;
var o;
_dependency2.cclegacy._RF.push({}, "070caQikuZOGIt/+qGWXA1I", "WebUiView", void 0);
var a = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("WebUiView", a("WebUiView")(o = function (e) {
  var _nativeConstructor = i;
  function i() {
    for (var t, s = arguments.length, r = new Array(s), o = 0; o < s; o++) r[o] = arguments[o];
    return (t = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this).iframe = null, t.gameDiv = null, t.onResizeHandler = function () {
      t.iframe.style.width = "" + t.gameDiv.style.width, t.iframe.style.height = "" + t.gameDiv.style.height;
    }, t.messageCloseWebUiViewHandler = function (e) {
      if (e.data && "closeWebUiView" === e.data.type) {
        var t = document.getElementById("webView");
        t && (_dependency2.game.container.removeChild(t), t = null, App.globalAudio.resumeMusic(), App.uiManager.close(i));
      }
    }, t;
  }
  _dependency.inheritsLoose(i, e);
  var s = i.prototype;
  return s.onLoad = function () {
    e.prototype.onLoad.call(this), window.addEventListener("message", this.messageCloseWebUiViewHandler);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    window.removeEventListener("message", this.messageCloseWebUiViewHandler), window.removeEventListener("resize", this.onResizeHandler), e.prototype.onDestroy.call(this);
  }, i.getPrefabUrl = function () {
    return "prefabs/view/WebUiView";
  }, s.init = function () {
    this.gameDiv = document.getElementById("GameDiv"), this.setWebViewUrl(this.args);
  }, s.setWebViewUrl = function (e) {
    var t = document.createElement("iframe");
    return this.iframe = t, t.style.position = "absolute", t.style.width = "100%", t.style.height = "100%", t.style.top = "0px", t.style.left = "0px", t.id = "webView", _dependency2.game.container.appendChild(t), this.setStyle(e), t.src = e;
  }, s.setStyle = function (e) {
    e.includes("betrecord-web") && this.setBetRecordStyle();
  }, s.setBetRecordStyle = function () {
    this.iframe.style.position = "absolute", this.iframe.style.width = "" + this.gameDiv.style.width, this.iframe.style.height = "" + this.gameDiv.style.height, this.iframe.style.top = "50%", this.iframe.style.left = "50%", this.iframe.style.transform = "translate(-50%, -50%)", this.iframe.style.border = "none", window.addEventListener("resize", this.onResizeHandler);
  }, s.addEvents = function () {
    e.prototype.addEvents.call(this);
  }, i;
}(_dependency3.default)) || o);
_dependency2.cclegacy._RF.pop();
