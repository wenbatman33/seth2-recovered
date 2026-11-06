import "./main-Application";
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-CmmEntry";
import * as _dependency5 from "./main-Entry";
import * as _dependency6 from "./main-Decorators";
import * as _dependency7 from "./main-Macros";
import * as _dependency8 from "./main-WrapperData";
import * as _dependency9 from "./main-WrapperLanguage";
import * as _dependency0 from "./main-WrapperView";
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, t, r, o, a, u, i, s, c, p;
var l;
_dependency2.cclegacy._RF.push({}, "bf4f5bJmlxJ8KeUii64qhtC", "WrapperEntry", void 0);
_dependency6.registerEntry("WrapperEntry", _dependency7.Macro.BUNDLE_RESOURCES, _dependency0.default)(l = function (t) {
  var _nativeConstructor = a;
  function a() {
    for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
    return (e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this).language = new _dependency9.WrapperLanguage(), e.isMain = !0, e.delegate = new _dependency4.CmmEntry(), e;
  }
  _dependency.inheritsLoose(a, t);
  var u = a.prototype;
  return u.addNetHandler = function () {}, u.removeNetHandler = function () {}, u.loadResources = function (e) {
    e();
  }, u.openGameView = function (e) {
    App.entryManager.enterBundle(_dependency3.EBundles[_dependency3.EBundles.slotFramework]);
  }, u.initData = function () {}, u.pauseMessageQueue = function () {}, u.resumeMessageQueue = function () {}, u.onEnter = function (e) {
    t.prototype.onEnter.call(this, e), Log.d("--------------onEnterLogin--------------");
  }, u.onEnterGameView = function (e) {
    t.prototype.onEnterGameView.call(this, e), App.uiManager.closeExcept([_dependency0.default]);
  }, u.onUnloadBundle = function () {
    this.removeNetHandler(), this.unloadResources();
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), a;
}(_dependency5.Entry));
_dependency2.cclegacy._RF.pop();
