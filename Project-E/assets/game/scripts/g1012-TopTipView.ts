// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "./g1012-GameData";
import * as _dependency5 from "./g1012-GameEvent";
import * as _dependency6 from "../../shared/scripts/main-Decorators";
import * as _dependency7 from "./g1012-GameConfigModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency9 from "../../shared/scripts/main-Bundles";
var _export;
export { _export as TopTipView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TopTipView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, i, r, a, o, f, u, s, c, l, p, T, m, g, E, d;
var h, v, _, R, A, S, F, b, C, I, y, D, G, N, M, P, w;
_dependency2.cclegacy._RF.push({}, "f33e6EjF59F1a5af3/EeSbn", "TopTipView", void 0);
var L = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("TopTipView", (h = L("TopTipView"), v = _dependency6.inject("mainContent", _dependency2.Node), _ = _dependency6.inject("mainContent/A_fevertime", _dependency2.Node), R = _dependency6.inject("freeContent", _dependency2.Node), A = _dependency6.inject("freeContent/freeTick", _dependency2.Label), S = _dependency6.inject("freeContent/freeRate/bg", _dependency2.Sprite), F = _dependency6.inject("freeContent/freeRate/title", _dependency2.Sprite), b = _dependency6.inject("freeContent/freeRate/text", _dependency2.Label), h((y = _dependency.applyDecoratedDescriptor((I = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "mainContent", y, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "mgFevertime", D, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "freeContent", G, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "freeTick", N, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "freeRateBg", M, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "freeRateTitle", P, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "freeRateText", w, _dependency.assertThisInitialized(t)), t.isFeverTime = !1, t.isWaitSpin = !1, t;
  }
  _dependency.inheritsLoose(t, e);
  var o = t.prototype;
  return o.onLoad = function () {
    e.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    this.removeEvents();
  }, o.init = function () {
    var e = _dependency7.default.getData().filePaths.localeSpriteFrame;
    this.freeRateTitle.spriteFrame = _dependency8.LoadUtils.getDirSp(_dependency9.EBundles[_dependency9.EBundles.g1012], e, "F_font_01");
  }, o.updateFgRemaining = function () {
    var e = this.data.getData().parser.currentSpinIndex + 1,
      t = this.data.getData().gameState[e],
      n = t.numFreeSpins,
      i = t.freeTimesDenominator,
      r = i - n;
    this.freeTick.string = r + "/" + i;
  }, o.increaseFgRemaining = function (e) {}, o.changeModel = function (e) {
    if (this.mainContent.active = e, this.freeContent.active = !e, !e) {
      var t = this.data.getData().parser.currentGameState.selectFgMultiple;
      this.freeRateText.string = "x" + t;
    }
  }, o.addEvents = function () {
    var e = this;
    this.on(_dependency5.GameEvent.CHANGE_GAME_STYLE, function (t) {
      e.changeModel(t.data);
    }), this.on(_dependency5.GameEvent.UPDATE_FG_REMAINING, function (t) {
      e.updateFgRemaining();
    }), this.on(_dependency5.GameEvent.INCREASE_FG_REMAINING, function (t) {
      e.increaseFgRemaining(t.complete);
    }), this.on(_dependency5.GameEvent.PARSER_REPLAY_COMPLETED, function (t) {
      e.isFeverTime = e.data.getData().definition.isLuckyMoment, e.mgFevertime.active = e.isFeverTime;
    }), this.on(_dependency5.GameEvent.UPDATE_BAT_FEVERTIME_STATUS, function (t) {
      void 0 === t.data && (t.data = !1), e.isFeverTime = t.data, e.mgFevertime.active = t.data;
    }), this.on(_dependency5.GameEvent.START_SPIN, function (t) {
      e.isWaitSpin = !0;
    }), this.on(_dependency5.GameEvent.WAIT_SPIN_STATE, function (t) {
      e.isWaitSpin = !1;
    });
  }, o.removeEvents = function () {
    this.off(_dependency5.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency5.GameEvent.UPDATE_FG_REMAINING), this.off(_dependency5.GameEvent.INCREASE_FG_REMAINING), this.off(_dependency5.GameEvent.UPDATE_BAT_FEVERTIME_STATUS), this.off(_dependency5.GameEvent.START_SPIN), this.off(_dependency5.GameEvent.WAIT_SPIN_STATE);
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }]), t;
}(_dependency3.default)).prototype, "mainContent", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(I.prototype, "mgFevertime", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(I.prototype, "freeContent", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _dependency.applyDecoratedDescriptor(I.prototype, "freeTick", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(I.prototype, "freeRateBg", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(I.prototype, "freeRateTitle", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = _dependency.applyDecoratedDescriptor(I.prototype, "freeRateText", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = I)) || C));
_dependency2.cclegacy._RF.pop();
