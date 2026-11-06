// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency5 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency7 from "../../shared/scripts/slotFramework-type2";
import * as _dependency8 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency9 from "../../shared/scripts/main-Bundles";
import * as _dependency0 from "../../shared/scripts/slotFramework-InitialModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-ColorModel";
import * as _dependency10 from "../../shared/scripts/main-CmmUtils";
import * as _dependency11 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-RunScore";
import * as _dependency13 from "../../shared/scripts/slotFramework-StakeBarView";
import * as _dependency14 from "../../shared/scripts/main-Config";
import * as _dependency15 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency16 from "../../shared/scripts/slotFramework-AvatarViewL";
import * as _dependency17 from "../../shared/scripts/slotFramework-AvatarViewP";
import * as _dependency18 from "../../shared/scripts/slotFramework-NickNameView";
import * as _dependency19 from "./g1004-GameEvent";
import * as _dependency20 from "./g1004-types";
import * as _dependency21 from "../../shared/scripts/main-UrlUtils";
var _export;
export { _export as InfoBarPView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "InfoBarPView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, a, i, o, r, l, s, u, c, p, f, d, b, m, h, I, g, y, E, T, A, v, S, _, w, N, C, L, D, B, P, k, U, M, W, R, z;
var G, O, F, V, K, Y, H, x, q, Q, j, J, Z, X, $, tt, et, nt, at, it, ot, rt, lt, st, ut, ct, pt, ft, dt, bt, mt, ht, It, gt, yt, Et, Tt, At, vt, St, _t, wt, Nt;
_dependency2.cclegacy._RF.push({}, "cb9eeTkDkFCJbbAx9VyRdQc", "InfoBarPView", void 0);
var Ct = _dependency2._decorator.ccclass,
  Lt = _dependency2._decorator.property;
_publish("InfoBarPView", (G = Ct("InfoBarPView"), O = Lt({
  type: _dependency2.Node
}), F = Lt({
  type: _dependency2.Node
}), V = Lt({
  type: _dependency2.Node
}), K = Lt({
  type: _dependency2.Node
}), Y = Lt({
  type: _dependency2.Label
}), H = Lt({
  type: _dependency2.Node
}), x = Lt({
  type: _dependency2.Label
}), q = Lt({
  type: _dependency2.Node
}), Q = Lt({
  type: _dependency2.Node
}), j = Lt({
  type: _dependency2.Node
}), J = Lt({
  type: _dependency2.Node
}), Z = Lt({
  type: _dependency2.Node
}), X = Lt({
  type: _dependency2.Node
}), $ = Lt({
  type: _dependency2.Node
}), tt = Lt({
  type: _dependency2.Label
}), et = Lt({
  type: _dependency2.Node
}), nt = Lt({
  type: _dependency2.Animation
}), at = Lt({
  type: _dependency2.Node
}), it = Lt({
  type: _dependency2.Label
}), ot = Lt({
  type: _dependency2.Label
}), G((st = _dependency.applyDecoratedDescriptor((lt = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "ndPlayerInfo", st, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndBetInfo", ut, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndBetBarBG", ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spinIdBtn", pt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spinId", ft, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "betAmount", dt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "betAmountLabel", bt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWin", mt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "balanceContent", ht, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWinContent", It, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "avatarBtn", gt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "avatar", yt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "userIdBtn", Et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "userIdMask", Tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "userId", At, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "editIcon", vt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spinIdCopyHint", St, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "isDemo", _t, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "balanceLabel", wt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWinLabel", Nt, _dependency.assertThisInitialized(e)), e.totalWinTween = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this), this.setEventTouch();
  }, s.start = function () {
    var t = this;
    this.on(_dependency19.GameEvent.PARSER_INIT_COMPLETED, _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            t.init();
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    })));
  }, s.init = function () {
    this.addRunScoreComponent(), this.showIsDemo(), this.initStake();
    var t = _dependency6.default.getData().hideUserInfo,
      e = void 0 !== t && t;
    0 == e && (e = null == _dependency21.default.getParam("hideUserInfo") ? e : Boolean(_dependency21.default.getParam("hideUserInfo"))), 1 == e && (this.userIdBtn.active = !1, this.avatarBtn.active = !1);
  }, s.setStakeLabel = function (t) {
    var e = t.toString(),
      n = e.split(".")[0],
      a = e.split(".")[1],
      i = _dependency11.default.getData().digital;
    null != a ? (a = a.substring(0, i), e = i > 0 ? n + "." + a : n) : e = t >= 1e4 ? _dependency10.CmmUtils.formatNumStr(t) : "" + t, this.betAmountLabel.string = e;
  }, s.setEventTouch = function () {
    var t = this;
    this.spinIdBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      _dependency10.CmmUtils.CopyText(t.spinId.string), t.spinIdCopyHint.play(t.spinIdCopyHint.clips[0].name), dispatch(_dependency4.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency10.CmmUtils.addBtnClickEvent(this.avatarBtn, function () {
      App.uiManager.open({
        type: _dependency8.CmmSlotUtils.getOrientationTarget(_dependency16.default, _dependency17.default),
        bundle: _dependency9.EBundles[_dependency9.EBundles.slotFramework],
        zIndex: _dependency14.ViewZOrder.UI,
        name: "頭像選擇"
      }).then(function (t) {
        t.init();
      }), dispatch(_dependency4.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency10.CmmUtils.addBtnClickEvent(this.userIdBtn, function () {
      App.uiManager.open({
        type: _dependency18.default,
        bundle: _dependency9.EBundles[_dependency9.EBundles.slotFramework],
        zIndex: _dependency14.ViewZOrder.UI,
        name: "修改暱稱"
      }), dispatch(_dependency4.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency10.CmmUtils.addBtnClickEvent(this.betAmount, function () {
      t.slotData.spinStatus === _dependency7.ESpinStatus.IDLE && (App.uiManager.open({
        type: _dependency13.StakeBarView,
        bundle: _dependency9.EBundles[_dependency9.EBundles.slotFramework],
        zIndex: _dependency14.ViewZOrder.UI,
        name: "下注Bar"
      }).then(function (t) {
        t.init();
      }), dispatch(_dependency4.SlotFrameworkEvent.PLAY_CLICK_BTM));
    });
  }, s.showIsDemo = function () {
    var t, e;
    (null != (t = null == (e = _dependency0.default.getData()) ? void 0 : e.engine.definition.isDemo) ? t : _dependency11.default.getData().isDemo) && (this.isDemo.active = !0);
  }, s.addRunScoreComponent = function () {
    this.balanceLabel.addComponent(_dependency12.RunScore), this.totalWinLabel.addComponent(_dependency12.RunScore);
  }, s.setTipsLabelMarquee = function () {
    var t = this;
    this.scheduleOnce(function () {
      var e = {
        maskNode: t.userIdMask,
        labelNode: t.userId.node,
        delayTime: 1
      };
      e.labelNode.getComponent(_dependency2.UITransform).width < 150 || _dependency10.CmmUtils.labelMarquee(e);
    });
  }, s.setEditNickIconPos = function () {
    var t = this;
    this.scheduleOnce(function () {
      var e = Math.min(t.userId.getComponent(_dependency2.UITransform).width, 150);
      t.userIdMask.getComponent(_dependency2.UITransform).width = e, t.editIcon.setPosition(t.userIdMask.getComponent(_dependency2.UITransform).width + 20, 0);
    });
  }, s.setUserId = function (t) {
    this.userId.string = "" + t, this.setTipsLabelMarquee();
  }, s.setSpinId = function (t) {
    this.spinIdBtn.active = "" !== t, this.spinId.string = t;
  }, s.playBalanceAnim = function (t) {
    this.balanceLabel.string = "" + _dependency8.CmmSlotUtils.formatNumber(t, !0);
  }, s.setTotalWin = function (t) {
    this.totalWinLabel.string = "" + _dependency8.CmmSlotUtils.formatNumber(t, !0);
  }, s.showUserName = function (t) {
    this.userIdBtn.active = t;
  }, s.setAvatar = function (t) {
    t || (t = _dependency6.default.getData().player.avatarUrl), this.avatar.getComponent(_dependency2.Sprite).loadRemoteImage({
      url: t,
      view: App.entryManager.getEntry(_dependency9.EBundles[_dependency9.EBundles.slotFramework]).gameView
    });
  }, s.playTotalWinTween = function (t, e) {
    var n = "playTotalWinTween";
    _dependency2.Tween.stopAllByTag(_dependency10.CmmUtils.hashCode(n));
    var a = t.value,
      i = t.accValue,
      o = t.tweenTime,
      r = t.needComplete;
    if (a) {
      var l = {
        label: this.totalWinLabel,
        start: parseFloat(this.totalWinLabel.string.replace(/,/g, "")),
        end: a,
        tweenTime: o || 1.9,
        digital: _dependency11.default.getData().digital,
        useThousandsSeparator: !0,
        tag: _dependency10.CmmUtils.hashCode(n),
        callback: r ? e : null
      };
      this.totalWinTween = _dependency8.CmmSlotUtils.tweenNum(l);
    } else if (i) {
      var s = {
        label: this.totalWinLabel,
        start: parseFloat(this.totalWinLabel.string.replace(/,/g, "")),
        end: Number(this.totalWinLabel.string.replace(/,/g, "")) + i,
        tweenTime: o || 1.9,
        digital: _dependency11.default.getData().digital,
        useThousandsSeparator: !0,
        tag: _dependency10.CmmUtils.hashCode(n),
        callback: r ? e : null
      };
      this.totalWinTween = _dependency8.CmmSlotUtils.tweenNum(s);
    } else this.totalWinTween && this.totalWinTween.stop(), this.totalWinLabel.string = _dependency8.CmmSlotUtils.formatNumber(0), r && e && e();
  }, s.quickStopTotalWin = function (t) {
    this.totalWinTween && this.totalWinTween.stop(), this.totalWinLabel.string = _dependency8.CmmSlotUtils.formatNumber(t);
  }, s.setAvatarInteractable = function (t) {
    var e = _dependency1.default.getData(),
      n = e.background,
      a = e.white;
    this.avatarBtn.getComponent(_dependency2.Button).interactable = t, this.avatar.getComponent(_dependency2.Sprite).color = t ? a.info01 : n[80];
  }, s.setEditNickanmeInteractable = function (t) {
    this.userIdBtn.getComponent(_dependency2.Button).interactable = t;
  }, s.initStake = function () {
    this.setStakeLabel(_dependency5.default.totalStake);
  }, s.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency4.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function (t) {
      var n = _dependency6.default.getData().player,
        a = n.displayName,
        i = n.id,
        o = n.balance,
        r = _dependency0.default.getData().isResuming ? _dependency0.default.getData().engine.spinId : "",
        l = a;
      l || (l = App.getLanguage("nicknameEdit", null, _dependency9.EBundles[_dependency9.EBundles.slotFramework])), e.setUserId(i ? "" + i : l), e.setSpinId(r), e.setEditNickIconPos(), e.balanceLabel.string = _dependency8.CmmSlotUtils.formatNumber(o.amount, !0), e.setTotalWin(0), e.setAvatar();
    }), this.on(_dependency4.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, function (t) {
      var n = t.data.spinId;
      e.setSpinId(n);
    }), this.on(_dependency4.SlotFrameworkEvent.UPDATE_USER_BALANCE, function (t) {
      var n = t.data.balance;
      e.playBalanceAnim(n);
    }), this.on(_dependency4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, function (t) {
      e.playTotalWinTween(t.data, t.complete);
    }), this.on(_dependency4.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, function (t) {
      e.quickStopTotalWin(t.data);
    }), this.on(_dependency4.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE, function () {
      var t = _dependency6.default.getData().player.avatarUrl;
      e.setAvatar(t);
    }), this.on(_dependency4.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (t) {
      var n = t.data,
        a = _dependency7.ESpinStatus.SPINING === n;
      e.setAvatarInteractable(!a), e.setEditNickanmeInteractable(!a);
    }), this.on(_dependency4.SlotFrameworkEvent.UPDATE_DISPLAYNAME_RESPONSE, function () {
      var t = _dependency6.default.getData().player.displayName;
      e.setUserId(t), e.setEditNickIconPos();
    }), this.on(_dependency4.SlotFrameworkEvent.UPDATE_STAKE, function (t) {
      var n = _dependency5.default.getData().totalStake;
      e.setStakeLabel(n);
    }), this.on(_dependency19.GameEvent.CHANGE_GAME_STYLE, function (t) {
      switch (t.data) {
        case _dependency20.EGameType.MAIN_GAME:
          e.ndBetBarBG.active = !1, e.ndBetInfo.y = 5, e.ndPlayerInfo.y = 0;
          break;
        case _dependency20.EGameType.FREE_GAME:
          e.ndBetBarBG.active = !0, e.ndBetInfo.y = -256, e.ndPlayerInfo.y = 62;
      }
    }), this.on(_dependency4.SlotFrameworkEvent.SET_DISPLAY_NAME, function (t) {
      var n = _dependency6.default.getData().player.displayName,
        a = App.getLanguage("nicknameEdit", null, _dependency9.EBundles[_dependency9.EBundles.slotFramework]);
      e.setUserId(null != n ? n : a);
    });
  }, s.removeEvents = function () {
    this.off(_dependency4.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN), this.off(_dependency4.SlotFrameworkEvent.UPDATE_USER_SPIN_ID), this.off(_dependency4.SlotFrameworkEvent.UPDATE_USER_BALANCE), this.off(_dependency4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS), this.off(_dependency4.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS), this.off(_dependency4.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE), this.off(_dependency4.SlotFrameworkEvent.UPDATE_SPIN_STATUS), this.off(_dependency4.SlotFrameworkEvent.UPDATE_DISPLAYNAME_RESPONSE), this.off(_dependency4.SlotFrameworkEvent.UPDATE_STAKE), this.off(_dependency4.SlotFrameworkEvent.SET_DISPLAY_NAME), this.off(_dependency19.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency19.GameEvent.PARSER_INIT_COMPLETED);
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this), this.removeEvents();
  }, _dependency.createClass(e, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency15.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "ndPlayerInfo", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ut = _dependency.applyDecoratedDescriptor(lt.prototype, "ndBetInfo", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ct = _dependency.applyDecoratedDescriptor(lt.prototype, "ndBetBarBG", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), pt = _dependency.applyDecoratedDescriptor(lt.prototype, "spinIdBtn", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = _dependency.applyDecoratedDescriptor(lt.prototype, "spinId", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), dt = _dependency.applyDecoratedDescriptor(lt.prototype, "betAmount", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), bt = _dependency.applyDecoratedDescriptor(lt.prototype, "betAmountLabel", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = _dependency.applyDecoratedDescriptor(lt.prototype, "totalWin", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ht = _dependency.applyDecoratedDescriptor(lt.prototype, "balanceContent", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), It = _dependency.applyDecoratedDescriptor(lt.prototype, "totalWinContent", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gt = _dependency.applyDecoratedDescriptor(lt.prototype, "avatarBtn", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), yt = _dependency.applyDecoratedDescriptor(lt.prototype, "avatar", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Et = _dependency.applyDecoratedDescriptor(lt.prototype, "userIdBtn", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Tt = _dependency.applyDecoratedDescriptor(lt.prototype, "userIdMask", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), At = _dependency.applyDecoratedDescriptor(lt.prototype, "userId", [tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), vt = _dependency.applyDecoratedDescriptor(lt.prototype, "editIcon", [et], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), St = _dependency.applyDecoratedDescriptor(lt.prototype, "spinIdCopyHint", [nt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _t = _dependency.applyDecoratedDescriptor(lt.prototype, "isDemo", [at], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), wt = _dependency.applyDecoratedDescriptor(lt.prototype, "balanceLabel", [it], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Nt = _dependency.applyDecoratedDescriptor(lt.prototype, "totalWinLabel", [ot], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), rt = lt)) || rt));
_dependency2.cclegacy._RF.pop();
