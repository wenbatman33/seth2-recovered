// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency5 from "../../shared/scripts/main-EventComponent";
import * as _dependency6 from "../../shared/scripts/main-Decorators";
import * as _dependency7 from "./g1001-GameConfigModel";
import * as _dependency8 from "./g1001-GameData";
import * as _dependency9 from "./g1001-GameEvent";
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
var n, e, i, o, r, a, u, c, s, g, l, p, f, b, d, h;
var m, v, y, S, w, D, _, k, B, E, L, C, A;
_dependency2.cclegacy._RF.push({}, "62286ZNjhxEsphH0ACSCQCb", "BackgroundView", void 0);
var G = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("BackgroundView", (m = G("BackgroundView"), v = _dependency6.inject("bgContent/bgLeft", _dependency2.Sprite), y = _dependency6.inject("bgContent/bgRight", _dependency2.Sprite), S = _dependency6.inject("bgDown", _dependency2.Sprite), w = _dependency6.inject("bgSpine", _dependency2.sp.Skeleton), D = _dependency6.inject("bgTopSpine", _dependency2.sp.Skeleton), m((B = _dependency.applyDecoratedDescriptor((k = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
    return n = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "bgLeft", B, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "bgRight", E, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "bgDown", L, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "bgSpine", C, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "bgTopSpine", A, _dependency.assertThisInitialized(n)), n;
  }
  _dependency.inheritsLoose(n, t);
  var a = n.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, a.start = function () {
    this.init();
  }, a.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, a.init = function () {
    _dependency7.default.useProEffect || (this.bgSpine.node.active = !1, this.bgTopSpine.node.active = !1);
  }, a.setBg = function (t) {
    var n = _dependency7.default.getData().filePaths.common,
      e = t ? "mg_bg" : "fg_bg",
      i = t ? "mg_board" : "fg_board";
    this.bgLeft.spriteFrame = this.bgRight.spriteFrame = _dependency4.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1001], n, e), this.bgDown && (this.bgDown.spriteFrame = _dependency4.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.g1001], n, i));
  }, a.setBgAnimation = function (t) {
    var n = t ? "background_M" : "background_FG",
      e = t ? "background_M_top" : "background_FG_top";
    _dependency7.default.useProEffect && (this.bgSpine.setAnimation(0, n, !0), this.bgTopSpine.setAnimation(0, e, !0));
  }, a.reset = function () {}, a.setData = function (t) {}, a.show = function () {
    this.node.active = !0;
  }, a.hide = function () {
    this.node.active = !1;
  }, a.addEvents = function () {
    var t = this;
    this.on(_dependency9.GameEvent.CHANGE_GAME_STYLE, function (n) {
      t.setBgAnimation(n.data), t.setBg(n.data);
    });
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), n;
}(_dependency5.default)).prototype, "bgLeft", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = _dependency.applyDecoratedDescriptor(k.prototype, "bgRight", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(k.prototype, "bgDown", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = _dependency.applyDecoratedDescriptor(k.prototype, "bgSpine", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), A = _dependency.applyDecoratedDescriptor(k.prototype, "bgTopSpine", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = k)) || _));
_dependency2.cclegacy._RF.pop();
