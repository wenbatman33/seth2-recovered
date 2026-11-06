// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Macros";
import * as _dependency4 from "./main-ByteArray";
import * as _dependency5 from "./main-Net";
import * as _dependency6 from "./main-Message";
var _export;
export { _export as serialize };
var _export2;
export { _export2 as BOOL };
var _export3;
export { _export3 as STRING };
var _export4;
export { _export4 as FLOAT };
var _export5;
export { _export5 as DOUBLE };
var _export6;
export { _export6 as BYTE };
var _export7;
export { _export7 as SHORT };
var _export8;
export { _export8 as INT };
var _export9;
export { _export9 as UBYTE };
var _export0;
export { _export0 as USHORT };
var _export1;
export { _export1 as UINT };
var _export10;
export { _export10 as BinaryStream };
var _export11;
export { _export11 as BinaryStreamHeartbeat };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "serialize":
      _export = value;
      break;
    case "BOOL":
      _export2 = value;
      break;
    case "STRING":
      _export3 = value;
      break;
    case "FLOAT":
      _export4 = value;
      break;
    case "DOUBLE":
      _export5 = value;
      break;
    case "BYTE":
      _export6 = value;
      break;
    case "SHORT":
      _export7 = value;
      break;
    case "INT":
      _export8 = value;
      break;
    case "UBYTE":
      _export9 = value;
      break;
    case "USHORT":
      _export0 = value;
      break;
    case "UINT":
      _export1 = value;
      break;
    case "BinaryStream":
      _export10 = value;
      break;
    case "BinaryStreamHeartbeat":
      _export11 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, r, i, a, n, s, o;
_publish("serialize", function (e, t, r, i, a) {
  return function (n, s) {
    if (void 0 === Reflect.getOwnPropertyDescriptor(n, "__serialize__")) {
      var o = {};
      if (Reflect.getPrototypeOf(n).__serialize__ && void 0 === Reflect.getOwnPropertyDescriptor(n, "__serialize__")) for (var u = Reflect.getPrototypeOf(n).__serialize__, l = Object.keys(u), c = l.length, y = 0; y < c; y++) o[l[y]] = u[l[y]].slice(0);
      Reflect.defineProperty(n, "__serialize__", {
        value: o
      });
    }
    if (n.__serialize__[e]) throw "SerializeKey has already been declared:" + e;
    n.__serialize__[e] = [s, t, r, i, a];
  };
}), _dependency2.cclegacy._RF.push({}, "6ffc0ADekNBn6xYaGYHBeeL", "BinaryStreamMessage", void 0);
var u = function () {
    function e() {
      this.data = null;
    }
    var t = e.prototype;
    return t.read = function (e) {}, t.write = function (e) {}, _dependency.createClass(e, [{
      key: "littleEndian",
      get: function () {
        return _dependency3.Macro.USING_LITTLE_ENDIAN;
      }
    }]), e;
  }(),
  l = function (e) {
    var _nativeConstructor = r;
    function r() {
      for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      return (t = Reflect.construct(e, [this].concat(i).slice(1), new.target || _nativeConstructor) || this).data = 0, t;
    }
    return _dependency.inheritsLoose(r, e), r;
  }(u),
  c = _publish("BOOL", function (e) {
    var _nativeConstructor2 = r;
    function r() {
      for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      return (t = Reflect.construct(e, [this].concat(i).slice(1), new.target || _nativeConstructor2) || this).data = !1, t;
    }
    _dependency.inheritsLoose(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readBoolean();
    }, i.write = function (e) {
      e.writeBoolean(this.data);
    }, r;
  }(u)),
  y = _publish("STRING", function (e) {
    var _nativeConstructor3 = r;
    function r() {
      for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      return (t = Reflect.construct(e, [this].concat(i).slice(1), new.target || _nativeConstructor3) || this).data = "", t.byteSize = void 0, t;
    }
    _dependency.inheritsLoose(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      var t = this.byteSize;
      null == this.byteSize && (t = e.readUnsignedInt()), this.data = e.readUTFBytes(t);
    }, i.write = function (e) {
      var t = new _dependency4.ByteArray();
      t.writeUTFBytes(this.data, this.byteSize), null == this.byteSize && e.writeUnsignedInt(t.length), e.writeBytes(t);
    }, r;
  }(u)),
  h = _publish("FLOAT", function (e) {
    var _nativeConstructor4 = r;
    function r() {
      return Reflect.construct(e, arguments, new.target || _nativeConstructor4) || this;
    }
    _dependency.inheritsLoose(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readFloat();
    }, i.write = function (e) {
      e.writeFloat(this.data);
    }, r;
  }(l)),
  f = _publish("DOUBLE", function (e) {
    var _nativeConstructor5 = r;
    function r() {
      return Reflect.construct(e, arguments, new.target || _nativeConstructor5) || this;
    }
    _dependency.inheritsLoose(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readDouble();
    }, i.write = function (e) {
      e.writeDouble(this.data);
    }, r;
  }(l)),
  d = _publish("BYTE", function (e) {
    var _nativeConstructor6 = r;
    function r() {
      return Reflect.construct(e, arguments, new.target || _nativeConstructor6) || this;
    }
    _dependency.inheritsLoose(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readByte();
    }, i.write = function (e) {
      e.writeByte(this.data);
    }, r;
  }(l)),
  p = _publish("SHORT", function (e) {
    var _nativeConstructor7 = r;
    function r() {
      return Reflect.construct(e, arguments, new.target || _nativeConstructor7) || this;
    }
    _dependency.inheritsLoose(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readShort();
    }, i.write = function (e) {
      e.writeShort(this.data);
    }, r;
  }(l)),
  b = _publish("INT", function (e) {
    var _nativeConstructor8 = r;
    function r() {
      return Reflect.construct(e, arguments, new.target || _nativeConstructor8) || this;
    }
    _dependency.inheritsLoose(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readInt();
    }, i.write = function (e) {
      e.writeInt(this.data);
    }, r;
  }(l)),
  z = _publish("UBYTE", function (e) {
    var _nativeConstructor9 = r;
    function r() {
      return Reflect.construct(e, arguments, new.target || _nativeConstructor9) || this;
    }
    _dependency.inheritsLoose(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readUnsignedByte();
    }, i.write = function (e) {
      e.writeByte(this.data);
    }, r;
  }(l)),
  v = _publish("USHORT", function (e) {
    var _nativeConstructor0 = r;
    function r() {
      return Reflect.construct(e, arguments, new.target || _nativeConstructor0) || this;
    }
    _dependency.inheritsLoose(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readUnsignedShort();
    }, i.write = function (e) {
      e.writeUnsignedShort(this.data);
    }, r;
  }(l)),
  A = _publish("UINT", function (e) {
    var _nativeConstructor1 = r;
    function r() {
      return Reflect.construct(e, arguments, new.target || _nativeConstructor1) || this;
    }
    _dependency.inheritsLoose(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readUnsignedInt();
    }, i.write = function (e) {
      e.writeUnsignedInt(this.data);
    }, r;
  }(l)),
  _ = _publish("BinaryStream", function (e) {
    var _nativeConstructor10 = r;
    function r() {
      for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      return (t = Reflect.construct(e, [this].concat(i).slice(1), new.target || _nativeConstructor10) || this).byteArray = null, t.buffer = null, t;
    }
    _dependency.inheritsLoose(r, e);
    var i = r.prototype;
    return i.encode = function () {
      return this.byteArray = new _dependency4.ByteArray(this.buffer), this.byteArray.endian = _dependency3.Macro.USING_LITTLE_ENDIAN, this.serialize(), this.buffer = this.byteArray.bytes, !0;
    }, i.isNumberValue = function (e) {
      return e == h || e == f || e == d || e == p || e == b || e == z || e == v || e == A;
    }, i.isBoolValue = function (e) {
      return e == c;
    }, i.isStringValue = function (e) {
      return e == y;
    }, i.serialize = function () {
      var e = Reflect.getPrototypeOf(this).__serialize__;
      if (!e) return null;
      for (var t = Object.keys(e), r = t.length, i = 0; i < r; i++) {
        var a = e[t[i]],
          n = a[0],
          s = a[1],
          o = a[2],
          u = a[3],
          l = a[4];
        this.serializeMember(this[n], n, s, o, u, l);
      }
    }, i.serializeMember = function (e, t, i, a, n, s) {
      this.isNumberValue(i) ? this.serializeNumberStreamValue(e, i) : this.isBoolValue(i) ? this.serializeBoolValue(e, i) : this.isStringValue(i) ? this.serializeStringStreamValue(e, i, a) : e instanceof Array ? this.serializeArray(e, t, i, a, n, s) : e instanceof r ? (e.byteArray = this.byteArray, e.serialize()) : Log.e("序列化成員 : " + t + " 出錯!!");
    }, i.serializeNumberStreamValue = function (e, t) {
      var r = new t();
      r.data = null == e || e == Number.NaN ? 0 : e, r.write(this.byteArray);
    }, i.serializeBoolValue = function (e, t) {
      var r = new t();
      r.data = null != e && e, r.write(this.byteArray);
    }, i.serializeStringStreamValue = function (e, t, r) {
      var i = new t();
      i.byteSize = r, i.data = null == e ? "" : e, i.write(this.byteArray);
    }, i.checkArrayDimension = function (e, t) {
      var r = 0,
        i = e;
      do {
        r++, i = i[0];
      } while (i && Array.isArray(i) && i.length > 0);
      return r == t;
    }, i.serializeArray = function (e, t, r, i, a, n) {
      if (null == n && (n = 1), this.checkArrayDimension(e, n)) {
        this.byteArray.writeUnsignedInt(e.length);
        for (var s = 0; s < e.length; s++) e[s] instanceof Array ? this.serializeArray(e[s], t + "[" + s + "]", r, i, a, n - 1) : this.serializeMember(e[s], t + "[" + s + "]", i, a, void 0);
      } else Log.e(t + " 定義陣列跟序列化的陣列維度不一致");
    }, i.decode = function (e) {
      return this.buffer = e, this.byteArray = new _dependency4.ByteArray(e), this.byteArray.endian = _dependency3.Macro.USING_LITTLE_ENDIAN, this.deserialize(), !0;
    }, i.deserialize = function () {
      var e = Reflect.getPrototypeOf(this).__serialize__;
      if (!e) return !0;
      for (var t = Object.keys(e), r = t.length, i = 0; i < r; i++) {
        var a = e[t[i]],
          n = a[0],
          s = a[1],
          o = a[2],
          u = a[3],
          l = a[4];
        this.deserializeMember(n, s, o, u, l);
      }
    }, i.deserializeMember = function (e, t, i, a, n) {
      try {
        var s = this[e];
        this.isNumberValue(t) ? this[e] = this.deserializeNumberStreamValue(e, t) : this.isBoolValue(t) ? this[e] = this.deserializeBoolValue(e, t) : this.isStringValue(t) ? this[e] = this.deserializeStringStreamValue(e, t, i) : s instanceof Array ? this.deserializeArray(e, t, i, a, n) : s instanceof r ? (s.byteArray = this.byteArray, s.deserialize()) : Log.e("deserializeMember " + e + " error!!!");
      } catch (t) {
        Log.w(t.message), Log.e("deserializeMember " + e + " error!!!");
      }
    }, i.deserializeNumberStreamValue = function (e, t) {
      var r = new t();
      return r.read(this.byteArray), r.data;
    }, i.deserializeBoolValue = function (e, t) {
      var r = new t();
      return r.read(this.byteArray), r.data;
    }, i.deserializeStringStreamValue = function (e, t, r) {
      var i = new t();
      return i.byteSize = r, i.read(this.byteArray), i.data;
    }, i._deserializeArray = function (e, t, i, a, n, s) {
      if (void 0 === s && (s = 1), !(s <= 0)) for (var o = this.byteArray.readUnsignedInt(), u = 0, l = 0; l < o; l++) if (s > 1) e.push([]), this._deserializeArray(e[u], t + "[" + u + "]", i, a, n, s - 1), u++;else {
        var c = new a();
        c instanceof r ? (c.byteArray = this.byteArray, e[l] = c.deserialize()) : c instanceof y ? (c.byteSize = n, c.read(this.byteArray), e[l] = c.data) : (c.read(this.byteArray), e[l] = c.data);
      }
    }, i.deserializeArray = function (e, t, r, i, a) {
      this[e] = [], null == a && (a = 1), this._deserializeArray(this[e], e, t, r, i, a);
    }, r;
  }(_dependency6.Message));
_publish("BinaryStreamHeartbeat", function (e) {
  var _nativeConstructor11 = r;
  function r() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor11) || this;
  }
  return _dependency.inheritsLoose(r, e), r;
}(_)).type = _dependency5.Net.ServiceType.BinaryStream, _dependency2.cclegacy._RF.pop();
