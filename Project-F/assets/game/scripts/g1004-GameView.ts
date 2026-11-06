// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/main-CmmUtils";
import * as _dependency5 from "../../shared/scripts/main-AdapterEvent";
import * as _dependency6 from "../../shared/scripts/main-GameViewBase";
import * as _dependency7 from "../../shared/scripts/main-Decorators";
import * as _dependency8 from "../../shared/scripts/main-ReelDataSetting";
import * as _dependency9 from "../../shared/scripts/main-WrapperData";
import * as _dependency0 from "../../shared/scripts/slotFramework-PrizeNotify";
import * as _dependency1 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency10 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency11 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-type2";
import * as _dependency14 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency15 from "../../shared/scripts/slotFramework-SlotTableViewL";
import * as _dependency16 from "../../shared/scripts/slotFramework-SlotTableViewP";
import * as _dependency17 from "./g1004-GameConfigModel";
import * as _dependency18 from "./g1004-GameData";
import * as _dependency19 from "./g1004-GameEvent";
import * as _dependency20 from "./g1004-GameLogic";
import * as _dependency21 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency22 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency23 from "./g1004-types";
import * as _dependency24 from "./g1004-SpinBarPView";
import * as _dependency25 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency26 from "./g1004-FGTotalResultView";
import * as _dependency27 from "../../shared/scripts/main-Config";
import * as _dependency28 from "../../shared/scripts/main-ServerModel";
import * as _dependency29 from "./g1004-NoBodyView";
import * as _dependency30 from "./g1004-StateMachineManager";
import * as _dependency31 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency32 from "../../shared/scripts/slotFramework-LogUtils";
import * as _dependency33 from "./g1004-ReplayUIViewP";
import * as _dependency34 from "../../shared/scripts/main-UrlUtils";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, a, o, s, r, u, c, l, p, d, f, h, E, S, _, A, T, y, m, I, g, P, C, M, b, N, L, v, U, B, R, w, D, G, O, F, V, k, H, W, Y, x, K, z, q, X, j, Z, Q, J, $, tt, et, nt, it, at, ot, st, rt, ut, ct, lt, pt, dt;
var ft, ht, Et, St, _t, At, Tt, yt, mt, It, gt, Pt, Ct, Mt, bt, Nt;
_dependency2.cclegacy._RF.push({}, "d9550wUMZ1MsqPLIGmeXbB9", "GameView", void 0);
var Lt = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (ft = Lt("GameView"), ht = _dependency7.inject("content", _dependency2.Node), Et = _dependency7.inject("content/gameLayer", _dependency2.Node), St = _dependency7.inject("content/uiLayer", _dependency2.Node), _t = _dependency7.inject("content/uiLayer/leftContent", _dependency2.Node), At = _dependency7.inject("content/uiLayer/buyFeatureBtn", _dependency2.Node), Tt = _dependency7.inject("content/uiLayer/version", _dependency2.Label), ft(((Nt = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "content", It, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "gameLayer", gt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "uiLayer", Pt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "leftContent", Ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "buyFeatureBtn", Mt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "version", bt, _dependency.assertThisInitialized(e)), e.slotUIConfigs = [], e.slotUIMap = new Map(), e.isCanStop = !1, e.isCanSkipWinLine = !1, e.isDisableBuyFeature = !1, e.resumeDispatched = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var u = e.prototype;
  return u.onDestroy = function () {
    this.removeEvents();
  }, u.removeEvents = function () {
    this.off(_dependency19.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency19.GameEvent.PLAY_BGM), this.off(_dependency19.GameEvent.CAN_STOP_SPIN), this.off(_dependency19.GameEvent.PLAY_BTM), this.off(_dependency19.GameEvent.PLAY_REPEAT_BTM), this.off(_dependency19.GameEvent.STOP_BTM), this.off(_dependency19.GameEvent.MUSIC_VOLUME_MULTIPLE), this.off(_dependency19.GameEvent.REEL_ALL_STOP), this.off(_dependency10.SlotFrameworkEvent.BUY_FEATURE_RESPONSE), this.off(_dependency10.SlotFrameworkEvent.UPDATE_SPIN_STATUS), this.off(_dependency19.GameEvent.CAN_SKIP_WIN_LINE), this.off(_dependency19.GameEvent.SHOW_EXPECT), this.off(_dependency19.GameEvent.STOP_EXPECT), this.off(_dependency19.GameEvent.PLAY_SHOCK_EFFECT);
  }, u.reset = function () {
    t.prototype.reset.call(this);
  }, u.start = function () {
    this.beforeInit();
  }, e.getPrefabUrl = function () {
    return "prefabs/GameView";
  }, u.beforeInit = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e, n, i;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (e = this.args, Log.d("%c initChoice", _dependency32.getKeyStyle(_dependency32.KeyStyle.Notify), e), e) {
              t.next = 4;
              break;
            }
            return t.abrupt("return");
          case 4:
            if (e !== _dependency20.EInitName.INIT_GAME) {
              t.next = 20;
              break;
            }
            _dependency31.default.isReplay = !1, _dependency30.default.setCurrentState(_dependency30.EStateMachineName.GAME_STATE), _dependency17.default.setIsTurbo(_dependency11.default.getData().player.settings.advancedSettings.turbo), this.init(), n = this.data.getData().gameState[this.data.getData().gameState.length - 1].view, i = this.data.parserViewMapToResult(n), dispatch(_dependency19.GameEvent.SET_SYMBOL_VIEW, {
              data: i
            }), dispatch(_dependency10.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
              data: {
                balance: _dependency11.default.amount
              }
            }), dispatch(_dependency10.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
              data: {
                value: 0
              }
            }), dispatch(_dependency10.SlotFrameworkEvent.UPDATE_STAKE), dispatch(_dependency10.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
              data: {
                spinId: ""
              }
            }), dispatch(_dependency10.SlotFrameworkEvent.SET_DISPLAY_NAME), dispatch(_dependency10.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE), t.next = 27;
            break;
          case 20:
            if (e !== _dependency20.EInitName.INIT_REPLAY) {
              t.next = 27;
              break;
            }
            return _dependency31.default.isReplay = !0, _dependency30.default.setCurrentState(_dependency30.EStateMachineName.REPLAY_STATE), t.next = 25, _dependency30.default.getMachine().forceToAsync(_dependency30.default.state.MG_INIT_STATE.id);
          case 25:
            dispatch(_dependency19.GameEvent.PARSER_REPLAY_COMPLETED, this.data.tempReplayResponse), this.initReplay();
          case 27:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), u.init = function () {
    this.initCompleted(), this.setUI(), this.initAudio(), this.setEventTouch(), this.gameLayer.on(_dependency2.NodeEventType.TOUCH_END, this.quickStop, this);
  }, u.initReplay = function () {
    _dependency31.default.replayMode === _dependency31.EReplayMode.RANKING_REPLAY && dispatch(_dependency10.SlotFrameworkEvent.HIDE_SPIN_BAR), this.initCompleted(), this.initAudio(), this.setReplayUI(), this.buyFeatureBtn.active = !1, this.setVersion("v" + this.data.GAME_VERSION), dispatch(_dependency10.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
      data: {
        balance: _dependency11.default.amount
      }
    }), dispatch(_dependency10.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: 0
      }
    }), dispatch(_dependency10.SlotFrameworkEvent.UPDATE_STAKE), dispatch(_dependency10.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
      data: {
        spinId: ""
      }
    }), dispatch(_dependency10.SlotFrameworkEvent.SET_DISPLAY_NAME), dispatch(_dependency10.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE), _dependency17.default.setIsTurbo(!1), this.gameLayer.on(_dependency2.NodeEventType.TOUCH_END, this.quickStop, this);
  }, u.setReplayUI = function () {
    App.uiManager.open({
      type: _dependency33.default,
      bundle: _dependency3.EBundles[_dependency3.EBundles.slotFramework],
      zIndex: _dependency27.ViewZOrder.ReplayUI,
      name: "replay UI層"
    });
  }, u.setUI = function () {
    this.slotUIConfigs = [{
      path: "prefabs/component/PrizeNotify",
      component: _dependency0.PrizeNotify,
      bundle: _dependency3.EBundles[_dependency3.EBundles.slotFramework]
    }], this.addSlotUI(this.slotUIConfigs), this.setSlotUIData();
  }, u.addSlotUI = function (t) {
    var e = this;
    t.forEach(function (t) {
      var n = t.path,
        i = t.component,
        a = t.bundle,
        o = App.cache.get(a, n).data,
        s = _dependency2.instantiate(o);
      e.slotUIMap.set(s.name, s), s.addComponent(i), e.uiLayer.addChild(s);
    });
    var n = this.uiLayer.getComponentInChildren(_dependency0.PrizeNotify);
    if (n) {
      var i = n.node.getChildByName("content").getComponent(_dependency2.Widget),
        a = .5 * n.node.getComponent(_dependency2.UITransform).width,
        o = .5 * n.node.getChildByName("content").getComponent(_dependency2.UITransform).width;
      i.left = a - o - 30, i.isAlignVerticalCenter = !0, i.verticalCenter = -260;
    }
    this.updateBuyFeatureSpriteFrame(_dependency2.NodeEventType.TOUCH_END), Array.from(_dependency19.NodeEventTypeMap.values()).forEach(function (t) {
      e.onN(e.buyFeatureBtn, t, e.changeBuyFeatureSprite, e);
    });
  }, u.changeBuyFeatureSprite = function (t) {
    this.updateBuyFeatureSpriteFrame(t.type);
  }, u.updateBuyFeatureSpriteFrame = function (t) {
    if (!this.isDisableBuyFeature) {
      "disabled" === t && (this.isDisableBuyFeature = !0);
      var e = _dependency17.default.getData().filePaths.localeSpriteFrame,
        n = this.buyFeatureBtn.getChildByName("txt").getComponent(_dependency2.Sprite),
        i = this.getSpriteName(t);
      n.spriteFrame = _dependency25.LoadUtils.getDirSp(this.data.module, e, i), n.node.scale = t === _dependency2.NodeEventType.TOUCH_START ? new _dependency2.Vec3(.9, .9, .9) : new _dependency2.Vec3(1, 1, 1);
    }
  }, u.getSpriteName = function (t) {
    switch (t) {
      case "disabled":
        return "mg_btn_disabled";
      case _dependency2.NodeEventType.TOUCH_START:
        return "mg_btn_pressed";
      case _dependency2.NodeEventType.MOUSE_ENTER:
        return "mg_btn_hover";
      case _dependency2.NodeEventType.TOUCH_END:
      case _dependency2.NodeEventType.MOUSE_LEAVE:
      default:
        return "mg_btn_normal";
    }
  }, u.setSlotUIData = function () {
    var t = this;
    if (App.dataCenter.get(_dependency9.default).orientation === _dependency5.EOrientationType.LANDSCAPE) ;else {
      var e = this.uiLayer.getComponentInChildren(_dependency24.SpinBarPView);
      e.addSpinEventTouch(this.name, function () {
        t.spin();
      }), e.addQuickStopEventTouch(function () {
        t.quickStop();
      }), e.initTurbo(_dependency17.default.isTurbo), e.addTurboEventTouch(_dependency17.default);
      var n = _dependency17.default.isTurbo ? 3 : 0;
      _dependency8.ReelDataSettingObj.setSpeedIndex(n), this.setVersion("v" + this.data.GAME_VERSION);
    }
  }, u.setEventTouch = function () {
    var t = this;
    _dependency4.CmmUtils.addBtnClickEvent(this.buyFeatureBtn, function () {
      App.dataCenter.get(_dependency1.default).getData().spinStatus !== _dependency13.ESpinStatus.SPINING && (dispatch(_dependency19.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency17.EBTM.BUY_FEATURE_CLICK
        }
      }), dispatch(_dependency19.GameEvent.OPEN_FEATURE_POPUP));
    }), this.onI(_dependency2.Input.EventType.KEY_UP, function (e) {
      switch (e.keyCode) {
        case _dependency2.KeyCode.SPACE:
          t.unscheduleAllCallbacks();
      }
    }), this.onI(_dependency2.Input.EventType.KEY_DOWN, function (e) {
      switch (e.keyCode) {
        case _dependency2.KeyCode.SPACE:
          t.schedule(function () {
            t.isCanStop ? t.quickStop() : t.spin();
          }, .1);
      }
    });
  }, u.hideExpect = function () {
    _dependency2.Tween.stopAllByTarget(this.node), this.node.scale = new _dependency2.Vec3(1.01, 1.01, 1.01), _dependency2.tween(this.node).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      easing: _dependency2.easing.quartOut
    }).start();
  }, u.showExpect = function () {
    _dependency2.Tween.stopAllByTarget(this.node), this.node.scale = new _dependency2.Vec3(1, 1, 1), _dependency2.tween(this.node).bindNodeState(false).repeatForever(_dependency2.tween().bindNodeState(false).to(.9, {
      scale: new _dependency2.Vec3(1.03, 1.03, 1.03)
    }, {
      easing: _dependency2.easing.smooth
    }).to(.9, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      easing: _dependency2.easing.smooth
    })).start();
  }, u.playShockEffect = function (t) {
    void 0 === t && (t = .3);
    var e = .03,
      n = this.node.getPosition();
    _dependency2.tween(this.node).bindNodeState(false).delay(t).sequence(_dependency2.tween().bindNodeState(false).to(e, {
      position: new _dependency2.Vec3(-5, -5 + n.y)
    }), _dependency2.tween().bindNodeState(false).to(e, {
      position: new _dependency2.Vec3(3, -7 + n.y)
    }), _dependency2.tween().bindNodeState(false).to(e, {
      position: new _dependency2.Vec3(4, -4 + n.y)
    }), _dependency2.tween().bindNodeState(false).to(e, {
      position: new _dependency2.Vec3(-2, 4 + n.y)
    }), _dependency2.tween().bindNodeState(false).to(e, {
      position: n
    })).start();
  }, u.playBGM = function (t) {
    _dependency28.default.mode != _dependency28.EServerMode.STATIC && this.audioHelper.playMusic(t, this.bundle);
  }, u.playBTM = function (t, e) {
    void 0 === e && (e = !1), this.audioHelper.playEffect(t, this.bundle, e);
  }, u.stopBTM = function (t) {
    this.audioHelper.stopEffect(t, this.bundle);
  }, u.playRepeatBTM = function (t, e) {
    void 0 === e && (e = !1), this.audioHelper.playRepeatEffect(t, this.bundle, e);
  }, u.initAudio = function () {
    var t, e;
    if (_dependency34.default.hasParam("spinId")) return App.globalAudio.musicVolume = 0, void (App.globalAudio.effectVolume = 0);
    App.globalAudio.musicVolume = null != (t = _dependency12.default.backgroundVolume) ? t : 1, App.globalAudio.effectVolume = null != (e = _dependency12.default.effectVolume) ? e : 1;
  }, u.addEvents = function () {
    var t = this;
    this.on(_dependency19.GameEvent.CHANGE_GAME_STYLE, function (e) {
      var n = t.uiLayer.getComponentInChildren(_dependency24.SpinBarPView);
      switch (e.data) {
        case _dependency23.EGameType.MAIN_GAME:
          dispatch(_dependency10.SlotFrameworkEvent.SHOW_SPIN_BAR), t.buyFeatureBtn.active = !0, n.node.active = !0;
          break;
        case _dependency23.EGameType.FREE_GAME:
          dispatch(_dependency10.SlotFrameworkEvent.HIDE_SPIN_BAR), t.buyFeatureBtn.active = !1, n.node.active = !1;
      }
      _dependency31.default.isReplay && (t.buyFeatureBtn.active = !1, dispatch(_dependency10.SlotFrameworkEvent.HIDE_SPIN_BAR));
    }), this.on(_dependency19.GameEvent.PLAY_BGM, function (e) {
      t.playBGM(e.data);
    }), this.on(_dependency19.GameEvent.REEL_ALL_START, function (e) {
      t.isCanStop = !0;
    }), this.on(_dependency19.GameEvent.PLAY_BTM, function (e) {
      var n = e.data,
        i = n.url,
        a = n.loop;
      t.playBTM(i, a);
    }), this.on(_dependency19.GameEvent.STOP_BTM, function (e) {
      t.stopBTM(e.data);
    }), this.on(_dependency19.GameEvent.PLAY_REPEAT_BTM, function (e) {
      var n = e.data,
        i = n.url,
        a = n.loop;
      t.playRepeatBTM(i, a);
    }), this.on(_dependency19.GameEvent.MUSIC_VOLUME_MULTIPLE, function (e) {
      t.multipleMusicVolume(e.data);
    }), this.on(_dependency10.SlotFrameworkEvent.BUY_FEATURE_RESPONSE, function (e) {
      t.buyFeatureSpin(e.data);
    }), this.on(_dependency19.GameEvent.REEL_ALL_STOP, function (e) {
      t.isCanStop = !1;
    }), this.on(_dependency19.GameEvent.CAN_SKIP_WIN_LINE, function () {
      t.isCanSkipWinLine = !0;
    }), this.on(_dependency19.GameEvent.SHOW_FG_RESULT, function () {
      _dependency2.tween(t).bindNodeState(false).delay(1).call(function () {
        App.uiManager.open({
          type: _dependency26.FGTotalResultView,
          bundle: t.data.module,
          zIndex: _dependency27.ViewZOrder.UI,
          name: "免費遊戲彈窗"
        });
      }).start();
    }), this.on(_dependency10.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (e) {
      var n = e.data,
        i = _dependency13.ESpinStatus.SPINING === n;
      t.setAllInteractable(!i), i ? t.updateBuyFeatureSpriteFrame("disabled") : (t.isDisableBuyFeature = !1, t.updateBuyFeatureSpriteFrame(_dependency2.NodeEventType.TOUCH_END));
    }), this.on(_dependency19.GameEvent.SHOW_EXPECT, this.showExpect), this.on(_dependency19.GameEvent.STOP_EXPECT, this.hideExpect), this.on(_dependency19.GameEvent.PLAY_SHOCK_EFFECT, function (e) {
      e.type === _dependency23.EShockType.GAME_VIEW && t.playShockEffect();
    });
  }, u.setAllInteractable = function (t) {
    this.buyFeatureBtn.getComponent(_dependency2.Button).interactable = t;
  }, u.buyFeatureSpin = function (t) {
    dispatch(_dependency19.GameEvent.CLOSE_FEATURE_POPUP), dispatch(_dependency19.GameEvent.START_SPIN, {
      data: {
        spinId: t
      }
    }), dispatch(_dependency10.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: 0
      }
    });
  }, u.showResumeAlert = function () {
    var t = this,
      e = {
        text: App.getLanguage("wrapper1", [], _dependency3.EBundles[_dependency3.EBundles.wrapper]),
        bbrColor: new _dependency2.Color(0, 0, 0, 255),
        confirmCb: function (e) {
          t.resumeDispatched || (t.resumeDispatched = !0, t.scheduleOnce(function () {
            dispatch(_dependency19.GameEvent.START_RESUME);
          }, .5));
        }
      };
    App.gameAlert.show(e), App.uiManager.close(_dependency14.CmmSlotUtils.getOrientationTarget(_dependency15.default, _dependency16.default));
  }, u.spin = function () {
    var t = _dependency4.CmmUtils.extractContentBetweenAngleBrackets(this.name)[0];
    if (App.uiManager.IsOnlyGameViewOpen(t) && _dependency30.default.getMachine().currentStateId === _dependency30.default.state.MG_WAIT_SPIN_STATE.id) {
      var e = this.data.currentGameType === _dependency23.EGameType.MAIN_GAME,
        n = this.data.getData().isResuming,
        i = _dependency11.default.getData().player.balance.amount;
      if ((0 === i || !this.checkBalance()) && e && !n) {
        var a = 0 === i ? "insufficientFundError" : "insufficientFund",
          o = {
            text: App.getLanguage(a, [], _dependency3.EBundles[_dependency3.EBundles.wrapper]),
            isRepeat: !1,
            tag: _dependency27.ViewZOrder.Tips,
            confirmCb: function () {
              s();
            },
            bbrCb: function () {
              s();
            }
          },
          s = function () {
            dispatch(_dependency10.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
              data: !0
            }), dispatch(_dependency10.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
              data: _dependency13.ESpinStatus.IDLE
            });
          };
        return App.gameAlert.show(o), void dispatch(_dependency10.SlotFrameworkEvent.STOP_AUTO_SPIN);
      }
      dispatch(_dependency19.GameEvent.START_SPIN, {
        data: {
          spinId: null
        }
      });
    }
  }, u.quickStop = function () {
    if (_dependency30.default.getMachine().currentStateId == _dependency30.default.state.MG_SHOW_WIN_LINE_STATE.id || _dependency30.default.getMachine().currentStateId == _dependency30.default.state.FG_SHOW_WIN_LINE_STATE.id) this.isCanSkipWinLine && (dispatch(_dependency19.GameEvent.SKIP_WIN_LINE), this.isCanSkipWinLine = !1);else {
      var t = App.dataCenter.get(_dependency1.default).getData().spinStatus,
        e = _dependency4.CmmUtils.extractContentBetweenAngleBrackets(this.name)[0];
      if (!_dependency31.default.isReplay) if (!App.uiManager.IsOnlyGameViewOpen(e)) return;
      if (t !== _dependency13.ESpinStatus.SPINING) return;
      [_dependency30.default.state.FG_SPIN_TO_STOP_STATE.id, _dependency30.default.state.MG_SPIN_TO_STOP_STATE.id].includes(_dependency30.default.getMachine().currentStateId) && this.isCanStop && (dispatch(_dependency19.GameEvent.STOP_SPIN), this.isCanStop = !1, dispatch(_dependency10.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }
  }, u.multipleMusicVolume = function (t) {
    App.globalAudio.musicVolume = App.globalAudio.musicVolume * t;
  }, u.initCompleted = function () {
    var t = this.data.getData().isResuming,
      e = "spin" == this.data.getData().parser.currentGameState.action ? _dependency23.EGameType.MAIN_GAME : _dependency23.EGameType.FREE_GAME,
      n = e ? _dependency17.EBGM.MAIN_GAME : _dependency17.EBGM.FREE_GAME;
    t ? (this.playBGM(n), dispatch(_dependency19.GameEvent.CHANGE_GAME_STYLE, {
      data: e
    })) : (this.playBGM(_dependency17.EBGM.MAIN_GAME), dispatch(_dependency19.GameEvent.CHANGE_GAME_STYLE, {
      data: _dependency23.EGameType.MAIN_GAME
    }));
  }, u.checkBalance = function () {
    var t = {
        ratioIndex: _dependency21.default.ratioIndex,
        ratioValue: _dependency21.default.ratioValue,
        stakeIndex: _dependency21.default.stakeIndex,
        stakeValue: _dependency21.default.stakeValue
      },
      e = t.stakeValue,
      n = t.ratioValue,
      i = _dependency21.default.numWinlines,
      a = _dependency22.default.multiply(n, e, i);
    return _dependency11.default.getData().player.balance.amount - a >= 0;
  }, u.setVersion = function (t) {
    this.version.string = t;
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency18.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency1.default);
    }
  }]), e;
}(_dependency6.default)).logicType = _dependency20.GameLogic, It = _dependency.applyDecoratedDescriptor((mt = Nt).prototype, "content", [ht], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gt = _dependency.applyDecoratedDescriptor(mt.prototype, "gameLayer", [Et], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Pt = _dependency.applyDecoratedDescriptor(mt.prototype, "uiLayer", [St], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ct = _dependency.applyDecoratedDescriptor(mt.prototype, "leftContent", [_t], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Mt = _dependency.applyDecoratedDescriptor(mt.prototype, "buyFeatureBtn", [At], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), bt = _dependency.applyDecoratedDescriptor(mt.prototype, "version", [Tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), yt = mt)) || yt));
_dependency2.cclegacy._RF.pop();
