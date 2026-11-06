// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Config";
import * as _dependency4 from "../../shared/scripts/main-Bundles";
import * as _dependency5 from "../../shared/scripts/main-CmmUtils";
import * as _dependency6 from "../../shared/scripts/main-AdapterEvent";
import * as _dependency7 from "../../shared/scripts/main-GameViewBase";
import * as _dependency8 from "../../shared/scripts/main-Decorators";
import * as _dependency9 from "../../shared/scripts/main-WrapperData";
import * as _dependency0 from "../../shared/scripts/slotFramework-PrizeNotify";
import * as _dependency1 from "../../shared/scripts/slotFramework-InfoBarController";
import * as _dependency10 from "../../shared/scripts/slotFramework-InfoBarPController";
import * as _dependency11 from "../../shared/scripts/slotFramework-MenuController";
import * as _dependency12 from "../../shared/scripts/slotFramework-SpinBarControllerLandScape";
import * as _dependency13 from "../../shared/scripts/slotFramework-SpinBarPController";
import * as _dependency14 from "../../shared/scripts/slotFramework-TopBar";
import * as _dependency15 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency16 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency17 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency18 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency19 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency20 from "../../shared/scripts/slotFramework-type2";
import * as _dependency21 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency22 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency23 from "../../shared/scripts/slotFramework-SlotTableViewL";
import * as _dependency24 from "../../shared/scripts/slotFramework-SlotTableViewP";
import * as _dependency25 from "./g1001-ReplayUIViewL";
import * as _dependency26 from "./g1001-ReplayUIViewP";
import * as _dependency27 from "./g1001-GameConfigModel";
import * as _dependency28 from "./g1001-GameData";
import * as _dependency29 from "./g1001-GameEvent";
import * as _dependency30 from "./g1001-GameLogic";
import * as _dependency31 from "../../shared/scripts/slotFramework-SlotTableViewL_v2";
import * as _dependency32 from "../../shared/scripts/main-UrlUtils";
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
var e, n, a, i, o, r, s, l, u, p, c, d, f, h, g, m, b, _, S, y, A, E, I, C, v, D, T, w, P, B, L, U, N, M, R, V, O, G, k, F, z, x, W, H, Y, Q, j, q, K, J, Z, X, $, tt, et;
var nt, at, it, ot, rt, st, lt, ut, pt, ct, dt, ft, ht, gt, mt, bt, _t, St;
_dependency2.cclegacy._RF.push({}, "94978i7nIVIwZCtkj9L5W1h", "GameView", void 0);
var yt = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (nt = yt("GameView"), at = _dependency8.inject("content", _dependency2.Node), it = _dependency8.inject("content/gameLayer", _dependency2.Node), ot = _dependency8.inject("content/uiLayer", _dependency2.Node), rt = _dependency8.inject("content/uiLayer/leftContent", _dependency2.Node), st = _dependency8.inject("content/gameLayer/ReelView", _dependency2.Node), lt = _dependency8.inject("content/gameLayer/SymbolView", _dependency2.Node), ut = _dependency8.inject("content/uiLayer/rotateScreenBtn", _dependency2.Node), nt(((St = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "content", dt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "gameLayer", ft, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "uiLayer", ht, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "leftContent", gt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ReelView", mt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "SymbolView", bt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rotateScreenBtn", _t, _dependency.assertThisInitialized(e)), e.slotUIConfigs = [], e.slotUIMap = new Map(), e;
  }
  _dependency.inheritsLoose(e, t);
  var l = e.prototype;
  return l.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, l.start = function () {
    this.beforeInit();
  }, l.onDestroy = function () {
    this.removeAllEvents();
  }, e.getPrefabUrl = function () {
    return "prefabs/" + _dependency32.default.getViewModeParam() + "/GameView";
  }, l.reset = function () {
    t.prototype.reset.call(this);
  }, l.beforeInit = function () {
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
            e === _dependency28.EInitName.INIT_REPLAY ? (!0, dispatch(_dependency29.GameEvent.PARSER_REPLAY_COMPLETED, true), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
              data: {
                spinId: ""
              }
            }), this.playBGM(_dependency27.EBGM.MAINGAME)) : e == _dependency28.EInitName.INIT_GAME && (_dependency18.default.isReplay = !1, _dependency27.default.setIsTurbo(_dependency17.default.getData().player.settings.advancedSettings.turbo), dispatch(_dependency16.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN));
          case 4:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.init = function () {
    this.initGameViewSize(), this.initNewCompleted(), this.setUI(), this.initAudio(), this.setEventTouch(), this.gameLayer.on(_dependency2.NodeEventType.TOUCH_END, this.quickStop, this), this.initRotateScreenBtn();
  }, l.initRotateScreenBtn = function () {
    var t = _dependency17.default.getData().disableRotate,
      e = void 0 !== t && t;
    0 == e && (e = null == _dependency32.default.getParam("disableRotate") ? e : Boolean(_dependency32.default.getParam("disableRotate"))), this.rotateScreenBtn.active = 1 != e;
  }, l.initReplay = function () {
    this.setReplayUI(), this.initAudio(), this.gameLayer.on(_dependency2.NodeEventType.TOUCH_END, this.replayQuickStop, this), _dependency17.default.getData().player.avatarUrl = _dependency18.default.getData().betData.replayMeta.avatarUrl, _dependency17.default.getData().player.displayName = _dependency18.default.getData().betData.replayMeta.displayName, dispatch(_dependency16.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
      data: {
        balance: _dependency18.default.getData().betData.replayMeta.amount
      }
    }), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE), dispatch(_dependency16.SlotFrameworkEvent.SET_DISPLAY_NAME), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
      data: {
        spinId: ""
      }
    });
  }, l.againReplayUpdateAmount = function () {
    dispatch(_dependency29.GameEvent.UPDATE_WIN_AMOUNT, {
      data: {
        value: 0
      }
    }), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: 0
      }
    });
  }, l.initGameViewSize = function () {
    var t = this.wrapperData.orientation === _dependency6.EOrientationType.LANDSCAPE ? new _dependency2.Size(1280, 720) : new _dependency2.Size(720, 1280);
    this.content.getComponent(_dependency2.UITransform).setContentSize(t);
  }, l.createBuyFeatureBtn = function () {
    var t = _dependency27.default.getData().filePaths.buyFeatureBtnPrefab,
      e = this.data.getData().definition.buyFeature,
      n = App.cache.get(this.data.module, t).data;
    if (e.length > 0) {
      var a = _dependency2.instantiate(n);
      this.uiLayer.addChild(a);
    }
  }, l.setReplayUI = function () {
    var t = this.slotData.getData().filePaths,
      e = t.infoBarPPrefab,
      n = t.infoBarPrefab,
      a = (t.spinBarPPrefab, t.spinBarPrefab);
    this.slotUIConfigs = [{
      path: _dependency21.CmmSlotUtils.getOrientationTarget(n, e),
      component: _dependency21.CmmSlotUtils.getOrientationTarget(_dependency1.default, _dependency10.default)
    }, {
      path: _dependency21.CmmSlotUtils.getOrientationTarget("prefabs/ui/topBar/TopBar", "prefabs/ui/topBar/TopBarP"),
      component: _dependency14.default
    }], "landscape" == _dependency32.default.getViewModeParam() && this.slotUIConfigs.push({
      path: a,
      component: _dependency12.default
    }), this.addSlotUI(this.slotUIConfigs);
    var i = _dependency21.CmmSlotUtils.getOrientationTarget(_dependency25.default, _dependency26.default);
    App.uiManager.open({
      type: i,
      bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework],
      zIndex: _dependency3.ViewZOrder.ReplayUI,
      name: "replay UI層"
    }), this.uiLayer.getComponentInChildren(_dependency14.default).setVersion("v" + this.data.GAME_VERSION), this.initRotateScreenBtn();
  }, l.setUI = function () {
    var t = this.slotData.getData().filePaths,
      e = t.infoBarPPrefab,
      n = t.infoBarPrefab,
      a = t.spinBarPPrefab,
      i = t.spinBarPrefab;
    this.slotUIConfigs = [{
      path: _dependency21.CmmSlotUtils.getOrientationTarget(n, e),
      component: _dependency21.CmmSlotUtils.getOrientationTarget(_dependency1.default, _dependency10.default)
    }, {
      path: _dependency21.CmmSlotUtils.getOrientationTarget(i, a),
      component: _dependency21.CmmSlotUtils.getOrientationTarget(_dependency12.default, _dependency13.default)
    }, {
      path: _dependency21.CmmSlotUtils.getOrientationTarget("prefabs/ui/topBar/TopBar", "prefabs/ui/topBar/TopBarP"),
      component: _dependency14.default
    }, {
      path: "prefabs/component/PrizeNotify",
      component: _dependency0.PrizeNotify
    }], this.addSlotUI(this.slotUIConfigs), this.setSlotUIData();
  }, l.addSlotUI = function (t) {
    var e = this;
    t.forEach(function (t) {
      var n = t.path,
        a = t.component,
        i = App.cache.get(_dependency4.EBundles[_dependency4.EBundles.slotFramework], n).data,
        o = _dependency2.instantiate(i);
      e.slotUIMap.set(o.name, o), o.addComponent(a), e.uiLayer.addChild(o);
    });
    var n = this.uiLayer.getComponentInChildren(_dependency0.PrizeNotify);
    if (n) {
      var a = _dependency32.default.getViewModeParam(),
        i = n.node.getChildByName("content").getComponent(_dependency2.Widget);
      "landscape" == a ? (i.left = 0, i.isAlignVerticalCenter = !0, i.verticalCenter = -50, n.node.active = !0) : (i.left = -14, i.isAbsoluteLeft = !0, i.isAlignVerticalCenter = !0, i.verticalCenter = 310, n.node.active = !0);
    }
  }, l.setSlotUIData = function () {
    var t = this;
    if (App.dataCenter.get(_dependency9.default).orientation === _dependency6.EOrientationType.LANDSCAPE) {
      var e = this.uiLayer.getComponentInChildren(_dependency12.default);
      e.addSpinEventTouch(this.name, function () {
        t.spin();
      }), e.addQuickStopEventTouch(function () {
        t.quickStop();
      }), e.initTurbo(_dependency27.default.isTurbo), e.addTurboEventTouch(_dependency27.default);
      var n = _dependency27.default.getData().filePaths,
        a = n.common,
        i = n.font,
        o = n.localeSpriteFrame,
        r = n.spinSkeleton,
        s = App.cache.get(_dependency4.EBundles[_dependency4.EBundles.g1001], r).data[0],
        l = {
          normal: _dependency22.LoadUtils.getDirSp(this.bundle, a, "mg_btn_spin_bg_normal"),
          pressed: _dependency22.LoadUtils.getDirSp(this.bundle, a, "mg_btn_spin_bg_pressed"),
          hover: _dependency22.LoadUtils.getDirSp(this.bundle, a, "mg_btn_spin_bg_normal"),
          disabled: _dependency22.LoadUtils.getDirSp(this.bundle, a, "mg_btn_spin_bg_disabled")
        },
        u = {
          normal: _dependency22.LoadUtils.getDirSp(this.bundle, a, "mg_btn_spin_icon_normal"),
          pressed: _dependency22.LoadUtils.getDirSp(this.bundle, a, "mg_btn_spin_icon_pressed"),
          hover: _dependency22.LoadUtils.getDirSp(this.bundle, a, "mg_btn_spin_icon_normal"),
          disabled: _dependency22.LoadUtils.getDirSp(this.bundle, a, "mg_btn_spin_icon_disabled")
        },
        p = {
          font: _dependency22.LoadUtils.getDirSp(this.bundle, i, "countup_01"),
          fontSize: 8,
          fontPos: new _dependency2.Vec3(0, 12, 0)
        };
      e.setSpinBtnData(s, l, u, p);
      var c = this.uiLayer.getComponentInChildren(_dependency14.default);
      c.setVersion("v" + this.data.GAME_VERSION);
      var d = _dependency17.default.getData().jackpotOn;
      c.showHideJPBar(d);
      var f = c.getComponentInChildren(_dependency11.default),
        h = {
          bundle: this.bundle,
          background: a,
          rules: o
        };
      _dependency17.default.getData().theme && "xin-star" == _dependency17.default.getData().theme && (h.excludeIndexes = [6, 7]), f.setRuleAssets(h);
    } else {
      var m = this.uiLayer.getComponentInChildren(_dependency13.default);
      m.addSpinEventTouch(this.name, function () {
        t.spin();
      }), m.addQuickStopEventTouch(function () {
        t.quickStop();
      }), m.initTurbo(_dependency27.default.isTurbo), m.addTurboEventTouch(_dependency27.default);
      var b = _dependency27.default.getData().filePaths,
        _ = b.common,
        S = b.font,
        y = b.localeSpriteFrame,
        A = b.spinSkeleton,
        I = App.cache.get(_dependency4.EBundles[_dependency4.EBundles.g1001], A).data[0],
        v = {
          normal: _dependency22.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_bg_normal"),
          pressed: _dependency22.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_bg_pressed"),
          hover: _dependency22.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_bg_normal"),
          disabled: _dependency22.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_bg_disabled")
        },
        D = {
          normal: _dependency22.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_icon_normal"),
          pressed: _dependency22.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_icon_pressed"),
          hover: _dependency22.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_icon_normal"),
          disabled: _dependency22.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_icon_disabled")
        },
        w = {
          font: _dependency22.LoadUtils.getDirSp(this.bundle, S, "countup_01"),
          fontSize: 8,
          fontPos: new _dependency2.Vec3(0, 12, 0)
        };
      m.setSpinBtnData(I, v, D, w);
      var P = this.uiLayer.getComponentInChildren(_dependency14.default);
      P.setVersion("v" + this.data.GAME_VERSION);
      var B = _dependency17.default.getData().jackpotOn;
      P.showHideJPBar(B);
      P.getComponentInChildren(_dependency11.default);
      var R = {
        bundle: this.bundle,
        background: _,
        rules: y
      };
      _dependency17.default.getData().theme && "xin-star" == _dependency17.default.getData().theme && (R.excludeIndexes = [6, 7]), m.setRuleAssets(R);
    }
  }, l.setEventTouch = function () {
    this.onI(_dependency2.Input.EventType.KEY_DOWN, function (t) {
      t.keyCode;
    });
  }, l.shakeView = function () {
    var t = this,
      e = .02;
    [this.ReelView, this.SymbolView].forEach(function (n) {
      _dependency2.tween(n).bindNodeState(false).delay(.3).to(e, {
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
        position: new _dependency2.Vec3(0, 0, 0)
      }).call(function () {
        t.node.position = new _dependency2.Vec3(0, 0, 0);
      }).start();
    });
  }, l.playBGM = function (t) {
    this.audioHelper.playMusic(t, this.bundle);
  }, l.playBTM = function (t, e) {
    void 0 === e && (e = !1), this.audioHelper.playEffect(t, this.bundle, e);
  }, l.stopBTM = function (t) {
    this.audioHelper.stopEffect(t, this.bundle);
  }, l.initAudio = function () {
    var t, e;
    if (_dependency32.default.hasParam("spinId")) return App.globalAudio.musicVolume = 0, void (App.globalAudio.effectVolume = 0);
    App.globalAudio.musicVolume = null != (t = _dependency19.default.backgroundVolume) ? t : 1, App.globalAudio.effectVolume = null != (e = _dependency19.default.effectVolume) ? e : 1;
  }, l.buyFeatureSpin = function (t) {
    dispatch(_dependency29.GameEvent.CLOSE_FEATURE_POPUP), dispatch(_dependency29.GameEvent.CREATE_SPIN_FLOW, {
      data: {
        spinId: t,
        cheat: null
      }
    }), dispatch(_dependency29.GameEvent.UPDATE_WIN_AMOUNT, {
      data: {
        value: 0
      }
    }), dispatch(_dependency16.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: 0
      }
    }), this.playBTM(_dependency27.EBTM.SPIN);
  }, l.showResumeAlert = function () {
    var t = {
      text: App.getLanguage("wrapper1", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
      bbrColor: new _dependency2.Color(0, 0, 0, 255),
      confirmCb: function (t) {
        dispatch(_dependency29.GameEvent.CREATE_RESUME_FLOW);
      }
    };
    App.gameAlert.show(t);
    var e = "egyptian-mythology" === _dependency32.default.getParam("gn") ? _dependency31.default : _dependency23.default;
    App.uiManager.close(_dependency21.CmmSlotUtils.getOrientationTarget(e, _dependency24.default));
  }, l.cheat = function (t) {
    dispatch(_dependency29.GameEvent.CREATE_SPIN_FLOW, {
      data: {
        spinId: null,
        cheat: t
      }
    });
  }, l.spin = function () {
    var t = _dependency5.CmmUtils.extractContentBetweenAngleBrackets(this.name)[0];
    App.uiManager.IsOnlyGameViewOpen(t) && (dispatch(_dependency29.GameEvent.CREATE_SPIN_FLOW, {
      data: {
        spinId: null,
        cheat: null
      }
    }), this.playBTM(_dependency27.EBTM.SPIN));
  }, l.quickStop = function () {
    var t = App.dataCenter.get(_dependency15.default).getData().spinStatus,
      e = _dependency5.CmmUtils.extractContentBetweenAngleBrackets(this.name)[0],
      n = App.uiManager.IsOnlyGameViewOpen(e);
    t === _dependency20.ESpinStatus.SPINING && n && dispatch(_dependency29.GameEvent.CREATE_QUICK_STOP_FLOW);
  }, l.replayQuickStop = function () {
    var t = App.dataCenter.get(_dependency15.default).getData().spinStatus;
    _dependency2.game.isPaused() || t === _dependency20.ESpinStatus.SPINING && dispatch(_dependency29.GameEvent.CREATE_REPLAY_QUICK_STOP_FLOW);
  }, l.mutipleMusicVolume = function (t) {
    App.globalAudio.musicVolume = App.globalAudio.musicVolume * t;
  }, l.initNewCompleted = function () {
    var t = this.data.getData().isResuming,
      e = "spin" == this.data.getData().newGameState[this.data.currSpinIndex].action,
      n = e ? _dependency27.EBGM.MAINGAME : _dependency27.EBGM.FREEGAME;
    this.createBuyFeatureBtn(), t ? (this.playBGM(n), dispatch(_dependency29.GameEvent.CHANGE_GAME_STYLE, {
      data: e
    }), this.showResumeAlert()) : (this.playBGM(_dependency27.EBGM.MAINGAME), dispatch(_dependency29.GameEvent.CHANGE_GAME_STYLE, {
      data: !0
    }));
  }, l.showCheat = function () {
    this.leftContent.active = !this.leftContent.active;
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency28.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency15.default);
    }
  }, {
    key: "wrapperData",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), e;
}(_dependency7.default)).logicType = _dependency30.GameLogic, dt = _dependency.applyDecoratedDescriptor((ct = St).prototype, "content", [at], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = _dependency.applyDecoratedDescriptor(ct.prototype, "gameLayer", [it], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ht = _dependency.applyDecoratedDescriptor(ct.prototype, "uiLayer", [ot], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gt = _dependency.applyDecoratedDescriptor(ct.prototype, "leftContent", [rt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = _dependency.applyDecoratedDescriptor(ct.prototype, "ReelView", [st], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), bt = _dependency.applyDecoratedDescriptor(ct.prototype, "SymbolView", [lt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _t = _dependency.applyDecoratedDescriptor(ct.prototype, "rotateScreenBtn", [ut], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), pt = ct)) || pt));
_dependency2.cclegacy._RF.pop();
