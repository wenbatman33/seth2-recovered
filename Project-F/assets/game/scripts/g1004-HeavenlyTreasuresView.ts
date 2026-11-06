// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "../../shared/scripts/main-Decorators";
import * as _dependency5 from "../../shared/scripts/slotFramework-CmmSlotUtils";
import * as _dependency6 from "./g1004-GameEvent";
import * as _dependency7 from "./g1004-types";
import * as _dependency8 from "./g1004-GameData";
import * as _dependency9 from "./g1004-GameSender";
import * as _dependency0 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency1 from "./g1004-GameConfigModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-RunScoreComponent";
import * as _dependency11 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency12 from "../../shared/scripts/slotFramework-ReplayModel";
import * as _dependency13 from "../../shared/scripts/slotFramework-MathUtil";
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
var e, n, o, i, a, s, l, r, u, c, p, h, d, m, f, g, y, C, b, T, v, S, A, w, R, L, B, E, P, _, N, O, M, x, k, I;
var V, U, W, D, G, F, H, z, Y, j, q, Z, K, Q, J, X, $, tt, et, nt, ot, it, at;
_dependency2.cclegacy._RF.push({}, "83647DjqZlKZblUZfws6H/5", "HeavenlyTreasuresView", void 0);
var st = _dependency2._decorator.ccclass,
  lt = _dependency2._decorator.property;
_publish("HeavenlyTreasuresView", (V = st("HeavenlyTreasuresView"), U = lt({
  type: _dependency2.Prefab
}), W = _dependency4.inject("content", _dependency2.Node), D = _dependency4.inject("txtBonus", _dependency2.Label), G = _dependency4.inject("ndResultPopup", _dependency2.Node), F = _dependency4.inject("ndResultPopup/heavenlyTreasures", _dependency2.sp.Skeleton), H = _dependency4.inject("ndResultPopup/ndTotalWin", _dependency2.Node), z = _dependency4.inject("ndResultPopup/ndTotalWin/txtTotalBonus", _dependency2.Label), Y = _dependency4.inject("prefab/coinFallingAnimNode", _dependency2.Node), j = _dependency4.inject("ndResultPopup/coinContent", _dependency2.Node), q = lt({
  type: _dependency2.Sprite
}), V((Q = _dependency.applyDecoratedDescriptor((K = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "treasuresBox", Q, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "content", J, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "txtBonus", X, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndResultPopup", $, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "anim", tt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndTotalWin", et, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "txtTotalWin", nt, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinFallingAnimNode", ot, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinContent", it, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "spTitle", at, _dependency.assertThisInitialized(e)), e.collectCoin = [], e.bonusList = [], e.itemCount = 0, e._totalBonus = 0, e.collectScore = 0, e.isResult = !1, e.runScoreComponent = null, e.treasuresMap = new Map(), e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/bonusGame/HeavenlyTreasures";
  };
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this), null === this.node.getComponent(_dependency10.RunScoreComponent) && (this.runScoreComponent = this.node.addComponent(_dependency10.RunScoreComponent));
    var e = _dependency1.default.getData().filePaths.localeSpriteFrame;
    this.spTitle.spriteFrame = _dependency11.LoadUtils.getDirSp(this.data.module, e, "feature_board_font_02");
  }, s.addEvents = function () {
    this.on(_dependency10.ERunScoreStatus.RUN_SCORE_END, this.directShowResult), this.on(_dependency10.ERunScoreStatus.WAIT_CLOSE, this.removeAllTween);
  }, s.show = function () {
    t.prototype.show.call(this), this.initViewData();
    var e = this.data.getData().bonusState;
    if (dispatch(_dependency6.GameEvent.PLAY_BGM, {
      data: _dependency1.EBGM.HEAVENLY_TREASURES
    }), _dependency12.default.isReplay) {
      var n = e.actionValues,
        o = e.collectValues;
      this.replayAutoOpenBox(n, o);
    } else this.playDropTreasures(e.actionOptions);
  }, s.initViewData = function () {
    this.ndTotalWin.active = !1, this.isShowResultView(), this.collectScore = 0, this.bonusList = [], this.totalBonus = 0, this.itemCount = 0, this.collectCoin = [], this.content.removeAllChildren(), _dependency2.Tween.stopAllByTarget(this);
  }, s.replayOpenItem = function (t) {
    var e = this;
    dispatch(_dependency6.GameEvent.PLAY_BTM, {
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
      var c = .78 * e,
        p = a.includes(e),
        d = _dependency13.default.getRandomNumber(-400, 400);
      if (n.treasuresMap.set(e, {
        amount: t,
        node: i,
        isOpen: !1,
        needOpen: p,
        openPositionY: d
      }), p) {
        var y = (800 - d) / 1580 * l,
          C = l - y;
        _dependency2.tween(i).bindNodeState(false).delay(c).to(y, {
          position: new _dependency2.Vec3(s, d, 0)
        }).call(function () {
          n.replayOpenItem(i);
        }).to(C, {
          position: new _dependency2.Vec3(s, o, 0)
        }).start();
      } else _dependency2.tween(i).bindNodeState(false).delay(c).to(l, {
        position: new _dependency2.Vec3(s, o, 0)
      }).call(function () {
        n.itemCount++, n.checkResultGame();
      }).start();
    });
  }, s.isShowResultView = function (t) {
    var e = this;
    void 0 === t && (t = !1), App.globalAudio.pauseMusic(), this.ndResultPopup.active = t, this.isResult = t, t && (dispatch(_dependency6.GameEvent.PLAY_BGM, {
      data: _dependency1.EBGM.HEAVENLY_TREASURES2
    }), this.anim.clearTracks(), this.anim.setToSetupPose(), this.anim.setAnimation(0, "in", !1), this.anim.setCompleteListener(function () {
      e.anim.setAnimation(0, "loop", !0);
    }), this.initCoinPool(), this.playCoinFallAnim(), this.anim.setEventListener(function (t, n) {
      var o = e.data.getData().definition.digital,
        i = _dependency1.default.getData().bigWinAutoCloseTime;
      e.runScoreComponent.runScore(e.txtTotalWin, e.collectScore, 8, o, i, !0), dispatch(_dependency6.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.RUN_SCORE
        }
      }), e.ndTotalWin.active = !0, e.ndTotalWin.scale = new _dependency2.Vec3(.3, .3, 1), _dependency2.tween(e.ndTotalWin).bindNodeState(false).to(.3, {
        scale: new _dependency2.Vec3(1, 1, 1)
      }, {
        easing: _dependency2.easing.backOut
      }).start(), e.txtBonus.node.active = !1;
    }));
  }, s.playDropTreasures = function (t) {
    var e = this;
    this.bonusList = [].concat(t);
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
  }, s.onTouchItem = function (t) {
    var e = this;
    dispatch(_dependency6.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.CHEST_OPEN
      }
    }), this.itemCount++;
    var n = t.target;
    n.setSiblingIndex(this.bonusList.length - 1);
    var o = n.getComponent(_dependency2.sp.Skeleton);
    o.paused = !1, o.setAnimation(0, "open", !1), _dependency2.Tween.stopAllByTarget(n);
    var i = n.getChildByName("bonus"),
      a = i.getComponent(_dependency2.UIOpacity),
      s = i.getComponent(_dependency2.Label),
      l = Number(n.name),
      r = this.bonusList[l].amount,
      c = {
        value: 0
      };
    _dependency2.tween(c).bindNodeState(false).to(.2, {
      value: r
    }, {
      onUpdate: function () {
        s.string = _dependency5.CmmSlotUtils.formatNumber(c.value, !0);
      },
      onComplete: function () {
        s.string = _dependency5.CmmSlotUtils.formatNumber(r, !0);
      }
    }).start(), _dependency2.tween(a).bindNodeState(false).to(.2, {
      opacity: 255
    }).start(), _dependency2.tween(i).bindNodeState(false).to(.2, {
      y: 148
    }, {
      easing: "backOut"
    }).start(), this.collectScore += this.bonusList[l].amount, _dependency2.Tween.stopAllByTarget(this), _dependency2.tween(this).bindNodeState(false).to(.3, {
      totalBonus: this.collectScore
    }).start(), this.collectCoin.push(this.bonusList[l]);
    var f = n.addComponent(_dependency2.UIOpacity);
    _dependency2.tween(f).bindNodeState(false).delay(1).to(.6, {
      opacity: 0
    }, {
      easing: "fade"
    }).call(function () {
      n.removeFromParent(), e.checkResultGame();
    }).start();
    var g = {
      token: this.bonusList[l].token,
      spinId: this.data.getData().spinId,
      clientType: "web",
      ratioIndex: _dependency0.default.ratioIndex,
      ratioValue: _dependency0.default.ratioValue,
      stakeIndex: _dependency0.default.stakeIndex,
      stakeValue: _dependency0.default.stakeValue,
      bonusType: _dependency7.EBonusType.FORTUNE_LANDING,
      action: _dependency7.BonusStateAction.COLLECT,
      actionValue: this.bonusList[l].amount
    };
    App.senderManager.get(_dependency9.GameSender).sendFortuneLandingCollectReq(g);
  }, s.checkResultGame = function () {
    var t = _dependency12.default.isReplay ? this.itemCount >= this.treasuresMap.size : this.itemCount >= this.bonusList.length;
    !this.isResult && t && this.isShowResultView(!0);
  }, s.initCoinPool = function () {
    var t = this;
    this.coinContent.children.forEach(function (t) {
      t.destroy();
    });
    for (var e, n = this.coinFallingAnimNode, o = App.pool.createPool("COIN_POOL"), i = 0; i < 5; i++) e = void 0, (e = _dependency2.instantiate(n)).getComponent(_dependency2.sp.Skeleton).setEventListener(function (e, n) {
      "copy" == n.data.name && t.playCoinFallAnim();
    }), o.cloneNode = e, o.put(e);
  }, s.playCoinFallAnim = function () {
    var t = App.pool.getPool("COIN_POOL").get(),
      e = Math.random() >= .5 ? 1 : -1,
      n = t.getComponent(_dependency2.sp.Skeleton);
    t.setScale(e, 1), n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "coin", !1), n.setCompleteListener(function () {
      App.pool.getPool("COIN_POOL").put(t);
    }), t.setParent(this.coinContent);
  }, s.directShowResult = function () {
    dispatch(_dependency6.GameEvent.STOP_BTM, {
      data: _dependency1.EBTM.RUN_SCORE
    }), this.playScoreEffect(this.ndTotalWin), dispatch(_dependency6.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: this.totalBonus
    });
  }, s.removeAllTween = function () {
    App.pool.getPool("COIN_POOL").clear(), this.coinContent.children.forEach(function (t) {
      t.destroy();
    }), this.isShowResultView(), dispatch(_dependency6.GameEvent.PLAY_BGM, {
      data: _dependency1.EBGM.MAIN_GAME
    }), dispatch(_dependency6.GameEvent.HEAVENLY_TREASURES_RESULT_END), App.globalAudio.resumeMusic(), this.close();
  }, s.playScoreEffect = function (t) {
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
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }, {
    key: "totalBonus",
    get: function () {
      return this._totalBonus;
    },
    set: function (t) {
      this._totalBonus = t, this.txtBonus.string = _dependency5.CmmSlotUtils.formatNumber(this._totalBonus, !0);
    }
  }]), e;
}(_dependency3.default)).prototype, "treasuresBox", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(K.prototype, "content", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = _dependency.applyDecoratedDescriptor(K.prototype, "txtBonus", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = _dependency.applyDecoratedDescriptor(K.prototype, "ndResultPopup", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = _dependency.applyDecoratedDescriptor(K.prototype, "anim", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = _dependency.applyDecoratedDescriptor(K.prototype, "ndTotalWin", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = _dependency.applyDecoratedDescriptor(K.prototype, "txtTotalWin", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ot = _dependency.applyDecoratedDescriptor(K.prototype, "coinFallingAnimNode", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), it = _dependency.applyDecoratedDescriptor(K.prototype, "coinContent", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), at = _dependency.applyDecoratedDescriptor(K.prototype, "spTitle", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = K)) || Z));
_dependency2.cclegacy._RF.pop();
