// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as ButtonSpriteType };
var _export2;
export { _export2 as LogLevel };
var _export3;
export { _export3 as ViewStatus };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ButtonSpriteType":
      _export = value;
      break;
    case "LogLevel":
      _export2 = value;
      break;
    case "ViewStatus":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t;
var i, r, n;
_publish({
  ButtonSpriteType: void 0,
  LogLevel: void 0,
  ViewStatus: void 0
}), _dependency.cclegacy._RF.push({}, "c707eh19D1BR5w4mqFeKK/+", "Enums", void 0), function (e) {
  e[e.DEBUG = 1] = "DEBUG", e[e.DUMP = 16] = "DUMP", e[e.WARN = 256] = "WARN", e[e.ERROR = 4096] = "ERROR", e[e.ALL = 4369] = "ALL";
}(i || (i = _publish("LogLevel", {}))), function (e) {
  e[e.WAITTING_CLOSE = 0] = "WAITTING_CLOSE", e[e.WATITING_HIDE = 1] = "WATITING_HIDE", e[e.WAITTING_NONE = 2] = "WAITTING_NONE";
}(r || (r = _publish("ViewStatus", {}))), function (e) {
  e.Norml = "normalSprite", e.Pressed = "pressedSprite", e.Hover = "hoverSprite", e.Disable = "disabledSprite";
}(n || (n = _publish("ButtonSpriteType", {}))), _dependency.cclegacy._RF.pop();
