import "../../shared/scripts/main-Application";
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Config";
import * as _dependency4 from "../../shared/scripts/main-Bundles";
import * as _dependency5 from "../../shared/scripts/main-HeartbetJson";
import * as _dependency6 from "../../shared/scripts/main-Resource";
import * as _dependency7 from "../../shared/scripts/main-Entry";
import * as _dependency8 from "../../shared/scripts/main-Decorators";
import * as _dependency9 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency0 from "../../shared/scripts/slotFramework-ColorModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-ReadyBundleModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-UrlModel";
import * as _dependency11 from "./g1002-RegisterCommands";
import * as _dependency12 from "./g1002-GameColor";
import * as _dependency13 from "./g1002-GameConfigModel";
import * as _dependency14 from "./g1002-GameData";
import * as _dependency15 from "./g1002-GameLanguage";
import * as _dependency16 from "./g1002-GameEvent";
import * as _dependency17 from "./g1002-GameHandler";
import * as _dependency18 from "./g1002-GameService";
import * as _dependency19 from "./g1002-GameView";
import * as _dependency20 from "./g1002-BigwinView";
import * as _dependency21 from "./g1002-WinView";
import * as _dependency22 from "./g1002-DragonView";
import * as _dependency23 from "../../shared/scripts/slotFramework-StakeBarView";
import * as _dependency24 from "./g1002-StateMachineManager";
import * as _dependency25 from "../../shared/scripts/main-UrlUtils";
import * as _dependency26 from "./g1002-ReplayUIViewP";
import * as _dependency27 from "./g1002-BonusGameView";
import * as _dependency28 from "./g1002-DropMaterials";
import * as _dependency29 from "./g1002-BonusSlotMultipleGame";
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, t, n, a, r, o, i, u, l, s, c, d, p, f, b, m, g, h, y, w, S, v, A, k, M, D, C, E, L, _, B, G, P, V, x, I, O, R, F, T, N, H, U, Y, W;
var J;
_dependency2.cclegacy._RF.push({}, "cda2bMxyIhLH65q5R3VYU/r", "GameEntry", void 0);
_dependency8.registerEntry("GameEntry", _dependency4.EBundles[_dependency4.EBundles.g1002], _dependency19.default)(J = function (r) {
  var _nativeConstructor = y;
  function y() {
    for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
    return (e = Reflect.construct(r, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).language = new _dependency15.GameLanguage(), e.color = new _dependency12.GameColor(), e;
  }
  _dependency.inheritsLoose(y, r);
  var w = y.prototype;
  return w.addNetHandler = function () {
    App.handlerManager.get(_dependency17.GameHandler);
  }, w.removeNetHandler = function () {}, w.loadResources = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      var n,
        r,
        o,
        i,
        u,
        f,
        b,
        g,
        y,
        w,
        S,
        v,
        k,
        M,
        D,
        L,
        _,
        B,
        G,
        P,
        F = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = _dependency13.default.getData().filePaths, r = n.symbolsSpriteFrame, o = n.symbolsSkeletonData, i = n.frameSkeletonData, u = n.heavenlyTreasures, f = n.winCashPrefab, n.fireBallPrefab, b = n.gameAlertsSkeletonData, g = n.spinSkeleton, y = n.common, w = n.localeSpriteFrame, S = n.font, n.timesMovingPrefab, v = n.transitionsSkeletonData, n.blueTimesMovingPrefab, n.purpleTimesMovingPrefab, k = n.symbolPrefab, n.symbolsSpriteFrameBlur, M = n.lineItemPrefab, D = n.lineSkeletonData, L = n.bgMgSkeletonData, _ = n.bgFgSkeletonData, B = n.dragonSkeletonData, G = n.circleAnimPrefab, P = n.symbolTransHaloAnimPrefab, n.replayUIViewPPrefab, e.next = 3, this.setloadingDataVO();
          case 3:
            this.loader.getLoadResources = function () {
              return [{
                preloadView: _dependency19.default,
                bundle: F.bundle
              }, {
                dir: y,
                bundle: F.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: w,
                bundle: F.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: S,
                bundle: F.bundle,
                type: _dependency2.Font
              }, {
                dir: g,
                bundle: F.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: u,
                bundle: F.bundle,
                type: _dependency2.Prefab
              }, {
                dir: r,
                bundle: F.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: o,
                bundle: F.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: i,
                bundle: F.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                url: k,
                bundle: F.bundle,
                type: _dependency2.Prefab
              }, {
                url: f,
                bundle: F.bundle,
                type: _dependency2.Prefab
              }, {
                url: M,
                bundle: F.bundle,
                type: _dependency2.Prefab
              }, {
                url: G,
                bundle: F.bundle,
                type: _dependency2.Prefab
              }, {
                url: P,
                bundle: F.bundle,
                type: _dependency2.Prefab
              }, {
                dir: D,
                bundle: F.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: L,
                bundle: F.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: _,
                bundle: F.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: b,
                bundle: F.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: v,
                bundle: F.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: B,
                bundle: F.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                url: _dependency13.EBTM.SYMBOL_CHANGE_WILD,
                bundle: F.bundle,
                type: _dependency2.AudioClip
              }, {
                url: _dependency13.EBTM.SYMBOL_CHANGE_SYMBOL,
                bundle: F.bundle,
                type: _dependency2.AudioClip
              }, {
                url: _dependency13.EBTM.WIN_LOOP,
                bundle: F.bundle,
                type: _dependency2.AudioClip
              }, {
                url: _dependency13.EBTM.S_PRIZE_LOOP,
                bundle: F.bundle,
                type: _dependency2.AudioClip
              }, {
                url: _dependency13.EBTM.L_PRIZE_LOOP,
                bundle: F.bundle,
                type: _dependency2.AudioClip
              }, {
                url: _dependency13.EBTM.MONEY_SCROLL,
                bundle: F.bundle,
                type: _dependency2.AudioClip
              }, {
                url: _dependency13.EBTM.FG_OUT_INTRO,
                bundle: F.bundle,
                type: _dependency2.AudioClip
              }, {
                preloadView: _dependency20.BigwinView,
                bundle: F.bundle
              }, {
                preloadView: _dependency21.WinView,
                bundle: F.bundle
              }, {
                preloadView: _dependency22.default,
                bundle: F.bundle
              }, {
                preloadView: _dependency28.DropMaterials,
                bundle: F.bundle
              }, {
                preloadView: _dependency29.BonusSlotMultipleGame,
                bundle: F.bundle
              }, {
                preloadView: _dependency27.BonusGameView,
                bundle: F.bundle
              }, {
                preloadView: _dependency23.StakeBarView,
                bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework]
              }, {
                preloadView: _dependency26.default,
                bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework]
              }];
            }, this.loader.onLoadProgress = function (e, t, n) {
              App.gameLoading.setLoading(e, t, n);
            }, this.loader.onLoadComplete = function (e) {
              _dependency6.Resource.LoaderError.SUCCESS && (_dependency1.default.setComplete(_dependency4.EBundles[F.bundle]), App.uiManager.close(_dependency29.BonusSlotMultipleGame), t());
            }, this.loader.loadResources();
          case 7:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), w.initData = function () {
    Log.d("%c 🐽🐽🐽 gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION + " 🐽🐽🐽 ", "color:#ff0000"), _dependency2.sys.isMobile && (_dependency2.macro.ENABLE_WEBGL_ANTIALIAS = !1), _dependency11.default.execute(), App.serviceManager.get(_dependency18.GameService, !0), this.initColorModel(), this.initLanguage();
  }, w.initColorModel = function () {
    var e = {
      mainGame: {
        auxiliary: new _dependency2.Color("#4e3487"),
        main: new _dependency2.Color("#ab84ff"),
        mainHover: new _dependency2.Color("#896acc"),
        topbar: new _dependency2.Color(42, 26, 77, 209.1)
      },
      record: {
        5: new _dependency2.Color(255, 255, 255, 12.75),
        10: new _dependency2.Color(255, 255, 255, 255 * .24)
      },
      background: {
        0: new _dependency2.Color("#c9c9cc"),
        20: new _dependency2.Color("#a9a9ad"),
        40: new _dependency2.Color("#88898e"),
        60: new _dependency2.Color("#68696f"),
        80: new _dependency2.Color("#474951"),
        100: new _dependency2.Color("#272932")
      },
      white: {
        info01: new _dependency2.Color("#ffffff"),
        default01: new _dependency2.Color(255, 255, 255, 38.25),
        default02: new _dependency2.Color(255, 255, 255, 255 * .24),
        hover01: new _dependency2.Color(255, 255, 255, 76.5),
        hover02: new _dependency2.Color(255, 255, 255, 255 * .08),
        labelDefault01: new _dependency2.Color(255, 255, 255, 153),
        textAuto01: new _dependency2.Color("#ffffff")
      },
      red: {
        primary: new _dependency2.Color("#ff6433")
      },
      green: {
        primary: new _dependency2.Color("#3ae300")
      },
      yellow: {
        primary: new _dependency2.Color("#ffd680"),
        secondary: new _dependency2.Color(255, 168, 0, 76.5)
      }
    };
    _dependency0.default.setData(e);
  }, w.pauseMessageQueue = function () {}, w.resumeMessageQueue = function () {}, w.onEnter = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return this.initStateMachine(), e.next = 3, _dependency24.default.getMachine().startAsync();
          case 3:
            r.prototype.onEnter.call(this, t), Log.d("--------------onEnterLogin--------------"), this.serviceInit();
          case 7:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), w.openGameView = function (e) {
    var t = this;
    App.gameLoading.setMessage("gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION);
    var n = setInterval(function () {
      t.checkCompletion(n, e);
    }, 100);
  }, w.onUnloadBundle = function () {
    r.prototype.onUnloadBundle.call(this);
  }, w.checkCompletion = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t, n) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (_dependency1.default.isComplete()) {
              e.next = 4;
              break;
            }
            return e.abrupt("return");
          case 4:
            return clearInterval(t), App.uiManager.open({
              type: this.gameViewType,
              bundle: this.bundle,
              args: n
            }), e.next = 9, this.waitSocketConnected();
          case 9:
            dispatch(_dependency16.GameEvent.LOAD_COMPLETE);
          case 10:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t, n) {
      return e.apply(this, arguments);
    };
  }(), w.setloadingDataVO = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      var t, n, r, o, i, u, s, d, p, b, m;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, App.cache.getCacheByAsync("assets/texture/common/l_bg/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 2:
            return t = e.sent, e.next = 5, App.cache.getCacheByAsync("assets/spine/loading/loading", _dependency2.sp.SkeletonData, this.bundle);
          case 5:
            return n = e.sent, e.next = 8, App.cache.getCacheByAsync("assets/texture/common/l_loading_frame/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 8:
            return r = e.sent, e.next = 11, App.cache.getCacheByAsync("assets/texture/common/l_loading_01/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 11:
            return o = e.sent, e.next = 14, App.cache.getCacheByAsync("assets/texture/common/l_loading_light/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 14:
            return i = e.sent, u = _dependency10.default.getData().searchParams.l, e.next = 18, App.cache.getCacheByAsync("assets/texture/locale/" + u + "/l_logo/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 18:
            return s = e.sent, e.next = 21, App.cache.getCacheByAsync("assets/texture/locale/" + u + "/l_font/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 21:
            d = e.sent, p = _dependency2.v3(0, -460, 0), b = {
              background: t,
              spine: n,
              loadingSpineAnimName: "loop",
              barFrame: null,
              bar: o,
              barbg: r,
              barLight: i,
              logo: s,
              startGame: d,
              progressBarPostion: p
            }, m = {
              mask: _dependency2.v3(2, 1)
            }, App.gameLoading.setData(b, m);
          case 26:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), w.serviceInit = function () {
    this.service.heartbeat = _dependency5.HeartbeatJson, this.service.maxEnterBackgroundTime = _dependency3.Config.MIN_INBACKGROUND_TIME, this.service.connect(), this.service.enabled = !0;
  }, w.initLanguage = function () {
    var e,
      t = null != (e = _dependency10.default.getData().searchParams) && e.l ? _dependency10.default.getData().searchParams.l : "zh-tw";
    App.language.change(t);
  }, w.initStateMachine = function () {
    var e = _dependency25.default.hasParam("gn") && _dependency25.default.hasParam("t"),
      t = _dependency25.default.hasParam("spinId");
    e ? _dependency24.default.setCurrentState(_dependency24.EStateMachineName.GAME_STATE) : t && _dependency24.default.setCurrentState(_dependency24.EStateMachineName.REPLAY_STATE);
  }, w.waitSocketConnected = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      var t = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", new Promise(function (e, n) {
              var a = 0,
                r = setInterval(function () {
                  t.service.isConnected ? (clearInterval(r), e()) : (a += 100) >= 3e4 && (clearInterval(r), n(new Error("Socket connection timed out")));
                }, 100);
            }));
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), _dependency.createClass(y, [{
    key: "service",
    get: function () {
      return App.serviceManager.get(_dependency18.GameService);
    }
  }, {
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency14.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), y;
}(_dependency7.Entry));
_dependency2.cclegacy._RF.pop();
