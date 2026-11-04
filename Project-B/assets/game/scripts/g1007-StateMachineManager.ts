// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/StateMachineManager.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./g1007-GameState";
import * as __dependency_3 from "./g1007-ReplayState";
var __export_0;
export { __export_0 as EStateMachineName };
var __export_1;
export { __export_1 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EStateMachineName":
      __export_0 = value;
      break;
    case "default":
      __export_1 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, a, n, i;
var r;
__publish("EStateMachineName", void 0), __dependency_1.cclegacy._RF.push({}, "df06f+xLbdMLaJT50zR6WO3", "StateMachineManager", void 0), function (e) {
  e.GAME_STATE = "game_state", e.REPLAY_STATE = "replay_state";
}(r || (r = __publish("EStateMachineName", {})));
var c = function () {
  function e() {
    this._gameState = null, this._replayState = null, this._gameMachine = null, this._replayMachine = null, this._currentStateName = null;
  }
  e.getInstance = function () {
    return e.instance || (e.instance = new e()), e.instance;
  };
  var a = e.prototype;
  return a.getStateName = function () {
    return this._currentStateName;
  }, a.setCurrentState = function (e) {
    this._currentStateName = e;
  }, a.getMachine = function () {
    switch (this._currentStateName) {
      case r.GAME_STATE:
        return this.gameMachine;
      case r.REPLAY_STATE:
        return this.replayMachine;
      default:
        throw new Error("未識別的狀態機名稱: " + this._currentStateName);
    }
  }, __dependency_0.createClass(e, [{
    key: "gameMachine",
    get: function () {
      return this._gameMachine || (this._gameState = new __dependency_2.GameState(), this._gameMachine = new __dependency_2.GameState().getMachine()), this._gameMachine;
    }
  }, {
    key: "replayMachine",
    get: function () {
      return this._replayMachine || (this._replayState = new __dependency_3.ReplayState(), this._replayMachine = this._replayState.getMachine()), this._replayMachine;
    }
  }, {
    key: "state",
    get: function () {
      switch (this._currentStateName) {
        case r.GAME_STATE:
          return this._gameState;
        case r.REPLAY_STATE:
          return this._replayState;
        default:
          throw new Error("未識別的狀態機名稱: " + name);
      }
    }
  }]), e;
}();
c.instance = void 0;
__publish("default", c.getInstance());
__dependency_1.cclegacy._RF.pop();
