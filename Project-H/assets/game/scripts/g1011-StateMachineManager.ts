// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./g1011-GameState";
var _export;
export { _export as EStateMachineName };
var _export2;
export { _export2 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EStateMachineName":
      _export = value;
      break;
    case "default":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, a;
var i;
_publish("EStateMachineName", void 0), _dependency2.cclegacy._RF.push({}, "b90a4oVbgNKJY21qXAh32Uz", "StateMachineManager", void 0), function (e) {
  e.GAME_STATE = "game_state", e.REPLAY_STATE = "replay_state";
}(i || (i = _publish("EStateMachineName", {})));
var c = function () {
  function e() {
    this._gameMachine = null, this._replayMachine = null, this._currentStateName = null;
  }
  e.getInstance = function () {
    return e.instance || (e.instance = new e()), e.instance;
  };
  var n = e.prototype;
  return n.getStateName = function () {
    return this._currentStateName;
  }, n.setCurrentState = function (e) {
    this._currentStateName = e;
  }, n.getMachine = function () {
    switch (this._currentStateName) {
      case i.GAME_STATE:
        return this.gameMachine;
      case i.REPLAY_STATE:
        return this.replayMachine;
      default:
        throw new Error("未識別的狀態機名稱: " + this._currentStateName);
    }
  }, _dependency.createClass(e, [{
    key: "gameMachine",
    get: function () {
      return this._gameMachine || (this._gameMachine = new _dependency3.GameState().getMachine()), this._gameMachine;
    }
  }, {
    key: "replayMachine",
    get: function () {
      return this._replayMachine || (this._replayMachine = new _dependency3.GameState().getMachine()), this._replayMachine;
    }
  }]), e;
}();
c.instance = void 0;
_publish("default", c.getInstance());
_dependency2.cclegacy._RF.pop();
