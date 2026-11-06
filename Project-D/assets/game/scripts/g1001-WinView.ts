// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency5 from "./g1001-GameConfigModel";
import * as _dependency6 from "./g1001-GameData";
import * as _dependency7 from "./g1001-GameEvent";
import * as _dependency8 from "./g1001-types";
var _export;
export { _export as WinView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WinView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, o, e, i, a, s, c, r, f, u, l, p, h, d;
var g;
_dependency2.cclegacy._RF.push({}, "d31c4gFP99Ha6Osz8u0Vd70", "WinView", void 0);
var C = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("WinView", C("WinView")(g = function (t) {
  var _nativeConstructor = e;
  function e() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(e, t);
  var i = e.prototype;
  return i.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, i.start = function () {
    this.init();
  }, i.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, i.init = function () {
    this.createWinCashPool();
  }, i.createWinCashPool = function () {
    for (var t = _dependency5.default.getData().filePaths.winCashPrefab, n = App.cache.get(this.data.module, t).data, o = 0; o < 2; o++) {
      var e = _dependency2.instantiate(n);
      App.pool.createPool(_dependency8.EPool.WIN_CASH_POOL).cloneNode = e, App.pool.createPool(_dependency8.EPool.WIN_CASH_POOL).put(e);
    }
  }, i.showWinCash = function () {
    var t = this,
      n = this.data.getData().gameState.winSymbols,
      o = [14, 15, 8, 9, 20, 21, 2, 3, 26, 27, 13, 16, 7, 10, 19, 22, 1, 4, 25, 28, 12, 17, 6, 11, 18, 23, 0, 5, 24, 29];
    n.forEach(function (n) {
      var e = [];
      n.symbolPos.forEach(function (t) {
        e.push(o.indexOf(t));
      }), e.sort(function (t, n) {
        return t - n;
      });
      var i = App.pool.getPool(_dependency8.EPool.WIN_CASH_POOL).get(),
        a = o[e[0]],
        c = i.getComponent(_dependency2.Label);
      i.active = !1, t.node.addChild(i), c.string = _dependency4.CmmSlotUtils.formatNumber(n.winnings), t.playWinCashTween(i, a);
    });
  }, i.playWinCashTween = function (t, n) {
    var o = this.data.getData().symbolPosConfig.get(n),
      e = t.getComponent(_dependency2.Label).color;
    e.fromHEX("#ffffff"), _dependency2.tween(t).bindNodeState(false).set({
      position: o,
      active: !0
    }).by(1.5, {
      position: new _dependency2.Vec3(0, 50, 0)
    }, {
      easing: "fade",
      onComplete: function () {
        App.pool.getPool(_dependency8.EPool.WIN_CASH_POOL).put(t);
      }
    }).start(), _dependency2.tween(e).bindNodeState(false).delay(1).to(.5, {
      a: 0
    }, {
      easing: "fade"
    }).start();
  }, i.reset = function () {}, i.setData = function (t) {}, i.show = function () {
    this.node.active = !0;
  }, i.hide = function () {
    this.node.active = !1;
  }, i.addEvents = function () {
    var t = this;
    this.on(_dependency7.GameEvent.SHOW_WIN_CASH, function () {
      t.showWinCash();
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), e;
}(_dependency3.default)) || g);
_dependency2.cclegacy._RF.pop();
