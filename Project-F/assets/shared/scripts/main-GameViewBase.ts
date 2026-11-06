// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-UIView";
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
var t, n, o, i, r;
var s, c;
_dependency2.cclegacy._RF.push({}, "66ed7mLgh5JN7pytAnnmoAG", "GameViewBase", void 0);
var a = _dependency2._decorator.ccclass,
  l = (_dependency2._decorator.property, _dependency2._decorator.menu);
_publish("default", a(s = l("Quick公共元件/GameView")(((c = function (e) {
  var _nativeConstructor = o;
  function o() {
    for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
    return (t = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this)._logic = null, t;
  }
  _dependency.inheritsLoose(o, e);
  var i = o.prototype;
  return i.setLogic = function (e) {
    this._logic = e, e && e.onLoad(this);
  }, i.onLoad = function () {
    e.prototype.onLoad.call(this), this.onEnterGameView();
  }, i.show = function (t) {
    e.prototype.show.call(this, t), App.entryManager.onShowGameView(this.bundle, this);
  }, i.onEnterGameView = function () {
    App.entryManager.onEnterGameView(this.bundle, this);
  }, i.enterBundle = function (e, t) {
    App.entryManager.enterBundle(e, t);
  }, i.backBundle = function (e) {
    App.entryManager.backBundle(e);
  }, i.onDestroy = function () {
    this.audioHelper && this.audioHelper.stopAllEffects(), this.logic && App.logicManager.destory(this.logic.bundle), App.entryManager.onDestroyGameView(this.bundle, this), e.prototype.onDestroy.call(this);
  }, i.update = function (e) {
    this.logic && this.logic.update(e);
  }, i.reset = function () {
    this.logic && this.logic.reset(this);
  }, _dependency.createClass(o, [{
    key: "logic",
    get: function () {
      return this._logic;
    }
  }]), o;
}(_dependency3.default)).logicType = null, s = c)) || s) || s);
_dependency2.cclegacy._RF.pop();
