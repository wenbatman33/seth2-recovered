// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-JsonMessage";
import * as _dependency4 from "./main-CmdDefines";
var _export;
export { _export as HeartbeatJson };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "HeartbeatJson":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, s, r, i, u;
_dependency2.cclegacy._RF.push({}, "bf8fbqBBmlMgpCa176v8+Pq", "HeartbetJson", void 0);
_publish("HeartbeatJson", function (t) {
  var _nativeConstructor = s;
  function s() {
    for (var e, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
    return (e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this).buffer = null, e.mainCmd = _dependency4.MainCmd.CMD_SYS, e.subCmd = _dependency4.SUB_CMD_SYS.CMD_SYS_HEART, e;
  }
  return _dependency.inheritsLoose(s, t), _dependency.createClass(s, [{
    key: "cmd",
    get: function () {
      return String(this.mainCmd) + String(this.subCmd);
    }
  }]), s;
}(_dependency3.JsonMessageHeartbeat));
_dependency2.cclegacy._RF.pop();
