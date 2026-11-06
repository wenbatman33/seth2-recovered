// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as ResourceFileSizeChecker };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ResourceFileSizeChecker":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, r, n, i, a, s, o, u, c, l, p, f;
var h, d, v, x, k;
_dependency2.cclegacy._RF.push({}, "6a9ce9N5iRLL7Q38g92vIfv", "ResourceFileSizeChecker", void 0);
var y = _dependency2._decorator.ccclass,
  F = _dependency2._decorator.property,
  b = _dependency2._decorator.executeInEditMode;
_publish("ResourceFileSizeChecker", (h = y("ResourceFileSizeChecker"), d = F({
  tooltip: "是否在編輯器狀態下執行"
}), h(v = b((k = _dependency.applyDecoratedDescriptor((x = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
    return t = Reflect.construct(e, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "runInEditor", k, _dependency.assertThisInitialized(t)), t;
  }
  _dependency.inheritsLoose(t, e);
  var u = t.prototype;
  return u.start = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (this.runInEditor && "undefined" != typeof Editor) {
              e.next = 2;
              break;
            }
            return e.abrupt("return");
          case 2:
            return e.next = 4, this.checkFileSize(this.node);
          case 4:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), u.checkFileSize = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      var r, n, i, a, s, u, c, l, h;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            r = [], this.collectAllNodes(t, r), n = 0, i = 0, a = r;
          case 4:
            if (!(i < a.length)) {
              e.next = 23;
              break;
            }
            if (s = a[i], !(u = s.getComponent(_dependency2.Sprite)) || !u.spriteFrame) {
              e.next = 13;
              break;
            }
            return e.next = 10, this.getAssetFileSizeFromSpriteFrame(u.spriteFrame);
          case 10:
            c = e.sent, console.log("節點：" + s.name + "，圖片檔案大小：" + this.formatBytes(c)), n += c;
          case 13:
            if (!(l = s.getComponent(_dependency2.sp.Skeleton)) || !l.skeletonData) {
              e.next = 20;
              break;
            }
            return e.next = 17, this.getAssetFileSizeFromSkeletonData(l.skeletonData);
          case 17:
            h = e.sent, console.log("節點：" + s.name + "，骨架檔案大小：" + this.formatBytes(h)), n += h;
          case 20:
            i++, e.next = 4;
            break;
          case 23:
            console.log("總檔案大小：" + this.formatBytes(n));
          case 24:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), u.collectAllNodes = function (e, t) {
    t.push(e);
    for (var r, n = _dependency.createForOfIteratorHelperLoose(e.children); !(r = n()).done;) {
      var i = r.value;
      this.collectAllNodes(i, t);
    }
  }, u.getAssetFileSizeFromSpriteFrame = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      var r, n;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (r = t.texture) {
              e.next = 3;
              break;
            }
            return e.abrupt("return", 0);
          case 3:
            return n = r._uuid, e.next = 6, this.getFileSizeByUuid(n);
          case 6:
            return e.abrupt("return", e.sent);
          case 7:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), u.getAssetFileSizeFromSkeletonData = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      var r, n, i, s, u, c;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (r = 0, !t.textures) {
              e.next = 12;
              break;
            }
            n = _dependency.createForOfIteratorHelperLoose(t.textures);
          case 3:
            if ((i = n()).done) {
              e.next = 12;
              break;
            }
            return s = i.value, u = s._uuid, e.t0 = r, e.next = 9, this.getFileSizeByUuid(u);
          case 9:
            r = e.t0 += e.sent;
          case 10:
            e.next = 3;
            break;
          case 12:
            if (!(c = t._uuid)) {
              e.next = 18;
              break;
            }
            return e.t1 = r, e.next = 17, this.getFileSizeByUuid(c);
          case 17:
            r = e.t1 += e.sent;
          case 18:
            return e.abrupt("return", r);
          case 19:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), u.getFileSizeByUuid = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(t) {
      var r, n, i;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (t) {
              e.next = 2;
              break;
            }
            return e.abrupt("return", 0);
          case 2:
            return e.next = 4, Editor.Message.request("asset-db", "query-path", t);
          case 4:
            if (r = (r = e.sent).split("@")[0]) {
              e.next = 8;
              break;
            }
            return e.abrupt("return", 0);
          case 8:
            return n = require("fs"), e.prev = 9, i = n.statSync(r), e.abrupt("return", i.size);
          case 14:
            return e.prev = 14, e.t0 = e.catch(9), console.warn("無法取得檔案大小：" + r, e.t0), e.abrupt("return", 0);
          case 18:
          case "end":
            return e.stop();
        }
      }, e, null, [[9, 14]]);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), u.formatBytes = function (e, t) {
    if (void 0 === t && (t = 2), 0 === e) return "0 Bytes";
    var r = t < 0 ? 0 : t,
      n = Math.floor(Math.log(e) / Math.log(1024));
    return parseFloat((e / Math.pow(1024, n)).toFixed(r)) + " " + ["Bytes", "KB", "MB", "GB", "TB"][n];
  }, t;
}(_dependency2.Component)).prototype, "runInEditor", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), v = x)) || v) || v));
_dependency2.cclegacy._RF.pop();
