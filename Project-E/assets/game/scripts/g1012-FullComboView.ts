// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Decorators";
import * as _dependency4 from "./g1012-GameData";
import * as _dependency5 from "./g1012-GameEvent";
import * as _dependency6 from "../../shared/scripts/main-UIView";
import * as _dependency7 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency8 from "./g1012-GameConfigModel";
var _export;
export { _export as FullComboView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FullComboView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, l, s, r, a, u, c, p, f, m, h, b, d;
var C, y, L, v, F, g, D;
_dependency2.cclegacy._RF.push({}, "50e14MzFTNKIIIu2EV1XeVq", "FullComboView", void 0);
var _ = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("FullComboView", (C = _("FullComboView"), y = _dependency3.inject("spine", _dependency2.sp.Skeleton), L = _dependency3.inject("bbr", _dependency2.Node), C((g = _dependency.applyDecoratedDescriptor((F = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, l = new Array(n), s = 0; s < n; s++) l[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(l).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "spine", g, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bbr", D, _dependency.assertThisInitialized(e)), e.count = 0, e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/FullComboView";
  };
  var s = e.prototype;
  return s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.show = function () {}, s.playFullComboAnime = function (t) {
    var e = this;
    void 0 === t && (t = null);
    var n = _dependency8.default.getData().filePaths.fullComboSkeleton,
      i = _dependency7.LoadUtils.getDirSkeleton(this.data.module, n, "fullcombo");
    this.count = 0, this.spine && (dispatch(_dependency5.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency8.EBTM.FULL_COMBO
      }
    }), this.spine.node.active = !0, this.spine.skeletonData = i, this.spine.setCompleteListener(null), this.spine.setAnimation(0, "in", !1), this.spine.setCompleteListener(function () {
      e.spine.setCompleteListener(null), e.playFullComboLoop(t);
    }));
  }, s.playFullComboLoop = function (t) {
    var e = this;
    this.spine.setAnimation(0, "loop", !0), this.spine.setCompleteListener(function () {
      e.count++, e.count > 0 && (e.spine.setCompleteListener(null), e.close(), dispatch(_dependency5.GameEvent.SHOW_FULL_COMBO_END), t && t());
    });
  }, s.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency5.GameEvent.SHOW_FULL_COMBO, function (t) {
      e.playFullComboAnime();
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }]), e;
}(_dependency6.default)).prototype, "spine", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(F.prototype, "bbr", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = F)) || v));
_dependency2.cclegacy._RF.pop();
