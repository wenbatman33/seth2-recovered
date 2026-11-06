// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as EMainCmd };
var _export2;
export { _export2 as MainCmd };
var _export3;
export { _export3 as SUB_CMD_SYS };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EMainCmd":
      _export = value;
      break;
    case "MainCmd":
      _export2 = value;
      break;
    case "SUB_CMD_SYS":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var M;
_publish("EMainCmd", void 0), _dependency.cclegacy._RF.push({}, "8b0d47nT5xN3LlWFAW1DU7w", "CmdDefines", void 0);
var _;
_publish("MainCmd", {
  CMD_SYS: 1,
  CMD_GAME: 2,
  CMD_LOBBY: 3,
  CMD_PAY: 4,
  CMD_CHAT: 5
});
!function (C) {
  C.CMD_WRAPPER = "WRAPPER", C.CMD_SYS = "SYS", C.CMD_GAME = "GAME", C.CMD_LOBBY = "LOBBY", C.CMD_PAY = "PAY", C.CMD_CHAT = "CHAT";
}(_ || (_ = _publish("EMainCmd", {})));
_publish("SUB_CMD_SYS", {
  CMD_SYS_HEART: 1
});
_dependency.cclegacy._RF.pop();
