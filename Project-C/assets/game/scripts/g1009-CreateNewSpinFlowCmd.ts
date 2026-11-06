// @ts-nocheck
// Project-C simulation hooks v1; original nonlocal behavior retained.
;
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/main-Flow";
import * as _dependency5 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency6 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency7 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency8 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency9 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency0 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency1 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-type2";
import * as _dependency12 from "../../shared/scripts/slotFramework-MathUtil";
import * as _dependency13 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency14 from "./g1009-GameConfigModel";
import * as _dependency15 from "./g1009-GameData";
import * as _dependency16 from "./g1009-GameEvent";
import * as _dependency17 from "./g1009-types";
import * as _dependency18 from "./g1009-FlowIDs";
var _export;
export { _export as default };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      _export = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var a, e, n, i, s, o, l, u, r, d, p, c, S, f, A, E, m, _, I, g, h, T;
_dependency2.cclegacy._RF.push({}, "1310bvF0/5ICKOvJZ6tki4I", "CreateNewSpinFlowCmd", void 0);
_publish("default", function (t) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(n, t);
  var o = n.prototype;
  return o.execute = function (t) {
    dispatch(_dependency16.GameEvent.SPIN_START), this.data.isSendOutEarlyFlag = !1, this.data.isSendClose = !1;
    var a = this.createSpinFlow(t);
    App.flowManager.registerFlow(a);
  }, o.createSpinFlow = function (t) {
    var a = new App.flowManager.Flow(_dependency18.FlowIDs.SPIN_FLOW);
    return App.uiManager.IsOnlyGameViewOpen("GameView") ? (dispatch(_dependency9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency11.ESpinStatus.SPINING
    }), t.data.next ? this.nextSpinFlow(a, t) : this.firstSpinFlow(a, t), a) : (Log.e("spin前提不能有其他UI在畫面上，所以不執行 SpinFlow"), a);
  }, o.firstSpinFlow = function (t, a) {
    var e = a.data,
      n = e.spinId,
      o = e.test,
      l = _dependency14.default.getData().winAmountTime,
      u = {
        ratioIndex: _dependency8.default.ratioIndex,
        ratioValue: _dependency8.default.ratioValue,
        stakeIndex: _dependency8.default.stakeIndex,
        stakeValue: _dependency8.default.stakeValue
      };
    if (0 === _dependency1.default.getData().player.balance.amount && this.data.currentGameType === _dependency17.EGameType.MAIN_GAME && !this.data.getData().isResuming) {
      var p = {
          text: App.getLanguage("insufficientFundError", [], _dependency3.EBundles[_dependency3.EBundles.wrapper]),
          confirmCb: function () {
            S();
          },
          bbrCb: function () {
            S();
          }
        },
        S = function () {
          dispatch(_dependency9.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
            data: !0
          }), dispatch(_dependency9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
            data: _dependency11.ESpinStatus.IDLE
          });
        };
      return this.data.isOpenEarlyFlag = !1, this.data.isSendOutEarlyFlag = !1, App.gameAlert.show(p), void dispatch(_dependency9.SlotFrameworkEvent.STOP_AUTO_SPIN);
    }
    if (!this.checkBalance() && this.data.currentGameType === _dependency17.EGameType.MAIN_GAME && !this.data.getData().isResuming) {
      var A = {
          text: App.getLanguage("insufficientFund", [], _dependency3.EBundles[_dependency3.EBundles.wrapper]),
          confirmCb: function () {
            E();
          },
          bbrCb: function () {
            E();
          }
        },
        E = function () {
          dispatch(_dependency9.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
            data: !0
          }), dispatch(_dependency9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
            data: _dependency11.ESpinStatus.IDLE
          });
        };
      return this.data.isSendOutEarlyFlag = !1, this.data.isOpenEarlyFlag = !1, App.gameAlert.show(A), void dispatch(_dependency9.SlotFrameworkEvent.STOP_AUTO_SPIN);
    }
    this.data.currentGameType === _dependency17.EGameType.MAIN_GAME && (_dependency1.default.amount = null != n && "" != n ? this.getAfterBuyFeatureBalance() : this.getAfterBettingBalance()), n || t.add(_dependency4.FlowTrigger.CONCURRENT, new _dependency9.SlotFrameworkEvent(_dependency9.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: 0,
      tweenTime: l
    }, {
      autoComplete: !0
    })), this.calculateAutoSpin(), t.add(_dependency4.FlowTrigger.CONCURRENT, new _dependency16.GameEvent(_dependency16.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new _dependency16.GameEvent(_dependency9.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null, {
      autoComplete: !0
    }));
    var _ = _dependency1.default.amount;
    t.add(_dependency4.FlowTrigger.CONCURRENT, new _dependency16.GameEvent(_dependency9.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
      balance: _
    }, {
      autoComplete: !0
    })), this.data.isOpenEarlyFlag ? t.add(_dependency4.FlowTrigger.AFTER_PREVIOUS, new _dependency16.GameEvent(_dependency16.GameEvent.SHOW_SYMBOLS_OUT_ANIM), _dependency4.FlowTrigger.AFTER_PREVIOUS, new _dependency16.GameEvent(_dependency16.GameEvent.EARLY_DATA_PARSER_TO_SPIN_DATA, null, {
      autoComplete: !0
    })) : t.add(_dependency4.FlowTrigger.AFTER_PREVIOUS, new _dependency16.GameEvent(_dependency16.GameEvent.SHOW_SYMBOLS_OUT_ANIM), _dependency4.FlowTrigger.CONCURRENT, new _dependency16.GameEvent(_dependency9.SlotFrameworkEvent.SEND_SPIN_REQUEST, {
      spinId: n,
      stakeVO: u,
      test: o,
      updateStake: this.needUpdateStake()
    }, {
      autoComplete: !0
    }));
  }, o.nextSpinFlow = function (t, a) {
    if (this.data.setNextSpinData(), this.data.currSpinData.action == _dependency17.EActionType.FREE_GAME && this.data.preSpinData.winSymbols && 0 == this.data.preSpinData.winSymbols.length) {
      if (this.data.preSpinData.freeGameCount != this.data.getData().gameState.freeGameCount) for (var e = this.data.preSpinData.timesSymbols.slice(), n = 0; n < e.length; n++) {
        var i = e[n];
        i.lock && 1 == i.lock && dispatch(_dependency16.GameEvent.TIMES_LOCK_OUT, i.symbolPos);
      }
      this.data.getData().parser.isHaveLockSymbol = this.data.getData().parser.lockTimesSymbols.size > 0, t.add(_dependency4.FlowTrigger.CONCURRENT, new _dependency16.GameEvent(_dependency16.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0
      }), new _dependency16.GameEvent(_dependency9.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null, {
        autoComplete: !0
      }));
    }
    if (this.data.currSpinData.action == _dependency17.EActionType.SUPER_GAME && this.data.preSpinData.winSymbols && 0 == this.data.preSpinData.winSymbols.length) {
      if (this.data.preSpinData.superMainGameCount != this.data.getData().gameState.superMainGameCount) for (var o = this.data.preSpinData.timesSymbols.slice(), l = 0; l < o.length; l++) {
        var u = o[l];
        u.lock && 1 == u.lock && dispatch(_dependency16.GameEvent.TIMES_LOCK_OUT, u.symbolPos);
      }
      this.data.getData().parser.isHaveLockSymbol = this.data.getData().parser.lockTimesSymbols.size > 0, t.add(_dependency4.FlowTrigger.CONCURRENT, new _dependency16.GameEvent(_dependency16.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0
      }), new _dependency16.GameEvent(_dependency9.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null, {
        autoComplete: !0
      }));
    }
    t.add(_dependency4.FlowTrigger.AFTER_PREVIOUS, new _dependency16.GameEvent(_dependency16.GameEvent.CREATE_STOP_SPIN_FLOW, null, {
      autoComplete: !0
    }));
  }, o.checkBalance = function () {
    var t = {
        ratioIndex: _dependency8.default.ratioIndex,
        ratioValue: _dependency8.default.ratioValue,
        stakeIndex: _dependency8.default.stakeIndex,
        stakeValue: _dependency8.default.stakeValue
      },
      a = t.stakeValue,
      e = t.ratioValue,
      n = _dependency0.default.getData().winlineDefs.length,
      i = _dependency12.default.multiply(e, a, n);
    return _dependency1.default.getData().player.balance.amount - i >= 0;
  }, o.needUpdateStake = function () {
    var t = {
        stakeIndex: _dependency10.default.stakeIndex,
        ratioIndex: _dependency10.default.ratioIndex
      },
      a = {
        stakeIndex: _dependency8.default.stakeIndex,
        ratioIndex: _dependency8.default.ratioIndex
      },
      e = _dependency13.ObjectUtils.diffObjects(t, a);
    return Object.keys(e).length > 0;
  }, o.calculateAutoSpin = function () {
    if (_dependency6.default.active && _dependency6.default.spinsRemaining > 0) {
      if (this.data.currentGameType === _dependency17.EGameType.FREE_GAME) return;
      _dependency6.default.spinsRemaining--;
    }
  }, o.getAfterBettingBalance = function () {
    var t = {
        ratioIndex: _dependency8.default.ratioIndex,
        ratioValue: _dependency8.default.ratioValue,
        stakeIndex: _dependency8.default.stakeIndex,
        stakeValue: _dependency8.default.stakeValue
      },
      a = t.stakeValue,
      e = t.ratioValue,
      n = _dependency0.default.getData().winlineDefs.length,
      i = _dependency12.default.multiply(e, a, n);
    return _dependency1.default.getData().player.balance.amount - i;
  }, o.getAfterBuyFeatureBalance = function () {
    if (globalThis.ProjectCCreatorLocalBackend && globalThis.ProjectCCreatorLocalBackend.installed) {
      const state = this.data.getData();
      const index = state.currentBuyFeatureIndex;
      const feature = state.definition.buyFeature[index];
      if (!feature) throw new RangeError('Invalid Project-C feature selection');
      const stake = _dependency12.default.multiply(_dependency8.default.ratioValue, _dependency8.default.stakeValue, _dependency0.default.getData().winlineDefs.length);
      return _dependency1.default.getData().player.balance.amount - stake * feature.featureRate;
    }
    var t = {
        ratioIndex: _dependency8.default.ratioIndex,
        ratioValue: _dependency8.default.ratioValue,
        stakeIndex: _dependency8.default.stakeIndex,
        stakeValue: _dependency8.default.stakeValue
      },
      a = t.stakeValue,
      e = t.ratioValue,
      n = _dependency0.default.getData().winlineDefs.length,
      i = this.data.getData().definition.buyFeature,
      s = _dependency12.default.multiply(e, a, n) * i[0].featureRate;
    return _dependency1.default.getData().player.balance.amount - s;
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency15.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency7.default);
    }
  }]), n;
}(_dependency5.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
