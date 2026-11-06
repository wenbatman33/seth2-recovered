// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
import * as _dependency4 from "./main-Bundles";
import * as _dependency5 from "./main-CmmUtils";
import * as _dependency6 from "./main-EventComponent";
import * as _dependency7 from "./main-Decorators";
import * as _dependency8 from "./main-WrapperData";
import * as _dependency9 from "./slotFramework-SpineButton";
import * as _dependency0 from "./slotFramework-AutoPlayModel";
import * as _dependency1 from "./slotFramework-SlotFrameworkData";
import * as _dependency10 from "./slotFramework-StakeModel";
import * as _dependency11 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency12 from "./slotFramework-PlatformModel";
import * as _dependency13 from "./slotFramework-type2";
import * as _dependency14 from "./slotFramework-CmmSlotUtils";
import * as _dependency15 from "./slotFramework-ObjectUtils";
import * as _dependency16 from "./slotFramework-AutoSpinView";
import * as _dependency17 from "./slotFramework-GameRulesView";
import * as _dependency18 from "./slotFramework-GameRulesViewP";
import * as _dependency19 from "./slotFramework-RankingViewL";
import * as _dependency20 from "./slotFramework-RankingViewP";
import * as _dependency21 from "./slotFramework-RecordViewL";
import * as _dependency22 from "./slotFramework-RecordViewP";
import * as _dependency23 from "./slotFramework-SettingView";
import * as _dependency24 from "./slotFramework-SlotTableViewP";
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
var n, e, i, a, o, u, s, r, l, c, p, d, f, h, g, b, S, C, m, B, k, I, A, T, M, v, _, y, E, P, O, L, w, R, F, x, D, N, U, z, K, G, H, W;
var V, Y, j, q, Q, Z, X, J, $, tt, nt, et, it, at, ot, ut, st, rt, lt, ct, pt, dt, ft, ht, gt, bt, St, Ct, mt, Bt, kt, It, At, Tt, Mt, vt, _t, yt, Et;
_dependency2.cclegacy._RF.push({}, "3fcf5MW9qZPwIwO+yx1gNbO", "SpinBarPController", void 0);
_dependency2._decorator.ccclass, _dependency2._decorator.property, _publish("default", (V = _dependency7.inject("spinContent", _dependency2.Node), Y = _dependency7.inject("spinContent/bg", _dependency2.Node), j = _dependency7.inject("spinContent/menuBtn", _dependency2.Node), q = _dependency7.inject("spinContent/turboToggle", _dependency2.Node), Q = _dependency7.inject("spinContent/SpinButton", _dependency2.Node), Z = _dependency7.inject("spinContent/SpineButton", _dependency2.Node), X = _dependency7.inject("spinContent/autoSpinGroup/startAutoBtn", _dependency2.Node), J = _dependency7.inject("spinContent/autoSpinGroup/stopAutoBtn", _dependency2.Node), $ = _dependency7.inject("spinContent/autoSpinGroup", _dependency2.Node), tt = _dependency7.inject("spinContent/slotTableBtn", _dependency2.Node), nt = _dependency7.inject("spinContent/plusBtn", _dependency2.Node), et = _dependency7.inject("spinContent/minusBtn", _dependency2.Node), it = _dependency7.inject("menuContent", _dependency2.Node), at = _dependency7.inject("menuContent/btnBack", _dependency2.Node), ot = _dependency7.inject("menuContent/layout/btnInfo", _dependency2.Node), ut = _dependency7.inject("menuContent/layout/btnRecord", _dependency2.Node), st = _dependency7.inject("menuContent/layout/rankingBtn", _dependency2.Node), rt = _dependency7.inject("menuContent/layout/btnSetting", _dependency2.Node), lt = _dependency7.inject("menuContent/layout/btnExit", _dependency2.Node), pt = _dependency.applyDecoratedDescriptor((ct = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, e = arguments.length, o = new Array(e), u = 0; u < e; u++) o[u] = arguments[u];
    return n = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "spinContent", pt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "bg", dt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "menuBtn", ft, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "turboToggle", ht, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "spinButton", gt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "spineButton", bt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "startAutoBtn", St, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "stopAutoBtn", Ct, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "autoSpinGroup", mt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "slotTableBtn", Bt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "plusBtn", kt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "minusBtn", It, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "menuContent", At, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "btnBack", Tt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "ruleBtn", Mt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "recordBtn", vt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "rankingBtn", _t, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "settingBtn", yt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "exitBtn", Et, _dependency.assertThisInitialized(n)), n.quickStopBtn = null, n.tmpSpinFunc = null, n.tmpStopSpinFunc = null, n.spinStatus = _dependency13.ESpinStatus.IDLE, n.isOpenMenu = !1, n.ruleAssets = null, n.frameCounter = 0, n.LONG_PRESS_THRESHOLD = 500, n.keyStatesMap = new Map(), n.debounceFunction = null, n.menuBackBtnCoolFlag = !1, n;
  }
  _dependency.inheritsLoose(n, t);
  var s = n.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init(), this.setEventTouch();
  }, s.update = function (t) {
    if (this.frameCounter++, this.frameCounter >= 7) {
      if (this.keyStatesMap.get(_dependency2.KeyCode.ARROW_LEFT).isLongPress) {
        this.frameCounter = 0, Log.d("++"), _dependency10.default.stakeMapIndex -= 1, _dependency10.default.stakeMapIndex <= 0 && (_dependency10.default.stakeMapIndex = 0);
        var n = _dependency10.default.totalStakeMap.get(_dependency10.default.stakeMapIndex);
        _dependency10.default.updateStake(n), dispatch(_dependency11.SlotFrameworkEvent.UPDATE_STAKE, {
          data: n.totalStake
        }), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
      }
      if (this.keyStatesMap.get(_dependency2.KeyCode.ARROW_RIGHT).isLongPress) {
        this.frameCounter = 0, Log.d("--"), _dependency10.default.stakeMapIndex += 1, _dependency10.default.stakeMapIndex >= _dependency10.default.totalStakeMap.size && (_dependency10.default.stakeMapIndex = _dependency10.default.totalStakeMap.size - 1);
        var e = _dependency10.default.totalStakeMap.get(_dependency10.default.stakeMapIndex);
        _dependency10.default.updateStake(e), dispatch(_dependency11.SlotFrameworkEvent.UPDATE_STAKE, {
          data: e.totalStake
        }), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
      }
    }
  }, s.init = function () {
    this.initKeyState(_dependency2.KeyCode.ARROW_LEFT), this.initKeyState(_dependency2.KeyCode.ARROW_RIGHT), this.addEventInput(), this.initAutoBtn(), this.initSlotTableBtn(), this.initRankListBtn(), this.setAllInteractable(!0), this.spinContent.active = !0, this.menuContent.active = !1, this.closeMenuNode(this.menuContent);
  }, s.setEventTouch = function () {
    var t = this;
    _dependency5.CmmUtils.addBtnClickEvent(this.menuBtn, function () {
      t.menuBackBtnCoolFlag || (t.showSubMenu(), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM), t.menuBackBtnCool());
    }), _dependency5.CmmUtils.addBtnClickEvent(this.btnBack, function () {
      t.menuBackBtnCoolFlag || (t.closeSubMenu(), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM), t.menuBackBtnCool());
    }), _dependency5.CmmUtils.addBtnClickEvent(this.plusBtn, function () {
      t.handleClickOncePlus();
    }), _dependency5.CmmUtils.addBtnClickEvent(this.minusBtn, function () {
      t.handleClickOnceMinus();
    }), this.onI(_dependency2.Input.EventType.KEY_DOWN, function (n) {
      var e = n.keyCode;
      if (e === _dependency2.KeyCode.ARROW_LEFT || e === _dependency2.KeyCode.ARROW_RIGHT) {
        var i = t.keyStatesMap.get(_dependency2.KeyCode.ARROW_RIGHT).isPressed,
          a = t.keyStatesMap.get(_dependency2.KeyCode.ARROW_LEFT).isPressed;
        if (i || a) return;
        if (t.spinStatus === _dependency13.ESpinStatus.SPINING || !App.uiManager.IsOnlyGameViewOpen("GameView") || null !== App.gameAlert.currentPanel || t.isOpenMenu) return;
        t.setAllInteractable(!1), t.initKeyState(e);
        for (var u, s = t.keyStatesMap.get(e), r = _dependency.createForOfIteratorHelperLoose(t.keyStatesMap.values()); !(u = r()).done;) {
          if (u.value.isPressed) return;
        }
        s.isPressed || (s.isPressed = !0, s.timer = setTimeout(function () {
          s.isLongPress = !0;
        }, t.LONG_PRESS_THRESHOLD));
      }
    }), this.onI(_dependency2.Input.EventType.KEY_UP, function (n) {
      var e = n.keyCode;
      if (e === _dependency2.KeyCode.ARROW_LEFT || e === _dependency2.KeyCode.ARROW_RIGHT) {
        t.initKeyState(e);
        var i = t.keyStatesMap.get(e);
        i.isPressed && (i.isLongPress ? (i.isLongPress = !1, t.sendSetting(), t.setAllInteractable(!0), t.keyStatesMap.forEach(function (t, n) {
          return t.isPressed = !1;
        })) : (clearTimeout(i.timer), e === _dependency2.KeyCode.ARROW_LEFT ? t.handleClickOnceMinus() : e === _dependency2.KeyCode.ARROW_RIGHT && t.handleClickOncePlus()), i.timer = null);
      }
    }), this.startAutoBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.startAutoBtn.getComponent(_dependency2.Button).interactable && (App.uiManager.open({
        type: _dependency16.default,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "自動投注"
      }), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }), this.stopAutoBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.stopAutoBtn.getComponent(_dependency2.Button).interactable && (_dependency0.default.active = !1, t.showStartAutoActive(!0), dispatch(_dependency11.SlotFrameworkEvent.STOP_AUTO_SPIN), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }), _dependency5.CmmUtils.addBtnClickEvent(this.ruleBtn, function () {
      var n = _dependency14.CmmSlotUtils.getOrientationTarget(_dependency17.default, _dependency18.default);
      App.uiManager.open({
        type: n,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "遊戲說明",
        args: t.ruleAssets
      }), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency5.CmmUtils.addBtnClickEvent(this.recordBtn, function () {
      var t = _dependency14.CmmSlotUtils.getOrientationTarget(_dependency21.default, _dependency22.default);
      App.uiManager.open({
        type: t,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "押注紀錄"
      }), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency5.CmmUtils.addBtnClickEvent(this.rankingBtn, function () {
      var t = _dependency14.CmmSlotUtils.getOrientationTarget(_dependency19.default, _dependency20.default);
      App.uiManager.open({
        type: t,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "排行榜"
      }), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency5.CmmUtils.addBtnClickEvent(this.settingBtn, function () {
      App.uiManager.open({
        type: _dependency23.default,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "設定頁"
      }), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency5.CmmUtils.addBtnClickEvent(this.exitBtn, function () {
      dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM), dispatch(_dependency11.SlotFrameworkEvent.SHOW_EXIT_ALERT);
    });
  }, s.initKeyState = function (t) {
    this.keyStatesMap.has(t) || this.keyStatesMap.set(t, {
      isPressed: !1,
      isLongPress: !1,
      timer: null
    });
  }, s.getStakeKeyIndex = function () {
    for (var t, n = _dependency10.default.getData().totalStakeMap, e = _dependency10.default.getData().stakeIndex, i = _dependency10.default.getData().ratioIndex, a = _dependency.createForOfIteratorHelperLoose(n); !(t = a()).done;) {
      var u = t.value,
        s = u[0],
        r = u[1];
      if (r.stakeIndex === e && r.ratioIndex === i) return s;
    }
    return -1;
  }, s.handleClickOnceMinus = function () {
    var t = this;
    _dependency10.default.stakeMapIndex = this.getStakeKeyIndex(), _dependency10.default.stakeMapIndex -= 1, _dependency10.default.stakeMapIndex <= 0 && (_dependency10.default.stakeMapIndex = 0);
    var n = _dependency10.default.totalStakeMap.get(_dependency10.default.stakeMapIndex);
    if (!n) return Log.e("stakeVO is undefined");
    _dependency10.default.updateStake(n), dispatch(_dependency11.SlotFrameworkEvent.UPDATE_STAKE, {
      data: n.totalStake
    }), this.debounceFunction || (this.debounceFunction = _dependency5.CmmUtils.debounce(function () {
      t.sendSetting(), t.setAllInteractable(!0), t.keyStatesMap.forEach(function (t, n) {
        return t.isPressed = !1;
      });
    }, 350)), this.debounceFunction(), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
  }, s.handleClickOncePlus = function () {
    var t = this;
    _dependency10.default.stakeMapIndex = this.getStakeKeyIndex(), _dependency10.default.stakeMapIndex += 1, _dependency10.default.stakeMapIndex >= _dependency10.default.totalStakeMap.size && (_dependency10.default.stakeMapIndex = _dependency10.default.totalStakeMap.size - 1);
    var n = _dependency10.default.totalStakeMap.get(_dependency10.default.stakeMapIndex);
    if (!n) return Log.e("stakeVO is undefined");
    _dependency10.default.updateStake(n), dispatch(_dependency11.SlotFrameworkEvent.UPDATE_STAKE, {
      data: n.totalStake
    }), this.debounceFunction || (this.debounceFunction = _dependency5.CmmUtils.debounce(function () {
      t.sendSetting(), t.setAllInteractable(!0), t.keyStatesMap.forEach(function (t, n) {
        return t.isPressed = !1;
      });
    }, 350)), this.debounceFunction(), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
  }, s.setRuleAssets = function (t) {
    this.ruleAssets = t;
  }, s.showSubMenu = function () {
    this.openMenuNode(this.menuContent), this.closeMenuNode(this.spinContent);
  }, s.closeSubMenu = function () {
    this.openMenuNode(this.spinContent), this.closeMenuNode(this.menuContent);
  }, s.openMenuNode = function (t) {
    t.active = !0, t.setPosition(0, -515, 0), t.getComponent(_dependency2.UIOpacity).opacity = 0, _dependency2.tween(t.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.5, {
      opacity: 255
    }, {
      easing: "fade"
    }).start(), _dependency2.tween(t).bindNodeState(false).to(.3, {
      position: new _dependency2.Vec3(0, -515, 0)
    }).start();
  }, s.closeMenuNode = function (t) {
    _dependency2.tween(t).bindNodeState(false).to(.1, {
      position: new _dependency2.Vec3(0, -550, 0)
    }, {
      easing: "fade"
    }).start(), _dependency2.tween(t.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.1, {
      opacity: 0
    }).call(function () {
      t.active = !1, t.setPosition(0, -1e3, 0);
    }).start();
  }, s.sendSetting = function () {
    var t = _dependency10.default.getData(),
      n = {
        type: "game",
        data: {
          stakeIndex: t.stakeIndex,
          ratioIndex: t.ratioIndex
        }
      };
    dispatch(_dependency11.SlotFrameworkEvent.SEND_SETTING_REQUEST, n);
  }, s.showStartAutoActive = function (t) {
    this.startAutoBtn.active = t, this.stopAutoBtn.active = !t;
  }, s.initAutoBtn = function () {
    this.showStartAutoActive(!0);
  }, s.setQuickStopData = function (t, n, e, i) {
    this.quickStopBtn.setData(t, n, e, i);
  }, s.initSlotTableBtn = function () {
    var t,
      n = Object.prototype.hasOwnProperty.call(_dependency12.default.getData(), "table");
    (this.slotTableBtn.active = n, n) && (this.slotTableBtn.getComponentInChildren(_dependency2.Label).string = null == (t = _dependency12.default.getData().table.number) ? void 0 : t.toString().padStart(3, "0"), _dependency5.CmmUtils.addBtnClickEvent(this.slotTableBtn, function () {
      App.uiManager.open({
        type: _dependency24.default,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "機台選擇"
      }), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }));
  }, s.setMenuBtnInteractable = function (t) {
    this.ruleBtn.getComponent(_dependency2.Button).interactable = t, this.recordBtn.getComponent(_dependency2.Button).interactable = t, this.rankingBtn.getComponent(_dependency2.Button).interactable = t, this.settingBtn.getComponent(_dependency2.Button).interactable = t, this.exitBtn.getComponent(_dependency2.Button).interactable = t;
  }, s.menuBackBtnCool = function () {
    var t = this;
    this.menuBackBtnCoolFlag = !0, this.scheduleOnce(function () {
      t.menuBackBtnCoolFlag = !1;
    }, .5);
  }, s.show = function () {
    this.node.active = !0, this.node.setPosition(0, 0, 0);
  }, s.hide = function () {
    this.node.setPosition(0, -500, 0);
  }, s.setTableNumber = function (t) {
    this.slotTableBtn.getComponentInChildren(_dependency2.Label).string = t.toString().padStart(3, "0");
  }, s.addSpinEventTouch = function (t, n) {
    this.tmpSpinFunc = n;
  }, s.addQuickStopEventTouch = function (t) {
    this.tmpStopSpinFunc = t;
  }, s.addEventInput = function () {
    var t = this,
      n = this.spineButton.getComponent(_dependency9.SpineButton);
    this.onI(_dependency2.Input.EventType.KEY_DOWN, function (e) {
      if (e.keyCode === _dependency2.KeyCode.SPACE) {
        var i = n.button.interactable,
          a = App.uiManager.IsOnlyGameViewOpen("GameView"),
          o = null === App.gameAlert.currentPanel,
          u = !t.isOpenMenu,
          s = t.slotData.spinStatus === _dependency13.ESpinStatus.SPINING;
        i && a && o && u ? t.tmpSpinFunc && t.tmpSpinFunc() : s && t.tmpStopSpinFunc && t.tmpStopSpinFunc();
      }
    }), n.button.node.on(_dependency2.NodeEventType.TOUCH_END, function () {
      var n = t.keyStatesMap.get(_dependency2.KeyCode.ARROW_RIGHT).isPressed,
        e = t.keyStatesMap.get(_dependency2.KeyCode.ARROW_LEFT).isPressed;
      n || e || (t.spinStatus === _dependency13.ESpinStatus.IDLE && App.uiManager.IsOnlyGameViewOpen("GameView") && null === App.gameAlert.currentPanel && 0 == t.isOpenMenu ? t.tmpSpinFunc && t.tmpSpinFunc() : t.slotData.spinStatus === _dependency13.ESpinStatus.SPINING && t.tmpStopSpinFunc && t.tmpStopSpinFunc());
    });
  }, s.setSpinBtnData = function (t, n, e, i) {
    var a = this.spineButton.getComponent(_dependency9.SpineButton);
    a.init(), a.setData(t, e, i), this.quickStopBtn && this.setQuickStopData(t, n, e, i);
  }, s.setAllInteractable = function (t) {
    var n;
    this.turboToggle.getComponent(_dependency2.Toggle).interactable = t, null == (n = this.spineButton.getComponent(_dependency9.SpineButton)) || n.setInteractable(t), this.startAutoBtn.getComponent(_dependency2.Button).interactable = t, this.stopAutoBtn.getComponent(_dependency2.Button).interactable = t, this.menuBtn.getComponent(_dependency2.Button).interactable = t, this.plusBtn.getComponent(_dependency2.Button).interactable = t, this.minusBtn.getComponent(_dependency2.Button).interactable = t, _dependency0.default.active && (this.stopAutoBtn.getComponent(_dependency2.Button).interactable = !0), this.setSlotTableInteractable(t), dispatch(_dependency11.SlotFrameworkEvent.SET_BET_AMOUNT_INTERACTABLE, {
      data: t
    });
  }, s.setSlotTableInteractable = function (t) {
    this.slotTableBtn.getComponent(_dependency2.Button).interactable = t;
  }, s.spinBarActive = function (t) {
    this.node.active = t;
  }, s.addEvents = function () {
    var n = this;
    t.prototype.addEvents.call(this), this.on(_dependency11.SlotFrameworkEvent.SHOW_AUTO_SPIN, function (t) {
      var e = t.data;
      n.showStartAutoActive(e);
    }), this.on(_dependency11.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (t) {
      var e = t.data;
      n.spinStatus = e;
      var i = _dependency13.ESpinStatus.SPINING === e;
      n.setAllInteractable(!i), n.setMenuBtnInteractable(!i);
    }), this.on(_dependency11.SlotFrameworkEvent.SET_AUTO_SPIN_COUNT, function (t) {
      var e = t.data;
      e >= 0 && n.showStartAutoActive(!1), 0 === e && n.showStartAutoActive(!0), -1 == e && n.showStartAutoActive(!1);
    }), this.on(_dependency11.SlotFrameworkEvent.VIEW_SHOW_MENU, function () {
      n.isOpenMenu = !0;
    }), this.on(_dependency11.SlotFrameworkEvent.VIEW_HIDE_MENU, function () {
      n.isOpenMenu = !1;
    }), this.on(_dependency11.SlotFrameworkEvent.SHOW_SPIN_BAR, function () {
      n.show();
    }), this.on(_dependency11.SlotFrameworkEvent.HIDE_SPIN_BAR, function () {
      n.hide();
    });
  }, s.initTurbo = function (t) {
    var n = this.turboToggle.getComponentsInChildren(_dependency2.Sprite),
      e = App.dataCenter.get(_dependency8.default).colorConfig.main;
    n.forEach(function (t) {
      t.color = new _dependency2.Color(e);
    }), this.turboToggle.getComponent(_dependency2.Toggle).isChecked = t, this.turboToggle.off(_dependency2.NodeEventType.TOUCH_END);
  }, s.addTurboEventTouch = function (t) {
    var n = this;
    this.turboToggle.on(_dependency2.NodeEventType.TOUCH_END, _dependency5.CmmUtils.throttle(function () {
      if (n.turboToggle.getComponent(_dependency2.Toggle).interactable) {
        var e = _dependency15.ObjectUtils.clone(t.isTurbo);
        t.setIsTurbo(!e), n.scheduleOnce(function () {
          n.turboToggle.getComponent(_dependency2.Toggle).isChecked = t.isTurbo, dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
        }, 0);
      }
    }));
  }, s.initRankListBtn = function () {
    if (this.slotData.getData().isForceHideRankBtn) this.rankingBtn.active = !1;else {
      var t = _dependency12.default.getData().slotRankOn;
      this.rankingBtn.active = t;
    }
  }, _dependency.createClass(n, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency1.default);
    }
  }]), n;
}(_dependency6.default)).prototype, "spinContent", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), dt = _dependency.applyDecoratedDescriptor(ct.prototype, "bg", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = _dependency.applyDecoratedDescriptor(ct.prototype, "menuBtn", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ht = _dependency.applyDecoratedDescriptor(ct.prototype, "turboToggle", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gt = _dependency.applyDecoratedDescriptor(ct.prototype, "spinButton", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), bt = _dependency.applyDecoratedDescriptor(ct.prototype, "spineButton", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), St = _dependency.applyDecoratedDescriptor(ct.prototype, "startAutoBtn", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ct = _dependency.applyDecoratedDescriptor(ct.prototype, "stopAutoBtn", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = _dependency.applyDecoratedDescriptor(ct.prototype, "autoSpinGroup", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Bt = _dependency.applyDecoratedDescriptor(ct.prototype, "slotTableBtn", [tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), kt = _dependency.applyDecoratedDescriptor(ct.prototype, "plusBtn", [nt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), It = _dependency.applyDecoratedDescriptor(ct.prototype, "minusBtn", [et], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), At = _dependency.applyDecoratedDescriptor(ct.prototype, "menuContent", [it], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Tt = _dependency.applyDecoratedDescriptor(ct.prototype, "btnBack", [at], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Mt = _dependency.applyDecoratedDescriptor(ct.prototype, "ruleBtn", [ot], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), vt = _dependency.applyDecoratedDescriptor(ct.prototype, "recordBtn", [ut], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _t = _dependency.applyDecoratedDescriptor(ct.prototype, "rankingBtn", [st], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), yt = _dependency.applyDecoratedDescriptor(ct.prototype, "settingBtn", [rt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Et = _dependency.applyDecoratedDescriptor(ct.prototype, "exitBtn", [lt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ct));
_dependency2.cclegacy._RF.pop();
