// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
// Source: research/atg/hades/live-capture-20261104/extracted/MultipleBoardView.js
import * as __dependency_0 from "../../shared/scripts/shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "../../shared/scripts/main-EventComponent";
import * as __dependency_3 from "../../shared/scripts/main-Decorators";
import * as __dependency_4 from "./g1007-GameConfigModel";
import * as __dependency_5 from "./g1007-GameData";
import * as __dependency_6 from "./g1007-GameEvent";
import * as __dependency_7 from "../../shared/scripts/framework-LoadUtils";
var __export_0;
export { __export_0 as MultipleBoardView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "MultipleBoardView":
      __export_0 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, i, o, a, r, s, l, u, m, c, d, h, p, f, g, _, x, b, M, T, S, I, y, v, L, B;
var C, A, N, E, k, F, P, w, O, D, G, U, V, R, W, z, Y, H, j, K, q, J, Q, X, Z, $, tt, et, nt;
__dependency_1.cclegacy._RF.push({}, "81ed5qLzPdDIKOKAxi+TwN9", "MultipleBoardView", void 0);
var it = __dependency_1._decorator.ccclass,
  ot = __dependency_1._decorator.property;
__publish("MultipleBoardView", (C = it("Hades_MultipleBoardView"), A = __dependency_3.inject("timesArea/content", __dependency_1.Node), N = __dependency_3.inject("timesArea/content", __dependency_1.Layout), E = __dependency_3.inject("boardSpine", __dependency_1.sp.Skeleton), k = __dependency_3.inject("changeBoardSpine", __dependency_1.sp.Skeleton), F = __dependency_3.inject("multipleboard_mask/multipleboard", __dependency_1.Node), P = __dependency_3.inject("multipleboard_mask/multipleboard/spt_1", __dependency_1.Sprite), w = __dependency_3.inject("multipleboard_mask/multipleboard/spt_2", __dependency_1.Sprite), O = __dependency_3.inject("multipleBoardBG", __dependency_1.Sprite), D = ot(__dependency_1.Prefab), G = ot(__dependency_1.Prefab), U = ot(__dependency_1.Font), V = ot(__dependency_1.Font), R = ot(__dependency_1.Font), C((Y = __dependency_0.applyDecoratedDescriptor((z = function (t) {
  function e() {
    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || this.constructor) || this, __dependency_0.initializerDefineProperty(e, "timesContent", Y, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "timesContentLayout", H, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "boardSpine", j, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "changeBoardSpine", K, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "multipleBoard", q, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "multipleBoard_01", J, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "multipleBoard_02", Q, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "multipleBoardBG", X, __dependency_0.assertThisInitialized(e)), e.multipleBoardInitPositionY = 132, __dependency_0.initializerDefineProperty(e, "multipleTimes", Z, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "atgLogo", $, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "normalFont", tt, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "freeGameFont", et, __dependency_0.assertThisInitialized(e)), __dependency_0.initializerDefineProperty(e, "highlightFont", nt, __dependency_0.assertThisInitialized(e)), e.preTimesNode = null, e.curTimesNode = null, e.nodeMap = new Map(), e.curTimesValue = null, e.moveOffset = 75, e.digitalWidthMap = new Map(), e.timesIndexForAnim = [], e.ATG = null, e;
  }
  __dependency_0.inheritsLoose(e, t);
  var l = e.prototype;
  return l.onLoad = function () {
    t.prototype.onLoad.call(this), this.changeBoardSpine.node.getComponent(__dependency_1.UIOpacity).opacity = 0, this.multipleBoard.y = this.multipleBoardInitPositionY;
  }, l.start = function () {}, l.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, l.init = function () {
    for (var t = this.data.getData().isResuming, e = this.data.getData().definition.StoneMultiplierList, n = this.data.getData().parser.currentGameState, i = n.currentTimes, o = n.bonusTimes, a = i > o ? i : o, r = 1; r <= 6; r++) {
      this.digitalWidthMap.set(r, [160, 160, 160, 116, 118, 120][r - 1]);
    }
    this.timesIndexForAnim = [3, 6, 9, 12, e.length - 1], this.createTimes(), this.setBoardSockets(), this.timesContentLayout.updateLayout(!0), this.timesContentLayout.enabled = !1, t && this.moveMultiple(a, !1, t), this.changeStyle(!0);
  }, l.changeStyle = function (t) {
    var e = this,
      n = t ? "loop_1" : "loop_1_fg",
      i = t ? "mg_logo" : "fg_logo",
      o = t ? this.normalFont : this.freeGameFont,
      a = this.changeBoardSpine.node.getComponent(__dependency_1.UIOpacity);
    a.opacity = 255, this.boardSpine.clearTracks(), this.boardSpine.setToSetupPose(), this.boardSpine.setAnimation(0, n, !0), __dependency_1.tween(a).bindNodeState(false).to(.3, {
      opacity: 0
    }).call(function () {
      e.changeBoardSpine.clearTracks(), e.changeBoardSpine.setToSetupPose(), e.changeBoardSpine.setAnimation(0, n, !0);
    }).start();
    var r = __dependency_4.default.getData().filePaths.common,
      s = t ? "mg_multipleboard_02" : "fg_multipleboard_02";
    this.multipleBoard_01.spriteFrame = __dependency_7.LoadUtils.getDirSp(this.data.module, r, s), this.multipleBoard_02.spriteFrame = __dependency_7.LoadUtils.getDirSp(this.data.module, r, s);
    var l = t ? "mg_multipleboard" : "fg_multipleboard";
    this.multipleBoardBG.spriteFrame = __dependency_7.LoadUtils.getDirSp(this.data.module, r, l), this.ATG.getComponent(__dependency_1.Sprite).spriteFrame = __dependency_7.LoadUtils.getDirSp(this.data.module, r, i);
    var u = this.timesContent.getComponentsInChildren(__dependency_1.Label);
    u.map(function (t, n) {
      t.font = o, n == u.length - 1 && (t.font = e.highlightFont);
    });
  }, l.resetBoardSockets = function () {
    this.boardSpine.sockets = [], this.boardSpine.sockets = this.boardSpine.sockets;
  }, l.setBoardSockets = function () {}, l.createTimes = function () {
    var t = this.data.getData().definition.StoneMultiplierList,
      e = t.slice().reverse();
    this.curTimesValue = t[0];
    for (var n = 0; n < e.length; n++) {
      var i = e[n].toString().length,
        o = __dependency_1.instantiate(this.multipleTimes),
        a = o.getComponent(__dependency_1.Label),
        r = o.getComponent(__dependency_1.UITransform);
      a.font = this.normalFont, a.string = "x" + e[n], this.timesContent.addChild(o), this.nodeMap.set(e.length - 1 - n, o), n == e.length - 1 && (this.curTimesNode = o, this.curTimesNode.getComponent(__dependency_1.Label).font = this.highlightFont), r.width = this.digitalWidthMap.get(i);
    }
    var s = __dependency_4.default.getData().filePaths.common;
    this.ATG = __dependency_1.instantiate(this.atgLogo), this.ATG.getComponent(__dependency_1.Sprite).spriteFrame = __dependency_7.LoadUtils.getDirSp(this.data.module, s, "mg_logo"), this.timesContent.addChild(this.ATG);
  }, l.playBoardLoopAnim = function (t) {
    var e,
      n = this.data.checkIsMG(),
      i = [{
        aniName: n ? "loop_1" : "loop_1_fg",
        maxIndex: this.timesIndexForAnim[0]
      }, {
        aniName: n ? "loop_2" : "loop_2_fg",
        maxIndex: this.timesIndexForAnim[1]
      }, {
        aniName: n ? "loop_3" : "loop_3_fg",
        maxIndex: this.timesIndexForAnim[2]
      }, {
        aniName: n ? "loop_4" : "loop_4_fg",
        maxIndex: this.timesIndexForAnim[3]
      }, {
        aniName: n ? "loop_5" : "loop_5_fg",
        maxIndex: this.timesIndexForAnim[4]
      }],
      o = i[i.length - 1],
      a = (null == (e = i.find(function (e) {
        return t <= e.maxIndex;
      })) ? void 0 : e.aniName) || o.aniName;
    this.boardSpine.animation != a && (this.boardSpine.clearTracks(), this.boardSpine.setToSetupPose(), this.boardSpine.setAnimation(0, a, !0), this.changeBoardSpine.clearTracks(), this.changeBoardSpine.setToSetupPose(), this.changeBoardSpine.setAnimation(0, a, !0));
  }, l.playBoardReleaseAnim = function (t) {
    var e,
      n = this,
      i = this.data.checkIsMG(),
      o = [{
        aniName: i ? "release_1" : "release_1_fg",
        maxIndex: this.timesIndexForAnim[0]
      }, {
        aniName: i ? "release_2" : "release_2_fg",
        maxIndex: this.timesIndexForAnim[1]
      }, {
        aniName: i ? "release_3" : "release_3_fg",
        maxIndex: this.timesIndexForAnim[2]
      }, {
        aniName: i ? "release_4" : "release_4_fg",
        maxIndex: this.timesIndexForAnim[3]
      }, {
        aniName: i ? "release_5" : "release_5_fg",
        maxIndex: this.timesIndexForAnim[4]
      }],
      a = o[o.length - 1],
      r = (null == (e = o.find(function (e) {
        return t <= e.maxIndex;
      })) ? void 0 : e.aniName) || a.aniName;
    this.boardSpine.clearTracks(), this.boardSpine.setToSetupPose(), this.boardSpine.setAnimation(0, r, !1), this.boardSpine.setCompleteListener(function () {
      n.playBoardLoopAnim(t), n.boardSpine.setCompleteListener(null);
    }), dispatch(__dependency_6.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.MULTIPLE_SPECIFY
      }
    });
  }, l.playMultiScoreAnim = function () {
    var t = this,
      e = this.data.getData().definition.StoneMultiplierList,
      n = this.data.checkIsMG(),
      i = [{
        aniName: n ? "multi_board_1" : "multi_board_1_fg",
        maxIndex: this.timesIndexForAnim[0],
        btm: __dependency_4.EBTM.MULTIPLE_WIN_01
      }, {
        aniName: n ? "multi_board_2" : "multi_board_2_fg",
        maxIndex: this.timesIndexForAnim[1],
        btm: __dependency_4.EBTM.MULTIPLE_WIN_02
      }, {
        aniName: n ? "multi_board_3" : "multi_board_3_fg",
        maxIndex: this.timesIndexForAnim[2],
        btm: __dependency_4.EBTM.MULTIPLE_WIN_03
      }, {
        aniName: n ? "multi_board_4" : "multi_board_4_fg",
        maxIndex: this.timesIndexForAnim[3],
        btm: __dependency_4.EBTM.MULTIPLE_WIN_04
      }, {
        aniName: n ? "multi_board_5" : "multi_board_5_fg",
        maxIndex: this.timesIndexForAnim[4],
        btm: __dependency_4.EBTM.MULTIPLE_WIN_05
      }],
      o = i[i.length - 1],
      a = e.indexOf(this.curTimesValue),
      r = i.find(function (t) {
        return a <= t.maxIndex;
      }) || o,
      s = r.aniName,
      l = r.btm;
    this.boardSpine.clearTracks(), this.boardSpine.setToSetupPose(), this.boardSpine.setAnimation(0, s, !1), this.boardSpine.setCompleteListener(function () {
      t.playBoardLoopAnim(a), t.boardSpine.setCompleteListener(null);
    }), dispatch(__dependency_6.GameEvent.PLAY_BTM, {
      data: {
        url: l
      }
    });
  }, l.resetMultiple = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e,
        n,
        i,
        o,
        a,
        r,
        l,
        u,
        m,
        c = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e = this.data.getData().definition.StoneMultiplierList, n = e.indexOf(this.curTimesValue), i = 0, .07, o = function () {
              return new Promise(function (t) {
                for (var e = function (e) {
                    __dependency_1.tween(c.multipleBoard).bindNodeState(false).by(.07, {
                      y: c.multipleBoardInitPositionY - c.moveOffset
                    }).call(function () {
                      c.multipleBoard.y = c.multipleBoardInitPositionY;
                    }).start(), __dependency_1.tween(c.timesContent.children[e]).bindNodeState(false).by(.07, {
                      y: c.moveOffset
                    }, {
                      onStart: function () {
                        c.resetBoardSockets();
                      }
                    }).call(function () {
                      t(), e == c.timesContent.children.length - 1 && c.setBoardSockets();
                    }).start();
                  }, n = 0; n < c.timesContent.children.length; n++) e(n);
              });
            }, a = 0;
          case 6:
            if (!(a < this.timesContent.children.length)) {
              t.next = 16;
              break;
            }
            if (r = this.timesContent.children[a], l = r.getComponent(__dependency_1.Label)) {
              t.next = 11;
              break;
            }
            return t.abrupt("continue", 13);
          case 11:
            u = l.string.length - 1, r.getComponent(__dependency_1.UITransform).width = this.digitalWidthMap.get(u);
          case 13:
            a++, t.next = 6;
            break;
          case 16:
            dispatch(__dependency_6.GameEvent.PLAY_BTM, {
              data: {
                url: __dependency_4.EBTM.BTM_MULTI_UPGRADE_RESET
              }
            }), this.nodeMap.get(n).getComponent(__dependency_1.Label).font = this.normalFont, m = n;
          case 19:
            if (!(m > i)) {
              t.next = 27;
              break;
            }
            return this.preTimesNode = this.curTimesNode, this.curTimesNode = this.nodeMap.get(m - 1), t.next = 24, o();
          case 24:
            m--, t.next = 19;
            break;
          case 27:
            this.nodeMap.get(i).getComponent(__dependency_1.Label).font = this.highlightFont, this.curTimesValue = e[i];
          case 29:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.moveMultiple = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(e, n, i) {
      var o,
        a,
        r,
        l,
        u,
        m,
        c,
        d,
        h,
        f,
        _,
        b = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            void 0 === i && (i = !1), o = this.data.getData().definition.StoneMultiplierList, a = o.indexOf(e), r = o.indexOf(this.curTimesValue), l = a > r ? -this.moveOffset : this.moveOffset, u = a > r ? 1 : -1, m = i ? .001 : .1, c = i ? .001 : .1, d = i ? .001 : .5, h = r, n && this.playUpMoveLight(), f = function (t, e) {
              return new Promise(function (i) {
                for (var o = function (o) {
                    var r = t.getComponent(__dependency_1.Label).string.length - 1;
                    __dependency_1.tween(b.timesContent.children[o]).bindNodeState(false).by(m, {
                      y: -l / 10
                    }, {
                      onStart: function () {
                        b.resetBoardSockets();
                      }
                    }).delay(c).by(d, {
                      y: l + l / 10
                    }).call(function () {
                      o == b.timesContent.children.length - 1 && (b.setBoardSockets(), t.getComponent(__dependency_1.Label).font = b.normalFont, t.getComponent(__dependency_1.UITransform).width = b.digitalWidthMap.get(r), e.getComponent(__dependency_1.Label).font = b.highlightFont, e.getComponent(__dependency_1.UITransform).width = b.digitalWidthMap.get(1), h += u, n ? h === a && b.playBoardReleaseAnim(h) : b.playBoardLoopAnim(h), i());
                    }).start();
                  }, r = 0; r < b.timesContent.children.length; r++) o(r);
              });
            }, _ = r;
          case 13:
            if (_ === a) {
              t.next = 23;
              break;
            }
            return this.preTimesNode = this.curTimesNode, this.curTimesNode = this.nodeMap.get(_ + u), 0 == _ && __dependency_1.tween(this.timesContent).bindNodeState(false).by(m, {
              y: 10
            }).delay(c).by(d, {
              y: -10
            }).start(), i || dispatch(__dependency_6.GameEvent.PLAY_BTM, {
              data: {
                url: this.getMultipleMoveBtmName(_)
              }
            }), t.next = 20, f(this.preTimesNode, this.curTimesNode);
          case 20:
            _ += u, t.next = 13;
            break;
          case 23:
            this.curTimesValue = e;
          case 24:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e, n, i) {
      return t.apply(this, arguments);
    };
  }(), l.playUpMoveLight = function () {
    var t = this.data.getData().definition.StoneMultiplierList,
      e = this.data.checkIsMG(),
      n = [{
        aniName: e ? "multi_loop_1" : "multi_loop_1_fg",
        maxIndex: this.timesIndexForAnim[0]
      }, {
        aniName: e ? "multi_loop_2" : "multi_loop2_fg",
        maxIndex: this.timesIndexForAnim[1]
      }, {
        aniName: e ? "multi_loop_3" : "multi_loop_3_fg",
        maxIndex: this.timesIndexForAnim[2]
      }, {
        aniName: e ? "multi_loop_4" : "multi_loop_4_fg",
        maxIndex: this.timesIndexForAnim[3]
      }, {
        aniName: e ? "multi_loop_5" : "multi_loop_5_fg",
        maxIndex: this.timesIndexForAnim[4]
      }],
      i = n[n.length - 1],
      o = t.indexOf(this.curTimesValue),
      a = (n.find(function (t) {
        return o <= t.maxIndex;
      }) || i).aniName;
    this.boardSpine.clearTracks(), this.boardSpine.setToSetupPose(), this.boardSpine.setAnimation(0, a, !0);
  }, l.overMoveMultiple = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(e) {
      var n,
        i,
        o,
        a,
        r,
        l,
        u,
        m,
        c,
        d,
        h,
        f,
        _ = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            n = this.data.getData().definition.StoneMultiplierList, i = n.indexOf(e), o = n.indexOf(this.curTimesValue), r = (a = i > o) ? 1 : -1, l = a ? -this.moveOffset : this.moveOffset, .5, u = function (t, e) {
              var n = t.getComponent(__dependency_1.Label).string.length - 1;
              t.getComponent(__dependency_1.Label).font = _.normalFont, t.getComponent(__dependency_1.UITransform).width = _.digitalWidthMap.get(n), e.getComponent(__dependency_1.Label).font = _.highlightFont, e.getComponent(__dependency_1.UITransform).width = _.digitalWidthMap.get(1);
            }, m = function (t, e) {
              return new Promise(function (n) {
                for (var i = function (i) {
                    __dependency_1.tween(_.timesContent.children[i]).bindNodeState(false).by(.1, {
                      y: -l / 10
                    }, {
                      onStart: function () {
                        _.resetBoardSockets();
                      }
                    }).delay(.1).by(.5, {
                      y: l + l / 10
                    }).call(function () {
                      i === _.timesContent.children.length - 1 && (_.setBoardSockets(), u(t, e), n());
                    }).start();
                  }, o = 0; o < _.timesContent.children.length; o++) i(o);
              });
            }, c = function () {
              return new Promise(function (t) {
                for (var e = function (e) {
                    __dependency_1.tween(_.timesContent.children[e]).bindNodeState(false).by(.1, {
                      y: -l / 10
                    }, {
                      onStart: function () {
                        _.resetBoardSockets();
                      }
                    }).delay(.1).by(1, {
                      y: l - l / 10
                    }, {
                      easing: function (t) {
                        return 1 - Math.pow(1 - t, 4);
                      }
                    }).by(.25, {
                      y: -(l - l / 5)
                    }, {
                      easing: "backOut"
                    }).call(function () {
                      e === _.timesContent.children.length - 1 && (_.setBoardSockets(), t());
                    }).start();
                  }, n = 0; n < _.timesContent.children.length; n++) e(n);
              });
            }, d = o;
          case 12:
            if (d === i) {
              t.next = 23;
              break;
            }
            return h = this.curTimesNode, f = this.nodeMap.get(d + r), this.preTimesNode = h, this.curTimesNode = f, dispatch(__dependency_6.GameEvent.PLAY_BTM, {
              data: {
                url: this.getMultipleMoveBtmName(d)
              }
            }), t.next = 20, m(h, f);
          case 20:
            d += r, t.next = 12;
            break;
          case 23:
            return dispatch(__dependency_6.GameEvent.PLAY_BTM, {
              data: {
                url: __dependency_4.EBTM.MULTIPLE_MOVE_01
              }
            }), t.next = 26, c();
          case 26:
            this.curTimesValue = e;
          case 27:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }(), l.closingMoveMultiple = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t(e) {
      var n,
        i,
        o,
        a,
        r,
        l,
        u,
        m,
        c,
        d,
        h,
        f = this;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            n = this.data.getData().definition.StoneMultiplierList, i = n.indexOf(e), o = n.indexOf(this.curTimesValue), r = (a = i > o) ? 1 : -1, l = a ? -this.moveOffset : this.moveOffset, .5, u = function (t, e, n) {
              return new Promise(function (i) {
                for (var o = t.getComponent(__dependency_1.Label).string.length - 1, a = n ? 1 : .5, r = n ? function (t) {
                    return 1 - Math.pow(1 - t, 4);
                  } : null, s = function (s) {
                    __dependency_1.tween(f.timesContent.children[s]).bindNodeState(false).by(.1, {
                      y: -l / 10
                    }, {
                      onStart: function () {
                        f.resetBoardSockets();
                      }
                    }).delay(.1).by(a, {
                      y: l + (n ? -l / 10 : l / 10)
                    }, {
                      easing: r
                    }).by(n ? .125 : 0, {
                      y: n ? l / 5 : 0
                    }).call(function () {
                      s === f.timesContent.children.length - 1 && (f.setBoardSockets(), t.getComponent(__dependency_1.Label).font = f.normalFont, t.getComponent(__dependency_1.UITransform).width = f.digitalWidthMap.get(o), e.getComponent(__dependency_1.Label).font = f.highlightFont, e.getComponent(__dependency_1.UITransform).width = f.digitalWidthMap.get(1), i());
                    }).start();
                  }, u = 0; u < f.timesContent.children.length; u++) s(u);
              });
            }, m = o;
          case 10:
            if (m === i) {
              t.next = 22;
              break;
            }
            return c = m === i - r, d = this.curTimesNode, h = this.nodeMap.get(m + r), this.preTimesNode = d, this.curTimesNode = h, dispatch(__dependency_6.GameEvent.PLAY_BTM, {
              data: {
                url: this.getMultipleMoveBtmName(m)
              }
            }), t.next = 19, u(d, h, c);
          case 19:
            m += r, t.next = 10;
            break;
          case 22:
            this.curTimesValue = e;
          case 23:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }(), l.getMultipleMoveBtmName = function (t) {
    for (var e = [{
        name: __dependency_4.EBTM.MULTIPLE_MOVE_01,
        max: this.timesIndexForAnim[0]
      }, {
        name: __dependency_4.EBTM.MULTIPLE_MOVE_02,
        max: this.timesIndexForAnim[1]
      }, {
        name: __dependency_4.EBTM.MULTIPLE_MOVE_03,
        max: this.timesIndexForAnim[2]
      }, {
        name: __dependency_4.EBTM.MULTIPLE_MOVE_04,
        max: this.timesIndexForAnim[3]
      }, {
        name: __dependency_4.EBTM.MULTIPLE_MOVE_05,
        max: this.timesIndexForAnim[4]
      }], n = 0, i = e; n < i.length; n++) {
      var o = i[n];
      if (t <= o.max) return o.name;
    }
    return e[e.length - 1].name;
  }, l.handleMoveMultiple = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e, n, i, o;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (e = this.data.getData().parser.currentGameState, n = e.nextTimes, i = e.isStoneExtraAnim, o = Math.random() < .5, !i) {
              t.next = 12;
              break;
            }
            if (!o) {
              t.next = 8;
              break;
            }
            return t.next = 6, this.overMoveMultiple(n);
          case 6:
            t.next = 10;
            break;
          case 8:
            return t.next = 10, this.closingMoveMultiple(n);
          case 10:
            t.next = 14;
            break;
          case 12:
            return t.next = 14, this.moveMultiple(n, !1);
          case 14:
            dispatch(__dependency_6.GameEvent.MOVE_MULTIPLE_END);
          case 15:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.handleResetMultiple = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e, n;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (e = this.data.getData().definition.StoneMultiplierList, n = this.data.checkIsMG(), !(this.curTimesValue != e[0])) {
              t.next = 11;
              break;
            }
            return t.next = 6, this.sleep(.3);
          case 6:
            return n && this.playBoardLoopAnim(0), t.next = 9, this.resetMultiple();
          case 9:
            return t.next = 11, this.sleep(.1);
          case 11:
            dispatch(__dependency_6.GameEvent.RESET_MULTIPLE_END);
          case 12:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.handleMoveToSpecifyMultiple = function () {
    var t = __dependency_0.asyncToGenerator(__dependency_0.regeneratorRuntime().mark(function t() {
      var e;
      return __dependency_0.regeneratorRuntime().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return e = this.data.getData().parser.currentGameState.bonusTimes, t.next = 3, this.moveMultiple(e, !0);
          case 3:
            return t.next = 5, this.sleep(.1);
          case 5:
            dispatch(__dependency_6.GameEvent.MOVE_TO_SPECIFY_MULTIPLE_END);
          case 6:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.sleep = function (t) {
    var e = this;
    return new Promise(function (n) {
      e.scheduleOnce(function () {
        n();
      }, t);
    });
  }, l.reset = function () {}, l.setData = function (t) {}, l.show = function () {
    this.node.active = !0;
  }, l.hide = function () {
    this.node.active = !1;
  }, l.addEvents = function () {
    var t = this;
    this.on(__dependency_6.GameEvent.INIT_MULTIPLE, function () {
      t.init();
    }), this.on(__dependency_6.GameEvent.PARSER_INIT_COMPLETED, function () {
      t.init();
    }), this.on(__dependency_6.GameEvent.PARSER_REPLAY_COMPLETED, function () {
      t.init();
    }), this.on(__dependency_6.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.changeStyle(e.data);
    }), this.on(__dependency_6.GameEvent.MOVE_MULTIPLE, function () {
      t.handleMoveMultiple();
    }), this.on(__dependency_6.GameEvent.RESET_MULTIPLE, function () {
      t.handleResetMultiple();
    }), this.on(__dependency_6.GameEvent.MOVE_TO_SPECIFY_MULTIPLE, function () {
      t.handleMoveToSpecifyMultiple();
    }), this.on(__dependency_6.GameEvent.SHOW_MULTI_BOARD_TO_WIN_EFFECT, function () {
      t.playMultiScoreAnim();
    });
  }, __dependency_0.createClass(e, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_5.default);
    }
  }]), e;
}(__dependency_2.default)).prototype, "timesContent", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = __dependency_0.applyDecoratedDescriptor(z.prototype, "timesContentLayout", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = __dependency_0.applyDecoratedDescriptor(z.prototype, "boardSpine", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = __dependency_0.applyDecoratedDescriptor(z.prototype, "changeBoardSpine", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = __dependency_0.applyDecoratedDescriptor(z.prototype, "multipleBoard", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = __dependency_0.applyDecoratedDescriptor(z.prototype, "multipleBoard_01", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = __dependency_0.applyDecoratedDescriptor(z.prototype, "multipleBoard_02", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = __dependency_0.applyDecoratedDescriptor(z.prototype, "multipleBoardBG", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = __dependency_0.applyDecoratedDescriptor(z.prototype, "multipleTimes", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = __dependency_0.applyDecoratedDescriptor(z.prototype, "atgLogo", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), tt = __dependency_0.applyDecoratedDescriptor(z.prototype, "normalFont", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), et = __dependency_0.applyDecoratedDescriptor(z.prototype, "freeGameFont", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), nt = __dependency_0.applyDecoratedDescriptor(z.prototype, "highlightFont", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = z)) || W));
__dependency_1.cclegacy._RF.pop();
