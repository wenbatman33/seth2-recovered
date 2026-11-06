// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-ReelDataSetting";
import * as _dependency4 from "../../shared/scripts/main-ReelsController";
import * as _dependency5 from "./g1002-GameData";
import * as _dependency6 from "./g1002-GameEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-MathUtil";
var _export;
export { _export as MultipReelsController };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "MultipReelsController":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, l, s, o, r, a, u, c, p, f, S, g, h, L;
var R, m, d, y, T, _;
_dependency2.cclegacy._RF.push({}, "0fc048SaEpKN6IpL8RvEe2L", "MultipReelsController", void 0);
var b = _dependency2._decorator.ccclass,
  O = _dependency2._decorator.property,
  E = _dependency2._decorator.requireComponent;
_publish("MultipReelsController", (R = b("MultipReelsController"), m = E(_dependency2.Mask), d = O(_dependency2.Prefab), R(y = m((_ = _dependency.applyDecoratedDescriptor((T = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, s = new Array(i), o = 0; o < i; o++) s[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "multipSymbol", _, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.init = function () {
    this.initSymbolView();
  }, o.initSymbolNode = function () {
    var t = _dependency2.instantiate(this.multipSymbol);
    this.reelSetting.symbolNode = t;
  }, o.initSymbolView = function () {
    if (3 === this.data.getData().bonusState.restOfGamble) {
      this.initSingleReels(null, [[0, 1225, 0]]);
    } else {
      var t,
        e = this.data.getData().bonusParserElixirFurnace,
        i = e.currentTimes,
        n = e.timesList,
        l = n.indexOf(i),
        s = [[n[l + 1], i, null != (t = n[l - 1]) ? t : n[_dependency7.default.getRandomNumber(0, n.length - 1)]]];
      this.initSingleReels(null, s);
    }
    _dependency2.Tween.stopAllByTarget(this.node), _dependency3.ReelDataSettingObj.expectStrip = 0, this.reelList[0].initCurrentSymbolId();
  }, o.reset = function () {
    _dependency2.Tween.stopAllByTarget(this.node), _dependency3.ReelDataSettingObj.expectStrip = 0, this.reelList[0].singleReelSetting.dampingSetting.lastDamping = !0, this.reelList[0].singleReelSetting.stopReelTime = .145;
  }, o.stopAllSingleReel = function () {
    for (var t = this.reelList.length, e = 0; e < t; e++) this.reelList[e].startExpect();
  }, o.stopExpect = function (t) {
    dispatch(_dependency6.GameEvent.BONUS_SLOT_SCOLLING_COMPLETE);
  }, o.finish = function () {
    this.reset();
  }, o.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency6.GameEvent.BONUS_START_SCROLL, function () {
      e.startScroll();
    }), this.on(_dependency6.GameEvent.SET_BONUS_MULTIP_RESULT, function () {
      for (var t, i = e.data.getData().bonusState.gambleTimes, n = e.data.getData().bonusParserElixirFurnace.timesList, l = n.indexOf(i), s = [n[l + 1], n[l], null != (t = n[l - 1]) ? t : n[_dependency7.default.getRandomNumber(0, n.length - 1)]], o = 0; o < e.reelList.length; o++) e.reelList[o].isNeedExpect = !0;
      e.setReelResult([s]), e.stopAllSingleReel();
    }), this.on(_dependency6.GameEvent.BONUS_DIRECT_STOP_SCROLL, function () {
      e.reelList[0].singleReelSetting.dampingSetting.lastDamping = !1, e.reelList[0].singleReelSetting.stopReelTime = 1;
      for (var t = e.reelList.length, i = 0; i < t; i++) e.reelList[i].stop();
    });
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this), this.off(_dependency6.GameEvent.BONUS_START_SCROLL), this.off(_dependency6.GameEvent.SET_BONUS_MULTIP_RESULT), this.off(_dependency6.GameEvent.BONUS_DIRECT_STOP_SCROLL);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}(_dependency4.ReelsController)).prototype, "multipSymbol", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = T)) || y) || y));
_dependency2.cclegacy._RF.pop();
