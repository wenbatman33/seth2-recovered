import { js as __recoveryEngineJs } from "cc";
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as DebugViewRuntimeControl };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "DebugViewRuntimeControl":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, o, i, n, s, l, r, a, g, h, c, p, C, d, m, u, T;
var L, f, M, b, v, x, E, S, I;

// Capability bridge: Creator already registers this engine-owned class.
const __recoveryEngineDebug=__recoveryEngineJs.getClassById('b2bd1+njXxJxaFY3ymm06WU')||__recoveryEngineJs.getClassByName('internal.DebugViewRuntimeControl');
if(__recoveryEngineDebug){_publish('DebugViewRuntimeControl',__recoveryEngineDebug);}else{
_dependency2.cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", void 0);
var A = _dependency2._decorator.ccclass,
  y = _dependency2._decorator.property;
_publish("DebugViewRuntimeControl", (L = A("internal.DebugViewRuntimeControl"), f = y(_dependency2.Node), M = y(_dependency2.Node), b = y(_dependency2.Node), L((E = _dependency.applyDecoratedDescriptor((x = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, o = arguments.length, s = new Array(o), l = 0; l < o; l++) s[l] = arguments[l];
    return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "compositeModeToggle", E, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "singleModeToggle", S, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "EnableAllCompositeModeButton", I, _dependency.assertThisInitialized(e)), e._single = 0, e.strSingle = ["No Single Debug", "Vertex Color", "Vertex Normal", "Vertex Tangent", "World Position", "Vertex Mirror", "Face Side", "UV0", "UV1", "UV Lightmap", "Project Depth", "Linear Depth", "Fragment Normal", "Fragment Tangent", "Fragment Binormal", "Base Color", "Diffuse Color", "Specular Color", "Transparency", "Metallic", "Roughness", "Specular Intensity", "IOR", "Direct Diffuse", "Direct Specular", "Direct All", "Env Diffuse", "Env Specular", "Env All", "Emissive", "Light Map", "Shadow", "AO", "Fresnel", "Direct Transmit Diffuse", "Direct Transmit Specular", "Env Transmit Diffuse", "Env Transmit Specular", "Transmit All", "Direct TRT", "Env TRT", "TRT All", "Fog"], e.strComposite = ["Direct Diffuse", "Direct Specular", "Env Diffuse", "Env Specular", "Emissive", "Light Map", "Shadow", "AO", "Normal Map", "Fog", "Tone Mapping", "Gamma Correction", "Fresnel", "Transmit Diffuse", "Transmit Specular", "TRT", "TT"], e.strMisc = ["CSM Layer Coloration", "Lighting With Albedo"], e.compositeModeToggleList = [], e.singleModeToggleList = [], e.miscModeToggleList = [], e.textComponentList = [], e.labelComponentList = [], e.textContentList = [], e.hideButtonLabel = void 0, e._currentColorIndex = 0, e.strColor = ["<color=#ffffff>", "<color=#000000>", "<color=#ff0000>", "<color=#00ff00>", "<color=#0000ff>"], e.color = [_dependency2.Color.WHITE, _dependency2.Color.BLACK, _dependency2.Color.RED, _dependency2.Color.GREEN, _dependency2.Color.BLUE], e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.start = function () {
    if (this.node.parent.getComponent(_dependency2.Canvas)) {
      var t = this.node.parent.getComponent(_dependency2.UITransform),
        e = .5 * t.width,
        o = .5 * t.height,
        i = .1 * e - e,
        n = o - .1 * o,
        s = this.node.getChildByName("MiscMode"),
        l = _dependency2.instantiate(s);
      l.parent = this.node, l.name = "Buttons";
      var r = _dependency2.instantiate(s);
      r.parent = this.node, r.name = "Titles";
      for (var u = 0; u < 2; u++) {
        var T = _dependency2.instantiate(this.EnableAllCompositeModeButton.getChildByName("Label"));
        T.setPosition(i + (u > 0 ? 450 : 150), n, 0), T.setScale(.75, .75, .75), T.parent = r;
        var L = T.getComponent(_dependency2.Label);
        L.string = u ? "----------Composite Mode----------" : "----------Single Mode----------", L.color = _dependency2.Color.WHITE, L.overflow = 0, this.labelComponentList[this.labelComponentList.length] = L;
      }
      n -= 20;
      for (var f = 0, M = 0; M < this.strSingle.length; M++, f++) {
        M === this.strSingle.length >> 1 && (i += 200, f = 0);
        var b = M ? _dependency2.instantiate(this.singleModeToggle) : this.singleModeToggle;
        b.setPosition(i, n - 20 * f, 0), b.setScale(.5, .5, .5), b.parent = this.singleModeToggle.parent;
        var v = b.getComponentInChildren(_dependency2.RichText);
        v.string = this.strSingle[M], this.textComponentList[this.textComponentList.length] = v, this.textContentList[this.textContentList.length] = v.string, b.on(_dependency2.Toggle.EventType.TOGGLE, this.toggleSingleMode, this), this.singleModeToggleList[M] = b;
      }
      i += 200, this.EnableAllCompositeModeButton.setPosition(i + 15, n, 0), this.EnableAllCompositeModeButton.setScale(.5, .5, .5), this.EnableAllCompositeModeButton.on(_dependency2.Button.EventType.CLICK, this.enableAllCompositeMode, this), this.EnableAllCompositeModeButton.parent = l;
      var x = this.EnableAllCompositeModeButton.getComponentInChildren(_dependency2.Label);
      this.labelComponentList[this.labelComponentList.length] = x;
      var E = _dependency2.instantiate(this.EnableAllCompositeModeButton);
      E.setPosition(i + 90, n, 0), E.setScale(.5, .5, .5), E.on(_dependency2.Button.EventType.CLICK, this.changeTextColor, this), E.parent = l, (x = E.getComponentInChildren(_dependency2.Label)).string = "TextColor", this.labelComponentList[this.labelComponentList.length] = x;
      var S = _dependency2.instantiate(this.EnableAllCompositeModeButton);
      S.setPosition(i + 200, n, 0), S.setScale(.5, .5, .5), S.on(_dependency2.Button.EventType.CLICK, this.hideUI, this), S.parent = this.node.parent, (x = S.getComponentInChildren(_dependency2.Label)).string = "Hide UI", this.labelComponentList[this.labelComponentList.length] = x, this.hideButtonLabel = x, n -= 40;
      for (var I = 0; I < this.strMisc.length; I++) {
        var A = _dependency2.instantiate(this.compositeModeToggle);
        A.setPosition(i, n - 20 * I, 0), A.setScale(.5, .5, .5), A.parent = s;
        var y = A.getComponentInChildren(_dependency2.RichText);
        y.string = this.strMisc[I], this.textComponentList[this.textComponentList.length] = y, this.textContentList[this.textContentList.length] = y.string, A.getComponent(_dependency2.Toggle).isChecked = !!I, A.on(_dependency2.Toggle.EventType.TOGGLE, I ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this), this.miscModeToggleList[I] = A;
      }
      n -= 150;
      for (var D = 0; D < this.strComposite.length; D++) {
        var B = D ? _dependency2.instantiate(this.compositeModeToggle) : this.compositeModeToggle;
        B.setPosition(i, n - 20 * D, 0), B.setScale(.5, .5, .5), B.parent = this.compositeModeToggle.parent;
        var w = B.getComponentInChildren(_dependency2.RichText);
        w.string = this.strComposite[D], this.textComponentList[this.textComponentList.length] = w, this.textContentList[this.textContentList.length] = w.string, B.on(_dependency2.Toggle.EventType.TOGGLE, this.toggleCompositeMode, this), this.compositeModeToggleList[D] = B;
      }
    } else console.error("debug-view-runtime-control should be child of Canvas");
  }, s.isTextMatched = function (t, e) {
    var o = new String(t),
      i = o.search(">");
    return -1 === i ? t === e : (o = (o = o.substr(i + 1)).substr(0, o.search("<"))) === e;
  }, s.toggleSingleMode = function (t) {
    for (var e = _dependency2.director.root.debugView, o = t.getComponentInChildren(_dependency2.RichText), i = 0; i < this.strSingle.length; i++) this.isTextMatched(o.string, this.strSingle[i]) && (e.singleMode = i);
  }, s.toggleCompositeMode = function (t) {
    for (var e = _dependency2.director.root.debugView, o = t.getComponentInChildren(_dependency2.RichText), i = 0; i < this.strComposite.length; i++) this.isTextMatched(o.string, this.strComposite[i]) && e.enableCompositeMode(i, t.isChecked);
  }, s.toggleLightingWithAlbedo = function (t) {
    _dependency2.director.root.debugView.lightingWithAlbedo = t.isChecked;
  }, s.toggleCSMColoration = function (t) {
    _dependency2.director.root.debugView.csmLayerColoration = t.isChecked;
  }, s.enableAllCompositeMode = function (t) {
    var e = _dependency2.director.root.debugView;
    e.enableAllCompositeMode(!0);
    for (var o = 0; o < this.compositeModeToggleList.length; o++) {
      this.compositeModeToggleList[o].getComponent(_dependency2.Toggle).isChecked = !0;
    }
    var i = this.miscModeToggleList[0].getComponent(_dependency2.Toggle);
    i.isChecked = !1, e.csmLayerColoration = !1, (i = this.miscModeToggleList[1].getComponent(_dependency2.Toggle)).isChecked = !0, e.lightingWithAlbedo = !0;
  }, s.hideUI = function (t) {
    var e = this.node.getChildByName("Titles"),
      o = !e.active;
    this.singleModeToggleList[0].parent.active = o, this.miscModeToggleList[0].parent.active = o, this.compositeModeToggleList[0].parent.active = o, this.EnableAllCompositeModeButton.parent.active = o, e.active = o, this.hideButtonLabel.string = o ? "Hide UI" : "Show UI";
  }, s.changeTextColor = function (t) {
    this._currentColorIndex++, this._currentColorIndex >= this.strColor.length && (this._currentColorIndex = 0);
    for (var e = 0; e < this.textComponentList.length; e++) this.textComponentList[e].string = this.strColor[this._currentColorIndex] + this.textContentList[e] + "</color>";
    for (var o = 0; o < this.labelComponentList.length; o++) this.labelComponentList[o].color = this.color[this._currentColorIndex];
  }, s.onLoad = function () {}, s.update = function (t) {}, e;
}(_dependency2.Component)).prototype, "compositeModeToggle", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = _dependency.applyDecoratedDescriptor(x.prototype, "singleModeToggle", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), I = _dependency.applyDecoratedDescriptor(x.prototype, "EnableAllCompositeModeButton", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = x)) || v));
_dependency2.cclegacy._RF.pop();

}
