// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Config";
import * as _dependency4 from "../../shared/scripts/main-Bundles";
import * as _dependency5 from "../../shared/scripts/main-ServerModel";
import * as _dependency6 from "../../shared/scripts/main-UrlUtils";
import * as _dependency7 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency0 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-UrlModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-type2";
import * as _dependency12 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency13 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency14 from "../../shared/scripts/slotFramework-SlotTableViewL";
import * as _dependency15 from "../../shared/scripts/slotFramework-SlotTableViewP";
import * as _dependency16 from "./g1011-GameConfigModel";
import * as _dependency17 from "./g1011-GameData";
import * as _dependency18 from "./g1011-GameTempo";
import * as _dependency19 from "./g1011-GameEvent";
import * as _dependency20 from "./g1011-GameSender";
import * as _dependency21 from "./g1011-types";
import * as _dependency22 from "./g1011-ThisProjectUtils";
import * as _dependency23 from "./g1011-StateFactory";
import * as _dependency24 from "./g1011-StateHelpers";
import * as _dependency25 from "./g1011-StateMachineManager";
import * as _dependency26 from "./g1011-StateId";
import * as _dependency27 from "./g1011-FullComboView";
var _export;
export { _export as createMgStates };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "createMgStates":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var a, e, n, i, r, _, s, S, o, c, u, d, E, I, T, p, l, N, A, L, f, M, m, O, G, P, W, R, g, h, D, C, v, U, y, H, b, B;
_publish("createMgStates", function (t) {
  return [_dependency23.defineState({
    id: _dependency26.StateId.MG_LOADING,
    initial: !0,
    transitionTo: function (t) {
      if (t.event.name == _dependency19.GameEvent.LOAD_COMPLETE) return _dependency26.StateId.MG_INIT;
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.MG_INIT,
    onEntry: (Y = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function a() {
      var n, i, r, u, d, T, l, m, O;
      return _dependency.regeneratorRuntime().wrap(function (a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            if (Log.d("%c MG_INIT_STATE ", _dependency13.getKeyStyle(_dependency13.KeyStyle.Core)), n = _dependency6.default.hasParam("gn") && _dependency6.default.hasParam("t"), i = _dependency6.default.hasParam("spinId"), r = App.gameLoading, _dependency25.default.getStateName() !== _dependency25.EStateMachineName.GAME_STATE) {
              a.next = 25;
              break;
            }
            return a.next = 7, App.senderManager.get(_dependency20.GameSender).initial();
          case 7:
            return a.next = 9, _dependency22.delay(_dependency18.GameTempo.LOADING_BAR_FINISH_DELAY_TIME);
          case 9:
            if (t.data.currentGameType = _dependency21.EGameType.MAIN_GAME, r.hideProgressBar(), r.hideGameLogo(), App.gameLoading.complete(function () {
              dispatch(_dependency9.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN);
            }), u = _dependency0.default.getData(), d = u.slotTablesOn, T = App.dataCenter.get(_dependency17.default).getData(), l = T.isResuming, m = "1" === _dependency10.default.getData().searchParams.table, !d || l || _dependency5.default.mode === _dependency5.EServerMode.STATIC) {
              a.next = 23;
              break;
            }
            if (!m) {
              a.next = 20;
              break;
            }
            return a.abrupt("return");
          case 20:
            return O = _dependency12.CmmSlotUtils.getOrientationTarget(_dependency14.default, _dependency15.default), a.next = 23, App.uiManager.open({
              type: O,
              bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
              zIndex: _dependency3.ViewZOrder.UI,
              name: "機台選擇2",
              args: !0
            });
          case 23:
            a.next = 33;
            break;
          case 25:
            if (_dependency25.default.getStateName() !== _dependency25.EStateMachineName.REPLAY_STATE) {
              a.next = 33;
              break;
            }
            if (!n) {
              a.next = 29;
              break;
            }
            a.next = 33;
            break;
          case 29:
            if (!i) {
              a.next = 33;
              break;
            }
            return a.next = 32, App.senderManager.get(_dependency20.GameSender).replayInInitial();
          case 32:
            r.complete();
          case 33:
          case "end":
            return a.stop();
        }
      }, a);
    })), function () {
      return Y.apply(this, arguments);
    }),
    transitionGuard: function () {
      return _dependency25.default.getStateName() === _dependency25.EStateMachineName.GAME_STATE ? t.stateMachine.currentStateId == _dependency26.StateId.MG_INIT : _dependency25.default.getStateName() === _dependency25.EStateMachineName.REPLAY_STATE || void 0;
    },
    transitionTo: function (t) {
      var a = t.event,
        e = t.sharedData;
      return a.name == _dependency19.GameEvent.PARSER_INIT_COMPLETED ? e.getData().isResuming ? _dependency26.StateId.MG_WAIT_RESUME : _dependency26.StateId.MG_WAIT_SPIN : a.name === _dependency19.GameEvent.PARSER_REPLAY_COMPLETED && _dependency1.default.isReplay ? _dependency26.StateId.MG_WAIT_REPLAY : void 0;
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.MG_WAIT_REPLAY,
    onEntry: function (a) {
      var e = a.event;
      dispatch(_dependency9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
        data: _dependency11.ESpinStatus.SPINING
      }), e.name === _dependency19.GameEvent.REPLAY_GAME_END || e.name === _dependency19.GameEvent.SHOW_BIG_WIN_END ? (dispatch(_dependency19.GameEvent.CHANGE_GAME_STYLE, {
        data: !0
      }), dispatch(_dependency9.SlotFrameworkEvent.SHOW_REPLAY_BOARD_ALERT), dispatch(_dependency19.GameEvent.CLEAR_ALL_WIN_LINE)) : _dependency2.tween(t).bindNodeState(false).delay(1.5).call(function () {
        dispatch(_dependency19.GameEvent.START_SPIN, {
          data: {
            spinId: null
          }
        });
      }).start();
    },
    transitionTo: function (t) {
      if (t.event.name == _dependency19.GameEvent.START_SPIN) return _dependency26.StateId.MG_SPIN;
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.MG_WAIT_RESUME,
    onEntry: function () {
      dispatch(_dependency19.GameEvent.SHOW_RESUME_ALERT);
    },
    transitionTo: function (a) {
      if (a.event.name == _dependency19.GameEvent.START_RESUME) {
        var e;
        dispatch(_dependency9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
          data: _dependency11.ESpinStatus.SPINING
        });
        var n = t.data.getData(),
          i = n.parser.currentGameState,
          r = i.startFreeGame,
          _ = i.totalWinnings;
        i.view;
        if (n.isResuming && 0 === _ && !1 === i.startFreeGame && !n.bonusState) return _dependency26.StateId.MG_CLOSE_SPIN;
        if ((null == n || null == (e = n.bonusState) ? void 0 : e.bonusType) === _dependency21.EBonusType.LUCKY_WEALTH) return _dependency26.StateId.MG_CLOSE_SPIN;
        if ((null == n ? void 0 : n.parser.currentGameState.isJp.length) > 0) return _dependency26.StateId.JP_WIN;
        if (r) return _dependency26.StateId.MG_SHOW_SCATTER;
        var s = t.data.setBigWinReach(_);
        return i.fullCombo ? _dependency26.StateId.MG_SHOW_FULL_COMBO : s ? _dependency26.StateId.MG_BIG_WIN : _dependency26.StateId.MG_SHOW_WIN_SUMMARY;
      }
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.MG_WAIT_SPIN,
    onEntry: function (a) {
      var e = a.sharedData;
      if (Log.d("%c MG_WAIT_SPIN_STATE ", _dependency13.getKeyStyle(_dependency13.KeyStyle.Core)), dispatch(_dependency19.GameEvent.WAIT_SPIN_STATE), _dependency16.default.isSendClose = !1, _dependency7.default.active && _dependency7.default.spinsRemaining > 0 || _dependency7.default.active && -1 === _dependency7.default.spinsRemaining) {
        if (!t.slotData.checkBalanceAndAlert()) return void dispatch(_dependency9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
          data: _dependency11.ESpinStatus.IDLE
        });
        var n = _dependency16.default.getData().nextSpinDelay;
        n > 0 ? _dependency2.tween(t).bindNodeState(false).delay(n).call(function () {
          dispatch(_dependency19.GameEvent.START_SPIN, {
            data: {
              spinId: null
            }
          });
        }).start() : dispatch(_dependency19.GameEvent.START_SPIN, {
          data: {
            spinId: null
          }
        });
      } else {
        var i = e.getData().parser.currentGameState.winSymbols ? e.getData().parser.winSymbols : [],
          _ = e.getData().parser.currentGameState.action;
        e.getData().parser.currentGameState.totalWinnings > 0 && i.length > 0 && "spin" == _ && dispatch(_dependency19.GameEvent.SHOW_WIN_LINE_CYCLE), dispatch(_dependency9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
          data: _dependency11.ESpinStatus.IDLE
        });
      }
    },
    transitionGuard: function (t) {
      var a = t.event;
      return [_dependency19.GameEvent.START_SPIN, _dependency19.GameEvent.PARSER_REPLAY_COMPLETED].includes(a.name);
    },
    transitionTo: function (t) {
      var a = t.event;
      return a.name == _dependency19.GameEvent.START_SPIN ? _dependency26.StateId.MG_SPIN : a.name === _dependency19.GameEvent.PARSER_REPLAY_COMPLETED && _dependency1.default.isReplay ? _dependency26.StateId.MG_WAIT_REPLAY : void 0;
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.MG_SPIN,
    onEntry: function (a) {
      var e = a.event;
      dispatch(_dependency19.GameEvent.STOP_WILD, {}), dispatch(_dependency9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
        data: _dependency11.ESpinStatus.SPINING
      }), dispatch(_dependency9.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: _dependency0.default.amount
        }
      });
      var n = _dependency16.default.getData().winAmountTime,
        i = e.data,
        _ = i.spinId,
        s = i.spinData;
      _ || dispatch(_dependency9.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: 0,
          tweenTime: n
        }
      }), _dependency24.calculateAutoSpin();
      var S = {
        ratioIndex: _dependency8.default.ratioIndex,
        ratioValue: _dependency8.default.ratioValue,
        stakeIndex: _dependency8.default.stakeIndex,
        stakeValue: _dependency8.default.stakeValue
      };
      if (dispatch(_dependency9.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null), _dependency1.default.isReplay) _dependency2.tween(t).bindNodeState(false).delay(.309).call(function () {
        dispatch(_dependency19.GameEvent.PARSER_SPIN_COMPLETED);
      }).start();else {
        if (t.data.testStaticSpinFlag) return;
        dispatch(_dependency9.SlotFrameworkEvent.SEND_SPIN_REQUEST, {
          data: {
            spinId: _,
            stakeVO: S,
            updateStake: _dependency24.needUpdateStake(),
            spinData: s
          }
        });
      }
    },
    transitionGuard: function (t) {
      var a = t.event;
      return [_dependency19.GameEvent.PARSER_SPIN_COMPLETED].includes(a.name);
    },
    transitionTo: function (t) {
      if (t.event.name == _dependency19.GameEvent.PARSER_SPIN_COMPLETED) return _dependency26.StateId.MG_SPIN_TO_STOP;
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.MG_SPIN_TO_STOP,
    onEntry: function () {
      dispatch(_dependency19.GameEvent.HIDE_SYMBOLS_WIN), dispatch(_dependency19.GameEvent.SET_REEL_RESULT), dispatch(_dependency19.GameEvent.CAN_STOP_SPIN);
    },
    transitionTo: function (a) {
      var e = a.event,
        n = a.sharedData;
      if (e.name === _dependency19.GameEvent.REEL_ALL_STOP) {
        if (dispatch(_dependency19.GameEvent.STOP_BTM, {
          data: _dependency16.EBTM.REEL_SCROLL
        }), n.getData().parser.currentGameState.startFreeGame) return _dependency26.StateId.MG_SHOW_SCATTER;
        if (0 === t.data.getData().parser.currentGameState.totalWinnings) return _dependency26.StateId.MG_CLOSE_SPIN;
        var i = n.getData().parser.currentGameState,
          r = i.totalWinnings,
          _ = i.isJp,
          s = i.fullCombo,
          S = t.data.setBigWinReach(r);
        return _.length > 0 ? _dependency26.StateId.JP_WIN : s ? _dependency26.StateId.MG_SHOW_FULL_COMBO : null !== S ? _dependency26.StateId.MG_SHOW_ALL_WIN_LINE : _dependency26.StateId.MG_SHOW_WIN_SUMMARY;
      }
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.MG_SHOW_FULL_COMBO,
    onEntry: function () {
      dispatch(_dependency19.GameEvent.SHOW_BOARD_FRAME_ANIM, {
        complete: function () {}
      }), dispatch(_dependency19.GameEvent.SHOW_SYMBOLS_WIN, {
        complete: function () {
          dispatch(_dependency19.GameEvent.SHOW_ALL_WIN_LINE), _dependency2.tween(t).bindNodeState(false).delay(1.2).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function a() {
            return _dependency.regeneratorRuntime().wrap(function (a) {
              for (;;) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, App.uiManager.open({
                    type: _dependency27.FullComboView,
                    bundle: t.data.module,
                    zIndex: _dependency3.ViewZOrder.UI,
                    name: "FullCombo"
                  });
                case 2:
                  dispatch(_dependency19.GameEvent.SHOW_FULL_COMBO);
                case 3:
                case "end":
                  return a.stop();
              }
            }, a);
          }))).start();
        },
        data: !0
      });
    },
    transitionTo: function (a) {
      if (a.event.name === _dependency19.GameEvent.SHOW_FULL_COMBO_END) {
        var e = t.data.getData().parser.currentGameState.totalWinnings;
        return t.data.setBigWinReach(e) ? _dependency26.StateId.MG_BIG_WIN : (dispatch(_dependency19.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
          data: e
        }), dispatch(_dependency19.GameEvent.CLEAR_ALL_WIN_LINE), _dependency26.StateId.MG_CLOSE_SPIN);
      }
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.MG_BIG_WIN,
    onEntry: function () {
      dispatch(_dependency19.GameEvent.CLEAR_ALL_WIN_LINE), dispatch(_dependency19.GameEvent.HIDE_SYMBOLS_WIN);
      var a = {
        winnings: t.data.getData().parser.currentGameState.totalWinnings,
        tweenTime: 5 + 3 * t.data.getData().parser.bigwinReach.level,
        isUpdateInfoBarTotalWinnings: !0
      };
      dispatch(_dependency19.GameEvent.SHOW_BIG_WIN, {
        data: a
      });
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency19.GameEvent.SHOW_BIG_WIN_END) return _dependency26.StateId.MG_CLOSE_SPIN;
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.MG_MYSTERY_JACKPOT,
    transitionGuard: function () {
      return !1;
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.MG_CLOSE_SPIN,
    onEntry: (i = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function a() {
      var i, _, s;
      return _dependency.regeneratorRuntime().wrap(function (a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            i = _dependency.createForOfIteratorHelperLoose(t.data.getData().gameState);
          case 1:
            if ((_ = i()).done) {
              a.next = 8;
              break;
            }
            if (null == (s = _.value) || !s.fullCombo) {
              a.next = 6;
              break;
            }
            return dispatch(_dependency9.SlotFrameworkEvent.STOP_AUTO_SPIN), a.abrupt("break", 8);
          case 6:
            a.next = 1;
            break;
          case 8:
            if (!(t.data.getData().parser.currentSpinIsEmpty && _dependency7.default.active && (_dependency7.default.spinsRemaining > 0 || -1 === _dependency7.default.spinsRemaining))) {
              a.next = 11;
              break;
            }
            return _dependency2.tween(t).bindNodeState(false).delay(0).call(function () {
              dispatch(_dependency9.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
                data: t.data.getData().spinId
              });
            }).start(), a.abrupt("return");
          case 11:
            if (!_dependency1.default.isReplay) {
              a.next = 14;
              break;
            }
            return dispatch(_dependency19.GameEvent.REPLAY_GAME_END), a.abrupt("return");
          case 14:
            t.data.testStaticSpinFlag ? (t.data.testStaticSpinFlag = !1, dispatch(_dependency19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED)) : dispatch(_dependency9.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
              data: t.data.getData().spinId
            });
          case 15:
          case "end":
            return a.stop();
        }
      }, a);
    })), function () {
      return i.apply(this, arguments);
    }),
    transitionTo: function (a) {
      var e = a.event,
        n = a.sharedData;
      return e.name == _dependency19.GameEvent.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(_dependency19.GameEvent.HIDE_SYMBOLS_WIN), dispatch(_dependency9.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: _dependency0.default.amount
        }
      }), t.processCloseAutoPlay(), t.data.tempAnimTopMap.clear(), n.getData().isResuming = !1, _dependency26.StateId.MG_WAIT_SPIN) : e.name == _dependency19.GameEvent.START_FORTUNE_GAME ? _dependency26.StateId.DROP_TREASURE_INTRO : e.name == _dependency19.GameEvent.START_JACKPOT_GAME ? _dependency26.StateId.JP_GAME_INTRO : e.name == _dependency19.GameEvent.START_LUCKY_WEALTH_GAME ? _dependency26.StateId.LUCKY_WEALTH_INTRO : e.name == _dependency19.GameEvent.REPLAY_GAME_END ? _dependency26.StateId.MG_WAIT_REPLAY : e.name == _dependency19.GameEvent.START_SPIN ? _dependency26.StateId.MG_SPIN : void 0;
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.JP_WIN,
    onEntry: function () {
      dispatch(_dependency19.GameEvent.SHOW_JP_SYMBOLS_WIN), _dependency2.tween(t).bindNodeState(false).delay(1.5).call(function () {
        dispatch(_dependency19.GameEvent.HIDE_SYMBOLS_WIN), dispatch(_dependency19.GameEvent.SHOW_JP, {});
      }).start();
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency19.GameEvent.SHOW_JP_END) return _dependency26.StateId.MG_CLOSE_SPIN;
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.MG_SHOW_SCATTER,
    onEntry: function () {
      dispatch(_dependency19.GameEvent.SHOW_SCATTER_WIN);
    },
    transitionTo: function (a) {
      if (a.event.name === _dependency19.GameEvent.SHOW_SCATTER_WIN_END) {
        var e = t.data.getData().parser.currentGameState,
          n = e.totalWinnings - (e.currentWinnings || 0);
        return n > 0 && dispatch(_dependency9.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
          data: n
        }), _dependency26.StateId.MG_SHOW_WIN_SUMMARY;
      }
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.MG_SHOW_WIN_SUMMARY,
    onEntry: function () {
      var a = t.data.getData().parser.winSymbols ? t.data.getData().parser.winSymbols : [],
        e = t.data.getData().parser.currentGameState,
        n = e.totalWinnings,
        i = e.startFreeGame;
      a.length > 0 ? (dispatch(_dependency19.GameEvent.SHOW_WIN_SUMMARY), dispatch(_dependency19.GameEvent.SHOW_TOTAL_WIN_CASH), dispatch(_dependency19.GameEvent.CAN_SKIP_WIN_LINE)) : n > 0 && i ? dispatch(_dependency9.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: n,
          needComplete: !0
        },
        complete: function () {
          dispatch(_dependency19.GameEvent.SHOW_WIN_SUMMARY_END);
        }
      }) : (n > 0 && dispatch(_dependency9.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: n
      }), dispatch(_dependency19.GameEvent.SHOW_WIN_SUMMARY_END));
    },
    transitionTo: function (a) {
      var e = a.event,
        n = t.data.getData().parser.currentGameState.startFreeGame;
      if (e.name === _dependency19.GameEvent.SHOW_WIN_SUMMARY_END) return n ? (t.data.currentGameType = _dependency21.EGameType.FREE_GAME, dispatch(_dependency19.GameEvent.CLEAR_ALL_WIN_LINE), _dependency26.StateId.FG_SHOW_START_ALERT) : (dispatch(_dependency19.GameEvent.CLEAR_ALL_WIN_LINE), dispatch(_dependency19.GameEvent.SHOW_WIN_LINE_CYCLE_END), _dependency26.StateId.MG_CLOSE_SPIN);
    }
  }), _dependency23.defineState({
    id: _dependency26.StateId.MG_SHOW_ALL_WIN_LINE,
    onEntry: function () {
      dispatch(_dependency19.GameEvent.SHOW_ALL_WIN_LINE), dispatch(_dependency19.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE, {
        complete: function () {
          dispatch(_dependency19.GameEvent.SHOW_ALL_WIN_LINE_END);
        },
        data: t.data.getData().parser.winSymbols
      });
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency19.GameEvent.SHOW_ALL_WIN_LINE_END) return _dependency26.StateId.MG_BIG_WIN;
    }
  })];
  var i;
  var Y;
}), _dependency2.cclegacy._RF.push({}, "8c305bWcmRHGJdBlocgMXX4", "MGStates", void 0), _dependency2.cclegacy._RF.pop();
