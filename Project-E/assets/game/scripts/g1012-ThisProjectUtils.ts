// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as delay };
var _export2;
export { _export2 as ThisProjectUtils };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "delay":
      _export = value;
      break;
    case "ThisProjectUtils":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, t, r, i, u;
_publish("delay", function (e) {
  if (e <= 0) return new Promise(function (e) {
    return e;
  });
  return new Promise(function (n) {
    return setTimeout(n, 1e3 * e);
  });
}), _dependency2.cclegacy._RF.push({}, "a5bc85cHuNHGZiHe1fnXv1y", "ThisProjectUtils", void 0);
_publish("ThisProjectUtils", function () {
  function e() {}
  return e.playSpineAnimationPromise = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n, r, i, u) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return void 0 === i && (i = null), void 0 === u && (u = null), e.abrupt("return", new Promise(function (e) {
              n.clearTracks();
              n.setAnimation(0, r, !1);
              n.timeScale = 1, n.setCompleteListener(null), n.setEventListener(function (e, n) {
                i && i(e, n);
              }), n.setCompleteListener(function () {
                u && u(), n.setEventListener(null), n.setCompleteListener(null), e();
              });
            }));
          case 3:
          case "end":
            return e.stop();
        }
      }, e);
    }));
    return function (n, t, r, i) {
      return e.apply(this, arguments);
    };
  }(), e.playSpineAnimation = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n, r, i, u, o) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            void 0 === i && (i = !1), void 0 === u && (u = null), void 0 === o && (o = null), n.clearTracks(), n.setAnimation(0, r, i), n.timeScale = 1, n.setEventListener(function (e, n) {
              o && o(e, n);
            }), i ? n.setCompleteListener(null) : n.setCompleteListener(function () {
              n.timeScale = 0, n.setEventListener(null), n.setCompleteListener(null), u && u();
            });
          case 8:
          case "end":
            return e.stop();
        }
      }, e);
    }));
    return function (n, t, r, i, u) {
      return e.apply(this, arguments);
    };
  }(), e.tweenPromise = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n, r, o, s) {
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", new Promise(function (e) {
              var t;
              _dependency2.Tween.stopAllByTarget(n);
              var l = _dependency2.tween(n).bindNodeState(false);
              null != s && s.delay && l.delay(s.delay), l.to(r, o, {
                easing: null != (t = null == s ? void 0 : s.easing) ? t : "linear"
              }).call(function () {
                null == s || null == s.onComplete || s.onComplete(), e();
              }).start();
            }));
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }));
    return function (n, t, r, i) {
      return e.apply(this, arguments);
    };
  }(), e;
}());
_dependency2.cclegacy._RF.pop();
