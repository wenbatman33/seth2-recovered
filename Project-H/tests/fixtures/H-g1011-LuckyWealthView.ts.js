System.register("chunks:///_virtual/LuckyWealthView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Decorators.ts", "./UIView.ts", "./CmmSlotUtils.ts", "./CmmUtils.ts", "./GameConfigModel.ts", "./GameEvent.ts", "./GameData.ts", "./SlotFrameworkEvent.ts"], function (t) {
  "use strict";

  var n, e, i, o, a, l, r, u, c, s, p, m, f, h, d, b, A, g, w, C, y, T, L, N;
  return {
    setters: [function (t) {
      n = t.applyDecoratedDescriptor, e = t.inheritsLoose, i = t.initializerDefineProperty, o = t.assertThisInitialized, a = t.createClass;
    }, function (t) {
      l = t.cclegacy, r = t._decorator, u = t.sp, c = t.NodeEventType, s = t.tween, p = t.Vec3, m = t.Node, f = t.Sprite, h = t.Label, d = t.instantiate;
    }, function (t) {
      b = t.inject;
    }, function (t) {
      A = t.default;
    }, function (t) {
      g = t.CmmSlotUtils;
    }, function (t) {
      w = t.CmmUtils;
    }, function (t) {
      C = t.default, y = t.EBTM;
    }, function (t) {
      T = t.GameEvent;
    }, function (t) {
      L = t.default;
    }, function (t) {
      N = t.SlotFrameworkEvent;
    }],
    execute: function () {
      var E, v, S, P, O, _, k, M, I, D, F, W, U, B, G, z, Y, V;
      l._RF.push({}, "d6d2abI7WpGmJJucCnb5vEJ", "LuckyWealthView", void 0), function (t) {
        t.EASING = "easing", t.COMPLETE = "complete";
      }(V || (V = {}));
      var H = r.ccclass;
      t("default", (E = H("LuckyWealthView"), v = b("bbr", m), S = b("content", m), P = b("content/coinContent", m), O = b("prefab/coinFallingAnimNode", m), _ = b("content/bgAnim", u.Skeleton), k = b("content/title", f), M = b("content/winAmount", h), E((F = n((D = function (t) {
        function n() {
          for (var n, e = arguments.length, a = new Array(e), l = 0; l < e; l++) a[l] = arguments[l];
          return n = t.call.apply(t, [this].concat(a)) || this, i(n, "bbr", F, o(n)), i(n, "content", W, o(n)), i(n, "coinContent", U, o(n)), i(n, "coinFallingAnimNode", B, o(n)), i(n, "bgAnim", G, o(n)), i(n, "title", z, o(n)), i(n, "winAmount", Y, o(n)), n.tweenNumTween = null, n.status = null, n;
        }
        e(n, t), n.getPrefabUrl = function () {
          return "prefabs/LuckyWealthView";
        };
        var l = n.prototype;
        return l.onLoad = function () {
          t.prototype.onLoad.call(this);
        }, l.onDestroy = function () {
          t.prototype.onDestroy.call(this);
        }, l.setData = function () {
          C.getData().filePaths.localeSpriteFrame;
        }, l.show = function (n) {
          t.prototype.show.call(this, n), this.init(n);
        }, l.init = function (t) {
          var n = t.win,
            e = this.data.getData().definition.digital;
          this.setData();
          var i = C.isTurbo ? 1 : 5;
          this.addEventTouch(), this.initCoinPool(), this.playCoinFallAnim(), this.playBgAnim(), this.playWinAmountAnim(n), dispatch(N.UPDATE_TOTAL_WINNINGS, {
            data: {
              value: Number(g.formatNumber(Number(n.toString()), !1, !1, e)),
              tweenTime: i
            }
          }), App.globalAudio.pauseMusic(), dispatch(T.PLAY_BTM, {
            data: {
              url: y.LUCKY_WEALTH
            }
          }), dispatch(T.PLAY_BTM, {
            data: {
              url: y.FALL_MONEY,
              loop: !0
            }
          });
        }, l.addEventTouch = function () {
          var t = this;
          this.bbr.on(c.TOUCH_END, w.throttle(function () {
            switch (t.status) {
              case V.EASING:
                t.easingClick();
                break;
              case V.COMPLETE:
                t.completeClick();
            }
          }));
        }, l.easingClick = function () {
          var t = this,
            n = this.args.win;
          this.tweenNumTween.stop(), this.setWinAmount(n), dispatch(N.QUICK_STOP_TOTAL_WINNINGS, {
            data: n
          }), this.playBounceTween(this.winAmount.node, function () {
            t.setStatus(V.COMPLETE);
          });
        }, l.completeClick = function () {
          App.pool.getPool("COIN_POOL").clear(), this.coinContent.children.forEach(function (t) {
            t.destroy();
          }), dispatch(T.LUCKY_WEALTH_END), dispatch(T.STOP_BTM, {
            data: y.FALL_MONEY
          }), dispatch(T.STOP_BTM, {
            data: y.LUCKY_WEALTH
          }), App.globalAudio.resumeMusic(), this.close();
        }, l.initCoinPool = function () {
          for (var t, n = this, e = this.coinFallingAnimNode, i = App.pool.createPool("COIN_POOL"), o = 0; o < 5; o++) t = void 0, (t = d(e)).getComponent(u.Skeleton).setEventListener(function (t, e) {
            "copy" == e.data.name && n.playCoinFallAnim();
          }), i.cloneNode = t, i.put(t);
        }, l.playCoinFallAnim = function () {
          var t = App.pool.getPool("COIN_POOL").get(),
            n = Math.random() >= .5 ? 1 : -1,
            e = t.getComponent(u.Skeleton);
          t.setScale(n, 1), e.clearTracks(), e.setToSetupPose(), e.setAnimation(0, "coin", !1), e.setCompleteListener(function () {
            App.pool.getPool("COIN_POOL").put(t);
          }), t.setParent(this.coinContent);
        }, l.playBgAnim = function () {
          this.bgAnim.getComponent(u.Skeleton).setAnimation(0, "light", !0);
        }, l.setStatus = function (t) {
          this.status = t;
        }, l.playWinAmountAnim = function (t) {
          var n = this;
          this.setStatus(V.EASING);
          var e = C.isTurbo,
            i = {
              label: this.winAmount,
              start: 0,
              end: t,
              tweenTime: e ? 1 : 5,
              digital: 2,
              useThousandsSeparator: !0,
              callback: function () {
                n.setStatus(V.COMPLETE);
              }
            };
          this.tweenNumTween = g.tweenNum(i);
        }, l.setWinAmount = function (t) {
          var n = g.formatNumber(t);
          this.winAmount.string = n;
        }, l.playBounceTween = function (t, n) {
          s(t).to(.1, {
            scale: new p(1.8, 1.8, 1.8)
          }).delay(.01).to(.1, {
            scale: new p(1, 1, 1)
          }, {
            onComplete: function () {
              n && n();
            }
          }).start();
        }, a(n, [{
          key: "data",
          get: function () {
            return App.dataCenter.get(L);
          }
        }]), n;
      }(A)).prototype, "bbr", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), W = n(D.prototype, "content", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), U = n(D.prototype, "coinContent", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), B = n(D.prototype, "coinFallingAnimNode", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), G = n(D.prototype, "bgAnim", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), z = n(D.prototype, "title", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), Y = n(D.prototype, "winAmount", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), I = D)) || I));
      l._RF.pop();
    }
  };
});
