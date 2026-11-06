System.register("chunks:///_virtual/GameSender.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Bundles.ts", "./ServerModel.ts", "./CmmUtils.ts", "./Http.ts", "./SlotFrameworkEvent.ts", "./GameService.ts", "./type2.ts", "./Config.ts", "./GameSenderBase.ts", "./DefinitionModel.ts", "./GameStateModel.ts", "./InitialModel.ts", "./PlatformModel.ts", "./SettingsModel.ts", "./SlotTableModel.ts", "./SocketModel.ts", "./ReplayModel.ts", "./UrlUtils2.ts", "./GameData.ts", "./GameEvent.ts", "./NoTouchingView.ts", "./SlotFrameworkData.ts"], function (e) {
  "use strict";

  var t, a, s, n, r, o, i, u, S, l, d, c, p, E, f, R, T, A, g, m, _, h, O, v, L, C, N, P, D, y, w;
  return {
    setters: [function (e) {
      t = e.inheritsLoose, a = e.extends, s = e.createClass;
    }, function (e) {
      n = e.cclegacy, r = e.sys;
    }, function (e) {
      o = e.EBundles;
    }, function (e) {
      i = e.default, u = e.EServerMode;
    }, function (e) {
      S = e.CmmUtils;
    }, function (e) {
      l = e.Http;
    }, function (e) {
      d = e.SlotFrameworkEvent;
    }, function (e) {
      c = e.GameService;
    }, function (e) {
      p = e.ESocketRequestName, E = e.ESpinStatus, f = e.EDebugLogLevel;
    }, function (e) {
      R = e.ViewZOrder;
    }, function (e) {
      T = e.GameSenderBase;
    }, function (e) {
      A = e.default;
    }, function (e) {
      g = e.default;
    }, function (e) {
      m = e.default;
    }, function (e) {
      _ = e.default;
    }, function (e) {
      h = e.default;
    }, function (e) {
      O = e.default;
    }, function (e) {
      v = e.default;
    }, function (e) {
      L = e.default, C = e.EReplayMode;
    }, function (e) {
      N = e.default;
    }, function (e) {
      P = e.default;
    }, function (e) {
      D = e.GameEvent;
    }, function (e) {
      y = e.default;
    }, function (e) {
      w = e.default;
    }],
    execute: function () {
      n._RF.push({}, "be1dbC7O1BEpJuLAxYPjefm", "GameSender", void 0), e("GameSender", function (e) {
        function n() {
          return e.apply(this, arguments) || this;
        }
        t(n, e);
        var T = n.prototype;
        return T.initial = function () {
          var e = this;
          if (i.mode !== u.STATIC) {
            var t = {
              token: v.currentToken,
              clientType: S.getClientType(),
              deviceInfo: {
                browser: {
                  name: r.browserType,
                  version: r.browserVersion
                },
                os: {
                  name: r.os,
                  version: r.osVersion,
                  versionName: r.osMainVersion
                },
                platform: {
                  type: r.platform
                },
                engine: {
                  name: "cocos creator 3.7.2"
                }
              }
            };
            return new Promise(function (a, s) {
              e.send("initial", t, function (t) {
                if (t.status == l.ServerStatus.SUCCESS) {
                  if (t.code) return Log.e("NETWORK_ERROR: ", t), void e.responsShowAlert(t.message, null == t ? void 0 : t.code);
                  try {
                    e.setToken(t), A.setData(t.engine.definition), g.setData(t.engine.gameState), _.setData(t.platform), h.setData(t.platform.player.settings), m.setData(t), dispatch(d.INIT_RESPONSE, t), a();
                  } catch (e) {
                    var s = {
                      title: App.getLanguage("alertHint", [], o[o.slotFramework]),
                      text: "initial data error",
                      bbrCb: function () {},
                      needCloseAlert: !1,
                      code: e
                    };
                    App.gameAlert.show(s);
                  }
                } else Log.e("NETWORK_ERROR: ", t), e.responsShowAlert(t.message, null == t ? void 0 : t.code);
              });
            });
          }
        }, T.responsShowAlert = function (e, t) {
          if ("xin-star" == _.getData().theme) {
            var a = App.getLanguage("disconnectXinStar", [], o[o.wrapper]);
            this.showAlert(a, {
              needCloseAlert: !1,
              code: t,
              titleisHidden: !0,
              expandisHidden: !0,
              confirmisHidden: !0
            });
          } else this.showAlert(e, {
            needCloseAlert: !1,
            code: t
          });
        }, T.spin = function (e, t, s, n) {
          var r = this;
          if (i.mode !== u.STATIC) {
            var o = a({
              request: p.SPIN
            }, e, {
              updateStake: n
            }, t && {
              spinId: t
            }, s && {
              cheat: s
            });
            this.send(o.request, o, function (e) {
              if (e.status == l.ServerStatus.SUCCESS) r.setToken(e), g.setData(e.engine.gameState), e.platform.player.balance.updatedAt ? _.updateBalance(e.platform.player.balance.amount, e.platform.player.balance.updatedAt) : _.amount = e.platform.player.balance.amount, null != e.platform.player.balance.betAmount && (_.betAmount = e.platform.player.balance.betAmount), dispatch(d.SPIN_RESPONSE, e);else if (e.status == l.ServerStatus.ERROR_SPIN_ONE_MORE) {
                var a, s, n, i;
                r.setToken(e), dispatch(d.UPDATE_SPIN_STATUS, {
                  data: E.IDLE
                }), Log.e("後端->前端 多打了一次spin"), r.debugLog({
                  id: t || r.data.getData().gameState.spinId,
                  level: f.ERROR,
                  message: "後端->前端 多打了一次spin",
                  data: {
                    requestVO: o,
                    currentData: null == (a = r.data) || null == (s = a.getData()) ? void 0 : s.gameState,
                    preData: null == (n = r.data) || null == (i = n.preData) ? void 0 : i.gameState
                  }
                });
              } else Log.e("NETWORK_ERROR: ", e), r.responsShowAlert(e.message, null == e ? void 0 : e.code);
            });
          }
        }, T.earlySpin = function (e, t, s, n) {
          var r = this;
          if (i.mode !== u.STATIC) {
            var o = a({
              request: p.SPIN
            }, e, {
              updateStake: s
            }, t && {
              spinId: t
            }, {
              forceClose: n
            });
            Log.w("early request::::::::::", o, n), this.send(o.request, o, function (e) {
              e.status == l.ServerStatus.SUCCESS ? (r.setToken(e), dispatch(d.EARLY_SPIN_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), r.responsShowAlert(e.message, e.code));
            });
          }
        }, T.closeSpin = function (e) {
          var t = this,
            a = {
              request: p.CLOSE_SPIN,
              spinId: e
            };
          this.send(a.request, a, function (e) {
            if (e.status == l.ServerStatus.SUCCESS) {
              t.setToken(e);
              var a = e.platform.player.balance.amount;
              if (e.platform.player.balance.updatedAt) {
                var s = e.platform.player.balance.updatedAt;
                _.updateBalance(a, s);
              } else _.amount = e.platform.player.balance.amount;
              dispatch(d.CLOSE_RESPONSE, e);
            } else Log.e("NETWORK_ERROR: ", e), t.responsShowAlert(e.message, e.code);
          });
        }, T.earlyCloseSpin = function (e, t) {
          var a = this,
            s = {
              request: p.CLOSE_SPIN,
              spinId: e
            };
          this.send(s.request, s, function (e) {
            e.status == l.ServerStatus.SUCCESS ? (a.setToken(e), t && t(), dispatch(d.EARLY_CLOSE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), a.responsShowAlert(e.message, e.code));
          });
        }, T.setting = function (e) {
          var t = this,
            s = a({
              request: p.UPDATE_SETTINGS
            }, e);
          this.send(s.request, s, function (e) {
            if (e.status != l.ServerStatus.SUCCESS) return Log.e("update setting NETWORK_ERROR: ", e), void dispatch(D.FG_STOP_COUNT_FOR_PLAY_LOG);
            t.setToken(e);
          });
        }, T.getBetRecords = function (e) {
          var t = this,
            s = a({
              request: p.GET_BET_RECORDS
            }, e);
          this.send(s.request, s, function (e) {
            e.status == l.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(d.BET_RECORDS_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.responsShowAlert(e.message, e.code));
          });
        }, T.getHistoryRecords = function (e) {
          var t = this,
            s = a({
              request: p.GET_USER_REPORT
            }, e);
          this.send(s.request, s, function (e) {
            e.status == l.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(d.GET_HISTORY_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.responsShowAlert(e.message, e.code));
          });
        }, T.getSlotTablePage = function (e) {
          var t = this,
            s = a({
              request: p.GET_SLOT_TABLES
            }, e);
          this.send(s.request, s, function (e) {
            e.status == l.ServerStatus.SUCCESS ? (t.setToken(e), O.setData(e), dispatch(d.SLOT_TABLE_PAGE_DATA_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.responsShowAlert(e.message, e.code));
          });
        }, T.getSlotTableDetail = function (e) {
          var t = this,
            s = a({
              request: p.GET_SLOT_TABLE_DETAIL
            }, e);
          this.send(s.request, s, function (e) {
            e.status == l.ServerStatus.SUCCESS ? (t.setToken(e), O.setData(e), dispatch(d.SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.responsShowAlert(e.message, e.code));
          });
        }, T.changeSlotTable = function (e) {
          var t = this,
            s = a({
              request: p.UPDATE_SLOT_TABLE
            }, e);
          this.send(s.request, s, function (e) {
            if (e.status !== l.ServerStatus.BACKEND_ERROR) {
              if (t.setToken(e), e.status !== l.ServerStatus.NOT_MODIFIED) {
                var a = new URLSearchParams(window.location.search);
                a.set("table", "1");
                var s = window.location.pathname + "?" + a.toString();
                window.location.href = s;
              } else App.gameAlert.show({
                text: e.message,
                confirmCb: function () {
                  dispatch(d.SYNC_SOLT_TABLES);
                },
                bbrCb: function () {}
              }, R.TopErrorAlert);
            } else t.showAlert(e.message, {
              needCloseAlert: !1,
              code: e.code
            });
          });
        }, T.lockSlotTable = function (e) {
          var t = this,
            s = a({
              request: p.LOCK_SLOT_TABLE
            }, e);
          this.send(s.request, s, function (e) {
            e.status == l.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(d.LOCK_SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.responsShowAlert(e.message, e.code));
          });
        }, T.buyFeature = function (e, t) {
          var s = this,
            n = a({
              request: p.SPIN,
              action: "buyFeature",
              clientType: "web",
              featureIndex: 0,
              featureValue: "freeGame"
            }, e, {
              updateStake: !0
            });
          this.send(n.request, n, function (e) {
            if (e.status == l.ServerStatus.SUCCESS) s.setToken(e), dispatch(d.BUY_FEATURE_RESPONSE, {
              data: e.engine.gameState.spinId
            });else if (Log.e("NETWORK_ERROR: ", e), "xin-star" == _.getData().theme) {
              var t = App.getLanguage("disconnectXinStar", [], o[o.wrapper]);
              s.showAlert(t, {
                needCloseAlert: !1,
                code: e.code,
                titleisHidden: !0,
                expandisHidden: !0,
                confirmisHidden: !0
              });
            } else App.gameAlert.show({
              text: e.message,
              confirmCb: function () {},
              bbrCb: function () {}
            });
          });
        }, T.updateAvatar = function (e) {
          var t = {
            request: p.UPDATE_AVATAR,
            avatarId: e
          };
          this.send(t.request, t), _.getData().player.avatar = e, _.getData().player.avatarUrl = N.GetAvatarUrl(e), dispatch(d.UPDATE_AVATAR_COMPLETED_RESPONSE);
        }, T.updateDisplayName = function (e) {
          var t = this,
            a = {
              request: p.UPDATE_DISPLAYNAME,
              displayName: e
            };
          this.send(a.request, a, function (a) {
            t.setToken(a), a.status !== l.ServerStatus.REQUEST_ERROR ? (_.getData().player.displayName = e, dispatch(d.UPDATE_DISPLAYNAME_RESPONSE)) : dispatch(d.SET_DISPLAYNAME_TIP, a.message);
          });
        }, T.replay = function () {
          var e = this,
            t = new URL(window.location.href).searchParams.get("spinId"),
            a = {
              request: p.REPLAY,
              spinId: t
            };
          this.send(a.request, a, function (t) {
            t.status == l.ServerStatus.SUCCESS ? (L.setData(t), A.setData(t.definition), dispatch(d.REPLAY_RESPONSE, t)) : (Log.e("NETWORK_ERROR: ", t), e.responsShowAlert(t.message));
          });
        }, T.getSlotBetRanksList = function (e) {
          var t = this,
            s = a({
              request: p.GET_SLOT_BET_RANKS_LIST,
              action: "list"
            }, e);
          this.send(s.request, s, function (e) {
            e.status == l.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(d.GET_RANKING_LIST_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
              needCloseAlert: !1,
              code: e.code
            }));
          });
        }, T.getSlotBetRanksReplay = function (e) {
          var t = this,
            s = a({
              request: p.GET_SLOT_BET_RANKS_REPLAY,
              action: "replay"
            }, e);
          if (App.dataCenter.get(w).getData().spinStatus === E.IDLE) return new Promise(function (e, a) {
            t.send(s.request, s, function (a) {
              L.replayMode = C.RANKING_REPLAY, a.status == l.ServerStatus.SUCCESS ? (L.isReplay = !0, t.data.saveOriginGameData(), L.setData(a), _.getData().player.displayName = a.betData.replayMeta.displayName, _.amount = a.betData.replayMeta.amount, a.definition && A.setData(a.definition), dispatch(d.REPLAY_RESPONSE, a), dispatch(D.PROCESS_REPLAY_IN_GAME, {
                data: a
              }), e()) : (Log.e("NETWORK_ERROR: ", a), t.showAlert(a.message, {
                needCloseAlert: !1
              }));
            });
          });
          App.uiManager.close(y);
          var n = {
            text: "請等待遊戲結束後，再進行重播",
            confirmCb: function () {
              dispatch(d.PLAY_CLICK_BTM);
            },
            bbrCb: function () {
              dispatch(d.PLAY_CLICK_BTM);
            },
            needCloseAlert: !0,
            tag: R.Tips
          };
          App.gameAlert.show(n, R.Tips);
        }, s(n, [{
          key: "service",
          get: function () {
            return App.serviceManager.get(c);
          }
        }, {
          key: "data",
          get: function () {
            return App.dataCenter.get(P);
          }
        }]), n;
      }(T)).module = o[o.g1001], n._RF.pop();
    }
  };
});
