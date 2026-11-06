// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-EventComponent";
import * as _dependency4 from "./main-Decorators";
import * as _dependency5 from "./main-UrlUtils";
import * as _dependency6 from "./slotFramework-SlotFrameworkData";
import * as _dependency7 from "./slotFramework-GameNameMap";
import * as _dependency8 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency9 from "./slotFramework-PlatformModel";
var _export;
export { _export as Notify };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Notify":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, n, a, o, r, s, l, c, p, m, u, d, f, h, w, S, G;
var g, v, N, y, k, b, P, D, E;
_dependency2.cclegacy._RF.push({}, "920b5BTiOZL05vl3roZXqgW", "Notify", void 0);
var F = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("Notify", (g = F("Notify"), v = _dependency4.inject("newGame", _dependency2.Node), N = _dependency4.inject("newGame/iconSpine", _dependency2.sp.Skeleton), y = _dependency4.inject("newGame/iconSpine/logo", _dependency2.Sprite), g((P = _dependency.applyDecoratedDescriptor((b = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
    return t = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "newGameNode", P, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "newGameSpine", D, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "newGameSprite", E, _dependency.assertThisInitialized(t)), t.spineSocket = void 0, t;
  }
  _dependency.inheritsLoose(t, e);
  var r = t.prototype;
  return r.start = function () {
    this.spineSocket = new _dependency2.sp.SpineSocket("root/logo", this.newGameSprite.node), this.initNewGameNotify();
  }, r.initNewGameNotify = function () {
    var e = _dependency5.default.getParam("gn");
    "portrait" == _dependency5.default.getViewModeParam() ? this.newGameNode && this.newGameNode.setPosition(_dependency2.v3(-278, 296, 0)) : this.newGameNode && this.newGameNode.setPosition(_dependency2.v3(-572, 14, 0));
    var t = this.data.getData().filePaths,
      i = t.iconSpDir,
      n = t.hadesPromoSpineDir,
      a = t.goldenSethPromoSpineDir,
      o = "",
      r = "";
    "hades" == e ? (o = _dependency7.GameNameMap["golden-seth"], r = a) : (o = _dependency7.GameNameMap.hades, r = n);
    var s = App.cache.get(this.data.module, r).data,
      l = null;
    s.forEach(function (e) {
      "promo" === e.name && (l = e);
    }), l && (this.newGameSpine.skeletonData = l, this.newGameSpine.sockets = [], this.newGameSpine.sockets.push(this.spineSocket), this.newGameSpine.sockets = this.newGameSpine.sockets, this.newGameSpine.setAnimation(0, "promo", !0));
    var p = this.data.getSpriteFrame(this.data.module, i, o);
    p && (this.newGameSprite.spriteFrame = p);
  }, r.addEvents = function () {
    var e = this;
    this.on(_dependency8.SlotFrameworkEvent.INIT_RESPONSE, function () {
      _dependency9.default.getData().disablePromotions && 1 == _dependency9.default.getData().disablePromotions ? e.newGameNode.active = !1 : e.newGameNode.active = !0;
    });
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), t;
}(_dependency3.default)).prototype, "newGameNode", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), D = _dependency.applyDecoratedDescriptor(b.prototype, "newGameSpine", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), E = _dependency.applyDecoratedDescriptor(b.prototype, "newGameSprite", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), k = b)) || k));
_dependency2.cclegacy._RF.pop();
