// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1008-GameConfigModel";
import * as _dependency6 from "./g1008-GameData";
import * as _dependency7 from "./g1008-GameEvent";
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
var e, n, i, a, r, o, s, c, u, l, f, m, h, p;
var d, w, C, y, g, v, E;
_dependency2.cclegacy._RF.push({}, "8bb26Fw7GREtqa+Jzmd4wjb", "CharacterView", void 0);
var _ = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("CharacterView", (d = _("CharacterView"), w = _dependency4.inject("manElement/man", _dependency2.sp.Skeleton), C = _dependency4.inject("womanElement/woman", _dependency2.sp.Skeleton), d((v = _dependency.applyDecoratedDescriptor((g = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "man", v, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "woman", E, _dependency.assertThisInitialized(e)), e.fgEffectNodes = [], e;
  }
  _dependency.inheritsLoose(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, o.init = function () {}, o.playCharacterManFire = function (t) {
    var e = this,
      n = _dependency5.default.getData().reelConfig.characterFireSpeed,
      i = t ? "win_2" : "win";
    this.man.setAnimation(0, i, !1), this.man.timeScale = n, this.man.setCompleteListener(function () {
      e.man.timeScale = 1, e.man.setAnimation(0, "idle", !0);
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.BTM_CH_02
      }
    });
  }, o.playCharacterWomanFire = function (t) {
    var e = this,
      n = _dependency5.default.getData().reelConfig.characterFireSpeed,
      i = t ? "win_2" : "win";
    this.woman.setAnimation(0, i, !1), this.woman.timeScale = n, this.woman.setCompleteListener(function () {
      e.woman.timeScale = 1, e.woman.setAnimation(0, "idle", !0);
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.BTM_CH_01
      }
    });
  }, o.showOpenFire = function () {
    var t = this.data.getData().parser.newTimesSymbols;
    if (t.length) {
      var e = t.some(function (t) {
          return !t.isRare;
        }),
        n = t.some(function (t) {
          return t.isRare;
        }),
        i = t.some(function (t) {
          return !t.isRare && t.times >= 100;
        }),
        a = t.some(function (t) {
          return t.isRare && t.times >= 100;
        });
      e && this.playCharacterManFire(i), n && this.playCharacterWomanFire(a);
    }
  }, o.setFgElements = function (t) {
    this.fgEffectNodes.forEach(function (e) {
      (_dependency5.default.useProEffect || "lower" !== e.name) && (e.active = !t);
    });
  }, o.reset = function () {}, o.setData = function (t) {}, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var t = this;
    this.on(_dependency7.GameEvent.SHOW_CHARACTER_FIRE, function (e) {
      t.showOpenFire();
    }), this.on(_dependency7.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.setFgElements(e.data);
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "man", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = _dependency.applyDecoratedDescriptor(g.prototype, "woman", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = g)) || y));
_dependency2.cclegacy._RF.pop();
