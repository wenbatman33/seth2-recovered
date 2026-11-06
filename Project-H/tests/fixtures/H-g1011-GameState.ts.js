System.register("chunks:///_virtual/GameState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./index.ts", "./AutoPlayModel.ts", "./SlotFrameworkData.ts", "./SlotFrameworkEvent.ts", "./GameData.ts", "./BonusStates.ts", "./FGStates.ts", "./MGStates.ts", "./StateHelpers.ts", "./fsm.ts"], function (t) {
  "use strict";

  var e, a, n, s, i, c, u, o, r, l;
  return {
    setters: [function (t) {
      e = t.createClass;
    }, function (t) {
      a = t.cclegacy;
    }, null, function (t) {
      n = t.default;
    }, function (t) {
      s = t.default;
    }, function (t) {
      i = t.SlotFrameworkEvent;
    }, function (t) {
      c = t.default;
    }, function (t) {
      u = t.createBonusStates;
    }, function (t) {
      o = t.createFgStates;
    }, function (t) {
      r = t.createMgStates;
    }, function (e) {
      var a = {};
      a.calculateAutoSpin = e.calculateAutoSpin, a.needUpdateStake = e.needUpdateStake, t(a);
    }, function (t) {
      l = t.StateMachine;
    }],
    execute: function () {
      a._RF.push({}, "bc13c0OlfNBlaF6QuBQOjkW", "GameState", void 0);
      t("GameState", function () {
        function t() {
          this._stateMachine = null, this._states = [].concat(r(this), o(this), u(this));
        }
        var a = t.prototype;
        return a.processCloseAutoPlay = function () {
          0 === n.spinsRemaining && (n.active = !1), n.spinsRemaining <= -1 && (n.spinsRemaining = -1), n.active ? dispatch(i.SHOW_AUTO_SPIN, {
            data: !1
          }) : (dispatch(i.SHOW_AUTO_SPIN, {
            data: !0
          }), n.spinsRemaining = 0);
        }, a.GET_ALL_STATES = function () {
          return this._states;
        }, a.getMachine = function () {
          return null == this._stateMachine && (this._stateMachine = l.from(this.GET_ALL_STATES(), {
            sharedData: App.dataCenter.get(c)
          })), this._stateMachine;
        }, e(t, [{
          key: "data",
          get: function () {
            return App.dataCenter.get(c);
          }
        }, {
          key: "slotData",
          get: function () {
            return App.dataCenter.get(s);
          }
        }, {
          key: "stateMachine",
          get: function () {
            return this._stateMachine;
          }
        }]), t;
      }());
      a._RF.pop();
    }
  };
});
