// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as Adapter };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Adapter":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, o, i, r, s;
var a;
_dependency2.cclegacy._RF.push({}, "aaa34/PoEtBfKKezXCXgQqE", "Adapter", void 0);
var c = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("Adapter", c("Adapter")(a = function (t) {
  var _nativeConstructor = o;
  function o() {
    for (var n, e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this)._func = null, n;
  }
  _dependency.inheritsLoose(o, t);
  var i = o.prototype;
  return i.onLoad = function () {
    t.prototype.onLoad && t.prototype.onLoad.call(this), this.onChangeSize();
  }, i.onEnable = function () {
    t.prototype.onEnable && t.prototype.onEnable.call(this), this.addEvents();
  }, i.onDisable = function () {
    this.removeEvents(), t.prototype.onDisable && t.prototype.onDisable.call(this);
  }, i.onDestroy = function () {
    this.removeEvents(), t.prototype.onDestroy && t.prototype.onDestroy.call(this);
  }, i.addEvents = function () {
    this._func || (this._func = this.onChangeSize.bind(this), window.addEventListener("resize", this._func), window.addEventListener("orientationchange", this._func));
  }, i.removeEvents = function () {
    this._func && (window.removeEventListener("resize", this._func), window.removeEventListener("orientationchange", this._func)), this._func = null;
  }, i.onChangeSize = function () {}, _dependency.createClass(o, [{
    key: "width",
    get: function () {
      var t = this.getComponent(_dependency2.UITransform);
      return t ? t.width : 0;
    },
    set: function (t) {
      var n = this.getComponent(_dependency2.UITransform);
      n && (n.width = t);
    }
  }, {
    key: "height",
    get: function () {
      var t = this.getComponent(_dependency2.UITransform);
      return t ? t.height : 0;
    },
    set: function (t) {
      var n = this.getComponent(_dependency2.UITransform);
      n && (n.height = t);
    }
  }]), o;
}(_dependency2.Component)) || a);
_dependency2.cclegacy._RF.pop();
