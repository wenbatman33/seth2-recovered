// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency4 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency5 from "../../shared/scripts/slotFramework-ReplayUIViewBase";
import * as _dependency6 from "../../shared/scripts/slotFramework-ReplayUIViewPBase";
import * as _dependency7 from "./g1011-GameData";
import * as _dependency8 from "./g1011-GameEvent";
import * as _dependency9 from "./g1011-GameLogic";
import * as _dependency0 from "../../shared/scripts/slotFramework-ReplayModel";
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
var n, e, a, i, o, s, c, r, u, h, f, l, _, p;
var A;
_dependency2.cclegacy._RF.push({}, "0b4b3KLeYxAgrJ2gzvSbExR", "ReplayUIViewP", void 0);
var E = _dependency2._decorator.ccclass;
_publish("default", E("ReplayUIViewP")(A = function (t) {
  var _nativeConstructor = o;
  function o() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(o, t);
  var s = o.prototype;
  return s.start = function () {
    this.init(), this.switchShowContent(_dependency5.REPLAY_TYPE.INFO_BAR);
  }, s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.boardAgainBtnHandler = function () {
    var t = this.data.replayData;
    this.switchShowContent(_dependency5.REPLAY_TYPE.INFO_BAR), this.data.setReplayInitData(t);
    var n = _dependency4.default.transposeArray(this.data.getData().gameState[0].view);
    dispatch(_dependency8.GameEvent.SET_SYMBOL_VIEW, {
      data: n
    }), this.scheduleOnce(function () {
      dispatch(_dependency8.GameEvent.START_SPIN, {
        data: {
          spinId: null
        }
      });
    }, 1);
  }, s.quickStop = function () {
    Log.d("快停"), dispatch(_dependency8.GameEvent.REPLAY_START_QUICK_STOP);
  }, s.addEvents = function () {
    var n = this;
    t.prototype.addEvents.call(this), this.on(_dependency3.SlotFrameworkEvent.REPLAY_BACK_TO_GAME, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            n.data.restoreCurrentGameData(), dispatch(_dependency8.GameEvent.RESET_AND_OPEN_GAME_VIEW, {
              data: _dependency9.EInitName.INIT_GAME
            });
          case 2:
          case "end":
            return t.stop();
        }
      }, t);
    }))), this.on(_dependency8.GameEvent.START_LUCKY_WEALTH_GAME, function () {
      n.isChangeCloseBtn(_dependency0.default.isReplay);
    }), this.on(_dependency8.GameEvent.START_JACKPOT_GAME, function () {
      n.isChangeCloseBtn(_dependency0.default.isReplay);
    }), this.on(_dependency8.GameEvent.SHOW_BONUS_WIN, function () {
      n.isChangeCloseBtn(_dependency0.default.isReplay);
    }), this.on(_dependency8.GameEvent.START_FORTUNE_GAME, function () {
      n.isChangeCloseBtn(_dependency0.default.isReplay);
    });
  }, s.isChangeCloseBtn = function (t) {
    t ? this.switchShowContent(_dependency5.REPLAY_TYPE.CLOSE) : this.switchShowContent(_dependency5.REPLAY_TYPE.INFO_BAR);
  }, s.removeEvents = function () {
    this.off(_dependency3.SlotFrameworkEvent.REPLAY_BACK_TO_GAME), this.off(_dependency8.GameEvent.SHOW_BONUS_WIN), this.off(_dependency8.GameEvent.START_JACKPOT_GAME), this.off(_dependency8.GameEvent.START_FORTUNE_GAME), this.off(_dependency8.GameEvent.START_LUCKY_WEALTH_GAME);
  }, _dependency.createClass(o, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), o;
}(_dependency6.default)) || A);
_dependency2.cclegacy._RF.pop();
