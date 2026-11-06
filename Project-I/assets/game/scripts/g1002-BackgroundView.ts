// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency4 from "../../shared/scripts/main-EventComponent";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "./g1002-GameConfigModel";
import * as _dependency7 from "./g1002-GameData";
import * as _dependency8 from "./g1002-GameEvent";
import * as _dependency9 from "../../shared/scripts/slotFramework-ReplayModel";
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
var t, e, i, a, o, r, s, u, c, g, l, f, m, p, d, h, b, C, v, E, w;
var y, S, R, B, _, D, I, A, G, N, F, k, P, L, M, z, T;
_dependency2.cclegacy._RF.push({}, "83e72N9BOdIbocPQwddl1iP", "BackgroundView", void 0);
var q,
  V = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (n) {
  n.LOOP = "loop";
}(q || (q = {}));
_publish("BackgroundView", (y = V("BackgroundView"), S = _dependency5.inject("bg", _dependency2.Sprite), R = _dependency5.inject("bgSpine", _dependency2.sp.Skeleton), B = _dependency5.inject("boardContent/leftBoard", _dependency2.Sprite), _ = _dependency5.inject("boardContent/rightBoard", _dependency2.Sprite), D = _dependency5.inject("remainingContent", _dependency2.Node), I = _dependency5.inject("remainingContent/fgRemainingSp", _dependency2.Sprite), A = _dependency5.inject("remainingContent/remaining", _dependency2.Label), y((F = _dependency.applyDecoratedDescriptor((N = function (n) {
  var _nativeConstructor = t;
  function t() {
    for (var t, e = arguments.length, o = new Array(e), r = 0; r < e; r++) o[r] = arguments[r];
    return t = Reflect.construct(n, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "bg", F, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "bgSpine", k, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "leftBoard", P, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "rightBoard", L, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "remainingContent", M, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "fgRemainingSp", z, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "remaining", T, _dependency.assertThisInitialized(t)), t.increaseCounts = 0, t;
  }
  _dependency.inheritsLoose(t, n);
  var r = t.prototype;
  return r.onLoad = function () {
    n.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    this.removeEvents();
  }, r.init = function () {
    _dependency6.default.useProEffect;
  }, r.setBg = function (n) {
    var t = _dependency6.default.getData().filePaths.common,
      e = n ? "mg_board" : "fg_board",
      i = _dependency3.LoadUtils.getDirSp(this.data.module, t, e);
    this.leftBoard.spriteFrame = this.rightBoard.spriteFrame = i, this.remainingContent.active = !n;
  }, r.setBgAnim = function (n) {
    var t = n ? "bg_mg" : "bg_fg",
      e = _dependency6.default.getData().filePaths,
      i = e.bgMgSkeletonData,
      a = e.bgFgSkeletonData,
      o = n ? i : a;
    this.bgSpine.skeletonData = _dependency3.LoadUtils.getDirSkeleton(this.data.module, o, t), _dependency6.default.useProEffect && this.bgSpine.setAnimation(0, "loop", !0);
  }, r.updateFgRemaining = function () {
    var n = this.data.getData().parser.currentSpinIndex + 1,
      t = this.data.getData().gameState[n].freeGameCount;
    Number(this.remaining.string) != t && this.playBounceTween(this.remaining.node), this.remaining.string = "" + t;
  }, r.setRemainingColor = function (n) {
    var t = {
      dark: new _dependency2.Color(76.5, 76.5, 76.5),
      light: new _dependency2.Color(255, 255, 255, 255)
    };
    [this.fgRemainingSp, this.remaining].forEach(function (e) {
      e.getComponent(_dependency2.Label) && (e.getComponent(_dependency2.Label).color = t[n]), e.getComponent(_dependency2.Sprite) && (e.getComponent(_dependency2.Sprite).color = t[n]);
    });
  }, r.increaseFgRemaining = function (n) {
    var t = this,
      e = this.data.getData().definition.extraFgRounds,
      i = this.remaining.color;
    this.increaseCounts++;
    var a = 1 + .05 * this.increaseCounts,
      o = 1 - .02 * this.increaseCounts;
    _dependency2.tween(this.remaining.node).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(a, a, 1)
    }, {
      onComplete: function () {
        t.remaining.string = (Number(t.remaining.string) + 1).toString();
      },
      easing: "quintIn"
    }).to(.05, {
      scale: new _dependency2.Vec3(o, o, 1)
    }, {
      easing: "quintIn"
    }).call(function () {
      t.increaseCounts == e ? (t.increaseCounts = 0, t.scheduleOnce(function () {
        n();
      }, 1), _dependency2.tween(t.remaining.node).bindNodeState(false).to(.1, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }, {
        easing: "quintIn"
      }).start()) : t.increaseCounts < e && t.increaseFgRemaining(n);
    }).start(), _dependency2.tween(i).bindNodeState(false).to(.1, {
      a: 130
    }, {
      easing: "quintIn"
    }).to(.05, {
      a: 255
    }, {
      easing: "quintIn"
    }).start();
  }, r.playBounceTween = function (n, t) {
    _dependency2.tween(n).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(1.5, 1.5, 1.5)
    }).delay(.01).to(.1, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        t && t();
      }
    }).start();
  }, r.reset = function () {
    this.increaseCounts = 0, this.remaining.string = "10";
  }, r.setData = function (n) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var n = this;
    this.on(_dependency8.GameEvent.CHANGE_GAME_STYLE, function (t) {
      var e = t.data;
      n.setBgAnim(e), n.setBg(e), _dependency9.default.isReplay && n.setRemainingColor("dark"), e && n.reset();
    }), this.on(_dependency8.GameEvent.UPDATE_FG_REMAINING, function (t) {
      n.updateFgRemaining();
    }), this.on(_dependency8.GameEvent.INCREASE_FG_REMAINING, function (t) {
      n.increaseFgRemaining(t.complete);
    });
  }, r.removeEvents = function () {
    this.off(_dependency8.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency8.GameEvent.UPDATE_FG_REMAINING), this.off(_dependency8.GameEvent.INCREASE_FG_REMAINING);
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), t;
}(_dependency4.default)).prototype, "bg", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(N.prototype, "bgSpine", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(N.prototype, "leftBoard", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(N.prototype, "rightBoard", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(N.prototype, "remainingContent", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(N.prototype, "fgRemainingSp", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = _dependency.applyDecoratedDescriptor(N.prototype, "remaining", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = N)) || G));
_dependency2.cclegacy._RF.pop();
