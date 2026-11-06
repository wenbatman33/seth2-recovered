// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1011-GameData";
import * as _dependency6 from "./g1011-GameEvent";
import * as _dependency7 from "./g1011-types";
import * as _dependency8 from "./g1011-GameTempo";
import * as _dependency9 from "./g1011-GameConfigModel";
import * as _dependency0 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency1 from "../../shared/scripts/slotFramework-MathUtil";
var _export;
export { _export as SpineCharacterAnimations };
var _export2;
export { _export2 as SpineMahjongAnimation };
var _export3;
export { _export3 as SpineBackgroundAnimations };
var _export4;
export { _export4 as SpineBedAnimations };
var _export5;
export { _export5 as SpineLightsAnimations };
var _export6;
export { _export6 as SpineLotusAnimations };
var _export7;
export { _export7 as SpineFreeSpinCharacterAnimation };
var _export8;
export { _export8 as CharacterView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SpineCharacterAnimations":
      _export = value;
      break;
    case "SpineMahjongAnimation":
      _export2 = value;
      break;
    case "SpineBackgroundAnimations":
      _export3 = value;
      break;
    case "SpineBedAnimations":
      _export4 = value;
      break;
    case "SpineLightsAnimations":
      _export5 = value;
      break;
    case "SpineLotusAnimations":
      _export6 = value;
      break;
    case "SpineFreeSpinCharacterAnimation":
      _export7 = value;
      break;
    case "CharacterView":
      _export8 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var i, t, e, a, o, s, r, c, _, h, l, m, u, A, p, f, g, T, E, F, d, S, N, I, C, M;
var L, y, O, W, P, v, b, R, k, D, B, G, w, U, x, H, j, z, V, Y, q, X, K, Q, Z, J;
_dependency2.cclegacy._RF.push({}, "c90bcpHRpxMfZzrAv1ltWSw", "CharacterView", void 0);
var $ = _dependency2._decorator.ccclass,
  nn = (_dependency2._decorator.property, _publish("SpineCharacterAnimations", {
    FEVERTIME: "fevertime",
    LOOP_A: "loop_A",
    LOOP_B: "loop_B",
    TEASE: "tease",
    WIN_A: "win_A",
    WIN_B: "win_B",
    WIN_C: "win_C",
    WIN_D: "win_D"
  })),
  tn = _publish("SpineMahjongAnimation", {
    FEVERTIME: "fevertime",
    LOOP_A: "loop_A",
    LOOP_B: "loop_B",
    TEASE: "tease",
    WIN_A: "win_A",
    WIN_B: "win_B",
    WIN_C: "win_C",
    WIN_D: "win_D"
  }),
  en = _publish("SpineBackgroundAnimations", {
    FEVERTIME: "fevertime",
    FUNCTION: "function",
    LOOP: "loop",
    TEASE: "tease",
    WIN: "win"
  }),
  an = _publish("SpineBedAnimations", {
    FUNCTION: "function",
    LOOP: "loop",
    TEASE: "tease",
    WIN: "win"
  }),
  on = _publish("SpineLightsAnimations", {
    FUNCTION: "function"
  }),
  sn = (_publish("SpineLotusAnimations", {
    COLLECT: "collect",
    LOOP: "loop"
  }), _publish("SpineFreeSpinCharacterAnimation", {
    FUNCTION_A: "function_A",
    FUNCTION_B: "function_B",
    FUNCTION_C: "function_C",
    FUNCTION_D: "function_D",
    FUNCTION_E: "function_E",
    LOOP_A: "loop_A",
    LOOP_B: "loop_B",
    LOOP_C: "loop_C",
    LOOP_D: "loop_D",
    LOOP_E: "loop_E",
    TEASE_A: "tease_A",
    TEASE_B: "tease_B",
    TEASE_C: "tease_C",
    TEASE_D: "tease_D",
    TEASE_E: "tease_E",
    WIN_A: "win_A",
    WIN_B: "win_B",
    WIN_C: "win_C",
    WIN_D: "win_D",
    WIN_E: "win_E"
  }));
_publish("CharacterView", (L = $("CharacterView"), y = _dependency4.inject("mainContent", _dependency2.Node), O = _dependency4.inject("mainContent/M_bg", _dependency2.sp.Skeleton), W = _dependency4.inject("mainContent/M_character", _dependency2.sp.Skeleton), P = _dependency4.inject("mainContent/M_mahjong", _dependency2.sp.Skeleton), v = _dependency4.inject("freeContent", _dependency2.Node), b = _dependency4.inject("freeContent/F_bg", _dependency2.sp.Skeleton), R = _dependency4.inject("freeContent/F_bed", _dependency2.sp.Skeleton), k = _dependency4.inject("freeContent/F_character", _dependency2.sp.Skeleton), D = _dependency4.inject("freeContent/freeTick", _dependency2.Label), B = _dependency4.inject("freeContent/W_shining", _dependency2.Node), G = _dependency4.inject("freeContent/W_shining", _dependency2.sp.Skeleton), L(((J = function (n) {
  var _nativeConstructor = i;
  function i() {
    for (var i, t = arguments.length, o = new Array(t), s = 0; s < t; s++) o[s] = arguments[s];
    return i = Reflect.construct(n, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(i, "mainContent", x, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "M_bg", H, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "M_character", j, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "M_mahjong", z, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "freeContent", V, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "F_bg", Y, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "F_bed", q, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "F_character", X, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "freeTick", K, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "_shiningNode", Q, _dependency.assertThisInitialized(i)), _dependency.initializerDefineProperty(i, "_shiningSkeleton", Z, _dependency.assertThisInitialized(i)), i._shiningSprite = null, i._shiningFrames = [], i._shiningStep = null, i.F_lights = null, i._multipleRange = [2, 3, 6, 7], i.isFeverTime = !1, i._appliedFeverTime = null, i._expectingReels = new Set(), i._characterAnimationsTease = [sn.TEASE_A, sn.TEASE_B, sn.TEASE_C, sn.TEASE_D, sn.TEASE_E], i._characterAnimationsWin = [sn.WIN_A, sn.WIN_B, sn.WIN_C, sn.WIN_D, sn.WIN_E], i._characterAnimationsLoop = [sn.LOOP_A, sn.LOOP_B, sn.LOOP_C, sn.LOOP_D, sn.LOOP_E], i._characterAnimationsFunction = [sn.FUNCTION_A, sn.FUNCTION_B, sn.FUNCTION_C, sn.FUNCTION_D, sn.FUNCTION_E], i._functionPlayedThisSpin = !1, i._multipleAdvancedThisSpin = !1, i._fgWinAnimPlayedThisSpin = !1, i._functionAnimPromise = null, i._functionTrackEntry = null, i._functionAnimSeq = 0, i._fgWinAnimSeq = 0, i._fgWinAnimPromise = null, i._fgWinAnimStarted = !1, i._characterAnimationIndex = 0, i.increaseCounts = 0, i;
  }
  _dependency.inheritsLoose(i, n);
  var c = i.prototype;
  return c.onLoad = function () {
    n.prototype.onLoad.call(this);
  }, c.start = function () {
    this.init();
  }, c.onDestroy = function () {
    this.stopShiningEffect(), this.removeEvents(), n.prototype.onDestroy.call(this);
  }, c.init = function () {
    var n = this.data.currentGameType === _dependency7.EGameType.MAIN_GAME;
    this.initFgBed(), this.initFgLights(), this.initShining(), this.changeModel(n);
  }, c.initShining = function () {
    var n;
    if (this._shiningNode) {
      this._shiningSkeleton && (this._shiningSkeleton.clearTracks(), this._shiningSkeleton.setToSetupPose(), this._shiningSkeleton.setCompleteListener(null), this._shiningSkeleton.enabled = !1);
      var t = this._shiningNode.getChildByName(i.SHINING_SEQ_NODE_NAME),
        e = !t;
      e && ((t = new _dependency2.Node(i.SHINING_SEQ_NODE_NAME)).layer = this._shiningNode.layer, this._shiningNode.addChild(t)), this._shiningSprite = null != (n = t.getComponent(_dependency2.Sprite)) ? n : t.addComponent(_dependency2.Sprite), e && (this._shiningSprite.sizeMode = _dependency2.Sprite.SizeMode.RAW);
      var a = _dependency9.default.getData().filePaths.shiningSpriteFrame;
      this._shiningFrames = [];
      for (var o = i.SHINING_FRAME_FIRST; o <= i.SHINING_FRAME_LAST; o++) {
        var s = "F_shining_" + _dependency1.default.zeroPad(o, 3);
        try {
          this._shiningFrames.push(_dependency0.LoadUtils.getDirSp(this.data.module, a, s));
        } catch (n) {
          Log.e("initShining: 找不到序列圖 " + s, n);
        }
      }
      0 === this._shiningFrames.length && Log.e("initShining: " + a + " 一張都沒撈到，FG 閃光不會有表現"), this._shiningNode.active = !1;
    }
  }, c.initFgBed = function () {
    this.F_bed && this.F_bed.setAnimation(0, an.LOOP, !0);
  }, c.initFgLights = function () {
    var n = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      var i, t, e;
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.prev = 0, n.next = 3, App.cache.getCacheByAsync("assets/spine/New/spine2/high/F_lights", _dependency2.sp.SkeletonData, this.data.module);
          case 3:
            if ((i = n.sent) && this.freeContent) {
              n.next = 6;
              break;
            }
            return n.abrupt("return");
          case 6:
            (t = new _dependency2.Node("F_lights")).addComponent(_dependency2.UITransform), (e = t.addComponent(_dependency2.sp.Skeleton)).skeletonData = i, e.premultipliedAlpha = !1, e.setAnimation(0, on.FUNCTION, !0), this.freeContent.addChild(t), this.F_lights = e, n.next = 19;
            break;
          case 16:
            n.prev = 16, n.t0 = n.catch(0), console.warn("initFgLights failed:", n.t0);
          case 19:
          case "end":
            return n.stop();
        }
      }, n, this, [[0, 16]]);
    }));
    return function () {
      return n.apply(this, arguments);
    };
  }(), c.changeModel = function (n) {
    this.reset(), this.resetPerSpinState(), this._characterAnimationIndex = 0, this.mainContent.active = n, this.freeContent.active = !n, this._appliedFeverTime = n ? this.isFeverTime : null, n ? this.isFeverTime ? this.playMgFevertime() : this.playMgCharacterAnimWin() : this.playFgIdle();
  }, c.playAnimationWin = function () {
    var n,
      i,
      t,
      e = this;
    switch (Math.floor(3 * Math.random())) {
      case 0:
        n = nn.WIN_A, i = _dependency9.EBTM.SFX_MAIN_CHARACTER_WINA;
        break;
      case 1:
        n = nn.WIN_B, i = _dependency9.EBTM.SFX_MAIN_CHARACTER_WINB;
        break;
      case 2:
        n = nn.WIN_C, i = _dependency9.EBTM.SFX_MAIN_CHARACTER_WINC;
    }
    switch (dispatch(_dependency6.GameEvent.PLAY_BTM, {
      data: {
        url: i
      }
    }), this.M_character.setAnimation(0, n, !1), this.M_character.setCompleteListener(function () {
      e.playAnimationLoop();
    }), this.M_bg.setAnimation(0, en.WIN, !1), this.M_bg.setCompleteListener(function () {
      e.playBackgroundAnimationLoop();
    }), Math.floor(3 * Math.random())) {
      case 0:
        t = tn.WIN_A;
        break;
      case 1:
        t = tn.WIN_B;
        break;
      case 2:
        t = tn.WIN_C;
    }
    this.M_mahjong.setAnimation(0, t, !1), this.M_mahjong.setCompleteListener(function () {
      e.playMahjongAnimationLoop();
    });
  }, c.playAnimationLoop = function () {
    if (this.isFeverTime) this.M_character.setAnimation(0, nn.FEVERTIME, !0);else {
      var n = Math.floor(2 * Math.random()) ? nn.LOOP_A : nn.LOOP_B;
      this.M_character.setAnimation(0, n, !0);
    }
  }, c.playBackgroundAnimationLoop = function () {
    this.isFeverTime ? this.M_bg.setAnimation(0, en.FEVERTIME, !0) : this.M_bg.setAnimation(0, en.LOOP, !0);
  }, c.playMahjongAnimationLoop = function () {
    if (this.isFeverTime) this.M_mahjong.setAnimation(0, tn.FEVERTIME, !0);else {
      var n = Math.floor(2 * Math.random()) ? tn.LOOP_A : tn.LOOP_B;
      this.M_mahjong.setAnimation(0, n, !0);
    }
  }, c.playAnimationWinWithScatter = function () {
    var n = this;
    this.M_character.setAnimation(0, nn.WIN_D, !1), this.M_character.setCompleteListener(function () {
      n.playAnimationLoop();
    }), this.M_mahjong.setAnimation(0, tn.WIN_D, !1), this.M_mahjong.setCompleteListener(function () {
      n.playMahjongAnimationLoop();
    }), dispatch(_dependency6.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency9.EBTM.SFX_MAIN_CHARACTER_WIND
      }
    });
  }, c.playAnimationTease = function () {
    this.M_character.setAnimation(0, nn.TEASE, !0), this.M_bg.setAnimation(0, en.TEASE, !0), this.M_mahjong.setAnimation(0, tn.TEASE, !0);
  }, c.playMgCharacterAnimWin = function () {
    this.playAnimationLoop(), this.playBackgroundAnimationLoop(), this.playMahjongAnimationLoop();
  }, c.playFgIdle = function () {
    this._functionAnimPromise || (this.F_character && (this.F_character.setCompleteListener(null), this.F_character.setAnimation(0, this._characterAnimationsLoop[this._characterAnimationIndex], !0)), this.playFgBackgroundAnimationLoop(), this.playFgBedAnimationLoop());
  }, c.playMgFevertime = function () {
    this.M_character.setAnimation(0, nn.FEVERTIME, !0), this.M_character.setCompleteListener(null), this.M_bg.setAnimation(0, en.FEVERTIME, !0), this.M_bg.setCompleteListener(null), this.M_mahjong.setAnimation(0, tn.FEVERTIME, !0), this.M_mahjong.setCompleteListener(null);
  }, c.startFgWinAnim = function () {
    var n = this;
    this._fgWinAnimPlayedThisSpin = !0, this._fgWinAnimPromise = this.playFgCharacterAnimWin().then(function () {
      n._fgWinAnimPromise = null;
    });
  }, c.playFgCharacterAnimWin = function () {
    var n = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      var t,
        e,
        a,
        o,
        s = this;
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            if (!this._functionAnimPromise) {
              n.next = 5;
              break;
            }
            return n.next = 3, this._functionAnimPromise;
          case 3:
            n.next = 0;
            break;
          case 5:
            if (this.F_bg && (this.F_bg.setAnimation(0, en.WIN, !1), this.F_bg.setCompleteListener(function () {
              s.playFgBackgroundAnimationLoop();
            })), this.playFgBedAnimationWin(), this.F_character) {
              n.next = 9;
              break;
            }
            return n.abrupt("return");
          case 9:
            return e = this._characterAnimationsWin[this._characterAnimationIndex], Log.d("FG 人物報獎起播 " + e + "（倍數階段 " + this._characterAnimationIndex + "）"), a = null != (t = this.F_character.setAnimation(0, e, !1)) ? t : null, o = ++this._fgWinAnimSeq, n.next = 15, new Promise(function (n) {
              var t = !1,
                r = function () {
                  t || (t = !0, s._fgWinAnimSeq === o ? (s.F_character && (s.F_character.setCompleteListener(null), s.F_character.setAnimation(0, s._characterAnimationsLoop[s._characterAnimationIndex], !0), s.playFgAnimationLoop()), n()) : n());
                };
              s.F_character.setCompleteListener(function (n) {
                i.isExpectedAnimEntry(n, a, e) && r();
              }), s.scheduleOnce(function () {
                return r();
              }, i.FUNCTION_ANIM_TIMEOUT);
            });
          case 15:
          case "end":
            return n.stop();
        }
      }, n, this);
    }));
    return function () {
      return n.apply(this, arguments);
    };
  }(), c.playFgAnimationTease = function () {
    this.F_character && (this.F_character.setAnimation(0, this._characterAnimationsTease[this._characterAnimationIndex], !0), this.F_character.setCompleteListener(null), this.playFgBedAnimationTease());
  }, c.playFgAnimationLoop = function () {
    var n = this;
    this.F_character && (this._functionAnimPromise || this.F_character.setCompleteListener(function () {
      n.F_character.setAnimation(0, n._characterAnimationsLoop[n._characterAnimationIndex], !0);
    }));
  }, c.playFgAnimationFunction = function () {
    var n,
      t = this;
    if (this.F_character) {
      var e = this._characterAnimationsFunction[this._characterAnimationIndex];
      this._functionTrackEntry = null != (n = this.F_character.setAnimation(0, e, !1)) ? n : null;
      var a = ++this._functionAnimSeq;
      this._functionAnimPromise = new Promise(function (n) {
        var o = !1,
          s = function () {
            o || (o = !0, t._functionAnimSeq === a ? (t._functionTrackEntry = null, t._functionAnimPromise = null, t.F_character && (t.F_character.setCompleteListener(null), t.F_character.setAnimation(0, t._characterAnimationsLoop[t._characterAnimationIndex], !0)), n()) : n());
          };
        t.F_character.setCompleteListener(function (n) {
          t.isFunctionAnimEntry(n, e) && s();
        }), t.scheduleOnce(function () {
          return s();
        }, i.FUNCTION_ANIM_TIMEOUT);
      });
    }
  }, c.isFunctionAnimEntry = function (n, t) {
    return i.isExpectedAnimEntry(n, this._functionTrackEntry, t);
  }, i.isExpectedAnimEntry = function (n, i, t) {
    var e;
    return i ? n === i : (null == n || null == (e = n.animation) ? void 0 : e.name) === t;
  }, c.playFgBackgroundAnimationLoop = function () {
    this.F_bg && this.F_bg.setAnimation(0, en.LOOP, !0);
  }, c.playFgBedAnimationLoop = function () {
    this.F_bed && this.F_bed.setAnimation(0, an.LOOP, !0);
  }, c.playFgBedAnimationTease = function () {
    this.F_bed && this.F_bed.setAnimation(0, an.TEASE, !0);
  }, c.playFgBedAnimationWin = function () {
    var n = this;
    this.F_bed && (this.F_bed.setAnimation(0, an.WIN, !1), this.F_bed.setCompleteListener(function () {
      n.playFgBedAnimationLoop();
    }));
  }, c.playFgBedAnimationFunction = function () {
    var n = this;
    this.F_bed && (this.F_bed.setAnimation(0, an.FUNCTION, !1), this.F_bed.setCompleteListener(function () {
      n.playFgBedAnimationLoop();
    }));
  }, c.playShiningEffect = function () {
    var n = this;
    if (this._shiningNode && this._shiningSprite && 0 !== this._shiningFrames.length) {
      this.stopShiningEffect();
      var t = 0;
      this._shiningSprite.spriteFrame = this._shiningFrames[0], this._shiningNode.active = !0, this._shiningStep = function () {
        if (++t >= n._shiningFrames.length) return n.stopShiningEffect(), void (n._shiningNode.active = !1);
        n._shiningSprite.spriteFrame = n._shiningFrames[t];
      }, this.schedule(this._shiningStep, 1 / i.SHINING_FPS);
    }
  }, c.stopShiningEffect = function () {
    this._shiningStep && (this.unschedule(this._shiningStep), this._shiningStep = null);
  }, c.updateFgRemaining = function () {
    var n,
      i,
      t = this.data.getData(),
      e = t.parser,
      a = t.gameState,
      o = a[e.currentSpinIndex + 1];
    if (o) {
      var s = o.numFreeSpins,
        r = o.freeTimesDenominator,
        c = r - s,
        _ = null != (n = null == (i = a[e.currentSpinIndex]) ? void 0 : i.freeTimesDenominator) ? n : r;
      this.freeTick.string = c + "/" + _;
    }
  }, c.increaseFgRemaining = function (n) {
    var i,
      t = this,
      e = this.data.getData(),
      a = e.parser,
      o = e.gameState,
      s = a.currentGameState,
      r = o[a.currentSpinIndex - 1],
      c = null != (i = null == r ? void 0 : r.freeTimesDenominator) ? i : s.freeTimesDenominator,
      _ = s.freeTimesDenominator - c;
    if (_ <= 0) n();else {
      if (0 === this.increaseCounts) {
        var h = s.freeTimesDenominator - s.numFreeSpins;
        this.freeTick.string = h + "/" + c;
      }
      this.increaseCounts++;
      var l = 1 + .05 * this.increaseCounts,
        m = 1 - .02 * this.increaseCounts;
      _dependency2.tween(this.freeTick.node).bindNodeState(false).to(.1, {
        scale: new _dependency2.Vec3(l, l, 1)
      }, {
        onComplete: function () {
          var n = t.freeTick.string.split("/"),
            i = n[0],
            e = n[1];
          t.freeTick.string = i + "/" + (Number(e) + 1);
        },
        easing: "quintIn"
      }).to(.05, {
        scale: new _dependency2.Vec3(m, m, 1)
      }, {
        easing: "quintIn"
      }).call(function () {
        t.increaseCounts === _ ? (t.increaseCounts = 0, t.scheduleOnce(function () {
          n();
        }, 1), _dependency2.tween(t.freeTick.node).bindNodeState(false).to(.1, {
          scale: new _dependency2.Vec3(1, 1, 1)
        }, {
          easing: "quintIn"
        }).start()) : t.increaseCounts < _ && t.increaseFgRemaining(n);
      }).start();
    }
  }, c.reset = function () {
    this.M_mahjong.clearTracks(), this.M_mahjong.setToSetupPose(), this.F_character && (this.F_character.clearTracks(), this.F_character.setToSetupPose()), this.F_bed && (this.F_bed.clearTracks(), this.F_bed.setToSetupPose(), this.F_bed.setAnimation(0, an.LOOP, !0));
  }, c.setData = function (n) {}, c.show = function () {
    this.node.active = !0;
  }, c.hide = function () {
    this.node.active = !1;
  }, c.addEvents = function () {
    var n = this;
    this.on(_dependency6.GameEvent.CHANGE_GAME_STYLE, function (i) {
      n.changeModel(i.data);
    }), this.on(_dependency6.GameEvent.UPDATE_FG_REMAINING, function (i) {
      n.updateFgRemaining();
    }), this.on(_dependency6.GameEvent.INCREASE_FG_REMAINING, function (i) {
      n.increaseFgRemaining(i.complete);
    }), this.on(_dependency6.GameEvent.SHOW_WIN_SUMMARY, function (i) {
      n.data.currentGameType === _dependency7.EGameType.MAIN_GAME ? n.playAnimationWin() : n._fgWinAnimPlayedThisSpin || n.startFgWinAnim();
    }), this.on(_dependency6.GameEvent.SHOW_FG_SUMMARY_ALERT_STATE, function (n) {}), this.on(_dependency6.GameEvent.SHOW_WIN, function (n) {}), this.on(_dependency6.GameEvent.CHANGE_FG_SPIN_STATE, function (n) {}), this.on(_dependency6.GameEvent.UNIT_TEST, function (n) {}), this.on(_dependency6.GameEvent.SHOW_SCATTER_WIN, function () {
      n.isFeverTime || n.playAnimationWinWithScatter();
    }), this.on(_dependency6.GameEvent.PARSER_REPLAY_COMPLETED, function (i) {
      n.isFeverTime = !0 === n.data.getData().definition.isLuckyMoment, n._appliedFeverTime = n.isFeverTime, n.isFeverTime ? n.playMgFevertime() : (n.playAnimationLoop(), n.playBackgroundAnimationLoop(), n.playMahjongAnimationLoop());
    }), this.on(_dependency6.GameEvent.UPDATE_BAT_FEVERTIME_STATUS, function (i) {
      var t = 1 == i.data;
      n.isFeverTime = t, n.data.currentGameType === _dependency7.EGameType.MAIN_GAME && n._appliedFeverTime !== t && (n._appliedFeverTime = t, t ? n.playMgFevertime() : (n.playAnimationLoop(), n.playBackgroundAnimationLoop(), n.playMahjongAnimationLoop()));
    }), this.on(_dependency6.GameEvent.SHOW_SCARF, function (i) {
      n._functionPlayedThisSpin || (n._functionPlayedThisSpin = !0, n.playFgAnimationFunction(), n.playFgBedAnimationFunction());
    }), this.on(_dependency6.GameEvent.CHECK_MULTIPLE, function () {
      if (!n._multipleAdvancedThisSpin) {
        var i = n.data.getData().parser.currentGameState,
          t = i.totalStake,
          e = i.totalWinnings;
        Math.floor(e / t) >= n._multipleRange[n._characterAnimationIndex] && (n._multipleAdvancedThisSpin = !0, n.playShiningEffect(), dispatch(_dependency6.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency9.EBTM.SFX_FREE_MULTIPLE
          }
        }), n._characterAnimationIndex++, n.playFgIdle());
      }
    }), this.on(_dependency6.GameEvent.SHOW_EXPECT, function (i) {
      n._expectingReels.add(i.data), n.isFeverTime || (n.M_character.setCompleteListener(null), n.M_bg.setCompleteListener(null), n.M_mahjong.setCompleteListener(null), n.M_character.animation !== nn.TEASE && n.playAnimationTease());
    }), this.on(_dependency6.GameEvent.STOP_EXPECT, function (i) {
      n._expectingReels.delete(i.data), n._expectingReels.size > 0 || n.isFeverTime || (n.M_mahjong.setCompleteListener(function () {
        n.playMahjongAnimationLoop();
      }), n.M_bg.setCompleteListener(function () {
        n.playBackgroundAnimationLoop();
      }), n.M_character.setCompleteListener(function () {
        n.playAnimationLoop();
      }));
    }), this.on(_dependency6.GameEvent.SHOW_ALL_WIN_LINE_END, function () {
      n.data.currentGameType !== _dependency7.EGameType.MAIN_GAME && (dispatch(_dependency6.GameEvent.CHECK_MULTIPLE), n._fgWinAnimStarted = !0, n._fgWinAnimPlayedThisSpin || n.startFgWinAnim());
    }), this.on(_dependency6.GameEvent.PLAY_FG_WIN_ANIM, function () {
      if (n.data.currentGameType !== _dependency7.EGameType.MAIN_GAME) {
        if (n.data.hasWinnings()) {
          n._fgWinAnimPlayedThisSpin || n.startFgWinAnim();
          !function i() {
            n._fgWinAnimPromise ? n._fgWinAnimPromise.then(i) : n._functionAnimPromise ? n._functionAnimPromise.then(i) : dispatch(_dependency6.GameEvent.FG_WIN_ANIM_COMPLETED);
          }();
        } else dispatch(_dependency6.GameEvent.FG_WIN_ANIM_COMPLETED);
      } else dispatch(_dependency6.GameEvent.FG_WIN_ANIM_COMPLETED);
    }), this.on(_dependency6.GameEvent.CHECK_FUNCTION_ANIM_STATUS, function () {
      !function i() {
        n._fgWinAnimPromise ? n._fgWinAnimPromise.then(i) : n._functionAnimPromise ? n._functionAnimPromise.then(i) : n._fgWinAnimStarted ? n.scheduleOnce(function () {
          dispatch(_dependency6.GameEvent.FUNCTION_ANIM_COMPLETED);
        }, _dependency8.GameTempo.FUNCTION_ANIM_TO_WIN_DELAY) : dispatch(_dependency6.GameEvent.FUNCTION_ANIM_COMPLETED);
      }();
    }), this.on(_dependency6.GameEvent.START_SPIN, function () {
      n.resetPerSpinState();
    }), this.on(_dependency6.GameEvent.START_SCROLL, function () {
      n.resetPerSpinState();
    });
  }, c.resetPerSpinState = function () {
    this._expectingReels.clear(), this._functionPlayedThisSpin = !1, this._multipleAdvancedThisSpin = !1, this._fgWinAnimPlayedThisSpin = !1, this._functionAnimPromise = null, this._functionTrackEntry = null, this._fgWinAnimPromise = null, this._fgWinAnimStarted = !1, this._functionAnimSeq++, this._fgWinAnimSeq++;
  }, c.removeEvents = function () {
    this.off(_dependency6.GameEvent.SHOW_EXPECT), this.off(_dependency6.GameEvent.STOP_EXPECT), this.off(_dependency6.GameEvent.START_SPIN), this.off(_dependency6.GameEvent.START_SCROLL), this.off(_dependency6.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency6.GameEvent.SHOW_WIN_SUMMARY), this.off(_dependency6.GameEvent.SHOW_FG_SUMMARY_ALERT_STATE), this.off(_dependency6.GameEvent.SHOW_WIN), this.off(_dependency6.GameEvent.CHANGE_FG_SPIN_STATE), this.off(_dependency6.GameEvent.UNIT_TEST), this.off(_dependency6.GameEvent.UPDATE_FG_REMAINING), this.off(_dependency6.GameEvent.INCREASE_FG_REMAINING), this.off(_dependency6.GameEvent.SHOW_SCATTER_WIN), this.off(_dependency6.GameEvent.SHOW_SCARF), this.off(_dependency6.GameEvent.SHOW_ALL_WIN_LINE_END), this.off(_dependency6.GameEvent.PLAY_FG_WIN_ANIM), this.off(_dependency6.GameEvent.CHECK_FUNCTION_ANIM_STATUS), this.off(_dependency6.GameEvent.PARSER_REPLAY_COMPLETED), this.off(_dependency6.GameEvent.UPDATE_BAT_FEVERTIME_STATUS), this.off(_dependency6.GameEvent.CHECK_MULTIPLE);
  }, _dependency.createClass(i, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }, {
    key: "animationIndex",
    get: function () {
      return this._characterAnimationIndex;
    },
    set: function (n) {
      this._characterAnimationIndex = n;
    }
  }]), i;
}(_dependency3.default)).SHINING_FRAME_FIRST = 2, J.SHINING_FRAME_LAST = 29, J.SHINING_SEQ_NODE_NAME = "shiningSeq", J.SHINING_FPS = 21, J.FUNCTION_ANIM_TIMEOUT = 3, x = _dependency.applyDecoratedDescriptor((U = J).prototype, "mainContent", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(U.prototype, "M_bg", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(U.prototype, "M_character", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(U.prototype, "M_mahjong", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(U.prototype, "freeContent", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(U.prototype, "F_bg", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = _dependency.applyDecoratedDescriptor(U.prototype, "F_bed", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(U.prototype, "F_character", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(U.prototype, "freeTick", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(U.prototype, "_shiningNode", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = _dependency.applyDecoratedDescriptor(U.prototype, "_shiningSkeleton", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = U)) || w));
_dependency2.cclegacy._RF.pop();
