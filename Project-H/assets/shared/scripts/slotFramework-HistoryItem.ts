// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-TableViewCell";
import * as _dependency4 from "./main-Decorators";
import * as _dependency5 from "./slotFramework-ColorModel";
import * as _dependency6 from "./main-CmmUtils";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, i, r, a, o, l, u, c, s, b, p, f;
var m, g, y, h, d, w, N, z, C, M, v, L, k, D, R, T, W, _;
_dependency2.cclegacy._RF.push({}, "4b786URc4ZDpr+/e8Bl23xz", "HistoryItem", void 0);
var q = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (m = _dependency4.inject("bg", _dependency2.Sprite), g = _dependency4.inject("content", _dependency2.Node), y = _dependency4.inject("content/gameNameMask", _dependency2.Node), h = _dependency4.inject("content/gameNameMask/label", _dependency2.Label), d = _dependency4.inject("content/betContent/label", _dependency2.Label), w = _dependency4.inject("content/totalWinContent/label", _dependency2.Label), N = _dependency4.inject("content/profitContent/label", _dependency2.Label), z = _dependency4.inject("content/countContent/label", _dependency2.Label), q((v = _dependency.applyDecoratedDescriptor((M = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "bg", v, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "content", L, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "gameNameMask", k, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "gameNameLabel", D, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "bet", R, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "totalWin", T, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "profit", W, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "count", _, _dependency.assertThisInitialized(t)), t;
  }
  _dependency.inheritsLoose(t, e);
  var a = t.prototype;
  return a.init = function () {
    this.initLabelMarquee();
  }, a.setAdapter = function (e) {}, a.initLabelMarquee = function () {
    var e = {
      maskNode: this.gameNameMask,
      labelNode: this.gameNameLabel.node,
      delayTime: 2
    };
    this.scheduleOnce(function () {
      _dependency6.CmmUtils.labelMarquee(e);
    });
  }, a.willRecycle = function () {}, a.updateData = function (e, t) {
    var n = e.name,
      i = e.bet,
      r = e.win,
      a = e.profit,
      o = e.betCount,
      l = _dependency5.default.getData(),
      u = l.green,
      c = l.red,
      s = l.record;
    this.bg.color = t % 2 == 0 ? s[5] : s[10], this.gameNameLabel.string = n, this.bet.string = "" + i, this.totalWin.string = "" + r, this.profit.string = "" + a, this.count.string = "" + o, this.profit.color = e.profit > 0 ? c.primary : u.primary;
  }, t;
}(_dependency3.TableViewCell)).prototype, "bg", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(M.prototype, "content", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(M.prototype, "gameNameMask", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(M.prototype, "gameNameLabel", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(M.prototype, "bet", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = _dependency.applyDecoratedDescriptor(M.prototype, "totalWin", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = _dependency.applyDecoratedDescriptor(M.prototype, "profit", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = _dependency.applyDecoratedDescriptor(M.prototype, "count", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = M)) || C));
_dependency2.cclegacy._RF.pop();
