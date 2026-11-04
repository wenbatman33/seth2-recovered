// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/JpBarView.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-CmmUtils";
import * as __dependency_3 from "../../shared/scripts/main-EventComponent";
import * as __dependency_4 from "../../shared/scripts/main-Decorators";
import * as __dependency_5 from "../../shared/scripts/framework-StakeModel";
import * as __dependency_6 from "../../shared/scripts/framework-SlotFrameworkEvent";
import * as __dependency_7 from "../../shared/scripts/framework-ReplayModel";
import * as __dependency_8 from "../../shared/scripts/framework-CmmSlotUtils";
import * as __dependency_9 from "./g1007-GameData";
import * as __dependency_10 from "./g1007-GameEvent";
var __export_0;
export { __export_0 as JpBarView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "JpBarView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, a, r, o, s, l, c, u, p, m, f, d, h, g, T, j;
var y, v, x, b, D, E, M, w, k, P, S;
__dependency_1.cclegacy._RF.push({}, "61df6f9Ww9LpoZpLR7cl1Fv", "JpBarView", void 0);
var R = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("JpBarView", (y = R("Hades_JpBarView"), v = __dependency_4.inject("content/grandText", __dependency_1.Label), x = __dependency_4.inject("content/minorText", __dependency_1.Label), b = __dependency_4.inject("content/majorText", __dependency_1.Label), D = __dependency_4.inject("content/miniText", __dependency_1.Label), y((w = __dependency_0.applyDecoratedDescriptor((M = function (t) {
  function e() {
    for (var e, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "grandText", w, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "minorText", k, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "majorText", P, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "miniText", S, __dependency_0.assertThisInitialized(e)), e.tweenMap = new Map(), e;
  }
  __dependency_0.inheritsLoose(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, o.init = function () {
    this.miniText.string = "0", this.minorText.string = "0", this.majorText.string = "0", this.grandText.string = "0";
  }, o.replayInit = function () {
    var t = this.data.replayData.betData.replayMeta.pool;
    t["jp-mini"] && (this.miniText.string = this.keepDecimalPlaces(t["jp-mini"], 2, !0)), t["jp-minor"] && (this.minorText.string = this.keepDecimalPlaces(t["jp-minor"], 2, !0)), t["jp-major"] && (this.majorText.string = "" + __dependency_8.CmmSlotUtils.formatNumber(t["jp-major"], !1, !0, 2, !1)), t["jp-grand"] && (this.grandText.string = "" + __dependency_8.CmmSlotUtils.formatNumber(t["jp-grand"], !1, !0, 2, !1));
  }, o.setJackpotValue = function (t) {
    var e = this,
      i = t.data;
    [{
      target: this.majorText,
      data: i["jp-major"],
      key: "jp-major"
    }, {
      target: this.grandText,
      data: i["jp-grand"],
      key: "jp-grand"
    }].forEach(function (t) {
      var i = t.target,
        n = t.data,
        a = t.key;
      n && e.dynamicEasingTime(i, n, a);
    });
  }, o.setMiniMajorValue = function () {
    var t = __dependency_5.default.getData(),
      e = t.totalStake,
      i = t.extraStakeTimes,
      n = this.data.getData().definition.jpDefs["jp-mini"],
      a = this.data.getData().definition.jpDefs["jp-minor"],
      r = i > 1 ? Math.round(e / i * 10) / 10 : e;
    this.miniText.string = this.keepDecimalPlaces(n * r, 2, !0), this.minorText.string = this.keepDecimalPlaces(a * r, 2, !0);
  }, o.keepDecimalPlaces = function (t, e, i) {
    var n = Math.pow(10, e),
      a = (Math.floor(t * n) / n).toFixed(e);
    if (i) {
      var r = a.split(".");
      return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), a = 0 != e ? r.join(".") : r[0];
    }
  }, o.dynamicEasingTime = function (t, e, i) {
    var n = parseFloat(t.string.replace(/,/g, ""));
    if (0 !== n) {
      if (__dependency_1.Tween.stopAllByTarget(t), n > e) t.string = __dependency_8.CmmSlotUtils.formatNumber(e, !1, !0, 2, !1);else if (e - n > 100) t.string = __dependency_8.CmmSlotUtils.formatNumber(e, !1, !0, 2, !1);else {
        var a = Math.abs(e - n) / .5;
        if (!(a < 1)) {
          var r = {
              label: t,
              start: n,
              end: e,
              tweenTime: a,
              digital: 2,
              useThousandsSeparator: !0,
              isRounding: !1,
              callback: null,
              tag: __dependency_2.CmmUtils.hashCode(i)
            },
            o = __dependency_8.CmmSlotUtils.tweenNum(r);
          this.tweenMap.set(i, o);
        }
      }
    } else t.string = __dependency_8.CmmSlotUtils.formatNumber(e, !1, !0, 2, !1);
  }, o.reset = function () {}, o.setData = function (t) {}, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(__dependency_6.SlotFrameworkEvent.NOTIFY_JACKPOT_RESPONSE, __dependency_2.CmmUtils.throttle(function (t) {
      e.setJackpotValue(t.data);
    })), this.on(__dependency_10.GameEvent.INIT_JP_BAR, function () {
      e.setMiniMajorValue();
    }), this.on(__dependency_10.GameEvent.PARSER_INIT_COMPLETED, function () {
      e.setMiniMajorValue();
    }), this.on(__dependency_10.GameEvent.PARSER_REPLAY_COMPLETED, function () {
      e.replayInit();
    }), this.on(__dependency_6.SlotFrameworkEvent.UPDATE_STAKE, function () {
      __dependency_7.default.isReplay || e.setMiniMajorValue();
    });
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_9.default);
    }
  }]), e;
}(__dependency_3.default)).prototype, "grandText", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = __dependency_0.applyDecoratedDescriptor(M.prototype, "minorText", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = __dependency_0.applyDecoratedDescriptor(M.prototype, "majorText", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = __dependency_0.applyDecoratedDescriptor(M.prototype, "miniText", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = M)) || E));
__dependency_1.cclegacy._RF.pop();
