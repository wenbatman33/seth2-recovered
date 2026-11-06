// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1012-GameData";
import * as _dependency6 from "./g1012-GameEvent";
import * as _dependency7 from "./g1012-ThisProjectUtils";
import * as _dependency8 from "./g1012-GameConfigModel";
var _export;
export { _export as BackgroundView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BackgroundView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var n, e, i, a, o, r, s, c, l, u, p, f, g, m, S, B, T, h, d, A, _;
var E, M, v, y, I, P, R, b, C, N, G, w, L, F, k, D, O, z, U;
_dependency2.cclegacy._RF.push({}, "83e72N9BOdIbocPQwddl1iP", "BackgroundView", void 0);
var V,
  Y = _dependency2._decorator.ccclass;
_dependency2._decorator.property;
!function (t) {
  t.LOOP = "loop";
}(V || (V = {}));
_publish("BackgroundView", (E = Y("BackgroundView"), M = _dependency4.inject("mainContent", _dependency2.Node), v = _dependency4.inject("mainContent/mgBg", _dependency2.Sprite), y = _dependency4.inject("mainContent/mgBgSpine", _dependency2.sp.Skeleton), I = _dependency4.inject("mainContent/mgBatSpine01", _dependency2.sp.Skeleton), P = _dependency4.inject("mainContent/mgBatSpine02", _dependency2.sp.Skeleton), R = _dependency4.inject("freeContent", _dependency2.Node), b = _dependency4.inject("freeContent/fgBg", _dependency2.Sprite), C = _dependency4.inject("freeContent/fgBgSpine", _dependency2.sp.Skeleton), E((w = _dependency.applyDecoratedDescriptor((G = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var n, e = arguments.length, o = new Array(e), r = 0; r < e; r++) o[r] = arguments[r];
    return n = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "mainContent", w, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "mgBg", L, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "mgBgSpine", F, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "mgBatSpine01", k, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "mgBatSpine02", D, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "freeContent", O, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "fgBg", z, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "fgBgSpine", U, _dependency.assertThisInitialized(n)), n.isFeverTime = !1, n.isWaitSpin = !1, n;
  }
  _dependency.inheritsLoose(n, t);
  var r = n.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    this.removeEvents();
  }, r.init = function () {
    this.playMgBgSpine();
  }, r.increaseFgRemaining = function (t) {}, r.playBounceTween = function (t, n) {
    _dependency2.tween(t).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(1.5, 1.5, 1.5)
    }).delay(.01).to(.1, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        n && n();
      }
    }).start();
  }, r.changeModel = function (t) {
    this.mainContent.active = t, this.freeContent.active = !t;
  }, r.playMgBgSpine = function () {
    this.isFeverTime ? _dependency7.ThisProjectUtils.playSpineAnimation(this.mgBgSpine, "fevertime", !0) : _dependency7.ThisProjectUtils.playSpineAnimation(this.mgBgSpine, "loop", !0);
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(_dependency6.GameEvent.CHANGE_GAME_STYLE, function (n) {
      t.changeModel(n.data);
    }), this.on(_dependency6.GameEvent.UPDATE_FG_REMAINING, function (t) {}), this.on(_dependency6.GameEvent.PARSER_INIT_COMPLETED, function (n) {
      t.createRandomBat();
    }), this.on(_dependency6.GameEvent.INCREASE_FG_REMAINING, function (n) {
      t.increaseFgRemaining(n.complete);
    }), this.on(_dependency6.GameEvent.PARSER_REPLAY_COMPLETED, function (n) {
      t.isFeverTime = t.data.getData().definition.isLuckyMoment, t.isFeverTime ? dispatch(_dependency6.GameEvent.PLAY_BGM, {
        data: _dependency8.EBGM.FEVERTIME
      }) : dispatch(_dependency6.GameEvent.PLAY_BGM, {
        data: _dependency8.EBGM.MAINGAME
      }), t.playMgBgSpine();
    }), this.on(_dependency6.GameEvent.UPDATE_BAT_FEVERTIME_STATUS, function (n) {
      var e = 1 == n.data;
      t.isFeverTime !== e && (e ? dispatch(_dependency6.GameEvent.PLAY_BGM, {
        data: _dependency8.EBGM.FEVERTIME
      }) : dispatch(_dependency6.GameEvent.PLAY_BGM, {
        data: _dependency8.EBGM.MAINGAME
      })), t.isFeverTime = e, t.playMgBgSpine();
    }), this.on(_dependency6.GameEvent.START_SPIN, function (n) {
      t.isWaitSpin = !0;
    }), this.on(_dependency6.GameEvent.SHOW_TRANSITION_IN, function (n) {
      t.stopRandomBat();
    }), this.on(_dependency6.GameEvent.SHOW_TRANSITION_OUT, function (n) {
      t.createRandomBat();
    }), this.on(_dependency6.GameEvent.WAIT_SPIN_STATE, function (n) {
      t.isWaitSpin = !1;
    });
  }, r.removeEvents = function () {
    this.off(_dependency6.GameEvent.CHANGE_GAME_STYLE), this.off(_dependency6.GameEvent.UPDATE_FG_REMAINING), this.off(_dependency6.GameEvent.INCREASE_FG_REMAINING), this.off(_dependency6.GameEvent.UPDATE_BAT_FEVERTIME_STATUS), this.off(_dependency6.GameEvent.START_SPIN), this.off(_dependency6.GameEvent.WAIT_SPIN_STATE);
  }, r.createRandomBat = function () {
    var t = this,
      n = _dependency2.randomRangeInt(0, 2),
      e = function () {
        e = null;
        var n = _dependency2.randomRangeInt(3, 6);
        _dependency2.tween(t).bindNodeState(false).delay(n).call(function () {
          dispatch(_dependency6.GameEvent.STOP_BTM, {
            data: {
              url: _dependency8.EBTM.BTM_BATS
            }
          }), t.createRandomBat();
        }).start();
      };
    switch (n) {
      case 0:
        dispatch(_dependency6.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency8.EBTM.BTM_BATS
          }
        }), this.mgBatSpine01.node.active = !0, this.mgBatSpine02.node.active = !1, _dependency7.ThisProjectUtils.playSpineAnimationPromise(this.mgBatSpine01, "random_A", null, e);
        break;
      case 1:
        dispatch(_dependency6.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency8.EBTM.BTM_BATS
          }
        }), this.mgBatSpine02.node.active = !0, this.mgBatSpine01.node.active = !1, _dependency7.ThisProjectUtils.playSpineAnimationPromise(this.mgBatSpine02, "random_B", null, e);
    }
  }, r.stopRandomBat = function () {
    _dependency2.Tween.stopAllByTarget(this), dispatch(_dependency6.GameEvent.STOP_BTM, {
      data: {
        url: _dependency8.EBTM.BTM_BATS
      }
    }), this.mgBatSpine01.setCompleteListener(null), this.mgBatSpine01.setToSetupPose(), this.mgBatSpine01.clearTracks(), this.mgBatSpine02.setCompleteListener(null), this.mgBatSpine02.setToSetupPose(), this.mgBatSpine02.clearTracks();
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), n;
}(_dependency3.default)).prototype, "mainContent", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = _dependency.applyDecoratedDescriptor(G.prototype, "mgBg", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = _dependency.applyDecoratedDescriptor(G.prototype, "mgBgSpine", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = _dependency.applyDecoratedDescriptor(G.prototype, "mgBatSpine01", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = _dependency.applyDecoratedDescriptor(G.prototype, "mgBatSpine02", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(G.prototype, "freeContent", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = _dependency.applyDecoratedDescriptor(G.prototype, "fgBg", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = _dependency.applyDecoratedDescriptor(G.prototype, "fgBgSpine", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = G)) || N));
_dependency2.cclegacy._RF.pop();
