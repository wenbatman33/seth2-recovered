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
import * as _dependency11 from "./g1004-GameColor";
import * as _dependency12 from "./g1004-GameConfigModel";
import * as _dependency13 from "./g1004-GameData";
import * as _dependency14 from "./g1004-GameLanguage";
import * as _dependency15 from "./g1004-GameEvent";
import * as _dependency16 from "./g1004-GameHandler";
import * as _dependency17 from "./g1004-GameService";
import * as _dependency18 from "./g1004-GameView";
import * as _dependency19 from "../../shared/scripts/main-ServerModel";
import * as _dependency20 from "./g1004-DragonView";
import * as _dependency21 from "../../shared/scripts/slotFramework-StakeBarView";
import * as _dependency22 from "./g1004-FGTotalResultView";
import * as _dependency23 from "./g1004-BigWinShowView";
import * as _dependency24 from "./g1004-StateMachineManager";
import * as _dependency25 from "../../shared/scripts/main-UrlUtils";
import * as _dependency26 from "./g1004-ReplayUIViewP";
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
var e, t, n, a, r, o, i, s, u, l, c, d, p, f, g, m, h, b, y, w, S, v, A, k, C, D, x, E, L, M, G, V, B, _, F, R, I, T, P, N, O, H, U, W, j;
var J;
_dependency2.cclegacy._RF.push({}, "cda2bMxyIhLH65q5R3VYU/r", "GameEntry", void 0);
_dependency8.registerEntry("GameEntry", _dependency4.EBundles[_dependency4.EBundles.g1004], _dependency18.default)(J = function (r) {
  var _nativeConstructor = v;
  function v() {
    for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
    return (e = Reflect.construct(r, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).language = new _dependency14.GameLanguage(), e.color = new _dependency11.GameColor(), e;
  }
  _dependency.inheritsLoose(v, r);
  var A = v.prototype;
  return A.addNetHandler = function () {
    App.handlerManager.get(_dependency16.GameHandler);
  }, A.removeNetHandler = function () {}, A.initData = function () {
    _dependency19.default.mode = _dependency19.EServerMode.ONLINE, Log.d("%c 🐽🐽🐽 gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION + " 🐽🐽🐽 ", "color:#ff0000"), App.serviceManager.get(_dependency17.GameService, !0), _dependency2.game.frameRate = 60, this.initColorModel(), this.initLanguage();
  }, A.loadResources = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      var n,
        r,
        o,
        i,
        s,
        g,
        m,
        h,
        b,
        w,
        v,
        A,
        k,
        C,
        x,
        E,
        M,
        G,
        V,
        B,
        _,
        R = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = _dependency12.default.getData().filePaths, r = n.symbolsSpriteAtlas, o = n.symbolsSpriteBlurAtlas, n.symbolsBGAtlas, n.symbolsBlurBGAtlas, n.symbolsSpriteFrame, i = n.symbolsSkeletonData, s = n.frameSkeletonData, n.symbolsSpriteFrameBlur, g = n.gameAlertsSkeletonData, m = n.spinSkeleton, h = n.common, b = n.localeSpriteFrame, w = n.font, v = n.transitionsSkeletonData, A = n.lineSkeletonData, k = n.bgMgSkeletonData, C = n.bgFgSkeletonData, x = n.dragonSkeletonData, E = n.dragonPrefab, M = n.buyFeatureViewPrefab, G = n.luckyWealthViewPrefab, V = n.heavenlyTreasuresPrefab, B = n.jackpotGameViewPrefab, _ = n.music, App.gameLoading._show(), e.next = 4, this.setLoadingDataVO();
          case 4:
            this.loader.getLoadResources = function () {
              return [{
                url: r,
                bundle: R.bundle,
                type: _dependency2.SpriteAtlas
              }, {
                url: o,
                bundle: R.bundle,
                type: _dependency2.SpriteAtlas
              }, {
                preloadView: _dependency18.default,
                bundle: R.bundle
              }, {
                preloadView: _dependency23.BigWinShowView,
                bundle: R.bundle
              }, {
                preloadView: _dependency22.FGTotalResultView,
                bundle: R.bundle
              }, {
                preloadView: _dependency20.default,
                bundle: R.bundle
              }, {
                preloadView: _dependency21.StakeBarView,
                bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework]
              }, {
                preloadView: _dependency26.default,
                bundle: _dependency4.EBundles[_dependency4.EBundles.slotFramework]
              }, {
                dir: h,
                bundle: R.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: b,
                bundle: R.bundle,
                type: _dependency2.SpriteFrame
              }, {
                dir: w,
                bundle: R.bundle,
                type: _dependency2.Font
              }, {
                dir: m,
                bundle: R.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: i,
                bundle: R.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: s,
                bundle: R.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: A,
                bundle: R.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: k,
                bundle: R.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: C,
                bundle: R.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: g,
                bundle: R.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: v,
                bundle: R.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                dir: x,
                bundle: R.bundle,
                type: _dependency2.sp.SkeletonData
              }, {
                url: E,
                bundle: R.bundle,
                type: _dependency2.Prefab
              }, {
                url: M,
                bundle: R.bundle,
                type: _dependency2.Prefab
              }, {
                url: G,
                bundle: R.bundle,
                type: _dependency2.Prefab
              }, {
                url: V,
                bundle: R.bundle,
                type: _dependency2.Prefab
              }, {
                url: B,
                bundle: R.bundle,
                type: _dependency2.Prefab
              }, {
                dir: _,
                bundle: R.bundle,
                type: _dependency2.AudioClip
              }];
            }, this.loader.onLoadProgress = function (e, t, n) {
              App.gameLoading.setLoading(e, t, n);
            }, this.loader.onLoadComplete = function (e) {
              _dependency6.Resource.LoaderError.SUCCESS && (_dependency1.default.setComplete(_dependency4.EBundles[R.bundle]), t());
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
  }(), A.initColorModel = function () {
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
  }, A.pauseMessageQueue = function () {}, A.resumeMessageQueue = function () {}, A.onEnter = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return this.initStateMachine(), e.next = 3, _dependency24.default.getMachine().startAsync();
          case 3:
            if (r.prototype.onEnter.call(this, t), Log.d("--------------onEnterLogin--------------"), _dependency19.default.mode !== _dependency19.EServerMode.STATIC) {
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
  }(), A.openGameView = function (e) {
    var t = this,
      n = App.gameLoading;
    n.setMessage("gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION), n.message.color = new _dependency2.Color(99, 99, 99, 153), n.message.getComponent(_dependency2.Widget).right = 20;
    var a = setInterval(function () {
      t.checkCompletion(a, e);
    }, 100);
  }, A.onUnloadBundle = function () {
    r.prototype.onUnloadBundle.call(this);
  }, A.checkCompletion = function () {
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
            }), e.t0 = _dependency19.default.mode !== _dependency19.EServerMode.STATIC, !e.t0) {
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
  }(), A.setLoadingDataVO = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      var t, n, r, o, i, s, u, c, p, f, b, y, w, S;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, App.cache.getCacheByAsync("assets/texture/common/l_bg/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 2:
            return t = e.sent, e.next = 5, App.cache.getCacheByAsync("assets/texture/common/l_loading_frame/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 5:
            return n = e.sent, e.next = 8, App.cache.getCacheByAsync("assets/texture/common/l_loading_start/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 8:
            return r = e.sent, e.next = 11, App.cache.getCacheByAsync("assets/texture/common/l_loading_01/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 11:
            return o = e.sent, e.next = 14, App.cache.getCacheByAsync("assets/texture/common/l_loading_light/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 14:
            return i = e.sent, s = _dependency10.default.getData().searchParams.l, e.next = 18, App.cache.getCacheByAsync("assets/texture/locale/" + s + "/l_logo/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 18:
            return u = e.sent, e.next = 21, App.cache.getCacheByAsync("assets/texture/locale/" + s + "/l_font/spriteFrame", _dependency2.SpriteFrame, this.bundle);
          case 21:
            return c = e.sent, e.next = 24, App.cache.getCacheByAsync("assets/spine/loading/loading", _dependency2.sp.SkeletonData, this.bundle);
          case 24:
            p = e.sent, f = {
              loadingSpineAnimName: "loop",
              background: t,
              spine: p,
              barFrame: null,
              bar: o,
              barbg: n,
              barLight: i,
              logo: u,
              startGame: c
            }, b = {
              mask: _dependency2.v3(2, 1)
            }, (y = App.gameLoading).setData(f, b), y.barLight.active = !1, y.percentText.node.active = !1, w = {
              top: 832,
              right: 116,
              isAlignTop: !0,
              isAlignRight: !0
            }, y.setLogoWidget(w), (S = new _dependency2.Node()).parent = y.frame, S.addComponent(_dependency2.Sprite).spriteFrame = r;
          case 37:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), A.serviceInit = function () {
    this.service.heartbeat = _dependency5.HeartbeatJson, this.service.maxEnterBackgroundTime = _dependency3.Config.MIN_INBACKGROUND_TIME, this.service.connect(), this.service.enabled = !0;
  }, A.initLanguage = function () {
    var e,
      t = null != (e = _dependency10.default.getData().searchParams) && e.l ? _dependency10.default.getData().searchParams.l : "zh-tw";
    App.language.change(t);
  }, A.waitSocketConnected = function () {
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
  }(), A.initStateMachine = function () {
    var e = _dependency25.default.hasParam("gn") && _dependency25.default.hasParam("t"),
      t = _dependency25.default.hasParam("spinId");
    e ? _dependency24.default.setCurrentState(_dependency24.EStateMachineName.GAME_STATE) : t && _dependency24.default.setCurrentState(_dependency24.EStateMachineName.REPLAY_STATE);
  }, _dependency.createClass(v, [{
    key: "service",
    get: function () {
      return App.serviceManager.get(_dependency17.GameService);
    }
  }, {
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency13.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), v;
}(_dependency7.Entry));
_dependency2.cclegacy._RF.pop();
