// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/BuyFeatureButton.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-CmmUtils";
import * as __dependency_3 from "../../shared/scripts/main-EventComponent";
import * as __dependency_4 from "../../shared/scripts/framework-SlotFrameworkEvent";
import * as __dependency_5 from "../../shared/scripts/framework-ReplayModel";
import * as __dependency_6 from "../../shared/scripts/framework-type2";
import * as __dependency_7 from "./g1007-GameConfigModel";
import * as __dependency_8 from "./g1007-GameData";
import * as __dependency_9 from "./g1007-GameEvent";
import * as __dependency_10 from "./g1007-types";
var __export_0;
export { __export_0 as BuyFeatureButton };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BuyFeatureButton":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, i, o, a, u, s, c, r, E, f, l, _, d;
var h;
__dependency_1.cclegacy._RF.push({}, "f5a8clNhTNMuJNPiaRReT8P", "BuyFeatureButton", void 0);
var p = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("BuyFeatureButton", p("Hades_BuyFeatureButton")(h = function (t) {
  function i() {
    for (var n, e = arguments.length, i = new Array(e), o = 0; o < e; o++) i[o] = arguments[o];
    return (n = Reflect.construct(t, [this].concat(i).slice(1), new.target || this.constructor) || this).features = [__dependency_10.EFeature.THE_WRATH_OF_HADES, __dependency_10.EFeature.THE_POWER_OF_HADES, __dependency_10.EFeature.FREE_GAME, __dependency_10.EFeature.SUPER_FREE_GAME, __dependency_10.EFeature.LUCK_OR_BAD_LUCK], n.button = null, n;
  }
  __dependency_0.inheritsLoose(i, t);
  var o = i.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    this.button = this.node.getComponent(__dependency_1.Button);
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, o.init = function () {
    var t = this.data.getData(),
      n = t.isResuming,
      e = t.buyFeatureType,
      i = t.isXtraBet,
      o = this.features.includes(e),
      a = i && e == __dependency_10.EFeature.FREE_GAME;
    this.setInit(), n && a ? this.button.interactable = !1 : n && o && this.setBtnActive(!1);
  }, o.setInit = function () {
    __dependency_2.CmmUtils.addBtnClickEvent(this.node, function () {
      dispatch(__dependency_9.GameEvent.OPEN_BUY_FEATURE_VIEW), dispatch(__dependency_9.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_7.EBTM.FEATURE_CLICK_OPEN
        }
      });
    }, {
      delaySeconds: .01
    });
  }, o.setBtnActive = function (t) {
    this.node.active = t;
  }, o.updateBtnStatus = function (t) {
    var n = __dependency_6.ESpinStatus.SPINING === t;
    this.button.interactable = !n;
  }, o.updateByGameStyle = function (t) {
    var n = !__dependency_5.default.isReplay && t;
    this.setBtnActive(n);
  }, o.reset = function () {}, o.setData = function (t) {}, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var t = this;
    this.on(__dependency_9.GameEvent.PARSER_INIT_COMPLETED, function () {
      t.init();
    }), this.on(__dependency_9.GameEvent.PARSER_REPLAY_COMPLETED, function () {
      t.setBtnActive(!1);
    }), this.on(__dependency_9.GameEvent.CHANGE_GAME_STYLE, function (n) {
      t.updateByGameStyle(n.data);
    }), this.on(__dependency_4.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (n) {
      t.updateBtnStatus(n.data);
    }), this.on(__dependency_9.GameEvent.OPEN_CURRENT_FEATURE_BTN, function () {
      t.setBtnActive(!1);
    }), this.on(__dependency_9.GameEvent.CLOSE_CURRENT_FEATURE_BTN, function () {
      t.setBtnActive(!0);
    });
  }, __dependency_0.createClass(i, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_8.default);
    }
  }]), i;
}(__dependency_3.default)) || h);
__dependency_1.cclegacy._RF.pop();
