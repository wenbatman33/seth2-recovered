// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/CurrentFeatureBtn.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-Decorators";
import * as __dependency_3 from "../../shared/scripts/main-CmmUtils";
import * as __dependency_4 from "../../shared/scripts/main-EventComponent";
import * as __dependency_5 from "../../shared/scripts/framework-StakeModel";
import * as __dependency_6 from "../../shared/scripts/framework-SlotFrameworkEvent";
import * as __dependency_7 from "../../shared/scripts/framework-ReplayModel";
import * as __dependency_8 from "../../shared/scripts/framework-type2";
import * as __dependency_9 from "../../shared/scripts/framework-CmmSlotUtils";
import * as __dependency_10 from "../../shared/scripts/framework-LoadUtils";
import * as __dependency_11 from "./g1007-GameConfigModel";
import * as __dependency_12 from "./g1007-GameData";
import * as __dependency_13 from "./g1007-GameEvent";
import * as __dependency_14 from "./g1007-types";
var __export_0;
export { __export_0 as CurrentFeatureBtn };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CurrentFeatureBtn":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, a, s, o, r, u, c, f, h, l, E, p, _, d, S, v, A, R, y, B, m, D;
var T, C, F, P, U;
__dependency_1.cclegacy._RF.push({}, "0460fNEy+pBPZzVCc0vzV32", "CurrentFeatureBtn", void 0);
var g = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("CurrentFeatureBtn", (T = g("Hades_CurrentFeatureBtn"), C = __dependency_2.inject("content/stake", __dependency_1.Label), T((U = __dependency_0.applyDecoratedDescriptor((P = function (t) {
  function e() {
    for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++) s[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "stake", U, __dependency_0.assertThisInitialized(e)), e.features = [__dependency_14.EFeature.THE_WRATH_OF_HADES, __dependency_14.EFeature.THE_POWER_OF_HADES, __dependency_14.EFeature.FREE_GAME, __dependency_14.EFeature.SUPER_FREE_GAME, __dependency_14.EFeature.LUCK_OR_BAD_LUCK], e;
  }
  __dependency_0.inheritsLoose(e, t);
  var u = e.prototype;
  return u.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, u.start = function () {}, u.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, u.init = function () {
    var t = this.data.getData(),
      e = t.isResuming,
      n = t.buyFeatureType,
      i = t.isXtraBet,
      a = e || __dependency_7.default.isReplay,
      s = this.features.includes(n),
      o = i && n == __dependency_14.EFeature.FREE_GAME;
    this.setInit(), a && o ? this.setBtnActive(!1) : a && s ? this.showButtonContent() : this.setBtnActive(!1);
  }, u.setLocaleSprite = function (t) {
    var e,
      n = __dependency_11.default.getData().filePaths.common,
      i = this.node.getComponents(__dependency_1.Button)[0],
      a = ((e = {})[__dependency_14.EFeature.LUCK_OR_BAD_LUCK] = "f_btn_01", e[__dependency_14.EFeature.SUPER_FREE_GAME] = "f_btn_02", e[__dependency_14.EFeature.FREE_GAME] = "f_btn_03", e[__dependency_14.EFeature.THE_WRATH_OF_HADES] = "f_btn_04", e[__dependency_14.EFeature.THE_POWER_OF_HADES] = "f_btn_05", e);
    i.normalSprite = __dependency_10.LoadUtils.getDirSp(this.data.module, n, a[t] + "_hover"), i.hoverSprite = __dependency_10.LoadUtils.getDirSp(this.data.module, n, a[t] + "_hover"), i.disabledSprite = __dependency_10.LoadUtils.getDirSp(this.data.module, n, a[t] + "_hover");
  }, u.setInit = function () {
    var t = this;
    __dependency_3.CmmUtils.addBtnClickEvent(this.node, function () {
      t.closeView();
    });
  }, u.closeView = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (!__dependency_11.default.isPushSpin) {
              t.next = 2;
              break;
            }
            return t.abrupt("return");
          case 2:
            __dependency_11.default.isPushSpin = !1, this.setBtnActive(!1), dispatch(__dependency_13.GameEvent.CLOSE_CURRENT_FEATURE_BTN), dispatch(__dependency_13.GameEvent.OPEN_BUY_FEATURE_VIEW);
          case 6:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), u.setBtnActive = function (t) {
    this.node.active = t;
  }, u.updateBtnStatus = function (t) {
    var e = __dependency_8.ESpinStatus.SPINING === t;
    this.node.getComponents(__dependency_1.Button).forEach(function (n) {
      n.interactable = !e, t === __dependency_8.ESpinStatus.IDLE && (n.interactable = !0, __dependency_11.default.isPushSpin = !1);
    });
  }, u.reset = function () {}, u.setData = function () {
    var t = this.data.featureData.feature;
    this.setLocaleSprite(t), this.updateStake();
  }, u.show = function () {
    this.node.active = !0;
  }, u.hide = function () {
    this.node.active = !1;
  }, u.updateStake = function () {
    if (this.data.featureData) {
      var t = this.data.featureData.featureRate,
        e = __dependency_5.default.getData().totalStake * t;
      this.stake.string = __dependency_9.CmmSlotUtils.formatNumber(e);
    }
  }, u.showButtonContent = function () {
    var t = this,
      e = this.data.getData(),
      n = e.buyFeature,
      i = e.buyFeatureType;
    n.forEach(function (e) {
      e.feature == i && (t.data.featureData = e);
    }), this.setBtnActive(!0), this.setLocaleSprite(i), this.updateStake();
  }, u.updateByGameStyle = function (t) {
    if (__dependency_7.default.isReplay && t) {
      var e = this.data.getData(),
        n = e.buyFeatureType;
      return e.isXtraBet ? void this.setBtnActive(!1) : void (this.features.includes(n) ? this.showButtonContent() : this.setBtnActive(!1));
    }
    this.setBtnActive(!1);
  }, u.addEvents = function () {
    var t = this;
    this.on(__dependency_13.GameEvent.PARSER_INIT_COMPLETED, function () {
      t.init();
    }), this.on(__dependency_13.GameEvent.PARSER_REPLAY_COMPLETED, function () {
      t.init();
    }), this.on(__dependency_13.GameEvent.OPEN_CURRENT_FEATURE_BTN, function () {
      t.setBtnActive(!0), t.setData();
    }), this.on(__dependency_13.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.updateByGameStyle(e.data);
    }), this.on(__dependency_6.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (e) {
      t.updateBtnStatus(e.data);
    }), this.on(__dependency_13.GameEvent.START_SPIN, function () {
      __dependency_11.default.isPushSpin = !0, t.updateBtnStatus(__dependency_8.ESpinStatus.SPINING);
    }), this.on(__dependency_6.SlotFrameworkEvent.UPDATE_STAKE, function () {
      __dependency_7.default.isReplay || t.updateStake();
    }), this.on(__dependency_13.GameEvent.CLOSE_CURRENT_FEATURE_BTN, function () {
      t.setBtnActive(!1);
    });
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_12.default);
    }
  }]), e;
}(__dependency_4.default)).prototype, "stake", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = P)) || F));
__dependency_1.cclegacy._RF.pop();
