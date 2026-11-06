// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./slotFramework-UrlUtils2";
import * as _dependency4 from "./main-BaseModel";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, s, r, i;
_dependency2.cclegacy._RF.push({}, "6b746A9Z8xPWZ/f8FryHmMi", "SocketModel", void 0);
var a = function (e) {
  var _nativeConstructor = s;
  function s() {
    var t;
    return (t = Reflect.construct(e, [], new.target || _nativeConstructor) || this).data = {
      currentToken: "",
      preToken: "",
      requestVO: null,
      resendTimes: 0,
      resendMaximumTimes: 3,
      hasInitRes: !1,
      waitInitRes: !1,
      showLoading: !1,
      pauseGame: !1,
      reqTime: null
    }, t;
  }
  return _dependency.inheritsLoose(s, e), s.Instance = function () {
    return this._instance || (this._instance = new s());
  }, _dependency.createClass(s, [{
    key: "currentToken",
    get: function () {
      return this.data.currentToken;
    },
    set: function (e) {
      var t = _dependency3.default.getParam("t");
      localStorage.setItem(t, e), this.data.currentToken = e;
    }
  }]), s;
}(_dependency4.BaseModel);
a._instance = null;
_publish("default", a.Instance());
_dependency2.cclegacy._RF.pop();
