// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-UrlUtils";
import * as _dependency4 from "./main-Config";
import * as _dependency5 from "./main-Bundles";
import * as _dependency6 from "./main-CmmUtils";
import * as _dependency7 from "./main-EventComponent";
import * as _dependency8 from "./main-Decorators";
import * as _dependency9 from "./slotFramework-RunScore";
import * as _dependency0 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency1 from "./slotFramework-ColorModel";
import * as _dependency10 from "./slotFramework-DefinitionModel";
import * as _dependency11 from "./slotFramework-InitialModel";
import * as _dependency12 from "./slotFramework-PlatformModel";
import * as _dependency13 from "./slotFramework-ReplayModel";
import * as _dependency14 from "./slotFramework-type2";
import * as _dependency15 from "./slotFramework-CmmSlotUtils";
import * as _dependency16 from "./slotFramework-AvatarViewL";
import * as _dependency17 from "./slotFramework-AvatarViewP";
import * as _dependency18 from "./slotFramework-NickNameView";
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
var e, n, a, i, o, r, l, s, u, c, d, p, f, I, m, b, g, h, v, y, w, B, C, T, A, D, N, E, L, k, S, U;
var _, M, P, W, R, z, F, O, H, V, q, G, K, x, Y, j, Z, J, Q, X, $, tt, et, nt, at, it, ot, rt, lt;
_dependency2.cclegacy._RF.push({}, "0c122zKefBDFJ3HqZk4tGhA", "InfoBarController", void 0);
_dependency2._decorator.ccclass, _dependency2._decorator.property, _publish("default", (_ = _dependency8.inject("content/userInfo/content/spinIdBtn", _dependency2.Node), M = _dependency8.inject("content/userInfo/content/spinIdBtn/spinId", _dependency2.Label), P = _dependency8.inject("content/balance/bg", _dependency2.Node), W = _dependency8.inject("content/totalWin/bg", _dependency2.Node), R = _dependency8.inject("content/userInfo/avatarBtn", _dependency2.Node), z = _dependency8.inject("content/userInfo/avatarBtn/Mask/avatar", _dependency2.Node), F = _dependency8.inject("content/userInfo/content/userIdBtn", _dependency2.Node), O = _dependency8.inject("content/userInfo/content/userIdBtn/userIdMask", _dependency2.Node), H = _dependency8.inject("content/userInfo/content/userIdBtn/userIdMask/userId", _dependency2.Label), V = _dependency8.inject("content/userInfo/content/userIdBtn/icon", _dependency2.Node), q = _dependency8.inject("content/userInfo/content/spinIdBtn/copyHint", _dependency2.Animation), G = _dependency8.inject("content/userInfo/content/userIdBtn/isDemo", _dependency2.Node), K = _dependency8.inject("content/balance/content/balanceLabel", _dependency2.Label), x = _dependency8.inject("content/totalWin/content/totalWinLabel", _dependency2.Label), j = _dependency.applyDecoratedDescriptor((Y = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "spinIdBtn", j, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spinId", Z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "balanceBg", J, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWinBg", Q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "avatarBtn", X, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "avatar", $, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "userIdBtn", tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "userIdMask", et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "userId", nt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "editIcon", at, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spinIdCopyHint", it, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "isDemo", ot, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "balanceLabel", rt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWinLabel", lt, _dependency.assertThisInitialized(e)), e.totalWinTween = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this), this.setEventTouch();
  }, o.start = function () {
    _dependency13.default.isReplay ? this.initReplay() : this.init();
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, o.init = function () {
    var t = _dependency12.default.getData().hideUserInfo,
      e = void 0 !== t && t;
    this.addRunScoreComponent(), this.showIsDemo(), 0 == e && (e = null == _dependency3.default.getParam("hideUserInfo") ? e : Boolean(_dependency3.default.getParam("hideUserInfo"))), 1 == e && (this.userIdBtn.active = !1, this.avatarBtn.active = !1);
  }, o.initReplay = function () {
    var t = _dependency13.default.getData().betData.replayMeta,
      e = t.amount,
      n = t.avatarUrl,
      a = t.displayName,
      i = _dependency12.default.getData().hideUserInfo,
      o = void 0 !== i && i,
      r = App.storage.getItem("using_language"),
      u = _dependency1.default.getData().white,
      c = this.avatar.getComponent(_dependency2.Sprite);
    "vn" !== r || a ? this.userIdBtn.setPosition(-112, 0) : this.userIdBtn.setPosition(-82, 0), a || (a = App.getLanguage("nicknameNotSet", null, _dependency5.EBundles[_dependency5.EBundles.slotFramework])), c.loadRemoteImage({
      url: n,
      view: App.entryManager.getEntry(_dependency5.EBundles[_dependency5.EBundles.slotFramework]).gameView
    }), c.color = u.info01, this.avatarBtn.getComponent(_dependency2.Sprite).color = new _dependency2.Color(255, 214, 128, 255), this.balanceLabel.string = "" + _dependency15.CmmSlotUtils.formatNumber(e, !0), this.setUserId(a), this.setEditNickIconPos(), this.editIcon.active = !1, this.spinIdBtn.active = !1, 0 == o && (o = null == _dependency3.default.getParam("hideUserInfo") ? o : Boolean(_dependency3.default.getParam("hideUserInfo"))), 1 == o && (this.userIdBtn.active = !1, this.avatarBtn.active = !1);
  }, o.setEventTouch = function () {
    var t = this;
    this.spinIdBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      _dependency6.CmmUtils.CopyText(t.spinId.string), t.spinIdCopyHint.play(t.spinIdCopyHint.clips[0].name), dispatch(_dependency0.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency6.CmmUtils.addBtnClickEvent(this.avatarBtn, function () {
      App.uiManager.open({
        type: _dependency15.CmmSlotUtils.getOrientationTarget(_dependency16.default, _dependency17.default),
        bundle: _dependency5.EBundles[_dependency5.EBundles.slotFramework],
        zIndex: _dependency4.ViewZOrder.UI,
        name: "頭像選擇"
      }).then(function (t) {
        t.init();
      }), dispatch(_dependency0.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency6.CmmUtils.addBtnClickEvent(this.userIdBtn, function () {
      App.uiManager.open({
        type: _dependency18.default,
        bundle: _dependency5.EBundles[_dependency5.EBundles.slotFramework],
        zIndex: _dependency4.ViewZOrder.UI,
        name: "修改暱稱"
      }).then(function (t) {}), dispatch(_dependency0.SlotFrameworkEvent.PLAY_CLICK_BTM);
    });
  }, o.showIsDemo = function () {
    _dependency11.default.getData().engine.definition.isDemo && (this.isDemo.active = !0);
  }, o.addRunScoreComponent = function () {
    this.balanceLabel.addComponent(_dependency9.RunScore), this.totalWinLabel.addComponent(_dependency9.RunScore);
  }, o.setTipsLabelMarquee = function () {
    var t = this;
    this.scheduleOnce(function () {
      var e = {
        maskNode: t.userIdMask,
        labelNode: t.userId.node,
        delayTime: 1
      };
      e.labelNode.getComponent(_dependency2.UITransform).width < 150 || _dependency6.CmmUtils.labelMarquee(e);
    });
  }, o.setEditNickIconPos = function () {
    var t = this;
    this.scheduleOnce(function () {
      var e = Math.min(t.userId.getComponent(_dependency2.UITransform).width, 150);
      t.userIdMask.getComponent(_dependency2.UITransform).width = e, t.editIcon.setPosition(t.userIdMask.getComponent(_dependency2.UITransform).width + 20, 0);
    });
  }, o.setUserId = function (t) {
    this.userId.string = "" + t, this.setTipsLabelMarquee();
  }, o.setSpinId = function (t) {
    this.spinIdBtn.active = void 0 !== t && "" !== t, this.spinId.string = t;
  }, o.playBalanceAnim = function (t) {
    this.balanceLabel.string = "" + _dependency15.CmmSlotUtils.formatNumber(t, !0);
  }, o.setTotalWin = function (t) {
    this.totalWinLabel.string = "" + _dependency15.CmmSlotUtils.formatNumber(t, !0);
  }, o.setAvatar = function (t) {
    t || (t = _dependency12.default.getData().player.avatarUrl), this.avatar.getComponent(_dependency2.Sprite).loadRemoteImage({
      url: t,
      view: App.entryManager.getEntry(_dependency5.EBundles[_dependency5.EBundles.slotFramework]).gameView
    });
  }, o.playTotalWinTween = function (t, e) {
    var n = t.value,
      a = t.tweenTime,
      i = t.needComplete;
    if (n) {
      var o = {
        label: this.totalWinLabel,
        start: parseFloat(this.totalWinLabel.string.replace(/,/g, "")),
        end: n,
        tweenTime: a || 1.9,
        digital: _dependency10.default.getData().digital,
        useThousandsSeparator: !0,
        callback: i ? e : null
      };
      this.totalWinTween = _dependency15.CmmSlotUtils.tweenNum(o);
    } else {
      this.totalWinLabel.string = _dependency15.CmmSlotUtils.formatNumber(0);
      // Local transport compatibility: match the native portrait zero-completion contract.
      var localRuntime = typeof globalThis === "object" ? globalThis.globalProjectH : null;
      if (localRuntime && localRuntime.created === true && localRuntime.project === "Project-H" && typeof localRuntime.getBackend === "function") i && e && e();
    }
  }, o.quickStopTotalWin = function (t) {
    this.totalWinTween && this.totalWinTween.stop(), this.totalWinLabel.string = _dependency15.CmmSlotUtils.formatNumber(t);
  }, o.setAvatarInteractable = function (t) {
    var e = _dependency1.default.getData(),
      n = e.background,
      a = e.white;
    this.avatarBtn.getComponent(_dependency2.Button).interactable = t, this.avatar.getComponent(_dependency2.Sprite).color = t ? a.info01 : n[80];
  }, o.setEditNicknameInteractable = function (t) {
    this.userIdBtn.getComponent(_dependency2.Button).interactable = t;
  }, o.setReplayAvatar = function () {
    var t = _dependency13.default.getData().betData.replayMeta.avatarUrl,
      e = _dependency1.default.getData().white,
      n = this.avatar.getComponent(_dependency2.Sprite);
    n.loadRemoteImage({
      url: t,
      view: App.entryManager.getEntry(_dependency5.EBundles[_dependency5.EBundles.slotFramework]).gameView
    }), n.color = e.info01, this.avatarBtn.getComponent(_dependency2.Sprite).color = new _dependency2.Color(255, 214, 128, 255);
  }, o.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency0.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function (t) {
      var n = _dependency12.default.getData().player,
        a = n.displayName,
        i = n.id,
        o = n.balance,
        r = _dependency11.default.getData(),
        l = r.isResuming,
        s = r.engine,
        u = l ? s.spinId : "",
        c = a;
      c || (c = App.getLanguage("nicknameEdit", null, _dependency5.EBundles[_dependency5.EBundles.slotFramework])), e.setUserId(i ? "" + i : c), e.setSpinId(u), e.setEditNickIconPos(), e.balanceLabel.string = _dependency15.CmmSlotUtils.formatNumber(o.amount, !0), e.setTotalWin(0), e.setAvatar();
    }), this.on(_dependency0.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, function (t) {
      var n = t.data.spinId;
      e.setSpinId(n);
    }), this.on(_dependency0.SlotFrameworkEvent.UPDATE_USER_BALANCE, function (t) {
      var n = t.data.balance;
      e.playBalanceAnim(n);
    }), this.on(_dependency0.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, function (t) {
      e.playTotalWinTween(t.data, t.complete);
    }), this.on(_dependency0.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, function (t) {
      e.quickStopTotalWin(t.data);
    }), this.on(_dependency0.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE, function () {
      var t = _dependency12.default.getData().player.avatarUrl;
      e.setAvatar(t);
    }), this.on(_dependency0.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (t) {
      var n = t.data,
        a = _dependency14.ESpinStatus.SPINING === n;
      e.setAvatarInteractable(!a), e.setEditNicknameInteractable(!a), _dependency13.default.isReplay && e.setReplayAvatar();
    }), this.on(_dependency0.SlotFrameworkEvent.UPDATE_DISPLAYNAME_RESPONSE, function () {
      var t = _dependency12.default.getData().player.displayName;
      e.setUserId(t), e.setEditNickIconPos();
    });
  }, e;
}(_dependency7.default)).prototype, "spinIdBtn", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = _dependency.applyDecoratedDescriptor(Y.prototype, "spinId", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(Y.prototype, "balanceBg", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(Y.prototype, "totalWinBg", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(Y.prototype, "avatarBtn", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = _dependency.applyDecoratedDescriptor(Y.prototype, "avatar", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(Y.prototype, "userIdBtn", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(Y.prototype, "userIdMask", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = _dependency.applyDecoratedDescriptor(Y.prototype, "userId", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at = _dependency.applyDecoratedDescriptor(Y.prototype, "editIcon", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = _dependency.applyDecoratedDescriptor(Y.prototype, "spinIdCopyHint", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = _dependency.applyDecoratedDescriptor(Y.prototype, "isDemo", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), rt = _dependency.applyDecoratedDescriptor(Y.prototype, "balanceLabel", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), lt = _dependency.applyDecoratedDescriptor(Y.prototype, "totalWinLabel", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y));
_dependency2.cclegacy._RF.pop();
