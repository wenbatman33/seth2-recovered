// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1012-GameData";
import * as _dependency6 from "./g1012-GameEvent";
import * as _dependency7 from "./g1012-types";
import * as _dependency8 from "./g1012-ThisProjectUtils";
import * as _dependency9 from "../../shared/scripts/main-Bundles";
import * as _dependency0 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency1 from "./g1012-GameConfigModel";
import * as _dependency10 from "./g1012-GameTempo";
var _export;
export { _export as CharacterView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CharacterView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, r, a, o, s, c, u, l, p, _, h, f, m, g, A, C, S, O, T, d, W, y, E, P;
var L, M, b, G, N, I, v, w, R, B, H, k, F, V, D, x, U;
_dependency2.cclegacy._RF.push({}, "c90bcpHRpxMfZzrAv1ltWSw", "CharacterView", void 0);
var z = _dependency2._decorator.ccclass,
  Y = _dependency2._decorator.property;
_publish("CharacterView", (L = z("CharacterView"), M = _dependency4.inject("mainContent", _dependency2.Node), b = _dependency4.inject("mainContent/mgWinCharacter", _dependency2.sp.Skeleton), G = _dependency4.inject("mainContent/mgLogo", _dependency2.Sprite), N = _dependency4.inject("freeContent", _dependency2.Node), I = _dependency4.inject("freeContent/fgVampire", _dependency2.sp.Skeleton), v = _dependency4.inject("freeContent/fgBat", _dependency2.sp.Skeleton), L(((U = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "mainContent", B, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "mgWinCharacter", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "mgLogo", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "freeContent", F, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgVampire", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgBat", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "isTest", x, _dependency.assertThisInitialized(e)), e.stopAnim = !1, e.passSound = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var c = e.prototype;
  return c.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, c.start = function () {
    this.init();
  }, c.update = function (t) {
    this.isTest && (this.isTest = !1, this.playMgCharacterAnimWin());
  }, c.onDestroy = function () {
    this.removeEvents();
  }, c.init = function () {
    var t = this.data.currentGameType === _dependency7.EGameType.MAIN_GAME;
    this.changeModel(t), this.loadLogo();
  }, c.playMoveLogo = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(n, i, r) {
      var a;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            a = _dependency2.Vec3.ZERO, t.t0 = n, t.next = 0 === t.t0 ? 4 : 1 === t.t0 ? 6 : 2 === t.t0 ? 8 : 10;
            break;
          case 4:
            return a = i ? e.POS_LOGO : e.POS_LOGO_WIN_A, t.abrupt("break", 10);
          case 6:
            return a = i ? e.POS_LOGO : e.POS_LOGO_WIN_B, t.abrupt("break", 10);
          case 8:
            return a = i ? e.POS_LOGO : e.POS_LOGO_WIN_C, t.abrupt("break", 10);
          case 10:
            return t.next = 12, _dependency8.ThisProjectUtils.tweenPromise(this.mgLogo.node, _dependency10.GameTempo.MG_CHARACTER_MOVE_TIME, {
              position: a
            }, {
              onComplete: function () {
                r && r();
              }
            });
          case 12:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e, n, i) {
      return t.apply(this, arguments);
    };
  }(), c.playMgCharacterAnimWin = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var n,
        i,
        r,
        a,
        o,
        c = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            n = Math.floor(3 * Math.random()), _dependency2.Tween.stopAllByTarget(this), _dependency2.Tween.stopAllByTarget(this.mgLogo.node), _dependency2.Tween.stopAllByTarget(this.mgWinCharacter.node), i = "", r = "", a = _dependency2.Vec3.ZERO, o = _dependency2.Vec3.ZERO, t.t0 = n, t.next = 0 === t.t0 ? 11 : 1 === t.t0 ? 18 : 2 === t.t0 ? 25 : 32;
            break;
          case 11:
            return i = "win_A", r = _dependency1.EBTM.MAIN_CHARACTER_WIN_A, a = e.POS_WIN_SHOW, o = e.POS_WIN_A, this.mgWinCharacter.node.setPosition(e.POS_WIN_A), this.mgLogo.node.setPosition(e.POS_LOGO), t.abrupt("break", 32);
          case 18:
            return i = "win_B", r = _dependency1.EBTM.MAIN_CHARACTER_WIN_B, a = e.POS_WIN_SHOW, o = e.POS_WIN_B, this.mgWinCharacter.node.setPosition(e.POS_WIN_B), this.mgLogo.node.setPosition(e.POS_LOGO), t.abrupt("break", 32);
          case 25:
            return i = "win_C", r = _dependency1.EBTM.MAIN_CHARACTER_WIN_C, a = e.POS_WIN_SHOW, o = e.POS_WIN_C, this.mgWinCharacter.node.setPosition(e.POS_WIN_C), this.mgLogo.node.setPosition(e.POS_LOGO), t.abrupt("break", 32);
          case 32:
            this.playMoveLogo(n, !1, function () {
              _dependency8.ThisProjectUtils.tweenPromise(c.mgWinCharacter.node, _dependency10.GameTempo.MG_CHARACTER_MOVE_TIME, {
                position: a
              }), dispatch(_dependency6.GameEvent.PLAY_BTM, {
                data: {
                  url: r
                }
              }), _dependency8.ThisProjectUtils.playSpineAnimationPromise(c.mgWinCharacter, i), _dependency2.tween(c).bindNodeState(false).delay(_dependency10.GameTempo.MG_CHARACTER_DELAY_TIME).call(function () {
                _dependency8.ThisProjectUtils.tweenPromise(c.mgWinCharacter.node, _dependency10.GameTempo.MG_CHARACTER_MOVE_TIME, {
                  position: o
                }), c.playMoveLogo(n, !0);
              }).start();
            });
          case 33:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), c.playFgCharacterAnimWin = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e, n, i;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e = Math.floor(2 * Math.random()), n = "", i = "", t.t0 = e, t.next = 0 === t.t0 ? 6 : 1 === t.t0 ? 9 : 12;
            break;
          case 6:
            return n = "hit", i = _dependency1.EBTM.FREE_CHARACTER_WIN_A, t.abrupt("break", 12);
          case 9:
            return n = "hurt", i = _dependency1.EBTM.FREE_CHARACTER_WIN_B, t.abrupt("break", 12);
          case 12:
            return this.fgVampire.setCompleteListener(null), this.fgVampire.setEventListener(null), this.fgVampire.clearTracks(), this.fgVampire.setToSetupPose(), console.log("[Tony][Debug] playFgCharacterAnimWin - animName : " + n), dispatch(_dependency6.GameEvent.PLAY_BTM, {
              data: {
                url: i
              }
            }), t.next = 20, _dependency8.ThisProjectUtils.playSpineAnimationPromise(this.fgVampire, n);
          case 20:
            this.playFgCharacterAnimLoop();
          case 21:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), c.playFgCharacterAnimLoop = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e,
        n,
        i,
        r = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e = Math.floor(2 * Math.random()), n = "", i = "", t.t0 = e, t.next = 0 === t.t0 ? 6 : 1 === t.t0 ? 9 : 12;
            break;
          case 6:
            return n = "loop_A", i = null, t.abrupt("break", 12);
          case 9:
            return n = "loop_B", i = _dependency1.EBTM.FREE_CHARACTER_LAUGH, t.abrupt("break", 12);
          case 12:
            null === i || this.passSound || dispatch(_dependency6.GameEvent.PLAY_BTM, {
              data: {
                url: i
              }
            }), _dependency8.ThisProjectUtils.playSpineAnimation(this.fgVampire, n, !1, function () {
              r.fgVampire.setCompleteListener(null), null !== i && dispatch(_dependency6.GameEvent.STOP_BTM, {
                data: {
                  url: i
                }
              }), r.stopAnim || r.playFgCharacterAnimLoop();
            });
          case 14:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), c.playFGBatAnime = function () {
    _dependency8.ThisProjectUtils.playSpineAnimation(this.fgBat, "transitions_in&out");
  }, c.changeModel = function (t) {
    this.reset(), this.mainContent.active = t, this.freeContent.active = !t, this.stopAnim = !1, t || (this.playFGBatAnime(), this.playFgCharacterAnimLoop());
  }, c.reset = function () {
    this.mgWinCharacter.clearTracks(), this.mgWinCharacter.setToSetupPose(), this.mgWinCharacter.node.position = e.POS_WIN_A, this.mgLogo.node.position = e.POS_LOGO, this.fgVampire.clearTracks(), this.fgVampire.setToSetupPose(), this.fgBat.clearTracks(), this.fgBat.setToSetupPose();
  }, c.loadLogo = function () {
    var t = _dependency1.default.getData().filePaths.localeSpriteFrame;
    console.log("[Tony][Debug] localeSpriteFrame - " + t), this.mgLogo.spriteFrame = _dependency0.LoadUtils.getDirSp(_dependency9.EBundles[_dependency9.EBundles.g1012], t, "A_logo");
  }, c.setData = function (t) {}, c.show = function () {
    this.node.active = !0;
  }, c.hide = function () {
    this.node.active = !1;
  }, c.addEvents = function () {
    var t = this;
    this.on(_dependency6.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.changeModel(e.data);
    }), this.on(_dependency6.GameEvent.SHOW_CHARACTER_WIN, function (e) {
      console.log("[Tony][Debug] SHOW_WIN_SUMMARY - currentGameType : " + t.data.currentGameType), t.data.currentGameType === _dependency7.EGameType.MAIN_GAME ? t.playMgCharacterAnimWin() : t.playFgCharacterAnimWin();
    }), this.on(_dependency6.GameEvent.SHOW_FG_SUMMARY_ALERT_STATE, function (e) {
      t.stopAnim = !0, t.playFGBatAnime();
    }), this.on(_dependency6.GameEvent.SHOW_WIN, function (e) {
      t.passSound = !0;
    }), this.on(_dependency6.GameEvent.CHANGE_FG_SPIN_STATE, function (e) {
      t.passSound = !1;
    }), this.on(_dependency6.GameEvent.UNIT_TEST, function (e) {
      t.isTest = !0;
    });
  }, c.removeEvents = function () {
    this.off(_dependency6.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency6.GameEvent.SHOW_WIN_SUMMARY), this.off(_dependency6.GameEvent.SHOW_FG_SUMMARY_ALERT_STATE), this.off(_dependency6.GameEvent.SHOW_WIN), this.off(_dependency6.GameEvent.CHANGE_FG_SPIN_STATE), this.off(_dependency6.GameEvent.UNIT_TEST);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}(_dependency3.default)).POS_LOGO = new _dependency2.Vec3(0, 480, 0), U.POS_LOGO_WIN_A = new _dependency2.Vec3(0, 0, 0), U.POS_LOGO_WIN_B = new _dependency2.Vec3(-720, 480, 0), U.POS_LOGO_WIN_C = new _dependency2.Vec3(720, 480, 0), U.POS_WIN_SHOW = new _dependency2.Vec3(0, 200, 0), U.POS_WIN_A = new _dependency2.Vec3(0, -300, 0), U.POS_WIN_B = new _dependency2.Vec3(720, 180, 0), U.POS_WIN_C = new _dependency2.Vec3(-720, 180, 0), B = _dependency.applyDecoratedDescriptor((R = U).prototype, "mainContent", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(R.prototype, "mgWinCharacter", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(R.prototype, "mgLogo", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(R.prototype, "freeContent", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(R.prototype, "fgVampire", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(R.prototype, "fgBat", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(R.prototype, "isTest", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), w = R)) || w));
_dependency2.cclegacy._RF.pop();
