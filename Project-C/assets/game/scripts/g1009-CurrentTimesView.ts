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
export { _export as CurrentTimesView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CurrentTimesView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, i, n, a, o, r, s, l, u, c, m, p, f, d, h, T, v, g;
var A, b, w, y, _, E, N, G, L, C, D;
_dependency2.cclegacy._RF.push({}, "85842Rv+bVCBLxjG4vaKsg0", "CurrentTimesView", void 0);
var F = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("CurrentTimesView", (A = F("CurrentTimesView"), b = _dependency4.inject("timesNode", _dependency2.Node), w = _dependency4.inject("timesNode/timesAnimation", _dependency2.sp.Skeleton), y = _dependency4.inject("timesNode/totalTimes", _dependency2.Label), _ = _dependency4.inject("timesNode/upgradeAnimation", _dependency2.sp.Skeleton), A((G = _dependency.applyDecoratedDescriptor((N = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
    return t = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "timesNode", G, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "timesAnimation", L, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "totalTimes", C, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "upgradeAnimation", D, _dependency.assertThisInitialized(t)), t.lv = 0, t.breatheTween = null, t;
  }
  _dependency.inheritsLoose(t, e);
  var s = t.prototype;
  return s.onLoad = function () {
    e.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    e.prototype.onDestroy.call(this);
  }, s.init = function () {}, s.setFgElements = function (e) {
    var t,
      i = this.data.getData().gameState.currentTimes;
    if (this.timesNode.active = !e, this.timesAnimation.setAnimation(0, "loop_00", !0), this.lv = 0, null == (t = this.breatheTween) || t.stop(), !e) {
      var n = i <= 0 ? 0 : i;
      this.updateFGTotalTimes(n);
    }
  }, s.updateFGTotalTimes = function (e) {
    var t = this,
      i = [{
        aniName: "loop_00",
        lv: 0,
        maxTimes: 9
      }, {
        aniName: "loop_01",
        lv: 1,
        maxTimes: 49
      }, {
        aniName: "loop_02",
        lv: 2,
        maxTimes: 99
      }],
      n = i[i.length - 1],
      a = "loop_00",
      r = 0;
    if (e > n.maxTimes) a = "loop_03", r = n.lv + 1;else for (var s, l = _dependency.createForOfIteratorHelperLoose(i); !(s = l()).done;) {
      var u = s.value;
      if (e <= u.maxTimes) {
        a = u.aniName, r = u.lv;
        break;
      }
    }
    r > this.lv && (this.upgradeAnimation.node.active = !0, this.upgradeAnimation.setAnimation(0, "lvUp", !1), this.upgradeAnimation.setCompleteListener(function () {
      t.upgradeAnimation.node.active = !1;
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.TOTAL_TIMES_UPGRADE
      }
    }), this.timesAnimation.setAnimation(0, a, !0), this.playBreatheTween(this.totalTimes.node, 1 + .1 * r)), this.totalTimes.string = e + "x", this.lv = r;
  }, s.playBreatheTween = function (e, t) {
    var i;
    null == (i = this.breatheTween) || i.stop(), this.breatheTween = _dependency2.tween(e).bindNodeState(false).repeatForever(_dependency2.tween().bindNodeState(false).set({
      scale: new _dependency2.Vec3(1, 1, 1)
    }).to(.6, {
      scale: new _dependency2.Vec3(t, t, t)
    }).to(.6, {
      scale: new _dependency2.Vec3(1, 1, 1)
    })).start();
  }, s.reset = function () {}, s.setData = function (e) {}, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {
    var e = this;
    this.on(_dependency7.GameEvent.CHANGE_GAME_STYLE, function (t) {
      e.setFgElements(t.data);
    }), this.on(_dependency7.GameEvent.UPDATE_FG_TOTAL_TIMES, function (t) {
      e.updateFGTotalTimes(t.data);
    });
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), t;
}(_dependency3.default)).prototype, "timesNode", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(N.prototype, "timesAnimation", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = _dependency.applyDecoratedDescriptor(N.prototype, "totalTimes", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(N.prototype, "upgradeAnimation", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = N)) || E));
_dependency2.cclegacy._RF.pop();
