// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./g1004-GameData";
import * as _dependency4 from "./g1004-GameEvent";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "./g1004-GameLogic";
import * as _dependency7 from "../../shared/scripts/slotFramework-ReplayUIViewPBase";
import * as _dependency8 from "../../shared/scripts/slotFramework-ReplayUIViewBase";
import * as _dependency9 from "../../shared/scripts/slotFramework-ReplayModel";
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
var e, n, a, i, o, s, r, c, u, h, l, p, f;
var _;
_dependency2.cclegacy._RF.push({}, "140d8nbQLtBe4e01n/dOSmY", "ReplayUIViewP", void 0);
var d = _dependency2._decorator.ccclass;
_publish("default", d("ReplayUIViewP")(_ = function (t) {
  var _nativeConstructor = o;
  function o() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(o, t);
  var s = o.prototype;
  return s.start = function () {
    this.init(), this.switchShowContent(_dependency8.REPLAY_TYPE.INFO_BAR);
  }, s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.boardAgainBtnHandler = function () {
    var t = this.data.replayData;
    this.switchShowContent(_dependency8.REPLAY_TYPE.INFO_BAR), this.data.setReplayInitData(t);
    var e = this.data.getData().gameState[0].view,
      n = this.data.parserViewMapToResult(e);
    dispatch(_dependency4.GameEvent.SET_SYMBOL_VIEW, {
      data: n
    }), dispatch(_dependency4.GameEvent.PARSER_REPLAY_COMPLETED, this.data.tempReplayResponse);
  }, s.quickStop = function () {
    dispatch(_dependency4.GameEvent.REPLAY_START_QUICK_STOP);
  }, s.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency5.SlotFrameworkEvent.REPLAY_BACK_TO_GAME, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(n) {
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e.data.restoreCurrentGameData(), dispatch(_dependency4.GameEvent.RESET_AND_OPEN_GAME_VIEW, {
              data: _dependency6.EInitName.INIT_GAME
            });
          case 2:
          case "end":
            return t.stop();
        }
      }, t);
    }))), this.on(_dependency4.GameEvent.START_LUCKY_WEALTH_GAME, function () {
      e.isChangeCloseBtn(_dependency9.default.isReplay);
    }), this.on(_dependency4.GameEvent.SHOW_JACKPOT_WIN, function () {
      e.isChangeCloseBtn(_dependency9.default.isReplay);
    }), this.on(_dependency4.GameEvent.SHOW_BONUS_WIN, function () {
      e.isChangeCloseBtn(_dependency9.default.isReplay);
    }), this.on(_dependency4.GameEvent.START_FORTUNE_GAME, function () {
      e.isChangeCloseBtn(_dependency9.default.isReplay);
    });
  }, s.isChangeCloseBtn = function (t) {
    t ? this.switchShowContent(_dependency8.REPLAY_TYPE.CLOSE) : this.switchShowContent(_dependency8.REPLAY_TYPE.INFO_BAR);
  }, s.removeEvents = function () {
    this.off(_dependency5.SlotFrameworkEvent.REPLAY_BACK_TO_GAME);
  }, _dependency.createClass(o, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency3.default);
    }
  }]), o;
}(_dependency7.default)) || _);
_dependency2.cclegacy._RF.pop();
