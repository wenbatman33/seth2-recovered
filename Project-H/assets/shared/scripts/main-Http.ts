// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as Http };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Http":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var r;
var E, R, e, u, O;
_publish("Http", void 0), _dependency.cclegacy._RF.push({}, "e9b1d5uD8FCfI9iZ4UZ5E3F", "Http", void 0), R = E || (E = _publish("Http", {})), function (t) {
  t[t.UrlError = 0] = "UrlError", t[t.TimeOut = 1] = "TimeOut", t[t.RequestError = 2] = "RequestError";
}(e || (e = {})), R.ErrorType = e, function (t) {
  t.POST = "POST", t.GET = "GET";
}(u || (u = {})), R.Type = u, function (t) {
  t[t.SUCCESS = 200] = "SUCCESS", t[t.ERROR_SPIN_ONE_MORE = 201] = "ERROR_SPIN_ONE_MORE", t[t.NOT_MODIFIED = 304] = "NOT_MODIFIED", t[t.REQUEST_ERROR = 400] = "REQUEST_ERROR", t[t.BACKEND_ERROR = 500] = "BACKEND_ERROR";
}(O || (O = {})), R.ServerStatus = O, _dependency.cclegacy._RF.pop();
