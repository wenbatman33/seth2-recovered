// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1008-GameData";
import * as _dependency6 from "./g1008-GameEvent";
import * as _dependency7 from "./g1008-GameConfigModel";
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
var e, n, i, o, a, r, c, l, s, u, f, p, h, d, y, m;
var b, v, C, w, g, F, O, L, A;
_dependency2.cclegacy._RF.push({}, "d388btm7i1BfJT3eKTwUGaX", "FullComboView", void 0);
var D = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("FullComboView", (b = D("FullComboView"), v = _dependency4.inject("alert", _dependency2.Node), C = _dependency4.inject("alert", _dependency2.UIOpacityComponent), w = _dependency4.inject("alert/effect", _dependency2.sp.Skeleton), b((O = _dependency.applyDecoratedDescriptor((F = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", O, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "alertOpacity", L, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "effect", A, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {}, r.showFullCombo = function (t) {
    var e = this;
    this.data.getData().parser.isFullCombo ? (this.openAlert(), this.effect.setAnimation(0, "in", !1), this.effect.setCompleteListener(function () {
      e.effect.setAnimation(0, "loop", !0);
    }), dispatch(_dependency6.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency7.EBTM.FULLCOMBO
      }
    }), this.scheduleOnce(function () {
      e.closeAlert(function () {
        t && t();
      });
    }, 3)) : t && t();
  }, r.openAlert = function () {
    this.alert.active = !0, _dependency2.tween(this.alertOpacity).bindNodeState(false).to(1, {
      opacity: 255
    }).start();
  }, r.closeAlert = function (t) {
    var e = this;
    _dependency2.tween(this.alertOpacity).bindNodeState(false).to(.3, {
      opacity: 0
    }).call(function () {
      e.alert.active = !1, t && t();
    }).start();
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(_dependency6.GameEvent.SHOW_FULL_COMBO, function (e) {
      t.showFullCombo(e.complete);
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "alert", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(F.prototype, "alertOpacity", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), A = _dependency.applyDecoratedDescriptor(F.prototype, "effect", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), g = F)) || g));
_dependency2.cclegacy._RF.pop();
