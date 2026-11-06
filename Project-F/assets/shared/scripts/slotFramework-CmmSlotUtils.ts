// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-CmmUtils";
import * as _dependency4 from "./slotFramework-DefinitionModel";
import * as _dependency5 from "./main-WrapperData";
import * as _dependency6 from "./main-AdapterEvent";
import * as _dependency7 from "./main-UrlUtils";
var _export;
export { _export as CmmSlotUtils };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CmmSlotUtils":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, a, r, o, u, l, s, d;
_dependency2.cclegacy._RF.push({}, "61fe5EKYlZN0b8D3OtgU7WO", "CmmSlotUtils", void 0), _publish("CmmSlotUtils", function (t) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(n, t), n.formatNumber = function (t, e, i, a, r) {
    void 0 === e && (e = !1), void 0 === i && (i = !0), void 0 === r && (r = !0), void 0 === a && (a = _dependency4.default.getData().digital);
    var o = r ? t.toFixed(a) : n.keepDecimalPlaces(t, a);
    if (e) {
      var l = o.split(".");
      1 === l.length ? 0 != a && (o += "." + "0".repeat(a)) : l[1].length < a && (o += "0".repeat(a - l[1].length));
    }
    if (i) {
      var s = o.split(".");
      s[0] = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), o = 0 != a ? s.join(".") : s[0];
    }
    return o;
  }, n.tweenNum = function (t) {
    var e = this,
      n = t.label,
      i = t.start,
      r = t.end,
      o = t.tweenTime,
      u = t.digital,
      l = t.useThousandsSeparator,
      s = t.callback,
      d = t.tag,
      c = t.isRounding,
      f = void 0 === c || c,
      p = {
        value: i
      };
    return _dependency2.tween(p).bindNodeState(false).to(o, {
      value: r
    }, {
      onUpdate: function () {
        n.string = e.formatNumber(p.value, !1, l, u, f);
      },
      onComplete: function () {
        n.string = e.formatNumber(r, !1, l, u, f), s && s();
      }
    }).tag(d).start();
  }, n.getOrientationTarget = function (t, e) {
    var n = App.dataCenter.get(_dependency5.default).orientation === _dependency6.EOrientationType.LANDSCAPE ? t : e;
    return App.dataCenter.get(_dependency5.default).orientation || (n = "landscape" === _dependency7.default.getViewModeParam() ? t : e), n;
  }, n.delayTime = function (t, e) {
    var n = this;
    return new Promise(function (e) {
      _dependency2.Tween.stopAllByTarget(n.delayNode), _dependency2.tween(n.delayNode).bindNodeState(false).delay(t).call(function () {
        e(!0);
      }).start();
    });
  }, n.awaitTimer = function (t) {
    return new Promise(function (e) {
      setTimeout(function () {
        e(!0);
      }, 1e3 * t);
    });
  }, n.keepDecimalPlaces = function (t, e) {
    var n = new RegExp("(\\.\\d{" + e + "})\\d+");
    return t.toString().replace(n, "$1");
  }, n.formatJPNumber = function (t, e, i, a) {
    void 0 === e && (e = !1), void 0 === i && (i = !0), void 0 === a && (a = 2), void 0 === a && (a = _dependency4.default.getData().digital);
    var r = n.keepDecimalPlaces(n.roundTo(t, a + 1), a);
    if (e) {
      var o = r.split(".");
      1 === o.length ? 0 != a && (r += "." + "0".repeat(a)) : o[1].length < a && (r += "0".repeat(a - o[1].length));
    }
    if (i) {
      var l = r.split(".");
      l[0] = l[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), r = 0 != a ? l.join(".") : l[0];
    }
    return r;
  }, n.tweenJPNum = function (t) {
    var e = this,
      n = t.label,
      i = t.start,
      r = t.end,
      o = t.tweenTime,
      u = t.digital,
      l = t.useThousandsSeparator,
      s = t.callback,
      d = t.tag,
      c = (t.isRounding, {
        value: i
      });
    return _dependency2.tween(c).bindNodeState(false).to(o, {
      value: r
    }, {
      onUpdate: function () {
        n.string = e.formatJPNumber(c.value, !0, l, u);
      },
      onComplete: function () {
        n.string = e.formatJPNumber(r, !0, l, u), s && s();
      }
    }).tag(d).start();
  }, n.roundTo = function (t, e) {
    var n = Math.pow(10, e);
    return Math.round(t * n) / n;
  }, n;
}(_dependency3.CmmUtils)).delayNode = new _dependency2.Node("delay"), _dependency2.cclegacy._RF.pop();
