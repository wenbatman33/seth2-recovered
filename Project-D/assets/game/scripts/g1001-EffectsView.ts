// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "./g1001-GameConfigModel";
import * as _dependency5 from "./g1001-GameData";
import * as _dependency6 from "./g1001-GameEvent";
import * as _dependency7 from "./g1001-GameSymbolID";
import * as _dependency8 from "./g1001-types";
var _export;
export { _export as EffectsView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EffectsView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, o, a, i, n, s, r, l, c, p, u, d, f, h, m;
var P;
_dependency2.cclegacy._RF.push({}, "042a4ium3dBFrcbHKoOSFN9", "EffectsView", void 0);
var _ = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("EffectsView", _("EffectsView")(P = function (t) {
  var _nativeConstructor = a;
  function a() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(a, t);
  var i = a.prototype;
  return i.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, i.start = function () {
    this.init();
  }, i.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, i.init = function () {
    this.createFireBallPool();
  }, i.createFireBallPool = function () {
    for (var t = _dependency4.default.getData().filePaths.fireBallPrefab, e = App.cache.get(this.data.module, t).data, o = 0; o < 1; o++) {
      var a = _dependency2.instantiate(e);
      App.pool.createPool(_dependency8.EPool.FIREBALL_POOL).cloneNode = a, App.pool.createPool(_dependency8.EPool.FIREBALL_POOL).put(a);
    }
  }, i.createTimesMovingPool = function () {
    for (var t = _dependency4.default.getData().filePaths.timesMovingPrefab, e = App.cache.get(this.data.module, t).data, o = 0; o < 1; o++) {
      var a = _dependency2.instantiate(e);
      a.getComponent(_dependency2.ParticleSystem2D).autoRemoveOnFinish = !0, App.pool.createPool(_dependency8.EPool.TIMES_MOVING_POOL).cloneNode = a, App.pool.createPool(_dependency8.EPool.TIMES_MOVING_POOL).put(a);
    }
  }, i.createPurpleTimesMovingPool = function () {
    for (var t = _dependency4.default.getData().filePaths.purpleTimesMovingPrefab, e = App.cache.get(this.data.module, t).data, o = 0; o < 5; o++) {
      var a = _dependency2.instantiate(e);
      a.getComponent(_dependency2.ParticleSystem2D).autoRemoveOnFinish = !0, App.pool.createPool(_dependency8.EPool.PURPLE_TIMES_MOVING_POOL).cloneNode = a, App.pool.createPool(_dependency8.EPool.PURPLE_TIMES_MOVING_POOL).put(a);
    }
  }, i.createBlueTimesMovingPool = function () {
    for (var t = _dependency4.default.getData().filePaths.blueTimesMovingPrefab, e = App.cache.get(this.data.module, t).data, o = 0; o < 5; o++) {
      var a = _dependency2.instantiate(e);
      a.getComponent(_dependency2.ParticleSystem2D).autoRemoveOnFinish = !0, App.pool.createPool(_dependency8.EPool.BLUE_TIMES_MOVING_POOL).cloneNode = a, App.pool.createPool(_dependency8.EPool.BLUE_TIMES_MOVING_POOL).put(a);
    }
  }, i.showFireBall = function (t, e) {
    void 0 === e && (e = !1);
    var o = this.data.getData().symbolPosConfig,
      a = this.data.getData().parser.newTimesSymbols,
      i = _dependency4.default.getData().reelConfig.fireBallSpeed,
      n = App.pool.getPool(_dependency8.EPool.FIREBALL_POOL).get(),
      s = n.getComponent(_dependency2.sp.Skeleton);
    if (a.length) {
      var l = a.find(function (e) {
          return e.symbolPos == t;
        }),
        c = l.isRare ? "fireball_purple" : "fireball_blue",
        d = l.times >= 100,
        P = d ? _dependency4.EBTM.FIREBALL_HIT_100X : _dependency4.EBTM.FIREBALL_HIT,
        _ = d ? 3 : 1,
        g = l.symbol == _dependency7.EBackendSymbolID.T1;
      this.node.addChild(n), n.position = o.get(t);
      var v = _dependency4.default.isTurbo;
      c = v ? c + "_turbo" : c, c = e ? c + "_stop" : c;
      var E = i;
      v && d && (E = 1.4 * i), s.timeScale = E, s.setAnimation(0, c, !1), s.setCompleteListener(function () {
        s.setCompleteListener(null), s.clearTracks(), s.setToSetupPose(), n.removeFromParent(), App.pool.getPool(_dependency8.EPool.FIREBALL_POOL).put(n);
      }), g && dispatch(_dependency6.GameEvent.SHAKE_NODE, {
        data: _
      }), this.scheduleOnce(function () {
        dispatch(_dependency6.GameEvent.PLAY_BTM, {
          data: {
            url: P
          }
        });
      }, .3);
    }
  }, i.showTimesMoving = function (t) {
    var e = this,
      o = this.data.getData(),
      a = o.symbolPosConfig,
      i = o.winBoardPosition,
      r = o.currentTimesPosition,
      c = this.data.getData().gameState,
      d = c.timesSymbols,
      h = c.currentTimes,
      m = _dependency4.default.getData().reelConfig.totalTimesFireBallTime;
    if (h > 0) {
      var P = _dependency4.default.getData().filePaths.timesMovingPrefab,
        _ = App.cache.get(this.data.module, P).data,
        g = _dependency2.instantiate(_);
      g.getComponent(_dependency2.ParticleSystem2D).autoRemoveOnFinish = !0, this.node.addChild(g), g.position = r, g.active = !1, _dependency2.tween(g).bindNodeState(false).to(m, {
        position: i
      }, {
        onStart: function () {
          g.active = !0;
        },
        onComplete: function () {
          dispatch(_dependency6.GameEvent.EXPAND_WIN_AMOUNT), dispatch(_dependency6.GameEvent.UPDATE_TIMES, {
            data: h
          }), g.destroy();
        }
      }).start(), dispatch(_dependency6.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency4.EBTM.TIMES_MOVING
        }
      });
    }
    for (var v = function (o) {
        var r = d[o].symbolPos,
          c = _dependency4.default.getData().filePaths,
          P = c.blueTimesMovingPrefab,
          _ = c.purpleTimesMovingPrefab,
          g = d[o].isRare ? _ : P,
          v = App.cache.get(e.data.module, g).data,
          E = _dependency2.instantiate(v);
        E.getComponent(_dependency2.ParticleSystem2D).autoRemoveOnFinish = !0;
        var O = h > 0 ? .37 * (o + 1) : .37 * o;
        e.node.addChild(E), E.position = (a.get(r) || (()=>{throw Error('Local Project-D invalid times position: '+JSON.stringify({position:r,keys:Array.from(a.keys()),timesSymbols:d}));})()), E.active = !1, _dependency2.tween(E).bindNodeState(false).delay(O).to(m, {
          position: i
        }, {
          onStart: function () {
            E.active = !0, dispatch(_dependency6.GameEvent.HIDE_TIMES_LABEL, {
              data: r
            }), dispatch(_dependency6.GameEvent.PLAY_TIMES_SYMBOL_FUNCTION, {
              data: r
            }), dispatch(_dependency6.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency4.EBTM.TIMES_MOVING
              }
            });
          },
          onComplete: function () {
            var e = d[o].times;
            0 != o || h > 0 || dispatch(_dependency6.GameEvent.EXPAND_WIN_AMOUNT), o == d.length - 1 && dispatch(_dependency6.GameEvent.MERGE_WIN_AMOUNT, {
              data: t
            }), dispatch(_dependency6.GameEvent.UPDATE_TIMES, {
              data: e
            }), E.destroy();
          }
        }).start();
      }, E = 0; E < d.length; E++) v(E);
  }, i.reset = function () {}, i.setData = function (t) {}, i.show = function () {
    this.node.active = !0;
  }, i.hide = function () {
    this.node.active = !1;
  }, i.addEvents = function () {
    var t = this;
    this.on(_dependency6.GameEvent.SHOW_FIRE_BALL, function (e) {
      t.showFireBall(e.data);
    }), this.on(_dependency6.GameEvent.SHOW_FIRE_BALL_QUICK_STOP, function (e) {
      t.showFireBall(e.data, !0);
    }), this.on(_dependency6.GameEvent.SHOW_TIMES_MOVING, function (e) {
      t.showTimesMoving(e.complete);
    });
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), a;
}(_dependency3.default)) || P);
_dependency2.cclegacy._RF.pop();
