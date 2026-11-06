import "../../shared/scripts/main-Application";
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UrlUtils";
import * as _dependency4 from "../../shared/scripts/main-Config";
import * as _dependency5 from "../../shared/scripts/main-Bundles";
import * as _dependency6 from "../../shared/scripts/main-HeartbetJson";
import * as _dependency7 from "../../shared/scripts/main-Resource";
import * as _dependency8 from "../../shared/scripts/main-Entry";
import * as _dependency9 from "../../shared/scripts/main-Decorators";
import * as _dependency0 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency1 from "../../shared/scripts/slotFramework-ColorModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-ReadyBundleModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-UrlModel";
import * as _dependency14 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency15 from "../../shared/scripts/slotFramework-SlotTableViewL_v2";
import * as _dependency16 from "../../shared/scripts/slotFramework-SlotTableViewP";
import * as _dependency17 from "./g1009-RegisterNewCommands";
import * as _dependency18 from "./g1009-BigwinView";
import * as _dependency19 from "./g1009-BuyFeatureView";
import * as _dependency20 from "./g1009-IntroView";
import * as _dependency21 from "./g1009-GameColor";
import * as _dependency22 from "./g1009-GameConfigModel";
import * as _dependency23 from "./g1009-GameData";
import * as _dependency24 from "./g1009-GameLanguage";
import * as _dependency25 from "./g1009-GameHandler";
import * as _dependency26 from "./g1009-GameSender";
import * as _dependency27 from "./g1009-GameService";
import * as _dependency28 from "./g1009-GameView";
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
var e, t, n, a, r, i, s, o, u, l, c, d, p, f, g, b, m, h, y, w, v, A, S, C, k, x, M, L, D, B, P, G, I, V, E, F, R, _, T, O, U, N;
var H;
_dependency2.cclegacy._RF.push({}, "c377cr5gcNGs7F0q/XMrclI", "GameEntry", void 0);
_dependency9.registerEntry("GameEntry", App.dataCenter.get(_dependency23.default).module, _dependency28.default)(H = function (r) {
  var _nativeConstructor = w;
  function w() {
    for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
    return (e = Reflect.construct(r, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).language = new _dependency24.GameLanguage(), e.color = new _dependency21.GameColor(), e;
  }
  _dependency.inheritsLoose(w, r);
  var v = w.prototype;
  return v.addNetHandler = function () {
    App.handlerManager.get(_dependency25.GameHandler);
  }, v.removeNetHandler = function () {}, v.loadResources = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      var n,
        r,
        i,
        d,
        p,
        f,
        g,
        b,
        h,
        w,
        v,
        A,
        S,
        C,
        x,
        M,
        L,
        D,
        B,
        P,
        E = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = _dependency22.default.getData().filePaths, r = n.symbolsSpriteFrame, i = n.symbolPrefab, d = n.symbolsSkeletonData, p = n.winCashPrefab, f = n.fireBallPrefab, g = n.gameAlertsSkeletonData, b = n.spinSkeleton, h = n.common, w = n.localeSpriteFrame, v = n.font, A = n.timesMovingPrefab, S = n.transitionsSkeletonData, C = n.buyFeatureBtnPrefab, x = n.blueTimesMovingPrefab, M = n.purpleTimesMovingPrefab, L = n.splitBlueTimesMovingPrefab, D = n.buyFeatureItemPrefab, B = n.freeGameAlertViewPrefab, P = n.introSkeleton, n.testSpinDatas, n.testCloseSpinDatas, e.next = 3, this.setLoadingDataVO();
          case 3:
            this.loader.getLoadResources = function () {
              return [{
                preloadView: _dependency28.default,
                bundle: E.bundle
              }, {
                url: B,
                bundle: E.bundle,
                type: _dependency2.Prefab
              }, {
                url: i,
                bundle: E.bundle,
                type: _dependency2.Prefab
              }, {
                url: p,
                bundle: E.bundle,
                type: _dependency2.Prefab
              }, {
                url: f,
                bundle: E.bundle,
                type: _dependency2.Prefab
              }, {
                url: A,
                bundle: E.bundle,
                type: _dependency2.Prefab
              }, {
                url: x,
                bundle: E.bundle,
                type: _dependency2.Prefab
              }, {
                url: M,
                bundle: E.bundle,
                type: _dependency2.Prefab
              }, {
                url: L,
                bundle: E.bundle,
                type: _dependency2.Prefab
              }, {
                url: C,
                bundle: E.bundle,
                type: _dependency2.Prefab
              }, {
                dir: r,
                bundle: E.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: d,
                bundle: E.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: g,
                bundle: E.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: b,
                bundle: E.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: S,
                bundle: E.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: h,
                bundle: E.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: w,
                bundle: E.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: v,
                bundle: E.bundle,
                type: _dependency2.Font
              }, {
                dir: "assets/music/bgm",
                bundle: E.bundle,
                type: _dependency2.AudioClip
              }, {
                dir: "assets/music/btm",
                bundle: E.bundle,
                type: _dependency2.AudioClip
              }, {
                dir: P,
                bundle: E.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                url: D,
                bundle: E.bundle,
                type: _dependency2.Prefab
              }, {
                preloadView: _dependency20.IntroView,
                bundle: E.bundle
              }, {
                preloadView: _dependency19.BuyFeatureView,
                bundle: E.bundle
              }, {
                preloadView: _dependency18.BigwinView,
                bundle: E.bundle
              }];
            }, this.loader.onLoadProgress = function (e, t, n) {
              App.gameLoading.setLoading(e, t, n);
            }, this.loader.onLoadComplete = function (e) {
              _dependency7.Resource.LoaderError.SUCCESS && (_dependency11.default.setComplete(_dependency5.EBundles[E.bundle]), t());
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
  }(), v.initData = function () {
    Log.e(" 🐽🐽🐽 gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION + " 🐽🐽🐽 "), _dependency17.default.execute(), App.serviceManager.get(_dependency27.GameService, !0), this.initColorModel(), this.initLanguage();
  }, v.initColorModel = function () {
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
    _dependency1.default.setData(e);
  }, v.pauseMessageQueue = function () {}, v.resumeMessageQueue = function () {}, v.onEnter = function (e) {
    r.prototype.onEnter.call(this, e), Log.d("--------------onEnterLogin--------------"), this.serviceInit();
  }, v.openGameView = function (e) {
    var t = this,
      n = App.gameLoading,
      a = setInterval(function () {
        t.checkCompletion(a, e);
      }, 100);
    n.setMessage("gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION);
  }, v.onUnloadBundle = function () {
    r.prototype.onUnloadBundle.call(this);
  }, v.checkCompletion = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t, n) {
      var r,
        i = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (r = App.gameLoading, _dependency11.default.isComplete()) {
              e.next = 5;
              break;
            }
            return e.abrupt("return");
          case 5:
            return clearInterval(t), App.uiManager.open({
              type: this.gameViewType,
              bundle: this.bundle,
              args: n
            }), e.next = 10, this.waitSocketConnected();
          case 10:
            if (!_dependency3.default.hasParam("spinId")) {
              e.next = 18;
              break;
            }
            _dependency12.default.isReplay = !0, Log.d("hasReplayUrl", _dependency12.default.isReplay), App.senderManager.get(_dependency26.GameSender).replay(), r.complete(), e.next = 20;
            break;
          case 18:
            return e.next = 20, App.senderManager.get(_dependency26.GameSender).initial().then(function () {
              r.hideProgressBar(), r.hideGameLogo(), App.uiManager.open({
                type: _dependency20.IntroView,
                bundle: i.bundle,
                zIndex: _dependency4.ViewZOrder.UILoading,
                name: "Intro"
              });
              var e = _dependency10.default.getData().slotTablesOn,
                t = i.data.getData().isResuming,
                n = "1" === _dependency13.default.getData().searchParams.table;
              if (e && !t) {
                if (n) return;
                var a = _dependency14.CmmSlotUtils.getOrientationTarget(_dependency15.default, _dependency16.default);
                App.uiManager.open({
                  type: a,
                  bundle: _dependency5.EBundles[_dependency5.EBundles.slotFramework],
                  zIndex: _dependency4.ViewZOrder.UI,
                  name: "機台選擇",
                  args: !0
                });
              }
            });
          case 20:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t, n) {
      return e.apply(this, arguments);
    };
  }(), v.setLoadingDataVO = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      var t, n, r, i, s, l, c, g, b, m, h, y, w;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t = _dependency3.default.getViewModeParam(), n = _dependency13.default.getData().searchParams.l, r = App.gameLoading, e.next = 5, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_bg/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 5:
            return e.next = 7, e.sent;
          case 7:
            return i = e.sent, e.next = 10, App.cache.getCacheByAsync("assets/spine/" + t + "/loading/loading", _dependency2.sp.SkeletonData, this.bundle);
          case 10:
            return s = e.sent, e.next = 13, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_loading_frame/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 13:
            return l = e.sent, e.next = 16, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_loading_02/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 16:
            return c = e.sent, e.next = 19, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_loading_01/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 19:
            return g = e.sent, e.next = 22, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_loading_light/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 22:
            return b = e.sent, e.next = 25, App.cache.getCacheByAsync("assets/texture/locale/" + t + "/" + n + "/l_logo/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 25:
            return m = e.sent, e.next = 28, App.cache.getCacheByAsync("assets/texture/locale/" + t + "/" + n + "/l_font/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 28:
            h = e.sent, y = {
              background: i,
              spine: s,
              barFrame: l,
              bar: g,
              barbg: c,
              barLight: b,
              logo: m,
              startGame: h,
              spineBgScale: .5
            }, w = {
              alignMode: _dependency2.Widget.AlignMode.ALWAYS,
              left: 20,
              isAlignLeft: !0,
              isAlignTop: !0,
              top: 10
            }, r.setLogoWidget(w), r.setAtgLogoPosition(580, 290), r.setBarLightPositionY(3.5), r.setBarRealWidth(910), r.setMaskPos(_dependency2.v3(-460, 1, 0)), r.setData(y);
          case 37:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), v.serviceInit = function () {
    this.service.heartbeat = _dependency6.HeartbeatJson, this.service.maxEnterBackgroundTime = _dependency4.Config.MIN_INBACKGROUND_TIME, this.service.connect(), this.service.enabled = !0;
  }, v.initLanguage = function () {
    var e,
      t = null != (e = _dependency13.default.getData().searchParams) && e.l ? _dependency13.default.getData().searchParams.l : "zh-tw";
    App.language.change(t);
  }, v.waitSocketConnected = function () {
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
      return App.serviceManager.get(_dependency27.GameService);
    }
  }, {
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency23.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), w;
}(_dependency8.Entry));
_dependency2.cclegacy._RF.pop();
