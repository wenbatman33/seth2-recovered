// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1009-GameConfigModel";
import * as _dependency6 from "./g1009-GameData";
import * as _dependency7 from "./g1009-GameEvent";
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
var e, a, i, n, r, c, o, s, l, h, u, g, f, m, p;
var C, d, E, _, S, y, v, b, D, w, A;
_dependency2.cclegacy._RF.push({}, "bb595TDS4BBSrzuiYSG46Qa", "CharacterView", void 0);
var G = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("CharacterView", (C = G("CharacterView"), d = _dependency4.inject("mgElement", _dependency2.Node), E = _dependency4.inject("mgElement/character", _dependency2.sp.Skeleton), _ = _dependency4.inject("fgElement", _dependency2.Node), S = _dependency4.inject("fgElement/character", _dependency2.sp.Skeleton), C((b = _dependency.applyDecoratedDescriptor((v = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, a = arguments.length, r = new Array(a), c = 0; c < a; c++) r[c] = arguments[c];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "mgElement", b, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "mgCharacter", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgElement", w, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fgCharacter", A, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var c = e.prototype;
  return c.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, c.start = function () {
    this.init();
  }, c.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, c.init = function () {}, c.setElements = function (t) {
    var e = this.data.getData().gameState.isGoldenFg ? "idle_b" : "idle_a";
    this.mgElement.active = t, this.fgElement.active = !t, this.mgCharacter.setAnimation(0, "idle", !0), this.fgCharacter.setAnimation(0, e, !0);
  }, c.playMgCharacterWin = function (t) {
    var e = this,
      a = _dependency5.default.getData().reelConfig.characterFireSpeed,
      i = t ? "win_2" : "win_1",
      n = t ? _dependency5.EBTM.MG_GIRL_WIN : _dependency5.EBTM.TIGER_WIN;
    this.mgCharacter.setAnimation(0, i, !1), this.mgCharacter.timeScale = a, this.mgCharacter.setCompleteListener(function () {
      e.mgCharacter.timeScale = 1, e.mgCharacter.setAnimation(0, "idle", !0), e.mgCharacter.setCompleteListener(null);
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: n
      }
    });
  }, c.playFgCharacterWin = function (t) {
    var e = this,
      a = _dependency5.default.getData().reelConfig.characterFireSpeed,
      i = this.data.getData().gameState.isGoldenFg,
      n = i ? "idle_b" : "idle_a",
      r = "idle_" + (i ? "b" : "a") + "_win_" + (t ? "2" : "1"),
      c = t ? _dependency5.EBTM.FG_GIRL_WIN : _dependency5.EBTM.TIGER_WIN;
    this.fgCharacter.setAnimation(0, r, !1), this.fgCharacter.timeScale = a, this.fgCharacter.setCompleteListener(function () {
      e.fgCharacter.timeScale = 1, e.fgCharacter.setAnimation(0, n, !0), e.fgCharacter.setCompleteListener(null);
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: c
      }
    });
  }, c.showCharacterWin = function () {
    var t = this.data.getData().gameState.action,
      e = this.data.getData().parser.newTimesSymbols,
      a = "spin" == t,
      i = !1;
    if (e.length) {
      for (var n = 0; n < e.length; n++) e[n].isRare && (i = !0);
      a ? this.playMgCharacterWin(i) : this.playFgCharacterWin(i);
    }
  }, c.speedUpCharacterFire = function () {
    var t = "spin" == this.data.getData().gameState.action;
    this.data.getData().parser.newTimesSymbols.length && (t ? this.mgCharacter.timeScale = 1.2 * this.mgCharacter.timeScale : this.fgCharacter.timeScale = 1.2 * this.fgCharacter.timeScale);
  }, c.reset = function () {}, c.setData = function (t) {}, c.show = function () {
    this.node.active = !0;
  }, c.hide = function () {
    this.node.active = !1;
  }, c.addEvents = function () {
    var t = this;
    this.on(_dependency7.GameEvent.SHOW_CHARACTER_FIRE, function (e) {
      t.showCharacterWin();
    }), this.on(_dependency7.GameEvent.SPEED_CHARACTER_FIRE_UP, function (e) {
      t.speedUpCharacterFire();
    }), this.on(_dependency7.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.setElements(e.data);
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "mgElement", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(v.prototype, "mgCharacter", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = _dependency.applyDecoratedDescriptor(v.prototype, "fgElement", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), A = _dependency.applyDecoratedDescriptor(v.prototype, "fgCharacter", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = v)) || y));
_dependency2.cclegacy._RF.pop();
