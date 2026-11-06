// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "./g1011-GameData";
import * as _dependency5 from "./g1011-GameEvent";
import * as _dependency6 from "../../shared/scripts/main-Decorators";
import * as _dependency7 from "./g1011-GameConfigModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency9 from "./g1011-CharacterView";
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
var n, e, i, o, a, r, s, u, l, c, f, p, m, h, _, E, d;
var L, C, A, g, T, v, y, S, b, D, P;
_dependency2.cclegacy._RF.push({}, "f33e6EjF59F1a5af3/EeSbn", "TopTipView", void 0);
var M = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("TopTipView", (L = M("TopTipView"), C = _dependency6.inject("mainContent", _dependency2.Node), A = _dependency6.inject("mainContent/mgLogo", _dependency2.Sprite), g = _dependency6.inject("mainContent/A_lotus", _dependency2.sp.Skeleton), T = _dependency6.inject("freeContent", _dependency2.Node), L((S = _dependency.applyDecoratedDescriptor((y = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
    return n = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "mainContent", S, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "mgLogo", b, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "_lotus", D, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "freeContent", P, _dependency.assertThisInitialized(n)), n;
  }
  _dependency.inheritsLoose(n, t);
  var r = n.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    this.removeEvents(), t.prototype.onDestroy.call(this);
  }, r.init = function () {
    var t = _dependency7.default.getData().filePaths.localeSpriteFrame;
    this.mgLogo.spriteFrame = _dependency8.LoadUtils.getDirSp(this.data.module, t, "l_logo"), this.initLotus();
  }, r.initLotus = function () {
    this._lotus && (this._lotus.premultipliedAlpha = !1, this._lotus.setAnimation(0, _dependency9.SpineLotusAnimations.LOOP, !0), this.removeLotusCircleAttachments());
  }, r.removeLotusCircleAttachments = function () {
    if (this._lotus) {
      var t = this._lotus._skeleton;
      if (t) {
        var n = t.findSlotIndex("circle");
        if (!(n < 0)) {
          var e = t.data.defaultSkin;
          e && e.attachments && e.attachments[n] && (e.attachments[n] = {});
        }
      }
    }
  }, r.changeModel = function (t) {
    this.mainContent.active = t, this.freeContent.active = !t;
  }, r.addEvents = function () {
    var t = this;
    this.on(_dependency5.GameEvent.CHANGE_GAME_STYLE, function (n) {
      t.changeModel(n.data);
    }), this.on(_dependency5.GameEvent.UPDATE_BAT_FEVERTIME_STATUS, function (n) {
      t._lotus && (1 == n.data ? t._lotus.animation !== _dependency9.SpineLotusAnimations.COLLECT && t._lotus.setAnimation(0, _dependency9.SpineLotusAnimations.COLLECT, !0) : t._lotus.setAnimation(0, _dependency9.SpineLotusAnimations.LOOP, !0));
    }), this.on(_dependency5.GameEvent.PARSER_REPLAY_COMPLETED, function (n) {
      t._lotus && (App.dataCenter.get(_dependency4.default).getData().definition.isLuckyMoment ? t._lotus.setAnimation(0, _dependency9.SpineLotusAnimations.COLLECT, !0) : t._lotus.setAnimation(0, _dependency9.SpineLotusAnimations.LOOP, !0));
    });
  }, r.removeEvents = function () {
    this.off(_dependency5.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency5.GameEvent.UPDATE_BAT_FEVERTIME_STATUS), this.off(_dependency5.GameEvent.PARSER_REPLAY_COMPLETED);
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }]), n;
}(_dependency3.default)).prototype, "mainContent", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), b = _dependency.applyDecoratedDescriptor(y.prototype, "mgLogo", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(y.prototype, "_lotus", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(y.prototype, "freeContent", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = y)) || v));
_dependency2.cclegacy._RF.pop();
