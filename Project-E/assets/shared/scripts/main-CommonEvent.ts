// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as CommonEvent };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CommonEvent":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var _;
var C;
_publish("CommonEvent", void 0), _dependency.cclegacy._RF.push({}, "44b3bL/ZNdPXbAWy02ohBa3", "CommonEvent", void 0), function (E) {
  E.TEST_PROTO_MSG = "TEST_PROTO_MSG", E.TEST_BINARY_MSG = "TEST_BINARY_MSG", E.TEST_JSON_MSG = "TEST_JSON_MSG", E.LOBBY_SERVICE_CONNECTED = "LOBBY_SERVICE_CONNECTED", E.LOBBY_SERVICE_CLOSE = "LOBBY_SERVICE_CLOSE", E.GAME_SERVICE_CONNECTED = "GAME_SERVICE_CONNECTED", E.GAME_SERVICE_CLOSE = "GAME_SERVICE_CLOSE", E.CHAT_SERVICE_CONNECTED = "CHAT_SERVICE_CONNECTED", E.CHAT_SERVICE_CLOSE = "CHAT_SERVICE_CLOSE";
}(C || (C = _publish("CommonEvent", {}))), _dependency.cclegacy._RF.pop();
