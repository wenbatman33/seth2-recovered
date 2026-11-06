// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-ReelsController";
import * as _dependency4 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency5 from "./g1002-GameData";
import * as _dependency6 from "./g1002-GameSymbolID";
import * as _dependency7 from "./g1002-GameEvent";
import * as _dependency8 from "./g1002-GameExplodeReelController";
import * as _dependency9 from "./g1002-types";
import * as _dependency0 from "./g1002-GameSymbol";
import * as _dependency1 from "./g1002-GameConfigModel";
import * as _dependency10 from "../../shared/scripts/main-ReelDataSetting";
import * as _dependency11 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency12 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency13 from "../../shared/scripts/main-ReelEnum";
var _export;
export { _export as GameReelsController };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameReelsController":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, n, s, o, l, a, r, c, p, S, h, u, d, m, L, g, f, E, _, R, y, T, O, b, A, C, x, W, N, I;
var v, M, B, P, D, F;
_dependency2.cclegacy._RF.push({}, "2d6deRQ1VtFo7FtOLEg4Ube", "GameReelsController", void 0);
var H = _dependency2._decorator.ccclass,
  Y = _dependency2._decorator.property,
  U = _dependency2._decorator.requireComponent;
_publish("GameReelsController", (v = H("GameReelsController"), M = U(_dependency2.Mask), B = Y(_dependency2.Prefab), v(P = M((F = _dependency.applyDecoratedDescriptor((D = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "gameSymbol", F, _dependency.assertThisInitialized(e)), e.explodeReelsController = new _dependency8.GameExplodeReelController(_dependency.assertThisInitialized(e)), e.scatterCount = 0, e.bonusCount = 0, e.isNoWinExpecting = !1, e.isClickQuickStop = !1, e;
  }
  _dependency.inheritsLoose(e, t);
  var c = e.prototype;
  return c.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, c.start = function () {
    this.init(), t.prototype.start.call(this);
  }, c.onDestroy = function () {
    this.removeEvents();
  }, c.init = function () {}, c.resetStatus = function () {
    this.initSingleReels(), this.reelList.forEach(function (t, e) {
      t.status = _dependency13.EReelStatus.FINISH;
    }), this.status = _dependency13.EReelStatus.FINISH;
  }, c.initSymbolNode = function () {
    var t = _dependency2.instantiate(this.gameSymbol);
    this.reelSetting.symbolNode = t;
  }, c.initLayout = function () {
    var t = this.node.getComponent(_dependency2.Layout);
    t.type = _dependency2.Layout.Type.HORIZONTAL, t.resizeMode = _dependency2.Layout.ResizeMode.CONTAINER;
  }, c.playSymbolWin = function (t, e, i) {
    var n = this,
      s = !1,
      o = this.reelList[0].singleReelSetting.topCount,
      l = new Set();
    t.forEach(function (t) {
      t.positions.forEach(function (t) {
        var a = t.toString();
        if (!l.has(a)) {
          l.add(a);
          var r = t[0],
            c = t[1] + o;
          n.reelList[r].symbolList[c].getComponent(_dependency0.GameSymbol).playWinAnim(e, function () {
            s || (s = !0, i());
          });
        }
      });
    }), l.clear();
  }, c.checkAndPlayScatterHit = function (t) {
    var e = this;
    this.reelList[t].getMidSymbolList().forEach(function (t, i) {
      t.getComponent(_dependency0.GameSymbol).id === _dependency6.EBackendSymbolID.SCATTER && (t.getComponent(_dependency0.GameSymbol).playHitAnim(), e.scatterCount++, 1 === e.scatterCount ? dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.SCATTER_HIT_FIRST
        }
      }) : 2 === e.scatterCount && dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.SCATTER_HIT_SECOND
        }
      }));
    }), 4 === t && (this.scatterCount = 0);
  }, c.checkAndPlayBonusHit = function (t) {
    var e = this;
    this.reelList[t].getMidSymbolList().forEach(function (t, i) {
      t.getComponent(_dependency0.GameSymbol).id === _dependency6.EBackendSymbolID.BONUS && (t.getComponent(_dependency0.GameSymbol).playHitAnim(), e.bonusCount++, 1 === e.bonusCount ? dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.BONUS_HIT_FIRST
        }
      }) : 2 === e.bonusCount && dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.BONUS_HIT_SECOND
        }
      }));
    }), 4 === t && (this.bonusCount = 0);
  }, c.checkAndPlayWildHit = function (t) {
    this.reelList[t].getMidSymbolList().forEach(function (t, e) {
      t.getComponent(_dependency0.GameSymbol).id === _dependency6.EBackendSymbolID.WILD && (t.getComponent(_dependency0.GameSymbol).playHitAnim(), dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.SYMBOL_WILD_HIT
        }
      }));
    });
  }, c.playScatterWin = function (t) {
    for (var e, i = this, n = !1, s = [], l = _dependency.createForOfIteratorHelperLoose(this.reelList); !(e = l()).done;) for (var a, r = e.value, c = _dependency.createForOfIteratorHelperLoose(r.symbolList); !(a = c()).done;) {
      var p = a.value;
      p.getComponent(_dependency0.GameSymbol).id === _dependency6.EBackendSymbolID.SCATTER && s.push(p);
    }
    dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.SCATTER_WIN
      }
    }), this.scheduleOnce(function () {
      dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.SCATTER_WIN_COMPLETE
        }
      });
    }, .5), s.forEach(function (e) {
      e.getComponent(_dependency0.GameSymbol).playScatterWinAnim(function () {
        n || (n = !0, i.scheduleOnce(function () {
          t();
        }, .5));
      });
    });
  }, c.playBonusWin = function (t) {
    for (var e, i = !1, n = [], s = _dependency.createForOfIteratorHelperLoose(this.reelList); !(e = s()).done;) for (var l, a = e.value, r = _dependency.createForOfIteratorHelperLoose(a.symbolList); !(l = r()).done;) {
      var c = l.value;
      c.getComponent(_dependency0.GameSymbol).id === _dependency6.EBackendSymbolID.BONUS && n.push(c);
    }
    dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.BONUS_WIN
      }
    }), this.scheduleOnce(function () {
      dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.BONUS_WIN_COMPLETE
        }
      }), n.forEach(function (e) {
        e.getComponent(_dependency0.GameSymbol).playBonusWinAnim(function () {
          i || (i = !0, t());
        });
      });
    }, 0);
  }, c.playFrameAnim = function (t, e) {
    var i = this,
      n = t.length > 0 && t[0].symbol;
    this.data.isFullBoard(this.data.getData().parser.currentGameState.resultView) ? t.length > 0 && n >= 2 && n <= 4 ? dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.FULL_COMBO_FIRE_FRAME_OUT
      }
    }) : dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.FULL_COMBO_ICE_FRAME_OUT
      }
    }) : t.length > 0 && n >= 2 && n <= 4 ? this.data.currentGameType == _dependency9.EGameType.MAIN_GAME ? dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.FIRE_FRAME_OUT
      }
    }) : dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.FIRE_FRAME_OUT_FG
      }
    }) : dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.ICE_FRAME_OUT
      }
    });
    var s = !1,
      o = this.reelList[0].singleReelSetting.topCount,
      l = new Set();
    t.forEach(function (t) {
      t.positions.forEach(function (t) {
        var n = t[0],
          a = t[1] + o,
          r = n + "_" + a;
        l.has(r) || (l.add(r), i.reelList[n].symbolList[a].getComponent(_dependency0.GameSymbol).playFrameAnim(function () {
          s || (s = !0, e());
        }));
      });
    });
  }, c.playSymbolTransformAnim = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e, i) {
      var n,
        s,
        o,
        l,
        a,
        c,
        p,
        h,
        u,
        d,
        m,
        L,
        g = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            n = this.reelList[0].singleReelSetting.topCount, s = e.symbol, o = e.positions, l = o.length, a = e.symbol >= 2 && e.symbol <= 8 && this.data.is30TimesAnd5Trans() ? 0 : .2, this.node.getComponent(_dependency2.Mask).enabled = !1, this.reelList.forEach(function (t) {
              t.reorderChildren();
            }), c = function (t) {
              var e = t.node,
                i = t.intervalSeconds,
                n = t.symbol,
                s = t.index,
                o = t.totalAnimations,
                l = t.callback;
              return new Promise(function (t) {
                g.data.is30TimesAnd5Trans() && n === _dependency6.EBackendSymbolID.WILD && (g.scheduleOnce(function () {
                  dispatch(_dependency7.GameEvent.SET_PARENT_TO_WIN_LINE_VIEW, {
                    data: e
                  });
                }, .85), 0 === s && dispatch(_dependency7.GameEvent.FADE_IN_WIN_LINE_BBR)), e.getComponent(_dependency0.GameSymbol).playTransformAnim(n, function () {
                  s === o - 1 && (g.node.getComponent(_dependency2.Mask).enabled = !0, g.data.is30TimesAnd5Trans() && n === _dependency6.EBackendSymbolID.WILD && (dispatch(_dependency7.GameEvent.SET_SYMBOL_TO_ORIGIN_PARENT), g.data.isFullBoard(g.data.getData().parser.currentGameState.resultView) && dispatch(_dependency7.GameEvent.FADE_OUT_WIN_LINE_BBR)), l());
                }), 0 === i ? t() : g.scheduleOnce(function () {
                  t();
                }, i);
              });
            }, p = 0;
          case 8:
            if (!(p < o.length)) {
              t.next = 19;
              break;
            }
            return h = o[p], u = h[0], d = h[1] + n, m = this.reelList[u].symbolList[d], L = {
              node: m,
              intervalSeconds: a,
              symbol: s,
              index: p,
              totalAnimations: l,
              callback: i
            }, t.next = 16, c(L);
          case 16:
            p++, t.next = 8;
            break;
          case 19:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e, i) {
      return t.apply(this, arguments);
    };
  }(), c.playDropSymbol = function (t) {
    var e = this,
      i = this.reelList[0].singleReelSetting.topCount;
    t.forEach(function (t) {
      t.positions.forEach(function (t) {
        var n = t[0],
          s = t[1] + i;
        e.reelList[n].symbolList[s].getComponent(_dependency0.GameSymbol).isExplode = !0;
      });
    }), dispatch(_dependency7.GameEvent.NEXT_SPIN);
    var n = this.data.preData,
      s = this.data.getData(),
      o = this.removeDuplicates(n.parser.winSymbols),
      l = new Map();
    s.parser.reelResult.forEach(function (t, e) {
      o.forEach(function (t) {
        if (t[0] === e) {
          var i = l.get(e) || [];
          l.set(e, [].concat(i, [t]));
        } else l.has(e) || l.set(e, []);
      });
    });
    var a = [];
    l.forEach(function (t, e) {
      var i = l.get(e).length;
      a.push(s.parser.reelResult[e].slice(0, i));
    }), this.setCascadeFrame(a), this.explodeReelsController.finish = function () {
      dispatch(_dependency7.GameEvent.SHOW_DROP_SYMBOL_END);
    }, this.scheduleOnce(function () {
      dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.REEL_STOP
        }
      });
    }, .15), this.explodeReelsController.startExplode();
  }, c.removeDuplicates = function (t) {
    var e = t.map(function (t) {
        return t.positions;
      }),
      i = [];
    e.forEach(function (t) {
      t.forEach(function (t) {
        i.push(t);
      });
    });
    var n = new Set(),
      s = [];
    return i.forEach(function (t) {
      var e = JSON.stringify(t);
      n.has(e) || (n.add(e), s.push(t));
    }), s;
  }, c.initSymbolView = function (t) {
    for (var e = this, i = (_dependency6.EBackendSymbolID.WILD, _dependency6.EBackendSymbolID.HAT, _dependency6.EBackendSymbolID.STICK, _dependency6.EBackendSymbolID.FORK, _dependency6.EBackendSymbolID.A, _dependency6.EBackendSymbolID.K, _dependency6.EBackendSymbolID.Q, _dependency6.EBackendSymbolID.J, _dependency6.EBackendSymbolID.SCATTER, _dependency6.EBackendSymbolID.BONUS, []), n = 0; n < this.reelList.length; n++) {
      var s = this.reelList[n],
        o = this.reelList[n].singleReelSetting.topCount;
      i[n] = [];
      for (var l = 0; l < o; l++) {
        var a = _dependency2.randomRangeInt(0, s.singleReelSetting.randomSymbolList.length),
          r = s.singleReelSetting.randomSymbolList[a];
        i[n].push(r);
      }
      if (this.data.getData().isResuming) i[n] = i[n].concat(this.data.getData().parser.reelResult[n]);else if (_dependency12.default.isReplay) ;else {
        var c = _dependency11.default.transposeArray(this.data.getData().gameState[this.data.getData().gameState.length - 1].view)[n];
        i[n] = i[n].concat(c);
      }
    }
    t && t.forEach(function (t, i) {
      var n = _dependency2.randomRangeInt(0, e.reelList[i].singleReelSetting.randomSymbolList.length),
        s = e.reelList[i].singleReelSetting.randomSymbolList[n];
      t.unshift(s);
    }), this.initSingleReels(null, null != t ? t : i), _dependency2.tween(this.node).bindNodeState(false).delay(1).call(function () {}).start(), _dependency2.Tween.stopAllByTarget(this.node);
  }, c.finish = function () {
    this.isNoWinExpecting = !1, _dependency2.Tween.stopAllByTarget(this);
    for (var t = 0; t < this.reelList.length; t++) this.stopExpect(t);
    dispatch(_dependency7.GameEvent.REEL_ALL_STOP);
  }, c.onStartExpect = function (t) {
    0 != this.isNoWinExpecting || null == this.currentNoWinExpectItem && null == this.currentExpectItem ? 0 == this.isNoWinExpecting && (dispatch(_dependency7.GameEvent.SHOW_EXPECT, {
      data: t
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.SYMBOL_EXPECT
      }
    })) : 4 == t && (dispatch(_dependency7.GameEvent.SHOW_EXPECT, {
      data: t
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.SYMBOL_EXPECT
      }
    }), this.isNoWinExpecting = !0);
  }, c.stopExpect = function (t) {
    dispatch(_dependency7.GameEvent.STOP_EXPECT, {
      data: t
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency1.EBTM.SYMBOL_EXPECT
    });
  }, c.onEndScroll = function (t) {
    var e = this;
    if (this.reelList[t] && 0 == this.reelList[t].isExpecting && (dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.REEL_STOP
      }
    }), this.checkAndPlayScatterHit(t), this.checkAndPlayBonusHit(t), this.checkAndPlayWildHit(t)), 3 == t) {
      if (_dependency10.ReelDataSettingObj.getAllStop()) return;
      if (this.reelList[t].status == _dependency13.EReelStatus.DIRECT_SHOW_STOP) return;
      if (this.isClickQuickStop) return;
      if (null != this.currentNoWinExpectItem) {
        this.reelList[this.reelList.length - 2].speedUp = .5 * this.reelSetting.expectSetting.speedUp, this.reelList[this.reelList.length - 1].speedUp = .7 * this.reelSetting.expectSetting.speedUp, this.isNoWinExpecting = !1, this.onStartExpect(this.reelList.length - 1), this.reelList[this.reelList.length - 1].expectingSymbols = this.currentNoWinExpectItem.symbolList.slice(), this.reelList[this.reelList.length - 1].expectContainer && (this.reelList[this.reelList.length - 1].expectContainer.active = !0);
        var i = [.01, .01, .01, .01, .5, .6],
          n = _dependency2.randomRangeInt(0, i.length);
        Log.w("delay time::::::::", i[n]), _dependency2.tween(this).bindNodeState(false).delay(i[n]).call(function () {
          e.reelList[e.reelList.length - 1].isStartAddNoWinExpectSymbol = !0;
        }).start();
      } else if (null != this.currentExpectItem) {
        this.reelList[this.reelList.length - 2].speedUp = .5 * this.reelSetting.expectSetting.speedUp, this.reelList[this.reelList.length - 1].speedUp = .7 * this.reelSetting.expectSetting.speedUp, this.isNoWinExpecting = !1, this.onStartExpect(this.reelList.length - 1), this.reelList[this.reelList.length - 1].expectingSymbols = this.currentExpectItem.symbolList.slice(), this.reelList[this.reelList.length - 1].expectContainer && (this.reelList[this.reelList.length - 1].expectContainer.active = !0);
        _dependency2.randomRangeInt(0, [.15].length);
        0, Log.w("win delay time::::::::", .15), _dependency2.tween(this).bindNodeState(false).delay(.15).call(function () {
          Log.w("start add win expect symbol::::::::::", e.reelList[e.reelList.length - 1].expectRandomSymbolList), e.reelList[e.reelList.length - 1].isStartAddWinExpectSymbol = !0;
        }).start();
      }
    }
  }, c.onSingleReelFinish = function (e) {
    t.prototype.onSingleReelFinish.call(this, e), this.reelList[e] && (1 == this.reelList[e].isExpecting || _dependency10.ReelDataSettingObj.getAllStop()) && (dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.REEL_STOP
      }
    }), this.checkAndPlayScatterHit(e), this.checkAndPlayBonusHit(e), this.checkAndPlayWildHit(e));
  }, c.setReelResult = function (e, i) {
    t.prototype.setReelResult.call(this, e, i), this.isClickQuickStop = !1;
  }, c.addEvents = function () {
    var e = this;
    t.prototype.addEvents.call(this), this.on(_dependency4.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function (t) {
      e.initSymbolView();
    }), this.on(_dependency7.GameEvent.PARSER_REPLAY_COMPLETED, function (t) {
      var i = _dependency11.default.transposeArray(e.data.getData().gameState[0].view);
      e.initSymbolView(i);
    }), this.on(_dependency7.GameEvent.SET_SYMBOL_VIEW, function (t) {
      var i = t.data;
      e.initSymbolView(i);
    }), this.on(_dependency7.GameEvent.START_SPIN, function () {
      var t = _dependency1.default.isTurbo ? 3 : 0;
      _dependency10.ReelDataSettingObj.setSpeedIndex(t);
      for (var i = 0; i < e.reelList.length; i++) e.reelList[i].singleReelSetting.dampingSetting.firstDamping = _dependency1.default.isTurbo, e.reelList[i].singleReelSetting.dampingSetting.lastDamping = !_dependency1.default.isTurbo, e.reelList[i].singleReelSetting.dampingSetting.firstDampingDelay = 0, e.reelList[i].singleReelSetting.dampingSetting.firstDampingAmplitude = .3, e.reelList[i].singleReelSetting.dampingSetting.firstDampingTime = .1;
      _dependency1.default.isTurbo || (dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.REEL_SCROLL,
          loop: !0
        }
      }), e.startScroll());
    }), this.on(_dependency7.GameEvent.START_SCROLL, function () {
      dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.REEL_SCROLL,
          loop: !0
        }
      });
      for (var t = 0; t < e.reelList.length; t++) e.reelList[t].singleReelSetting.dampingSetting.lastDamping = !0;
      e.startScroll();
    }), this.on(_dependency7.GameEvent.SET_REEL_RESULT, function () {
      _dependency2.Tween.stopAllByTarget(e);
      var t = e.data.getCurrentFullComboSymbolId();
      if (e.reelSetting.expectSetting.fullComboItem.symbolList = [t], e.reelSetting.expectSetting.fullComboItem.clearFullComboWinSymbols(), e.reelSetting.expectSetting.fullComboItem.noWinExpectRandomSymbolList = e.data.getFullExpectNoWinRandomSymbolList(t), _dependency1.default.isTurbo ? (dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.REEL_SCROLL,
          loop: !0
        }
      }), e.startScroll(), _dependency2.tween(e).bindNodeState(false).delay(.15).call(function () {
        e.setReelResult(e.data.getData().parser.reelResult);
      }).start()) : e.setReelResult(e.data.getData().parser.reelResult), e.reelList[e.reelList.length - 1].isNeedLastSlow = !1, e.reelList[e.reelList.length - 1].speedUp = 1, null != e.currentExpectItem) {
        var i = 0;
        e.reelSetting.expectSetting.speedUp = 2.55, e.reelSetting.expectSetting.incrementTime = 1, e.reelList[e.reelList.length - 1].speedUp = 1.05, 9 == e.currentExpectItem.symbolList[0] ? (i = e.reelResult[4].indexOf(9), e.reelList[e.reelList.length - 1].expectRandomSymbolList.push(9), e.reelSetting.expectSetting.itemList[0].winningExpectRandomSymbolList = e.data.getExpectWinScatterRandomSymbolList(i), e.reelSetting.expectSetting.itemList[0].noWinExpectRandomSymbolList = []) : 10 == e.currentExpectItem.symbolList[0] && (i = e.reelResult[4].indexOf(10), e.reelList[e.reelList.length - 1].expectRandomSymbolList.push(10), e.reelSetting.expectSetting.itemList[1].winningExpectRandomSymbolList = e.data.getExpectWinBonusRandomSymbolList(i), e.reelSetting.expectSetting.itemList[1].noWinExpectRandomSymbolList = []);
      } else null != e.currentNoWinExpectItem && (e.reelSetting.expectSetting.speedUp = 2.55, e.reelSetting.expectSetting.incrementTime = 1, e.reelList[e.reelList.length - 1].speedUp = 1.05, 9 == e.currentNoWinExpectItem.symbolList[0] ? (e.reelList[e.reelList.length - 1].expectNoWinRandomSymbolList.push(9), e.reelSetting.expectSetting.itemList[0].winningExpectRandomSymbolList = [], e.reelSetting.expectSetting.itemList[0].noWinExpectRandomSymbolList = e.data.getExpectNoWinScatterRandomSymbolList()) : 10 == e.currentNoWinExpectItem.symbolList[0] && (e.reelList[e.reelList.length - 1].expectNoWinRandomSymbolList.push(10), e.reelSetting.expectSetting.itemList[1].winningExpectRandomSymbolList = [], e.reelSetting.expectSetting.itemList[1].noWinExpectRandomSymbolList = e.data.getExpectNoWinBonusRandomSymbolList()), e.reelList[e.reelList.length - 1].isNeedLastSlow = !0);
      for (var n = e.data.getData().parser.reelResult.slice(), s = e.data.areAllElementsEqual(n.slice(0, 2)), o = 2; o < e.reelList.length; o++) e.reelList[o].isNeedExpect = s, e.reelSetting.expectSetting.fullComboItem.setFullComboExpectWinSymbols(e.data.getFullExpectWinRandomSymbolList(t));
    }), this.on(_dependency7.GameEvent.SHOW_SYMBOLS_WIN, function (t) {
      var i = t.complete,
        n = e.data.getData().parser.winSymbols;
      e.playSymbolWin(n, !1, function () {
        i && i();
      });
    }), this.on(_dependency7.GameEvent.SHOW_SYMBOL_TRANSFORM, function (t) {
      var i = e.data.getData().parser.toSymbolWildVO;
      e.playSymbolTransformAnim(i, function () {
        dispatch(_dependency7.GameEvent.SHOW_SYMBOL_TRANSFORM_END);
      });
    }), this.on(_dependency7.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE, function (t) {
      var i = t.data;
      e.playSymbolWin(i, !0, function () {});
    }), this.on(_dependency7.GameEvent.SHOW_SCATTER_WIN, function (t) {
      e.playScatterWin(function () {
        dispatch(_dependency7.GameEvent.SHOW_SCATTER_WIN_END);
      });
    }), this.on(_dependency7.GameEvent.SHOW_BONUS_WIN, function (t) {
      e.playBonusWin(function () {
        dispatch(_dependency7.GameEvent.SHOW_BONUS_WIN_END);
      });
    }), this.on(_dependency7.GameEvent.SHOW_SYMBOLS_FRAME_OUT, function (t) {
      var i = e.data.getData().parser.winSymbols;
      e.playFrameAnim(i, function () {
        dispatch(_dependency7.GameEvent.SHOW_SYMBOLS_FRAME_OUT_END);
      });
    }), this.on(_dependency7.GameEvent.SHOW_DROP_SYMBOL, function (t) {
      var i = e.data.getData().parser.winSymbols;
      e.playDropSymbol(i);
    }), this.on(_dependency7.GameEvent.START_QUICK_STOP, function () {
      e.isClickQuickStop = !0, e.directShowStopSingleReel();
    }), this.on(_dependency7.GameEvent.RESET_REELS_STATUS, function (t) {
      e.resetStatus();
    });
  }, c.removeEvents = function () {
    this.off(_dependency4.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN), this.off(_dependency7.GameEvent.PARSER_REPLAY_COMPLETED), this.off(_dependency7.GameEvent.SET_SYMBOL_VIEW), this.off(_dependency7.GameEvent.START_SPIN), this.off(_dependency7.GameEvent.START_SCROLL), this.off(_dependency7.GameEvent.SET_REEL_RESULT), this.off(_dependency7.GameEvent.SHOW_SYMBOLS_WIN), this.off(_dependency7.GameEvent.SHOW_SYMBOL_TRANSFORM), this.off(_dependency7.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE), this.off(_dependency7.GameEvent.SHOW_SCATTER_WIN), this.off(_dependency7.GameEvent.SHOW_BONUS_WIN), this.off(_dependency7.GameEvent.SHOW_SYMBOLS_FRAME_OUT), this.off(_dependency7.GameEvent.SHOW_DROP_SYMBOL), this.off(_dependency7.GameEvent.START_QUICK_STOP), this.off(_dependency7.GameEvent.RESET_REELS_STATUS);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}(_dependency3.ReelsController)).prototype, "gameSymbol", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), P = D)) || P) || P));
_dependency2.cclegacy._RF.pop();
