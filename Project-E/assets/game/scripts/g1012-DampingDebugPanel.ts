// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/chunks-env";
import * as _dependency4 from "./g1012-GameConfigModel";
import * as _dependency5 from "./g1012-GameData";
var _export;
export { _export as DampingDebugPanel };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "DampingDebugPanel":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, o, i, l, s, a, r, u, d, h, p, m, c, f, g, v, b, S, C, R, D, w;
var L;
_dependency2.cclegacy._RF.push({}, "69c5fC6wkRAzY+6SiGbHoQz", "DampingDebugPanel", void 0);
var y = _dependency2._decorator.ccclass,
  A = "g1012_damping_debug_slots_v2",
  B = "script/data/dampingConfig",
  k = [{
    key: "firstDamping",
    label: "開始抖動",
    bool: !0
  }, {
    key: "firstDampingTime",
    label: "開始抖動時間(s)",
    bool: !1
  }, {
    key: "firstDampingAmplitude",
    label: "開始抖動幅度",
    bool: !1
  }, {
    key: "firstDampingDelay",
    label: "開始延遲(s)",
    bool: !1
  }, {
    key: "lastDamping",
    label: "最後抖動",
    bool: !0
  }, {
    key: "lastDampingTime",
    label: "最後抖動時間(s)",
    bool: !1
  }, {
    key: "lastDampingAmplitude",
    label: "最後抖動幅度",
    bool: !1
  }],
  T = 380,
  P = 40;
_publish("DampingDebugPanel", y("DampingDebugPanel")(L = function (e) {
  var _nativeConstructor = l;
  function l() {
    for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
    return (t = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this).reelList = [], t.reelCount = 5, t.curReel = 0, t.curMode = "normal", t.values = [], t.store = {
      slots: {},
      lastSlot: ""
    }, t.curSlot = "", t.panelRoot = null, t.panelVisible = !1, t.slotLabel = null, t.fieldArea = null, t.reelBtnLabels = [], t.modeBtnLabels = [], t;
  }
  _dependency.inheritsLoose(l, e);
  var s = l.prototype;
  return s.setup = function (e) {}, s.loadBundleConfig = function () {
    var e = this,
      t = _dependency2.assetManager.getBundle(this.data.module);
    t ? t.load(B, _dependency2.JsonAsset, function (t, n) {
      if (!t && n) {
        var o = n.json;
        if (Array.isArray(o)) {
          for (var i = 0; i < e.reelCount; i++) e.values[i] = e.normalizeReel(o[i]);
          e.applyToReels(), e.rebuildFieldRows(), Log.d("[Damping] 已自動套用內建設定 " + B);
        } else Log.w("[Damping] 內建設定格式錯誤，需為陣列");
      } else Log.w("[Damping] 找不到內建設定 " + B + "，沿用預設", t);
    }) : Log.w("[Damping] " + this.data.module + " bundle 未載入，略過內建設定");
  }, s.applyToReels = function () {}, s.initValuesFromReels = function () {
    this.values = [];
    for (var e = 0; e < this.reelCount; e++) {
      var t = this.reelList[e],
        o = t && t.singleReelSetting ? t.singleReelSetting.dampingSetting : null,
        i = o ? {
          firstDamping: o.firstDamping,
          firstDampingTime: o.firstDampingTime,
          firstDampingAmplitude: o.firstDampingAmplitude,
          firstDampingDelay: o.firstDampingDelay,
          lastDamping: o.lastDamping,
          lastDampingTime: o.lastDampingTime,
          lastDampingAmplitude: o.lastDampingAmplitude
        } : this.defaultValues();
      this.values.push({
        normal: _dependency.extends({}, i),
        turbo: _dependency.extends({}, i)
      });
    }
    this.store.lastSlot && this.store.slots[this.store.lastSlot] && (this.curSlot = this.store.lastSlot, this.applySlotToValues(this.curSlot));
  }, s.defaultValues = function () {
    return {
      firstDamping: !1,
      firstDampingTime: .08,
      firstDampingAmplitude: .5,
      firstDampingDelay: .1,
      lastDamping: !0,
      lastDampingTime: .08,
      lastDampingAmplitude: .5
    };
  }, s.defaultReel = function () {
    return {
      normal: this.defaultValues(),
      turbo: this.defaultValues()
    };
  }, s.normalizeReel = function (e) {
    return e && e.normal && e.turbo ? {
      normal: _dependency.extends({}, this.defaultValues(), e.normal),
      turbo: _dependency.extends({}, this.defaultValues(), e.turbo)
    } : this.defaultReel();
  }, s.loadStore = function () {
    var e = App.storage.getItem(A, null);
    e && e.slots ? this.store = e : this.store = {
      slots: {},
      lastSlot: ""
    };
  }, s.saveStore = function () {
    App.storage.setItem(A, this.store);
  }, s.exportToFile = function (e) {
    var t = globalThis;
    if (t.document && t.Blob && t.URL) {
      var o = this.values.map(function (e) {
          return {
            normal: _dependency.extends({}, e.normal),
            turbo: _dependency.extends({}, e.turbo)
          };
        }),
        i = JSON.stringify(o, null, 2),
        l = new t.Blob([i], {
          type: "application/json"
        }),
        s = t.URL.createObjectURL(l),
        a = t.document.createElement("a");
      a.href = s, a.download = (e || "damping") + ".json", a.click(), t.URL.revokeObjectURL(s);
    } else Log.w("匯出檔案僅支援瀏覽器 (web) 環境");
  }, s.importFromFile = function () {
    var e = this,
      t = globalThis;
    if (t.document && t.FileReader) {
      var n = t.document.createElement("input");
      n.type = "file", n.accept = "application/json,.json", n.onchange = function () {
        var o = n.files && n.files[0];
        if (o) {
          var i = new t.FileReader();
          i.onload = function () {
            try {
              var t = JSON.parse(i.result);
              if (!Array.isArray(t)) return void Log.e("匯入失敗：檔案格式不是陣列");
              for (var n = 0; n < e.reelCount; n++) e.values[n] = e.normalizeReel(t[n]);
              e.applyToReels(), e.rebuildFieldRows();
            } catch (e) {
              Log.e("匯入失敗：JSON 解析錯誤", e);
            }
          }, i.readAsText(o);
        }
      }, n.click();
    } else Log.w("匯入檔案僅支援瀏覽器 (web) 環境");
  }, s.saveToSlot = function (e) {
    e && (this.store.slots[e] = this.values.map(function (e) {
      return {
        normal: _dependency.extends({}, e.normal),
        turbo: _dependency.extends({}, e.turbo)
      };
    }), this.store.lastSlot = e, this.curSlot = e, this.saveStore(), this.refreshSlotLabel());
  }, s.applySlotToValues = function (e) {
    var t = this.store.slots[e];
    if (t) for (var n = 0; n < this.reelCount; n++) this.values[n] = this.normalizeReel(t[n]);
  }, s.loadSlot = function (e) {
    this.store.slots[e] && (this.curSlot = e, this.store.lastSlot = e, this.applySlotToValues(e), this.applyToReels(), this.saveStore(), this.rebuildFieldRows(), this.refreshSlotLabel());
  }, s.deleteSlot = function (e) {
    if (this.store.slots[e]) {
      delete this.store.slots[e];
      var t = Object.keys(this.store.slots);
      this.curSlot = t[0] || "", this.store.lastSlot = this.curSlot, this.saveStore(), this.refreshSlotLabel();
    }
  }, s.slotNames = function () {
    return Object.keys(this.store.slots);
  }, s.cycleSlot = function (e) {
    var t = this.slotNames();
    if (0 !== t.length) {
      var n = t.indexOf(this.curSlot);
      n = (n + e + t.length) % t.length, this.loadSlot(t[n]);
    }
  }, s.buildUI = function () {
    var e = this,
      t = this.findCanvas() || this.node.scene,
      o = this.makeButton(t, 96, 44, "Damping", function () {
        return e.togglePanel();
      });
    this.anchorTopRight(o, -8, -8), o.name = "DampingDebugToggle";
    var i = new _dependency2.Node("DampingDebugPanelRoot");
    i.parent = t, i.addComponent(_dependency2.UITransform).setContentSize(T, 720), i.addComponent(_dependency2.BlockInputEvents), this.drawBg(i, T, 720, new _dependency2.Color(20, 20, 28, 235)), this.anchorRightFull(i), this.panelRoot = i, i.active = !1;
    var l = 330;
    this.makeLabel(i, "Damping 調整面板", 22).node.setPosition(0, l, 0), l -= P;
    var s = new _dependency2.Node("reelRow");
    s.parent = i, s.addComponent(_dependency2.UITransform).setContentSize(T, P), s.setPosition(0, l, 0), this.reelBtnLabels = [];
    for (var a = 360 / this.reelCount, r = function (t) {
        var n = e.makeButton(s, a - 4, 32, "軸" + t, function () {
          e.curReel = t, e.rebuildFieldRows(), e.refreshReelButtons();
        });
        n.setPosition(a * t - 180 + a / 2, 0, 0), e.reelBtnLabels.push(n.getComponentInChildren(_dependency2.Label));
      }, m = 0; m < this.reelCount; m++) r(m);
    l -= 46;
    var c = new _dependency2.Node("modeRow");
    c.parent = i, c.addComponent(_dependency2.UITransform).setContentSize(T, P), c.setPosition(0, l, 0), this.modeBtnLabels = [];
    for (var f = [{
        m: "normal",
        t: "一般"
      }, {
        m: "turbo",
        t: "極速"
      }], v = function (t) {
        var n = e.makeButton(c, 176, 32, f[t].t, function () {
          e.curMode = f[t].m, e.rebuildFieldRows(), e.refreshModeButtons();
        });
        n.setPosition(180 * t - 180 + 90, 0, 0), e.modeBtnLabels.push({
          mode: f[t].m,
          base: f[t].t,
          label: n.getComponentInChildren(_dependency2.Label)
        });
      }, b = 0; b < f.length; b++) v(b);
    l -= 46;
    var S = new _dependency2.Node("fieldArea");
    S.parent = i, S.addComponent(_dependency2.UITransform).setContentSize(T, P * k.length), S.setPosition(0, l - P * k.length / 2 + 20, 0), this.fieldArea = S, this.rebuildFieldRows(), l -= P * k.length + 10, this.makeButton(i, 340, 34, "複製此軸(兩套)到全部軸", function () {
      for (var t = e.values[e.curReel], o = 0; o < e.reelCount; o++) e.values[o] = {
        normal: _dependency.extends({}, t.normal),
        turbo: _dependency.extends({}, t.turbo)
      };
      e.applyToReels();
    }).setPosition(0, l, 0), l -= 44;
    var C = this.makeLabel(i, "", 18);
    this.slotLabel = C, C.node.setPosition(0, l, 0), this.refreshSlotLabel(), l -= P;
    var R = new _dependency2.Node("slotNav");
    R.parent = i, R.addComponent(_dependency2.UITransform).setContentSize(T, P), R.setPosition(0, l, 0), this.makeButton(R, 60, 32, "◀", function () {
      return e.cycleSlot(-1);
    }).setPosition(-145, 0, 0), this.makeButton(R, 60, 32, "▶", function () {
      return e.cycleSlot(1);
    }).setPosition(145, 0, 0), l -= 44;
    var D = this.makeEditBox(i, 340, 34, "新槽名稱…", "", function () {});
    D.node.setPosition(0, l, 0), l -= 44;
    var w = new _dependency2.Node("actionRow");
    w.parent = i, w.addComponent(_dependency2.UITransform).setContentSize(T, P), w.setPosition(0, l, 0);
    this.makeButton(w, 86, 32, "存", function () {
      var t = (D.string ? D.string.trim() : "") || e.curSlot;
      t && e.saveToSlot(t);
    }).setPosition(-135, 0, 0), this.makeButton(w, 86, 32, "讀", function () {
      e.curSlot && e.loadSlot(e.curSlot);
    }).setPosition(-45, 0, 0), this.makeButton(w, 86, 32, "新增", function () {
      var t = D.string ? D.string.trim() : "";
      t && (e.saveToSlot(t), D.string = "");
    }).setPosition(45, 0, 0), this.makeButton(w, 86, 32, "刪除", function () {
      e.curSlot && e.deleteSlot(e.curSlot);
    }).setPosition(135, 0, 0), l -= 44;
    var L = new _dependency2.Node("fileRow");
    L.parent = i, L.addComponent(_dependency2.UITransform).setContentSize(T, P), L.setPosition(0, l, 0);
    this.makeButton(L, 176, 32, "匯出檔到硬碟", function () {
      var t = (D.string ? D.string.trim() : "") || e.curSlot || "damping";
      e.exportToFile(t);
    }).setPosition(-90, 0, 0), this.makeButton(L, 176, 32, "從硬碟匯入", function () {
      return e.importFromFile();
    }).setPosition(90, 0, 0), this.refreshReelButtons(), this.refreshModeButtons();
  }, s.rebuildFieldRows = function () {
    var e = this;
    if (this.fieldArea) {
      this.fieldArea.removeAllChildren();
      for (var t = this.values[this.curReel][this.curMode], n = P * k.length / 2 - 20, o = function () {
          var o = l[i],
            s = new _dependency2.Node("row_" + o.key);
          s.parent = e.fieldArea, s.addComponent(_dependency2.UITransform).setContentSize(T, P), s.setPosition(0, n, 0);
          var a = e.makeLabel(s, o.label, 16);
          if (a.horizontalAlign = _dependency2.Label.HorizontalAlign.LEFT, a.node.setPosition(-174, 0, 0), a.getComponent(_dependency2.UITransform).setAnchorPoint(0, .5), o.bool) {
            var r = e.makeButton(s, 90, 30, t[o.key] ? "ON" : "OFF", function () {
              var t = !e.values[e.curReel][e.curMode][o.key];
              e.values[e.curReel][e.curMode][o.key] = t, r.getComponentInChildren(_dependency2.Label).string = t ? "ON" : "OFF", e.applyToReels();
            });
            r.setPosition(130, 0, 0);
          } else {
            var h = e.makeEditBox(s, 110, 30, "", String(t[o.key]), function (t) {
              var n = parseFloat(t);
              isNaN(n) || (h.string = n + "", e.values[e.curReel][e.curMode][o.key] = n, e.applyToReels());
            });
            h.node.setPosition(120, 0, 0);
          }
          n -= P;
        }, i = 0, l = k; i < l.length; i++) o();
    }
  }, s.refreshReelButtons = function () {
    for (var e = 0; e < this.reelBtnLabels.length; e++) {
      var t = this.reelBtnLabels[e];
      t && (t.string = e === this.curReel ? "[軸" + e + "]" : "軸" + e);
    }
  }, s.refreshModeButtons = function () {
    for (var e, t = _dependency.createForOfIteratorHelperLoose(this.modeBtnLabels); !(e = t()).done;) {
      var n = e.value;
      n.label && (n.label.string = n.mode === this.curMode ? "[" + n.base + "]" : n.base);
    }
  }, s.refreshSlotLabel = function () {
    if (this.slotLabel) {
      var e = this.slotNames();
      this.slotLabel.string = "存檔槽: " + (this.curSlot || "(無)") + "  (" + e.length + " 組)";
    }
  }, s.togglePanel = function () {
    this.panelVisible = !this.panelVisible, this.panelRoot && (this.panelRoot.active = this.panelVisible), this.panelVisible && this.rebuildFieldRows();
  }, s.findCanvas = function () {
    for (var e = this.node; e;) {
      if (e.getComponent(_dependency2.Canvas)) return e;
      e = e.parent;
    }
    return _dependency2.find("Canvas") || null;
  }, s.drawBg = function (e, t, n, o) {
    var i = e.addComponent(_dependency2.Graphics);
    i.rect(-t / 2, -n / 2, t, n), i.fillColor = o, i.fill();
  }, s.makeLabel = function (e, t, n) {
    var o = new _dependency2.Node("label");
    o.parent = e, o.addComponent(_dependency2.UITransform).setContentSize(T, n + 8);
    var i = o.addComponent(_dependency2.Label);
    return i.string = t, i.fontSize = n, i.lineHeight = n + 4, i.color = new _dependency2.Color(235, 235, 235, 255), i;
  }, s.makeButton = function (e, t, n, o, i) {
    var l = new _dependency2.Node("btn");
    l.parent = e, l.addComponent(_dependency2.UITransform).setContentSize(t, n), this.drawBg(l, t, n, new _dependency2.Color(60, 90, 140, 255));
    var s = this.makeLabel(l, o, 16);
    return s.getComponent(_dependency2.UITransform).setContentSize(t, n), s.node.setPosition(0, 0, 0), l.on(_dependency2.Node.EventType.TOUCH_END, function () {
      return i();
    }), l;
  }, s.makeEditBox = function (e, t, n, o, i, l) {
    var s = new _dependency2.Node("editbox");
    s.addComponent(_dependency2.UITransform).setContentSize(t, n);
    var a = new _dependency2.Node("bg");
    a.parent = s, a.addComponent(_dependency2.UITransform).setContentSize(t, n), this.drawBg(a, t, n, new _dependency2.Color(245, 245, 245, 255));
    var r = new _dependency2.Node("TEXT_LABEL");
    r.parent = s;
    var h = r.addComponent(_dependency2.UITransform);
    h.setContentSize(t - 8, n), h.setAnchorPoint(0, 1);
    var m = r.addComponent(_dependency2.Label);
    m.string = i, m.fontSize = 16, m.horizontalAlign = _dependency2.HorizontalTextAlignment.LEFT, m.verticalAlign = _dependency2.VerticalTextAlignment.CENTER, m.lineHeight = n, m.color = new _dependency2.Color(20, 20, 20, 255), m.overflow = _dependency2.Label.Overflow.NONE;
    var c = new _dependency2.Node("PLACEHOLDER_LABEL");
    c.parent = s;
    var f = c.addComponent(_dependency2.UITransform);
    f.setContentSize(t - 8, n), f.setAnchorPoint(0, 1);
    var C = c.addComponent(_dependency2.Label);
    C.string = o, C.fontSize = 14, C.lineHeight = n, C.color = new _dependency2.Color(140, 140, 140, 255), C.overflow = _dependency2.Label.Overflow.CLAMP;
    var R = s.addComponent(_dependency2.EditBox);
    return R.textLabel = m, R.placeholderLabel = C, R.placeholder = o, R.string = i, s.parent = e, R.node.on(_dependency2.EditBox.EventType.EDITING_DID_ENDED, function () {
      return l(R.string);
    }), R;
  }, s.anchorRightFull = function (e) {
    var t = e.addComponent(_dependency2.Widget);
    t.isAlignRight = !0, t.isAlignVerticalCenter = !0, t.right = 0, t.verticalCenter = 0, t.alignMode = _dependency2.Widget.AlignMode.ON_WINDOW_RESIZE;
  }, s.anchorTopRight = function (e, t, n) {
    var o = e.addComponent(_dependency2.Widget);
    o.isAlignRight = !0, o.isAlignTop = !0, o.right = -t, o.top = -n, o.alignMode = _dependency2.Widget.AlignMode.ON_WINDOW_RESIZE;
  }, _dependency.createClass(l, [{
    key: "overrideActive",
    get: function () {
      return _dependency3.DEBUG;
    }
  }, {
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), l;
}(_dependency2.Component)) || L);
_dependency2.cclegacy._RF.pop();
