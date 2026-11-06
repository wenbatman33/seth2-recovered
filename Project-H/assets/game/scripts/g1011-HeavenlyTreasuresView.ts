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
import * as _dependency1 from "./g1011-GameConfigModel";
import * as _dependency10 from "./g1011-GameData";
import * as _dependency11 from "./g1011-GameEvent";
import * as _dependency12 from "./g1011-GameSender";
import * as _dependency13 from "./g1011-types";
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
var e, n, o, i, a, s, r, l, u, c, p, h, d, m, f, g, T, b, S, C, y, R, N, v, O, _, E, A, w, B, L, P, M, I, U, D;
var k, x, V, G, F, H, z, Y, W, j, Z, q, K, Q, J, X, $, tt, et, nt, ot;
_dependency2.cclegacy._RF.push({}, "83647DjqZlKZblUZfws6H/5", "HeavenlyTreasuresView", void 0);
var it,
  at = _dependency2._decorator.ccclass,
  st = _dependency2._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.RUN_SCORE = 1] = "RUN_SCORE", t[t.RUN_SCORE_END = 2] = "RUN_SCORE_END", t[t.WAIT_CLOSE = 3] = "WAIT_CLOSE";
}(it || (it = {}));
_publish("HeavenlyTreasuresView", (k = at("HeavenlyTreasuresView"), x = st({
  type: _dependency2.Prefab
}), V = _dependency4.inject("content", _dependency2.Node), G = _dependency4.inject("bbr", _dependency2.Node), F = _dependency4.inject("txtBonus", _dependency2.Label), H = _dependency4.inject("ndResultPopup", _dependency2.Node), z = _dependency4.inject("ndResultPopup/txtTotalBonus", _dependency2.Label), Y = _dependency4.inject("prefab/coinFallingAnimNode", _dependency2.Node), W = _dependency4.inject("ndResultPopup/coinContent", _dependency2.Node), j = _dependency4.inject("ndResultPopup/popup_02", _dependency2.Sprite), k((K = _dependency.applyDecoratedDescriptor((q = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var n, a = arguments.length, s = new Array(a), r = 0; r < a; r++) s[r] = arguments[r];
    return n = Reflect.construct(t, [this].concat(s).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(n, "treasuresBox", K, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "content", Q, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "bbr", J, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "txtBonus", X, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "ndResultPopup", $, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "txtTotalBonus", tt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "coinFallingAnimNode", et, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "coinContent", nt, _dependency.assertThisInitialized(n)), _dependency.initializerDefineProperty(n, "resultTitle", ot, _dependency.assertThisInitialized(n)), n.collectCoin = [], n.bonusList = [], n.itemCount = 0, n.treasuresMap = new Map(), n._totalBonus = 0, n.collectScore = 0, n.isResult = !1, n.runScoreStatus = it.NONE, n.numTween = null, n.TWEEN_TAG = _dependency14.CmmUtils.hashCode("HeavenlyResultTween"), n.directShowResult = function () {
      n.runScoreStatus = it.RUN_SCORE_END, _dependency2.Tween.stopAllByTag(n.TWEEN_TAG), n.ndResultPopup.off(_dependency2.NodeEventType.TOUCH_END, n.directShowResult), n.scheduleOnce(function () {
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
        data: _dependency1.EBGM.MAIN_GAME
      }), n.isShowResultView(), n.node.active = !1, App.pool.getPool("TREASURE_COIN_POOL").clear(), App.uiManager.close(e), dispatch(_dependency11.GameEvent.HEAVENLY_TREASURES_RESULT_END);
    }, n;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/HeavenlyTreasures";
  };
  var r = e.prototype;
  return r.update = function (t) {
    if (_dependency7.default.isReplay) for (var e, n = _dependency.createForOfIteratorHelperLoose(this.treasuresMap.entries()); !(e = n()).done;) {
      var o = e.value,
        i = (o[0], o[1]);
      if (i.needOpen && !i.isOpen) i.node.getPosition().y <= i.openPositionY && (this.replayOpenItem(i.node), i.isOpen = !0);
    }
  }, r.setData = function () {
    var t = _dependency1.default.getData().filePaths.localeSpriteFrame;
    this.resultTitle.spriteFrame = _dependency9.LoadUtils.getDirSp(this.data.module, t, "popup_02");
  }, r.show = function () {
    t.prototype.show.call(this), this.setData();
    var e = this.data.getData().bonusState;
    if (this.totalBonus = 0, _dependency7.default.isReplay) {
      var n = this.data.getData().bonusState,
        o = n.actionValues,
        i = n.collectValues;
      this.replayAutoOpenBox(o, i);
    } else this.playDropTreasures(e.actionOptions);
  }, r.initViewData = function () {
    this.initCoinPool(), this.isShowResultView(), this.isResult = !1, this.collectScore = 0, this.bonusList = [], this.totalBonus = 0, this.itemCount = 0, this.collectCoin = [], this.content.removeAllChildren(), _dependency2.Tween.stopAllByTarget(this);
  }, r.isShowResultView = function (t) {
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
  }, r.playDropTreasures = function (t) {
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
  }, r.replayAutoOpenBox = function (t, e) {
    var n = this;
    this.initViewData();
    var o = [];
    e.forEach(function (e, n) {
      var i = t.indexOf(e);
      i > -1 && o.push(i);
    }), t.forEach(function (t, e) {
      var i = _dependency2.instantiate(n.treasuresBox);
      i.name = e.toString(), i.parent = n.content;
      var a = Math.floor(600 * Math.random()) - 280,
        s = 1.618 * (9 * Math.random() + 2);
      i.x = a, i.y = 800;
      var r = i.getComponent(_dependency2.sp.Skeleton);
      i.getChildByName("bonus").getComponent(_dependency2.UIOpacity).opacity = 0, r.paused = !0;
      var l = .78 * e,
        u = o.includes(e),
        c = _dependency0.default.getRandomNumber(-400, 400);
      n.treasuresMap.set(e, {
        amount: t,
        node: i,
        isOpen: !1,
        needOpen: u,
        openPositionY: c
      }), _dependency2.tween(i).bindNodeState(false).delay(l).to(s, {
        position: new _dependency2.Vec3(a, -780, 0)
      }).call(function () {
        n.itemCount++, n.checkResultGame();
      }).start();
    });
  }, r.replayOpenItem = function (t) {
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
    var r = t.addComponent(_dependency2.UIOpacity);
    _dependency2.tween(r).bindNodeState(false).delay(1).to(.6, {
      opacity: 0
    }, {
      easing: "fade"
    }).call(function () {
      t.removeFromParent(), e.checkResultGame();
    }).start();
  }, r.onTouchItem = function (t) {
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
      r = Number(n.name);
    s.string = this.bonusList[r].amount.toString(), _dependency2.tween(a).bindNodeState(false).to(.2, {
      opacity: 255
    }).start(), _dependency2.tween(i).bindNodeState(false).to(.2, {
      y: 148
    }, {
      easing: "backOut"
    }).start(), this.collectScore += this.bonusList[r].amount, _dependency2.tween(this).bindNodeState(false).to(.3, {
      totalBonus: this.collectScore
    }).start(), this.collectCoin.push(this.bonusList[r]);
    var l = n.addComponent(_dependency2.UIOpacity);
    _dependency2.tween(l).bindNodeState(false).delay(1).to(.6, {
      opacity: 0
    }, {
      easing: "fade"
    }).call(function () {
      n.removeFromParent(), e.checkResultGame();
    }).start();
    var u = {
      token: this.bonusList[r].token,
      spinId: this.data.getData().spinId,
      clientType: "web",
      ratioIndex: _dependency5.default.ratioIndex,
      ratioValue: _dependency5.default.ratioValue,
      stakeIndex: _dependency5.default.stakeIndex,
      stakeValue: _dependency5.default.stakeValue,
      bonusType: _dependency13.EBonusType.FORTUNE_LANDING,
      action: _dependency13.BonusStateAction.COLLECT,
      actionValue: this.bonusList[r].amount
    };
    App.senderManager.get(_dependency12.GameSender).sendFortuneLandingCollectReq(u);
  }, r.checkResultGame = function () {
    _dependency7.default.isReplay ? !this.isResult && this.itemCount >= this.treasuresMap.size && (this.isResult = !0, this.isShowResultView(!0)) : !this.isResult && this.itemCount >= this.bonusList.length && (this.isResult = !0, this.isShowResultView(!0));
  }, r.initCoinPool = function () {
    for (var t, e = this, n = this.coinFallingAnimNode, o = App.pool.createPool("TREASURE_COIN_POOL"), i = 0; i < 5; i++) t = void 0, (t = _dependency2.instantiate(n)).getComponent(_dependency2.sp.Skeleton).setEventListener(function (t, n) {
      "copy" == n.data.name && e.playCoinFallAnim();
    }), o.cloneNode = t, o.put(t);
  }, r.playCoinFallAnim = function () {
    var __localCoinPool = this.data && this.data.__localProjectH ? "TREASURE_COIN_POOL" : "COIN_POOL";
    var t = App.pool.getPool("TREASURE_COIN_POOL").get(),
      e = Math.random() >= .5 ? 1 : -1,
      n = t.getComponent(_dependency2.sp.Skeleton);
    t.setScale(e, 1), n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "coin", !1), n.setCompleteListener(function () {
      App.pool.getPool(__localCoinPool).put(t);
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
}(_dependency3.default)).prototype, "treasuresBox", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = _dependency.applyDecoratedDescriptor(q.prototype, "content", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(q.prototype, "bbr", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(q.prototype, "txtBonus", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = _dependency.applyDecoratedDescriptor(q.prototype, "ndResultPopup", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(q.prototype, "txtTotalBonus", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(q.prototype, "coinFallingAnimNode", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = _dependency.applyDecoratedDescriptor(q.prototype, "coinContent", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = _dependency.applyDecoratedDescriptor(q.prototype, "resultTitle", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = q)) || Z));
_dependency2.cclegacy._RF.pop();

// Preserve already-collected score when resuming original remaining falling boxes.
import { EDITOR as __localTreasureEditor } from "cc/env";
import { installTreasureResumeHooks as __installLocalTreasureResume } from "../backend/BonusHooks";
if(!__localTreasureEditor)__installLocalTreasureResume(_export);
