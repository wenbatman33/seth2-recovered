// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-MisaButton";
import * as _dependency6 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency7 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency8 from "./g1008-GameConfigModel";
import * as _dependency9 from "./g1008-GameData";
import * as _dependency0 from "./g1008-GameEvent";
import * as _dependency1 from "./g1008-types";
import * as _dependency10 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency14 from "../../shared/scripts/main-UrlUtils";
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
var e, i, a, n, r, s, o, l, u, c, p, f, d, h, m, _, E, S, g, G, A, b, F, T, R, C, N, y, v, B, I;
var D, M, P, w, L, O, k, H, z, U, W, Y, V, x, K, j, q, J, Q, X, Z, $, tt, et, it;
_dependency2.cclegacy._RF.push({}, "90a17SoSElJ74QTUfhmvqff", "FreeGameAlertView", void 0);
var at,
  nt = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.START_FREE_GAME = 1] = "START_FREE_GAME", t[t.START_FREE_GAME_END = 2] = "START_FREE_GAME_END", t[t.FINISH_FREE_GAME = 3] = "FINISH_FREE_GAME", t[t.FINISH_FREE_GAME_END = 4] = "FINISH_FREE_GAME_END";
}(at || (at = {}));
_publish("FreeGameAlertView", (D = nt("FreeGameAlertView"), M = _dependency4.inject("alert", _dependency2.Node), P = _dependency4.inject("alert/bbr", _dependency2.Node), w = _dependency4.inject("alert/ndPopup", _dependency2.Node), L = _dependency4.inject("transition_fire", _dependency2.sp.Skeleton), O = _dependency4.inject("alert/ndPopup/ndBox/fgFontSprite", _dependency2.Sprite), k = _dependency4.inject("alert/ndPopup/ndBox/fgTimes", _dependency2.Label), H = _dependency4.inject("alert/totalWin", _dependency2.Label), z = _dependency4.inject("alert/ndPopup/startBtn", _dependency2.Node), U = _dependency4.inject("alert/ndResult", _dependency2.Node), W = _dependency4.inject("alert/ndResult/finishBtn", _dependency2.Node), Y = _dependency4.inject("alert/ndResult/fgResultSprite", _dependency2.Sprite), D((K = _dependency.applyDecoratedDescriptor((x = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", K, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bbr", j, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndPopup", q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "transition_fire", J, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgFontSprite", Q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgTimes", X, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalWin", Z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startBtn", $, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndResult", tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "finishBtn", et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgResultSprite", it, _dependency.assertThisInitialized(e)), e.finishFGCallback = null, e.freeGameAlertStatus = at.NONE, e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + _dependency14.default.getViewModeParam() + "/FGAlertView";
  }, s.init = function () {
    this.setStartCloseBtnLocalize(), this.enabledKeyDown = !0, this.transition_fire.node.active = !1;
  }, s.goToFreeGame = function () {
    var t = this,
      e = null;
    if (dispatch(_dependency13.SlotFrameworkEvent.HIDE_SPIN_BAR), this.data.getData().newGameState && this.data.getData().newGameState.length && this.data.getData().newGameState.length > 0) {
      e = this.data.getData().spinId;
      dispatch(_dependency0.GameEvent.SHOW_TRANSITION_IN, {
        data: function () {
          t.data.currentGameType = _dependency1.EGameType.FREE_GAME, dispatch(_dependency0.GameEvent.CHANGE_GAME_STYLE, {
            data: !1
          }), dispatch(_dependency0.GameEvent.PLAY_BGM, {
            data: _dependency8.EBGM.FREEGAME
          }), _dependency11.default.isReplay ? t.scheduleOnce(function () {
            dispatch(_dependency0.GameEvent.CREATE_REPLAY_SPIN_FLOW, {
              data: {
                spinId: e,
                cheat: null
              }
            });
          }, 1) : t.scheduleOnce(function () {
            dispatch(_dependency0.GameEvent.CREATE_SPIN_FLOW, {
              data: {
                spinId: e,
                next: !0,
                cheat: null
              }
            });
          }, 1);
        }
      });
    } else {
      e = this.data.getData().gameState.spinId;
      dispatch(_dependency0.GameEvent.SHOW_TRANSITION_IN, {
        data: function () {
          t.data.currentGameType = _dependency1.EGameType.FREE_GAME, dispatch(_dependency0.GameEvent.CHANGE_GAME_STYLE, {
            data: !1
          }), dispatch(_dependency0.GameEvent.PLAY_BGM, {
            data: _dependency8.EBGM.FREEGAME
          }), _dependency11.default.isReplay ? t.scheduleOnce(function () {
            dispatch(_dependency0.GameEvent.CREATE_REPLAY_SPIN_FLOW, {
              data: {
                spinId: e,
                cheat: null
              }
            });
          }, 1) : t.scheduleOnce(function () {
            dispatch(_dependency0.GameEvent.CREATE_SPIN_FLOW, {
              data: {
                spinId: e,
                cheat: null
              }
            });
          }, 1);
        }
      });
    }
  }, s.goToMainGame = function () {
    var t = this;
    dispatch(_dependency0.GameEvent.SHOW_TRANSITION_OUT, {
      data: function () {
        t.data.currentGameType = _dependency1.EGameType.MAIN_GAME, dispatch(_dependency0.GameEvent.CHANGE_GAME_STYLE, {
          data: !0
        }), dispatch(_dependency0.GameEvent.PLAY_BGM, {
          data: _dependency8.EBGM.MAINGAME
        }), dispatch(_dependency13.SlotFrameworkEvent.SHOW_SPIN_BAR);
      }
    });
  }, s.startFreeGame = function () {
    var t = this;
    this.freeGameAlertStatus = at.START_FREE_GAME_END, this.node.pauseSystemEvents(!0), this.startBtn.getComponent(_dependency5.default).interactable = !1, this.data.originTurbo = _dependency8.default.isTurbo, _dependency8.default.setIsTurbo(!1, !1), dispatch(_dependency0.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency8.EBTM.TRANSITION
      }
    }), _dependency2.tween(this.ndPopup).bindNodeState(false).delay(.6).call(function () {
      var e = t.ndPopup.getChildByName("popup").getComponent(_dependency2.sp.Skeleton);
      e.clearTracks(), e.setToSetupPose(), e.setAnimation(0, "transition", !1), e.setCompleteListener(function () {
        e.setCompleteListener(null), e.setAnimation(0, "idle", !0);
      }), t.transition_fire.node.active = !0, t.transition_fire.clearTracks(), t.transition_fire.setToSetupPose(), t.transition_fire.setAnimation(0, "flame", !1), t.transition_fire.setCompleteListener(function () {
        t.transition_fire.node.active = !1, t.transition_fire.setCompleteListener(null), t.closeStartFreeGame();
      });
    }).start(), _dependency2.tween(this.ndPopup).bindNodeState(false).delay(2).call(function () {
      t.startBtn.active = !1, t.alert.active = !1;
    }).start();
  }, s.closeStartFreeGame = function () {
    this.goToFreeGame(), this.unschedule(this.startFreeGame), this.bbr.targetOff(this), this.close();
  }, s.finishFreeGame = function () {
    this.finishBtn.active = !1, this.alert.active = !1, _dependency8.default.stopOnFg && (_dependency10.default.active = !1), this.goToMainGame(), _dependency8.default.setIsTurbo(this.data.originTurbo ? this.data.originTurbo : _dependency8.default.isTurbo, !1), this.unschedule(this.finishFreeGame), this.bbr.targetOff(this), this.close();
  }, s.playBounceTween = function (t, e) {
    _dependency2.tween(t).bindNodeState(false).delay(.2).to(.1, {
      scale: new _dependency2.Vec3(.9, .9, .9)
    }).to(.2, {
      scale: new _dependency2.Vec3(.6, .6, .6)
    }, {
      onComplete: function () {
        e && e();
      }
    }).start();
  }, s.setStartCloseBtnLocalize = function () {
    var t = _dependency8.default.getData().filePaths.localeSpriteFrame;
    this.startBtn.getComponent(_dependency5.default).customNormalSprite = _dependency7.LoadUtils.getDirSp(this.data.module, t, "t_font_01_normal"), this.startBtn.getComponent(_dependency5.default).customPressedSprite = _dependency7.LoadUtils.getDirSp(this.data.module, t, "t_font_01_pressed"), this.startBtn.getComponent(_dependency5.default).customHoverSprite = _dependency7.LoadUtils.getDirSp(this.data.module, t, "t_font_01_pressed"), this.startBtn.getComponent(_dependency5.default).customDisabledSprite = _dependency7.LoadUtils.getDirSp(this.data.module, t, "t_font_01_disabled"), this.finishBtn.getComponent(_dependency5.default).customNormalSprite = _dependency7.LoadUtils.getDirSp(this.data.module, t, "t_font_02_normal"), this.finishBtn.getComponent(_dependency5.default).customPressedSprite = _dependency7.LoadUtils.getDirSp(this.data.module, t, "t_font_02_pressed"), this.finishBtn.getComponent(_dependency5.default).customHoverSprite = _dependency7.LoadUtils.getDirSp(this.data.module, t, "t_font_02_pressed"), this.finishBtn.getComponent(_dependency5.default).customDisabledSprite = _dependency7.LoadUtils.getDirSp(this.data.module, t, "t_font_02_disabled");
  }, s.showIntroAlert = function () {
    var t = this,
      e = this.data.getData().gameState,
      i = _dependency8.default.getData().autoCloseTime;
    this.fgFontSprite.spriteFrame = this.data.getLocaleSpriteFrame("t_font_03"), this.ndPopup.active = !0, this.ndResult.active = !1;
    var a = this.ndPopup.getChildByName("popup").getComponent(_dependency2.sp.Skeleton);
    a.clearTracks(), a.setToSetupPose(), a.setAnimation(0, "idle", !0), this.setStartCloseBtnLocalize(), dispatch(_dependency0.GameEvent.PLAY_BGM, {
      data: _dependency8.EBGM.FG_IN_LOOP
    }), this.alert.active = !0, this.finishBtn.active = !1, this.fgTimes.node.active = !0, this.totalWin.node.active = !1, this.fgTimes.string = e.freeGameCount.toString(), _dependency2.tween(this.startBtn).bindNodeState(false).delay(.2).call(function () {
      t.freeGameAlertStatus = at.START_FREE_GAME, t.startBtn.active = !0, i && t.scheduleOnce(t.startFreeGame, i), t.bbr.once(_dependency2.NodeEventType.TOUCH_END, t.startFreeGame, t), t.startBtn.once(_dependency2.NodeEventType.TOUCH_END, t.startFreeGame, t);
    }).start();
  }, s.showSummaryAlert = function (t) {
    var e = this,
      i = this.data.getData().gameState.totalWinnings,
      a = _dependency8.default.getData().autoCloseTime;
    this.setStartCloseBtnLocalize(), this.transition_fire.node.active = !1, this.ndPopup.active = !1, this.alert.active = !0, this.ndResult.active = !0, this.totalWin.node.active = !0, this.totalWin.string = _dependency6.CmmSlotUtils.formatNumber(i);
    var n = this.ndResult.getChildByName("resultBg").getComponent(_dependency2.sp.Skeleton);
    n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "total_loop", !0);
    var r = "t_font_04";
    _dependency12.default.getData().theme && "xin-star" == _dependency12.default.getData().theme && (r += "_01"), this.fgResultSprite.spriteFrame = this.data.getLocaleSpriteFrame(r), this.fgResultSprite.node.position.set(0, 148, 0), _dependency2.tween(this.finishBtn).bindNodeState(false).delay(.2).call(function () {
      e.finishBtn.active = !0, e.finishFGCallback = function () {
        e.finishFreeGame(), e.unschedule(e.finishFGCallback), t();
      }, a && e.scheduleOnce(e.finishFGCallback, a), e.bbr.once(_dependency2.NodeEventType.TOUCH_END, e.finishFGCallback, e), e.finishBtn.once(_dependency2.NodeEventType.TOUCH_END, e.finishFGCallback, e);
    }).start(), this.schedule(function () {
      e.freeGameAlertStatus = at.FINISH_FREE_GAME;
    }, .5), dispatch(_dependency0.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency8.EBTM.FREEGAME_OUT
      }
    });
  }, s.onKeyDown = function (e) {
    if (t.prototype.onKeyDown.call(this, e), e.keyCode === _dependency2.KeyCode.SPACE) switch (this.freeGameAlertStatus) {
      case at.START_FREE_GAME:
        this.startFreeGame();
        break;
      case at.FINISH_FREE_GAME:
        null != this.finishFGCallback && (this.finishFGCallback && this.finishFGCallback(), this.freeGameAlertStatus = at.FINISH_FREE_GAME_END);
    }
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "alert", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(x.prototype, "bbr", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = _dependency.applyDecoratedDescriptor(x.prototype, "ndPopup", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(x.prototype, "transition_fire", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(x.prototype, "fgFontSprite", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(x.prototype, "fgTimes", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = _dependency.applyDecoratedDescriptor(x.prototype, "totalWin", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = _dependency.applyDecoratedDescriptor(x.prototype, "startBtn", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(x.prototype, "ndResult", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(x.prototype, "finishBtn", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = _dependency.applyDecoratedDescriptor(x.prototype, "fgResultSprite", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = x)) || V));
_dependency2.cclegacy._RF.pop();
