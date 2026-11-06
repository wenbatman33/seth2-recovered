import { EDITOR as __projectILocalEditor } from 'cc/env';
import { installParseHooks as __projectIInstallHook } from '../backend/ProgressHooks';
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency4 from "./g1002-GameConfigModel";
import * as _dependency5 from "./g1002-GameData";
import * as _dependency6 from "./g1002-GameEvent";
import * as _dependency7 from "./g1002-types";
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
var e, a, n, i, s, o, r;
_dependency2.cclegacy._RF.push({}, "1c047DcErZDYLo6sT7ozQSl", "ParseResponse", void 0);
_publish("default", function () {
  function t() {}
  return t.parseInit = function (t) {
    this.data.setInitData(t), _dependency3.default.init({
      stakeList: t.platform.game.stakeValues,
      stakeIndex: t.platform.player.settings.stakeIndex,
      ratioList: t.platform.game.ratioValues,
      ratioIndex: t.platform.player.settings.ratioIndex,
      numWinlines: t.engine.definition.winlineDefs.length
    }), _dependency4.default.setData(t), this.setGameType(t), dispatch(_dependency6.GameEvent.PARSER_INIT_COMPLETED);
  }, t.parseNewInit = function (t) {
    this.data.getData().parser.currentSpinIndex = 0, this.data.setInitData(t), _dependency3.default.init({
      stakeList: t.platform.game.stakeValues,
      stakeIndex: t.platform.player.settings.stakeIndex,
      ratioList: t.platform.game.ratioValues,
      ratioIndex: t.platform.player.settings.ratioIndex,
      numWinlines: t.engine.definition.winlineDefs.length
    }), _dependency4.default.setData(t), dispatch(_dependency6.GameEvent.PARSER_INIT_COMPLETED);
  }, t.parseCloseSpin = function (t) {
    dispatch(_dependency6.GameEvent.PARSER_CLOSE_SPIN_COMPLETED);
  }, t.setGameType = function (t) {
    var e, a;
    "spin" === (null == (e = t.engine.gameState[0]) ? void 0 : e.action) ? a = _dependency7.EGameType.MAIN_GAME : (a = _dependency7.EGameType.FREE_GAME, this.data.previousGameType || (a = _dependency7.EGameType.MAIN_GAME)), this.data.currentGameType = a;
  }, _dependency.createClass(t, null, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), t;
}());
_dependency2.cclegacy._RF.pop();

// Project-I owned progress hook: preserve the original frontend and Editor isolation.
if(!__projectILocalEditor)__projectIInstallHook(_export);
