// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Macros";
import * as _dependency4 from "./main-ByteArray";
import * as _dependency5 from "./main-Message";
var _export;
export { _export as DefaultCodec };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "DefaultCodec":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, r, i, s, u;
_dependency2.cclegacy._RF.push({}, "8edff39/nxOT6WieRg4wCeT", "DefaultCodec", void 0);
_publish("DefaultCodec", function (e) {
  var _nativeConstructor = r;
  function r() {
    for (var n, t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
    return (n = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this).mainCmd = 0, n.subCmd = 0, n.buffer = null, n.headerSize = 3 * Uint32Array.BYTES_PER_ELEMENT, n;
  }
  _dependency.inheritsLoose(r, e);
  var u = r.prototype;
  return u.pack = function (e) {
    this.mainCmd = e.mainCmd, this.subCmd = e.subCmd;
    var n = 0;
    e.buffer && (n = e.buffer.length);
    var t = new _dependency4.ByteArray();
    if (t.endian = _dependency3.Macro.USING_LITTLE_ENDIAN, t.writeUnsignedInt(this.mainCmd), t.writeUnsignedInt(this.subCmd), t.writeUnsignedInt(n), e.buffer) {
      var r = new _dependency4.ByteArray(e.buffer);
      t.writeBytes(r);
    }
    return this.buffer = t.bytes, !0;
  }, u.unPack = function (e) {
    var n = new _dependency4.ByteArray(e.data);
    n.endian = _dependency3.Macro.USING_LITTLE_ENDIAN, this.mainCmd = n.readUnsignedInt(), this.subCmd = n.readUnsignedInt();
    var t = n.readUnsignedInt(),
      r = n.buffer.slice(n.position);
    return this.buffer = new Uint8Array(r), t == this.buffer.length;
  }, _dependency.createClass(r, [{
    key: "cmd",
    get: function () {
      return String(this.mainCmd) + String(this.subCmd);
    }
  }]), r;
}(_dependency5.Codec));
_dependency2.cclegacy._RF.pop();
