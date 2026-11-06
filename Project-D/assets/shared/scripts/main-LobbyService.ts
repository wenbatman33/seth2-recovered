// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
import * as _dependency4 from "./main-CommonEvent";
import * as _dependency5 from "./main-CommonService";
var _export;
export { _export as LobbyService };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "LobbyService":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, o, n, i, c;
_dependency2.cclegacy._RF.push({}, "e28f7LLLVVJaYjQl5+dh0Ue", "LobbyService", void 0), _publish("LobbyService", function (t) {
  var _nativeConstructor = o;
  function o() {
    var e;
    return (e = Reflect.construct(t, [], new.target || _nativeConstructor) || this).priority = _dependency3.NetPriority.Lobby, e.clientType = "socketIO", e.url = "", Log.d("[LobbyService] this.clientType", e.clientType), e.init(), e;
  }
  _dependency.inheritsLoose(o, t);
  var c = o.prototype;
  return c.onOpen = function (e) {
    t.prototype.onOpen.call(this, e), dispatch(_dependency4.CommonEvent.LOBBY_SERVICE_CONNECTED, this);
  }, c.onClose = function (e) {
    t.prototype.onClose.call(this, e), dispatch(_dependency4.CommonEvent.LOBBY_SERVICE_CLOSE, this);
  }, o;
}(_dependency5.CommonService)).module = "大廳", _dependency2.cclegacy._RF.pop();
