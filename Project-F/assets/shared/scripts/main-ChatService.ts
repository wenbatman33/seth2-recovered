// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
import * as _dependency4 from "./main-CommonEvent";
import * as _dependency5 from "./main-CommonService";
var _export;
export { _export as ChatService };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ChatService":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, o, e, i, r;
_dependency2.cclegacy._RF.push({}, "35307er0mdBR7bBHQJfElHc", "ChatService", void 0), _publish("ChatService", function (t) {
  var _nativeConstructor = o;
  function o() {
    for (var n, o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r];
    return (n = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this).priority = _dependency3.NetPriority.Chat, n;
  }
  _dependency.inheritsLoose(o, t);
  var r = o.prototype;
  return r.onOpen = function (n) {
    t.prototype.onOpen.call(this, n), dispatch(_dependency4.CommonEvent.CHAT_SERVICE_CONNECTED, this);
  }, r.onClose = function (n) {
    t.prototype.onClose.call(this, n), dispatch(_dependency4.CommonEvent.CHAT_SERVICE_CLOSE, this);
  }, o;
}(_dependency5.CommonService)).module = "聊天", _dependency2.cclegacy._RF.pop();
