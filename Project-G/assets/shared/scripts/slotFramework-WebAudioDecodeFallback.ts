// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as installWebAudioDecodeFallback };
var _export2;
export { _export2 as isUsingWasmMp3Decoder };
var _export3;
export { _export3 as releaseWebAudioDecoder };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "installWebAudioDecodeFallback":
      _export = value;
      break;
    case "isUsingWasmMp3Decoder":
      _export2 = value;
      break;
    case "releaseWebAudioDecoder":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, r, t;
_publish({
  installWebAudioDecodeFallback: function () {
    var e = window.AudioContext || window.webkitAudioContext;
    if (!e || !e.prototype || "function" != typeof e.prototype.decodeAudioData) return !1;
    if (e.prototype[u]) return !0;
    var t = e.prototype.decodeAudioData;
    return e.prototype.decodeAudioData = function (e, o, a) {
      var u,
        i,
        d,
        f,
        l,
        w = this,
        h = e.slice(0),
        v = function (e) {
          if (e.byteLength < 3) return !1;
          var n = new Uint8Array(e, 0, 3),
            r = 73 === n[0] && 68 === n[1] && 51 === n[2],
            t = 255 === n[0] && 224 == (224 & n[1]);
          return r || t;
        }(h),
        m = (v && s ? Promise.reject(new Error(c + " native mp3 decode known broken in this environment")) : (u = function (e, n, r) {
          return new Promise(function (t, o) {
            var a = function (e) {
                return o(null != e ? e : new DOMException(c + " native decodeAudioData failed", "EncodingError"));
              },
              u = e.call(n, r, t, a);
            u && "function" == typeof u.then && u.then(t, o);
          });
        }(t, w, e), i = 8e3, d = "native decodeAudioData", l = new Promise(function (e, n) {
          f = setTimeout(function () {
            return n(new Error(c + " " + d + " timeout after " + i + "ms"));
          }, i);
        }), Promise.race([u, l]).finally(function () {
          return clearTimeout(f);
        }))).catch(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n) {
          var t;
          return _dependency.regeneratorRuntime().wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (v) {
                  e.next = 2;
                  break;
                }
                throw n;
              case 2:
                return e.next = 4, p(w, h);
              case 4:
                return t = e.sent, s || (s = !0, console.warn(c + " native mp3 decode unavailable, switched to WASM decoder.", n)), e.abrupt("return", t);
              case 7:
              case "end":
                return e.stop();
            }
          }, e);
        })));
      return m.then(function (e) {
        o && o(e);
      }, function (e) {
        a && a(function (e) {
          if (e instanceof DOMException) return e;
          var n = e instanceof Error ? e.message : String(e);
          return new DOMException(n, "EncodingError");
        }(e));
      }), m.catch(function () {}), m;
    }, e.prototype[u] = !0, !0;
  },
  isUsingWasmMp3Decoder: function () {
    return s;
  },
  releaseWebAudioDecoder: function () {
    return l.apply(this, arguments);
  }
}), _dependency2.cclegacy._RF.push({}, "3d72a3fRuRJuYrjQn99BwNo", "WebAudioDecodeFallback", void 0);
var o = Promise.resolve();
function a(e) {
  var n = o.then(e, e);
  return o = n.catch(function () {}), n;
}
var c = "[WebAudioDecodeFallback]",
  u = "__webAudioDecodeFallbackInstalled",
  i = null,
  s = !1;
function d() {
  if (i) return i;
  var e = i = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
    var n, t;
    return _dependency.regeneratorRuntime().wrap(function (e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (n = window["mpg123-decoder"]) {
            e.next = 3;
            break;
          }
          throw new Error(c + " mpg123-decoder plugin not loaded (window['mpg123-decoder'] is undefined)");
        case 3:
          return t = new n.MPEGDecoder(), e.next = 6, t.ready;
        case 6:
          return e.abrupt("return", t);
        case 7:
        case "end":
          return e.stop();
      }
    }, e);
  }))();
  return e.catch(function () {
    i === e && (i = null);
  }), e;
}
function p(e, n) {
  return f.apply(this, arguments);
}
function f() {
  return (f = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t, o) {
    var u, s;
    return _dependency.regeneratorRuntime().wrap(function (e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return e.next = 2, a(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
            var n;
            return _dependency.regeneratorRuntime().wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, d();
                case 2:
                  return n = e.sent, e.prev = 3, e.next = 6, n.decode(new Uint8Array(o));
                case 6:
                  return e.abrupt("return", e.sent);
                case 7:
                  return e.prev = 7, e.prev = 8, e.next = 11, n.reset();
                case 11:
                  e.next = 17;
                  break;
                case 13:
                  e.prev = 13, e.t0 = e.catch(8), i = null, console.warn(c + " decoder reset failed, discarding instance.", e.t0);
                case 17:
                  return e.finish(7);
                case 18:
                case "end":
                  return e.stop();
              }
            }, e, null, [[3,, 7, 18], [8, 13]]);
          })));
        case 2:
          if ((u = e.sent).samplesDecoded && u.channelData.length) {
            e.next = 5;
            break;
          }
          throw new DOMException(c + " wasm decoded 0 samples", "EncodingError");
        case 5:
          return s = t.createBuffer(u.channelData.length, u.samplesDecoded, u.sampleRate), u.channelData.forEach(function (e, n) {
            return s.copyToChannel(e, n);
          }), e.abrupt("return", s);
        case 8:
        case "end":
          return e.stop();
      }
    }, e);
  }))).apply(this, arguments);
}
function l() {
  return (l = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
    var n, t;
    return _dependency.regeneratorRuntime().wrap(function (e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (n = i, i = null, n) {
            e.next = 4;
            break;
          }
          return e.abrupt("return");
        case 4:
          return e.prev = 4, e.next = 7, n;
        case 7:
          return t = e.sent, e.next = 10, t.free();
        case 10:
          e.next = 14;
          break;
        case 12:
          e.prev = 12, e.t0 = e.catch(4);
        case 14:
        case "end":
          return e.stop();
      }
    }, e, null, [[4, 12]]);
  }))).apply(this, arguments);
}
_dependency2.cclegacy._RF.pop();
