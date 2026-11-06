// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency5 from "./g1009-Symbol";
import * as _dependency6 from "./g1009-GameConfigModel";
import * as _dependency7 from "./g1009-GameData";
import * as _dependency8 from "./g1009-GameSymbolID";
import * as _dependency9 from "./g1009-GameEvent";
import * as _dependency0 from "./g1009-types";
var _export;
export { _export as SymbolView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SymbolView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var o, e, s, i, a, n, l, m, c, r, S, p, y, h, u, d, b, T, M, _, f, O, L, g, I;
var A, B, E, v, C, Y, P;
_dependency2.cclegacy._RF.push({}, "389a4wz1DZLjZ5mgKPtdiUa", "SymbolView", void 0);
var D = _dependency2._decorator.ccclass,
  w = _dependency2._decorator.property;
_publish("SymbolView", (A = D("SymbolView"), B = w(_dependency2.Prefab), E = w(_dependency2.Node), A((Y = _dependency.applyDecoratedDescriptor((C = function (t) {
  var _nativeConstructor = o;
  function o() {
    for (var o, e = arguments.length, a = new Array(e), n = 0; n < e; n++) a[n] = arguments[n];
    return (o = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this).SYMBOL_ROW = 6, o.SYMBOL_COL = 5, o.TOTAL_SYMBOL = o.SYMBOL_ROW * o.SYMBOL_COL, o.GAME_HEIGHT = 720, o.TIMES_SYMBOLS = [_dependency8.EBackendSymbolID.T1, _dependency8.EBackendSymbolID.T2, _dependency8.EBackendSymbolID.T3, _dependency8.EBackendSymbolID.T4], o.SCATTER_SYMBOLS = [_dependency8.EBackendSymbolID.SCATTER, _dependency8.EBackendSymbolID.GOLD_SCATTER], o.TOTEM_SYMBOLS = [_dependency8.EBackendSymbolID.MEN_TOTEM, _dependency8.EBackendSymbolID.WOMEN_TOTEM], _dependency.initializerDefineProperty(o, "gameSymbol", Y, _dependency.assertThisInitialized(o)), _dependency.initializerDefineProperty(o, "lockView", P, _dependency.assertThisInitialized(o)), o.symbolsMap = new Map(), o.outSymbolMap = new Map(), o.lockSymbolMap = new Map(), o.symbolOutTag = 1234, o.symbolInTag = 5678, o.isOutCompleted = !1, o.needInitHeight = !1, o.fireballPosIds = [], o.isStartSymbolIn = !1, o.tempCols = [], o;
  }
  _dependency.inheritsLoose(o, t);
  var n = o.prototype;
  return n.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, n.start = function () {
    this.createSymbolPool();
  }, n.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, n.createSymbolPool = function () {
    for (var t = _dependency6.default.getData().filePaths.symbolPrefab, o = App.cache.get(this.data.module, t).data, e = 0; e < 3 * this.TOTAL_SYMBOL; e++) {
      var s = _dependency2.instantiate(o);
      s.addComponent(_dependency5.Symbol), App.pool.createPool(_dependency0.EPool.SYMBOL_POOL).cloneNode = s, App.pool.createPool(_dependency0.EPool.SYMBOL_POOL).put(s);
    }
  }, n.createSymbols = function (t) {
    var o = this;
    this.data.getData().parser.view1D.forEach(function (e, s) {
      o.createSymbol(s, e, t, null);
    }), this.setSymbolsSiblingIndex();
  }, n.createSymbol = function (t, o, e, s) {
    var i = this.data.getData().symbolPosConfig,
      a = App.pool.getPool(_dependency0.EPool.SYMBOL_POOL).get(),
      n = a.getComponent(_dependency5.Symbol),
      l = this.TIMES_SYMBOLS.includes(o),
      m = this.SCATTER_SYMBOLS.includes(o);
    a.position.set(i.get(t)), a.name = "" + t, e && (a.active = !0);
    var c = {
      posId: t,
      symbolId: o,
      isTimesSymbol: l
    };
    this.symbolsMap.set(t, n), this.node.addChild(a), n.setData(c), n.setTimesText(s), l && e && n.initTimesSymbol(t), m && dispatch(_dependency9.GameEvent.MOVE_SCATTER, {
      data: a
    });
  }, n.createLockSymbol = function (t, o, e, s) {
    var i = this.data.getData().symbolPosConfig,
      a = App.pool.getPool(_dependency0.EPool.SYMBOL_POOL).get(),
      n = a.getComponent(_dependency5.Symbol),
      l = this.TIMES_SYMBOLS.includes(o),
      m = {
        posId: t,
        symbolId: o,
        isTimesSymbol: l
      };
    a.position.set(i.get(t)), a.name = "" + t, this.lockSymbolMap.set(t, n), this.lockView.addChild(a), n.setData(m), n.setTimesText(s), l && e && n.initTimesSymbol(t), a.active = !0;
  }, n.setSymbolsSiblingIndex = function () {
    for (var t = 0, o = 0; o < this.TOTAL_SYMBOL; o++) {
      var e = this.symbolsMap.get(o);
      this.TIMES_SYMBOLS.includes(e.symbolID) ? (e.node.setSiblingIndex(29 - t), t++) : e.node.setSiblingIndex(o);
    }
  }, n.showSymbolsOut = function (t) {
    var o = this,
      e = _dependency6.default.isTurbo,
      s = this.configModel.reelConfig,
      i = s.animStagger,
      a = s.speed,
      n = e ? _dependency6.EBTM.SYMBOL_TURBO_FALL_OUT : _dependency6.EBTM.SYMBOL_NORMAL_FALL_OUT,
      l = this.outSymbolMap.size,
      m = 0,
      c = 0;
    if (this.isOutCompleted = !1, !l) return this.isOutCompleted = !0, void (t && t());
    for (var r = 0; r < this.SYMBOL_ROW; r++) for (var p = function () {
        var e = o.outSymbolMap.get(y);
        if (!e) return "continue";
        m++, _dependency2.tween(e.node).bindNodeState(false).delay(m * i).by(a, {
          position: new _dependency2.Vec3(0, -o.GAME_HEIGHT, 0)
        }, {
          easing: "cubicInOut"
        }).call(function () {
          c++, e.recycleSymbol(), c == l && (o.isOutCompleted = !0, o.outSymbolMap.clear(), t());
        }).tag(o.symbolOutTag).start();
      }, y = this.TOTAL_SYMBOL - this.SYMBOL_ROW + r; y >= 0; y -= this.SYMBOL_ROW) p();
    dispatch(_dependency9.GameEvent.PLAY_BTM, {
      data: {
        url: n
      }
    });
  }, n.showSymbolsIn = function (t) {
    _dependency6.default.isTurbo ? this.showTurboSymbolsIn(t) : this.showNormalSymbolsIn(t);
  }, n.showNormalSymbolsIn = function (t) {
    var o = this,
      e = this.configModel.reelConfig,
      s = e.animStagger,
      i = e.speed,
      a = _dependency6.EBTM.SYMBOL_NORMAL_FALL_IN,
      n = this.symbolsMap.size,
      l = 0,
      m = 0;
    this.scheduleOnce(function () {
      dispatch(_dependency9.GameEvent.PLAY_BTM, {
        data: {
          url: a
        }
      });
    }, .19);
    for (var c = 0; c < this.SYMBOL_ROW; c++) for (var r = function () {
        var e = o.symbolsMap.get(p);
        if (!e) return "continue";
        var a = e.node.position,
          c = a.x,
          r = a.y,
          y = a.z,
          h = o.TIMES_SYMBOLS.includes(e.symbolID),
          d = (o.TOTEM_SYMBOLS.includes(e.symbolID), o.SCATTER_SYMBOLS.includes(e.symbolID)),
          b = e.symbolID == _dependency8.EBackendSymbolID.JACKPOT,
          T = !0,
          _ = !0;
        o.lockSymbolMap.has(e.posId) && (_ = !(T = !1)), l++, _dependency2.tween(e.node).bindNodeState(false).set({
          position: new _dependency2.Vec3(c, r + o.GAME_HEIGHT, y),
          active: T
        }).delay(l * s).to(i, {
          position: new _dependency2.Vec3(c, r, y)
        }, {
          onStart: function () {
            h && T && (dispatch(_dependency9.GameEvent.SHOW_FIRE_BALL, {
              data: e.posId
            }), o.fireballPosIds.push(e.posId));
          },
          onComplete: function () {
            d && (e.symbolID == _dependency8.EBackendSymbolID.GOLD_SCATTER ? e.playSPGScatterInBtm() : e.playScatterInBtm());
          }
        }).to(.085, {
          position: new _dependency2.Vec3(c, r - 20, y)
        }).to(.1, {
          position: new _dependency2.Vec3(c, r, y)
        }).set({
          active: _
        }).call(function () {
          ++m == n && (_dependency6.default.canQuickStop = !1, o.fireballPosIds.length = 0, o.isStartSymbolIn = !1, t()), d && e.playScatterInAnim(), b && e.playJackpotInAnim(), h && o.openTimesSymbol(e.posId);
        }).tag(o.symbolInTag).start();
      }, p = this.TOTAL_SYMBOL - this.SYMBOL_ROW + c; p >= 0; p -= this.SYMBOL_ROW) r();
  }, n.showTurboSymbolsIn = function (t) {
    var o = this,
      e = this.configModel.reelConfig.speed,
      s = this.symbolsMap.size,
      i = 0;
    dispatch(_dependency9.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency6.EBTM.SYMBOL_TURBO_FALL_IN
      }
    });
    for (var a = 0; a < this.SYMBOL_ROW; a++) for (var n = function () {
        var a = o.symbolsMap.get(l);
        if (!a) return "continue";
        var n = a.node.position,
          m = n.x,
          c = n.y,
          r = n.z,
          p = o.TIMES_SYMBOLS.includes(a.symbolID),
          y = (o.TOTEM_SYMBOLS.includes(a.symbolID), o.SCATTER_SYMBOLS.includes(a.symbolID)),
          d = a.symbolID == _dependency8.EBackendSymbolID.JACKPOT,
          b = !0,
          T = !0;
        o.lockSymbolMap.has(a.posId) && (T = !(b = !1));
        var _ = a.node.getComponent(_dependency2.UITransform).height / 12,
          f = Math.floor(l / 6),
          L = c + o.GAME_HEIGHT - 25 * (4 - f) - 60 * (4 - f);
        _dependency2.tween(a.node).bindNodeState(false).set({
          position: new _dependency2.Vec3(m, L, r),
          active: b
        }).to(1.1 * e, {
          position: new _dependency2.Vec3(m, c - _, r)
        }, {
          easing: "quintOut",
          onStart: function () {
            p && b && (dispatch(_dependency9.GameEvent.SHOW_FIRE_BALL, {
              data: a.posId
            }), o.fireballPosIds.push(a.posId));
          },
          onComplete: function () {
            y && (a.symbolID == _dependency8.EBackendSymbolID.GOLD_SCATTER ? a.playSPGScatterInBtmFast() : a.playScatterInBtmFast()), _dependency2.tween(a.node).bindNodeState(false).to(.04, {
              position: new _dependency2.Vec3(m, c, r)
            }, {
              easing: "quadOut",
              onComplete: function () {
                ++i == s && (_dependency6.default.canQuickStop = !1, o.isStartSymbolIn = !1, o.fireballPosIds.length = 0, t()), y && a.playScatterInAnim(), d && a.playJackpotInAnim(), p && o.openTimesSymbol(a.posId);
              }
            }).set({
              active: T
            }).tag(o.symbolInTag).start();
          }
        }).tag(o.symbolInTag).start();
      }, l = this.TOTAL_SYMBOL - this.SYMBOL_ROW + a; l >= 0; l -= this.SYMBOL_ROW) n();
  }, n.showSymbolsQuickIn = function (t) {
    var o = this,
      e = this.data.getData().symbolPosConfig,
      s = _dependency6.default.getData().symbolQuickInTime,
      i = this.symbolsMap.size,
      a = 0;
    dispatch(_dependency9.GameEvent.STOP_BTM, {
      data: _dependency6.EBTM.SYMBOL_NORMAL_FALL_OUT
    }), dispatch(_dependency9.GameEvent.STOP_BTM, {
      data: _dependency6.EBTM.SYMBOL_TURBO_FALL_OUT
    }), dispatch(_dependency9.GameEvent.STOP_BTM, {
      data: _dependency6.EBTM.SYMBOL_NORMAL_FALL_IN
    }), dispatch(_dependency9.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency6.EBTM.SYMBOL_TURBO_FALL_IN
      }
    });
    for (var n = 0; n < this.SYMBOL_ROW; n++) for (var l = function () {
        var n = o.symbolsMap.get(m);
        if (!n) return "continue";
        var l = e.get(m),
          c = !0,
          r = !0;
        o.lockSymbolMap.has(n.posId) && (r = !(c = !1));
        var p = o.TIMES_SYMBOLS.includes(n.symbolID),
          y = (o.TOTEM_SYMBOLS.includes(n.symbolID), o.SCATTER_SYMBOLS.includes(n.symbolID)),
          h = n.symbolID == _dependency8.EBackendSymbolID.JACKPOT,
          d = o.needInitHeight ? {
            position: new _dependency2.Vec3(l.x, l.y + 300, l.z),
            active: c
          } : {
            active: c
          };
        _dependency2.tween(n.node).bindNodeState(false).set(d).to(s, {
          position: l
        }, {
          easing: function (t) {
            return o.symbolsBezierByTime(t);
          },
          onStart: function () {
            p && !o.fireballPosIds.includes(n.posId) && c && dispatch(_dependency9.GameEvent.SHOW_FIRE_BALL_QUICK_STOP, {
              data: n.posId
            }), y && (n.symbolID == _dependency8.EBackendSymbolID.GOLD_SCATTER ? n.playSPGScatterInBtm() : n.playScatterInBtm());
          },
          onComplete: function () {
            ++a == i && (_dependency6.default.canQuickStop = !1, o.isStartSymbolIn = !1, o.needInitHeight = !1, o.fireballPosIds.length = 0, t()), y && n.playScatterInAnim(), h && n.playJackpotInAnim(), p && o.openTimesSymbol(n.posId);
          }
        }).set({
          active: r
        }).tag(o.symbolInTag).start();
      }, m = this.TOTAL_SYMBOL - this.SYMBOL_ROW + n; m >= 0; m -= this.SYMBOL_ROW) l();
  }, n.showCloneSymbols = function (t) {
    _dependency2.tween(this).bindNodeState(false).delay(.1).call(function () {
      t();
    }).start();
  }, n.showCurrentViewFall = function (t) {
    var o = this.data.getData().gameState.posTransform;
    o || t && t(), o.length || t && t();
    for (var e = 0; e < o.length; e++) {
      var s = o[e],
        i = s.beforePos,
        a = s.afterPos,
        n = e == o.length - 1 ? t : null;
      this.updateSymbolMapIndex(i, a);
      var l = this.symbolsMap.get(a);
      l.node.name = "" + a, this.moveTo(l.node, a, !1, e, n);
    }
  }, n.symbolsBezierByTimeTurbo = function (t) {
    return _dependency2.bezierByTime([.73, .73, .66, 1.16], t);
  }, n.symbolsBezierByTime = function (t) {
    return _dependency2.bezierByTime([.67, 1.33, .61, 1], t);
  }, n.playSymbolsWin = function (t) {
    var o = this.data.getData().gameState,
      e = o.winSymbols,
      s = o.femaleTotemLevel,
      i = void 0 === s ? 0 : s,
      a = o.maleTotemLevel,
      n = void 0 === a ? 0 : a;
    null == e && (e = []);
    for (var l = 0; l < e.length; l++) for (var m = e[l], c = m.symbolPos, r = m.symbol, S = 0; S < c.length; S++) {
      var p = c[S],
        y = c.length == S + 1 && e.length == l + 1 ? function () {
          dispatch(_dependency9.GameEvent.STOP_BTM, {
            data: _dependency6.EBTM.SYMBOL_WIN
          }), t();
        } : null;
      r == _dependency8.EBackendSymbolID.WOMEN_TOTEM ? (this.playFemaleTotemWinSound(i), this.symbolsMap.get(p).playTotemWinAnim(y, i)) : r == _dependency8.EBackendSymbolID.MEN_TOTEM ? (this.playMaleTotemWinSound(n), this.symbolsMap.get(p).playTotemWinAnim(y, n)) : (this.symbolsMap.get(p).playWinAnim(y), dispatch(_dependency9.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency6.EBTM.SYMBOL_WIN
        }
      }));
    }
  }, n.playMaleTotemWinSound = function (t) {
    switch (t) {
      case 0:
      case 1:
        dispatch(_dependency9.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency6.EBTM.GOLDEN_FG_SYMBOL_CHB_LV1
          }
        });
        break;
      case 2:
        dispatch(_dependency9.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency6.EBTM.GOLDEN_FG_SYMBOL_CHB_LV2
          }
        });
        break;
      case 3:
        dispatch(_dependency9.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency6.EBTM.GOLDEN_FG_SYMBOL_CHB_LV3
          }
        });
    }
  }, n.playFemaleTotemWinSound = function (t) {
    switch (t) {
      case 0:
      case 1:
        dispatch(_dependency9.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency6.EBTM.GOLDEN_FG_SYMBOL_CHA_LV1
          }
        });
        break;
      case 2:
        dispatch(_dependency9.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency6.EBTM.GOLDEN_FG_SYMBOL_CHA_LV2
          }
        });
        break;
      case 3:
        dispatch(_dependency9.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency6.EBTM.GOLDEN_FG_SYMBOL_CHA_LV3
          }
        });
    }
  }, n.playOutAnimAndRemoveSymbols = function (t) {
    var o = this,
      e = this.data.getData().gameState,
      s = e.winSymbols,
      i = e.femaleTotemLevel,
      a = void 0 === i ? 0 : i,
      n = e.maleTotemLevel,
      l = .15;
    (a > 0 || (void 0 === n ? 0 : n) > 0) && (l = 0), s.forEach(function (t) {
      t.symbolPos.forEach(function (t) {
        o.symbolsMap.get(t).playOutAnim(), o.symbolsMap.delete(t);
      });
    }), dispatch(_dependency9.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency6.EBTM.SYMBOL_BREAK
      }
    }), _dependency2.tween(this).bindNodeState(false).delay(l).call(function () {
      t();
    }).start();
  }, n.killSymbols = function () {
    this.symbolsMap.forEach(function (t) {
      t.recycleSymbol();
    }), this.symbolsMap.clear(), this.outSymbolMap.clear(), _dependency2.Tween.stopAll();
  }, n.playScatterWin = function (t) {
    // Local simulation only: ordinary FG can contain a golden scatter, whose
    // Spine and delayed golden presentation both complete the native callback.
    if (this.data.getData().gameState.localRules === true) {
      var projectCComplete = t, projectCCompleted = false;
      t = function () {
        if (projectCCompleted) return;
        projectCCompleted = true;
        return projectCComplete.apply(this, arguments);
      };
    }
    var o = this,
      e = this.data.getData(),
      s = e.parser,
      i = e.gameState.isGoldenFg,
      a = !1,
      n = 0,
      l = s.view1D.filter(function (t) {
        return t == _dependency8.EBackendSymbolID.GOLD_SCATTER && (a = !0), t == _dependency8.EBackendSymbolID.SCATTER || t == _dependency8.EBackendSymbolID.GOLD_SCATTER;
      });
    a && dispatch(_dependency9.GameEvent.SHOW_DARK), s.view1D.forEach(function (e, s) {
      if (e == _dependency8.EBackendSymbolID.SCATTER || e == _dependency8.EBackendSymbolID.GOLD_SCATTER) {
        var a = ++n == l.length ? function () {
          0 == i && (t(), dispatch(_dependency9.GameEvent.MUSIC_VOLUME_MULTIPLE, {
            data: 2
          }));
        } : null;
        dispatch(_dependency9.GameEvent.MOVE_SCATTER, {
          data: o.symbolsMap.get(s).node
        }), o.symbolsMap.get(s).playScatterWinAnim(a);
      }
    }), dispatch(_dependency9.GameEvent.MUSIC_VOLUME_MULTIPLE, {
      data: .5
    }), a ? (App.globalAudio.pauseMusic(), dispatch(_dependency9.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency6.EBTM.SCATTER_SYMBOL_INTRO
      }
    }), _dependency2.tween(this).bindNodeState(false).delay(2.5).call(function () {
      t(), dispatch(_dependency9.GameEvent.MUSIC_VOLUME_MULTIPLE, {
        data: 2
      }), App.globalAudio.resumeMusic();
    }).start()) : dispatch(_dependency9.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency6.EBTM.SCATTER_WIN
      }
    });
  }, n.playJpWin = function (t) {
    var o = this,
      e = this.data.getData().parser,
      s = e.view1D.filter(function (t) {
        return t == _dependency8.EBackendSymbolID.JACKPOT;
      }),
      i = 0;
    e.view1D.forEach(function (e, a) {
      if (e == _dependency8.EBackendSymbolID.JACKPOT) {
        var n = ++i == s.length ? t : null;
        o.symbolsMap.get(a).playJpWinAnim(n);
      }
    }), dispatch(_dependency9.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency6.EBTM.JACKPOT_WIN
      }
    });
  }, n.playRareUpgrade = function (t) {
    for (var o = this, e = this.data.getData().gameState, s = e.timesUpgrade, i = void 0 === s ? [] : s, a = e.posTransform, n = function () {
        var t = i[l],
          e = null;
        a.forEach(function (o) {
          o.beforePos == t.symbolPos && (e = o.afterPos);
        }), null === e && (e = t.symbolPos), o.lockSymbolMap.has(e) && (o.lockSymbolMap.get(e).closeTimesLabel(), o.lockSymbolMap.get(e).playTimesSymbolsUpgrade(t), o.lockSymbolMap.get(e).playTimesSymbolsFunction());
        var s = o.symbolsMap.get(e);
        if (!s) return Log.e("playRareUpgrade: symbolsMap找不到pos " + e + " (symbolPos " + t.symbolPos + ")"), "continue";
        s.playTimesSymbolsUpgrade(t), s.playTimesSymbolsFunction();
      }, l = 0; l < i.length; l++) n();
  }, n.updateSymbolMapIndex = function (t, o) {
    var e = this.symbolsMap.get(t);
    this.symbolsMap.set(o, e), this.symbolsMap.delete(t);
  }, n.moveTo = function (t, o, e, s, i) {
    var a = this,
      n = this.configModel.reelConfig,
      l = n.speed,
      m = n.animStagger,
      c = this.data.getData().symbolPosConfig.get(o),
      r = c.x,
      p = c.y,
      y = c.z,
      d = t.getComponent(_dependency5.Symbol),
      b = this.TIMES_SYMBOLS.includes(d.symbolID),
      M = (this.TOTEM_SYMBOLS.includes(d.symbolID), this.SCATTER_SYMBOLS.includes(d.symbolID)),
      _ = d.symbolID == _dependency8.EBackendSymbolID.JACKPOT,
      f = d.node.getComponent(_dependency2.UITransform).height / 12,
      I = o % _dependency8.GameSymbolID.COL;
    return _dependency2.tween(t).bindNodeState(false).delay(s * m).to(.6 * l, {
      position: new _dependency2.Vec3(r, p - f, y)
    }, {
      easing: "quadOut",
      onStart: function () {
        b && e && dispatch(_dependency9.GameEvent.SHOW_FIRE_BALL, {
          data: d.posId
        }), a.tempCols.includes(I) || _dependency2.tween(a.node).bindNodeState(false).delay(.6 * l).call(function () {
          d.playSymbolHitBtm();
        }).start(), M && e && (d.symbolID == _dependency8.EBackendSymbolID.GOLD_SCATTER ? d.playSPGScatterInBtm() : d.playScatterInBtm());
      },
      onComplete: function () {
        _dependency2.tween(t).bindNodeState(false).to(.6 * l, {
          position: new _dependency2.Vec3(r, p, y)
        }, {
          easing: "quadOut",
          onComplete: function () {
            b && e && a.openTimesSymbol(d.posId), M && e && d.playScatterInAnim(), _ && e && d.playJackpotInAnim(), a.tempCols.includes(I) || a.tempCols.push(I), i && (a.tempCols.length = 0, i());
          }
        }).start();
      }
    }).start();
  }, n.newFallMoveTo = function (t, o, e) {
    var s = this.data.getData().symbolPosConfig.get(t),
      i = s.x,
      a = s.y,
      n = s.z,
      l = this.symbolsMap.get(t);
    l.node.setPosition(new _dependency2.Vec3(i, a + this.GAME_HEIGHT, n)), l.node.active = !0, this.moveTo(l.node, t, !0, o, e);
  }, n.showNewSymbolFall = function (t) {
    var o = this.data.getData().parser.view1D,
      e = Array.from(this.symbolsMap.keys()),
      s = Array.from({
        length: o.length
      }, function (t, o) {
        return o;
      }).filter(function (t) {
        return !e.includes(t);
      }).sort(function (t, o) {
        return t - o;
      }),
      i = 0;
    if (0 != s.length) {
      for (var a = 0; a < this.SYMBOL_ROW; a++) for (var n = this.TOTAL_SYMBOL - this.SYMBOL_ROW + a; n >= 0; n -= this.SYMBOL_ROW) if (s.includes(n)) {
        i++;
        var l = o[n],
          m = i == s.length ? t : null;
        this.createSymbol(n, l, !1, null), this.newFallMoveTo(n, a, m);
      }
    } else t();
  }, n.openTimesSymbol = function (t) {
    this.symbolsMap.get(t).openTimesSymbol(t);
  }, n.hideTimesSymbolLabel = function (t) {
    var o = this;
    this.symbolsMap.get(t).closeTimesLabel(), this.data.getData().parser.lockTimesSymbols.forEach(function (e, s, i) {
      e.symbolPos == t && 1 == e.lock && (o.lockSymbolMap.get(t).closeTimesLabel(), dispatch(_dependency9.GameEvent.TIMES_LOCK_OUT, t));
    });
  }, n.playTimesSymbolsFunction = function (t) {
    this.symbolsMap.get(t).playTimesSymbolsFunction();
  }, n.startQuickStop = function (t) {
    if (this.unscheduleAllCallbacks(), dispatch(_dependency9.GameEvent.SET_EARLY_SPIN_DELAYING_COMPLETED), this.isOutCompleted) _dependency2.Tween.stopAllByTag(this.symbolInTag), t();else {
      _dependency2.Tween.stopAllByTag(this.symbolOutTag), this.isStartSymbolIn && (_dependency2.Tween.stopAllByTag(this.symbolInTag), this.isStartSymbolIn = !1);
      var o = this.node.getComponentsInChildren(_dependency5.Symbol);
      if (o.length > 0) for (var e = 0; e < o.length; e++) o[e].recycleSymbol();
      for (var s = 0; s < this.TOTAL_SYMBOL; s++) {
        var i = this.symbolsMap.get(s);
        i && (i.recycleSymbol(), this.symbolsMap.delete(s)), s == this.TOTAL_SYMBOL - 1 && t();
      }
      this.createSymbols(!1), this.isOutCompleted = !0, this.needInitHeight = !0;
    }
  }, n.showSplitA_Anim = function (t, o) {
    var e = this.symbolsMap.get(t);
    this.lockSymbolMap.has(t) && e.initTimesSymbol(t), dispatch(_dependency9.GameEvent.MOVE_SPLIT, {
      data: e.node
    }), e.showSplitA_Anim(o), e.playSplitBtm();
  }, n.showSplitSymbolAnime = function (t, o, e) {
    for (var s = 0, i = 0; i < o.length; i++) this.startCloneTimeSymbol({
      from: t,
      target: o[i]
    }, function () {
      ++s == o.length && e();
    });
  }, n.startCloneTimeSymbol = function (t, o) {
    var e = this,
      s = this.symbolsMap.get(t.target),
      i = this.symbolsMap.get(t.from),
      a = null,
      n = !1;
    this.lockSymbolMap.has(t.from) && (a = this.lockSymbolMap.get(t.from), n = !0), s && (s.node.removeFromParent(), this.symbolsMap.delete(t.target));
    var l = _dependency2.instantiate(i.node).getComponent(_dependency5.Symbol);
    this.symbolsMap.set(t.target, l), l.node.name = t.target + "";
    var m = this.data.getData().symbolPosConfig.get(t.target);
    l.node.setPosition(m), dispatch(_dependency9.GameEvent.MOVE_SPLIT, {
      data: l.node
    });
    var c = {
      posId: t.target,
      symbolId: i.symbolID,
      isTimesSymbol: !0
    };
    if (l.setData(c), l.showSplitB_Anim(o), n && a) {
      var S = _dependency2.instantiate(a.node).getComponent(_dependency5.Symbol),
        p = {
          posId: t.target,
          symbolId: i.symbolID,
          isTimesSymbol: !0
        };
      this.lockView.addChild(S.node), S.setData(p), this.lockSymbolMap.set(t.target, S), S.node.name = t.target + "";
      var y = this.data.getData().symbolPosConfig.get(t.target);
      S.node.setPosition(y), S.showSplitB_Anim(function () {
        e.lockView.addChild(a.node);
      }), S.cloneLockAnime();
    }
  }, n.showTimesLock_Anim = function (t, o, e, s, i) {
    this.lockSymbolMap.get(o) ? i() : (this.createLockSymbol(o, t, !0, s), this.lockSymbolMap.get(o).showTimesLock_Anim(e, i));
  }, n.showTimesLock_LevelDown = function (t, o, e) {
    var s = this.lockSymbolMap.get(t);
    s && s.showTimesStage_Anim(o, e, !0);
  }, n.timeLock_out = function (t) {
    var o = this.lockSymbolMap.get(t);
    o && (o.node.active = !1, this.node.removeChild(o.node), this.lockSymbolMap.delete(t), o.recycleSymbol());
  }, n.timeLock_Allout = function () {
    var t = this;
    this.lockSymbolMap.forEach(function (o, e) {
      var s = t.symbolsMap.get(e);
      s.isTimeSymbol && (o && (s.isRare = o.isRare), s.initTimesSymbol(e)), o && (o.node.active = !1, o.node.parent = null, o.recycleSymbol(), t.data.getData().parser.lockTimesSymbols.delete(e));
    }), this.lockSymbolMap.clear(), this.data.getData().parser.lockTimesSymbols.clear();
  }, n.reset = function () {}, n.init = function () {}, n.show = function () {
    this.node.active = !0;
  }, n.hide = function () {
    this.node.active = !1;
  }, n.addEvents = function () {
    var t = this;
    this.on(_dependency4.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function () {
      t.createSymbols(!0);
    }), this.on(_dependency9.GameEvent.PARSER_REPLAY_COMPLETED, function () {
      t.createSymbols(!0);
    }), this.on(_dependency9.GameEvent.SHOW_SYMBOLS_OUT_ANIM, function (o) {
      dispatch(_dependency9.GameEvent.HIDE_DARK), t.outSymbolMap.clear(), t.symbolsMap.forEach(function (o, e) {
        t.outSymbolMap.set(e, o);
      }), t.symbolsMap.clear(), t.showSymbolsOut(o.complete);
    }), this.on(_dependency9.GameEvent.SHOW_SYMBOLS_IN_ANIM, function (o) {
      0 == t.isOutCompleted ? t.schedule(function () {
        1 == t.isOutCompleted && (t.unscheduleAllCallbacks(), t.isStartSymbolIn = !0, t.createSymbols(!1), t.showSymbolsIn(o.complete));
      }, .001) : (t.isStartSymbolIn = !0, t.createSymbols(!1), t.showSymbolsIn(o.complete));
    }), this.on(_dependency9.GameEvent.SHOW_SYMBOLS_WIN, function (o) {
      t.playSymbolsWin(o.complete);
    }), this.on(_dependency9.GameEvent.REMOVE_SYMBOLS, function (o) {
      t.playOutAnimAndRemoveSymbols(o.complete);
    }), this.on(_dependency9.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM, function (o) {
      t.showCurrentViewFall(o.complete);
    }), this.on(_dependency9.GameEvent.CLONE_TIMES, function (o) {
      t.showCloneSymbols(o.complete);
    }), this.on(_dependency9.GameEvent.SHOW_NEW_SYMBOLS_IN_ANIM, function (o) {
      t.showNewSymbolFall(o.complete), t.setSymbolsSiblingIndex();
    }), this.on(_dependency9.GameEvent.SHOW_SCATTER_WIN, function (o) {
      t.playScatterWin(o.complete);
    }), this.on(_dependency9.GameEvent.SHOW_JP_WIN, function (o) {
      t.playJpWin(o.complete);
    }), this.on(_dependency9.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, function (o) {
      t.playRareUpgrade(o.complete);
    }), this.on(_dependency9.GameEvent.HIDE_TIMES_LABEL, function (o) {
      t.hideTimesSymbolLabel(o.data);
    }), this.on(_dependency9.GameEvent.PLAY_TIMES_SYMBOL_FUNCTION, function (o) {
      t.playTimesSymbolsFunction(o.data);
    }), this.on(_dependency9.GameEvent.START_QUICK_STOP, function (o) {
      t.startQuickStop(o.complete);
    }), this.on(_dependency9.GameEvent.SHOW_SYMBOLS_QUICK_IN_ANIM, function (o) {
      t.showSymbolsQuickIn(o.complete);
    }), this.on(_dependency4.SlotFrameworkEvent.KILL_SYMBOLS, function () {
      t.killSymbols();
    }), this.on(_dependency9.GameEvent.SHOW_TIMES_B, function (o) {
      for (var e = t.data.getData().gameState.splitList.slice(), s = 0, i = 0; i < e.length; i++) t.showSplitSymbolAnime(e[i].from, e[i].to, function () {
        ++s == e.length && o.complete();
      });
    }), this.on(_dependency9.GameEvent.SHOW_TIMES_A, function (o) {
      var e = t.data.getData().gameState.splitList.slice(),
        s = 0;
      e.forEach(function (i) {
        t.showSplitA_Anim(i.from, function () {
          ++s >= e.length && o.complete();
        });
      }), dispatch(_dependency9.GameEvent.SHOW_CLONE_TIMES_MOVING, {});
    }), this.on(_dependency9.GameEvent.SHOW_TIMES_LOCK, function (o) {
      _dependency2.tween(t).bindNodeState(false).delay(.5).call(function () {
        var e = t.data.getData().parser.lockTimesSymbols,
          s = 0;
        e.forEach(function (i) {
          t.showTimesLock_Anim(i.symbol, i.symbolPos, i.lock, i.times, function () {
            ++s >= e.size && o.complete();
          });
        });
      }).start();
    }), this.on(_dependency9.GameEvent.SHOW_TIMES_STAGE, function (o) {
      t.data.getData().parser.lockTimesSymbols.forEach(function (o, e) {
        t.showTimesLock_LevelDown(e, o.lock);
      });
    }), this.on(_dependency9.GameEvent.TIMES_LOCK_OUT, function (o) {
      t.timeLock_out(o);
    }), this.on(_dependency9.GameEvent.TIMES_LOCK_ALLOUT, function (o) {
      t.timeLock_Allout();
    }), this.on(_dependency9.GameEvent.BACK_SCATTER, function (o) {
      o.data && t.node.addChild(o.data);
    }), this.on(_dependency9.GameEvent.BACK_SPLIT, function (o) {
      o.data && t.node.addChild(o.data);
    });
  }, _dependency.createClass(o, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }, {
    key: "configModel",
    get: function () {
      return _dependency6.default.getData();
    }
  }]), o;
}(_dependency3.default)).prototype, "gameSymbol", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = _dependency.applyDecoratedDescriptor(C.prototype, "lockView", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = C)) || v));
_dependency2.cclegacy._RF.pop();
