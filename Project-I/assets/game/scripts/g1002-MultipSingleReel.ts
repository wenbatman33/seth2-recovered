// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-CmmUtils";
import * as _dependency4 from "../../shared/scripts/main-ReelDataSetting";
import * as _dependency5 from "../../shared/scripts/main-ReelEnum";
import * as _dependency6 from "../../shared/scripts/main-SingleReel";
import * as _dependency7 from "./g1002-GameData";
import * as _dependency8 from "./g1002-GameEvent";
import * as _dependency9 from "./g1002-BonusSlotMultipleGame";
var _export;
export { _export as MultipSingleReel };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "MultipSingleReel":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, s, n, l, o, r, c, a, h, u, p;
var S;
_dependency2.cclegacy._RF.push({}, "cf287fDELBIA51DKOcSkUCO", "MultipSingleReel", void 0);
var m = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("MultipSingleReel", m("MultipSingleReel")(S = function (t) {
  var _nativeConstructor = s;
  function s() {
    for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++) s[n] = arguments[n];
    return (e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this).currentSymbolId = 0, e.index = 0, e;
  }
  _dependency.inheritsLoose(s, t);
  var n = s.prototype;
  return n.start = function () {}, n.initCurrentSymbolId = function () {
    var t = this.data.getData().bonusParserElixirFurnace,
      e = t.timesList,
      i = t.currentTimesIndex;
    e && (this.currentSymbolId = e[i], this.index = this.index + 1);
  }, n.loopScroll = function (t) {
    var e = this.data.getData().bonusParserElixirFurnace.timesList;
    if (e && 0 !== e.length) {
      this.index = (this.index + 1) % e.length, this.currentSymbolId = e[this.index], !t && this.changeSymbolList(this.currentSymbolId);
      var i = this.singleReelSetting.moveOneSymbolTime;
      this.status == _dependency5.EReelStatus.SCROLLING || this.status == _dependency5.EReelStatus.STOPPING ? this.scrollTween(this.normalScroll, _dependency3.CmmUtils.roundDecimal(i * this.speedUp, 3)) : this.scrollTween(this.loopScroll, _dependency3.CmmUtils.roundDecimal(i * this.speedUp, 3));
    } else console.error("timesList 為空或未定義");
  }, n.normalScroll = function () {
    var t = this.data.getData().bonusParserElixirFurnace.timesList;
    if (t && 0 !== t.length) {
      this.index = (this.index + 1) % t.length, this.currentSymbolId = t[this.index], this.changeSymbolList(this.currentSymbolId), this.recoveryExpectStep > 0 ? (this.symbolStep = Number(this.recoveryExpectStep), this.recoveryExpectStep = 0) : this.isExpecting || _dependency4.ReelDataSettingObj.expectStrip != this.strip ? (this.expectStep > 0 && this.addExpectSymbol(), this.symbolStep--) : this.startExpect();
      var e = _dependency4.ReelDataSettingObj.getSpeed() * this.speedUp;
      this.checkFinalScroll() ? (this.symbolStep = this.singleReelSetting.getAllCount(), this.nowIndex = Number(this.finalIndex), this.scrollTween(this.lastScroll, _dependency3.CmmUtils.roundDecimal(this.singleReelSetting.stopReelTime * e, 3))) : this.scrollTween(this.normalScroll, _dependency3.CmmUtils.roundDecimal(this.singleReelSetting.moveOneSymbolTime * e, 3));
    } else console.error("timesList 為空或未定義");
  }, n.initNodePool = function () {
    for (var t = 0; t < 20; t++) {
      var e = new _dependency2.NodePool(this.strip + "" + t);
      this.symbolNodePool.set(t + "", e);
    }
  }, n.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency8.GameEvent.BONUS_GAMBLE_RESP, function () {
      App.uiManager.isShow(_dependency9.BonusSlotMultipleGame) && e.initCurrentSymbolId();
    });
  }, _dependency.createClass(s, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), s;
}(_dependency6.SingleReel)) || S);
_dependency2.cclegacy._RF.pop();
