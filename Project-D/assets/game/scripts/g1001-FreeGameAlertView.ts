// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "../../shared/scripts/slotFramework-MisaButton";
import * as _dependency7 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency8 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency9 from "./g1001-GameConfigModel";
import * as _dependency0 from "./g1001-GameData";
import * as _dependency1 from "./g1001-GameEvent";
import * as _dependency10 from "./g1001-types";
import * as _dependency11 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency14 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency15 from "../../shared/scripts/main-UrlUtils";
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
var e, i, a, n, s, r, o, l, c, f, u, h, p, d, _, E, g, m, S, G, A, F, T, b, M, B, I, C, N, D, R, y;
var L, O, w, v, U, P, H, k, V, z, Y, W, K, j, x, q, J;
_dependency2.cclegacy._RF.push({}, "6f2f7J7gBdOCbjMUnUyZQqI", "FreeGameAlertView", void 0);
var Q,
  Z = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.START_FREE_GAME = 1] = "START_FREE_GAME", t[t.START_FREE_GAME_END = 2] = "START_FREE_GAME_END", t[t.FINISH_FREE_GAME = 3] = "FINISH_FREE_GAME", t[t.FINISH_FREE_GAME_END = 4] = "FINISH_FREE_GAME_END";
}(Q || (Q = {}));
_publish("FreeGameAlertView", (L = Z("FreeGameAlertView"), O = _dependency5.inject("alert", _dependency2.Node), w = _dependency5.inject("alert/bbr", _dependency2.Node), v = _dependency5.inject("alert/effectBg", _dependency2.sp.Skeleton), U = _dependency5.inject("alert/fgFontSprite", _dependency2.Sprite), P = _dependency5.inject("alert/fgTimes", _dependency2.Label), H = _dependency5.inject("alert/startBtn", _dependency2.Node), k = _dependency5.inject("alert/finishBtn", _dependency2.Node), L((Y = _dependency.applyDecoratedDescriptor((z = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", Y, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bbr", W, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effectBg", K, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgFontSprite", j, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgTimes", x, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startBtn", q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "finishBtn", J, _dependency.assertThisInitialized(e)), e.finishFGCallback = null, e.freeGameAlertStatus = Q.NONE, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + _dependency15.default.getViewModeParam() + "/FGAlertView";
  }, r.init = function () {
    this.enabledKeyDown = !0, this.setStartCloseBtnLocalize();
  }, r.goToFreeGame = function () {
    var t = this,
      e = null;
    if (dispatch(_dependency14.SlotFrameworkEvent.HIDE_SPIN_BAR), this.data.getData().newGameState && this.data.getData().newGameState.length && this.data.getData().newGameState.length > 0) {
      e = this.data.getData().spinId;
      dispatch(_dependency1.GameEvent.SHOW_TRANSITION_IN, {
        data: function () {
          t.data.currentGameType = _dependency10.EGameType.FREE_GAME, dispatch(_dependency1.GameEvent.CHANGE_GAME_STYLE, {
            data: !1
          }), dispatch(_dependency1.GameEvent.PLAY_BGM, {
            data: _dependency9.EBGM.FREEGAME
          }), _dependency12.default.isReplay ? t.scheduleOnce(function () {
            dispatch(_dependency1.GameEvent.CREATE_REPLAY_SPIN_FLOW, {
              data: {
                spinId: e,
                cheat: null
              }
            });
          }, 1) : t.scheduleOnce(function () {
            dispatch(_dependency1.GameEvent.CREATE_SPIN_FLOW, {
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
      dispatch(_dependency1.GameEvent.SHOW_TRANSITION_IN, {
        data: function () {
          t.data.currentGameType = _dependency10.EGameType.FREE_GAME, dispatch(_dependency1.GameEvent.CHANGE_GAME_STYLE, {
            data: !1
          }), dispatch(_dependency1.GameEvent.PLAY_BGM, {
            data: _dependency9.EBGM.FREEGAME
          }), _dependency12.default.isReplay ? t.scheduleOnce(function () {
            dispatch(_dependency1.GameEvent.CREATE_REPLAY_SPIN_FLOW, {
              data: {
                spinId: e,
                cheat: null
              }
            });
          }, 1) : t.scheduleOnce(function () {
            dispatch(_dependency1.GameEvent.CREATE_SPIN_FLOW, {
              data: {
                spinId: e,
                cheat: null
              }
            });
          }, 1);
        }
      });
    }
  }, r.goToMainGame = function () {
    var t = this;
    dispatch(_dependency1.GameEvent.SHOW_TRANSITION_OUT, {
      data: function () {
        t.data.currentGameType = _dependency10.EGameType.MAIN_GAME, dispatch(_dependency1.GameEvent.CHANGE_GAME_STYLE, {
          data: !0
        }), dispatch(_dependency1.GameEvent.PLAY_BGM, {
          data: _dependency9.EBGM.MAINGAME
        }), dispatch(_dependency14.SlotFrameworkEvent.SHOW_SPIN_BAR);
      }
    });
  }, r.startFreeGame = function () {
    this.startBtn.active = !1, this.alert.active = !1, this.goToFreeGame(), this.data.originTurbo = _dependency9.default.isTurbo, _dependency9.default.setIsTurbo(!1, !1), this.unschedule(this.startFreeGame), this.bbr.targetOff(this), this.close();
  }, r.finishFreeGame = function () {
    this.finishBtn.active = !1, this.alert.active = !1, _dependency9.default.stopOnFg && (_dependency11.default.active = !1), this.goToMainGame(), _dependency9.default.setIsTurbo(this.data.originTurbo ? this.data.originTurbo : _dependency9.default.isTurbo, !1), this.unschedule(this.finishFreeGame), this.bbr.targetOff(this), this.close();
  }, r.playBounceTween = function (t, e) {
    _dependency2.tween(t).bindNodeState(false).delay(.2).to(.1, {
      scale: new _dependency2.Vec3(.9, .9, .9)
    }).to(.2, {
      scale: new _dependency2.Vec3(.6, .6, .6)
    }, {
      onComplete: function () {
        e && e();
      }
    }).start();
  }, r.setStartCloseBtnLocalize = function () {
    var t = _dependency9.default.getData().filePaths.localeSpriteFrame;
    this.startBtn.getComponent(_dependency6.default).customNormalSprite = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1001], t, "t_font_01_normal"), this.startBtn.getComponent(_dependency6.default).customPressedSprite = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1001], t, "t_font_01_pressed"), this.startBtn.getComponent(_dependency6.default).customHoverSprite = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1001], t, "t_font_01_pressed"), this.startBtn.getComponent(_dependency6.default).customDisabledSprite = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1001], t, "t_font_01_disabled"), this.finishBtn.getComponent(_dependency6.default).customNormalSprite = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1001], t, "t_font_02_normal"), this.finishBtn.getComponent(_dependency6.default).customPressedSprite = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1001], t, "t_font_02_pressed"), this.finishBtn.getComponent(_dependency6.default).customHoverSprite = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1001], t, "t_font_02_pressed"), this.finishBtn.getComponent(_dependency6.default).customDisabledSprite = _dependency8.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1001], t, "t_font_02_disabled");
  }, r.showIntroAlert = function () {
    var t = this,
      e = this.data.getData().gameState,
      i = _dependency9.default.getData().autoCloseTime;
    dispatch(_dependency1.GameEvent.MUSIC_VOLUME_MULTIPLE, {
      data: .5
    }), this.alert.active = !0, this.finishBtn.active = !1, this.fgTimes.string = e.freeGameCount.toString(), this.fgTimes.node.position.set(0, 225, 0), this.fgFontSprite.spriteFrame = this.data.getLocaleSpriteFrame("t_font_03"), this.fgFontSprite.node.position.set(0, 22, 0), this.playBounceTween(this.fgFontSprite.node), this.effectBg.skeletonData = this.data.getGameAlertSpine("f_spins_bg"), this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      dispatch(_dependency1.GameEvent.MUSIC_VOLUME_MULTIPLE, {
        data: 2
      }), t.effectBg.setAnimation(0, "loop", !0), t.startBtn.active = !0, i && t.scheduleOnce(t.startFreeGame, i), t.bbr.once(_dependency2.NodeEventType.TOUCH_END, t.startFreeGame, t), t.startBtn.once(_dependency2.NodeEventType.TOUCH_END, t.startFreeGame, t), t.effectBg.setCompleteListener(null);
    }), this.schedule(function () {
      t.freeGameAlertStatus = Q.START_FREE_GAME;
    }, .5), dispatch(_dependency1.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.FREEGAME_IN
      }
    });
  }, r.showSummaryAlert = function (t) {
    var e = this,
      i = this.data.getData().gameState.totalWinnings,
      a = _dependency9.default.getData().autoCloseTime;
    dispatch(_dependency1.GameEvent.MUSIC_VOLUME_MULTIPLE, {
      data: .2
    }), this.alert.active = !0, this.startBtn.active = !1, this.fgTimes.string = _dependency7.CmmSlotUtils.formatNumber(i), this.fgTimes.node.position.set(0, 32, 0);
    var n = "t_font_04";
    _dependency13.default.getData().theme && "xin-star" == _dependency13.default.getData().theme && (n += "_01"), this.fgFontSprite.spriteFrame = this.data.getLocaleSpriteFrame(n), this.fgFontSprite.node.position.set(0, 148, 0), this.playBounceTween(this.fgFontSprite.node), this.effectBg.skeletonData = this.data.getGameAlertSpine("f_total_bg"), this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      e.effectBg.setAnimation(0, "loop", !0), e.finishBtn.active = !0, e.finishFGCallback = function () {
        e.finishFreeGame(), e.unschedule(e.finishFGCallback), dispatch(_dependency1.GameEvent.MUSIC_VOLUME_MULTIPLE, {
          data: 5
        }), t();
      }, a && e.scheduleOnce(e.finishFGCallback, a), e.bbr.once(_dependency2.NodeEventType.TOUCH_END, e.finishFGCallback, e), e.finishBtn.once(_dependency2.NodeEventType.TOUCH_END, e.finishFGCallback, e), e.effectBg.setCompleteListener(null);
    }), this.schedule(function () {
      e.freeGameAlertStatus = Q.FINISH_FREE_GAME;
    }, .5), dispatch(_dependency1.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.FREEGAME_OUT
      }
    });
  }, r.onKeyDown = function (e) {
    if (t.prototype.onKeyDown.call(this, e), e.keyCode === _dependency2.KeyCode.SPACE) switch (this.freeGameAlertStatus) {
      case Q.START_FREE_GAME:
        this.startFreeGame(), this.freeGameAlertStatus = Q.START_FREE_GAME_END;
        break;
      case Q.FINISH_FREE_GAME:
        null != this.finishFGCallback && (this.finishFGCallback && this.finishFGCallback(), this.freeGameAlertStatus = Q.FINISH_FREE_GAME_END);
    }
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "alert", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = _dependency.applyDecoratedDescriptor(z.prototype, "bbr", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(z.prototype, "effectBg", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(z.prototype, "fgFontSprite", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(z.prototype, "fgTimes", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = _dependency.applyDecoratedDescriptor(z.prototype, "startBtn", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(z.prototype, "finishBtn", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = z)) || V));
_dependency2.cclegacy._RF.pop();
