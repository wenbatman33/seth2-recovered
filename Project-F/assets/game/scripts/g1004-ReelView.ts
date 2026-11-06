// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "./g1004-GameData";
import * as _dependency5 from "./g1004-GameEvent";
import * as _dependency6 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency7 from "./g1004-GameConfigModel";
import * as _dependency8 from "./g1004-types";
var _export;
export { _export as ReelView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ReelView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var a, e, o, n, i, s, r, l, c, u, y, p, f, d, h, W;
var v, g, m, T, E;
_dependency2.cclegacy._RF.push({}, "a54532tGKdFvLIXMen1ch4h", "ReelView", void 0);
var _ = _dependency2._decorator.ccclass,
  w = _dependency2._decorator.property;
_publish("ReelView", (v = _("ReelView"), g = w({
  type: _dependency2.Label,
  displayName: "totalWays"
}), v((E = _dependency.applyDecoratedDescriptor((T = function (t) {
  var _nativeConstructor = a;
  function a() {
    for (var a, e = arguments.length, i = new Array(e), s = 0; s < e; s++) i[s] = arguments[s];
    return a = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(a, "txtTotalWays", E, _dependency.assertThisInitialized(a)), a._totalWays = 0, a;
  }
  _dependency.inheritsLoose(a, t);
  var s = a.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.updateTotalWays({
      totalWays: -1,
      isRun: !1
    });
  }, s.updateTotalWays = function (t) {
    -1 !== t.totalWays ? _dependency7.default.isTurbo ? this.totalWays = t.totalWays : t.isRun ? _dependency2.tween(this).bindNodeState(false).to(.6, {
      totalWays: t.totalWays
    }, {
      easing: "quintOut"
    }).start() : this.totalWays = t.totalWays : this.txtTotalWays.string = "a        a        a";
  }, s.playShockEffect = function (t, a) {
    if (void 0 === a && (a = .56), !(t < 2)) {
      var e = 3 === t ? 1.6 : .8,
        o = .03,
        n = this.node.getPosition();
      _dependency2.tween(this.node).bindNodeState(false).delay(a).sequence(_dependency2.tween().bindNodeState(false).to(o, {
        position: new _dependency2.Vec3(-7 * e, -8 * e + n.y)
      }), _dependency2.tween().bindNodeState(false).to(o, {
        position: new _dependency2.Vec3(8 * e, -9 * e + n.y)
      }), _dependency2.tween().bindNodeState(false).to(o, {
        position: new _dependency2.Vec3(5 * e, -7 * e + n.y)
      }), _dependency2.tween().bindNodeState(false).to(o, {
        position: new _dependency2.Vec3(6 * e, 6 * e + n.y)
      }), _dependency2.tween().bindNodeState(false).to(o, {
        position: n
      })).start();
    }
  }, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {
    var t = this;
    this.on(_dependency5.GameEvent.UPDATE_TIMES, function (a) {
      var e = t.data.getData().parser.currentSpinIndex + 1;
      t.data.getData().gameState[e] && t.data.getData().gameState[e].currentTimes;
    }), this.on(_dependency5.GameEvent.UPDATE_TOTAL_WAYS, function (a) {
      t.updateTotalWays(a.data);
    }), this.on(_dependency5.GameEvent.PLAY_SHOCK_EFFECT, function (a) {
      var e = a.data,
        o = e.type,
        n = e.level;
      o === _dependency8.EShockType.REEL_VIEW && t.playShockEffect(n);
    });
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency4.default);
    }
  }, {
    key: "totalWays",
    get: function () {
      return this._totalWays;
    },
    set: function (t) {
      this._totalWays = t, this.txtTotalWays.string = _dependency6.CmmSlotUtils.formatNumber(this._totalWays, !1, !1, 0);
    }
  }]), a;
}(_dependency3.default)).prototype, "txtTotalWays", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = T)) || m));
_dependency2.cclegacy._RF.pop();
