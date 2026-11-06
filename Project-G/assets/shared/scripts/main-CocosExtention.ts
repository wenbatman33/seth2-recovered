// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-CocosUtils";
import * as _dependency3 from "./main-Resource";
import * as _dependency4 from "./main-Macros";
var _export;
export { _export as CocosExtentionInit };
var _export2;
export { _export2 as updateZIndex };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CocosExtentionInit":
      _export = value;
      break;
    case "updateZIndex":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, o, a, i, r, c, s, u, l, p, d, f, h, y, m, R, S, g, v, F, C, D, x, A;
_publish({
  CocosExtentionInit: function () {
    Log.d("Cocos擴充套件初始化");
  },
  updateZIndex: function (e) {
    _.updateZIndex(e);
  }
}), _dependency.cclegacy._RF.push({}, "41a78zq+i1C45s4JKGkhQdk", "CocosExtention", void 0), "object" == typeof Reflect ? Reflect.defineProperty(_dependency.Node.prototype, "userData", {
  value: null,
  writable: !0
}) : _dependency.Node.prototype.userData = null;
var I = _dependency.Sprite.prototype;
I.loadRemoteImage = function (e) {
  var t = this;
  null != e.isNeedCache && null != e.isNeedCache || (e.isNeedCache = !0);
  var n = !1;
  e.retain && (n = !0);
  var o = _dependency2.getBundle({
    bundle: e.defaultBundle,
    view: e.view
  });
  App.asset.remote.loadImage(e.url, e.isNeedCache).then(function (r) {
    r ? _dependency2.setSpriteSpriteFrame(e.view, e.url, t, r, e.complete, _dependency4.Macro.BUNDLE_REMOTE, _dependency3.Resource.Type.Remote, n) : (e.defaultSpriteFrame && "string" == typeof e.defaultSpriteFrame && (e.defaultSpriteFrame = e.defaultSpriteFrame + "/spriteFrame", App.cache.getCacheByAsync(e.defaultSpriteFrame, _dependency.SpriteFrame, o).then(function (n) {
      _dependency2.setSpriteSpriteFrame(e.view, e.defaultSpriteFrame, t, n, e.complete, o);
    })), e.complete && _dependency.isValid(t) && e.complete(r));
  });
}, I.loadImage = function (e) {
  var t = this,
    n = e.view,
    o = e.url,
    i = e.complete,
    r = _dependency2.getBundle(e);
  "string" == typeof o ? (o += "/spriteFrame", App.cache.getCacheByAsync(o, _dependency.SpriteFrame, r).then(function (e) {
    _dependency2.setSpriteSpriteFrame(n, o, t, e, i, r);
  })) : App.cache.getSpriteFrameByAsync(o.urls, o.key, n, _dependency2.addExtraLoadResource, r).then(function (e) {
    e && e.isTryReload || _dependency2.setSpriteSpriteFrame(n, e.url, t, e.spriteFrame, i, r, _dependency3.Resource.Type.Local, !1, !0);
  });
}, (I = _dependency.sp.Skeleton.prototype).loadRemoteSkeleton = function (e) {
  var t = this;
  null != e.isNeedCache && null != e.isNeedCache || (e.isNeedCache = !0), App.asset.remote.loadSkeleton(e.path, e.name, e.isNeedCache).then(function (n) {
    _dependency2.setSkeletonSkeletonData(t, e, n, _dependency3.Resource.Type.Remote);
  });
}, I.loadSkeleton = function (e) {
  var t = this,
    n = e.url,
    o = _dependency2.getBundle(e);
  App.cache.getCacheByAsync(n, _dependency.sp.SkeletonData, o).then(function (n) {
    _dependency2.setSkeletonSkeletonData(t, e, n);
  });
}, (I = _dependency.Button.prototype).loadButton = function (e) {
  _dependency2.setButtonSpriteFrame(this, e);
}, _dependency.dragonBones.ArmatureDisplay.prototype.loadDisplay = function (e) {
  _dependency2.loadDragonDisplay(this, e);
}, (I = _dependency.ParticleSystem2D.prototype).loadFile = function (e) {
  var t = this,
    n = e.url,
    o = _dependency2.getBundle(e);
  App.cache.getCacheByAsync(n, _dependency.ParticleAsset, o).then(function (n) {
    _dependency2.setParticleSystemFile(t, e, n);
  });
}, (I = _dependency.Label.prototype).forceDoLayout = function () {
  this._forceUpdateRenderData ? this._forceUpdateRenderData() : this._updateRenderData ? this._updateRenderData(!0) : this.updateRenderData && this.updateRenderData(!0);
}, I.loadFont = function (e) {
  var t = e.font,
    n = this,
    o = _dependency2.getBundle(e);
  App.cache.getCacheByAsync(t, _dependency.Font, o).then(function (t) {
    _dependency2.setLabelFont(n, e, t);
  });
}, window.createPrefab = function (e) {
  _dependency2.createNodeWithPrefab(e);
}, window.loadDirRes = function (e) {
  _dependency2._loadDirRes(e);
}, window.loadRes = function (e) {
  _dependency2._loadRes(e);
};
var _ = window.cc;
_.updateZIndex = function (e) {
  e.children.length > 1 && (e.children.sort(function (e, t) {
    return e.zIndex - t.zIndex;
  }), e._updateSiblingIndex());
}, Reflect.defineProperty(_dependency.Node.prototype, "zIndex", {
  get: function () {
    var e = this;
    return "number" == typeof e._zIndex || (e._zIndex = 0), e._zIndex;
  },
  set: function (e) {
    this._zIndex = e;
  }
}), _dependency.cclegacy._RF.pop();
