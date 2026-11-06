// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
import * as _dependency4 from "./main-Bundles";
import * as _dependency5 from "./main-CmmUtils";
import * as _dependency6 from "./main-EventComponent";
import * as _dependency7 from "./main-Decorators";
import * as _dependency8 from "./slotFramework-SlotFrameworkData";
import * as _dependency9 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency0 from "./slotFramework-DefinitionModel";
import * as _dependency1 from "./slotFramework-InitialModel";
import * as _dependency10 from "./slotFramework-PlatformModel";
import * as _dependency11 from "./slotFramework-CmmSlotUtils";
import * as _dependency12 from "./slotFramework-GameRulesView";
import * as _dependency13 from "./slotFramework-GameRulesViewP";
import * as _dependency14 from "./slotFramework-RankingViewL";
import * as _dependency15 from "./slotFramework-RankingViewP";
import * as _dependency16 from "./slotFramework-RecordViewL";
import * as _dependency17 from "./slotFramework-RecordViewP";
import * as _dependency18 from "./slotFramework-SettingView";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, i, o, r, a, s, c, l, u, h, f, p, d, b, g, m, B, C, v, y, w, M, _, E, D, k, I, L, T, S, A, U;
var O, P, R, x, V, z, F, H, N, W, Y, K, G, j, J, X, Z;
_dependency2.cclegacy._RF.push({}, "102d1FVVGRDrYLJ53fDffdO", "MenuController", void 0);
var q = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (O = q("MenuController"), P = _dependency7.inject("content", _dependency2.Node), R = _dependency7.inject("content/layout/ruleBtn", _dependency2.Node), x = _dependency7.inject("content/layout/recordBtn", _dependency2.Node), V = _dependency7.inject("content/layout/rankingBtn", _dependency2.Node), z = _dependency7.inject("content/layout/settingBtn", _dependency2.Node), F = _dependency7.inject("content/layout/exitBtn", _dependency2.Node), H = _dependency7.inject("bbr", _dependency2.Node), O((Y = _dependency.applyDecoratedDescriptor((W = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
    return n = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "content", Y, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "ruleBtn", K, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "recordBtn", G, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "rankingBtn", j, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "settingBtn", J, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "exitBtn", X, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "bbr", Z, _dependency.assertThisInitialized(n)), n.isShow = !1, n.ruleAssets = null, n.restPos = null, n;
  }
  _dependency.inheritsLoose(n, t);
  var a = n.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this), this.restPos = this.content.position.clone(), this.setEventTouch();
  }, a.start = function () {
    this.init();
  }, a.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, a.init = function () {
    this.isShow = !1, this.content.active = !1, this.initRankListBtn();
  }, a.showMenu = function () {
    var t = this;
    _dependency2.Tween.stopAllByTarget(this.content);
    var n = this.content.getComponent(_dependency2.UITransform),
      e = this.restPos.clone(),
      i = _dependency2.v3(e.x + n.width, e.y),
      o = this.content.getComponent(_dependency2.UIOpacity);
    this.bbr.getComponent(_dependency2.Button).interactable = !1, o.opacity = 0, this.content.active = !0, dispatch(_dependency9.SlotFrameworkEvent.VIEW_SHOW_MENU), _dependency2.tween(this.content).bindNodeState(false).delay(.1).set({
      position: i
    }).to(.2, {
      position: e
    }, {
      onStart: function () {
        t.scheduleOnce(function () {
          t.bbr.active = !0;
        }, .05), o.opacity = 255, t.bbr.getComponent(_dependency2.Button).interactable = !1;
      },
      onComplete: function () {
        t.scheduleOnce(function () {
          t.bbr.getComponent(_dependency2.Button).interactable = !0;
        }, .05), t.isShow = !0;
      }
    }).start();
  }, a.hideMenu = function () {
    var t = this;
    _dependency2.Tween.stopAllByTarget(this.content);
    var n = this.restPos.clone(),
      e = this.content.getComponent(_dependency2.UITransform),
      i = _dependency2.v3(n.x + e.width, n.y),
      o = this.content.getComponent(_dependency2.UIOpacity);
    dispatch(_dependency9.SlotFrameworkEvent.VIEW_HIDE_MENU), _dependency2.tween(this.content).bindNodeState(false).to(.2, {
      position: i
    }, {
      onStart: function () {
        t.bbr.getComponent(_dependency2.Button).interactable = !1;
      },
      onComplete: function () {
        t.scheduleOnce(function () {
          t.bbr.getComponent(_dependency2.Button).interactable = !0;
        }, .05), t.content.position = t.restPos.clone(), t.content.active = !1, o.opacity = 0, t.bbr.active = !1, t.isShow = !1;
      }
    }).start();
  }, a.closeMenu = function () {
    dispatch(_dependency9.SlotFrameworkEvent.VIEW_HIDE_MENU), _dependency2.Tween.stopAllByTarget(this.content);
    var t = this.content.getComponent(_dependency2.UIOpacity);
    this.content.position = this.restPos.clone(), this.content.active = !1, t.opacity = 0, this.bbr.active = !1, this.isShow = !1;
  }, a.setEventTouch = function () {
    var t = this;
    this.ruleBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      var n = _dependency11.CmmSlotUtils.getOrientationTarget(_dependency12.default, _dependency13.default);
      t.hideMenu(), App.uiManager.open({
        type: n,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "遊戲說明",
        args: t.ruleAssets
      }), dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), this.recordBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      var n = _dependency11.CmmSlotUtils.getOrientationTarget(_dependency16.default, _dependency17.default);
      t.hideMenu(), App.uiManager.open({
        type: n,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "押注紀錄"
      }), dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), this.rankingBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      var n = _dependency11.CmmSlotUtils.getOrientationTarget(_dependency14.default, _dependency15.default);
      t.hideMenu(), dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM), App.uiManager.open({
        type: n,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "排行榜"
      });
    }), this.settingBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.hideMenu(), dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM), App.uiManager.open({
        type: _dependency18.default,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "設定頁"
      });
    }), _dependency5.CmmUtils.addBtnClickEvent(this.exitBtn, function () {
      dispatch(_dependency9.SlotFrameworkEvent.SHOW_EXIT_ALERT), dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency5.CmmUtils.addBtnClickEvent(this.bbr, function () {
      t.hideMenu(), dispatch(_dependency9.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM);
    }), this.on(_dependency9.SlotFrameworkEvent.VIEW_CLOSE_MENU, function () {
      t.closeMenu();
    });
  }, a.checkDisableRecordBtn = function () {
    var t, n;
    (null != (t = null == (n = _dependency1.default.getData()) ? void 0 : n.engine.definition.isDemo) ? t : _dependency0.default.getData().isDemo) && "xin-star" == _dependency10.default.getData().theme && (this.recordBtn.active = !1);
  }, a.checkDisableExitBtn = function () {
    "xin-star" == _dependency10.default.getData().theme && (this.exitBtn.active = !1);
  }, a.initRankListBtn = function () {
    if (this.slotData.getData().isForceHideRankBtn) this.rankingBtn.active = !1;else {
      var t = _dependency10.default.getData().slotRankOn;
      this.rankingBtn.active = t;
    }
  }, a.setRuleAssets = function (t) {
    this.ruleAssets = t;
  }, a.addEvents = function () {
    var n = this;
    t.prototype.addEvents.call(this), this.on(_dependency9.SlotFrameworkEvent.SHOW_MENU, function () {
      n.isShow = !n.isShow, n.checkDisableRecordBtn(), n.checkDisableExitBtn(), n.isShow ? n.showMenu() : n.hideMenu();
    });
  }, _dependency.createClass(n, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), n;
}(_dependency6.default)).prototype, "content", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(W.prototype, "ruleBtn", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(W.prototype, "recordBtn", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(W.prototype, "rankingBtn", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(W.prototype, "settingBtn", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(W.prototype, "exitBtn", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = _dependency.applyDecoratedDescriptor(W.prototype, "bbr", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = W)) || N));
_dependency2.cclegacy._RF.pop();
