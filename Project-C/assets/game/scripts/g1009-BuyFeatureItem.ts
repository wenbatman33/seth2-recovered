// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./g1009-GameData";
import * as _dependency4 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency5 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency6 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency7 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency8 from "./g1009-GameSender";
import * as _dependency9 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency0 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency1 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency10 from "../../shared/scripts/main-Bundles";
import * as _dependency11 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency12 from "./g1009-GameConfigModel";
import * as _dependency13 from "./g1009-GameEvent";
import * as _dependency14 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency15 from "../../shared/scripts/main-Decorators";
var _export;
export { _export as BuyFeatureItem };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BuyFeatureItem":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, a, r, u, o, s, l, f, c, d, p, b, y, h, S, m, _, F, g, B, I, D, x, k, E, v, U;
var O, C, M, T, w, N, A, H, L, R, z, V, j, G, P;
_dependency2.cclegacy._RF.push({}, "b15e7r6HwZNoYMCPNtwYwDr", "BuyFeatureItem", void 0);
var q = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("BuyFeatureItem", (O = q("BuyFeatureItem"), C = _dependency15.inject("stake", _dependency2.Label), M = _dependency15.inject("buyBtn", _dependency2.Node), T = _dependency15.inject("fontSprite", _dependency2.Sprite), w = _dependency15.inject("iconSprite", _dependency2.Sprite), N = _dependency15.inject("ruleSprite", _dependency2.Sprite), A = _dependency15.inject("buyBtn/font", _dependency2.Sprite), O((R = _dependency.applyDecoratedDescriptor((L = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, r = new Array(n), u = 0; u < n; u++) r[u] = arguments[u];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "stake", R, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "buyBtn", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fontSprite", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "iconSprite", j, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ruleSprite", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "buyBtnFontSprite", P, _dependency.assertThisInitialized(e)), e._buyFeatureIndex = 0, e._feature = "", e;
  }
  _dependency.inheritsLoose(e, t);
  var u = e.prototype;
  return u.init = function (t) {
    var e = this;
    console.log("%c buyFeatureIndex ", _dependency14.getKeyStyle(_dependency14.KeyStyle.Watch), t), this.buyFeatureIndex = t;
    var n = _dependency12.default.getData().filePaths.localeSpriteFrame;
    if (this.fontSprite && (this.fontSprite.spriteFrame = _dependency11.LoadUtils.getDirSp(this.data.module, n, "buy_feature_font_0" + (t + 1))), this.ruleSprite && (this.ruleSprite.spriteFrame = _dependency11.LoadUtils.getDirSp(this.data.module, n, "buy_feature_info_font_0" + (this.buyFeatureIndex + 1))), this.iconSprite) {
      var i = _dependency12.default.getData().filePaths.common;
      this.iconSprite.spriteFrame = _dependency11.LoadUtils.getDirSp(this.data.module, i, "buy_feature_board_icon_" + (this.buyFeatureIndex + 1));
    }
    this.buyBtnFontSprite && (this.buyBtnFontSprite.spriteFrame = _dependency11.LoadUtils.getDirSp(this.data.module, n, "buy_feature_btn_font_normal"), this.buyBtn.on(_dependency2.NodeEventType.MOUSE_ENTER, function () {
      e.buyBtnFontSprite.spriteFrame = _dependency11.LoadUtils.getDirSp(e.data.module, n, "buy_feature_btn_font_hover");
    }), this.buyBtn.on(_dependency2.NodeEventType.MOUSE_LEAVE, function () {
      e.buyBtnFontSprite.spriteFrame = _dependency11.LoadUtils.getDirSp(e.data.module, n, "buy_feature_btn_font_normal");
    }), this.buyBtn.on(_dependency2.NodeEventType.MOUSE_DOWN, function () {
      e.buyBtnFontSprite.spriteFrame = _dependency11.LoadUtils.getDirSp(e.data.module, n, "buy_feature_btn_font_pressed");
    })), this.updataBuyFeatureStake(), this.addEvents();
  }, u.onDestroy = function () {
    this.buyBtn && this.buyBtn.off(_dependency2.NodeEventType.TOUCH_END, this.confirmBtnHandler, this), this.buyBtnFontSprite && (this.buyBtnFontSprite.node.off(_dependency2.NodeEventType.MOUSE_ENTER), this.buyBtnFontSprite.node.off(_dependency2.NodeEventType.MOUSE_LEAVE));
  }, u.addEvents = function () {
    this.buyBtn && this.buyBtn.on(_dependency2.NodeEventType.TOUCH_END, this.confirmBtnHandler, this);
  }, u.updataBuyFeatureStake = function () {
    var t = _dependency4.default.getData().totalStake * this.data.getData().definition.buyFeature[this.buyFeatureIndex].featureRate;
    this.stake && (this.stake.string = _dependency5.CmmSlotUtils.formatNumber(t));
  }, u.needUpdateStake = function () {
    var t = {
        stakeIndex: _dependency6.default.stakeIndex,
        ratioIndex: _dependency6.default.ratioIndex
      },
      e = {
        stakeIndex: _dependency4.default.stakeIndex,
        ratioIndex: _dependency4.default.ratioIndex
      },
      n = _dependency7.ObjectUtils.diffObjects(t, e);
    return Object.keys(n).length > 0;
  }, u.checkBalance = function (t) {
    var e = _dependency9.default.getData().winlineDefs.length,
      n = this.data.getData().definition.buyFeature,
      i = t.stakeValue,
      a = t.ratioValue,
      r = _dependency0.default.multiply(a, i, e) * n[this.buyFeatureIndex].featureRate;
    return _dependency1.default.getData().player.balance.amount - r >= 0;
  }, u.sendFeatureReq = function () {
    var t = {
      ratioIndex: _dependency4.default.ratioIndex,
      ratioValue: _dependency4.default.ratioValue,
      stakeIndex: _dependency4.default.stakeIndex,
      stakeValue: _dependency4.default.stakeValue
    };
    if (this.checkBalance(t)) dispatch(_dependency13.GameEvent.DISABLE_FEATURE_BUTTON), this.buyBtn.off(_dependency2.NodeEventType.TOUCH_END, this.confirmBtnHandler, this), App.senderManager.get(_dependency8.GameSender).buyFeature(t, this.needUpdateStake(), this.buyFeatureIndex);else {
      var e = {
        text: App.getLanguage("insufficientFund", [], _dependency10.EBundles[_dependency10.EBundles.wrapper]),
        confirmCb: function () {},
        bbrCb: function () {}
      };
      App.gameAlert.show(e);
    }
  }, u.confirmBtnHandler = function (t) {
    var e = t.type == _dependency2.NodeEventType.TOUCH_START ? _dependency2.v3(1.15, 1.15, 1.15) : _dependency2.v3(1.2, 1.2, 1.2);
    this.buyBtn.children.forEach(function (t) {
      t.setScale(e);
    }), t.type == _dependency2.NodeEventType.TOUCH_END && (this.data.getData().currentBuyFeatureIndex = this.buyFeatureIndex, this.sendFeatureReq());
  }, _dependency.createClass(e, [{
    key: "buyFeatureIndex",
    get: function () {
      return this._buyFeatureIndex;
    },
    set: function (t) {
      this._buyFeatureIndex = t;
    }
  }, {
    key: "feature",
    get: function () {
      return this._feature;
    },
    set: function (t) {
      this._feature = t;
      for (var e = this.data.getData().definition.buyFeature, n = 0; n < e.length; n++) {
        var i = e[n];
        if (i.feature == t) {
          this.buyFeatureIndex = i.featureIndex;
          break;
        }
      }
    }
  }, {
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency3.default);
    }
  }]), e;
}(_dependency2.Component)).prototype, "stake", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(L.prototype, "buyBtn", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(L.prototype, "fontSprite", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(L.prototype, "iconSprite", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(L.prototype, "ruleSprite", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(L.prototype, "buyBtnFontSprite", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = L)) || H));
_dependency2.cclegacy._RF.pop();
