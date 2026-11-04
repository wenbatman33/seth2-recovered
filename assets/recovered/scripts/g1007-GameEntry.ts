// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/GameEntry.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-UrlUtils";
import * as __dependency_3 from "./main-Config";
import * as __dependency_4 from "./main-Bundles";
import * as __dependency_5 from "./main-HeartbetJson";
import * as __dependency_6 from "./main-Resource";
import * as __dependency_7 from "./main-Entry";
import * as __dependency_8 from "./main-Decorators";
import * as __dependency_9 from "./framework-SlotFrameworkData";
import * as __dependency_10 from "./framework-ColorModel";
import * as __dependency_11 from "./framework-ReadyBundleModel";
import * as __dependency_12 from "./framework-UrlModel";
import * as __dependency_13 from "./g1007-FullCharacterView";
import * as __dependency_14 from "./g1007-IntroView";
import * as __dependency_15 from "./g1007-ReplayUIViewL";
import * as __dependency_16 from "./g1007-GameColor";
import * as __dependency_17 from "./g1007-GameConfigModel";
import * as __dependency_18 from "./g1007-GameData";
import * as __dependency_19 from "./g1007-GameLanguage";
import * as __dependency_20 from "./g1007-GameEvent";
import * as __dependency_21 from "./g1007-GameHandler";
import * as __dependency_22 from "./g1007-GameService";
import * as __dependency_23 from "./g1007-StateMachineManager";
import * as __dependency_24 from "./g1007-GameView";
import * as __dependency_25 from "./main-ServerModel";
import * as __dependency_26 from "./main-TimeManager";
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, t, n, a, r, o, s, i, c, u, l, d, p, f, g, h, m, b, y, w, v, S, A, C, k, x, E, M, L, D, G, _, I, P, B, T, V, F, R;
var N;
__dependency_1.cclegacy._RF.push({}, "43b19xVvCNOMpxQT179U2cK", "GameEntry", void 0);
__dependency_8.registerEntry("GameEntry", __dependency_4.EBundles[__dependency_4.EBundles.g1007], __dependency_24.default)(N = function (r) {
  function b() {
    for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
    return (e = Reflect.construct(r, [this].concat(n).slice(1), new.target || this.constructor) || this).language = new __dependency_19.GameLanguage(), e.color = new __dependency_16.GameColor(), e;
  }
  __dependency_0.inheritsLoose(b, r);
  var y = b.prototype;
  return y.addNetHandler = function () {
    App.handlerManager.get(__dependency_21.GameHandler);
  }, y.removeNetHandler = function () {}, y.loadResources = function () {
    var e = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e(t) {
      var n,
        r,
        o,
        d,
        p,
        f,
        h,
        b,
        y,
        w,
        v,
        A = this;
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = App.gameLoading, r = __dependency_17.default.getData().filePaths, o = r.symbolsSpriteFrame, d = r.spinSkeleton, p = r.common, f = r.localeSpriteFrame, h = r.font, r.transitionsSkeletonData, b = r.symbolPrefab, r.jpSummarySkeletonData, y = r.normalSymbolsSkeletonData, w = r.groupSymbolsSkeletonData, r.backgroundSkeletonData, v = r.bgm, r.btm, e.next = 4, this.setLoadingDataVO();
          case 4:
            this.loader.getLoadResources = function () {
              return [{
                preloadView: __dependency_24.default,
                bundle: A.bundle
              }, {
                dir: p,
                bundle: A.bundle,
                type: __dependency_1.SpriteFrame
              }, {
                dir: f,
                bundle: A.bundle,
                type: __dependency_1.SpriteFrame
              }, {
                dir: h,
                bundle: A.bundle,
                type: __dependency_1.Font
              }, {
                dir: d,
                bundle: A.bundle,
                type: __dependency_1.sp.SkeletonData
              }, {
                dir: o,
                bundle: A.bundle,
                type: __dependency_1.SpriteFrame
              }, {
                dir: y,
                bundle: A.bundle,
                type: __dependency_1.sp.SkeletonData
              }, {
                dir: w,
                bundle: A.bundle,
                type: __dependency_1.sp.SkeletonData
              }, {
                dir: v,
                bundle: A.bundle,
                type: __dependency_1.AudioClip
              }, {
                preloadView: __dependency_13.FullCharacterView,
                bundle: A.bundle
              }, {
                preloadView: __dependency_14.IntroView,
                bundle: A.bundle
              }, {
                preloadView: __dependency_15.default,
                bundle: __dependency_4.EBundles[__dependency_4.EBundles.slotFramework]
              }, {
                url: b,
                bundle: A.bundle,
                type: __dependency_1.Prefab
              }];
            }, this.loader.onLoadProgress = function (e, t, a) {
              n.setLoading(e, t, a);
            }, this.loader.onLoadComplete = function (e) {
              __dependency_6.Resource.LoaderError.SUCCESS && (__dependency_11.default.setComplete(__dependency_4.EBundles[A.bundle]), t());
            }, this.loader.loadResources();
          case 8:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), y.initData = function () {
    __dependency_25.default.mode = __dependency_25.EServerMode.ONLINE, Log.d("%c 🐽🐽🐽 gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION + " 🐽🐽🐽 ", "color:#ff0000"), App.serviceManager.get(__dependency_22.GameService, !0), __dependency_26.TimeManager.instance.resetSpeed = 1.2, __dependency_26.TimeManager.instance.reset(), this.initColorModel(), this.initLanguage();
  }, y.initColorModel = function () {
    var e = {
      mainGame: {
        auxiliary: new __dependency_1.Color("#4e3487"),
        main: new __dependency_1.Color("#ab84ff"),
        mainHover: new __dependency_1.Color("#896acc"),
        topbar: new __dependency_1.Color(42, 26, 77, 209.1)
      },
      record: {
        5: new __dependency_1.Color(255, 255, 255, 12.75),
        10: new __dependency_1.Color(255, 255, 255, 255 * .24)
      },
      background: {
        0: new __dependency_1.Color("#c9c9cc"),
        20: new __dependency_1.Color("#a9a9ad"),
        40: new __dependency_1.Color("#88898e"),
        60: new __dependency_1.Color("#68696f"),
        80: new __dependency_1.Color("#474951"),
        100: new __dependency_1.Color("#272932")
      },
      white: {
        info01: new __dependency_1.Color("#ffffff"),
        default01: new __dependency_1.Color(255, 255, 255, 38.25),
        default02: new __dependency_1.Color(255, 255, 255, 255 * .24),
        hover01: new __dependency_1.Color(255, 255, 255, 76.5),
        hover02: new __dependency_1.Color(255, 255, 255, 255 * .08),
        labelDefault01: new __dependency_1.Color(255, 255, 255, 153),
        textAuto01: new __dependency_1.Color("#ffffff")
      },
      red: {
        primary: new __dependency_1.Color("#ff6433")
      },
      green: {
        primary: new __dependency_1.Color("#3ae300")
      },
      yellow: {
        primary: new __dependency_1.Color("#ffd680"),
        secondary: new __dependency_1.Color(255, 168, 0, 76.5)
      }
    };
    __dependency_10.default.setData(e);
  }, y.pauseMessageQueue = function () {}, y.resumeMessageQueue = function () {}, y.onEnter = function () {
    var e = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e(t) {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return this.initStateMachine(), e.next = 3, __dependency_23.default.getMachine().startAsync();
          case 3:
            if (r.prototype.onEnter.call(this, t), Log.d("--------------onEnterLogin--------------"), __dependency_25.default.mode !== __dependency_25.EServerMode.STATIC) {
              e.next = 8;
              break;
            }
            return e.abrupt("return");
          case 8:
            this.serviceInit();
          case 9:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), y.openGameView = function (e) {
    var t = this,
      n = App.gameLoading,
      a = setInterval(function () {
        t.checkCompletion(a, e);
      }, 100);
    n.setMessage("gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION);
  }, y.onUnloadBundle = function () {
    r.prototype.onUnloadBundle.call(this);
  }, y.checkCompletion = function () {
    var e = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e(t, n) {
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (App.gameLoading, __dependency_11.default.isComplete()) {
              e.next = 5;
              break;
            }
            return e.abrupt("return");
          case 5:
            if (clearInterval(t), App.uiManager.open({
              type: this.gameViewType,
              bundle: this.bundle,
              args: n
            }), e.t0 = __dependency_25.default.mode !== __dependency_25.EServerMode.STATIC, !e.t0) {
              e.next = 12;
              break;
            }
            return e.next = 12, this.waitSocketConnected();
          case 12:
            dispatch(__dependency_20.GameEvent.LOAD_COMPLETE);
          case 13:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t, n) {
      return e.apply(this, arguments);
    };
  }(), y.setLoadingDataVO = function () {
    var e = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      var t, n, r, o, i, u, l, p, f, g, h;
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t = __dependency_12.default.getData().searchParams.l, e.next = 3, App.cache.getCacheByAsync("assets/texture/common/l_bg/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 3:
            return n = e.sent, e.next = 6, App.cache.getCacheByAsync("assets/spine/loading/loading_pc", __dependency_1.sp.SkeletonData, this.bundle);
          case 6:
            return r = e.sent, e.next = 9, App.cache.getCacheByAsync("assets/texture/common/l_loading_frame/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 9:
            return o = e.sent, e.next = 12, App.cache.getCacheByAsync("assets/texture/common/l_loading_02/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 12:
            return i = e.sent, e.next = 15, App.cache.getCacheByAsync("assets/texture/common/l_loading_01/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 15:
            return u = e.sent, e.next = 18, App.cache.getCacheByAsync("assets/texture/common/l_loading_light/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 18:
            return l = e.sent, e.next = 21, App.cache.getCacheByAsync("assets/texture/locale/" + t + "/l_logo/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 21:
            return p = e.sent, e.next = 24, App.cache.getCacheByAsync("assets/texture/locale/" + t + "/l_font/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 24:
            f = e.sent, g = App.gameLoading, h = {
              background: n,
              spine: r,
              barFrame: o,
              bar: u,
              barbg: i,
              barLight: l,
              logo: p,
              startGame: f,
              spineBgScale: .5
            }, g.setPercentTextPos(__dependency_1.v3(389, 6, 0)), g.setProgressBarPosition(__dependency_1.v3(0, -290, 0)), g.setBarSpinePosition(__dependency_1.v3(10, -282, 0)), g.setStartGamePosition(__dependency_1.v3(0, -290, 0)), g.setLogoPosition(__dependency_1.v3(0, -150, 0)), g.setBarRealWidth(828), g.setData(h);
          case 34:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), y.serviceInit = function () {
    this.service.heartbeat = __dependency_5.HeartbeatJson, this.service.maxEnterBackgroundTime = __dependency_3.Config.MIN_INBACKGROUND_TIME, this.service.connect(), this.service.enabled = !0;
  }, y.initLanguage = function () {
    var e,
      t = null != (e = __dependency_12.default.getData().searchParams) && e.l ? __dependency_12.default.getData().searchParams.l : "zh-tw";
    App.language.change(t);
  }, y.initStateMachine = function () {
    var e = __dependency_2.default.hasParam("gn") && __dependency_2.default.hasParam("t"),
      t = __dependency_2.default.hasParam("spinId");
    e ? __dependency_23.default.setCurrentState(__dependency_23.EStateMachineName.GAME_STATE) : t && __dependency_23.default.setCurrentState(__dependency_23.EStateMachineName.REPLAY_STATE);
  }, y.waitSocketConnected = function () {
    var e = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function e() {
      var t = this;
      return __dependency_0.regeneratorRuntime().wrap(function (e) {
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
  }(), __dependency_0.createClass(b, [{
    key: "service",
    get: function () {
      return App.serviceManager.get(__dependency_22.GameService);
    }
  }, {
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_18.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_9.default);
    }
  }]), b;
}(__dependency_7.Entry));
__dependency_1.cclegacy._RF.pop();
