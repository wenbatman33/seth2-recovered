// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-SingleReel";
import * as _dependency4 from "../../shared/scripts/main-CmmUtils";
import * as _dependency5 from "../../shared/scripts/main-ReelDataSetting";
var _export;
export { _export as GameSingleReel };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameSingleReel":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, s, l, n, o;
var r;
_dependency2.cclegacy._RF.push({}, "0165bBCqJ1I/oxVYbvd/pR1", "GameSingleReel", void 0);
var c = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("GameSingleReel", c("GameSingleReel")(r = function (e) {
  var _nativeConstructor = i;
  function i() {
    for (var t, i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
    return (t = Reflect.construct(e, [this].concat(s).slice(1), new.target || _nativeConstructor) || this).isNeedLastSlow = !1, t;
  }
  _dependency.inheritsLoose(i, e);
  var s = i.prototype;
  return s.start = function () {}, s.lastScroll = function () {
    var e = this.getLastSymbolId();
    4 == this.strip && (this.isStartAddNoWinExpectSymbol && (e = this.expectNoWinRandomSymbolList.pop()), this.isStartAddWinExpectSymbol && (e = this.expectRandomSymbolList.pop())), this.isExpecting && (this.symbolStep == this.singleReelSetting.getAllCount() - 4 ? this.isNeedLastSlow && (this.speedUp = 3) : this.speedUp = this.reelSetting.expectSetting.speedUp), this.changeSymbolList(e);
    var t = _dependency5.ReelDataSettingObj.getSpeed() * this.speedUp;
    0 == this.symbolStep ? this.endScroll() : this.expectStep > 0 ? (this.addExpectSymbol(), this.scrollTween(this.normalScroll, _dependency4.CmmUtils.roundDecimal(this.singleReelSetting.moveOneSymbolTime * t, 3))) : this.isExpecting || _dependency5.ReelDataSettingObj.expectStrip !== this.strip ? this.scrollTween(this.lastScroll, _dependency4.CmmUtils.roundDecimal(this.singleReelSetting.stopReelTime * t, 3)) : (this.startExpect(), this.scrollTween(this.normalScroll, _dependency4.CmmUtils.roundDecimal(this.singleReelSetting.moveOneSymbolTime * t, 3)));
  }, i;
}(_dependency3.SingleReel)) || r);
_dependency2.cclegacy._RF.pop();
