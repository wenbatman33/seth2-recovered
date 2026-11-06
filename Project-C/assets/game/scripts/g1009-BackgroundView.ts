// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency6 from "./g1009-GameConfigModel";
import * as _dependency7 from "./g1009-GameData";
import * as _dependency8 from "./g1009-GameEvent";
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
var e, n, i, o, a, r, s, c, u, g, l, p, f, d, b;
var m, h, v, D, y, S, w, _, B;
_dependency2.cclegacy._RF.push({}, "6795agvgLRK8LTboHzv4BmT", "BackgroundView", void 0);
var A = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("BackgroundView", (m = A("BackgroundView"), h = _dependency4.inject("bgContent/bgSprite", _dependency2.Sprite), v = _dependency4.inject("bgDown", _dependency2.Sprite), D = _dependency4.inject("bgSpine", _dependency2.sp.Skeleton), m((w = _dependency.applyDecoratedDescriptor((S = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bgSprite", w, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bgDown", _, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bgSpine", B, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {}, r.setBg = function (t) {
    var e = _dependency6.default.getData().filePaths.common,
      n = t ? "mg_bg" : this.data.getData().gameState.isGoldenFg ? "nfg_bg" : "fg_bg",
      i = t ? "mg_board" : "fg_board";
    this.bgSprite.spriteFrame = _dependency5.LoadUtils.getDirSp(App.dataCenter.get(_dependency7.default).module, e, n), this.bgDown && (this.bgDown.spriteFrame = _dependency5.LoadUtils.getDirSp(App.dataCenter.get(_dependency7.default).module, e, i));
  }, r.setBgAnimation = function (t) {
    var e = t ? "mg" : "fg";
    this.bgSpine.setAnimation(0, e, !0);
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(_dependency8.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.setBgAnimation(e.data), t.setBg(e.data);
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "bgSprite", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = _dependency.applyDecoratedDescriptor(S.prototype, "bgDown", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(S.prototype, "bgSpine", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = S)) || y));
_dependency2.cclegacy._RF.pop();
