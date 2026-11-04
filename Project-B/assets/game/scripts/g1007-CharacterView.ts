// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/CharacterView.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-Decorators";
import * as __dependency_3 from "../../shared/scripts/main-EventComponent";
import * as __dependency_4 from "./g1007-GameConfigModel";
import * as __dependency_5 from "./g1007-GameData";
import * as __dependency_6 from "./g1007-GameEvent";
var __export_0;
export { __export_0 as CharacterView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CharacterView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, r, a, i, c, o, s, u, h, p, l, f, S, d;
var _, m, A, v, w;
__dependency_1.cclegacy._RF.push({}, "309afWB/BFPj4VH1mGu3D08", "CharacterView", void 0);
var T = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("CharacterView", (_ = T("Hades_CharacterView"), m = __dependency_2.inject("character", __dependency_1.sp.Skeleton), _((w = __dependency_0.applyDecoratedDescriptor((v = function (t) {
  function e() {
    for (var e, n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
    return e = Reflect.construct(t, [this].concat(i).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "characterSpine", w, __dependency_0.assertThisInitialized(e)), e;
  }
  __dependency_0.inheritsLoose(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.init = function () {}, s.showTransAnimation = function () {
    var t = this;
    return new Promise(function (e) {
      var n = t.data.getData().newGroupSymbols.reduce(function (t, e) {
          return Math.max(t, e.size);
        }, 0),
        r = 5 === n ? "trans_4" : "trans_" + n,
        a = 4 === n ? __dependency_4.EBTM.CHAR_TRANS_4X4 : __dependency_4.EBTM.CHAR_TRANS_2X2_3X3;
      t.characterSpine.clearTracks(), t.characterSpine.setToSetupPose(), t.characterSpine.setAnimation(0, r, !1), t.characterSpine.setCompleteListener(function () {
        t.characterSpine.setAnimation(0, "normal", !0), t.characterSpine.setCompleteListener(null);
      }), dispatch(__dependency_6.GameEvent.PLAY_BTM, {
        data: {
          url: a
        }
      }), t.scheduleOnce(e, 1.5);
    });
  }, s.showStrikeAnimation = function () {
    var t = this;
    return new Promise(function (e) {
      t.characterSpine.clearTracks(), t.characterSpine.setToSetupPose(), t.characterSpine.setAnimation(0, "strike", !1), t.characterSpine.setCompleteListener(function () {
        t.characterSpine.setAnimation(0, "normal", !0), t.characterSpine.setCompleteListener(null);
      }), dispatch(__dependency_6.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_4.EBTM.CHAR_HIT_REEL
        }
      }), t.scheduleOnce(e, 1.1);
    });
  }, s.handleShowTrans = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.next = 2, this.showTransAnimation();
          case 2:
            dispatch(__dependency_6.GameEvent.CREATE_GROUP_SYMBOLS);
          case 3:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), s.handleShowStrike = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return e = .3, t.next = 3, this.showStrikeAnimation();
          case 3:
            dispatch(__dependency_6.GameEvent.SHAKE_BOARD_VIEW), dispatch(__dependency_6.GameEvent.SHOW_CHAIN_SHAKE_ANIM), this.scheduleOnce(function () {
              dispatch(__dependency_6.GameEvent.MOVE_TO_SPECIFY_MULTIPLE);
            }, e);
          case 6:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), s.setData = function (t) {}, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {
    var t = this;
    this.on(__dependency_6.GameEvent.SHOW_CH_TRANS_ANIM, function () {
      t.handleShowTrans();
    }), this.on(__dependency_6.GameEvent.SHOW_CH_STRIKE_ANIM, function () {
      t.handleShowStrike();
    });
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_5.default);
    }
  }]), e;
}(__dependency_3.default)).prototype, "characterSpine", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), A = v)) || A));
__dependency_1.cclegacy._RF.pop();
