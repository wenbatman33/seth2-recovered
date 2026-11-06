// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-TableViewCell";
import * as _dependency4 from "./main-Decorators";
import * as _dependency5 from "./slotFramework-ColorModel";
import * as _dependency6 from "./main-CmmUtils";
import * as _dependency7 from "./slotFramework-WebUiView";
import * as _dependency8 from "./main-Bundles";
import * as _dependency9 from "./main-Config";
import * as _dependency0 from "./slotFramework-PlatformModel";
import * as _dependency1 from "./slotFramework-SocketModel";
import * as _dependency10 from "./slotFramework-UrlModel";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, r, o, a, l, u, c, s, f, m, p, d, g, b, h, w, y, C;
var S, v, I, N, D, z, B, M, T, U, k, R, V, P, E, F, A, L, _, x, W, j;
_dependency2.cclegacy._RF.push({}, "904a4eM+etBZqEOAASfkGY+", "RecordViewItem", void 0);
var H = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (S = _dependency4.inject("bg", _dependency2.Sprite), v = _dependency4.inject("content", _dependency2.Node), I = _dependency4.inject("content/feature/icon", _dependency2.Node), N = _dependency4.inject("content/timeContent/time", _dependency2.Label), D = _dependency4.inject("content/timeContent/betId", _dependency2.Label), z = _dependency4.inject("content/gameNameContnet/gameName", _dependency2.Label), B = _dependency4.inject("content/betContent/betNum", _dependency2.Label), M = _dependency4.inject("content/profitContent/profitNum", _dependency2.Label), T = _dependency4.inject("content/detailContent", _dependency2.Node), U = _dependency4.inject("content/detailContent/detailBtn", _dependency2.Node), H((V = _dependency.applyDecoratedDescriptor((R = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bg", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "content", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "featureIcon", E, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "time", F, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "betId", A, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "gameName", L, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "betNum", _, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "profitNum", x, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "detailContent", W, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "detailBtn", j, _dependency.assertThisInitialized(e)), e;
  }
  _dependency.inheritsLoose(e, t);
  var o = e.prototype;
  return o.init = function () {
    this.showDetailContent(), this.setEventTouch();
  }, o.setAdapter = function (t) {}, o.formatTime = function (t) {
    var e = new Date(t);
    return e.getFullYear() + "/" + (e.getMonth() + 1).toString().padStart(2, "0") + "/" + e.getDate().toString().padStart(2, "0") + " " + e.getHours().toString().padStart(2, "0") + ":" + e.getMinutes().toString().padStart(2, "0") + ":" + e.getSeconds().toString().padStart(2, "0");
  }, o.setEventTouch = function () {
    var t = this;
    this.detailBtn && _dependency6.CmmUtils.addBtnClickEvent(this.detailBtn, function () {
      if (_dependency0.default.getData().betRecordUrl) {
        var e = new URL(_dependency0.default.getData().betRecordUrl);
        e.searchParams.set("l", _dependency10.default.getData().searchParams.l), e.searchParams.set("t", _dependency1.default.currentToken), e.searchParams.set("betId", "" + t.betId.string), App.uiManager.open({
          type: _dependency7.WebUiView,
          bundle: _dependency8.EBundles[_dependency8.EBundles.slotFramework],
          zIndex: _dependency9.ViewZOrder.UI,
          name: "WebView",
          args: e.toString()
        });
      } else Log.e();
    });
  }, o.showDetailContent = function () {
    "xin-star" == _dependency0.default.getData().theme && (this.detailContent.active = !0);
  }, o.willRecycle = function () {
    this.detailBtn && (this.detailBtn.getComponent(_dependency2.Button).clickEvents = []);
  }, o.updateData = function (t, e) {
    var n = t.endTime,
      i = t.hasFree,
      r = t.isFeature,
      o = t.id,
      a = t.name,
      l = t.profit,
      c = (t.roomId, t.totalStake),
      s = _dependency5.default.getData(),
      f = s.green,
      m = s.red,
      d = s.record;
    this.featureIcon.active = i || r, this.bg.color = e % 2 == 0 ? d[5] : d[10], this.time.string = this.formatTime(n), this.betId.string = String(o), this.gameName.string = a, this.betNum.string = String(c), this.profitNum.string = String(l), this.featureIcon.getComponent(_dependency2.Sprite).color = r ? f.primary : m.primary, this.profitNum.color = t.profit > 0 ? m.primary : f.primary;
  }, e;
}(_dependency3.TableViewCell)).prototype, "bg", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(R.prototype, "content", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = _dependency.applyDecoratedDescriptor(R.prototype, "featureIcon", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(R.prototype, "time", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), A = _dependency.applyDecoratedDescriptor(R.prototype, "betId", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(R.prototype, "gameName", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = _dependency.applyDecoratedDescriptor(R.prototype, "betNum", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(R.prototype, "profitNum", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = _dependency.applyDecoratedDescriptor(R.prototype, "detailContent", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(R.prototype, "detailBtn", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = R)) || k));
_dependency2.cclegacy._RF.pop();
