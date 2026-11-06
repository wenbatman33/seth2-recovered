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
import * as _dependency1 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency10 from "../../shared/scripts/slotFramework-ColorModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-ReadyBundleModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency14 from "../../shared/scripts/slotFramework-UrlModel";
import * as _dependency15 from "../../shared/scripts/slotFramework-type2";
import * as _dependency16 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency17 from "../../shared/scripts/slotFramework-SlotTableViewL";
import * as _dependency18 from "../../shared/scripts/slotFramework-SlotTableViewL_v2";
import * as _dependency19 from "../../shared/scripts/slotFramework-SlotTableViewP";
import * as _dependency20 from "./g1001-RegisterNewCommands";
import * as _dependency21 from "./g1001-BigwinView";
import * as _dependency22 from "./g1001-BuyFeatureView";
import * as _dependency23 from "./g1001-IntroView";
import * as _dependency24 from "./g1001-TreasuresView";
import * as _dependency25 from "./g1001-GameColor";
import * as _dependency26 from "./g1001-GameConfigModel";
import * as _dependency27 from "./g1001-GameData";
import * as _dependency28 from "./g1001-GameLanguage";
import * as _dependency29 from "./g1001-GameHandler";
import * as _dependency30 from "./g1001-GameSender";
import * as _dependency31 from "./g1001-GameService";
import * as _dependency32 from "./g1001-GameView";
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
var e, t, n, a, r, o, i, s, u, l, c, d, p, f, g, b, m, h, y, w, v, A, S, L, k, C, x, D, M, E, P, B, _, I, F, V, G, R, T, O, U, N, H, z, W, Z;
var j;
_dependency2.cclegacy._RF.push({}, "24651MF5wpM+Y8jB1FsEFaR", "GameEntry", void 0);
_dependency9.registerEntry("GameEntry", _dependency5.EBundles[_dependency5.EBundles.g1001], _dependency32.default)(j = function (r) {
  var _nativeConstructor = y;
  function y() {
    for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
    return (e = Reflect.construct(r, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).language = new _dependency28.GameLanguage(), e.color = new _dependency25.GameColor(), e;
  }
  _dependency.inheritsLoose(y, r);
  var w = y.prototype;
  return w.addNetHandler = function () {
    App.handlerManager.get(_dependency29.GameHandler);
  }, w.removeNetHandler = function () {}, w.loadResources = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      var n,
        r,
        o,
        d,
        p,
        f,
        g,
        m,
        y,
        w,
        v,
        A,
        S,
        L,
        C,
        x,
        D,
        M,
        E = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = _dependency26.default.getData().filePaths, r = n.symbolsSpriteFrame, o = n.symbolPrefab, d = n.symbolsSkeletonData, p = n.winCashPrefab, f = n.fireBallPrefab, g = n.gameAlertsSkeletonData, m = n.spinSkeleton, y = n.common, w = n.localeSpriteFrame, v = n.font, A = n.timesMovingPrefab, S = n.transitionsSkeletonData, L = n.buyFeatureBtnPrefab, C = n.blueTimesMovingPrefab, x = n.purpleTimesMovingPrefab, D = n.symbolsSpriteFrameBlur, n.symbolsAtlas, n.symbolsBlurAtlas, M = n.introSkeleton, e.next = 3, this.setLoadingDataVO();
          case 3:
            this.loader.getLoadResources = function () {
              return [{
                preloadView: _dependency32.default,
                bundle: E.bundle
              }, {
                dir: r,
                bundle: E.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: D,
                bundle: E.bundle,
                type: _dependency2.SpriteFrame
              }, {
                url: o,
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
                url: C,
                bundle: E.bundle,
                type: _dependency2.Prefab
              }, {
                url: x,
                bundle: E.bundle,
                type: _dependency2.Prefab
              }, {
                url: L,
                bundle: E.bundle,
                type: _dependency2.Prefab
              }, {
                dir: d,
                bundle: E.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: g,
                bundle: E.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: m,
                bundle: E.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: S,
                bundle: E.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: M,
                bundle: E.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: y,
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
                url: _dependency26.EBTM.WIN_LOOP,
                bundle: E.bundle,
                type: _dependency2.AudioClip
              }, {
                url: _dependency26.EBTM.S_PRIZE_LOOP,
                bundle: E.bundle,
                type: _dependency2.AudioClip
              }, {
                url: _dependency26.EBTM.L_PRIZE_LOOP,
                bundle: E.bundle,
                type: _dependency2.AudioClip
              }, {
                preloadView: _dependency22.BuyFeatureView,
                bundle: E.bundle
              }, {
                preloadView: _dependency24.TreasuresView,
                bundle: E.bundle
              }, {
                preloadView: _dependency21.BigwinView,
                bundle: E.bundle
              }];
            }, this.loader.onLoadProgress = function (e, t, n) {
              App.gameLoading.setLoading(e, t, n);
            }, this.loader.onLoadComplete = function (e) {
              _dependency7.Resource.LoaderError.SUCCESS && (_dependency12.default.setComplete(_dependency5.EBundles[E.bundle]), t());
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
    Log.e(" 🐽🐽🐽 gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION + " 🐽🐽🐽 "), _dependency20.default.execute(), App.serviceManager.get(_dependency31.GameService, !0), this.initColorModel(), this.initLanguage();
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
    _dependency10.default.setData(e);
  }, w.pauseMessageQueue = function () {}, w.resumeMessageQueue = function () {}, w.onEnter = function (e) {
    r.prototype.onEnter.call(this, e), Log.d("--------------onEnterLogin--------------"), this.serviceInit();
  }, w.openGameView = function (e) {
    var t = this;
    App.gameLoading.setMessage("gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION);
    var n = setInterval(function () {
      t.checkCompletion(n, e);
    }, 100);
  }, w.onUnloadBundle = function () {
    r.prototype.onUnloadBundle.call(this);
  }, w.checkCompletion = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t, n) {
      var r,
        o = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (r = App.gameLoading, _dependency12.default.isComplete()) {
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
            _dependency13.default.isReplay = !0, Log.d("hasReplayUrl", _dependency13.default.isReplay), App.senderManager.get(_dependency30.GameSender).replay(), r.complete(), e.next = 20;
            break;
          case 18:
            return e.next = 20, App.senderManager.get(_dependency30.GameSender).initial().then(function () {
              r.hideProgressBar(), r.hideGameLogo(), App.uiManager.open({
                type: _dependency23.IntroView,
                bundle: o.bundle,
                zIndex: _dependency4.ViewZOrder.UILoading,
                name: "Intro"
              });
              var e = _dependency11.default.getData().slotTablesOn,
                t = o.data.getData().isResuming,
                n = "1" === _dependency14.default.getData().searchParams.table;
              if (e && !t) {
                if (n) return;
                var a = "egyptian-mythology" === _dependency3.default.getParam("gn") ? _dependency18.default : _dependency17.default,
                  i = _dependency16.CmmSlotUtils.getOrientationTarget(a, _dependency19.default);
                App.uiManager.open({
                  type: i,
                  bundle: _dependency5.EBundles[_dependency5.EBundles.slotFramework],
                  zIndex: _dependency4.ViewZOrder.UI,
                  name: "機台選擇",
                  args: !0
                });
              }
              dispatch(_dependency1.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                data: _dependency15.ESpinStatus.IDLE
              });
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
  }(), w.setLoadingDataVO = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      var t, n, r, o, s, l, c, f, g, b, m, h, y, w;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t = _dependency3.default.getViewModeParam(), r = _dependency14.default.getData().searchParams.l, e.next = 4, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_bg/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 4:
            return o = e.sent, e.next = 7, App.cache.getCacheByAsync("assets/texture/locale/" + t + "/" + r + "/l_font/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 7:
            return s = e.sent, e.next = 10, App.cache.getCacheByAsync("assets/texture/locale/" + t + "/" + r + "/l_logo/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 10:
            return l = e.sent, e.next = 13, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_loading_01/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 13:
            return c = e.sent, e.next = 16, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_loading_02/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 16:
            return f = e.sent, e.next = 19, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_loading_frame/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 19:
            return g = e.sent, e.next = 22, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_loading_light/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 22:
            if (b = e.sent, m = null, "landscape" != t) {
              e.next = 33;
              break;
            }
            return e.next = 27, App.cache.getCacheByAsync("assets/spine/" + t + "/loading/loading", _dependency2.sp.SkeletonData, this.bundle);
          case 27:
            h = e.sent, n = {
              background: o,
              spine: h,
              barFrame: g,
              bar: c,
              barbg: f,
              barLight: b,
              logo: l,
              startGame: s
            }, y = {
              left: 20,
              isAlignLeft: !0,
              isAlignTop: !0,
              top: 10
            }, App.gameLoading.setLogoWidget(y), e.next = 34;
            break;
          case 33:
            "portrait" == t && (n = {
              background: o,
              barFrame: g,
              bar: c,
              barbg: f,
              barLight: b,
              logo: l,
              startGame: s
            }, w = {
              bottom: 135,
              isAlignBottom: !0,
              isAlignHorizontalCenter: !0,
              horizontalCenter: 0
            }, App.gameLoading.setLogoWidget(w), m = {
              mask: _dependency2.v3(0, 0, 0)
            });
          case 34:
            App.gameLoading.setData(n, m);
          case 35:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), w.serviceInit = function () {
    this.service.heartbeat = _dependency6.HeartbeatJson, this.service.maxEnterBackgroundTime = _dependency4.Config.MIN_INBACKGROUND_TIME, this.service.connect(), this.service.enabled = !0;
  }, w.initLanguage = function () {
    var e,
      t = null != (e = _dependency14.default.getData().searchParams) && e.l ? _dependency14.default.getData().searchParams.l : "zh-tw";
    App.language.change(t);
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
      return App.serviceManager.get(_dependency31.GameService);
    }
  }, {
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency27.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }]), y;
}(_dependency8.Entry));
_dependency2.cclegacy._RF.pop();
