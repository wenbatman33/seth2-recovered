// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-ReelsController";
import * as _dependency4 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency5 from "./g1011-GameData";
import * as _dependency6 from "./g1011-GameSymbolID";
import * as _dependency7 from "./g1011-GameEvent";
import * as _dependency8 from "./g1011-GameExplodeReelController";
import * as _dependency9 from "./g1011-types";
import * as _dependency0 from "./g1011-GameSymbol";
import * as _dependency1 from "./g1011-GameConfigModel";
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
var e, i, n, s, o, l, a, r, c, S, p, E, u, h, d, f, L, m, _, g, T, R, C, y, A, O, b, W, x, N, v;
var P, I, M, B, D, H, w;
_dependency2.cclegacy._RF.push({}, "2d6deRQ1VtFo7FtOLEg4Ube", "GameReelsController", void 0);
var F = _dependency2._decorator.ccclass,
  U = _dependency2._decorator.property,
  X = _dependency2._decorator.requireComponent;
_publish("GameReelsController", (P = F("GameReelsController"), I = X(_dependency2.Mask), M = U(_dependency2.Prefab), P(B = I(((w = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
    return (e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this)._mgRandomSymbolLists = [], _dependency.initializerDefineProperty(e, "gameSymbol", H, _dependency.assertThisInitialized(e)), e.explodeReelsController = new _dependency8.GameExplodeReelController(_dependency.assertThisInitialized(e)), e.scatterCount = 0, e.bonusCount = 0, e._pendingExpectStrip = -1, e.isNoWinExpecting = !1, e.speedConfig = null, e.isClickQuickStop = !1, e._newWildCols = [], e;
  }
  _dependency.inheritsLoose(e, t);
  var a = e.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, a.start = function () {
    this.init(), t.prototype.start.call(this), this.loadSpeedConfig();
  }, a.onDestroy = function () {
    this.removeEvents();
  }, a.init = function () {}, a.resetStatus = function () {
    this.initSingleReels(), this.reelList.forEach(function (t, e) {
      t.status = _dependency13.EReelStatus.FINISH;
    }), this.status = _dependency13.EReelStatus.FINISH;
  }, a.initSymbolNode = function () {
    var t = _dependency2.instantiate(this.gameSymbol);
    this.reelSetting.symbolNode = t;
  }, a.initLayout = function () {
    var t = this.node.getComponent(_dependency2.Layout);
    t.type = _dependency2.Layout.Type.HORIZONTAL, t.resizeMode = _dependency2.Layout.ResizeMode.CONTAINER;
  }, a.hideSymbolAnime = function () {
    this.reelList.forEach(function (t) {
      t.symbolList.forEach(function (t) {
        t.getComponent(_dependency0.GameSymbol).hideSymbolAnime();
      });
    });
  }, a.playSymbolWin = function (t, e, i) {
    var n = this;
    if (t && 0 !== t.length) {
      var s = this.reelList[0].singleReelSetting.topCount,
        o = this.getWinSymbolLength(t);
      if (0 !== o) {
        var l = new Set(),
          a = 0;
        t.forEach(function (t) {
          t.positions.forEach(function (t) {
            if (!(t[1] < 0)) {
              var r = t.toString();
              if (!l.has(r)) {
                l.add(r);
                var c = t[0],
                  S = t[1] + s;
                n.reelList[c].symbolList[S].getComponent(_dependency0.GameSymbol).playWinAnim(e, function () {
                  ++a == o && i && i();
                });
              }
            }
          });
        }), l.clear();
      } else i();
    } else i();
  }, a.getWinSymbolLength = function (t) {
    var e = new Set();
    return t.forEach(function (t) {
      t.positions.forEach(function (t) {
        if (t[1] >= 0) {
          var i = t.toString();
          e.has(i) || e.add(i);
        }
      });
    }), e.size;
  }, a.checkAndPlayScatterHit = function (t) {
    var e = this;
    this.reelList[t].getMidSymbolList().forEach(function (t, i) {
      t.getComponent(_dependency0.GameSymbol).id === _dependency6.EBackendSymbolID.SCATTER && (t.getComponent(_dependency0.GameSymbol).playLandWinAnim(), e.scatterCount++, dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.SFX_SCATTER
        }
      }));
    }), 4 === t && (this.scatterCount = 0);
  }, a.checkAndPlayBonusHit = function (t) {
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
  }, a.checkAndPlayWildHit = function (t) {
    this.reelList[t].getMidSymbolList().forEach(function (t, e) {
      t.getComponent(_dependency0.GameSymbol).id === _dependency6.EBackendSymbolID.WILD && t.getComponent(_dependency0.GameSymbol).playHitAnim();
    });
  }, a.checkAndShowWildReel = function (t) {
    this.data.getModifierCols().includes(t) && (!this.data.isWildDisplayed(t) && !this._newWildCols.includes(t) && this._newWildCols.push(t), dispatch(_dependency7.GameEvent.SHOW_WILD, {
      data: t
    }));
  }, a.flushNewWildScarf = function () {
    var t, e, i;
    if (0 !== this._newWildCols.length) if ("freeSpin" === (null == (t = this.data.getData()) || null == (e = t.parser) || null == (i = e.currentGameState) ? void 0 : i.action)) {
      for (var n, s = _dependency.createForOfIteratorHelperLoose(this._newWildCols); !(n = s()).done;) {
        var l = n.value;
        dispatch(_dependency7.GameEvent.SHOW_SCARF, {
          data: l
        });
      }
      this._newWildCols.length = 0;
    } else this._newWildCols.length = 0;
  }, a.playScatterWin = function (t) {
    for (var i, n, s, l = this, a = !1, r = [], c = 0, S = 0; S < this.reelList.length; S++) for (var p, E = this.data.isWildCovered(S), u = _dependency.createForOfIteratorHelperLoose(this.reelList[S].symbolList); !(p = u()).done;) {
      var h = p.value;
      h.getComponent(_dependency0.GameSymbol).id === _dependency6.EBackendSymbolID.SCATTER && (E ? c++ : r.push(h));
    }
    if (0 !== r.length || 0 !== c) {
      var d = "freeSpin" === (null == (i = this.data.getData()) || null == (n = i.parser) || null == (s = n.currentGameState) ? void 0 : s.action);
      App.globalAudio.pauseMusic();
      var f = function () {
        d && App.globalAudio.resumeMusic(), t();
      };
      dispatch(_dependency7.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.SFX_SCATTER
        }
      }), this.scheduleOnce(function () {
        dispatch(_dependency7.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency1.EBTM.SCATTER_WIN_COMPLETE
          }
        });
      }, .5), 0 !== r.length ? r.forEach(function (t) {
        t.getComponent(_dependency0.GameSymbol).playScatterWinAnim(function () {
          a || (a = !0, l.scheduleOnce(function () {
            f();
          }, .5));
        });
      }) : this.scheduleOnce(function () {
        f();
      }, e.SCATTER_CONTENT_WIN_TIME);
    } else t();
  }, a.playBonusWin = function (t) {
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
  }, a.playFrameAnim = function (t, e) {
    var i = this;
    t.length > 0 && t[0].symbol;
    t.length > 0 ? this.data.currentGameType == _dependency9.EGameType.MAIN_GAME ? dispatch(_dependency7.GameEvent.PLAY_BTM, {
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
    var n = !1,
      s = this.reelList[0].singleReelSetting.topCount,
      o = new Set();
    t.forEach(function (t) {
      t.positions.forEach(function (t) {
        var l = t[0],
          a = t[1] + s,
          r = l + "_" + a;
        o.has(r) || (o.add(r), i.reelList[l].symbolList[a].getComponent(_dependency0.GameSymbol).playFrameAnim(function () {
          n || (n = !0, e());
        }));
      });
    });
  }, a.playDropSymbol = function (t) {
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
  }, a.removeDuplicates = function (t) {
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
  }, a.initSymbolView = function (t) {
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
  }, a.finish = function () {
    this.isNoWinExpecting = !1, _dependency2.Tween.stopAllByTarget(this);
    for (var t = 0; t < this.reelList.length; t++) this.stopExpect(t);
    this.flushNewWildScarf(), dispatch(_dependency7.GameEvent.REEL_ALL_STOP);
  }, a.onStartExpect = function (t) {
    0 != this.isNoWinExpecting || null == this.currentNoWinExpectItem && null == this.currentExpectItem ? 0 == this.isNoWinExpecting && (dispatch(_dependency7.GameEvent.SHOW_EXPECT, {
      data: t
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.SYMBOL_EXPECT
      }
    }), this.playTallySound()) : t == e.LAST_EXPECT_REEL && (dispatch(_dependency7.GameEvent.SHOW_EXPECT, {
      data: t
    }), dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.SYMBOL_EXPECT
      }
    }), this.playTallySound(), this.isNoWinExpecting = !0);
  }, a.playTallySound = function () {
    var t,
      e,
      i,
      n = "freeSpin" === (null == (t = this.data.getData()) || null == (e = t.parser) || null == (i = e.currentGameState) ? void 0 : i.action) ? _dependency1.EBTM.SFX_FREE_TALLY : _dependency1.EBTM.SFX_MAIN_TALLY;
    dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: n
      }
    });
  }, a.stopExpect = function (t) {
    dispatch(_dependency7.GameEvent.STOP_EXPECT, {
      data: t
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency1.EBTM.SYMBOL_EXPECT
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency1.EBTM.SFX_MAIN_TALLY
    }), dispatch(_dependency7.GameEvent.STOP_BTM, {
      data: _dependency1.EBTM.SFX_FREE_TALLY
    });
  }, a.onEndScroll = function (t) {
    if (this.reelList[t] && 0 == this.reelList[t].isExpecting && (dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.REEL_STOP
      }
    }), this.checkAndPlayScatterHit(t), this.checkAndPlayBonusHit(t), this.checkAndPlayWildHit(t), this.checkAndShowWildReel(t)), !this.isClickQuickStop && null != this.currentNoWinExpectItem) {
      var i = this.currentNoWinExpectItem.overCount,
        n = e.LAST_EXPECT_REEL;
      t > i - 1 && t < n && dispatch(_dependency7.GameEvent.STOP_EXPECT, {
        data: t
      }), this.scatterCount >= i && t + 1 < n && dispatch(_dependency7.GameEvent.SHOW_EXPECT, {
        data: t + 1
      });
    }
    if (t == e.LAST_EXPECT_REEL - 1) {
      if (_dependency10.ReelDataSettingObj.getAllStop()) return;
      if (this.reelList[t].status == _dependency13.EReelStatus.DIRECT_SHOW_STOP) return;
      if (this.isClickQuickStop) return;
      this.data.getModifierCols().includes(t) ? (this._pendingExpectStrip = t, dispatch(_dependency7.GameEvent.CHECK_SCATTER_LANDED, {
        data: t
      })) : this.triggerExpectFlow(t);
    }
  }, a.triggerExpectFlow = function (t) {
    var i = this;
    if (null != this.currentNoWinExpectItem) {
      this.reelList[e.LAST_EXPECT_REEL - 1].speedUp = .5 * this.reelSetting.expectSetting.speedUp, this.reelList[e.LAST_EXPECT_REEL].speedUp = .7 * this.reelSetting.expectSetting.speedUp, this.isNoWinExpecting = !1, this.onStartExpect(e.LAST_EXPECT_REEL), this.reelList[e.LAST_EXPECT_REEL].expectingSymbols = this.currentNoWinExpectItem.symbolList.slice(), this.reelList[e.LAST_EXPECT_REEL].expectContainer && (this.reelList[e.LAST_EXPECT_REEL].expectContainer.active = !0);
      var n = [.01, .01, .01, .01, .5, .6],
        s = _dependency2.randomRangeInt(0, n.length);
      _dependency2.tween(this).bindNodeState(false).delay(n[s]).call(function () {
        i.reelList[e.LAST_EXPECT_REEL].isStartAddNoWinExpectSymbol = !0;
      }).start();
    } else null != this.currentExpectItem && (this.reelList[e.LAST_EXPECT_REEL - 1].speedUp = .5 * this.reelSetting.expectSetting.speedUp, this.reelList[e.LAST_EXPECT_REEL].speedUp = .7 * this.reelSetting.expectSetting.speedUp, this.isNoWinExpecting = !1, this.onStartExpect(e.LAST_EXPECT_REEL), this.reelList[e.LAST_EXPECT_REEL].expectingSymbols = this.currentExpectItem.symbolList.slice(), this.reelList[e.LAST_EXPECT_REEL].expectContainer && (this.reelList[e.LAST_EXPECT_REEL].expectContainer.active = !0), _dependency2.tween(this).bindNodeState(false).delay(.15).call(function () {
      i.reelList[e.LAST_EXPECT_REEL].isStartAddWinExpectSymbol = !0;
    }).start());
  }, a.onSingleReelFinish = function (e) {
    t.prototype.onSingleReelFinish.call(this, e), this.reelList[e] && (1 == this.reelList[e].isExpecting || _dependency10.ReelDataSettingObj.getAllStop()) && (dispatch(_dependency7.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.REEL_STOP
      }
    }), this.checkAndPlayScatterHit(e), this.checkAndPlayBonusHit(e), this.checkAndPlayWildHit(e), this.checkAndShowWildReel(e));
  }, a.setReelResult = function (e, i) {
    t.prototype.setReelResult.call(this, e, i), this.isClickQuickStop = !1, this._pendingExpectStrip = -1, this.clearJpExpectItem();
  }, e.isJpExpectItem = function (t) {
    return !!t && !!t.symbolList && t.symbolList.indexOf(_dependency6.EBackendSymbolID.BONUS) > -1;
  }, a.clearJpExpectItem = function () {
    e.isJpExpectItem(this.currentExpectItem) && (this.currentExpectItem = null), e.isJpExpectItem(this.currentNoWinExpectItem) && (this.currentNoWinExpectItem = null);
  }, a.customCheckExpect = function (i, n) {
    return !e.isJpExpectItem(n) && t.prototype.customCheckExpect.call(this, i, n);
  }, a.beforeScroll = function () {
    t.prototype.beforeScroll.call(this), this.speedConfig && this.applySpeedConfig();
  }, a.loadSpeedConfig = function () {
    var t = this,
      e = _dependency2.assetManager.getBundle(this.data.module);
    e && e.load("script/data/speedConfig", _dependency2.JsonAsset, function (e, i) {
      if (!e && i) {
        var n = i.json;
        Array.isArray(n) && (t.speedConfig = n, t.applySpeedConfig());
      }
    });
  }, a.applyReelSpeedAndDamping = function () {
    _dependency10.ReelDataSettingObj.setSpeedIndex(_dependency1.default.isTurbo ? 3 : 0);
    for (var t = 0; t < this.reelList.length; t++) {
      var e = this.reelList[t].singleReelSetting.dampingSetting;
      e.firstDamping = _dependency1.default.isTurbo, e.lastDamping = !_dependency1.default.isTurbo, e.firstDampingDelay = 0, e.firstDampingAmplitude = .3, e.firstDampingTime = .1;
    }
  }, a.applySpeedConfig = function () {
    if (this.speedConfig) for (var t = _dependency1.default.isTurbo ? "turbo" : "normal", e = 0; e < this.reelList.length; e++) {
      var i = this.speedConfig[e],
        n = i ? i[t] : null;
      if (n) {
        var s = this.reelList[e].singleReelSetting;
        s.moveOneSymbolTime = n.moveOneSymbolTime, s.step = n.step, s.stopReelTime = n.stopReelTime;
      }
    }
  }, a.addEvents = function () {
    var i = this;
    t.prototype.addEvents.call(this);
    for (var n = 0; n < this.reelList.length; n++) {
      var s = this.reelList[n].singleReelSetting.randomSymbolList;
      0 !== n && 4 !== n || (this.reelList[n].singleReelSetting.randomSymbolList = s.filter(function (t) {
        return t !== _dependency6.EBackendSymbolID.SCATTER;
      }));
    }
    this._mgRandomSymbolLists = this.reelList.map(function (t) {
      return [].concat(t.singleReelSetting.randomSymbolList);
    }), this.on(_dependency7.GameEvent.CHANGE_GAME_STYLE, function (t) {
      for (var e = t.data, n = [_dependency6.EBackendSymbolID.BONUS, _dependency6.EBackendSymbolID.SCATTER], s = 0; s < i.reelList.length; s++) i.reelList[s].singleReelSetting.randomSymbolList = e ? [].concat(i._mgRandomSymbolLists[s]) : i._mgRandomSymbolLists[s].filter(function (t) {
        return !n.includes(t);
      });
    }), this.on(_dependency4.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function (t) {
      i.initSymbolView();
    }), this.on(_dependency7.GameEvent.PARSER_REPLAY_COMPLETED, function (t) {
      var e = _dependency11.default.transposeArray(i.data.getData().gameState[0].view);
      i.initSymbolView(e);
    }), this.on(_dependency7.GameEvent.SET_SYMBOL_VIEW, function (t) {
      var e = t.data;
      i.initSymbolView(e);
    }), this.on(_dependency7.GameEvent.START_SPIN, function () {
      i._newWildCols.length = 0, i.applyReelSpeedAndDamping(), _dependency1.default.isTurbo || i.startScroll();
    }), this.on(_dependency7.GameEvent.START_SCROLL, function () {
      i._newWildCols.length = 0, i.applyReelSpeedAndDamping(), i.startScroll();
    }), this.on(_dependency7.GameEvent.SET_REEL_RESULT, function () {
      _dependency2.Tween.stopAllByTarget(i);
      var t = i.data.getCurrentFullComboSymbolId();
      if (i.reelSetting.expectSetting.fullComboItem.symbolList = [t], i.reelSetting.expectSetting.fullComboItem.clearFullComboWinSymbols(), i.reelSetting.expectSetting.fullComboItem.noWinExpectRandomSymbolList = i.data.getFullExpectNoWinRandomSymbolList(t), _dependency1.default.isTurbo ? (i.startScroll(), _dependency2.tween(i).bindNodeState(false).delay(.15).call(function () {
        i.setReelResult(i.data.getData().parser.reelResult);
      }).start()) : i.setReelResult(i.data.getData().parser.reelResult), i.reelList[e.LAST_EXPECT_REEL].isNeedLastSlow = !1, i.reelList[e.LAST_EXPECT_REEL].speedUp = 1, null != i.currentExpectItem) {
        var n = 0;
        i.reelSetting.expectSetting.speedUp = 2.55, i.reelSetting.expectSetting.incrementTime = 1, i.reelList[e.LAST_EXPECT_REEL].speedUp = 1.05, i.currentExpectItem.symbolList[0] == _dependency6.EBackendSymbolID.SCATTER ? (n = i.reelResult[e.LAST_EXPECT_REEL].indexOf(_dependency6.EBackendSymbolID.SCATTER), i.reelList[e.LAST_EXPECT_REEL].expectRandomSymbolList.push(_dependency6.EBackendSymbolID.SCATTER), i.reelSetting.expectSetting.itemList[0].winningExpectRandomSymbolList = i.data.getExpectWinScatterRandomSymbolList(n), i.reelSetting.expectSetting.itemList[0].noWinExpectRandomSymbolList = []) : i.currentExpectItem.symbolList[0] == _dependency6.EBackendSymbolID.BONUS && (n = i.reelResult[e.LAST_EXPECT_REEL].indexOf(_dependency6.EBackendSymbolID.BONUS), i.reelList[e.LAST_EXPECT_REEL].expectRandomSymbolList.push(_dependency6.EBackendSymbolID.BONUS), i.reelSetting.expectSetting.itemList[1].winningExpectRandomSymbolList = i.data.getExpectWinBonusRandomSymbolList(n), i.reelSetting.expectSetting.itemList[1].noWinExpectRandomSymbolList = []);
      } else null != i.currentNoWinExpectItem && (i.reelSetting.expectSetting.speedUp = 2.55, i.reelSetting.expectSetting.incrementTime = 1, i.reelList[e.LAST_EXPECT_REEL].speedUp = 1.05, i.currentNoWinExpectItem.symbolList[0] == _dependency6.EBackendSymbolID.SCATTER ? (i.reelList[e.LAST_EXPECT_REEL].expectNoWinRandomSymbolList.push(_dependency6.EBackendSymbolID.SCATTER), i.reelSetting.expectSetting.itemList[0].winningExpectRandomSymbolList = [], i.reelSetting.expectSetting.itemList[0].noWinExpectRandomSymbolList = i.data.getExpectNoWinScatterRandomSymbolList()) : i.currentNoWinExpectItem.symbolList[0] == _dependency6.EBackendSymbolID.BONUS && (i.reelList[e.LAST_EXPECT_REEL].expectNoWinRandomSymbolList.push(_dependency6.EBackendSymbolID.BONUS), i.reelSetting.expectSetting.itemList[1].winningExpectRandomSymbolList = [], i.reelSetting.expectSetting.itemList[1].noWinExpectRandomSymbolList = i.data.getExpectNoWinBonusRandomSymbolList()), i.reelList[e.LAST_EXPECT_REEL].isNeedLastSlow = !0);
    }), this.on(_dependency7.GameEvent.SHOW_SYMBOLS_WIN, function (t) {
      var e = t.complete,
        n = i.data.getData().parser.winSymbols;
      i.playSymbolWin(n, !1, function () {
        e && e();
      });
    }), this.on(_dependency7.GameEvent.SHOW_SYMBOL_TRANSFORM, function () {
      dispatch(_dependency7.GameEvent.SHOW_SYMBOL_TRANSFORM_END);
    }), this.on(_dependency7.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE, function (t) {
      var e = t.data,
        n = t.complete;
      i.playSymbolWin(e, !0, n);
    }), this.on(_dependency7.GameEvent.SHOW_SCATTER_WIN, function (t) {
      i.playScatterWin(function () {
        dispatch(_dependency7.GameEvent.SHOW_SCATTER_WIN_END);
      });
    }), this.on(_dependency7.GameEvent.SHOW_BONUS_WIN, function (t) {
      i.playBonusWin(function () {
        dispatch(_dependency7.GameEvent.SHOW_BONUS_WIN_END);
      });
    }), this.on(_dependency7.GameEvent.SHOW_SYMBOLS_FRAME_OUT, function (t) {
      var e = i.data.getData().parser.winSymbols;
      i.playFrameAnim(e, function () {
        dispatch(_dependency7.GameEvent.SHOW_SYMBOLS_FRAME_OUT_END);
      });
    }), this.on(_dependency7.GameEvent.SHOW_DROP_SYMBOL, function (t) {
      var e = i.data.getData().parser.winSymbols;
      i.playDropSymbol(e);
    }), this.on(_dependency7.GameEvent.START_QUICK_STOP, function () {
      i.isClickQuickStop = !0, i.directShowStopSingleReel();
    }), this.on(_dependency7.GameEvent.SCATTER_REEL_LANDED, function (t) {
      if (i._pendingExpectStrip >= 0 && t.data === i._pendingExpectStrip) {
        if (i.isClickQuickStop) return void (i._pendingExpectStrip = -1);
        var e = i._pendingExpectStrip;
        i._pendingExpectStrip = -1, i.triggerExpectFlow(e);
      }
    }), this.on(_dependency7.GameEvent.RESET_REELS_STATUS, function (t) {
      i.resetStatus();
    }), this.on(_dependency7.GameEvent.HIDE_SYMBOLS_WIN, function () {
      i.hideSymbolAnime();
    });
  }, a.removeEvents = function () {
    this.off(_dependency4.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN), this.off(_dependency7.GameEvent.PARSER_REPLAY_COMPLETED), this.off(_dependency7.GameEvent.SET_SYMBOL_VIEW), this.off(_dependency7.GameEvent.START_SPIN), this.off(_dependency7.GameEvent.START_SCROLL), this.off(_dependency7.GameEvent.SET_REEL_RESULT), this.off(_dependency7.GameEvent.SHOW_SYMBOLS_WIN), this.off(_dependency7.GameEvent.SHOW_SYMBOL_TRANSFORM), this.off(_dependency7.GameEvent.SHOW_SYMBOLS_WIN_ON_LINE), this.off(_dependency7.GameEvent.SHOW_SCATTER_WIN), this.off(_dependency7.GameEvent.SHOW_BONUS_WIN), this.off(_dependency7.GameEvent.SHOW_SYMBOLS_FRAME_OUT), this.off(_dependency7.GameEvent.SHOW_DROP_SYMBOL), this.off(_dependency7.GameEvent.START_QUICK_STOP), this.off(_dependency7.GameEvent.SCATTER_REEL_LANDED), this.off(_dependency7.GameEvent.RESET_REELS_STATUS), this.off(_dependency7.GameEvent.HIDE_SYMBOLS_WIN), this.off(_dependency7.GameEvent.CHANGE_GAME_STYLE);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}(_dependency3.ReelsController)).LAST_EXPECT_REEL = 3, w.SCATTER_CONTENT_WIN_TIME = 1.3, H = _dependency.applyDecoratedDescriptor((D = w).prototype, "gameSymbol", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = D)) || B) || B));
_dependency2.cclegacy._RF.pop();
