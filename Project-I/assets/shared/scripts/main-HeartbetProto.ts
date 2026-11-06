// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-CmdDefines";
import * as _dependency4 from "./main-ProtoMessage";
var _export;
export { _export as HeartbeatProto };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "HeartbeatProto":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, r, o, s, i;
_dependency2.cclegacy._RF.push({}, "0e25fKD2o1MUJ8sXE3BJGwU", "HeartbetProto", void 0);
_publish("HeartbeatProto", function (t) {
  var _nativeConstructor = r;
  function r() {
    for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    return (e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this).buffer = null, e.mainCmd = _dependency3.MainCmd.CMD_SYS, e.subCmd = _dependency3.SUB_CMD_SYS.CMD_SYS_HEART, e;
  }
  _dependency.inheritsLoose(r, t);
  var i = r.prototype;
  return i.encode = function () {
    return !0;
  }, i.decode = function (t) {
    return !0;
  }, _dependency.createClass(r, [{
    key: "cmd",
    get: function () {
      return String(this.mainCmd) + String(this.subCmd);
    }
  }]), r;
}(_dependency4.ProtoMessageHeartbeat));
_dependency2.cclegacy._RF.pop();
