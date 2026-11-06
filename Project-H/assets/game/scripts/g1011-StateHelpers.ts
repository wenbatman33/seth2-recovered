// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency3 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency4 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency5 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency6 from "./g1011-GameData";
import * as _dependency7 from "./g1011-types";
var _export;
export { _export as calculateAutoSpin };
var _export2;
export { _export2 as needUpdateStake };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "calculateAutoSpin":
      _export = value;
      break;
    case "needUpdateStake":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, a, i, s, c, u;
_publish({
  calculateAutoSpin: function () {
    if (_dependency2.default.active && _dependency2.default.spinsRemaining > 0) {
      if (App.dataCenter.get(_dependency6.default).currentGameType === _dependency7.EGameType.FREE_GAME) return;
      _dependency2.default.spinsRemaining--;
    }
  },
  needUpdateStake: function () {
    var t = {
        stakeIndex: _dependency3.default.stakeIndex,
        ratioIndex: _dependency3.default.ratioIndex
      },
      e = {
        stakeIndex: _dependency4.default.stakeIndex,
        ratioIndex: _dependency4.default.ratioIndex
      },
      n = _dependency5.ObjectUtils.diffObjects(t, e);
    return Object.keys(n).length > 0;
  }
}), _dependency.cclegacy._RF.push({}, "a2427HB4QxPoLiLcEgf0Ggv", "StateHelpers", void 0), _dependency.cclegacy._RF.pop();
