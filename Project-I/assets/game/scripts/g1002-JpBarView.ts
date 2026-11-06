// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1002-GameData";
import * as _dependency6 from "../../shared/scripts/main-CmmUtils";
import * as _dependency7 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency8 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency9 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency0 from "./g1002-GameEvent";
import * as _dependency1 from "../../shared/scripts/slotFramework-ReplayModel";
var _export;
export { _export as JpBarView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "JpBarView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, a, i, n, r, o, s, l, u, m, c, p, f, g, d, h, j, T;
var b, y, x, v, D, E, M, P, w, N, J;
_dependency2.cclegacy._RF.push({}, "85af9cecWRPbYgyLo/H6nOr", "JpBarView", void 0);
var S = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("JpBarView", (b = S("JpBarView"), y = _dependency4.inject("content/grandText", _dependency2.Label), x = _dependency4.inject("content/minorText", _dependency2.Label), v = _dependency4.inject("content/majorText", _dependency2.Label), D = _dependency4.inject("content/miniText", _dependency2.Label), b((P = _dependency.applyDecoratedDescriptor((M = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "grandText", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "minorText", w, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "majorText", N, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "miniText", J, _dependency.assertThisInitialized(e)), e.tweenMap = new Map(), e;
  }
  _dependency.inheritsLoose(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, o.init = function () {
    if (this.miniText.string = "0.00", this.minorText.string = "0.00", this.majorText.string = "0.00", this.grandText.string = "0.00", _dependency1.default.isReplay) {
      var t = this.data.replayData.betData.replayMeta.pool;
      t["jp-mini"] && (this.miniText.string = "" + _dependency7.CmmSlotUtils.formatNumber(t["jp-mini"], !0, !0, 2)), t["jp-minor"] && (this.minorText.string = "" + _dependency7.CmmSlotUtils.formatNumber(t["jp-minor"], !0, !0, 2)), t["jp-major"] && (this.majorText.string = "" + _dependency7.CmmSlotUtils.formatJPNumber(t["jp-major"], !0, !0, 2)), t["jp-grand"] && (this.grandText.string = "" + _dependency7.CmmSlotUtils.formatJPNumber(t["jp-grand"], !0, !0, 2));
    } else {
      var e = _dependency9.default.getData().totalStake;
      this.setMiniMajorValue(e);
    }
  }, o.setJackpotValue = function (t) {
    var e = this,
      a = t.data;
    [{
      target: this.majorText,
      data: a["jp-major"],
      key: "jp-major"
    }, {
      target: this.grandText,
      data: a["jp-grand"],
      key: "jp-grand"
    }].forEach(function (t) {
      var a = t.target,
        i = t.data,
        n = t.key;
      i && e.dynamicEasingTime(a, i, n);
    });
  }, o.setMiniMajorValue = function (t) {
    if (this.data.getData().definition && this.data.getData().definition.jpDefs) {
      var e = this.data.getData().definition.jpDefs["jp-mini"],
        a = this.data.getData().definition.jpDefs["jp-minor"];
      this.miniText.string = "" + _dependency7.CmmSlotUtils.formatNumber(e * t, !0, !0, 2, !1), this.minorText.string = "" + _dependency7.CmmSlotUtils.formatNumber(a * t, !0, !0, 2, !1);
    }
  }, o.dynamicEasingTime = function (t, e, a) {
    var i = parseFloat(t.string.replace(/,/g, ""));
    if (0 !== i) {
      if (_dependency2.Tween.stopAllByTarget(t), i > e) t.string = _dependency7.CmmSlotUtils.formatJPNumber(e, !0, !0, 2);else if (e - i > 100) t.string = _dependency7.CmmSlotUtils.formatJPNumber(e, !0, !0, 2);else {
        var n = Math.abs(e - i) / .5;
        if (!(n < 1)) {
          var r = {
              label: t,
              start: i,
              end: e,
              tweenTime: n,
              digital: 2,
              useThousandsSeparator: !0,
              isRounding: !1,
              callback: null,
              tag: _dependency6.CmmUtils.hashCode(a)
            },
            o = _dependency7.CmmSlotUtils.tweenJPNum(r);
          this.tweenMap.set(a, o);
        }
      }
    } else t.string = _dependency7.CmmSlotUtils.formatJPNumber(e, !0, !0, 2);
  }, o.reset = function () {}, o.setData = function (t) {}, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency8.SlotFrameworkEvent.NOTIFY_JACKPOT_RESPONSE, _dependency6.CmmUtils.throttle(function (t) {
      _dependency1.default.isReplay || e.setJackpotValue(t.data);
    })), this.on(_dependency0.GameEvent.PARSER_INIT_COMPLETED, function (t) {
      var a = _dependency9.default.getData().totalStake;
      e.setMiniMajorValue(a);
    }), this.on(_dependency8.SlotFrameworkEvent.UPDATE_STAKE, function (t) {
      if (!_dependency1.default.isReplay) {
        var a = _dependency9.default.getData().totalStake;
        e.setMiniMajorValue(a);
      }
    }), this.on(_dependency0.GameEvent.PARSER_REPLAY_COMPLETED, function (t) {
      var a = e.data.replayData.betData.replayMeta.pool;
      a["jp-mini"] && (e.miniText.string = "" + _dependency7.CmmSlotUtils.formatNumber(a["jp-mini"], !0, !0, 2, !1)), a["jp-minor"] && (e.minorText.string = "" + _dependency7.CmmSlotUtils.formatNumber(a["jp-minor"], !0, !0, 2, !1)), a["jp-major"] && (e.majorText.string = "" + _dependency7.CmmSlotUtils.formatJPNumber(a["jp-major"], !0, !0, 2)), a["jp-grand"] && (e.grandText.string = "" + _dependency7.CmmSlotUtils.formatJPNumber(a["jp-grand"], !0, !0, 2));
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "grandText", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = _dependency.applyDecoratedDescriptor(M.prototype, "minorText", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _dependency.applyDecoratedDescriptor(M.prototype, "majorText", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(M.prototype, "miniText", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = M)) || E));
_dependency2.cclegacy._RF.pop();

// Own pool notification adapter; source MINI/MINOR definition rates stay intact.
import { EDITOR as __localJpEditor } from "cc/env";
import {installOwnedJackpotDisplay as __installOwnedJackpotDisplay} from "../backend/JackpotDisplayHooks";
if(!__localJpEditor)__installOwnedJackpotDisplay(_export,{isReplay:()=>_dependency1.default.isReplay});
