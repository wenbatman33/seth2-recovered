// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1001-GameData";
import * as _dependency6 from "./g1001-GameEvent";
import * as _dependency7 from "./g1001-GameConfigModel";
import * as _dependency8 from "../../shared/scripts/main-UrlUtils";
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
var e, i, n, a, o, r, s, l, u, m, c, p, f, d, h, T, v, g, A, w;
var b, y, _, E, N, G, L, D, F, C, P;
_dependency2.cclegacy._RF.push({}, "2ac1bLFP0hG069nKtxT99g3", "CurrentTimesView", void 0);
var S = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("CurrentTimesView", (b = S("CurrentTimesView"), y = _dependency4.inject("timesNode", _dependency2.Node), _ = _dependency4.inject("timesNode/timesAnimation", _dependency2.sp.Skeleton), E = _dependency4.inject("timesNode/totalTimes", _dependency2.Label), N = _dependency4.inject("timesNode/upgradeAnimation", _dependency2.sp.Skeleton), b((D = _dependency.applyDecoratedDescriptor((L = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "timesNode", D, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "timesAnimation", F, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "totalTimes", C, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "upgradeAnimation", P, _dependency.assertThisInitialized(e)), e.lv = 0, e.breatheTween = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.init = function () {}, s.setFgElements = function (t) {
    var e,
      i = this.data.getData().gameState.currentTimes;
    if (this.timesNode.active = !t, this.timesAnimation.setAnimation(0, "loop_0", !0), this.lv = 0, null == (e = this.breatheTween) || e.stop(), !t) {
      var n = i <= 0 ? 0 : i;
      this.updateFGTotalTimes(n);
    }
  }, s.updateFGTotalTimes = function (t) {
    var e = this,
      i = [{
        aniName: "loop_0",
        lv: 0,
        maxTimes: 8
      }, {
        aniName: "loop_1",
        lv: 1,
        maxTimes: 25
      }, {
        aniName: "loop_2",
        lv: 2,
        maxTimes: 80
      }],
      n = i[i.length - 1],
      a = "loop_0",
      r = 0;
    if (t >= n.maxTimes) a = n.aniName, r = n.lv;else for (var s, l = _dependency.createForOfIteratorHelperLoose(i); !(s = l()).done;) {
      var u = s.value;
      if (t <= u.maxTimes) {
        a = u.aniName, r = u.lv;
        break;
      }
    }
    if (r > this.lv && (this.upgradeAnimation.node.active = !0, this.upgradeAnimation.setAnimation(0, "lvUp", !1), this.upgradeAnimation.setCompleteListener(function () {
      e.upgradeAnimation.node.active = !1;
    }), dispatch(_dependency6.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency7.EBTM.TOTAL_TIMES_UPGRADE
      }
    }), this.timesAnimation.setAnimation(0, a, !0), this.playBreatheTween(this.totalTimes.node, 1 + .1 * r)), this.totalTimes.string = t + "x", "portrait" == _dependency8.default.getViewModeParam()) if (t.toString().length > 3) {
      var c = 10 * (t.toString().length - 3);
      this.totalTimes.node.setPosition(_dependency2.v3(-c, 14, 0));
    } else this.totalTimes.node.setPosition(_dependency2.v3(0, 14, 0));
    this.lv = r;
  }, s.playBreatheTween = function (t, e) {
    var i;
    null == (i = this.breatheTween) || i.stop(), this.breatheTween = _dependency2.tween(t).bindNodeState(false).repeatForever(_dependency2.tween().bindNodeState(false).set({
      scale: new _dependency2.Vec3(1, 1, 1)
    }).to(.6, {
      scale: new _dependency2.Vec3(e, e, e)
    }).to(.6, {
      scale: new _dependency2.Vec3(1, 1, 1)
    })).start();
  }, s.reset = function () {}, s.setData = function (t) {}, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {
    var t = this;
    this.on(_dependency6.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.setFgElements(e.data);
    }), this.on(_dependency6.GameEvent.UPDATE_FG_TOTAL_TIMES, function (e) {
      t.updateFGTotalTimes(e.data);
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "timesNode", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(L.prototype, "timesAnimation", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = _dependency.applyDecoratedDescriptor(L.prototype, "totalTimes", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(L.prototype, "upgradeAnimation", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = L)) || G));
_dependency2.cclegacy._RF.pop();
