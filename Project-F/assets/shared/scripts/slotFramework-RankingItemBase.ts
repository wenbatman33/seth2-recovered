// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-TableViewCell";
import * as _dependency4 from "./main-Decorators";
import * as _dependency5 from "./slotFramework-ColorModel";
import * as _dependency6 from "./main-CmmUtils";
import * as _dependency7 from "./main-Bundles";
import * as _dependency8 from "./slotFramework-LoadUtils";
import * as _dependency9 from "./slotFramework-SlotFrameworkData";
import * as _dependency0 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency1 from "./slotFramework-NoTouchingView";
import * as _dependency10 from "./main-Config";
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
var e, n, i, r, a, l, o, u, c, s, b, p, f, g, m, y, d, w, h, k, L;
var v, B, C, z, D, I, A, F, S, E, R, M, _, N, T, U, P, V, x, j, G, K;
_dependency2.cclegacy._RF.push({}, "543f21JtyhLeas2dybnAY+3", "RankingItemBase", void 0);
var Y = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (v = _dependency4.inject("bg", _dependency2.Sprite), B = _dependency4.inject("top3Bg", _dependency2.Node), C = _dependency4.inject("content", _dependency2.Node), z = _dependency4.inject("line", _dependency2.Node), D = _dependency4.inject("content/rankMask/label", _dependency2.Label), I = _dependency4.inject("content/rankMask/icon", _dependency2.Sprite), A = _dependency4.inject("content/winContent/label", _dependency2.Label), F = _dependency4.inject("content/betContent/label", _dependency2.Label), S = _dependency4.inject("content/infoMask/label", _dependency2.Label), E = _dependency4.inject("content/replayContent/replayBtn", _dependency2.Node), Y((_ = _dependency.applyDecoratedDescriptor((M = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), l = 0; l < n; l++) a[l] = arguments[l];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bg", _, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "top3Bg", N, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "content", T, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "line", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rankLabel", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rankIcon", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "winLabel", x, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "betLabel", j, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "infoLabel", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "replayBtn", K, _dependency.assertThisInitialized(e)), e.gameStates = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var l = e.prototype;
  return l.init = function () {}, l.setAdapter = function (t) {}, l.initStyle = function (t) {
    var e = t <= 3;
    if (this.top3Bg.active = e, this.bg.node.active = !e, e) {
      var n = _dependency8.LoadUtils.getDirSp(_dependency7.EBundles[_dependency7.EBundles.slotFramework], this.slotData.getData().filePaths.rankingDir, "icon-crown" + t);
      this.rankIcon.spriteFrame = n;
    }
    this.rankIcon.node.active = e, this.winLabel.isBold = e, this.betLabel.isBold = e, this.line.active = !e;
  }, l.willRecycle = function () {
    this.replayBtn.getComponent(_dependency2.Button).clickEvents = [];
  }, l.updateData = function (t, e, n) {
    var i = e.rank,
      r = e.win,
      a = e.bet,
      l = e.username,
      o = e.roomNumber,
      u = e.betId,
      c = _dependency5.default.getData(),
      s = c.green,
      b = c.red,
      p = c.record,
      f = App.getLanguage("rankingPlayerId", [], _dependency7.EBundles[_dependency7.EBundles.slotFramework]),
      d = App.getLanguage("rankingMachine", [], _dependency7.EBundles[_dependency7.EBundles.slotFramework]);
    this.initStyle(i), this.bg.color = n % 2 == 0 ? p[5] : p[10], this.rankLabel.string = "" + i, this.winLabel.string = "" + r, this.betLabel.string = "" + a, this.infoLabel.string = f + "：" + l + "\n" + d + "：" + o, _dependency6.CmmUtils.addBtnClickEvent(this.replayBtn, function () {
      var e = {
        text: App.getLanguage("tipMsgWatchReplay", [], _dependency7.EBundles[_dependency7.EBundles.slotFramework]),
        confirmCb: function () {
          App.uiManager.open({
            type: _dependency1.default,
            bundle: _dependency7.EBundles[_dependency7.EBundles.slotFramework],
            zIndex: _dependency10.ViewZOrder.UILoading,
            name: "禁止觸碰"
          }), dispatch(_dependency0.SlotFrameworkEvent.SEND_GET_RANKING_REPLAY_REQUEST, {
            rankKey: t,
            betId: u
          });
        },
        bbrCb: function () {},
        cancelCb: function () {}
      };
      App.gameAlert.show(e);
    }), this.winLabel.color = e.win > 0 ? b.primary : s.primary;
  }, _dependency.createClass(e, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }]), e;
}(_dependency3.TableViewCell)).prototype, "bg", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = _dependency.applyDecoratedDescriptor(M.prototype, "top3Bg", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = _dependency.applyDecoratedDescriptor(M.prototype, "content", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(M.prototype, "line", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(M.prototype, "rankLabel", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(M.prototype, "rankIcon", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(M.prototype, "winLabel", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(M.prototype, "betLabel", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(M.prototype, "infoLabel", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(M.prototype, "replayBtn", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = M)) || R));
_dependency2.cclegacy._RF.pop();
