System.register("chunks:///_virtual/HeavenlyTreasuresView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UIView.ts", "./Decorators.ts", "./StakeModel.ts", "./SlotFrameworkEvent.ts", "./ReplayModel.ts", "./CmmSlotUtils.ts", "./LoadUtils.ts", "./MathUtil.ts", "./GameConfigModel.ts", "./GameData.ts", "./GameEvent.ts", "./GameSender.ts", "./types.ts", "./CmmUtils.ts"], function (t) {
  "use strict";

  var e, n, o, i, a, s, r, l, u, c, p, h, d, m, f, g, T, b, S, C, y, R, N, v, O, _, E, A, w, B, L, P, M, I, U, D;
  return {
    setters: [function (t) {
      e = t.applyDecoratedDescriptor, n = t.inheritsLoose, o = t.initializerDefineProperty, i = t.assertThisInitialized, a = t.createForOfIteratorHelperLoose, s = t.createClass;
    }, function (t) {
      r = t.cclegacy, l = t._decorator, u = t.Prefab, c = t.Tween, p = t.NodeEventType, h = t.instantiate, d = t.sp, m = t.UIOpacity, f = t.tween, g = t.Vec3, T = t.Label, b = t.Node, S = t.Sprite;
    }, function (t) {
      C = t.default;
    }, function (t) {
      y = t.inject;
    }, function (t) {
      R = t.default;
    }, function (t) {
      N = t.SlotFrameworkEvent;
    }, function (t) {
      v = t.default;
    }, function (t) {
      O = t.CmmSlotUtils;
    }, function (t) {
      _ = t.LoadUtils;
    }, function (t) {
      E = t.default;
    }, function (t) {
      A = t.EBTM, w = t.EBGM, B = t.default;
    }, function (t) {
      L = t.default;
    }, function (t) {
      P = t.GameEvent;
    }, function (t) {
      M = t.GameSender;
    }, function (t) {
      I = t.EBonusType, U = t.BonusStateAction;
    }, function (t) {
      D = t.CmmUtils;
    }],
    execute: function () {
      var k, x, V, G, F, H, z, Y, W, j, Z, q, K, Q, J, X, $, tt, et, nt, ot;
      r._RF.push({}, "83647DjqZlKZblUZfws6H/5", "HeavenlyTreasuresView", void 0);
      var it,
        at = l.ccclass,
        st = l.property;
      !function (t) {
        t[t.NONE = 0] = "NONE", t[t.RUN_SCORE = 1] = "RUN_SCORE", t[t.RUN_SCORE_END = 2] = "RUN_SCORE_END", t[t.WAIT_CLOSE = 3] = "WAIT_CLOSE";
      }(it || (it = {}));
      t("HeavenlyTreasuresView", (k = at("HeavenlyTreasuresView"), x = st({
        type: u
      }), V = y("content", b), G = y("bbr", b), F = y("txtBonus", T), H = y("ndResultPopup", b), z = y("ndResultPopup/txtTotalBonus", T), Y = y("prefab/coinFallingAnimNode", b), W = y("ndResultPopup/coinContent", b), j = y("ndResultPopup/popup_02", S), k((K = e((q = function (t) {
        function e() {
          for (var n, a = arguments.length, s = new Array(a), r = 0; r < a; r++) s[r] = arguments[r];
          return n = t.call.apply(t, [this].concat(s)) || this, o(n, "treasuresBox", K, i(n)), o(n, "content", Q, i(n)), o(n, "bbr", J, i(n)), o(n, "txtBonus", X, i(n)), o(n, "ndResultPopup", $, i(n)), o(n, "txtTotalBonus", tt, i(n)), o(n, "coinFallingAnimNode", et, i(n)), o(n, "coinContent", nt, i(n)), o(n, "resultTitle", ot, i(n)), n.collectCoin = [], n.bonusList = [], n.itemCount = 0, n.treasuresMap = new Map(), n._totalBonus = 0, n.collectScore = 0, n.isResult = !1, n.runScoreStatus = it.NONE, n.numTween = null, n.TWEEN_TAG = D.hashCode("HeavenlyResultTween"), n.directShowResult = function () {
            n.runScoreStatus = it.RUN_SCORE_END, c.stopAllByTag(n.TWEEN_TAG), n.ndResultPopup.off(p.TOUCH_END, n.directShowResult), n.scheduleOnce(function () {
              n.ndResultPopup.on(p.TOUCH_END, n.onCloseResult);
            }, .5);
            var t = n.data.getData().definition.digital;
            n.txtTotalBonus.string = O.formatNumber(n.collectScore, !1, !0, t), dispatch(N.QUICK_STOP_TOTAL_WINNINGS, {
              data: n.collectScore
            }), dispatch(P.PLAY_BTM, {
              data: {
                url: A.FU_OUT_DIRECT
              }
            }), dispatch(P.STOP_BTM, {
              data: A.MONEY_SCROLL
            });
          }, n.onCloseResult = function () {
            dispatch(P.STOP_BTM, {
              data: A.MONEY_SCROLL
            }), dispatch(P.PLAY_BGM, {
              data: w.MAIN_GAME
            }), n.isShowResultView(), n.node.active = !1, App.pool.getPool("TREASURE_COIN_POOL").clear(), App.uiManager.close(e), dispatch(P.HEAVENLY_TREASURES_RESULT_END);
          }, n;
        }
        n(e, t), e.getPrefabUrl = function () {
          return "prefabs/HeavenlyTreasures";
        };
        var r = e.prototype;
        return r.update = function (t) {
          if (v.isReplay) for (var e, n = a(this.treasuresMap.entries()); !(e = n()).done;) {
            var o = e.value,
              i = (o[0], o[1]);
            if (i.needOpen && !i.isOpen) i.node.getPosition().y <= i.openPositionY && (this.replayOpenItem(i.node), i.isOpen = !0);
          }
        }, r.setData = function () {
          var t = B.getData().filePaths.localeSpriteFrame;
          this.resultTitle.spriteFrame = _.getDirSp(this.data.module, t, "popup_02");
        }, r.show = function () {
          t.prototype.show.call(this), this.setData();
          var e = this.data.getData().bonusState;
          if (this.totalBonus = 0, v.isReplay) {
            var n = this.data.getData().bonusState,
              o = n.actionValues,
              i = n.collectValues;
            this.replayAutoOpenBox(o, i);
          } else this.playDropTreasures(e.actionOptions);
        }, r.initViewData = function () {
          this.initCoinPool(), this.isShowResultView(), this.isResult = !1, this.collectScore = 0, this.bonusList = [], this.totalBonus = 0, this.itemCount = 0, this.collectCoin = [], this.content.removeAllChildren(), c.stopAllByTarget(this);
        }, r.isShowResultView = function (t) {
          var e = this;
          if (void 0 === t && (t = !1), this.ndResultPopup.active = t, c.stopAllByTarget(this), t) {
            this.txtBonus.node.active = !1, this.totalBonus = 0, this.playCoinFallAnim();
            B.isTurbo;
            var n = this.data.getData().definition.digital;
            dispatch(N.UPDATE_TOTAL_WINNINGS, {
              data: {
                value: Number(O.formatNumber(Number(this.collectScore.toString()), !1, !1, n)),
                tweenTime: 5
              }
            });
            var o = {
              label: this.txtTotalBonus,
              start: 0,
              end: Number(O.formatNumber(this.collectScore, !1, !1, n)),
              tweenTime: 5,
              digital: n,
              useThousandsSeparator: !0,
              tag: this.TWEEN_TAG,
              callback: function () {
                e.directShowResult();
              }
            };
            dispatch(P.PLAY_BTM, {
              data: {
                url: A.MONEY_SCROLL
              }
            }), this.numTween = O.tweenNum(o), this.ndResultPopup.once(p.TOUCH_END, this.directShowResult), this.scheduleOnce(this.onCloseResult, 10);
          }
        }, r.playDropTreasures = function (t) {
          var e = this;
          this.initViewData(), this.bonusList = t.slice();
          for (var n = function () {
              var t = h(e.treasuresBox);
              t.name = o.toString(), t.parent = e.content;
              var n = Math.floor(600 * Math.random()) - 280,
                i = 1.618 * (9 * Math.random() + 2);
              t.x = n, t.y = 800;
              var a = t.getComponent(d.Skeleton);
              t.getChildByName("bonus").getComponent(m).opacity = 0, a.paused = !0;
              var s = .78 * o;
              f(t).delay(s).to(i, {
                position: new g(n, -780, 0)
              }).call(function () {
                t.off(p.TOUCH_START, e.onTouchItem, e), e.itemCount++, e.checkResultGame();
              }).start(), t.once(p.TOUCH_START, e.onTouchItem, e);
            }, o = 0; o < this.bonusList.length; o++) n();
        }, r.replayAutoOpenBox = function (t, e) {
          var n = this;
          this.initViewData();
          var o = [];
          e.forEach(function (e, n) {
            var i = t.indexOf(e);
            i > -1 && o.push(i);
          }), t.forEach(function (t, e) {
            var i = h(n.treasuresBox);
            i.name = e.toString(), i.parent = n.content;
            var a = Math.floor(600 * Math.random()) - 280,
              s = 1.618 * (9 * Math.random() + 2);
            i.x = a, i.y = 800;
            var r = i.getComponent(d.Skeleton);
            i.getChildByName("bonus").getComponent(m).opacity = 0, r.paused = !0;
            var l = .78 * e,
              u = o.includes(e),
              c = E.getRandomNumber(-400, 400);
            n.treasuresMap.set(e, {
              amount: t,
              node: i,
              isOpen: !1,
              needOpen: u,
              openPositionY: c
            }), f(i).delay(l).to(s, {
              position: new g(a, -780, 0)
            }).call(function () {
              n.itemCount++, n.checkResultGame();
            }).start();
          });
        }, r.replayOpenItem = function (t) {
          var e = this;
          dispatch(P.PLAY_BTM, {
            data: {
              url: A.CHEST_OPEN,
              loop: !1
            }
          }), this.itemCount++, t.setSiblingIndex(this.bonusList.length - 1);
          var n = t.getComponent(d.Skeleton);
          n.paused = !1, n.setAnimation(0, "open", !1), c.stopAllByTarget(t);
          var o = t.getChildByName("bonus"),
            i = o.getComponent(m),
            a = o.getComponent(T),
            s = Number(t.name);
          a.string = this.treasuresMap.get(s).amount.toString(), f(i).to(.2, {
            opacity: 255
          }).start(), f(o).to(.2, {
            y: 148
          }, {
            easing: "backOut"
          }).start(), this.collectScore += this.treasuresMap.get(s).amount, f(this).to(.3, {
            totalBonus: this.collectScore
          }).start();
          var r = t.addComponent(m);
          f(r).delay(1).to(.6, {
            opacity: 0
          }, {
            easing: "fade"
          }).call(function () {
            t.removeFromParent(), e.checkResultGame();
          }).start();
        }, r.onTouchItem = function (t) {
          var e = this;
          dispatch(P.PLAY_BTM, {
            data: {
              url: A.CHEST_OPEN,
              loop: !1
            }
          }), this.itemCount++;
          var n = t.target;
          n.setSiblingIndex(this.bonusList.length - 1);
          var o = n.getComponent(d.Skeleton);
          o.paused = !1, o.setAnimation(0, "open", !1), c.stopAllByTarget(n);
          var i = n.getChildByName("bonus"),
            a = i.getComponent(m),
            s = i.getComponent(T),
            r = Number(n.name);
          s.string = this.bonusList[r].amount.toString(), f(a).to(.2, {
            opacity: 255
          }).start(), f(i).to(.2, {
            y: 148
          }, {
            easing: "backOut"
          }).start(), this.collectScore += this.bonusList[r].amount, f(this).to(.3, {
            totalBonus: this.collectScore
          }).start(), this.collectCoin.push(this.bonusList[r]);
          var l = n.addComponent(m);
          f(l).delay(1).to(.6, {
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
            ratioIndex: R.ratioIndex,
            ratioValue: R.ratioValue,
            stakeIndex: R.stakeIndex,
            stakeValue: R.stakeValue,
            bonusType: I.FORTUNE_LANDING,
            action: U.COLLECT,
            actionValue: this.bonusList[r].amount
          };
          App.senderManager.get(M).sendFortuneLandingCollectReq(u);
        }, r.checkResultGame = function () {
          v.isReplay ? !this.isResult && this.itemCount >= this.treasuresMap.size && (this.isResult = !0, this.isShowResultView(!0)) : !this.isResult && this.itemCount >= this.bonusList.length && (this.isResult = !0, this.isShowResultView(!0));
        }, r.initCoinPool = function () {
          for (var t, e = this, n = this.coinFallingAnimNode, o = App.pool.createPool("TREASURE_COIN_POOL"), i = 0; i < 5; i++) t = void 0, (t = h(n)).getComponent(d.Skeleton).setEventListener(function (t, n) {
            "copy" == n.data.name && e.playCoinFallAnim();
          }), o.cloneNode = t, o.put(t);
        }, r.playCoinFallAnim = function () {
          var t = App.pool.getPool("TREASURE_COIN_POOL").get(),
            e = Math.random() >= .5 ? 1 : -1,
            n = t.getComponent(d.Skeleton);
          t.setScale(e, 1), n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "coin", !1), n.setCompleteListener(function () {
            App.pool.getPool("COIN_POOL").put(t);
          }), t.setParent(this.coinContent);
        }, s(e, [{
          key: "data",
          get: function () {
            return App.dataCenter.get(L);
          }
        }, {
          key: "totalBonus",
          get: function () {
            return this._totalBonus;
          },
          set: function (t) {
            this._totalBonus = t, this.txtBonus.string = O.formatNumber(this._totalBonus, !0), this.txtTotalBonus.string = O.formatNumber(this._totalBonus, !0);
          }
        }]), e;
      }(C)).prototype, "treasuresBox", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), Q = e(q.prototype, "content", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), J = e(q.prototype, "bbr", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), X = e(q.prototype, "txtBonus", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), $ = e(q.prototype, "ndResultPopup", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), tt = e(q.prototype, "txtTotalBonus", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), et = e(q.prototype, "coinFallingAnimNode", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), nt = e(q.prototype, "coinContent", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), ot = e(q.prototype, "resultTitle", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), Z = q)) || Z));
      r._RF.pop();
    }
  };
});
