// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-CmmUtils";
import * as _dependency4 from "./main-EventComponent";
import * as _dependency5 from "./main-AdapterEvent";
import * as _dependency6 from "./main-Decorators";
import * as _dependency7 from "./main-WrapperData";
import * as _dependency8 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency9 from "./slotFramework-CmmSlotUtils";
import * as _dependency0 from "./slotFramework-ReplayModel";
import * as _dependency1 from "./slotFramework-SlotFrameworkData";
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
var n, i, e, r, a, o, l, u, m, s, p, c, g, f, d, h, b, j, y;
var N, v, T, w, J, P, C, k, z, D, E, A, L, S, _, M, B, F, R, O, U, H, I;
_dependency2.cclegacy._RF.push({}, "6c4636K/iZP76OHQL/MnzGJ", "JpBarControllerBase", void 0);
var K = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (N = K("JpBarControllerBase"), v = _dependency6.inject("content", _dependency2.Node), T = _dependency6.inject("content/line2", _dependency2.Node), w = _dependency6.inject("content/mini/title", _dependency2.Label), J = _dependency6.inject("content/minor/title", _dependency2.Label), P = _dependency6.inject("content/major/title", _dependency2.Label), C = _dependency6.inject("content/grand/title", _dependency2.Label), k = _dependency6.inject("content/mini/num", _dependency2.Label), z = _dependency6.inject("content/minor/num", _dependency2.Label), D = _dependency6.inject("content/major/num", _dependency2.Label), E = _dependency6.inject("content/grand/num", _dependency2.Label), N((S = _dependency.applyDecoratedDescriptor((L = function (t) {
  var _nativeConstructor = n;
  function n() {
    var n;
    return n = Reflect.construct(t, [], new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "content", S, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "line2", _, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "miniTitle", M, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "minorTitle", B, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "majorTitle", F, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "grandTitle", R, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "miniNum", O, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "minorNum", U, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "majorNum", H, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "grandNum", I, _dependency.assertThisInitialized(n)), n.tweenMap = new Map(), n;
  }
  _dependency.inheritsLoose(n, t);
  var o = n.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    _dependency0.default.isReplay ? this.replayinit() : this.init();
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, o.init = function () {
    this.miniTitle && (this.miniTitle.string = App.getLanguage("jp_mini")), this.minorTitle && (this.minorTitle.string = App.getLanguage("jp_minor")), this.majorTitle && (this.majorTitle.string = App.getLanguage("jp_major")), this.grandTitle && (this.grandTitle.string = App.getLanguage("jp_grand"));
    var t = this.slotData.tempJpPools;
    this.miniNum.string = _dependency9.CmmSlotUtils.formatJPNumber((null == t ? void 0 : t["jp-mini"]) || 0, !0, !0, 2), this.minorNum.string = _dependency9.CmmSlotUtils.formatJPNumber((null == t ? void 0 : t["jp-minor"]) || 0, !0, !0, 2), this.majorNum.string = _dependency9.CmmSlotUtils.formatJPNumber((null == t ? void 0 : t["jp-major"]) || 0, !0, !0, 2), this.grandNum.string = _dependency9.CmmSlotUtils.formatJPNumber((null == t ? void 0 : t["jp-grand"]) || 0, !0, !0, 2);
  }, o.replayinit = function () {
    this.miniNum.string = "0", this.minorNum.string = "0", this.majorNum.string = "0", this.grandNum.string = "0";
    var t = _dependency0.default.getData().betData.replayMeta.pool;
    this.miniNum.string = _dependency9.CmmSlotUtils.formatJPNumber((null == t ? void 0 : t["jp-mini"]) || 0, !0, !0, 2), this.minorNum.string = _dependency9.CmmSlotUtils.formatJPNumber((null == t ? void 0 : t["jp-minor"]) || 0, !0, !0, 2), this.majorNum.string = _dependency9.CmmSlotUtils.formatJPNumber((null == t ? void 0 : t["jp-major"]) || 0, !0, !0, 2), this.grandNum.string = _dependency9.CmmSlotUtils.formatJPNumber((null == t ? void 0 : t["jp-grand"]) || 0, !0, !0, 2);
  }, o.yoyoAnim = function () {
    App.dataCenter.get(_dependency7.default).orientation;
    _dependency5.EOrientationType.LANDSCAPE;
  }, o.setJackpotValue = function (t) {
    var n = this,
      i = t.data;
    [{
      target: this.miniNum,
      data: i["jp-mini"],
      key: "jp-mini"
    }, {
      target: this.minorNum,
      data: i["jp-minor"],
      key: "jp-minor"
    }, {
      target: this.majorNum,
      data: i["jp-major"],
      key: "jp-major"
    }, {
      target: this.grandNum,
      data: i["jp-grand"],
      key: "jp-grand"
    }].forEach(function (t) {
      var i = t.target,
        e = t.data,
        r = t.key;
      e && n.dynamicEasingTime(i, e, r);
    });
  }, o.dynamicEasingTime = function (t, n, i) {
    var e = parseFloat(t.string.replace(/,/g, ""));
    if (0 !== e) {
      if (this.tweenMap.get(i) && _dependency2.Tween.stopAllByTag(_dependency3.CmmUtils.hashCode(i)), e > n) t.string = _dependency9.CmmSlotUtils.formatJPNumber(n, !0, !0, 2);else {
        var r = Math.abs(n - e) / .5;
        if (!(r < 1)) {
          var a = {
              label: t,
              start: e,
              end: n,
              tweenTime: r,
              digital: 2,
              useThousandsSeparator: !0,
              isRounding: !1,
              callback: null,
              tag: _dependency3.CmmUtils.hashCode(i)
            },
            o = _dependency9.CmmSlotUtils.tweenJPNum(a);
          this.tweenMap.set(i, o);
        }
      }
    } else t.string = _dependency9.CmmSlotUtils.formatJPNumber(n, !0, !0, 2);
  }, o.addEvents = function () {
    var n = this;
    t.prototype.addEvents.call(this), this.on(_dependency8.SlotFrameworkEvent.NOTIFY_JACKPOT_RESPONSE, _dependency3.CmmUtils.throttle(function (t) {
      _dependency0.default.isReplay || n.setJackpotValue(t.data);
    }));
  }, _dependency.createClass(n, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency1.default);
    }
  }]), n;
}(_dependency4.default)).prototype, "content", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = _dependency.applyDecoratedDescriptor(L.prototype, "line2", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(L.prototype, "miniTitle", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(L.prototype, "minorTitle", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(L.prototype, "majorTitle", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = _dependency.applyDecoratedDescriptor(L.prototype, "grandTitle", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(L.prototype, "miniNum", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(L.prototype, "minorNum", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(L.prototype, "majorNum", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _dependency.applyDecoratedDescriptor(L.prototype, "grandNum", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), A = L)) || A));
_dependency2.cclegacy._RF.pop();
