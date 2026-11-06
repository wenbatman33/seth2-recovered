// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "./g1009-GameConfigModel";
import * as _dependency5 from "./g1009-GameData";
import * as _dependency6 from "./g1009-GameSymbolID";
import * as _dependency7 from "./g1009-GameEvent";
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
var e, a, i, o, n, s, l, r, c, d, f, h, u;
var p;
_dependency2.cclegacy._RF.push({}, "c69a8p1wNZAY6AN+qmtbYUP", "EffectsView", void 0);
var m = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("EffectsView", m("EffectsView")(p = function (t) {
  var _nativeConstructor = i;
  function i() {
    for (var e, a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    return (e = Reflect.construct(t, [this].concat(i).slice(1), new.target || _nativeConstructor) || this).fireBallNodes = new Set(), e;
  }
  _dependency.inheritsLoose(i, t);
  var o = i.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, o.init = function () {}, o.showFireBall = function (t, e) {
    var a = this;
    void 0 === e && (e = !1);
    var i = _dependency4.default.getData().filePaths.fireBallPrefab,
      o = App.cache.get(this.data.module, i).data,
      l = this.data.getData().symbolPosConfig,
      r = this.data.getData().parser.newTimesSymbols,
      f = _dependency4.default.getData().reelConfig.fireBallSpeed,
      p = _dependency2.instantiate(o),
      m = p.getComponent(_dependency2.sp.Skeleton),
      _ = f;
    if (r.length) {
      var g = r.find(function (e) {
          return e.symbolPos == t;
        }),
        E = g.isRare ? "multiple_in_b" : "multiple_in_a",
        T = g.times >= 100,
        A = T ? 3 : 1,
        B = g.symbol == _dependency6.EBackendSymbolID.T1,
        L = _dependency4.EBTM.FIREBALL_HIT;
      L = g.isRare ? T ? _dependency4.EBTM.RARE_FIREBALL_HIT_100X : _dependency4.EBTM.RARE_FIREBALL_HIT : T ? _dependency4.EBTM.FIREBALL_HIT_100X : _dependency4.EBTM.FIREBALL_HIT, e && (_ = 1.4 * f), this.node.addChild(p), this.fireBallNodes.add(p), p.position = l.get(t), m.timeScale = _, m.setAnimation(0, E, !1), m.setCompleteListener(function () {
        a.disposeFireBall(p);
      }), B && dispatch(_dependency7.GameEvent.SHAKE_NODE, {
        data: A
      }), this.scheduleOnce(function () {
        dispatch(_dependency7.GameEvent.PLAY_REPEAT_BTM, {
          data: {
            url: L
          }
        });
      }, .3);
    }
  }, o.showSplitFireBall = function (t) {
    var e = this,
      a = _dependency4.default.getData().filePaths.fireBallPrefab,
      i = this.data.getData().symbolPosConfig,
      o = this.data.getData().gameState.timesSymbols,
      l = _dependency4.default.getData().reelConfig.fireBallSpeed,
      r = App.cache.get(this.data.module, a).data,
      f = _dependency2.instantiate(r),
      h = f.getComponent(_dependency2.sp.Skeleton),
      p = o.filter(function (e) {
        return e.symbolPos == t;
      })[0],
      m = p.isRare,
      _ = m ? "multiple_in_b" : "multiple_in_a",
      g = p.times >= 100,
      E = _dependency4.EBTM.FIREBALL_HIT;
    this.node.addChild(f), this.fireBallNodes.add(f), f.position = i.get(t), h.timeScale = l, h.setAnimation(0, _, !1), h.setCompleteListener(function () {
      e.disposeFireBall(f);
    }), E = m ? g ? _dependency4.EBTM.RARE_FIREBALL_HIT_100X : _dependency4.EBTM.RARE_FIREBALL_HIT : g ? _dependency4.EBTM.FIREBALL_HIT_100X : _dependency4.EBTM.FIREBALL_HIT, this.scheduleOnce(function () {
      dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: E
        }
      });
    }, .3);
  }, o.showTimesMoving = function (t) {
    var e = this,
      a = this.data.getData(),
      i = a.symbolPosConfig,
      o = a.winBoardPosition,
      s = a.currentTimesPosition,
      r = this.data.getData().gameState,
      f = r.timesSymbols,
      h = r.currentTimes,
      p = _dependency4.default.getData().reelConfig.totalTimesFireBallTime;
    if (h > 0) {
      var m = _dependency4.default.getData().filePaths.timesMovingPrefab,
        _ = App.cache.get(this.data.module, m).data,
        g = _dependency2.instantiate(_);
      this.node.addChild(g), g.position = s, g.active = !1, _dependency2.tween(g).bindNodeState(false).to(p, {
        position: o
      }, {
        onStart: function () {
          g.active = !0;
        },
        onComplete: function () {
          dispatch(_dependency7.GameEvent.EXPAND_WIN_AMOUNT), dispatch(_dependency7.GameEvent.UPDATE_TIMES, {
            data: h
          }), g.destroy();
        }
      }).start(), dispatch(_dependency7.GameEvent.PLAY_REPEAT_BTM, {
        data: {
          url: _dependency4.EBTM.TIMES_MOVING
        }
      });
    }
    for (var E = function (a) {
        var s = f[a].symbolPos,
          r = _dependency4.default.getData().filePaths,
          m = r.blueTimesMovingPrefab,
          _ = r.purpleTimesMovingPrefab,
          g = f[a].isRare ? _ : m,
          E = App.cache.get(e.data.module, g).data,
          T = _dependency2.instantiate(E),
          A = h > 0 ? .37 * (a + 1) : .37 * a;
        e.node.addChild(T), T.position = i.get(s), T.active = !1, _dependency2.tween(T).bindNodeState(false).delay(A).to(p, {
          position: o
        }, {
          onStart: function () {
            T.active = !0, dispatch(_dependency7.GameEvent.HIDE_TIMES_LABEL, {
              data: s
            }), dispatch(_dependency7.GameEvent.PLAY_TIMES_SYMBOL_FUNCTION, {
              data: s
            }), dispatch(_dependency7.GameEvent.PLAY_REPEAT_BTM, {
              data: {
                url: _dependency4.EBTM.TIMES_MOVING
              }
            });
          },
          onComplete: function () {
            var e = f[a].times;
            0 != a || h > 0 || dispatch(_dependency7.GameEvent.EXPAND_WIN_AMOUNT), a == f.length - 1 && dispatch(_dependency7.GameEvent.MERGE_WIN_AMOUNT, {
              data: t
            }), dispatch(_dependency7.GameEvent.UPDATE_TIMES, {
              data: e
            }), T.destroy();
          }
        }).start();
      }, T = 0; T < f.length; T++) E(T);
  }, o.showCloneTimesMoving = function (t, e, a) {
    for (var i = this, o = 0, s = function () {
        var s = _dependency4.default.getData().filePaths.splitBlueTimesMovingPrefab,
          d = App.cache.get(i.data.module, s).data,
          f = _dependency2.instantiate(d),
          h = _dependency4.default.getData().reelConfig.totalTimesFireBallTime,
          u = i.data.getData().symbolPosConfig;
        i.node.addChild(f), f.position = u.get(t), f.active = !1, _dependency2.tween(f).bindNodeState(false).delay(.7).to(h, {
          position: u.get(e[r])
        }, {
          onStart: function () {
            f.active = !0;
          },
          onComplete: function () {
            o++, _dependency2.tween(i).bindNodeState(false).delay(.5).call(function () {
              o == e.length && a(), f.active = !1, f.destroy();
            }).start();
          }
        }).start();
      }, r = 0; r < e.length; r++) s();
  }, o.reset = function () {}, o.setData = function (t) {}, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.disposeFireBall = function (t) {
    if (t && t.isValid) {
      var e = t.getComponent(_dependency2.sp.Skeleton);
      e && (e.setCompleteListener(null), e.clearTracks()), this.fireBallNodes.delete(t), t.destroy();
    } else this.fireBallNodes.delete(t);
  }, o.clearAllFireBalls = function () {
    this.fireBallNodes.forEach(function (t) {
      if (t && t.isValid) {
        var e = t.getComponent(_dependency2.sp.Skeleton);
        e && (e.setCompleteListener(null), e.clearTracks()), t.destroy();
      }
    }), this.fireBallNodes.clear();
  }, o.addEvents = function () {
    var t = this;
    this.on(_dependency7.GameEvent.SHOW_SYMBOLS_OUT_ANIM, function () {
      t.clearAllFireBalls();
    }), this.on(_dependency7.GameEvent.SHOW_FIRE_BALL, function (e) {
      t.showFireBall(e.data);
    }), this.on(_dependency7.GameEvent.SHOW_FIRE_BALL_QUICK_STOP, function (e) {
      t.showFireBall(e.data, !0);
    }), this.on(_dependency7.GameEvent.SHOW_TIMES_MOVING, function (e) {
      t.showTimesMoving(e.complete);
    }), this.on(_dependency7.GameEvent.SHOW_CLONE_TIMES_MOVING, function () {
      t.data.getData().gameState.splitList.slice().forEach(function (e) {
        t.showCloneTimesMoving(e.from, e.to, function () {});
      });
    }), this.on(_dependency7.GameEvent.SHOW_SPLIT_FIRE_BALL, function () {
      var e = t.data.getData().gameState.splitList.slice();
      t.scheduleOnce(function () {
        t.showSplitFireBall(e[0].from);
      }, .1), dispatch(_dependency7.GameEvent.SHAKE_NODE, {
        data: .8
      });
    });
  }, _dependency.createClass(i, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), i;
}(_dependency3.default)) || p);
_dependency2.cclegacy._RF.pop();
