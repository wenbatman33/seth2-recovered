// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1009-GameConfigModel";
import * as _dependency6 from "./g1009-GameEvent";
var _export;
export { _export as AnimView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "AnimView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, l, n, r, a, o, c, _, u, s, v, p;
var g, b, f, d, m, k, I, L, V, w, y, E, M, h, A, G, C, O, S;
_dependency2.cclegacy._RF.push({}, "7e2c1vt/JBK6q3E52vUQS96", "AnimaView", void 0);
var z = _dependency2._decorator.ccclass,
  R = _dependency2._decorator.property;
_publish("AnimView", (g = z("AnimView"), b = R(_dependency2.Node), f = _dependency4.inject("tiger_lv_01", _dependency2.sp.Skeleton), d = _dependency4.inject("tiger_lv_02", _dependency2.sp.Skeleton), m = _dependency4.inject("tiger_lv_03", _dependency2.sp.Skeleton), k = _dependency4.inject("girl_lv_01", _dependency2.sp.Skeleton), I = _dependency4.inject("girl_lv_02", _dependency2.sp.Skeleton), L = _dependency4.inject("girl_lv_03", _dependency2.sp.Skeleton), V = _dependency4.inject("bbr", _dependency2.Node), g((E = _dependency.applyDecoratedDescriptor((y = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "animView", E, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "tiger_lv_01", M, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "tiger_lv_02", h, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "tiger_lv_03", A, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "girl_lv_01", G, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "girl_lv_02", C, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "girl_lv_03", O, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "blackMask", S, _dependency.assertThisInitialized(t)), t;
  }
  _dependency.inheritsLoose(t, e);
  var r = t.prototype;
  return r.update = function () {}, r.addEvents = function () {
    var e = this;
    this.on(_dependency6.GameEvent.SHOW_WOMEN_LOCK_ANIM, function (t) {
      var i = "",
        l = "",
        n = null;
      switch (t.data) {
        case 1:
          i = "lv_01", l = _dependency5.EBTM.TIGER_ANIM_VOICE_LV1, n = e.tiger_lv_01;
          break;
        case 2:
          i = "lv_02", l = _dependency5.EBTM.TIGER_ANIM_VOICE_LV2, n = e.tiger_lv_02;
          break;
        case 3:
          i = "lv_03", l = _dependency5.EBTM.TIGER_ANIM_VOICE_LV3, n = e.tiger_lv_03;
          break;
        default:
          return void t.complete();
      }
      _dependency2.tween(e).bindNodeState(false).delay(0).call(function () {
        e.blackMask.active = !0, n.node.active = !0, n.setAnimation(0, i, !1), dispatch(_dependency6.GameEvent.PLAY_BTM, {
          data: {
            url: l
          }
        }), n.setCompleteListener(function () {
          n.node.active = !1, e.blackMask.active = !1, t.complete();
        });
      }).start();
    }), this.on(_dependency6.GameEvent.SHOW_MEN_SPLIT_ANIM, function (t) {
      console.log("number::::::::", t.data), console.log("number::::::::", t.data.to.length);
      var i = "",
        l = "",
        n = null;
      switch (t.data.to.length) {
        case 1:
        case 2:
          i = "lv_01", l = _dependency5.EBTM.FG_GIRL_VOICE_LV1, n = e.girl_lv_01;
          break;
        case 3:
        case 4:
          i = "lv_02", l = _dependency5.EBTM.FG_GIRL_VOICE_LV2, n = e.girl_lv_02;
          break;
        case 5:
        case 6:
          i = "lv_03", l = _dependency5.EBTM.FG_GIRL_VOICE_LV3, n = e.girl_lv_03;
          break;
        default:
          return t.data.to.length > 6 && (i = "lv_03", l = _dependency5.EBTM.FG_GIRL_VOICE_LV3), void t.complete();
      }
      _dependency2.tween(e).bindNodeState(false).delay(0).call(function () {
        n.node.active = !0, e.blackMask.active = !0, n.setAnimation(0, i, !1), dispatch(_dependency6.GameEvent.PLAY_BTM, {
          data: {
            url: l
          }
        }), n.setCompleteListener(function () {
          n.setCompleteListener(null), n.node.active = !1, e.blackMask.active = !1, t.complete();
        });
      }).start();
    });
  }, t;
}(_dependency3.default)).prototype, "animView", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(y.prototype, "tiger_lv_01", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), h = _dependency.applyDecoratedDescriptor(y.prototype, "tiger_lv_02", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), A = _dependency.applyDecoratedDescriptor(y.prototype, "tiger_lv_03", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(y.prototype, "girl_lv_01", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = _dependency.applyDecoratedDescriptor(y.prototype, "girl_lv_02", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(y.prototype, "girl_lv_03", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = _dependency.applyDecoratedDescriptor(y.prototype, "blackMask", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = y)) || w));
_dependency2.cclegacy._RF.pop();
