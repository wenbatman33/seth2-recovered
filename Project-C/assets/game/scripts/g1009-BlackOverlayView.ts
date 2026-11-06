// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Decorators";
import * as _dependency4 from "../../shared/scripts/main-EventComponent";
import * as _dependency5 from "./g1009-GameData";
import * as _dependency6 from "./g1009-GameEvent";
var _export;
export { _export as BlackOverlayView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BlackOverlayView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, a, n, r, o, i, l, s, c, u, b, p, f;
var y, d, m, g, h, v, S, _, C;
_dependency2.cclegacy._RF.push({}, "35ebfDwb1BJ2J7IhRhzeDOe", "BlackOverlayView", void 0);
var D = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("BlackOverlayView", (y = D("BlackOverlayView"), d = _dependency3.inject("bbr", _dependency2.Node), m = _dependency3.inject("symbolContainer", _dependency2.Node), g = _dependency3.inject("reelLogo", _dependency2.Sprite), y((S = _dependency.applyDecoratedDescriptor((v = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bbr", S, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "symbolContainer", _, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "reelLogo", C, _dependency.assertThisInitialized(e)), e.scatterSymbols = [], e.splitSymbols = [], e;
  }
  _dependency.inheritsLoose(e, t);
  var i = e.prototype;
  return i.setReelLogo = function (t) {
    var e = this.data.getData().gameState.isGoldenFg,
      a = t ? "mg_atg" : e ? "nfg_atg" : "fg_atg",
      n = this.data.getCommonSpriteFrame(a);
    this.reelLogo.spriteFrame = n;
  }, i.addEvents = function () {
    var t = this;
    this.on(_dependency6.GameEvent.CHANGE_GAME_STYLE, function (e) {
      var a = e.data;
      t.setReelLogo(a);
    }), this.on(_dependency6.GameEvent.SHOW_DARK, function () {
      t.bbr.active = !0;
    }), this.on(_dependency6.GameEvent.HIDE_DARK, function () {
      t.bbr.active = !1;
      for (var e = 0; e < t.scatterSymbols.length; e++) dispatch(_dependency6.GameEvent.BACK_SCATTER, {
        data: t.scatterSymbols[e]
      });
      t.scatterSymbols = [];
    }), this.on(_dependency6.GameEvent.SPLIT_HIDE_DARK, function () {
      t.bbr.active = !1;
      for (var e = 0; e < t.splitSymbols.length; e++) dispatch(_dependency6.GameEvent.BACK_SPLIT, {
        data: t.splitSymbols[e]
      });
      t.splitSymbols = [];
    }), this.on(_dependency6.GameEvent.MOVE_SCATTER, function (e) {
      t.scatterSymbols.push(e.data), t.symbolContainer.addChild(e.data);
    }), this.on(_dependency6.GameEvent.MOVE_SPLIT, function (e) {
      t.splitSymbols.push(e.data), t.symbolContainer.addChild(e.data);
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "bbr", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = _dependency.applyDecoratedDescriptor(v.prototype, "symbolContainer", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = _dependency.applyDecoratedDescriptor(v.prototype, "reelLogo", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), h = v)) || h));
_dependency2.cclegacy._RF.pop();
