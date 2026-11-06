// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency6 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency9 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency0 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency1 from "./g1002-GameConfigModel";
import * as _dependency10 from "./g1002-GameData";
import * as _dependency11 from "./g1002-GameEvent";
import * as _dependency12 from "./g1002-GameSender";
import * as _dependency13 from "./g1002-types";
import * as _dependency14 from "../../shared/scripts/main-CmmUtils";
var _export;
export { _export as HeavenlyTreasuresView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "HeavenlyTreasuresView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, o, i, a, s, l, r, u, c, p, h, d, m, f, T, g, S, b, C, _, y, R, N, v, B, E, O, A, w, L, P, M, U, D;
var I, G, k, x, V, F, H, Y, z, W, j, Z, q, K, Q, J, X, $, tt, et, nt;
_dependency2.cclegacy._RF.push({}, "83647DjqZlKZblUZfws6H/5", "HeavenlyTreasuresView", void 0);
var ot,
  it = _dependency2._decorator.ccclass,
  at = _dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.RUN_SCORE = 1] = "RUN_SCORE", t[t.RUN_SCORE_END = 2] = "RUN_SCORE_END", t[t.WAIT_CLOSE = 3] = "WAIT_CLOSE";
}(ot || (ot = {}));
_publish("HeavenlyTreasuresView", (I = it("HeavenlyTreasuresView"), G = at({
  type: _dependency2.Prefab
}), k = _dependency4.inject("content", _dependency2.Node), x = _dependency4.inject("bbr", _dependency2.Node), V = _dependency4.inject("txtBonus", _dependency2.Label), F = _dependency4.inject("ndResultPopup", _dependency2.Node), H = _dependency4.inject("ndResultPopup/txtTotalBonus", _dependency2.Label), Y = _dependency4.inject("prefab/coinFallingAnimNode", _dependency2.Node), z = _dependency4.inject("ndResultPopup/coinContent", _dependency2.Node), W = _dependency4.inject("ndResultPopup/popup_02", _dependency2.Sprite), I((q = _dependency.applyDecoratedDescriptor((Z = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var n, a = arguments.length, s = new Array(a), l = 0; l < a; l++) s[l] = arguments[l];
    return n = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "treasuresBox", q, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "content", K, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "bbr", Q, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "txtBonus", J, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "ndResultPopup", X, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "txtTotalBonus", $, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "coinFallingAnimNode", tt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "coinContent", et, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "resultTitle", nt, _dependency.assertThisInitialized(n)), n.collectCoin = [], n.bonusList = [], n.itemCount = 0, n.treasuresMap = new Map(), n._totalBonus = 0, n.collectScore = 0, n.isResult = !1, n.runScoreStatus = ot.NONE, n.numTween = null, n.TWEEN_TAG = _dependency14.CmmUtils.hashCode("HeavenlyResultTween"), n.directShowResult = function () {
      n.runScoreStatus = ot.RUN_SCORE_END, _dependency2.Tween.stopAllByTag(n.TWEEN_TAG), n.ndResultPopup.off(_dependency2.NodeEventType.TOUCH_END, n.directShowResult), n.scheduleOnce(function () {
        n.ndResultPopup.on(_dependency2.NodeEventType.TOUCH_END, n.onCloseResult);
      }, .5);
      var t = n.data.getData().definition.digital;
      n.txtTotalBonus.string = _dependency8.CmmSlotUtils.formatNumber(n.collectScore, !1, !0, t), dispatch(_dependency6.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: n.collectScore
      }), dispatch(_dependency11.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.FU_OUT_DIRECT
        }
      }), dispatch(_dependency11.GameEvent.STOP_BTM, {
        data: _dependency1.EBTM.MONEY_SCROLL
      });
    }, n.onCloseResult = function () {
      dispatch(_dependency11.GameEvent.STOP_BTM, {
        data: _dependency1.EBTM.MONEY_SCROLL
      }), dispatch(_dependency11.GameEvent.PLAY_BGM, {
        data: _dependency1.EBGM.MAINGAME
      }), dispatch(_dependency11.GameEvent.STOP_BTM, {
        data: _dependency1.EBGM.BGM_SG_02_TW
      }), n.isShowResultView(), n.node.active = !1, App.pool.getPool("TREASURE_COIN_POOL").clear(), App.uiManager.close(e), dispatch(_dependency11.GameEvent.HEAVENLY_TREASURES_RESULT_END);
    }, n;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/HeavenlyTreasures";
  };
  var s = e.prototype;
  return s.setData = function () {
    var t = _dependency1.default.getData().filePaths.localeSpriteFrame;
    this.resultTitle.spriteFrame = _dependency9.LoadUtils.getDirSp(this.data.module, t, "popup_02");
  }, s.show = function () {
    t.prototype.show.call(this), this.setData(), dispatch(_dependency11.GameEvent.PLAY_BGM, {
      data: _dependency1.EBGM.BGM_SG_02
    });
    var e = this.data.getData().bonusState;
    if (this.totalBonus = 0, _dependency7.default.isReplay) {
      var n = this.data.getData().bonusState,
        o = n.actionValues,
        i = n.collectValues;
      this.replayAutoOpenBox(o, i);
    } else this.playDropTreasures(e.actionOptions);
  }, s.initViewData = function () {
    this.initCoinPool(), this.isShowResultView(), this.isResult = !1, this.collectScore = 0, this.bonusList = [], this.totalBonus = 0, this.itemCount = 0, this.collectCoin = [], this.content.removeAllChildren(), _dependency2.Tween.stopAllByTarget(this);
  }, s.isShowResultView = function (t) {
    var e = this;
    if (void 0 === t && (t = !1), this.ndResultPopup.active = t, _dependency2.Tween.stopAllByTarget(this), t) {
      this.txtBonus.node.active = !1, this.totalBonus = 0, this.playCoinFallAnim();
      _dependency1.default.isTurbo;
      var n = this.data.getData().definition.digital;
      dispatch(_dependency6.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: Number(_dependency8.CmmSlotUtils.formatNumber(Number(this.collectScore.toString()), !1, !1, n)),
          tweenTime: 5
        }
      });
      var o = {
        label: this.txtTotalBonus,
        start: 0,
        end: Number(_dependency8.CmmSlotUtils.formatNumber(this.collectScore, !1, !1, n)),
        tweenTime: 5,
        digital: n,
        useThousandsSeparator: !0,
        tag: this.TWEEN_TAG,
        callback: function () {
          e.directShowResult();
        }
      };
      dispatch(_dependency11.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.MONEY_SCROLL
        }
      }), this.numTween = _dependency8.CmmSlotUtils.tweenNum(o), this.ndResultPopup.once(_dependency2.NodeEventType.TOUCH_END, this.directShowResult), this.scheduleOnce(this.onCloseResult, 10);
    }
  }, s.playDropTreasures = function (t) {
    var e = this;
    this.initViewData(), this.bonusList = t.slice();
    for (var n = function () {
        var t = _dependency2.instantiate(e.treasuresBox);
        t.name = o.toString(), t.parent = e.content;
        var n = Math.floor(600 * Math.random()) - 280,
          i = 1.618 * (9 * Math.random() + 2);
        t.x = n, t.y = 800;
        var a = t.getComponent(_dependency2.sp.Skeleton);
        t.getChildByName("bonus").getComponent(_dependency2.UIOpacity).opacity = 0, a.paused = !0;
        var s = .78 * o;
        _dependency2.tween(t).bindNodeState(false).delay(s).to(i, {
          position: new _dependency2.Vec3(n, -780, 0)
        }).call(function () {
          t.off(_dependency2.NodeEventType.TOUCH_START, e.onTouchItem, e), e.itemCount++, e.checkResultGame();
        }).start(), t.once(_dependency2.NodeEventType.TOUCH_START, e.onTouchItem, e);
      }, o = 0; o < this.bonusList.length; o++) n();
  }, s.replayAutoOpenBox = function (t, e) {
    var n = this;
    this.initViewData();
    var o = -780,
      i = [].concat(t),
      a = [];
    e.forEach(function (t) {
      var e = i.indexOf(t);
      e > -1 && (a.push(e), i[e] = null);
    }), t.forEach(function (t, e) {
      var i = _dependency2.instantiate(n.treasuresBox);
      i.name = e.toString(), i.parent = n.content;
      var s = Math.floor(600 * Math.random()) - 280,
        l = 1.618 * (9 * Math.random() + 2);
      i.x = s, i.y = 800;
      var r = i.getComponent(_dependency2.sp.Skeleton);
      i.getChildByName("bonus").getComponent(_dependency2.UIOpacity).opacity = 0, r.paused = !0;
      var u = .78 * e,
        c = a.includes(e),
        T = _dependency0.default.getRandomNumber(-400, 400);
      if (n.treasuresMap.set(e, {
        amount: t,
        node: i,
        isOpen: !1,
        needOpen: c,
        openPositionY: T
      }), c) {
        var g = (800 - T) / 1580 * l,
          S = l - g;
        _dependency2.tween(i).bindNodeState(false).delay(u).to(g, {
          position: new _dependency2.Vec3(s, T, 0)
        }).call(function () {
          n.replayOpenItem(i);
        }).to(S, {
          position: new _dependency2.Vec3(s, o, 0)
        }).start();
      } else _dependency2.tween(i).bindNodeState(false).delay(u).to(l, {
        position: new _dependency2.Vec3(s, o, 0)
      }).call(function () {
        n.itemCount++, n.checkResultGame();
      }).start();
    });
  }, s.replayOpenItem = function (t) {
    var e = this;
    dispatch(_dependency11.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.CHEST_OPEN,
        loop: !1
      }
    }), this.itemCount++, t.setSiblingIndex(this.bonusList.length - 1);
    var n = t.getComponent(_dependency2.sp.Skeleton);
    n.paused = !1, n.setAnimation(0, "open", !1), _dependency2.Tween.stopAllByTarget(t);
    var o = t.getChildByName("bonus"),
      i = o.getComponent(_dependency2.UIOpacity),
      a = o.getComponent(_dependency2.Label),
      s = Number(t.name);
    a.string = this.treasuresMap.get(s).amount.toString(), _dependency2.tween(i).bindNodeState(false).to(.2, {
      opacity: 255
    }).start(), _dependency2.tween(o).bindNodeState(false).to(.2, {
      y: 148
    }, {
      easing: "backOut"
    }).start(), this.collectScore += this.treasuresMap.get(s).amount, _dependency2.tween(this).bindNodeState(false).to(.3, {
      totalBonus: this.collectScore
    }).start();
    var l = t.addComponent(_dependency2.UIOpacity);
    _dependency2.tween(l).bindNodeState(false).delay(1).to(.6, {
      opacity: 0
    }, {
      easing: "fade"
    }).call(function () {
      t.removeFromParent(), e.checkResultGame();
    }).start();
  }, s.onTouchItem = function (t) {
    var e = this;
    dispatch(_dependency11.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.CHEST_OPEN,
        loop: !1
      }
    }), this.itemCount++;
    var n = t.target;
    n.setSiblingIndex(this.bonusList.length - 1);
    var o = n.getComponent(_dependency2.sp.Skeleton);
    o.paused = !1, o.setAnimation(0, "open", !1), _dependency2.Tween.stopAllByTarget(n);
    var i = n.getChildByName("bonus"),
      a = i.getComponent(_dependency2.UIOpacity),
      s = i.getComponent(_dependency2.Label),
      l = Number(n.name);
    s.string = this.bonusList[l].amount.toString(), _dependency2.tween(a).bindNodeState(false).to(.2, {
      opacity: 255
    }).start(), _dependency2.tween(i).bindNodeState(false).to(.2, {
      y: 148
    }, {
      easing: "backOut"
    }).start(), this.collectScore += this.bonusList[l].amount, _dependency2.tween(this).bindNodeState(false).to(.3, {
      totalBonus: this.collectScore
    }).start(), this.collectCoin.push(this.bonusList[l]);
    var r = n.addComponent(_dependency2.UIOpacity);
    _dependency2.tween(r).bindNodeState(false).delay(1).to(.6, {
      opacity: 0
    }, {
      easing: "fade"
    }).call(function () {
      n.removeFromParent(), e.checkResultGame();
    }).start();
    var c = {
      token: this.bonusList[l].token,
      spinId: this.data.getData().spinId,
      clientType: "web",
      ratioIndex: _dependency5.default.ratioIndex,
      ratioValue: _dependency5.default.ratioValue,
      stakeIndex: _dependency5.default.stakeIndex,
      stakeValue: _dependency5.default.stakeValue,
      bonusType: _dependency13.EBonusType.FORTUNE_LANDING,
      action: _dependency13.BonusStateAction.COLLECT,
      actionValue: this.bonusList[l].amount
    };
    App.senderManager.get(_dependency12.GameSender).sendFortuneLandingCollectReq(c);
  }, s.checkResultGame = function () {
    _dependency7.default.isReplay ? !this.isResult && this.itemCount >= this.treasuresMap.size && (this.isResult = !0, this.isShowResultView(!0), dispatch(_dependency11.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBGM.BGM_SG_02_TW
      }
    })) : !this.isResult && this.itemCount >= this.bonusList.length && (this.isResult = !0, this.isShowResultView(!0), dispatch(_dependency11.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBGM.BGM_SG_02_TW
      }
    }));
  }, s.initCoinPool = function () {
    for (var t, e = this, n = this.coinFallingAnimNode, o = App.pool.createPool("TREASURE_COIN_POOL"), i = 0; i < 5; i++) t = void 0, (t = _dependency2.instantiate(n)).getComponent(_dependency2.sp.Skeleton).setEventListener(function (t, n) {
      "copy" == n.data.name && e.playCoinFallAnim();
    }), o.cloneNode = t, o.put(t);
  }, s.playCoinFallAnim = function () {
    var t = App.pool.getPool("TREASURE_COIN_POOL").get(),
      e = Math.random() >= .5 ? 1 : -1,
      n = t.getComponent(_dependency2.sp.Skeleton);
    t.setScale(e, 1), n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "coin", !1), n.setCompleteListener(function () {
      App.pool.getPool("COIN_POOL").put(t);
    }), t.setParent(this.coinContent);
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency10.default);
    }
  }, {
    key: "totalBonus",
    get: function () {
      return this._totalBonus;
    },
    set: function (t) {
      this._totalBonus = t, this.txtBonus.string = _dependency8.CmmSlotUtils.formatNumber(this._totalBonus, !0), this.txtTotalBonus.string = _dependency8.CmmSlotUtils.formatNumber(this._totalBonus, !0);
    }
  }]), e;
}(_dependency3.default)).prototype, "treasuresBox", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(Z.prototype, "content", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(Z.prototype, "bbr", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(Z.prototype, "txtBonus", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(Z.prototype, "ndResultPopup", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = _dependency.applyDecoratedDescriptor(Z.prototype, "txtTotalBonus", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(Z.prototype, "coinFallingAnimNode", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(Z.prototype, "coinContent", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = _dependency.applyDecoratedDescriptor(Z.prototype, "resultTitle", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = Z)) || j));
_dependency2.cclegacy._RF.pop();
