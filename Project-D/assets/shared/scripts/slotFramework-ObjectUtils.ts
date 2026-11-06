// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as ObjectUtils };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ObjectUtils":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, r;
_dependency2.cclegacy._RF.push({}, "282dfDAAWJDU6zMojlUJmiR", "ObjectUtils", void 0);
_publish("ObjectUtils", function () {
  function e() {}
  return e.isObject = function (e) {
    return "[object Object]" === Object.prototype.toString.call(e);
  }, e.isEmpty = function (e) {
    return 0 === Object.keys(e).length;
  }, e.copyTo = function (e, t) {
    for (var n in e) t[n] = e[n];
  }, e.assign = function (e, t) {
    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
    return "function" == typeof Object.assign ? Object.assign.apply(null, [e, t].concat(r)) : ([t].concat(r).filter(function (e) {
      return e;
    }).map(function (t) {
      Object.keys(t).map(function (n) {
        e[n] = t[n];
      });
    }), e);
  }, e.deepExtend = function (e, t) {
    for (var n = this, r = {}, o = function (e) {
        Object.keys(e).forEach(function (t) {
          n.isObject(e[t]) ? r[t] = n.deepExtend(r[t] || {}, e[t]) : r[t] = e[t];
        });
      }, c = arguments.length, i = new Array(c > 2 ? c - 2 : 0), a = 2; a < c; a++) i[a - 2] = arguments[a];
    return [e, t].concat(i).filter(function (e) {
      return e;
    }).forEach(function (e) {
      return o(e);
    }), r;
  }, e.clone = function (e) {
    if (null == e || "object" != typeof e) return e;
    if (Array.isArray(e)) {
      for (var n, r = [], o = _dependency.createForOfIteratorHelperLoose(e); !(n = o()).done;) {
        var c = n.value;
        r.push(this.clone(c));
      }
      return r;
    }
    if (e instanceof Map) {
      for (var i, a = new Map(), f = _dependency.createForOfIteratorHelperLoose(e.entries()); !(i = f()).done;) {
        var u = i.value,
          s = u[0],
          l = u[1],
          p = this.clone(s),
          v = this.clone(l);
        a.set(p, v);
      }
      return a;
    }
    if (e instanceof Set) {
      for (var j, y = new Set(), O = _dependency.createForOfIteratorHelperLoose(e.values()); !(j = O()).done;) {
        var b = j.value,
          h = this.clone(b);
        y.add(h);
      }
      return y;
    }
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof RegExp) return new RegExp(e);
    for (var d = Object.create(Object.getPrototypeOf(e)), g = 0, w = Object.keys(e); g < w.length; g++) {
      var A = w[g];
      d[A] = this.clone(e[A]);
    }
    return d;
  }, e.entries = function (e) {
    if ("function" == typeof Object.entries) return Object.entries.call(null, e);
    for (var t = Object.keys(e), n = t.length, r = new Array(n); n--;) r[n] = [t[n], e[t[n]]];
    return r;
  }, e.flattenObject = function (e, t) {
    void 0 === t && (t = "");
    var r = {};
    for (var o in e) if (e.hasOwnProperty(o)) {
      var c = t ? t + "." + o : o;
      if ("object" != typeof e[o] || Array.isArray(e[o])) r[c] = e[o];else {
        var i = this.flattenObject(e[o], c);
        r = _dependency.extends({}, r, i);
      }
    }
    return r;
  }, e.diffObjects = function (e, t) {
    var n = {};
    for (var r in e) e.hasOwnProperty(r) && t.hasOwnProperty(r) && (e[r] !== t[r] && (n[r] = t[r]), void 0 === e[r] && (n[r] = t[r]));
    return n;
  }, e;
}());
_dependency2.cclegacy._RF.pop();
