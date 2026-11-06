// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-ByteArray";
import * as _dependency4 from "./main-Net";
import * as _dependency5 from "./main-Message";
var _export;
export { _export as serialize };
var _export2;
export { _export2 as JsonMessage };
var _export3;
export { _export3 as JsonMessageHeartbeat };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "serialize":
      _export = value;
      break;
    case "JsonMessage":
      _export2 = value;
      break;
    case "JsonMessageHeartbeat":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i, r, a, t, s;
_publish("serialize", function (e, i, r, a) {
  return function (t, s) {
    if (void 0 === Reflect.getOwnPropertyDescriptor(t, "__serialize__")) {
      var n = {};
      if (Reflect.getPrototypeOf(t).__serialize__ && void 0 === Reflect.getOwnPropertyDescriptor(t, "__serialize__")) for (var l = Reflect.getPrototypeOf(t).__serialize__, o = Object.keys(l), u = o.length, f = 0; f < u; f++) n[o[f]] = l[o[f]].slice(0);
      Reflect.defineProperty(t, "__serialize__", {
        value: n
      });
    }
    if (t.__serialize__[e]) throw "SerializeKey has already been declared:" + e;
    t.__serialize__[e] = [s, i, r, a];
  };
}), _dependency2.cclegacy._RF.push({}, "f031c/UZ19K6aoeSleqgoO4", "JsonMessage", void 0);
var n = _publish("JsonMessage", function (e) {
  var _nativeConstructor = r;
  function r() {
    for (var i, r = arguments.length, a = new Array(r), t = 0; t < r; t++) a[t] = arguments[t];
    return (i = Reflect.construct(e, [this].concat(a).slice(1), new.target || _nativeConstructor) || this).data = null, i.byteArray = null, i.buffer = null, i;
  }
  _dependency.inheritsLoose(r, e);
  var t = r.prototype;
  return t.encode = function () {
    this.data = this.serialize();
    var e = JSON.stringify(this.data);
    return this.byteArray = new _dependency3.ByteArray(), this.byteArray.writeUTFBytes(e), this.buffer = this.byteArray.bytes, !0;
  }, t.serialize = function () {
    var e = {},
      i = Reflect.getPrototypeOf(this).__serialize__;
    if (!i) return e;
    for (var r = Object.keys(i), a = r.length, t = 0; t < a; t++) {
      var s = r[t],
        n = i[s][0],
        l = this.serializeMember(this[n]);
      null === l && Log.w("Invalid serialize member : " + n), e[s] = l;
    }
    return e;
  }, t.serializeMember = function (e) {
    return "number" == typeof e ? this.serializeNumber(e) : "boolean" == typeof e ? this.serializeBool(e) : "string" == typeof e ? this.serializeString(e) : e instanceof Array ? this.serializeArray(e) : e instanceof Map ? this.serializeMap(e) : e instanceof r ? e.serialize() : (Log.w("Invalid serialize value : " + e), null);
  }, t.serializeNumber = function (e) {
    return null == e && (e = 0), "string" == typeof e && (e = Number(e)), Number.isNaN(e) && (e = 0), e;
  }, t.serializeBool = function (e) {
    return null == e && (e = !1), "string" == typeof e && (e = "true" == e), Number.isNaN(e) && (e = !1), e;
  }, t.serializeString = function (e) {
    return null == e ? "" : e.toString();
  }, t.serializeArray = function (e) {
    var i = this,
      r = [];
    return e.forEach(function (e) {
      r.push(i.serializeMember(e));
    }), r;
  }, t.serializeMap = function (e) {
    var i = [],
      r = this;
    return e.forEach(function (e, a) {
      var t = {
        k: r.serializeMember(a),
        v: r.serializeMember(e)
      };
      null === t.k && (Log.w("Invalid map key!"), t.k = ""), null === t.v && (Log.w("Invalid map value"), t.v = ""), i.push(t);
    }), i;
  }, t.decode = function (e) {
    if (e) {
      this.buffer = e, this.byteArray = new _dependency3.ByteArray(e);
      var i = this.byteArray.readUTFBytes(this.byteArray.length);
      if (i.length > 0) try {
        this.data = JSON.parse(i);
      } catch (e) {
        return !1;
      }
      return this.deserialize(this.data);
    }
    return !1;
  }, t.deserialize = function (e) {
    var i = Reflect.getPrototypeOf(this).__serialize__;
    if (!i) return !0;
    for (var r = Object.keys(i), a = r.length, t = 0; t < a; t++) {
      var s = r[t],
        n = i[s],
        l = n[0],
        o = n[1],
        u = n[2],
        f = n[3];
      if (!this.deserializeMember(l, o, u, f, e[s])) return Log.w("Invalid deserialize member :" + l), !1;
    }
    return !0;
  }, t.deserializeMember = function (e, i, a, t, s) {
    try {
      var n = this[e];
      if ("number" == typeof n) this[e] = this.deserializeNumber(e, s);else if ("boolean" == typeof n) this[e] = this.deserializeBool(e, s);else if ("string" == typeof n) this[e] = this.deserializeString(e, s);else if (n instanceof Array) this.deserializeArray(e, a, s);else if (n instanceof Map) this.deserializeMap(e, a, t, s);else if (n instanceof r) n.deserialize(s);else {
        if (null !== n) return Log.w("Invalid deserialize member : " + e + " value:" + n), !1;
        switch (i) {
          case Number:
            this[e] = this.deserializeNumber(e, s);
            break;
          case String:
            this[e] = this.deserializeString(e, s);
            break;
          case Array:
            this[e] = [];
            break;
          case Map:
            this[e] = new Map();
            break;
          default:
            if (this[e] = new i(), !(this[e] instanceof r)) return Log.w("Invalid deserialize member :" + e + " value:" + n), !1;
            this[e].deserialize(s);
        }
      }
      return !0;
    } catch (i) {
      return Log.w(i.message), this[e] = i.data || null, !1;
    }
  }, t.deserializeNumber = function (e, i) {
    if (null == i || Number.isNaN(i)) throw {
      message: "Invalid deserializeNumber member : " + e + " value : " + i,
      data: 0
    };
    return Number(i);
  }, t.deserializeBool = function (e, i) {
    if (null == i || Number.isNaN(i)) throw {
      message: "Invalid deserializeNumber member : " + e + " value : " + i,
      data: 0
    };
    return Boolean(i);
  }, t.deserializeString = function (e, i) {
    if (null == i) throw {
      message: "Invalid deserializeString member : " + e + " value : " + i,
      data: ""
    };
    return i;
  }, t.deserializeArray = function (e, i, a) {
    var t = this;
    if (!(a instanceof Array)) throw {
      message: "Invalid deserializeArray member : " + e + " value : " + a,
      data: []
    };
    this[e] = [], a.forEach(function (a, s) {
      if (i === Number) t[e].push(t.deserializeNumber(e + "[" + s + "]", a));else if (i === String) t[e].push(t.deserializeString(e + "[" + s + "]", a));else {
        if (i === Array) throw {
          message: "Invalid deserializeArray member : " + e + " array value type is Array"
        };
        if (i instanceof Map) throw {
          message: "Invalid deserializeArray member : " + e + " array value type is Map"
        };
        if (t[e] instanceof r) t[e].deserialize(a);else {
          var n = new i();
          if (!(n instanceof r)) throw {
            message: "Invalid deserializeArray member : " + e + " array value type is " + i
          };
          n.deserialize(a), t[e].push(n);
        }
      }
    });
  }, t.deserializeMap = function (e, i, a, t) {
    var s = this;
    if (!(t instanceof Array)) throw {
      message: "Invalid deserializeMap member : " + e + " value : " + t,
      data: new Map()
    };
    this[e].clear(), t.forEach(function (t, n) {
      if (null === t || void 0 === t.k || null === t.k || void 0 === t.v || null === t.v) throw {
        message: "Invalid deserializeMap member : " + e + " invalid element : " + t
      };
      var l, o;
      if (i === Number) l = s.deserializeNumber(e + "[" + n + "]:key", t.k);else {
        if (i !== String) throw {
          message: "Invalid deserializeMap member : " + e + " invalid key type : " + i
        };
        l = s.deserializeString(e + "[" + n + "]:key", t.k);
      }
      if (a === Number) o = s.deserializeNumber(e + "[" + n + "]:value", t.v);else if (a === String) o = s.deserializeString(e + "[" + n + "]:value", t.v);else {
        if (a === Array) throw {
          message: "Invalid deserializeMap member : " + e + " invalid value type : Array"
        };
        if (a instanceof Map) throw {
          message: "Invalid deserializeMap member : " + e + " invalid value type : Map"
        };
        if (!((o = new a()) instanceof r)) throw {
          message: "Invalid deserializeMap member : " + e + " invalid value type : " + a
        };
        o.deserialize(t.v);
      }
      s[e].set(l, o);
    });
  }, r;
}(_dependency5.Message));
_publish("JsonMessageHeartbeat", function (e) {
  var _nativeConstructor2 = r;
  function r() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor2) || this;
  }
  return _dependency.inheritsLoose(r, e), r;
}(n)).type = _dependency4.Net.ServiceType.Json, _dependency2.cclegacy._RF.pop();
