// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1002-GameEvent";
import * as _dependency6 from "./g1002-GameData";
import * as _dependency7 from "./g1002-GameConfigModel";
var _export;
export { _export as PushGame };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "PushGame":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, a, o, s, r, l, u, c, p, h, f, d, m, b, g, w, v, B, L, P, S, y, T, _, x, k;
var C, F, M, I, A, N, O, z, R, E, G, W, D, Y, U, j, q, H, V, X, J, K, Q, Z, $, tt, et;
_dependency2.cclegacy._RF.push({}, "81566Yq5p5BEYgXqh1Y11kL", "PushGame", void 0);
var nt = _dependency2._decorator.ccclass,
  it = _dependency2._decorator.property;
_publish("PushGame", (C = nt("PushGame"), F = _dependency4.inject("ndPushBar", _dependency2.Node), M = _dependency4.inject("ndPushBar/btnPush", _dependency2.Node), I = _dependency4.inject("ndPushBar/ndBar", _dependency2.Node), A = _dependency4.inject("ndPushBar/ndBar/content/ndArrow", _dependency2.Node), N = _dependency4.inject("ndPushBar/ndFurnace", _dependency2.sp.Skeleton), O = _dependency4.inject("bonus_fx", _dependency2.sp.Skeleton), z = _dependency4.inject("ndLight", _dependency2.Node), R = it({
  type: _dependency2.Prefab,
  tooltip: "FireBall"
}), E = it({
  type: _dependency2.SpriteFrame
}), G = it({
  type: _dependency2.Font
}), W = _dependency4.inject("ndSlot", _dependency2.Node), D = _dependency4.inject("ndMultip", _dependency2.Node), C((j = _dependency.applyDecoratedDescriptor((U = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "ndPushBar", j, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "btnPush", q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndBar", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndArrow", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "skeletonFurnace", X, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "bonus_fx", J, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndLight", K, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "fireBall", Q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ballSprite", Z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "multipFonts", $, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndSlot", tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndMultip", et, _dependency.assertThisInitialized(e)), e.balls = [], e.multips = [], e.positions = [], e.scales = [], e.multipleList = [], e.tempIndex = 0, e.currentWinIndex = 0, e.power = 0, e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/bonusGame/PushGame";
  };
  var l = e.prototype;
  return l.start = function () {
    this.ndPushBar.y = -650, this.btnPush.active = !1, this.ndBar.y = -306, this.ndBar.active = !1, this.skeletonFurnace.clearTracks(), this.skeletonFurnace.setToSetupPose(), this.skeletonFurnace.setAnimation(0, "idle", !1), this.bonus_fx.clearTracks(), this.bonus_fx.setToSetupPose(), this.bonus_fx.node.active = !1, this.ndLight.active = !1, this.ndLight.getComponent(_dependency2.UIOpacity).opacity = 0;
    var t = this.data.getData().bonusState;
    Log.d("%c bonusState ", "color:#ff00ff", t), Log.d("%c gambleTimes ", "color:#ff00ff", t.gambleTimes), this.multipleList = [], this.multipleList = t.gambleResults, this.creatorMultipleBalls(), this.playIntro();
  }, l.creatorMultipleBalls = function () {
    for (var t = Math.pow(1280 / 280, .1), e = 0; e < 10; e++) {
      var n = 9 - e,
        i = this.multipleList[n].times + "x",
        a = this.multipleList[n].level,
        o = Math.pow(t, e),
        s = 1280 - 42 * e * o;
      this.scales.push(o), this.positions.push(s);
      var r = this.getFireBall(a);
      this.balls.push(r), r.setScale(new _dependency2.Vec3(o, o, o)), r.setPosition(new _dependency2.Vec3(0, s, 0));
      var l = this.getMultipBall(a, i);
      l.setScale(new _dependency2.Vec3(o, o, o)), l.setPosition(new _dependency2.Vec3(0, s, 0)), this.multips.push(l), this.tempIndex++;
    }
  }, l.getFireBall = function (t) {
    var e,
      n = _dependency2.instantiate(this.fireBall);
    n.getChildByName("ball").getComponent(_dependency2.Sprite).spriteFrame = this.ballSprite[t], n.parent = this.ndSlot, n.getChildByName("multip").active = !1;
    var i = null == (e = n.getChildByName("light")) ? void 0 : e.getComponent(_dependency2.sp.Skeleton);
    return i && (i.clearTracks(), i.setToSetupPose(), i.node.active = !1), n;
  }, l.getMultipBall = function (t, e) {
    var n = _dependency2.instantiate(this.fireBall),
      i = n.getChildByName("multip").getComponent(_dependency2.Label);
    return i.font = this.multipFonts[t], i.string = e, n.parent = this.ndMultip, n.getChildByName("ball").active = !1, n;
  }, l.playIntro = function () {
    var t = this;
    this.scheduleOnce(function () {
      _dependency2.tween(t.ndPushBar).bindNodeState(false).to(.4, {
        position: new _dependency2.Vec3(0, 0, 0)
      }).call(function () {
        t.btnPush.active = !0, t.ndBar.active = !0, t.ndBar.getComponent(_dependency2.UIOpacity).opacity = 255;
      }).start(), dispatch(_dependency5.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency7.EBTM.BN_SCROLL_01,
          loop: !1
        }
      }), t.backTween(.3).then(function () {
        t.backTween(.3).then(function () {
          t.tempIndex -= 3;
          for (var e = 0; e < t.balls.length; e++) {
            var n,
              i = null == (n = t.balls[e].getChildByName("light")) ? void 0 : n.getComponent(_dependency2.sp.Skeleton);
            i && (i.node.active = !0, i.clearTracks(), i.setToSetupPose(), i.setAnimation(0, "function", !1), dispatch(_dependency5.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency7.EBTM.BN_STOP,
                loop: !1
              }
            }));
          }
          t.arrowIdle(), t.btnPush.once(_dependency2.NodeEventType.TOUCH_END, t.onStartPush, t);
        });
      });
    }, 1);
  }, l.backTween = function (t) {
    var e = this;
    return new Promise(function (n) {
      for (var i = 0; i < e.balls.length; i++) {
        var a = e.multips[i],
          o = e.balls[i],
          s = e.scales[i - 1],
          r = e.positions[i - 1];
        0 == i ? (_dependency2.tween(o).bindNodeState(false).parallel(_dependency2.tween().bindNodeState(false).to(t, {
          position: new _dependency2.Vec3(0, 1340, 0)
        }), _dependency2.tween().bindNodeState(false).to(t, {
          scale: new _dependency2.Vec3(.8, .8, 0)
        })).call(function () {
          var t = e.balls.shift();
          e.balls.push(t), t.position = new _dependency2.Vec3(0, 0, 0), t.scale = new _dependency2.Vec3(4, 4, 0), t.active = !1;
          var i = e.multips.shift();
          e.multips.push(i), i.position = new _dependency2.Vec3(0, 0, 0), i.scale = new _dependency2.Vec3(4, 4, 0), i.active = !1, n(!0);
        }).start(), _dependency2.tween(a).bindNodeState(false).parallel(_dependency2.tween().bindNodeState(false).to(t, {
          position: new _dependency2.Vec3(0, 1340, 0)
        }), _dependency2.tween().bindNodeState(false).to(t, {
          scale: new _dependency2.Vec3(.8, .8, 0)
        })).start()) : (_dependency2.tween(o).bindNodeState(false).parallel(_dependency2.tween().bindNodeState(false).to(t, {
          position: new _dependency2.Vec3(0, r, 0)
        }), _dependency2.tween().bindNodeState(false).to(t, {
          scale: new _dependency2.Vec3(s, s, 0)
        })).start(), _dependency2.tween(a).bindNodeState(false).parallel(_dependency2.tween().bindNodeState(false).to(t, {
          position: new _dependency2.Vec3(0, r, 0)
        }), _dependency2.tween().bindNodeState(false).to(t, {
          scale: new _dependency2.Vec3(s, s, 0)
        })).start());
      }
    });
  }, l.nextTween = function (t) {
    var e = this;
    return new Promise(function (n) {
      for (var i = 0; i < e.balls.length; i++) {
        var a = e.multips[i],
          o = e.balls[i],
          s = e.scales[i],
          r = e.positions[i];
        i == e.balls.length - 1 ? (_dependency2.tween(o).bindNodeState(false).parallel(_dependency2.tween().bindNodeState(false).to(t, {
          position: new _dependency2.Vec3(0, -150, 0)
        }), _dependency2.tween().bindNodeState(false).to(t, {
          scale: new _dependency2.Vec3(4, 4, 0)
        })).call(function () {
          if (e.balls.pop().removeFromParent(), e.multips.pop().removeFromParent(), e.tempIndex++, e.tempIndex < 20) e.unshiftOneBall();else {
            var t = _dependency2.instantiate(e.fireBall);
            t.parent = e.ndSlot, t.position = new _dependency2.Vec3(0, 1320), t.scale = new _dependency2.Vec3(.8, .8), t.active = !1, e.balls.unshift(t);
            var i = _dependency2.instantiate(e.fireBall);
            i.parent = e.ndMultip, i.position = new _dependency2.Vec3(0, 1320), i.scale = new _dependency2.Vec3(.8, .8), i.active = !1, e.multips.unshift(i);
          }
          n(!0);
        }).start(), _dependency2.tween(a).bindNodeState(false).parallel(_dependency2.tween().bindNodeState(false).to(t, {
          position: new _dependency2.Vec3(0, -150, 0)
        }), _dependency2.tween().bindNodeState(false).to(t, {
          scale: new _dependency2.Vec3(4, 4, 0)
        })).start()) : (_dependency2.tween(o).bindNodeState(false).parallel(_dependency2.tween().bindNodeState(false).to(t, {
          position: new _dependency2.Vec3(0, r, 0)
        }), _dependency2.tween().bindNodeState(false).to(t, {
          scale: new _dependency2.Vec3(s, s, 0)
        })).start(), _dependency2.tween(a).bindNodeState(false).parallel(_dependency2.tween().bindNodeState(false).to(t, {
          position: new _dependency2.Vec3(0, r, 0)
        }), _dependency2.tween().bindNodeState(false).to(t, {
          scale: new _dependency2.Vec3(s, s, 0)
        })).start());
      }
    });
  }, l.unshiftOneBall = function () {
    var t = this.multipleList[this.tempIndex].times + "x",
      e = this.multipleList[this.tempIndex].level,
      n = new _dependency2.Vec3(.8, .8),
      i = new _dependency2.Vec3(0, 1320),
      a = this.getFireBall(e);
    a.setSiblingIndex(0), a.position = i, a.scale = n, this.balls.unshift(a);
    var o = this.getMultipBall(e, t);
    o.position = i, o.scale = n, this.multips.unshift(o);
  }, l.onStartPush = function () {
    var t = this;
    dispatch(_dependency5.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency7.EBTM.BN_START_02,
        loop: !1
      }
    }), this.arrowStop(), _dependency2.tween(this.ndBar).bindNodeState(false).to(.16, {
      scale: new _dependency2.Vec3(1.2, 1.2, 1.2)
    }).call(function () {
      _dependency2.tween(t.ndBar).bindNodeState(false).to(.16, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }).call(function () {
        _dependency2.tween(t.ndBar).bindNodeState(false).to(.2, {
          position: new _dependency2.Vec3(0, -390, 0)
        }).call(function () {
          t.ndBar.active = !1, t.btnPush.active = !1, t.startScolling();
        }).start(), _dependency2.tween(t.ndBar.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.2, {
          opacity: 0
        }).start(), _dependency2.tween(t.skeletonFurnace.node).bindNodeState(false).to(.3, {
          position: new _dependency2.Vec3(0, -65, 0)
        }).start();
      }).start();
    }).start();
  }, l.startScolling = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e, n, i;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e = this.data.getData().bonusState, n = e.isFinish && 0 == e.totalWinnings, Log.d("%c 精煉失敗", "color:#ff0000", n), this.currentWinIndex = n ? 18 : this.checkWinIndex(e.gambleTimes), dispatch(_dependency5.GameEvent.PLAY_BTM, {
              data: {
                url: _dependency7.EBTM.BN_SCROLL_02,
                loop: !0
              }
            }), i = 0;
          case 6:
            if (!(i < this.currentWinIndex + 2)) {
              t.next = 16;
              break;
            }
            return 2 * Math.floor(this.currentWinIndex / 3) + 1 <= i + 1 && (this.power += .1), 1 == i && 0 != this.currentWinIndex && (this.skeletonFurnace.clearTracks(), this.skeletonFurnace.setToSetupPose(), this.skeletonFurnace.setAnimation(0, "function", !0), this.bonus_fx.node.active = !0, this.bonus_fx.clearTracks(), this.bonus_fx.setToSetupPose(), this.bonus_fx.setAnimation(0, "normal", !0)), t.next = 12, this.nextTween(this.power);
          case 12:
            n && 10 == i && (this.bonus_fx.node.active = !1, this.ndLight.active = !0, this.ndLight.getComponent(_dependency2.UIOpacity).opacity = 0, _dependency2.tween(this.ndLight.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(1, {
              opacity: 255
            }).call(function () {
              dispatch(_dependency5.GameEvent.STOP_BTM, {
                data: _dependency7.EBTM.BN_SCROLL_02
              }), dispatch(_dependency5.GameEvent.BONUS_GAMBLE_RESULT_RESP);
            }).start());
          case 13:
            i++, t.next = 6;
            break;
          case 16:
            if (!n) {
              t.next = 18;
              break;
            }
            return t.abrupt("return");
          case 18:
            this.playWinCollect();
          case 19:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.playWinCollect = function () {
    var t = this;
    dispatch(_dependency5.GameEvent.STOP_BTM, {
      data: _dependency7.EBTM.BN_SCROLL_02
    });
    var e = this.multips[this.multips.length - 1],
      n = this.scales[this.scales.length - 1];
    _dependency2.tween(e).bindNodeState(false).to(.15, {
      scale: new _dependency2.Vec3(n + 1, n + 1, 0)
    }).call(function () {
      _dependency2.tween(e).bindNodeState(false).to(.15, {
        scale: new _dependency2.Vec3(n, n, 0)
      }).start();
    }).start(), dispatch(_dependency5.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency7.EBTM.BN_SCROLL_STOP,
        loop: !1
      }
    }), this.skeletonFurnace.clearTracks(), this.skeletonFurnace.setToSetupPose(), this.skeletonFurnace.setAnimation(0, "complete", !0), this.skeletonFurnace.setCompleteListener(function () {
      t.skeletonFurnace.setCompleteListener(null), dispatch(_dependency5.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency7.EBTM.BN_TRANS,
          loop: !1
        }
      }), t.ndLight.getComponent(_dependency2.UIOpacity).opacity = 0, t.ndLight.active = !0, _dependency2.tween(t.ndLight.getComponent(_dependency2.UIOpacity)).bindNodeState(false).delay(.3).to(1, {
        opacity: 255
      }).call(function () {
        var e = t.data.getData().bonusState;
        dispatch(_dependency5.GameEvent.BONUS_GAME_COLLECT_END, {
          data: e.gambleTimes
        }), Log.d("%c END", "color:#ff0000", e.gambleTimes);
      }).start();
    });
  }, l.creatorLostIndex = function () {
    var t = _dependency2.randomRangeInt(0, this.multipleList.length),
      e = this.multipleList[t].times,
      n = this.checkWinIndex(e);
    return Log.d("%c Lost Index", "color:#ff0000", n, e), n;
  }, l.checkWinIndex = function (t) {
    var e = 0,
      n = this.power < .3 ? 2 : this.power <= .5 ? 1 : 0;
    Log.d("%c 前中後位置", "color:#ff0000", n);
    for (var i = 0, a = 0; a < this.multipleList.length; a++) {
      this.multipleList[a].times !== t || (i === n && (e = a), i++);
    }
    return Log.d("%c  Win Index", "color:#ff0000", e), e;
  }, l.arrowIdle = function () {
    this.ndArrow.x = 0, _dependency2.tween(this.ndArrow).bindNodeState(false).repeatForever(_dependency2.tween().bindNodeState(false).to(.16, {
      position: new _dependency2.Vec3(614, 0)
    }).to(.16, {
      position: new _dependency2.Vec3(10, 0)
    })).start();
  }, l.arrowStop = function () {
    _dependency2.Tween.stopAllByTarget(this.ndArrow);
    var t = Math.floor(11 * Math.random()),
      e = 60 * t + 10,
      n = .1 * (10 - t + 1);
    this.power = n >= .7 ? .7 : n, _dependency2.tween(this.ndArrow).bindNodeState(false).to(.01, {
      position: new _dependency2.Vec3(e, 0)
    }).start();
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "ndPushBar", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = _dependency.applyDecoratedDescriptor(U.prototype, "btnPush", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(U.prototype, "ndBar", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(U.prototype, "ndArrow", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(U.prototype, "skeletonFurnace", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(U.prototype, "bonus_fx", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(U.prototype, "ndLight", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(U.prototype, "fireBall", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = _dependency.applyDecoratedDescriptor(U.prototype, "ballSprite", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), $ = _dependency.applyDecoratedDescriptor(U.prototype, "multipFonts", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), tt = _dependency.applyDecoratedDescriptor(U.prototype, "ndSlot", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(U.prototype, "ndMultip", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = U)) || Y));
_dependency2.cclegacy._RF.pop();
