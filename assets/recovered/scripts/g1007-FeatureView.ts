// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/FeatureView.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-CmmUtils";
import * as __dependency_4 from "./main-UIView";
import * as __dependency_5 from "./main-Decorators";
import * as __dependency_6 from "./framework-SlotFrameworkEvent";
import * as __dependency_7 from "./framework-LoadUtils";
import * as __dependency_8 from "./g1007-GameConfigModel";
import * as __dependency_9 from "./g1007-GameData";
import * as __dependency_10 from "./g1007-GameEvent";
import * as __dependency_11 from "./g1007-types";
import * as __dependency_12 from "./framework-StakeModel";
import * as __dependency_13 from "./framework-CmmSlotUtils";
import * as __dependency_14 from "./framework-UrlModel";
import * as __dependency_15 from "./framework-ReplayModel";
var __export_0;
export { __export_0 as FeatureView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FeatureView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, r, a, o, u, l, s, c, f, p, d, _, b, h, m, S, g, y, E, B, D, F, v, w, C, T, U;
var k, L, A, R, M, P, V, z, I, O, x, G, H, Y, K, N, W, j, J, Q, q;
__dependency_1.cclegacy._RF.push({}, "37fb89g3ftEkJQYlJkKlgT4", "FeatureView", void 0);
var X = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("FeatureView", (k = X("Hades_FeatureView"), L = __dependency_5.inject("board/cancelBtn", __dependency_1.Node), A = __dependency_5.inject("board/confirmBtn", __dependency_1.Node), R = __dependency_5.inject("board/titleFontSprite", __dependency_1.Sprite), M = __dependency_5.inject("board/buyBoard/amount", __dependency_1.Label), P = __dependency_5.inject("board/detailFontSprite", __dependency_1.Sprite), V = __dependency_5.inject("board/txtIsBuy", __dependency_1.Sprite), z = __dependency_5.inject("board/buyBoard", __dependency_1.Node), I = __dependency_5.inject("board", __dependency_1.Node), O = __dependency_5.inject("buyfeature", __dependency_1.sp.Skeleton), k((H = __dependency_0.applyDecoratedDescriptor((G = function (t) {
  function e() {
    for (var e, i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "cancelBtn", H, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "confirmBtn", Y, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "titleFontSprite", K, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "amount", N, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "detailFontSprite", W, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "txtIsBuy", j, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "buyBoard", J, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "board", Q, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "buyfeature", q, __dependency_0.assertThisInitialized(e)), e.featureData = null, e;
  }
  __dependency_0.inheritsLoose(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this), this.amount.string = "0", this.board.getComponent(__dependency_1.UIOpacity).opacity = 0;
  }, o.start = function () {}, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/FeatureView";
  }, o.init = function () {
    var t = this;
    this.setLocaleSprite(), __dependency_3.CmmUtils.addBtnClickEvent(this.cancelBtn, function () {
      t.clickCancel();
    }), __dependency_3.CmmUtils.addBtnClickEvent(this.confirmBtn, function () {
      t.clickConfirm();
    }), this.buyBoard.y = 32, "tr" === __dependency_14.default.getLanguageParam() && (this.buyBoard.y = 76);
  }, o.setLocaleSprite = function () {
    var t,
      e = __dependency_8.default.getData().filePaths.localeSpriteFrame,
      i = this.featureData.feature,
      n = ((t = {})[__dependency_11.EFeature.LUCK_OR_BAD_LUCK] = "t_font_04", t[__dependency_11.EFeature.SUPER_FREE_GAME] = "t_font_05", t[__dependency_11.EFeature.FREE_GAME] = "t_font_06", t[__dependency_11.EFeature.THE_WRATH_OF_HADES] = "t_font_07", t[__dependency_11.EFeature.THE_POWER_OF_HADES] = "t_font_08", t),
      r = this.confirmBtn.getComponents(__dependency_1.Button)[1],
      a = this.cancelBtn.getComponents(__dependency_1.Button)[1];
    this.titleFontSprite.spriteFrame = __dependency_7.LoadUtils.getDirSp(this.data.module, e, "t_font_03"), this.detailFontSprite.spriteFrame = __dependency_7.LoadUtils.getDirSp(this.data.module, e, "" + n[i]), this.txtIsBuy.spriteFrame = __dependency_7.LoadUtils.getDirSp(this.data.module, e, "t_font_09"), this.updateStake(), r.normalSprite = __dependency_7.LoadUtils.getDirSp(__dependency_2.EBundles[__dependency_2.EBundles.g1007], e, "b_font_01_normal"), r.pressedSprite = __dependency_7.LoadUtils.getDirSp(__dependency_2.EBundles[__dependency_2.EBundles.g1007], e, "b_font_01_pressed"), r.hoverSprite = __dependency_7.LoadUtils.getDirSp(__dependency_2.EBundles[__dependency_2.EBundles.g1007], e, "b_font_01_hover"), r.disabledSprite = __dependency_7.LoadUtils.getDirSp(__dependency_2.EBundles[__dependency_2.EBundles.g1007], e, "b_font_01_disabled"), a.normalSprite = __dependency_7.LoadUtils.getDirSp(__dependency_2.EBundles[__dependency_2.EBundles.g1007], e, "b_font_02_normal"), a.pressedSprite = __dependency_7.LoadUtils.getDirSp(__dependency_2.EBundles[__dependency_2.EBundles.g1007], e, "b_font_02_pressed"), a.hoverSprite = __dependency_7.LoadUtils.getDirSp(__dependency_2.EBundles[__dependency_2.EBundles.g1007], e, "b_font_02_hover"), a.disabledSprite = __dependency_7.LoadUtils.getDirSp(__dependency_2.EBundles[__dependency_2.EBundles.g1007], e, "b_font_02_disabled");
  }, o.updateStake = function () {
    var t = this.featureData.featureRate,
      e = __dependency_12.default.getData(),
      i = e.totalStake,
      n = e.extraStakeTimes,
      r = i * t,
      a = n > 1 ? Math.round(r / n * 10) / 10 : r;
    this.amount.string = __dependency_13.CmmSlotUtils.formatNumber(a);
  }, o.closeView = function () {
    App.uiManager.close(e), dispatch(__dependency_10.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_8.EBTM.FEATURE_SELECT_CLOSE
      }
    });
  }, o.clickConfirm = function () {
    this.data.featureData = this.featureData, dispatch(__dependency_10.GameEvent.SELECT_FEATURE), dispatch(__dependency_10.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_8.EBTM.FEATURE_SELECT_BUY
      }
    }), dispatch(__dependency_6.SlotFrameworkEvent.SET_SPIN_BTN_BY_SELECT_FEATURE, !0), this.closeView();
  }, o.clickCancel = function () {
    this.closeView();
  }, o.reset = function () {}, o.setData = function () {}, o.openView = function (t) {
    this.featureData = t, this.init();
  }, o.show = function () {
    this.node.active = !0, this.buyfeature.clearTracks(), this.buyfeature.setToSetupPose(), this.buyfeature.setAnimation(0, "in", !1);
    var t = this.board.getComponent(__dependency_1.UIOpacity);
    __dependency_1.tween(t).bindNodeState(false).delay(.4).to(.6, {
      opacity: 255
    }).start();
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var t = this;
    this.on(__dependency_10.GameEvent.CLOSE_BUY_FEATURE_VIEW, function () {
      t.closeView();
    }), this.on(__dependency_6.SlotFrameworkEvent.UPDATE_STAKE, function () {
      __dependency_15.default.isReplay || t.updateStake();
    });
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_9.default);
    }
  }]), e;
}(__dependency_4.default)).prototype, "cancelBtn", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = __dependency_0.applyDecoratedDescriptor(G.prototype, "confirmBtn", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = __dependency_0.applyDecoratedDescriptor(G.prototype, "titleFontSprite", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = __dependency_0.applyDecoratedDescriptor(G.prototype, "amount", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = __dependency_0.applyDecoratedDescriptor(G.prototype, "detailFontSprite", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = __dependency_0.applyDecoratedDescriptor(G.prototype, "txtIsBuy", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = __dependency_0.applyDecoratedDescriptor(G.prototype, "buyBoard", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = __dependency_0.applyDecoratedDescriptor(G.prototype, "board", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = __dependency_0.applyDecoratedDescriptor(G.prototype, "buyfeature", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = G)) || x));
__dependency_1.cclegacy._RF.pop();
