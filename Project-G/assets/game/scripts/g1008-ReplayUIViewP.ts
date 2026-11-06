// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency4 from "./g1008-GameData";
import * as _dependency5 from "./g1008-GameEvent";
import * as _dependency6 from "../../shared/scripts/slotFramework-ReplayUIViewBase";
import * as _dependency7 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-ReplayUIViewPBase";
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
var e, n, a, o, i, r, s, c, u, p, l, f, d;
var _;
_dependency2.cclegacy._RF.push({}, "f8f42UXjPNFcIEA4H8Mxwyo", "ReplayUIViewP", void 0);
var h = _dependency2._decorator.ccclass;
_publish("default", h("ReplayUIViewP")(_ = function (t) {
  var _nativeConstructor = i;
  function i() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(i, t);
  var r = i.prototype;
  return r.start = function () {
    this.init(), this.switchShowContent(_dependency6.REPLAY_TYPE.INFO_BAR);
  }, r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.boardAgainBtnHandler = function () {
    this.switchShowContent(_dependency6.REPLAY_TYPE.INFO_BAR), dispatch(_dependency3.SlotFrameworkEvent.KILL_SYMBOLS), _dependency7.default.index = 0;
    var t = _dependency7.default.getData();
    dispatch(_dependency3.SlotFrameworkEvent.REPLAY_AGAIN, t);
  }, r.quickStop = function () {
    dispatch(_dependency5.GameEvent.REPLAY_START_QUICK_STOP);
  }, r.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency3.SlotFrameworkEvent.REPLAY_BACK_TO_GAME, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(n) {
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e.data.restoreCurrentGameData(), dispatch(_dependency5.GameEvent.RESET_AND_OPEN_GAME_VIEW, {
              data: _dependency4.EInitName.INIT_GAME
            });
          case 2:
          case "end":
            return t.stop();
        }
      }, t);
    }))), this.on(_dependency3.SlotFrameworkEvent.SHOW_REPLAY_END, function () {
      dispatch(_dependency3.SlotFrameworkEvent.SHOW_REPLAY_BOARD_ALERT);
    });
  }, _dependency.createClass(i, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }]), i;
}(_dependency8.default)) || _);
_dependency2.cclegacy._RF.pop();
