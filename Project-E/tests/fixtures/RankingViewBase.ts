// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-TableView";
import * as _dependency5 from "./main-UIView";
import * as _dependency6 from "./main-Decorators";
import * as _dependency7 from "./slotFramework-RankingItemBase";
import * as _dependency8 from "./slotFramework-SlotFrameworkData";
import * as _dependency9 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency0 from "./slotFramework-ColorModel";
var _export;
export { _export as ERankType };
var _export2;
export { _export2 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ERankType":
      _export = value;
      break;
    case "default":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, a, r, l, s, c, u, h, d, g, p, B, f, k, b, C, m, y, w, T, _, v, D;
var E, L, W, A, R, S, I, N, F, G, O, P, K, V, H, z, U, M, Y, x, Q;
_publish("ERankType", void 0), _dependency2.cclegacy._RF.push({}, "fa46dT/D4ZHQpJQVvLMZLO7", "RankingViewBase", void 0);
var j;
_dependency2._decorator.ccclass, _dependency2._decorator.property;
!function (t) {
  t.DRAGON_THIS_WEEK = "dragonThisWeek", t.DRAGON_LAST_WEEK = "dragonLastWeek", t.DRAGON_THIS_YEAR = "dragonThisYear";
}(j || (j = _publish("ERankType", {})));
_publish("default", (E = _dependency6.inject("bbr", _dependency2.Node), L = _dependency6.inject("content/closeBtn", _dependency2.Node), W = _dependency6.inject("content/topBar/weekBtnContent/thisWeekBtn", _dependency2.Node), A = _dependency6.inject("content/topBar/weekBtnContent/lastWeekBtn", _dependency2.Node), R = _dependency6.inject("content/topBar/weekBtnContent/historyBtn", _dependency2.Node), S = _dependency6.inject("content/table/title", _dependency2.Node), I = _dependency6.inject("content/table/scrollView", _dependency4.default), N = _dependency6.inject("content/loadingContent", _dependency2.Node), F = _dependency6.inject("content/loadingContent/ProgressBar", _dependency2.ProgressBar), G = _dependency6.inject("content/noDataLabel", _dependency2.Node), P = _dependency.applyDecoratedDescriptor((O = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bbr", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "closeBtn", K, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "thisWeekBtn", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "lastWeekBtn", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "historyBtn", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "tableTitle", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "scrollView", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "loadingContent", Y, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "loadingBar", x, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "noDataLabel", Q, _dependency.assertThisInitialized(e)), e.itemPrefab = null, e.itemDataArray = [], e.thisWeekBtnClickedFlag = !1, e.lastWeekBtnClickedFlag = !1, e.historyBtnClickedFlag = !1, e.rankKey = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init(), this.thisWeekBtnClickedFlag = !0, this.sendGetRankingWeekByBtn(this.thisWeekBtn, j.DRAGON_THIS_WEEK);
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/view/RankingViewP";
  }, r.updateCellData = function (t, e) {
    e.updateData(this.rankKey, this.itemDataArray[e.index], e.index);
  }, r.tableCellTypeAtIndex = function (t, e) {
    return 0;
  }, r.numberOfCellsInTableView = function (t) {
    return this.itemDataArray.length;
  }, r.tableCellWillRecycle = function (t, e) {
    e.willRecycle();
  }, r.init = function () {
    this.startLoading(), this.itemPrefab = App.cache.get(_dependency3.EBundles[_dependency3.EBundles.slotFramework], this.getRankingItemPrefabUrl).data, this.setEventTouch(), this.scrollView.delegate = this;
    var t = _dependency2.instantiate(this.itemPrefab).addComponent(_dependency7.default),
      e = this.scrollView.template;
    e.push(t), this.scrollView.template = e;
  }, r.onClose = function () {
    this.reloadItems(), this.stopLoading(), this.close(), dispatch(_dependency9.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM);
  }, r.setEventTouch = function () {
    var t = this;
    this.closeBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.close();
    }), this.bbr.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.close();
    }), this.thisWeekBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.thisWeekBtnClickedFlag || (t.resetBtnStatus(), t.thisWeekBtnClickedFlag = !0, t.sendGetRankingWeekByBtn(t.thisWeekBtn, j.DRAGON_THIS_WEEK), dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }), this.lastWeekBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.lastWeekBtnClickedFlag || (t.resetBtnStatus(), t.lastWeekBtnClickedFlag = !0, t.sendGetRankingWeekByBtn(t.lastWeekBtn, j.DRAGON_LAST_WEEK), dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }), this.historyBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.historyBtnClickedFlag || (t.resetBtnStatus(), t.historyBtnClickedFlag = !0, t.sendGetRankingWeekByBtn(t.historyBtn, j.DRAGON_THIS_YEAR), dispatch(_dependency9.SlotFrameworkEvent.PLAY_CLICK_BTM));
    });
  }, r.sendGetRankingWeekByBtn = function (t, e) {
    this.startLoading(), this.setButtonActive(this.thisWeekBtn, this.lastWeekBtn, this.historyBtn), this.setButtonStyle(t, !0), this.reloadItems(), dispatch(_dependency9.SlotFrameworkEvent.SEND_GET_RANKING_LIST_REQUEST, {
      rankType: e
    });
  }, r.setButtonActive = function (t, e, n, i) {
    void 0 === i && (i = !1), this.setButtonStyle(t, i), this.setButtonStyle(e, i), this.setButtonStyle(n, i);
  }, r.setButtonStyle = function (t, e) {
    var n = _dependency0.default.getData();
    e ? (t.getComponent(_dependency2.Sprite).color = n.mainGame.main, t.getComponent(_dependency2.Button).normalColor = n.mainGame.main, t.getComponent(_dependency2.Button).pressedColor = n.mainGame.mainHover, t.getComponent(_dependency2.Button).hoverColor = n.mainGame.mainHover, t.getComponent(_dependency2.Button).disabledColor = n.white.default01, t.getChildByName("Label").getComponent(_dependency2.Label).color = new _dependency2.Color("#000000")) : (t.getComponent(_dependency2.Sprite).color = n.background[60], t.getComponent(_dependency2.Button).normalColor = n.background[60], t.getComponent(_dependency2.Button).pressedColor = n.background[80], t.getComponent(_dependency2.Button).hoverColor = n.background[80], t.getComponent(_dependency2.Button).disabledColor = n.white.default01, t.getChildByName("Label").getComponent(_dependency2.Label).color = n.background[0]);
  }, r.resetBtnStatus = function () {
    this.thisWeekBtnClickedFlag = !1, this.lastWeekBtnClickedFlag = !1, this.historyBtnClickedFlag = !1;
  }, r.createItems = function (t) {
    var e = t.data.list;
    if (this.itemPrefab) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n],
          o = i.rank,
          a = i.win,
          r = i.bet;
        e[n].rank = o, e[n].win = a, e[n].bet = r, this.itemDataArray.push(e[n]), this.scrollView.insertCellAtIndex();
      }
      0 == this.itemDataArray.length && (this.noDataLabel.active = !0);
    }
  }, r.reloadItems = function () {
    this.itemDataArray = [], this.scrollView.reloadData(), this.noDataLabel.active = !1;
  }, r.startLoading = function () {
    this.loadingContent.active = !0, this.loadingBar.totalLength = this.tableTitle.getComponent(_dependency2.UITransform).width, this.loadingBar.progress = 0, _dependency2.tween(this.loadingBar).bindNodeState(false).repeatForever(_dependency2.tween().bindNodeState(false).set({
      progress: 0
    }).to(10, {
      progress: 1
    })).start();
  }, r.stopLoading = function () {
    _dependency2.Tween.stopAllByTarget(this.loadingBar), this.loadingContent.active = !1;
  }, r.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency9.SlotFrameworkEvent.GET_RANKING_LIST_RESPONSE, function (t) {
      e.rankKey = t.data.rankKey, e.createItems(t), e.stopLoading();
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), e;
}(_dependency5.default)).prototype, "bbr", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(O.prototype, "closeBtn", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(O.prototype, "thisWeekBtn", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(O.prototype, "lastWeekBtn", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(O.prototype, "historyBtn", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(O.prototype, "tableTitle", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = _dependency.applyDecoratedDescriptor(O.prototype, "scrollView", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(O.prototype, "loadingContent", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(O.prototype, "loadingBar", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(O.prototype, "noDataLabel", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O));
_dependency2.cclegacy._RF.pop();
