import { EDITOR as __ownedFeverEditor } from 'cc/env';
import { installFeverStateHooks as __installOwnedFever } from '../backend/FeverHooks';
import { EDITOR as __projectELocalStateProgressEditor } from 'cc/env';
import { installStateHooks as __projectEInstallStateProgress } from '../backend/ProgressHooks';
import { ReelDataSettingObj as __projectELocalReelSettings } from '../../shared/scripts/main-ReelDataSetting';
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Config";
import * as _dependency4 from "../../shared/scripts/main-Bundles";
import * as _dependency5 from "../../shared/scripts/main-UrlUtils";
import * as _dependency6 from "../../shared/scripts/main-index";
import * as _dependency7 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency9 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency0 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency1 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-UrlModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-type2";
import * as _dependency14 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency15 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency16 from "../../shared/scripts/slotFramework-NoTouchingView";
import * as _dependency17 from "../../shared/scripts/slotFramework-SlotTableViewL";
import * as _dependency18 from "../../shared/scripts/slotFramework-SlotTableViewP";
import * as _dependency19 from "./g1012-FreeGameAlertView";
import * as _dependency20 from "./g1012-GameConfigModel";
import * as _dependency21 from "./g1012-GameData";
import * as _dependency22 from "./g1012-GameSymbolID";
import * as _dependency23 from "./g1012-GameEvent";
import * as _dependency24 from "./g1012-GameSender";
import * as _dependency25 from "./g1012-types";
import * as _dependency26 from "./g1012-StateMachineManager";
import * as _dependency27 from "./g1012-ThisProjectUtils";
import * as _dependency28 from "./g1012-GameTempo";
import * as _dependency29 from "./g1012-FullComboView";
import * as _dependency30 from "../../shared/scripts/main-state";
import * as _dependency31 from "../../shared/scripts/main-fsm";
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
var a, e, n, r, i, _, s, c, o, S, T, u, d, E, A, p, I, N, h, G, f, l, O, W, L, D, R, M, m, v, P, x, g, C, F, H, y, U;
function w() {
  if (_dependency7.default.active && _dependency7.default.spinsRemaining > 0) {
    if (App.dataCenter.get(_dependency21.default).currentGameType === _dependency25.EGameType.FREE_GAME) return;
    _dependency7.default.spinsRemaining--;
  }
}
function B() {
  var t = {
      stakeIndex: _dependency11.default.stakeIndex,
      ratioIndex: _dependency11.default.ratioIndex
    },
    a = {
      stakeIndex: _dependency9.default.stakeIndex,
      ratioIndex: _dependency9.default.ratioIndex
    },
    e = _dependency15.ObjectUtils.diffObjects(t, a);
  return Object.keys(e).length > 0;
}
_publish({
  calculateAutoSpin: w,
  needUpdateStake: B
}), _dependency2.cclegacy._RF.push({}, "bc13c0OlfNBlaF6QuBQOjkW", "GameState", void 0);
_publish("GameState", function () {
  function t() {
    var t,
      a,
      i,
      T,
      p,
      G,
      y,
      U,
      b,
      Y,
      k,
      J,
      K,
      V,
      Q,
      j,
      z,
      X,
      Z = this;
    this.stateMachine = null, this.MG_LOADING_STATE = {
      id: "MG_LOADING_STATE",
      initial: !0,
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: (t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        var e;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (e = a.event, a.context, a.sharedData, e.name != _dependency23.GameEvent.LOAD_COMPLETE) {
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
      })), function (a) {
        return t.apply(this, arguments);
      })
    }, this.MG_INIT_STATE = {
      id: "MG_INIT_STATE",
      onEntry: (a = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
        var a, e, n, i, _, S, T, u, A;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (a = _dependency5.default.hasParam("gn") && _dependency5.default.hasParam("t"), e = _dependency5.default.hasParam("spinId"), n = App.gameLoading, _dependency26.default.getStateName() !== _dependency26.EStateMachineName.GAME_STATE) {
                t.next = 26;
                break;
              }
              return t.next = 6, App.senderManager.get(_dependency24.GameSender).initial();
            case 6:
              return t.next = 8, _dependency27.delay(_dependency28.GameTempo.LOADING_BAR_FINISH_DELAY_TIME);
            case 8:
              if (Z.data.currentGameType = _dependency25.EGameType.MAIN_GAME, n.hideProgressBar(), n.hideGameLogo(), App.gameLoading.complete(function () {
                dispatch(_dependency0.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN);
              }), i = _dependency1.default.getData(), _ = i.slotTablesOn, S = App.dataCenter.get(_dependency21.default).getData(), T = S.isResuming, u = "1" === _dependency12.default.getData().searchParams.table, !_ || T) {
                t.next = 24;
                break;
              }
              if (!u) {
                t.next = 19;
                break;
              }
              return t.abrupt("return");
            case 19:
              return A = _dependency14.CmmSlotUtils.getOrientationTarget(_dependency17.default, _dependency18.default), t.next = 22, App.uiManager.open({
                type: A,
                bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
                zIndex: _dependency3.ViewZOrder.UI,
                name: "機台選擇2",
                args: !0
              });
            case 22:
              t.next = 24;
              break;
            case 24:
              t.next = 34;
              break;
            case 26:
              if (_dependency26.default.getStateName() !== _dependency26.EStateMachineName.REPLAY_STATE) {
                t.next = 34;
                break;
              }
              if (!a) {
                t.next = 30;
                break;
              }
              t.next = 34;
              break;
            case 30:
              if (!e) {
                t.next = 34;
                break;
              }
              return t.next = 33, App.senderManager.get(_dependency24.GameSender).replayInInitial();
            case 33:
              n.complete();
            case 34:
            case "end":
              return t.stop();
          }
        }, t);
      })), function () {
        return a.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return _dependency26.default.getStateName() === _dependency26.EStateMachineName.GAME_STATE ? Z.stateMachine.currentStateId == Z.MG_INIT_STATE.id : _dependency26.default.getStateName() === _dependency26.EStateMachineName.REPLAY_STATE || void 0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        return a.name == _dependency23.GameEvent.PARSER_INIT_COMPLETED ? e.getData().isResuming ? Z.MG_WAIT_RESUME_STATE.id : Z.MG_WAIT_SPIN_STATE.id : a.name === _dependency23.GameEvent.PARSER_REPLAY_COMPLETED && _dependency10.default.isReplay ? Z.MG_WAIT_REPLAY_STATE.id : "";
      },
      onExit: function () {}
    }, this.MG_WAIT_REPLAY_STATE = {
      id: "MG_WAIT_REPLAY_STATE",
      onEntry: (i = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        var e;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              e = a.event, a.context, a.sharedData, dispatch(_dependency0.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: _dependency13.ESpinStatus.SPINING
              }), e.name === _dependency23.GameEvent.REPLAY_GAME_END || e.name === _dependency23.GameEvent.SHOW_BIG_WIN_END ? (dispatch(_dependency0.SlotFrameworkEvent.SHOW_REPLAY_BOARD_ALERT), dispatch(_dependency23.GameEvent.CLEAR_ALL_WIN_LINE)) : _dependency2.tween(Z).bindNodeState(false).delay(1.5).call(function () {
                dispatch(_dependency23.GameEvent.START_SPIN, {
                  data: {
                    spinId: null
                  }
                });
              }).start();
            case 3:
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
        var a = t.event;
        t.context, t.sharedData;
        return a.name == _dependency23.GameEvent.START_SPIN ? Z.MG_SPIN_STATE.id : "";
      }
    }, this.MG_WAIT_RESUME_STATE = {
      id: "MG_WAIT_RESUME_STATE",
      onEntry: (p = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              a.event, a.context, a.sharedData, dispatch(_dependency23.GameEvent.SHOW_RESUME_ALERT);
            case 2:
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
      transitionTo: (T = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        var e, n, i, s;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return e = a.event, a.context, a.sharedData, dispatch(_dependency0.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: _dependency13.ESpinStatus.SPINING
              }), t.next = 4, new Promise(function (t) {
                _dependency2.tween(Z).bindNodeState(false).delay(.5).call(function () {
                  t();
                }).start();
              });
            case 4:
              if (e.name != _dependency23.GameEvent.START_RESUME) {
                t.next = 19;
                break;
              }
              if (n = Z.data.getData(), i = n.parser.currentGameState, s = i.startFreeGame, !n.isResuming || 0 !== i.totalWinnings || !1 !== i.startFreeGame || 0 != n.parser.currentGameState.isJp.length) {
                t.next = 12;
                break;
              }
              return t.abrupt("return", Z.MG_CLOSE_SPIN_STATE.id);
            case 12:
              if (!((null == n ? void 0 : n.parser.currentGameState.isJp.length) > 0)) {
                t.next = 16;
                break;
              }
              return t.abrupt("return", Z.JP_WIN_STATE.id);
            case 16:
              if (!s) {
                t.next = 18;
                break;
              }
              return t.abrupt("return", Z.MG_SHOW_SCATTER_STATE.id);
            case 18:
              return t.abrupt("return", Z.MG_SHOW_WIN_SUMMARY_STATE.id);
            case 19:
              return t.abrupt("return", "");
            case 20:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return T.apply(this, arguments);
      })
    }, this.MG_WAIT_SPIN_STATE = {
      id: "MG_WAIT_SPIN_STATE",
      onEntry: (G = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        var e, n, i;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (a.event, a.context, a.sharedData, dispatch(_dependency23.GameEvent.WAIT_SPIN_STATE), _dependency20.default.isSendClose = !1, !(_dependency7.default.active && _dependency7.default.spinsRemaining > 0 || _dependency7.default.active && -1 === _dependency7.default.spinsRemaining)) {
                t.next = 13;
                break;
              }
              if (Z.slotData.checkBalanceAndAlert()) {
                t.next = 8;
                break;
              }
              return dispatch(_dependency0.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: _dependency13.ESpinStatus.IDLE
              }), t.abrupt("return");
            case 8:
              return (e = _dependency20.default.getData().nextSpinDelay) && e > 0 ? _dependency2.tween(Z).bindNodeState(false).delay(e).call(function () {
                dispatch(_dependency23.GameEvent.START_SPIN, {
                  data: {
                    spinId: null
                  }
                });
              }).start() : dispatch(_dependency23.GameEvent.START_SPIN, {
                data: {
                  spinId: null
                }
              }), t.abrupt("return");
            case 13:
              dispatch(_dependency0.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: _dependency13.ESpinStatus.IDLE
              });
            case 14:
              n = Z.data.getData().parser.currentGameState.winSymbols ? Z.data.getData().parser.winSymbols : [], i = Z.data.getData().parser.currentGameState.action, Z.data.getData().parser.currentGameState.totalWinnings > 0 && n.length > 0 && "spin" == i && dispatch(_dependency23.GameEvent.SHOW_WIN_LINE_CYCLE);
            case 17:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return G.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return !![_dependency23.GameEvent.START_SPIN, _dependency23.GameEvent.PARSER_REPLAY_COMPLETED].includes(a.name);
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name == _dependency23.GameEvent.START_SPIN ? Z.MG_SPIN_STATE.id : a.name === _dependency23.GameEvent.PARSER_REPLAY_COMPLETED && _dependency10.default.isReplay ? Z.MG_WAIT_REPLAY_STATE.id : void 0;
      }
    }, this.MG_SPIN_STATE = {
      id: "MG_SPIN_STATE",
      onEntry: (U = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        var e, n, i, s, c;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (e = a.event, a.context, a.sharedData, dispatch(_dependency23.GameEvent.CLEAR_ALL_WIN_LINE), Z.data.tempAnimTopMap.clear(), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: _dependency13.ESpinStatus.SPINING
              }), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
                data: {
                  balance: _dependency1.default.amount
                }
              }), n = _dependency20.default.getData(), i = n.winAmountTime, (s = e.data.spinId) || dispatch(_dependency0.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
                data: {
                  value: 0,
                  tweenTime: i
                }
              }), w(), c = {
                ratioIndex: _dependency9.default.ratioIndex,
                ratioValue: _dependency9.default.ratioValue,
                stakeIndex: _dependency9.default.stakeIndex,
                stakeValue: _dependency9.default.stakeValue
              }, dispatch(_dependency0.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null), !_dependency10.default.isReplay) {
                t.next = 15;
                break;
              }
              _dependency2.tween(Z).bindNodeState(false).delay(.309).call(function () {
                dispatch(_dependency23.GameEvent.PARSER_SPIN_COMPLETED);
              }).start(), t.next = 18;
              break;
            case 15:
              if (!Z.data.testStaticSpinFlag) {
                t.next = 17;
                break;
              }
              return t.abrupt("return");
            case 17:
              dispatch(_dependency0.SlotFrameworkEvent.SEND_SPIN_REQUEST, {
                data: {
                  spinId: s,
                  stakeVO: c,
                  updateStake: B()
                }
              });
            case 18:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return U.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return !![_dependency23.GameEvent.PARSER_SPIN_COMPLETED].includes(a.name);
      },
      transitionTo: (y = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        var e;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (e = a.event, a.context, a.sharedData, e.name != _dependency23.GameEvent.PARSER_SPIN_COMPLETED) {
                t.next = 3;
                break;
              }
              return t.abrupt("return", Z.MG_SPIN_TO_STOP_STATE.id);
            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return y.apply(this, arguments);
      })
    }, this.MG_SPIN_TO_STOP_STATE = {
      id: "MG_SPIN_TO_STOP_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency23.GameEvent.SET_REEL_RESULT), dispatch(_dependency23.GameEvent.CAN_STOP_SPIN);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name === _dependency23.GameEvent.REEL_ALL_STOP) {
          if (e.getData().parser.currentGameState.startFreeGame) return Z.MG_SHOW_SCATTER_STATE.id;
          if (0 === Z.data.getData().parser.currentGameState.totalWinnings) return Z.MG_CLOSE_SPIN_STATE.id;
          var n = e.getData().parser.currentGameState.view,
            r = e.isFullBoard(n, [_dependency22.EBackendSymbolID.WILD]),
            i = Z.data.getData().parser.currentGameState,
            _ = i.totalWinnings,
            s = i.isJp,
            c = (i.startFreeGame, Z.data.setBigWinReach(_));
          return s.length > 0 ? Z.JP_WIN_STATE.id : r ? Z.MG_SHOW_FULL_COMBO_STATE.id : null !== c ? Z.MG_SHOW_ALL_WIN_LINE_STATE.id : Z.MG_SHOW_WIN_SUMMARY_STATE.id;
        }
        return "";
      }
    }, this.MG_SHOW_FULL_COMBO_STATE = {
      id: "MG_SHOW_FULL_COMBO_STATE",
      onEntry: (b = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              a.event, a.context, a.sharedData, dispatch(_dependency23.GameEvent.SHOW_CHARACTER_WIN), dispatch(_dependency23.GameEvent.SHOW_BOARD_FRAME_ANIM, {
                complete: function () {}
              }), dispatch(_dependency23.GameEvent.SHOW_SYMBOLS_WIN, {
                complete: function () {
                  dispatch(_dependency23.GameEvent.SHOW_ALL_WIN_LINE), _dependency2.tween(Z).bindNodeState(false).delay(1.2).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
                    return _dependency.regeneratorRuntime().wrap(function (t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return t.next = 2, App.uiManager.open({
                            type: _dependency29.FullComboView,
                            bundle: Z.data.module,
                            zIndex: _dependency3.ViewZOrder.UI,
                            name: "FullCombo"
                          });
                        case 2:
                          dispatch(_dependency23.GameEvent.SHOW_FULL_COMBO);
                        case 3:
                        case "end":
                          return t.stop();
                      }
                    }, t);
                  }))).start();
                },
                data: !0
              });
            case 4:
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
        var a = t.event;
        t.context, t.sharedData;
        if (a.name === _dependency23.GameEvent.SHOW_FULL_COMBO_END) {
          var e = Z.data.getData().parser.currentGameState.totalWinnings;
          return Z.data.setBigWinReach(e) ? Z.MG_BIG_WIN_STATE.id : (dispatch(_dependency23.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
            data: e
          }), dispatch(_dependency23.GameEvent.CLEAR_ALL_WIN_LINE), Z.MG_CLOSE_SPIN_STATE.id);
        }
        return "";
      }
    }, this.MG_SHOW_SCATTER_STATE = {
      id: "MG_SHOW_SCATTER_STATE",
      onEntry: (Y = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              a.event, a.context, a.sharedData, dispatch(_dependency23.GameEvent.SHOW_SCATTER_WIN);
            case 2:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return Y.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.SHOW_SCATTER_WIN_END ? Z.MG_SHOW_WIN_SUMMARY_STATE.id : "";
      }
    }, this.MG_SHOW_WIN_SUMMARY_STATE = {
      id: "MG_SHOW_WIN_SUMMARY_STATE",
      onEntry: (k = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              a.event, a.context, a.sharedData, dispatch(_dependency23.GameEvent.SHOW_CHARACTER_WIN), (Z.data.getData().parser.winSymbols ? Z.data.getData().parser.winSymbols : []).length > 0 ? (dispatch(_dependency23.GameEvent.SHOW_WIN_SUMMARY), dispatch(_dependency23.GameEvent.SHOW_TOTAL_WIN_CASH), dispatch(_dependency23.GameEvent.CAN_SKIP_WIN_LINE)) : dispatch(_dependency23.GameEvent.SHOW_WIN_SUMMARY_END);
            case 4:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return k.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData, Z.data.getData().parser.currentGameState.startFreeGame);
        return a.name === _dependency23.GameEvent.SHOW_WIN_SUMMARY_END ? e ? (Z.data.currentGameType = _dependency25.EGameType.FREE_GAME, dispatch(_dependency23.GameEvent.CLEAR_ALL_WIN_LINE), Z.FG_SHOW_INTRO_GAME_STATE.id) : Z.MG_CLOSE_SPIN_STATE.id : "";
      }
    }, this.MG_SHOW_ALL_WIN_LINE_STATE = {
      id: "MG_SHOW_ALL_WIN_LINE_STATE",
      onEntry: (J = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              a.event, a.context, a.sharedData, dispatch(_dependency23.GameEvent.SHOW_CHARACTER_WIN), dispatch(_dependency23.GameEvent.SHOW_ALL_WIN_LINE), dispatch(_dependency23.GameEvent.SHOW_SYMBOLS_WIN, {
                complete: function () {
                  dispatch(_dependency23.GameEvent.SHOW_ALL_WIN_LINE_END);
                },
                data: !0
              });
            case 4:
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
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.SHOW_ALL_WIN_LINE_END ? Z.MG_BIG_WIN_STATE.id : "";
      }
    }, this.MG_BIG_WIN_STATE = {
      id: "MG_BIG_WIN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        var a = {
          winnings: Z.data.getData().parser.currentGameState.totalWinnings,
          tweenTime: 5 + 3 * Z.data.getData().parser.bigwinReach.level,
          isUpdateInfoBarTotalWinnings: !0
        };
        dispatch(_dependency23.GameEvent.SHOW_BIG_WIN, {
          data: a
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.SHOW_BIG_WIN_END ? (dispatch(_dependency23.GameEvent.CLEAR_ALL_WIN_LINE), dispatch(_dependency23.GameEvent.HIDE_SYMBOLS_WIN), Z.MG_CLOSE_SPIN_STATE.id) : "";
      }
    }, this.JP_WIN_STATE = {
      id: "JP_WIN_STATE",
      onEntry: (K = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        var e;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              a.event, a.context, a.sharedData, (e = Z.data.getData().parser.currentGameState).totalWinnings, e.view, dispatch(_dependency23.GameEvent.SHOW_JP_SYMBOLS_WIN), _dependency2.tween(Z).bindNodeState(false).delay(1.5).call(function () {
                dispatch(_dependency23.GameEvent.HIDE_SYMBOLS_WIN), dispatch(_dependency23.GameEvent.SHOW_JP, {});
              }).start();
            case 4:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return K.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.SHOW_JP_END ? Z.MG_CLOSE_SPIN_STATE.id : "";
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
        for (var a, n = _dependency.createForOfIteratorHelperLoose(Z.data.getData().gameState); !(a = n()).done;) {
          var r = a.value;
          if (Z.data.isFullBoard(null == r ? void 0 : r.view, [_dependency22.EBackendSymbolID.WILD])) {
            dispatch(_dependency0.SlotFrameworkEvent.STOP_AUTO_SPIN);
            break;
          }
        }
        Z.data.getData().bonusState;
        Z.data.getData().parser.currentSpinIsEmpty && _dependency7.default.active && (_dependency7.default.spinsRemaining > 0 || -1 === _dependency7.default.spinsRemaining) ? _dependency2.tween(Z).bindNodeState(false).delay(1e-4).call(function () {
          dispatch(_dependency0.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
            data: Z.data.getData().spinId
          });
        }).start() : _dependency10.default.isReplay ? dispatch(_dependency23.GameEvent.REPLAY_GAME_END) : Z.data.testStaticSpinFlag ? (Z.data.testStaticSpinFlag = !1, dispatch(_dependency23.GameEvent.PARSER_CLOSE_SPIN_COMPLETED)) : dispatch(_dependency0.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: Z.data.getData().spinId
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        return a.name == _dependency23.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency0.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency1.default.amount
          }
        }), Z.processCloseAutoPlay(), e.getData().isResuming = !1, Z.MG_WAIT_SPIN_STATE.id) : a.name == _dependency23.GameEvent.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : a.name == _dependency23.GameEvent.START_SPIN ? Z.MG_SPIN_STATE.id : "";
      }
    }, this.FG_SHOW_INTRO_GAME_STATE = {
      id: "FG_SHOW_INTRO_GAME_STATE",
      onEntry: function () {
        dispatch(_dependency23.GameEvent.SHOW_TRANSITION_IN);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.SHOW_TRANSITION_IN_END ? Z.FG_SHOW_START_ALERT_STATE.id : "";
      }
    }, this.FG_SHOW_START_ALERT_STATE = {
      id: "FG_SHOW_START_ALERT_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        _dependency2.tween(Z).bindNodeState(false).delay(.2).call(function () {
          dispatch(_dependency23.GameEvent.PLAY_BTM, {
            data: {
              url: _dependency20.EBTM.TRANSITIONS,
              loop: !0
            }
          });
        }).start(), App.uiManager.open({
          type: _dependency19.FreeGameAlertView,
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
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.CLICK_START_FREE_GAME ? (dispatch(_dependency23.GameEvent.CHANGE_GAME_STYLE, {
          data: !1
        }), Z.FG_WAIT_SPIN_STATE.id) : "";
      }
    }, this.FG_BACK_TO_MG_RUN_SCORE_STATE = {
      id: "FG_BACK_TO_MG_RUN_SCORE_STATE",
      onEntry: function (t) {
        t.event, t.context;
        var a = t.sharedData.getData().parser.currentGameState.totalWinnings;
        dispatch(_dependency0.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: a,
            needComplete: !0
          },
          complete: function () {
            _dependency10.default.isReplay ? dispatch(_dependency23.GameEvent.REPLAY_GAME_END) : dispatch(_dependency23.GameEvent.CHANGE_MG_CLOSE_SPIN_STATE);
          }
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.CHANGE_MG_CLOSE_SPIN_STATE ? (dispatch(_dependency0.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency1.default.amount
          }
        }), Z.MG_WAIT_SPIN_STATE.id) : a.name === _dependency23.GameEvent.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
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
      onEntry: (Q = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              dispatch(_dependency23.GameEvent.UPDATE_FG_REMAINING), dispatch(_dependency23.GameEvent.CHANGE_FG_SPIN_STATE);
            case 2:
            case "end":
              return t.stop();
          }
        }, t);
      })), function () {
        return Q.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: (V = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        var e;
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (e = a.event, a.context, a.sharedData, e.name !== _dependency23.GameEvent.CHANGE_FG_SPIN_STATE) {
                t.next = 3;
                break;
              }
              return t.abrupt("return", Z.FG_SPIN_STATE.id);
            case 3:
              return t.abrupt("return", "");
            case 4:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return V.apply(this, arguments);
      })
    }, this.FG_SPIN_STATE = {
      id: "FG_SPIN_STATE",
      onEntry: function () {
        dispatch(_dependency23.GameEvent.CLEAR_ALL_WIN_LINE), Z.data.tempAnimTopMap.clear(), dispatch(_dependency23.GameEvent.START_SCROLL), dispatch(_dependency23.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE ? Z.FG_SPIN_TO_STOP_STATE.id : "";
      }
    }, this.FG_SPIN_TO_STOP_STATE = {
      id: "FG_SPIN_TO_STOP_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency23.GameEvent.SET_REEL_RESULT), dispatch(_dependency23.GameEvent.CAN_STOP_SPIN);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name === _dependency23.GameEvent.REEL_ALL_STOP) {
          var n = e.getData().parser.currentGameState,
            r = 0 === n.numFreeSpins;
          if (n.startFreeGame) return Z.FG_SHOW_SCATTER_WIN_STATE.id;
          if (null == Z.data.getData().parser.currentGameState.winSymbols || 0 === Z.data.getData().parser.currentGameState.winSymbols.length) return r ? Z.data.setBigWinReach(e.getData().parser.currentGameState.totalWinnings) ? Z.FG_BIG_WIN_STATE.id : Z.FG_SHOW_SUMMARY_ALERT_STATE.id : Z.FG_WAIT_SPIN_STATE.id;
          var i = e.getData().parser.currentGameState.view,
            _ = (e.getData().parser.currentGameState.startFreeGame, e.isFullBoard(i, [_dependency22.EBackendSymbolID.WILD])),
            s = Z.data.setBigWinReach(e.getData().parser.currentGameState.currentWinnings);
          return _ ? Z.FG_SHOW_FULL_COMBO_STATE.id : null != s ? Z.FG_SHOW_ALL_WIN_LINE_STATE.id : Z.FG_SHOW_WIN_SUMMARY_STATE.id;
        }
        return "";
      }
    }, this.FG_SHOW_ALL_WIN_LINE_STATE = {
      id: "FG_SHOW_ALL_WIN_LINE_STATE",
      onEntry: (j = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              a.event, a.context, a.sharedData, dispatch(_dependency23.GameEvent.SHOW_CHARACTER_WIN), dispatch(_dependency23.GameEvent.SHOW_ALL_WIN_LINE), dispatch(_dependency23.GameEvent.SHOW_SYMBOLS_WIN, {
                complete: function () {
                  dispatch(_dependency23.GameEvent.SHOW_ALL_WIN_LINE_END);
                },
                data: !0
              });
            case 4:
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
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.SHOW_ALL_WIN_LINE_END ? Z.FG_WIN_STATE.id : "";
      }
    }, this.FG_SHOW_SCATTER_WIN_STATE = {
      id: "FG_SHOW_SCATTER_WIN_STATE",
      onEntry: function (t) {
        t.event, t.context;
        t.sharedData.getData().parser.currentGameState.startFreeGame && dispatch(_dependency23.GameEvent.SHOW_SCATTER_WIN);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.SHOW_SCATTER_WIN_END ? Z.FG_SHOW_INCREASE_REMAINING.id : "";
      }
    }, this.FG_SHOW_INCREASE_REMAINING = {
      id: "FG_SHOW_INCREASE_REMAINING",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency23.GameEvent.INCREASE_FG_REMAINING, {
          complete: function () {
            dispatch(_dependency23.GameEvent.INCREASE_FG_REMAINING_END);
          }
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name === _dependency23.GameEvent.INCREASE_FG_REMAINING_END) {
          var n = e.getData().parser.currentGameState,
            r = n.currentWinnings,
            i = n.winSymbols;
          return i && i.length > 0 || r > 0 ? Z.FG_SHOW_WIN_SUMMARY_STATE.id : Z.FG_WAIT_SPIN_STATE.id;
        }
        return "";
      }
    }, this.FG_SHOW_FULL_COMBO_STATE = {
      id: "FG_SHOW_FULL_COMBO_STATE",
      onEntry: (z = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              a.event, a.context, a.sharedData, dispatch(_dependency23.GameEvent.SHOW_CHARACTER_WIN), dispatch(_dependency23.GameEvent.SHOW_BOARD_FRAME_ANIM, {
                complete: function () {}
              }), dispatch(_dependency23.GameEvent.SHOW_SYMBOLS_WIN, {
                complete: function () {
                  dispatch(_dependency23.GameEvent.SHOW_ALL_WIN_LINE), _dependency2.tween(Z).bindNodeState(false).delay(1.2).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
                    return _dependency.regeneratorRuntime().wrap(function (t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return t.next = 2, App.uiManager.open({
                            type: _dependency29.FullComboView,
                            bundle: Z.data.module,
                            zIndex: _dependency3.ViewZOrder.UI,
                            name: "FullCombo"
                          });
                        case 2:
                          dispatch(_dependency23.GameEvent.SHOW_FULL_COMBO);
                        case 3:
                        case "end":
                          return t.stop();
                      }
                    }, t);
                  }))).start();
                },
                data: !0
              });
            case 4:
            case "end":
              return t.stop();
          }
        }, t);
      })), function (t) {
        return z.apply(this, arguments);
      }),
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        if (a.name === _dependency23.GameEvent.SHOW_FULL_COMBO_END) {
          var e = Z.data.getData().parser.currentGameState,
            n = e.totalWinnings,
            r = e.currentWinnings;
          if (Z.data.setBigWinReach(r)) return Z.FG_WIN_STATE.id;
          dispatch(_dependency23.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
            data: n
          });
        }
        return "";
      }
    }, this.FG_SHOW_WIN_SUMMARY_STATE = {
      id: "FG_SHOW_WIN_SUMMARY_STATE",
      onEntry: (X = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(a) {
        return _dependency.regeneratorRuntime().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              a.event, a.context, a.sharedData, dispatch(_dependency23.GameEvent.SHOW_CHARACTER_WIN), dispatch(_dependency23.GameEvent.SHOW_WIN_SUMMARY), dispatch(_dependency23.GameEvent.SHOW_TOTAL_WIN_CASH), dispatch(_dependency23.GameEvent.CAN_SKIP_WIN_LINE);
            case 5:
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
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name === _dependency23.GameEvent.SHOW_WIN_SUMMARY_END) {
          var n = e.getData().parser.currentGameState,
            r = n.numFreeSpins,
            i = (n.winSymbols, n.startFreeGame, n.totalWinnings),
            _ = e.getData().parser.currentSpinIndex,
            s = (e.getData().gameState[_ + 1], 0 == r);
          return dispatch(_dependency23.GameEvent.CLEAR_ALL_WIN_LINE), s ? e.setBigWinReach(i) ? Z.FG_BIG_WIN_STATE.id : Z.FG_SHOW_SUMMARY_ALERT_STATE.id : Z.FG_WAIT_SPIN_STATE.id;
        }
      }
    }, this.FG_WIN_STATE = {
      id: "FG_WIN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        var a = {
          winnings: Z.data.getData().parser.currentGameState.currentWinnings,
          tweenTime: 5
        };
        dispatch(_dependency23.GameEvent.SHOW_WIN, {
          data: a
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name === _dependency23.GameEvent.SHOW_WIN_END) {
          var n = e.getData().parser.currentGameState,
            r = n.numFreeSpins,
            i = n.totalWinnings,
            _ = 0 === r;
          return dispatch(_dependency23.GameEvent.CLEAR_ALL_WIN_LINE), dispatch(_dependency23.GameEvent.HIDE_SYMBOLS_WIN), _ ? null !== Z.data.setBigWinReach(i) ? Z.FG_BIG_WIN_STATE.id : Z.FG_SHOW_SUMMARY_ALERT_STATE.id : Z.FG_WAIT_SPIN_STATE.id;
        }
        return "";
      }
    }, this.FG_BIG_WIN_STATE = {
      id: "FG_BIG_WIN_STATE",
      onEntry: function (t) {
        t.event, t.context;
        var a = {
          winnings: t.sharedData.getData().parser.currentGameState.totalWinnings,
          tweenTime: 5 + 3 * Z.data.getData().parser.bigwinReach.level,
          isUpdateInfoBarTotalWinnings: !1
        };
        dispatch(_dependency23.GameEvent.SHOW_BIG_WIN, {
          data: a
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name === _dependency23.GameEvent.SHOW_BIG_WIN_END) {
          e.getData().parser.currentGameState.totalWinnings;
          return Z.FG_SHOW_SUMMARY_ALERT_STATE.id;
        }
        return "";
      }
    }, this.FG_SHOW_SUMMARY_ALERT_STATE = {
      id: "FG_SHOW_SUMMARY_ALERT_STATE",
      onEntry: function () {
        dispatch(_dependency23.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency20.EBTM.TRANSITION_IN_AND_OUT
          }
        }), App.globalAudio.pauseMusic(), dispatch(_dependency23.GameEvent.SHOW_FG_SUMMARY_ALERT_STATE), _dependency2.tween(Z).bindNodeState(false).delay(.2).call(function () {
          dispatch(_dependency23.GameEvent.PLAY_BTM, {
            data: {
              url: _dependency20.EBTM.TRANSITIONS,
              loop: !0
            }
          });
        }).delay(1).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
          return _dependency.regeneratorRuntime().wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                App.uiManager.open({
                  type: _dependency19.FreeGameAlertView,
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
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.CLICK_FINISH_FREE_GAME ? Z.FG_TRANSITION_OUT_STATE.id : "";
      }
    }, this.FG_TRANSITION_OUT_STATE = {
      id: "FG_TRANSITION_OUT_STATE",
      onEntry: function () {
        dispatch(_dependency23.GameEvent.SHOW_TRANSITION_OUT);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.SHOW_TRANSITION_OUT_END ? (dispatch(_dependency23.GameEvent.CHANGE_GAME_STYLE, {
          data: !0
        }), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: 0
          }
        }), Z.FG_CLOSE_SPIN_STATE.id) : "";
      }
    }, this.FG_CLOSE_SPIN_STATE = {
      id: "FG_CLOSE_SPIN_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        _dependency10.default.isReplay ? dispatch(_dependency23.GameEvent.REPLAY_GAME_END) : Z.data.testStaticSpinFlag ? (Z.data.testStaticSpinFlag = !1, dispatch(_dependency23.GameEvent.PARSER_CLOSE_SPIN_COMPLETED)) : dispatch(_dependency0.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: Z.data.getData().spinId
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event,
          e = (t.context, t.sharedData);
        if (a.name == _dependency23.GameEvent.PARSER_CLOSE_SPIN_COMPLETED) {
          var n = Z.data.getData().parser.currentGameState.totalWinnings;
          Z.data.setBigWinReach(n);
          return Z.processCloseAutoPlay(), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
            data: {
              balance: _dependency1.default.amount
            }
          }), e.getData().isResuming = !1, Z.MG_WAIT_SPIN_STATE.id;
        }
        return a.name == _dependency23.GameEvent.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
      }
    }, this.LUCKY_WEALTH_CLOSE_STATE = {
      id: "LUCKY_WEALTH_CLOSE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        _dependency10.default.isReplay ? dispatch(_dependency23.GameEvent.REPLAY_GAME_END) : (dispatch(_dependency0.SlotFrameworkEvent.STOP_AUTO_SPIN), dispatch(_dependency0.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: Z.data.getData().spinId
        }));
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency0.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency1.default.amount
          }
        }), Z.MG_WAIT_SPIN_STATE.id) : a.name == _dependency23.GameEvent.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
      }
    }, this.JP_GAME_INTRO_STATE = {
      id: "JP_GAME_INTRO_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.JACKPOT_GAME_PICK_END ? Z.JP_GAME_CLOSE_STATE.id : "";
      }
    }, this.JP_GAME_CLOSE_STATE = {
      id: "JP_GAME_CLOSE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        if (_dependency10.default.isReplay) return App.uiManager.close(_dependency16.default), void dispatch(_dependency23.GameEvent.REPLAY_GAME_END);
        dispatch(_dependency0.SlotFrameworkEvent.STOP_AUTO_SPIN), dispatch(_dependency0.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: Z.data.getData().spinId
        });
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency0.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency1.default.amount
          }
        }), Z.MG_WAIT_SPIN_STATE.id) : a.name == _dependency23.GameEvent.REPLAY_GAME_END ? Z.MG_WAIT_REPLAY_STATE.id : "";
      }
    }, this.BG_INTRO_ELIXIR_FURNACE_STATE = {
      id: "BG_INTRO_ELIXIR_FURNACE_STATE",
      onEntry: function (t) {
        t.event, t.context, t.sharedData;
        dispatch(_dependency0.SlotFrameworkEvent.STOP_AUTO_SPIN);
      },
      transitionGuard: function (t) {
        t.event, t.context, t.sharedData;
        return !0;
      },
      transitionTo: function (t) {
        var a = t.event;
        t.context, t.sharedData;
        return a.name === _dependency23.GameEvent.BONUS_ELIXIR_FURNACE_END ? Z.MG_CLOSE_SPIN_STATE.id : "";
      }
    };
  }
  var i = t.prototype;
  return i.processCloseAutoPlay = function () {
    0 === _dependency7.default.spinsRemaining && (_dependency7.default.active = !1), _dependency7.default.spinsRemaining <= -1 && (_dependency7.default.spinsRemaining = -1), _dependency7.default.active ? dispatch(_dependency0.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !1
    }) : (dispatch(_dependency0.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !0
    }), _dependency7.default.spinsRemaining = 0);
  }, i.GET_ALL_STATES = function () {
    var t = [];
    for (var a in this) {
      var e = this[a];
      "object" == typeof e && "function" != typeof e && _dependency30.isState(e) && t.push(e);
    }
    return t;
  }, i.getMachine = function () {
    return null == this.stateMachine && (this.stateMachine = _dependency31.StateMachine.from(this.GET_ALL_STATES(), {
      sharedData: App.dataCenter.get(_dependency21.default)
    })), this.stateMachine;
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency21.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), t;
}());
_dependency2.cclegacy._RF.pop();

// Owned local resumed FG: use original reel-stop state at the saved cursor.
if(!__projectELocalStateProgressEditor)__projectEInstallStateProgress(_export3,{GameEvent:_dependency23.GameEvent,SlotFrameworkEvent:_dependency0.SlotFrameworkEvent,GameConfigModel:_dependency20.default,EBGM:_dependency20.EBGM,ESpinStatus:_dependency13.ESpinStatus,ReelDataSettingObj:__projectELocalReelSettings,dispatch:(...args)=>globalThis.dispatch(...args)});

// Explicit own local bridge; retain original nodes, native states and all nonlocal routes.
if(!__ownedFeverEditor)__installOwnedFever(_export3,{GameEvent:_dependency23.GameEvent,SlotFrameworkEvent:_dependency0.SlotFrameworkEvent,ESpinStatus:_dependency13.ESpinStatus,dispatch:(...args)=>globalThis.dispatch(...args)});
