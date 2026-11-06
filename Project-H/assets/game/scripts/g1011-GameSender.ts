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
import * as _dependency18 from "../../shared/scripts/slotFramework-NoTouchingView";
import * as _dependency19 from "./g1011-GameData";
import * as _dependency20 from "./g1011-GameEvent";
import * as _dependency21 from "./g1011-StateMachineManager";
import * as _dependency22 from "./g1011-GameService";
import * as _dependency23 from "./g1011-GameConfigModel";
import * as _dependency24 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency25 from "./g1011-StateId";
import * as _dependency26 from "./g1011-StaticData";
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
var t, a, n, s, i, o, r, l, S, u, d, c, E, R, p, f, g, T, _, h, m, A, O, C, L, v, P, N, y, I, D, k, w, U, M;
_dependency2.cclegacy._RF.push({}, "de4daFVPG9C44RwvlkkmNMv", "GameSender", void 0), _publish("GameSender", function (e) {
  var _nativeConstructor = s;
  function s() {
    for (var t, a = arguments.length, n = new Array(a), s = 0; s < a; s++) n[s] = arguments[s];
    return (t = Reflect.construct(e, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).originToken = "", t.isOptionSpin = !1, t;
  }
  _dependency.inheritsLoose(s, e);
  var C = s.prototype;
  return C.applyBalance = function (e) {
    e.updatedAt ? _dependency11.default.updateBalance(e.amount, e.updatedAt) : _dependency11.default.amount = e.amount;
  }, C.initial = function () {
    var e = this;
    if (Log.d("%c EServerMode %o", _dependency24.getKeyStyle(_dependency24.KeyStyle.Notify), _dependency5.EServerMode[_dependency5.default.mode]), _dependency5.default.mode === _dependency5.EServerMode.STATIC) {
      var t = _dependency26.StaticData.initialData;
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
    return new Promise(function (t, n) {
      e.send("initial", a, function (a) {
        if (a.status == _dependency7.Http.ServerStatus.SUCCESS) {
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
            var n = {
              title: App.getLanguage("alertHint", [], _dependency4.EBundles[_dependency4.EBundles.slotFramework]),
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
    if (_dependency5.default.mode === _dependency5.EServerMode.STATIC || s) return this.isOptionSpin = !0, void _dependency2.tween(this).bindNodeState(false).delay(.1).call(function () {
      try {
        var e = JSON.parse(JSON.stringify(s));
        Log.d("%c SPIN_RESP %o", _dependency24.getKeyStyle(_dependency24.KeyStyle.Manager), e), _dependency1.default.setData(e.engine.gameState), i.applyBalance(e.platform.player.balance), dispatch(_dependency9.SlotFrameworkEvent.SPIN_RESPONSE, e);
      } catch (e) {
        Log.e("SPIN_RESPONSE error: ", e), i.showAlert(e.message || "Spin error");
      }
    }).start();
    this.isOptionSpin = !1;
    var r = _dependency.extends({
      request: _dependency17.ESocketRequestName.SPIN
    }, e, {
      updateStake: n
    }, t && {
      spinId: t
    });
    this.send(r.request, r, function (e) {
      if (e.status == _dependency7.Http.ServerStatus.SUCCESS) try {
        i.originToken = e.token, i.setToken(e), _dependency1.default.setData(e.engine.gameState), i.applyBalance(e.platform.player.balance), dispatch(_dependency9.SlotFrameworkEvent.SPIN_RESPONSE, e);
      } catch (e) {
        Log.e("SPIN_RESPONSE error: ", e), i.showAlert(e.message || "Spin error");
      } else Log.e("NETWORK_ERROR: ", e), i.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      });
    });
  }, C.closeSpin = function (e) {
    var t = this;
    if (_dependency5.default.mode === _dependency5.EServerMode.STATIC || this.isOptionSpin) _dependency2.tween(this).bindNodeState(false).delay(.1).call(function () {
      dispatch(_dependency9.SlotFrameworkEvent.CLOSE_RESPONSE);
    }).start();else if (!_dependency23.default.isSendClose) {
      var a = {
        request: _dependency17.ESocketRequestName.CLOSE_SPIN,
        spinId: e
      };
      this.send(a.request, a, function (e) {
        e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), t.applyBalance(e.platform.player.balance), t.data.getData().isResuming && (t.data.getData().isResuming = !1), dispatch(_dependency9.SlotFrameworkEvent.CLOSE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
          needCloseAlert: !1,
          code: e.code
        }));
      });
    }
  }, C.setting = function (e) {
    var t = this,
      n = _dependency.extends({
        request: _dependency17.ESocketRequestName.UPDATE_SETTINGS
      }, e);
    this.send(n.request, n, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? t.setToken(e) : Log.e("update setting NETWORK_ERROR: ", e);
    });
  }, C.getBetRecords = function (e) {
    var t = this,
      n = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_BET_RECORDS
      }, e);
    this.send(n.request, n, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(_dependency9.SlotFrameworkEvent.BET_RECORDS_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, C.getHistoryRecords = function (e) {
    var t = this,
      n = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_USER_REPORT
      }, e);
    this.send(n.request, n, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(_dependency9.SlotFrameworkEvent.GET_HISTORY_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, C.getSlotBetRanksList = function (e) {
    var t = this,
      n = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_SLOT_BET_RANKS_LIST,
        action: "list"
      }, e);
    this.send(n.request, n, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(_dependency9.SlotFrameworkEvent.GET_RANKING_LIST_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, C.getSlotBetRanksReplay = function (e) {
    var t = this,
      n = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_SLOT_BET_RANKS_REPLAY,
        action: "replay"
      }, e);
    if (_dependency21.default.getMachine().currentStateId === _dependency25.StateId.MG_WAIT_SPIN) return new Promise(function (e, a) {
      t.send(n.request, n, function (a) {
        _dependency12.default.replayMode = _dependency12.EReplayMode.RANKING_REPLAY, a.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.data.saveOriginGameData(), t.data.setReplayInitData(a), t.applyReplayMeta(a, _dependency0.default.getData().winlineDefs.length), dispatch(_dependency20.GameEvent.PROCESS_REPLAY_IN_GAME, {
          data: a
        }), e()) : (Log.e("NETWORK_ERROR: ", a), t.showAlert(a.message, {
          needCloseAlert: !1
        }));
      });
    });
    App.uiManager.close(_dependency18.default);
    var s = {
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
    App.gameAlert.show(s, _dependency3.ViewZOrder.Tips);
  }, C.getSlotTablePage = function (e) {
    var t = this,
      n = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_SLOT_TABLES
      }, e);
    this.send(n.request, n, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), _dependency14.default.setData(e), dispatch(_dependency9.SlotFrameworkEvent.SLOT_TABLE_PAGE_DATA_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, C.getSlotTableDetail = function (e) {
    var t = this,
      n = _dependency.extends({
        request: _dependency17.ESocketRequestName.GET_SLOT_TABLE_DETAIL
      }, e);
    this.send(n.request, n, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), _dependency14.default.setData(e), dispatch(_dependency9.SlotFrameworkEvent.SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, C.changeSlotTable = function (e) {
    var t = this,
      n = _dependency.extends({
        request: _dependency17.ESocketRequestName.UPDATE_SLOT_TABLE
      }, e);
    this.send(n.request, n, function (e) {
      if (e.status !== _dependency7.Http.ServerStatus.BACKEND_ERROR) {
        if (t.setToken(e), e.status !== _dependency7.Http.ServerStatus.NOT_MODIFIED) {
          var a = new URLSearchParams(window.location.search);
          a.set("table", "1");
          var n = window.location.pathname + "?" + a.toString();
          window.location.href = n;
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
  }, C.lockSlotTable = function (e) {
    var t = this,
      n = _dependency.extends({
        request: _dependency17.ESocketRequestName.LOCK_SLOT_TABLE
      }, e);
    this.send(n.request, n, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(_dependency9.SlotFrameworkEvent.LOCK_SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, C.buyFeature = function (e) {
    var t = this,
      n = _dependency.extends({
        request: _dependency17.ESocketRequestName.SPIN,
        action: "buyFeature",
        clientType: "web"
      }, e, {
        updateStake: !0
      });
    this.send(n.request, n, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(_dependency9.SlotFrameworkEvent.BUY_FEATURE_RESPONSE, {
        data: e.engine.gameState.spinId
      })) : (Log.e("NETWORK_ERROR: ", e), App.gameAlert.show({
        text: e.message,
        confirmCb: function () {
          dispatch(_dependency20.GameEvent.CLOSE_FEATURE_POPUP);
        },
        bbrCb: function () {
          dispatch(_dependency20.GameEvent.CLOSE_FEATURE_POPUP);
        }
      }));
    });
  }, C.updateAvatar = function (e) {
    var t = this,
      a = {
        request: _dependency17.ESocketRequestName.UPDATE_AVATAR,
        avatarId: e
      };
    this.send(a.request, a, function (e) {
      if (e.status == _dependency7.Http.ServerStatus.SUCCESS) {
        t.setToken(e);
        var a = e.data,
          n = a.avatarId,
          s = a.avatarUrl;
        _dependency11.default.getData().player.avatar = n, _dependency11.default.getData().player.avatarUrl = s, dispatch(_dependency9.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE);
      } else Log.e("NETWORK_ERROR: ", e);
    });
  }, C.updateDisplayName = function (e) {
    var t = this,
      a = {
        request: _dependency17.ESocketRequestName.UPDATE_DISPLAYNAME,
        displayName: e
      };
    this.send(a.request, a, function (a) {
      t.setToken(a), a.status !== _dependency7.Http.ServerStatus.REQUEST_ERROR ? (_dependency11.default.getData().player.displayName = e, dispatch(_dependency9.SlotFrameworkEvent.UPDATE_DISPLAYNAME_RESPONSE)) : dispatch(_dependency9.SlotFrameworkEvent.SET_DISPLAYNAME_TIP, a.message);
    });
  }, C.replayInInitial = function () {
    var e = this;
    if (_dependency5.default.mode === _dependency5.EServerMode.STATIC) return new Promise(function (t) {
      var n = _dependency26.StaticData.replayLuckyBigWin;
      _dependency12.default.replayMode = _dependency12.EReplayMode.URL_REPLAY, e.data.setReplayInitData(n), _dependency0.default.setData(_dependency.extends({}, n.definition, {
        isDemo: !1
      })), e.applyReplayMeta(n, n.definition.winlineDefs.length), dispatch(_dependency20.GameEvent.PARSER_REPLAY_COMPLETED, n), t();
    });
    var t = new URL(window.location.href).searchParams.get("spinId"),
      n = {
        request: _dependency17.ESocketRequestName.REPLAY,
        spinId: t
      };
    return new Promise(function (t, s) {
      e.send(n.request, n, function (n) {
        if (n.status == _dependency7.Http.ServerStatus.SUCCESS) {
          _dependency12.default.replayMode = _dependency12.EReplayMode.URL_REPLAY, e.data.setReplayInitData(n);
          var s = _dependency.extends({}, n.definition, {
            isDemo: !1
          });
          _dependency0.default.setData(s), e.applyReplayMeta(n, n.definition.winlineDefs.length), dispatch(_dependency20.GameEvent.PARSER_REPLAY_COMPLETED, n), t();
        } else Log.e("NETWORK_ERROR: ", n), e.showAlert(n.message, {
          needCloseAlert: !1
        });
      });
    });
  }, C.sendJackpotGameSelectPosition = function (e) {
    var t = this;
    return new Promise(function (a) {
      t.sendWithoutCheck(_dependency17.ESocketRequestName.SPIN, e, function (e) {
        e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.data.getData().bonusState = e.engine.bonusState, Log.d("response : ", e), dispatch(_dependency20.GameEvent.JACKPOT_GAME_PICK_RESPONSE, e), a(!0)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
          needCloseAlert: !1
        }));
      });
    });
  }, C.sendFortuneLandingFinishReq = function (e) {
    var t = this;
    return new Promise(function (a) {
      _dependency15.default.currentToken = t.originToken, Log.d("%c sendFortuneLandingFinishReq ", "color:#00ff00", e), t.send(_dependency17.ESocketRequestName.SPIN, e, function (n) {
        if (n.status == _dependency7.Http.ServerStatus.SUCCESS || n.status == _dependency7.Http.ServerStatus.ERROR_SPIN_ONE_MORE) {
          Log.d("finish response : ", n);
          var s = {
            request: _dependency17.ESocketRequestName.CLOSE_SPIN,
            spinId: e.spinId
          };
          t.send(_dependency17.ESocketRequestName.CLOSE_SPIN, s, function (e) {
            Log.d("close spin response::::::::", e), e.status == _dependency7.Http.ServerStatus.SUCCESS ? (t.setToken(e), t.applyBalance(e.platform.player.balance), t.data.reset(), dispatch(_dependency20.GameEvent.DROP_TREASURE_RESULT_RESP), a(!0)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
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
      Log.d("%c sendFortuneLandingCollectReq ", "color:#00ff00", e), _dependency15.default.currentToken = e.token, t.sendWithoutCheck(_dependency17.ESocketRequestName.SPIN, e, function (e) {
        e.status == _dependency7.Http.ServerStatus.SUCCESS ? (Log.d("response : ", e), t.data.getData().bonusState = e.engine.bonusState, a(!0)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
          needCloseAlert: !1
        }));
      });
    });
  }, C.applyReplayMeta = function (e, t) {
    var a = e.betData.replayMeta;
    _dependency11.default.getData().player.displayName = a.displayName, _dependency11.default.amount = a.amount;
    var n = a.ratioIndex,
      s = a.stakeIndex,
      i = a.ratioValues,
      o = a.stakeValues;
    _dependency8.default.init({
      stakeIndex: s,
      ratioIndex: n,
      stakeList: o,
      ratioList: i,
      numWinlines: t
    }), _dependency11.default.getData().player.avatar = a.avatarId, _dependency11.default.getData().player.avatarUrl = a.avatarUrl, dispatch(_dependency9.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE);
  }, C.extension = function (e, t) {
    var n = _dependency.extends({
      request: _dependency17.ESocketRequestName.EXTENSION
    }, e, {
      spinId: t
    });
    this.send(n.request, n, function (e) {
      e.status == _dependency7.Http.ServerStatus.SUCCESS || Log.e("NETWORK_ERROR: ", e);
    });
  }, _dependency.createClass(s, [{
    key: "service",
    get: function () {
      return App.serviceManager.get(_dependency22.GameService);
    }
  }, {
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency19.default);
    }
  }]), s;
}(_dependency16.GameSenderBase)).module = _dependency4.EBundles[_dependency4.EBundles.g1011], _dependency2.cclegacy._RF.pop();

// Own bonus response routing; native popup/callback/state classes remain intact.
import { EDITOR as __localBonusEditor } from "cc/env";
import { installSenderBonusHooks as __installLocalBonusSender } from "../backend/BonusHooks";
if(!__localBonusEditor)__installLocalBonusSender(_export,{GameEvent:_dependency20.GameEvent,SlotFrameworkEvent:_dependency9.SlotFrameworkEvent,getGameConfig:()=>_dependency23.default,dispatch});
