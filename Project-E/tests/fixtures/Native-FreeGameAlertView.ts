// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1012-GameConfigModel";
import * as _dependency6 from "./g1012-GameData";
import * as _dependency7 from "./g1012-GameEvent";
import * as _dependency8 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency0 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency1 from "../../shared/scripts/main-ReelDataSetting";
import * as _dependency10 from "../../shared/scripts/main-CmmUtils";
import * as _dependency11 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency12 from "./g1012-ThisProjectUtils";
import * as _dependency13 from "./g1012-types";
import * as _dependency14 from "../../shared/scripts/slotFramework-UrlModel";
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
var e, i, n, r, a, o, l, s, u, c, p, h, f, d, T, m, S, E, g, _, b, A, I, w, C, y, D, R, G, N, k, x, B, F, M, v;
var L, O, z, U, P, H, X, K, V, W, j, Y, q, Q, J, Z, $, tt, et, it, nt, rt, at, ot, lt, st, ut, ct, pt, ht, ft, dt, Tt, mt, St, Et, gt, _t, bt, At, It, wt, Ct, yt, Dt, Rt;
_dependency2.cclegacy._RF.push({}, "fc716pADP5P3pHYRcO2qcWb", "FreeGameAlertView", void 0);
var Gt,
  Nt,
  kt = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.START_FREE_GAME = 1] = "START_FREE_GAME", t[t.START_FREE_GAME_END = 2] = "START_FREE_GAME_END", t[t.RUN_SCORE = 3] = "RUN_SCORE", t[t.RUN_SCORE_END = 4] = "RUN_SCORE_END", t[t.FINISH_FREE_GAME_START = 5] = "FINISH_FREE_GAME_START", t[t.FINISH_FREE_GAME = 6] = "FINISH_FREE_GAME", t[t.FINISH_FREE_GAME_END = 7] = "FINISH_FREE_GAME_END";
}(Gt || (Gt = {})), function (t) {
  t.LOOP = "T_transitions_loop", t.OUT = "T_transitions_out";
}(Nt || (Nt = {}));
_publish("FreeGameAlertView", (L = kt("FreeGameAlertView"), O = _dependency4.inject("alert", _dependency2.Node), z = _dependency4.inject("alert/selectAlert", _dependency2.Node), U = _dependency4.inject("alert/selectAlert/selectSpine", _dependency2.sp.Skeleton), P = _dependency4.inject("alert/selectAlert/selectSpine/1/odds/oddsText", _dependency2.Label), H = _dependency4.inject("alert/selectAlert/selectSpine/2/odds/oddsText", _dependency2.Label), X = _dependency4.inject("alert/selectAlert/selectSpine/3/odds/oddsText", _dependency2.Label), K = _dependency4.inject("alert/selectAlert/titleBar/freeTick", _dependency2.Label), V = _dependency4.inject("alert/selectAlert/titleBar/titleImageText01", _dependency2.Sprite), W = _dependency4.inject("alert/selectAlert/titleBar/titleImageText02", _dependency2.Sprite), j = _dependency4.inject("alert/selectAlert/selectBar/okButton", _dependency2.Node), Y = _dependency4.inject("alert/selectAlert/selectBar/okButton/Text", _dependency2.Sprite), q = _dependency4.inject("alert/selectAlert/selectBar/arrowLButton", _dependency2.Node), Q = _dependency4.inject("alert/selectAlert/selectBar/arrowRButton", _dependency2.Node), J = _dependency4.inject("alert/selectAlert/bottomBar/secText", _dependency2.Label), Z = _dependency4.inject("alert/selectAlert/bottomBar/imageText", _dependency2.Sprite), $ = _dependency4.inject("alert/selectAlert/bottomBar", _dependency2.Node), tt = _dependency4.inject("alert/fgEndAlert", _dependency2.Node), et = _dependency4.inject("alert/fgEndAlert/exitButton", _dependency2.Node), it = _dependency4.inject("alert/fgEndAlert/exitButton/Text", _dependency2.Sprite), nt = _dependency4.inject("alert/fgEndAlert/winScore", _dependency2.Label), rt = _dependency4.inject("alert/backgroundSpine", _dependency2.sp.Skeleton), L(((Rt = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", lt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "selectAlert", st, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "selectSpine", ut, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "odds_01", ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "odds_02", pt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "odds_03", ht, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "freeTick", ft, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "titleImageText01", dt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "titleImageText02", Tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "okButton", mt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "okButtonText", St, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "arrowLButton", Et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "arrowRButton", gt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "secText", _t, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "imageText", bt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bottomBar", At, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgEndAlert", It, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "exitButton", wt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "exitButtonText", Ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "winScore", yt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "backgroundSpine", Dt, _dependency.assertThisInitialized(e)), e.selectIndex = 1, e.isSelected = !1, e.countDownTime = 0, e.isRunningCountDownTime = !1, e.finishFGCallback = null, e.freeGameAlertStatus = Gt.NONE, e.isTouchClose = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.update = function (t) {
    this.isRunningCountDownTime && (this.countDownTime -= t, this.countDownTime <= 0 ? (this.countDownTime = 0, this.updateCountDownTimeText(), this.onTimeUp()) : this.updateCountDownTimeText());
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/FGAlertView";
  }, s.init = function () {
    this.enabledKeyDown = !0, this.setData(), this.setEventTouch(), _dependency11.default.isReplay && (this.okButton.getComponent(_dependency2.Button).interactable = !1, this.bottomBar.active = !1, this.exitButton.getComponent(_dependency2.Button).interactable = !1, this.arrowLButton.getComponent(_dependency2.Button).interactable = !1, this.arrowRButton.getComponent(_dependency2.Button).interactable = !1);
  }, s.setEventTouch = function () {
    var t = this;
    this.onI(_dependency2.Input.EventType.KEY_DOWN, function (i) {
      var n = i.keyCode;
      App.uiManager.isShow(e) && n === _dependency2.KeyCode.SPACE && (t.freeGameAlertStatus === Gt.START_FREE_GAME && 0 == t.isSelected ? (t.isSelected = !0, t.isRunningCountDownTime = !1, t.okButton.getComponent(_dependency2.Button).enabled = !1, t.playSelectItemAnim()) : t.freeGameAlertStatus === Gt.FINISH_FREE_GAME_START && t.finishFreeGame());
    }), this.arrowLButton.on(_dependency2.Input.EventType.TOUCH_END, function () {
      App.uiManager.isShow(e) && (_dependency11.default.isReplay || t.isSelected || (t.selectIndex--, t.selectIndex < e.MIN_SELECT_INDEX && (t.selectIndex = e.MAX_SELECT_INDEX), t.playSwitchItemAnim()));
    }), this.arrowRButton.on(_dependency2.Input.EventType.TOUCH_END, function () {
      _dependency11.default.isReplay || App.uiManager.isShow(e) && (t.isSelected || (t.selectIndex++, t.selectIndex > e.MAX_SELECT_INDEX && (t.selectIndex = e.MIN_SELECT_INDEX), t.playSwitchItemAnim()));
    }), this.okButton.on(_dependency2.Input.EventType.TOUCH_END, function () {
      _dependency11.default.isReplay || App.uiManager.isShow(e) && (t.isSelected || (t.isSelected = !0, t.isRunningCountDownTime = !1, t.okButton.getComponent(_dependency2.Button).interactable = !1, t.playSelectItemAnim()));
    }), this.exitButton.on(_dependency2.Input.EventType.TOUCH_END, function () {
      App.uiManager.isShow(e) && (t.isTouchClose || (t.isTouchClose = !0, t.isSelected = !1, t.isRunningCountDownTime = !1, t.exitButton.getComponent(_dependency2.Button).interactable = !1, null !== t.finishFGCallback && t.finishFGCallback()));
    });
  }, s.setData = function () {
    var t = _dependency5.default.getData().filePaths.localeSpriteFrame;
    this.titleImageText01.spriteFrame = _dependency0.LoadUtils.getDirSp(this.bundle, t, "T_title_01"), this.titleImageText02.spriteFrame = _dependency0.LoadUtils.getDirSp(this.bundle, t, "T_title_02"), this.okButtonText.spriteFrame = _dependency0.LoadUtils.getDirSp(this.bundle, t, "T_btn_01_font"), this.imageText.spriteFrame = _dependency0.LoadUtils.getDirSp(this.bundle, t, "T_font_02"), this.exitButtonText.spriteFrame = _dependency0.LoadUtils.getDirSp(this.bundle, t, "T_btn_02_font");
    var e = _dependency14.default.getLanguageParam();
    Log.e("currentLanguage::::::::::::", e), "vn" === e ? (this.freeTick.node.setPosition(-260, 0), this.freeTick.fontSize = 64) : "zh-tw" === e || "zh-cn" === e ? (this.freeTick.node.setPosition(-40, 22), this.freeTick.fontSize = 92) : "tr" === e ? (this.freeTick.node.setPosition(-125, 33), this.freeTick.fontSize = 92) : "th" === e ? (this.freeTick.node.setPosition(275, 33), this.freeTick.fontSize = 92) : "en" === e ? (this.freeTick.node.setPosition(35, -5), this.freeTick.fontSize = 72) : (this.freeTick.node.setPosition(-55, 22), this.freeTick.fontSize = 92);
  }, s.startFreeGame = function () {
    var t = this;
    this.freeGameAlertStatus !== Gt.START_FREE_GAME_END && (this.freeGameAlertStatus = Gt.START_FREE_GAME_END, this.data.originTurbo = _dependency5.default.isTurbo, _dependency5.default.setIsTurbo(!1, !1), _dependency1.ReelDataSettingObj.setSpeedIndex(0), dispatch(_dependency7.GameEvent.START_EXTENSION_SCHEDULE), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: {
        url: _dependency5.EBTM.TRANSITIONS,
        loop: !0
      }
    }), this.fadeOutTween(this.alert, function () {
      dispatch(_dependency7.GameEvent.PLAY_BGM, {
        data: _dependency5.EBGM.FREEGAME
      }), t.data.currentGameType = _dependency13.EGameType.FREE_GAME, dispatch(_dependency7.GameEvent.CHANGE_GAME_STYLE, {
        data: !1
      }), dispatch(_dependency7.GameEvent.CLICK_START_FREE_GAME), t.close();
    }));
  }, s.finishFreeGame = function () {
    this.freeGameAlertStatus = Gt.FINISH_FREE_GAME, _dependency5.default.stopOnFg && (_dependency8.default.active = !1), _dependency5.default.setIsTurbo(this.data.originTurbo, !1), dispatch(_dependency7.GameEvent.KILL_EXTENSION_SCHEDULE), this.unschedule(this.finishFreeGame), this.close();
  }, s.close = function () {
    this.unscheduleAllCallbacks(), t.prototype.close.call(this);
  }, s.fadeOutTween = function (t, e) {
    var i = t.getComponent(_dependency2.UIOpacity);
    i.opacity = 255, _dependency2.tween(i).bindNodeState(false).to(.4, {
      opacity: 0
    }, {
      onComplete: function () {
        t.active = !1, e && e();
      }
    }).start();
  }, s.showIntroAlert = function () {
    var t = this,
      i = this.data.getData().gameState,
      n = this.data.getData().parser.currentGameState;
    Log.e("currentGameState:::::", this.data.getData().parser.currentGameState);
    var r = _dependency5.default.getData(),
      a = (r.autoCloseTime, r.filePaths.alertBgSpineDir);
    this.backgroundSpine && (this.backgroundSpine.skeletonData = _dependency0.LoadUtils.getDirSkeleton(this.data.module, a, "T_board"));
    var o = _dependency11.default.isReplay;
    this.alert.active = !0, this.selectAlert.active = !0, this.fgEndAlert.active = !1, this.odds_01.node.active = !1, this.odds_02.node.active = !1, this.odds_03.node.active = !1, this.countDownTime = e.BEGIN_TIME, this.freeTick.string = "" + i[0].freeSpinWon, this.updateCountDownTimeText(), o && (this.freeTick.string = "" + n.freeSpinWon, this.okButton.active = !0, this.okButton.getComponent(_dependency2.Button).interactable = !1, this.scheduleOnce(this.playSelectItemAnim, 2)), this.scheduleOnce(function () {
      t.freeGameAlertStatus = Gt.START_FREE_GAME, t.startCountdown();
    }, .5), this.backgroundSpine && (this.backgroundSpine.setAnimation(0, Nt.LOOP, !0), this.backgroundSpine.setCompleteListener(function () {
      t.backgroundSpine.setCompleteListener(null);
    }));
  }, s.showSummaryAlert = function () {
    var t = this,
      e = this.data.getData().parser.currentGameState.totalWinnings,
      i = _dependency5.default.getData(),
      n = (i.autoCloseTime, i.filePaths.alertBgSpineDir);
    this.backgroundSpine && (this.backgroundSpine.skeletonData = _dependency0.LoadUtils.getDirSkeleton(this.data.module, n, "T_board")), _dependency11.default.isReplay && (this.exitButton.getComponent(_dependency2.Button).interactable = !1), this.alert.active = !0, this.selectAlert.active = !1, this.fgEndAlert.active = !0, this.finishFGCallback = function () {
      t.finishFreeGame(), t.unschedule(t.finishFGCallback), dispatch(_dependency7.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: 0
      }), dispatch(_dependency7.GameEvent.STOP_BTM, {
        data: {
          url: _dependency5.EBTM.TRANSITIONS
        }
      });
    }, this.scheduleOnce(this.finishFGCallback, 5), this.freeGameAlertStatus = Gt.FINISH_FREE_GAME_START, this.winScore.string = _dependency9.CmmSlotUtils.formatNumber(e), this.backgroundSpine && (this.backgroundSpine.setAnimation(0, Nt.OUT, !1), this.backgroundSpine.setCompleteListener(function () {
      t.backgroundSpine.setCompleteListener(null);
    }));
  }, s.directShowResult = function () {
    this.freeGameAlertStatus = Gt.RUN_SCORE_END, _dependency2.Tween.stopAllByTag(_dependency10.CmmUtils.hashCode("summaryTween"));
    var t = this.data.getData().gameState,
      e = t[t.length - 1].totalWinnings;
    this.winScore.string = _dependency9.CmmSlotUtils.formatNumber(e);
  }, s.playSwitchItemAnim = function () {
    var t = this,
      e = "tease_0" + this.selectIndex,
      i = "loop_0" + this.selectIndex;
    _dependency12.ThisProjectUtils.playSpineAnimation(this.selectSpine, e, !1, function () {
      _dependency12.ThisProjectUtils.playSpineAnimation(t.selectSpine, i, !0);
    });
  }, s.playSelectItemAnim = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e,
        i,
        n,
        r,
        a,
        o,
        s,
        u,
        c,
        p = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            for (e = "start_0" + this.selectIndex, i = [4, 6, 8], Log.e("currentGameState:::::::", this.data.getData().parser.currentGameState), n = this.data.getData().parser.currentGameState.selectFgMultiple, Log.e("selectFgMultiple::::", n), r = i.filter(function (t) {
              return t !== n;
            }), a = r.length - 1; a > 0; a--) o = Math.floor(Math.random() * (a + 1)), s = [r[o], r[a]], r[a] = s[0], r[o] = s[1];
            return u = [this.odds_01, this.odds_02, this.odds_03], c = 0, u.forEach(function (t, e) {
              var i = c,
                a = t;
              if (p.selectIndex === e + 1) {
                var o = n;
                a.string = "x" + o;
              } else {
                var l = r[i];
                a.string = "x" + l, c += 1;
              }
            }), this.odds_01.node.active = !0, this.odds_02.node.active = !0, this.odds_03.node.active = !0, dispatch(_dependency7.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency5.EBTM.TRANSITION_ITEM_CLICK
              }
            }), t.next = 16, _dependency12.ThisProjectUtils.playSpineAnimationPromise(this.selectSpine, e);
          case 16:
            return t.next = 18, _dependency12.delay(1);
          case 18:
            this.startFreeGame();
          case 19:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), s.startCountdown = function () {
    this.countDownTime = e.BEGIN_TIME, this.updateCountDownTimeText(), this.isRunningCountDownTime = !0;
  }, s.updateCountDownTimeText = function () {
    this.secText.string = Math.ceil(this.countDownTime).toString();
  }, s.onTimeUp = function () {
    this.isSelected || (this.isSelected = !0, this.isRunningCountDownTime = !1, this.playSelectItemAnim());
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }, {
    key: "closeAction",
    get: function () {
      var t = this;
      return this.freeGameAlertStatus === Gt.FINISH_FREE_GAME ? function (e) {
        App.utils.fadeOutView(t.node, function () {
          dispatch(_dependency7.GameEvent.CLICK_FINISH_FREE_GAME), e();
        });
      } : null;
    }
  }, {
    key: "showAction",
    get: function () {
      return _dependency10.CmmUtils.fadeInTween(this.node, .5), null;
    }
  }]), e;
}(_dependency3.default)).MAX_SELECT_INDEX = 3, Rt.MIN_SELECT_INDEX = 1, Rt.BEGIN_TIME = 10, lt = _dependency.applyDecoratedDescriptor((ot = Rt).prototype, "alert", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), st = _dependency.applyDecoratedDescriptor(ot.prototype, "selectAlert", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ut = _dependency.applyDecoratedDescriptor(ot.prototype, "selectSpine", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ct = _dependency.applyDecoratedDescriptor(ot.prototype, "odds_01", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), pt = _dependency.applyDecoratedDescriptor(ot.prototype, "odds_02", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ht = _dependency.applyDecoratedDescriptor(ot.prototype, "odds_03", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = _dependency.applyDecoratedDescriptor(ot.prototype, "freeTick", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), dt = _dependency.applyDecoratedDescriptor(ot.prototype, "titleImageText01", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Tt = _dependency.applyDecoratedDescriptor(ot.prototype, "titleImageText02", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = _dependency.applyDecoratedDescriptor(ot.prototype, "okButton", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), St = _dependency.applyDecoratedDescriptor(ot.prototype, "okButtonText", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Et = _dependency.applyDecoratedDescriptor(ot.prototype, "arrowLButton", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gt = _dependency.applyDecoratedDescriptor(ot.prototype, "arrowRButton", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _t = _dependency.applyDecoratedDescriptor(ot.prototype, "secText", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), bt = _dependency.applyDecoratedDescriptor(ot.prototype, "imageText", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), At = _dependency.applyDecoratedDescriptor(ot.prototype, "bottomBar", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), It = _dependency.applyDecoratedDescriptor(ot.prototype, "fgEndAlert", [tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), wt = _dependency.applyDecoratedDescriptor(ot.prototype, "exitButton", [et], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ct = _dependency.applyDecoratedDescriptor(ot.prototype, "exitButtonText", [it], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), yt = _dependency.applyDecoratedDescriptor(ot.prototype, "winScore", [nt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Dt = _dependency.applyDecoratedDescriptor(ot.prototype, "backgroundSpine", [rt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at = ot)) || at));
_dependency2.cclegacy._RF.pop();
