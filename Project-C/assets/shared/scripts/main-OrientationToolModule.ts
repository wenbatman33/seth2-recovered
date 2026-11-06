// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as NodeModule };
var _export2;
export { _export2 as AnimationModule };
var _export3;
export { _export3 as I18nSpineModuleItem };
var _export4;
export { _export4 as SpineModule };
var _export5;
export { _export5 as I18nSpriteModuleItem };
var _export6;
export { _export6 as SpriteModule };
var _export7;
export { _export7 as MaskModule };
var _export8;
export { _export8 as I18nLabelModuleItem };
var _export9;
export { _export9 as LabelModule };
var _export0;
export { _export0 as PolygonModule };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "NodeModule":
      _export = value;
      break;
    case "AnimationModule":
      _export2 = value;
      break;
    case "I18nSpineModuleItem":
      _export3 = value;
      break;
    case "SpineModule":
      _export4 = value;
      break;
    case "I18nSpriteModuleItem":
      _export5 = value;
      break;
    case "SpriteModule":
      _export6 = value;
      break;
    case "MaskModule":
      _export7 = value;
      break;
    case "I18nLabelModuleItem":
      _export8 = value;
      break;
    case "LabelModule":
      _export9 = value;
      break;
    case "PolygonModule":
      _export0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, t, n, r, a, o, l, u, s, p, c, b, f, h, m, y;
var g, d, z, w, M, I, S, N, F, k, D, C, v, x, A, B, L, T, H, P, X, _, R, O, V, W, j, q, E, G, J, K, Q, U, Y, Z, $, ii, ei, ti, ni, ri, ai, oi, li, ui, si, pi, ci, bi, fi, hi, mi, yi, gi, di, zi, wi, Mi, Ii, Si, Ni, Fi, ki, Di, Ci, vi, xi, Ai, Bi, Li, Ti, Hi, Pi, Xi, _i, Ri, Oi, Vi, Wi, ji, qi, Ei, Gi, Ji, Ki, Qi, Ui, Yi, Zi, $i, ie, ee, te, ne, re, ae, oe, le, ue, se, pe;
_dependency2.cclegacy._RF.push({}, "4327frzwhpNLbeR7wPfFx3S", "OrientationToolModule", void 0);
var ce = _dependency2._decorator.ccclass,
  be = _dependency2._decorator.property;
_publish("NodeModule", (g = ce("NodeModule"), d = be(_dependency2.CCBoolean), z = be(_dependency2.Vec3), w = be(_dependency2.CCFloat), M = be(_dependency2.Vec3), I = be(_dependency2.Vec3), S = be(_dependency2.Size), N = be(_dependency2.CCBoolean), F = be({
  readonly: !0,
  displayName: "是否已記憶設定"
}), g((C = _dependency.applyDecoratedDescriptor((D = function () {
  _dependency.initializerDefineProperty(this, "nodeActive", C, this), _dependency.initializerDefineProperty(this, "position", v, this), _dependency.initializerDefineProperty(this, "rotation", x, this), _dependency.initializerDefineProperty(this, "rotation3D", A, this), _dependency.initializerDefineProperty(this, "scale", B, this), _dependency.initializerDefineProperty(this, "size", L, this), _dependency.initializerDefineProperty(this, "richTextSyncMaxWidth", T, this), _dependency.initializerDefineProperty(this, "isInit", H, this);
}).prototype, "nodeActive", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), v = _dependency.applyDecoratedDescriptor(D.prototype, "position", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency2.Vec3(0, 0);
  }
}), x = _dependency.applyDecoratedDescriptor(D.prototype, "rotation", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), A = _dependency.applyDecoratedDescriptor(D.prototype, "rotation3D", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency2.Vec3(0, 0, 0);
  }
}), B = _dependency.applyDecoratedDescriptor(D.prototype, "scale", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency2.Vec3(0, 0, 0);
  }
}), L = _dependency.applyDecoratedDescriptor(D.prototype, "size", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new _dependency2.Size(0, 0);
  }
}), T = _dependency.applyDecoratedDescriptor(D.prototype, "richTextSyncMaxWidth", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), H = _dependency.applyDecoratedDescriptor(D.prototype, "isInit", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), k = D)) || k)), _publish("AnimationModule", (P = ce("AnimationModule"), X = be(_dependency2.AnimationClip), _ = be(_dependency2.CCBoolean), P((V = _dependency.applyDecoratedDescriptor((O = function () {
  _dependency.initializerDefineProperty(this, "defalutClip", V, this), _dependency.initializerDefineProperty(this, "isInit", W, this);
}).prototype, "defalutClip", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = _dependency.applyDecoratedDescriptor(O.prototype, "isInit", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), R = O)) || R)), _publish("I18nSpineModuleItem", (j = ce("I18nSpineModuleItem"), q = be(_dependency2.sp.SkeletonData), j((J = _dependency.applyDecoratedDescriptor((G = function () {
  _dependency.initializerDefineProperty(this, "skeletonData", J, this);
}).prototype, "skeletonData", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = G)) || E)), _publish("SpineModule", (K = ce("SpineModule"), Q = be({
  type: _dependency2.sp.SkeletonData,
  displayName: "預設的 SkeletonData"
}), U = be({
  displayName: "預設 Animation name"
}), Y = be(_dependency2.CCBoolean), K((ii = _dependency.applyDecoratedDescriptor(($ = function () {
  _dependency.initializerDefineProperty(this, "skeletonData", ii, this), _dependency.initializerDefineProperty(this, "animationName", ei, this), _dependency.initializerDefineProperty(this, "isInit", ti, this);
}).prototype, "skeletonData", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ei = _dependency.applyDecoratedDescriptor($.prototype, "animationName", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), ti = _dependency.applyDecoratedDescriptor($.prototype, "isInit", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Z = $)) || Z)), _publish("I18nSpriteModuleItem", (ni = ce("I18nSpriteModuleItem"), ri = be(_dependency2.SpriteFrame), ai = be(_dependency2.Material), ni((ui = _dependency.applyDecoratedDescriptor((li = function () {
  _dependency.initializerDefineProperty(this, "spriteFrame", ui, this), _dependency.initializerDefineProperty(this, "material", si, this);
}).prototype, "spriteFrame", [ri], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), si = _dependency.applyDecoratedDescriptor(li.prototype, "material", [ai], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), oi = li)) || oi)), _publish("SpriteModule", (pi = ce("SpriteModule"), ci = be({
  type: _dependency2.SpriteFrame,
  displayName: "預設 SpriteFrame"
}), bi = be({
  type: _dependency2.Material,
  displayName: "預設 Material"
}), fi = be(_dependency2.CCBoolean), pi((yi = _dependency.applyDecoratedDescriptor((mi = function () {
  _dependency.initializerDefineProperty(this, "spriteFrame", yi, this), _dependency.initializerDefineProperty(this, "material", gi, this), _dependency.initializerDefineProperty(this, "isInit", di, this);
}).prototype, "spriteFrame", [ci], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gi = _dependency.applyDecoratedDescriptor(mi.prototype, "material", [bi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), di = _dependency.applyDecoratedDescriptor(mi.prototype, "isInit", [fi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), hi = mi)) || hi)), _publish("MaskModule", (zi = ce("MaskModule"), wi = be({
  type: _dependency2.CCInteger,
  range: [0, 1, 0],
  step: .1,
  slide: !0
}), Mi = be(_dependency2.SpriteFrame), Ii = be(_dependency2.CCBoolean), zi((Fi = _dependency.applyDecoratedDescriptor((Ni = function () {
  _dependency.initializerDefineProperty(this, "alphaThreshold", Fi, this), _dependency.initializerDefineProperty(this, "spriteFrame", ki, this), _dependency.initializerDefineProperty(this, "isInit", Di, this);
}).prototype, "alphaThreshold", [wi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), ki = _dependency.applyDecoratedDescriptor(Ni.prototype, "spriteFrame", [Mi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Di = _dependency.applyDecoratedDescriptor(Ni.prototype, "isInit", [Ii], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Si = Ni)) || Si)), _publish("I18nLabelModuleItem", (Ci = ce("I18nLabelModuleItem"), vi = be(_dependency2.CCFloat), xi = be(_dependency2.CCFloat), Ai = be(_dependency2.CCFloat), Bi = be(_dependency2.Font), Li = be(_dependency2.CCBoolean), Ti = be(_dependency2.CCString), Ci((Xi = _dependency.applyDecoratedDescriptor((Pi = function () {
  _dependency.initializerDefineProperty(this, "fontSize", Xi, this), _dependency.initializerDefineProperty(this, "lineHeight", _i, this), _dependency.initializerDefineProperty(this, "spacingX", Ri, this), _dependency.initializerDefineProperty(this, "font", Oi, this), _dependency.initializerDefineProperty(this, "isBold", Vi, this), _dependency.initializerDefineProperty(this, "key", Wi, this);
}).prototype, "fontSize", [vi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), _i = _dependency.applyDecoratedDescriptor(Pi.prototype, "lineHeight", [xi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), Ri = _dependency.applyDecoratedDescriptor(Pi.prototype, "spacingX", [Ai], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), Oi = _dependency.applyDecoratedDescriptor(Pi.prototype, "font", [Bi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Vi = _dependency.applyDecoratedDescriptor(Pi.prototype, "isBold", [Li], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Wi = _dependency.applyDecoratedDescriptor(Pi.prototype, "key", [Ti], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), Hi = Pi)) || Hi)), _publish("LabelModule", (ji = ce("LabelModule"), qi = be({
  type: _dependency2.CCFloat,
  displayName: "預設字體大小"
}), Ei = be({
  type: _dependency2.CCFloat,
  displayName: "預設行高"
}), Gi = be({
  type: _dependency2.CCFloat,
  displayName: "預設 Spacing X"
}), Ji = be({
  type: _dependency2.Font,
  displayName: "預設字體"
}), Ki = be({
  displayName: "預設是否使用粗體"
}), Qi = be(_dependency2.CCBoolean), ji((Zi = _dependency.applyDecoratedDescriptor((Yi = function () {
  _dependency.initializerDefineProperty(this, "fontSize", Zi, this), _dependency.initializerDefineProperty(this, "lineHeight", $i, this), _dependency.initializerDefineProperty(this, "spacingX", ie, this), _dependency.initializerDefineProperty(this, "font", ee, this), _dependency.initializerDefineProperty(this, "isBold", te, this), _dependency.initializerDefineProperty(this, "isInit", ne, this);
}).prototype, "fontSize", [qi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), $i = _dependency.applyDecoratedDescriptor(Yi.prototype, "lineHeight", [Ei], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), ie = _dependency.applyDecoratedDescriptor(Yi.prototype, "spacingX", [Gi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), ee = _dependency.applyDecoratedDescriptor(Yi.prototype, "font", [Ji], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), te = _dependency.applyDecoratedDescriptor(Yi.prototype, "isBold", [Ki], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), ne = _dependency.applyDecoratedDescriptor(Yi.prototype, "isInit", [Qi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Ui = Yi)) || Ui)), _publish("PolygonModule", (re = ce("PolygonModule"), ae = be({
  type: [_dependency2.Vec2]
}), oe = be(_dependency2.CCBoolean), re((se = _dependency.applyDecoratedDescriptor((ue = function () {
  _dependency.initializerDefineProperty(this, "points", se, this), _dependency.initializerDefineProperty(this, "isInit", pe, this);
}).prototype, "points", [ae], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), pe = _dependency.applyDecoratedDescriptor(ue.prototype, "isInit", [oe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), le = ue)) || le));
_dependency2.cclegacy._RF.pop();
