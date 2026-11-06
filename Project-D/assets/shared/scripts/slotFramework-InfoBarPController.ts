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
import * as _dependency0 from "./slotFramework-SlotFrameworkData";
import * as _dependency1 from "./slotFramework-StakeModel";
import * as _dependency10 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency11 from "./slotFramework-ColorModel";
import * as _dependency12 from "./slotFramework-DefinitionModel";
import * as _dependency13 from "./slotFramework-InitialModel";
import * as _dependency14 from "./slotFramework-PlatformModel";
import * as _dependency15 from "./slotFramework-ReplayModel";
import * as _dependency16 from "./slotFramework-type2";
import * as _dependency17 from "./slotFramework-CmmSlotUtils";
import * as _dependency18 from "./slotFramework-AvatarViewL";
import * as _dependency19 from "./slotFramework-AvatarViewP";
import * as _dependency20 from "./slotFramework-NickNameView";
import * as _dependency21 from "./slotFramework-StakeBarView";
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
var e, n, a, i, o, r, l, s, u, c, d, p, f, m, b, I, g, h, v, T, A, w, S, y, L, k, C, N, B, E, D, _, M, P, U;
var W, z, R, F, O, V, x, Y, H, K, G, q, j, Q, J, X, Z, $, tt, et, nt, at, it, ot, rt, lt, st, ut, ct;
_dependency2.cclegacy._RF.push({}, "d6ba7tmYnRE8YwGv1JATXQ5", "InfoBarPController", void 0);
_publish("default", (W = _dependency8.inject("content/userInfo/content/spinIdBtn", _dependency2.Node), z = _dependency8.inject("content/userInfo/content/spinIdBtn/spinId", _dependency2.Label), R = _dependency8.inject("content/betAmount", _dependency2.Node), F = _dependency8.inject("content/betAmount/betLabel", _dependency2.Label), O = _dependency8.inject("content/userInfo/avatarBtn", _dependency2.Node), V = _dependency8.inject("content/userInfo/avatarBtn/Mask/avatar", _dependency2.Node), x = _dependency8.inject("content/userInfo/content/userIdBtn", _dependency2.Node), Y = _dependency8.inject("content/userInfo/content/userIdBtn/userIdMask", _dependency2.Node), H = _dependency8.inject("content/userInfo/content/userIdBtn/userIdMask/userId", _dependency2.Label), K = _dependency8.inject("content/userInfo/content/userIdBtn/icon", _dependency2.Node), G = _dependency8.inject("content/userInfo/content/spinIdBtn/copyHint", _dependency2.Animation), q = _dependency8.inject("content/userInfo/content/isDemo", _dependency2.Node), j = _dependency8.inject("content/balance/content/balanceLabel", _dependency2.Label), Q = _dependency8.inject("content/totalWin/content/totalWinLabel", _dependency2.Label), X = _dependency.applyDecoratedDescriptor((J = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "spinIdBtn", X, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spinId", Z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "betAmount", $, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "betAmountLabel", tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "avatarBtn", et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "avatar", nt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "userIdBtn", at, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "userIdMask", it, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "userName", ot, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "editIcon", rt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spinIdCopyHint", lt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "isDemo", st, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "balanceLabel", ut, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWinLabel", ct, _dependency.assertThisInitialized(e)), e.totalWinTween = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this), this.setEventTouch();
  }, r.start = function () {
    this.init();
  }, r.init = function () {
    this.addRunScoreComponent(), this.showIsDemo(), this.initStake();
    var t = _dependency14.default.getData().hideUserInfo,
      e = void 0 !== t && t;
    0 == e && (e = null == _dependency3.default.getParam("hideUserInfo") ? e : Boolean(_dependency3.default.getParam("hideUserInfo"))), 1 == e && (this.userIdBtn.active = !1, this.avatarBtn.active = !1);
  }, r.setStakeLabel = function (t) {
    var e = t.toString(),
      n = e.split(".")[0],
      a = e.split(".")[1],
      i = _dependency12.default.getData().digital;
    null != a ? (a = a.substring(0, i), e = i > 0 ? n + "." + a : n) : e = t >= 1e4 ? _dependency6.CmmUtils.formatNumStr(t) : "" + t, this.betAmountLabel.string = e;
  }, r.setEventTouch = function () {
    var t = this;
    this.spinIdBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      _dependency6.CmmUtils.CopyText(t.spinId.string), t.spinIdCopyHint.play(t.spinIdCopyHint.clips[0].name), dispatch(_dependency10.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency6.CmmUtils.addBtnClickEvent(this.avatarBtn, function () {
      App.uiManager.open({
        type: _dependency17.CmmSlotUtils.getOrientationTarget(_dependency18.default, _dependency19.default),
        bundle: _dependency5.EBundles[_dependency5.EBundles.slotFramework],
        zIndex: _dependency4.ViewZOrder.UI,
        name: "頭像選擇"
      }).then(function (t) {
        t.init();
      }), dispatch(_dependency10.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency6.CmmUtils.addBtnClickEvent(this.userIdBtn, function () {
      App.uiManager.open({
        type: _dependency20.default,
        bundle: _dependency5.EBundles[_dependency5.EBundles.slotFramework],
        zIndex: _dependency4.ViewZOrder.UI,
        name: "修改暱稱"
      }), dispatch(_dependency10.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency6.CmmUtils.addBtnClickEvent(this.betAmount, function () {
      t.slotData.spinStatus === _dependency16.ESpinStatus.IDLE && (App.uiManager.open({
        type: _dependency21.StakeBarView,
        bundle: _dependency5.EBundles[_dependency5.EBundles.slotFramework],
        zIndex: _dependency4.ViewZOrder.UI,
        name: "下注Bar"
      }).then(function (t) {
        t.init();
      }), dispatch(_dependency10.SlotFrameworkEvent.PLAY_CLICK_BTM));
    });
  }, r.showIsDemo = function () {
    var t, e;
    (null != (t = null == (e = _dependency13.default.getData()) ? void 0 : e.engine.definition.isDemo) ? t : _dependency12.default.getData().isDemo) && (this.isDemo.active = !0);
  }, r.addRunScoreComponent = function () {
    this.balanceLabel.addComponent(_dependency9.RunScore), this.totalWinLabel.addComponent(_dependency9.RunScore);
  }, r.setTipsLabelMarquee = function () {
    var t = this;
    this.scheduleOnce(function () {
      var e = {
        maskNode: t.userIdMask,
        labelNode: t.userName.node,
        delayTime: 1
      };
      e.labelNode.getComponent(_dependency2.UITransform).width < 150 || _dependency6.CmmUtils.labelMarquee(e);
    });
  }, r.setEditNickIconPos = function () {
    var t = this;
    this.scheduleOnce(function () {
      var e = Math.min(t.userName.getComponent(_dependency2.UITransform).width, 150);
      t.userIdMask.getComponent(_dependency2.UITransform).width = e, t.editIcon.setPosition(t.userIdMask.getComponent(_dependency2.UITransform).width + 20, 0);
    });
  }, r.setUserId = function (t) {
    this.userName.string = "" + t, this.setTipsLabelMarquee();
  }, r.setSpinId = function (t) {
    this.spinIdBtn.active = void 0 !== t && "" !== t, this.spinId.string = t;
  }, r.playBalanceAnim = function (t) {
    this.balanceLabel.string = "" + _dependency17.CmmSlotUtils.formatNumber(t, !0);
  }, r.setTotalWin = function (t) {
    this.totalWinLabel.string = "" + _dependency17.CmmSlotUtils.formatNumber(t, !0);
  }, r.setAvatar = function (t) {
    t || (t = _dependency14.default.getData().player.avatarUrl), this.avatar.getComponent(_dependency2.Sprite).loadRemoteImage({
      url: t,
      view: App.entryManager.getEntry(_dependency5.EBundles[_dependency5.EBundles.slotFramework]).gameView
    });
  }, r.playTotalWinTween = function (t, e) {
    var n = t.value,
      a = t.accValue,
      i = t.tweenTime,
      o = t.needComplete,
      r = "playTotalWinTween";
    if (_dependency2.Tween.stopAllByTag(_dependency6.CmmUtils.hashCode(r)), n) {
      var l = {
        label: this.totalWinLabel,
        start: parseFloat(this.totalWinLabel.string.replace(/,/g, "")),
        end: n,
        tweenTime: i || 1.9,
        digital: _dependency12.default.getData().digital,
        useThousandsSeparator: !0,
        tag: _dependency6.CmmUtils.hashCode(r),
        callback: o ? e : null
      };
      this.totalWinTween = _dependency17.CmmSlotUtils.tweenNum(l);
    } else if (a) {
      var s = {
        label: this.totalWinLabel,
        start: parseFloat(this.totalWinLabel.string.replace(/,/g, "")),
        end: Number(this.totalWinLabel.string.replace(/,/g, "")) + a,
        tweenTime: i || 1.9,
        digital: _dependency12.default.getData().digital,
        useThousandsSeparator: !0,
        tag: _dependency6.CmmUtils.hashCode(r),
        callback: o ? e : null
      };
      this.totalWinTween = _dependency17.CmmSlotUtils.tweenNum(s);
    } else this.totalWinTween && this.totalWinTween.stop(), this.totalWinLabel.string = _dependency17.CmmSlotUtils.formatNumber(0), o && e && e();
  }, r.quickStopTotalWin = function (t) {
    this.totalWinTween && this.totalWinTween.stop(), this.totalWinLabel.string = _dependency17.CmmSlotUtils.formatNumber(t);
  }, r.setAvatarInteractable = function (t) {
    var e = _dependency11.default.getData(),
      n = e.background,
      a = e.white;
    this.avatarBtn.getComponent(_dependency2.Button).interactable = t, this.avatar.getComponent(_dependency2.Sprite).color = t ? a.info01 : n[80];
  }, r.setBetAmountInteractable = function (t) {
    this.betAmount.getComponent(_dependency2.Button).interactable = t;
  }, r.setEditNicknameInteractable = function (t) {
    this.userIdBtn.getComponent(_dependency2.Button).interactable = t;
  }, r.initStake = function () {
    var t = _dependency1.default.stakeIndex,
      e = _dependency1.default.ratioIndex,
      n = _dependency1.default.getStakeVO({
        stakeIndex: t,
        ratioIndex: e
      });
    _dependency1.default.updateStake(n), this.setStakeLabel(_dependency1.default.totalStake);
  }, r.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency10.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function (t) {
      var n = _dependency14.default.getData().player,
        a = n.displayName,
        i = n.id,
        o = n.balance,
        r = _dependency13.default.getData().isResuming ? _dependency13.default.getData().engine.spinId : "",
        l = a;
      l || (l = App.getLanguage("nicknameEdit", null, _dependency5.EBundles[_dependency5.EBundles.slotFramework])), e.setUserId(i ? "" + i : l), e.setSpinId(r), e.setEditNickIconPos(), e.balanceLabel.string = _dependency17.CmmSlotUtils.formatNumber(o.amount, !0), e.setTotalWin(0), e.setAvatar();
    }), this.on(_dependency10.SlotFrameworkEvent.SET_DISPLAY_NAME, function (t) {
      var n = _dependency14.default.getData().player.displayName,
        a = App.getLanguage("nicknameEdit", null, _dependency5.EBundles[_dependency5.EBundles.slotFramework]);
      _dependency15.default.isReplay && (a = App.getLanguage("nicknameNotSet", null, _dependency5.EBundles[_dependency5.EBundles.slotFramework])), e.setUserId(null != n ? n : a);
    }), this.on(_dependency10.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, function (t) {
      var n = t.data.spinId;
      e.setSpinId(n);
    }), this.on(_dependency10.SlotFrameworkEvent.UPDATE_USER_BALANCE, function (t) {
      var n = t.data.balance;
      e.playBalanceAnim(n);
    }), this.on(_dependency10.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, function (t) {
      e.playTotalWinTween(t.data, t.complete);
    }), this.on(_dependency10.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, function (t) {
      e.quickStopTotalWin(t.data);
    }), this.on(_dependency10.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE, function () {
      var t = _dependency14.default.getData().player.avatarUrl;
      e.setAvatar(t);
    }), this.on(_dependency10.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (t) {
      var n = t.data,
        a = _dependency16.ESpinStatus.SPINING === n;
      e.setAvatarInteractable(!a), e.setEditNicknameInteractable(!a);
    }), this.on(_dependency10.SlotFrameworkEvent.SET_BET_AMOUNT_INTERACTABLE, function (t) {
      var n = t.data;
      e.setBetAmountInteractable(n);
    }), this.on(_dependency10.SlotFrameworkEvent.UPDATE_DISPLAYNAME_RESPONSE, function () {
      var t = _dependency14.default.getData().player.displayName;
      t || (t = App.getLanguage("nicknameNotSet", null, _dependency5.EBundles[_dependency5.EBundles.slotFramework])), e.setUserId(t), e.setEditNickIconPos();
    }), this.on(_dependency10.SlotFrameworkEvent.UPDATE_STAKE, function (t) {
      var n = _dependency1.default.getData().totalStake;
      e.setStakeLabel(n);
    });
  }, _dependency.createClass(e, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), e;
}(_dependency7.default)).prototype, "spinIdBtn", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = _dependency.applyDecoratedDescriptor(J.prototype, "spinId", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = _dependency.applyDecoratedDescriptor(J.prototype, "betAmount", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(J.prototype, "betAmountLabel", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(J.prototype, "avatarBtn", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = _dependency.applyDecoratedDescriptor(J.prototype, "avatar", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at = _dependency.applyDecoratedDescriptor(J.prototype, "userIdBtn", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = _dependency.applyDecoratedDescriptor(J.prototype, "userIdMask", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = _dependency.applyDecoratedDescriptor(J.prototype, "userName", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), rt = _dependency.applyDecoratedDescriptor(J.prototype, "editIcon", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), lt = _dependency.applyDecoratedDescriptor(J.prototype, "spinIdCopyHint", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), st = _dependency.applyDecoratedDescriptor(J.prototype, "isDemo", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ut = _dependency.applyDecoratedDescriptor(J.prototype, "balanceLabel", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ct = _dependency.applyDecoratedDescriptor(J.prototype, "totalWinLabel", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J));
_dependency2.cclegacy._RF.pop();
