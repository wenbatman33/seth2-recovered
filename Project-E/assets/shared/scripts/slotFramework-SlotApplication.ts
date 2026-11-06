// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Singleton";
import * as _dependency4 from "./slotFramework-GameLoading";
import * as _dependency5 from "./slotFramework-GameLoadingP";
import * as _dependency6 from "./slotFramework-CmmSlotUtils";
import * as _dependency7 from "./slotFramework-WebAudioDecodeFallback";
import * as _dependency8 from "./slotFramework-CryptoTool";
var _export;
export { _export as SlotApplication };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SlotApplication":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var o, e, n, i, r, c, a, l, u;
_dependency2.cclegacy._RF.push({}, "f9595wjGYxOfLEFPrqx46Ro", "SlotApplication", void 0), _dependency2.sys.isBrowser && (_dependency7.installWebAudioDecodeFallback(), _dependency8.CryptoTool.ready().catch(function (t) {
  return console.error("[SlotApplication] crypto core preload failed", t);
}));
var s = _publish("SlotApplication", function () {
    function t() {}
    return _dependency.createClass(t, [{
      key: "gameLoading",
      get: function () {
        var t = _dependency6.CmmSlotUtils.getOrientationTarget(_dependency4.default, _dependency5.default);
        return _dependency3.default.instance.get(t);
      }
    }]), t;
  }()),
  p = new s();
Object.getOwnPropertyNames(s.prototype).forEach(function (t) {
  var o = Object.getOwnPropertyDescriptor(s.prototype, t);
  if (o && o.get) {
    var e = o.get.bind(p);
    void 0 === window.App["" + t] && (window.App["" + t] = e());
  }
}), _dependency2.cclegacy._RF.pop();
