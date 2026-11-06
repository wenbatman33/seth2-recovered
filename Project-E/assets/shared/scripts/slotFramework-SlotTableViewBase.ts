// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Config";
import * as _dependency4 from "./main-Bundles";
import * as _dependency5 from "./main-CmmUtils";
import * as _dependency6 from "./main-UIView";
import * as _dependency7 from "./main-Decorators";
import * as _dependency8 from "./slotFramework-SlotTableItem2";
import * as _dependency9 from "./slotFramework-SlotTablePageTableItem";
import * as _dependency0 from "./slotFramework-SlotFrameworkData";
import * as _dependency1 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency10 from "./slotFramework-PlatformModel";
import * as _dependency11 from "./slotFramework-SlotTableModel";
import * as _dependency12 from "./slotFramework-type2";
import * as _dependency13 from "./slotFramework-CmmSlotUtils";
var _export;
export { _export as EStatus };
var _export2;
export { _export2 as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EStatus":
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
var e, o, n, a, i, l, r, s, c, u, b, g, p, T, h, m, f, d, C, L, E, S, w, v, O, _, I, B, y, M, k, A, D, R, P, F;
var N, V, U, z, H, x, Y, K, G, W, Q, j, q, X, J, Z, $, tt, et, ot, nt, at, it, lt, rt, st, ct, ut, bt, gt, pt, Tt, ht, mt, ft, dt, Ct, Lt, Et, St, wt, vt, Ot, _t, It, Bt, yt, Mt, kt, At, Dt, Rt, Pt, Ft, Nt, Vt, Ut, zt, Ht, xt, Yt, Kt, Gt;
_publish("EStatus", void 0), _dependency2.cclegacy._RF.push({}, "6d83360q6JA9pQCHwuUAXde", "SlotTableViewBase", void 0), function (t) {
  t[t.EMPTY = 0] = "EMPTY", t[t.FULL = 1] = "FULL", t[t.LOCKED = 2] = "LOCKED", t[t.SELF_FULL = 3] = "SELF_FULL", t[t.SELF_LOCKED = 4] = "SELF_LOCKED";
}(Kt || (Kt = _publish("EStatus", {}))), function (t) {
  t[t.SHOW_ALL = 0] = "SHOW_ALL", t[t.SHOW_EMPTY = 1] = "SHOW_EMPTY";
}(Gt || (Gt = {}));
var Wt = _dependency2._decorator.ccclass;
_publish("default", (N = Wt("SlotTableViewBase"), V = _dependency7.inject("content/topContent/line", _dependency2.Node), U = _dependency7.inject("content/topContent/closeBtn", _dependency2.Node), z = _dependency7.inject("content/topContent/exitBtn", _dependency2.Node), H = _dependency7.inject("content/topContent/showTableToggleContent", _dependency2.Node), x = _dependency7.inject("content/topContent/showTableToggleContent/ToggleGroup", _dependency2.Node), Y = _dependency7.inject("content/topContent/showTableToggleContent/ToggleGroup/allToggle", _dependency2.Node), K = _dependency7.inject("content/topContent/showTableToggleContent/ToggleGroup/allToggle/text", _dependency2.Node), G = _dependency7.inject("content/topContent/showTableToggleContent/ToggleGroup/emptyToggle", _dependency2.Node), W = _dependency7.inject("content/topContent/showTableToggleContent/ToggleGroup/emptyToggle/text", _dependency2.Node), Q = _dependency7.inject("content/ScrollView/view/content", _dependency2.Node), j = _dependency7.inject("content/pageTabsContent/ScrollView/view/content", _dependency2.Node), q = _dependency7.inject("content/infoContent", _dependency2.Node), X = _dependency7.inject("content/infoContent/bg", _dependency2.Node), J = _dependency7.inject("content/infoContent/content", _dependency2.Node), Z = _dependency7.inject("content/infoContent/content/infoRow/table", _dependency2.Node), $ = _dependency7.inject("content/infoContent/content/infoRow/slotTableBlock/slotTableNumber", _dependency2.Label), tt = _dependency7.inject("content/infoContent/content/infoRow/table/scoreCol/hourMask/hour", _dependency2.Label), et = _dependency7.inject("content/infoContent/content/infoRow/table/scoreCol/dayMask/day", _dependency2.Label), ot = _dependency7.inject("content/infoContent/content/infoRow/table/rateCol/hourMask/hour", _dependency2.Label), nt = _dependency7.inject("content/infoContent/content/infoRow/table/rateCol/dayMask/day", _dependency2.Label), at = _dependency7.inject("content/infoContent/content/infoRow/buttons/confirmBtn", _dependency2.Node), it = _dependency7.inject("content/infoContent/content/infoRow/buttons/selectBtn", _dependency2.Node), lt = _dependency7.inject("content/infoContent/content/infoRow/buttons/lockBtn", _dependency2.Node), rt = _dependency7.inject("content/infoContent/content/infoRow/buttons/remainTimeTip", _dependency2.Node), st = _dependency7.inject("content/infoContent/content/infoRow/buttons/remainTimeTip/time", _dependency2.Node), ct = _dependency7.inject("content/infoContent/content/infoRow/tipContentMask", _dependency2.Node), ut = _dependency7.inject("content/infoContent/content/infoRow/tipContentMask/tipsLabel", _dependency2.Label), bt = _dependency7.inject("content/loadingContent", _dependency2.Node), gt = _dependency7.inject("content/loadingContent/ProgressBar", _dependency2.ProgressBar), N((ht = _dependency.applyDecoratedDescriptor((Tt = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
    return e = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "line", ht, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "closeBtn", mt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "exitBtn", ft, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "showTableToggleContent", dt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "showTableToggleGroup", Ct, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "allToggle", Lt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "allToggleText", Et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "emptyToggle", St, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "emptyToggleText", wt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ScrollViewContent", vt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "pageTabsContent", Ot, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "infoContent", _t, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "infoContentBg", It, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "infoContentContent", Bt, _dependency.assertThisInitialized(e)), e.notOpenContentNumber = void 0, e.previousOneNumber = void 0, e.previousTwoNumber = void 0, _dependency.initializerDefineProperty(e, "infoRowTable", yt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "slotTableNumber", Mt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "betHour", kt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "betDay", At, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rateHour", Dt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rateDay", Rt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "confirmBtn", Pt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "selectBtn", Ft, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "lockBtn", Nt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "remainTimeTip", Vt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "remainTimeTipTime", Ut, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "tipContentMask", zt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "tipsLabel", Ht, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "loadingContent", xt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "loadingBar", Yt, _dependency.assertThisInitialized(e)), e.slotTableMap = new Map(), e.currentRoomId = _dependency10.default.getData().table ? _dependency10.default.getData().table.roomId : 0, e._selectRoomId = _dependency10.default.getData().table ? _dependency10.default.getData().table.roomId : 0, e.isUpdateSelectFlag = !0, e.lockVO = null, e.isFirstShowFullTip = !1, e.filterMode = Gt.SHOW_ALL, e.selectPage = 0, e.tabsMap = new Map(), e;
  }
  _dependency.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this), this.createItemPool();
  }, r.start = function () {
    this.createTabItem();
  }, r.update = function () {
    this.isUpdateSelectFlag && (this.updateBtnsStatus(), this.isUpdateSelectFlag = !1);
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.show = function (t) {
    this.init();
  }, r.close = function () {
    t.prototype.close.call(this), this.recycleAll(), this.stopLoading(), this.unschedule(this.syncSlotTables), dispatch(_dependency1.SlotFrameworkEvent.VIEW_CLOSE_TABLE);
  }, r.init = function () {
    var t = this.args;
    if (this.setEventTouch(), _dependency10.default.getData().tableMeta ? this.selectPage = _dependency10.default.getData().tableMeta.currentPage : this.selectPage = 1, t) {
      var e = _dependency10.default.getData(),
        o = e.table,
        n = e.tables,
        a = {
          data: {
            lock: o.lock,
            tables: n,
            detail: o.detail
          }
        };
      _dependency11.default.setData(o), _dependency10.default.getData().table && 0 == _dependency10.default.getData().table.roomId && 0 == _dependency10.default.getData().table.number && (this.closeBtn && (this.closeBtn.active = !1), this.showFullTip(), this.isFirstShowFullTip = !0), dispatch(_dependency1.SlotFrameworkEvent.SLOT_TABLE_PAGE_DATA_RESPONSE, a), dispatch(_dependency1.SlotFrameworkEvent.SLOT_TABLE_RESPONSE, a);
    } else this.getSlotTablesData();
    this.isFirstShowFullTip = !0, this.hideBtns(), this.tipsLabel.string = "", this.setInfoHight(), this.setShowTableToggleLayout(), this.setLockVO(_dependency10.default.getData().table.lock), this.schedule(this.syncSlotTables, 300), this.args = !1;
  }, r.setEventTouch = function () {
    var t = this;
    this.closeBtn.on(_dependency2.NodeEventType.TOUCH_END, _dependency5.CmmUtils.debounce(function () {
      t.close(), dispatch(_dependency1.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM);
    })), this.onI(_dependency2.Input.EventType.KEY_DOWN, function (t) {
      t.keyCode;
    }), _dependency5.CmmUtils.addBtnClickEvent(this.confirmBtn, function () {
      t.close(), dispatch(_dependency1.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency5.CmmUtils.addBtnClickEvent(this.selectBtn, function () {
      t.changeTableAlert(), dispatch(_dependency1.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency5.CmmUtils.addBtnClickEvent(this.lockBtn, function () {
      t.lockTableAlert();
    });
    var e = new _dependency2.EventHandler();
    e.target = this.ScrollViewContent, e.component = _dependency5.CmmUtils.extractContentBetweenAngleBrackets(this.ScrollViewContent.name)[0], e.handler = _dependency2.Node.EventType.TOUCH_END, e.emit = function (e) {
      if (e[0].node.getComponent(_dependency8.SlotTableItem2).tableVO) {
        var o = e[0].node.getComponent(_dependency8.SlotTableItem2).tableVO.roomId;
        t.selectRoomId = o, t.isUpdateSelectFlag = !0;
      }
    }, this.ScrollViewContent.getComponent(_dependency2.ToggleContainer).checkEvents.push(e), _dependency5.CmmUtils.addToggleCheckEvent(this.showTableToggleGroup, function (e) {
      switch (_dependency5.CmmUtils.extractNameBeforeBrackets(e[0].name)[0]) {
        case "allToggle":
          t.setFilterMode(Gt.SHOW_ALL);
          break;
        case "emptyToggle":
          t.setFilterMode(Gt.SHOW_EMPTY);
      }
      t.allToggle.getComponent(_dependency2.Toggle).interactable = !1, t.emptyToggle.getComponent(_dependency2.Toggle).interactable = !1, t.scheduleOnce(function () {
        t.allToggle.getComponent(_dependency2.Toggle).interactable = !0, t.emptyToggle.getComponent(_dependency2.Toggle).interactable = !0;
      }, .5), t.setFilterTable(), dispatch(_dependency1.SlotFrameworkEvent.PLAY_CLICK_BTM);
    }), _dependency5.CmmUtils.addBtnClickEvent(this.exitBtn, function () {
      dispatch(_dependency1.SlotFrameworkEvent.PLAY_CLICK_BTM), dispatch(_dependency1.SlotFrameworkEvent.SHOW_EXIT_ALERT);
    }), this.setPageTabsEvent();
  }, r.setPageTabsEvent = function () {
    var t = this,
      e = new _dependency2.EventHandler();
    e.target = this.pageTabsContent, e.component = _dependency5.CmmUtils.extractContentBetweenAngleBrackets(this.pageTabsContent.name)[0], e.handler = _dependency2.Node.EventType.TOUCH_END, e.emit = function (e) {
      var o = e[0].node.getComponent(_dependency9.SlotTablePageTableItem).pageIndex;
      t.selectPage = o;
    }, this.pageTabsContent.getComponent(_dependency2.ToggleContainer).checkEvents.push(e);
  }, r.setFilterMode = function (t) {
    this.filterMode = t;
  }, r.setFilterTable = function () {
    var t,
      e = this,
      o = ((t = {})[Gt.SHOW_ALL] = function () {
        return e.showAllTable();
      }, t[Gt.SHOW_EMPTY] = function () {
        return e.showEmptyTable();
      }, t);
    o[this.filterMode] && o[this.filterMode]();
  }, r.showAllTable = function () {
    this.slotTableMap.forEach(function (t) {
      t.node.active || (t.node.active = !0);
    });
  }, r.showEmptyTable = function () {
    this.slotTableMap.forEach(function (t) {
      t.tableVO.status === _dependency12.ETableStatus.EMPTY ? t.node.active = !0 : t.node.active = !1;
    });
  }, r.updateBtnsStatus = function () {
    var t, e;
    if (Log.e("update btn status:::::::", this.selectRoomId, this.currentRoomId), 0 === this.selectRoomId && 0 === this.currentRoomId) return this.selectBtn.active = !1, this.confirmBtn.active = !1, this.lockBtn.active = !1, this.closeBtn.active = !1, void (this.exitBtn.active = !0);
    if (this.remainTimeTip.active = (null == (t = this.lockVO) ? void 0 : t.roomId) === this.selectRoomId && (this.lockVO.time + 1e3 * this.lockVO.expiredDef - new Date().valueOf()) / 1e3 > 0, this.selectRoomId === this.currentRoomId) this.selectBtn.active = !1, this.confirmBtn.active = !0, this.closeBtn.active = !0, this.exitBtn.active = !1, this.lockBtn.active = !(null != (e = this.lockVO) && e.roomId);else if (this.selectBtn.active = !0, this.confirmBtn.active = !1, this.lockBtn.active = !1, this.slotTableMap.get(this.selectRoomId)) {
      var o = this.slotTableMap.get(this.selectRoomId).status;
      this.selectBtn.getComponent(_dependency2.Button).interactable = o === Kt.EMPTY || o === Kt.SELF_LOCKED;
    } else this.selectBtn.active = !1, this.selectBtn.getComponent(_dependency2.Button).interactable = !1;
  }, r.createItemPool = function () {
    if (0 === App.pool.getPool("SLOT_TABLE_ITEM_POOL").size) {
      var t = this.data.getData().filePaths.slotTableItemPrefab,
        e = App.cache.get(this.data.module, t).data,
        o = App.pool.createPool("SLOT_TABLE_ITEM_POOL"),
        n = _dependency2.instantiate(e);
      o.cloneNode = n;
      for (var a = 0; a < 500; a++) {
        var i = _dependency2.instantiate(e);
        o.put(i);
      }
    }
  }, r.createItem = function (t) {
    var e = t.roomId,
      o = App.pool.getPool("SLOT_TABLE_ITEM_POOL").get();
    o.setParent(this.ScrollViewContent);
    var n = o.getComponent(_dependency8.SlotTableItem2);
    n.setData(t), this.slotTableMap.set(e, n);
  }, r.updateItem = function (t) {
    var e = t.roomId,
      o = this.slotTableMap.get(e);
    o.setData(t), o.node.parent || this.ScrollViewContent.addChild(o.node);
  }, r.createItems = function (t) {
    var e = this;
    t.forEach(function (t) {
      var o = t.roomId;
      e.slotTableMap.has(o) ? e.updateItem(t) : e.createItem(t);
    });
  }, r.removeNotUseSlotTable = function (t) {
    var e = this,
      o = Array.from(this.slotTableMap.keys()),
      n = t.map(function (t) {
        return t.roomId;
      });
    o.filter(function (t) {
      return !n.includes(t);
    }).forEach(function (t) {
      t !== e.currentRoomId && e.recycleOnce(t);
    });
  }, r.setLockVO = function (t) {
    this.lockVO = _dependency.extends({}, this.lockVO, t), _dependency10.default.getData().table.lock = this.lockVO;
  }, r.recycleOnce = function (t) {
    this.slotTableMap.get(t).recycle(), this.slotTableMap.get(t).reset(), this.slotTableMap.delete(t);
  }, r.recycleAll = function () {
    var t = this;
    this.ScrollViewContent.removeAllChildren(), this.slotTableMap.forEach(function (e, o) {
      t.currentRoomId !== e.tableVO.roomId && (t.slotTableMap.delete(e.tableVO.roomId), e.reset(), e.recycle());
    });
  }, r.setTableInfo = function (t) {
    if (t.data.detail && this.slotTableMap.get(this.selectRoomId)) {
      var e = t.data.detail,
        o = e.dayWin,
        n = e.dayBet,
        a = e.mgCounts,
        i = e.hourWin,
        l = e.hourBet,
        r = e.todayBet,
        s = e.todayWin,
        c = this.slotTableMap.get(this.selectRoomId).tableVO,
        u = this.slotTableMap.get(this.selectRoomId);
      this.slotTableNumber.string = ("" + c.number).padStart(3, "0"), this.betHour.string = _dependency13.CmmSlotUtils.formatNumber(l, !0, !0), null != r && null != s ? (this.betHour.string = _dependency13.CmmSlotUtils.formatNumber(r, !0, !0), this.rateHour.string = 0 === r ? _dependency13.CmmSlotUtils.formatNumber(0, !0, !0) + "%" : _dependency13.CmmSlotUtils.formatNumber(s / r * 100, !0, !0) + "%") : this.rateHour.string = 0 === l ? _dependency13.CmmSlotUtils.formatNumber(0, !0, !0) + "%" : _dependency13.CmmSlotUtils.formatNumber(i / l * 100, !0, !0) + "%", this.betDay.string = _dependency13.CmmSlotUtils.formatNumber(n, !0, !0), this.rateDay.string = 0 === n ? _dependency13.CmmSlotUtils.formatNumber(0, !0, !0) + "%" : _dependency13.CmmSlotUtils.formatNumber(o / n * 100, !0, !0) + "%", u && u.setRate(this.rateHour.string), this.notOpenContentNumber.string = "" + a[0], this.previousOneNumber.string = "" + a[1], this.previousTwoNumber.string = "" + a[2];
    }
  }, r.changeTableAlert = function () {
    var t = this,
      e = this.slotTableMap.get(this.selectRoomId).tableVO.number,
      o = {
        text: App.getLanguage("slotTableAlertMsg1", ["" + e], _dependency4.EBundles[_dependency4.EBundles.slotFramework]),
        confirmCb: function (e) {
          t.sendChangeSlotTable(), dispatch(_dependency1.SlotFrameworkEvent.PLAY_CLICK_BTM);
        },
        cancelCb: function (t) {
          dispatch(_dependency1.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM);
        },
        bbrCb: function (t) {
          dispatch(_dependency1.SlotFrameworkEvent.PLAY_UI_CLOSE_CLICK_BTM);
        }
      };
    App.gameAlert.show(o);
  }, r.lockTableAlert = function () {
    var t = this,
      e = {
        text: App.getLanguage("lockSlotTable", [], _dependency4.EBundles[_dependency4.EBundles.wrapper]),
        confirmCb: function (e) {
          t.lockTable();
        },
        cancelCb: function (t) {},
        bbrCb: function (t) {}
      };
    "xin-star" == _dependency10.default.getData().theme ? App.gameAlert.show(e) : this.lockTable();
  }, r.lockTable = function () {
    this.slotTableMap.get(this.selectRoomId).tableVO.status = _dependency12.ETableStatus.LOCKED, this.sendLockSlotTable(), dispatch(_dependency1.SlotFrameworkEvent.PLAY_CLICK_BTM);
  }, r.setLockTips = function (t) {
    if (0 == t.time) {
      var e = App.getLanguage("slotTableTip1", ["" + this.formatTime(t.resetDef), "" + this.formatTime(t.expiredDef)], _dependency4.EBundles[_dependency4.EBundles.slotFramework]);
      this.tipsLabel.string = e;
    } else {
      var o = new Date(),
        n = t.time + 1e3 * t.resetDef - o.valueOf(),
        a = t.time + 1e3 * t.expiredDef - o.valueOf();
      if (a > 0) {
        var i,
          l = 0;
        null != (i = this.slotTableMap.get(this.lockVO.roomId)) && i.tableVO.number ? l = this.slotTableMap.get(this.lockVO.roomId).tableVO.number : this.lockVO.number && (l = this.lockVO.number);
        var r = App.getLanguage("slotTableTip2", ["" + l, "" + this.formatTime(n / 1e3)], _dependency4.EBundles[_dependency4.EBundles.slotFramework]);
        this.tipsLabel.string = r, this.remainTimeTipTime.getComponent(_dependency2.Label).string = "" + this.formatTime(a / 1e3), this.remainTimeTip.getComponent(_dependency2.Layout).updateLayout();
      } else {
        var s = App.getLanguage("slotTableTip3", ["" + this.formatTime(n / 1e3)], _dependency4.EBundles[_dependency4.EBundles.slotFramework]);
        this.tipsLabel.string = s;
      }
    }
    this.setTipsLabelMarquee();
  }, r.setInfoHight = function () {
    var t = this;
    this.scheduleOnce(function () {
      var e = t.infoContentContent.getComponent(_dependency2.UITransform).height;
      t.infoContent.getComponent(_dependency2.UITransform).height = e + 10, t.infoContentBg.getComponentsInChildren(_dependency2.Widget).forEach(function (t) {
        return t.updateAlignment();
      });
    });
  }, r.setShowTableToggleLayout = function () {
    var t = this,
      e = this.allToggleText.getComponent(_dependency2.UITransform).width,
      o = this.emptyToggleText.getComponent(_dependency2.UITransform).width;
    this.allToggle.getComponent(_dependency2.UITransform).width = e + 20, this.emptyToggle.getComponent(_dependency2.UITransform).width = o + 20, this.scheduleOnce(function () {
      var e = t.showTableToggleGroup.getComponent(_dependency2.UITransform).width;
      t.showTableToggleContent.getComponent(_dependency2.UITransform).width = e, t.showTableToggleContent.getComponent(_dependency2.Widget).updateAlignment();
    });
  }, r.formatTime = function (t) {
    return t > 3600 ? App.getLanguage("slotTableHour", ["" + Math.floor(t / 3600)], _dependency4.EBundles[_dependency4.EBundles.slotFramework]) : t > 60 ? App.getLanguage("slotTableMinute", ["" + Math.floor(t / 60)], _dependency4.EBundles[_dependency4.EBundles.slotFramework]) : App.getLanguage("slotTableSecond", ["" + Math.floor(t)], _dependency4.EBundles[_dependency4.EBundles.slotFramework]);
  }, r.hideBtns = function () {
    this.confirmBtn.active = !1, this.selectBtn.active = !1, this.lockBtn.active = !1, this.remainTimeTip.active = !1;
  }, r.startLoading = function () {
    this.loadingContent.active = !0, this.loadingBar.totalLength = this.line.getComponent(_dependency2.UITransform).width, this.loadingBar.progress = 0, _dependency2.tween(this.loadingBar).bindNodeState(false).repeatForever(_dependency2.tween().bindNodeState(false).set({
      progress: 0
    }).to(10, {
      progress: 1
    })).start();
  }, r.stopLoading = function () {
    _dependency2.Tween.stopAllByTarget(this.loadingBar), this.loadingContent.active = !1;
  }, r.syncSlotTables = function () {
    this.getSlotTablesData();
  }, r.setTipsLabelMarquee = function () {
    var t = this;
    this.scheduleOnce(function () {
      var e = {
        maskNode: t.tipContentMask,
        labelNode: t.tipsLabel.node,
        delayTime: 1
      };
      _dependency5.CmmUtils.labelMarquee(e);
    });
  }, r.getSlotTablesData = function () {
    this.startLoading(), dispatch(_dependency1.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_PAGE_DATA_REQUEST, {
      page: this.selectPage
    });
  }, r.getSlotTableDetail = function (t) {
    0 !== t && (this.startLoading(), dispatch(_dependency1.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_DETAIL_REQUEST, {
      roomId: t
    }));
  }, r.sendChangeSlotTable = function () {
    var t,
      e,
      o = {
        table: _dependency.extends({}, this.slotTableMap.get(this.selectRoomId).tableVO, {
          isLocked: this.slotTableMap.get(this.selectRoomId).tableVO.status === _dependency12.ETableStatus.LOCKED && (null == (t = this.slotTableMap.get(this.selectRoomId).tableVO) || null == (e = t.user) ? void 0 : e.userId) === _dependency10.default.getData().player.uid
        })
      };
    dispatch(_dependency1.SlotFrameworkEvent.SEND_CHANGE_SLOT_TABLE_REQUEST, o);
  }, r.sendLockSlotTable = function () {
    this.startLoading();
    var t = {
      roomId: this.selectRoomId
    };
    dispatch(_dependency1.SlotFrameworkEvent.SEND_LOCK_SLOT_TABLE_REQUEST, t);
  }, r.showFullTip = function () {
    var t = {
      text: App.getLanguage("tipMsgGameIsFull", [], _dependency4.EBundles[_dependency4.EBundles.slotFramework]),
      confirmCb: function () {},
      bbrCb: function () {}
    };
    App.gameAlert.show(t, _dependency3.ViewZOrder.Tips);
  }, r.createTabItem = function () {
    for (var t = _dependency10.default.getData().tableMeta, e = t.currentPage, o = t.totalPages, n = this.data.getData().filePaths.slotTablePageTableItemPrefab, a = App.cache.get(this.data.module, n).data, i = 1; i <= o; i++) {
      var l = _dependency2.instantiate(a),
        r = l.getComponent(_dependency9.SlotTablePageTableItem),
        s = "" + i;
      this.pageTabsContent.addChild(l), r.setData({
        pageIndex: i,
        tabTitle: s
      }), this.tabsMap.set(i, r);
    }
    this.tabsMap.get(e).node.getComponent(_dependency2.Toggle).isChecked = !0;
  }, r.isCurrentPage = function (t) {
    var e = this;
    return t.some(function (t) {
      return t.roomId === e.currentRoomId;
    });
  }, r.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency1.SlotFrameworkEvent.SLOT_TABLES_RESPONSE, function (t) {
      var o = t.data.tables,
        n = _dependency10.default.getData().player.uid;
      o.some(function (t) {
        var e = t.status === _dependency12.ETableStatus.EMPTY,
          o = (t.status === _dependency12.ETableStatus.FULL || t.status === _dependency12.ETableStatus.LOCKED) && t.user.userId === n;
        return e || o;
      }) || e.isFirstShowFullTip || e.showFullTip(), e.removeNotUseSlotTable(o), e.createItems(o), e.setLockVO(t.data.lock), e.currentRoomId && e.slotTableMap.has(e.currentRoomId) && e.slotTableMap.get(e.currentRoomId).select(), e.setLockTips(t.data.lock), e.setFilterTable(), e.stopLoading(), !e.args && e.getSlotTableDetail(e.currentRoomId);
    }), this.on(_dependency1.SlotFrameworkEvent.SLOT_TABLE_RESPONSE, function (t) {
      e.setLockVO(t.data.lock), e.setTableInfo(t), e.setLockTips(e.lockVO), e.isUpdateSelectFlag = !0, e.stopLoading();
    }), this.on(_dependency1.SlotFrameworkEvent.LOCK_SLOT_TABLE_RESPONSE, function (t) {
      e.setLockVO(t.lock), e.setLockTips(e.lockVO), e.isUpdateSelectFlag = !0, e.stopLoading();
    }), this.on(_dependency1.SlotFrameworkEvent.SLOT_TABLE_START_LOADING, function () {
      e.startLoading();
    }), this.on(_dependency1.SlotFrameworkEvent.SLOT_TABLES_UPDATED_RESPONSE, function (t) {
      0 !== _dependency10.default.getData().slotTableUpdated && (0 !== Object.keys(t).length ? (Object.entries(t).forEach(function (t) {
        var o = t[0],
          n = t[1];
        if (e.slotTableMap.has(Number(o))) switch (n) {
          case _dependency12.ETableStatus.EMPTY:
            var a = e.slotTableMap.get(Number(o)).tableVO;
            a.status = n, a.user = null, e.slotTableMap.get(Number(o)).setData(a);
            break;
          case _dependency12.ETableStatus.FULL:
            var i = e.slotTableMap.get(Number(o)).tableVO;
            i.status = n, e.slotTableMap.get(Number(o)).setData(i);
            break;
          case _dependency12.ETableStatus.LOCKED:
            var l = e.slotTableMap.get(Number(o)).tableVO;
            l.status = n, e.slotTableMap.get(Number(o)).setData(l);
            break;
          case _dependency12.ETableStatus.CLOSE:
            e.slotTableMap.get(Number(o)).reset(), e.slotTableMap.get(Number(o)).recycle(), e.recycleOnce(Number(o));
        }
      }), e.setFilterTable(), e.stopLoading()) : dispatch(_dependency1.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_PAGE_DATA_REQUEST, {
        page: e.selectPage
      }));
    }), this.on(_dependency1.SlotFrameworkEvent.SYNC_SOLT_TABLES, function () {
      var t = e.slotTableMap.get(e.selectRoomId);
      t.tableStatus = _dependency12.ETableStatus.FULL, t.tableVO.status = _dependency12.ETableStatus.FULL, e.setFilterTable(), Array.from(e.slotTableMap.values()).some(function (t) {
        return t.tableVO.status === _dependency12.ETableStatus.EMPTY;
      }) || e.syncSlotTables();
    }), this.on(_dependency1.SlotFrameworkEvent.SLOT_TABLES_RECYCLE_ALL, function () {
      e.recycleAll();
    }), this.on(_dependency1.SlotFrameworkEvent.SLOT_TABLE_PAGE_DATA_RESPONSE, function (t) {
      var o = t.data.tables,
        n = _dependency10.default.getData().player.uid;
      (o.some(function (t) {
        var e = t.status === _dependency12.ETableStatus.EMPTY,
          o = (t.status === _dependency12.ETableStatus.FULL || t.status === _dependency12.ETableStatus.LOCKED) && t.user.userId === n;
        return e || o;
      }) || e.isFirstShowFullTip || e.showFullTip(), e.removeNotUseSlotTable(o), e.createItems(o), e.setLockVO(t.data.lock), e.currentRoomId && e.slotTableMap.has(e.currentRoomId) && e.slotTableMap.get(e.currentRoomId).select(), e.setLockTips(t.data.lock), e.setFilterTable(), e.stopLoading(), e.isCurrentPage(o)) ? e.args || (e.selectRoomId = e.currentRoomId, e.getSlotTableDetail(e.selectRoomId)) : (e.selectRoomId = o[0].roomId, e.slotTableMap.get(e.selectRoomId).select(), e.getSlotTableDetail(e.selectRoomId));
    });
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency0.default);
    }
  }, {
    key: "selectRoomId",
    get: function () {
      return this._selectRoomId;
    },
    set: function (t) {
      this._selectRoomId = t;
    }
  }]), e;
}(_dependency6.default)).prototype, "line", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = _dependency.applyDecoratedDescriptor(Tt.prototype, "closeBtn", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ft = _dependency.applyDecoratedDescriptor(Tt.prototype, "exitBtn", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), dt = _dependency.applyDecoratedDescriptor(Tt.prototype, "showTableToggleContent", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ct = _dependency.applyDecoratedDescriptor(Tt.prototype, "showTableToggleGroup", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Lt = _dependency.applyDecoratedDescriptor(Tt.prototype, "allToggle", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Et = _dependency.applyDecoratedDescriptor(Tt.prototype, "allToggleText", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), St = _dependency.applyDecoratedDescriptor(Tt.prototype, "emptyToggle", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), wt = _dependency.applyDecoratedDescriptor(Tt.prototype, "emptyToggleText", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), vt = _dependency.applyDecoratedDescriptor(Tt.prototype, "ScrollViewContent", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ot = _dependency.applyDecoratedDescriptor(Tt.prototype, "pageTabsContent", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _t = _dependency.applyDecoratedDescriptor(Tt.prototype, "infoContent", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), It = _dependency.applyDecoratedDescriptor(Tt.prototype, "infoContentBg", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Bt = _dependency.applyDecoratedDescriptor(Tt.prototype, "infoContentContent", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), yt = _dependency.applyDecoratedDescriptor(Tt.prototype, "infoRowTable", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Mt = _dependency.applyDecoratedDescriptor(Tt.prototype, "slotTableNumber", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), kt = _dependency.applyDecoratedDescriptor(Tt.prototype, "betHour", [tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), At = _dependency.applyDecoratedDescriptor(Tt.prototype, "betDay", [et], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Dt = _dependency.applyDecoratedDescriptor(Tt.prototype, "rateHour", [ot], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Rt = _dependency.applyDecoratedDescriptor(Tt.prototype, "rateDay", [nt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Pt = _dependency.applyDecoratedDescriptor(Tt.prototype, "confirmBtn", [at], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ft = _dependency.applyDecoratedDescriptor(Tt.prototype, "selectBtn", [it], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Nt = _dependency.applyDecoratedDescriptor(Tt.prototype, "lockBtn", [lt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Vt = _dependency.applyDecoratedDescriptor(Tt.prototype, "remainTimeTip", [rt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ut = _dependency.applyDecoratedDescriptor(Tt.prototype, "remainTimeTipTime", [st], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), zt = _dependency.applyDecoratedDescriptor(Tt.prototype, "tipContentMask", [ct], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Ht = _dependency.applyDecoratedDescriptor(Tt.prototype, "tipsLabel", [ut], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), xt = _dependency.applyDecoratedDescriptor(Tt.prototype, "loadingContent", [bt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Yt = _dependency.applyDecoratedDescriptor(Tt.prototype, "loadingBar", [gt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), pt = Tt)) || pt));
_dependency2.cclegacy._RF.pop();
