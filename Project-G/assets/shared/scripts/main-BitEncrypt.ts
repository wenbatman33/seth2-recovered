// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as BitEncrypt };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BitEncrypt":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n;
_dependency2.cclegacy._RF.push({}, "dc65dfUZyBKGo+ZLjacvgTW", "BitEncrypt", void 0);
_publish("BitEncrypt", new (function () {
  function t() {
    this.logTag = "[BitEncrypt]:", this._encryptKey = "EskKbMvzZBILhcTv";
  }
  var n = t.prototype;
  return n.decode = function (t, e) {
    return this._code(t, e);
  }, n.encode = function (t, e) {
    return this._code(t, e);
  }, n._code = function (t, e) {
    var n = this._check(t, e);
    if (n.isOK) {
      for (var r = [], c = 0; c < t.length; c++) r.push(t.charCodeAt(c));
      for (var i = 0, o = /[\w\d_-`~#!$%^&*(){}=+;:'"<,>,/?|\\\u4e00-\u9fa5]/g, h = 0; h < r.length; h++) {
        var s = t[h].match(o);
        s && s.length > 0 && (r[h] ^= n.key.charCodeAt(i), (s = String.fromCharCode(r[h]).match(o)) && s.length || (r[h] ^= n.key.charCodeAt(i)), ++i >= n.key.length && (i = 0));
      }
      for (var u = "", y = 0; y < r.length; y++) u += String.fromCharCode(r[y]);
      return u;
    }
    return t;
  }, n._check = function (t, e) {
    return t && t.length > 0 ? e && e.length > 0 ? {
      isOK: !0,
      key: e
    } : this.encryptKey && this.encryptKey.length > 0 ? {
      isOK: !0,
      key: this.encryptKey
    } : {
      isOK: !1,
      key: ""
    } : {
      isOK: !1,
      key: ""
    };
  }, _dependency.createClass(t, [{
    key: "encryptKey",
    get: function () {
      return this._encryptKey;
    },
    set: function (t) {
      this._encryptKey = t;
    }
  }]), t;
}())());
_dependency2.cclegacy._RF.pop();
