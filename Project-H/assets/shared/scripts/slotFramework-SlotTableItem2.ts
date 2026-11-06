// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-CmmUtils";
import * as _dependency5 from "./main-EventComponent";
import * as _dependency6 from "./main-Decorators";
import * as _dependency7 from "./slotFramework-SlotFrameworkData";
import * as _dependency8 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency9 from "./slotFramework-ColorModel";
import * as _dependency0 from "./slotFramework-PlatformModel";
import * as _dependency1 from "./slotFramework-type2";
import * as _dependency10 from "./slotFramework-CmmSlotUtils";
import * as _dependency11 from "./slotFramework-LoadUtils";
import * as _dependency12 from "./slotFramework-SlotTableViewBase";
var _export;
export { _export as SlotTableItem2 };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SlotTableItem2":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, o, a, i, s, r, u, l, c, h, f, b, m, p, d, L, S, g, E, y, C;
var v, I, _, D, F, k, T, w, M, O, U, P, K;
_dependency2.cclegacy._RF.push({}, "e9ddec+SmBGIpB6Lf475pCv", "SlotTableItem2", void 0);
var B = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("SlotTableItem2", (v = B("SlotTableItem2"), I = _dependency6.inject("content/bg", _dependency2.Sprite), _ = _dependency6.inject("content/icon", _dependency2.Sprite), D = _dependency6.inject("content/number", _dependency2.Label), F = _dependency6.inject("content/roomId", _dependency2.Label), k = _dependency6.inject("content/rate", _dependency2.Label), v((M = _dependency.applyDecoratedDescriptor((w = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "bg", M, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "icon", O, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "number", U, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "roomId", P, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rate", K, _dependency.assertThisInitialized(e)), e.statusIsChange = !1, e._tableStatus = null, e.status = null, e.statusColorMap = new Map(), e.statusIconMap = new Map(), e.tableVO = null, e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.update = function () {
    this.statusIsChange && (this.updateStatus(), this.statusIsChange = !1);
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.init = function () {
    this.createStatusColorMap(), this.createStatusIconMap(), this.setEventTouch();
  }, s.setEventTouch = function () {
    var t = this;
    _dependency4.CmmUtils.addBtnClickEvent(this.node, function () {
      t.node.getComponent(_dependency2.Toggle).isChecked || (dispatch(_dependency8.SlotFrameworkEvent.SLOT_TABLE_START_LOADING), t.sendGetSlotTableData(t.tableVO.roomId), dispatch(_dependency8.SlotFrameworkEvent.PLAY_CLICK_BTM));
    }, {
      delaySeconds: .25
    });
  }, s.createStatusColorMap = function () {
    var t = this,
      e = _dependency9.default.getData(),
      n = e.white,
      o = e.background,
      a = e.mainGame,
      i = {
        white: {
          bg: n.hover02,
          icon: o[60],
          number: o[60]
        },
        gray: {
          bg: n.default02,
          icon: n.info01,
          number: n.info01
        },
        selfFull: {
          bg: a.main,
          icon: a.auxiliary,
          number: a.auxiliary
        },
        selfLocked: {
          bg: a.main,
          icon: a.auxiliary,
          number: a.auxiliary
        }
      };
    [{
      key: _dependency12.EStatus.EMPTY,
      value: "xin-star" == _dependency0.default.getData().theme ? i.gray : i.white
    }, {
      key: _dependency12.EStatus.FULL,
      value: "xin-star" == _dependency0.default.getData().theme ? i.white : i.gray
    }, {
      key: _dependency12.EStatus.LOCKED,
      value: i.gray
    }, {
      key: _dependency12.EStatus.SELF_FULL,
      value: i.selfFull
    }, {
      key: _dependency12.EStatus.SELF_LOCKED,
      value: i.selfLocked
    }].forEach(function (e) {
      t.statusColorMap.set(e.key, e.value);
    });
  }, s.createStatusIconMap = function () {
    var t = this,
      e = this.data.getData().filePaths.slotTableDir;
    [{
      key: _dependency12.EStatus.EMPTY,
      value: _dependency11.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.slotFramework], e, "machinel_icon")
    }, {
      key: _dependency12.EStatus.FULL,
      value: _dependency11.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.slotFramework], e, "other_icon")
    }, {
      key: _dependency12.EStatus.LOCKED,
      value: _dependency11.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.slotFramework], e, "otherLock_icon")
    }, {
      key: _dependency12.EStatus.SELF_FULL,
      value: _dependency11.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.slotFramework], e, "machinel_icon")
    }, {
      key: _dependency12.EStatus.SELF_LOCKED,
      value: _dependency11.LoadUtils.getDirSp(_dependency3.EBundles[_dependency3.EBundles.slotFramework], e, "tableLock_icon")
    }].forEach(function (e) {
      t.statusIconMap.set(e.key, e.value);
    });
  }, s.updateStatus = function () {
    switch (this.tableStatus) {
      case _dependency1.ETableStatus.EMPTY:
        this.setColor(_dependency12.EStatus.EMPTY), this.setIcon(_dependency12.EStatus.EMPTY), this.status = _dependency12.EStatus.EMPTY;
        break;
      case _dependency1.ETableStatus.FULL:
        this.isSelf() ? (this.setColor(_dependency12.EStatus.SELF_FULL), this.setIcon(_dependency12.EStatus.SELF_FULL), this.status = _dependency12.EStatus.SELF_FULL) : (this.setColor(_dependency12.EStatus.FULL), this.setIcon(_dependency12.EStatus.FULL), this.status = _dependency12.EStatus.FULL);
        break;
      case _dependency1.ETableStatus.LOCKED:
        this.isSelf() ? (this.setColor(_dependency12.EStatus.SELF_LOCKED), this.setIcon(_dependency12.EStatus.SELF_LOCKED), this.status = _dependency12.EStatus.SELF_LOCKED) : (this.setColor(_dependency12.EStatus.LOCKED), this.setIcon(_dependency12.EStatus.LOCKED), this.status = _dependency12.EStatus.LOCKED);
    }
  }, s.setColor = function (t) {
    var e = this.statusColorMap.get(t),
      n = e.bg,
      o = e.icon,
      a = e.number;
    this.bg.color = n, this.icon.color = o, this.number.color = a;
  }, s.setIcon = function (t) {
    var e = this.statusIconMap.get(t);
    this.icon.spriteFrame = e;
  }, s.setNumber = function (t) {
    this.number.string = t;
  }, s.setRoomId = function (t) {
    this.roomId.string = t;
  }, s.setRate = function (t) {
    this.rate.string = t;
  }, s.isSelf = function () {
    var t = _dependency0.default.getData(),
      e = t.table,
      n = t.player,
      o = this.tableVO,
      a = o.user,
      i = o.roomId;
    return e.roomId === i || (null == a ? void 0 : a.userId) === n.uid;
  }, s.sendGetSlotTableData = function (t) {
    dispatch(_dependency8.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_DETAIL_REQUEST, {
      roomId: t
    });
  }, s.reset = function () {
    this.node.active = !0, this.tableVO = null, this._tableStatus = null, this.status = null, this.statusIsChange = null;
  }, s.recycle = function () {
    App.pool.getPool("SLOT_TABLE_ITEM_POOL").put(this.node);
  }, s.select = function () {
    this.node.getComponent(_dependency2.Toggle).isChecked = !0;
  }, s.setData = function (t) {
    var e = t.number,
      n = t.roomId,
      o = t.win,
      a = t.bet,
      i = t.status,
      s = t.today;
    this.tableVO = t, this.tableStatus = i, this.setNumber(("" + e).padStart(3, "0")), this.setRoomId("" + n), s ? this.setRate(0 === s.bet ? _dependency10.CmmSlotUtils.formatNumber(0, !0, !0) + "%" : _dependency10.CmmSlotUtils.formatNumber(s.win / s.bet * 100, !0, !0) + "%") : this.setRate(0 === a ? _dependency10.CmmSlotUtils.formatNumber(0, !0, !0) + "%" : _dependency10.CmmSlotUtils.formatNumber(o / a * 100, !0, !0) + "%");
  }, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {}, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }, {
    key: "tableStatus",
    get: function () {
      return this._tableStatus;
    },
    set: function (t) {
      this._tableStatus = t, this.statusIsChange = !0;
    }
  }]), e;
}(_dependency5.default)).prototype, "bg", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(w.prototype, "icon", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(w.prototype, "number", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(w.prototype, "roomId", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(w.prototype, "rate", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = w)) || T));
_dependency2.cclegacy._RF.pop();
