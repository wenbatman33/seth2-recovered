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
import * as _dependency11 from "./g1012-RegisterCommands";
import * as _dependency12 from "./g1012-GameColor";
import * as _dependency13 from "./g1012-GameConfigModel";
import * as _dependency14 from "./g1012-GameData";
import * as _dependency15 from "./g1012-GameLanguage";
import * as _dependency16 from "./g1012-GameEvent";
import * as _dependency17 from "./g1012-GameHandler";
import * as _dependency18 from "./g1012-GameService";
import * as _dependency19 from "./g1012-GameView";
import * as _dependency20 from "./g1012-BigwinView";
import * as _dependency21 from "./g1012-WinView";
import * as _dependency22 from "../../shared/scripts/slotFramework-StakeBarView";
import * as _dependency23 from "./g1012-StateMachineManager";
import * as _dependency24 from "../../shared/scripts/main-UrlUtils";
import * as _dependency25 from "./g1012-ReplayUIViewP";
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
var e, t, n, a, r, i, o, u, s, l, c, d, p, f, b, g, m, h, y, w, S, v, k, A, D, E, L, C, M, P, G, _, x, B, I, V, R, O, F, T, N, H;
var U;
_dependency2.cclegacy._RF.push({}, "cda2bMxyIhLH65q5R3VYU/r", "GameEntry", void 0);
_dependency8.registerEntry("GameEntry", _dependency4.EBundles[_dependency4.EBundles.g1012], _dependency19.default)(U = function (r) {
  var _nativeConstructor = w;
  function w() {
    for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
    return (e = Reflect.construct(r, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).language = new _dependency15.GameLanguage(), e.color = new _dependency12.GameColor(), e;
  }
  _dependency.inheritsLoose(w, r);
  var S = w.prototype;
  return S.addNetHandler = function () {
    App.handlerManager.get(_dependency17.GameHandler);
  }, S.removeNetHandler = function () {}, S.loadResources = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      var n,
        r,
        i,
        o,
        u,
        b,
        g,
        h,
        w,
        S,
        v,
        k,
        D,
        E,
        L,
        P,
        G,
        _,
        x,
        B,
        F,
        T,
        N = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = _dependency13.default.getData().filePaths, r = n.reelSettingDir, i = n.symbolsSpriteFrame, o = n.symbolsSkeletonData, u = n.frameSkeletonData, b = n.winCashPrefab, g = n.fullComboSkeleton, h = n.gameAlertsSkeletonData, w = n.spinSkeleton, S = n.common, v = n.localeSpriteFrame, k = n.font, D = n.transitionsSkeletonData, E = n.symbolPrefab, L = n.jackpotSpineDir, P = n.lineItemPrefab, G = n.lineSkeletonData, _ = n.lineSpriteFrame, x = n.bgMgSkeletonData, B = n.bgMgBatSkeletonData, F = n.symbolTransHaloAnimPrefab, T = n.alertBgSpineDir, e.next = 3, this.setloadingDataVO();
          case 3:
            this.loader.getLoadResources = function () {
              return [{
                preloadView: _dependency19.default,
                bundle: N.bundle
              }, {
                dir: r,
                bundle: N.bundle,
                type: _dependency2.JsonAsset
              }, {
                dir: S,
                bundle: N.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: v,
                bundle: N.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: k,
                bundle: N.bundle,
                type: _dependency2.Font
              }, {
                dir: w,
                bundle: N.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: g,
                bundle: N.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: i,
                bundle: N.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: o,
                bundle: N.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: u,
                bundle: N.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: L,
                bundle: N.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: T,
                bundle: N.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                url: E,
                bundle: N.bundle,
                type: _dependency2.Prefab
              }, {
                url: b,
                bundle: N.bundle,
                type: _dependency2.Prefab
              }, {
                url: P,
                bundle: N.bundle,
                type: _dependency2.Prefab
              }, {
                url: F,
                bundle: N.bundle,
                type: _dependency2.Prefab
              }, {
                dir: G,
                bundle: N.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: _,
                bundle: N.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: x,
                bundle: N.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: B,
                bundle: N.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: h,
                bundle: N.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: D,
                bundle: N.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: "assets/music/btm",
                bundle: N.bundle,
                type: _dependency2.AudioClip
              }, {
                url: _dependency13.EBTM.WIN_LOOP,
                bundle: N.bundle,
                type: _dependency2.AudioClip
              }, {
                url: _dependency13.EBTM.S_PRIZE_LOOP,
                bundle: N.bundle,
                type: _dependency2.AudioClip
              }, {
                url: _dependency13.EBTM.L_PRIZE_LOOP,
                bundle: N.bundle,
                type: _dependency2.AudioClip
              }, {
                url: _dependency13.EBTM.SYMBOL_EXPECT,
                bundle: N.bundle,
                type: _dependency2.AudioClip
              }, {
                preloadView: _dependency20.BigwinView,
                bundle: N.bundle
              }, {
                preloadView: _dependency21.WinView,
                bundle: N.bundle
              }, {
                preloadView: _dependency22.StakeBarView,
                bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework]
              }, {
                preloadView: _dependency25.default,
                bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework]
              }];
            }, this.loader.onLoadProgress = function (e, t, n) {
              App.gameLoading.setLoading(e, t, n);
            }, this.loader.onLoadComplete = function (e) {
              _dependency6.Resource.LoaderError.SUCCESS && (_dependency1.default.setComplete(_dependency4.EBundles[N.bundle]), t());
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
  }(), S.initData = function () {
    Log.d("%c 🐽🐽🐽 gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION + " 🐽🐽🐽 ", "color:#ff0000"), _dependency2.sys.isMobile && (_dependency2.macro.ENABLE_WEBGL_ANTIALIAS = !1), _dependency11.default.execute(), App.serviceManager.get(_dependency18.GameService, !0), this.initColorModel(), this.initLanguage();
  }, S.initColorModel = function () {
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
  }, S.pauseMessageQueue = function () {}, S.resumeMessageQueue = function () {}, S.onEnter = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return this.initStateMachine(), e.next = 3, _dependency23.default.getMachine().startAsync();
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
  }(), S.openGameView = function (e) {
    var t = this;
    App.gameLoading.setMessage("gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION);
    var n = setInterval(function () {
      t.checkCompletion(n, e);
    }, 100);
  }, S.onUnloadBundle = function () {
    r.prototype.onUnloadBundle.call(this);
  }, S.checkCompletion = function () {
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
  }(), S.setloadingDataVO = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      var t, n, r, i, o, u, s, c, d, p;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t = _dependency10.default.getLanguageParam(), n = "assets/texture/locale/" + t + "/L_ui_portrait_d/spriteFrame", e.next = 4, App.cache.getCacheByAsync(n, _dependency2.SpriteFrame, this.bundle);
          case 4:
            return r = e.sent, e.next = 7, App.cache.getCacheByAsync("assets/texture/common/loading-bar-bg/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 7:
            return i = e.sent, e.next = 10, App.cache.getCacheByAsync("assets/texture/common/loading-bar/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 10:
            return o = e.sent, u = _dependency10.default.getData().searchParams.l, e.next = 14, App.cache.getCacheByAsync("assets/texture/locale/" + u + "/l_font/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 14:
            s = e.sent, c = _dependency2.v3(0, -630, 0), d = {
              background: r,
              barFrame: null,
              bar: o,
              barbg: i,
              barLight: null,
              logo: null,
              startGame: s,
              progressBarPostion: c
            }, p = {
              mask: _dependency2.v3(2, 1)
            }, App.gameLoading.setAtgLogoPosition(-304, 577), App.gameLoading.setData(d, p);
          case 20:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), S.serviceInit = function () {
    this.service.heartbeat = _dependency5.HeartbeatJson, this.service.maxEnterBackgroundTime = _dependency3.Config.MIN_INBACKGROUND_TIME, this.service.connect(), this.service.enabled = !0;
  }, S.initLanguage = function () {
    var e,
      t = null != (e = _dependency10.default.getData().searchParams) && e.l ? _dependency10.default.getData().searchParams.l : "zh-tw";
    App.language.change(t);
  }, S.initStateMachine = function () {
    var e = _dependency24.default.hasParam("gn") && _dependency24.default.hasParam("t"),
      t = _dependency24.default.hasParam("spinId");
    e ? _dependency23.default.setCurrentState(_dependency23.EStateMachineName.GAME_STATE) : t && _dependency23.default.setCurrentState(_dependency23.EStateMachineName.REPLAY_STATE);
  }, S.waitSocketConnected = function () {
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
  }(), _dependency.createClass(w, [{
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
  }]), w;
}(_dependency7.Entry));
_dependency2.cclegacy._RF.pop();
