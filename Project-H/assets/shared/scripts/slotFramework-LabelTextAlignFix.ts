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
var e, i, n, r;
_publish("installLabelTextAlignFix", f), _dependency.cclegacy._RF.push({}, "dc380JQoaFN57mwz4Lqcvq7", "LabelTextAlignFix", void 0);
var a = "เลือกตู้เกม",
  l = 320,
  c = "__labelTextAlignFixInstalled",
  o = new Map();
function x(t) {
  return function (e, i, n, r) {
    var a = this.textAlign;
    if ("center" !== a && "right" !== a) return void 0 === r ? t.call(this, e, i, n) : t.call(this, e, i, n, r);
    var l = function (t, e) {
        var i = t.font + "\0" + e,
          n = o.get(i);
        return void 0 === n && (n = t.measureText(e).width, o.size >= 256 && o.clear(), o.set(i, n)), n;
      }(this, e),
      c = "center" === a ? i - l / 2 : i - l;
    this.textAlign = "left";
    var x = void 0 === r ? t.call(this, e, c, n) : t.call(this, e, c, n, r);
    return this.textAlign = a, x;
  };
}
function f() {
  var t,
    e = window;
  if (!e[c]) {
    var r = null == (t = e.CanvasRenderingContext2D) ? void 0 : t.prototype;
    r && "function" == typeof r.fillText && (!function () {
      var t = document.createElement("canvas");
      t.width = l, t.height = 44;
      var e = t.getContext("2d");
      if (!e) return !1;
      e.font = "29px Arial", e.textAlign = "center", e.textBaseline = "alphabetic", e.fillStyle = "#fff";
      var i = e.measureText(a).width;
      if (i <= 0) return !1;
      e.fillText(a, 160, 33);
      for (var n = e.getImageData(0, 0, l, 44).data, r = -1, c = 0; c < l && r < 0; c++) for (var o = 0; o < 44; o++) if (n[4 * (o * l + c) + 3] > 8) {
        r = c;
        break;
      }
      return !(r < 0) && r > 160 - i / 4;
    }() ? _dependency.log("[LabelTextAlignFix] textAlign 正常，不安裝") : (r.fillText = x(r.fillText), r.strokeText = x(r.strokeText), e[c] = !0, _dependency.warn("[LabelTextAlignFix] 已安裝 textAlign 修正（iOS 泰文置中失效）")));
  }
}
f();
var s = _dependency.RichText.prototype;
if (s._createFontLabel) {
  var u = s._createFontLabel;
  s._createFontLabel = function (t) {
    var e = u.call(this, t);
    return e && e.node && (e.node.active = !0), e;
  };
}
_dependency.cclegacy._RF.pop();
