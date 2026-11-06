// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-CmmUtils";
import * as _dependency4 from "../../shared/scripts/main-UrlUtils";
import * as _dependency5 from "../../shared/scripts/main-UIView";
import * as _dependency6 from "../../shared/scripts/main-Decorators";
import * as _dependency7 from "../../shared/scripts/slotFramework-MisaButton";
import * as _dependency8 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency0 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency10 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency11 from "./g1009-GameConfigModel";
import * as _dependency12 from "./g1009-GameData";
import * as _dependency13 from "./g1009-GameEvent";
import * as _dependency14 from "./g1009-types";
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
var e, i, n, a, s, o, r, l, c, u, f, h, d, p, E, _, m, g, A, G, S, b, F, T, B, C, M, I, N, R, D;
var y, w, O, v, L, P, k, H, U, z, W, Y, V, K, j;
_dependency2.cclegacy._RF.push({}, "712f8jQeR9Au6MJMUW95ZtA", "FreeGameAlertView", void 0);
var x,
  J = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.START_FREE_GAME = 1] = "START_FREE_GAME", t[t.START_FREE_GAME_END = 2] = "START_FREE_GAME_END", t[t.FINISH_FREE_GAME = 3] = "FINISH_FREE_GAME", t[t.FINISH_FREE_GAME_END = 4] = "FINISH_FREE_GAME_END";
}(x || (x = {}));
_publish("FreeGameAlertView", (y = J("FreeGameAlertView"), w = _dependency6.inject("alert", _dependency2.Node), O = _dependency6.inject("alert/bbr", _dependency2.Node), v = _dependency6.inject("alert/effectBg", _dependency2.sp.Skeleton), L = _dependency6.inject("alert/effectBg/fgTimes", _dependency2.Label), P = _dependency6.inject("alert/effectBg/startBtn", _dependency2.Node), k = _dependency6.inject("alert/effectBg/finishBtn", _dependency2.Node), y((z = _dependency.applyDecoratedDescriptor((U = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, s = new Array(i), o = 0; o < i; o++) s[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bbr", W, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectBg", Y, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgTimes", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startBtn", K, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "finishBtn", j, _dependency.assertThisInitialized(e)), e.finishFGCallback = null, e.freeGameAlertStatus = x.NONE, e;
  }
  _dependency.inheritsLoose(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.show = function (e) {
    this.setStartCloseBtnLocalize(), t.prototype.show.call(this, e);
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + _dependency4.default.getViewModeParam() + "/FGAlertView";
  }, o.init = function () {
    this.enabledKeyDown = !0;
  }, o.goToFreeGame = function () {
    var t = this,
      e = null;
    if (dispatch(_dependency9.SlotFrameworkEvent.HIDE_SPIN_BAR), this.data.getData().newGameState && this.data.getData().newGameState.length && this.data.getData().newGameState.length > 0) {
      e = this.data.getData().spinId;
      dispatch(_dependency13.GameEvent.SHOW_TRANSITION_IN, {
        data: function () {
          t.data.currentGameType = _dependency14.EGameType.FREE_GAME, dispatch(_dependency13.GameEvent.CHANGE_GAME_STYLE, {
            data: !1
          }), dispatch(_dependency13.GameEvent.PLAY_BGM, {
            data: t.data.getData().gameState.isGoldenFg ? _dependency11.EBGM.SPECIAL_FREE_GAME : _dependency11.EBGM.FREE_GAME
          }), _dependency0.default.isReplay ? t.scheduleOnce(function () {
            dispatch(_dependency13.GameEvent.CREATE_REPLAY_SPIN_FLOW, {
              data: {
                spinId: e,
                test: null
              }
            });
          }, 1) : t.scheduleOnce(function () {
            dispatch(_dependency13.GameEvent.CREATE_SPIN_FLOW, {
              data: {
                spinId: e,
                next: !0,
                test: null
              }
            });
          }, 1);
        }
      });
    } else {
      e = this.data.getData().gameState.spinId;
      dispatch(_dependency13.GameEvent.SHOW_TRANSITION_IN, {
        data: function () {
          t.data.currentGameType = _dependency14.EGameType.FREE_GAME, dispatch(_dependency13.GameEvent.CHANGE_GAME_STYLE, {
            data: !1
          }), dispatch(_dependency13.GameEvent.PLAY_BGM, {
            data: t.data.getData().gameState.isGoldenFg ? _dependency11.EBGM.SPECIAL_FREE_GAME : _dependency11.EBGM.FREE_GAME
          }), _dependency0.default.isReplay ? t.scheduleOnce(function () {
            dispatch(_dependency13.GameEvent.CREATE_REPLAY_SPIN_FLOW, {
              data: {
                spinId: e,
                test: null
              }
            });
          }, 1) : t.scheduleOnce(function () {
            dispatch(_dependency13.GameEvent.CREATE_SPIN_FLOW, {
              data: {
                spinId: e,
                test: null
              }
            });
          }, 1);
        }
      });
    }
  }, o.goToMainGame = function () {
    var t = this;
    dispatch(_dependency13.GameEvent.SHOW_TRANSITION_OUT, {
      data: function () {
        t.data.currentGameType = _dependency14.EGameType.MAIN_GAME, dispatch(_dependency13.GameEvent.CHANGE_GAME_STYLE, {
          data: !0
        }), dispatch(_dependency13.GameEvent.PLAY_BGM, {
          data: _dependency11.EBGM.MAIN_GAME
        }), dispatch(_dependency9.SlotFrameworkEvent.SHOW_SPIN_BAR);
      }
    });
  }, o.startFreeGame = function () {
    this.startBtn.active = !1, this.alert.active = !1, this.goToFreeGame(), this.data.originTurbo = _dependency11.default.isTurbo, _dependency11.default.setIsTurbo(!1, !1), this.unschedule(this.startFreeGame), this.bbr.targetOff(this), this.close();
  }, o.finishFreeGame = function () {
    this.finishBtn.active = !1, this.alert.active = !1, _dependency11.default.stopOnFg && (_dependency8.default.active = !1), this.goToMainGame(), _dependency11.default.setIsTurbo(this.data.originTurbo ? this.data.originTurbo : _dependency11.default.isTurbo, !1), this.unschedule(this.finishFreeGame), this.bbr.targetOff(this), this.close();
  }, o.playBounceTween = function (t, e) {
    _dependency2.tween(t).bindNodeState(false).delay(.2).to(.1, {
      scale: new _dependency2.Vec3(.9, .9, .9)
    }).to(.2, {
      scale: new _dependency2.Vec3(.6, .6, .6)
    }, {
      onComplete: function () {
        e && e();
      }
    }).start();
  }, o.setStartCloseBtnLocalize = function () {
    var t = _dependency11.default.getData().filePaths.localeSpriteFrame;
    this.startBtn.getComponent(_dependency7.default).customNormalSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "t_font_01_normal"), this.startBtn.getComponent(_dependency7.default).customPressedSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "t_font_01_pressed"), this.startBtn.getComponent(_dependency7.default).customHoverSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "t_font_01_pressed"), this.startBtn.getComponent(_dependency7.default).customDisabledSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "t_font_01_disabled"), this.finishBtn.getComponent(_dependency7.default).customNormalSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "t_font_02_normal"), this.finishBtn.getComponent(_dependency7.default).customPressedSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "t_font_02_pressed"), this.finishBtn.getComponent(_dependency7.default).customHoverSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "t_font_02_pressed"), this.finishBtn.getComponent(_dependency7.default).customDisabledSprite = _dependency10.LoadUtils.getDirSp(this.bundle, t, "t_font_02_disabled");
  }, o.showIntroAlert = function () {
    var t = this,
      e = this.data.getData().gameState,
      i = e.isGoldenFg,
      n = e.freeGameCount,
      a = _dependency11.default.getData().autoCloseTime,
      s = i ? "in_sf" : "in";
    App.globalAudio.pauseMusic(), this.alert.active = !0, this.finishBtn.active = !1, this.fgTimes.string = n.toString(), this.fgTimes.getComponent(_dependency2.UIOpacity).opacity = 0, this.effectBg.skeletonData = this.data.getGameAlertSpine("notice");
    var o = new _dependency2.sp.SpineSocket("root/root2/number", this.fgTimes.node),
      r = new _dependency2.sp.SpineSocket("root/root2/btn", this.startBtn);
    this.effectBg.sockets = [o, r], this.effectBg.setAnimation(0, s, !1), this.effectBg.setCompleteListener(function () {
      a && t.scheduleOnce(t.startFreeGame, a), t.startBtn.active = !0, t.bbr.once(_dependency2.NodeEventType.TOUCH_END, t.startFreeGame, t), t.startBtn.once(_dependency2.NodeEventType.TOUCH_END, t.startFreeGame, t), t.effectBg.setCompleteListener(null);
    }), this.scheduleOnce(function () {
      t.freeGameAlertStatus = x.START_FREE_GAME, _dependency3.CmmUtils.fadeInTween(t.fgTimes.node, .2);
    }, .5), dispatch(_dependency13.GameEvent.PLAY_BTM, {
      data: {
        url: i ? _dependency11.EBTM.SPECIAL_FREE_GAME_IN : _dependency11.EBTM.FREE_GAME_IN
      }
    });
  }, o.showSummaryAlert = function (t) {
    var e = this,
      i = this.data.getData().gameState,
      n = i.totalWinnings,
      a = i.isGoldenFg,
      s = _dependency11.default.getData().autoCloseTime;
    this.alert.active = !0, this.startBtn.active = !1, this.fgTimes.string = _dependency1.CmmSlotUtils.formatNumber(n), this.fgTimes.node.position.set(0, -80, 0), this.effectBg.skeletonData = this.data.getGameAlertSpine("total"), App.globalAudio.pauseMusic();
    var o = new _dependency2.sp.SpineSocket("root/root2/number", this.fgTimes.node),
      r = new _dependency2.sp.SpineSocket("root/root2/btn", this.finishBtn);
    this.effectBg.sockets = [o, r], this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      e.effectBg.setAnimation(0, "loop", !0), e.finishBtn.active = !0, e.finishFGCallback = function () {
        e.finishFreeGame(), e.unschedule(e.finishFGCallback), t();
      }, s && e.scheduleOnce(e.finishFGCallback, s), e.bbr.once(_dependency2.NodeEventType.TOUCH_END, e.finishFGCallback, e), e.finishBtn.once(_dependency2.NodeEventType.TOUCH_END, e.finishFGCallback, e), e.effectBg.setCompleteListener(null);
    }), this.scheduleOnce(function () {
      App.globalAudio.resumeMusic();
    }, 2), this.scheduleOnce(function () {
      e.freeGameAlertStatus = x.FINISH_FREE_GAME;
    }, .5), dispatch(_dependency13.GameEvent.PLAY_BTM, {
      data: {
        url: a ? _dependency11.EBTM.SPECIAL_FREE_GAME_OUT : _dependency11.EBTM.FREE_GAME_OUT
      }
    });
  }, o.onKeyDown = function (e) {
    if (t.prototype.onKeyDown.call(this, e), e.keyCode === _dependency2.KeyCode.SPACE) switch (this.freeGameAlertStatus) {
      case x.START_FREE_GAME:
        this.startFreeGame(), this.freeGameAlertStatus = x.START_FREE_GAME_END;
        break;
      case x.FINISH_FREE_GAME:
        null != this.finishFGCallback && (this.finishFGCallback(), this.freeGameAlertStatus = x.FINISH_FREE_GAME_END);
    }
  }, o.addEvents = function () {}, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency12.default);
    }
  }]), e;
}(_dependency5.default)).prototype, "alert", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = _dependency.applyDecoratedDescriptor(U.prototype, "bbr", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(U.prototype, "effectBg", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(U.prototype, "fgTimes", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(U.prototype, "startBtn", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(U.prototype, "finishBtn", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = U)) || H));
_dependency2.cclegacy._RF.pop();
