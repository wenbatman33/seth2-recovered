// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-ResourceLoader";
var _export;
export { _export as Entry };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Entry":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, i, t;
_dependency2.cclegacy._RF.push({}, "5aaf2lBMtdMrrl2N8Y5zFqB", "Entry", void 0), _publish("Entry", function () {
  function e() {
    this.gameViewType = null, this.isMain = !1, this.bundle = "", this.language = null, this.color = null, this.loader = null, this.node = null, this.isRunning = !1, this._gameView = null, this.loader = new _dependency3.default();
  }
  var i = e.prototype;
  return i.onLoad = function (e) {
    this.node = e, this.isRunning = !0;
  }, i.onDestroy = function () {
    this.isRunning = !1;
  }, i.onEnter = function (e) {
    var n = this;
    App.language.addDelegate(this.language), App.colorManager.addProxy(this.color), this.initData(), this.addNetHandler(), this.pauseMessageQueue(), this.loadResources(function () {
      n.openGameView(e);
    });
  }, i.onEnterGameView = function (e) {
    this._gameView = e;
    var n = App.uiManager.getViewType(e);
    if (n && n.logicType) {
      n.logicType.module = e.bundle;
      var i = App.logicManager.get(n.logicType, !0);
      i && e.setLogic(i);
    }
  }, i.onShowGameView = function (e) {}, i.onDestroyGameView = function (e) {
    this._gameView = null;
  }, i.onUnloadBundle = function () {
    App.uiManager.closeBundleView(this.bundle), App.language.removeDelegate(this.language), App.colorManager.removeProxy(this.color), this.removeNetHandler(), this.unloadResources();
  }, i.unloadResources = function () {
    this.loader.unLoadResources();
  }, i.openGameView = function (e) {
    App.uiManager.open({
      type: this.gameViewType,
      bundle: this.bundle,
      args: e
    });
  }, i.closeGameView = function () {
    App.uiManager.close(this.gameViewType);
  }, i.call = function (e, n) {}, _dependency.createClass(e, [{
    key: "gameView",
    get: function () {
      return this._gameView;
    },
    set: function (e) {
      this._gameView = e;
    }
  }]), e;
}()).bundle = "", _dependency2.cclegacy._RF.pop();
