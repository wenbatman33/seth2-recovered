// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Decorators";
import * as _dependency4 from "./slotFramework-HistoryViewBase";
import * as _dependency5 from "./main-Config";
import * as _dependency6 from "./main-Bundles";
import * as _dependency7 from "./slotFramework-RecordViewP";
import * as _dependency8 from "./main-CmmUtils";
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
var t, a, n, i, l, r, o, u, s, c, b, f, p, m, k;
var M, h, y, g, L, N, d, w, v, P, z, C, H, T, D, E, U, V, W, B, _, I, O;
_dependency2.cclegacy._RF.push({}, "0f09fZvPj9KBLKPdM2f/TpC", "HistoryViewP", void 0);
var A = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (M = A("HistoryViewP"), h = _dependency3.inject("content/table/title/gameNameMask", _dependency2.Node), y = _dependency3.inject("content/table/title/gameNameMask/Label", _dependency2.Node), g = _dependency3.inject("content/table/title/betNumMask", _dependency2.Node), L = _dependency3.inject("content/table/title/betNumMask/Label", _dependency2.Node), N = _dependency3.inject("content/table/title/totalWinMask", _dependency2.Node), d = _dependency3.inject("content/table/title/totalWinMask/Label", _dependency2.Node), w = _dependency3.inject("content/table/title/profitMask", _dependency2.Node), v = _dependency3.inject("content/table/title/profitMask/Label", _dependency2.Node), P = _dependency3.inject("content/table/title/countMask", _dependency2.Node), z = _dependency3.inject("content/table/title/countMask/Label", _dependency2.Node), M((T = _dependency.applyDecoratedDescriptor((H = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r];
    return t = Reflect.construct(e, [this].concat(l).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "gameNameMask", T, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "gameNameLabel", D, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "betNumMask", E, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "betNumLabel", U, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "totalWinMask", V, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "totalWinLabel", W, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "profitMask", B, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "profitLabel", _, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "countMask", I, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "countLabel", O, _dependency.assertThisInitialized(t)), t;
  }
  _dependency.inheritsLoose(t, e), t.getPrefabUrl = function () {
    return "prefabs/view/HistoryViewP";
  };
  var r = t.prototype;
  return r.start = function () {
    e.prototype.start.call(this), this.initLabelMarquee();
  }, r.initLabelMarquee = function () {
    var e = this;
    [{
      mask: this.gameNameMask,
      label: this.gameNameLabel
    }, {
      mask: this.betNumMask,
      label: this.betNumLabel
    }, {
      mask: this.totalWinMask,
      label: this.totalWinLabel
    }, {
      mask: this.profitMask,
      label: this.profitLabel
    }, {
      mask: this.countMask,
      label: this.countLabel
    }].forEach(function (t) {
      var a = {
        maskNode: t.mask,
        labelNode: t.label,
        delayTime: 2
      };
      e.scheduleOnce(function () {
        _dependency8.CmmUtils.labelMarquee(a);
      });
    });
  }, r.setEventTouch = function () {
    var t = this;
    e.prototype.setEventTouch.call(this), this.closeBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.onClose(), App.uiManager.close(_dependency7.default);
    }), this.bbr.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.onClose(), App.uiManager.close(_dependency7.default);
    }), this.backBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.onClose(), App.uiManager.open({
        type: _dependency7.default,
        bundle: _dependency6.EBundles[_dependency6.EBundles.slotFramework],
        zIndex: _dependency5.ViewZOrder.UI,
        name: "押注紀錄P"
      });
    });
  }, _dependency.createClass(t, [{
    key: "getHistoryViewItemPrefabUrl",
    get: function () {
      return this.data.getData().filePaths.historyItemPPrefab;
    }
  }]), t;
}(_dependency4.default)).prototype, "gameNameMask", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(H.prototype, "gameNameLabel", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = _dependency.applyDecoratedDescriptor(H.prototype, "betNumMask", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(H.prototype, "betNumLabel", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(H.prototype, "totalWinMask", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = _dependency.applyDecoratedDescriptor(H.prototype, "totalWinLabel", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = _dependency.applyDecoratedDescriptor(H.prototype, "profitMask", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = _dependency.applyDecoratedDescriptor(H.prototype, "profitLabel", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _dependency.applyDecoratedDescriptor(H.prototype, "countMask", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(H.prototype, "countLabel", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = H)) || C));
_dependency2.cclegacy._RF.pop();
