// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/BuyFeatureView.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-EventComponent";
import * as __dependency_3 from "../../shared/scripts/main-CmmUtils";
import * as __dependency_4 from "../../shared/scripts/main-Decorators";
import * as __dependency_5 from "../../shared/scripts/framework-SlotFrameworkEvent";
import * as __dependency_6 from "../../shared/scripts/framework-ReplayModel";
import * as __dependency_7 from "../../shared/scripts/framework-LoadUtils";
import * as __dependency_8 from "./g1007-FeatureOption";
import * as __dependency_9 from "./g1007-GameConfigModel";
import * as __dependency_10 from "./g1007-GameData";
import * as __dependency_11 from "./g1007-GameEvent";
import * as __dependency_12 from "./g1007-types";
var __export_0;
export { __export_0 as BuyFeatureView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BuyFeatureView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, a, r, s, u, c, l, f, p, E, h, _, d, F, T, y, A, S, b, m, R, C, U, g, D;
var O, v, w, B, L, P, I, N, V, H, M, G, k, z, W;
__dependency_1.cclegacy._RF.push({}, "b8b95/JnNxE8LLhSo+leIYL", "BuyFeatureView", void 0);
var Y = __dependency_1._decorator.ccclass,
  K = __dependency_1._decorator.property;
__publish("BuyFeatureView", (O = Y("Hades_BuyFeatureView"), v = __dependency_4.inject("content", __dependency_1.Node), w = __dependency_4.inject("content/bbr", __dependency_1.Node), B = __dependency_4.inject("content/options", __dependency_1.Node), L = __dependency_4.inject("content/closeBtn", __dependency_1.Node), P = __dependency_4.inject("content/detail/fontSprite", __dependency_1.Sprite), I = K(__dependency_1.Prefab), O((H = __dependency_0.applyDecoratedDescriptor((V = function (t) {
  function e() {
    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "content", H, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "bbr", M, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "options", G, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "closeBtn", k, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "detailFontSprite", z, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "featureOptionPf", W, __dependency_0.assertThisInitialized(e)), e.oriPositions = [], e;
  }
  __dependency_0.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {}, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/BuyFeatureView";
  }, r.init = function () {
    this.show(), this.addEventTouch(), this.createFeatureOptions(), this.hide();
  }, r.createFeatureOptions = function () {
    for (var t = this.data.getData().definition.buyFeature, e = [__dependency_12.EFeature.THE_WRATH_OF_HADES, __dependency_12.EFeature.THE_POWER_OF_HADES, __dependency_12.EFeature.FREE_GAME, __dependency_12.EFeature.SUPER_FREE_GAME, __dependency_12.EFeature.LUCK_OR_BAD_LUCK], n = 0; n < t.length; n++) if (e.includes(t[n].feature)) {
      var i = __dependency_1.instantiate(this.featureOptionPf);
      this.options.addChild(i), i.getComponent(__dependency_8.FeatureOption).setData(t[n]);
    }
    this.options.getComponent(__dependency_1.Layout).enabled = !0, this.options.getComponent(__dependency_1.UITransform).priority = 0, this.options.getComponent(__dependency_1.Layout).updateLayout(!0);
  }, r.closeView = function () {
    this.data.featureData && dispatch(__dependency_11.GameEvent.OPEN_CURRENT_FEATURE_BTN), dispatch(__dependency_5.SlotFrameworkEvent.SET_BTNS_IN_BUY_FEATURE, !0), dispatch(__dependency_11.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_9.EBTM.FEATURE_CLICK_CLOSE
      }
    }), dispatch(__dependency_11.GameEvent.BUY_FEATURE_VIEW_CLOSED), this.hide();
  }, r.addEventTouch = function () {
    var t = this;
    __dependency_3.CmmUtils.addBtnClickEvent(this.closeBtn, function () {
      t.closeView();
    }), this.bbr.on(__dependency_1.NodeEventType.TOUCH_END, this.closeView, this);
  }, r.playExpansionAnim = function () {
    var t = this;
    this.options.children.forEach(function (t) {
      t.getComponent(__dependency_1.UIOpacity).opacity = 0;
    }), this.scheduleOnce(function () {
      t.options.children.forEach(function (t, e) {
        __dependency_1.tween(t).bindNodeState(false).call(function () {
          __dependency_3.CmmUtils.fadeInTween(t, .3);
        }).start();
      });
    });
  }, r.updateFeatureStake = function () {
    this.options.children.forEach(function (t) {
      t.getComponent(__dependency_8.FeatureOption).updateStake();
    }), this.options.getComponent(__dependency_1.Layout).enabled = !0, this.options.getComponent(__dependency_1.UITransform).priority = 0, this.options.getComponent(__dependency_1.Layout).updateLayout(!0);
  }, r.setDetail = function (t) {
    var e,
      n = __dependency_9.default.getData().filePaths.localeSpriteFrame,
      i = ((e = {})[__dependency_12.EFeature.LUCK_OR_BAD_LUCK] = "f_font_01", e[__dependency_12.EFeature.SUPER_FREE_GAME] = "f_font_02", e[__dependency_12.EFeature.FREE_GAME] = "f_font_03", e[__dependency_12.EFeature.THE_WRATH_OF_HADES] = "f_font_04", e[__dependency_12.EFeature.THE_POWER_OF_HADES] = "f_font_05", e);
    this.detailFontSprite.spriteFrame = __dependency_7.LoadUtils.getDirSp(this.data.module, n, "" + i[t]);
  }, r.setDetailActive = function (t) {
    this.detailFontSprite.node.parent.active = t, t && __dependency_3.CmmUtils.fadeInTween(this.detailFontSprite.node.parent, .2);
  }, r.handleOpenBuyFeatureView = function () {
    this.show(), this.playExpansionAnim(), dispatch(__dependency_5.SlotFrameworkEvent.SET_BTNS_IN_BUY_FEATURE, !1);
  }, r.reset = function () {}, r.setData = function () {}, r.show = function () {
    this.content.active = !0;
  }, r.hide = function () {
    this.content.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(__dependency_11.GameEvent.PARSER_INIT_COMPLETED, function () {
      t.init();
    }), this.on(__dependency_11.GameEvent.CLOSE_BUY_FEATURE_VIEW, function () {
      t.closeView();
    }), this.on(__dependency_11.GameEvent.OPEN_BUY_FEATURE_VIEW, function () {
      t.handleOpenBuyFeatureView();
    }), this.on(__dependency_5.SlotFrameworkEvent.UPDATE_STAKE, function () {
      __dependency_6.default.isReplay || t.updateFeatureStake();
    }), this.on(__dependency_11.GameEvent.SET_FEATURE_DETAIL_ACTIVE, function (e) {
      t.setDetailActive(e);
    }), this.on(__dependency_11.GameEvent.SET_FEATURE_DETAIL_FONT_SPRITE, function (e) {
      t.setDetail(e);
    }), this.on(__dependency_11.GameEvent.CLOSE_CURRENT_FEATURE_BTN, function (e) {
      t.options.children.forEach(function (t) {
        t.getComponent(__dependency_8.FeatureOption).reset();
      });
    }), this.on(__dependency_11.GameEvent.SHOW_FG_SUMMARY_ALERT, function (e) {
      t.options.children.forEach(function (t) {
        t.getComponent(__dependency_8.FeatureOption).reset();
      });
    });
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_10.default);
    }
  }]), e;
}(__dependency_2.default)).prototype, "content", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = __dependency_0.applyDecoratedDescriptor(V.prototype, "bbr", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = __dependency_0.applyDecoratedDescriptor(V.prototype, "options", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = __dependency_0.applyDecoratedDescriptor(V.prototype, "closeBtn", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = __dependency_0.applyDecoratedDescriptor(V.prototype, "detailFontSprite", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = __dependency_0.applyDecoratedDescriptor(V.prototype, "featureOptionPf", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = V)) || N));
__dependency_1.cclegacy._RF.pop();
