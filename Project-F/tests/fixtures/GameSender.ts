// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Config";
import * as _dependency4 from "../../shared/scripts/main-Bundles";
import * as _dependency5 from "../../shared/scripts/main-ServerModel";
import * as _dependency6 from "../../shared/scripts/main-CmmUtils";
import * as _dependency7 from "../../shared/scripts/main-Http";
import * as _dependency8 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency0 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-GameStateModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-InitialModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency14 from "../../shared/scripts/slotFramework-SlotTableModel";
import * as _dependency15 from "../../shared/scripts/slotFramework-SocketModel";
import * as _dependency16 from "../../shared/scripts/slotFramework-GameSenderBase";
import * as _dependency17 from "../../shared/scripts/slotFramework-type2";
import * as _dependency18 from "./g1004-GameService";
import * as _dependency19 from "./g1004-GameEvent";
import * as _dependency20 from "./g1004-GameData";
import * as _dependency21 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency22 from "./g1004-StaticData";
import * as _dependency23 from "../../shared/scripts/slotFramework-NoTouchingView";
import * as _dependency24 from "./g1004-StateMachineManager";
var _export;
export { _export as GameSender };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameSender":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, a, s, n, o, r, i, l, u, S, d, c, E, p, R, f, g, T, m, A, _, h, O, v, L, C, N, P, y, I, D, k, w, b;
_dependency2.cclegacy._RF.push({}, "de4daFVPG9C44RwvlkkmNMv", "GameSender", void 0), _publish("GameSender", function (e) {
  var _nativeConstructor = n;
  function n() {
    for (var t, a = arguments.length, s = new Array(a), n = 0; n < a; n++) s[n] = arguments[n];
    return (t = Reflect.construct(e, [this].concat(s).slice(1), new.target || _nativeConstructor) || this).originToken = "", t.isOptionSpin = !1, t;
  }
  _dependency.inheritsLoose(n, e);
  var v = n.prototype;
  return v.initial = function () {
    var e = this;
    if (_dependency5.default.mode === _dependency5.EServerMode.STATIC) {
      var t = _dependency22.initialData;
      return this.setToken(t), _dependency0.default.setData(t.engine.definition), _dependency1.default.setData(t.engine.gameState), _dependency11.default.setData(t.platform), _dependency13.default.setData(t.platform.player.settings), _dependency10.default.setData(t), _dependency8.default.init({
        stakeList: t.platform.game.stakeValues,
        stakeIndex: t.platform.player.settings.stakeIndex,
        ratioList: t.platform.game.ratioValues,
        ratioIndex: t.platform.player.settings.ratioIndex,
        numWinlines: t.engine.definition.winlineDefs.length
      }), void dispatch(_dependency9.SlotFrameworkEvent.INIT_RESPONSE, t);
    }
    var a = {
      token: _dependency15.default.currentToken,
      clientType: _dependency6.CmmUtils.getClientType(),
      deviceInfo: {
        browser: {
          name: _dependency2.sys.browserType,
          version: _dependency2.sys.browserVersion
        },
        os: {
          name: _dependency2.sys.os,
          version: _dependency2.sys.osVersion,
          versionName: _dependency2.sys.osMainVersion
        },
        platform: {
          type: _dependency2.sys.platform
        },
        engine: {
          name: "cocos creator 3.7.2"
        }
      }
    };
    return new Promise(function (t, s) {
      e.send("initial", a, function (a) {
        if (Log.d("%c INIT_RESPONSE", _dependency21.getKeyStyle(_dependency21.KeyStyle.Response), a), a.status == _dependency7.Http.ServerStatus.SUCCESS) {
          if (a.code) return Log.e("NETWORK_ERROR: ", a), void e.showAlert(a.message, {
            needCloseAlert: !1,
            code: null == a ? void 0 : a.code
          });
          try {
            e.setToken(a), _dependency0.default.setData(a.engine.definition), _dependency1.default.setData(a.engine.gameState), _dependency11.default.setData(a.platform), _dependency13.default.setData(a.platform.player.settings), _dependency10.default.setData(a), _dependency8.default.init({
              stakeList: a.platform.game.stakeValues,
              stakeIndex: a.platform.player.settings.stakeIndex,
              ratioList: a.platform.game.ratioValues,
              ratioIndex: a.platform.player.settings.ratioIndex,
              numWinlines: a.engine.definition.winlineDefs.length
            }), dispatch(_dependency9.SlotFrameworkEvent.INIT_RESPONSE, a), t();
          } catch (e) {
            var s = {
              title: App.getLanguage("alertHint", [], _dependency4.EBundles[_dependency4.EBundles.slotFramework]),
              text: "initial data error",
              bbrCb: function () {},
              needCloseAlert: !1,
              code: e
            };
            App.gameAlert.show(s);
          }
        } else Log.e("NETWORK_ERROR: ", a), e.showAlert(a.message, {
          needCloseAlert: !1,
          code: null == a ? void 0 : a.code
        });
      });
    });
  }, v.spin = function (e, t, s, n) {
    var o = this;
    if (_dependency5.default.mode === _dependency5.EServerMode.STATIC || n) return this.isOptionSpin = !0, void _dependency2.tween(this).bindNodeState(false).delay(.1).call(function () {
      var e = JSON.parse(JSON.stringify(n || _dependency22.test));
      Log.d("%c SPIN_RESP", _dependency21.getKeyStyle(_dependency21.KeyStyle.Manager), e), _dependency1.default.setData(e.engine.gameState);
      var t = e.platform.player.balance.amount;
      if (e.platform.player.balance.updatedAt) {
        var a = e.platform.player.balance.updatedAt;
        _dependency11.default.updateBalance(t, a);
      } else _dependency11.default.amount = e.platform.player.balance.amount;
      dispatch(_dependency9.SlotFrameworkEvent.SPIN_RESPONSE, e);
    }).start();
    this.isOptionSpin = !1;
    var i = _dependency.extends({
      request: _dependency17.ESocketRequestName.SPIN
    }, e, {
      updateStake: s
    }, t && {
      spinId: t
    });
    this.send(i.request, i, function (e) {
      if (Log.d("%c SPIN_RESP", _dependency21.getKeyStyle(_dependency21.KeyStyle.Response), e), e.status == _dependency7.Http.ServerStatus.SUCCESS) {
        o.originToken = e.token, o.setToken(e), _dependency1.default.setData(e.engine.gameState);
        var t = e.platform.player.balance.amount;
        if (e.platform.player.balance.updatedAt) {
          var a = e.platform.player.balance.updatedAt;
          _dependency11.default.updateBalance(t, a);
        } else _dependency11.default.amount = e.platform.player.balance.amount;
        dispatch(_dependency9.SlotFrameworkEvent.SPIN_RESPONSE, e);
      } else Log.e("NETWORK_ERROR: ", e), o.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      });
    });
  }, v.closeSpin = function (e) {
    var t = this;
    if (_dependency5.default.mode === _dependency5.EServerMode.STATIC || this.isOptionSpin) _dependency2.tween(this).bindNodeState(false).delay(.1).call(function () {
      dispatch(_dependency9.SlotFrameworkEvent.CLOSE_RESPONSE);
    }).start();else {
      var a = {
        request: _dependency17.ESocketRequestName.CLOSE_SPIN,
        spinId: e
      };
      this.send(a.request, a, function (e) {
        if (Log.d("%c CLOSE_SPIN_RESPONSE", _dependency21.getKeyStyle(_dependency21.KeyStyle.Response), e), e.status == _dependency7.Http.ServerStatus.SUCCESS) {
          t.setToken(e);
          var a = e.platform.player.balance.amount;
          if (e.platform.player.balance.updatedAt) {
            var s = e.platform.player.balance.updatedAt;
            _dependency11.default.updateBalance(a, s);
          } else _dependency11.default.amount = e.platform.player.balance.amount;
          t.data.getData().isResuming && (t.data.getData().isResuming = !1), dispatch(_dependency9.SlotFrameworkEvent.CLOSE_RESPONSE, e);
        } else Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
          needCloseAlert: !1,
          code: e.code
        });
      });
    }
  }, v.setting = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency17.ESocketRequestName.UPDATE_SETTINGS
      }, e);
    this.send(s.request, s, function (e) {
      Log.d("%c SETTING_RESPONSE", _dependency21.getKeyStyle(_dependency21.KeyStyle.Response), e), e.status == _dependency7.Http.ServerStatus.SUCCESS ? t.setToken(e) : Log.e("update setting NETWORK_ERROR: ", e);
    });
  }, v.getBetRecords = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_BET_RECORDS
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(_dependency9.SlotFrameworkEvent.BET_RECORDS_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, v.getHistoryRecords = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_USER_REPORT
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(_dependency9.SlotFrameworkEvent.GET_HISTORY_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, v.getSlotBetRanksList = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_SLOT_BET_RANKS_LIST,
        action: "list"
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(_dependency9.SlotFrameworkEvent.GET_RANKING_LIST_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, v.getSlotBetRanksReplay = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_SLOT_BET_RANKS_REPLAY,
        action: "replay"
      }, e);
    if (_dependency24.default.getMachine().currentStateId === _dependency24.default.state.MG_WAIT_SPIN_STATE.id) return new Promise(function (e, a) {
      t.send(s.request, s, function (a) {
        if (_dependency12.default.replayMode = _dependency12.EReplayMode.RANKING_REPLAY, a.status == _dependency7.Http.ServerStatus.SUCCESS) {
          Log.d("%c getSlotBetRanksReplay", _dependency21.getKeyStyle(_dependency21.KeyStyle.Response), a), t.data.saveOriginGameData(), t.data.setReplayInitData(a), _dependency11.default.getData().player.displayName = a.betData.replayMeta.displayName, _dependency11.default.amount = a.betData.replayMeta.amount;
          var s = a.betData.replayMeta,
            n = s.ratioIndex,
            o = s.stakeIndex,
            r = s.ratioValues,
            i = s.stakeValues;
          _dependency8.default.init({
            stakeIndex: o,
            ratioIndex: n,
            stakeList: i,
            ratioList: r,
            numWinlines: _dependency0.default.getData().winlineDefs.length
          });
          var l = a.betData.replayMeta,
            u = l.avatarUrl,
            S = l.avatarId;
          _dependency11.default.getData().player.avatar = S, _dependency11.default.getData().player.avatarUrl = u, dispatch(_dependency9.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE), dispatch(_dependency19.GameEvent.PROCESS_REPLAY_IN_GAME, {
            data: a
          }), e();
        } else Log.e("NETWORK_ERROR: ", a), t.showAlert(a.message, {
          needCloseAlert: !1
        });
      });
    });
    App.uiManager.close(_dependency23.default);
    var n = {
      text: "請等待遊戲結束後，再進行重播",
      confirmCb: function () {
        dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM);
      },
      bbrCb: function () {
        dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM);
      },
      needCloseAlert: !0,
      tag: _dependency3.ViewZOrder.Tips
    };
    App.gameAlert.show(n, _dependency3.ViewZOrder.Tips);
  }, v.getSlotTables = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_SLOT_TABLES
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), _dependency14.default.setData(e), dispatch(_dependency9.SlotFrameworkEvent.SLOT_TABLES_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, v.getSlotTablePage = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_SLOT_TABLES
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), _dependency14.default.setData(e), dispatch(_dependency9.SlotFrameworkEvent.SLOT_TABLE_PAGE_DATA_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, v.getSlotTable = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_SLOT_TABLES
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), _dependency14.default.setData(e), dispatch(_dependency9.SlotFrameworkEvent.SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, v.getSlotTableDetail = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_SLOT_TABLE_DETAIL
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), _dependency14.default.setData(e), dispatch(_dependency9.SlotFrameworkEvent.SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, v.changeSlotTable = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency17.ESocketRequestName.UPDATE_SLOT_TABLE
      }, e);
    this.send(s.request, s, function (e) {
      if (e.status !== _dependency7.Http.ServerStatus.BACKEND_ERROR) {
        if (t.setToken(e), e.status !== _dependency7.Http.ServerStatus.NOT_MODIFIED) {
          var a = new URLSearchParams(window.location.search);
          a.set("table", "1");
          var s = window.location.pathname + "?" + a.toString();
          window.location.href = s;
        } else App.gameAlert.show({
          text: e.message,
          confirmCb: function () {
            dispatch(_dependency9.SlotFrameworkEvent.SYNC_SOLT_TABLES);
          },
          bbrCb: function () {}
        }, _dependency3.ViewZOrder.TopErrorAlert);
      } else t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      });
    });
  }, v.lockSlotTable = function (e) {
    var t = this,
      s = _dependency.extends({
        request: _dependency17.ESocketRequestName.LOCK_SLOT_TABLE
      }, e);
    this.send(s.request, s, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(_dependency9.SlotFrameworkEvent.LOCK_SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, v.buyFeature = function (e, t) {
    var s = this,
      n = _dependency.extends({
        request: _dependency17.ESocketRequestName.SPIN,
        action: "buyFeature",
        clientType: "web",
        featureIndex: 0,
        featureValue: "freeGame"
      }, e, {
        updateStake: !0
      });
    this.send(n.request, n, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (s.setToken(e), dispatch(_dependency9.SlotFrameworkEvent.BUY_FEATURE_RESPONSE, {
        data: e.engine.gameState.spinId
      })) : (Log.e("NETWORK_ERROR: ", e), App.gameAlert.show({
        text: e.message,
        confirmCb: function () {},
        bbrCb: function () {}
      }));
    });
  }, v.updateAvatar = function (e) {
    var t = this,
      a = {
        request: _dependency17.ESocketRequestName.UPDATE_AVATAR,
        avatarId: e
      };
    this.send(a.request, a, function (e) {
      if (e.status == _dependency7.Http.ServerStatus.SUCCESS) {
        t.setToken(e);
        var a = e.data,
          s = a.avatarId,
          n = a.avatarUrl;
        _dependency11.default.getData().player.avatar = s, _dependency11.default.getData().player.avatarUrl = n, dispatch(_dependency9.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE);
      } else Log.e("NETWORK_ERROR: ", e);
    });
  }, v.updateDisplayName = function (e) {
    var t = this,
      a = {
        request: _dependency17.ESocketRequestName.UPDATE_DISPLAYNAME,
        displayName: e
      };
    this.send(a.request, a, function (a) {
      t.setToken(a), a.status !== _dependency7.Http.ServerStatus.REQUEST_ERROR ? (_dependency11.default.getData().player.displayName = e, dispatch(_dependency9.SlotFrameworkEvent.UPDATE_DISPLAYNAME_RESPONSE)) : dispatch(_dependency9.SlotFrameworkEvent.SET_DISPLAYNAME_TIP, a.message);
    });
  }, v.replay = function () {
    var e = this,
      t = new URL(window.location.href).searchParams.get("spinId"),
      a = {
        request: _dependency17.ESocketRequestName.REPLAY,
        spinId: t
      };
    this.send(a.request, a, function (t) {
      t.status == _dependency7.Http.ServerStatus.SUCCESS ? (_dependency12.default.setData(t), _dependency0.default.setData(t.definition), dispatch(_dependency9.SlotFrameworkEvent.REPLAY_RESPONSE, t)) : (Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
        needCloseAlert: !1
      }));
    });
  }, v.replaySpinIDInInitial = function () {
    var e = this,
      t = new URL(window.location.href).searchParams.get("spinId"),
      s = {
        request: _dependency17.ESocketRequestName.REPLAY,
        spinId: t
      };
    return new Promise(function (t, n) {
      e.send(s.request, s, function (s) {
        if (s.status == _dependency7.Http.ServerStatus.SUCCESS) {
          _dependency12.default.replayMode = _dependency12.EReplayMode.URL_REPLAY, e.data.setReplayInitData(s);
          var n = _dependency.extends({}, s.definition, {
            isDemo: !1
          });
          _dependency0.default.setData(n), _dependency11.default.getData().player.displayName = s.betData.replayMeta.displayName, _dependency11.default.amount = s.betData.replayMeta.amount;
          var o = s.betData.replayMeta,
            r = o.ratioIndex,
            i = o.stakeIndex,
            l = o.ratioValues,
            u = o.stakeValues;
          _dependency8.default.init({
            stakeIndex: i,
            ratioIndex: r,
            stakeList: u,
            ratioList: l,
            numWinlines: s.definition.winlineDefs.length
          });
          var S = s.betData.replayMeta,
            d = S.avatarUrl,
            p = S.avatarId;
          _dependency11.default.getData().player.avatar = p, _dependency11.default.getData().player.avatarUrl = d, dispatch(_dependency19.GameEvent.PARSER_REPLAY_COMPLETED, s), t();
        } else Log.e("NETWORK_ERROR: ", s), e.showAlert(s.message, {
          needCloseAlert: !1
        });
      });
    });
  }, v.sendJackpotGameSelectPosition = function (e) {
    var t = this;
    return new Promise(function (a) {
      t.send(_dependency17.ESocketRequestName.SPIN, e, function (e) {
        e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.data.getData().bonusState = e.engine.bonusState, Log.d("response : ", e), dispatch(_dependency19.GameEvent.JACKPOT_GAME_PICK_RESPONSE, e), a(!0)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
          needCloseAlert: !1
        }));
      });
    });
  }, v.sendFortuneLandingFinishReq = function (e) {
    var t = this;
    return new Promise(function (a) {
      _dependency15.default.currentToken = t.originToken, Log.d("%c sendFortuneLandingFinishReq ", "color:#00ff00", e), t.send(_dependency17.ESocketRequestName.SPIN, e, function (s) {
        if (s.status == _dependency7.Http.ServerStatus.SUCCESS || s.status == _dependency7.Http.ServerStatus.ERROR_SPIN_ONE_MORE) {
          Log.d("finish response : ", s);
          var n = {
            request: _dependency17.ESocketRequestName.CLOSE_SPIN,
            spinId: e.spinId
          };
          t.send(_dependency17.ESocketRequestName.CLOSE_SPIN, n, function (e) {
            if (Log.d("close spin response::::::::", e), e.status == _dependency7.Http.ServerStatus.SUCCESS) {
              t.setToken(e);
              var s = e.platform.player.balance.amount;
              if (e.platform.player.balance.updatedAt) {
                var n = e.platform.player.balance.updatedAt;
                _dependency11.default.updateBalance(s, n);
              } else _dependency11.default.amount = e.platform.player.balance.amount;
              t.data.reset(), dispatch(_dependency19.GameEvent.DROP_TREASURE_RESULT_RESP), a(!0);
            } else Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
              needCloseAlert: !1
            });
          });
        } else Log.e("NETWORK_ERROR: ", s), t.showAlert(s.message, {
          needCloseAlert: !1
        });
      });
    });
  }, v.sendFortuneLandingCollectReq = function (e) {
    var t = this;
    return new Promise(function (a) {
      Log.d("%c sendFortuneLandingCollectReq ", "color:#00ff00", e), _dependency15.default.currentToken = e.token, t.sendWithoutCheck(_dependency17.ESocketRequestName.SPIN, e, function (e) {
        e.status == _dependency7.Http.ServerStatus.SUCCESS ? (Log.d("response : ", e), t.data.getData().bonusState = e.engine.bonusState, a(!0)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
          needCloseAlert: !1
        }));
      });
    });
  }, _dependency.createClass(n, [{
    key: "service",
    get: function () {
      return App.serviceManager.get(_dependency18.GameService);
    }
  }, {
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency20.default);
    }
  }]), n;
}(_dependency16.GameSenderBase)).module = _dependency4.EBundles[_dependency4.EBundles.g1004], _dependency2.cclegacy._RF.pop();
