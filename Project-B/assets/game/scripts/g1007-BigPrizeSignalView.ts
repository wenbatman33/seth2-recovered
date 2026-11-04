// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/BigPrizeSignalView.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-UIView";
import * as __dependency_3 from "../../shared/scripts/main-Decorators";
import * as __dependency_4 from "./g1007-GameConfigModel";
import * as __dependency_5 from "./g1007-GameData";
import * as __dependency_6 from "./g1007-GameEvent";
var __export_0;
export { __export_0 as BigPrizeSignalView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BigPrizeSignalView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, n, r, a, o, s, c, l, u, p, f, g;
var S, y, d, h, P;
__dependency_1.cclegacy._RF.push({}, "3c358y7xw1DXouD8wolx4pD", "BigPrizeSignalView", void 0);
var w = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("BigPrizeSignalView", (S = w("Hades_BigPrizeSignalView"), y = __dependency_3.inject("alert/signalSpine", __dependency_1.sp.Skeleton), S((P = __dependency_0.applyDecoratedDescriptor((h = function (e) {
  function t() {
    for (var t, i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(a).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(t, "signalSpine", P, __dependency_0.assertThisInitialized(t)), t;
  }
  __dependency_0.inheritsLoose(t, e);
  var o = t.prototype;
  return o.onLoad = function () {
    e.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    e.prototype.onDestroy.call(this);
  }, t.getPrefabUrl = function () {
    return "prefabs/BigPrizeSignalView";
  }, o.init = function () {}, o.playSignAnim = function () {
    var e = this;
    return new Promise(function (t) {
      e.signalSpine.clearTracks(), e.signalSpine.setToSetupPose(), e.signalSpine.setAnimation(0, "sign", !1), e.signalSpine.setCompleteListener(function () {
        dispatch(__dependency_6.GameEvent.SHOW_BIG_PRIZE_SIGNAL_END), e.close(), t();
      }), dispatch(__dependency_6.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_4.EBTM.BIGWIN_ALERT
        }
      });
    });
  }, __dependency_0.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_5.default);
    }
  }]), t;
}(__dependency_2.default)).prototype, "signalSpine", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), d = h)) || d));
__dependency_1.cclegacy._RF.pop();
