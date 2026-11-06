// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-Config";
var _export;
export { _export as ENV };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ENV":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var r, t;
var s, n;
_publish("ENV", void 0), _dependency.cclegacy._RF.push({}, "0b8ef08Ar9CNape5zymCeww", "env", void 0), s || (s = _publish("ENV", {})), (n = s || (s = _publish("ENV", {}))).local = {
  env: _dependency2.EEnv.LOCAL,
  apiUrl: "",
  socketUrl: "",
  baseUrl: "https://play.riversense.tw"
}, n.dev = {
  env: _dependency2.EEnv.DEV,
  apiUrl: "",
  socketUrl: "",
  baseUrl: ""
}, n.prod = {
  env: _dependency2.EEnv.PROD,
  apiUrl: "",
  socketUrl: "",
  baseUrl: ""
}, _dependency.cclegacy._RF.pop();
