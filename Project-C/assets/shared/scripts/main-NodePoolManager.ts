// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Macros";
var _export;
export { _export as NodePool };
var _export2;
export { _export2 as NodePoolManager };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "NodePool":
      _export = value;
      break;
    case "NodePoolManager":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, e, n, s, i;
_dependency2.cclegacy._RF.push({}, "98d8dJBeClOv4kRv+WtZ/mZ", "NodePoolManager", void 0);
var l = _publish("NodePool", function () {
  function o(o) {
    this.name = _dependency3.Macro.UNKNOWN, this.pool = [], this.node = null, this.name = o;
  }
  var e = o.prototype;
  return e.clear = function () {
    for (var o = this.pool.length, t = 0; t < o; ++t) this.pool[t].destroy();
    this.pool = [], this.node && _dependency2.isValid(this.node) && this.node.destroy(), this.node = null;
  }, e.put = function (o) {
    o && -1 === this.pool.indexOf(o) && (o.removeFromParent(), this.pool.push(o));
  }, e.get = function () {
    if (this.pool.length <= 0) return this.node ? _dependency2.instantiate(this.node) : null;
    var o = this.pool.length - 1,
      t = this.pool[o];
    return this.pool.length = o, t;
  }, _dependency.createClass(o, [{
    key: "cloneNode",
    get: function () {
      return this.node;
    },
    set: function (o) {
      o && _dependency2.isValid(o) && (this.node = o, this.node.removeFromParent());
    }
  }, {
    key: "size",
    get: function () {
      return this.pool.length;
    }
  }]), o;
}());
_publish("NodePoolManager", function () {
  function o() {
    this.module = null, this.pools = new Map();
  }
  var t = o.prototype;
  return t.createPool = function (o) {
    return this.pools.has(o) || this.pools.set(o, new l(o)), this.pools.get(o);
  }, t.deletePool = function (o) {
    if ("string" == typeof o) {
      if (this.pools.has(o)) {
        var t = this.pools.get(o);
        t && t.clear(), this.pools.delete(o);
      }
    } else o && o instanceof l && this.deletePool(o.name);
  }, t.getPool = function (o, t) {
    return void 0 === t && (t = !0), this.pools.has(o) ? this.pools.get(o) : t ? this.createPool(o) : null;
  }, t.debug = function () {
    Log.d("-------物件池節點快取資訊-------"), this.pools.forEach(function (o, t) {
      Log.d(t);
    });
  }, o;
}()).module = "【物件池】", _dependency2.cclegacy._RF.pop();
