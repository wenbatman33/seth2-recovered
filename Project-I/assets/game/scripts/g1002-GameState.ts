import { EDITOR as __projectILocalEditor } from 'cc/env';
import { installStateHooks as __projectIInstallHook } from '../backend/ProgressHooks';
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Config";
import * as _dependency4 from "../../shared/scripts/main-Bundles";
import * as _dependency5 from "../../shared/scripts/main-CompanyWaveEffect";
import * as _dependency6 from "../../shared/scripts/main-UrlUtils";
import * as _dependency7 from "../../shared/scripts/main-index";
import * as _dependency8 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency0 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency10 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-SocketModel";
import * as _dependency14 from "../../shared/scripts/slotFramework-UrlModel";
import * as _dependency15 from "../../shared/scripts/slotFramework-type2";
import * as _dependency16 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency17 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency18 from "../../shared/scripts/slotFramework-NoTouchingView";
import * as _dependency19 from "../../shared/scripts/slotFramework-SlotTableViewL";
import * as _dependency20 from "../../shared/scripts/slotFramework-SlotTableViewP";
import * as _dependency21 from "./g1002-BonusGameView";
import * as _dependency22 from "./g1002-DragonView";
import * as _dependency23 from "./g1002-FreeGameAlertView";
import * as _dependency24 from "./g1002-HeavenlyTreasuresView";
import * as _dependency25 from "./g1002-IntroView";
import * as _dependency26 from "./g1002-JackpotGameView";
import * as _dependency27 from "./g1002-LuckyWealthView";
import * as _dependency28 from "./g1002-GameConfigModel";
import * as _dependency29 from "./g1002-GameData";
import * as _dependency30 from "./g1002-GameSymbolID";
import * as _dependency31 from "./g1002-GameEvent";
import * as _dependency32 from "./g1002-GameSender";
import * as _dependency33 from "./g1002-types";
import * as _dependency34 from "./g1002-StateMachineManager";
import * as _dependency35 from "../../shared/scripts/main-state";
import * as _dependency36 from "../../shared/scripts/main-fsm";
var _export;
export { _export as calculateAutoSpin };
var _export2;
export { _export2 as needUpdateStake };
var _export3;
export { _export3 as GameState };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "calculateAutoSpin":
      _export = value;
      break;
    case "needUpdateStake":
      _export2 = value;
      break;
    case "GameState":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, a, n, r, i, _, o, s, T, S, E, d, c, u, A, N, I, O, p, G, D, f, h, R, v, M, l, L, W, m, P, g, C, x, F, H, U, y, B, w, b, Y, k, V, K, J, X;
function z() {
  if (_dependency8.default.active && _dependency8.default.spinsRemaining > 0) {
    if (App.dataCenter.get(_dependency29.default).currentGameType === _dependency33.EGameType.FREE_GAME) return;
    _dependency8.default.spinsRemaining--;
  }
}
function Q() {
  var t = {
      stakeIndex: _dependency12.default.stakeIndex,
      ratioIndex: _dependency12.default.ratioIndex
    },
    e = {
      stakeIndex: _dependency0.default.stakeIndex,
      ratioIndex: _dependency0.default.ratioIndex
    },
    a = _dependency17.ObjectUtils.diffObjects(t, e);
  return Object.keys(a).length > 0;
}
_publish({
  calculateAutoSpin: z,
  needUpdateStake: Q
}), _dependency2.cclegacy._RF.push({}, "bc13c0OlfNBlaF6QuBQOjkW", "GameState", void 0);
_publish("GameState", function () {
  function t() {
    var t,
      e,
      i,
      u,
      p,
      R,
      b,
      J,
      X,
      j,
      q,
      Z = this;
    this.stateMachine = null, this.MG_LOADING_STATE = {
      id: "MG_LOADING_STATE",
      initial: !0,
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: (t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
        var a;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (a = e.event, e.context, e.sharedData, a.name != _dependency31.GameEvent.LOAD_COMPLETE) {
                t.next = 3;
                break;
              }
              return t.abrupt("return", Z.MG_INIT_STATE.id);
            case 3:
              return t.abrupt("return", "");
            case 4:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (e) {
        return t.apply(this, arguments);
      })
    }, this.MG_INIT_STATE = {
      id: "MG_INIT_STATE",
      onEntry: (e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
        var e, a, n, i, _, o, s, E, c;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (e = _dependency6.default.hasParam("gn") && _dependency6.default.hasParam("t"), a = _dependency6.default.hasParam("spinId"), n = App.gameLoading, _dependency34.default.getStateName() !== _dependency34.EStateMachineName.GAME_STATE) {
                t.next = 23;
                break;
              }
              return t.next = 6, App.senderManager.get(_dependency32.GameSender).initial();
            case 6:
              if (n.hideProgressBar(), n.hideGameLogo(), App.uiManager.open({
                type: _dependency25.IntroView,
                bundle: _dependency4.EBundles[_dependency4.EBundles.g1002],
                zIndex: _dependency3.ViewZOrder.UILoading,
                name: "Intro"
              }), i = _dependency10.default.getData(), _ = i.slotTablesOn, o = App.dataCenter.get(_dependency29.default).getData(), s = o.isResuming, E = "1" === _dependency14.default.getData().searchParams.table, !_ || s) {
                t.next = 21;
                break;
              }
              if (!E) {
                t.next = 16;
                break;
              }
              return t.abrupt("return");
            case 16:
              return c = _dependency16.CmmSlotUtils.getOrientationTarget(_dependency19.default, _dependency20.default), t.next = 19, App.uiManager.open({
                type: c,
                bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
                zIndex: _dependency3.ViewZOrder.UI,
                name: "機台選擇2",
                args: !0
              });
            case 19:
              t.next = 21;
              break;
            case 21:
              t.next = 31;
              break;
            case 23:
              if (_dependency34.default.getStateName() !== _dependency34.EStateMachineName.REPLAY_STATE) {
                t.next = 31;
                break;
              }
              if (!e) {
                t.next = 27;
                break;
              }
              t.next = 31;
              break;
            case 27:
              if (!a) {
                t.next = 31;
                break;
              }
              return t.next = 30, App.senderManager.get(_dependency32.GameSender).replayInInitial();
            case 30:
              n.complete();
            case 31:
            case "end":
              return t.stop();
          }
        }, t);
      })), function () {
        return e.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return _dependency34.default.getStateName() === _dependency34.EStateMachineName.GAME_STATE ? Z.stateMachine.currentStateId == Z.MG_INIT_STATE.id : _dependency34.default.getStateName() === _dependency34.EStateMachineName.REPLAY_STATE || void 0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        return e.name == _dependency31.GameEvent.PARSER_INIT_COMPLETED ? a.getData().isResuming ? Z.MG_WAIT_RESUME_STATE.id : Z.MG_WAIT_SPIN_STATE.id : e.name === _dependency31.GameEvent.PARSER_REPLAY_COMPLETED && _dependency11.default.isReplay ? Z.MG_WAIT_REPLAY_STATE.id : "";
      },
      onExit: function () {}
    }, this.MG_WAIT_REPLAY_STATE = {
      id: "MG_WAIT_REPLAY_STATE",
      onEntry: (i = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
        var a;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              a = e.event, e.context, e.sharedData, dispatch(_dependency31.GameEvent.RESET_TIMES), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: _dependency15.ESpinStatus.SPINING
              }), a.name === _dependency31.GameEvent.REPLAY_GAME_END || a.name === _dependency31.GameEvent.SHOW_BIG_WIN_END ? dispatch(_dependency1.SlotFrameworkEvent.SHOW_REPLAY_BOARD_ALERT) : _dependency2.tween(Z).bindNodeState(false).delay(1.5).call(function () {
                dispatch(_dependency31.GameEvent.START_SPIN, {
                  data: {
                    spinId: null
                  }
                });
              }).start();
            case 4:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return i.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name == _dependency31.GameEvent.START_SPIN ? Z.MG_SPIN_STATE.id : "";
      }
    }, this.MG_WAIT_RESUME_STATE = {
      id: "MG_WAIT_RESUME_STATE",
      onEntry: (p = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              e.event, e.context, e.sharedData, dispatch(_dependency31.GameEvent.SHOW_RESUME_ALERT), dispatch(_dependency31.GameEvent.RESET_TIMES);
            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return p.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: (u = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
        var a, n, i, o, s, T, S, E;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return a = e.event, e.context, e.sharedData, dispatch(_dependency1.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: _dependency15.ESpinStatus.SPINING
              }), t.next = 4, new Promise(function (t) {
                _dependency2.tween(Z).bindNodeState(false).delay(.5).call(function () {
                  t();
                }).start();
              });
            case 4:
              if (a.name != _dependency31.GameEvent.START_RESUME) {
                t.next = 17;
                break;
              }
              if (o = Z.data.getData(), s = o.parser.currentGameState, !o.isResuming || 0 !== s.totalWinnings || !1 !== s.startFreeGame || o.bonusState) {
                t.next = 11;
                break;
              }
              return t.abrupt("return", Z.MG_CLOSE_SPIN_STATE.id);
            case 11:
              if ((null == o || null == (n = o.bonusState) ? void 0 : n.bonusType) !== _dependency33.EBonusType.LUCKY_WEALTH) {
                t.next = 13;
                break;
              }
              return t.abrupt("return", Z.MG_CLOSE_SPIN_STATE.id);
            case 13:
              if (T = null == (i = Z.data.getData().parser.currentGameState) ? void 0 : i.transformInfo, S = T.toSymbol, E = T.toWild, !(S.length > 0 || E.length > 0)) {
                t.next = 16;
                break;
              }
              return t.abrupt("return", Z.MG_SHOW_SYMBOL_TRANSFORM_STATE.id);
            case 16:
              return t.abrupt("return", Z.MG_SHOW_ALL_WIN_STATE.id);
            case 17:
              return t.abrupt("return", "");
            case 18:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return u.apply(this, arguments);
      })
    }, this.MG_WAIT_SPIN_STATE = {
      id: "MG_WAIT_SPIN_STATE",
      onEntry: (R = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (e.event, e.context, e.sharedData, dispatch(_dependency31.GameEvent.RESET_TIMES), _dependency28.default.isSendClose = !1, !(_dependency8.default.active && _dependency8.default.spinsRemaining > 0 || _dependency8.default.active && -1 === _dependency8.default.spinsRemaining)) {
                t.next = 9;
                break;
              }
              if (Z.slotData.checkBalanceAndAlert(function () {
                dispatch(_dependency1.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                  data: _dependency15.ESpinStatus.IDLE
                });
              })) {
                t.next = 7;
                break;
              }
              return t.abrupt("return");
            case 7:
              return dispatch(_dependency31.GameEvent.START_SPIN, {
                data: {
                  spinId: null
                }
              }), t.abrupt("return");
            case 9:
              dispatch(_dependency1.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: _dependency15.ESpinStatus.IDLE
              });
            case 10:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return R.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return !![_dependency31.GameEvent.START_SPIN, _dependency31.GameEvent.PARSER_REPLAY_COMPLETED].includes(e.name);
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name == _dependency31.GameEvent.START_SPIN ? Z.MG_SPIN_STATE.id : e.name === _dependency31.GameEvent.PARSER_REPLAY_COMPLETED && _dependency11.default.isReplay ? Z.MG_WAIT_REPLAY_STATE.id : void 0;
      }
    }, this.MG_SPIN_STATE = {
      id: "MG_SPIN_STATE",
      onEntry: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        dispatch(_dependency1.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
          data: _dependency15.ESpinStatus.SPINING
        }), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency10.default.amount
          }
        });
        var a = _dependency28.default.getData().winAmountTime,
          n = e.data.spinId;
        n || dispatch(_dependency1.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: 0,
            tweenTime: a
          }
        }), z();
        var r = {
          ratioIndex: _dependency0.default.ratioIndex,
          ratioValue: _dependency0.default.ratioValue,
          stakeIndex: _dependency0.default.stakeIndex,
          stakeValue: _dependency0.default.stakeValue
        };
        if (dispatch(_dependency1.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null), _dependency11.default.isReplay) _dependency2.tween(Z).bindNodeState(false).delay(.309).call(function () {
          dispatch(_dependency31.GameEvent.PARSER_SPIN_COMPLETED);
        }).start();else {
          if (Z.data.testStaticSpinFlag) return;
          dispatch(_dependency1.SlotFrameworkEvent.SEND_SPIN_REQUEST, {
            data: {
              spinId: n,
              stakeVO: r,
              updateStake: Q()
            }
          });
        }
      },
      transitionGuard: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return !![_dependency31.GameEvent.PARSER_SPIN_COMPLETED].includes(e.name);
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (e.name == _dependency31.GameEvent.PARSER_SPIN_COMPLETED) return a.getData().parser.currentGameState.dragonLevel ? Z.DRAGON_STATE.id : Z.MG_SPIN_TO_STOP_STATE.id;
      }
    }, this.DRAGON_STATE = {
      id: "DRAGON_STATE",
      onEntry: function (t) {
        t.event, t.context;
        var e = t.sharedData;
        App.uiManager.effectCamera && (App.uiManager.effectCamera.node.active = !0), App.uiManager.effectRoot && (App.uiManager.effectRoot.active = !0, App.uiManager.addView(App.uiManager.effectRoot, _dependency3.ViewZOrder.UI));
        var a,
          n = e.getData().parser,
          r = n.currentSpinIndex,
          i = n.currentGameState;
        a = Z.getMachine().previous.id === Z.FG_EXPLODE_AND_DELETE_STATE.id || Z.getMachine().previous.id === Z.MG_EXPLODE_AND_DELETE_STATE.id ? e.getData().gameState[r + 1].dragonLevel : i.dragonLevel;
        var d = App.uiManager.effectRoot.getComponent(_dependency5.CompanyWaveEffect),
          c = [void 0, .1, .1, .5],
          u = [void 0, .1, .1, .3],
          A = [void 0, void 0, void 0, .2],
          N = [void 0, 40, 40, 50],
          I = [void 0, 40, 40, 50],
          O = [void 0, void 0, void 0, 50],
          p = [void 0, .9, 1.2, .8],
          G = [void 0, .9, 1.2, 1.2],
          D = [void 0, void 0, void 0, 1.8],
          f = [void 0, 30, 1, 30],
          h = [void 0, 30, 1, 30],
          R = [void 0, void 0, void 0, 30],
          v = [void 0, .05, .075, .075],
          M = [void 0, .05, .075, .075],
          l = [void 0, void 0, void 0, .075],
          L = [void 0, 1, 1, 1],
          m = [void 0, 1, 1, 1],
          P = [void 0, void 0, void 0, 1],
          g = [void 0, _dependency2.v3(0, 420, 0), _dependency2.v3(-360, 520, 0), _dependency2.v3(300, 620, 0)],
          C = [void 0, _dependency2.v3(0, 20, 0), _dependency2.v3(-100, 80, 0), _dependency2.v3(150, -460, 0)],
          x = [void 0, void 0, void 0, _dependency2.v3(0, -560, 0)],
          F = [void 0, .45, .05, .01],
          H = [void 0, 1.85, 2.2, 1],
          U = [void 0, void 0, void 0, 1.5];
        d.startW = c[a], d.waveAmplitude = v[a], d.waveFrequency = f[a], _dependency2.Tween.stopAllByTarget(Z), _dependency2.tween(Z).bindNodeState(false).delay(F[a]).call(function () {
          d.waveProp.w = 200, d.waveDistance = N[a], d.waveSpeed = p[a], d.waveStrength = L[a], d.startWaveEffect(g[a]);
        }).start(), App.uiManager.open({
          type: _dependency22.default,
          bundle: _dependency4.EBundles[_dependency4.EBundles.g1002],
          zIndex: _dependency3.ViewZOrder.UI,
          name: "金龍UIView",
          args: a
        }), _dependency2.tween(Z).bindNodeState(false).delay(H[a]).call(function () {
          d.waveProp.w = 200, d.startW = u[a], d.waveFrequency = h[a], d.waveAmplitude = M[a], d.waveDistance = I[a], d.waveSpeed = G[a], d.waveStrength = m[a], d.startWaveEffect(C[a]);
        }).start(), null != U[a] && _dependency2.tween(Z).bindNodeState(false).delay(U[a]).call(function () {
          d.waveProp.w = 200, d.waveSpeed = D[a], d.startW = A[a], d.waveDistance = O[a], d.waveStrength = P[a], d.waveAmplitude = l[a], d.waveFrequency = R[a], d.startWaveEffect(x[a]);
        }).start();
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (App.uiManager.effectCamera && (App.uiManager.effectCamera.node.active = !1), App.uiManager.effectRoot && (App.uiManager.effectRoot.active = !1), Z.getMachine().previous.id === Z.MG_EXPLODE_AND_DELETE_STATE.id) return Z.MG_DROP_SYMBOL_STATE.id;
        if (Z.getMachine().previous.id === Z.FG_EXPLODE_AND_DELETE_STATE.id) return Z.FG_DROP_SYMBOL_STATE.id;
        if (e.name === _dependency31.GameEvent.SHOW_DRAGON_END) switch (a.getData().parser.currentGameState.action) {
          case "spin":
            return Z.MG_SPIN_TO_STOP_STATE.id;
          case "freeSpin":
            return Z.FG_SPIN_TO_STOP_STATE.id;
        }
        return "";
      }
    }, this.MG_SPIN_TO_STOP_STATE = {
      id: "MG_SPIN_TO_STOP_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency31.GameEvent.SET_REEL_RESULT), dispatch(_dependency31.GameEvent.CAN_STOP_SPIN);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (e.name === _dependency31.GameEvent.REEL_ALL_STOP) {
          var n;
          if (dispatch(_dependency31.GameEvent.STOP_BTM, {
            data: _dependency28.EBTM.REEL_SCROLL
          }), a.getData().parser.currentGameState.startFreeGame) return Z.MG_SHOW_ALL_WIN_STATE.id;
          var r = a.getData().bonusState;
          if (r && r.bonusType === _dependency33.EBonusType.ELIXIR_FURNACE) return Z.MG_SHOW_ALL_WIN_STATE.id;
          var i = null == (n = Z.data.getData().parser.currentGameState) ? void 0 : n.transformInfo,
            _ = i.toSymbol,
            o = i.toWild;
          if (_.length > 0 || o.length > 0) return Z.MG_SHOW_SYMBOL_TRANSFORM_STATE.id;
          if (0 === Z.data.getData().parser.currentGameState.totalWinnings) return Z.MG_CLOSE_SPIN_STATE.id;
          if (_dependency28.default.isTurbo) return Z.MG_EXPLODE_AND_DELETE_STATE.id;
          var s = a.getData().parser.currentGameState.resultView;
          return a.isFullBoard(s) ? Z.MG_SHOW_FULL_COMBO_STATE.id : Z.MG_SHOW_WIN_LINE_STATE.id;
        }
        return "";
      }
    }, this.MG_SHOW_SYMBOL_TRANSFORM_STATE = {
      id: "MG_SHOW_SYMBOL_TRANSFORM_STATE",
      onEntry: function (t) {
        t.event, t.context;
        if (t.sharedData.getData().parser.toSymbolWildVO.symbol === _dependency30.EBackendSymbolID.WILD) {
          dispatch(_dependency31.GameEvent.PLAY_MG_SON_CHARACTER_CHANGE_SYMBOL_ANIM);
          var e = Z.data.is30TimesAnd5Trans() ? 1.2 : 0;
          _dependency2.tween(Z).bindNodeState(false).delay(e).call(function () {
            dispatch(_dependency31.GameEvent.SHOW_SYMBOL_TRANSFORM);
          }).start();
        } else dispatch(_dependency31.GameEvent.PLAY_MG_TWO_CHARACTER_CHANGE_SYMBOL_ANIM), dispatch(_dependency31.GameEvent.SHOW_SYMBOL_TRANSFORM);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (e.name === _dependency31.GameEvent.SHOW_SYMBOL_TRANSFORM_END) {
          var n = a.getData().parser.currentGameState.resultView;
          return a.isFullBoard(n) ? Z.MG_SHOW_FULL_COMBO_STATE.id : Z.MG_SHOW_WIN_LINE_STATE.id;
        }
        return "";
      }
    }, this.MG_SHOW_ALL_WIN_STATE = {
      id: "MG_SHOW_ALL_WIN_STATE",
      onEntry: (b = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
        var a, n;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (e.event, e.context, !(a = e.sharedData).getData().parser.currentGameState.startFreeGame) {
                t.next = 4;
                break;
              }
              return dispatch(_dependency31.GameEvent.SHOW_SCATTER_WIN), t.abrupt("return");
            case 4:
              if (null == (n = a.getData().bonusState) || !n.isBonus) {
                t.next = 16;
                break;
              }
              Log.d("%c bonusState", "color:#999900", a.getData().bonusState), t.t0 = a.getData().bonusState.bonusType, t.next = t.t0 === _dependency33.EBonusType.ELIXIR_FURNACE ? 10 : t.t0 === _dependency33.EBonusType.JP_GAME ? 12 : 14;
              break;
            case 10:
              return dispatch(_dependency31.GameEvent.SHOW_BONUS_WIN), t.abrupt("break", 14);
            case 12:
              return dispatch(_dependency31.GameEvent.START_JACKPOT_GAME), t.abrupt("break", 14);
            case 14:
              t.next = 17;
              break;
            case 16:
              dispatch(_dependency31.GameEvent.SHOW_SYMBOLS_WIN, {
                complete: function () {
                  dispatch(_dependency31.GameEvent.SHOW_SYMBOLS_WIN_END);
                }
              });
            case 17:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return b.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.SHOW_SYMBOLS_WIN_END ? Z.MG_SHOW_WIN_LINE_STATE.id : e.name === _dependency31.GameEvent.SHOW_SCATTER_WIN_END ? Z.FG_SHOW_INTRO_GAME_STATE.id : e.name === _dependency31.GameEvent.SHOW_BONUS_WIN_END ? Z.BG_INTRO_ELIXIR_FURNACE_STATE.id : e.name === _dependency31.GameEvent.START_JACKPOT_GAME ? Z.JP_GAME_INTRO_STATE.id : "";
      }
    }, this.MG_SHOW_FULL_COMBO_STATE = {
      id: "MG_SHOW_FULL_COMBO_STATE",
      onEntry: (J = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              e.event, e.context, e.sharedData, dispatch(_dependency31.GameEvent.SHOW_SYMBOLS_WIN, {
                complete: function () {}
              }), dispatch(_dependency31.GameEvent.SHOW_BOARD_FRAME_ANIM, {
                complete: function () {
                  _dependency2.tween(Z).bindNodeState(false).delay(.5).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
                    return _dependency.regeneratorRuntime().wrap(function (t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          dispatch(_dependency31.GameEvent.SHOW_BOARD_FRAME_ANIM_END);
                        case 1:
                        case "end":
                          return t.stop();
                      }
                    }, t);
                  }))).start();
                }
              });
            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return J.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.SHOW_BOARD_FRAME_ANIM_END ? Z.MG_SHOW_WIN_LINE_STATE.id : "";
      }
    }, this.MG_SHOW_WIN_LINE_STATE = {
      id: "MG_SHOW_WIN_LINE_STATE",
      onEntry: (X = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              e.event, e.context, e.sharedData, dispatch(_dependency31.GameEvent.SHOW_WIN_LINE), dispatch(_dependency31.GameEvent.CAN_SKIP_WIN_LINE);
            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return X.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.SHOW_WIN_LINE_END ? Z.MG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE.id : "";
      }
    }, this.MG_EXPLODE_AND_DELETE_STATE = {
      id: "MG_EXPLODE_AND_DELETE_STATE",
      onEntry: function (t) {
        t.event, t.context;
        var e = t.sharedData;
        if (_dependency28.default.isTurbo) {
          e.getData().parser.currentGameState.winSymbols.some(function (t) {
            return [1, 2, 3, 4].includes(t.symbol);
          }) && dispatch(_dependency31.GameEvent.PLAY_SON_CHARACTER_WIN_ANIM), e.getData().parser.currentGameState.winSymbols.some(function (t) {
            return [5, 6, 7, 8].includes(t.symbol);
          }) && dispatch(_dependency31.GameEvent.PLAY_TWO_CHARACTER_WIN_ANIM);
          var a = Z.data.getData().parser.currentGameState.totalWinnings,
            n = _dependency28.default.getData().winAmountTime;
          dispatch(_dependency1.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
            data: {
              value: a,
              tweenTime: n
            }
          });
        }
        dispatch(_dependency31.GameEvent.SHOW_SYMBOLS_FRAME_OUT);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (e.name == _dependency31.GameEvent.SHOW_SYMBOLS_FRAME_OUT_END) {
          dispatch(_dependency31.GameEvent.UPDATE_TIMES);
          var n = a.getData().parser,
            r = (n.currentGameState, n.currentSpinIndex),
            i = a.getData().gameState[r + 1];
          return i.dragonLevel && 1 !== i.currentTimes ? Z.DRAGON_STATE.id : Z.MG_DROP_SYMBOL_STATE.id;
        }
        return "";
      }
    }, this.MG_DROP_SYMBOL_STATE = {
      id: "MG_DROP_SYMBOL_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency31.GameEvent.SHOW_DROP_SYMBOL);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (e.name == _dependency31.GameEvent.SHOW_DROP_SYMBOL_END) {
          var n = a.getData().parser.currentGameState,
            r = n.currentView,
            i = n.totalViews,
            _ = (n.totalWinnings, n.startFreeGame);
          if (r + 1 === i) return Z.MG_SHOW_TOTAL_WINNINGS_WIN_SCORE_STATE.id;
          if (_) return Z.MG_SHOW_ALL_WIN_STATE.id;
          var o,
            s = null == (o = Z.data.getData().parser.currentGameState) ? void 0 : o.transformInfo,
            T = s.toSymbol,
            S = s.toWild;
          if (T.length > 0 || S.length > 0) return Z.MG_SHOW_SYMBOL_TRANSFORM_STATE.id;
          if (_dependency28.default.isTurbo) return Z.MG_EXPLODE_AND_DELETE_STATE.id;
          var E = a.getData().parser.currentGameState.resultView;
          return a.isFullBoard(E) ? Z.MG_SHOW_FULL_COMBO_STATE.id : Z.MG_SHOW_WIN_LINE_STATE.id;
        }
        return "";
      }
    }, this.MG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE = {
      id: "MG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency31.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name == _dependency31.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_END ? Z.MG_EXPLODE_AND_DELETE_STATE.id : "";
      }
    }, this.MG_SHOW_TOTAL_WINNINGS_WIN_SCORE_STATE = {
      id: "MG_SHOW_TOTAL_WINNINGS_WIN_SCORE_STATE",
      onEntry: function (t) {
        t.event, t.context;
        var e = t.sharedData.getData().parser.currentGameState.totalWinnings,
          a = _dependency28.default.getData().winAmountTime;
        dispatch(_dependency1.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: e,
            tweenTime: a
          }
        }), Z.data.setBigWinReach(e) ? dispatch(_dependency31.GameEvent.SHOW_TOTAL_WIN_CASH_END) : dispatch(_dependency31.GameEvent.SHOW_TOTAL_WIN_CASH);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        if (e.name == _dependency31.GameEvent.SHOW_TOTAL_WIN_CASH_END) {
          var a = Z.data.getData().parser.currentGameState.totalWinnings;
          return Z.data.setBigWinReach(a) ? Z.MG_BIG_WIN_STATE.id : Z.MG_CLOSE_SPIN_STATE.id;
        }
        return "";
      }
    }, this.MG_BIG_WIN_STATE = {
      id: "MG_BIG_WIN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        var e = {
          winnings: Z.data.getData().parser.currentGameState.totalWinnings,
          tweenTime: 5 + 3 * Z.data.getData().parser.bigwinReach.level
        };
        dispatch(_dependency31.GameEvent.SHOW_BIG_WIN, {
          data: e
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.SHOW_BIG_WIN_END ? Z.MG_CLOSE_SPIN_STATE.id : "";
      }
    }, this.MG_DROP_TREASURE_STATE = {
      id: "MG_DROP_TREASURE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        App.uiManager.open({
          type: _dependency24.HeavenlyTreasuresView,
          bundle: Z.data.module,
          zIndex: _dependency3.ViewZOrder.UI,
          name: "天降奇寶"
        }), dispatch(_dependency1.SlotFrameworkEvent.HIDE_REPLAY_INFO_BAR);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.HEAVENLY_TREASURES_RESULT_END ? Z.DROP_TREASURE_CLOSE_STATE.id : "";
      }
    }, this.DROP_TREASURE_CLOSE_STATE = {
      id: "DROP_TREASURE_CLOSE_STATE",
      onEntry: function () {
        if (_dependency11.default.isReplay) dispatch(_dependency31.GameEvent.REPLAY_GAME_END);else {
          dispatch(_dependency1.SlotFrameworkEvent.STOP_AUTO_SPIN);
          var t = {
            bonusType: _dependency33.EBonusType.FORTUNE_LANDING,
            action: _dependency33.BonusStateAction.FINISH,
            ratioIndex: _dependency0.default.ratioIndex,
            ratioValue: _dependency0.default.ratioValue,
            stakeIndex: _dependency0.default.stakeIndex,
            stakeValue: _dependency0.default.stakeValue,
            spinId: Z.data.getData().spinId,
            token: _dependency13.default.currentToken,
            clientType: "web"
          };
          App.senderManager.get(_dependency32.GameSender).sendFortuneLandingFinishReq(t);
        }
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.DROP_TREASURE_RESULT_RESP ? (dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency10.default.amount
          }
        }), Z.MG_WAIT_SPIN_STATE.id) : e.name == _dependency31.GameEvent.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
      }
    }, this.MG_MYSTERY_JACKPOT_STATE = {
      id: "MG_MYSTERY_JACKPOT_STATE",
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        t.event, t.context, t.sharedData;
        return "";
      }
    }, this.MG_CLOSE_SPIN_STATE = {
      id: "MG_CLOSE_SPIN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        for (var e, n = _dependency.createForOfIteratorHelperLoose(Z.data.getData().gameState); !(e = n()).done;) {
          var r = e.value;
          if (Z.data.isFullBoard(null == r ? void 0 : r.resultView)) {
            dispatch(_dependency1.SlotFrameworkEvent.STOP_AUTO_SPIN);
            break;
          }
        }
        var i = Z.data.getData().bonusState;
        if (i && i.bonusType != _dependency33.EBonusType.ELIXIR_FURNACE) switch (i.bonusType) {
          case _dependency33.EBonusType.FORTUNE_LANDING:
            dispatch(_dependency31.GameEvent.START_FORTUNE_GAME);
            break;
          case _dependency33.EBonusType.JP_GAME:
            dispatch(_dependency31.GameEvent.START_JACKPOT_GAME);
            break;
          case _dependency33.EBonusType.LUCKY_WEALTH:
            dispatch(_dependency31.GameEvent.START_LUCKY_WEALTH_GAME);
        } else {
          if (Z.data.getData().parser.currentSpinIsEmpty && _dependency8.default.active && (_dependency8.default.spinsRemaining > 0 || -1 === _dependency8.default.spinsRemaining)) return void _dependency2.tween(Z).bindNodeState(false).delay(.3).call(function () {
            dispatch(_dependency1.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
              data: Z.data.getData().spinId
            });
          }).start();
          if (_dependency11.default.isReplay) return void dispatch(_dependency31.GameEvent.REPLAY_GAME_END);
          Z.data.testStaticSpinFlag ? (Z.data.testStaticSpinFlag = !1, dispatch(_dependency31.GameEvent.PARSER_CLOSE_SPIN_COMPLETED)) : dispatch(_dependency1.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
            data: Z.data.getData().spinId
          });
        }
        dispatch(_dependency31.GameEvent.RESET_TIMES);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        return e.name == _dependency31.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency10.default.amount
          }
        }), Z.processCloseAutoPlay(), Z.data.tempAnimTopMap.clear(), a.getData().isResuming = !1, Z.MG_WAIT_SPIN_STATE.id) : e.name == _dependency31.GameEvent.START_FORTUNE_GAME ? Z.MG_DROP_TREASURE_STATE.id : e.name == _dependency31.GameEvent.START_JACKPOT_GAME ? Z.JP_GAME_INTRO_STATE.id : e.name == _dependency31.GameEvent.START_LUCKY_WEALTH_GAME ? Z.LUCKY_WEALTH_INTRO.id : e.name == _dependency31.GameEvent.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : e.name == _dependency31.GameEvent.START_SPIN ? Z.MG_SPIN_STATE.id : "";
      }
    }, this.FG_CLOSE_SPIN_STATE = {
      id: "FG_CLOSE_SPIN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        _dependency11.default.isReplay ? dispatch(_dependency31.GameEvent.PARSER_CLOSE_SPIN_COMPLETED) : (Z.data.testStaticSpinFlag ? (Z.data.testStaticSpinFlag = !1, dispatch(_dependency31.GameEvent.PARSER_CLOSE_SPIN_COMPLETED)) : dispatch(_dependency1.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: Z.data.getData().spinId
        }), dispatch(_dependency31.GameEvent.RESET_TIMES));
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (e.name == _dependency31.GameEvent.PARSER_CLOSE_SPIN_COMPLETED) {
          var n = Z.data.getData().parser.currentGameState.totalWinnings,
            r = Z.data.setBigWinReach(n);
          return Z.processCloseAutoPlay(), Z.data.tempAnimTopMap.clear(), a.getData().isResuming = !1, r ? Z.FG_BIG_WIN_STATE.id : Z.FG_BACK_TO_MG_RUN_SCORE_STATE.id;
        }
        return "";
      }
    }, this.FG_SHOW_START_ALERT_STATE = {
      id: "FG_SHOW_START_ALERT_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        App.uiManager.open({
          type: _dependency23.FreeGameAlertView,
          bundle: Z.data.module,
          zIndex: _dependency3.ViewZOrder.UI,
          name: "免費遊戲彈窗"
        }).then(function (t) {
          t.showIntroAlert();
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.CLICK_START_FREE_GAME ? (dispatch(_dependency31.GameEvent.CHANGE_GAME_STYLE, {
          data: !1
        }), dispatch(_dependency31.GameEvent.UPDATE_TIMES), Z.FG_WAIT_SPIN_STATE.id) : "";
      }
    }, this.FG_SHOW_INTRO_GAME_STATE = {
      id: "FG_SHOW_INTRO_GAME_STATE",
      onEntry: function () {
        dispatch(_dependency31.GameEvent.SHOW_TRANSITION_IN);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.SHOW_TRANSITION_IN_END ? Z.FG_SHOW_START_ALERT_STATE.id : "";
      }
    }, this.FG_SHOW_SUMMARY_ALERT_STATE = {
      id: "FG_SHOW_SUMMARY_ALERT_STATE",
      onEntry: function () {
        _dependency2.tween(Z).bindNodeState(false).delay(1).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
          return _dependency.regeneratorRuntime().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                App.uiManager.open({
                  type: _dependency23.FreeGameAlertView,
                  bundle: Z.data.module,
                  zIndex: _dependency3.ViewZOrder.UI,
                  name: "免費遊戲彈窗"
                }).then(function (t) {
                  t.showSummaryAlert();
                });
              case 1:
              case "end":
                return t.stop();
            }
          }, t);
        }))).start();
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.CLICK_FINISH_FREE_GAME ? Z.FG_TRANSITION_OUT_STATE.id : "";
      }
    }, this.FG_TRANSITION_OUT_STATE = {
      id: "FG_TRANSITION_OUT_STATE",
      onEntry: function () {
        dispatch(_dependency31.GameEvent.SHOW_TRANSITION_OUT);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.SHOW_TRANSITION_OUT_END ? (dispatch(_dependency31.GameEvent.CHANGE_GAME_STYLE, {
          data: !0
        }), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: 0
          }
        }), Z.FG_CLOSE_SPIN_STATE.id) : "";
      }
    }, this.FG_BACK_TO_MG_RUN_SCORE_STATE = {
      id: "FG_BACK_TO_MG_RUN_SCORE_STATE",
      onEntry: function (t) {
        t.event, t.context;
        var e = t.sharedData.getData().parser.currentGameState.totalWinnings;
        dispatch(_dependency1.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: e,
            needComplete: !0
          },
          complete: function () {
            _dependency11.default.isReplay ? dispatch(_dependency31.GameEvent.REPLAY_GAME_END) : dispatch(_dependency31.GameEvent.CHANGE_MG_CLOSE_SPIN_STATE);
          }
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.CHANGE_MG_CLOSE_SPIN_STATE ? (dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency10.default.amount
          }
        }), Z.MG_WAIT_SPIN_STATE.id) : e.name === _dependency31.GameEvent.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
      }
    }, this.FG_BACK_MG_BIG_WIN_STATE = {
      id: "FG_BACK_MG_BIG_WIN_STATE",
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        t.event, t.context, t.sharedData;
        return "";
      }
    }, this.FG_WAIT_SPIN_STATE = {
      id: "FG_WAIT_SPIN_STATE",
      onEntry: function () {
        dispatch(_dependency31.GameEvent.UPDATE_TIMES), dispatch(_dependency31.GameEvent.UPDATE_FG_REMAINING), dispatch(_dependency31.GameEvent.CHANGE_FG_SPIN_STATE);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.CHANGE_FG_SPIN_STATE ? Z.FG_SPIN_STATE.id : "";
      }
    }, this.FG_SPIN_STATE = {
      id: "FG_SPIN_STATE",
      onEntry: function () {
        dispatch(_dependency31.GameEvent.START_SCROLL), dispatch(_dependency31.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        return e.name === _dependency31.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE ? a.getData().parser.currentGameState.dragonLevel ? Z.DRAGON_STATE.id : Z.FG_SPIN_TO_STOP_STATE.id : "";
      }
    }, this.FG_SPIN_TO_STOP_STATE = {
      id: "FG_SPIN_TO_STOP_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency31.GameEvent.SET_REEL_RESULT), dispatch(_dependency31.GameEvent.CAN_STOP_SPIN);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (e.name === _dependency31.GameEvent.REEL_ALL_STOP) {
          var n;
          dispatch(_dependency31.GameEvent.STOP_BTM, {
            data: _dependency28.EBTM.REEL_SCROLL
          });
          var r = a.getData().parser.currentGameState;
          if (r.currentView + 1 === r.totalViews) return Z.FG_SHOW_SUMMARY_ALERT_STATE.id;
          if (a.getData().parser.currentGameState.startFreeGame) return Z.FG_SHOW_ALL_WIN_STATE.id;
          var i = null == (n = Z.data.getData().parser.currentGameState) ? void 0 : n.transformInfo,
            _ = i.toSymbol,
            o = i.toWild;
          if (_.length > 0 || o.length > 0) return Z.FG_SHOW_SYMBOL_TRANSFORM_STATE.id;
          if (0 === Z.data.getData().parser.currentGameState.winSymbols.length) return Z.FG_WAIT_SPIN_STATE.id;
          var s = a.getData().parser.currentGameState.resultView;
          return a.isFullBoard(s) ? Z.FG_SHOW_FULL_COMBO_STATE.id : Z.FG_SHOW_WIN_LINE_STATE.id;
        }
        return "";
      }
    }, this.FG_SHOW_SYMBOL_TRANSFORM_STATE = {
      id: "FG_SHOW_SYMBOL_TRANSFORM_STATE",
      onEntry: function (t) {
        t.event, t.context;
        if (t.sharedData.getData().parser.toSymbolWildVO.symbol === _dependency30.EBackendSymbolID.WILD) {
          dispatch(_dependency31.GameEvent.PLAY_FG_SON_CHARACTER_CHANGE_SYMBOL_ANIM);
          var e = Z.data.is30TimesAnd5Trans() ? 1.2 : 0;
          _dependency2.tween(Z).bindNodeState(false).delay(e).call(function () {
            dispatch(_dependency31.GameEvent.SHOW_SYMBOL_TRANSFORM);
          }).start();
        } else dispatch(_dependency31.GameEvent.PLAY_FG_TWO_CHARACTER_CHANGE_SYMBOL_ANIM), dispatch(_dependency31.GameEvent.SHOW_SYMBOL_TRANSFORM);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (e.name === _dependency31.GameEvent.SHOW_SYMBOL_TRANSFORM_END) {
          if (0 === a.getData().parser.currentGameState.winSymbols.length) return Z.FG_WAIT_SPIN_STATE.id;
          var n = a.getData().parser.currentGameState.resultView;
          return a.isFullBoard(n) ? Z.FG_SHOW_FULL_COMBO_STATE.id : Z.FG_SHOW_WIN_LINE_STATE.id;
        }
        return "";
      }
    }, this.FG_SHOW_ALL_WIN_STATE = {
      id: "FG_SHOW_ALL_WIN_STATE",
      onEntry: function (t) {
        t.event, t.context;
        t.sharedData.getData().parser.currentGameState.startFreeGame ? dispatch(_dependency31.GameEvent.SHOW_SCATTER_WIN) : dispatch(_dependency31.GameEvent.SHOW_SYMBOLS_WIN, {
          complete: function () {
            dispatch(_dependency31.GameEvent.SHOW_SYMBOLS_WIN_END);
          }
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.SHOW_SYMBOLS_WIN_END ? Z.FG_SHOW_WIN_LINE_STATE.id : e.name === _dependency31.GameEvent.SHOW_SCATTER_WIN_END ? Z.FG_SHOW_INCREASE_REMAINING.id : "";
      }
    }, this.FG_SHOW_INCREASE_REMAINING = {
      id: "FG_SHOW_INCREASE_REMAINING",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency31.GameEvent.INCREASE_FG_REMAINING, {
          complete: function () {
            dispatch(_dependency31.GameEvent.INCREASE_FG_REMAINING_END);
          }
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.INCREASE_FG_REMAINING_END ? Z.FG_WAIT_SPIN_STATE.id : "";
      }
    }, this.FG_SHOW_FULL_COMBO_STATE = {
      id: "FG_SHOW_FULL_COMBO_STATE",
      onEntry: (j = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              e.event, e.context, e.sharedData, dispatch(_dependency31.GameEvent.SHOW_SYMBOLS_WIN, {
                complete: function () {}
              }), dispatch(_dependency31.GameEvent.SHOW_BOARD_FRAME_ANIM, {
                complete: function () {
                  dispatch(_dependency31.GameEvent.SHOW_BOARD_FRAME_ANIM_END);
                }
              });
            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return j.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.SHOW_BOARD_FRAME_ANIM_END ? Z.FG_SHOW_WIN_LINE_STATE.id : "";
      }
    }, this.FG_SHOW_WIN_LINE_STATE = {
      id: "FG_SHOW_WIN_LINE_STATE",
      onEntry: (q = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              e.event, e.context, e.sharedData, dispatch(_dependency31.GameEvent.SHOW_WIN_LINE), dispatch(_dependency31.GameEvent.CAN_SKIP_WIN_LINE);
            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return q.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        if (e.name === _dependency31.GameEvent.SHOW_WIN_LINE_END) return Z.FG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE.id;
      }
    }, this.FG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE = {
      id: "FG_SHOW_CURRENT_VIEW_WIN_SCORE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency31.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name == _dependency31.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_END ? Z.FG_EXPLODE_AND_DELETE_STATE.id : "";
      }
    }, this.FG_EXPLODE_AND_DELETE_STATE = {
      id: "FG_EXPLODE_AND_DELETE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency31.GameEvent.SHOW_SYMBOLS_FRAME_OUT);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (e.name == _dependency31.GameEvent.SHOW_SYMBOLS_FRAME_OUT_END) {
          var n = a.getData().parser.currentSpinIndex,
            r = a.getData().gameState[n + 1];
          return dispatch(_dependency31.GameEvent.UPDATE_TIMES), r.dragonLevel && 1 !== r.currentTimes ? Z.DRAGON_STATE.id : Z.FG_DROP_SYMBOL_STATE.id;
        }
        return "";
      }
    }, this.FG_DROP_SYMBOL_STATE = {
      id: "FG_DROP_SYMBOL_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency31.GameEvent.SHOW_DROP_SYMBOL);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (e.name == _dependency31.GameEvent.SHOW_DROP_SYMBOL_END) {
          var n,
            r = a.getData().parser.currentGameState,
            i = r.freeGameCount,
            _ = r.winSymbols,
            o = r.startFreeGame,
            s = a.getData().parser.currentSpinIndex,
            T = a.getData().gameState[s + 1];
          if (!T || i !== T.freeGameCount) {
            if (o) return Z.FG_SHOW_ALL_WIN_STATE.id;
            var S = Z.data.getData().parser.currentGameState.roundWinnings;
            return Z.data.setBigWinReach(S) ? (dispatch(_dependency31.GameEvent.RESET_FG_CLICK_SKIP_WIN_LINE), Z.FG_WIN_STATE.id) : Z.FG_SHOW_ROUND_WINNINGS_WIN_SCORE_STATE.id;
          }
          var E = null == (n = Z.data.getData().parser.currentGameState) ? void 0 : n.transformInfo,
            d = E.toSymbol,
            c = E.toWild;
          if (d.length > 0 || c.length > 0) return Z.FG_SHOW_SYMBOL_TRANSFORM_STATE.id;
          if (0 === _.length) return dispatch(_dependency31.GameEvent.UPDATE_TIMES), Z.FG_WAIT_SPIN_STATE.id;
          var u = a.getData().parser.currentGameState.resultView;
          return a.isFullBoard(u) ? Z.FG_SHOW_FULL_COMBO_STATE.id : Z.FG_SHOW_WIN_LINE_STATE.id;
        }
        return "";
      }
    }, this.FG_SHOW_ROUND_WINNINGS_WIN_SCORE_STATE = {
      id: "FG_SHOW_ROUND_WINNINGS_WIN_SCORE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency31.GameEvent.SHOW_FG_ROUND_WIN_CASH);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (e.name == _dependency31.GameEvent.SHOW_FG_ROUND_WIN_CASH_END) {
          dispatch(_dependency31.GameEvent.UPDATE_TIMES);
          var n = a.getData().parser.currentGameState;
          return n.currentView + 1 === n.totalViews ? Z.FG_SHOW_SUMMARY_ALERT_STATE.id : Z.FG_WAIT_SPIN_STATE.id;
        }
        return "";
      }
    }, this.FG_WIN_STATE = {
      id: "FG_WIN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        var e = {
          winnings: Z.data.getData().parser.currentGameState.roundWinnings,
          tweenTime: 5
        };
        dispatch(_dependency31.GameEvent.SHOW_WIN, {
          data: e
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (e.name === _dependency31.GameEvent.SHOW_WIN_END) {
          var n = a.getData().parser.currentGameState;
          return n.currentView + 1 === n.totalViews ? Z.FG_SHOW_SUMMARY_ALERT_STATE.id : Z.FG_WAIT_SPIN_STATE.id;
        }
        return "";
      }
    }, this.FG_BIG_WIN_STATE = {
      id: "FG_BIG_WIN_STATE",
      onEntry: function (t) {
        t.event, t.context;
        var e = {
          winnings: t.sharedData.getData().parser.currentGameState.totalWinnings,
          tweenTime: 5 + 3 * Z.data.getData().parser.bigwinReach.level,
          isUpdateInfoBarTotalWinnings: !0
        };
        dispatch(_dependency31.GameEvent.SHOW_BIG_WIN, {
          data: e
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event,
          a = (t.context, t.sharedData);
        if (e.name === _dependency31.GameEvent.SHOW_BIG_WIN_END) {
          var n = a.getData().parser.currentGameState.totalWinnings;
          return dispatch(_dependency1.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
            data: {
              value: n
            }
          }), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
            data: {
              balance: _dependency10.default.amount
            }
          }), _dependency11.default.isReplay ? Z.MG_WAIT_REPLAY_STATE.id : Z.MG_WAIT_SPIN_STATE.id;
        }
        return "";
      }
    }, this.LUCKY_WEALTH_INTRO = {
      id: "LUCKY_WEALTH_INTRO",
      onEntry: function (t) {
        t.event, t.context;
        var e = {
          win: t.sharedData.getData().bonusState.prize
        };
        App.uiManager.open({
          type: _dependency27.default,
          bundle: Z.data.module,
          zIndex: _dependency3.ViewZOrder.UI,
          name: "神秘遊戲",
          args: e
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.LUCKY_WEALTH_END ? Z.LUCKY_WEALTH_CLOSE_STATE.id : "";
      }
    }, this.LUCKY_WEALTH_CLOSE_STATE = {
      id: "LUCKY_WEALTH_CLOSE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        _dependency11.default.isReplay ? dispatch(_dependency31.GameEvent.REPLAY_GAME_END) : (dispatch(_dependency1.SlotFrameworkEvent.STOP_AUTO_SPIN), dispatch(_dependency1.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: Z.data.getData().spinId
        }));
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency10.default.amount
          }
        }), Z.MG_WAIT_SPIN_STATE.id) : e.name == _dependency31.GameEvent.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
      }
    }, this.JP_GAME_INTRO_STATE = {
      id: "JP_GAME_INTRO_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        App.uiManager.open({
          type: _dependency26.JackpotGameView,
          bundle: Z.data.module,
          zIndex: _dependency3.ViewZOrder.UI,
          name: "JP遊戲"
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.JACKPOT_GAME_PICK_END ? Z.JP_GAME_CLOSE_STATE.id : "";
      }
    }, this.JP_GAME_CLOSE_STATE = {
      id: "JP_GAME_CLOSE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        if (_dependency11.default.isReplay) return App.uiManager.close(_dependency18.default), void dispatch(_dependency31.GameEvent.REPLAY_GAME_END);
        dispatch(_dependency1.SlotFrameworkEvent.STOP_AUTO_SPIN), dispatch(_dependency1.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: Z.data.getData().spinId
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency1.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency10.default.amount
          }
        }), Z.MG_WAIT_SPIN_STATE.id) : e.name == _dependency31.GameEvent.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
      }
    }, this.BG_INTRO_ELIXIR_FURNACE_STATE = {
      id: "BG_INTRO_ELIXIR_FURNACE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency1.SlotFrameworkEvent.STOP_AUTO_SPIN), App.uiManager.open({
          type: _dependency21.BonusGameView,
          bundle: Z.data.module,
          zIndex: _dependency3.ViewZOrder.UI,
          name: "煉丹爐"
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var e = t.event;
        t.context, t.sharedData;
        return e.name === _dependency31.GameEvent.BONUS_ELIXIR_FURNACE_END ? Z.MG_CLOSE_SPIN_STATE.id : "";
      }
    };
  }
  var i = t.prototype;
  return i.processCloseAutoPlay = function () {
    0 === _dependency8.default.spinsRemaining && (_dependency8.default.active = !1), _dependency8.default.spinsRemaining <= -1 && (_dependency8.default.spinsRemaining = -1), _dependency8.default.active ? dispatch(_dependency1.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !1
    }) : (dispatch(_dependency1.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !0
    }), _dependency8.default.spinsRemaining = 0);
  }, i.GET_ALL_STATES = function () {
    var t = [];
    for (var e in this) {
      var a = this[e];
      "object" == typeof a && "function" != typeof a && _dependency35.isState(a) && t.push(a);
    }
    return t;
  }, i.getMachine = function () {
    return null == this.stateMachine && (this.stateMachine = _dependency36.StateMachine.from(this.GET_ALL_STATES(), {
      sharedData: App.dataCenter.get(_dependency29.default)
    })), this.stateMachine;
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency29.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), t;
}());
_dependency2.cclegacy._RF.pop();

// Project-I owned progress hook: preserve the original frontend and Editor isolation.
if(!__projectILocalEditor)__projectIInstallHook(_export3, {GameEvent:_dependency31.GameEvent,SlotFrameworkEvent:_dependency1.SlotFrameworkEvent,GameConfigModel:_dependency28.default,EBGM:_dependency28.EBGM,ESpinStatus:_dependency15.ESpinStatus,dispatch:(...args)=>globalThis.dispatch(...args)});
