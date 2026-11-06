// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1001-GameConfigModel";
import * as _dependency6 from "./g1001-GameData";
import * as _dependency7 from "./g1001-GameEvent";
var _export;
export { _export as CharacterView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CharacterView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, i, a, r, o, c, f, l, s, m, u, p, h;
var w, E, d, b, g, F, v, y, C, S, A, _, L, D, R, T, k, z, M;
_dependency2.cclegacy._RF.push({}, "b2c54+uI4REKZ4cawA79Jrx", "CharacterView", void 0);
var N = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("CharacterView", (w = N("CharacterView"), E = _dependency4.inject("manElement/man", _dependency2.sp.Skeleton), d = _dependency4.inject("womanElement/woman", _dependency2.sp.Skeleton), b = _dependency4.inject("manElement/lower", _dependency2.sp.Skeleton), g = _dependency4.inject("manElement/upper", _dependency2.sp.Skeleton), F = _dependency4.inject("manElement/fire", _dependency2.sp.Skeleton), v = _dependency4.inject("womanElement/lower", _dependency2.sp.Skeleton), y = _dependency4.inject("womanElement/upper", _dependency2.sp.Skeleton), C = _dependency4.inject("womanElement/fire", _dependency2.sp.Skeleton), w((_ = _dependency.applyDecoratedDescriptor((A = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "man", _, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "woman", L, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "manLowerEffect", D, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "manUpperEffect", R, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "manFireEffect", T, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "womanLowerEffect", k, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "womanUpperEffect", z, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "womanFireEffect", M, _dependency.assertThisInitialized(t)), t.fgEffectNodes = [], t;
  }
  _dependency.inheritsLoose(t, e);
  var o = t.prototype;
  return o.onLoad = function () {
    e.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    e.prototype.onDestroy.call(this);
  }, o.init = function () {
    this.fgEffectNodes = [this.manLowerEffect.node, this.manUpperEffect.node, this.womanLowerEffect.node, this.womanUpperEffect.node], _dependency5.default.useProEffect || (this.manLowerEffect.node.active = !1, this.womanLowerEffect.node.active = !1);
  }, o.playCharacterManFire = function (e) {
    var t = this;
    this.man.setAnimation(0, "characterB_fire", !1), this.man.timeScale = e, this.man.setCompleteListener(function () {
      t.man.timeScale = 1, t.man.setAnimation(0, "characterB_idle", !0);
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.CH_MAN_TRANSITION
      }
    }), this.manFireEffect.node.active = !0, this.manFireEffect.setAnimation(0, "fireball", !1), this.manFireEffect.setCompleteListener(function () {
      t.manFireEffect.node.active = !1;
    });
  }, o.playCharacterWomanFire = function (e) {
    var t = this;
    this.woman.setAnimation(0, "characterA_fire", !1), this.woman.timeScale = e, this.woman.setCompleteListener(function () {
      t.woman.timeScale = 1, t.woman.setAnimation(0, "characterA_idle", !0);
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.CH_WOMAN_TRANSITION
      }
    }), this.womanFireEffect.node.active = !0, this.womanFireEffect.setAnimation(0, "fireball", !1), this.womanFireEffect.setCompleteListener(function () {
      t.womanFireEffect.node.active = !1;
    });
  }, o.showOpenFire = function () {
    var e = _dependency5.default.getData().reelConfig.characterFireSpeed,
      t = this.data.getData().parser.newTimesSymbols,
      n = !1,
      i = !1;
    if (t.length) {
      for (var a = 0; a < t.length; a++) t[a].isRare ? n = !0 : i = !0;
      i && this.playCharacterManFire(e), n && this.playCharacterWomanFire(e);
    }
  }, o.speedUpCharacterFire = function () {
    _dependency5.default.getData().reelConfig.characterFireSpeed;
    var e = this.data.getData().parser.newTimesSymbols,
      t = !1,
      n = !1;
    if (e.length) {
      for (var i = 0; i < e.length; i++) e[i].isRare ? t = !0 : n = !0;
      n && (this.man.timeScale = 1.2 * this.man.timeScale), t && (this.woman.timeScale = 1.2 * this.woman.timeScale);
    }
  }, o.setFgElements = function (e) {
    this.fgEffectNodes.forEach(function (t) {
      (_dependency5.default.useProEffect || "lower" !== t.name) && (t.active = !e);
    });
  }, o.reset = function () {}, o.setData = function (e) {}, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var e = this;
    this.on(_dependency7.GameEvent.SHOW_CHARACTER_FIRE, function (t) {
      e.showOpenFire();
    }), this.on(_dependency7.GameEvent.SPEED_CHARACTER_FIRE_UP, function (t) {
      e.speedUpCharacterFire();
    }), this.on(_dependency7.GameEvent.CHANGE_GAME_STYLE, function (t) {
      e.setFgElements(t.data);
    });
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), t;
}(_dependency3.default)).prototype, "man", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(A.prototype, "woman", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(A.prototype, "manLowerEffect", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(A.prototype, "manUpperEffect", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = _dependency.applyDecoratedDescriptor(A.prototype, "manFireEffect", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(A.prototype, "womanLowerEffect", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(A.prototype, "womanUpperEffect", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(A.prototype, "womanFireEffect", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = A)) || S));
_dependency2.cclegacy._RF.pop();
