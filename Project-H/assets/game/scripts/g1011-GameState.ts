// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-index";
import * as _dependency4 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "./g1011-GameData";
import * as _dependency8 from "./g1011-BonusStates";
import * as _dependency9 from "./g1011-FGStates";
import * as _dependency0 from "./g1011-MGStates";
import * as _dependency1 from "./g1011-StateHelpers";
import * as _dependency10 from "../../shared/scripts/main-fsm";
export { calculateAutoSpin } from "./g1011-StateHelpers";
export { needUpdateStake } from "./g1011-StateHelpers";
var _export;
export { _export as GameState };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameState":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, a, n, s, i, c, u, o, r, l;
_dependency2.cclegacy._RF.push({}, "bc13c0OlfNBlaF6QuBQOjkW", "GameState", void 0);
_publish("GameState", function () {
  function t() {
    this._stateMachine = null, this._states = [].concat(_dependency0.createMgStates(this), _dependency9.createFgStates(this), _dependency8.createBonusStates(this));
  }
  var a = t.prototype;
  return a.processCloseAutoPlay = function () {
    0 === _dependency4.default.spinsRemaining && (_dependency4.default.active = !1), _dependency4.default.spinsRemaining <= -1 && (_dependency4.default.spinsRemaining = -1), _dependency4.default.active ? dispatch(_dependency6.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !1
    }) : (dispatch(_dependency6.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !0
    }), _dependency4.default.spinsRemaining = 0);
  }, a.GET_ALL_STATES = function () {
    return this._states;
  }, a.getMachine = function () {
    return null == this._stateMachine && (this._stateMachine = _dependency10.StateMachine.from(this.GET_ALL_STATES(), {
      sharedData: App.dataCenter.get(_dependency7.default)
    })), this._stateMachine;
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }, {
    key: "stateMachine",
    get: function () {
      return this._stateMachine;
    }
  }]), t;
}());
_dependency2.cclegacy._RF.pop();

// Install local persisted-FG transition before any original getMachine call.
import { EDITOR as __localStateEditor } from "cc/env";
import { installStateHooks as __installLocalStateHooks } from "../backend/ProgressHooks";
import { StateId as __localStateId } from "./g1011-StateId";
import { GameEvent as __localGameEvent } from "./g1011-GameEvent";
import __localGameConfig, { EBGM as __localBgm } from "./g1011-GameConfigModel";
if(!__localStateEditor)__installLocalStateHooks(_export,{StateId:__localStateId,GameEvent:__localGameEvent,SlotFrameworkEvent:_dependency6.SlotFrameworkEvent,dispatch,getGameConfig:()=>__localGameConfig,getBgm:()=>__localBgm});
