// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "../../shared/scripts/chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "../../shared/scripts/main-Bundles";
import * as _dependency4 from "../../shared/scripts/slotFramework-ObjectUtils";
import * as _dependency5 from "../../shared/scripts/main-Flow";
import * as _dependency6 from "../../shared/scripts/main-SingletonExtends";
import * as _dependency7 from "../../shared/scripts/slotFramework-AutoPlayModel";
import * as _dependency8 from "../../shared/scripts/slotFramework-SlotFrameworkData";
import * as _dependency9 from "../../shared/scripts/slotFramework-StakeModel";
import * as _dependency0 from "../../shared/scripts/slotFramework-SlotFrameworkEvent";
import * as _dependency1 from "../../shared/scripts/slotFramework-DefinitionModel";
import * as _dependency10 from "../../shared/scripts/slotFramework-PlatformModel";
import * as _dependency11 from "../../shared/scripts/slotFramework-SettingsModel";
import * as _dependency12 from "../../shared/scripts/slotFramework-type2";
import * as _dependency13 from "./g1001-GameConfigModel";
import * as _dependency14 from "./g1001-GameData";
import * as _dependency15 from "./g1001-GameEvent";
import * as _dependency16 from "./g1001-types";
import * as _dependency17 from "./g1001-FlowIDs";
import * as _dependency18 from "../../shared/scripts/slotFramework-MathUtil";
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
var e, a, n, i, u, l, o, s, r, d, c, p, f, S, A, I, g, E, _, T, h;
_dependency2.cclegacy._RF.push({}, "8d212HFB61JQY+gFegZ3VM3", "CreateNewSpinFlowCmd", void 0);
_publish("default", function (t) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  _dependency.inheritsLoose(n, t);
  var o = n.prototype;
  return o.execute = function (t) {
    dispatch(_dependency15.GameEvent.SPIN_START), this.data.isSendOutEarlyFlag = !1, this.data.isSendClose = !1;
    var e = this.createSpinFlow(t);
    App.flowManager.registerFlow(e);
  }, o.createSpinFlow = function (t) {
    var e = new App.flowManager.Flow(_dependency17.FlowIDs.SPIN_FLOW);
    return App.uiManager.IsOnlyGameViewOpen("GameView") ? (dispatch(_dependency0.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: _dependency12.ESpinStatus.SPINING
    }), t.data.next ? this.nextSpinFlow(e, t) : this.firstSpinFlow(e, t), e) : (Log.e("spin前提不能有其他UI在畫面上，所以不執行 SpinFlow"), e);
  }, o.firstSpinFlow = function (t, e) {
    var a = e.data,
      n = a.spinId,
      u = a.cheat,
      o = _dependency13.default.getData().winAmountTime,
      s = {
        ratioIndex: _dependency9.default.ratioIndex,
        ratioValue: _dependency9.default.ratioValue,
        stakeIndex: _dependency9.default.stakeIndex,
        stakeValue: _dependency9.default.stakeValue
      };
    if (0 === _dependency10.default.getData().player.balance.amount && this.data.currentGameType === _dependency16.EGameType.MAIN_GAME && !this.data.getData().isResuming) {
      var r = {
          text: App.getLanguage("insufficientFundError", [], _dependency3.EBundles[_dependency3.EBundles.wrapper]),
          confirmCb: function () {
            p();
          },
          bbrCb: function () {
            p();
          }
        },
        p = function () {
          dispatch(_dependency0.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
            data: !0
          }), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
            data: _dependency12.ESpinStatus.IDLE
          });
        };
      return this.data.isOpenEarlyFlag = !1, this.data.isSendOutEarlyFlag = !1, App.gameAlert.show(r), void dispatch(_dependency0.SlotFrameworkEvent.STOP_AUTO_SPIN);
    }
    if (!this.checkBalance() && this.data.currentGameType === _dependency16.EGameType.MAIN_GAME && !this.data.getData().isResuming) {
      var S = {
          text: App.getLanguage("insufficientFund", [], _dependency3.EBundles[_dependency3.EBundles.wrapper]),
          confirmCb: function () {
            g();
          },
          bbrCb: function () {
            g();
          }
        },
        g = function () {
          dispatch(_dependency0.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
            data: !0
          }), dispatch(_dependency0.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
            data: _dependency12.ESpinStatus.IDLE
          });
        };
      return this.data.isSendOutEarlyFlag = !1, this.data.isOpenEarlyFlag = !1, App.gameAlert.show(S), void dispatch(_dependency0.SlotFrameworkEvent.STOP_AUTO_SPIN);
    }
    this.data.currentGameType == _dependency16.EGameType.MAIN_GAME && (_dependency10.default.amount = null != n && "" != n ? this.getAfterBuyFeatureBalance() : this.getAfterBettingBalance()), n || t.add(_dependency5.FlowTrigger.CONCURRENT, new _dependency0.SlotFrameworkEvent(_dependency0.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: 0,
      tweenTime: o
    }, {
      autoComplete: !0
    })), this.calculateAutoSpin(), t.add(_dependency5.FlowTrigger.CONCURRENT, new _dependency15.GameEvent(_dependency15.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new _dependency15.GameEvent(_dependency0.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null, {
      autoComplete: !0
    })), t.add(_dependency5.FlowTrigger.CONCURRENT, new _dependency15.GameEvent(_dependency0.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
      balance: _dependency10.default.amount
    }, {
      autoComplete: !0
    })), this.data.isOpenEarlyFlag ? t.add(_dependency5.FlowTrigger.AFTER_PREVIOUS, new _dependency15.GameEvent(_dependency15.GameEvent.SHOW_SYMBOLS_OUT_ANIM), _dependency5.FlowTrigger.AFTER_PREVIOUS, new _dependency15.GameEvent(_dependency15.GameEvent.EARLY_DATA_PARSER_TO_SPIN_DATA, null, {
      autoComplete: !0
    })) : t.add(_dependency5.FlowTrigger.AFTER_PREVIOUS, new _dependency15.GameEvent(_dependency15.GameEvent.SHOW_SYMBOLS_OUT_ANIM), _dependency5.FlowTrigger.CONCURRENT, new _dependency15.GameEvent(_dependency0.SlotFrameworkEvent.SEND_SPIN_REQUEST, {
      spinId: n,
      stakeVO: s,
      cheat: u,
      updateStake: this.needUpdateStake()
    }, {
      autoComplete: !0
    }));
  }, o.nextSpinFlow = function (t, e) {
    this.data.setNextSpinData(), "freeSpin" == this.data.currSpinData.action && this.data.preSpinData.winSymbols && 0 == this.data.preSpinData.winSymbols.length && t.add(_dependency5.FlowTrigger.CONCURRENT, new _dependency15.GameEvent(_dependency15.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new _dependency15.GameEvent(_dependency0.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null, {
      autoComplete: !0
    })), t.add(_dependency5.FlowTrigger.AFTER_PREVIOUS, new _dependency15.GameEvent(_dependency15.GameEvent.CREATE_STOP_SPIN_FLOW, null, {
      autoComplete: !0
    }));
  }, o.checkBalance = function () {
    var t = {
        ratioIndex: _dependency9.default.ratioIndex,
        ratioValue: _dependency9.default.ratioValue,
        stakeIndex: _dependency9.default.stakeIndex,
        stakeValue: _dependency9.default.stakeValue
      },
      e = t.stakeValue,
      a = t.ratioValue,
      n = _dependency1.default.getData().winlineDefs.length,
      i = _dependency18.default.multiply(a, e, n);
    return _dependency10.default.getData().player.balance.amount - i >= 0;
  }, o.needUpdateStake = function () {
    var t = {
        stakeIndex: _dependency11.default.stakeIndex,
        ratioIndex: _dependency11.default.ratioIndex
      },
      e = {
        stakeIndex: _dependency9.default.stakeIndex,
        ratioIndex: _dependency9.default.ratioIndex
      },
      a = _dependency4.ObjectUtils.diffObjects(t, e);
    return Object.keys(a).length > 0;
  }, o.calculateAutoSpin = function () {
    if (_dependency7.default.active && _dependency7.default.spinsRemaining > 0) {
      if (this.data.currentGameType === _dependency16.EGameType.FREE_GAME) return;
      _dependency7.default.spinsRemaining--;
    }
  }, o.getAfterBettingBalance = function () {
    var t = {
        ratioIndex: _dependency9.default.ratioIndex,
        ratioValue: _dependency9.default.ratioValue,
        stakeIndex: _dependency9.default.stakeIndex,
        stakeValue: _dependency9.default.stakeValue
      },
      e = t.stakeValue,
      a = t.ratioValue,
      n = _dependency1.default.getData().winlineDefs.length,
      i = _dependency18.default.multiply(a, e, n);
    return _dependency10.default.getData().player.balance.amount - i;
  }, o.getAfterBuyFeatureBalance = function () {
    var t = {
        ratioIndex: _dependency9.default.ratioIndex,
        ratioValue: _dependency9.default.ratioValue,
        stakeIndex: _dependency9.default.stakeIndex,
        stakeValue: _dependency9.default.stakeValue
      },
      e = t.stakeValue,
      a = t.ratioValue,
      n = _dependency1.default.getData().winlineDefs.length,
      i = this.data.getData().definition.buyFeature,
      u = _dependency18.default.multiply(a, e, n) * i[0].featureRate;
    return _dependency10.default.getData().player.balance.amount - u;
  }, _dependency.createClass(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency14.default);
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), n;
}(_dependency6.SingletonExtends).instance());
_dependency2.cclegacy._RF.pop();
