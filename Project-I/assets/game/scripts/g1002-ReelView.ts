// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1002-GameConfigModel";
import * as _dependency6 from "./g1002-GameData";
import * as _dependency7 from "./g1002-GameEvent";
import * as _dependency8 from "../../shared/scripts/slotFramework-LoadUtils";
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
var e, i, n, o, a, r, l, s, u, m, c, p, f, _, h, A, g;
var b, d, T, E, C, x, M, S, v, y, D, w, I, X, F, P, L, N, O, R, B, z, G, U, W, k, H, K, V, Y;
_publish("WIN_BOARD_ANIME_NAME", void 0), _dependency2.cclegacy._RF.push({}, "a54532tGKdFvLIXMen1ch4h", "ReelView", void 0), function (t) {
  t.MG_IDLE = "mg_idle", t.FG_IDLE = "fg_idle", t.MG_WIN = "mg_win", t.FG_WIN = "fg_win";
}(Y || (Y = _publish("WIN_BOARD_ANIME_NAME", {})));
var Q = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("ReelView", (b = Q("ReelView"), d = _dependency4.inject("bgContent/bgLeft", _dependency2.Sprite), T = _dependency4.inject("bgContent/bgRight", _dependency2.Sprite), E = _dependency4.inject("multipleContent", _dependency2.Node), C = _dependency4.inject("multipleContent/multipleX1", _dependency2.Node), x = _dependency4.inject("multipleContent/multipleX2", _dependency2.Node), M = _dependency4.inject("multipleContent/multipleX3", _dependency2.Node), S = _dependency4.inject("multipleContent/multipleX5", _dependency2.Node), v = _dependency4.inject("expectContent/expectAnim_0", _dependency2.Node), y = _dependency4.inject("expectContent/expectAnim_1", _dependency2.Node), D = _dependency4.inject("expectContent/expectAnim_2", _dependency2.Node), w = _dependency4.inject("expectContent/expectAnim_3", _dependency2.Node), I = _dependency4.inject("expectContent/expectAnim_4", _dependency2.Node), X = _dependency4.inject("boardFrameAnim", _dependency2.sp.Skeleton), b((L = _dependency.applyDecoratedDescriptor((P = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bgLeft", L, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bgRight", N, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "multipleContent", O, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "multipleX1", R, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "multipleX2", B, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "multipleX3", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "multipleX5", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "expectAnim_0", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "expectAnim_1", W, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "expectAnim_2", k, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "expectAnim_3", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "expectAnim_4", K, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "boardFrameAnim", V, _dependency.assertThisInitialized(e)), e.timesConfigMap = new Map(), e;
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
    this.initTimesConfigMap(), this.resetTimes();
  }, r.setBgSprite = function (t) {
    var e = t ? "mg_reel" : "fg_reel",
      i = _dependency5.default.getData().filePaths.common,
      n = _dependency8.LoadUtils.getDirSp(this.data.module, i, e);
    this.bgLeft.spriteFrame = this.bgRight.spriteFrame = n;
  }, r.initTimesConfigMap = function () {
    this.timesConfigMap.set(1, {
      node: this.multipleX1,
      times: 1,
      btm: null
    }), this.timesConfigMap.set(2, {
      node: this.multipleX2,
      times: 2,
      btm: _dependency5.EBTM.BTM_X2
    }), this.timesConfigMap.set(3, {
      node: this.multipleX3,
      times: 3,
      btm: _dependency5.EBTM.BTM_X3
    }), this.timesConfigMap.set(5, {
      node: this.multipleX5,
      times: 5,
      btm: _dependency5.EBTM.BTM_X5
    });
  }, r.setTimes = function (t, e, i) {
    var n = _dependency5.default.getData().filePaths.common,
      o = "multiple_x" + e + (i ? "_light" : ""),
      a = this.timesConfigMap.get(e).btm;
    i && a && dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: a
      }
    }), t.getComponent(_dependency2.Sprite).spriteFrame = _dependency8.LoadUtils.getDirSp(this.data.module, n, o);
  }, r.updateTimes = function (t) {
    var e = this;
    this.timesConfigMap.forEach(function (i, n) {
      e.setTimes(i.node, i.times, t === n);
    });
  }, r.resetTimes = function () {
    var t = this;
    this.timesConfigMap.forEach(function (e, i) {
      t.setTimes(e.node, e.times, 1 === i);
    });
  }, r.showExpect = function (t) {
    var e = [this.expectAnim_0, this.expectAnim_1, this.expectAnim_2, this.expectAnim_3, this.expectAnim_4][t],
      i = e.getComponent(_dependency2.sp.Skeleton);
    e.active = !0, i.setAnimation(0, "loop", !0);
  }, r.hideExpect = function (t) {
    var e = [this.expectAnim_0, this.expectAnim_1, this.expectAnim_2, this.expectAnim_3, this.expectAnim_4][t],
      i = e.getComponent(_dependency2.sp.Skeleton);
    e.active = !1, i.clearTracks(), i.setToSetupPose();
  }, r.playBoardFrameAnim = function (t) {
    var e = this;
    this.boardFrameAnim.node.active = !0, this.boardFrameAnim.clearTracks(), this.boardFrameAnim.setToSetupPose(), this.boardFrameAnim.setCompleteListener(null), this.boardFrameAnim.setAnimation(0, "board_frame", !1), this.boardFrameAnim.setCompleteListener(function () {
      e.boardFrameAnim.node.active = !1, t && t();
    });
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(_dependency7.GameEvent.UPDATE_WIN_AMOUNT, function (t) {}), this.on(_dependency7.GameEvent.QUICK_STOP_WIN_AMOUNT, function (t) {}), this.on(_dependency7.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.setBgSprite(e.data);
    }), this.on(_dependency7.GameEvent.UPDATE_TIMES, function (e) {
      var i = t.data.getData().parser.currentSpinIndex + 1,
        n = t.data.getData().parser.currentGameState.currentTimes,
        o = 1;
      t.data.getData().gameState[i] && n !== (o = t.data.getData().gameState[i].currentTimes) && t.updateTimes(o);
    }), this.on(_dependency7.GameEvent.RESET_TIMES, function (e) {
      t.resetTimes();
    }), this.on(_dependency7.GameEvent.SHOW_EXPECT, function (e) {
      t.showExpect(e.data);
    }), this.on(_dependency7.GameEvent.STOP_EXPECT, function (e) {
      t.hideExpect(e.data);
    }), this.on(_dependency7.GameEvent.SHOW_BOARD_FRAME_ANIM, function (e) {
      var i = e.complete;
      t.playBoardFrameAnim(i), dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency5.EBTM.FULL_COMBO
        }
      });
    }), this.on(_dependency7.GameEvent.START_QUICK_STOP, function (e) {
      for (var i = [t.expectAnim_0, t.expectAnim_1, t.expectAnim_2, t.expectAnim_3, t.expectAnim_4], n = 0; n < i.length; n++) i[n].getComponent(_dependency2.sp.Skeleton).clearTracks(), i[n].getComponent(_dependency2.sp.Skeleton).setToSetupPose(), i[n].active = !1;
    });
  }, r.removeEvents = function () {
    this.off(_dependency7.GameEvent.UPDATE_WIN_AMOUNT), this.off(_dependency7.GameEvent.QUICK_STOP_WIN_AMOUNT), this.off(_dependency7.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency7.GameEvent.UPDATE_TIMES), this.off(_dependency7.GameEvent.RESET_TIMES), this.off(_dependency7.GameEvent.SHOW_EXPECT), this.off(_dependency7.GameEvent.STOP_EXPECT), this.off(_dependency7.GameEvent.SHOW_BOARD_FRAME_ANIM);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "bgLeft", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _dependency.applyDecoratedDescriptor(P.prototype, "bgRight", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(P.prototype, "multipleContent", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(P.prototype, "multipleX1", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(P.prototype, "multipleX2", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(P.prototype, "multipleX3", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(P.prototype, "multipleX5", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(P.prototype, "expectAnim_0", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = _dependency.applyDecoratedDescriptor(P.prototype, "expectAnim_1", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(P.prototype, "expectAnim_2", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(P.prototype, "expectAnim_3", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(P.prototype, "expectAnim_4", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(P.prototype, "boardFrameAnim", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = P)) || F));
_dependency2.cclegacy._RF.pop();
