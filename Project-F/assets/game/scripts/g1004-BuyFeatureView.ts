// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency9 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency0 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency1 from "./g1004-GameConfigModel";
import * as _dependency10 from "./g1004-GameData";
import * as _dependency11 from "./g1004-GameEvent";
import * as _dependency12 from "./g1004-GameSender";
import * as _dependency13 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency14 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency15 from "../../shared/scripts/slotFramework-DefinitionModel";
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
var e, n, a, i, r, o, u, s, l, c, f, p, d, m, h, b, g, _, C, y, S, E, F, v, T, B, D, w, U, A, k, N, O, I;
var x, P, M, R, L, V, H, G, j, z, Y;
_dependency2.cclegacy._RF.push({}, "98b79oiDcBH3aRKN4i5jfjM", "BuyFeatureView", void 0);
var K = _dependency2._decorator.ccclass,
  q = _dependency2._decorator.property;
_publish("BuyFeatureView", (x = K("BuyFeatureView"), P = q({
  type: _dependency2.Sprite,
  tooltip: "標題"
}), M = q({
  type: _dependency2.Label,
  tooltip: "金額"
}), R = q({
  type: _dependency2.Node,
  tooltip: "確定"
}), L = q({
  type: _dependency2.Node,
  tooltip: "取消"
}), x((G = _dependency.applyDecoratedDescriptor((H = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "spTitle", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "txtStake", j, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "btnConfirm", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "btnCancel", Y, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/featureGame/BuyFeatureView";
  };
  var o = e.prototype;
  return o.start = function () {
    this.init();
  }, o.init = function () {
    var t = _dependency1.default.getData().filePaths.localeSpriteFrame;
    this.spTitle.spriteFrame = _dependency9.LoadUtils.getDirSp(this.data.module, t, "feature_font"), this.setData();
  }, o.closePopup = function () {
    _dependency2.Tween.stopAllByTarget(this);
    var t = this.node.getChildByName("popup");
    t.scale = new _dependency2.Vec3(1, 1, 1), _dependency2.tween(t).bindNodeState(false).to(.3, {
      scale: new _dependency2.Vec3(1, .3, 1)
    }, {
      easing: _dependency2.easing.backIn
    }).call(function () {
      App.uiManager.close(e);
    }).start();
    var n = t.getComponent(_dependency2.UIOpacity);
    _dependency2.tween(n).bindNodeState(false).delay(.1).to(.2, {
      opacity: 0
    }).start();
  }, o.updateBuyFeatureStake = function () {
    var t = _dependency5.default.getData().totalStake * this.data.getData().definition.buyFeature[0].featureRate;
    this.txtStake.string = _dependency8.CmmSlotUtils.formatNumber(t);
  }, o.setInteractable = function (t) {
    this.btnCancel.getComponent(_dependency2.Button).interactable = t, this.btnConfirm.getComponent(_dependency2.Button).interactable = t;
    var e = _dependency1.default.getData().filePaths.localeSpriteFrame,
      n = this.btnConfirm.getChildByName("txt").getComponent(_dependency2.Sprite),
      a = this.btnCancel.getChildByName("txt").getComponent(_dependency2.Sprite);
    t ? (n.spriteFrame = _dependency9.LoadUtils.getDirSp(this.data.module, e, "btn_buy_font_01_normal"), a.spriteFrame = _dependency9.LoadUtils.getDirSp(this.data.module, e, "btn_buy_font_02_normal")) : (n.spriteFrame = _dependency9.LoadUtils.getDirSp(this.data.module, e, "btn_buy_font_01_disabled"), a.spriteFrame = _dependency9.LoadUtils.getDirSp(this.data.module, e, "btn_buy_font_02_disabled"));
  }, o.setData = function () {
    var t = _dependency1.default.getData().filePaths.localeSpriteFrame;
    this.spTitle.spriteFrame = _dependency9.LoadUtils.getDirSp(this.data.module, t, "feature_font");
  }, o.openPopup = function () {
    dispatch(_dependency11.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.FG_BOARD_OPEN
      }
    }), this.updateBuyFeatureStake(), this.setInteractable(!0), this.addButtonsEvent();
    var t = this.node.getChildByName("popup");
    t.scale = new _dependency2.Vec3(1, .2, 1);
    var e = t.getComponent(_dependency2.UIOpacity);
    _dependency2.Tween.stopAllByTarget(this), _dependency2.tween(t).bindNodeState(false).to(.3, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      easing: "backOut"
    }).start(), _dependency2.tween(e).bindNodeState(false).to(.2, {
      opacity: 255
    }).start();
  }, o.addButtonsEvent = function () {
    var t = this;
    Array.from(_dependency11.NodeEventTypeMap.values()).forEach(function (e) {
      t.onN(t.btnConfirm, e, t.confirmBtnHandler, t);
    }), Array.from(_dependency11.NodeEventTypeMap.values()).forEach(function (e) {
      t.onN(t.btnCancel, e, t.cancelBtnHandler, t);
    }), this.onN(this.btnConfirm, _dependency2.NodeEventType.TOUCH_END, function () {
      dispatch(_dependency11.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.BUY_FEATURE_CLICK
        }
      }), t.sendFeatureReq();
    }, this), this.onN(this.btnCancel, _dependency2.NodeEventType.TOUCH_END, function () {
      dispatch(_dependency11.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.BUY_FEATURE_CLICK
        }
      }), t.closePopup();
    }, this);
  }, o.cancelBtnHandler = function (t) {
    this.updateCancelSpriteFrame(t.type);
  }, o.confirmBtnHandler = function (t) {
    this.updateConfirmSpriteFrame(t.type);
  }, o.updateConfirmSpriteFrame = function (t) {
    var e = _dependency1.default.getData().filePaths.localeSpriteFrame,
      n = this.btnConfirm.getComponentInChildren(_dependency2.Sprite),
      a = this.getConfirmSpriteName(t);
    n.spriteFrame = _dependency9.LoadUtils.getDirSp(this.data.module, e, a), n.node.scale = t === _dependency2.NodeEventType.TOUCH_START ? new _dependency2.Vec3(.9, .9, .9) : new _dependency2.Vec3(1, 1, 1);
  }, o.updateCancelSpriteFrame = function (t) {
    var e = _dependency1.default.getData().filePaths.localeSpriteFrame,
      n = this.btnCancel.getChildByName("txt").getComponent(_dependency2.Sprite),
      a = this.getCancelSpriteName(t);
    n.spriteFrame = _dependency9.LoadUtils.getDirSp(this.data.module, e, a), n.node.scale = t === _dependency2.NodeEventType.TOUCH_START ? new _dependency2.Vec3(.9, .9, .9) : new _dependency2.Vec3(1, 1, 1);
  }, o.getConfirmSpriteName = function (t) {
    switch (t) {
      case _dependency2.NodeEventType.TOUCH_START:
        return "btn_buy_font_01_pressed";
      case _dependency2.NodeEventType.MOUSE_ENTER:
        return "btn_buy_font_01_hover";
      case _dependency2.NodeEventType.TOUCH_END:
      case _dependency2.NodeEventType.MOUSE_LEAVE:
      default:
        return "btn_buy_font_01_normal";
    }
  }, o.getCancelSpriteName = function (t) {
    switch (t) {
      case _dependency2.NodeEventType.TOUCH_START:
        return "btn_buy_font_02_pressed";
      case _dependency2.NodeEventType.MOUSE_ENTER:
        return "btn_buy_font_02_hover";
      case _dependency2.NodeEventType.TOUCH_END:
      case _dependency2.NodeEventType.MOUSE_LEAVE:
      default:
        return "btn_buy_font_02_normal";
    }
  }, o.sendFeatureReq = function () {
    var t = this,
      e = {
        ratioIndex: _dependency5.default.ratioIndex,
        ratioValue: _dependency5.default.ratioValue,
        stakeIndex: _dependency5.default.stakeIndex,
        stakeValue: _dependency5.default.stakeValue
      };
    if (0 !== _dependency13.default.getData().player.balance.amount) {
      if (this.checkBalance(e)) App.senderManager.get(_dependency12.GameSender).buyFeature(e, this.needUpdateStake()), this.setInteractable(!1), this.btnConfirm.targetOff(this), this.btnCancel.targetOff(this);else {
        var n = {
          text: App.getLanguage("insufficientFund", [], _dependency3.EBundles[_dependency3.EBundles.wrapper]),
          confirmCb: function () {},
          bbrCb: function () {}
        };
        App.gameAlert.show(n);
      }
    } else {
      var a = {
          text: App.getLanguage("insufficientFundError", [], _dependency3.EBundles[_dependency3.EBundles.wrapper]),
          confirmCb: function () {
            i();
          },
          bbrCb: function () {
            i();
          }
        },
        i = function () {
          t.setInteractable(!0);
        };
      App.gameAlert.show(a);
    }
  }, o.checkBalance = function (t) {
    var e = _dependency15.default.getData().winlineDefs.length,
      n = this.data.getData().definition.buyFeature,
      a = t.stakeValue,
      i = t.ratioValue,
      r = _dependency14.default.multiply(i, a, e) * n[0].featureRate;
    return _dependency13.default.getData().player.balance.amount - r >= 0;
  }, o.needUpdateStake = function () {
    var t = {
        stakeIndex: _dependency7.default.stakeIndex,
        ratioIndex: _dependency7.default.ratioIndex
      },
      e = {
        stakeIndex: _dependency5.default.stakeIndex,
        ratioIndex: _dependency5.default.ratioIndex
      },
      n = _dependency0.ObjectUtils.diffObjects(t, e);
    return Object.keys(n).length > 0;
  }, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var t = this;
    this.on(_dependency11.GameEvent.CLOSE_FEATURE_POPUP, function (e) {
      t.closePopup();
    }), this.on(_dependency6.SlotFrameworkEvent.UPDATE_STAKE, function (e) {
      t.updateBuyFeatureStake();
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency10.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "spTitle", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(H.prototype, "txtStake", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(H.prototype, "btnConfirm", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(H.prototype, "btnCancel", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = H)) || V));
_dependency2.cclegacy._RF.pop();
