// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Decorators";
import * as _dependency4 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency5 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "./g1008-GameConfigModel";
import * as _dependency7 from "./g1008-GameData";
import * as _dependency8 from "./g1008-GameEvent";
import * as _dependency9 from "../../shared/scripts/main-Bundles";
import * as _dependency0 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency1 from "../../shared/scripts/main-UIView";
import * as _dependency10 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency11 from "./g1008-GameSender";
import * as _dependency12 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency14 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency15 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency16 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency17 from "../../shared/scripts/slotFramework-type2";
import * as _dependency18 from "../../shared/scripts/main-UrlUtils";
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
var e, n, i, a, o, r, u, s, l, c, p, f, d, h, m, B, b, g, S, y, F, T, C, E, k, U, _, A, v, O, w, D, I, H;
var L, P, x, V, M, R, N, z, j, G, Y, q, Z, K, W, J, Q, X, $;
_dependency2.cclegacy._RF.push({}, "898e9xZaUdFkLrZ747jL3AH", "BuyFeatureView", void 0);
var tt = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("BuyFeatureView", (L = tt("BuyFeatureView"), P = _dependency3.inject("popup", _dependency2.Node), x = _dependency3.inject("popup/spines", _dependency2.Node), V = _dependency3.inject("popup/titleFont", _dependency2.Node), M = _dependency3.inject("popup/nd/ndCancelBtn/cancelBtn", _dependency2.Node), R = _dependency3.inject("popup/nd/ndCancelBtn/cancelBtn/fontSprite", _dependency2.Sprite), N = _dependency3.inject("popup/nd/ndConfirmBtn/confirmBtn", _dependency2.Node), z = _dependency3.inject("popup/nd/ndConfirmBtn/confirmBtn/fontSprite", _dependency2.Sprite), j = _dependency3.inject("popup/nd/stake", _dependency2.Label), L((q = _dependency.applyDecoratedDescriptor((Y = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "popup", q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spines", Z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "titleFont", K, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "cancelBtn", W, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "cancelBtnFontSprite", J, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "confirmBtn", Q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "confirmFontSprite", X, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stake", $, _dependency.assertThisInitialized(e)), e.skeletons = [], e.titleFontTween = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + _dependency18.default.getViewModeParam() + "/BuyFeatureView";
  }, r.init = function () {
    this.skeletons = this.spines.getComponentsInChildren(_dependency2.sp.Skeleton), this.createTitleFontLoopAnim(), this.setData(), this.skeletons.forEach(function (t) {
      t.setAnimation(0, "idle", !0);
    });
  }, r.cancelBtnHandler = function (t) {
    var e = t.type == _dependency2.NodeEventType.TOUCH_START ? _dependency2.v3(1.15, 1.15, 1.15) : _dependency2.v3(1.2, 1.2, 1.2);
    this.cancelBtn.children.forEach(function (t) {
      t.setScale(e);
    }), t.type == _dependency2.NodeEventType.TOUCH_END && (dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency6.EBTM.CLOSE_FEATURE
      }
    }), this.closePopup());
  }, r.confirmBtnHandler = function (t) {
    var e = t.type == _dependency2.NodeEventType.TOUCH_START ? _dependency2.v3(1.15, 1.15, 1.15) : _dependency2.v3(1.2, 1.2, 1.2);
    if (this.confirmBtn.children.forEach(function (t) {
      t.setScale(e);
    }), t.type === _dependency2.NodeEventType.TOUCH_END) {
      if (!this.checkCanBuyFeature()) return void this.setInteractable(!0);
      App.globalAudio.pauseMusic(), dispatch(_dependency8.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency6.EBTM.OPEN_SUCCESS
        }
      }), this.playTransitionOut();
    }
  }, r.playTransitionOut = function () {
    this.setInteractable(!1), this.sendFeatureReq(), dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency6.EBTM.CLOSE_FEATURE
      }
    });
  }, r.closePopup = function () {
    App.uiManager.close(e);
  }, r.addButtonsEvent = function () {
    this.cancelBtn.on(_dependency2.NodeEventType.TOUCH_START, this.cancelBtnHandler, this), this.cancelBtn.on(_dependency2.NodeEventType.TOUCH_MOVE, this.cancelBtnHandler, this), this.cancelBtn.on(_dependency2.NodeEventType.TOUCH_CANCEL, this.cancelBtnHandler, this), this.cancelBtn.on(_dependency2.NodeEventType.TOUCH_END, this.cancelBtnHandler, this), this.confirmBtn.on(_dependency2.NodeEventType.TOUCH_START, this.confirmBtnHandler, this), this.confirmBtn.on(_dependency2.NodeEventType.TOUCH_MOVE, this.confirmBtnHandler, this), this.confirmBtn.on(_dependency2.NodeEventType.TOUCH_CANCEL, this.confirmBtnHandler, this), this.confirmBtn.on(_dependency2.NodeEventType.TOUCH_END, this.confirmBtnHandler, this);
  }, r.sendFeatureReq = function () {
    var t = {
      ratioIndex: _dependency4.default.ratioIndex,
      ratioValue: _dependency4.default.ratioValue,
      stakeIndex: _dependency4.default.stakeIndex,
      stakeValue: _dependency4.default.stakeValue
    };
    App.senderManager.get(_dependency11.GameSender).buyFeature(t, this.needUpdateStake()), this.setInteractable(!1), this.cancelBtn.targetOff(this), this.confirmBtn.targetOff(this);
  }, r.checkCanBuyFeature = function () {
    var t = {
      ratioIndex: _dependency4.default.ratioIndex,
      ratioValue: _dependency4.default.ratioValue,
      stakeIndex: _dependency4.default.stakeIndex,
      stakeValue: _dependency4.default.stakeValue
    };
    if (0 === _dependency13.default.getData().player.balance.amount) {
      var e = {
          text: App.getLanguage("insufficientFundError", [], _dependency9.EBundles[_dependency9.EBundles.wrapper]),
          confirmCb: function () {
            n();
          },
          bbrCb: function () {
            n();
          }
        },
        n = function () {
          dispatch(_dependency5.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
            data: !0
          }), dispatch(_dependency5.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
            data: _dependency17.ESpinStatus.IDLE
          });
        };
      return this.data.isOpenEarlyFlag = !1, this.data.isSendOutEarlyFlag = !1, App.gameAlert.show(e), !1;
    }
    if (!this.checkBalance(t)) {
      var i = {
        text: App.getLanguage("insufficientFund", [], _dependency9.EBundles[_dependency9.EBundles.wrapper]),
        confirmCb: function () {},
        bbrCb: function () {}
      };
      return App.gameAlert.show(i), !1;
    }
    return !0;
  }, r.checkBalance = function (t) {
    var e = _dependency12.default.getData().winlineDefs.length,
      n = this.data.getData().definition.buyFeature,
      i = t.stakeValue,
      a = t.ratioValue,
      o = _dependency16.default.multiply(a, i, e) * n[0].featureRate;
    return _dependency13.default.getData().player.balance.amount - o >= 0;
  }, r.updateBuyFeatureStake = function () {
    var t = _dependency4.default.getData().totalStake * this.data.getData().definition.buyFeature[0].featureRate;
    this.stake.string = _dependency15.CmmSlotUtils.formatNumber(t);
  }, r.setInteractable = function (t) {
    this.confirmBtn.getComponent(_dependency2.Button).interactable = t, this.cancelBtn.getComponent(_dependency2.Button).interactable = t;
  }, r.createTitleFontLoopAnim = function () {
    this.titleFontTween = _dependency2.tween(this.titleFont).bindNodeState(false).repeatForever(_dependency2.tween().bindNodeState(false).to(1.5, {
      scale: _dependency2.v3(.97, .97)
    }).to(1.5, {
      scale: _dependency2.v3(1, 1)
    }));
  }, r.needUpdateStake = function () {
    var t = {
        stakeIndex: _dependency14.default.stakeIndex,
        ratioIndex: _dependency14.default.ratioIndex
      },
      e = {
        stakeIndex: _dependency4.default.stakeIndex,
        ratioIndex: _dependency4.default.ratioIndex
      },
      n = _dependency10.ObjectUtils.diffObjects(t, e);
    return Object.keys(n).length > 0;
  }, r.reset = function () {}, r.setData = function () {
    var t = _dependency6.default.getData().filePaths.localeSpriteFrame;
    this.confirmFontSprite.spriteFrame = _dependency0.LoadUtils.getDirSp(this.data.module, t, "popup_font_01"), this.cancelBtnFontSprite.spriteFrame = _dependency0.LoadUtils.getDirSp(this.data.module, t, "popup_font_02"), this.titleFont.getComponent(_dependency2.Sprite).spriteFrame = _dependency0.LoadUtils.getDirSp(this.data.module, t, "popup_font_03");
  }, r.openPopup = function () {
    var t;
    this.updateBuyFeatureStake(), this.popup.active = !0, this.skeletons.forEach(function (t) {
      t.setAnimation(0, "idle", !0);
    }), this.setInteractable(!0), this.addButtonsEvent(), null == (t = this.titleFontTween) || t.start();
  }, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(_dependency8.GameEvent.CLOSE_FEATURE_POPUP, function (e) {
      t.closePopup();
    }), this.on(_dependency5.SlotFrameworkEvent.UPDATE_STAKE, function (e) {
      t.updateBuyFeatureStake();
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), e;
}(_dependency1.default)).prototype, "popup", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = _dependency.applyDecoratedDescriptor(Y.prototype, "spines", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(Y.prototype, "titleFont", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = _dependency.applyDecoratedDescriptor(Y.prototype, "cancelBtn", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(Y.prototype, "cancelBtnFontSprite", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(Y.prototype, "confirmBtn", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(Y.prototype, "confirmFontSprite", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = _dependency.applyDecoratedDescriptor(Y.prototype, "stake", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = Y)) || G));
_dependency2.cclegacy._RF.pop();
