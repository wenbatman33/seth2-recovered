// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventComponent";
import * as _dependency4 from "./main-Bundles";
import * as _dependency5 from "./slotFramework-res-type3";
var _export;
export { _export as MarqueeItem };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "MarqueeItem":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, r, o, i, a, s, p;
var u;
_dependency2.cclegacy._RF.push({}, "808ed9pzDhA+YP0aNay5TF/", "MarqueeItem", void 0);
var c = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("MarqueeItem", c("MarqueeItem")(u = function (e) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(n, e);
  var r = n.prototype;
  return r.onLoad = function () {
    e.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    e.prototype.onDestroy.call(this);
  }, r.init = function () {}, r.reset = function () {
    this.node.targetOff(this);
  }, r.setData = function (e) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.setMessage = function (e) {
    var t = Object.values(_dependency5.ENotifyWinTypes).includes(e.winType),
      n = e.extraInfoType && Object.values(_dependency5.ENotifyExtraInfoTypes).includes(e.extraInfoType);
    t ? n ? this.processLittleGameMessage(e) : this.processWinPrizeMessage(e) : this.processSystemMessage(e);
  }, r.processWinPrizeMessage = function (e) {
    var t = e.player,
      n = e.game,
      r = e.win,
      i = e.winType,
      s = e.gameCode,
      p = {
        bigWin: "prizeBigWin",
        superWin: "prizeSuperWin",
        megaWin: "prizeMegaWin",
        ultraWin: "prizeUltraWin",
        legendaryWin: "prizeLegendaryWin",
        "jp-mini": "prizeMiniJackpot",
        "jp-minor": "prizeMinorJackpot",
        "jp-major": "prizeMajorJackpot",
        "jp-grand": "prizeGrandJackpot"
      };
    switch (s) {
      case "hades":
        p.noWinReward = "g1007_Chest";
        break;
      default:
        p.noWinReward = "mysteryChest";
    }
    var u = App.getLanguage(s, null, _dependency4.EBundles[_dependency4.EBundles.slotFramework]);
    null == u && (u = n);
    var c = App.getLanguage(p[i], null, _dependency4.EBundles[_dependency4.EBundles.wrapper]),
      l = "",
      g = App.getLanguage("notifyMarqueeMsg", [t, u, c, r], _dependency4.EBundles[_dependency4.EBundles.wrapper]);
    if (l = l.concat(g), null != e && e.roomNumber) {
      var f = App.getLanguage("notifyAtSomeTable", [null == e ? void 0 : e.roomNumber], _dependency4.EBundles[_dependency4.EBundles.wrapper]);
      l = l.concat(" ", f);
    }
    this.node.getComponent(_dependency2.RichText).string = l;
  }, r.processLittleGameMessage = function (e) {
    var t = e.player,
      n = e.game,
      r = e.win,
      i = (e.winType, e.extraInfoType),
      s = e.gameCode,
      p = App.getLanguage(s, null, _dependency4.EBundles[_dependency4.EBundles.slotFramework]);
    null == p && (p = n);
    var u = App.getLanguage({
        elixirFurnace: "bonusGame",
        luckyWealth: "secretBonus",
        luckyWealth2: "meetTheImmortal",
        fortuneLanding: "heavenlyTreasures"
      }[i], null, _dependency4.EBundles[_dependency4.EBundles.wrapper]),
      c = "",
      l = App.getLanguage("notifyMarqueeMsg", [t, p, u, r], _dependency4.EBundles[_dependency4.EBundles.wrapper]);
    if (c = c.concat(l), null != e && e.roomNumber) {
      var g = App.getLanguage("notifyAtSomeTable", [null == e ? void 0 : e.roomNumber], _dependency4.EBundles[_dependency4.EBundles.wrapper]);
      c = c.concat(" ", g);
    }
    this.node.getComponent(_dependency2.RichText).string = c;
  }, r.processSystemMessage = function (e) {
    var t = App.utils.removeNewLineAndTrim(e.text);
    Log.w("filter string:::::::::::::", t);
    var n = "<color=#ff3600><outline color=#ff3600 width=0.9><b>" + t + "</b></outline></color>";
    this.node.getComponent(_dependency2.RichText).string = n;
  }, n;
}(_dependency3.default)) || u);
_dependency2.cclegacy._RF.pop();
