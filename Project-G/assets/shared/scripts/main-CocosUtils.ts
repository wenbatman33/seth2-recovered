// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-Resource";
import * as _dependency3 from "./main-UIView";
import * as _dependency4 from "./main-Enums";
import * as _dependency5 from "./main-Macros";
var _export;
export { _export as _loadDirRes };
var _export2;
export { _export2 as _loadRes };
var _export3;
export { _export3 as addExtraLoadResource };
var _export4;
export { _export4 as addRemoteLoadResource };
var _export5;
export { _export5 as createNodeWithPrefab };
var _export6;
export { _export6 as getBundle };
var _export7;
export { _export7 as loadDragonDisplay };
var _export8;
export { _export8 as setButtonSpriteFrame };
var _export9;
export { _export9 as setLabelFont };
var _export0;
export { _export0 as setParticleSystemFile };
var _export1;
export { _export1 as setSkeletonSkeletonData };
var _export10;
export { _export10 as setSpriteSpriteFrame };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "_loadDirRes":
      _export = value;
      break;
    case "_loadRes":
      _export2 = value;
      break;
    case "addExtraLoadResource":
      _export3 = value;
      break;
    case "addRemoteLoadResource":
      _export4 = value;
      break;
    case "createNodeWithPrefab":
      _export5 = value;
      break;
    case "getBundle":
      _export6 = value;
      break;
    case "loadDragonDisplay":
      _export7 = value;
      break;
    case "setButtonSpriteFrame":
      _export8 = value;
      break;
    case "setLabelFont":
      _export9 = value;
      break;
    case "setParticleSystemFile":
      _export0 = value;
      break;
    case "setSkeletonSkeletonData":
      _export1 = value;
      break;
    case "setSpriteSpriteFrame":
      _export10 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, a, l, r, o, c, i, s, p, u, f, d, m;
function v(e, t) {
  var n = App.uiManager;
  e == n.retainMemory ? n.retainMemory.addLocal(t) : e && e instanceof _dependency3.default ? n.addLocal(t, e.className) : n.garbage.addLocal(t);
}
function y(e, t) {
  var n = App.uiManager;
  e == n.retainMemory ? n.retainMemory.addRemote(t) : e && e instanceof _dependency3.default ? n.addRemote(t, e.className) : n.garbage.addRemote(t);
}
function g(e) {
  var t = e.bundle;
  return null != e.bundle && null != e.bundle || (t = _dependency5.Macro.BUNDLE_RESOURCES, e.view && (t = e.view.bundle)), t;
}
function w(e) {
  return !!(_dependency.isValid(e) && e.node && _dependency.isValid(e.node));
}
function h(e, t, l, r, o, c, i, s) {
  void 0 === s && (s = !1), o && w(e) ? function (e, t, l, r, o, c, i, s) {
    if (!i) {
      var p = new _dependency2.Resource.Info();
      p.url = t, p.type = _dependency.SpriteFrame, p.data = r, p.bundle = s, v(e, p);
    }
    if (r && w(l)) {
      var f = l[o];
      try {
        var d = _dependency.isValid(r) ? r : null;
        d && (l[o] = d), c && c(o, d);
      } catch (e) {
        var m = _dependency.isValid(f) ? f : null;
        l[o] = m, c && c(o, null), Log.e(t + " : " + (e || "replace spriteframe error"));
      }
    } else c && w(l) && c(o, r);
  }(l, r, e, o, t, c, s, i) : c && w(e) && c(t, o);
}
function A(e, t, a, l, r, o) {
  l && ("string" == typeof l ? (l += "/spriteFrame", App.cache.getCacheByAsync(l, _dependency.SpriteFrame, o).then(function (n) {
    h(e, t, a, l, n, r, o);
  })) : App.cache.getSpriteFrameByAsync(l.urls, l.key, a, v, o).then(function (n) {
    n && n.isTryReload || h(e, t, a, n.url, n.spriteFrame, r, o, !0);
  }));
}
_publish({
  _loadDirRes: function (e) {
    var t = g(e),
      n = App.cache.get(t, e.url);
    App.asset.loadDir(t, e.url, e.type, e.onProgress, function (a) {
      if (!n) {
        var l = new _dependency2.Resource.Info();
        l.url = e.url, l.type = e.type, l.data = a.data, l.bundle = t, v(e.view, l);
      }
      e.onComplete && e.onComplete(a);
    });
  },
  _loadRes: function (e) {
    var t = g(e),
      n = App.cache.get(t, e.url);
    App.asset.load(t, e.url, e.type, e.onProgress, function (a) {
      if (!n) {
        var l = new _dependency2.Resource.Info();
        l.url = e.url, l.type = e.type, l.data = a.data, l.bundle = t, v(e.view, l);
      }
      e.onComplete && e.onComplete(a);
    });
  },
  addExtraLoadResource: v,
  addRemoteLoadResource: y,
  createNodeWithPrefab: function (e) {
    var t = e.url,
      n = g(e),
      a = App.cache.get(n, t);
    App.cache.getCacheByAsync(t, _dependency.Prefab, n).then(function (t) {
      if (!a) {
        var n = new _dependency2.Resource.Info();
        n.url = e.url, n.type = _dependency.Prefab, n.data = t, n.bundle = g(e), v(e.view, n);
      }
      if (t && w(e.view) && e.complete) {
        var l = _dependency.instantiate(t);
        e.complete(l);
      } else w(e.view) && e.complete && e.complete(null);
    });
  },
  getBundle: g,
  loadDragonDisplay: function (e, t) {
    var n = g(t);
    App.cache.getCacheByAsync(t.assetUrl, _dependency.dragonBones.DragonBonesAsset, n).then(function (a) {
      if (a) {
        var l = new _dependency2.Resource.Info();
        l.url = t.assetUrl, l.type = _dependency.dragonBones.DragonBonesAsset, l.data = a, l.bundle = g(t), v(t.view, l), App.cache.getCacheByAsync(t.atlasUrl, _dependency.dragonBones.DragonBonesAtlasAsset, n).then(function (n) {
          if (n) {
            if (_dependency.sys.isBrowser) {
              var l = new _dependency2.Resource.Info();
              l.url = t.atlasUrl, l.type = _dependency.dragonBones.DragonBonesAtlasAsset, l.data = n, l.bundle = g(t), v(t.view, l);
            }
            e.dragonAsset = a, e.dragonAtlasAsset = n, t.complete && t.complete(a, n);
          } else t.complete && t.complete(a, null);
        });
      } else t.complete && t.complete(null, null);
    });
  },
  setButtonSpriteFrame: function (e, t) {
    var n = g(t);
    A(e, _dependency4.ButtonSpriteType.Norml, t.view, t.normalSprite, t.complete, n), A(e, _dependency4.ButtonSpriteType.Pressed, t.view, t.pressedSprite, t.complete, n), A(e, _dependency4.ButtonSpriteType.Hover, t.view, t.hoverSprite, t.complete, n), A(e, _dependency4.ButtonSpriteType.Disable, t.view, t.disabledSprite, t.complete, n);
  },
  setLabelFont: function (e, t, n) {
    var l = new _dependency2.Resource.Info();
    if (l.url = t.font, l.type = _dependency.Font, l.data = n, l.bundle = g(t), v(t.view, l), n && w(e)) {
      var o = e.font;
      try {
        var c = _dependency.isValid(n) ? n : null;
        c && (e.font = c), t.complete && t.complete(c);
      } catch (n) {
        var i = _dependency.isValid(o) ? o : null;
        e.font = i, t.complete && t.complete(null), Log.e(t.font + " : " + (n || "replace font error"));
      }
    } else t.complete && w(e) && t.complete(n);
  },
  setParticleSystemFile: function (e, t, n) {
    var r = new _dependency2.Resource.Info();
    if (r.url = t.url, r.type = _dependency.ParticleAsset, r.data = n, r.bundle = g(t), v(t.view, r), n && w(e)) {
      var o = e.file;
      try {
        var c = _dependency.isValid(n) ? n : null;
        c && (e.file = c), t.complete && t.complete(c);
      } catch (n) {
        var i = _dependency.isValid(o) ? o : null;
        e.file = i, t.complete && t.complete(null), Log.e(t.url + " : " + (n || "replace file error"));
      }
    } else t.complete && w(e) && t.complete(n);
  },
  setSkeletonSkeletonData: function (e, t, n, l) {
    void 0 === l && (l = _dependency2.Resource.Type.Local);
    var r = "",
      c = !1;
    if (l == _dependency2.Resource.Type.Remote) {
      var i = t;
      r = i.path + "/" + i.name, c = !!i.retain;
    } else {
      r = t.url;
    }
    var s = new _dependency2.Resource.Info();
    s.url = r, s.type = _dependency.sp.SkeletonData, s.data = n, s.retain = c, s.bundle = g(t), l == _dependency2.Resource.Type.Remote ? (s.bundle = _dependency5.Macro.BUNDLE_REMOTE, y(t.view, s)) : v(t.view, s);
    if (n && w(e)) {
      var p = e.skeletonData;
      try {
        var f = _dependency.isValid(n) ? n : null;
        f && (e.skeletonData = f), t.complete && t.complete(f);
      } catch (n) {
        var d = _dependency.isValid(p) ? p : null;
        e.skeletonData = d, t.complete && t.complete(null), Log.e(r + " : " + (n || "replace skeletonData error"));
      }
    } else t.complete && w(e) && t.complete(n);
  },
  setSpriteSpriteFrame: function (e, t, l, r, o, c, i, s, p) {
    void 0 === i && (i = _dependency2.Resource.Type.Local);
    void 0 === s && (s = !1);
    void 0 === p && (p = !1);
    if (!p) {
      var f = new _dependency2.Resource.Info();
      f.url = t, f.type = _dependency.SpriteFrame, f.data = r, f.retain = s, f.bundle = c, i == _dependency2.Resource.Type.Remote ? y(e, f) : v(e, f);
    }
    if (r && w(l)) {
      var d = l.spriteFrame,
        m = _dependency.isValid(r) ? r : null;
      try {
        m && (l.spriteFrame = m), o && o(m);
      } catch (e) {
        var g = _dependency.isValid(d) ? d : null;
        l.spriteFrame = g, o && o(null), Log.e(t + " : " + (e || "replace spriteframe error"));
      }
    } else o && w(l) && o(r);
  }
}), _dependency.cclegacy._RF.push({}, "c5e498hvkpGm6BWGue9rQcW", "CocosUtils", void 0), _dependency.cclegacy._RF.pop();
