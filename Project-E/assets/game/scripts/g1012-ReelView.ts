// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1012-GameConfigModel";
import * as _dependency6 from "./g1012-GameData";
import * as _dependency7 from "./g1012-GameEvent";
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
var e, n, i, o, a, r, c, l, s, u, p, f, m, _, A, h, x;
var C, d, v, E, b, g, y, T, M, F, N, S, w, I, O, P, D, R, G, L;
_publish("WIN_BOARD_ANIME_NAME", void 0), _dependency2.cclegacy._RF.push({}, "a54532tGKdFvLIXMen1ch4h", "ReelView", void 0), function (t) {
  t.MG_IDLE = "mg_idle", t.FG_IDLE = "fg_idle", t.MG_WIN = "mg_win", t.FG_WIN = "fg_win";
}(L || (L = _publish("WIN_BOARD_ANIME_NAME", {})));
var W = _dependency2._decorator.ccclass,
  U = _dependency2._decorator.property;
_publish("ReelView", (C = W("ReelView"), d = _dependency4.inject("bgContent/mainContent", _dependency2.Node), v = _dependency4.inject("bgContent/freeContent", _dependency2.Node), E = _dependency4.inject("expectContent/expectAnim_0", _dependency2.Node), b = _dependency4.inject("expectContent/expectAnim_1", _dependency2.Node), g = _dependency4.inject("expectContent/expectAnim_2", _dependency2.Node), y = _dependency4.inject("expectContent/expectAnim_3", _dependency2.Node), T = _dependency4.inject("expectContent/expectAnim_4", _dependency2.Node), M = U({
  type: _dependency2.Animation
}), C((S = _dependency.applyDecoratedDescriptor((N = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "mainContent", S, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "freeContent", w, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "expectAnim_0", I, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "expectAnim_1", O, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "expectAnim_2", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "expectAnim_3", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "expectAnim_4", R, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fullFrameAnimations", G, _dependency.assertThisInitialized(e)), e.timesConfigMap = new Map(), e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    this.removeEvents();
  }, r.init = function () {
    this.resetTimes();
  }, r.setBgSprite = function (t) {
    this.mainContent.active = t, this.freeContent.active = !t;
  }, r.setTimes = function (t, e, n) {}, r.updateTimes = function (t) {}, r.resetTimes = function () {}, r.showExpect = function (t) {
    var e = [this.expectAnim_0, this.expectAnim_1, this.expectAnim_2, this.expectAnim_3, this.expectAnim_4][t],
      n = e.getComponent(_dependency2.sp.Skeleton);
    e.active = !0, n.setAnimation(0, "expect", !0);
  }, r.hideExpect = function (t) {
    var e = [this.expectAnim_0, this.expectAnim_1, this.expectAnim_2, this.expectAnim_3, this.expectAnim_4][t],
      n = e.getComponent(_dependency2.sp.Skeleton);
    e.active = !1, n.clearTracks(), n.setToSetupPose();
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.playFullComboFrameAnime = function (t) {
    var e = this;
    _dependency2.tween(this.node).bindNodeState(false).call(function () {
      for (var t = 0; t < 4; t++) {
        e.fullFrameAnimations[t].node.active = !0;
        var n = e.fullFrameAnimations[t],
          i = n.node.getComponent(_dependency2.UIOpacity);
        i && (i.opacity = 0, _dependency2.tween(i).bindNodeState(false).to(.2, {
          opacity: 255
        }).start()), n.play();
      }
    }).delay(.7).call(function () {
      e.stopFullComboFrameAnim(t);
    }).start();
  }, r.stopFullComboFrameAnim = function (t) {
    for (var e = this, n = 0; n < 4; n++) {
      var i = this.fullFrameAnimations[n].node.getComponent(_dependency2.UIOpacity);
      i && (i.opacity = 255, _dependency2.tween(i).bindNodeState(false).to(.1, {
        opacity: 0
      }).start());
    }
    _dependency2.tween(this.node).bindNodeState(false).delay(.1).call(function () {
      for (var n = 0; n < 4; n++) e.fullFrameAnimations[n].stop();
      t();
    }).start();
  }, r.addEvents = function () {
    var t = this;
    this.on(_dependency7.GameEvent.UPDATE_WIN_AMOUNT, function (t) {}), this.on(_dependency7.GameEvent.QUICK_STOP_WIN_AMOUNT, function (t) {}), this.on(_dependency7.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.setBgSprite(e.data);
    }), this.on(_dependency7.GameEvent.SHOW_EXPECT, function (e) {
      t.showExpect(e.data);
    }), this.on(_dependency7.GameEvent.STOP_EXPECT, function (e) {
      t.hideExpect(e.data);
    }), this.on(_dependency7.GameEvent.SHOW_BOARD_FRAME_ANIM, function (e) {
      var n = e.complete;
      t.playFullComboFrameAnime(n), dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency5.EBTM.FULL_COMBO_FRAME
        }
      });
    }), this.on(_dependency7.GameEvent.START_QUICK_STOP, function (e) {
      for (var n = [t.expectAnim_0, t.expectAnim_1, t.expectAnim_2, t.expectAnim_3, t.expectAnim_4], i = 0; i < n.length; i++) n[i].getComponent(_dependency2.sp.Skeleton).clearTracks(), n[i].getComponent(_dependency2.sp.Skeleton).setToSetupPose(), n[i].active = !1;
    });
  }, r.removeEvents = function () {
    this.off(_dependency7.GameEvent.UPDATE_WIN_AMOUNT), this.off(_dependency7.GameEvent.QUICK_STOP_WIN_AMOUNT), this.off(_dependency7.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency7.GameEvent.SHOW_EXPECT), this.off(_dependency7.GameEvent.STOP_EXPECT), this.off(_dependency7.GameEvent.SHOW_BOARD_FRAME_ANIM);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "mainContent", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = _dependency.applyDecoratedDescriptor(N.prototype, "freeContent", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _dependency.applyDecoratedDescriptor(N.prototype, "expectAnim_0", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(N.prototype, "expectAnim_1", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(N.prototype, "expectAnim_2", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(N.prototype, "expectAnim_3", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(N.prototype, "expectAnim_4", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(N.prototype, "fullFrameAnimations", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), F = N)) || F));
_dependency2.cclegacy._RF.pop();
