import { EDITOR as __projectILocalEditor } from 'cc/env';
import { installDropMaterialHooks as __projectIInstallHook } from '../backend/ProgressHooks';
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Decorators";
import * as _dependency4 from "../../shared/scripts/main-UIView";
import * as _dependency5 from "../../shared/scripts/main-DragItem";
import * as _dependency6 from "./g1002-GameEvent";
import * as _dependency7 from "./g1002-GameSender";
import * as _dependency8 from "./g1002-GameData";
import * as _dependency9 from "./g1002-types";
import * as _dependency0 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency1 from "./g1002-GameConfigModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-LoadUtils";
import * as _dependency11 from "./g1002-BonusSlotMultipleGame";
import * as _dependency12 from "../../shared/scripts/main-Config";
import * as _dependency13 from "../../shared/scripts/slotFramework-ReplayModel";
var _export;
export { _export as DropMaterials };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "DropMaterials":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var t, n, i, a, o, r, s, l, c, u, p, m, g, d, h, f, C, y, b, T, k, D, F, I, w, A, v, L, S, B, P, M, N, _, E, x;
var R, z, U, O, V, G, Y, H, K, j, q, X, Q, Z, J, W, $, ee, te, ne, ie, ae, oe, re, se, le, ce, ue, pe, me, ge, de, he;
_dependency2.cclegacy._RF.push({}, "1c588XQ255MPLI5KSjPNnAC", "DropMaterials", void 0);
var fe = _dependency2._decorator.ccclass,
  Ce = _dependency2._decorator.property;
_publish("DropMaterials", (R = fe("DropMaterials"), z = Ce({
  type: _dependency2.Node,
  tooltip: "Items"
}), U = Ce({
  type: _dependency2.Node,
  tooltip: "lightItems"
}), O = Ce({
  type: _dependency2.SpriteFrame,
  tooltip: "itemsFrame"
}), V = Ce({
  type: _dependency2.Label,
  tooltip: "itemsName"
}), G = _dependency3.inject("title", _dependency2.Node), Y = _dependency3.inject("ndLightContainer", _dependency2.Node), H = _dependency3.inject("ndMaterialsContainer", _dependency2.Node), K = _dependency3.inject("ndMaterialsNameContainer", _dependency2.Node), j = _dependency3.inject("ndCountDown", _dependency2.Node), q = _dependency3.inject("ndCountDown/ndCircle", _dependency2.Node), X = _dependency3.inject("ndBottom", _dependency2.Node), Q = _dependency3.inject("ndCountDown/txtCountDown", _dependency2.Label), Z = _dependency3.inject("ndFurnace", _dependency2.sp.Skeleton), J = _dependency3.inject("hitArea", _dependency2.Node), W = _dependency3.inject("ndLight", _dependency2.Node), R((te = _dependency.applyDecoratedDescriptor((ee = function (e) {
  var _nativeConstructor = t;
  function t() {
    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return t = Reflect.construct(e, [this].concat(o).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(t, "items", te, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "lightItems", ne, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "itemsFrame", ie, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "itemsName", ae, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "title", oe, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "ndLightContainer", re, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "ndMaterialsContainer", se, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "ndMaterialsNameContainer", le, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "ndCountDown", ce, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "ndCircle", ue, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "ndBottom", pe, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "txtCountDown", me, _dependency.assertThisInitialized(t)), t._selectTime = 0, _dependency.initializerDefineProperty(t, "skeletonFurnace", ge, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "ndFurnaceArea", de, _dependency.assertThisInitialized(t)), _dependency.initializerDefineProperty(t, "ndLight", he, _dependency.assertThisInitialized(t)), t.materialsNameLangKey = ["feather", "lotus", "fang", "dragonClaw", "scale", "lotusRoot", "ginseng", "lingzhi"], t.currentItem = null, t.isDroping = !1, t;
  }
  _dependency.inheritsLoose(t, e), t.getPrefabUrl = function () {
    return "prefabs/bonusGame/DropMaterials";
  };
  var l = t.prototype;
  return l.start = function () {
    var e = this;
    this.skeletonFurnace.setAnimation(0, "idle", !0), this.ndBottom.scale = new _dependency2.Vec3(2, 2, 2), this.initItems(), this.setData(), this.ndLight.active = !0, this.ndLight.getComponent(_dependency2.UIOpacity).opacity = 255, _dependency13.default.isReplay ? _dependency2.tween(this.ndLight.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(1.6, {
      opacity: 0
    }, {
      easing: _dependency2.easing.circIn
    }).call(function () {
      e.ndLight.active = !1, e.replayAutoFlow();
    }).start() : _dependency2.tween(this.ndLight.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(1.6, {
      opacity: 0
    }, {
      easing: _dependency2.easing.circIn
    }).call(function () {
      e.ndLight.active = !1, e.reStartSelect();
    }).start();
  }, l.setData = function () {
    var e = _dependency1.default.getData().filePaths.localeSpriteFrame;
    this.title.getComponent(_dependency2.Sprite).spriteFrame = _dependency10.LoadUtils.getDirSp(this.bundle, e, "b_font_01");
  }, l.initItems = function () {
    var e = this;
    this.items.forEach(function (t, n) {
      t.name = n + 1 + "";
      var i = t.getComponent(_dependency5.default);
      i.targetOfDragList.push(e.ndFurnaceArea), i.onDragComp = function (t, n) {
        e.dropItemAnimation(t);
      };
      var a = t.getChildByName("frame").getComponent(_dependency2.sp.Skeleton);
      a.clearTracks(), a.setToSetupPose(), a.setAnimation(0, "normal", !0);
      var o = t.getChildByName("spots").getComponent(_dependency2.sp.Skeleton);
      o.clearTracks(), o.setToSetupPose(), o.setAnimation(0, "normal", !0), t.getChildByName("symbol").getComponent(_dependency2.Sprite).spriteFrame = e.itemsFrame[n], e.itemsName[n].string = App.getLanguage(e.materialsNameLangKey[n], [], e.bundle);
      var r = e.lightItems[n].getChildByName("frame").getComponent(_dependency2.sp.Skeleton);
      r.clearTracks(), r.setToSetupPose(), r.setAnimation(0, "normal", !0);
      var s = e.lightItems[n].getChildByName("presslight").getComponent(_dependency2.sp.Skeleton);
      s.clearTracks(), s.setToSetupPose(), s.node.active = !1, t.on(_dependency2.NodeEventType.TOUCH_START, function () {
        e.isDroping || (dispatch(_dependency6.GameEvent.PLAY_BTM, {
          data: {
            url: _dependency1.EBTM.BN_ITEM,
            loop: !1
          }
        }), _dependency2.tween(t).bindNodeState(false).to(.1, {
          scale: new _dependency2.Vec3(.8, .8)
        }, {
          easing: "quintOut"
        }).call(function () {
          _dependency2.tween(t).bindNodeState(false).to(.1, {
            scale: new _dependency2.Vec3(1, 1, 1)
          }).start();
        }).start(), e.currentItem = t, s.node.active = !0, s.clearTracks(), s.setToSetupPose(), s.setAnimation(0, "press", !1), s.setCompleteListener(function () {
          s.setCompleteListener(null), s.node.active = !1;
        }));
      }, e), t.on(_dependency2.NodeEventType.TOUCH_END, function () {
        e.isDroping || (e.currentItem = null);
      }, e), t.on(_dependency2.NodeEventType.TOUCH_CANCEL, function () {
        e.isDroping || (e.currentItem = null);
      }, e);
    });
  }, l.dropItemAnimation = function (e) {
    var t = this;
    this.isDroping = !0, this.currentItem = null, _dependency2.tween(e).bindNodeState(false).to(.3, {
      x: 0,
      y: -620,
      scale: new _dependency2.Vec3(0, 0, 0)
    }).call(function () {
      _dependency2.Tween.stopAllByTarget(t), _dependency2.Tween.stopAllByTarget(e), t.isEnableDragItems(!1), dispatch(_dependency6.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.BN_START_01,
          loop: !1
        }
      }), t.skeletonFurnace.clearTracks(), t.skeletonFurnace.setToSetupPose(), t.skeletonFurnace.setAnimation(0, "insert", !1), t.skeletonFurnace.setCompleteListener(function () {
        t.skeletonFurnace.setCompleteListener(null), t.skeletonFurnace.clearTracks(), t.skeletonFurnace.setToSetupPose(), t.skeletonFurnace.setAnimation(0, "idle", !0), t.backOldPos(e);
        var n = {
          bonusType: _dependency9.EBonusType.ELIXIR_FURNACE,
          action: _dependency9.BonusStateAction.PURIFY,
          actionValue: Number(e.name),
          ratioIndex: _dependency0.default.ratioIndex,
          ratioValue: _dependency0.default.ratioValue,
          stakeIndex: _dependency0.default.stakeIndex,
          stakeValue: _dependency0.default.stakeValue,
          spinId: t.data.getData().spinId
        };
        App.senderManager.get(_dependency7.GameSender).sendBonusFurnacePurifyReq(n);
      });
    }).start();
  }, l.isEnableDragItems = function (e) {
    for (var t = 0; t < this.items.length; t++) {
      var n = this.items[t].getComponent(_dependency5.default);
      n.goBack(), e ? n.onEnable() : n.onDisable();
    }
  }, l.reStartSelect = function () {
    _dependency2.Tween.stopAllByTarget(this), _dependency2.Tween.stopAllByTarget(this.ndCircle), this.isDroping = !1, this.selectTime = 8, this.isEnableDragItems(!0), this.startCountDown(this.selectTime), _dependency2.tween(this.ndCircle).bindNodeState(false).by(1, {
      angle: -360
    }).repeatForever().start();
  }, l.startCountDown = function (e) {
    var t = this;
    this.selectTime = e, _dependency2.tween(this).bindNodeState(false).delay(1).call(function () {
      dispatch(_dependency6.GameEvent.PLAY_BTM, {
        data: {
          url: _dependency1.EBTM.BN_CLOCK,
          loop: !1
        }
      }), 0 == t.selectTime ? t.selectTimeUP() : (t.selectTime--, t.startCountDown(t.selectTime));
    }).start();
  }, l.backOldPos = function (e) {
    _dependency2.tween(e).bindNodeState(false).to(.1, {
      scale: new _dependency2.Vec3(1, 1, 1)
    }).start();
  }, l.selectTimeUP = function () {
    var e = this;
    if (this.isDroping = !0, _dependency2.Tween.stopAllByTarget(this), _dependency2.Tween.stopAllByTarget(this.ndCircle), this.isEnableDragItems(!1), null === this.currentItem) {
      var t = _dependency2.randomRangeInt(0, 7);
      this.currentItem = this.items[t];
      var n = this.lightItems[t].getChildByName("presslight").getComponent(_dependency2.sp.Skeleton);
      n.node.active = !0, n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "press", !1), n.setCompleteListener(function () {
        n.setCompleteListener(null), n.node.active = !1, e.dropItemAnimation(e.currentItem);
      });
    } else this.dropItemAnimation(this.currentItem);
  }, l.collectMaterials = function () {
    switch (this.isEnableDragItems(!1), this.data.getData().bonusState.action) {
      case _dependency9.BonusStateAction.GAMBLE:
        this.collectEnd();
        break;
      case _dependency9.BonusStateAction.PURIFY:
        this.reStartSelect();
    }
  }, l.collectEnd = function () {
    var e = this;
    _dependency2.Tween.stopAllByTarget(this), _dependency2.tween(this.ndLightContainer.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.6, {
      opacity: 0
    }).start(), _dependency2.tween(this.ndMaterialsNameContainer.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.6, {
      opacity: 0
    }).start(), _dependency2.tween(this.ndMaterialsContainer.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.6, {
      opacity: 0
    }).start(), _dependency2.tween(this.ndCountDown.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.6, {
      opacity: 0
    }).start(), _dependency2.tween(this.title.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(.6, {
      opacity: 0
    }).start(), _dependency2.tween(this.ndBottom).bindNodeState(false).delay(.35).to(.3, {
      scale: new _dependency2.Vec3(2.3, 2.3, 2.3)
    }).start(), dispatch(_dependency6.GameEvent.PLAY_BTM, {
      data: {
        url: _dependency1.EBTM.BN_FIRE,
        loop: !1
      }
    }), this.skeletonFurnace.clearTracks(), this.skeletonFurnace.setToSetupPose(), this.skeletonFurnace.setAnimation(0, "insert_complete", !1), this.skeletonFurnace.setCompleteListener(function () {
      e.skeletonFurnace.setCompleteListener(null), e.skeletonFurnace.clearTracks(), e.skeletonFurnace.setToSetupPose(), e.skeletonFurnace.setAnimation(0, "idle", !0), e.ndLight.active = !0, e.ndLight.getComponent(_dependency2.UIOpacity).opacity = 0, _dependency2.tween(e.ndLight.getComponent(_dependency2.UIOpacity)).bindNodeState(false).to(2, {
        opacity: 255
      }).call(function () {
        e.ndLight.active = !1, App.uiManager.open({
          type: _dependency11.BonusSlotMultipleGame,
          bundle: e.bundle,
          zIndex: _dependency12.ViewZOrder.Alert,
          name: "精煉遊戲"
        });
      }).start();
    });
  }, l.replayAutoFlow = function () {
    var e = _dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e() {
      var t,
        n,
        i,
        a,
        o,
        l,
        c = this;
      return _dependency.regeneratorRuntime().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            this.isEnableDragItems(!1), this.isDroping = !0, this.currentItem = null, t = this.data.replayData.betData.theResult, n = [t[2].engine.actionValue, t[3].engine.actionValue, t[4].engine.actionValue, t[5].engine.actionValue], i = 0, a = _dependency.regeneratorRuntime().mark(function e() {
              var t;
              return _dependency.regeneratorRuntime().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = l[o], e.next = 3, new Promise(_dependency.asyncToGenerator(_dependency.regeneratorRuntime().mark(function e(n, a) {
                      var o;
                      return _dependency.regeneratorRuntime().wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            i++, o = c.items[t - 1], _dependency2.tween(o).bindNodeState(false).to(.3, {
                              x: 0,
                              y: -620,
                              scale: new _dependency2.Vec3(0, 0, 0)
                            }).call(function () {
                              _dependency2.Tween.stopAllByTarget(c), _dependency2.Tween.stopAllByTarget(o), c.isEnableDragItems(!1), dispatch(_dependency6.GameEvent.PLAY_BTM, {
                                data: {
                                  url: _dependency1.EBTM.BN_START_01,
                                  loop: !1
                                }
                              }), c.skeletonFurnace.clearTracks(), c.skeletonFurnace.setToSetupPose(), c.skeletonFurnace.setAnimation(0, "insert", !1), c.skeletonFurnace.setCompleteListener(function () {
                                c.skeletonFurnace.setCompleteListener(null), c.skeletonFurnace.clearTracks(), c.skeletonFurnace.setToSetupPose(), c.skeletonFurnace.setAnimation(0, "idle", !0), c.backOldPos(o), c.data.setReplayNextBonusData(3 === i && !0), c.scheduleOnce(function () {
                                  n(!0);
                                }, .1);
                              });
                            }).start();
                          case 3:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    })));
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            }), o = 0, l = n;
          case 8:
            if (!(o < l.length)) {
              e.next = 13;
              break;
            }
            return e.delegateYield(a(), "t0", 10);
          case 10:
            o++, e.next = 8;
            break;
          case 13:
            Log.d("run----------------next", this.data), this.collectEnd();
          case 15:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), l.addEvents = function () {
    var e = this;
    this.on(_dependency6.GameEvent.BONUS_FURNACE_PURIFY_RESP, function () {
      e.collectMaterials();
    });
  }, _dependency.createClass(t, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }, {
    key: "selectTime",
    get: function () {
      return this._selectTime;
    },
    set: function (e) {
      this._selectTime = e, this.txtCountDown.string = this._selectTime.toFixed(0);
    }
  }]), t;
}(_dependency4.default)).prototype, "items", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ne = _dependency.applyDecoratedDescriptor(ee.prototype, "lightItems", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ie = _dependency.applyDecoratedDescriptor(ee.prototype, "itemsFrame", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), ae = _dependency.applyDecoratedDescriptor(ee.prototype, "itemsName", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), oe = _dependency.applyDecoratedDescriptor(ee.prototype, "title", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), re = _dependency.applyDecoratedDescriptor(ee.prototype, "ndLightContainer", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), se = _dependency.applyDecoratedDescriptor(ee.prototype, "ndMaterialsContainer", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), le = _dependency.applyDecoratedDescriptor(ee.prototype, "ndMaterialsNameContainer", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ce = _dependency.applyDecoratedDescriptor(ee.prototype, "ndCountDown", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ue = _dependency.applyDecoratedDescriptor(ee.prototype, "ndCircle", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), pe = _dependency.applyDecoratedDescriptor(ee.prototype, "ndBottom", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), me = _dependency.applyDecoratedDescriptor(ee.prototype, "txtCountDown", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ge = _dependency.applyDecoratedDescriptor(ee.prototype, "skeletonFurnace", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), de = _dependency.applyDecoratedDescriptor(ee.prototype, "ndFurnaceArea", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), he = _dependency.applyDecoratedDescriptor(ee.prototype, "ndLight", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = ee)) || $));
_dependency2.cclegacy._RF.pop();

// Project-I owned progress hook: preserve the original frontend and Editor isolation.
if(!__projectILocalEditor)__projectIInstallHook(_export, {DragItem:_dependency5.default,randomIndex:count=>_dependency2.randomRangeInt(0,count)});
