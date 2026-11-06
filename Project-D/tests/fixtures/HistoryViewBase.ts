// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-AdapterEvent";
import * as _dependency5 from "./main-TableView";
import * as _dependency6 from "./main-UIView";
import * as _dependency7 from "./main-Decorators";
import * as _dependency8 from "./slotFramework-HistoryItem";
import * as _dependency9 from "./slotFramework-SlotFrameworkData";
import * as _dependency0 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency1 from "./slotFramework-ColorModel";
import * as _dependency10 from "./slotFramework-PlatformModel";
var _export;
export { _export as EDateBtnType };
var _export2;
export { _export2 as EDateTouchType };
var _export3;
export { _export3 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EDateBtnType":
      _export = value;
      break;
    case "EDateTouchType":
      _export2 = value;
      break;
    case "default":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, a, i, o, r, l, s, d, u, c, B, h, D, T, m, f, p, b, g, y, C, w, v, E, L, S, A, _;
var H, k, F, I, O, z, R, P, U, N, V, M, G, Y, K, x, Q, j, W, q, Z, J, X, $, tt, et, nt, at, it, ot, rt, lt, st, dt, ut, ct, Bt, ht, Dt, Tt, mt, ft, pt;
_publish({
  EDateBtnType: void 0,
  EDateTouchType: void 0
}), _dependency2.cclegacy._RF.push({}, "7f0d5QDRWxNqZ8jPiTzQwe8", "HistoryViewBase", void 0);
var bt, gt;
_dependency2._decorator.ccclass, _dependency2._decorator.property;
!function (t) {
  t.START = "start", t.END = "end";
}(bt || (bt = _publish("EDateBtnType", {}))), function (t) {
  t.ADD = "add", t.CUT = "cut";
}(gt || (gt = _publish("EDateTouchType", {})));
_publish("default", (H = _dependency7.inject("bbr", _dependency2.Node), k = _dependency7.inject("content/backBtn", _dependency2.Node), F = _dependency7.inject("content/closeBtn", _dependency2.Node), I = _dependency7.inject("content/topBar/dateBtn", _dependency2.Node), O = _dependency7.inject("content/topBar/dateBtn/date", _dependency2.Label), z = _dependency7.inject("content/topBar/dateBtnContent/last7DaysBtn", _dependency2.Node), R = _dependency7.inject("content/topBar/dateBtnContent/yesterdayBtn", _dependency2.Node), P = _dependency7.inject("content/topBar/dateBtnContent/todayBtn", _dependency2.Node), U = _dependency7.inject("content/table/title", _dependency2.Node), N = _dependency7.inject("content/table/scrollView", _dependency5.default), V = _dependency7.inject("content/loadingContent", _dependency2.Node), M = _dependency7.inject("content/loadingContent/ProgressBar", _dependency2.ProgressBar), G = _dependency7.inject("content/noDataLabel", _dependency2.Node), Y = _dependency7.inject("content/dateBoard", _dependency2.Node), K = _dependency7.inject("content/dateBoard/bbr", _dependency2.Node), x = _dependency7.inject("content/dateBoard/layout/startDateContent/startDateBtn/addBtn", _dependency2.Node), Q = _dependency7.inject("content/dateBoard/layout/startDateContent/startDateBtn/cutBtn", _dependency2.Node), j = _dependency7.inject("content/dateBoard/layout/startDateContent/startDateBtn/label", _dependency2.Label), W = _dependency7.inject("content/dateBoard/layout/endDateContent/endDateBtn/addBtn", _dependency2.Node), q = _dependency7.inject("content/dateBoard/layout/endDateContent/endDateBtn/cutBtn", _dependency2.Node), Z = _dependency7.inject("content/dateBoard/layout/endDateContent/endDateBtn/label", _dependency2.Label), X = _dependency.applyDecoratedDescriptor((J = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bbr", X, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "backBtn", $, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "closeBtn", tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "dateBtn", et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "dateBtnLabel", nt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "last7DaysBtn", at, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "yesterdayBtn", it, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "todayBtn", ot, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "tableTitle", rt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "scrollView", lt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "loadingContent", st, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "loadingBar", dt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "noDataLabel", ut, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "dateBoard", ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "dateBoardBbr", Bt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startDateBtnAdd", ht, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startDateBtnCut", Dt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "startDateBtnLabel", Tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "endDateBtnAdd", mt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "endDateBtnCut", ft, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "endDateBtnLabel", pt, _dependency.assertThisInitialized(e)), e.itemPrefab = null, e.recordData = [], e.currentTime = null, e.startDateBoardTime = null, e.endDateBoardTime = null, e.preStartDate = null, e.preEndDate = null, e.startTime = null, e.endTime = null, e.dateTouchFlag = !1, e.longTouchCB = null, e.todayBtnClickedFlag = !1, e.yesterdayBtnClickedFlag = !1, e.last7DaysBtnClickedFlag = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init(), this.currentTime = new Date(), this.startDateBoardTime = this.currentTime, this.endDateBoardTime = this.currentTime, this.setDateLabel(this.startDateBoardTime, this.endDateBoardTime), this.todayBtnClickedFlag = !0, this.sendGetHistoryByBtn(0, 0, this.todayBtn);
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/view/HistoryView";
  }, r.updateCellData = function (t, e) {
    e.updateData(this.recordData[e.index], e.index);
  }, r.tableCellTypeAtIndex = function (t, e) {
    return 0;
  }, r.numberOfCellsInTableView = function (t) {
    return this.recordData.length;
  }, r.tableCellWillRecycle = function (t, e) {
    e.willRecycle();
  }, r.setAdapter = function (t) {
    switch (t) {
      case _dependency4.EOrientationType.LANDSCAPE:
      case _dependency4.EOrientationType.PORTRAIT:
    }
  }, r.init = function () {
    this.startLoading(), this.itemPrefab = App.cache.get(_dependency3.EBundles[_dependency3.EBundles.slotFramework], this.getHistoryViewItemPrefabUrl).data, this.setEventTouch(), this.scrollView.delegate = this;
    var t = _dependency2.instantiate(this.itemPrefab).addComponent(_dependency8.default),
      e = this.scrollView.template;
    e.push(t), this.scrollView.template = e;
  }, r.onClose = function () {
    this.reloadItems(), this.stopLoading(), this.close(), dispatch(_dependency0.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM);
  }, r.setEventTouch = function () {
    var t = this;
    this.dateBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.dateBoard.active = !0, t.preStartDate = t.startDateBoardTime, t.preEndDate = t.endDateBoardTime, t.setDateBoard(t.startDateBoardTime, t.endDateBoardTime), t.scrollView.stopAutoScroll(), dispatch(_dependency0.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), this.dateBoardBbr.on(_dependency2.NodeEventType.TOUCH_END, function () {
      if (t.dateBoard.active = !1, t.preStartDate.valueOf() !== t.startDateBoardTime.valueOf() || t.preEndDate.valueOf() !== t.endDateBoardTime.valueOf()) {
        t.noDataLabel.active = !1, t.startLoading(), t.resetBtnStatus(), t.setButtonActive(t.todayBtn, t.yesterdayBtn, t.last7DaysBtn);
        var e = t.formatTime(t.endDateBoardTime),
          n = Math.floor((t.endDateBoardTime.getTime() - t.startDateBoardTime.getTime()) / 864e5 + 1),
          a = new Date(e);
        a.setHours(23, 59, 59, 999), t.endTime = a.getTime(), t.startTime = t.endTime - (24 * n * 60 * 60 * 1e3 - 1);
        var i = {
          startTime: t.startTime,
          endTime: t.endTime
        };
        t.setDateLabel(t.startDateBoardTime, t.endDateBoardTime), t.reloadItems(), dispatch(_dependency0.SlotFrameworkEvent.SEND_GET_HISTORY_REQUEST, i), dispatch(_dependency0.SlotFrameworkEvent.PLAY_CLICK_BTM);
      }
    }), this.todayBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.todayBtnClickedFlag || (t.resetBtnStatus(), t.todayBtnClickedFlag = !0, t.sendGetHistoryByBtn(0, 0, t.todayBtn), dispatch(_dependency0.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }), this.yesterdayBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.yesterdayBtnClickedFlag || (t.resetBtnStatus(), t.yesterdayBtnClickedFlag = !0, t.sendGetHistoryByBtn(0, 1, t.yesterdayBtn), dispatch(_dependency0.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }), this.last7DaysBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.last7DaysBtnClickedFlag || (t.resetBtnStatus(), t.last7DaysBtnClickedFlag = !0, t.sendGetHistoryByBtn(6, 0, t.last7DaysBtn), dispatch(_dependency0.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }), this.startDateBtnAdd.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.onDateTouchStart(bt.START, gt.ADD);
    }, this), this.startDateBtnAdd.on(_dependency2.NodeEventType.TOUCH_END, this.onDateTouchEnd, this), this.startDateBtnCut.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.onDateTouchStart(bt.START, gt.CUT);
    }, this), this.startDateBtnCut.on(_dependency2.NodeEventType.TOUCH_END, this.onDateTouchEnd, this), this.endDateBtnAdd.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.onDateTouchStart(bt.END, gt.ADD);
    }, this), this.endDateBtnAdd.on(_dependency2.NodeEventType.TOUCH_END, this.onDateTouchEnd, this), this.endDateBtnCut.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.onDateTouchStart(bt.END, gt.CUT);
    }, this), this.endDateBtnCut.on(_dependency2.NodeEventType.TOUCH_END, this.onDateTouchEnd, this);
  }, r.sendGetHistoryByBtn = function (t, e, n) {
    this.startLoading();
    var a = new Date();
    a.setDate(a.getDate() - e), a.setHours(23, 59, 59, 999);
    var i = new Date(a);
    i.setDate(a.getDate() - t), i.setHours(0, 0, 0, 0), this.startTime = i.getTime(), this.endTime = a.getTime(), this.startDateBoardTime = i, this.endDateBoardTime = a, this.setButtonActive(this.todayBtn, this.yesterdayBtn, this.last7DaysBtn), this.setButtonStyle(n, !0), this.reloadItems(), this.setDateLabel(this.startDateBoardTime, this.endDateBoardTime), this.setDateBoard(this.startDateBoardTime, this.endDateBoardTime);
    var o = {
      startTime: this.startTime,
      endTime: this.endTime
    };
    dispatch(_dependency0.SlotFrameworkEvent.SEND_GET_HISTORY_REQUEST, o);
  }, r.setButtonActive = function (t, e, n, a) {
    void 0 === a && (a = !1), this.setButtonStyle(t, a), this.setButtonStyle(e, a), this.setButtonStyle(n, a);
  }, r.setButtonStyle = function (t, e) {
    var n = _dependency1.default.getData();
    e ? (t.getComponent(_dependency2.Sprite).color = n.mainGame.main, t.getComponent(_dependency2.Button).normalColor = n.mainGame.main, t.getComponent(_dependency2.Button).pressedColor = n.mainGame.mainHover, t.getComponent(_dependency2.Button).hoverColor = n.mainGame.mainHover, t.getComponent(_dependency2.Button).disabledColor = n.white.default01, t.getChildByName("Label").getComponent(_dependency2.Label).color = new _dependency2.Color("#000000")) : (t.getComponent(_dependency2.Sprite).color = n.background[60], t.getComponent(_dependency2.Button).normalColor = n.background[60], t.getComponent(_dependency2.Button).pressedColor = n.background[80], t.getComponent(_dependency2.Button).hoverColor = n.background[80], t.getComponent(_dependency2.Button).disabledColor = n.white.default01, t.getChildByName("Label").getComponent(_dependency2.Label).color = n.background[0]);
  }, r.resetBtnStatus = function () {
    this.todayBtnClickedFlag = !1, this.yesterdayBtnClickedFlag = !1, this.last7DaysBtnClickedFlag = !1;
  }, r.createItems = function (t) {
    var e = t.content.list;
    if (this.itemPrefab) {
      for (var n = 0; n < e.length; n++) {
        var a = e[n],
          i = a.bet,
          o = a.win,
          r = a.profit;
        e[n].bet = i, e[n].win = o, e[n].profit = r, this.recordData.push(e[n]), this.scrollView.insertCellAtIndex();
      }
      0 == this.recordData.length && (this.noDataLabel.active = !0);
    }
  }, r.reloadItems = function () {
    this.recordData = [], this.scrollView.reloadData(), this.noDataLabel.active = !1;
  }, r.onDateTouchStart = function (t, e) {
    var n = this;
    this.dateTouchFlag || (this.dateTouchFlag = !0, this.dateCallBack(t, e), this.longTouchCB = function () {
      n.dateCallBack(t, e);
    }, this.schedule(this.longTouchCB, .1, _dependency2.macro.REPEAT_FOREVER, .5));
  }, r.onDateTouchEnd = function () {
    this.unschedule(this.longTouchCB), this.longTouchCB = null, this.dateTouchFlag = !1;
  }, r.dateCallBack = function (t, e) {
    if (this.dateTouchFlag) {
      var n = e == gt.ADD ? 1 : -1,
        a = new Date(this.startDateBoardTime),
        i = new Date(this.endDateBoardTime);
      switch (t) {
        case bt.START:
          a.setDate(a.getDate() + n);
          break;
        case bt.END:
          i.setDate(i.getDate() + n);
      }
      if (a > i) return;
      if (a.setHours(0, 0, 0, 0), i.setHours(0, 0, 0, 0), i.getTime() > this.currentTime.getTime()) return;
      var o = new Date(this.currentTime);
      if (o.setMonth(this.currentTime.getMonth() - 1), o.setDate(0), a < o || i < o) return;
      this.startDateBoardTime = a, this.endDateBoardTime = i, this.setDateBoard(this.startDateBoardTime, this.endDateBoardTime), dispatch(_dependency0.SlotFrameworkEvent.PLAY_CLICK_BTM);
    } else this.unschedule(this.longTouchCB), this.longTouchCB = null;
  }, r.setDateLabel = function (t, e) {
    this.dateBtnLabel.string = this.formatTime(t) + " ~ " + this.formatTime(e);
  }, r.setDateBoard = function (t, e) {
    this.startDateBtnLabel.string = this.formatTime(t), this.endDateBtnLabel.string = this.formatTime(e);
  }, r.formatTime = function (t) {
    var e = t;
    return e.getFullYear() + "/" + (e.getMonth() + 1).toString().padStart(2, "0") + "/" + e.getDate().toString().padStart(2, "0");
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
    t.prototype.addEvents.call(this), this.on(_dependency0.SlotFrameworkEvent.GET_HISTORY_RESPONSE, function (t) {
      e.createItems(t), e.stopLoading();
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency9.default);
    }
  }, {
    key: "userData",
    get: function () {
      return _dependency10.default;
    }
  }]), e;
}(_dependency6.default)).prototype, "bbr", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = _dependency.applyDecoratedDescriptor(J.prototype, "backBtn", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(J.prototype, "closeBtn", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(J.prototype, "dateBtn", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = _dependency.applyDecoratedDescriptor(J.prototype, "dateBtnLabel", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at = _dependency.applyDecoratedDescriptor(J.prototype, "last7DaysBtn", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = _dependency.applyDecoratedDescriptor(J.prototype, "yesterdayBtn", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = _dependency.applyDecoratedDescriptor(J.prototype, "todayBtn", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), rt = _dependency.applyDecoratedDescriptor(J.prototype, "tableTitle", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), lt = _dependency.applyDecoratedDescriptor(J.prototype, "scrollView", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), st = _dependency.applyDecoratedDescriptor(J.prototype, "loadingContent", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), dt = _dependency.applyDecoratedDescriptor(J.prototype, "loadingBar", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ut = _dependency.applyDecoratedDescriptor(J.prototype, "noDataLabel", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ct = _dependency.applyDecoratedDescriptor(J.prototype, "dateBoard", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Bt = _dependency.applyDecoratedDescriptor(J.prototype, "dateBoardBbr", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ht = _dependency.applyDecoratedDescriptor(J.prototype, "startDateBtnAdd", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Dt = _dependency.applyDecoratedDescriptor(J.prototype, "startDateBtnCut", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Tt = _dependency.applyDecoratedDescriptor(J.prototype, "startDateBtnLabel", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = _dependency.applyDecoratedDescriptor(J.prototype, "endDateBtnAdd", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = _dependency.applyDecoratedDescriptor(J.prototype, "endDateBtnCut", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), pt = _dependency.applyDecoratedDescriptor(J.prototype, "endDateBtnLabel", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J));
_dependency2.cclegacy._RF.pop();
