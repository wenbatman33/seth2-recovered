// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/FullCharacterView.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmmUtils";
import * as __dependency_3 from "./main-UIView";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./g1007-GameConfigModel";
import * as __dependency_6 from "./g1007-GameData";
import * as __dependency_7 from "./g1007-GameEvent";
var __export_0;
export { __export_0 as FullCharacterView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FullCharacterView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, r, o, a, s, c, u, l, p, f, d, h;
var y, m, C, F, L;
__dependency_1.cclegacy._RF.push({}, "b4963IdtRZFA6tTXfKuKuGu", "FullCharacterView", void 0);
var g = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("FullCharacterView", (y = g("Hades_FullCharacterView"), m = __dependency_4.inject("alert/spine", __dependency_1.sp.Skeleton), y((L = __dependency_0.applyDecoratedDescriptor((F = function (t) {
  function e() {
    for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "spine", L, __dependency_0.assertThisInitialized(e)), e;
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
    return "prefabs/FullCharacterView";
  }, a.init = function () {}, a.playAnim = function () {
    var t = this;
    return new Promise(function (e) {
      t.spine.clearTracks(), t.spine.setToSetupPose(), t.spine.setAnimation(0, "in", !1), t.spine.setCompleteListener(function () {
        __dependency_2.CmmUtils.fadeOutTween(t.node, .1, function () {
          dispatch(__dependency_7.GameEvent.SHOW_FULL_REEL_ANIM), t.close(), e();
        });
      }), App.globalAudio.pauseMusic(), dispatch(__dependency_7.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_5.EBTM.CHAR_FULL_EFFECT
        }
      });
    });
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_6.default);
    }
  }]), e;
}(__dependency_3.default)).prototype, "spine", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = F)) || C));
__dependency_1.cclegacy._RF.pop();
