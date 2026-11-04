// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/ReplayUIViewL.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-SlotFrameworkEvent";
import * as __dependency_3 from "./framework-ReplayUIViewBase";
import * as __dependency_4 from "./framework-ReplayUIViewLBase";
import * as __dependency_5 from "./g1007-GameConfigModel";
import * as __dependency_6 from "./g1007-GameData";
import * as __dependency_7 from "./g1007-GameEvent";
var __export_0;
export { __export_0 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, a, o, i, s, c, r, u, p, h, d, f, l;
var E;
__dependency_1.cclegacy._RF.push({}, "3715ah1K5VGTrfhOwcwpG9A", "ReplayUIViewL", void 0);
var _ = __dependency_1._decorator.ccclass;
__publish("default", _("Hades_ReplayUIViewL")(E = function (t) {
  function i() {
    return Reflect.construct(t, arguments, new.target || this.constructor) || this;
  }
  __dependency_0.inheritsLoose(i, t);
  var s = i.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init(), this.switchShowContent(__dependency_3.REPLAY_TYPE.INFO_BAR);
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.boardAgainBtnHandler = function () {
    var t = this.data.replayData;
    this.data.setReplayInitData(t), this.switchShowContent(__dependency_3.REPLAY_TYPE.INFO_BAR), dispatch(__dependency_2.SlotFrameworkEvent.KILL_SYMBOLS), dispatch(__dependency_7.GameEvent.INIT_SYMBOLS), this.scheduleOnce(function () {
      dispatch(__dependency_2.SlotFrameworkEvent.REPLAY_AGAIN);
    }, 1);
  }, s.quickStop = function () {
    dispatch(__dependency_2.SlotFrameworkEvent.SPEED_UP), dispatch(__dependency_7.GameEvent.REPLAY_START_QUICK_STOP);
  }, s.removeEvents = function () {
    this.off(__dependency_2.SlotFrameworkEvent.REPLAY_BACK_TO_GAME);
  }, s.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(__dependency_2.SlotFrameworkEvent.REPLAY_BACK_TO_GAME, __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(n) {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e.data.restoreCurrentGameData(), __dependency_5.default.isRankReplayMode = !1, dispatch(__dependency_7.GameEvent.RESET_AND_OPEN_GAME_VIEW);
          case 3:
          case "end":
            return t.stop();
        }
      }, t);
    }))), this.onI(__dependency_1.Input.EventType.KEY_DOWN, function (t) {
      switch (t.keyCode) {
        case __dependency_1.KeyCode.SPACE:
          dispatch(__dependency_2.SlotFrameworkEvent.SPEED_UP);
      }
    });
  }, __dependency_0.createClass(i, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_6.default);
    }
  }]), i;
}(__dependency_4.default)) || E);
__dependency_1.cclegacy._RF.pop();
