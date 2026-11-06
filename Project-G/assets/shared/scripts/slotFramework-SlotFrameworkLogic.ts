// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-Logic";
import * as _dependency5 from "./slotFramework-SlotFrameworkData";
import * as _dependency6 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "./slotFramework-ExitUtils";
var _export;
export { _export as SlotFrameworkLogic };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SlotFrameworkLogic":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, o, i, r, c, s, a;
_dependency2.cclegacy._RF.push({}, "72eefcIarNEOpWPZGbhpHam", "SlotFrameworkLogic", void 0);
_publish("SlotFrameworkLogic", function (t) {
  var _nativeConstructor = o;
  function o() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(o, t);
  var r = o.prototype;
  return r.onLoad = function (n) {
    t.prototype.onLoad.call(this, n), this._init();
  }, r.onDestroy = function () {}, r.reset = function () {}, r._init = function () {}, r.showExitAlert = function () {
    if ("disable" !== _dependency7.ExitUtils.getGoBackUrl()) {
      var t = {
          text: App.getLanguage("exitGame", [], _dependency3.EBundles[_dependency3.EBundles.wrapper]),
          confirmCb: function (t) {
            n(), dispatch(_dependency6.SlotFrameworkEvent.PLAY_CLICK_BTM);
          },
          cancelCb: function (t) {
            dispatch(_dependency6.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM);
          },
          bbrCb: function (t) {
            dispatch(_dependency6.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM);
          }
        },
        n = function () {
          _dependency7.ExitUtils.exit();
        };
      App.gameAlert.show(t);
    }
  }, r.addEvents = function () {
    this.on(_dependency6.SlotFrameworkEvent.SHOW_EXIT_ALERT, this.showExitAlert);
  }, _dependency.createClass(o, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }, {
    key: "view",
    get: function () {
      return this.gameView;
    }
  }]), o;
}(_dependency4.Logic));
_dependency2.cclegacy._RF.pop();
