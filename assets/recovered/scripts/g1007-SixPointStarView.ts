// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/SixPointStarView.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmmUtils";
import * as __dependency_3 from "./main-UIView";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./g1007-GameData";
import * as __dependency_6 from "./g1007-GameEvent";
import * as __dependency_7 from "./g1007-GameConfigModel";
var __export_0;
export { __export_0 as SixPointStarView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SixPointStarView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, r, o, a, s, c, u, l, p, f, S, d;
var y, h, m, P, _;
__dependency_1.cclegacy._RF.push({}, "a53e4XbH6VNMoMWevqUhUJf", "SixPointStarView", void 0);
var v = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("SixPointStarView", (y = v("Hades_SixPointStarView"), h = __dependency_4.inject("alert/starSpine", __dependency_1.sp.Skeleton), y((_ = __dependency_0.applyDecoratedDescriptor((P = function (t) {
  function e() {
    for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "starSpine", _, __dependency_0.assertThisInitialized(e)), e;
  }
  __dependency_0.inheritsLoose(e, t);
  var a = e.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, a.start = function () {
    this.init();
  }, a.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/SixPointStarView";
  }, a.init = function () {}, a.playStartAnim = function () {
    var t = this;
    return new Promise(function (e) {
      t.starSpine.clearTracks(), t.starSpine.setToSetupPose(), t.starSpine.setAnimation(0, "in", !1), t.starSpine.setCompleteListener(function () {
        __dependency_2.CmmUtils.fadeOutTween(t.node, .5, function () {
          dispatch(__dependency_6.GameEvent.SHOW_JP_GAME_STAR_END), t.close(), e();
        });
      }), dispatch(__dependency_6.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_7.EBTM.JP_SIX_STAR_SHOW
        }
      });
    });
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_5.default);
    }
  }]), e;
}(__dependency_3.default)).prototype, "starSpine", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = P)) || m));
__dependency_1.cclegacy._RF.pop();
