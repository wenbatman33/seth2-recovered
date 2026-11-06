// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Config";
import * as _dependency4 from "../../shared/scripts/main-UrlUtils";
import * as _dependency5 from "../../shared/scripts/main-Bundles";
import * as _dependency6 from "../../shared/scripts/main-CmmUtils";
import * as _dependency7 from "../../shared/scripts/main-AdapterEvent";
import * as _dependency8 from "../../shared/scripts/main-GameViewBase";
import * as _dependency9 from "../../shared/scripts/main-Decorators";
import * as _dependency0 from "../../shared/scripts/main-WrapperData";
import * as _dependency1 from "../../shared/scripts/slotFramework-PrizeNotify";
import * as _dependency10 from "../../shared/scripts/slotFramework-InfoBarController";
import * as _dependency11 from "../../shared/scripts/slotFramework-InfoBarPController";
import * as _dependency12 from "../../shared/scripts/slotFramework-MenuController";
import * as _dependency13 from "../../shared/scripts/slotFramework-SpinBarControllerLandScape";
import * as _dependency14 from "../../shared/scripts/slotFramework-SpinBarPController";
import * as _dependency15 from "../../shared/scripts/slotFramework-TopBar";
import * as _dependency16 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency17 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency18 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency19 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency20 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency21 from "../../shared/scripts/slotFramework-type2";
import * as _dependency22 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency23 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency24 from "../../shared/scripts/slotFramework-SlotTableViewL_v2";
import * as _dependency25 from "../../shared/scripts/slotFramework-SlotTableViewP";
import * as _dependency26 from "./g1009-ReplayUIViewL";
import * as _dependency27 from "./g1009-ReplayUIViewP";
import * as _dependency28 from "./g1009-GameConfigModel";
import * as _dependency29 from "./g1009-GameData";
import * as _dependency30 from "./g1009-GameEvent";
import * as _dependency31 from "./g1009-GameLogic";
import * as _dependency32 from "./g1009-types";
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
var e, n, i, a, o, r, s, u, l, p, c, f, d, h, g, m, y, S, b, A, E, C, I, _, T, w, P, v, D, B, L, N, M, U, R, V, G, O, k, F, z, W, H, x, Y, Q, K, j, q, J, X, Z, $, tt, et, nt, it;
var at, ot, rt, st, ut, lt, pt, ct, ft, dt, ht, gt, mt, yt, St, bt, At, Et;
_dependency2.cclegacy._RF.push({}, "3fc9cnk3ABNwrWISu6ie4X8", "GameView", void 0);
var Ct = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (at = Ct("GameView"), ot = _dependency9.inject("content", _dependency2.Node), rt = _dependency9.inject("content/gameLayer", _dependency2.Node), st = _dependency9.inject("content/uiLayer", _dependency2.Node), ut = _dependency9.inject("content/uiLayer/leftContent", _dependency2.Node), lt = _dependency9.inject("content/gameLayer/ReelView", _dependency2.Node), pt = _dependency9.inject("content/gameLayer/SymbolView", _dependency2.Node), ct = _dependency9.inject("content/uiLayer/rotateScreenBtn", _dependency2.Node), at(((Et = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "content", ht, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "gameLayer", gt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "uiLayer", mt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "leftContent", yt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ReelView", St, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "SymbolView", bt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rotateScreenBtn", At, _dependency.assertThisInitialized(e)), e.slotUIConfigs = [], e.slotUIMap = new Map(), e;
  }
  _dependency.inheritsLoose(e, t);
  var u = e.prototype;
  return u.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, u.start = function () {
    this.beforeInit();
  }, u.onDestroy = function () {
    this.removeAllEvents();
  }, u.reset = function () {
    t.prototype.reset.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + _dependency4.default.getViewModeParam() + "/GameView";
  }, u.beforeInit = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (e = this.args) {
              t.next = 3;
              break;
            }
            return t.abrupt("return");
          case 3:
            e === _dependency29.EInitName.INIT_REPLAY ? (!0, dispatch(_dependency30.GameEvent.PARSER_REPLAY_COMPLETED, true), this.playBGM(_dependency28.EBGM.MAIN_GAME)) : e == _dependency29.EInitName.INIT_GAME && (_dependency19.default.isReplay = !1, _dependency28.default.setIsTurbo(_dependency18.default.getData().player.settings.advancedSettings.turbo), dispatch(_dependency17.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN));
          case 4:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), u.init = function () {
    this.initGameViewSize(), this.initNewCompleted(), this.setUI(), this.initAudio(), this.setEventTouch(), this.gameLayer.on(_dependency2.NodeEventType.TOUCH_END, this.quickStop, this), this.initRotateScreenBtn();
  }, u.initRotateScreenBtn = function () {
    null != _dependency18.default.getData().disableRotate && 1 == _dependency18.default.getData().disableRotate && (this.rotateScreenBtn.active = !1);
  }, u.initReplay = function () {
    this.initAudio(), this.setReplayUI(), this.gameLayer.on(_dependency2.NodeEventType.TOUCH_END, this.replayQuickStop, this), _dependency18.default.getData().player.avatarUrl = _dependency19.default.getData().betData.replayMeta.avatarUrl, _dependency18.default.getData().player.displayName = _dependency19.default.getData().betData.replayMeta.displayName, dispatch(_dependency17.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
      data: {
        balance: _dependency19.default.getData().betData.replayMeta.amount
      }
    }), dispatch(_dependency17.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE), dispatch(_dependency17.SlotFrameworkEvent.SET_DISPLAY_NAME), dispatch(_dependency17.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
      data: {
        spinId: ""
      }
    });
  }, u.againReplayUpdateAmount = function () {
    dispatch(_dependency30.GameEvent.UPDATE_WIN_AMOUNT, {
      data: {
        value: 0
      }
    }), dispatch(_dependency17.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: 0
      }
    });
  }, u.initGameViewSize = function () {
    var t = this.wrapperData.orientation === _dependency7.EOrientationType.LANDSCAPE ? new _dependency2.Size(1280, 720) : new _dependency2.Size(720, 1280);
    this.content.getComponent(_dependency2.UITransform).setContentSize(t);
  }, u.createBuyFeatureBtn = function () {
    var t = _dependency28.default.getData().filePaths.buyFeatureBtnPrefab,
      e = this.data.getData().definition.buyFeature,
      n = App.cache.get(this.data.module, t).data;
    if (e.length > 0) {
      var i = _dependency2.instantiate(n);
      this.uiLayer.addChild(i);
    }
  }, u.setReplayUI = function () {
    var t = this.slotData.getData().filePaths,
      e = t.infoBarPPrefab,
      n = t.infoBarPrefab,
      i = t.spinBarPrefab;
    this.slotUIConfigs = [{
      path: _dependency22.CmmSlotUtils.getOrientationTarget(n, e),
      component: _dependency22.CmmSlotUtils.getOrientationTarget(_dependency10.default, _dependency11.default)
    }, {
      path: _dependency22.CmmSlotUtils.getOrientationTarget("prefabs/ui/topBar/TopBar", "prefabs/ui/topBar/TopBarP"),
      component: _dependency15.default
    }], "landscape" == _dependency4.default.getViewModeParam() && this.slotUIConfigs.push({
      path: i,
      component: _dependency13.default
    }), this.addSlotUI(this.slotUIConfigs);
    var a = _dependency22.CmmSlotUtils.getOrientationTarget(_dependency26.default, _dependency27.default);
    App.uiManager.open({
      type: a,
      bundle: _dependency5.EBundles[_dependency5.EBundles.slotFramework],
      zIndex: _dependency3.ViewZOrder.ReplayUI,
      name: "replay UI層"
    }), this.uiLayer.getComponentInChildren(_dependency15.default).setVersion("v" + this.data.GAME_VERSION);
  }, u.setUI = function () {
    var t = this.slotData.getData().filePaths,
      e = t.infoBarPPrefab,
      n = t.infoBarPrefab,
      i = t.spinBarPPrefab,
      a = t.spinBarPrefab;
    this.slotUIConfigs = [{
      path: _dependency22.CmmSlotUtils.getOrientationTarget(n, e),
      component: _dependency22.CmmSlotUtils.getOrientationTarget(_dependency10.default, _dependency11.default)
    }, {
      path: _dependency22.CmmSlotUtils.getOrientationTarget(a, i),
      component: _dependency22.CmmSlotUtils.getOrientationTarget(_dependency13.default, _dependency14.default)
    }, {
      path: _dependency22.CmmSlotUtils.getOrientationTarget("prefabs/ui/topBar/TopBar", "prefabs/ui/topBar/TopBarP"),
      component: _dependency15.default
    }, {
      path: "prefabs/component/PrizeNotify",
      component: _dependency1.PrizeNotify
    }], this.addSlotUI(this.slotUIConfigs), this.setSlotUIData();
  }, u.addSlotUI = function (t) {
    var e = this;
    t.forEach(function (t) {
      var n = t.path,
        i = t.component,
        a = App.cache.get(_dependency5.EBundles[_dependency5.EBundles.slotFramework], n).data,
        o = _dependency2.instantiate(a);
      e.slotUIMap.set(o.name, o), o.addComponent(i), e.uiLayer.addChild(o);
    });
    var n = this.uiLayer.getComponentInChildren(_dependency1.PrizeNotify);
    if (n) {
      var i = _dependency4.default.getViewModeParam(),
        a = n.node.getChildByName("content").getComponent(_dependency2.Widget);
      "landscape" == i ? (a.left = 0, a.isAlignVerticalCenter = !0, a.verticalCenter = -50, n.node.active = !0) : (a.left = -14, a.isAbsoluteLeft = !0, a.isAlignVerticalCenter = !0, a.verticalCenter = 310, n.node.active = !0);
    }
  }, u.setSlotUIData = function () {
    var t = this;
    if (App.dataCenter.get(_dependency0.default).orientation === _dependency7.EOrientationType.LANDSCAPE) {
      var e = _dependency28.default.getData().filePaths,
        n = e.common,
        i = e.font,
        a = e.localeSpriteFrame,
        o = e.spinSkeleton,
        r = App.cache.get(this.bundle, o).data[0],
        s = {
          normal: _dependency23.LoadUtils.getDirSp(this.bundle, n, "mg_btn_spin_icon_normal"),
          pressed: _dependency23.LoadUtils.getDirSp(this.bundle, n, "mg_btn_spin_icon_pressed"),
          hover: _dependency23.LoadUtils.getDirSp(this.bundle, n, "mg_btn_spin_icon_normal"),
          disabled: _dependency23.LoadUtils.getDirSp(this.bundle, n, "mg_btn_spin_icon_disabled")
        },
        u = {
          font: _dependency23.LoadUtils.getDirSp(this.bundle, i, "countup_01"),
          fontSize: 32,
          fontPos: new _dependency2.Vec3(0, 0, 0)
        },
        l = this.uiLayer.getComponentInChildren(_dependency15.default),
        p = _dependency18.default.getData().jackpotOn,
        c = l.getComponentInChildren(_dependency12.default),
        f = {
          bundle: this.bundle,
          background: n,
          rules: a
        },
        d = this.uiLayer.getComponentInChildren(_dependency13.default);
      d.addSpinEventTouch(this.name, function () {
        t.spin();
      }), d.addQuickStopEventTouch(function () {
        t.quickStop();
      }), d.initTurbo(_dependency28.default.isTurbo), d.addTurboEventTouch(_dependency28.default), d.setSpinBtnData(r, null, s, u, .5), l.setVersion("v" + this.data.GAME_VERSION), l.showHideJPBar(p), c.setRuleAssets(f);
    }
  }, u.setEventTouch = function () {
    this.onI(_dependency2.Input.EventType.KEY_DOWN, function (t) {
      t.keyCode;
    });
  }, u.shakeView = function () {
    var t = this,
      e = .02,
      n = [this.ReelView, this.SymbolView],
      i = _dependency2.v3(0, 0, 0);
    n.forEach(function (n) {
      n == t.SymbolView && (i = _dependency2.v3(20, 0, 0)), _dependency2.tween(n).bindNodeState(false).delay(.3).to(e, {
        position: new _dependency2.Vec3(18, 21, 0)
      }).to(e, {
        position: new _dependency2.Vec3(39, 9, 0)
      }).to(e, {
        position: new _dependency2.Vec3(-9, -18, 0)
      }).to(e, {
        position: new _dependency2.Vec3(15, 15, 0)
      }).to(e, {
        position: new _dependency2.Vec3(-6, -24, 0)
      }).to(e, {
        position: new _dependency2.Vec3(24, -30, 0)
      }).to(e, {
        position: new _dependency2.Vec3(-9, 30, 0)
      }).to(e, {
        position: new _dependency2.Vec3(9, -15, 0)
      }).to(e, {
        position: new _dependency2.Vec3(-12, 24, 0)
      }).to(e, {
        position: i
      }).call(function () {
        t.node.position = new _dependency2.Vec3(0, 0, 0);
      }).start();
    });
  }, u.playBGM = function (t) {
    this.audioHelper.playMusic(t, this.bundle);
  }, u.playBTM = function (t, e) {
    void 0 === e && (e = !1), this.audioHelper.playEffect(t, this.bundle, e);
  }, u.stopBTM = function (t) {
    this.audioHelper.stopEffect(t, this.bundle);
  }, u.playRepeatBTM = function (t, e) {
    void 0 === e && (e = !1), this.audioHelper.playRepeatEffect(t, this.bundle, e);
  }, u.initAudio = function () {
    var t, e;
    if (_dependency4.default.hasParam("spinId")) return App.globalAudio.musicVolume = 0, void (App.globalAudio.effectVolume = 0);
    App.globalAudio.musicVolume = null != (t = _dependency20.default.backgroundVolume) ? t : 1, App.globalAudio.effectVolume = null != (e = _dependency20.default.effectVolume) ? e : 1;
  }, u.buyFeatureSpin = function (t) {
    dispatch(_dependency30.GameEvent.CLOSE_FEATURE_POPUP), dispatch(_dependency30.GameEvent.CREATE_SPIN_FLOW, {
      data: {
        spinId: t,
        test: null
      }
    }), dispatch(_dependency30.GameEvent.UPDATE_WIN_AMOUNT, {
      data: {
        value: 0
      }
    }), dispatch(_dependency17.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: 0
      }
    }), this.playBTM(_dependency28.EBTM.SPIN);
  }, u.showResumeAlert = function () {
    var t = {
      text: App.getLanguage("wrapper1", [], _dependency5.EBundles[_dependency5.EBundles.wrapper]),
      bbrColor: new _dependency2.Color(0, 0, 0, 255),
      confirmCb: function (t) {
        dispatch(_dependency30.GameEvent.CREATE_RESUME_FLOW);
      }
    };
    App.gameAlert.show(t), App.uiManager.close(_dependency22.CmmSlotUtils.getOrientationTarget(_dependency24.default, _dependency25.default));
  }, u.createTestBtn = function () {
    var t = this;
    [{
      name: "分裂",
      function: function () {
        t.testSpin({
          type: 0
        });
      }
    }, {
      name: "鎖定+分裂",
      function: function () {
        t.testSpin({
          type: 1
        });
      }
    }, {
      name: "分裂+鎖定",
      function: function () {
        t.testSpin({
          type: 2
        });
      }
    }, {
      name: "寶箱",
      function: function () {
        t.testSpin({
          type: 3
        });
      }
    }, {
      name: "bigWin",
      function: function () {
        t.testSpin({
          type: 4
        });
      }
    }, {
      name: "superWin",
      function: function () {
        t.testSpin({
          type: 5
        });
      }
    }, {
      name: "megaWin",
      function: function () {
        t.testSpin({
          type: 6
        });
      }
    }, {
      name: "ultraWin",
      function: function () {
        t.testSpin({
          type: 7
        });
      }
    }, {
      name: "legendWin",
      function: function () {
        t.testSpin({
          type: 8
        });
      }
    }, {
      name: "FG次數增加",
      function: function () {
        t.testSpin({
          type: 9
        });
      }
    }].forEach(function (e, n) {
      var i = _dependency6.CmmUtils.createNode("按鈕" + n, {
          Button: !0,
          subLabel: !0
        }),
        a = i.getComponentInChildren(_dependency2.Label);
      i.getComponent(_dependency2.UITransform).height = 25, a.color = new _dependency2.Color("#ffffff"), a.fontSize = 18, a.lineHeight = 18, a.string = e.name, i.setParent(t.leftContent), _dependency6.CmmUtils.addDoubleClickProtection(i, function () {
        e.function();
      });
    });
  }, u.testSpin = function (t) {
    this.slotData.getData().spinStatus == _dependency21.ESpinStatus.IDLE && dispatch(_dependency30.GameEvent.CREATE_SPIN_FLOW, {
      data: {
        spinId: null,
        test: t
      }
    });
  }, u.spin = function () {
    var t = _dependency6.CmmUtils.extractContentBetweenAngleBrackets(this.name)[0];
    App.uiManager.IsOnlyGameViewOpen(t) && (dispatch(_dependency30.GameEvent.CREATE_SPIN_FLOW, {
      data: {
        spinId: null,
        test: null
      }
    }), this.playBTM(_dependency28.EBTM.SPIN));
  }, u.quickStop = function () {
    var t = App.dataCenter.get(_dependency16.default).getData().spinStatus,
      e = _dependency6.CmmUtils.extractContentBetweenAngleBrackets(this.name)[0],
      n = App.uiManager.IsOnlyGameViewOpen(e);
    t === _dependency21.ESpinStatus.SPINING && n && dispatch(_dependency30.GameEvent.CREATE_QUICK_STOP_FLOW);
  }, u.replayQuickStop = function () {
    var t = App.dataCenter.get(_dependency16.default).getData().spinStatus;
    _dependency2.game.isPaused() || t === _dependency21.ESpinStatus.SPINING && dispatch(_dependency30.GameEvent.CREATE_REPLAY_QUICK_STOP_FLOW);
  }, u.multipleMusicVolume = function (t) {
    App.globalAudio.musicVolume = App.globalAudio.musicVolume * t;
  }, u.initNewCompleted = function () {
    var t = this.data.getData().isResuming,
      e = this.data.getData().newGameState[this.data.currSpinIndex].action,
      n = e == _dependency32.EActionType.SPIN || e == _dependency32.EActionType.SUPER_GAME,
      i = n ? _dependency28.EBGM.MAIN_GAME : _dependency28.EBGM.FREE_GAME;
    this.createBuyFeatureBtn(), t ? (this.playBGM(i), dispatch(_dependency30.GameEvent.CHANGE_GAME_STYLE, {
      data: n
    }), this.showResumeAlert()) : (this.playBGM(_dependency28.EBGM.MAIN_GAME), dispatch(_dependency30.GameEvent.CHANGE_GAME_STYLE, {
      data: !0
    }));
  }, u.showTest = function () {
    this.leftContent.active = !this.leftContent.active;
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency29.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency16.default);
    }
  }, {
    key: "wrapperData",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), e;
}(_dependency8.default)).logicType = _dependency31.GameLogic, ht = _dependency.applyDecoratedDescriptor((dt = Et).prototype, "content", [ot], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gt = _dependency.applyDecoratedDescriptor(dt.prototype, "gameLayer", [rt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = _dependency.applyDecoratedDescriptor(dt.prototype, "uiLayer", [st], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), yt = _dependency.applyDecoratedDescriptor(dt.prototype, "leftContent", [ut], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), St = _dependency.applyDecoratedDescriptor(dt.prototype, "ReelView", [lt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), bt = _dependency.applyDecoratedDescriptor(dt.prototype, "SymbolView", [pt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), At = _dependency.applyDecoratedDescriptor(dt.prototype, "rotateScreenBtn", [ct], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = dt)) || ft));
_dependency2.cclegacy._RF.pop();
