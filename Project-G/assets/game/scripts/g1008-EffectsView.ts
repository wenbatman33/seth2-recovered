// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "./g1008-GameConfigModel";
import * as _dependency5 from "./g1008-GameData";
import * as _dependency6 from "./g1008-GameEvent";
import * as _dependency7 from "./g1008-GameSymbolID";
import * as _dependency8 from "./g1008-types";
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
var e, o, a, i, n, s, r, c, l, p, u, d, f, h, P, m, _, g;
var O;
_dependency2.cclegacy._RF.push({}, "73b95sRdF9GYYd8nCbF5czV", "EffectsView", void 0);
var v = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("EffectsView", v("EffectsView")(O = function (t) {
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
    for (var t = _dependency4.default.getData().filePaths.fireBallPrefab, e = App.cache.get(this.data.module, t).data, o = 0; o < 3; o++) {
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
  }, i.showFireBall = function (t) {
    var e = this.data.getData().symbolPosConfig,
      o = this.data.getData().parser.newTimesSymbols,
      a = _dependency4.default.getData().reelConfig.fireBallSpeed,
      i = App.pool.getPool(_dependency8.EPool.FIREBALL_POOL).get(),
      n = i.getComponent(_dependency2.sp.Skeleton);
    if (i.scale = new _dependency2.Vec3(.5, .5, .5), o.length) {
      var s = o.find(function (e) {
          return e.symbolPos == t;
        }),
        l = s.isRare ? "chaA_in" : "chaB_in",
        p = s.times >= 100,
        u = p ? 3 : 1,
        d = s.symbol == _dependency7.EBackendSymbolID.T1;
      this.node.addChild(i), i.position = e.get(t), s.isRare && (i.position = new _dependency2.Vec3(i.position.x, i.position.y - 7, i.position.z));
      var P = a;
      _dependency4.default.isTurbo && p && (P = 1.4 * a), n.timeScale = P, n.setAnimation(0, l, !1), n.setCompleteListener(function () {
        n.setCompleteListener(null), n.clearTracks(), n.setToSetupPose(), i.removeFromParent(), App.pool.getPool(_dependency8.EPool.FIREBALL_POOL).put(i);
      }), d && dispatch(_dependency6.GameEvent.SHAKE_NODE, {
        data: u
      });
      var O = p ? _dependency4.EBTM.FIREBALL_HIT_100X : _dependency4.EBTM.FIREBALL_HIT;
      this.scheduleOnce(function () {
        O = s.isRare ? p ? _dependency4.EBTM.SYMBOL_FUNCTION_01_100X : _dependency4.EBTM.SYMBOL_FUNCTION_01 : p ? _dependency4.EBTM.SYMBOL_FUNCTION_02_100X : _dependency4.EBTM.SYMBOL_FUNCTION_02, dispatch(_dependency6.GameEvent.PLAY_BTM, {
          data: {
            url: O
          }
        });
      }, 0);
    }
  }, i.animateBezierPosition = function (t, e, o, a) {
    var i = this;
    return new Promise(function (n) {
      var s = t.getPosition(),
        r = s.x > e.x ? e.x + _dependency2.randomRangeInt(200, 400) : e.x - _dependency2.randomRangeInt(200, 400),
        u = s.y > e.y ? e.y + _dependency2.randomRangeInt(200, 400) : e.y - _dependency2.randomRangeInt(200, 400);
      _dependency2.tween(t).bindNodeState(false).to(o, {}, {
        easing: a,
        onUpdate: function (t, o) {
          var a = i.getQuadraticBezierPoint(s, new _dependency2.Vec3(r, u), e, o);
          t.setPosition(a);
        }
      }).call(n).start();
    });
  }, i.getQuadraticBezierPoint = function (t, e, o, a) {
    var i = (1 - a) * (1 - a) * t.x + 2 * (1 - a) * a * e.x + a * a * o.x,
      n = (1 - a) * (1 - a) * t.y + 2 * (1 - a) * a * e.y + a * a * o.y;
    return new _dependency2.Vec3(i, n);
  }, i.showTimesMoving = function (t) {
    var e = this,
      o = this.data.getData(),
      a = o.symbolPosConfig,
      i = o.winBoardPosition,
      r = o.currentTimesPosition,
      c = this.data.getData().gameState,
      l = c.timesSymbols,
      d = c.currentTimes;
    _dependency4.default.getData().reelConfig.totalTimesFireBallTime;
    if (d > 0) {
      var P = _dependency4.default.getData().filePaths.timesMovingPrefab,
        _ = App.cache.get(this.data.module, P).data,
        g = _dependency2.instantiate(_);
      g.getComponent(_dependency2.ParticleSystem2D).autoRemoveOnFinish = !0, this.node.addChild(g), g.position = r, g.active = !0, _dependency2.tween(g).bindNodeState(false).to(.9, {
        position: i
      }, {
        easing: _dependency2.easing.backInOut,
        onStart: function () {
          g.active = !0;
        },
        onComplete: function () {
          dispatch(_dependency6.GameEvent.EXPAND_WIN_AMOUNT), dispatch(_dependency6.GameEvent.UPDATE_TIMES, {
            data: d
          }), g.destroy();
        }
      }).start(), dispatch(_dependency6.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency4.EBTM.TIMES_MOVING
        }
      });
    }
    for (var O = function (o) {
        var r = l[o].symbolPos,
          c = _dependency4.default.getData().filePaths,
          P = c.blueTimesMovingPrefab,
          _ = c.purpleTimesMovingPrefab,
          g = l[o].isRare ? _ : P,
          O = App.cache.get(e.data.module, g).data,
          v = _dependency2.instantiate(O);
        v.getComponent(_dependency2.ParticleSystem2D).autoRemoveOnFinish = !0, e.node.addChild(v), v.position = a.get(r), _dependency2.tween(v).bindNodeState(false).delay(.3).to(.6, {
          position: i
        }, {
          easing: _dependency2.easing.backInOut,
          onStart: function () {
            dispatch(_dependency6.GameEvent.HIDE_TIMES_LABEL, {
              data: r
            }), dispatch(_dependency6.GameEvent.PLAY_TIMES_SYMBOL_FUNCTION, {
              data: r
            }), l[o].isRare ? dispatch(_dependency6.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency4.EBTM.MUTI_TOTAL_01
              }
            }) : dispatch(_dependency6.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency4.EBTM.MUTI_TOTAL_02
              }
            });
          },
          onComplete: function () {
            var e = l[o].times;
            0 != o || d > 0 || dispatch(_dependency6.GameEvent.EXPAND_WIN_AMOUNT), o == l.length - 1 && dispatch(_dependency6.GameEvent.MERGE_WIN_AMOUNT, {
              data: t
            }), dispatch(_dependency6.GameEvent.UPDATE_TIMES, {
              data: e
            }), v.destroy();
          }
        }).start();
      }, v = 0; v < l.length; v++) O(v);
  }, i.reset = function () {}, i.setData = function (t) {}, i.show = function () {
    this.node.active = !0;
  }, i.hide = function () {
    this.node.active = !1;
  }, i.addEvents = function () {
    var t = this;
    this.on(_dependency6.GameEvent.SHOW_FIRE_BALL, function (e) {
      t.showFireBall(e.data);
    }), this.on(_dependency6.GameEvent.SHOW_TIMES_MOVING, function (e) {
      t.showTimesMoving(e.complete);
    });
  }, _dependency.createClass(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), a;
}(_dependency3.default)) || O);
_dependency2.cclegacy._RF.pop();
