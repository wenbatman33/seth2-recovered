// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
import * as _dependency4 from "./main-Sender";
import * as _dependency5 from "./slotFramework-SlotFrameworkData";
import * as _dependency6 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "./slotFramework-SocketModel";
import * as _dependency8 from "./slotFramework-ExitUtils";
var _export;
export { _export as GameSenderBase };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameSenderBase":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, o, i, r, l, s, c, u;
_dependency2.cclegacy._RF.push({}, "9fb09Dzg1JASoHq8QB6A+3Y", "GameSenderBase", void 0);
_publish("GameSenderBase", function (e) {
  var _nativeConstructor = o;
  function o() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(o, e);
  var r = o.prototype;
  return r.setToken = function (e) {
    e.token && (_dependency7.default.currentToken = e.token);
  }, r.debugLog = function (e) {}, r.showAlert = function (e, t) {
    var n = {
        text: e,
        confirmCb: function () {
          o(), dispatch(_dependency6.SlotFrameworkEvent.PLAY_CLICK_BTM);
        },
        bbrCb: function () {
          dispatch(_dependency6.SlotFrameworkEvent.PLAY_CLICK_BTM);
        },
        needCloseAlert: null == t ? void 0 : t.needCloseAlert,
        titleisHidden: null == t ? void 0 : t.titleisHidden,
        confirmisHidden: null == t ? void 0 : t.confirmisHidden,
        expandisHidden: null == t ? void 0 : t.expandisHidden,
        tag: _dependency3.ViewZOrder.TopErrorAlert,
        code: null == t ? void 0 : t.code
      },
      o = function () {
        (null == t ? void 0 : t.callback) && t.callback(), _dependency8.ExitUtils.exit();
      };
    App.gameAlert.show(n, _dependency3.ViewZOrder.TopErrorAlert);
  }, _dependency.createClass(o, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), o;
}(_dependency4.Sender));
_dependency2.cclegacy._RF.pop();
