System.register("chunks:///_virtual/GameSender.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Config.ts", "./Bundles.ts", "./ServerModel.ts", "./CmmUtils.ts", "./Http.ts", "./StakeModel.ts", "./SlotFrameworkEvent.ts", "./DefinitionModel.ts", "./GameStateModel.ts", "./InitialModel.ts", "./PlatformModel.ts", "./ReplayModel.ts", "./SettingsModel.ts", "./SlotTableModel.ts", "./SocketModel.ts", "./GameSenderBase.ts", "./type2.ts", "./NoTouchingView.ts", "./GameData.ts", "./GameEvent.ts", "./StateMachineManager.ts", "./GameService.ts", "./GameConfigModel.ts", "./LogUtils.ts", "./StateId.ts", "./StaticData.ts"], function (e) {
  "use strict";

  var t, a, n, s, i, o, r, l, S, u, d, c, E, R, p, f, g, T, _, h, m, A, O, C, L, v, P, N, y, I, D, k, w, U, M;
  return {
    setters: [function (e) {
      t = e.inheritsLoose, a = e.extends, n = e.createClass;
    }, function (e) {
      s = e.cclegacy, i = e.sys, o = e.tween;
    }, function (e) {
      r = e.ViewZOrder;
    }, function (e) {
      l = e.EBundles;
    }, function (e) {
      S = e.EServerMode, u = e.default;
    }, function (e) {
      d = e.CmmUtils;
    }, function (e) {
      c = e.Http;
    }, function (e) {
      E = e.default;
    }, function (e) {
      R = e.SlotFrameworkEvent;
    }, function (e) {
      p = e.default;
    }, function (e) {
      f = e.default;
    }, function (e) {
      g = e.default;
    }, function (e) {
      T = e.default;
    }, function (e) {
      _ = e.default, h = e.EReplayMode;
    }, function (e) {
      m = e.default;
    }, function (e) {
      A = e.default;
    }, function (e) {
      O = e.default;
    }, function (e) {
      C = e.GameSenderBase;
    }, function (e) {
      L = e.ESocketRequestName;
    }, function (e) {
      v = e.default;
    }, function (e) {
      P = e.default;
    }, function (e) {
      N = e.GameEvent;
    }, function (e) {
      y = e.default;
    }, function (e) {
      I = e.GameService;
    }, function (e) {
      D = e.default;
    }, function (e) {
      k = e.getKeyStyle, w = e.KeyStyle;
    }, function (e) {
      U = e.StateId;
    }, function (e) {
      M = e.StaticData;
    }],
    execute: function () {
      s._RF.push({}, "de4daFVPG9C44RwvlkkmNMv", "GameSender", void 0), e("GameSender", function (e) {
        function s() {
          for (var t, a = arguments.length, n = new Array(a), s = 0; s < a; s++) n[s] = arguments[s];
          return (t = e.call.apply(e, [this].concat(n)) || this).originToken = "", t.isOptionSpin = !1, t;
        }
        t(s, e);
        var C = s.prototype;
        return C.applyBalance = function (e) {
          e.updatedAt ? T.updateBalance(e.amount, e.updatedAt) : T.amount = e.amount;
        }, C.initial = function () {
          var e = this;
          if (Log.d("%c EServerMode %o", k(w.Notify), S[u.mode]), u.mode === S.STATIC) {
            var t = M.initialData;
            return this.setToken(t), p.setData(t.engine.definition), f.setData(t.engine.gameState), T.setData(t.platform), m.setData(t.platform.player.settings), g.setData(t), E.init({
              stakeList: t.platform.game.stakeValues,
              stakeIndex: t.platform.player.settings.stakeIndex,
              ratioList: t.platform.game.ratioValues,
              ratioIndex: t.platform.player.settings.ratioIndex,
              numWinlines: t.engine.definition.winlineDefs.length
            }), void dispatch(R.INIT_RESPONSE, t);
          }
          var a = {
            token: O.currentToken,
            clientType: d.getClientType(),
            deviceInfo: {
              browser: {
                name: i.browserType,
                version: i.browserVersion
              },
              os: {
                name: i.os,
                version: i.osVersion,
                versionName: i.osMainVersion
              },
              platform: {
                type: i.platform
              },
              engine: {
                name: "cocos creator 3.7.2"
              }
            }
          };
          return new Promise(function (t, n) {
            e.send("initial", a, function (a) {
              if (a.status == c.ServerStatus.SUCCESS) {
                if (a.code) return Log.e("NETWORK_ERROR: ", a), void e.showAlert(a.message, {
                  needCloseAlert: !1,
                  code: null == a ? void 0 : a.code
                });
                try {
                  e.setToken(a), p.setData(a.engine.definition), f.setData(a.engine.gameState), T.setData(a.platform), m.setData(a.platform.player.settings), g.setData(a), E.init({
                    stakeList: a.platform.game.stakeValues,
                    stakeIndex: a.platform.player.settings.stakeIndex,
                    ratioList: a.platform.game.ratioValues,
                    ratioIndex: a.platform.player.settings.ratioIndex,
                    numWinlines: a.engine.definition.winlineDefs.length
                  }), dispatch(R.INIT_RESPONSE, a), t();
                } catch (e) {
                  var n = {
                    title: App.getLanguage("alertHint", [], l[l.slotFramework]),
                    text: "initial data error",
                    bbrCb: function () {},
                    needCloseAlert: !1,
                    code: e
                  };
                  App.gameAlert.show(n);
                }
              } else Log.e("NETWORK_ERROR: ", a), e.showAlert(a.message, {
                needCloseAlert: !1,
                code: null == a ? void 0 : a.code
              });
            });
          });
        }, C.spin = function (e, t, n, s) {
          var i = this;
          if (u.mode === S.STATIC || s) return this.isOptionSpin = !0, void o(this).delay(.1).call(function () {
            try {
              var e = JSON.parse(JSON.stringify(s));
              Log.d("%c SPIN_RESP %o", k(w.Manager), e), f.setData(e.engine.gameState), i.applyBalance(e.platform.player.balance), dispatch(R.SPIN_RESPONSE, e);
            } catch (e) {
              Log.e("SPIN_RESPONSE error: ", e), i.showAlert(e.message || "Spin error");
            }
          }).start();
          this.isOptionSpin = !1;
          var r = a({
            request: L.SPIN
          }, e, {
            updateStake: n
          }, t && {
            spinId: t
          });
          this.send(r.request, r, function (e) {
            if (e.status == c.ServerStatus.SUCCESS) try {
              i.originToken = e.token, i.setToken(e), f.setData(e.engine.gameState), i.applyBalance(e.platform.player.balance), dispatch(R.SPIN_RESPONSE, e);
            } catch (e) {
              Log.e("SPIN_RESPONSE error: ", e), i.showAlert(e.message || "Spin error");
            } else Log.e("NETWORK_ERROR: ", e), i.showAlert(e.message, {
              needCloseAlert: !1,
              code: e.code
            });
          });
        }, C.closeSpin = function (e) {
          var t = this;
          if (u.mode === S.STATIC || this.isOptionSpin) o(this).delay(.1).call(function () {
            dispatch(R.CLOSE_RESPONSE);
          }).start();else if (!D.isSendClose) {
            var a = {
              request: L.CLOSE_SPIN,
              spinId: e
            };
            this.send(a.request, a, function (e) {
              e.status == c.ServerStatus.SUCCESS ? (t.setToken(e), t.applyBalance(e.platform.player.balance), t.data.getData().isResuming && (t.data.getData().isResuming = !1), dispatch(R.CLOSE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
                needCloseAlert: !1,
                code: e.code
              }));
            });
          }
        }, C.setting = function (e) {
          var t = this,
            n = a({
              request: L.UPDATE_SETTINGS
            }, e);
          this.send(n.request, n, function (e) {
            e.status == c.ServerStatus.SUCCESS ? t.setToken(e) : Log.e("update setting NETWORK_ERROR: ", e);
          });
        }, C.getBetRecords = function (e) {
          var t = this,
            n = a({
              request: L.GET_BET_RECORDS
            }, e);
          this.send(n.request, n, function (e) {
            e.status == c.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(R.BET_RECORDS_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
              needCloseAlert: !1,
              code: e.code
            }));
          });
        }, C.getHistoryRecords = function (e) {
          var t = this,
            n = a({
              request: L.GET_USER_REPORT
            }, e);
          this.send(n.request, n, function (e) {
            e.status == c.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(R.GET_HISTORY_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
              needCloseAlert: !1,
              code: e.code
            }));
          });
        }, C.getSlotBetRanksList = function (e) {
          var t = this,
            n = a({
              request: L.GET_SLOT_BET_RANKS_LIST,
              action: "list"
            }, e);
          this.send(n.request, n, function (e) {
            e.status == c.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(R.GET_RANKING_LIST_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
              needCloseAlert: !1,
              code: e.code
            }));
          });
        }, C.getSlotBetRanksReplay = function (e) {
          var t = this,
            n = a({
              request: L.GET_SLOT_BET_RANKS_REPLAY,
              action: "replay"
            }, e);
          if (y.getMachine().currentStateId === U.MG_WAIT_SPIN) return new Promise(function (e, a) {
            t.send(n.request, n, function (a) {
              _.replayMode = h.RANKING_REPLAY, a.status == c.ServerStatus.SUCCESS ? (t.data.saveOriginGameData(), t.data.setReplayInitData(a), t.applyReplayMeta(a, p.getData().winlineDefs.length), dispatch(N.PROCESS_REPLAY_IN_GAME, {
                data: a
              }), e()) : (Log.e("NETWORK_ERROR: ", a), t.showAlert(a.message, {
                needCloseAlert: !1
              }));
            });
          });
          App.uiManager.close(v);
          var s = {
            text: "請等待遊戲結束後，再進行重播",
            confirmCb: function () {
              dispatch(R.PLAY_CLICK_BTM);
            },
            bbrCb: function () {
              dispatch(R.PLAY_CLICK_BTM);
            },
            needCloseAlert: !0,
            tag: r.Tips
          };
          App.gameAlert.show(s, r.Tips);
        }, C.getSlotTablePage = function (e) {
          var t = this,
            n = a({
              request: L.GET_SLOT_TABLES
            }, e);
          this.send(n.request, n, function (e) {
            e.status == c.ServerStatus.SUCCESS ? (t.setToken(e), A.setData(e), dispatch(R.SLOT_TABLE_PAGE_DATA_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
              needCloseAlert: !1,
              code: e.code
            }));
          });
        }, C.getSlotTableDetail = function (e) {
          var t = this,
            n = a({
              request: L.GET_SLOT_TABLE_DETAIL
            }, e);
          this.send(n.request, n, function (e) {
            e.status == c.ServerStatus.SUCCESS ? (t.setToken(e), A.setData(e), dispatch(R.SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
              needCloseAlert: !1,
              code: e.code
            }));
          });
        }, C.changeSlotTable = function (e) {
          var t = this,
            n = a({
              request: L.UPDATE_SLOT_TABLE
            }, e);
          this.send(n.request, n, function (e) {
            if (e.status !== c.ServerStatus.BACKEND_ERROR) {
              if (t.setToken(e), e.status !== c.ServerStatus.NOT_MODIFIED) {
                var a = new URLSearchParams(window.location.search);
                a.set("table", "1");
                var n = window.location.pathname + "?" + a.toString();
                window.location.href = n;
              } else App.gameAlert.show({
                text: e.message,
                confirmCb: function () {
                  dispatch(R.SYNC_SOLT_TABLES);
                },
                bbrCb: function () {}
              }, r.TopErrorAlert);
            } else t.showAlert(e.message, {
              needCloseAlert: !1,
              code: e.code
            });
          });
        }, C.lockSlotTable = function (e) {
          var t = this,
            n = a({
              request: L.LOCK_SLOT_TABLE
            }, e);
          this.send(n.request, n, function (e) {
            e.status == c.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(R.LOCK_SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
              needCloseAlert: !1,
              code: e.code
            }));
          });
        }, C.buyFeature = function (e) {
          var t = this,
            n = a({
              request: L.SPIN,
              action: "buyFeature",
              clientType: "web"
            }, e, {
              updateStake: !0
            });
          this.send(n.request, n, function (e) {
            e.status == c.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(R.BUY_FEATURE_RESPONSE, {
              data: e.engine.gameState.spinId
            })) : (Log.e("NETWORK_ERROR: ", e), App.gameAlert.show({
              text: e.message,
              confirmCb: function () {
                dispatch(N.CLOSE_FEATURE_POPUP);
              },
              bbrCb: function () {
                dispatch(N.CLOSE_FEATURE_POPUP);
              }
            }));
          });
        }, C.updateAvatar = function (e) {
          var t = this,
            a = {
              request: L.UPDATE_AVATAR,
              avatarId: e
            };
          this.send(a.request, a, function (e) {
            if (e.status == c.ServerStatus.SUCCESS) {
              t.setToken(e);
              var a = e.data,
                n = a.avatarId,
                s = a.avatarUrl;
              T.getData().player.avatar = n, T.getData().player.avatarUrl = s, dispatch(R.UPDATE_AVATAR_COMPLETED_RESPONSE);
            } else Log.e("NETWORK_ERROR: ", e);
          });
        }, C.updateDisplayName = function (e) {
          var t = this,
            a = {
              request: L.UPDATE_DISPLAYNAME,
              displayName: e
            };
          this.send(a.request, a, function (a) {
            t.setToken(a), a.status !== c.ServerStatus.REQUEST_ERROR ? (T.getData().player.displayName = e, dispatch(R.UPDATE_DISPLAYNAME_RESPONSE)) : dispatch(R.SET_DISPLAYNAME_TIP, a.message);
          });
        }, C.replayInInitial = function () {
          var e = this;
          if (u.mode === S.STATIC) return new Promise(function (t) {
            var n = M.replayLuckyBigWin;
            _.replayMode = h.URL_REPLAY, e.data.setReplayInitData(n), p.setData(a({}, n.definition, {
              isDemo: !1
            })), e.applyReplayMeta(n, n.definition.winlineDefs.length), dispatch(N.PARSER_REPLAY_COMPLETED, n), t();
          });
          var t = new URL(window.location.href).searchParams.get("spinId"),
            n = {
              request: L.REPLAY,
              spinId: t
            };
          return new Promise(function (t, s) {
            e.send(n.request, n, function (n) {
              if (n.status == c.ServerStatus.SUCCESS) {
                _.replayMode = h.URL_REPLAY, e.data.setReplayInitData(n);
                var s = a({}, n.definition, {
                  isDemo: !1
                });
                p.setData(s), e.applyReplayMeta(n, n.definition.winlineDefs.length), dispatch(N.PARSER_REPLAY_COMPLETED, n), t();
              } else Log.e("NETWORK_ERROR: ", n), e.showAlert(n.message, {
                needCloseAlert: !1
              });
            });
          });
        }, C.sendJackpotGameSelectPosition = function (e) {
          var t = this;
          return new Promise(function (a) {
            t.sendWithoutCheck(L.SPIN, e, function (e) {
              e.status == c.ServerStatus.SUCCESS ? (t.data.getData().bonusState = e.engine.bonusState, Log.d("response : ", e), dispatch(N.JACKPOT_GAME_PICK_RESPONSE, e), a(!0)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
                needCloseAlert: !1
              }));
            });
          });
        }, C.sendFortuneLandingFinishReq = function (e) {
          var t = this;
          return new Promise(function (a) {
            O.currentToken = t.originToken, Log.d("%c sendFortuneLandingFinishReq ", "color:#00ff00", e), t.send(L.SPIN, e, function (n) {
              if (n.status == c.ServerStatus.SUCCESS || n.status == c.ServerStatus.ERROR_SPIN_ONE_MORE) {
                Log.d("finish response : ", n);
                var s = {
                  request: L.CLOSE_SPIN,
                  spinId: e.spinId
                };
                t.send(L.CLOSE_SPIN, s, function (e) {
                  Log.d("close spin response::::::::", e), e.status == c.ServerStatus.SUCCESS ? (t.setToken(e), t.applyBalance(e.platform.player.balance), t.data.reset(), dispatch(N.DROP_TREASURE_RESULT_RESP), a(!0)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
                    needCloseAlert: !1
                  }));
                });
              } else Log.e("NETWORK_ERROR: ", n), t.showAlert(n.message, {
                needCloseAlert: !1
              });
            });
          });
        }, C.sendFortuneLandingCollectReq = function (e) {
          var t = this;
          return new Promise(function (a) {
            Log.d("%c sendFortuneLandingCollectReq ", "color:#00ff00", e), O.currentToken = e.token, t.sendWithoutCheck(L.SPIN, e, function (e) {
              e.status == c.ServerStatus.SUCCESS ? (Log.d("response : ", e), t.data.getData().bonusState = e.engine.bonusState, a(!0)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
                needCloseAlert: !1
              }));
            });
          });
        }, C.applyReplayMeta = function (e, t) {
          var a = e.betData.replayMeta;
          T.getData().player.displayName = a.displayName, T.amount = a.amount;
          var n = a.ratioIndex,
            s = a.stakeIndex,
            i = a.ratioValues,
            o = a.stakeValues;
          E.init({
            stakeIndex: s,
            ratioIndex: n,
            stakeList: o,
            ratioList: i,
            numWinlines: t
          }), T.getData().player.avatar = a.avatarId, T.getData().player.avatarUrl = a.avatarUrl, dispatch(R.UPDATE_AVATAR_COMPLETED_RESPONSE);
        }, C.extension = function (e, t) {
          var n = a({
            request: L.EXTENSION
          }, e, {
            spinId: t
          });
          this.send(n.request, n, function (e) {
            e.status == c.ServerStatus.SUCCESS || Log.e("NETWORK_ERROR: ", e);
          });
        }, n(s, [{
          key: "service",
          get: function () {
            return App.serviceManager.get(I);
          }
        }, {
          key: "data",
          get: function () {
            return App.dataCenter.get(P);
          }
        }]), s;
      }(C)).module = l[l.g1011], s._RF.pop();
    }
  };
});
