// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency7 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency8 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency0 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency1 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency10 from "./g1002-GameConfigModel";
import * as _dependency11 from "./g1002-GameData";
import * as _dependency12 from "./g1002-GameEvent";
import * as _dependency13 from "./g1002-GameSender";
import * as _dependency14 from "../../shared/scripts/main-CmmUtils";
import * as _dependency15 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency16 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency17 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency18 from "../../shared/scripts/slotFramework-MisaButton";
var _export;
export { _export as BuyFeatureView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BuyFeatureView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, a, u, o, r, f, p, l, c, s, B, d, b, y, g, h, M, m, E, S, L, v, _, T, U, C, F, k, w;
var I, O, A, D, R, x, z, N, V, P, H, G, j, Y, K, X, q, J, Q, W, Z, $, tt, et, nt, it, at, ut, ot, rt, ft, pt, lt, ct, st, Bt, dt;
_dependency2.cclegacy._RF.push({}, "98b79oiDcBH3aRKN4i5jfjM", "BuyFeatureView", void 0);
var bt,
  yt = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t.FREE_GAME = "freeGame", t.BUY_FULL_COMBO = "buyFullCombo", t.ELIXIR_FURNACE = "elixirFurnace";
}(bt || (bt = {}));
_publish("BuyFeatureView", (I = yt("BuyFeatureView"), O = _dependency5.inject("popup", _dependency2.Node), A = _dependency5.inject("popup/featureBoard/featureBuyTop", _dependency2.Node), D = _dependency5.inject("popup/featureBoard/featureBuyTop/bgContent/bgLight", _dependency2.Node), R = _dependency5.inject("popup/featureBoard/featureBuyTop/fontSprite", _dependency2.Sprite), x = _dependency5.inject("popup/featureBoard/featureBuyTop/stake", _dependency2.Label), z = _dependency5.inject("popup/featureBoard/featureBuyMid", _dependency2.Node), N = _dependency5.inject("popup/featureBoard/featureBuyMid/bgContent/bgLight", _dependency2.Node), V = _dependency5.inject("popup/featureBoard/featureBuyMid/fontSprite", _dependency2.Sprite), P = _dependency5.inject("popup/featureBoard/featureBuyMid/stake", _dependency2.Label), H = _dependency5.inject("popup/featureBoard/featureBuyBot", _dependency2.Node), G = _dependency5.inject("popup/featureBoard/featureBuyBot/bgContent/bgLight", _dependency2.Node), j = _dependency5.inject("popup/featureBoard/featureBuyBot/fontSprite", _dependency2.Sprite), Y = _dependency5.inject("popup/featureBoard/featureBuyBot/stake", _dependency2.Label), K = _dependency5.inject("popup/featureBoard/featureBuyTop/MisaButton", _dependency2.Node), X = _dependency5.inject("popup/featureBoard/featureBuyMid/MisaButton", _dependency2.Node), q = _dependency5.inject("popup/featureBoard/featureBuyBot/MisaButton", _dependency2.Node), J = _dependency5.inject("popup/closeBtn", _dependency2.Node), I((Z = _dependency.applyDecoratedDescriptor((W = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, u = new Array(n), o = 0; o < n; o++) u[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(u).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "popup", Z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "featureBuyTop", $, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bgLightTop", tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fontSpriteTop", et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fontSpriteStakeTop", nt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "featureBuyMid", it, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bgLightMid", at, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fontSpriteMid", ut, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fontSpriteStakeMid", ot, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "featureBuyBot", rt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bgLightBot", ft, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fontSpriteBot", pt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fontSpriteStakeBot", lt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "topBuyMisaBtn", ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "midBuyMisaBtn", st, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "botBuyMisaBtn", Bt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "closeBtn", dt, _dependency.assertThisInitialized(e)), e.buyFeatureMap = new Map(), e;
  }
  _dependency.inheritsLoose(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {}, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/BuyFeatureView";
  }, o.init = function () {
    this.initBuyFeatureMap(), this.setData(), this.addEventTouch();
  }, o.initBuyFeatureMap = function () {
    var t,
      e = this,
      n = ((t = {})[bt.FREE_GAME] = this.featureBuyTop, t[bt.ELIXIR_FURNACE] = this.featureBuyMid, t[bt.BUY_FULL_COMBO] = this.featureBuyBot, t);
    this.data.getData().definition.buyFeature.forEach(function (t) {
      var i = t.feature,
        a = t.featureRate,
        u = t.featureIndex,
        o = n[i],
        r = n[i].getChildByName("MisaButton");
      e.buyFeatureMap.set(i, {
        node: o,
        feature: i,
        featureRate: a,
        featureIndex: u,
        button: r
      });
    });
  }, o.cancelBtnHandler = function (t) {
    t[0].type == _dependency2.NodeEventType.TOUCH_END && this.closePopup();
  }, o.closePopup = function () {
    App.uiManager.close(e), dispatch(_dependency7.SlotFrameworkEvent.PLAY_CLICK_BTM);
  }, o.featureBuyBtnHandler = function (t) {
    var e = this;
    this.setInteractable(!1);
    var n = t.currentTarget,
      i = _dependency6.default.ratioIndex,
      a = _dependency6.default.stakeIndex,
      u = _dependency6.default.ratioValue,
      o = _dependency6.default.stakeValue,
      r = Array.from(this.buyFeatureMap.values()).find(function (t) {
        return t.button.uuid === n.uuid;
      }),
      f = {
        ratioIndex: i,
        ratioValue: u,
        stakeIndex: a,
        stakeValue: o,
        featureIndex: r.featureIndex,
        featureValue: r.feature
      };
    if (0 !== _dependency16.default.getData().player.balance.amount) {
      if (this.checkBalance(f, r)) App.senderManager.get(_dependency13.GameSender).buyFeature(f), dispatch(_dependency12.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency10.EBTM.BUY_FEATUREFG_CONFIRM
        }
      });else {
        var p = {
          text: App.getLanguage("insufficientFund", [], _dependency3.EBundles[_dependency3.EBundles.wrapper]),
          confirmCb: function () {
            e.setInteractable(!0);
          },
          bbrCb: function () {
            e.setInteractable(!0);
          }
        };
        App.gameAlert.show(p);
      }
    } else {
      var l = {
          text: App.getLanguage("insufficientFundError", [], _dependency3.EBundles[_dependency3.EBundles.wrapper]),
          confirmCb: function () {
            c();
          },
          bbrCb: function () {
            c();
          }
        },
        c = function () {
          e.setInteractable(!0);
        };
      App.gameAlert.show(l);
    }
  }, o.checkBalance = function (t, e) {
    var n = _dependency15.default.getData().winlineDefs.length,
      i = t.stakeValue,
      a = t.ratioValue,
      u = _dependency17.default.multiply(a, i, n) * e.featureRate;
    return _dependency16.default.getData().player.balance.amount - u >= 0;
  }, o.addEventTouch = function () {
    var t = this;
    this.topBuyMisaBtn.on(_dependency2.NodeEventType.TOUCH_END, function (e) {
      t.featureBuyBtnHandler(e);
    }), this.midBuyMisaBtn.on(_dependency2.NodeEventType.TOUCH_END, function (e) {
      t.featureBuyBtnHandler(e);
    }), this.botBuyMisaBtn.on(_dependency2.NodeEventType.TOUCH_END, function (e) {
      t.featureBuyBtnHandler(e);
    }), _dependency14.CmmUtils.addBtnClickEvent(this.closeBtn, function (e) {
      return t.cancelBtnHandler(e);
    }), this.topBuyMisaBtn.on(_dependency2.NodeEventType.MOUSE_ENTER, function (e) {
      t.bgLightTop.active = !0;
    }), this.midBuyMisaBtn.on(_dependency2.NodeEventType.MOUSE_ENTER, function (e) {
      t.bgLightMid.active = !0;
    }), this.botBuyMisaBtn.on(_dependency2.NodeEventType.MOUSE_ENTER, function (e) {
      t.bgLightBot.active = !0;
    }), this.topBuyMisaBtn.on(_dependency2.NodeEventType.MOUSE_LEAVE, function (e) {
      t.bgLightTop.active = !1;
    }), this.midBuyMisaBtn.on(_dependency2.NodeEventType.MOUSE_LEAVE, function (e) {
      t.bgLightMid.active = !1;
    }), this.botBuyMisaBtn.on(_dependency2.NodeEventType.MOUSE_LEAVE, function (e) {
      t.bgLightBot.active = !1;
    }), this.featureBuyTop.on(_dependency2.NodeEventType.MOUSE_ENTER, function (e) {
      t.bgLightTop.active = !0;
    }), this.featureBuyMid.on(_dependency2.NodeEventType.MOUSE_ENTER, function (e) {
      t.bgLightMid.active = !0;
    }), this.featureBuyBot.on(_dependency2.NodeEventType.MOUSE_ENTER, function (e) {
      t.bgLightBot.active = !0;
    }), this.featureBuyTop.on(_dependency2.NodeEventType.MOUSE_LEAVE, function (e) {
      t.bgLightTop.active = !1;
    }), this.featureBuyMid.on(_dependency2.NodeEventType.MOUSE_LEAVE, function (e) {
      t.bgLightMid.active = !1;
    }), this.featureBuyBot.on(_dependency2.NodeEventType.MOUSE_LEAVE, function (e) {
      t.bgLightBot.active = !1;
    });
  }, o.updateBuyFeatureStake = function () {
    var t = _dependency6.default.getData().totalStake;
    this.buyFeatureMap.forEach(function (e, n) {
      var i = e.node,
        a = e.featureRate,
        u = t * a;
      i.getChildByName("stake").getComponent(_dependency2.Label).string = _dependency9.CmmSlotUtils.formatNumber(u);
    });
  }, o.setInteractable = function (t) {
    this.closeBtn.getComponent(_dependency2.Button).interactable = t, this.featureBuyTop.getComponent(_dependency2.Button).interactable = t, this.featureBuyMid.getComponent(_dependency2.Button).interactable = t, this.featureBuyBot.getComponent(_dependency2.Button).interactable = t, this.topBuyMisaBtn.getComponent(_dependency18.default).interactable = t, this.midBuyMisaBtn.getComponent(_dependency18.default).interactable = t, this.botBuyMisaBtn.getComponent(_dependency18.default).interactable = t, t || (this.topBuyMisaBtn.targetOff(this), this.midBuyMisaBtn.targetOff(this), this.botBuyMisaBtn.targetOff(this));
  }, o.needUpdateStake = function () {
    var t = {
        stakeIndex: _dependency8.default.stakeIndex,
        ratioIndex: _dependency8.default.ratioIndex
      },
      e = {
        stakeIndex: _dependency6.default.stakeIndex,
        ratioIndex: _dependency6.default.ratioIndex
      },
      n = _dependency1.ObjectUtils.diffObjects(t, e);
    return Object.keys(n).length > 0;
  }, o.reset = function () {}, o.setData = function () {
    var t = _dependency10.default.getData().filePaths.localeSpriteFrame;
    this.fontSpriteTop.spriteFrame = _dependency0.LoadUtils.getDirSp(this.data.module, t, "mg_buy_font_01"), this.fontSpriteMid.spriteFrame = _dependency0.LoadUtils.getDirSp(this.data.module, t, "mg_buy_font_02"), this.fontSpriteBot.spriteFrame = _dependency0.LoadUtils.getDirSp(this.data.module, t, "mg_buy_font_03");
  }, o.openPopup = function () {
    this.init(), this.updateBuyFeatureStake(), this.popup.active = !0, this.setInteractable(!0);
  }, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var t = this;
    this.on(_dependency12.GameEvent.CLOSE_FEATURE_POPUP, function (e) {
      t.closePopup();
    }), this.on(_dependency7.SlotFrameworkEvent.UPDATE_STAKE, function (e) {
      t.updateBuyFeatureStake();
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency11.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "popup", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = _dependency.applyDecoratedDescriptor(W.prototype, "featureBuyTop", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(W.prototype, "bgLightTop", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(W.prototype, "fontSpriteTop", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = _dependency.applyDecoratedDescriptor(W.prototype, "fontSpriteStakeTop", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = _dependency.applyDecoratedDescriptor(W.prototype, "featureBuyMid", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at = _dependency.applyDecoratedDescriptor(W.prototype, "bgLightMid", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ut = _dependency.applyDecoratedDescriptor(W.prototype, "fontSpriteMid", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = _dependency.applyDecoratedDescriptor(W.prototype, "fontSpriteStakeMid", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), rt = _dependency.applyDecoratedDescriptor(W.prototype, "featureBuyBot", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = _dependency.applyDecoratedDescriptor(W.prototype, "bgLightBot", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), pt = _dependency.applyDecoratedDescriptor(W.prototype, "fontSpriteBot", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), lt = _dependency.applyDecoratedDescriptor(W.prototype, "fontSpriteStakeBot", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ct = _dependency.applyDecoratedDescriptor(W.prototype, "topBuyMisaBtn", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), st = _dependency.applyDecoratedDescriptor(W.prototype, "midBuyMisaBtn", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Bt = _dependency.applyDecoratedDescriptor(W.prototype, "botBuyMisaBtn", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), dt = _dependency.applyDecoratedDescriptor(W.prototype, "closeBtn", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = W)) || Q));
_dependency2.cclegacy._RF.pop();
