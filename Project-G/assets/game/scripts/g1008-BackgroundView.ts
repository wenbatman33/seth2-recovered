// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency4 from "../../shared/scripts/main-EventComponent";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "./g1008-GameConfigModel";
import * as _dependency7 from "./g1008-GameData";
import * as _dependency8 from "./g1008-GameEvent";
import * as _dependency9 from "../../shared/scripts/main-Bundles";
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
var e, n, i, o, r, a, c, s, u, l, f, g, p, d, h, b, m;
var v, y, B, C, D, E, P, w, S;
_dependency2.cclegacy._RF.push({}, "5a59dVTYeJPqrfr1O4EgsgX", "BackgroundView", void 0);
var _ = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("BackgroundView", (v = _("BackgroundView"), y = _dependency5.inject("bgContent", _dependency2.Sprite), B = _dependency5.inject("bgSpine", _dependency2.sp.Skeleton), C = _dependency5.inject("fgParticle", _dependency2.Node), v((P = _dependency.applyDecoratedDescriptor((E = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bgContent", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bgSpine", w, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgParticle", S, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var a = e.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, a.start = function () {
    this.init();
  }, a.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, a.init = function () {
    _dependency6.default.useProEffect || (this.fgParticle.active = !1);
  }, a.setBg = function (t) {
    var e = _dependency6.default.getData().filePaths.common,
      n = t ? "mg_bg" : "fg_bg",
      i = this.bgContent.getComponent(_dependency2.Sprite);
    i.spriteFrame = i.spriteFrame = _dependency3.LoadUtils.getDirSp(_dependency9.EBundles[_dependency9.EBundles.g1008], e, n);
  }, a.setBgAnimation = function (t) {
    var e = t ? "mg" : "fg";
    this.bgSpine.setAnimation(0, e, !0), this.fgParticle.active = !t;
  }, a.reset = function () {}, a.setData = function (t) {}, a.show = function () {
    this.node.active = !0;
  }, a.hide = function () {
    this.node.active = !1;
  }, a.addEvents = function () {
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
}(_dependency4.default)).prototype, "bgContent", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = _dependency.applyDecoratedDescriptor(E.prototype, "bgSpine", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = _dependency.applyDecoratedDescriptor(E.prototype, "fgParticle", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = E)) || D));
_dependency2.cclegacy._RF.pop();
