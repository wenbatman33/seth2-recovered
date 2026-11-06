// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-UIView";
import * as _dependency4 from "./g1004-GameConfigModel";
import * as _dependency5 from "./g1004-GameData";
import * as _dependency6 from "./g1004-GameEvent";
import * as _dependency7 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency8 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-RunScoreComponent";
import * as _dependency0 from "../../shared/scripts/slotFramework-ReplayModel";
var _export;
export { _export as FGTotalResultView };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FGTotalResultView":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, o, i, a, r, l, s, u, c, p, d, f, h, T, m, _, g, b, C, y, S, A, w, O, v, E, N, W, F, L;
var R, I, P, G, M, D, U, B, k, x, z, V, H, Y, K, j, q;
_dependency2.cclegacy._RF.push({}, "3635fPTVhtCfYHPw7SD+9/h", "FGTotalResultView", void 0);
var Q = _dependency2._decorator.ccclass,
  J = _dependency2._decorator.property;
_publish("FGTotalResultView", (R = Q("FGTotalResultView"), I = J({
  type: _dependency2.Node
}), P = J({
  type: _dependency2.Node
}), G = J({
  type: _dependency2.Node,
  tooltip: "結算金額節點"
}), M = J({
  type: _dependency2.Label
}), D = J({
  type: _dependency2.Button
}), U = J(_dependency2.sp.Skeleton), B = J(_dependency2.sp.Skeleton), R((z = _dependency.applyDecoratedDescriptor((x = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "alert", z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "darkTitle", V, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ndTotalWin", H, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "txtTotalWin", Y, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "btnConfirm", K, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "arrBg", j, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "arrFont", q, _dependency.assertThisInitialized(e)), e.runScoreComponent = null, e.totalWin = 0, e;
  }
  _dependency.inheritsLoose(e, t), e.getPrefabUrl = function () {
    return "prefabs/featureGame/FGTotalResultView";
  };
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this), this.btnConfirm.node.active = !1, null === this.node.getComponent(_dependency9.RunScoreComponent) && (this.runScoreComponent = this.node.addComponent(_dependency9.RunScoreComponent));
    for (var e = App.pool.createPool("FG_TOTAL_WIN_POOL"), n = 0; n < 5; n++) {
      var o = _dependency2.instantiate(this.txtTotalWin.node);
      e.cloneNode = o, e.put(o);
    }
  }, r.addEvents = function () {
    var t = this;
    this.updateConfirmSpriteFrame(_dependency2.NodeEventType.TOUCH_END), Array.from(_dependency6.NodeEventTypeMap.values()).forEach(function (e) {
      t.onN(t.btnConfirm.node, e, t.changeSprite, t);
    }), this.on(_dependency9.ERunScoreStatus.RUN_SCORE_END, this.directShowResult), this.on(_dependency9.ERunScoreStatus.WAIT_CLOSE, this.removeAllTween);
  }, r.start = function () {
    this.showWin();
  }, r.changeSprite = function (t) {
    this.updateConfirmSpriteFrame(t.type);
  }, r.updateConfirmSpriteFrame = function (t) {
    var e = _dependency4.default.getData().filePaths.localeSpriteFrame,
      n = this.btnConfirm.getComponentInChildren(_dependency2.Sprite),
      o = this.getSpriteName(t);
    n.spriteFrame = _dependency7.LoadUtils.getDirSp(this.data.module, e, o), n.node.scale = t === _dependency2.NodeEventType.TOUCH_START ? new _dependency2.Vec3(.9, .9, .9) : new _dependency2.Vec3(1, 1, 1);
  }, r.getSpriteName = function (t) {
    switch (t) {
      case _dependency2.NodeEventType.TOUCH_START:
        return "btn_buy_font_01_pressed";
      case _dependency2.NodeEventType.MOUSE_ENTER:
        return "btn_buy_font_01_hover";
      case _dependency2.NodeEventType.TOUCH_END:
      case _dependency2.NodeEventType.MOUSE_LEAVE:
      default:
        return "btn_buy_font_01_normal";
    }
  }, r.showWin = function () {
    var t = this.data.getData().parser.currentGameState.totalWinnings;
    this.totalWin = t;
    var e = this.data.getData().definition.digital,
      n = _dependency4.default.getData().bigWinAutoCloseTime;
    this.runScoreComponent.runScore(this.txtTotalWin, this.totalWin, 8, e, n, !0), dispatch(_dependency6.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency4.EBTM.RUN_SCORE
      }
    });
    var o = this.darkTitle.getComponent(_dependency2.UIOpacity);
    _dependency2.Tween.stopAllByTarget(o), _dependency2.tween(o).bindNodeState(false).repeatForever(_dependency2.tween(o).bindNodeState(false).to(.6, {
      opacity: 0
    }, {
      easing: _dependency2.easing.smooth
    }).to(.6, {
      opacity: 255
    }, {
      easing: _dependency2.easing.smooth
    })).start(), App.globalAudio.pauseMusic(), dispatch(_dependency6.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency4.EBTM.FG_TOTAL_WIN,
        loop: !0
      }
    });
  }, r.directShowResult = function () {
    var t = this;
    dispatch(_dependency6.GameEvent.STOP_BTM, {
      data: _dependency4.EBTM.RUN_SCORE
    }), dispatch(_dependency6.GameEvent.STOP_BTM, {
      data: _dependency4.EBTM.FG_TOTAL_WIN
    }), dispatch(_dependency6.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency4.EBTM.FG_TOTAL_WIN_END
      }
    }), this.playScoreEffect(this.ndTotalWin), _dependency2.Tween.stopAllByTarget(this.btnConfirm.node), this.btnConfirm.node.active = !0, this.btnConfirm.node.getComponent(_dependency2.UIOpacity).opacity = 0, this.btnConfirm.node.scale = new _dependency2.Vec3(.5, .5, 0), _dependency2.tween(this.btnConfirm.node).bindNodeState(false).to(.2, {
      scale: new _dependency2.Vec3(1.2, 1.2, 1.2)
    }, {
      easing: _dependency2.easing.backIn
    }).to(.2, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      easing: _dependency2.easing.backOut
    }).start(), _dependency2.tween(this.btnConfirm.node.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.2, {
      opacity: 255
    }).call(function () {
      var e = _dependency0.default.isReplay,
        n = _dependency4.default.getData(),
        o = n.autoCloseTime,
        i = n.replayAutoCloseTime;
      o && t.scheduleOnce(t.removeAllTween, o), e && t.scheduleOnce(t.removeAllTween, i), t.btnConfirm.node.once(_dependency2.NodeEventType.TOUCH_END, t.removeAllTween, t);
    }).start(), dispatch(_dependency6.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: this.totalWin
    });
  }, r.playScoreEffect = function (t) {
    _dependency2.Tween.stopAllByTarget(this.txtTotalWin.node);
    var e = this.txtTotalWin.node.getWorldPosition(),
      n = App.pool.getPool("FG_TOTAL_WIN_POOL").get();
    n.active = !0, n.getComponent(_dependency2.Label).string = this.txtTotalWin.string, n.parent = t, n.scale = new _dependency2.Vec3(1.4, 1.4, 1.4), n.setWorldPosition(e), null === n.getComponent(_dependency2.UIOpacity) && n.addComponent(_dependency2.UIOpacity), n.getComponent(_dependency2.UIOpacity).opacity = 0, n.setSiblingIndex(0), _dependency2.tween(n).bindNodeState(false).delay(.18).to(.18, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }, {
      easing: _dependency2.easing.linear
    }).call(function () {
      n.removeFromParent(), App.pool.getPool("FG_TOTAL_WIN_POOL").put(n);
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
  }, r.removeAllTween = function () {
    this.unschedule(this.removeAllTween), this.off(_dependency9.ERunScoreStatus.RUN_SCORE_END), this.off(_dependency9.ERunScoreStatus.WAIT_CLOSE), dispatch(_dependency6.GameEvent.STOP_BTM, {
      data: _dependency4.EBTM.FG_TOTAL_WIN_END
    }), dispatch(_dependency6.GameEvent.PLAY_BGM, {
      data: _dependency4.EBGM.MAIN_GAME
    }), _dependency4.default.stopOnFg && (_dependency8.default.active = !1), _dependency4.default.setIsTurbo(this.data.originTurbo ? this.data.originTurbo : _dependency4.default.isTurbo, !1), dispatch(_dependency6.GameEvent.CLICK_FINISH_FREE_GAME), this.close();
  }, _dependency.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency5.default);
    }
  }]), e;
}(_dependency3.default)).prototype, "alert", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = _dependency.applyDecoratedDescriptor(x.prototype, "darkTitle", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = _dependency.applyDecoratedDescriptor(x.prototype, "ndTotalWin", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(x.prototype, "txtTotalWin", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(x.prototype, "btnConfirm", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(x.prototype, "arrBg", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), q = _dependency.applyDecoratedDescriptor(x.prototype, "arrFont", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), k = x)) || k));
_dependency2.cclegacy._RF.pop();
