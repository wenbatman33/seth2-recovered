// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-CmmUtils";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency7 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency8 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency9 from "./g1011-GameConfigModel";
import * as _dependency0 from "./g1011-GameData";
import * as _dependency1 from "./g1011-GameEvent";
import * as _dependency10 from "./g1011-types";
import * as _dependency11 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency12 from "../../shared/scripts/main-ReelDataSetting";
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
var e, i, n, a, s, r, o, l, c, u, f, h, _, E, p, A, d, m, T, G, b, g, F, S, C, I, D, N;
var y, M, B, O, R, v, L, w, H, k, P, U, z, V, x, K;
_dependency2.cclegacy._RF.push({}, "fc716pADP5P3pHYRcO2qcWb", "FreeGameAlertView", void 0);
var W,
  Y = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.START_FREE_GAME = 1] = "START_FREE_GAME", t[t.START_FREE_GAME_END = 2] = "START_FREE_GAME_END", t[t.FINISH_FREE_GAME = 3] = "FINISH_FREE_GAME", t[t.FINISH_FREE_GAME_END = 4] = "FINISH_FREE_GAME_END";
}(W || (W = {}));
_publish("FreeGameAlertView", (y = Y("FreeGameAlertView"), M = _dependency5.inject("alert", _dependency2.Node), B = _dependency5.inject("alert/bbr", _dependency2.Node), O = _dependency5.inject("alert/effectBg", _dependency2.sp.Skeleton), R = _dependency5.inject("alert/fgTimes", _dependency2.Label), v = _dependency5.inject("alert/startBtn", _dependency2.Node), L = _dependency5.inject("alert/startBtn/Text", _dependency2.Sprite), y(((K = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
    return (e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this)._isClosing = !1, e._alertIntroCb = null, _dependency.initializerDefineProperty(e, "alert", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bbr", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectBg", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgTimes", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startBtn", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startText", x, _dependency.assertThisInitialized(e)), e.finishFGCallback = null, e.freeGameAlertStatus = W.NONE, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.show = function (e) {
    this.setStartCloseBtnLocalize(), t.prototype.show.call(this, e);
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/FGAlertView";
  }, r.init = function () {
    this.enabledKeyDown = !0, this._isClosing = !1;
  }, r.crossFadeToScene = function (t, i) {
    var n = this,
      a = e.FADE_OUT,
      s = e.BLACK_HOLD,
      r = e.FADE_IN;
    this.cancelAlertIntro(), _dependency3.CmmUtils.fadeOutTween(this.alert, a), dispatch(_dependency1.GameEvent.FADE_GAME_VIEW, {
      data: {
        opacity: 0,
        duration: a
      }
    }), this.scheduleOnce(function () {
      n.alert.active = !1, t(), n.scheduleOnce(function () {
        dispatch(_dependency1.GameEvent.FADE_GAME_VIEW, {
          data: {
            opacity: 255,
            duration: r
          }
        }), n.scheduleOnce(function () {
          i && i(), n.close();
        }, r);
      }, s);
    }, a);
  }, r.cancelAlertIntro = function () {
    var t, e;
    this._alertIntroCb && (this.unschedule(this._alertIntroCb), this._alertIntroCb = null);
    var i = null == (t = this.fgTimes) || null == (e = t.node) ? void 0 : e.getComponent(_dependency2.UIOpacity);
    i && _dependency2.Tween.stopAllByTarget(i), this.effectBg && this.effectBg.setCompleteListener(null);
  }, r.resetAlertOpacity = function () {
    var t = this.alert.getComponent(_dependency2.UIOpacity);
    t && (t.opacity = 255);
  }, r.setStartCloseBtnLocalize = function () {
    var t = _dependency9.default.getData().filePaths.localeSpriteFrame;
    this.startText.spriteFrame = _dependency8.LoadUtils.getDirSp(this.bundle, t, "T_btn_01_font");
  }, r.goToMainGame = function () {
    this.data.currentGameType = _dependency10.EGameType.MAIN_GAME, dispatch(_dependency1.GameEvent.CHANGE_GAME_STYLE, {
      data: !0
    });
    var t = this.data.getData().definition.isLuckyMoment;
    dispatch(_dependency1.GameEvent.PLAY_BGM, {
      data: t ? _dependency9.EBGM.FEVERTIME : _dependency9.EBGM.MAIN_GAME
    });
  }, r.startFreeGame = function () {
    var t = this;
    this._isClosing || (this._isClosing = !0, this.unschedule(this.startFreeGame), this.bbr.targetOff(this), this.startBtn.targetOff(this), this.crossFadeToScene(function () {
      dispatch(_dependency1.GameEvent.PLAY_BGM, {
        data: _dependency9.EBGM.FREE_GAME
      }), t.data.originTurbo = _dependency9.default.isTurbo, _dependency9.default.setIsTurbo(!1, !1), _dependency12.ReelDataSettingObj.setSpeedIndex(0), dispatch(_dependency1.GameEvent.CLICK_START_FREE_GAME);
    }, function () {
      return dispatch(_dependency1.GameEvent.CHANGE_FG_SPIN_STATE);
    }));
  }, r.finishFreeGame = function () {
    var t = this;
    this._isClosing || (this._isClosing = !0, this.unschedule(this.finishFreeGame), this.bbr.targetOff(this), this.startBtn.targetOff(this), this.crossFadeToScene(function () {
      _dependency9.default.stopOnFg && (_dependency6.default.active = !1), t.goToMainGame(), _dependency9.default.setIsTurbo(t.data.originTurbo ? t.data.originTurbo : _dependency9.default.isTurbo, !1), _dependency9.default.isTurbo && _dependency12.ReelDataSettingObj.setSpeedIndex(3), dispatch(_dependency1.GameEvent.CLICK_FINISH_FREE_GAME), dispatch(_dependency1.GameEvent.CHANGE_GAME_STYLE, {
        data: !0
      }), dispatch(_dependency11.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: 0
        }
      });
    }));
  }, r.showIntroAlert = function () {
    var t,
      e = this,
      i = this.data.getData().parser.currentGameState,
      n = i.freeSpinWon,
      a = i.numFreeSpins,
      s = _dependency9.default.getData().autoCloseTime,
      r = null != (t = null != n ? n : a) ? t : 0;
    null == n && Log.e("showIntroAlert: freeSpinWon 缺值，改用 numFreeSpins", this.data.getData().parser.currentGameState), dispatch(_dependency1.GameEvent.PLAY_BGM, {
      data: _dependency9.EBGM.TRANSITIONS
    }), this.alert.active = !0, this.resetAlertOpacity(), this.fgTimes.string = "" + r, s && this.scheduleOnce(this.startFreeGame, s), this.bbr.once(_dependency2.NodeEventType.TOUCH_END, this.startFreeGame, this), this.startBtn.once(_dependency2.NodeEventType.TOUCH_END, this.startFreeGame, this), this.effectBg.clearTracks(), this.effectBg.setToSetupPose(), this.effectBg.setAnimation(0, "T_transitions_in", !1), this.effectBg.setCompleteListener(function () {
      e.effectBg.setCompleteListener(null), e.effectBg.setAnimation(0, "T_transitions_loop", !0);
    }), this._alertIntroCb = function () {
      e._alertIntroCb = null, e.freeGameAlertStatus = W.START_FREE_GAME, _dependency3.CmmUtils.fadeInTween(e.fgTimes.node, .2);
    }, this.scheduleOnce(this._alertIntroCb, .5);
  }, r.showSummaryAlert = function () {
    var t = this;
    dispatch(_dependency1.GameEvent.PLAY_BGM, {
      data: _dependency9.EBGM.TRANSITIONS
    });
    var e = this.data.getData().parser.currentGameState.totalWinnings,
      i = _dependency9.default.getData().autoCloseTime;
    this.alert.active = !0, this.resetAlertOpacity(), this.fgTimes.string = _dependency7.CmmSlotUtils.formatNumber(e);
    var n = _dependency9.default.getData().filePaths.localeSpriteFrame;
    this.startText.spriteFrame = _dependency8.LoadUtils.getDirSp(this.bundle, n, "T_btn_02_font"), this.finishFGCallback = function () {
      t.finishFreeGame(), t.unschedule(t.finishFGCallback);
    }, this.startBtn.once(_dependency2.NodeEventType.TOUCH_END, this.finishFGCallback, this), this.bbr.once(_dependency2.NodeEventType.TOUCH_END, this.finishFGCallback, this), i && this.scheduleOnce(this.finishFGCallback, i), this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      t.effectBg.setCompleteListener(null), t.effectBg.setAnimation(0, "loop", !0);
    }), this._alertIntroCb = function () {
      t._alertIntroCb = null, t.freeGameAlertStatus = W.FINISH_FREE_GAME;
    }, this.scheduleOnce(this._alertIntroCb, .5);
  }, r.onKeyDown = function (e) {
    if (t.prototype.onKeyDown.call(this, e), e.keyCode === _dependency2.KeyCode.SPACE) switch (this.freeGameAlertStatus) {
      case W.START_FREE_GAME:
        this.startFreeGame(), this.freeGameAlertStatus = W.START_FREE_GAME_END;
        break;
      case W.FINISH_FREE_GAME:
        null != this.finishFGCallback && (this.finishFGCallback(), this.freeGameAlertStatus = W.FINISH_FREE_GAME_END);
    }
  }, r.addEvents = function () {}, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), e;
}(_dependency4.default)).FADE_OUT = 1, K.BLACK_HOLD = .5, K.FADE_IN = 1, k = _dependency.applyDecoratedDescriptor((H = K).prototype, "alert", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(H.prototype, "bbr", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(H.prototype, "effectBg", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(H.prototype, "fgTimes", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(H.prototype, "startBtn", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(H.prototype, "startText", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = H)) || w));
_dependency2.cclegacy._RF.pop();
