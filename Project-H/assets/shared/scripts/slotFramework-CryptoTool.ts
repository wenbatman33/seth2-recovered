// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./slotFramework-CryptoWasm";
var _export;
export { _export as CryptoTool };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CryptoTool":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, e, u, a;
_dependency2.cclegacy._RF.push({}, "b3eda+64XxIvJDkUSKPoNHl", "CryptoTool", void 0);
var c = _publish("CryptoTool", function () {
  function r() {}
  return r.ready = function () {
    return _dependency3.CryptoWasm.ready();
  }, r.initKey = function () {
    var r = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function r(t) {
      return _dependency.regeneratorRuntime().wrap(function (r) {
        for (;;) switch (r.prev = r.next) {
          case 0:
            return r.next = 2, _dependency3.CryptoWasm.ready();
          case 2:
            if (this.currentToken !== t || !_dependency3.CryptoWasm.hasKey()) {
              r.next = 4;
              break;
            }
            return r.abrupt("return");
          case 4:
            _dependency3.CryptoWasm.initKey(t), this.currentToken = t;
          case 6:
          case "end":
            return r.stop();
        }
      }, r, this);
    }));
    return function (t) {
      return r.apply(this, arguments);
    };
  }(), r.clear = function () {
    _dependency3.CryptoWasm.clearKey(), this.currentToken = "";
  }, r.encrypt = function () {
    var r = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function r(t) {
      var n;
      return _dependency.regeneratorRuntime().wrap(function (r) {
        for (;;) switch (r.prev = r.next) {
          case 0:
            return r.next = 2, _dependency3.CryptoWasm.ready();
          case 2:
            return n = pako.deflate(JSON.stringify(t)), r.abrupt("return", _dependency3.CryptoWasm.encrypt(n));
          case 4:
          case "end":
            return r.stop();
        }
      }, r);
    }));
    return function (t) {
      return r.apply(this, arguments);
    };
  }(), r.decrypt = function () {
    var r = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function r(t) {
      var n, u, c;
      return _dependency.regeneratorRuntime().wrap(function (r) {
        for (;;) switch (r.prev = r.next) {
          case 0:
            return r.next = 2, _dependency3.CryptoWasm.ready();
          case 2:
            return n = t instanceof Uint8Array ? t : new Uint8Array(t), u = _dependency3.CryptoWasm.decrypt(n), c = pako.inflate(u, {
              to: "string"
            }), r.abrupt("return", JSON.parse(c));
          case 6:
          case "end":
            return r.stop();
        }
      }, r);
    }));
    return function (t) {
      return r.apply(this, arguments);
    };
  }(), _dependency.createClass(r, null, [{
    key: "kid",
    get: function () {
      return _dependency3.CryptoWasm.kid();
    }
  }]), r;
}());
c.currentToken = "", c.variant = "custom", _dependency2.cclegacy._RF.pop();
