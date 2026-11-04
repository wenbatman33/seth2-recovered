// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/FeatureOption.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-CmmUtils";
import * as __dependency_3 from "../../shared/scripts/main-EventComponent";
import * as __dependency_4 from "../../shared/scripts/main-Decorators";
import * as __dependency_5 from "../../shared/scripts/framework-StakeModel";
import * as __dependency_6 from "../../shared/scripts/framework-SlotFrameworkEvent";
import * as __dependency_7 from "../../shared/scripts/framework-CmmSlotUtils";
import * as __dependency_8 from "../../shared/scripts/framework-LoadUtils";
import * as __dependency_9 from "./g1007-GameConfigModel";
import * as __dependency_10 from "./g1007-GameData";
import * as __dependency_11 from "./g1007-GameEvent";
import * as __dependency_12 from "./g1007-types";
var __export_0;
export { __export_0 as FeatureOption };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FeatureOption":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, a, i, n, o, s, r, l, c, u, h, d, f, E, g, p, _, T, S, k, m, v, C, D, A, F;
var L, y, R, U, b, I, B, M, N;
__dependency_1.cclegacy._RF.push({}, "08fb7ItjLdBA7YMLzsxaxWj", "FeatureOption", void 0);
var O = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("FeatureOption", (L = O("Hades_FeatureOption"), y = __dependency_4.inject("content/stake", __dependency_1.Label), R = __dependency_4.inject("checkMark/stake", __dependency_1.Label), U = __dependency_4.inject("", __dependency_1.Toggle), L((B = __dependency_0.applyDecoratedDescriptor((I = function (t) {
  function e() {
    for (var e, a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "stake", B, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "checkMarkStake", M, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "toggle", N, __dependency_0.assertThisInitialized(e)), e.featureData = null, e;
  }
  __dependency_0.inheritsLoose(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this), this.init();
  }, s.start = function () {}, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.init = function () {
    this.node.on(__dependency_1.Node.EventType.MOUSE_ENTER, this.onHoverEnter, this), this.node.on(__dependency_1.Node.EventType.MOUSE_LEAVE, this.onHoverLeave, this);
  }, s.setLocaleSprite = function (t) {
    var e,
      a = __dependency_9.default.getData().filePaths.common,
      i = this.node.getChildByName("checkMark").getComponentInChildren(__dependency_1.Sprite),
      n = ((e = {})[__dependency_12.EFeature.LUCK_OR_BAD_LUCK] = "f_btn_01", e[__dependency_12.EFeature.SUPER_FREE_GAME] = "f_btn_02", e[__dependency_12.EFeature.FREE_GAME] = "f_btn_03", e[__dependency_12.EFeature.THE_WRATH_OF_HADES] = "f_btn_04", e[__dependency_12.EFeature.THE_POWER_OF_HADES] = "f_btn_05", e);
    this.toggle.normalSprite = __dependency_8.LoadUtils.getDirSp(this.data.module, a, n[t] + "_normal"), this.toggle.hoverSprite = __dependency_8.LoadUtils.getDirSp(this.data.module, a, n[t] + "_hover"), this.toggle.disabledSprite = __dependency_8.LoadUtils.getDirSp(this.data.module, a, n[t] + "_disabled"), i.spriteFrame = __dependency_8.LoadUtils.getDirSp(this.data.module, a, n[t] + "_hover");
  }, s.onHoverEnter = function () {
    dispatch(__dependency_11.GameEvent.SET_FEATURE_DETAIL_ACTIVE, !0), dispatch(__dependency_11.GameEvent.SET_FEATURE_DETAIL_FONT_SPRITE, this.featureData.feature);
  }, s.onHoverLeave = function () {
    dispatch(__dependency_11.GameEvent.SET_FEATURE_DETAIL_ACTIVE, !1);
  }, s.toggleFeatureSelection = function () {
    if (this.node.getComponent(__dependency_1.Toggle).isChecked) return this.toggle.isChecked = !1, this.data.featureData = null, __dependency_1.Tween.stopAllByTarget(this.toggle.node), this.toggle.node.setScale(new __dependency_1.Vec3(1, 1, 1)), void dispatch(__dependency_6.SlotFrameworkEvent.SET_SPIN_BTN_BY_SELECT_FEATURE, !1);
    dispatch(__dependency_11.GameEvent.OPEN_FEATURE_VIEW, this.featureData), dispatch(__dependency_11.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_9.EBTM.FEATURE_SELECT_OPEN
      }
    });
  }, s.reset = function () {
    this.toggle.isChecked = !1, this.data.featureData = null, __dependency_1.Tween.stopAllByTarget(this.toggle.node), this.toggle.node.setScale(new __dependency_1.Vec3(1, 1, 1));
  }, s.setData = function (t) {
    var e = this,
      a = t.feature;
    this.featureData = t, this.setLocaleSprite(a), this.updateStake(), __dependency_2.CmmUtils.addBtnClickEvent(this.node, function () {
      e.toggleFeatureSelection();
    });
  }, s.updateStake = function () {
    var t = this.featureData.featureRate,
      e = __dependency_5.default.getData(),
      a = e.totalStake,
      i = e.extraStakeTimes,
      n = a * t,
      o = i > 1 ? Math.round(n / i * 10) / 10 : n;
    this.featureData.stakeLimit && (this.node.active = o <= this.featureData.stakeLimit), !this.node.active && this.toggle.isChecked && dispatch(__dependency_11.GameEvent.CLOSE_CURRENT_FEATURE_BTN), this.stake.string = __dependency_7.CmmSlotUtils.formatNumber(o), this.checkMarkStake.string = __dependency_7.CmmSlotUtils.formatNumber(o);
  }, s.updateToggleIsCheck = function () {
    if (null != this.data.featureData) {
      var t = this.data.featureData.featureIndex;
      __dependency_1.Tween.stopAllByTarget(this.toggle.node), this.toggle.node.setScale(new __dependency_1.Vec3(1, 1, 1));
      this.toggle.isChecked = this.featureData.featureIndex == t, this.toggle.isChecked && __dependency_1.tween(this.toggle.node).bindNodeState(false).repeatForever(__dependency_1.tween().bindNodeState(false).to(.6, {
        scale: new __dependency_1.Vec3(1.1, 1.1, 1)
      }).to(.6, {
        scale: new __dependency_1.Vec3(1, 1, 1)
      })).start();
    }
  }, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {
    var t = this;
    this.on(__dependency_11.GameEvent.OPEN_BUY_FEATURE_VIEW, function () {
      t.toggle.isChecked = !1, t.updateToggleIsCheck();
    }), this.on(__dependency_11.GameEvent.SELECT_FEATURE, function () {
      t.updateToggleIsCheck();
    }), this.on(__dependency_6.SlotFrameworkEvent.SET_SPIN_BTN_BY_SELECT_FEATURE, function (e) {
      t.updateToggleIsCheck();
    });
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_10.default);
    }
  }]), e;
}(__dependency_3.default)).prototype, "stake", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = __dependency_0.applyDecoratedDescriptor(I.prototype, "checkMarkStake", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = __dependency_0.applyDecoratedDescriptor(I.prototype, "toggle", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), b = I)) || b));
__dependency_1.cclegacy._RF.pop();
