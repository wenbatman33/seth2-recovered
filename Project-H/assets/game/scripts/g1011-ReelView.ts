// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1011-GameData";
import * as _dependency6 from "./g1011-GameEvent";
var _export;
export { _export as WIN_BOARD_ANIME_NAME };
var _export2;
export { _export2 as ReelView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WIN_BOARD_ANIME_NAME":
      _export = value;
      break;
    case "ReelView":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, i, o, r, a, c, s, p, l, u, m, _;
var f, A, h, x, d, b, C, E, v, T, g, S, y, N, I, F, w, M, O, P;
_publish("WIN_BOARD_ANIME_NAME", void 0), _dependency2.cclegacy._RF.push({}, "a54532tGKdFvLIXMen1ch4h", "ReelView", void 0), function (e) {
  e.MG_IDLE = "mg_idle", e.FG_IDLE = "fg_idle", e.MG_WIN = "mg_win", e.FG_WIN = "fg_win";
}(P || (P = _publish("WIN_BOARD_ANIME_NAME", {})));
var D = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("ReelView", (f = D("ReelView"), A = _dependency4.inject("bgContent/mainContent", _dependency2.Node), h = _dependency4.inject("bgContent/freeContent", _dependency2.Node), x = _dependency4.inject("expectContent/expectAnim_0", _dependency2.Node), d = _dependency4.inject("expectContent/expectAnim_1", _dependency2.Node), b = _dependency4.inject("expectContent/expectAnim_2", _dependency2.Node), C = _dependency4.inject("expectContent/expectAnim_3", _dependency2.Node), E = _dependency4.inject("expectContent/expectAnim_4", _dependency2.Node), v = _dependency4.inject("boardFrameAnim", _dependency2.sp.Skeleton), f((S = _dependency.applyDecoratedDescriptor((g = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "mainContent", S, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "freeContent", y, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "expectAnim_0", N, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "expectAnim_1", I, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "expectAnim_2", F, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "expectAnim_3", w, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "expectAnim_4", M, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "boardFrameAnim", O, _dependency.assertThisInitialized(t)), t;
  }
  _dependency.inheritsLoose(t, e);
  var a = t.prototype;
  return a.onLoad = function () {
    e.prototype.onLoad.call(this);
  }, a.start = function () {
    this.init();
  }, a.onDestroy = function () {
    this.removeEvents(), e.prototype.onDestroy.call(this);
  }, a.init = function () {}, a.setBgSprite = function (e) {
    this.mainContent.active = e, this.freeContent.active = !e;
  }, a.showExpect = function (e) {
    var t = [this.expectAnim_0, this.expectAnim_1, this.expectAnim_2, this.expectAnim_3, this.expectAnim_4][e],
      n = t.getComponent(_dependency2.sp.Skeleton);
    t.active = !0, n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "expect", !0);
  }, a.hideExpect = function (e) {
    var t = [this.expectAnim_0, this.expectAnim_1, this.expectAnim_2, this.expectAnim_3, this.expectAnim_4][e],
      n = t.getComponent(_dependency2.sp.Skeleton);
    t.active = !1, n.clearTracks(), n.setToSetupPose();
  }, a.playBoardFrameAnim = function (e) {
    var t = this;
    this.boardFrameAnim.node.active = !0, this.boardFrameAnim.clearTracks(), this.boardFrameAnim.setToSetupPose(), this.boardFrameAnim.setCompleteListener(null), this.boardFrameAnim.setAnimation(0, "animation", !1), this.boardFrameAnim.setCompleteListener(function () {
      t.boardFrameAnim.node.active = !1, e && e();
    });
  }, a.reset = function () {}, a.setData = function (e) {}, a.show = function () {
    this.node.active = !0;
  }, a.hide = function () {
    this.node.active = !1;
  }, a.addEvents = function () {
    var e = this;
    this.on(_dependency6.GameEvent.UPDATE_WIN_AMOUNT, function (e) {}), this.on(_dependency6.GameEvent.QUICK_STOP_WIN_AMOUNT, function (e) {}), this.on(_dependency6.GameEvent.CHANGE_GAME_STYLE, function (t) {
      e.setBgSprite(t.data);
    }), this.on(_dependency6.GameEvent.SHOW_EXPECT, function (t) {
      e.showExpect(t.data);
    }), this.on(_dependency6.GameEvent.STOP_EXPECT, function (t) {
      e.hideExpect(t.data);
    }), this.on(_dependency6.GameEvent.SHOW_BOARD_FRAME_ANIM, function (t) {
      var n = t.complete;
      e.playBoardFrameAnim(n);
    }), this.on(_dependency6.GameEvent.START_QUICK_STOP, function (t) {
      for (var n = [e.expectAnim_0, e.expectAnim_1, e.expectAnim_2, e.expectAnim_3, e.expectAnim_4], i = 0; i < n.length; i++) n[i].getComponent(_dependency2.sp.Skeleton).clearTracks(), n[i].getComponent(_dependency2.sp.Skeleton).setToSetupPose(), n[i].active = !1;
    });
  }, a.removeEvents = function () {
    this.off(_dependency6.GameEvent.UPDATE_WIN_AMOUNT), this.off(_dependency6.GameEvent.QUICK_STOP_WIN_AMOUNT), this.off(_dependency6.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency6.GameEvent.SHOW_EXPECT), this.off(_dependency6.GameEvent.STOP_EXPECT), this.off(_dependency6.GameEvent.SHOW_BOARD_FRAME_ANIM), this.off(_dependency6.GameEvent.START_QUICK_STOP);
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), t;
}(_dependency3.default)).prototype, "mainContent", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = _dependency.applyDecoratedDescriptor(g.prototype, "freeContent", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _dependency.applyDecoratedDescriptor(g.prototype, "expectAnim_0", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _dependency.applyDecoratedDescriptor(g.prototype, "expectAnim_1", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(g.prototype, "expectAnim_2", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = _dependency.applyDecoratedDescriptor(g.prototype, "expectAnim_3", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(g.prototype, "expectAnim_4", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(g.prototype, "boardFrameAnim", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = g)) || T));
_dependency2.cclegacy._RF.pop();
