// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-BinaryStreamMessage";
import * as _dependency4 from "./main-CmdDefines";
var _export;
export { _export as HeartbeatBinary };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "HeartbeatBinary":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, r, i, a, s;
_dependency2.cclegacy._RF.push({}, "fad937gxhNAP5F5raDpetvK", "HeartbetBinary", void 0);
_publish("HeartbeatBinary", function (t) {
  var _nativeConstructor = r;
  function r() {
    for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    return (e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this).mainCmd = _dependency4.MainCmd.CMD_SYS, e.subCmd = _dependency4.SUB_CMD_SYS.CMD_SYS_HEART, e;
  }
  return _dependency.inheritsLoose(r, t), _dependency.createClass(r, [{
    key: "cmd",
    get: function () {
      return String(this.mainCmd) + String(this.subCmd);
    }
  }]), r;
}(_dependency3.BinaryStreamHeartbeat));
_dependency2.cclegacy._RF.pop();
