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
import * as _dependency11 from "./g1011-RegisterCommands";
import * as _dependency12 from "./g1011-GameColor";
import * as _dependency13 from "./g1011-GameConfigModel";
import * as _dependency14 from "./g1011-GameData";
import * as _dependency15 from "./g1011-GameEvent";
import * as _dependency16 from "./g1011-GameHandler";
import * as _dependency17 from "./g1011-GameService";
import * as _dependency18 from "./g1011-GameView";
import * as _dependency19 from "./g1011-BigwinView";
import * as _dependency20 from "./g1011-WinView";
import * as _dependency21 from "../../shared/scripts/slotFramework-StakeBarView";
import * as _dependency22 from "./g1011-StateMachineManager";
import * as _dependency23 from "../../shared/scripts/main-UrlUtils";
import * as _dependency24 from "./g1011-ReplayUIViewP";
import * as _dependency25 from "../../shared/scripts/main-ServerModel";
import * as _dependency26 from "./g1011-StaticData";
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
var e, t, n, a, r, i, o, s, u, c, l, d, f, p, h, m, g, b, w, y, v, S, k, A, E, C, L, M, x, D, G, I, V, B, P, R, _, F, T, N;
var O;
_dependency2.cclegacy._RF.push({}, "cda2bMxyIhLH65q5R3VYU/r", "GameEntry", void 0);
_dependency8.registerEntry("GameEntry", _dependency4.EBundles[_dependency4.EBundles.g1011], _dependency18.default)(O = function (r) {
  var _nativeConstructor = b;
  function b() {
    for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
    return (e = Reflect.construct(r, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).color = new _dependency12.GameColor(), e;
  }
  _dependency.inheritsLoose(b, r);
  var w = b.prototype;
  return w.addNetHandler = function () {
    App.handlerManager.get(_dependency16.GameHandler);
  }, w.removeNetHandler = function () {}, w.loadResources = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      var n,
        r,
        i,
        l,
        d,
        f,
        p,
        m,
        b,
        w,
        y,
        v,
        k,
        A,
        E,
        L = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = _dependency13.default.getData().filePaths, r = n.symbolsSpriteFrame, i = n.symbolsSkeletonData, l = n.heavenlyTreasures, d = n.winCashPrefab, f = n.gameAlertsSkeletonData, p = n.spinSkeleton, m = n.common, b = n.localeSpriteFrame, w = n.font, y = n.symbolPrefab, v = n.jackpotSpineDir, k = n.expectSkeletonData, A = n.shiningSpriteFrame, E = n.wildFrameSpriteFrame, e.next = 3, this.setLoadingDataVO();
          case 3:
            this.loader.getLoadResources = function () {
              return [{
                preloadView: _dependency18.default,
                bundle: L.bundle
              }, {
                preloadView: _dependency19.BigwinView,
                bundle: L.bundle
              }, {
                preloadView: _dependency20.WinView,
                bundle: L.bundle
              }, {
                preloadView: _dependency21.StakeBarView,
                bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework]
              }, {
                preloadView: _dependency24.default,
                bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework]
              }, {
                dir: m,
                bundle: L.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: b,
                bundle: L.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: w,
                bundle: L.bundle,
                type: _dependency2.Font
              }, {
                dir: p,
                bundle: L.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: l,
                bundle: L.bundle,
                type: _dependency2.Prefab
              }, {
                dir: r,
                bundle: L.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: i,
                bundle: L.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: f,
                bundle: L.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: v,
                bundle: L.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: k,
                bundle: L.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: A,
                bundle: L.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: E,
                bundle: L.bundle,
                type: _dependency2.SpriteFrame
              }, {
                url: y,
                bundle: L.bundle,
                type: _dependency2.Prefab
              }, {
                url: d,
                bundle: L.bundle,
                type: _dependency2.Prefab
              }];
            }, this.loader.onLoadProgress = function (e, t, n) {
              App.gameLoading.setLoading(e, t, n);
            }, this.loader.onLoadComplete = function (e) {
              e === _dependency6.Resource.LoaderError.SUCCESS && (_dependency1.default.setComplete(_dependency4.EBundles[L.bundle]), t());
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
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            _dependency25.default.mode = _dependency25.EServerMode.ONLINE, Log.d("%c 𝗔𝗧𝗚 > gv " + this.data.GAME_VERSION + " - sv " + this.slotData.SLOT_VERSION + " ", "color:#ff0033;"), _dependency2.sys.isMobile && (_dependency2.macro.ENABLE_WEBGL_ANTIALIAS = !1), _dependency11.default.execute(), App.serviceManager.get(_dependency17.GameService, !0), e.next = 8;
            break;
          case 8:
            this.initColorModel(), this.initLanguage();
          case 10:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), w.initColorModel = function () {
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
            return this.initStateMachine(), e.next = 3, _dependency22.default.getMachine().startAsync();
          case 3:
            if (r.prototype.onEnter.call(this, t), Log.d("-------------- onEnterLogin --------------"), _dependency25.default.mode !== _dependency25.EServerMode.STATIC) {
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
            if (clearInterval(t), App.uiManager.open({
              type: this.gameViewType,
              bundle: this.bundle,
              args: n
            }), e.t0 = _dependency25.default.mode !== _dependency25.EServerMode.STATIC, !e.t0) {
              e.next = 11;
              break;
            }
            return e.next = 11, this.waitSocketConnected();
          case 11:
            dispatch(_dependency15.GameEvent.LOAD_COMPLETE);
          case 12:
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
      var t, n, r, i, s, u, c, l, d, p;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t = _dependency10.default.getLanguageParam(), n = "assets/texture/locale/" + t + "/L_ui_portrait_d/spriteFrame", e.next = 4, App.cache.getCacheByAsync(n, _dependency2.SpriteFrame, this.bundle);
          case 4:
            return r = e.sent, e.next = 7, App.cache.getCacheByAsync("assets/texture/common/loading-bar-bg/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 7:
            return i = e.sent, e.next = 10, App.cache.getCacheByAsync("assets/texture/common/loading-bar/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 10:
            return s = e.sent, u = _dependency10.default.getData().searchParams.l, e.next = 14, App.cache.getCacheByAsync("assets/texture/locale/" + u + "/l_font/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 14:
            c = e.sent, l = _dependency2.v3(0, -630, 0), d = {
              background: r,
              barFrame: null,
              bar: s,
              barbg: i,
              barLight: null,
              logo: null,
              startGame: c,
              progressBarPostion: l
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
  }(), w.serviceInit = function () {
    this.service.heartbeat = _dependency5.HeartbeatJson, this.service.maxEnterBackgroundTime = _dependency3.Config.MIN_INBACKGROUND_TIME, this.service.connect(), this.service.enabled = !0;
  }, w.initLanguage = function () {
    var e,
      t = null != (e = _dependency10.default.getData().searchParams) && e.l ? _dependency10.default.getData().searchParams.l : "zh-tw";
    App.language.change(t);
  }, w.initStateMachine = function () {
    var e = _dependency23.default.hasParam("gn") && _dependency23.default.hasParam("t"),
      t = _dependency23.default.hasParam("spinId");
    e ? _dependency22.default.setCurrentState(_dependency22.EStateMachineName.GAME_STATE) : t && _dependency22.default.setCurrentState(_dependency22.EStateMachineName.REPLAY_STATE);
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
  }(), _dependency.createClass(b, [{
    key: "service",
    get: function () {
      return App.serviceManager.get(_dependency17.GameService);
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
  }]), b;
}(_dependency7.Entry));
_dependency2.cclegacy._RF.pop();
