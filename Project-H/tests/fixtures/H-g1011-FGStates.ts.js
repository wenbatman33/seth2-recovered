System.register("chunks:///_virtual/FGStates.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Config.ts", "./SlotFrameworkEvent.ts", "./PlatformModel.ts", "./ReplayModel.ts", "./FreeGameAlertView.ts", "./FullComboView.ts", "./GameConfigModel.ts", "./GameSymbolID.ts", "./GameEvent.ts", "./StateFactory.ts", "./StateId.ts"], function (t) {
  "use strict";

  var n, e, a, _, i, r, S, I, o, s, N, E, c, W, u;
  return {
    setters: [function (t) {
      n = t.asyncToGenerator, e = t.regeneratorRuntime;
    }, function (t) {
      a = t.cclegacy, _ = t.tween;
    }, function (t) {
      i = t.ViewZOrder;
    }, function (t) {
      r = t.SlotFrameworkEvent;
    }, function (t) {
      S = t.default;
    }, function (t) {
      I = t.default;
    }, function (t) {
      o = t.FreeGameAlertView;
    }, function (t) {
      s = t.FullComboView;
    }, function (t) {
      N = t.EBTM;
    }, function (t) {
      E = t.EBackendSymbolID;
    }, function (t) {
      c = t.GameEvent;
    }, function (t) {
      W = t.defineState;
    }, function (t) {
      u = t.StateId;
    }],
    execute: function () {
      t("createFgStates", function (t) {
        return [W({
          id: u.FG_CLOSE_SPIN,
          onEntry: function (t) {
            var n = t.sharedData;
            I.isReplay ? dispatch(c.PARSER_CLOSE_SPIN_COMPLETED) : n.testStaticSpinFlag ? (n.testStaticSpinFlag = !1, dispatch(c.PARSER_CLOSE_SPIN_COMPLETED)) : dispatch(r.SEND_CLOSE_REQUEST, {
              data: n.getData().spinId
            });
          },
          transitionTo: function (n) {
            var e = n.event,
              a = n.sharedData;
            if (e.name == c.PARSER_CLOSE_SPIN_COMPLETED) return t.processCloseAutoPlay(), a.tempAnimTopMap.clear(), a.getData().isResuming = !1, dispatch(r.UPDATE_USER_BALANCE, {
              data: {
                balance: S.amount
              }
            }), I.isReplay ? u.MG_WAIT_REPLAY : u.MG_WAIT_SPIN;
          }
        }), W({
          id: u.FG_SHOW_START_ALERT,
          onEntry: function () {
            App.uiManager.open({
              type: o,
              bundle: t.data.module,
              zIndex: i.UI,
              name: "免費遊戲彈窗"
            }).then(function (t) {
              t.showIntroAlert();
            });
          },
          transitionTo: function (t) {
            if (t.event.name === c.CLICK_START_FREE_GAME) return dispatch(c.CHANGE_GAME_STYLE, {
              data: !1
            }), dispatch(c.UPDATE_TIMES), G = !0, u.FG_WAIT_SPIN;
          }
        }), W({
          id: u.FG_SHOW_SUMMARY_ALERT,
          onEntry: function (a) {
            dispatch(c.HIDE_SYMBOLS_WIN), dispatch(c.CLEAR_ALL_WIN_LINE), App.globalAudio.pauseMusic(), dispatch(c.SHOW_FG_SUMMARY_ALERT_STATE), _(t).delay(1).call(n(e().mark(function n() {
              return e().wrap(function (n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    App.uiManager.open({
                      type: o,
                      bundle: t.data.module,
                      zIndex: i.UI,
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
            if (t.event.name === c.CLICK_FINISH_FREE_GAME) return u.FG_CLOSE_SPIN;
          }
        }), W({
          id: u.FG_BACK_TO_MG_RUN_SCORE,
          onEntry: function (t) {
            var n = t.sharedData.getData().parser.currentGameState.totalWinnings;
            dispatch(r.UPDATE_TOTAL_WINNINGS, {
              data: {
                value: n,
                needComplete: !0
              },
              complete: function () {
                I.isReplay ? dispatch(c.REPLAY_GAME_END) : dispatch(c.CHANGE_MG_CLOSE_SPIN_STATE);
              }
            });
          },
          transitionGuard: function (t) {
            var n = t.event;
            return n.name === c.CHANGE_MG_CLOSE_SPIN_STATE || n.name === c.REPLAY_GAME_END;
          },
          transitionTo: function (t) {
            var n = t.event;
            return n.name === c.CHANGE_MG_CLOSE_SPIN_STATE ? (dispatch(r.UPDATE_USER_BALANCE, {
              data: {
                balance: S.amount
              }
            }), u.MG_WAIT_SPIN) : n.name === c.REPLAY_GAME_END ? u.MG_WAIT_REPLAY : void 0;
          }
        }), W({
          id: u.FG_BACK_MG_BIG_WIN,
          onEntry: function (t) {
            var n = t.sharedData,
              e = {
                winnings: n.getData().parser.currentGameState.totalWinnings,
                tweenTime: 5 + 3 * n.getData().parser.bigwinReach.level,
                isUpdateInfoBarTotalWinnings: !0
              };
            dispatch(c.SHOW_BIG_WIN, {
              data: e
            });
          },
          transitionTo: function (t) {
            if (t.event.name === c.SHOW_BIG_WIN_END) return u.FG_CLOSE_SPIN;
          }
        }), W({
          id: u.FG_WAIT_SPIN,
          onEntry: function () {
            dispatch(c.UPDATE_TIMES), dispatch(c.UPDATE_FG_REMAINING), G ? G = !1 : dispatch(c.CHECK_WILD_ANIM_STATUS);
          },
          transitionTo: function (t) {
            var n = t.event;
            return n.name === c.WILD_ANIM_COMPLETED || n.name === c.CHANGE_FG_SPIN_STATE ? u.FG_SPIN : void 0;
          }
        }), W({
          id: u.FG_SPIN,
          onEntry: function () {
            dispatch(c.START_SCROLL), dispatch(c.CHANGE_FG_SPIN_TO_STOP_STATE);
          },
          transitionTo: function (t) {
            if (t.event.name === c.CHANGE_FG_SPIN_TO_STOP_STATE) return u.FG_SPIN_TO_STOP;
          }
        }), W({
          id: u.FG_SPIN_TO_STOP,
          onEntry: function () {
            dispatch(c.HIDE_SYMBOLS_WIN), dispatch(c.SET_REEL_RESULT), dispatch(c.CAN_STOP_SPIN);
          },
          transitionTo: function (t) {
            var n = t.event,
              e = t.sharedData;
            if (n.name === c.REEL_ALL_STOP) {
              var a;
              dispatch(c.STOP_BTM, {
                data: N.REEL_SCROLL
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
              if (s || null != o && o > 0 || null != W && E > W) return A = u.FG_SHOW_ALL_WIN, u.FG_WAIT_FUNCTION_ANIM;
              if (!e.hasWinnings()) return G ? e.setBigWinReach(i.currentGameState.totalWinnings) ? u.FG_BIG_WIN : u.FG_SHOW_SUMMARY_ALERT : u.FG_WAIT_SPIN;
              var d = i.currentGameState.currentWinnings,
                L = e.setBigWinReach(d);
              return i.currentGameState.fullCombo ? (A = u.FG_SHOW_FULL_COMBO, u.FG_WAIT_FUNCTION_ANIM) : L ? (T = u.FG_SHOW_ALL_WIN_LINE, u.FG_WAIT_WILD_ANIM) : (A = u.FG_WAIT_WILD_ANIM, u.FG_WAIT_FUNCTION_ANIM);
            }
          }
        }), W({
          id: u.FG_WAIT_FUNCTION_ANIM,
          onEntry: function () {
            dispatch(c.CHECK_FUNCTION_ANIM_STATUS);
          },
          transitionTo: function (t) {
            if (t.event.name === c.FUNCTION_ANIM_COMPLETED) return A;
          }
        }), W({
          id: u.FG_SHOW_SYMBOL_TRANSFORM,
          onEntry: function (t) {
            t.sharedData.getData().parser.toSymbolWildVO.symbol;
            E.WILD, dispatch(c.SHOW_SYMBOL_TRANSFORM);
          },
          transitionTo: function (t) {
            var n = t.event,
              e = t.sharedData;
            if (n.name === c.SHOW_SYMBOL_TRANSFORM_END) return e.hasWinSymbols() ? e.getData().parser.currentGameState.fullCombo ? u.FG_SHOW_FULL_COMBO : u.FG_WAIT_WILD_ANIM : u.FG_WAIT_SPIN;
          }
        }), W({
          id: u.FG_SHOW_ALL_WIN,
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
            r || null != S && S > 0 || null != o && I > o ? dispatch(c.SHOW_SCATTER_WIN) : dispatch(c.SHOW_SYMBOLS_WIN, {
              complete: function () {
                dispatch(c.SHOW_ALL_WIN_LINE_END);
              }
            });
          },
          transitionTo: function (t) {
            var n = t.event;
            return n.name === c.SHOW_ALL_WIN_LINE_END ? u.FG_WAIT_WILD_ANIM : n.name === c.SHOW_SCATTER_WIN_END ? u.FG_SHOW_INCREASE_REMAINING : void 0;
          }
        }), W({
          id: u.FG_SHOW_INCREASE_REMAINING,
          onEntry: function () {
            dispatch(c.INCREASE_FG_REMAINING, {
              complete: function () {
                dispatch(c.INCREASE_FG_REMAINING_END);
              }
            });
          },
          transitionTo: function (t) {
            var n = t.event,
              e = t.sharedData;
            if (n.name === c.INCREASE_FG_REMAINING_END) {
              var a = e.getData().parser.currentGameState,
                _ = a.winSymbols,
                i = a.currentWinnings,
                r = a.fullCombo;
              return _ && _.length > 0 || i > 0 ? r ? u.FG_SHOW_FULL_COMBO : u.FG_WAIT_WILD_ANIM : u.FG_WAIT_SPIN;
            }
          }
        }), W({
          id: u.FG_SHOW_ALL_WIN_LINE,
          onEntry: function () {
            dispatch(c.SHOW_ALL_WIN_LINE), dispatch(c.SHOW_SYMBOLS_WIN_ON_LINE, {
              complete: function () {
                dispatch(c.SHOW_ALL_WIN_LINE_END);
              },
              data: t.data.getData().parser.winSymbols
            });
          },
          transitionTo: function (t) {
            if (t.event.name === c.SHOW_ALL_WIN_LINE_END) return A = u.FG_WIN, u.FG_WAIT_FUNCTION_ANIM;
          }
        }), W({
          id: u.FG_SHOW_FULL_COMBO,
          onEntry: function () {
            dispatch(c.SHOW_BOARD_FRAME_ANIM, {
              complete: function () {}
            }), dispatch(c.SHOW_SYMBOLS_WIN, {
              complete: function () {
                dispatch(c.SHOW_ALL_WIN_LINE), _(t).delay(1.2).call(n(e().mark(function n() {
                  return e().wrap(function (n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, App.uiManager.open({
                          type: s,
                          bundle: t.data.module,
                          zIndex: i.UI,
                          name: "FullCombo"
                        });
                      case 2:
                        dispatch(c.SHOW_FULL_COMBO);
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
            if (n.name === c.SHOW_FULL_COMBO_END) {
              var a = e.getData().parser.currentGameState.currentWinnings;
              return e.setBigWinReach(a) ? u.FG_WIN : u.FG_WAIT_WILD_ANIM;
            }
          }
        }), W({
          id: u.FG_WAIT_WILD_ANIM,
          onEntry: function () {
            dispatch(c.CHECK_WILD_ANIM_STATUS);
          },
          transitionTo: function (t) {
            if (t.event.name === c.WILD_ANIM_COMPLETED) {
              var n = T || u.FG_PLAY_WIN_ANIM;
              return T = "", n;
            }
          }
        }), W({
          id: u.FG_PLAY_WIN_ANIM,
          onEntry: function () {
            dispatch(c.PLAY_BTM, {
              data: {
                url: N.SFX_FREE_WIN
              }
            }), dispatch(c.PLAY_FG_WIN_ANIM);
          },
          transitionTo: function (t) {
            if (t.event.name === c.FG_WIN_ANIM_COMPLETED) return u.FG_SHOW_WIN_LINE;
          }
        }), W({
          id: u.FG_SHOW_WIN_LINE,
          onEntry: function () {
            dispatch(c.SHOW_WIN_SUMMARY), dispatch(c.SHOW_TOTAL_WIN_CASH), dispatch(c.CAN_SKIP_WIN_LINE);
          },
          transitionTo: function (t) {
            if (t.event.name === c.SHOW_WIN_SUMMARY_END) return dispatch(c.CHECK_MULTIPLE), A = u.FG_SHOW_CURRENT_VIEW_WIN_SCORE, u.FG_WAIT_FUNCTION_ANIM;
          }
        }), W({
          id: u.FG_SHOW_CURRENT_VIEW_WIN_SCORE,
          onEntry: function () {
            dispatch(c.CLEAR_ALL_WIN_LINE), dispatch(c.HIDE_SYMBOLS_WIN), dispatch(c.SHOW_CURRENT_VIEW_WIN_CASH);
          },
          transitionTo: function (t) {
            var n = t.event,
              e = t.sharedData;
            if (n.name == c.SHOW_CURRENT_VIEW_WIN_CASH_END) {
              var a = e.getData(),
                _ = a.parser,
                i = a.gameState,
                r = _.currentGameState,
                S = r.numFreeSpins,
                I = r.freeSpinWon,
                o = r.startFreeGame,
                s = (r.view, i[_.currentSpinIndex + 1]);
              if (!s || S !== s.numFreeSpins) {
                if (o) return u.FG_SHOW_ALL_WIN;
                var N = _.currentGameState.currentWinnings;
                if (e.setBigWinReach(N)) return dispatch(c.RESET_FG_CLICK_SKIP_WIN_LINE), u.FG_SHOW_ALL_WIN_LINE;
                var E = i[_.currentSpinIndex - 1];
                return null != E && E.numFreeSpins === S ? u.FG_SHOW_ROUND_WINNINGS_WIN_SCORE : 0 !== S || void 0 !== I && 0 !== I ? (dispatch(c.UPDATE_TIMES), u.FG_WAIT_SPIN) : e.setBigWinReach(_.currentGameState.totalWinnings) ? u.FG_BIG_WIN : u.FG_SHOW_SUMMARY_ALERT;
              }
              return e.hasWinSymbols() ? e.getData().parser.currentGameState.fullCombo ? u.FG_SHOW_FULL_COMBO : u.FG_WAIT_WILD_ANIM : (dispatch(c.UPDATE_TIMES), u.FG_WAIT_SPIN);
            }
          }
        }), W({
          id: u.FG_EXPLODE_AND_DELETE,
          onEntry: function () {
            dispatch(c.SHOW_SYMBOLS_FRAME_OUT);
          },
          transitionTo: function (t) {
            if (t.event.name == c.SHOW_SYMBOLS_FRAME_OUT_END) return dispatch(c.UPDATE_TIMES), u.FG_DROP_SYMBOL;
          }
        }), W({
          id: u.FG_DROP_SYMBOL,
          onEntry: function () {},
          transitionTo: function (t) {
            var n = t.event,
              e = t.sharedData;
            if (n.name == c.SHOW_DROP_SYMBOL_END) {
              var a = e.getData(),
                _ = a.parser,
                i = a.gameState,
                r = _.currentGameState,
                S = r.numFreeSpins,
                I = r.startFreeGame,
                o = (r.view, i[_.currentSpinIndex + 1]);
              if (!o || S !== o.numFreeSpins) {
                if (I) return u.FG_SHOW_ALL_WIN;
                var s = _.currentGameState.currentWinnings;
                if (e.setBigWinReach(s)) return dispatch(c.RESET_FG_CLICK_SKIP_WIN_LINE), u.FG_SHOW_ALL_WIN_LINE;
                var N = i[_.currentSpinIndex - 1];
                return null != N && N.numFreeSpins === S ? u.FG_SHOW_ROUND_WINNINGS_WIN_SCORE : (dispatch(c.UPDATE_TIMES), u.FG_WAIT_SPIN);
              }
              return e.hasWinSymbols() ? e.getData().parser.currentGameState.fullCombo ? u.FG_SHOW_FULL_COMBO : u.FG_WAIT_WILD_ANIM : (dispatch(c.UPDATE_TIMES), u.FG_WAIT_SPIN);
            }
          }
        }), W({
          id: u.FG_SHOW_ROUND_WINNINGS_WIN_SCORE,
          onEntry: function () {
            dispatch(c.SHOW_FG_ROUND_WIN_CASH);
          },
          transitionTo: function (t) {
            var n = t.event,
              e = t.sharedData;
            if (n.name == c.SHOW_FG_ROUND_WIN_CASH_END) {
              dispatch(c.UPDATE_TIMES);
              var a = e.getData().parser.currentGameState,
                _ = a.numFreeSpins,
                i = a.freeSpinWon;
              if (0 === _ && (void 0 === i || 0 === i)) {
                var r = e.getData().parser.currentGameState.totalWinnings;
                return e.setBigWinReach(r) ? u.FG_BIG_WIN : u.FG_SHOW_SUMMARY_ALERT;
              }
              return u.FG_WAIT_SPIN;
            }
          }
        }), W({
          id: u.FG_WIN,
          onEntry: function (t) {
            var n = t.sharedData;
            dispatch(c.HIDE_SYMBOLS_WIN);
            var e = {
              winnings: n.getData().parser.currentGameState.currentWinnings,
              tweenTime: 5
            };
            dispatch(c.SHOW_WIN, {
              data: e
            });
          },
          transitionTo: function (t) {
            var n = t.event,
              e = t.sharedData;
            if (n.name === c.SHOW_WIN_END) {
              var a = e.getData().parser.currentGameState,
                _ = a.numFreeSpins,
                i = a.freeSpinWon,
                r = a.totalWinnings,
                S = 0 === _ && (void 0 === i || 0 === i);
              return dispatch(c.CLEAR_ALL_WIN_LINE), dispatch(c.HIDE_SYMBOLS_WIN), S ? e.setBigWinReach(r) ? u.FG_BIG_WIN : u.FG_SHOW_SUMMARY_ALERT : u.FG_WAIT_SPIN;
            }
          }
        }), W({
          id: u.FG_BIG_WIN,
          onEntry: function (t) {
            var n = t.sharedData,
              e = {
                winnings: n.getData().parser.currentGameState.totalWinnings,
                tweenTime: 5 + 3 * n.getData().parser.bigwinReach.level,
                isUpdateInfoBarTotalWinnings: !1
              };
            dispatch(c.SHOW_BIG_WIN, {
              data: e
            });
          },
          transitionTo: function (t) {
            var n = t.event,
              e = t.sharedData;
            if (n.name === c.SHOW_BIG_WIN_END) {
              var a = e.getData().parser.currentGameState.totalWinnings;
              return dispatch(r.UPDATE_TOTAL_WINNINGS, {
                data: {
                  value: a
                }
              }), dispatch(r.UPDATE_USER_BALANCE, {
                data: {
                  balance: S.amount
                }
              }), I.isReplay ? u.MG_WAIT_REPLAY : u.FG_SHOW_SUMMARY_ALERT;
            }
          }
        })];
      }), a._RF.push({}, "ef7cf6yOKhN1aSuUmwhTJ6c", "FGStates", void 0);
      var A = "",
        T = "",
        G = !1;
      a._RF.pop();
    }
  };
});
