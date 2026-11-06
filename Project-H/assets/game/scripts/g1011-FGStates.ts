// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Config";
import * as _dependency4 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency5 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency7 from "./g1011-FreeGameAlertView";
import * as _dependency8 from "./g1011-FullComboView";
import * as _dependency9 from "./g1011-GameConfigModel";
import * as _dependency0 from "./g1011-GameSymbolID";
import * as _dependency1 from "./g1011-GameEvent";
import * as _dependency10 from "./g1011-StateFactory";
import * as _dependency11 from "./g1011-StateId";
var _export;
export { _export as createFgStates };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "createFgStates":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, a, _, i, r, S, I, o, s, N, E, c, W, u;
_publish("createFgStates", function (t) {
  return [_dependency10.defineState({
    id: _dependency11.StateId.FG_CLOSE_SPIN,
    onEntry: function (t) {
      var n = t.sharedData;
      _dependency6.default.isReplay ? dispatch(_dependency1.GameEvent.PARSER_CLOSE_SPIN_COMPLETED) : n.testStaticSpinFlag ? (n.testStaticSpinFlag = !1, dispatch(_dependency1.GameEvent.PARSER_CLOSE_SPIN_COMPLETED)) : dispatch(_dependency4.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
        data: n.getData().spinId
      });
    },
    transitionTo: function (n) {
      var e = n.event,
        a = n.sharedData;
      if (e.name == _dependency1.GameEvent.PARSER_CLOSE_SPIN_COMPLETED) return t.processCloseAutoPlay(), a.tempAnimTopMap.clear(), a.getData().isResuming = !1, dispatch(_dependency4.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: _dependency5.default.amount
        }
      }), _dependency6.default.isReplay ? _dependency11.StateId.MG_WAIT_REPLAY : _dependency11.StateId.MG_WAIT_SPIN;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_SHOW_START_ALERT,
    onEntry: function () {
      App.uiManager.open({
        type: _dependency7.FreeGameAlertView,
        bundle: t.data.module,
        zIndex: _dependency3.ViewZOrder.UI,
        name: "免費遊戲彈窗"
      }).then(function (t) {
        t.showIntroAlert();
      });
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency1.GameEvent.CLICK_START_FREE_GAME) return dispatch(_dependency1.GameEvent.CHANGE_GAME_STYLE, {
        data: !1
      }), dispatch(_dependency1.GameEvent.UPDATE_TIMES), G = !0, _dependency11.StateId.FG_WAIT_SPIN;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_SHOW_SUMMARY_ALERT,
    onEntry: function (a) {
      dispatch(_dependency1.GameEvent.HIDE_SYMBOLS_WIN), dispatch(_dependency1.GameEvent.CLEAR_ALL_WIN_LINE), App.globalAudio.pauseMusic(), dispatch(_dependency1.GameEvent.SHOW_FG_SUMMARY_ALERT_STATE), _dependency2.tween(t).bindNodeState(false).delay(1).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
        return _dependency.regeneratorRuntime().wrap(function (n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              App.uiManager.open({
                type: _dependency7.FreeGameAlertView,
                bundle: t.data.module,
                zIndex: _dependency3.ViewZOrder.UI,
                name: "免費遊戲彈窗"
              }).then(function (t) {
                t.showSummaryAlert();
              });
            case 1:
            case "end":
              return n.stop();
          }
        }, n);
      }))).start();
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency1.GameEvent.CLICK_FINISH_FREE_GAME) return _dependency11.StateId.FG_CLOSE_SPIN;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_BACK_TO_MG_RUN_SCORE,
    onEntry: function (t) {
      var n = t.sharedData.getData().parser.currentGameState.totalWinnings;
      dispatch(_dependency4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: n,
          needComplete: !0
        },
        complete: function () {
          _dependency6.default.isReplay ? dispatch(_dependency1.GameEvent.REPLAY_GAME_END) : dispatch(_dependency1.GameEvent.CHANGE_MG_CLOSE_SPIN_STATE);
        }
      });
    },
    transitionGuard: function (t) {
      var n = t.event;
      return n.name === _dependency1.GameEvent.CHANGE_MG_CLOSE_SPIN_STATE || n.name === _dependency1.GameEvent.REPLAY_GAME_END;
    },
    transitionTo: function (t) {
      var n = t.event;
      return n.name === _dependency1.GameEvent.CHANGE_MG_CLOSE_SPIN_STATE ? (dispatch(_dependency4.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: _dependency5.default.amount
        }
      }), _dependency11.StateId.MG_WAIT_SPIN) : n.name === _dependency1.GameEvent.REPLAY_GAME_END ? _dependency11.StateId.MG_WAIT_REPLAY : void 0;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_BACK_MG_BIG_WIN,
    onEntry: function (t) {
      var n = t.sharedData,
        e = {
          winnings: n.getData().parser.currentGameState.totalWinnings,
          tweenTime: 5 + 3 * n.getData().parser.bigwinReach.level,
          isUpdateInfoBarTotalWinnings: !0
        };
      dispatch(_dependency1.GameEvent.SHOW_BIG_WIN, {
        data: e
      });
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency1.GameEvent.SHOW_BIG_WIN_END) return _dependency11.StateId.FG_CLOSE_SPIN;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_WAIT_SPIN,
    onEntry: function () {
      dispatch(_dependency1.GameEvent.UPDATE_TIMES), dispatch(_dependency1.GameEvent.UPDATE_FG_REMAINING), G ? G = !1 : dispatch(_dependency1.GameEvent.CHECK_WILD_ANIM_STATUS);
    },
    transitionTo: function (t) {
      var n = t.event;
      return n.name === _dependency1.GameEvent.WILD_ANIM_COMPLETED || n.name === _dependency1.GameEvent.CHANGE_FG_SPIN_STATE ? _dependency11.StateId.FG_SPIN : void 0;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_SPIN,
    onEntry: function () {
      dispatch(_dependency1.GameEvent.START_SCROLL), dispatch(_dependency1.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE);
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency1.GameEvent.CHANGE_FG_SPIN_TO_STOP_STATE) return _dependency11.StateId.FG_SPIN_TO_STOP;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_SPIN_TO_STOP,
    onEntry: function () {
      dispatch(_dependency1.GameEvent.HIDE_SYMBOLS_WIN), dispatch(_dependency1.GameEvent.SET_REEL_RESULT), dispatch(_dependency1.GameEvent.CAN_STOP_SPIN);
    },
    transitionTo: function (t) {
      var n = t.event,
        e = t.sharedData;
      if (n.name === _dependency1.GameEvent.REEL_ALL_STOP) {
        var a;
        dispatch(_dependency1.GameEvent.STOP_BTM, {
          data: _dependency9.EBTM.REEL_SCROLL
        });
        var _ = e.getData(),
          i = _.parser,
          r = _.gameState,
          S = i.currentGameState,
          I = S.numFreeSpins,
          o = S.freeSpinWon,
          s = S.startFreeGame,
          E = (S.view, S.freeTimesDenominator),
          W = null == (a = r[i.currentSpinIndex - 1]) ? void 0 : a.freeTimesDenominator,
          G = 0 === I && (void 0 === o || 0 === o);
        if (s || null != o && o > 0 || null != W && E > W) return A = _dependency11.StateId.FG_SHOW_ALL_WIN, _dependency11.StateId.FG_WAIT_FUNCTION_ANIM;
        if (!e.hasWinnings()) return G ? e.setBigWinReach(i.currentGameState.totalWinnings) ? _dependency11.StateId.FG_BIG_WIN : _dependency11.StateId.FG_SHOW_SUMMARY_ALERT : _dependency11.StateId.FG_WAIT_SPIN;
        var d = i.currentGameState.currentWinnings,
          L = e.setBigWinReach(d);
        return i.currentGameState.fullCombo ? (A = _dependency11.StateId.FG_SHOW_FULL_COMBO, _dependency11.StateId.FG_WAIT_FUNCTION_ANIM) : L ? (T = _dependency11.StateId.FG_SHOW_ALL_WIN_LINE, _dependency11.StateId.FG_WAIT_WILD_ANIM) : (A = _dependency11.StateId.FG_WAIT_WILD_ANIM, _dependency11.StateId.FG_WAIT_FUNCTION_ANIM);
      }
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_WAIT_FUNCTION_ANIM,
    onEntry: function () {
      dispatch(_dependency1.GameEvent.CHECK_FUNCTION_ANIM_STATUS);
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency1.GameEvent.FUNCTION_ANIM_COMPLETED) return A;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_SHOW_SYMBOL_TRANSFORM,
    onEntry: function (t) {
      t.sharedData.getData().parser.toSymbolWildVO.symbol;
      _dependency0.EBackendSymbolID.WILD, dispatch(_dependency1.GameEvent.SHOW_SYMBOL_TRANSFORM);
    },
    transitionTo: function (t) {
      var n = t.event,
        e = t.sharedData;
      if (n.name === _dependency1.GameEvent.SHOW_SYMBOL_TRANSFORM_END) return e.hasWinSymbols() ? e.getData().parser.currentGameState.fullCombo ? _dependency11.StateId.FG_SHOW_FULL_COMBO : _dependency11.StateId.FG_WAIT_WILD_ANIM : _dependency11.StateId.FG_WAIT_SPIN;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_SHOW_ALL_WIN,
    onEntry: function (t) {
      var n,
        e = t.sharedData.getData(),
        a = e.parser,
        _ = e.gameState,
        i = a.currentGameState,
        r = i.startFreeGame,
        S = i.freeSpinWon,
        I = i.freeTimesDenominator,
        o = null == (n = _[a.currentSpinIndex - 1]) ? void 0 : n.freeTimesDenominator;
      r || null != S && S > 0 || null != o && I > o ? dispatch(_dependency1.GameEvent.SHOW_SCATTER_WIN) : dispatch(_dependency1.GameEvent.SHOW_SYMBOLS_WIN, {
        complete: function () {
          dispatch(_dependency1.GameEvent.SHOW_ALL_WIN_LINE_END);
        }
      });
    },
    transitionTo: function (t) {
      var n = t.event;
      return n.name === _dependency1.GameEvent.SHOW_ALL_WIN_LINE_END ? _dependency11.StateId.FG_WAIT_WILD_ANIM : n.name === _dependency1.GameEvent.SHOW_SCATTER_WIN_END ? _dependency11.StateId.FG_SHOW_INCREASE_REMAINING : void 0;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_SHOW_INCREASE_REMAINING,
    onEntry: function () {
      dispatch(_dependency1.GameEvent.INCREASE_FG_REMAINING, {
        complete: function () {
          dispatch(_dependency1.GameEvent.INCREASE_FG_REMAINING_END);
        }
      });
    },
    transitionTo: function (t) {
      var n = t.event,
        e = t.sharedData;
      if (n.name === _dependency1.GameEvent.INCREASE_FG_REMAINING_END) {
        var a = e.getData().parser.currentGameState,
          _ = a.winSymbols,
          i = a.currentWinnings,
          r = a.fullCombo;
        return _ && _.length > 0 || i > 0 ? r ? _dependency11.StateId.FG_SHOW_FULL_COMBO : _dependency11.StateId.FG_WAIT_WILD_ANIM : _dependency11.StateId.FG_WAIT_SPIN;
      }
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_SHOW_ALL_WIN_LINE,
    onEntry: function () {
      dispatch(_dependency1.GameEvent.SHOW_ALL_WIN_LINE), dispatch(_dependency1.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE, {
        complete: function () {
          dispatch(_dependency1.GameEvent.SHOW_ALL_WIN_LINE_END);
        },
        data: t.data.getData().parser.winSymbols
      });
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency1.GameEvent.SHOW_ALL_WIN_LINE_END) return A = _dependency11.StateId.FG_WIN, _dependency11.StateId.FG_WAIT_FUNCTION_ANIM;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_SHOW_FULL_COMBO,
    onEntry: function () {
      dispatch(_dependency1.GameEvent.SHOW_BOARD_FRAME_ANIM, {
        complete: function () {}
      }), dispatch(_dependency1.GameEvent.SHOW_SYMBOLS_WIN, {
        complete: function () {
          dispatch(_dependency1.GameEvent.SHOW_ALL_WIN_LINE), _dependency2.tween(t).bindNodeState(false).delay(1.2).call(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
            return _dependency.regeneratorRuntime().wrap(function (n) {
              for (;;) switch (n.prev = n.next) {
                case 0:
                  return n.next = 2, App.uiManager.open({
                    type: _dependency8.FullComboView,
                    bundle: t.data.module,
                    zIndex: _dependency3.ViewZOrder.UI,
                    name: "FullCombo"
                  });
                case 2:
                  dispatch(_dependency1.GameEvent.SHOW_FULL_COMBO);
                case 3:
                case "end":
                  return n.stop();
              }
            }, n);
          }))).start();
        },
        data: !0
      });
    },
    transitionTo: function (t) {
      var n = t.event,
        e = t.sharedData;
      if (n.name === _dependency1.GameEvent.SHOW_FULL_COMBO_END) {
        var a = e.getData().parser.currentGameState.currentWinnings;
        return e.setBigWinReach(a) ? _dependency11.StateId.FG_WIN : _dependency11.StateId.FG_WAIT_WILD_ANIM;
      }
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_WAIT_WILD_ANIM,
    onEntry: function () {
      dispatch(_dependency1.GameEvent.CHECK_WILD_ANIM_STATUS);
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency1.GameEvent.WILD_ANIM_COMPLETED) {
        var n = T || _dependency11.StateId.FG_PLAY_WIN_ANIM;
        return T = "", n;
      }
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_PLAY_WIN_ANIM,
    onEntry: function () {
      dispatch(_dependency1.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency9.EBTM.SFX_FREE_WIN
        }
      }), dispatch(_dependency1.GameEvent.PLAY_FG_WIN_ANIM);
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency1.GameEvent.FG_WIN_ANIM_COMPLETED) return _dependency11.StateId.FG_SHOW_WIN_LINE;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_SHOW_WIN_LINE,
    onEntry: function () {
      dispatch(_dependency1.GameEvent.SHOW_WIN_SUMMARY), dispatch(_dependency1.GameEvent.SHOW_TOTAL_WIN_CASH), dispatch(_dependency1.GameEvent.CAN_SKIP_WIN_LINE);
    },
    transitionTo: function (t) {
      if (t.event.name === _dependency1.GameEvent.SHOW_WIN_SUMMARY_END) return dispatch(_dependency1.GameEvent.CHECK_MULTIPLE), A = _dependency11.StateId.FG_SHOW_CURRENT_VIEW_WIN_SCORE, _dependency11.StateId.FG_WAIT_FUNCTION_ANIM;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_SHOW_CURRENT_VIEW_WIN_SCORE,
    onEntry: function () {
      dispatch(_dependency1.GameEvent.CLEAR_ALL_WIN_LINE), dispatch(_dependency1.GameEvent.HIDE_SYMBOLS_WIN), dispatch(_dependency1.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH);
    },
    transitionTo: function (t) {
      var n = t.event,
        e = t.sharedData;
      if (n.name == _dependency1.GameEvent.SHOW_CURRENT_VIEW_WIN_CASH_END) {
        var a = e.getData(),
          _ = a.parser,
          i = a.gameState,
          r = _.currentGameState,
          S = r.numFreeSpins,
          I = r.freeSpinWon,
          o = r.startFreeGame,
          s = (r.view, i[_.currentSpinIndex + 1]);
        if (!s || S !== s.numFreeSpins) {
          if (o) return _dependency11.StateId.FG_SHOW_ALL_WIN;
          var N = _.currentGameState.currentWinnings;
          if (e.setBigWinReach(N)) return dispatch(_dependency1.GameEvent.RESET_FG_CLICK_SKIP_WIN_LINE), _dependency11.StateId.FG_SHOW_ALL_WIN_LINE;
          var E = i[_.currentSpinIndex - 1];
          return null != E && E.numFreeSpins === S ? _dependency11.StateId.FG_SHOW_ROUND_WINNINGS_WIN_SCORE : 0 !== S || void 0 !== I && 0 !== I ? (dispatch(_dependency1.GameEvent.UPDATE_TIMES), _dependency11.StateId.FG_WAIT_SPIN) : e.setBigWinReach(_.currentGameState.totalWinnings) ? _dependency11.StateId.FG_BIG_WIN : _dependency11.StateId.FG_SHOW_SUMMARY_ALERT;
        }
        return e.hasWinSymbols() ? e.getData().parser.currentGameState.fullCombo ? _dependency11.StateId.FG_SHOW_FULL_COMBO : _dependency11.StateId.FG_WAIT_WILD_ANIM : (dispatch(_dependency1.GameEvent.UPDATE_TIMES), _dependency11.StateId.FG_WAIT_SPIN);
      }
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_EXPLODE_AND_DELETE,
    onEntry: function () {
      dispatch(_dependency1.GameEvent.SHOW_SYMBOLS_FRAME_OUT);
    },
    transitionTo: function (t) {
      if (t.event.name == _dependency1.GameEvent.SHOW_SYMBOLS_FRAME_OUT_END) return dispatch(_dependency1.GameEvent.UPDATE_TIMES), _dependency11.StateId.FG_DROP_SYMBOL;
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_DROP_SYMBOL,
    onEntry: function () {},
    transitionTo: function (t) {
      var n = t.event,
        e = t.sharedData;
      if (n.name == _dependency1.GameEvent.SHOW_DROP_SYMBOL_END) {
        var a = e.getData(),
          _ = a.parser,
          i = a.gameState,
          r = _.currentGameState,
          S = r.numFreeSpins,
          I = r.startFreeGame,
          o = (r.view, i[_.currentSpinIndex + 1]);
        if (!o || S !== o.numFreeSpins) {
          if (I) return _dependency11.StateId.FG_SHOW_ALL_WIN;
          var s = _.currentGameState.currentWinnings;
          if (e.setBigWinReach(s)) return dispatch(_dependency1.GameEvent.RESET_FG_CLICK_SKIP_WIN_LINE), _dependency11.StateId.FG_SHOW_ALL_WIN_LINE;
          var N = i[_.currentSpinIndex - 1];
          return null != N && N.numFreeSpins === S ? _dependency11.StateId.FG_SHOW_ROUND_WINNINGS_WIN_SCORE : (dispatch(_dependency1.GameEvent.UPDATE_TIMES), _dependency11.StateId.FG_WAIT_SPIN);
        }
        return e.hasWinSymbols() ? e.getData().parser.currentGameState.fullCombo ? _dependency11.StateId.FG_SHOW_FULL_COMBO : _dependency11.StateId.FG_WAIT_WILD_ANIM : (dispatch(_dependency1.GameEvent.UPDATE_TIMES), _dependency11.StateId.FG_WAIT_SPIN);
      }
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_SHOW_ROUND_WINNINGS_WIN_SCORE,
    onEntry: function () {
      dispatch(_dependency1.GameEvent.SHOW_FG_ROUND_WIN_CASH);
    },
    transitionTo: function (t) {
      var n = t.event,
        e = t.sharedData;
      if (n.name == _dependency1.GameEvent.SHOW_FG_ROUND_WIN_CASH_END) {
        dispatch(_dependency1.GameEvent.UPDATE_TIMES);
        var a = e.getData().parser.currentGameState,
          _ = a.numFreeSpins,
          i = a.freeSpinWon;
        if (0 === _ && (void 0 === i || 0 === i)) {
          var r = e.getData().parser.currentGameState.totalWinnings;
          return e.setBigWinReach(r) ? _dependency11.StateId.FG_BIG_WIN : _dependency11.StateId.FG_SHOW_SUMMARY_ALERT;
        }
        return _dependency11.StateId.FG_WAIT_SPIN;
      }
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_WIN,
    onEntry: function (t) {
      var n = t.sharedData;
      dispatch(_dependency1.GameEvent.HIDE_SYMBOLS_WIN);
      var e = {
        winnings: n.getData().parser.currentGameState.currentWinnings,
        tweenTime: 5
      };
      dispatch(_dependency1.GameEvent.SHOW_WIN, {
        data: e
      });
    },
    transitionTo: function (t) {
      var n = t.event,
        e = t.sharedData;
      if (n.name === _dependency1.GameEvent.SHOW_WIN_END) {
        var a = e.getData().parser.currentGameState,
          _ = a.numFreeSpins,
          i = a.freeSpinWon,
          r = a.totalWinnings,
          S = 0 === _ && (void 0 === i || 0 === i);
        return dispatch(_dependency1.GameEvent.CLEAR_ALL_WIN_LINE), dispatch(_dependency1.GameEvent.HIDE_SYMBOLS_WIN), S ? e.setBigWinReach(r) ? _dependency11.StateId.FG_BIG_WIN : _dependency11.StateId.FG_SHOW_SUMMARY_ALERT : _dependency11.StateId.FG_WAIT_SPIN;
      }
    }
  }), _dependency10.defineState({
    id: _dependency11.StateId.FG_BIG_WIN,
    onEntry: function (t) {
      var n = t.sharedData,
        e = {
          winnings: n.getData().parser.currentGameState.totalWinnings,
          tweenTime: 5 + 3 * n.getData().parser.bigwinReach.level,
          isUpdateInfoBarTotalWinnings: !1
        };
      dispatch(_dependency1.GameEvent.SHOW_BIG_WIN, {
        data: e
      });
    },
    transitionTo: function (t) {
      var n = t.event,
        e = t.sharedData;
      if (n.name === _dependency1.GameEvent.SHOW_BIG_WIN_END) {
        var a = e.getData().parser.currentGameState.totalWinnings;
        return dispatch(_dependency4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
          data: {
            value: a
          }
        }), dispatch(_dependency4.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
          data: {
            balance: _dependency5.default.amount
          }
        }), _dependency6.default.isReplay ? _dependency11.StateId.MG_WAIT_REPLAY : _dependency11.StateId.FG_SHOW_SUMMARY_ALERT;
      }
    }
  })];
}), _dependency2.cclegacy._RF.push({}, "ef7cf6yOKhN1aSuUmwhTJ6c", "FGStates", void 0);
var A = "",
  T = "",
  G = !1;
_dependency2.cclegacy._RF.pop();
