// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Decorators";
import * as _dependency4 from "./g1011-GameData";
import * as _dependency5 from "./g1011-GameEvent";
import * as _dependency6 from "../../shared/scripts/main-UIView";
import * as _dependency7 from "./g1011-GameConfigModel";
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
var t, n, i, o, s, r, l, u, a, c, p, f, h, m;
var b, C, d, v, y, L, F;
_dependency2.cclegacy._RF.push({}, "015b4OBKjhHQLDV0i0gVZfe", "FullComboView", void 0);
var _ = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("FullComboView", (b = _("FullComboView"), C = _dependency3.inject("spine", _dependency2.sp.Skeleton), d = _dependency3.inject("bbr", _dependency2.Node), b((L = _dependency.applyDecoratedDescriptor((y = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
    return t = Reflect.construct(e, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "spine", L, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "bbr", F, _dependency.assertThisInitialized(t)), t.count = 0, t;
  }
  _dependency.inheritsLoose(t, e), t.getPrefabUrl = function () {
    return "prefabs/FullComboView";
  };
  var r = t.prototype;
  return r.onDestroy = function () {
    this.removeEvents(), e.prototype.onDestroy.call(this);
  }, r.removeEvents = function () {
    this.off(_dependency5.GameEvent.SHOW_FULL_COMBO);
  }, r.show = function () {}, r.playFullComboAnime = function (e) {
    var t = this;
    void 0 === e && (e = null), this.count = 0, this.spine && (dispatch(_dependency5.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency7.EBTM.FULL_COMBO
      }
    }), this.spine.node.active = !0, this.spine.setCompleteListener(null), this.spine.setAnimation(0, "in", !1), this.spine.setCompleteListener(function () {
      t.spine.setCompleteListener(null), t.playFullComboLoop(e);
    }));
  }, r.playFullComboLoop = function (e) {
    var t = this;
    this.spine.setAnimation(0, "loop", !0), this.spine.setCompleteListener(function () {
      t.count++, t.count > 1 && (t.spine.setCompleteListener(null), t.close(), dispatch(_dependency5.GameEvent.SHOW_FULL_COMBO_END), e && e());
    });
  }, r.addEvents = function () {
    var t = this;
    e.prototype.addEvents.call(this), this.on(_dependency5.GameEvent.SHOW_FULL_COMBO, function (e) {
      t.playFullComboAnime();
    });
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }]), t;
}(_dependency6.default)).prototype, "spine", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(y.prototype, "bbr", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = y)) || v));
_dependency2.cclegacy._RF.pop();
