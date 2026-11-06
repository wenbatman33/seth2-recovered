// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as Config };
var _export2;
export { _export2 as EEnv };
var _export3;
export { _export3 as NetPriority };
var _export4;
export { _export4 as ViewZOrder };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Config":
      _export = value;
      break;
    case "EEnv":
      _export2 = value;
      break;
    case "NetPriority":
      _export3 = value;
      break;
    case "ViewZOrder":
      _export4 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i;
var t, _, E, e, r, n;
_publish({
  Config: void 0,
  EEnv: void 0,
  NetPriority: void 0,
  ViewZOrder: void 0
}), _dependency.cclegacy._RF.push({}, "4227bYQTFFOYb3+qzJ9yRmP", "Config", void 0), (_ = t || (t = _publish("Config", {}))).isShowDebugButton = !1, _.SHOW_DEBUG_INFO_KEY = "SHOW_DEBUG_INFO_KEY", _.audioPath = {
  dialog: "common/audio/dlg_open",
  button: "common/audio/btn_click"
}, _.isSkipCheckUpdate = !1, _.HOT_UPDATE_URL = "http://192.168.187.150/hotupdate", _.USE_AUTO_VERSION = !0, _.LOADING_TIME_OUT = 30, _.LOADING_CONTENT_CHANGE_INTERVAL = 3, _.LOAD_VIEW_TIME_OUT = 20, _.LOAD_VIEW_DELAY = .1, _.RECONNECT_TIME_OUT = 30, _.MAX_INBACKGROUND_TIME = 3900, _.MIN_INBACKGROUND_TIME = 3600, _.RECONNECT_ALERT_TAG = 100, _.TOKEN_EXPIRED_TIME = 3, (e = E || (E = _publish("ViewZOrder", {}))).zero = 0, e.Horn = 10, e.UI = 100, e.Alert = 297, e.NoTouch = 298, e.ReplayUI = 299, e.Tips = 300, e.Loading = 600, e.UILoading = 700, e.WaitLoading = 750, e.TopErrorAlert = 800, function (o) {
  o[o.Game = 0] = "Game", o[o.Chat = 1] = "Chat", o[o.Lobby = 2] = "Lobby", o[o.Wrapper = 3] = "Wrapper";
}(r || (r = _publish("NetPriority", {}))), function (o) {
  o.LOCAL = "local", o.DEV = "dev", o.PROD = "prod";
}(n || (n = _publish("EEnv", {}))), _dependency.cclegacy._RF.pop();
