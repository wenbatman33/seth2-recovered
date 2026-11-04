// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/XtraBetButton.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-CmmUtils";
import * as __dependency_3 from "../../shared/scripts/main-EventComponent";
import * as __dependency_4 from "../../shared/scripts/main-Decorators";
import * as __dependency_5 from "../../shared/scripts/framework-StakeModel";
import * as __dependency_6 from "../../shared/scripts/framework-SlotFrameworkEvent";
import * as __dependency_7 from "../../shared/scripts/framework-ReplayModel";
import * as __dependency_8 from "../../shared/scripts/framework-type2";
import * as __dependency_9 from "../../shared/scripts/framework-LoadUtils";
import * as __dependency_10 from "./g1007-GameConfigModel";
import * as __dependency_11 from "./g1007-GameData";
import * as __dependency_12 from "./g1007-GameEvent";
import * as __dependency_13 from "./g1007-types";
var __export_0;
export { __export_0 as XtraBetButton };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "XtraBetButton":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, s, a, o, c, r, u, h, l, p, E, f, d, S, _, T, v, B, A, y, O, b, R, C, m, w;
var L, P, D, F, X, M, U, g, k;
__dependency_1.cclegacy._RF.push({}, "0bbfbh5jnFAir42TZ6+oPTt", "XtraBetButton", void 0);
var N = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("XtraBetButton", (L = N("Hades_XtraBetButton"), P = __dependency_4.inject("switch", __dependency_1.Node), D = __dependency_4.inject("detailContent", __dependency_1.Node), F = __dependency_4.inject("btnSpine", __dependency_1.sp.Skeleton), L((U = __dependency_0.applyDecoratedDescriptor((M = function (t) {
  function e() {
    for (var e, i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "switch", U, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "detailContent", g, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "btnSpine", k, __dependency_0.assertThisInitialized(e)), e.button = null, e.isOn = !1, e.isCloseByOpenFeatureView = !1, e.switchOnX = 71, e.switchOffX = 37, e.features = [__dependency_13.EFeature.THE_WRATH_OF_HADES, __dependency_13.EFeature.THE_POWER_OF_HADES, __dependency_13.EFeature.FREE_GAME, __dependency_13.EFeature.SUPER_FREE_GAME, __dependency_13.EFeature.LUCK_OR_BAD_LUCK], e;
  }
  __dependency_0.inheritsLoose(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    this.button = this.node.getComponent(__dependency_1.Button);
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, o.init = function () {
    var t = this.data.getData(),
      e = t.isResuming,
      i = t.buyFeatureType,
      n = t.isXtraBet,
      s = this.features.includes(i),
      a = n && i == __dependency_13.EFeature.FREE_GAME;
    this.setInit(), n && this.clickSwitch(), a || e && s && this.setBtnActive(!1);
  }, o.setInit = function () {
    var t = this,
      e = __dependency_10.default.getData().filePaths.localeSpriteFrame,
      i = this.detailContent.getChildByName("fontSprite").getComponent(__dependency_1.Sprite);
    this.node.on(__dependency_1.Node.EventType.MOUSE_ENTER, this.onHoverEnter, this), this.node.on(__dependency_1.Node.EventType.MOUSE_LEAVE, this.onHoverLeave, this), __dependency_2.CmmUtils.addBtnClickEvent(this.node, function () {
      t.clickSwitch(), t.playClickBtm();
    }, {
      delaySeconds: .01
    }), i.spriteFrame = __dependency_9.LoadUtils.getDirSp(this.data.module, e, "btn_xtrabet_font"), this.btnSpine.clearTracks(), this.btnSpine.setToSetupPose();
  }, o.onHoverEnter = function () {
    this.detailContent.active = !0, __dependency_2.CmmUtils.fadeInTween(this.detailContent, .2);
  }, o.onHoverLeave = function () {
    this.detailContent.active = !1;
  }, o.setBtnActive = function (t) {
    this.node.active = t;
  }, o.updateBtnStatus = function (t) {
    var e = __dependency_8.ESpinStatus.SPINING === t;
    this.button.interactable = !e;
  }, o.updateXBetStatus = function (t) {
    var e = this.data.featureData,
      i = t ? this.isOn : this.isCloseByOpenFeatureView;
    e || i && (this.clickSwitch(), this.playClickBtm(), this.isCloseByOpenFeatureView = t);
  }, o.setReplayMode = function () {
    var t = this.data.getData(),
      e = t.buyFeatureType,
      i = t.isXtraBet,
      n = this.features.includes(e);
    !i || e !== __dependency_13.EFeature.FREE_GAME && n ? this.setBtnActive(!1) : this.setSwitchOn();
  }, o.setSwitchOn = function () {
    this.isOn = !0, this.button.interactable = !1, __dependency_5.default.extraStakeTimes = 1.5, this.switch.setPosition(this.switchOnX, this.switch.y, 0);
  }, o.playClickBtm = function () {
    var t = this.isOn ? __dependency_10.EBTM.XTRA_OPEN : __dependency_10.EBTM.XTRA_CLOSE;
    this.isOn && dispatch(__dependency_12.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_10.EBTM.REEL_XTRA_BET_ON
      }
    }), dispatch(__dependency_12.GameEvent.PLAY_BTM, {
      data: {
        url: t
      }
    });
  }, o.reset = function () {}, o.setData = function () {}, o.clickSwitch = function () {
    var t = this;
    __dependency_1.Tween.stopAllByTarget(this.switch), this.isOn = !this.isOn, __dependency_10.default.setIsXtraBetOn(this.isOn), __dependency_5.default.extraStakeTimes = this.isOn ? 1.5 : 1, __dependency_1.tween(this.switch).bindNodeState(false).to(.1, {
      position: this.isOn ? __dependency_1.v3(this.switchOnX, this.switch.y, 0) : __dependency_1.v3(this.switchOffX, this.switch.y, 0)
    }).start(), dispatch(__dependency_6.SlotFrameworkEvent.UPDATE_EXTRA_STAKE), dispatch(__dependency_6.SlotFrameworkEvent.UPDATE_EXTRA_JP), __dependency_1.sys.isMobile && (this.isOn ? this.onHoverEnter() : this.onHoverLeave()), this.isOn && !this.data.featureData ? (this.btnSpine.clearTracks(), this.btnSpine.setToSetupPose(), this.btnSpine.setAnimation(0, "bet_up", !1), this.btnSpine.setCompleteListener(function () {
      t.btnSpine.setCompleteListener(null), t.btnSpine.clearTracks(), t.btnSpine.setToSetupPose(), t.btnSpine.setAnimation(0, "loop", !0);
    }), dispatch(__dependency_12.GameEvent.SHOW_REEL_XTR_BET_ON)) : (this.btnSpine.clearTracks(), this.btnSpine.setToSetupPose(), dispatch(__dependency_12.GameEvent.SET_MG_REEL_NORMAL));
  }, o.updateByGameStyle = function (t) {
    if (__dependency_7.default.isReplay) {
      var e = this.data.getData().isXtraBet && t;
      this.setBtnActive(e);
    } else this.setBtnActive(t);
  }, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var t = this;
    this.on(__dependency_12.GameEvent.PARSER_INIT_COMPLETED, function () {
      t.init();
    }), this.on(__dependency_12.GameEvent.PARSER_REPLAY_COMPLETED, function () {
      t.setReplayMode();
    }), this.on(__dependency_12.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.updateByGameStyle(e.data);
    }), this.on(__dependency_12.GameEvent.OPEN_BUY_FEATURE_VIEW, function () {
      t.updateXBetStatus(!0);
    }), this.on(__dependency_12.GameEvent.BUY_FEATURE_VIEW_CLOSED, function () {
      t.updateXBetStatus(!1);
    }), this.on(__dependency_12.GameEvent.CLOSE_XTRA_BET_DETAIL, function () {
      t.onHoverLeave();
    }), this.on(__dependency_6.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (e) {
      t.updateBtnStatus(e.data);
    }), this.on(__dependency_12.GameEvent.OPEN_CURRENT_FEATURE_BTN, function () {
      t.setBtnActive(!1);
    }), this.on(__dependency_12.GameEvent.CLOSE_CURRENT_FEATURE_BTN, function () {
      t.setBtnActive(!0);
    });
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_11.default);
    }
  }]), e;
}(__dependency_3.default)).prototype, "switch", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), g = __dependency_0.applyDecoratedDescriptor(M.prototype, "detailContent", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = __dependency_0.applyDecoratedDescriptor(M.prototype, "btnSpine", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = M)) || X));
__dependency_1.cclegacy._RF.pop();
