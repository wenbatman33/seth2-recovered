// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./slotFramework-CryptoCoreWasm";
var _export;
export { _export as CryptoWasm };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CryptoWasm":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, r, n, i, s;
_dependency2.cclegacy._RF.push({}, "116331SgJZCIJvUzjcpma0B", "CryptoWasm", void 0);
var o = {
    1: "wasm memory grow failed",
    2: "session key not initialized",
    3: "frame too short",
    4: "kid mismatch",
    5: "bad argument"
  },
  a = _publish("CryptoWasm", function () {
    function t() {}
    return t.ready = function () {
      var t = this;
      return this.exp ? Promise.resolve() : (this.loading || (this.loading = this.load().catch(function (e) {
        throw t.loading = null, e;
      })), this.loading);
    }, t.load = function () {
      var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
        var e,
          r,
          i,
          o,
          a = this;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if ("undefined" != typeof WebAssembly) {
                t.next = 2;
                break;
              }
              throw new Error("[CryptoWasm] WebAssembly is not available on this platform");
            case 2:
              return e = this.base64ToBytes(_dependency3.CRYPTO_CORE_WASM_B64), r = {
                env: {
                  random_bytes: function (t, e) {
                    var r = new Uint8Array(a.e.memory.buffer, t, e);
                    crypto.getRandomValues(r);
                  }
                }
              }, t.next = 6, WebAssembly.instantiate(e, r);
            case 6:
              i = t.sent, o = i.instance, this.exp = o.exports;
            case 9:
            case "end":
              return t.stop();
          }
        }, t, this);
      }));
      return function () {
        return t.apply(this, arguments);
      };
    }(), t.kid = function () {
      return this.e.kid();
    }, t.hasKey = function () {
      return 1 === this.e.has_key();
    }, t.initKey = function (t) {
      var e = this.encoder.encode(t);
      this.writeIn(e), 1 !== this.e.init_key(e.length) && this.throwLastError("init_key");
    }, t.clearKey = function () {
      this.exp && this.exp.clear_key();
    }, t.encrypt = function (t) {
      this.writeIn(t);
      var e = this.e.encrypt(t.length);
      return -1 === e && this.throwLastError("encrypt"), this.readOut(e);
    }, t.decrypt = function (t) {
      this.writeIn(t);
      var e = this.e.decrypt(t.length);
      return -1 === e && this.throwLastError("decrypt"), this.readOut(e);
    }, t.writeIn = function (t) {
      var e = this.e.in_buf(t.length);
      0 === e && this.throwLastError("in_buf"), new Uint8Array(this.e.memory.buffer, e, t.length).set(t);
    }, t.readOut = function (t) {
      return new Uint8Array(this.e.memory.buffer, this.e.out_ptr(), t).slice();
    }, t.throwLastError = function (t) {
      var e,
        r = this.e.last_error();
      throw new Error("[CryptoWasm] " + t + " failed: " + (null != (e = o[r]) ? e : "unknown") + " (" + r + ")");
    }, t.base64ToBytes = function (t) {
      for (var e = atob(t), r = new Uint8Array(e.length), n = 0; n < e.length; n++) r[n] = e.charCodeAt(n);
      return r;
    }, _dependency.createClass(t, null, [{
      key: "isReady",
      get: function () {
        return null !== this.exp;
      }
    }, {
      key: "e",
      get: function () {
        if (!this.exp) throw new Error("[CryptoWasm] not ready, call ready() first");
        return this.exp;
      }
    }]), t;
  }());
a.exp = null, a.loading = null, a.encoder = new TextEncoder(), _dependency2.cclegacy._RF.pop();
