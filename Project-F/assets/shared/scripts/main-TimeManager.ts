// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as TimeManager };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TimeManager":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, n, r, c, a;
var o, s;
_dependency2.cclegacy._RF.push({}, "4af39EhMgVE8a/ZyuQvROdb", "TimeManager", void 0);
var l = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("TimeManager", l("TimeManager")(((s = function (e) {
  var _nativeConstructor = n;
  function n() {
    for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
    return (t = Reflect.construct(e, [this].concat(n).slice(1), new.target || _nativeConstructor) || this)._originalTick = null, t._timeScale = 1, t._resetSpeed = 1, t;
  }
  _dependency.inheritsLoose(n, e);
  var r = n.prototype;
  return r.onLoad = function () {
    n._instance = this, this._originalTick = _dependency2.director.tick.bind(_dependency2.director);
    var e = this;
    _dependency2.director.tick = function (t) {
      e._originalTick(t * e._timeScale);
    };
  }, r.setTimeScale = function (e) {
    e < 0 && (e = 0), this._timeScale = e, console.log("[TimeManager] 當前速度已設定為: " + e + "x");
  }, r.reset = function () {
    this.setTimeScale(this._resetSpeed);
  }, r.onDestroy = function () {
    this._originalTick && (_dependency2.director.tick = this._originalTick);
  }, _dependency.createClass(n, [{
    key: "resetSpeed",
    set: function (e) {
      this._resetSpeed = e;
    }
  }], [{
    key: "instance",
    get: function () {
      return this._instance;
    }
  }]), n;
}(_dependency2.Component))._instance = void 0, o = s)) || o);
_dependency2.cclegacy._RF.pop();
