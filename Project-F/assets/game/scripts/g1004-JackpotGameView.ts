// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1004-GameEvent";
import * as _dependency6 from "./g1004-GameSender";
import * as _dependency7 from "./g1004-GameData";
import * as _dependency8 from "./g1004-types";
import * as _dependency9 from "../../shared/scripts/slotFramework-SocketModel";
import * as _dependency0 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency1 from "./g1004-GameConfigModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-RunScoreComponent";
import * as _dependency11 from "../../shared/scripts/slotFramework-ReplayModel";
var _export;
export { _export as EJackpotType };
var _export2;
export { _export2 as JackpotGameView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EJackpotType":
      _export = value;
      break;
    case "JackpotGameView":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, a, s, r, c, l, u, p, d, h, f, m, g, P, O, y, _, S, v, T, A, C, k, M, I, w, N, R, E, L, b, W;
var J, G, D, x, B, V, F, U, z, Y, j, K, H, Q, q, X, Z, $, tt;
_publish("EJackpotType", void 0), _dependency2.cclegacy._RF.push({}, "e2869bgwh1NmJeVoa496QGz", "JackpotGameView", void 0);
var et,
  nt = _dependency2._decorator.ccclass,
  it = _dependency2._decorator.property;
!function (t) {
  t.MINI = "jp-mini", t.MINOR = "jp-minor", t.MAJOR = "jp-major", t.GRAND = "jp-grand";
}(et || (et = _publish("EJackpotType", {})));
_publish("JackpotGameView", (J = nt("JackpotGameView"), G = _dependency4.inject("aniScroll", _dependency2.sp.Skeleton), D = it({
  type: _dependency2.Node,
  tooltip: "結算節點"
}), x = _dependency4.inject("ndResult/coinContent", _dependency2.Node), B = _dependency4.inject("prefab/coinFallingAnimNode", _dependency2.Node), V = _dependency4.inject("ndResult/aniWin", _dependency2.sp.Skeleton), F = it({
  type: _dependency2.Node,
  tooltip: "結算金額節點"
}), U = it({
  type: _dependency2.Label,
  tooltip: "金額"
}), z = it({
  type: _dependency2.Node,
  tooltip: "Items",
  override: !0
}), J((K = _dependency.applyDecoratedDescriptor((j = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "aniScroll", K, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndResult", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinContent", Q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinFallingAnimNode", q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "aniWin", X, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndTotalWin", Z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "txtTotalWin", $, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "items", tt, _dependency.assertThisInitialized(e)), e.checkOpenMap = new Map(), e.isLock = !0, e.runScoreComponent = null, e.totalWin = 0, e.winCategoryMap = new Map([[et.MINI, _dependency1.EBTM.JP_FROG], [et.MINOR, _dependency1.EBTM.JP_FISH], [et.MAJOR, _dependency1.EBTM.JP_LION], [et.GRAND, _dependency1.EBTM.JP_DRAGON]]), e.winCategoryEndMap = new Map([[et.MINI, _dependency1.EBTM.JP_FROG_END], [et.MINOR, _dependency1.EBTM.JP_FISH_END], [et.MAJOR, _dependency1.EBTM.JP_LION_END], [et.GRAND, _dependency1.EBTM.JP_DRAGON_END]]), e.replayOpenSchedule = null, e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/jackpotGame/JackpotGameView";
  };
  var c = e.prototype;
  return c.onLoad = function () {
    t.prototype.onLoad.call(this), null === this.node.getComponent(_dependency10.RunScoreComponent) && (this.runScoreComponent = this.node.addComponent(_dependency10.RunScoreComponent));
  }, c.addEvents = function () {
    this.on(_dependency5.GameEvent.JACKPOT_GAME_PICK_RESPONSE, this.onPickResp), this.on(_dependency10.ERunScoreStatus.RUN_SCORE_END, this.directShowResult), this.on(_dependency10.ERunScoreStatus.WAIT_CLOSE, this.removeAllTween);
  }, c.onDestroy = function () {
    t.prototype.onDestroy.call(this), this.removeEvents(), this.unschedule(this.replayOpenSchedule);
  }, c.removeEvents = function () {
    this.off(_dependency5.GameEvent.JACKPOT_GAME_PICK_RESPONSE), this.off(_dependency10.ERunScoreStatus.RUN_SCORE_END), this.off(_dependency10.ERunScoreStatus.WAIT_CLOSE);
  }, c.start = function () {
    var t = this;
    dispatch(_dependency5.GameEvent.PLAY_BGM, {
      data: _dependency1.EBGM.JP_GAME
    }), this.initCoinPool(), this.ndResult.active = !1, this.isLock = !0, this.checkOpenMap.clear(), this.items.forEach(function (e, n) {
      e.active = !1, t.checkOpenMap.set(n, null);
    }), this.ndTotalWin.scale = new _dependency2.Vec3(0, 0, 0), dispatch(_dependency5.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.JP_TRANS,
        loop: !1
      }
    }), this.txtTotalWin.string = "0", this.txtTotalWin.node.active = !1, this.aniScroll.clearTracks(), this.aniScroll.setToSetupPose(), this.aniScroll.setAnimation(0, "open", !1), this.aniScroll.setEventListener(function () {
      var e = t.data.getData().bonusState;
      e && e.pickPositions.forEach(function (e, n) {
        t.checkOpenMap.set(e.position, e);
      }), t.initItemStatus(), e.totalWinnings > 0 && (t.isLock = !0, _dependency2.tween(t).bindNodeState(false).delay(.9).call(function () {
        t.showResult(e);
      }).start()), _dependency11.default.isReplay && t.replayAutoOpenItem();
    }), this.isLock = !1;
  }, c.replayAutoOpenItem = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            this.data.getData().parser.currentSpinIndex = 2, this.replayOpenSchedule = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
              var n;
              return _dependency.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.data.setReplayNextBonusData(), e.isLock = !0, n = e.data.getData().bonusState, t.next = 5, e.updatePositions(n.pickPositions);
                  case 5:
                    n.totalWinnings > 0 ? (e.unschedule(e.replayOpenSchedule), e.showResult(n)) : e.isLock = !1;
                  case 6:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), this.schedule(this.replayOpenSchedule, .618);
          case 3:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), c.initItemStatus = function () {
    var t = this;
    this.checkOpenMap.forEach(function (e, n) {
      var i = t.items[n];
      i.name = n.toString(), i.active = !0;
      var o = i.getChildByName("ingot").getComponent(_dependency2.sp.Skeleton),
        a = i.getChildByName("icon").getComponent(_dependency2.sp.Skeleton);
      o.clearTracks(), o.setToSetupPose(), o.node.active = !1, a.clearTracks(), a.setToSetupPose(), a.node.active = !1, _dependency2.tween(t).bindNodeState(false).delay(.1 * _dependency2.randomRangeInt(0, 6)).call(function () {
        if (null === t.checkOpenMap.get(n)) o.node.active = !0, o.setAnimation(0, "in", !1), !_dependency11.default.isReplay && i.on(_dependency2.NodeEventType.TOUCH_END, t.onOpenItemPosition, t);else {
          var a = t.items[n];
          t.openItem(e, a), a.off(_dependency2.NodeEventType.TOUCH_END, t.onOpenItemPosition, t);
        }
      }).start();
    });
  }, c.initCoinPool = function () {
    for (var t, e = this, n = this.coinFallingAnimNode, i = App.pool.createPool("COIN_POOL"), o = 0; o < 5; o++) t = void 0, (t = _dependency2.instantiate(n)).getComponent(_dependency2.sp.Skeleton).setEventListener(function (t, n) {
      "copy" == n.data.name && e.playCoinFallAnim();
    }), i.cloneNode = t, i.put(t);
  }, c.onOpenItemPosition = function (t) {
    if (!this.isLock) {
      this.isLock = !0;
      var e = t.currentTarget,
        n = {
          token: _dependency9.default.currentToken,
          spinId: this.data.getData().spinId,
          bonusType: _dependency8.EBonusType.JP_GAME,
          action: _dependency8.BonusStateAction.COLLECT,
          actionValue: Number(e.name),
          ratioIndex: _dependency0.default.ratioIndex,
          ratioValue: _dependency0.default.ratioValue,
          stakeIndex: _dependency0.default.stakeIndex,
          stakeValue: _dependency0.default.stakeValue
        };
      App.senderManager.get(_dependency6.GameSender).sendJackpotGameSelectPosition(n), e.off(_dependency2.NodeEventType.TOUCH_END, this.onOpenItemPosition, this);
    }
  }, c.updatePositions = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
      var n = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.abrupt("return", new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(i) {
              var o, a, s, c, l;
              return _dependency.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    o = 0;
                  case 1:
                    if (!(o < e.length)) {
                      t.next = 12;
                      break;
                    }
                    if (a = e[o], s = a.position, c = n.checkOpenMap.get(s), l = n.items[s], null !== c) {
                      t.next = 9;
                      break;
                    }
                    return t.next = 9, n.openItem(a, l);
                  case 9:
                    o++, t.next = 1;
                    break;
                  case 12:
                    i(!0);
                  case 13:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))));
          case 1:
          case "end":
            return t.stop();
        }
      }, t);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }(), c.openItem = function (t, e) {
    var n = this;
    return new Promise(function (i) {
      var o = t.position;
      n.checkOpenMap.set(o, t);
      var a = e.getChildByName("ingot").getComponent(_dependency2.sp.Skeleton);
      a.node.active = !0, a.clearTracks(), a.setToSetupPose(), a.timeScale = 1.5, a.setAnimation(0, "open", !1), a.setCompleteListener(function () {
        a.node.active = !1;
      }), a.setEventListener(function () {
        dispatch(_dependency5.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency1.EBTM.JP_FLIP
          }
        });
        var n = e.getChildByName("icon").getComponent(_dependency2.sp.Skeleton);
        n.node.active = !0, n.node.getComponent(_dependency2.UIOpacity).opacity = 0, n.clearTracks(), n.setToSetupPose();
        var o = t.category.split("jp-")[1];
        n.setAnimation(0, o, !0), _dependency2.tween(n.node.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.3, {
          opacity: 255
        }).start(), i(!0);
      });
    });
  }, c.onPickResp = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return this.isLock = !0, e = this.data.getData().bonusState, t.next = 4, this.updatePositions(e.pickPositions);
          case 4:
            e.totalWinnings > 0 ? this.showResult(e) : this.isLock = !1;
          case 5:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), c.showWinLight = function (t) {
    var e = this,
      n = !1;
    this.items.forEach(function (i, o) {
      var a,
        s = null == (a = e.checkOpenMap.get(o)) ? void 0 : a.category;
      s && t === s && (_dependency2.tween(i).bindNodeState(false).to(.3, {
        scale: new _dependency2.Vec3(1.2, 1.2, 1.2)
      }).start(), n || (n = !0, dispatch(_dependency5.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.JP_CONFIRM
        }
      })));
    });
  }, c.showResult = function (t) {
    var e = this,
      n = t.pickPositions,
      i = t.totalWinnings,
      o = n[n.length - 1].category;
    this.totalWin = i, this.aniWin.clearTracks(), this.aniWin.setToSetupPose(), this.aniWin.setAnimation(0, o, !0), this.aniWin.node.scale = new _dependency2.Vec3(.6, .6, .6), this.aniWin.node.active = !0, this.showWinLight(o), this.unschedule(this.replayOpenSchedule), this.scheduleOnce(function () {
      e.ndResult.active = !0, e.playCoinFallAnim();
      var t = e.winCategoryMap.get(o);
      dispatch(_dependency5.GameEvent.PLAY_BTM, {
        data: {
          url: t,
          loop: !0
        }
      });
      var n = e.getWinVoiceUrl(o);
      dispatch(_dependency5.GameEvent.PLAY_BTM, {
        data: {
          url: n
        }
      }), App.globalAudio.pauseMusic(), _dependency2.tween(e.aniWin.node).bindNodeState(false).to(.6, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }).start(), e.scheduleOnce(function () {
        _dependency2.tween(e.ndTotalWin).bindNodeState(false).to(.6, {
          scale: new _dependency2.Vec3(1, 1, 1)
        }, {
          easing: _dependency2.easing.backOut
        }).start();
        var t = e.data.getData().definition.digital,
          n = _dependency1.default.getData().bigWinAutoCloseTime;
        e.runScoreComponent.runScore(e.txtTotalWin, e.totalWin, 8, t, n, !0), dispatch(_dependency5.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency1.EBTM.RUN_SCORE
          }
        });
      }, 2);
    }, 2);
  }, c.getWinVoiceUrl = function (t) {
    switch (t) {
      case et.MINI:
        return _dependency1.EBTM.JP_MINI_VOCAL;
      case et.MINOR:
        return _dependency1.EBTM.JP_MINOR_VOCAL;
      case et.MAJOR:
        return _dependency1.EBTM.JP_MAJOR_VOCAL;
      case et.GRAND:
        return _dependency1.EBTM.JP_GRAND_VOCAL;
      default:
        return _dependency1.EBTM.JP_MINI_VOCAL;
    }
  }, c.playCoinFallAnim = function () {
    var t = App.pool.getPool("COIN_POOL").get(),
      e = Math.random() >= .5 ? 1 : -1,
      n = t.getComponent(_dependency2.sp.Skeleton);
    t.setScale(e, 1), n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "coin", !1), n.setCompleteListener(function () {
      App.pool.getPool("COIN_POOL").put(t);
    }), t.setParent(this.coinContent);
  }, c.directShowResult = function () {
    dispatch(_dependency5.GameEvent.STOP_BTM, {
      data: _dependency1.EBTM.RUN_SCORE
    });
    var t = this.data.getData().bonusState.pickPositions,
      e = t[t.length - 1].category,
      n = this.winCategoryEndMap.get(e);
    dispatch(_dependency5.GameEvent.PLAY_BTM, {
      data: {
        url: n
      }
    }), Array.from(this.winCategoryMap.values()).forEach(function (t) {
      dispatch(_dependency5.GameEvent.STOP_BTM, {
        data: t
      });
    }), this.playScoreEffect(this.ndTotalWin), dispatch(_dependency5.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: this.totalWin
    });
  }, c.playScoreEffect = function (t) {
    _dependency2.Tween.stopAllByTarget(this.txtTotalWin.node);
    var e = this.txtTotalWin.node.getWorldPosition(),
      n = _dependency2.instantiate(this.txtTotalWin.node);
    n.parent = t, n.scale = new _dependency2.Vec3(1.4, 1.4, 1.4), n.setWorldPosition(e), n.addComponent(_dependency2.UIOpacity), n.getComponent(_dependency2.UIOpacity).opacity = 0, n.setSiblingIndex(0), _dependency2.tween(n).bindNodeState(false).delay(.18).to(.18, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      easing: _dependency2.easing.linear
    }).call(function () {
      n.removeFromParent();
    }).start(), _dependency2.tween(n.getComponent(_dependency2.UIOpacity)).bindNodeState(false).delay(.18).to(0, {
      opacity: 158
    }).to(.18, {
      opacity: 0
    }).start(), _dependency2.tween(this.txtTotalWin.node).bindNodeState(false).to(.16, {
      scale: new _dependency2.Vec3(1.6, 1.6, 1.6)
    }, {
      easing: _dependency2.easing.quadIn
    }).to(.2, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      easing: _dependency2.easing.backOut
    }).start();
  }, c.removeAllTween = function () {
    var t = this;
    dispatch(_dependency5.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.JP_OUT
      }
    }), dispatch(_dependency5.GameEvent.STOP_BTM, {
      data: _dependency1.EBTM.JP_POPUP_LOOP_1
    }), dispatch(_dependency5.GameEvent.STOP_BTM, {
      data: _dependency1.EBTM.JP_POPUP_LOOP_2
    }), Array.from(this.winCategoryMap.values()).forEach(function (t) {
      dispatch(_dependency5.GameEvent.STOP_BTM, {
        data: t
      });
    }), _dependency2.tween(this.node).bindNodeState(false).to(.06, {
      scale: new _dependency2.Vec3(1, 0, 1)
    }).start(), _dependency2.tween(this).bindNodeState(false).delay(.1).call(function () {
      dispatch(_dependency5.GameEvent.PLAY_BGM, {
        data: _dependency1.EBGM.MAIN_GAME
      }), t.aniWin.node.active = !1, App.pool.getPool("COIN_POOL").clear(), t.coinContent.children.forEach(function (t) {
        t.destroy();
      }), dispatch(_dependency5.GameEvent.JACKPOT_GAME_PICK_END), t.close();
    }).start();
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "aniScroll", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(j.prototype, "ndResult", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(j.prototype, "coinContent", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = _dependency.applyDecoratedDescriptor(j.prototype, "coinFallingAnimNode", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(j.prototype, "aniWin", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = _dependency.applyDecoratedDescriptor(j.prototype, "ndTotalWin", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = _dependency.applyDecoratedDescriptor(j.prototype, "txtTotalWin", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(j.prototype, "items", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), Y = j)) || Y));
_dependency2.cclegacy._RF.pop();
