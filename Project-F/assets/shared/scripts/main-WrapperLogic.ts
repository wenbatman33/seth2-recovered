// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-ResourceLoader";
import * as _dependency4 from "./main-Logic";
import * as _dependency5 from "./main-WrapperData";
import * as _dependency6 from "./main-AdapterEvent";
var _export;
export { _export as WrapperLogic };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WrapperLogic":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, o, i, r, a, c;
_dependency2.cclegacy._RF.push({}, "302f8IF/spDE5Qlwe+LRO9e", "WrapperLogic", void 0);
_publish("WrapperLogic", function (t) {
  var _nativeConstructor = o;
  function o() {
    for (var n, e = arguments.length, o = new Array(e), r = 0; r < e; r++) o[r] = arguments[r];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this).loader = new _dependency3.default(), n.orientationHandler = function (t) {
      n.data.orientation = t;
    }, n;
  }
  _dependency.inheritsLoose(o, t);
  var r = o.prototype;
  return r.onLoad = function (n) {
    t.prototype.onLoad.call(this, n), this._init();
  }, r.onDestroy = function () {}, r.reset = function () {}, r._init = function () {}, r.loadResources = function () {}, r.addEvents = function () {
    this.on(_dependency6.AdapterEvent.ORIENTATION, this.orientationHandler);
  }, _dependency.createClass(o, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }, {
    key: "view",
    get: function () {
      return this.gameView;
    }
  }]), o;
}(_dependency4.Logic));
_dependency2.cclegacy._RF.pop();
