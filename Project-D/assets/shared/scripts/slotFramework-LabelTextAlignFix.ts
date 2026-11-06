// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as installLabelTextAlignFix };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "installLabelTextAlignFix":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n;
_publish("installLabelTextAlignFix", o), _dependency.cclegacy._RF.push({}, "dc380JQoaFN57mwz4Lqcvq7", "LabelTextAlignFix", void 0);
var l = "เลือกตู้เกม",
  r = 320,
  a = "__labelTextAlignFixInstalled",
  c = new Map();
function x(t) {
  return function (e, i, n, l) {
    var r = this.textAlign;
    if ("center" !== r && "right" !== r) return void 0 === l ? t.call(this, e, i, n) : t.call(this, e, i, n, l);
    var a = function (t, e) {
        var i = t.font + "\0" + e,
          n = c.get(i);
        return void 0 === n && (n = t.measureText(e).width, c.size >= 256 && c.clear(), c.set(i, n)), n;
      }(this, e),
      x = "center" === r ? i - a / 2 : i - a;
    this.textAlign = "left";
    var o = void 0 === l ? t.call(this, e, x, n) : t.call(this, e, x, n, l);
    return this.textAlign = r, o;
  };
}
function o() {
  var t,
    e = window;
  if (!e[a]) {
    var c = null == (t = e.CanvasRenderingContext2D) ? void 0 : t.prototype;
    c && "function" == typeof c.fillText && (!function () {
      var t = document.createElement("canvas");
      t.width = r, t.height = 44;
      var e = t.getContext("2d");
      if (!e) return !1;
      e.font = "29px Arial", e.textAlign = "center", e.textBaseline = "alphabetic", e.fillStyle = "#fff";
      var i = e.measureText(l).width;
      if (i <= 0) return !1;
      e.fillText(l, 160, 33);
      for (var n = e.getImageData(0, 0, r, 44).data, a = -1, c = 0; c < r && a < 0; c++) for (var x = 0; x < 44; x++) if (n[4 * (x * r + c) + 3] > 8) {
        a = c;
        break;
      }
      return !(a < 0) && a > 160 - i / 4;
    }() ? _dependency.log("[LabelTextAlignFix] textAlign 正常，不安裝") : (c.fillText = x(c.fillText), c.strokeText = x(c.strokeText), e[a] = !0, _dependency.warn("[LabelTextAlignFix] 已安裝 textAlign 修正（iOS 泰文置中失效）")));
  }
}
o(), _dependency.cclegacy._RF.pop();
