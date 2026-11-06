// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as StaticData };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "StaticData":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, r, t, i, u, a, c;
_dependency2.cclegacy._RF.push({}, "dbf06y9d8pMVL7YY5GhUgDW", "StaticData", void 0);
var o = _publish("StaticData", function () {
  function e() {}
  return e.preload = function () {
    var n = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function n() {
      var r, u, a, c, o;
      return _dependency.regeneratorRuntime().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return");
          case 2:
            return n.next = 4, e.loadBundle(e.BUNDLE_NAME);
          case 4:
            return r = n.sent, n.next = 7, e.loadDir(r, e.MOCK_DIR);
          case 7:
            for (u = n.sent, e._cache.clear(), a = _dependency.createForOfIteratorHelperLoose(u); !(c = a()).done;) o = c.value, e._cache.set(o.name, o.json);
            e._loaded = !0;
          case 11:
          case "end":
            return n.stop();
        }
      }, n);
    }));
    return function () {
      return n.apply(this, arguments);
    };
  }(), e.release = function () {
    e._cache.clear(), e._loaded = !1;
  }, e.has = function (n) {
    return e._cache.has(n);
  }, e.get = function (n) {
    return e.require(n);
  }, e.require = function (n) {
    var r = e._cache.get(n);
    if (!r) throw new Error('[StaticData] mock "' + n + '" 未載入，請先呼叫 StaticData.preload()');
    return r;
  }, e.loadBundle = function (e) {
    return new Promise(function (n, r) {
      _dependency2.assetManager.loadBundle(e, function (e, t) {
        e ? r(e) : n(t);
      });
    });
  }, e.loadDir = function (e, n) {
    return new Promise(function (r, t) {
      e.loadDir(n, _dependency2.JsonAsset, function (e, n) {
        e ? t(e) : r(n);
      });
    });
  }, _dependency.createClass(e, null, [{
    key: "initialData",
    get: function () {
      return e.require("initialData");
    }
  }, {
    key: "emptySpin",
    get: function () {
      return e.require("emptySpin");
    }
  }, {
    key: "normalSpin",
    get: function () {
      return e.require("normalSpin");
    }
  }, {
    key: "freeSpin",
    get: function () {
      return e.require("freeSpin");
    }
  }, {
    key: "freeSpinRetrigger",
    get: function () {
      return e.require("freeSpinRetrigger");
    }
  }, {
    key: "freeSpinWinNoLine",
    get: function () {
      return e.require("freeSpinWinNoLine");
    }
  }, {
    key: "bigWin",
    get: function () {
      return e.require("bigWin");
    }
  }, {
    key: "superWin",
    get: function () {
      return e.require("superWin");
    }
  }, {
    key: "megaWin",
    get: function () {
      return e.require("megaWin");
    }
  }, {
    key: "ultraWin",
    get: function () {
      return e.require("ultraWin");
    }
  }, {
    key: "legendaryWin",
    get: function () {
      return e.require("legendaryWin");
    }
  }, {
    key: "luckyWealth",
    get: function () {
      return e.require("luckyWealth");
    }
  }, {
    key: "listenFreeSpinEnter",
    get: function () {
      return e.require("listenFreeSpinEnter");
    }
  }, {
    key: "listenFreeSpinMiss",
    get: function () {
      return e.require("listenFreeSpinMiss");
    }
  }, {
    key: "fullCombo",
    get: function () {
      return e.require("fullCombo");
    }
  }, {
    key: "replayLuckyBigWin",
    get: function () {
      return e.require("replayLuckyBigWin");
    }
  }]), e;
}());
o.BUNDLE_NAME = "g1011", o.MOCK_DIR = "debug/mock", o._cache = new Map(), o._loaded = !1, _dependency2.cclegacy._RF.pop();
