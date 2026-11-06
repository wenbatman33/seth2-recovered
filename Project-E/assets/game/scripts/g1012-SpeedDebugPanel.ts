// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/chunks-env";
import * as _dependency4 from "./g1012-GameConfigModel";
import * as _dependency5 from "./g1012-GameData";
var _export;
export { _export as SpeedDebugPanel };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SpeedDebugPanel":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, o, n, i, s, l, r, a, u, d, h, c, p, f, m, v, g, b, S, C, R, L, w;
var B;
_dependency2.cclegacy._RF.push({}, "2416cJlTEVIdoN9UFv26BK+", "SpeedDebugPanel", void 0);
var y = _dependency2._decorator.ccclass,
  T = "g1012_speed_debug_slots_v2",
  A = "script/data/speedConfig",
  P = [{
    key: "moveOneSymbolTime",
    label: "移動一symbol時間(s)"
  }, {
    key: "step",
    label: "滾動幾個symbol",
    int: !0
  }, {
    key: "stopReelTime",
    label: "最後停輪時間(s)"
  }],
  k = 380,
  E = 40;
_publish("SpeedDebugPanel", y("SpeedDebugPanel")(B = function (e) {
  var _nativeConstructor = s;
  function s() {
    for (var t, o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
    return (t = Reflect.construct(e, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).reelList = [], t.reelCount = 5, t.curReel = 0, t.curMode = "normal", t.values = [], t.store = {
      slots: {},
      lastSlot: ""
    }, t.curSlot = "", t.panelRoot = null, t.panelVisible = !1, t.slotLabel = null, t.fieldArea = null, t.reelBtnLabels = [], t.modeBtnLabels = [], t;
  }
  _dependency.inheritsLoose(s, e);
  var l = s.prototype;
  return l.setup = function (e) {}, l.loadBundleConfig = function () {
    var e = this,
      t = _dependency2.assetManager.getBundle(this.data.module);
    t ? t.load(A, _dependency2.JsonAsset, function (t, o) {
      if (!t && o) {
        var n = o.json;
        if (Array.isArray(n)) {
          for (var i = 0; i < e.reelCount; i++) e.values[i] = e.normalizeReel(n[i]);
          e.applyToReels(), e.rebuildFieldRows(), Log.d("[Speed] 已自動套用內建設定 " + A);
        } else Log.w("[Speed] 內建設定格式錯誤，需為陣列");
      } else Log.w("[Speed] 找不到內建設定 " + A + "，沿用預設", t);
    }) : Log.w("[Speed] " + this.data.module + " bundle 未載入，略過內建設定");
  }, l.applyToReels = function () {}, l.initValuesFromReels = function () {
    this.values = [];
    for (var e = 0; e < this.reelCount; e++) {
      var t = this.reelList[e],
        n = t ? t.singleReelSetting : null,
        i = n ? {
          moveOneSymbolTime: n.moveOneSymbolTime,
          step: n.step,
          stopReelTime: n.stopReelTime
        } : this.defaultValues();
      this.values.push({
        normal: _dependency.extends({}, i),
        turbo: _dependency.extends({}, i)
      });
    }
    this.store.lastSlot && this.store.slots[this.store.lastSlot] && (this.curSlot = this.store.lastSlot, this.applySlotToValues(this.curSlot));
  }, l.defaultValues = function () {
    return {
      moveOneSymbolTime: .07,
      step: 6,
      stopReelTime: .075
    };
  }, l.defaultReel = function () {
    return {
      normal: this.defaultValues(),
      turbo: this.defaultValues()
    };
  }, l.normalizeReel = function (e) {
    return e && e.normal && e.turbo ? {
      normal: _dependency.extends({}, this.defaultValues(), e.normal),
      turbo: _dependency.extends({}, this.defaultValues(), e.turbo)
    } : this.defaultReel();
  }, l.loadStore = function () {
    var e = App.storage.getItem(T, null);
    e && e.slots ? this.store = e : this.store = {
      slots: {},
      lastSlot: ""
    };
  }, l.saveStore = function () {
    App.storage.setItem(T, this.store);
  }, l.exportToFile = function (e) {
    var t = globalThis;
    if (t.document && t.Blob && t.URL) {
      var n = this.values.map(function (e) {
          return {
            normal: _dependency.extends({}, e.normal),
            turbo: _dependency.extends({}, e.turbo)
          };
        }),
        i = JSON.stringify(n, null, 2),
        s = new t.Blob([i], {
          type: "application/json"
        }),
        l = t.URL.createObjectURL(s),
        r = t.document.createElement("a");
      r.href = l, r.download = (e || "speed") + ".json", r.click(), t.URL.revokeObjectURL(l);
    } else Log.w("匯出檔案僅支援瀏覽器 (web) 環境");
  }, l.importFromFile = function () {
    var e = this,
      t = globalThis;
    if (t.document && t.FileReader) {
      var o = t.document.createElement("input");
      o.type = "file", o.accept = "application/json,.json", o.onchange = function () {
        var n = o.files && o.files[0];
        if (n) {
          var i = new t.FileReader();
          i.onload = function () {
            try {
              var t = JSON.parse(i.result);
              if (!Array.isArray(t)) return void Log.e("匯入失敗：檔案格式不是陣列");
              for (var o = 0; o < e.reelCount; o++) e.values[o] = e.normalizeReel(t[o]);
              e.applyToReels(), e.rebuildFieldRows();
            } catch (e) {
              Log.e("匯入失敗：JSON 解析錯誤", e);
            }
          }, i.readAsText(n);
        }
      }, o.click();
    } else Log.w("匯入檔案僅支援瀏覽器 (web) 環境");
  }, l.saveToSlot = function (e) {
    e && (this.store.slots[e] = this.values.map(function (e) {
      return {
        normal: _dependency.extends({}, e.normal),
        turbo: _dependency.extends({}, e.turbo)
      };
    }), this.store.lastSlot = e, this.curSlot = e, this.saveStore(), this.refreshSlotLabel());
  }, l.applySlotToValues = function (e) {
    var t = this.store.slots[e];
    if (t) for (var o = 0; o < this.reelCount; o++) this.values[o] = this.normalizeReel(t[o]);
  }, l.loadSlot = function (e) {
    this.store.slots[e] && (this.curSlot = e, this.store.lastSlot = e, this.applySlotToValues(e), this.applyToReels(), this.saveStore(), this.rebuildFieldRows(), this.refreshSlotLabel());
  }, l.deleteSlot = function (e) {
    if (this.store.slots[e]) {
      delete this.store.slots[e];
      var t = Object.keys(this.store.slots);
      this.curSlot = t[0] || "", this.store.lastSlot = this.curSlot, this.saveStore(), this.refreshSlotLabel();
    }
  }, l.slotNames = function () {
    return Object.keys(this.store.slots);
  }, l.cycleSlot = function (e) {
    var t = this.slotNames();
    if (0 !== t.length) {
      var o = t.indexOf(this.curSlot);
      o = (o + e + t.length) % t.length, this.loadSlot(t[o]);
    }
  }, l.buildUI = function () {
    var e = this,
      t = this.findCanvas() || this.node.scene,
      n = this.makeButton(t, 96, 44, "Speed", function () {
        return e.togglePanel();
      });
    this.anchorTopRight(n, -8, -60), n.name = "SpeedDebugToggle";
    var i = new _dependency2.Node("SpeedDebugPanelRoot");
    i.parent = t, i.addComponent(_dependency2.UITransform).setContentSize(k, 720), i.addComponent(_dependency2.BlockInputEvents), this.drawBg(i, k, 720, new _dependency2.Color(28, 20, 20, 235)), this.anchorRightFull(i), this.panelRoot = i, i.active = !1;
    var s = 330;
    this.makeLabel(i, "Speed 調整面板", 22).node.setPosition(0, s, 0), s -= E;
    var l = new _dependency2.Node("reelRow");
    l.parent = i, l.addComponent(_dependency2.UITransform).setContentSize(k, E), l.setPosition(0, s, 0), this.reelBtnLabels = [];
    for (var r = 360 / this.reelCount, a = function (t) {
        var o = e.makeButton(l, r - 4, 32, "軸" + t, function () {
          e.curReel = t, e.rebuildFieldRows(), e.refreshReelButtons();
        });
        o.setPosition(r * t - 180 + r / 2, 0, 0), e.reelBtnLabels.push(o.getComponentInChildren(_dependency2.Label));
      }, p = 0; p < this.reelCount; p++) a(p);
    s -= 46;
    var f = new _dependency2.Node("modeRow");
    f.parent = i, f.addComponent(_dependency2.UITransform).setContentSize(k, E), f.setPosition(0, s, 0), this.modeBtnLabels = [];
    for (var m = [{
        m: "normal",
        t: "一般"
      }, {
        m: "turbo",
        t: "極速"
      }], g = function (t) {
        var o = e.makeButton(f, 176, 32, m[t].t, function () {
          e.curMode = m[t].m, e.rebuildFieldRows(), e.refreshModeButtons();
        });
        o.setPosition(180 * t - 180 + 90, 0, 0), e.modeBtnLabels.push({
          mode: m[t].m,
          base: m[t].t,
          label: o.getComponentInChildren(_dependency2.Label)
        });
      }, b = 0; b < m.length; b++) g(b);
    s -= 46;
    var S = new _dependency2.Node("fieldArea");
    S.parent = i, S.addComponent(_dependency2.UITransform).setContentSize(k, E * P.length), S.setPosition(0, s - E * P.length / 2 + 20, 0), this.fieldArea = S, this.rebuildFieldRows(), s -= E * P.length + 10, this.makeButton(i, 340, 34, "複製此軸(兩套)到全部軸", function () {
      for (var t = e.values[e.curReel], n = 0; n < e.reelCount; n++) e.values[n] = {
        normal: _dependency.extends({}, t.normal),
        turbo: _dependency.extends({}, t.turbo)
      };
      e.applyToReels();
    }).setPosition(0, s, 0), s -= 44;
    var C = this.makeLabel(i, "", 18);
    this.slotLabel = C, C.node.setPosition(0, s, 0), this.refreshSlotLabel(), s -= E;
    var R = new _dependency2.Node("slotNav");
    R.parent = i, R.addComponent(_dependency2.UITransform).setContentSize(k, E), R.setPosition(0, s, 0), this.makeButton(R, 60, 32, "◀", function () {
      return e.cycleSlot(-1);
    }).setPosition(-145, 0, 0), this.makeButton(R, 60, 32, "▶", function () {
      return e.cycleSlot(1);
    }).setPosition(145, 0, 0), s -= 44;
    var L = this.makeEditBox(i, 340, 34, "新槽名稱…", "", function () {});
    L.node.setPosition(0, s, 0), s -= 44;
    var w = new _dependency2.Node("actionRow");
    w.parent = i, w.addComponent(_dependency2.UITransform).setContentSize(k, E), w.setPosition(0, s, 0);
    this.makeButton(w, 86, 32, "存", function () {
      var t = (L.string ? L.string.trim() : "") || e.curSlot;
      t && e.saveToSlot(t);
    }).setPosition(-135, 0, 0), this.makeButton(w, 86, 32, "讀", function () {
      e.curSlot && e.loadSlot(e.curSlot);
    }).setPosition(-45, 0, 0), this.makeButton(w, 86, 32, "新增", function () {
      var t = L.string ? L.string.trim() : "";
      t && (e.saveToSlot(t), L.string = "");
    }).setPosition(45, 0, 0), this.makeButton(w, 86, 32, "刪除", function () {
      e.curSlot && e.deleteSlot(e.curSlot);
    }).setPosition(135, 0, 0), s -= 44;
    var B = new _dependency2.Node("fileRow");
    B.parent = i, B.addComponent(_dependency2.UITransform).setContentSize(k, E), B.setPosition(0, s, 0);
    this.makeButton(B, 176, 32, "匯出檔到硬碟", function () {
      var t = (L.string ? L.string.trim() : "") || e.curSlot || "speed";
      e.exportToFile(t);
    }).setPosition(-90, 0, 0), this.makeButton(B, 176, 32, "從硬碟匯入", function () {
      return e.importFromFile();
    }).setPosition(90, 0, 0), this.refreshReelButtons(), this.refreshModeButtons();
  }, l.rebuildFieldRows = function () {
    var e = this;
    if (this.fieldArea) {
      this.fieldArea.removeAllChildren();
      for (var t = this.values[this.curReel][this.curMode], o = E * P.length / 2 - 20, n = function () {
          var n = s[i],
            l = new _dependency2.Node("row_" + n.key);
          l.parent = e.fieldArea, l.addComponent(_dependency2.UITransform).setContentSize(k, E), l.setPosition(0, o, 0);
          var r = e.makeLabel(l, n.label, 16);
          r.horizontalAlign = _dependency2.Label.HorizontalAlign.LEFT, r.node.setPosition(-174, 0, 0), r.getComponent(_dependency2.UITransform).setAnchorPoint(0, .5);
          var a = e.makeEditBox(l, 110, 30, "", String(t[n.key]), function (t) {
            var o = parseFloat(t);
            isNaN(o) || (n.int && (o = Math.round(o)), a.string = o + "", e.values[e.curReel][e.curMode][n.key] = o, e.applyToReels());
          });
          a.node.setPosition(120, 0, 0), o -= E;
        }, i = 0, s = P; i < s.length; i++) n();
    }
  }, l.refreshReelButtons = function () {
    for (var e = 0; e < this.reelBtnLabels.length; e++) {
      var t = this.reelBtnLabels[e];
      t && (t.string = e === this.curReel ? "[軸" + e + "]" : "軸" + e);
    }
  }, l.refreshModeButtons = function () {
    for (var e, t = _dependency.createForOfIteratorHelperLoose(this.modeBtnLabels); !(e = t()).done;) {
      var o = e.value;
      o.label && (o.label.string = o.mode === this.curMode ? "[" + o.base + "]" : o.base);
    }
  }, l.refreshSlotLabel = function () {
    if (this.slotLabel) {
      var e = this.slotNames();
      this.slotLabel.string = "存檔槽: " + (this.curSlot || "(無)") + "  (" + e.length + " 組)";
    }
  }, l.togglePanel = function () {
    this.panelVisible = !this.panelVisible, this.panelRoot && (this.panelRoot.active = this.panelVisible), this.panelVisible && this.rebuildFieldRows();
  }, l.findCanvas = function () {
    for (var e = this.node; e;) {
      if (e.getComponent(_dependency2.Canvas)) return e;
      e = e.parent;
    }
    return _dependency2.find("Canvas") || null;
  }, l.drawBg = function (e, t, o, n) {
    var i = e.addComponent(_dependency2.Graphics);
    i.rect(-t / 2, -o / 2, t, o), i.fillColor = n, i.fill();
  }, l.makeLabel = function (e, t, o) {
    var n = new _dependency2.Node("label");
    n.parent = e, n.addComponent(_dependency2.UITransform).setContentSize(k, o + 8);
    var i = n.addComponent(_dependency2.Label);
    return i.string = t, i.fontSize = o, i.lineHeight = o + 4, i.color = new _dependency2.Color(235, 235, 235, 255), i;
  }, l.makeButton = function (e, t, o, n, i) {
    var s = new _dependency2.Node("btn");
    s.parent = e, s.addComponent(_dependency2.UITransform).setContentSize(t, o), this.drawBg(s, t, o, new _dependency2.Color(140, 70, 60, 255));
    var l = this.makeLabel(s, n, 16);
    return l.getComponent(_dependency2.UITransform).setContentSize(t, o), l.node.setPosition(0, 0, 0), s.on(_dependency2.Node.EventType.TOUCH_END, function () {
      return i();
    }), s;
  }, l.makeEditBox = function (e, t, o, n, i, s) {
    var l = new _dependency2.Node("editbox");
    l.addComponent(_dependency2.UITransform).setContentSize(t, o);
    var r = new _dependency2.Node("bg");
    r.parent = l, r.addComponent(_dependency2.UITransform).setContentSize(t, o), this.drawBg(r, t, o, new _dependency2.Color(245, 245, 245, 255));
    var a = new _dependency2.Node("TEXT_LABEL");
    a.parent = l;
    var h = a.addComponent(_dependency2.UITransform);
    h.setContentSize(t - 8, o), h.setAnchorPoint(0, 1);
    var p = a.addComponent(_dependency2.Label);
    p.string = i, p.fontSize = 16, p.horizontalAlign = _dependency2.HorizontalTextAlignment.LEFT, p.verticalAlign = _dependency2.VerticalTextAlignment.CENTER, p.lineHeight = o, p.color = new _dependency2.Color(20, 20, 20, 255), p.overflow = _dependency2.Label.Overflow.NONE;
    var f = new _dependency2.Node("PLACEHOLDER_LABEL");
    f.parent = l;
    var m = f.addComponent(_dependency2.UITransform);
    m.setContentSize(t - 8, o), m.setAnchorPoint(0, 1);
    var C = f.addComponent(_dependency2.Label);
    C.string = n, C.fontSize = 14, C.lineHeight = o, C.color = new _dependency2.Color(140, 140, 140, 255), C.overflow = _dependency2.Label.Overflow.CLAMP;
    var R = l.addComponent(_dependency2.EditBox);
    return R.textLabel = p, R.placeholderLabel = C, R.placeholder = n, R.string = i, l.parent = e, R.node.on(_dependency2.EditBox.EventType.EDITING_DID_ENDED, function () {
      return s(R.string);
    }), R;
  }, l.anchorRightFull = function (e) {
    var t = e.addComponent(_dependency2.Widget);
    t.isAlignRight = !0, t.isAlignVerticalCenter = !0, t.right = 0, t.verticalCenter = 0, t.alignMode = _dependency2.Widget.AlignMode.ON_WINDOW_RESIZE;
  }, l.anchorTopRight = function (e, t, o) {
    var n = e.addComponent(_dependency2.Widget);
    n.isAlignRight = !0, n.isAlignTop = !0, n.right = -t, n.top = -o, n.alignMode = _dependency2.Widget.AlignMode.ON_WINDOW_RESIZE;
  }, _dependency.createClass(s, [{
    key: "overrideActive",
    get: function () {
      return _dependency3.DEBUG;
    }
  }, {
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), s;
}(_dependency2.Component)) || B);
_dependency2.cclegacy._RF.pop();
