// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-CmmUtils";
import * as _dependency4 from "../../shared/scripts/main-EventComponent";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "./g1002-GameConfigModel";
import * as _dependency7 from "./g1002-GameData";
import * as _dependency8 from "./g1002-GameEvent";
import * as _dependency9 from "./g1002-types";
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
var e, n, a, o, r, i, s, c, C, h, f, l, u, T, A, _, m, p, d, g;
var S, w, L, O, N, y, M, v, G, E, I, P, F, H, Y, R, b;
_dependency2.cclegacy._RF.push({}, "c90bcpHRpxMfZzrAv1ltWSw", "CharacterView", void 0);
var B,
  W,
  k = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t.WIN = "win", t.LOOP = "loop";
}(B || (B = {})), function (t) {
  t.ACT = "act", t.ACT_LONG = "act_2", t.IDLE = "idle";
}(W || (W = {}));
_publish("CharacterView", (S = k("CharacterView"), w = _dependency5.inject("mainContent", _dependency2.Node), L = _dependency5.inject("mainContent/twoCharacter", _dependency2.sp.Skeleton), O = _dependency5.inject("mainContent/sonCharacter", _dependency2.sp.Skeleton), N = _dependency5.inject("freeContent", _dependency2.Node), y = _dependency5.inject("freeContent/fgSonCharacter", _dependency2.sp.Skeleton), M = _dependency5.inject("freeContent/fgTwoCharacter", _dependency2.sp.Skeleton), v = _dependency5.inject("freeContent/fgSonFlame", _dependency2.sp.Skeleton), S((I = _dependency.applyDecoratedDescriptor((E = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "mainContent", I, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "twoCharacter", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "sonCharacter", F, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "freeContent", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgSonCharacter", Y, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgTwoCharacter", R, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgSonFlame", b, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var i = e.prototype;
  return i.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, i.start = function () {
    this.init();
  }, i.onDestroy = function () {
    this.removeEvents();
  }, i.init = function () {
    var t = this.data.currentGameType === _dependency9.EGameType.MAIN_GAME;
    this.changeModel(t), _dependency6.default.useProEffect;
  }, i.playTwoCharacterAnim = function (t, e) {
    var n = this;
    this.twoCharacter.node.setSiblingIndex(1), this.twoCharacter.clearTracks(), this.twoCharacter.setToSetupPose(), this.twoCharacter.setCompleteListener(null), this.twoCharacter.setAnimation(0, t, e), this.twoCharacter.setCompleteListener(function () {
      n.twoCharacter.animation === B.WIN && n.twoCharacter.setAnimation(0, B.LOOP, !0);
    });
  }, i.playSonCharacterAnim = function (t, e) {
    var n = this;
    this.sonCharacter.node.setSiblingIndex(1), this.sonCharacter.clearTracks(), this.sonCharacter.setToSetupPose(), this.sonCharacter.setCompleteListener(null), this.sonCharacter.setAnimation(0, t, e), this.sonCharacter.setCompleteListener(function () {
      n.sonCharacter.animation === B.WIN && n.sonCharacter.setAnimation(0, B.LOOP, !0);
    });
  }, i.playFgTwoCharacterAnim = function (t, e, n) {
    var a = this;
    this.fadeInTween(this.fgTwoCharacter.node), this.fgTwoCharacter.clearTracks(), this.fgTwoCharacter.setToSetupPose(), this.fgTwoCharacter.setCompleteListener(null), this.fgTwoCharacter.setAnimation(0, t, e), this.fgTwoCharacter.setCompleteListener(function () {
      a.fgTwoCharacter.animation !== W.ACT && a.fgTwoCharacter.animation !== W.ACT_LONG || (a.fgTwoCharacter.setAnimation(0, W.IDLE, !0), a.fadeOutTween(a.fgTwoCharacter.node, n));
    });
  }, i.playFgSonCharacterAnim = function (t, e, n) {
    var a = this;
    this.fadeInTween(this.fgSonCharacter.node), this.fgSonCharacter.clearTracks(), this.fgSonCharacter.setToSetupPose(), this.fgSonCharacter.setCompleteListener(null), this.fgSonCharacter.setAnimation(0, t, e), this.data.is30TimesAnd5Trans() && dispatch(_dependency8.GameEvent.PLAY_CIRCLE_ANIM), this.fgSonCharacter.setCompleteListener(function () {
      a.fgSonCharacter.animation !== W.ACT && a.fgSonCharacter.animation !== W.ACT_LONG || (a.fgSonCharacter.setAnimation(0, W.IDLE, !0), a.fadeOutTween(a.fgSonCharacter.node, n));
    });
  }, i.playFgSonFlameAnim = function () {
    var t = this;
    this.fgSonFlame.node.active = !0, this.fgSonFlame.clearTracks(), this.fgSonFlame.setToSetupPose(), this.fgSonFlame.setCompleteListener(null);
    var e = this.data.is30TimesAnd5Trans() ? "flame_2" : "flame";
    this.fgSonFlame.setAnimation(0, e, !1), this.fgSonFlame.setCompleteListener(function () {
      t.fgSonFlame.node.active = !1;
    });
  }, i.fadeInTween = function (t, e) {
    _dependency2.Tween.stopAllByTag(_dependency3.CmmUtils.hashCode("fadeInTween"));
    var n = t.getComponent(_dependency2.UIOpacity);
    _dependency2.Tween.stopAllByTarget(n), t.active = !0, n.opacity = 0, _dependency2.tween(n).bindNodeState(false).tag(_dependency3.CmmUtils.hashCode("fadeInTween")).to(0, {
      opacity: 255
    }, {
      onComplete: function () {
        n.opacity = 255, e && e();
      }
    }).start();
  }, i.fadeOutTween = function (t, e) {
    _dependency2.Tween.stopAllByTag(_dependency3.CmmUtils.hashCode("fadeOutTween"));
    var n = t.getComponent(_dependency2.UIOpacity);
    n.opacity = 255, _dependency2.tween(n).bindNodeState(false).tag(_dependency3.CmmUtils.hashCode("fadeOutTween")).to(.4, {
      opacity: 0
    }, {
      onComplete: function () {
        t.active = !1, e && e();
      }
    }).start();
  }, i.changeModel = function (t) {
    this.reset(), this.mainContent.active = t, this.freeContent.active = !t, t ? (this.playTwoCharacterAnim(B.LOOP, !0), this.playSonCharacterAnim(B.LOOP, !0)) : (this.fgTwoCharacter.node.active = !1, this.fgTwoCharacter.node.getComponent(_dependency2.UIOpacity).opacity = 0, this.fgSonCharacter.node.active = !1, this.fgSonCharacter.node.getComponent(_dependency2.UIOpacity).opacity = 0);
  }, i.reset = function () {
    this.twoCharacter.clearTracks(), this.twoCharacter.setToSetupPose(), this.sonCharacter.clearTracks(), this.sonCharacter.setToSetupPose(), this.fgTwoCharacter.clearTracks(), this.fgTwoCharacter.setToSetupPose(), this.fgSonCharacter.clearTracks(), this.fgSonCharacter.setToSetupPose();
  }, i.setData = function (t) {}, i.show = function () {
    this.node.active = !0;
  }, i.hide = function () {
    this.node.active = !1;
  }, i.addEvents = function () {
    var t = this;
    this.on(_dependency8.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.changeModel(e.data);
    }), this.on(_dependency8.GameEvent.PLAY_TWO_CHARACTER_WIN_ANIM, function (e) {
      dispatch(_dependency8.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency6.EBTM.MG_CH_TWO_ACT
        }
      }), t.playTwoCharacterAnim(B.WIN, !1);
    }), this.on(_dependency8.GameEvent.PLAY_SON_CHARACTER_WIN_ANIM, function (e) {
      var n = Math.random() < .5 ? _dependency6.EBTM.MG_CH_SON_ACT_2 : _dependency6.EBTM.MG_CH_SON_ACT;
      dispatch(_dependency8.GameEvent.PLAY_BTM, {
        data: {
          url: n
        }
      }), t.playSonCharacterAnim(B.WIN, !1);
    }), this.on(_dependency8.GameEvent.PLAY_FG_TWO_CHARACTER_CHANGE_SYMBOL_ANIM, function (e) {
      t.scheduleOnce(function () {
        dispatch(_dependency8.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency6.EBTM.FG_CH_TWO_ACT
          }
        });
      }, .4), t.freeContent.active = !0, t.freeContent.getComponent(_dependency2.UIOpacity).opacity = 255;
      var n = t.data.is30TimesAnd5Trans() ? W.ACT_LONG : W.ACT;
      t.playFgTwoCharacterAnim(n, !1);
    }), this.on(_dependency8.GameEvent.PLAY_FG_SON_CHARACTER_CHANGE_SYMBOL_ANIM, function (e) {
      var n = t.data.is30TimesAnd5Trans() ? _dependency6.EBTM.FG_CH_SON_ACT_LONG : _dependency6.EBTM.FG_CH_SON_ACT;
      dispatch(_dependency8.GameEvent.PLAY_BTM, {
        data: {
          url: n
        }
      }), t.freeContent.active = !0, t.freeContent.getComponent(_dependency2.UIOpacity).opacity = 255;
      var a = t.data.is30TimesAnd5Trans() ? W.ACT_LONG : W.ACT;
      t.playFgSonCharacterAnim(a, !1), t.playFgSonFlameAnim();
    }), this.on(_dependency8.GameEvent.PLAY_MG_TWO_CHARACTER_CHANGE_SYMBOL_ANIM, function (e) {
      t.fadeOutTween(t.mainContent), t.fadeInTween(t.freeContent, function () {
        t.scheduleOnce(function () {
          dispatch(_dependency8.GameEvent.PLAY_BTM, {
            data: {
              url: _dependency6.EBTM.FG_CH_TWO_ACT
            }
          });
        }, .4);
        var e = t.data.is30TimesAnd5Trans() ? W.ACT_LONG : W.ACT;
        t.playFgTwoCharacterAnim(e, !1, function () {
          t.fadeOutTween(t.freeContent), t.fadeInTween(t.mainContent);
        });
      });
    }), this.on(_dependency8.GameEvent.PLAY_MG_SON_CHARACTER_CHANGE_SYMBOL_ANIM, function (e) {
      t.fadeOutTween(t.mainContent), t.fadeInTween(t.freeContent, function () {
        var e = t.data.is30TimesAnd5Trans() ? _dependency6.EBTM.FG_CH_SON_ACT_LONG : _dependency6.EBTM.FG_CH_SON_ACT;
        dispatch(_dependency8.GameEvent.PLAY_BTM, {
          data: {
            url: e
          }
        }), t.playFgSonFlameAnim();
        var n = t.data.is30TimesAnd5Trans() ? W.ACT_LONG : W.ACT;
        t.playFgSonCharacterAnim(n, !1, function () {
          t.fadeOutTween(t.freeContent), t.fadeInTween(t.mainContent);
        });
      });
    });
  }, i.removeEvents = function () {
    this.off(_dependency8.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency8.GameEvent.PLAY_TWO_CHARACTER_WIN_ANIM), this.off(_dependency8.GameEvent.PLAY_SON_CHARACTER_WIN_ANIM), this.off(_dependency8.GameEvent.PLAY_FG_TWO_CHARACTER_CHANGE_SYMBOL_ANIM), this.off(_dependency8.GameEvent.PLAY_FG_SON_CHARACTER_CHANGE_SYMBOL_ANIM), this.off(_dependency8.GameEvent.PLAY_MG_TWO_CHARACTER_CHANGE_SYMBOL_ANIM), this.off(_dependency8.GameEvent.PLAY_MG_SON_CHARACTER_CHANGE_SYMBOL_ANIM);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "mainContent", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(E.prototype, "twoCharacter", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(E.prototype, "sonCharacter", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(E.prototype, "freeContent", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(E.prototype, "fgSonCharacter", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(E.prototype, "fgTwoCharacter", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), b = _dependency.applyDecoratedDescriptor(E.prototype, "fgSonFlame", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = E)) || G));
_dependency2.cclegacy._RF.pop();
