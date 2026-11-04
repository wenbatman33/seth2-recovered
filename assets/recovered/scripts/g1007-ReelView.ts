// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/ReelView.js
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Decorators";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./g1007-GameData";
import * as __dependency_5 from "./g1007-GameEvent";
var __export_0;
export { __export_0 as ReelView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ReelView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, s, r, a, l, c, p, u, h;
var S, f, m, _, T, F, d, R, v, O, A;
__dependency_1.cclegacy._RF.push({}, "cab08JbZ1RMvK1jCIvszZBW", "ReelView", void 0);
var E = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("ReelView", (S = E("Hades_ReelView"), f = __dependency_2.inject("reelFrame", __dependency_1.sp.Skeleton), m = __dependency_2.inject("xtraOnSpine", __dependency_1.sp.Skeleton), _ = __dependency_2.inject("fullSpine", __dependency_1.sp.Skeleton), T = __dependency_2.inject("transitionSpine", __dependency_1.sp.Skeleton), S((R = __dependency_0.applyDecoratedDescriptor((d = function (t) {
  function e() {
    for (var e, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "reelFrame", R, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "xtraOnSpine", v, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "fullSpine", O, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "transitionSpine", A, __dependency_0.assertThisInitialized(e)), e;
  }
  __dependency_0.inheritsLoose(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {
    this.transitionSpine.clearTracks(), this.transitionSpine.setToSetupPose(), this.transitionSpine.node.active = !1;
  }, r.showFGIntroStep01 = function () {
    var t = this;
    this.transitionSpine.node.active = !0, this.transitionSpine.clearTracks(), this.transitionSpine.setToSetupPose(), this.transitionSpine.setAnimation(0, "transition_01", !1), this.transitionSpine.setCompleteListener(function () {
      t.transitionSpine.setCompleteListener(null), dispatch(__dependency_5.GameEvent.FG_INTRO_01_END);
    });
  }, r.showFGIntroStep02 = function () {
    var t = this;
    this.transitionSpine.clearTracks(), this.transitionSpine.setToSetupPose(), this.transitionSpine.setAnimation(0, "transition_02", !1), this.transitionSpine.setCompleteListener(function () {
      t.transitionSpine.setCompleteListener(null), dispatch(__dependency_5.GameEvent.FG_INTRO_02_END), t.transitionSpine.node.active = !1;
    });
  }, r.showFGIntroStep03 = function () {
    var t = this;
    this.transitionSpine.node.active = !0, this.transitionSpine.clearTracks(), this.transitionSpine.setToSetupPose(), this.transitionSpine.setAnimation(0, "transition_03", !1), this.transitionSpine.setCompleteListener(function () {
      t.transitionSpine.setCompleteListener(null), dispatch(__dependency_5.GameEvent.FG_INTRO_03_END);
    });
  }, r.showFGIntroStep04 = function () {
    var t = this;
    this.transitionSpine.clearTracks(), this.transitionSpine.setToSetupPose(), this.transitionSpine.setAnimation(0, "transition_04", !1), this.transitionSpine.setCompleteListener(function () {
      t.transitionSpine.setCompleteListener(null), t.scheduleOnce(function () {
        dispatch(__dependency_5.GameEvent.FG_INTRO_04_END), t.transitionSpine.node.active = !1;
      }, 1);
    });
  }, r.setReelSpine = function (t) {
    var e = t ? "mg_normal" : "fg_loop";
    this.reelFrame.clearTracks(), this.reelFrame.setToSetupPose(), this.reelFrame.setAnimation(1, e, !0);
  }, r.showFullComboAnim = function () {
    var t = this,
      e = this.data.checkIsMG() ? "mg" : "fg";
    this.fullSpine.node.active = !0, this.fullSpine.clearTracks(), this.fullSpine.setToSetupPose(), this.fullSpine.setAnimation(0, e, !1), this.fullSpine.setCompleteListener(function () {
      t.fullSpine.node.active = !1;
    });
  }, r.showXtraOnAnim = function () {
    var t = this;
    this.xtraOnSpine.node.active = !0, this.xtraOnSpine.clearTracks(), this.xtraOnSpine.setToSetupPose(), this.xtraOnSpine.setAnimation(0, "bet_up", !1), this.reelFrame.clearTracks(), this.reelFrame.setToSetupPose(), this.reelFrame.setAnimation(0, "mg_bet_up", !1), this.reelFrame.setCompleteListener(function () {
      t.reelFrame.setCompleteListener(null), t.reelFrame.clearTracks(), t.reelFrame.setToSetupPose(), t.reelFrame.setAnimation(0, "mg_loop", !0);
    });
  }, r.setNormalReel = function () {
    this.xtraOnSpine.node.active = !1, this.reelFrame.clearTracks(), this.reelFrame.setToSetupPose(), this.reelFrame.setAnimation(0, "mg_normal", !0);
  }, r.handleShowFullReel = function () {
    this.showFullComboAnim(), this.scheduleOnce(function () {
      dispatch(__dependency_5.GameEvent.CREATE_GROUP_SYMBOLS_WITHOUT_HINT);
    }, 1.55);
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(__dependency_5.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.setReelSpine(e.data);
    }), this.on(__dependency_5.GameEvent.SHOW_FULL_REEL_ANIM, function () {
      t.handleShowFullReel();
    }), this.on(__dependency_5.GameEvent.SHOW_REEL_XTR_BET_ON, function () {
      t.showXtraOnAnim();
    }), this.on(__dependency_5.GameEvent.SET_MG_REEL_NORMAL, function () {
      t.setNormalReel();
    }), this.on(__dependency_5.GameEvent.PARSER_INIT_COMPLETED, function () {
      t.setReelSpine(!0);
    }), this.on(__dependency_5.GameEvent.SHOW_FG_INTRO_ALERT, function () {
      t.showFGIntroStep01();
    }), this.on(__dependency_5.GameEvent.FG_INTRO_02_START, function () {
      t.showFGIntroStep02();
    }), this.on(__dependency_5.GameEvent.FG_INTRO_03_START, function () {
      t.showFGIntroStep03();
    }), this.on(__dependency_5.GameEvent.FG_INTRO_04_START, function () {
      t.showFGIntroStep04();
    });
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_4.default);
    }
  }]), e;
}(__dependency_3.default)).prototype, "reelFrame", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = __dependency_0.applyDecoratedDescriptor(d.prototype, "xtraOnSpine", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = __dependency_0.applyDecoratedDescriptor(d.prototype, "fullSpine", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), A = __dependency_0.applyDecoratedDescriptor(d.prototype, "transitionSpine", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = d)) || F));
__dependency_1.cclegacy._RF.pop();
