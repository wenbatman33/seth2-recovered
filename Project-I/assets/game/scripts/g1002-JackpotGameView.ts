// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "./g1002-GameEvent";
import * as _dependency6 from "./g1002-GameSender";
import * as _dependency7 from "./g1002-GameData";
import * as _dependency8 from "./g1002-types";
import * as _dependency9 from "../../shared/scripts/slotFramework-SocketModel";
import * as _dependency0 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency10 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency11 from "./g1002-GameConfigModel";
import * as _dependency12 from "./g1002-JackpotView";
import * as _dependency13 from "../../shared/scripts/main-CmmUtils";
import * as _dependency14 from "../../shared/scripts/slotFramework-ReplayModel";
var _export;
export { _export as JackpotGameView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "JackpotGameView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, a, o, s, r, c, l, u, p, h, d, f, m, P, T, _, O, v, N, S, w, g, k, C, A, y, E, R, b, I, L, M, W, U, D, J;
var B, G, x, V, F, Y, z, j, H, K, Q, q, X, Z, $, tt, et;
_dependency2.cclegacy._RF.push({}, "e2869bgwh1NmJeVoa496QGz", "JackpotGameView", void 0);
var nt,
  it = _dependency2._decorator.ccclass,
  at = _dependency2._decorator.property;
!function (t) {
  t[t.RUN_SCORE = 0] = "RUN_SCORE", t[t.RUN_SCORE_END = 1] = "RUN_SCORE_END", t[t.WAIT_CLOSE = 2] = "WAIT_CLOSE";
}(nt || (nt = {}));
_publish("JackpotGameView", (B = it("JackpotGameView"), G = _dependency4.inject("aniScroll", _dependency2.sp.Skeleton), x = _dependency4.inject("ndResult", _dependency2.Node), V = _dependency4.inject("ndResult/coinContent", _dependency2.Node), F = _dependency4.inject("prefab/coinFallingAnimNode", _dependency2.Node), Y = _dependency4.inject("ndResult/aniWin", _dependency2.sp.Skeleton), z = _dependency4.inject("ndResult/txtTotalWin", _dependency2.Label), j = at({
  type: _dependency2.Node,
  tooltip: "Items",
  override: !0
}), B((Q = _dependency.applyDecoratedDescriptor((K = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "aniScroll", Q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndResult", q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinContent", X, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinFallingAnimNode", Z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "aniWin", $, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "txtTotalWin", tt, _dependency.assertThisInitialized(e)), e.totalWinNumber = 0, _dependency.initializerDefineProperty(e, "items", et, _dependency.assertThisInitialized(e)), e.checkOpenMap = new Map(), e.isLock = !0, e.showWinStatus = null, e.tweenNumTween = null, e.replayOpenSchedule = null, e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/jackpotGame/JackpotGameView";
  };
  var c = e.prototype;
  return c.start = function () {
    var t = this;
    dispatch(_dependency5.GameEvent.PLAY_BGM, {
      data: _dependency11.EBGM.BGM_JP
    }), this.initCoinPool(), this.setEventTouch(), this.ndResult.active = !1, this.isLock = !0, this.items.forEach(function (t) {
      t.active = !1;
    }), dispatch(_dependency5.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency11.EBTM.JP_TRANS,
        loop: !1
      }
    }), this.txtTotalWin.string = "0", this.txtTotalWin.node.active = !1, this.aniScroll.clearTracks(), this.aniScroll.setToSetupPose(), this.aniScroll.setAnimation(0, "open", !1), this.aniScroll.setEventListener(function () {
      var e = t.data.getData().bonusState;
      t.checkOpenMap.clear(), t.items.forEach(function (e, n) {
        t.checkOpenMap.set(n, null);
      }), e && e.pickPositions.forEach(function (e, n) {
        t.checkOpenMap.set(e.position, e);
      }), t.initItemStatus(), e.totalWinnings > 0 && (t.isLock = !0, _dependency2.tween(t).bindNodeState(false).delay(.9).call(function () {
        t.showResult(e);
      }).start()), _dependency14.default.isReplay && t.replayAutoOpenItem();
    }), this.isLock = !1;
  }, c.close = function () {
    dispatch(_dependency5.GameEvent.STOP_BTM, {
      data: _dependency11.EBTM.JP_POPUP_LOOP_1
    }), dispatch(_dependency5.GameEvent.STOP_BTM, {
      data: _dependency11.EBTM.JP_POPUP_LOOP_2
    }), t.prototype.close.call(this);
  }, c.initItemStatus = function () {
    var t = this;
    this.checkOpenMap.forEach(function (e, n) {
      var i = t.items[n];
      i.name = n.toString(), i.active = !0;
      var a = i.getChildByName("ingot").getComponent(_dependency2.sp.Skeleton),
        o = i.getChildByName("icon").getComponent(_dependency2.sp.Skeleton);
      a.clearTracks(), a.setToSetupPose(), a.node.active = !1, o.clearTracks(), o.setToSetupPose(), o.node.active = !1, _dependency2.tween(t).bindNodeState(false).delay(.1 * _dependency2.randomRangeInt(0, 6)).call(function () {
        if (null === t.checkOpenMap.get(n)) a.node.active = !0, a.setAnimation(0, "in", !1), !_dependency14.default.isReplay && i.on(_dependency2.NodeEventType.TOUCH_END, t.onOpenItemPosition, t);else {
          var o = t.items[n];
          t.openItem(e, o), o.off(_dependency2.NodeEventType.TOUCH_END, t.onOpenItemPosition, t);
        }
      }).start();
    });
  }, c.initCoinPool = function () {
    for (var t, e = this, n = this.coinFallingAnimNode, i = App.pool.createPool("COIN_POOL"), a = 0; a < 5; a++) t = void 0, (t = _dependency2.instantiate(n)).getComponent(_dependency2.sp.Skeleton).setEventListener(function (t, n) {
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
  }, c.replayAutoOpenItem = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
      var e = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            this.replayOpenSchedule = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t() {
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
          case 2:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), c.updatePositions = function () {
    var t = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(e) {
      var n = this;
      return _dependency.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.abrupt("return", new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function t(i) {
              var a, o, s, c, l;
              return _dependency.regeneratorRuntime().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a = 0;
                  case 1:
                    if (!(a < e.length)) {
                      t.next = 12;
                      break;
                    }
                    if (o = e[a], s = o.position, c = n.checkOpenMap.get(s), l = n.items[s], null !== c) {
                      t.next = 9;
                      break;
                    }
                    return t.next = 9, n.openItem(o, l);
                  case 9:
                    a++, t.next = 1;
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
      var a = t.position;
      n.checkOpenMap.set(a, t);
      var o = e.getChildByName("ingot").getComponent(_dependency2.sp.Skeleton);
      o.node.active = !0, o.clearTracks(), o.setToSetupPose(), o.setAnimation(0, "open", !1), o.timeScale = 1.5, o.setCompleteListener(function () {
        o.node.active = !1;
      }), o.setEventListener(function () {
        dispatch(_dependency5.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency11.EBTM.JP_FLIP,
            loop: !1
          }
        });
        var n = e.getChildByName("icon").getComponent(_dependency2.sp.Skeleton);
        n.node.active = !0, n.node.getComponent(_dependency2.UIOpacity).opacity = 0, n.clearTracks(), n.setToSetupPose();
        var a = t.category.split("jp-")[1];
        n.setAnimation(0, a, !0), _dependency2.tween(n.node.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.3, {
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
    this.items.forEach(function (i, a) {
      var o,
        s = null == (o = e.checkOpenMap.get(a)) ? void 0 : o.category;
      s && t === s && (_dependency2.tween(i).bindNodeState(false).to(.3, {
        scale: new _dependency2.Vec3(1.2, 1.2, 1.2)
      }).start(), n || (n = !0, dispatch(_dependency5.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency11.EBTM.JP_CONFIRM,
          loop: !1
        }
      })));
    });
  }, c.showResult = function (t) {
    var e = this,
      n = t.pickPositions,
      i = n[n.length - 1].category,
      a = t.totalWinnings;
    this.totalWinNumber = a, this.aniWin.clearTracks(), this.aniWin.setToSetupPose(), this.aniWin.setAnimation(0, i, !0), this.aniWin.node.scale = new _dependency2.Vec3(.6, .6, .6), this.aniWin.node.active = !0, this.showWinLight(i), this.scheduleOnce(function () {
      e.ndResult.active = !0, e.playCoinFallAnim(), dispatch(_dependency1.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: a,
          tweenTime: .3
        }
      }), Log.d("%c winCategory ", "color:#ff0000", i);
      var t = i == _dependency12.EJackpotType.MINI || i == _dependency12.EJackpotType.MINOR ? _dependency11.EBTM.JP_POPUP_IN_1 : _dependency11.EBTM.JP_POPUP_IN_2,
        n = i == _dependency12.EJackpotType.MINI || i == _dependency12.EJackpotType.MINOR ? _dependency11.EBTM.JP_POPUP_LOOP_1 : _dependency11.EBTM.JP_POPUP_LOOP_2;
      switch (dispatch(_dependency5.GameEvent.PLAY_BTM, {
        data: {
          url: t
        }
      }), e.scheduleOnce(function () {
        dispatch(_dependency5.GameEvent.PLAY_BTM, {
          data: {
            url: n,
            loop: !0
          }
        });
      }, 2), i) {
        case "jp-mini":
          dispatch(_dependency5.GameEvent.PLAY_BTM, {
            data: {
              url: _dependency11.EBTM.JP_MINI_VOCAL
            }
          });
          break;
        case "jp-minor":
          dispatch(_dependency5.GameEvent.PLAY_BTM, {
            data: {
              url: _dependency11.EBTM.JP_MINOR_VOCAL
            }
          });
          break;
        case "jp-major":
          dispatch(_dependency5.GameEvent.PLAY_BTM, {
            data: {
              url: _dependency11.EBTM.JP_MAJOR_VOCAL
            }
          });
          break;
        case "jp-grand":
          dispatch(_dependency5.GameEvent.PLAY_BTM, {
            data: {
              url: _dependency11.EBTM.JP_GRAND_VOCAL
            }
          });
      }
      _dependency2.tween(e.aniWin.node).bindNodeState(false).to(.6, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }).start(), e.scheduleOnce(function () {
        if (e.showWinStatus != nt.RUN_SCORE_END) {
          e.txtTotalWin.node.active = !0;
          var t = e.data.getData().definition.digital,
            n = {
              label: e.txtTotalWin,
              start: 0,
              end: Number(_dependency10.CmmSlotUtils.formatNumber(a, !1, !1, t)),
              tweenTime: 10,
              digital: t,
              useThousandsSeparator: !0,
              callback: function () {
                e.directShowResult();
              }
            };
          e.tweenNumTween = _dependency10.CmmSlotUtils.tweenNum(n), e.showWinStatus = nt.RUN_SCORE, dispatch(_dependency1.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
            data: {
              value: Number(_dependency10.CmmSlotUtils.formatNumber(a, !1, !1, t)),
              tweenTime: 10
            }
          }), e.ndResult.once(_dependency2.NodeEventType.TOUCH_END, e.directShowResult, e);
        }
      }, 2);
    }, 2);
  }, c.playCoinFallAnim = function () {
    var t = App.pool.getPool("COIN_POOL").get(),
      e = Math.random() >= .5 ? 1 : -1,
      n = t.getComponent(_dependency2.sp.Skeleton);
    t.setScale(e, 1), n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "coin", !1), n.setCompleteListener(function () {
      App.pool.getPool("COIN_POOL").put(t);
    }), t.setParent(this.coinContent);
  }, c.addEvents = function () {
    this.on(_dependency5.GameEvent.JACKPOT_GAME_PICK_RESPONSE, this.onPickResp);
  }, c.setEventTouch = function () {
    var t = this;
    this.onI(_dependency2.Input.EventType.KEY_DOWN, _dependency13.CmmUtils.debounce(function (n) {
      if (n.keyCode === _dependency2.KeyCode.SPACE) {
        if (!App.uiManager.isShow(e)) return;
        switch (t.showWinStatus) {
          case nt.RUN_SCORE:
            t.directShowResult();
            break;
          case nt.RUN_SCORE_END:
            t.removeAllTween();
            break;
          case nt.WAIT_CLOSE:
        }
      }
    }));
  }, c.directShowResult = function () {
    var t = this;
    _dependency2.Tween.stopAllByTarget(this.node), this.ndResult.off(_dependency2.NodeEventType.TOUCH_END, this.directShowResult), this.showWinStatus = nt.RUN_SCORE_END, this.tweenNumTween && this.tweenNumTween.stop();
    var e = this.data.getData().definition.digital;
    this.txtTotalWin.string = _dependency10.CmmSlotUtils.formatNumber(this.totalWinNumber, !1, !0, e), this.txtTotalWin.node.active = !0, dispatch(_dependency5.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: this.totalWinNumber
    }), _dependency2.tween(this.node).bindNodeState(false).delay(1).call(function () {
      t.ndResult.once(_dependency2.NodeEventType.TOUCH_END, t.removeAllTween, t);
    }).start();
    var n = _dependency11.default.getData().bigwinAutoCloseTime;
    _dependency2.tween(this.node).bindNodeState(false).delay(n).call(function () {
      t.removeAllTween();
    }).start();
  }, c.removeAllTween = function () {
    this.ndResult.off(_dependency2.NodeEventType.TOUCH_END, this.removeAllTween), this.tweenNumTween && this.tweenNumTween.stop(), _dependency2.Tween.stopAllByTarget(this.node), dispatch(_dependency5.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency11.EBTM.JP_OUT,
        loop: !1
      }
    }), this.aniWin.node.active = !1, dispatch(_dependency5.GameEvent.PLAY_BGM, {
      data: _dependency11.EBGM.MAINGAME
    }), App.pool.getPool("COIN_POOL").clear(), this.coinContent.children.forEach(function (t) {
      t.destroy();
    }), dispatch(_dependency5.GameEvent.JACKPOT_GAME_PICK_END), this.close();
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
}), q = _dependency.applyDecoratedDescriptor(K.prototype, "ndResult", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(K.prototype, "coinContent", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = _dependency.applyDecoratedDescriptor(K.prototype, "coinFallingAnimNode", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = _dependency.applyDecoratedDescriptor(K.prototype, "aniWin", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(K.prototype, "txtTotalWin", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(K.prototype, "items", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), H = K)) || H));
_dependency2.cclegacy._RF.pop();
