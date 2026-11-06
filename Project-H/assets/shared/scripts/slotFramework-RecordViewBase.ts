// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-CmmUtils";
import * as _dependency5 from "./main-AdapterEvent";
import * as _dependency6 from "./main-TableView";
import * as _dependency7 from "./main-UIView";
import * as _dependency8 from "./main-Decorators";
import * as _dependency9 from "./slotFramework-RecordViewItem";
import * as _dependency0 from "./slotFramework-SlotFrameworkData";
import * as _dependency1 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency10 from "./slotFramework-PlatformModel";
var _export;
export { _export as DateBtnType };
var _export2;
export { _export2 as DateTouchType };
var _export3;
export { _export3 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "DateBtnType":
      _export = value;
      break;
    case "DateTouchType":
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
var e, n, i, a, o, r, l, u, s, c, d, h, p, b, f, T, g, B, m, C, y, D, w, S, L, A, E, R, _;
var v, O, U, H, I, M, z, N, P, V, k, F, Y, q, K, x, j, G, Q, W, $, Z, J, X, tt, et, nt, it, at, ot, rt, lt, ut, st, ct, dt, ht, pt, bt, ft, Tt, gt, Bt, mt, Ct, yt, Dt, wt, St, Lt, At;
_publish({
  DateBtnType: void 0,
  DateTouchType: void 0
}), _dependency2.cclegacy._RF.push({}, "cb957E9CKdAcarZuRvlTD10", "RecordViewBase", void 0);
var Et, Rt;
_dependency2._decorator.ccclass, _dependency2._decorator.property;
!function (t) {
  t.DAY = "day", t.HOUR = "hour", t.MIN = "min";
}(Et || (Et = _publish("DateBtnType", {}))), function (t) {
  t.ADD = "add", t.CUT = "cut";
}(Rt || (Rt = _publish("DateTouchType", {})));
_publish("default", (v = _dependency8.inject("bbr", _dependency2.Node), O = _dependency8.inject("content/closeBtn", _dependency2.Node), U = _dependency8.inject("content/historyBtn", _dependency2.Node), H = _dependency8.inject("content/topBar/dateBtn", _dependency2.Node), I = _dependency8.inject("content/topBar/dateBtn/date", _dependency2.Label), M = _dependency8.inject("content/topBar/idContent", _dependency2.Node), z = _dependency8.inject("content/topBar/idContent/content/idMask", _dependency2.Node), N = _dependency8.inject("content/topBar/idContent/content/idMask/idLabel", _dependency2.Node), P = _dependency8.inject("content/topBar/copyHint", _dependency2.Animation), V = _dependency8.inject("content/table/title", _dependency2.Node), k = _dependency8.inject("content/table/scrollView", _dependency6.default), F = _dependency8.inject("content/loadingContent", _dependency2.Node), Y = _dependency8.inject("content/loadingContent/ProgressBar", _dependency2.ProgressBar), q = _dependency8.inject("content/noDataLabel", _dependency2.Node), K = _dependency8.inject("content/dateBoard", _dependency2.Node), x = _dependency8.inject("content/dateBoard/bbr", _dependency2.Node), j = _dependency8.inject("content/dateBoard/layout/dayBtn/addBtn", _dependency2.Node), G = _dependency8.inject("content/dateBoard/layout/dayBtn/cutBtn", _dependency2.Node), Q = _dependency8.inject("content/dateBoard/layout/dayBtn/label", _dependency2.Label), W = _dependency8.inject("content/dateBoard/layout/hourBtn/addBtn", _dependency2.Node), $ = _dependency8.inject("content/dateBoard/layout/hourBtn/cutBtn", _dependency2.Node), Z = _dependency8.inject("content/dateBoard/layout/hourBtn/label", _dependency2.Label), J = _dependency8.inject("content/dateBoard/layout/minBtn/addBtn", _dependency2.Node), X = _dependency8.inject("content/dateBoard/layout/minBtn/cutBtn", _dependency2.Node), tt = _dependency8.inject("content/dateBoard/layout/minBtn/label", _dependency2.Label), nt = _dependency.applyDecoratedDescriptor((et = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bbr", nt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "closeBtn", it, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "historyBtn", at, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "dateBtn", ot, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "dateBtnLabel", rt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "idContent", lt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "idMask", ut, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "idLabel", st, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "copyHint", ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "tableTitle", dt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "scrollView", ht, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "loadingContent", pt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "loadingBar", bt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "noDataLabel", ft, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "dateBoard", Tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "dateBoardBbr", gt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "dayAdd", Bt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "dayCut", mt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "dayLabel", Ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "hourAdd", yt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "hourCut", Dt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "hourLabel", wt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "minAdd", St, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "minCut", Lt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "minLabel", At, _dependency.assertThisInitialized(e)), e.itemPrefab = null, e.recordData = [], e.lastItemTime = null, e.currentTime = null, e.dateTouchFlag = !1, e.dateBoardTime = null, e.preDateBoardTime = null, e.longTouchCB = null, e.sentRequestFlag = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init(), this.currentTime = new Date(), this.dateBoardTime = this.currentTime, this.dateBtnLabel.string = this.dateBoardTime.toLocaleString(void 0, {
      hour12: !1
    }).replace(/:\d{2}$/, ""), dispatch(_dependency1.SlotFrameworkEvent.SEND_GET_BET_RECORDS_REQUEST, {
      rows: 16
    });
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/view/RecordView";
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
      case _dependency5.EOrientationType.LANDSCAPE:
      case _dependency5.EOrientationType.PORTRAIT:
    }
  }, r.init = function () {
    this.startLoading(), this.itemPrefab = App.cache.get(_dependency3.EBundles[_dependency3.EBundles.slotFramework], this.getRecordViewItemPrefabUrl).data, this.setEventTouch(), this.setUserID(), this.serIdLabelMarquee(), this.scrollView.node.on(_dependency2.ScrollView.EventType.BOUNCE_BOTTOM, this.onScrollEnd, this), this.scrollView.delegate = this;
    var t = _dependency2.instantiate(this.itemPrefab).addComponent(_dependency9.default),
      e = this.scrollView.template;
    e.push(t), this.scrollView.template = e, this.resize();
  }, r.serIdLabelMarquee = function () {
    var t = {
      maskNode: this.idMask,
      labelNode: this.idLabel,
      delayTime: 2
    };
    this.scheduleOnce(function () {
      _dependency4.CmmUtils.labelMarquee(t);
    });
  }, r.resize = function () {
    var t = this,
      e = this.historyBtn.getChildByName("content").getComponent(_dependency2.UITransform).contentSize,
      n = this.historyBtn.getChildByName("bg");
    this.scheduleOnce(function () {
      t.historyBtn.getComponent(_dependency2.UITransform).setContentSize(e), n.getComponent(_dependency2.Widget).updateAlignment();
    });
  }, r.onClose = function () {
    this.reloadItems(), this.stopLoading(), this.close(), dispatch(_dependency1.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM);
  }, r.setEventTouch = function () {
    var t = this;
    this.historyBtn.on(_dependency2.NodeEventType.TOUCH_END, function () {
      t.openHistoryView(), dispatch(_dependency1.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), this.closeBtn.on(_dependency2.NodeEventType.TOUCH_START, this.onClose, this), this.bbr.on(_dependency2.NodeEventType.TOUCH_START, this.onClose, this), this.dateBtn.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.dateBoard.active = !0, t.preDateBoardTime = t.dateBoardTime, t.updateDateBoard(), t.scrollView.stopAutoScroll(), dispatch(_dependency1.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), this.idContent.on(_dependency2.NodeEventType.TOUCH_END, function () {
      _dependency4.CmmUtils.CopyText(t.idLabel.getComponent(_dependency2.Label).string), t.copyHint.play(t.copyHint.clips[0].name), dispatch(_dependency1.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), this.dateBoardBbr.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.dateBoard.active = !1, t.noDataLabel.active = !1, t.dateBoardTime.valueOf() != t.preDateBoardTime.valueOf() && (t.dateBtnLabel.string = t.dateBoardTime.toLocaleString(void 0, {
        hour12: !1
      }).replace(/:\d{2}$/, ""), t.reloadItems(), t.sentRecordRequest(t.dateBoardTime.valueOf()), dispatch(_dependency1.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }), this.dayAdd.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.onDateTouchStart(Et.DAY, Rt.ADD), dispatch(_dependency1.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }, this), this.dayAdd.on(_dependency2.NodeEventType.TOUCH_END, this.onDateTouchEnd, this), this.dayCut.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.onDateTouchStart(Et.DAY, Rt.CUT);
    }, this), this.dayCut.on(_dependency2.NodeEventType.TOUCH_END, this.onDateTouchEnd, this), this.hourAdd.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.onDateTouchStart(Et.HOUR, Rt.ADD);
    }, this), this.hourAdd.on(_dependency2.NodeEventType.TOUCH_END, this.onDateTouchEnd, this), this.hourCut.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.onDateTouchStart(Et.HOUR, Rt.CUT);
    }, this), this.hourCut.on(_dependency2.NodeEventType.TOUCH_END, this.onDateTouchEnd, this), this.minAdd.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.onDateTouchStart(Et.MIN, Rt.ADD);
    }, this), this.minAdd.on(_dependency2.NodeEventType.TOUCH_END, this.onDateTouchEnd, this), this.minCut.on(_dependency2.NodeEventType.TOUCH_START, function () {
      t.onDateTouchStart(Et.MIN, Rt.CUT);
    }, this), this.minCut.on(_dependency2.NodeEventType.TOUCH_END, this.onDateTouchEnd, this);
  }, r.sentRecordRequest = function (t) {
    var e = {
      lt: null != t ? t : 0,
      rows: 16
    };
    dispatch(_dependency1.SlotFrameworkEvent.SEND_GET_BET_RECORDS_REQUEST, e);
  }, r.createItems = function (t) {
    var e = t.data;
    if (this.itemPrefab) {
      for (var n = 0; n < e.length; n++) this.recordData.push(e[n]), this.scrollView.insertCellAtIndex(), n == e.length - 1 && (this.lastItemTime = Number(e[n].endTime));
      0 == this.recordData.length && (this.noDataLabel.active = !0), this.sentRequestFlag = !1;
    }
  }, r.reloadItems = function () {
    this.recordData = [], this.scrollView.reloadData(), this.noDataLabel.active = !1;
  }, r.onScrollEnd = function () {
    var t;
    if (!this.sentRequestFlag) {
      var e = null != (t = this.lastItemTime) ? t : 0;
      this.sentRecordRequest(e), this.sentRequestFlag = !0;
    }
  }, r.onDateTouchStart = function (t, e) {
    var n = this;
    this.dateTouchFlag || (this.dateTouchFlag = !0, this.dateCallBack(t, e), this.longTouchCB = function () {
      n.dateCallBack(t, e);
    }, this.schedule(this.longTouchCB, .1, _dependency2.macro.REPEAT_FOREVER, .5));
  }, r.onDateTouchEnd = function () {
    this.unschedule(this.longTouchCB), this.longTouchCB = null, this.dateTouchFlag = !1;
  }, r.dateCallBack = function (t, e) {
    if (this.dateTouchFlag) {
      var n = e == Rt.ADD ? 1 : -1,
        i = new Date(this.dateBoardTime);
      switch (t) {
        case Et.DAY:
          i.setDate(i.getDate() + n);
          break;
        case Et.HOUR:
          i.setHours(i.getHours() + n);
          break;
        case Et.MIN:
          i.setMinutes(i.getMinutes() + n);
      }
      if (i > this.currentTime) return;
      var a = new Date(this.currentTime);
      if (a.setMonth(this.currentTime.getMonth() - 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(59), i < a) return;
      this.dateBoardTime = i, this.updateDateBoard(), dispatch(_dependency1.SlotFrameworkEvent.PLAY_CLICK_BTM);
    } else this.unschedule(this.longTouchCB), this.longTouchCB = null;
  }, r.updateDateBoard = function () {
    this.dayLabel.string = (this.dateBoardTime.getMonth() + 1).toString().padStart(2, "0") + "/" + this.dateBoardTime.getDate().toString().padStart(2, "0"), this.hourLabel.string = App.getLanguage("betRecordHour", ["" + this.dateBoardTime.getHours().toString().padStart(2, "0")], _dependency3.EBundles[_dependency3.EBundles.slotFramework]), this.minLabel.string = App.getLanguage("betRecordMinute", ["" + this.dateBoardTime.getMinutes().toString().padStart(2, "0")], _dependency3.EBundles[_dependency3.EBundles.slotFramework]);
  }, r.formatTime = function (t) {
    var e = t;
    return e.getFullYear() + "/" + (e.getMonth() + 1).toString().padStart(2, "0") + "/" + e.getDate().toString().padStart(2, "0") + " " + e.getHours().toString().padStart(2, "0") + ":" + e.getMinutes().toString().padStart(2, "0") + ":" + e.getSeconds().toString().padStart(2, "0");
  }, r.setUserID = function () {
    this.idLabel.getComponent(_dependency2.Label).string = this.userData.getData().player.name;
  }, r.startLoading = function () {
    this.loadingBar.totalLength = this.tableTitle.getComponent(_dependency2.UITransform).width, this.loadingBar.progress = 0, _dependency2.tween(this.loadingBar).bindNodeState(false).repeatForever(_dependency2.tween().bindNodeState(false).set({
      progress: 0
    }).to(10, {
      progress: 1
    })).start();
  }, r.stopLoading = function () {
    _dependency2.Tween.stopAllByTarget(this.loadingBar), this.loadingContent.active = !1;
  }, r.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency1.SlotFrameworkEvent.BET_RECORDS_RESPONSE, function (t) {
      e.createItems(t), e.stopLoading();
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }, {
    key: "userData",
    get: function () {
      return _dependency10.default;
    }
  }]), e;
}(_dependency7.default)).prototype, "bbr", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = _dependency.applyDecoratedDescriptor(et.prototype, "closeBtn", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at = _dependency.applyDecoratedDescriptor(et.prototype, "historyBtn", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = _dependency.applyDecoratedDescriptor(et.prototype, "dateBtn", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), rt = _dependency.applyDecoratedDescriptor(et.prototype, "dateBtnLabel", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), lt = _dependency.applyDecoratedDescriptor(et.prototype, "idContent", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ut = _dependency.applyDecoratedDescriptor(et.prototype, "idMask", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), st = _dependency.applyDecoratedDescriptor(et.prototype, "idLabel", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ct = _dependency.applyDecoratedDescriptor(et.prototype, "copyHint", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), dt = _dependency.applyDecoratedDescriptor(et.prototype, "tableTitle", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ht = _dependency.applyDecoratedDescriptor(et.prototype, "scrollView", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), pt = _dependency.applyDecoratedDescriptor(et.prototype, "loadingContent", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), bt = _dependency.applyDecoratedDescriptor(et.prototype, "loadingBar", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = _dependency.applyDecoratedDescriptor(et.prototype, "noDataLabel", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Tt = _dependency.applyDecoratedDescriptor(et.prototype, "dateBoard", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gt = _dependency.applyDecoratedDescriptor(et.prototype, "dateBoardBbr", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Bt = _dependency.applyDecoratedDescriptor(et.prototype, "dayAdd", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = _dependency.applyDecoratedDescriptor(et.prototype, "dayCut", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ct = _dependency.applyDecoratedDescriptor(et.prototype, "dayLabel", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), yt = _dependency.applyDecoratedDescriptor(et.prototype, "hourAdd", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Dt = _dependency.applyDecoratedDescriptor(et.prototype, "hourCut", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), wt = _dependency.applyDecoratedDescriptor(et.prototype, "hourLabel", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), St = _dependency.applyDecoratedDescriptor(et.prototype, "minAdd", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Lt = _dependency.applyDecoratedDescriptor(et.prototype, "minCut", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), At = _dependency.applyDecoratedDescriptor(et.prototype, "minLabel", [tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et));
_dependency2.cclegacy._RF.pop();
