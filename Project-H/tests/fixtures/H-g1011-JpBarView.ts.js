System.register("chunks:///_virtual/JpBarView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventComponent.ts", "./GameData.ts", "./CmmUtils.ts", "./CmmSlotUtils.ts", "./SlotFrameworkEvent.ts", "./GameEvent.ts", "./ReplayModel.ts", "./ThisProjectUtils.ts", "./PlatformModel.ts"], function (t) {
  "use strict";

  var e, r, n, i, a, s, o, u, p, c, m, l, h, f, b, j, N, y, d, A, J, g;
  return {
    setters: [function (t) {
      e = t.applyDecoratedDescriptor, r = t.inheritsLoose, n = t.initializerDefineProperty, i = t.assertThisInitialized, a = t.createClass, s = t.asyncToGenerator, o = t.regeneratorRuntime;
    }, function (t) {
      u = t.cclegacy, p = t._decorator, c = t.UIOpacity, m = t.Label, l = t.Tween, h = t.tween;
    }, function (t) {
      f = t.default;
    }, function (t) {
      b = t.default;
    }, function (t) {
      j = t.CmmUtils;
    }, function (t) {
      N = t.CmmSlotUtils;
    }, function (t) {
      y = t.SlotFrameworkEvent;
    }, function (t) {
      d = t.GameEvent;
    }, function (t) {
      A = t.default;
    }, function (t) {
      J = t.delay;
    }, function (t) {
      g = t.default;
    }],
    execute: function () {
      var w, x, P, T, v, E, k, C, I;
      u._RF.push({}, "85af9cecWRPbYgyLo/H6nOr", "JpBarView", void 0);
      var O = p.ccclass,
        R = p.property;
      t("JpBarView", (w = O("JpBarView"), x = R(c), P = R(m), T = R(m), w((k = e((E = function (t) {
        function e() {
          for (var e, r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
          return e = t.call.apply(t, [this].concat(a)) || this, n(e, "jpInfoOpacity", k, i(e)), n(e, "jpNameText", C, i(e)), n(e, "JpNumberText", I, i(e)), e.jpIndex = 0, e.jpNumberArray = [0, 0, 0, 0, 0], e.switchJPAnimController = null, e.tweenMap = new Map(), e;
        }
        r(e, t);
        var u = e.prototype;
        return u.onLoad = function () {
          t.prototype.onLoad.call(this);
        }, u.start = function () {
          this.init();
        }, u.onDestroy = function () {
          this.removeEvents(), t.prototype.onDestroy.call(this);
        }, u.removeEvents = function () {
          this.off(d.PARSER_REPLAY_COMPLETED), this.off(y.NOTIFY_JACKPOT_RESPONSE), this.off(y.CLICK_GAME_LOADING_CONFIRM_BTN);
        }, u.init = function () {
          var t = s(o().mark(function t() {
            var e;
            return o().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (null !== this.JpNumberText) {
                    t.next = 5;
                    break;
                  }
                  return t.next = 3, J(.3);
                case 3:
                  t.next = 0;
                  break;
                case 5:
                  this.JpNumberText.string = "0.00", A.isReplay && ((e = this.data.replayData.betData.replayMeta.pool)["jp-mini"] && (this.jpNumberArray[1] = e["jp-mini"]), e["jp-minor"] && (this.jpNumberArray[2] = e["jp-minor"]), e["jp-major"] && (this.jpNumberArray[3] = e["jp-major"]), e["jp-grand"] && (this.jpNumberArray[4] = e["jp-grand"]), this.updateJPNumber()), this.switchJPAnimController = this.switchJPAnim();
                case 8:
                case "end":
                  return t.stop();
              }
            }, t, this);
          }));
          return function () {
            return t.apply(this, arguments);
          };
        }(), u.setJackpotValue = function (t) {
          var e = t.data;
          this.jpNumberArray[1] = e["jp-mini"], this.jpNumberArray[2] = e["jp-minor"], this.jpNumberArray[3] = e["jp-major"], this.jpNumberArray[4] = e["jp-grand"];
        }, u.dynamicEasingTime = function (t, e, r, n) {
          var i = parseFloat(t.string.replace(/,/g, ""));
          if (0 !== i) {
            if (this.tweenMap.get(r) && l.stopAllByTag(j.hashCode(r)), i > e) t.string = N.formatNumber(e, !0, !0, 2, n);else if (e - i > 100) t.string = N.formatNumber(e, !0, !0, 2, n);else {
              var a = {
                  label: t,
                  start: i,
                  end: e,
                  tweenTime: .5,
                  digital: 2,
                  useThousandsSeparator: !0,
                  isRounding: !1,
                  callback: null,
                  tag: j.hashCode(r)
                },
                s = N.tweenJPNum(a);
              this.tweenMap.set(r, s);
            }
          } else t.string = N.formatNumber(e, !0, !0, 2, n);
        }, u.switchJPAnim = function () {
          var t = s(o().mark(function t() {
            var e,
              r = this;
            return o().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return e = !1, .5, 3, .5, function () {
                    var t = s(o().mark(function t() {
                      return o().wrap(function (t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            r.jpInfoOpacity.opacity = 0;
                          case 1:
                            if (e) {
                              t.next = 19;
                              break;
                            }
                            return r.switchJP(), r.updateJPName(), r.updateJPNumber(), t.next = 7, new Promise(function (t) {
                              h(r.jpInfoOpacity).to(.5, {
                                opacity: 255
                              }).call(function () {
                                return t();
                              }).start();
                            });
                          case 7:
                            if (!e) {
                              t.next = 9;
                              break;
                            }
                            return t.abrupt("break", 19);
                          case 9:
                            return t.next = 11, J(3);
                          case 11:
                            if (!e) {
                              t.next = 13;
                              break;
                            }
                            return t.abrupt("break", 19);
                          case 13:
                            return t.next = 15, new Promise(function (t) {
                              h(r.jpInfoOpacity).to(.5, {
                                opacity: 0
                              }).call(function () {
                                return t();
                              }).start();
                            });
                          case 15:
                            if (!e) {
                              t.next = 17;
                              break;
                            }
                            return t.abrupt("break", 19);
                          case 17:
                            t.next = 1;
                            break;
                          case 19:
                          case "end":
                            return t.stop();
                        }
                      }, t);
                    }));
                    return function () {
                      return t.apply(this, arguments);
                    };
                  }()(), t.abrupt("return", {
                    stop: function () {
                      e = !0;
                    }
                  });
                case 7:
                case "end":
                  return t.stop();
              }
            }, t);
          }));
          return function () {
            return t.apply(this, arguments);
          };
        }(), u.switchJP = function () {
          this.jpIndex++, this.jpIndex >= 5 && (this.jpIndex = 1);
        }, u.updateJPName = function () {
          switch (this.jpIndex) {
            case 1:
              this.jpNameText.string = "MINI";
              break;
            case 2:
              this.jpNameText.string = "MINOR";
              break;
            case 3:
              this.jpNameText.string = "MAJOR";
              break;
            case 4:
              this.jpNameText.string = "GRAND";
          }
        }, u.updateJPNumber = function () {
          switch (this.jpIndex) {
            case 1:
              this.JpNumberText.string = this.formatJPNumber(.999 * this.jpNumberArray[1], !0), this.dynamicEasingTime(this.JpNumberText, this.jpNumberArray[1], "jp-mini", !0);
              break;
            case 2:
              this.JpNumberText.string = this.formatJPNumber(.999 * this.jpNumberArray[2], !0), this.dynamicEasingTime(this.JpNumberText, this.jpNumberArray[2], "jp-minor", !0);
              break;
            case 3:
              this.JpNumberText.string = this.formatJPNumber(.999 * this.jpNumberArray[3], !1), this.dynamicEasingTime(this.JpNumberText, this.jpNumberArray[3], "jp-major", !1);
              break;
            case 4:
              this.JpNumberText.string = this.formatJPNumber(.999 * this.jpNumberArray[4], !1), this.dynamicEasingTime(this.JpNumberText, this.jpNumberArray[4], "jp-grand", !1);
          }
        }, u.formatJPNumber = function (t, e) {
          return "" + N.formatNumber(t, !0, !0, 2, e);
        }, u.reset = function () {}, u.setData = function (t) {}, u.show = function () {
          this.node.active = !0, this.switchJPAnimController.stop(), this.switchJPAnimController = this.switchJPAnim();
        }, u.hide = function () {
          this.node.active = !1, this.switchJPAnimController.stop();
        }, u.addEvents = function () {
          var e = this;
          t.prototype.addEvents.call(this), this.on(y.NOTIFY_JACKPOT_RESPONSE, j.throttle(function (t) {
            A.isReplay || e.setJackpotValue(t.data);
          })), this.on(y.CLICK_GAME_LOADING_CONFIRM_BTN, function (t) {
            0 == g.getData().jackpotOn && (e.node.active = !1);
          }), this.on(d.PARSER_REPLAY_COMPLETED, function (t) {
            var r = e.data.replayData.betData.replayMeta.pool;
            r["jp-mini"] && (e.jpNumberArray[1] = r["jp-mini"]), r["jp-minor"] && (e.jpNumberArray[2] = r["jp-minor"]), r["jp-major"] && (e.jpNumberArray[3] = r["jp-major"]), r["jp-grand"] && (e.jpNumberArray[4] = r["jp-grand"]), e.updateJPNumber();
          });
        }, a(e, [{
          key: "data",
          get: function () {
            return App.dataCenter.get(b);
          }
        }]), e;
      }(f)).prototype, "jpInfoOpacity", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), C = e(E.prototype, "jpNameText", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), I = e(E.prototype, "JpNumberText", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null;
        }
      }), v = E)) || v));
      u._RF.pop();
    }
  };
});
