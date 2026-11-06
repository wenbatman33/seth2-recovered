// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency5 from "./g1009-GameConfigModel";
import * as _dependency6 from "./g1009-GameData";
import * as _dependency7 from "./g1009-GameEvent";
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
var n, e, o, i, a, s, c, r, u, f, l, h, d;
var p;
_dependency2.cclegacy._RF.push({}, "f0bace+0B5NDIDlOv6rqpmQ", "WinView", void 0);
var m = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("WinView", m("WinView")(p = function (t) {
  var _nativeConstructor = o;
  function o() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(o, t);
  var i = o.prototype;
  return i.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, i.start = function () {
    this.init();
  }, i.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, i.init = function () {}, i.showWinCash = function () {
    var t = this,
      n = this.data.getData().gameState.winSymbols,
      e = _dependency5.default.getData().filePaths.winCashPrefab,
      o = App.cache.get(this.data.module, e).data,
      i = [14, 15, 8, 9, 20, 21, 2, 3, 26, 27, 13, 16, 7, 10, 19, 22, 1, 4, 25, 28, 12, 17, 6, 11, 18, 23, 0, 5, 24, 29];
    null == n && (n = []), n.forEach(function (n) {
      var e = [];
      n.symbolPos.forEach(function (t) {
        e.push(i.indexOf(t));
      }), e.sort(function (t, n) {
        return t - n;
      });
      var c = _dependency2.instantiate(o),
        r = i[e[0]],
        u = c.getComponent(_dependency2.Label);
      t.node.addChild(c), u.string = _dependency4.CmmSlotUtils.formatNumber(n.winnings), t.playWinCashTween(c, r);
    });
  }, i.playWinCashTween = function (t, n) {
    var e = this.data.getData().symbolPosConfig.get(n),
      o = t.getComponent(_dependency2.Label).color;
    _dependency2.tween(t).bindNodeState(false).set({
      position: e
    }).by(1.5, {
      position: new _dependency2.Vec3(0, 50, 0)
    }, {
      easing: "fade",
      onComplete: function () {
        t.destroy();
      }
    }).start(), _dependency2.tween(o).bindNodeState(false).delay(1).to(.5, {
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
  }, _dependency.createClass(o, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), o;
}(_dependency3.default)) || p);
_dependency2.cclegacy._RF.pop();
