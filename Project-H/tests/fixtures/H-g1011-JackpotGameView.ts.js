System.register("chunks:///_virtual/JackpotGameView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UIView.ts", "./Decorators.ts", "./GameEvent.ts", "./GameSender.ts", "./GameData.ts", "./types.ts", "./SocketModel.ts", "./StakeModel.ts", "./SlotFrameworkEvent.ts", "./CmmSlotUtils.ts", "./GameConfigModel.ts", "./CmmUtils.ts", "./ReplayModel.ts"], function (t) {
  "use strict";

  var e, n, i, a, o, s, r, c, l, u, p, h, d, f, m, P, T, O, _, N, v, g, S, w, k, C, A, y, R, E, I, b, L, M, W, J, U;
  return {
    setters: [function (t) {
      e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, a = t.assertThisInitialized, o = t.createClass, s = t.asyncToGenerator, r = t.regeneratorRuntime;
    }, function (t) {
      c = t.cclegacy, l = t._decorator, u = t.sp, p = t.Node, h = t.tween, d = t.randomRangeInt, f = t.NodeEventType, m = t.UIOpacity, P = t.Vec3, T = t.Input, O = t.KeyCode, _ = t.Tween, N = t.Label, v = t.instantiate;
    }, function (t) {
      g = t.default;
    }, function (t) {
      S = t.inject;
    }, function (t) {
      w = t.GameEvent;
    }, function (t) {
      k = t.GameSender;
    }, function (t) {
      C = t.default;
    }, function (t) {
      A = t.EBonusType, y = t.BonusStateAction;
    }, function (t) {
      R = t.default;
    }, function (t) {
      E = t.default;
    }, function (t) {
      I = t.SlotFrameworkEvent;
    }, function (t) {
      b = t.CmmSlotUtils;
    }, function (t) {
      L = t.EBTM, M = t.default, W = t.EBGM;
    }, function (t) {
      J = t.CmmUtils;
    }, function (t) {
      U = t.default;
    }],
    execute: function () {
      var D, x, G, B, V, j, F, Y, z, H, K, Q, q, X, Z, $, tt;
      t("EJackpotType", void 0), c._RF.push({}, "e2869bgwh1NmJeVoa496QGz", "JackpotGameView", void 0);
      var et,
        nt,
        it = l.ccclass,
        at = l.property;
      !function (t) {
        t.MINI = "jp-mini", t.MINOR = "jp-minor", t.MAJOR = "jp-major", t.GRAND = "jp-grand";
      }(et || (et = t("EJackpotType", {}))), function (t) {
        t[t.RUN_SCORE = 0] = "RUN_SCORE", t[t.RUN_SCORE_END = 1] = "RUN_SCORE_END", t[t.WAIT_CLOSE = 2] = "WAIT_CLOSE";
      }(nt || (nt = {}));
      t("JackpotGameView", (D = it("JackpotGameView"), x = S("aniScroll", u.Skeleton), G = S("ndResult", p), B = S("ndResult/coinContent", p), V = S("prefab/coinFallingAnimNode", p), j = S("ndResult/aniWin", u.Skeleton), F = S("ndResult/txtTotalWin", N), Y = at({
        type: p,
        tooltip: "Items",
        override: !0
      }), D((K = e((H = function (t) {
        function e() {
          for (var e, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
          return e = t.call.apply(t, [this].concat(o)) || this, i(e, "aniScroll", K, a(e)), i(e, "ndResult", Q, a(e)), i(e, "coinContent", q, a(e)), i(e, "coinFallingAnimNode", X, a(e)), i(e, "aniWin", Z, a(e)), i(e, "txtTotalWin", $, a(e)), e.totalWinNumber = 0, i(e, "items", tt, a(e)), e.checkOpenMap = new Map(), e.isLock = !0, e.showWinStatus = null, e.tweenNumTween = null, e.replayOpenSchedule = null, e;
        }
        n(e, t), e.getPrefabUrl = function () {
          return "prefabs/jackpotGame/JackpotGameView";
        };
        var c = e.prototype;
        return c.start = function () {
          var t = this;
          this.initCoinPool(), this.setEventTouch(), this.ndResult.active = !1, this.isLock = !0, this.items.forEach(function (t) {
            t.active = !1;
          }), dispatch(w.PLAY_BTM, {
            data: {
              url: L.JP_TRANS,
              loop: !1
            }
          }), this.txtTotalWin.string = "0", this.txtTotalWin.node.active = !1, this.aniScroll.clearTracks(), this.aniScroll.setToSetupPose(), this.aniScroll.setAnimation(0, "open", !1), this.aniScroll.setEventListener(function () {
            var e = t.data.getData().bonusState;
            t.checkOpenMap.clear(), t.items.forEach(function (e, n) {
              t.checkOpenMap.set(n, null);
            }), e && e.pickPositions.forEach(function (e, n) {
              t.checkOpenMap.set(e.position, e);
            }), t.initItemStatus(), e && e.totalWinnings > 0 && (t.isLock = !0, h(t).delay(.9).call(function () {
              t.showResult(e);
            }).start()), U.isReplay && t.replayAutoOpenItem();
          }), this.isLock = !1;
        }, c.close = function () {
          dispatch(w.STOP_BTM, {
            data: L.JP_POPUP_LOOP_1
          }), dispatch(w.STOP_BTM, {
            data: L.JP_POPUP_LOOP_2
          }), t.prototype.close.call(this);
        }, c.initItemStatus = function () {
          var t = this;
          this.checkOpenMap.forEach(function (e, n) {
            var i = t.items[n];
            i.name = n.toString(), i.active = !0;
            var a = i.getChildByName("ingot").getComponent(u.Skeleton),
              o = i.getChildByName("icon").getComponent(u.Skeleton);
            a.clearTracks(), a.setToSetupPose(), a.node.active = !1, o.clearTracks(), o.setToSetupPose(), o.node.active = !1, h(t).delay(.1 * d(0, 6)).call(function () {
              if (null === t.checkOpenMap.get(n)) a.node.active = !0, a.setAnimation(0, "in", !1), !U.isReplay && i.on(f.TOUCH_END, t.onOpenItemPosition, t);else {
                var o = t.items[n];
                t.openItem(e, o), o.off(f.TOUCH_END, t.onOpenItemPosition, t);
              }
            }).start();
          });
        }, c.initCoinPool = function () {
          for (var t, e = this, n = this.coinFallingAnimNode, i = App.pool.createPool("COIN_POOL"), a = 0; a < 5; a++) t = void 0, (t = v(n)).getComponent(u.Skeleton).setEventListener(function (t, n) {
            "copy" == n.data.name && e.playCoinFallAnim();
          }), i.cloneNode = t, i.put(t);
        }, c.onOpenItemPosition = function (t) {
          if (!this.isLock) {
            this.isLock = !0;
            var e = t.currentTarget,
              n = {
                token: R.currentToken,
                spinId: this.data.getData().spinId,
                bonusType: A.JP_GAME,
                action: y.COLLECT,
                actionValue: Number(e.name),
                ratioIndex: E.ratioIndex,
                ratioValue: E.ratioValue,
                stakeIndex: E.stakeIndex,
                stakeValue: E.stakeValue
              };
            App.senderManager.get(k).sendJackpotGameSelectPosition(n), e.off(f.TOUCH_END, this.onOpenItemPosition, this);
          }
        }, c.replayAutoOpenItem = function () {
          var t = s(r().mark(function t() {
            var e = this;
            return r().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  this.replayOpenSchedule = s(r().mark(function t() {
                    var n;
                    return r().wrap(function (t) {
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
          var t = s(r().mark(function t(e) {
            var n = this;
            return r().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return t.abrupt("return", new Promise(s(r().mark(function t(i) {
                    var a, o, s, c, l;
                    return r().wrap(function (t) {
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
            var o = e.getChildByName("ingot").getComponent(u.Skeleton);
            o.node.active = !0, o.clearTracks(), o.setToSetupPose(), o.setAnimation(0, "open", !1), o.timeScale = 1.5, o.setCompleteListener(function () {
              o.node.active = !1;
            }), o.setEventListener(function () {
              dispatch(w.PLAY_BTM, {
                data: {
                  url: L.JP_FLIP,
                  loop: !1
                }
              });
              var n = e.getChildByName("icon").getComponent(u.Skeleton);
              n.node.active = !0, n.node.getComponent(m).opacity = 0, n.clearTracks(), n.setToSetupPose();
              var a = t.category.split("jp-")[1];
              n.setAnimation(0, a, !0), h(n.node.getComponent(m)).to(.3, {
                opacity: 255
              }).start(), i(!0);
            });
          });
        }, c.onPickResp = function () {
          var t = s(r().mark(function t() {
            var e;
            return r().wrap(function (t) {
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
            s && t === s && (h(i).to(.3, {
              scale: new P(1.2, 1.2, 1.2)
            }).start(), n || (n = !0, dispatch(w.PLAY_BTM, {
              data: {
                url: L.JP_CONFIRM,
                loop: !1
              }
            })));
          });
        }, c.showResult = function (t) {
          var e = this,
            n = t.pickPositions,
            i = n[n.length - 1].category,
            a = t.totalWinnings;
          this.totalWinNumber = a, this.aniWin.clearTracks(), this.aniWin.setToSetupPose(), this.aniWin.setAnimation(0, i, !0), this.aniWin.node.scale = new P(.6, .6, .6), this.aniWin.node.active = !0, this.showWinLight(i), this.scheduleOnce(function () {
            e.ndResult.active = !0, e.playCoinFallAnim();
            var t = e.data.getData().definition.digital,
              n = Number(b.formatJPNumber(a, !1, !1, t));
            dispatch(I.UPDATE_TOTAL_WINNINGS, {
              data: {
                value: n,
                tweenTime: .3
              }
            }), Log.d("%c winCategory ", "color:#ff0000", i);
            var o = i == et.MINI || i == et.MINOR ? L.JP_POPUP_IN_1 : L.JP_POPUP_IN_2,
              s = i == et.MINI || i == et.MINOR ? L.JP_POPUP_LOOP_1 : L.JP_POPUP_LOOP_2;
            switch (dispatch(w.PLAY_BTM, {
              data: {
                url: o
              }
            }), e.scheduleOnce(function () {
              dispatch(w.PLAY_BTM, {
                data: {
                  url: s,
                  loop: !0
                }
              });
            }, 2), i) {
              case "jp-mini":
                dispatch(w.PLAY_BTM, {
                  data: {
                    url: L.JP_MINI_VOCAL
                  }
                });
                break;
              case "jp-minor":
                dispatch(w.PLAY_BTM, {
                  data: {
                    url: L.JP_MINOR_VOCAL
                  }
                });
                break;
              case "jp-major":
                dispatch(w.PLAY_BTM, {
                  data: {
                    url: L.JP_MAJOR_VOCAL
                  }
                });
                break;
              case "jp-grand":
                dispatch(w.PLAY_BTM, {
                  data: {
                    url: L.JP_GRAND_VOCAL
                  }
                });
            }
            h(e.aniWin.node).to(.6, {
              scale: new P(1, 1, 1)
            }).start(), e.scheduleOnce(function () {
              if (e.showWinStatus != nt.RUN_SCORE_END) {
                e.txtTotalWin.node.active = !0;
                var t = e.data.getData().definition.digital,
                  n = Number(b.formatJPNumber(a, !1, !1, t)),
                  i = {
                    label: e.txtTotalWin,
                    start: 0,
                    end: n,
                    tweenTime: 10,
                    digital: t,
                    useThousandsSeparator: !0,
                    callback: function () {
                      e.directShowResult();
                    }
                  };
                e.tweenNumTween = b.tweenJPNum(i), e.showWinStatus = nt.RUN_SCORE, dispatch(I.UPDATE_TOTAL_WINNINGS, {
                  data: {
                    value: n,
                    tweenTime: 10
                  }
                }), e.ndResult.once(f.TOUCH_END, e.directShowResult, e);
              }
            }, 2);
          }, 2);
        }, c.playCoinFallAnim = function () {
          var t = App.pool.getPool("COIN_POOL").get(),
            e = Math.random() >= .5 ? 1 : -1,
            n = t.getComponent(u.Skeleton);
          t.setScale(e, 1), n.clearTracks(), n.setToSetupPose(), n.setAnimation(0, "coin", !1), n.setCompleteListener(function () {
            App.pool.getPool("COIN_POOL").put(t);
          }), t.setParent(this.coinContent);
        }, c.addEvents = function () {
          this.on(w.JACKPOT_GAME_PICK_RESPONSE, this.onPickResp);
        }, c.setEventTouch = function () {
          var t = this;
          this.onI(T.EventType.KEY_DOWN, J.debounce(function (n) {
            if (n.keyCode === O.SPACE) {
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
          _.stopAllByTarget(this.node), this.ndResult.off(f.TOUCH_END, this.directShowResult), this.showWinStatus = nt.RUN_SCORE_END, this.tweenNumTween && this.tweenNumTween.stop();
          var e = this.data.getData().definition.digital;
          this.txtTotalWin.string = b.formatJPNumber(this.totalWinNumber, !1, !0, e), this.txtTotalWin.node.active = !0;
          var n = Number(b.formatJPNumber(this.totalWinNumber, !1, !1, e));
          dispatch(w.QUICK_STOP_TOTAL_WINNINGS, {
            data: n
          }), h(this.node).delay(1).call(function () {
            t.ndResult.once(f.TOUCH_END, t.removeAllTween, t);
          }).start();
          var i = M.getData().bigwinAutoCloseTime;
          h(this.node).delay(i).call(function () {
            t.removeAllTween();
          }).start();
        }, c.removeAllTween = function () {
          this.ndResult.off(f.TOUCH_END, this.removeAllTween), this.tweenNumTween && this.tweenNumTween.stop(), _.stopAllByTarget(this.node), dispatch(w.PLAY_BTM, {
            data: {
              url: L.JP_OUT,
              loop: !1
            }
          }), this.aniWin.node.active = !1, dispatch(w.PLAY_BGM, {
            data: W.MAIN_GAME
          }), App.pool.getPool("COIN_POOL").clear(), this.coinContent.children.forEach(function (t) {
            t.destroy();
          }), dispatch(w.JACKPOT_GAME_PICK_END), this.close();
        }, o(e, [{
          key: "data",
          get: function () {
            return App.dataCenter.get(C);
          }
        }]), e;
      }(g)).prototype, "aniScroll", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), Q = e(H.prototype, "ndResult", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), q = e(H.prototype, "coinContent", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), X = e(H.prototype, "coinFallingAnimNode", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), Z = e(H.prototype, "aniWin", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), $ = e(H.prototype, "txtTotalWin", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), tt = e(H.prototype, "items", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return [];
        }
      }), z = H)) || z));
      c._RF.pop();
    }
  };
});
