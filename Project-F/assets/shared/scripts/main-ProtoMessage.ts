// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Net";
import * as _dependency4 from "./main-Message";
var _export;
export { _export as ProtoMessage };
var _export2;
export { _export2 as ProtoCodec };
var _export3;
export { _export3 as ProtoMessageHeartbeat };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ProtoMessage":
      _export = value;
      break;
    case "ProtoCodec":
      _export2 = value;
      break;
    case "ProtoMessageHeartbeat":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, r, o, s;
_dependency2.cclegacy._RF.push({}, "2a060dCqolHUa5KS4cGgWCi", "ProtoMessage", void 0);
_publish("ProtoMessage", function (t) {
  var _nativeConstructor = n;
  function n(e) {
    var n;
    return (n = Reflect.construct(t, [], new.target || _nativeConstructor) || this).buffer = null, n.type = null, n.data = null, n.type = e, n;
  }
  _dependency.inheritsLoose(n, t);
  var r = n.prototype;
  return r.encode = function () {
    return this.buffer = this.type.encode(this.data).finish(), !!this.buffer;
  }, r.decode = function (t) {
    return !!t && (this.buffer = t, this.data = this.type.decode(this.buffer), !0);
  }, n;
}(_dependency4.Message)), _publish("ProtoCodec", function (t) {
  var _nativeConstructor2 = n;
  function n() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor2) || this;
  }
  return _dependency.inheritsLoose(n, t), n;
}(_dependency4.Codec));
_publish("ProtoMessageHeartbeat", function (t) {
  var _nativeConstructor3 = n;
  function n() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor3) || this;
  }
  return _dependency.inheritsLoose(n, t), n;
}(_dependency4.Message)).type = _dependency3.Net.ServiceType.Proto, _dependency2.cclegacy._RF.pop();
