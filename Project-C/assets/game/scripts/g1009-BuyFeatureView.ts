// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UrlUtils";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "../../shared/scripts/main-Decorators";
import * as _dependency6 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency7 from "./g1009-GameConfigModel";
import * as _dependency8 from "./g1009-GameData";
import * as _dependency9 from "./g1009-GameEvent";
import * as _dependency0 from "./g1009-BuyFeatureItem";
var _export;
export { _export as BuyFeatureView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BuyFeatureView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, a, n, i, o, r, u, s, l, c, p, h, f, d, y, g, b, m, C, v, F;
var D, w, B, P, E, V, L, T, M, S, I;
_dependency2.cclegacy._RF.push({}, "f4ddfyBcwFJn6Q8Pc5lIgst", "BuyFeatureView", void 0);
var _ = _dependency2._decorator.ccclass,
  A = (_dependency2._decorator.property, {
    landscape: {
      1: [_dependency2.v3(0, -80, 0)],
      2: [_dependency2.v3(-148, -120, 0), _dependency2.v3(148, -120, 0)],
      3: [_dependency2.v3(-296, -100, 0), _dependency2.v3(0, -130, 0), _dependency2.v3(296, -100, 0)]
    },
    portrait: {
      1: [_dependency2.v3(0, -102, 0)],
      2: [_dependency2.v3(-148, -102, 0), _dependency2.v3(134, -102, 0)],
      3: [_dependency2.v3(-240, -50, 0), _dependency2.v3(0, -124, 0), _dependency2.v3(240, -50, 0)]
    }
  }),
  U = {
    landscape: {
      1: _dependency2.v3(1, 1, 1),
      2: _dependency2.v3(1, 1, 1),
      3: _dependency2.v3(1, 1, 1)
    },
    portrait: {
      1: _dependency2.v3(1, 1, 1),
      2: _dependency2.v3(1, 1, 1),
      3: _dependency2.v3(.9, .9, .9)
    }
  };
_publish("BuyFeatureView", (D = _("BuyFeatureView"), w = _dependency5.inject("popup", _dependency2.Node), B = _dependency5.inject("popup/spines", _dependency2.Node), P = _dependency5.inject("popup/btnClose", _dependency2.Node), E = _dependency5.inject("popup/content", _dependency2.Node), D((T = _dependency.applyDecoratedDescriptor((L = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "popup", T, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spines", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "btnClose", S, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "content", I, _dependency.assertThisInitialized(e)), e.skeletons = [], e.buyFeatureViewData = [], e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + _dependency3.default.getViewModeParam() + "/BuyFeatureView";
  }, r.init = function () {
    this.skeletons = this.spines.getComponentsInChildren(_dependency2.sp.Skeleton);
  }, r.cancelBtnHandler = function (t) {
    var e = t.type == _dependency2.NodeEventType.TOUCH_START ? _dependency2.v3(1.15, 1.15, 1.15) : _dependency2.v3(1.2, 1.2, 1.2);
    this.btnClose.setScale(e), t.type == _dependency2.NodeEventType.TOUCH_END && this.closePopup();
  }, r.closePopup = function () {
    App.uiManager.close(e), dispatch(_dependency9.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency7.EBTM.CLOSE_FEATURE
      }
    });
  }, r.addButtonsEvent = function () {
    this.btnClose.on(_dependency2.NodeEventType.TOUCH_START, this.cancelBtnHandler, this), this.btnClose.on(_dependency2.NodeEventType.TOUCH_MOVE, this.cancelBtnHandler, this), this.btnClose.on(_dependency2.NodeEventType.TOUCH_CANCEL, this.cancelBtnHandler, this), this.btnClose.on(_dependency2.NodeEventType.TOUCH_END, this.cancelBtnHandler, this);
  }, r.reset = function () {}, r.openPopup = function () {
    if (this.popup.active = !0, this.data.getData().superMgRealStakeLimit > 0) {
      this.buyFeatureViewData = [];
      for (var t = _dependency6.default.getData().totalStake, e = this.data.getData().definition.buyFeature.slice(), a = 0; a < e.length; a++) {
        var n = e[a],
          i = t * n.featureRate;
        Log.e("featureStake::::::", i), 2 == a ? i <= this.data.getData().superMgRealStakeLimit && this.buyFeatureViewData.push(n) : this.buyFeatureViewData.push(n);
      }
      this.createBuyFeatureItemWithMaxBet();
    } else this.createBuyFeatureItem();
    this.skeletons.forEach(function (t) {
      t.setAnimation(0, "popup", !1), t.setCompleteListener(function () {
        t.setAnimation(0, "loop", !0), t.setCompleteListener(null);
      });
    }), this.addButtonsEvent();
  }, r.createBuyFeatureItem = function () {
    for (var t = this.data.getData().definition, e = _dependency7.default.getData().filePaths.buyFeatureItemPrefab, a = t.buyFeature, n = a.length, i = _dependency3.default.getViewModeParam(), o = 0; o < a.length; o++) {
      var r = a[o],
        u = App.cache.get(this.data.module, e).data,
        s = _dependency2.instantiate(u);
      s.setPosition(A[i][n][o]), s.setScale(U[i][n]);
      var l = s.addComponent(_dependency0.BuyFeatureItem);
      this.content.addChild(s), l.init(r.featureIndex);
    }
  }, r.createBuyFeatureItemWithMaxBet = function () {
    Log.e("max buy feature::::::::::", this.data.getData().superMgRealStakeLimit), Log.e("buy feature view data:::::::", this.buyFeatureViewData);
    this.data.getData().definition;
    for (var t = _dependency7.default.getData().filePaths.buyFeatureItemPrefab, e = this.buyFeatureViewData.length, a = _dependency3.default.getViewModeParam(), n = 0; n < this.buyFeatureViewData.length; n++) {
      var i = this.buyFeatureViewData[n],
        o = App.cache.get(this.data.module, t).data,
        r = _dependency2.instantiate(o);
      r.setPosition(A[a][e][n]), r.setScale(U[a][e]);
      var u = r.addComponent(_dependency0.BuyFeatureItem);
      this.content.addChild(r), u.init(i.featureIndex);
    }
  }, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(_dependency9.GameEvent.CLOSE_FEATURE_POPUP, function (e) {
      t.closePopup();
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), e;
}(_dependency4.default)).prototype, "popup", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(L.prototype, "spines", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = _dependency.applyDecoratedDescriptor(L.prototype, "btnClose", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _dependency.applyDecoratedDescriptor(L.prototype, "content", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = L)) || V));
_dependency2.cclegacy._RF.pop();
