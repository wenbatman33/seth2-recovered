// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-EventComponent";
import * as _dependency4 from "./g1001-Symbol";
import * as _dependency5 from "./g1001-GameConfigModel";
import * as _dependency6 from "./g1001-GameData";
import * as _dependency7 from "./g1001-GameSymbolID";
import * as _dependency8 from "./g1001-GameEvent";
import * as _dependency9 from "./g1001-types";
import * as _dependency0 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
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
var o, e, n, s, i, a, l, r, c, m, S, u, y, p, h, b, f, d, M;
var O;
_dependency2.cclegacy._RF.push({}, "69b85XIVD9ID7fZRO0AFeBW", "SymbolView", void 0);
var T = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("SymbolView", T("SymbolView")(O = function (t) {
  var _nativeConstructor = n;
  function n() {
    for (var o, e = arguments.length, n = new Array(e), s = 0; s < e; s++) n[s] = arguments[s];
    return (o = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).symbolsMap = new Map(), o.oldSymbolsMap = new Map(), o.SYMBOL_ROW = 6, o.SYMBOL_COL = 5, o.TOTAL_SYMBOL = o.SYMBOL_ROW * o.SYMBOL_COL, o.GAME_HEIGHT = 720, o.BIG_SYMBOLS = [_dependency7.EBackendSymbolID.EYE, _dependency7.EBackendSymbolID.SNAKE, _dependency7.EBackendSymbolID.BOW, _dependency7.EBackendSymbolID.MACHETE, _dependency7.EBackendSymbolID.SCATTER, _dependency7.EBackendSymbolID.JACKPOT], o.TIMES_SYMBOLS = [_dependency7.EBackendSymbolID.T1, _dependency7.EBackendSymbolID.T2, _dependency7.EBackendSymbolID.T3, _dependency7.EBackendSymbolID.T4], o.symbolOutTag = 1234, o.symbolInTag = 5678, o.isOutCompleted = !1, o.isStartSymbolIn = !1, o.needInitHeight = !1, o.fireballPosIds = [], o;
  }
  _dependency.inheritsLoose(n, t);
  var s = n.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.createSymbolPool();
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.createSymbolPool = function () {
    for (var t = _dependency5.default.getData().filePaths.symbolPrefab, o = App.cache.get(this.data.module, t).data, e = 0; e < 2 * this.TOTAL_SYMBOL; e++) {
      var n = _dependency2.instantiate(o);
      n.addComponent(_dependency4.Symbol), App.pool.createPool(_dependency9.EPool.SYMBOL_POOL).cloneNode = n, App.pool.createPool(_dependency9.EPool.SYMBOL_POOL).put(n);
    }
  }, s.createSymbols = function (t) {
    var o = this;
    this.data.getData().parser.view1D.forEach(function (e, n) {
      o.createSymbol(n, e, t);
    }), this.setSymbolsSiblingIndex();
  }, s.createSymbol = function (t, o, e) {
    var n = this.data.getData().symbolPosConfig,
      s = App.pool.getPool(_dependency9.EPool.SYMBOL_POOL).get(),
      i = s.getComponent(_dependency4.Symbol),
      a = this.BIG_SYMBOLS.includes(o),
      l = this.TIMES_SYMBOLS.includes(o);
    s.position.set(n.get(t)), s.name = "" + t, e && (s.active = !0);
    var r = {
      posId: t,
      symbolId: o
    };
    this.symbolsMap.set(t, i), this.node.addChild(s), i.setData(r), l && e && i.initTimesSymbol(t), a && i.playLoopAnim();
  }, s.setSymbolsSiblingIndex = function () {
    for (var t = 0, o = 0; o < this.TOTAL_SYMBOL; o++) {
      var e = this.symbolsMap.get(o);
      this.TIMES_SYMBOLS.includes(e.symbolID) ? (e.node.setSiblingIndex(29 - t), t++) : e.node.setSiblingIndex(o);
    }
  }, s.showSymbolsOut = function (t) {
    var o = this,
      e = _dependency5.default.isTurbo,
      n = this.configModel.reelConfig,
      s = n.animStagger,
      i = n.speed,
      a = e ? _dependency5.EBTM.SYMBOL_TURBO_FALL_OUT : _dependency5.EBTM.SYMBOL_NORMAL_FALL_OUT,
      r = this.oldSymbolsMap.size,
      c = 0,
      S = 0;
    if (this.isOutCompleted = !1, !r) return this.isOutCompleted = !0, void (t && t());
    for (var u = 0; u < this.SYMBOL_ROW; u++) for (var h = function () {
        var e = o.oldSymbolsMap.get(b);
        if (!e) return "continue";
        c++, _dependency2.tween(e.node).bindNodeState(false).delay(c * s).by(i, {
          position: new _dependency2.Vec3(0, -o.GAME_HEIGHT, 0)
        }, {
          easing: "cubicInOut",
          onStart: function () {
            e.setSymbolBlurActive(!0);
          }
        }).call(function () {
          S++, e.recycleSymbol(), S == r && (o.isOutCompleted = !0, t());
        }).tag(o.symbolOutTag).start();
      }, b = this.TOTAL_SYMBOL - this.SYMBOL_ROW + u; b >= 0; b -= this.SYMBOL_ROW) h();
    dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: a
      }
    });
  }, s.showSymbolsIn = function (t) {
    _dependency5.default.isTurbo ? this.showTurboSymbolsIn(t) : this.showNormalSymbolsIn(t);
  }, s.showNormalSymbolsIn = function (t) {
    for (var o = this, e = this.configModel.reelConfig, n = e.animStagger, s = e.speed, i = _dependency5.EBTM.SYMBOL_NORMAL_FALL_IN, a = this.symbolsMap.size, r = 0, c = 0, S = 0; S < this.SYMBOL_ROW; S++) for (var u = function () {
        var e = o.symbolsMap.get(h);
        if (!e) return "continue";
        var S = e.node.position,
          u = S.x,
          p = S.y,
          d = S.z,
          M = o.TIMES_SYMBOLS.includes(e.symbolID);
        r++, _dependency2.tween(e.node).bindNodeState(false).set({
          position: new _dependency2.Vec3(u, p + o.GAME_HEIGHT, d),
          active: !0
        }).delay(r * n).to(s, {
          position: new _dependency2.Vec3(u, p, d)
        }, {
          onStart: function () {
            M && (dispatch(_dependency8.GameEvent.SHOW_FIRE_BALL, {
              data: e.posId
            }), o.fireballPosIds.push(e.posId)), e.setSymbolBlurActive(!0);
          }
        }).to(.085, {
          position: new _dependency2.Vec3(u, p - 20, d)
        }).to(.1, {
          position: new _dependency2.Vec3(u, p, d)
        }).call(function () {
          ++c == a && (_dependency5.default.canQuickStop = !1, o.fireballPosIds.length = 0, o.isStartSymbolIn = !1, t()), 1 == c && dispatch(_dependency8.GameEvent.PLAY_BTM, {
            data: {
              url: i
            }
          }), e.symbolID == _dependency7.EBackendSymbolID.SCATTER && e.playScatterInBtm(), M && o.openTimesSymbol(e.posId), e.setSymbolBlurActive(!1);
        }).tag(o.symbolInTag).start();
      }, h = this.TOTAL_SYMBOL - this.SYMBOL_ROW + S; h >= 0; h -= this.SYMBOL_ROW) u();
  }, s.showTurboSymbolsIn = function (t) {
    for (var o = this, e = this.configModel.reelConfig.speed, n = _dependency5.EBTM.SYMBOL_TURBO_FALL_IN, s = this.symbolsMap.size, i = 0, a = 0; a < this.SYMBOL_ROW; a++) for (var r = function () {
        var a = o.symbolsMap.get(S);
        if (!a) return "continue";
        var r = a.node.position,
          u = r.x,
          p = r.y,
          h = r.z,
          d = o.TIMES_SYMBOLS.includes(a.symbolID);
        a.symbolID == _dependency7.EBackendSymbolID.SCATTER && (_dependency5.default.isTurbo ? a.playScatterInBtmFast() : a.playScatterInBtm());
        var M = a.node.getComponent(_dependency2.UITransform).height / 12,
          O = Math.floor(S / 6),
          T = p + o.GAME_HEIGHT - 25 * (4 - O) - 60 * (4 - O);
        _dependency2.tween(a.node).bindNodeState(false).set({
          position: new _dependency2.Vec3(u, T, h),
          active: !0
        }).to(1.1 * e, {
          position: new _dependency2.Vec3(u, p - M, h)
        }, {
          easing: "quintOut",
          onStart: function () {
            d && (dispatch(_dependency8.GameEvent.SHOW_FIRE_BALL, {
              data: a.posId
            }), o.fireballPosIds.push(a.posId)), a.setSymbolBlurActive(!0);
          },
          onComplete: function () {
            _dependency2.tween(a.node).bindNodeState(false).to(.04, {
              position: new _dependency2.Vec3(u, p, h)
            }, {
              easing: "quadOut",
              onComplete: function () {
                ++i == s && (_dependency5.default.canQuickStop = !1, o.isStartSymbolIn = !1, o.fireballPosIds.length = 0, t()), 1 == i && dispatch(_dependency8.GameEvent.PLAY_BTM, {
                  data: {
                    url: n
                  }
                }), d && o.openTimesSymbol(a.posId), a.setSymbolBlurActive(!1);
              }
            }).tag(o.symbolInTag).start();
          }
        }).tag(o.symbolInTag).start();
      }, S = this.TOTAL_SYMBOL - this.SYMBOL_ROW + a; S >= 0; S -= this.SYMBOL_ROW) r();
  }, s.showSymbolsQuickIn = function (t) {
    for (var o = this, e = this.data.getData().symbolPosConfig, n = _dependency5.default.getData().symbolQuickInTime, s = this.symbolsMap.size, i = 0, a = 0; a < this.SYMBOL_ROW; a++) for (var r = function () {
        var a = o.symbolsMap.get(c);
        if (!a) return "continue";
        var r = e.get(c),
          S = o.TIMES_SYMBOLS.includes(a.symbolID),
          u = o.needInitHeight ? {
            position: new _dependency2.Vec3(r.x, r.y + 300, r.z),
            active: !0
          } : {
            active: !0
          };
        a.symbolID == _dependency7.EBackendSymbolID.SCATTER && a.playScatterInBtmFast(), _dependency2.tween(a.node).bindNodeState(false).set(u).to(n, {
          position: r
        }, {
          easing: function (t) {
            return o.symbolsBezierByTime(t);
          },
          onStart: function () {
            S && !o.fireballPosIds.includes(a.posId) && dispatch(_dependency8.GameEvent.SHOW_FIRE_BALL_QUICK_STOP, {
              data: a.posId
            }), a.setSymbolBlurActive(!0);
          },
          onComplete: function () {
            ++i == s && (_dependency5.default.canQuickStop = !1, o.isStartSymbolIn = !1, o.needInitHeight = !1, o.fireballPosIds.length = 0, t()), S && o.openTimesSymbol(a.posId), a.setSymbolBlurActive(!1);
          }
        }).tag(o.symbolInTag).start();
      }, c = this.TOTAL_SYMBOL - this.SYMBOL_ROW + a; c >= 0; c -= this.SYMBOL_ROW) r();
  }, s.showCurrentViewFall = function (t) {
    var o = this.data.getData().gameState.posTransform;
    o.length || t && t();
    for (var e = 0; e < o.length; e++) {
      var n = o[e],
        s = n.beforePos,
        i = n.afterPos,
        a = e == o.length - 1 ? t : null;
      this.updateSymbolMapIndex(s, i);
      var l = this.symbolsMap.get(i);
      l.node.name = "" + i, this.moveTo(l.node, i, !1, e, a);
    }
  }, s.symbolsBezierByTimeTurbo = function (t) {
    return _dependency2.bezierByTime([.73, .73, .66, 1.16], t);
  }, s.symbolsBezierByTime = function (t) {
    return _dependency2.bezierByTime([.67, 1.33, .61, 1], t);
  }, s.playSymbolsWin = function (t) {
    for (var o = this.data.getData().gameState.winSymbols, e = 0; e < o.length; e++) for (var n = o[e].symbolPos, s = 0; s < n.length; s++) {
      var i = n[s],
        a = n.length == s + 1 && o.length == e + 1 ? function () {
          t(), dispatch(_dependency8.GameEvent.STOP_BTM, {
            data: _dependency5.EBTM.SYMBOL_WIN
          });
        } : null;
      this.symbolsMap.get(i).playWinAnim(a);
    }
    dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.SYMBOL_WIN
      }
    });
  }, s.playOutAnimAndRemoveSymbols = function (t) {
    var o = this;
    this.data.getData().gameState.winSymbols.forEach(function (t) {
      t.symbolPos.forEach(function (t) {
        o.symbolsMap.get(t).playOutAnim(), o.symbolsMap.delete(t);
      });
    }), dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.SYMBOL_BREAK
      }
    }), _dependency2.tween(this).bindNodeState(false).delay(.15).call(function () {
      t();
    }).start();
  }, s.killSymbols = function () {
    this.symbolsMap.forEach(function (t) {
      t.recycleSymbol();
    }), this.symbolsMap.clear(), this.oldSymbolsMap.clear(), _dependency2.Tween.stopAll();
  }, s.playScatterWin = function (t) {
    var o = this,
      e = this.data.getData().parser,
      n = e.view1D.filter(function (t) {
        return t == _dependency7.EBackendSymbolID.SCATTER;
      }),
      s = 0;
    e.view1D.forEach(function (e, i) {
      if (e == _dependency7.EBackendSymbolID.SCATTER) {
        var a = ++s == n.length ? function () {
          t(), dispatch(_dependency8.GameEvent.MUSIC_VOLUME_MULTIPLE, {
            data: 2
          });
        } : null;
        o.symbolsMap.get(i).playScatterWinAnim(a);
      }
    }), dispatch(_dependency8.GameEvent.MUSIC_VOLUME_MULTIPLE, {
      data: .5
    }), dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.SCATTER_WIN
      }
    });
  }, s.playJpWin = function (t) {
    var o = this,
      e = this.data.getData().parser,
      n = e.view1D.filter(function (t) {
        return t == _dependency7.EBackendSymbolID.JACKPOT;
      }),
      s = 0;
    e.view1D.forEach(function (e, i) {
      if (e == _dependency7.EBackendSymbolID.JACKPOT) {
        var a = ++s == n.length ? t : null;
        o.symbolsMap.get(i).playJpWinAnim(a);
      }
    }), dispatch(_dependency8.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency5.EBTM.JACKPOT_WIN
      }
    });
  }, s.playRareUpgrade = function () {
    for (var t = this, o = this.data.getData().gameState, e = o.timesUpgrade, n = o.posTransform, s = function () {
        var o = e[i],
          s = null;
        n.forEach(function (t) {
          t.beforePos == o.symbolPos && (s = t.afterPos);
        }), null === s && (s = o.symbolPos);
        var a = t.symbolsMap.get(s);
        if (!a) return Log.e("playRareUpgrade: symbolsMap找不到pos " + s + " (symbolPos " + o.symbolPos + ")"), "continue";
        a.playTimesSymbolsUpgrade(o), a.playTimesSymbolsFunction();
      }, i = 0; i < e.length; i++) s();
  }, s.updateSymbolMapIndex = function (t, o) {
    var e = this.symbolsMap.get(t);
    this.symbolsMap.set(o, e), this.symbolsMap.delete(t);
  }, s.moveTo = function (t, o, e, n, s) {
    var i = this,
      a = this.configModel.reelConfig,
      r = a.speed,
      S = a.animStagger,
      y = this.data.getData().symbolPosConfig.get(o),
      p = y.x,
      h = y.y,
      b = y.z,
      d = t.getComponent(_dependency4.Symbol),
      M = this.TIMES_SYMBOLS.includes(d.symbolID),
      O = d.node.getComponent(_dependency2.UITransform).height / 12;
    return _dependency2.tween(t).bindNodeState(false).delay(n * S).to(.6 * r, {
      position: new _dependency2.Vec3(p, h - O, b)
    }, {
      easing: "quadOut",
      onStart: function () {
        M && e && dispatch(_dependency8.GameEvent.SHOW_FIRE_BALL, {
          data: d.posId
        }), d.setSymbolBlurActive(!0);
      },
      onComplete: function () {
        _dependency2.tween(t).bindNodeState(false).to(.6 * r, {
          position: new _dependency2.Vec3(p, h, b)
        }, {
          easing: "quadOut",
          onComplete: function () {
            s && s(), M && e && i.openTimesSymbol(d.posId), d.setSymbolBlurActive(!1);
          }
        }).start();
      }
    }).start();
  }, s.newFallMoveTo = function (t, o, e) {
    var n = this.data.getData().symbolPosConfig.get(t),
      s = n.x,
      i = n.y,
      a = n.z,
      l = this.symbolsMap.get(t);
    l.node.setPosition(new _dependency2.Vec3(s, i + this.GAME_HEIGHT, a)), l.node.active = !0, l.symbolID == _dependency7.EBackendSymbolID.SCATTER && l.playScatterInBtmFast(), this.moveTo(l.node, t, !0, o, e);
  }, s.showNewSymbolFall = function (t) {
    for (var o = this.data.getData().parser.view1D, e = Array.from(this.symbolsMap.keys()), n = Array.from({
        length: o.length
      }, function (t, o) {
        return o;
      }).filter(function (t) {
        return !e.includes(t);
      }).sort(function (t, o) {
        return t - o;
      }), s = 0, i = 0; i < this.SYMBOL_ROW; i++) for (var a = this.TOTAL_SYMBOL - this.SYMBOL_ROW + i; a >= 0; a -= this.SYMBOL_ROW) if (n.includes(a)) {
      s++;
      var l = o[a],
        r = s == n.length ? t : null;
      this.createSymbol(a, l, !1), this.newFallMoveTo(a, i, r);
    }
  }, s.openTimesSymbol = function (t) {
    this.symbolsMap.get(t).openTimesSymbol(t);
  }, s.hideTimesSymbolLabel = function (t) {
    this.symbolsMap.get(t).closeTimesLabel();
  }, s.playTimesSymbolsFunction = function (t) {
    this.symbolsMap.get(t).playTimesSymbolsFunction();
  }, s.startQuickStop = function (t) {
    if (this.unscheduleAllCallbacks(), dispatch(_dependency8.GameEvent.SET_EARLY_SPIN_DELAYING_COMPLETED), this.isOutCompleted) _dependency2.Tween.stopAllByTag(this.symbolInTag), t();else {
      _dependency2.Tween.stopAllByTag(this.symbolOutTag), this.isStartSymbolIn && (_dependency2.Tween.stopAllByTag(this.symbolInTag), this.isStartSymbolIn = !1);
      var o = this.node.getComponentsInChildren(_dependency4.Symbol);
      if (o.length > 0) for (var e = 0; e < o.length; e++) o[e].recycleSymbol();
      for (var n = 0; n < this.TOTAL_SYMBOL; n++) {
        var s = this.symbolsMap.get(n);
        s && (s.recycleSymbol(), this.symbolsMap.delete(n)), n == this.TOTAL_SYMBOL - 1 && t();
      }
      this.createSymbols(!1), this.isOutCompleted = !0, this.needInitHeight = !0;
    }
  }, s.reset = function () {}, s.init = function () {}, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {
    var t = this;
    this.on(_dependency0.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function () {
      t.createSymbols(!0);
    }), this.on(_dependency8.GameEvent.PARSER_REPLAY_COMPLETED, function () {
      t.createSymbols(!0);
    }), this.on(_dependency8.GameEvent.SHOW_SYMBOLS_OUT_ANIM, function (o) {
      t.oldSymbolsMap.clear(), t.symbolsMap.forEach(function (o, e) {
        t.oldSymbolsMap.set(e, o);
      }), t.symbolsMap.clear(), t.showSymbolsOut(o.complete);
    }), this.on(_dependency8.GameEvent.SHOW_SYMBOLS_IN_ANIM, function (o) {
      0 == t.isOutCompleted ? t.schedule(function () {
        1 == t.isOutCompleted && (t.unscheduleAllCallbacks(), t.isStartSymbolIn = !0, t.createSymbols(!1), t.showSymbolsIn(o.complete));
      }, .001) : (t.isStartSymbolIn = !0, t.createSymbols(!1), t.showSymbolsIn(o.complete));
    }), this.on(_dependency8.GameEvent.SHOW_SYMBOLS_WIN, function (o) {
      t.playSymbolsWin(o.complete);
    }), this.on(_dependency8.GameEvent.REMOVE_SYMBOLS, function (o) {
      t.playOutAnimAndRemoveSymbols(o.complete);
    }), this.on(_dependency8.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM, function (o) {
      t.showCurrentViewFall(o.complete);
    }), this.on(_dependency8.GameEvent.SHOW_NEW_SYMBOLS_IN_ANIM, function (o) {
      t.showNewSymbolFall(o.complete), t.setSymbolsSiblingIndex();
    }), this.on(_dependency8.GameEvent.SHOW_SCATTER_WIN, function (o) {
      t.playScatterWin(o.complete);
    }), this.on(_dependency8.GameEvent.SHOW_JP_WIN, function (o) {
      t.playJpWin(o.complete);
    }), this.on(_dependency8.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, function () {
      t.playRareUpgrade();
    }), this.on(_dependency8.GameEvent.HIDE_TIMES_LABEL, function (o) {
      t.hideTimesSymbolLabel(o.data);
    }), this.on(_dependency8.GameEvent.PLAY_TIMES_SYMBOL_FUNCTION, function (o) {
      t.playTimesSymbolsFunction(o.data);
    }), this.on(_dependency8.GameEvent.START_QUICK_STOP, function (o) {
      t.startQuickStop(o.complete);
    }), this.on(_dependency8.GameEvent.SHOW_SYMBOLS_QUICK_IN_ANIM, function (o) {
      t.showSymbolsQuickIn(o.complete);
    }), this.on(_dependency0.SlotFrameworkEvent.KILL_SYMBOLS, function () {
      t.killSymbols();
    });
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency6.default);
    }
  }, {
    key: "configModel",
    get: function () {
      return _dependency5.default.getData();
    }
  }]), n;
}(_dependency3.default)) || O);
_dependency2.cclegacy._RF.pop();
