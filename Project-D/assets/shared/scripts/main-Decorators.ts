// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as abstract };
var _export2;
export { _export2 as inject };
var _export3;
export { _export3 as registerEntry };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "abstract":
      _export = value;
      break;
    case "inject":
      _export2 = value;
      break;
    case "registerEntry":
      _export3 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, r, o, c, a;
_publish({
  abstract: function () {
    return function (e) {
      e.prototype.__abstract__ = !0;
    };
  },
  inject: function (e, t, o) {
    return function (c, u) {
      if (c instanceof _dependency.Component) {
        var s = c;
        if (!Reflect.has(c, i)) {
          var l = s.onLoad;
          s.onLoad = function () {
            var e = this,
              t = Reflect.get(e, i),
              n = function (n) {
                var o = Reflect.get(t, n),
                  c = n.split("__")[0];
                Reflect.get(e, o.member) && e._className != c || Reflect.defineProperty(e, o.member, {
                  enumerable: !0,
                  configurable: !0,
                  get: function () {
                    var t = e.node;
                    if (o.root) {
                      var c = "__" + o.root.replace(/\//g, "_");
                      _dependency.isValid(e[c]) || (e[c] = f(o.root, t, _dependency.Node)), t = e[c];
                    }
                    return _dependency.isValid(e[n]) || (e[n] = f(o.path, t, o.type)), e[n];
                  },
                  set: function (t) {
                    e[n] = t;
                  }
                });
              };
            for (var o in t) n(o);
            l && Reflect.apply(l, this, arguments);
          }, Reflect.defineProperty(c, i, {
            value: {}
          });
        }
        var _ = {
            path: e,
            type: t,
            member: u,
            root: o
          },
          p = c.name + "__" + u,
          v = Reflect.get(c, i);
        Reflect.defineProperty(v, p, {
          value: _,
          enumerable: !0
        });
      } else Log.e("無法注入，僅支持 Component 組件");
    };
  },
  registerEntry: function (e, t, n) {
    return function (r) {
      r.__classname__ = e, r.bundle = t, App.entryManager.register(r, n);
    };
  }
}), _dependency.cclegacy._RF.push({}, "79becuRyZJMkYDHY8CyWds7", "Decorators", void 0);
var i = "_FIND_OPTIONS_";
function f(e, t, r) {
  var a = _dependency.find(e, t);
  return _dependency.js.isChildClassOf(r, _dependency.Component) ? null == a ? void 0 : a.getComponent(r) : a;
}
_dependency.cclegacy._RF.pop();
