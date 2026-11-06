// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1004-GameConfigModel";
import * as _dependency6 from "./g1004-GameData";
import * as _dependency7 from "./g1004-GameEvent";
import * as _dependency8 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency9 from "../../shared/scripts/slotFramework-ReplayModel";
var _export;
export { _export as FreeGameAlertView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FreeGameAlertView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, r, i, a, o, s, l, c, u, f, p, m, h, b, d, g, C, y, T, S, w, _;
var v, F, E, A, G, U, D, M, L, O, R, I, N;
_dependency2.cclegacy._RF.push({}, "fc716pADP5P3pHYRcO2qcWb", "FreeGameAlertView", void 0);
var P = _dependency2._decorator.ccclass,
  V = _dependency2._decorator.property;
_publish("FreeGameAlertView", (v = P("FreeGameAlertView"), F = V({
  type: _dependency2.Node,
  displayName: "Confirm"
}), E = _dependency4.inject("alert", _dependency2.Node), A = _dependency4.inject("alert/bbr", _dependency2.Node), G = _dependency4.inject("alert/fgFontSprite", _dependency2.Sprite), U = _dependency4.inject("alert/fgTimes", _dependency2.Label), v((L = _dependency.applyDecoratedDescriptor((M = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "btnConfirm", L, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "alert", O, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "bbr", R, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "fgFontSprite", I, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "fgTimes", N, _dependency.assertThisInitialized(t)), t;
  }
  _dependency.inheritsLoose(t, e), t.getPrefabUrl = function () {
    return "prefabs/featureGame/FGAlertView";
  };
  var o = t.prototype;
  return o.start = function () {
    this.init();
  }, o.init = function () {
    var e = this;
    this.updateConfirmSpriteFrame(_dependency2.NodeEventType.TOUCH_END), Array.from(_dependency7.NodeEventTypeMap.values()).forEach(function (t) {
      e.onN(e.btnConfirm, t, e.changeSprite, e);
    }), this.on(_dependency7.GameEvent.SHOW_FG_SUMMARY_ALERT, function () {
      e.showIntroAlert();
    });
  }, o.changeSprite = function (e) {
    this.updateConfirmSpriteFrame(e.type);
  }, o.updateConfirmSpriteFrame = function (e) {
    var t = _dependency5.default.getData().filePaths.localeSpriteFrame,
      n = this.btnConfirm.getComponentInChildren(_dependency2.Sprite),
      r = this.getSpriteName(e);
    n.spriteFrame = _dependency8.LoadUtils.getDirSp(this.data.module, t, r), n.node.scale = e === _dependency2.NodeEventType.TOUCH_START ? new _dependency2.Vec3(.9, .9, .9) : new _dependency2.Vec3(1, 1, 1);
  }, o.getSpriteName = function (e) {
    switch (e) {
      case _dependency2.NodeEventType.TOUCH_START:
        return "t_btn_pressed";
      case _dependency2.NodeEventType.MOUSE_ENTER:
        return "t_btn_hover";
      case _dependency2.NodeEventType.TOUCH_END:
      case _dependency2.NodeEventType.MOUSE_LEAVE:
      default:
        return "t_btn_normal";
    }
  }, o.startFreeGame = function () {
    this.btnConfirm.active = !1, this.alert.active = !1, dispatch(_dependency7.GameEvent.CLICK_START_FREE_GAME), this.data.originTurbo = _dependency5.default.isTurbo, _dependency5.default.setIsTurbo(!1, !1), this.unschedule(this.startFreeGame), this.bbr.targetOff(this), this.close();
  }, o.playBounceTween = function () {
    var e = this;
    return new Promise(function (t, n) {
      _dependency2.Tween.stopAllByTarget(e.fgFontSprite.node), _dependency2.tween(e.fgFontSprite.node).bindNodeState(false).delay(.2).to(.1, {
        scale: new _dependency2.Vec3(1.2, 1.2, 1.2)
      }).to(.2, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }).call(function () {
        t(!0);
      }).start();
    });
  }, o.onKeyDown = function (t) {
    e.prototype.onKeyDown.call(this, t), t.keyCode === _dependency2.KeyCode.SPACE && this.btnConfirm.active && this.startFreeGame();
  }, o.showIntroAlert = function () {
    var e = this;
    this.enabledKeyDown = !0;
    var t = this.data.getData().gameState,
      n = _dependency5.default.getData(),
      r = n.autoCloseTime,
      i = n.replayAutoCloseTime,
      a = _dependency9.default.isReplay;
    dispatch(_dependency7.GameEvent.MUSIC_VOLUME_MULTIPLE, {
      data: .5
    }), this.alert.active = !0;
    for (var o = 0; o < t.length; o++) {
      var s = t[o];
      if (s.freeGameCount > 0) {
        this.fgTimes.string = s.freeGameCount.toString();
        break;
      }
    }
    this.btnConfirm.active = !1, this.playBounceTween().then(function () {
      dispatch(_dependency7.GameEvent.MUSIC_VOLUME_MULTIPLE, {
        data: 2
      }), e.btnConfirm.active = !0, e.btnConfirm.once(_dependency2.NodeEventType.TOUCH_END, e.startFreeGame, e), r && e.scheduleOnce(e.startFreeGame, r), a && e.scheduleOnce(e.startFreeGame, i);
    });
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), t;
}(_dependency3.default)).prototype, "btnConfirm", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(M.prototype, "alert", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(M.prototype, "bbr", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _dependency.applyDecoratedDescriptor(M.prototype, "fgFontSprite", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _dependency.applyDecoratedDescriptor(M.prototype, "fgTimes", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = M)) || D));
_dependency2.cclegacy._RF.pop();
