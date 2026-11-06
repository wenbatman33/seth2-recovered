// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-BitEncrypt";
var _export;
export { _export as LocalStorage };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "LocalStorage":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, r, n;
_dependency2.cclegacy._RF.push({}, "ecf54s/MtVLRIrjjIqrRIjp", "LocalStorage", void 0), _publish("LocalStorage", function () {
  function t() {
    this.module = null, this.key = "VuxiAKihQ0VR9WRe";
  }
  var r = t.prototype;
  return r.encrypt = function (t) {
    return _dependency3.BitEncrypt.encode(JSON.stringify(t), this.key);
  }, r.decryption = function (t) {
    return _dependency3.BitEncrypt.decode(t, this.key);
  }, r.getItem = function (t, e) {
    void 0 === e && (e = null);
    var r = this.storage.getItem(t);
    if (!r) return e;
    try {
      var n = this.decryption(r),
        o = JSON.parse(n);
      return o.type ? o.value : r;
    } catch (t) {
      return r;
    }
  }, r.setItem = function (t, e) {
    var r = typeof e;
    if ("number" == r || "string" == r || "boolean" == r || "object" == r) {
      var n = {
        type: r,
        value: e
      };
      try {
        var o = this.encrypt(n);
        this.storage.setItem(t, o);
      } catch (t) {}
    }
  }, r.removeItem = function (t) {
    this.storage.removeItem(t);
  }, r.clear = function () {
    window.localStorage.clear();
  }, _dependency.createClass(t, [{
    key: "storage",
    get: function () {
      return window.localStorage;
    }
  }]), t;
}()).module = "【本地倉庫】", _dependency2.cclegacy._RF.pop();
