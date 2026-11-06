// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency4 from "../../shared/scripts/main-EventComponent";
import * as _dependency5 from "./g1004-GameConfigModel";
import * as _dependency6 from "./g1004-GameData";
import * as _dependency7 from "./g1004-GameEvent";
import * as _dependency8 from "./g1004-types";
var _export;
export { _export as BackgroundView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BackgroundView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, t, i, a, r, o, s, c, u, g, l, d, m, p, h, f, b, y, v, w;
var C, B, _, A, E, G, k, R, F, D, I, S, T, N, z;
_dependency2.cclegacy._RF.push({}, "83e72N9BOdIbocPQwddl1iP", "BackgroundView", void 0);
var M = _dependency2._decorator.ccclass,
  P = _dependency2._decorator.property,
  L = 0,
  q = 1;
_publish("BackgroundView", (C = M("BackgroundView"), B = P({
  type: _dependency2.Sprite,
  tooltip: "背景"
}), _ = P({
  type: _dependency2.Sprite,
  tooltip: "剩餘次數"
}), A = P({
  type: _dependency2.Label,
  tooltip: "剩餘次數"
}), E = P({
  type: _dependency2.Node,
  tooltip: "背景"
}), G = P({
  type: _dependency2.Node,
  tooltip: "餘次數背景"
}), k = P({
  type: _dependency2.sp.Skeleton,
  tooltip: "背景動畫"
}), C((D = _dependency.applyDecoratedDescriptor((F = function (n) {
  var _nativeConstructor = e;
  function e() {
    for (var e, t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
    return e = Reflect.construct(n, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bg", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "remainingContent", I, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "remaining", S, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndBoardBG", T, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndBoard", N, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "backgroundAnim", z, _dependency.assertThisInitialized(e)), e.increaseCounts = 0, e;
  }
  _dependency.inheritsLoose(e, n);
  var o = e.prototype;
  return o.setBg = function (n) {
    var e = _dependency5.default.getData().filePaths.common,
      t = n ? "mg_bg" : "fg_bg";
    this.bg.spriteFrame = _dependency3.LoadUtils.getDirSp(this.data.module, e, t), this.ndBoardBG.active = n, this.remaining.node.active = !n, this.remainingContent.node.active = !n, this.ndBoard.active = !n;
    var i = n ? "mg_idle" : "fg_idle";
    this.backgroundAnim.animation = i, this.backgroundAnim.setSlotsToSetupPose(), this.backgroundAnim.clearTracks(), this.backgroundAnim.setAnimation(0, i, !0);
  }, o.updateFgRemaining = function () {
    var n = this.data.getData().parser.currentSpinIndex + 1,
      e = this.data.getData().gameState[n].freeGameCount;
    0 === e && this.changeRemainingType(q), Number(this.remaining.string) != e && this.playBounceTween(this.remaining.node), this.remaining.string = "" + e;
  }, o.changeRemainingType = function (n) {
    var e = _dependency5.default.getData().filePaths.localeSpriteFrame;
    switch (n) {
      case L:
        this.remainingContent.node.x = -60, this.remainingContent.spriteFrame = _dependency3.LoadUtils.getDirSp(this.data.module, e, "fg_font_01"), this.remaining.node.active = !0;
        break;
      case q:
        this.remainingContent.node.x = 0, this.remainingContent.spriteFrame = _dependency3.LoadUtils.getDirSp(this.data.module, e, "fg_font_02"), this.remaining.node.active = !1;
    }
  }, o.increaseFgRemaining = function (n) {
    var e = this,
      t = this.data.getData().definition.extraFgRounds,
      i = this.remaining.color;
    this.remaining.node.active || this.changeRemainingType(L), this.increaseCounts++;
    var a = 1 + .05 * this.increaseCounts,
      r = 1 - .02 * this.increaseCounts;
    _dependency2.Tween.stopAllByTarget(this.remaining.node), _dependency2.tween(this.remaining.node).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(a, a, 1)
    }, {
      onComplete: function () {
        e.remaining.string = (Number(e.remaining.string) + 1).toString();
      },
      easing: "quintIn"
    }).to(.05, {
      scale: new _dependency2.Vec3(r, r, 1)
    }, {
      easing: "quintIn"
    }).call(function () {
      e.increaseCounts == t ? (e.increaseCounts = 0, e.scheduleOnce(function () {
        n();
      }, 1), _dependency2.tween(e.remaining.node).bindNodeState(false).to(.1, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }, {
        easing: "quintIn"
      }).start()) : e.increaseCounts < t && e.increaseFgRemaining(n);
    }).start(), _dependency2.tween(i).bindNodeState(false).to(.1, {
      a: 130
    }, {
      easing: "quintIn"
    }).to(.05, {
      a: 255
    }, {
      easing: "quintIn"
    }).start();
  }, o.playBounceTween = function (n, e) {
    _dependency2.tween(n).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(1.5, 1.5, 1.5)
    }).delay(.01).to(.1, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        e && e();
      }
    }).start();
  }, o.reset = function () {
    this.increaseCounts = 0, this.remaining.string = "10";
  }, o.setData = function (n) {}, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var n = this;
    this.on(_dependency7.GameEvent.CHANGE_GAME_STYLE, function (e) {
      switch (e.data) {
        case _dependency8.EGameType.MAIN_GAME:
          n.setBg(!0), n.reset();
          break;
        case _dependency8.EGameType.FREE_GAME:
          n.setBg(!1), n.changeRemainingType(L);
      }
    }), this.on(_dependency7.GameEvent.UPDATE_FG_REMAINING, function (e) {
      n.updateFgRemaining();
    }), this.on(_dependency7.GameEvent.INCREASE_FG_REMAINING, function (e) {
      n.increaseFgRemaining(e.complete);
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "bg", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _dependency.applyDecoratedDescriptor(F.prototype, "remainingContent", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = _dependency.applyDecoratedDescriptor(F.prototype, "remaining", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = _dependency.applyDecoratedDescriptor(F.prototype, "ndBoardBG", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _dependency.applyDecoratedDescriptor(F.prototype, "ndBoard", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(F.prototype, "backgroundAnim", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = F)) || R));
_dependency2.cclegacy._RF.pop();
