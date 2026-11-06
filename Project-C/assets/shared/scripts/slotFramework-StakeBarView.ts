// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-CmmUtils";
import * as _dependency4 from "./main-UIView";
import * as _dependency5 from "./main-Decorators";
import * as _dependency6 from "./slotFramework-SlotFrameworkData";
import * as _dependency7 from "./slotFramework-StakeModel";
import * as _dependency8 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency9 from "./slotFramework-DefinitionModel";
import * as _dependency0 from "./slotFramework-type2";
var _export;
export { _export as StakeBarView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "StakeBarView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, a, n, i, s, o, r, l, h, u, c, p, g, k, d, S, C, f, T, m, I, b, w, v, M;
var D, y, E, B, F, A, O, P, N, U, H, L, _, K, x, z, R, V, G, W, Y;
_dependency2.cclegacy._RF.push({}, "4b7f6Br5opL85AUFnWbpxC/", "StakeBarView", void 0);
var j = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("StakeBarView", (D = j("StakeBarView"), y = _dependency5.inject("bbr", _dependency2.Node), E = _dependency5.inject("content", _dependency2.Node), B = _dependency5.inject("content/stakeBarMask", _dependency2.Node), F = _dependency5.inject("content/stakeBarMask/Bar", _dependency2.Node), A = _dependency5.inject("content/btns/plusBtn/hitArea", _dependency2.Node), O = _dependency5.inject("content/btns/minusBtn/hitArea", _dependency2.Node), P = _dependency5.inject("content/stake", _dependency2.Label), N = _dependency5.inject("content/btns/plusBtn", _dependency2.Node), U = _dependency5.inject("content/btns/minusBtn", _dependency2.Node), D((_ = _dependency.applyDecoratedDescriptor((L = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, a = arguments.length, s = new Array(a), o = 0; o < a; o++) s[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bbr", _, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "content", K, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stakeBarMask", x, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stakeBar", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "plusHitArea", R, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "minusHitArea", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "stake", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "plusBtn", W, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "minusBtn", Y, _dependency.assertThisInitialized(e)), e.stakeStepInteractable = void 0, e.stakeMapSize = void 0, e.stakeRatio = void 0, e.lastPosition = new _dependency2.Vec2(), e.plusLastPosition = new _dependency2.Vec2(), e.deltaPos = new _dependency2.Vec2(), e.stakeChildColorMap = new Map(), e.frameCounter = 0, e.stakeCoolingDownFlag = !1, e.hasCoolingDownSpin = !1, e.needUpdateSpin = !1, e.tmpSpinFunc = null, e.spinStatus = _dependency0.ESpinStatus.IDLE, e.isOpenMenu = !1, e.currentTarget = null, e.plusCurrentTarget = null, e.isTouchMove = !1, e.isPlusTouchMove = !1, e.currentKeyCode = _dependency2.KeyCode.NONE, e.timeOutId = -1, e.plusTimeOutId = -1, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {}, r.update = function (t) {
    if (this.frameCounter++, this.frameCounter >= 7 && (this.frameCounter = 0, this.stakeStepInteractable && this.spinStatus == _dependency0.ESpinStatus.IDLE)) {
      if (this.stakeCoolingDownFlag) return;
      if (this.currentKeyCode == _dependency2.KeyCode.NONE) return;
      this.currentKeyCode == _dependency2.KeyCode.ARROW_LEFT ? this.setStakeStep(-1, !1) : this.currentKeyCode == _dependency2.KeyCode.ARROW_RIGHT && this.setStakeStep(1, !1);
    }
    this.needUpdateSpin && (this.tmpSpinFunc && this.tmpSpinFunc(), this.needUpdateSpin = !1);
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/view/StakeBarView";
  }, r.init = function () {
    this.setEventTouch(), this.initStake(), this.initStakeBar(), this.updateIconColor(), this.setAllInteractable(!0);
  }, r.initStake = function () {
    var t = this,
      e = _dependency7.default.stakeIndex,
      a = _dependency7.default.ratioIndex,
      n = _dependency7.default.getStakeVO({
        stakeIndex: e,
        ratioIndex: a
      });
    this.stakeMapSize = _dependency7.default.totalStakeMap.size, this.stakeRatio = this.stakeBarMask.getComponent(_dependency2.UITransform).height / this.stakeMapSize, _dependency7.default.updateStake(n), this.setStakeLabel(_dependency7.default.totalStake), dispatch(_dependency8.SlotFrameworkEvent.UPDATE_STAKE, {
      data: n.totalStake
    });
    var i = this.content.getComponentsInChildren(_dependency2.Label),
      s = this.content.getComponentsInChildren(_dependency2.Sprite);
    [].concat(i, s).forEach(function (e) {
      t.stakeChildColorMap.set(e, {
        light: new _dependency2.Color(e.color),
        dark: _dependency3.CmmUtils.rgbaToDarkGray(e.color)
      });
    });
  }, r.initStakeBar = function () {
    var t = this.getStakeKeyIndex();
    this.updateBarHeight(t);
  }, r.getStakeKeyIndex = function () {
    for (var t, e = _dependency7.default.totalStakeMap, a = _dependency7.default.stakeIndex, n = _dependency7.default.ratioIndex, i = _dependency.createForOfIteratorHelperLoose(e); !(t = i()).done;) {
      var o = t.value,
        r = o[0],
        l = o[1];
      if (l.stakeIndex === a && l.ratioIndex === n) return r;
    }
    return -1;
  }, r.setEventTouch = function () {
    var t = this;
    this.plusHitArea.on(_dependency2.NodeEventType.TOUCH_START, this.stakePlusTouchStart, this, !1), this.plusHitArea.on(_dependency2.NodeEventType.TOUCH_MOVE, this.stakePlusTouchMove, this, !1), this.plusHitArea.on(_dependency2.NodeEventType.TOUCH_END, this.stakePlusTouchEnd, this, !1), this.plusHitArea.on(_dependency2.NodeEventType.TOUCH_CANCEL, this.stakePlusTouchCancel, this, !1), this.minusHitArea.on(_dependency2.NodeEventType.TOUCH_START, this.stakeTouchStart, this, !1), this.minusHitArea.on(_dependency2.NodeEventType.TOUCH_MOVE, this.stakeTouchMove, this, !1), this.minusHitArea.on(_dependency2.NodeEventType.TOUCH_END, this.stakeTouchEnd, this, !1), this.minusHitArea.on(_dependency2.NodeEventType.TOUCH_CANCEL, this.stakeTouchCancel, this, !1), this.bbr.on(_dependency2.NodeEventType.TOUCH_END, function () {
      var e = {
        stakeIndex: _dependency7.default.stakeIndex,
        ratioIndex: _dependency7.default.ratioIndex
      };
      _dependency7.default.stakeMapIndex = _dependency7.default.getStakeVO(e).index, dispatch(_dependency8.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM), t.close();
    }), this.onI(_dependency2.Input.EventType.KEY_DOWN, function (e) {
      if (App.uiManager.IsOnlyGameViewOpen("GameView") && null === App.gameAlert.currentPanel && 0 == t.isOpenMenu) {
        if (t.currentTarget) return;
        if (t.stakeCoolingDownFlag) return;
        if (!t.stakeStepInteractable) return;
        if (t.currentKeyCode != _dependency2.KeyCode.NONE) return;
        if (e.keyCode == _dependency2.KeyCode.ARROW_LEFT || e.keyCode == _dependency2.KeyCode.ARROW_RIGHT) {
          var a = e.keyCode;
          t.currentKeyCode = a;
        }
      }
    }), this.onI(_dependency2.Input.EventType.KEY_UP, function (e) {
      t.node.targetOff(t), t.currentTarget || t.stakeCoolingDownFlag || t.stakeStepInteractable && t.currentKeyCode != _dependency2.KeyCode.NONE && t.currentKeyCode == e.keyCode && (t.stakeCoolingDownFlag = !0, t.sendSetting(), t.timeOutId = setTimeout(function () {
        t.needUpdateSpin = t.stakeCoolingDownFlag && t.hasCoolingDownSpin, t.stakeCoolingDownFlag = !1, t.hasCoolingDownSpin = !1, t.stakeStepInteractable = !0, t.currentKeyCode = _dependency2.KeyCode.NONE;
      }, 300));
    });
  }, r.stakePlusTouchStart = function (t) {
    var e = this;
    this.stakeStepInteractable && null == this.plusCurrentTarget && null == this.currentTarget && this.currentKeyCode == _dependency2.KeyCode.NONE && (this.stakeCoolingDownFlag || (this.plusCurrentTarget = t.currentTarget, this.isPlusTouchMove = !1, this.plusLastPosition = t.getLocation(), this.plusHitArea == t.currentTarget && this.setStakeStep(1), this.stakeCoolingDownFlag = !0, this.plusTimeOutId = setTimeout(function () {
      e.needUpdateSpin = e.stakeCoolingDownFlag && e.hasCoolingDownSpin, e.stakeCoolingDownFlag = !1, e.hasCoolingDownSpin = !1, e.stakeStepInteractable = !0;
    }, 500)));
  }, r.stakePlusTouchMove = function (t) {
    if (this.stakeStepInteractable && this.currentKeyCode == _dependency2.KeyCode.NONE && null != this.plusCurrentTarget && 0 != t.getDeltaY()) if (this.plusCurrentTarget != t.currentTarget) ;else {
      this.isPlusTouchMove = !0;
      var e = t.getLocation();
      this.deltaPos.y = 1.25 * (this.plusLastPosition.y - e.y), this.plusLastPosition = e.clone();
      var a = this.stakeBar.getComponent(_dependency2.UITransform).height - this.deltaPos.y;
      if (a <= this.stakeBarMask.getComponent(_dependency2.UITransform).height && a > 0) {
        this.stakeBar.getComponent(_dependency2.UITransform).height = a;
        var n = this.calculateStakeMapIndex(this.stakeBar.getComponent(_dependency2.UITransform).height),
          i = _dependency7.default.totalStakeMap.get(n);
        _dependency7.default.updateStake(_dependency7.default.totalStakeMap.get(n)), this.updateIconColor(), this.setStakeLabel(i.totalStake), dispatch(_dependency8.SlotFrameworkEvent.UPDATE_STAKE, {
          data: i.totalStake
        });
      } else if (a > this.stakeBarMask.getComponent(_dependency2.UITransform).height) {
        a = this.stakeBarMask.getComponent(_dependency2.UITransform).height, this.stakeBar.getComponent(_dependency2.UITransform).height = a, this.stakeBar.getComponent(_dependency2.UITransform).height = a;
        var s = this.calculateStakeMapIndex(this.stakeBar.getComponent(_dependency2.UITransform).height),
          o = _dependency7.default.totalStakeMap.get(s);
        _dependency7.default.updateStake(_dependency7.default.totalStakeMap.get(s)), dispatch(_dependency8.SlotFrameworkEvent.UPDATE_STAKE, {
          data: o.totalStake
        }), this.updateIconColor(), this.setStakeLabel(o.totalStake);
      }
    }
  }, r.stakePlusTouchEnd = function (t) {
    var e = this;
    this.stakeStepInteractable && this.currentKeyCode == _dependency2.KeyCode.NONE && (this.lastPosition = t.getLocation(), this.plusCurrentTarget == t.currentTarget && (this.isPlusTouchMove ? (this.sendSetting(), this.stakeCoolingDownFlag = !0, this.isPlusTouchMove = !1, this.plusCurrentTarget = null, this.updateBarHeight(this.getStakeKeyIndex()), this.timeOutId = setTimeout(function () {
      e.needUpdateSpin = e.stakeCoolingDownFlag && e.hasCoolingDownSpin, e.stakeCoolingDownFlag = !1, e.hasCoolingDownSpin = !1, e.stakeStepInteractable = !0;
    }, 500)) : this.plusCurrentTarget = null));
  }, r.stakePlusTouchCancel = function (t) {
    var e = this;
    this.stakeStepInteractable && this.currentKeyCode == _dependency2.KeyCode.NONE && this.plusCurrentTarget == t.currentTarget && (this.isPlusTouchMove ? (this.sendSetting(), this.plusCurrentTarget = null, this.isTouchMove = !1, this.stakeCoolingDownFlag = !0, this.timeOutId = setTimeout(function () {
      e.needUpdateSpin = e.stakeCoolingDownFlag && e.hasCoolingDownSpin, e.stakeCoolingDownFlag = !1, e.hasCoolingDownSpin = !1;
    }, 500)) : this.plusCurrentTarget = null);
  }, r.stakeTouchStart = function (t) {
    var e = this;
    this.stakeStepInteractable && null == this.currentTarget && null == this.plusCurrentTarget && this.currentKeyCode == _dependency2.KeyCode.NONE && (this.stakeCoolingDownFlag || (this.currentTarget = t.currentTarget, this.isTouchMove = !1, this.lastPosition = t.getLocation(), t.currentTarget == this.minusHitArea && this.setStakeStep(-1), this.stakeCoolingDownFlag = !0, this.timeOutId = setTimeout(function () {
      e.needUpdateSpin = e.stakeCoolingDownFlag && e.hasCoolingDownSpin, e.stakeCoolingDownFlag = !1, e.hasCoolingDownSpin = !1, e.stakeStepInteractable = !0;
    }, 500)));
  }, r.stakeTouchEnd = function (t, e) {
    var a = this;
    this.stakeStepInteractable && this.currentKeyCode == _dependency2.KeyCode.NONE && (this.lastPosition = t.getLocation(), this.minusHitArea == t.currentTarget && (this.isTouchMove ? (this.sendSetting(), this.stakeCoolingDownFlag = !0, this.isTouchMove = !1, this.currentTarget = null, this.updateBarHeight(this.getStakeKeyIndex()), this.timeOutId = setTimeout(function () {
      a.needUpdateSpin = a.stakeCoolingDownFlag && a.hasCoolingDownSpin, a.stakeCoolingDownFlag = !1, a.hasCoolingDownSpin = !1, a.stakeStepInteractable = !0;
    }, 500)) : this.currentTarget = null));
  }, r.stakeTouchCancel = function (t) {
    var e = this;
    this.stakeStepInteractable && this.currentKeyCode == _dependency2.KeyCode.NONE && this.minusHitArea == t.currentTarget && (this.isTouchMove ? (this.sendSetting(), this.currentTarget = null, this.isTouchMove = !1, this.stakeCoolingDownFlag = !0, this.timeOutId = setTimeout(function () {
      e.needUpdateSpin = e.stakeCoolingDownFlag && e.hasCoolingDownSpin, e.stakeCoolingDownFlag = !1, e.hasCoolingDownSpin = !1, e.stakeStepInteractable = !0;
    }, 500)) : this.currentTarget = null);
  }, r.stakeTouchMove = function (t) {
    if (this.stakeStepInteractable && this.currentKeyCode == _dependency2.KeyCode.NONE && null != this.currentTarget && 0 != t.getDelta().y) if (this.minusHitArea != t.currentTarget) ;else {
      this.isTouchMove = !0;
      var e = t.getLocation();
      this.deltaPos.y = 1.25 * (this.lastPosition.y - e.y), this.lastPosition = e.clone();
      var a = this.stakeBar.getComponent(_dependency2.UITransform).height - this.deltaPos.y;
      if (a <= this.stakeBarMask.getComponent(_dependency2.UITransform).height && a > 0) {
        this.stakeBar.getComponent(_dependency2.UITransform).height = a;
        var n = this.calculateStakeMapIndex(this.stakeBar.getComponent(_dependency2.UITransform).height),
          i = _dependency7.default.totalStakeMap.get(n);
        _dependency7.default.updateStake(_dependency7.default.totalStakeMap.get(n)), this.updateIconColor(), this.setStakeLabel(i.totalStake), dispatch(_dependency8.SlotFrameworkEvent.UPDATE_STAKE, {
          data: i.totalStake
        });
      } else if (a > this.stakeBarMask.getComponent(_dependency2.UITransform).height) {
        a = this.stakeBarMask.getComponent(_dependency2.UITransform).height, this.stakeBar.getComponent(_dependency2.UITransform).height = a;
        var s = this.calculateStakeMapIndex(this.stakeBar.getComponent(_dependency2.UITransform).height),
          o = _dependency7.default.totalStakeMap.get(s);
        _dependency7.default.updateStake(_dependency7.default.totalStakeMap.get(s)), dispatch(_dependency8.SlotFrameworkEvent.UPDATE_STAKE, {
          data: o.totalStake
        }), this.updateIconColor(), this.setStakeLabel(o.totalStake);
      }
    }
  }, r.calculateStakeMapIndex = function (t) {
    if (t >= this.stakeBarMask.getComponent(_dependency2.UITransform).height) return this.stakeMapSize - 1;
    var e = Math.floor(t / this.stakeRatio);
    return Math.max(0, Math.min(e, this.stakeMapSize - 1));
  }, r.setStakeStep = function (t, e) {
    if (void 0 === e && (e = !0), this.stakeStepInteractable && !this.stakeCoolingDownFlag) {
      var a = this.getStakeKeyIndex();
      if (-1 !== a) {
        var n = a + t;
        if (n >= this.stakeMapSize ? n = this.stakeMapSize - 1 : n < 0 && (n = 0), n !== a || 0 === t) {
          var i = _dependency7.default.totalStakeMap.get(n);
          i && (_dependency7.default.updateStake(i), this.updateBarHeight(n), this.setStakeLabel(i.totalStake), this.updateIconColor(), dispatch(_dependency8.SlotFrameworkEvent.UPDATE_STAKE, {
            data: i.totalStake
          }), e && this.sendSetting());
        }
      }
    }
  }, r.updateBarHeight = function (t) {
    var e = this.stakeBar.getComponent(_dependency2.UITransform),
      a = this.stakeBarMask.getComponent(_dependency2.UITransform).height;
    t <= 0 ? e.height = 0 : t >= this.stakeMapSize - 1 ? e.height = a : e.height = (t + 1) * this.stakeRatio;
  }, r.sendSetting = function () {
    var t = _dependency7.default.getData(),
      e = {
        type: "game",
        data: {
          stakeIndex: t.stakeIndex,
          ratioIndex: t.ratioIndex
        }
      };
    dispatch(_dependency8.SlotFrameworkEvent.SEND_SETTING_REQUEST, e);
  }, r.setStakeLabel = function (t) {
    var e = t.toString(),
      a = e.split(".")[0],
      n = e.split(".")[1],
      i = _dependency9.default.getData().digital;
    null != n ? (n = n.substring(0, i), e = i > 0 ? a + "." + n : a) : e = t >= 1e4 ? _dependency3.CmmUtils.formatNumStr(t) : "" + t, this.stake.string = e;
  }, r.setStakeColor = function (t) {
    this.stakeChildColorMap.forEach(function (e, a) {
      a.color = t ? e.light : e.dark;
    });
  }, r.setAllInteractable = function (t) {
    this.stakeStepInteractable = t, this.setStakeColor(t);
  }, r.updateIconColor = function () {
    var t = {
      full: new _dependency2.Color("#FFFFFF"),
      white: new _dependency2.Color("#FFFFFF")
    };
    this.stake.getComponent(_dependency2.Label).color = this.stakeBar.getComponent(_dependency2.UITransform).height > 160 ? t.white : t.full, this.plusBtn.getComponent(_dependency2.Sprite).color = this.stakeBar.getComponent(_dependency2.UITransform).height > 290 ? t.white : t.full, this.minusBtn.getComponent(_dependency2.Sprite).color = this.stakeBar.getComponent(_dependency2.UITransform).height > 40 ? t.white : t.full;
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency8.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (t) {
      var a = t.data,
        n = _dependency0.ESpinStatus.SPINING === a;
      e.spinStatus = a, e.setAllInteractable(!n);
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "bbr", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(L.prototype, "content", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(L.prototype, "stakeBarMask", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(L.prototype, "stakeBar", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(L.prototype, "plusHitArea", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(L.prototype, "minusHitArea", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(L.prototype, "stake", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = _dependency.applyDecoratedDescriptor(L.prototype, "plusBtn", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(L.prototype, "minusBtn", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = L)) || H));
_dependency2.cclegacy._RF.pop();
