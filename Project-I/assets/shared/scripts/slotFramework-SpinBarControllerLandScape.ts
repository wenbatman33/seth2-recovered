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
import * as _dependency9 from "./slotFramework-SpinButton";
import * as _dependency0 from "./slotFramework-AutoPlayModel";
import * as _dependency1 from "./slotFramework-SlotFrameworkData";
import * as _dependency10 from "./slotFramework-StakeModel";
import * as _dependency11 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency12 from "./slotFramework-DefinitionModel";
import * as _dependency13 from "./slotFramework-PlatformModel";
import * as _dependency14 from "./slotFramework-ReplayModel";
import * as _dependency15 from "./slotFramework-type2";
import * as _dependency16 from "./slotFramework-ObjectUtils";
import * as _dependency17 from "./slotFramework-AutoSpinView";
import * as _dependency18 from "./slotFramework-BetViewLandScape";
import * as _dependency19 from "./slotFramework-SlotTableViewL_v2";
import * as _dependency20 from "./main-TimeManager";
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
var e, n, i, o, a, s, r, u, l, c, p, h, d, S, g, k, C, f, T, b, B, m, A, I, E, v, w, O, _, y, D, M, U, N, F, P, L, H, K, z, R;
var x, G, q, V, W, Y, Q, j, X, Z, J, $, tt, et, nt, it, ot, at, st, rt, ut, lt, ct, pt, ht, dt, St, gt, kt, Ct, ft, Tt, bt, Bt, mt;
_dependency2.cclegacy._RF.push({}, "4b168TeVbhD+5bz+ES5hrq2", "SpinBarControllerLandScape", void 0);
_dependency2._decorator.ccclass, _dependency2._decorator.property, _publish("default", (x = _dependency7.inject("buttons", _dependency2.Node), G = _dependency7.inject("buttons/menuBtn", _dependency2.Node), q = _dependency7.inject("buttons/turboToggle", _dependency2.Node), V = _dependency7.inject("buttons/autoSpinGroup", _dependency2.Node), W = _dependency7.inject("buttons/autoSpinGroup/startAutoBtn", _dependency2.Node), Y = _dependency7.inject("buttons/autoSpinGroup/stopAutoBtn", _dependency2.Node), Q = _dependency7.inject("buttons/SpinButton", _dependency2.Node), j = _dependency7.inject("buttons/slotTable2Btn", _dependency2.Node), X = _dependency7.inject("stakeContent", _dependency2.Node), Z = _dependency7.inject("stakeContent/stakeBarMask", _dependency2.Node), J = _dependency7.inject("stakeContent/stakeBarMask/Bar", _dependency2.Node), $ = _dependency7.inject("stakeContent/btns/plusBtn/hitArea", _dependency2.Node), tt = _dependency7.inject("stakeContent/btns/plusBtn/btn", _dependency2.Node), et = _dependency7.inject("stakeContent/btns/minusBtn/hitArea", _dependency2.Node), nt = _dependency7.inject("stakeContent/btns/minusBtn/btn", _dependency2.Node), it = _dependency7.inject("stakeContent/btns/openBtn", _dependency2.Node), ot = _dependency7.inject("stakeContent/stake", _dependency2.Label), st = _dependency.applyDecoratedDescriptor((at = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "buttons", st, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "menuBtn", rt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "turboToggle", ut, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "autoSpinGroup", lt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startAutoBtn", ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stopAutoBtn", pt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spinButton", ht, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "slotTable2Btn", dt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stakeContent", St, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stakeBarMask", gt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stakeBar", kt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "plusHitArea", Ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "plusBtn", ft, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "minusHitArea", Tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "minusBtn", bt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "btnOpen", Bt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stake", mt, _dependency.assertThisInitialized(e)), e.quickStopBtn = null, e.stakeStepInteractable = void 0, e.stakeMapSize = void 0, e.stakeRatio = void 0, e.lastPosition = new _dependency2.Vec2(), e.deltaPos = new _dependency2.Vec2(), e.stakeChildColorMap = new Map(), e.frameCounter = 0, e.stakeCoolingDownFlag = !1, e.hasCoolingDownSpin = !1, e.needUpdateSpin = !1, e.tmpSpinFunc = null, e.tmpStopSpinFunc = null, e.spinStatus = _dependency15.ESpinStatus.IDLE, e.isOpenMenu = !1, e.currentTarget = null, e.isTouchMove = !1, e.currentKeyCode = _dependency2.KeyCode.NONE, e.timeOutId = -1, e.speedTimeOutId = -1, e.maxSpeedUp = 2, e.currentSpeed = 1, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this), this.createQuickStopBtn(), this.setEventTouch();
  }, r.start = function () {
    _dependency14.default.isReplay ? this.replayInit() : this.init();
  }, r.update = function (t) {
    if (this.frameCounter++, this.frameCounter >= 7 && (this.frameCounter = 0, this.stakeStepInteractable && this.spinStatus == _dependency15.ESpinStatus.IDLE)) {
      if (this.stakeCoolingDownFlag) return;
      if (this.currentKeyCode == _dependency2.KeyCode.NONE) return;
      this.currentKeyCode == _dependency2.KeyCode.ARROW_LEFT ? this.setStakeStep(-1, !1) : this.currentKeyCode == _dependency2.KeyCode.ARROW_RIGHT && this.setStakeStep(1, !1), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }
    this.needUpdateSpin && (this.tmpSpinFunc && this.tmpSpinFunc(), this.needUpdateSpin = !1);
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {
    this.addEventInput(), this.initAutoBtn(), this.initStake(), this.initStakeBar(), this.initSlotTable2Btn(), this.setAllInteractable(!0), _dependency10.default.getData().totalBetValues && _dependency10.default.totalBetValues.length > 0 ? this.btnOpen.active = !0 : this.btnOpen.active = !1;
  }, r.replayInit = function () {
    this.buttons.active = !1, this.btnOpen && (this.btnOpen.active = !1), this.replayInitStake(), this.initStakeBar();
  }, r.setEventTouch = function () {
    var t = this;
    this.plusHitArea.on(_dependency2.NodeEventType.TOUCH_START, this.stakeTouchStart, this), this.plusBtn.on(_dependency2.NodeEventType.TOUCH_START, this.stakeTouchStart, this), this.plusHitArea.on(_dependency2.NodeEventType.TOUCH_MOVE, this.stakeTouchMove, this), this.plusHitArea.on(_dependency2.NodeEventType.TOUCH_END, this.stakeTouchEnd, this), this.plusBtn.on(_dependency2.NodeEventType.TOUCH_END, this.stakeTouchEnd, this), this.plusHitArea.on(_dependency2.NodeEventType.TOUCH_CANCEL, this.stakeTouchCancel, this), this.plusBtn.on(_dependency2.NodeEventType.TOUCH_CANCEL, this.stakeTouchCancel, this), this.minusHitArea.on(_dependency2.NodeEventType.TOUCH_START, this.stakeTouchStart, this), this.minusBtn.on(_dependency2.NodeEventType.TOUCH_START, this.stakeTouchStart, this), this.minusHitArea.on(_dependency2.NodeEventType.TOUCH_MOVE, this.stakeTouchMove, this), this.minusHitArea.on(_dependency2.NodeEventType.TOUCH_END, this.stakeTouchEnd, this), this.minusBtn.on(_dependency2.NodeEventType.TOUCH_END, this.stakeTouchEnd, this), this.minusHitArea.on(_dependency2.NodeEventType.TOUCH_CANCEL, this.stakeTouchCancel, this), this.minusBtn.on(_dependency2.NodeEventType.TOUCH_CANCEL, this.stakeTouchCancel, this), _dependency5.CmmUtils.addBtnClickEvent(this.menuBtn, function () {
      dispatch(_dependency11.SlotFrameworkEvent.SHOW_MENU), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), this.startAutoBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.startAutoBtn.getComponent(_dependency2.Button).interactable && (App.uiManager.open({
        type: _dependency17.default,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "自動投注"
      }), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }), this.stopAutoBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.stopAutoBtn.getComponent(_dependency2.Button).interactable && (_dependency0.default.active = !1, t.showStartAutoActive(!0), dispatch(_dependency11.SlotFrameworkEvent.STOP_AUTO_SPIN), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }), this.onI(_dependency2.Input.EventType.KEY_DOWN, function (e) {
      if (App.uiManager.IsOnlyGameViewOpen("GameView") && null === App.gameAlert.currentPanel && 0 == t.isOpenMenu) {
        if (t.currentTarget) return;
        if (t.stakeCoolingDownFlag) return;
        if (!t.stakeStepInteractable) return;
        if (t.currentKeyCode != _dependency2.KeyCode.NONE) return;
        if (e.keyCode == _dependency2.KeyCode.ARROW_LEFT || e.keyCode == _dependency2.KeyCode.ARROW_RIGHT) {
          var n = e.keyCode;
          t.currentKeyCode = n;
        }
      } else e.keyCode != _dependency2.KeyCode.ARROW_LEFT && e.keyCode != _dependency2.KeyCode.ARROW_RIGHT || (t.currentKeyCode = _dependency2.KeyCode.NONE);
    }), this.onI(_dependency2.Input.EventType.KEY_UP, function (e) {
      t.node.targetOff(t), t.currentTarget || t.stakeCoolingDownFlag || t.stakeStepInteractable && t.currentKeyCode != _dependency2.KeyCode.NONE && t.currentKeyCode == e.keyCode && (t.stakeCoolingDownFlag = !0, t.sendSetting(), t.timeOutId = setTimeout(function () {
        t.needUpdateSpin = t.stakeCoolingDownFlag && t.hasCoolingDownSpin, t.stakeCoolingDownFlag = !1, t.hasCoolingDownSpin = !1, t.stakeStepInteractable = !0, t.currentKeyCode = _dependency2.KeyCode.NONE;
      }, 300));
    }), this.on(_dependency11.SlotFrameworkEvent.UPDATE_STAKE_SETTING, function (e) {
      t.initStake(), t.initStakeBar();
    }), this.btnOpen && _dependency5.CmmUtils.addBtnClickEvent(this.btnOpen, function () {
      App.uiManager.open({
        type: _dependency18.default,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "注單紀錄",
        args: !0
      }), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
    });
  }, r.setStakeStep = function (t, e) {
    if (void 0 === e && (e = !0), this.stakeStepInteractable) {
      var n = this.getStakeKeyIndex();
      if ((n = n + t > this.stakeMapSize ? this.stakeMapSize : n + t) < this.stakeMapSize && n >= 0) {
        var i = _dependency10.default.totalStakeMap.get(n);
        _dependency10.default.updateStake(i), this.updateBarWidth(n), this.setStakeLabel(_dependency10.default.totalStake), dispatch(_dependency11.SlotFrameworkEvent.UPDATE_STAKE, {
          data: i.totalStake
        }), e && this.sendSetting();
      }
      dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }
  }, r.sendSetting = function () {
    var t = _dependency10.default.getData(),
      e = {
        type: "game",
        data: {
          stakeIndex: t.stakeIndex,
          ratioIndex: t.ratioIndex
        }
      };
    dispatch(_dependency11.SlotFrameworkEvent.SEND_SETTING_REQUEST, e);
  }, r.stakeTouchStart = function (t) {
    var e = this;
    this.stakeStepInteractable && null == this.currentTarget && this.currentKeyCode == _dependency2.KeyCode.NONE && (this.stakeCoolingDownFlag || (this.currentTarget = t.currentTarget, this.isTouchMove = !1, this.lastPosition = t.getLocation(), this.stakeCoolingDownFlag = !0, this.timeOutId = setTimeout(function () {
      e.needUpdateSpin = e.stakeCoolingDownFlag && e.hasCoolingDownSpin, e.stakeCoolingDownFlag = !1, e.hasCoolingDownSpin = !1, e.stakeStepInteractable = !0;
    }, 500)));
  }, r.stakeTouchEnd = function (t, e) {
    var n = this;
    this.stakeStepInteractable && this.currentKeyCode == _dependency2.KeyCode.NONE && (this.lastPosition = t.getLocation(), this.currentTarget == t.currentTarget && (this.isTouchMove ? (this.sendSetting(), this.stakeCoolingDownFlag = !0, this.isTouchMove = !1, this.currentTarget = null, this.timeOutId = setTimeout(function () {
      n.needUpdateSpin = n.stakeCoolingDownFlag && n.hasCoolingDownSpin, n.stakeCoolingDownFlag = !1, n.hasCoolingDownSpin = !1, n.stakeStepInteractable = !0;
    }, 500)) : (t.currentTarget == this.plusHitArea || t.currentTarget == this.plusBtn ? this.setStakeStep(1) : t.currentTarget != this.minusHitArea && t.currentTarget != this.minusBtn || this.setStakeStep(-1), this.currentTarget = null)));
  }, r.stakeTouchCancel = function (t) {
    var e = this;
    this.stakeStepInteractable && this.currentKeyCode == _dependency2.KeyCode.NONE && this.currentTarget == t.currentTarget && (this.isTouchMove ? (this.sendSetting(), this.currentTarget = null, this.isTouchMove = !1, this.stakeCoolingDownFlag = !0, this.timeOutId = setTimeout(function () {
      e.needUpdateSpin = e.stakeCoolingDownFlag && e.hasCoolingDownSpin, e.stakeCoolingDownFlag = !1, e.hasCoolingDownSpin = !1, e.stakeStepInteractable = !0;
    }, 500)) : this.currentTarget = null);
  }, r.stakeTouchMove = function (t) {
    if (this.stakeStepInteractable && this.currentKeyCode == _dependency2.KeyCode.NONE && null != this.currentTarget) if (this.currentTarget != t.currentTarget) ;else {
      var e = t.getLocation();
      this.isTouchMove = !0, this.deltaPos.x = this.lastPosition.x - e.x, this.lastPosition = e.clone();
      var n = this.stakeBar.getComponent(_dependency2.UITransform).width - this.deltaPos.x;
      if (n < this.stakeBarMask.getComponent(_dependency2.UITransform).width && n > 0) {
        this.stakeBar.getComponent(_dependency2.UITransform).width = n;
        var i = this.calculateStakeMapIndex(this.stakeBar.getComponent(_dependency2.UITransform).width),
          o = _dependency10.default.totalStakeMap.get(i);
        _dependency10.default.updateStake(_dependency10.default.totalStakeMap.get(i)), this.setStakeLabel(_dependency10.default.totalStake), dispatch(_dependency11.SlotFrameworkEvent.UPDATE_STAKE, {
          data: o.totalStake
        });
      }
    }
  }, r.calculateStakeMapIndex = function (t) {
    var e = Math.floor(t / this.stakeRatio);
    if (!(e >= this.stakeMapSize)) return e;
  }, r.setStakeLabel = function (t) {
    var e = _dependency12.default.getData().digital,
      n = t.toString(),
      i = n.split(".")[0],
      o = n.split(".")[1];
    null != o && (o = o.substring(0, e), n = e > 0 ? i + "." + o : i), this.stake.string = n;
  }, r.updateBarWidth = function (t) {
    t >= this.stakeMapSize - 1 ? this.stakeBar.getComponent(_dependency2.UITransform).width = this.stakeBarMask.getComponent(_dependency2.UITransform).width : this.stakeBar.getComponent(_dependency2.UITransform).width = t <= 0 ? 0 : t * this.stakeRatio + 1;
  }, r.initStake = function () {
    var t = this,
      e = _dependency10.default.stakeIndex,
      n = _dependency10.default.ratioIndex,
      i = _dependency10.default.getStakeVO({
        stakeIndex: e,
        ratioIndex: n
      });
    this.stakeMapSize = _dependency10.default.totalStakeMap.size, this.stakeRatio = this.stakeBarMask.getComponent(_dependency2.UITransform).width / this.stakeMapSize, _dependency10.default.updateStake(i), this.setStakeLabel(_dependency10.default.totalStake), dispatch(_dependency11.SlotFrameworkEvent.UPDATE_STAKE, {
      data: i.totalStake
    });
    var o = this.stakeContent.getComponentsInChildren(_dependency2.Label),
      a = this.stakeContent.getComponentsInChildren(_dependency2.Sprite);
    [].concat(o, a).forEach(function (e) {
      t.stakeChildColorMap.set(e, {
        light: new _dependency2.Color(e.color),
        dark: _dependency5.CmmUtils.rgbaToDarkGray(e.color)
      });
    });
  }, r.replayInitStake = function () {
    var t = _dependency14.default.getData().betData.replayMeta,
      e = t.stakeIndex,
      n = t.ratioIndex,
      i = _dependency10.default.getStakeVO({
        stakeIndex: e,
        ratioIndex: n
      });
    this.stakeMapSize = _dependency10.default.totalStakeMap.size, this.stakeRatio = this.stakeBarMask.getComponent(_dependency2.UITransform).width / this.stakeMapSize, _dependency10.default.updateStake(i), this.setStakeLabel(_dependency10.default.totalStake), dispatch(_dependency11.SlotFrameworkEvent.UPDATE_STAKE, {
      data: i.totalStake
    });
  }, r.setStakeColor = function (t) {
    this.stakeChildColorMap.forEach(function (e, n) {
      n.color = t ? e.light : e.dark;
    });
  }, r.initStakeBar = function () {
    var t = this.getStakeKeyIndex();
    this.updateBarWidth(t);
  }, r.getStakeKeyIndex = function () {
    for (var t, e = _dependency10.default.totalStakeMap, n = _dependency10.default.stakeIndex, i = _dependency10.default.ratioIndex, o = _dependency.createForOfIteratorHelperLoose(e); !(t = o()).done;) {
      var s = t.value,
        r = s[0],
        u = s[1];
      if (u.stakeIndex === n && u.ratioIndex === i) return r;
    }
    return -1;
  }, r.setColor = function (t) {
    var e = this.turboToggle.getComponentsInChildren(_dependency2.Sprite),
      n = this.startAutoBtn.getComponentsInChildren(_dependency2.Sprite),
      i = this.menuBtn.getComponentsInChildren(_dependency2.Sprite);
    e.forEach(function (e) {
      e.color = new _dependency2.Color(t);
    }), n.forEach(function (e) {
      e.color = new _dependency2.Color(t);
    }), i.forEach(function (e) {
      e.color = new _dependency2.Color(t);
    });
  }, r.showStartAutoActive = function (t) {
    this.startAutoBtn.active = t, this.stopAutoBtn.active = !t;
  }, r.initAutoBtn = function () {
    var t = this.autoSpinGroup.getComponentsInChildren(_dependency2.Sprite),
      e = App.dataCenter.get(_dependency8.default).colorConfig.main;
    t.forEach(function (t) {
      t.color = new _dependency2.Color(e);
    }), this.showStartAutoActive(!0);
  }, r.createQuickStopBtn = function () {
    var t = App.cache.get(_dependency4.EBundles[_dependency4.EBundles.slotFramework], "prefabs/ui/button/SpinButton").data,
      e = _dependency2.instantiate(t);
    e.setPosition(this.spinButton.getPosition()), e.name = "QuickStopBtn", e.setParent(this.buttons), this.quickStopBtn = e.getComponent(_dependency9.SpinButton);
  }, r.setQuickStopData = function (t, e, n, i, o) {
    void 0 === o && (o = 1), this.quickStopBtn.setData(t, e, n, i, o);
  }, r.setQuickStopBtnActive = function (t) {
    this.quickStopBtn && (this.quickStopBtn.node.active = t, this.quickStopBtn.syncArrowAngle(this.spinButton.getComponent(_dependency9.SpinButton).arrowAngle));
  }, r.setQuickStopBtnArrowAngle = function () {
    var t = this.spinButton.getComponent(_dependency9.SpinButton).arrowAngle;
    this.quickStopBtn && this.quickStopBtn.syncArrowAngle(t);
  }, r.initSlotTable2Btn = function () {
    var t = App.dataCenter.get(_dependency8.default).colorConfig.main,
      e = Object.prototype.hasOwnProperty.call(_dependency13.default.getData(), "table");
    (this.slotTable2Btn.active = e, e) && (this.slotTable2Btn.getComponentInChildren(_dependency2.Label).string = _dependency13.default.getData().table.number.toString().padStart(3, "0"), this.setSlotTable2Color(t), _dependency5.CmmUtils.addBtnClickEvent(this.slotTable2Btn, function () {
      App.uiManager.open({
        type: _dependency19.default,
        bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
        zIndex: _dependency3.ViewZOrder.UI,
        name: "機台選擇"
      }), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }));
  }, r.setSlotTable2Color = function (t) {
    this.slotTable2Btn.getComponentsInChildren(_dependency2.Sprite).forEach(function (e) {
      e.color = new _dependency2.Color(t);
    }), this.slotTable2Btn.getComponentInChildren(_dependency2.Label).color = new _dependency2.Color(t);
  }, r.addSpinEventTouch = function (t, e) {
    var n = this,
      i = this.spinButton.getComponent(_dependency9.SpinButton);
    this.tmpSpinFunc = e, i.addClickEvent(function () {
      if (n.stakeCoolingDownFlag) return n.hasCoolingDownSpin = !0, void (n.stakeStepInteractable = !1);
      n.currentKeyCode == _dependency2.KeyCode.NONE && e();
    });
  }, r.addQuickStopEventTouch = function (t) {
    this.tmpStopSpinFunc = t, this.quickStopBtn && this.quickStopBtn.addClickEvent(t);
  }, r.addSpeedUpTouchFunction = function () {
    this.quickStopBtn && this.quickStopBtn.addClickEvent(this.speedUpTouchFunction.bind(this));
  }, r.speedUpTouchFunction = function (t) {
    var e = this;
    this.spinStatus == _dependency15.ESpinStatus.SPINING && (clearTimeout(this.speedTimeOutId), this.currentSpeed = t || this.maxSpeedUp, _dependency20.TimeManager.instance.setTimeScale(this.currentSpeed), this.speedTimeOutId = setTimeout(function () {
      _dependency20.TimeManager.instance.reset(), e.currentSpeed = 1;
    }, 500));
  }, r.addQuickStopBtnEvent = function (t) {
    this.quickStopBtn && this.quickStopBtn.addClickEvent(t);
  }, r.addEventInput = function () {
    var t = this;
    this.onI(_dependency2.Input.EventType.KEY_UP, function (t) {}), this.onI(_dependency2.Input.EventType.KEY_DOWN, function (e) {
      if (t.currentKeyCode == _dependency2.KeyCode.NONE) {
        var n = t.spinButton.getComponent(_dependency9.SpinButton),
          i = e.keyCode,
          o = n.button.getComponent(_dependency2.Button).interactable;
        t.currentTarget || t.stakeCoolingDownFlag || (i === _dependency2.KeyCode.SPACE && o && App.uiManager.IsOnlyGameViewOpen("GameView") && null === App.gameAlert.currentPanel && 0 == t.isOpenMenu ? t.tmpSpinFunc && t.tmpSpinFunc() : i === _dependency2.KeyCode.SPACE && t.slotData.spinStatus === _dependency15.ESpinStatus.SPINING && (t.tmpStopSpinFunc && t.tmpStopSpinFunc(), t.stakeCoolingDownFlag = !0, _dependency2.tween(t).bindNodeState(false).delay(.3).call(function () {
          t.stakeCoolingDownFlag = !1;
        }).start()));
      }
    });
  }, r.setSpinBtnData = function (t, e, n, i, o) {
    void 0 === o && (o = 1);
    var a = this.spinButton.getComponent(_dependency9.SpinButton);
    a.init(), a.setData(t, e, n, i, o), this.quickStopBtn && (this.quickStopBtn.init(), this.setQuickStopData(t, e, n, i, o));
  }, r.stopRotate = function () {
    var t = this.spinButton.getComponent(_dependency9.SpinButton);
    t && (t.HIGH_SPEED = t.BASE_SPEED), this.quickStopBtn && (this.quickStopBtn.HIGH_SPEED = this.quickStopBtn.BASE_SPEED);
  }, r.initTurbo = function (t) {
    var e = this.turboToggle.getComponentsInChildren(_dependency2.Sprite),
      n = App.dataCenter.get(_dependency8.default).colorConfig.main;
    e.forEach(function (t) {
      t.color = new _dependency2.Color(n);
    }), this.turboToggle.getComponent(_dependency2.Toggle).isChecked = t, this.turboToggle.off(_dependency2.NodeEventType.TOUCH_END);
  }, r.addTurboEventTouch = function (t) {
    var e = this;
    this.turboToggle.on(_dependency2.NodeEventType.TOUCH_END, _dependency5.CmmUtils.throttle(function () {
      if (e.turboToggle.getComponent(_dependency2.Toggle).interactable) {
        var n = _dependency16.ObjectUtils.clone(t.isTurbo);
        t.setIsTurbo(!n), dispatch(_dependency11.SlotFrameworkEvent.PLAY_CLICK_BTM), e.scheduleOnce(function () {
          e.turboToggle.getComponent(_dependency2.Toggle).isChecked = t.isTurbo;
        }, 0);
      }
    }));
  }, r.setAllInteractable = function (t) {
    this.turboToggle.getComponent(_dependency2.Toggle).interactable = t, this.stakeStepInteractable = t, this.spinButton.getComponent(_dependency9.SpinButton).setInteractable(t), 0 == t && clearTimeout(this.timeOutId), this.startAutoBtn.getComponent(_dependency2.Button).interactable = t, this.stopAutoBtn.getComponent(_dependency2.Button).interactable = t, this.menuBtn.getComponent(_dependency2.Button).interactable = t, _dependency0.default.active && (this.stopAutoBtn.getComponent(_dependency2.Button).interactable = !0);
    var e = App.dataCenter.get(_dependency8.default).colorConfig,
      n = e.main,
      i = e.disable;
    this.setColor(t ? n : i), this.setQuickStopBtnActive(!t), this.setQuickStopBtnArrowAngle(), this.setStakeColor(t), this.setSlotTableInteractable(t), _dependency10.default.getData().totalBetValues && _dependency10.default.totalBetValues.length > 0 ? this.btnOpen.active = t : this.btnOpen.active = !1;
  }, r.setSlotTableInteractable = function (t) {
    var e = App.dataCenter.get(_dependency8.default).colorConfig,
      n = e.main,
      i = e.disable;
    this.slotTable2Btn.getComponent(_dependency2.Button).interactable = t, this.setSlotTable2Color(t ? n : i);
  }, r.spinBarActive = function (t) {
    this.node.active = t;
  }, r.setBtnsInFeatureMode = function (t) {
    var e = App.dataCenter.get(_dependency8.default).colorConfig,
      n = e.main,
      i = e.disable;
    0 == t && clearTimeout(this.timeOutId), this.turboToggle.getComponent(_dependency2.Toggle).interactable = t, this.startAutoBtn.getComponent(_dependency2.Button).interactable = t, this.stopAutoBtn.getComponent(_dependency2.Button).interactable = t, this.menuBtn.getComponent(_dependency2.Button).interactable = t, this.spinButton.getComponent(_dependency9.SpinButton).setInteractable(t), this.setColor(t ? n : i), this.setSlotTableInteractable(t), 0 == t && (this.stakeCoolingDownFlag = !1);
  }, r.setSpinBtnInFeatureMode = function (t) {
    this.spinButton.getComponent(_dependency9.SpinButton).setInteractable(t);
  }, r.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency11.SlotFrameworkEvent.SHOW_AUTO_SPIN, function (t) {
      var n = t.data;
      e.showStartAutoActive(n);
    }), this.on(_dependency11.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (t) {
      var n = t.data,
        i = _dependency15.ESpinStatus.SPINING === n;
      e.spinStatus = n, e.setAllInteractable(!i);
    }), this.on(_dependency11.SlotFrameworkEvent.SET_AUTO_SPIN_COUNT, function (t) {
      var n = t.data;
      n >= 0 && e.showStartAutoActive(!1), 0 === n && e.showStartAutoActive(!0), -1 == n && e.showStartAutoActive(!1);
    }), this.on(_dependency11.SlotFrameworkEvent.VIEW_SHOW_MENU, function () {
      e.isOpenMenu = !0;
    }), this.on(_dependency11.SlotFrameworkEvent.VIEW_HIDE_MENU, function () {
      e.isOpenMenu = !1;
    }), this.on(_dependency11.SlotFrameworkEvent.UPDATE_EXTRA_STAKE, function () {
      var t = e.getStakeKeyIndex(),
        n = _dependency10.default.totalStakeMap.get(t);
      _dependency10.default.updateStake(n), e.setStakeLabel(_dependency10.default.totalStake);
    }), this.on(_dependency11.SlotFrameworkEvent.SET_BTNS_IN_BUY_FEATURE, function (t) {
      e.setBtnsInFeatureMode(t);
    }), this.on(_dependency11.SlotFrameworkEvent.SET_SPIN_BTN_BY_SELECT_FEATURE, function (t) {
      e.setSpinBtnInFeatureMode(t);
    }), this.on(_dependency11.SlotFrameworkEvent.SPEED_UP, function (t) {
      Log.e("SpeedUPData:::::::::", t), e.speedUpTouchFunction(t);
    });
  }, _dependency.createClass(e, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency1.default);
    }
  }]), e;
}(_dependency6.default)).prototype, "buttons", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), rt = _dependency.applyDecoratedDescriptor(at.prototype, "menuBtn", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ut = _dependency.applyDecoratedDescriptor(at.prototype, "turboToggle", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), lt = _dependency.applyDecoratedDescriptor(at.prototype, "autoSpinGroup", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ct = _dependency.applyDecoratedDescriptor(at.prototype, "startAutoBtn", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), pt = _dependency.applyDecoratedDescriptor(at.prototype, "stopAutoBtn", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ht = _dependency.applyDecoratedDescriptor(at.prototype, "spinButton", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), dt = _dependency.applyDecoratedDescriptor(at.prototype, "slotTable2Btn", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), St = _dependency.applyDecoratedDescriptor(at.prototype, "stakeContent", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gt = _dependency.applyDecoratedDescriptor(at.prototype, "stakeBarMask", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), kt = _dependency.applyDecoratedDescriptor(at.prototype, "stakeBar", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ct = _dependency.applyDecoratedDescriptor(at.prototype, "plusHitArea", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = _dependency.applyDecoratedDescriptor(at.prototype, "plusBtn", [tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Tt = _dependency.applyDecoratedDescriptor(at.prototype, "minusHitArea", [et], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), bt = _dependency.applyDecoratedDescriptor(at.prototype, "minusBtn", [nt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Bt = _dependency.applyDecoratedDescriptor(at.prototype, "btnOpen", [it], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = _dependency.applyDecoratedDescriptor(at.prototype, "stake", [ot], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at));
_dependency2.cclegacy._RF.pop();
