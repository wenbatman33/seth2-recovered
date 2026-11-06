// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-BaseModel";
import * as _dependency4 from "./slotFramework-ObjectUtils";
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
var l, n, a, e, u;
_dependency2.cclegacy._RF.push({}, "0b0a6LuKH9HEZcbT/gFrj5X", "PlatformModel", void 0);
var o = function (t) {
  var _nativeConstructor = a;
  function a() {
    var l;
    return (l = Reflect.construct(t, [], new.target || _nativeConstructor) || this).originData = null, l.data = {
      game: {
        stakeValues: [],
        ratioValues: []
      },
      player: {
        name: null,
        id: null,
        uid: null,
        avatar: null,
        avatarUrl: null,
        balance: {
          currency: null,
          amount: null,
          gemAmount: null,
          betAmount: null,
          updatedAt: null
        },
        settings: {
          advancedSettings: {
            sounds: {
              background: null,
              backgroundVolume: null,
              effect: null,
              effectVolume: null
            },
            notify: null,
            turbo: null
          },
          autoPlay: {
            numberOfPlays: [],
            stopOnWinMultiplier: null,
            stopOnBalance: null,
            stopOnFreeSpin: null,
            stopOnJackpot: null
          },
          stakeIndex: null,
          ratioIndex: null
        },
        clientSettings: null,
        nameDisplayOn: null,
        displayName: null,
        displayNameBlockTime: null
      },
      gemSystem: null,
      table: {
        roomId: null,
        number: null,
        status: null,
        detail: null,
        lock: null
      },
      slotTablesOn: null,
      tables: null,
      slotTableUpdated: null,
      jackpotOn: !0,
      avatars: [],
      theme: null,
      isInstantClose: null,
      betRecordUrl: null,
      slotRankOn: !1,
      tableMeta: {
        currentPage: null,
        tablePerPage: null,
        totalPages: null,
        totalTableCount: null
      }
    }, l;
  }
  _dependency.inheritsLoose(a, t), a.Instance = function () {
    return this._instance || (this._instance = new a());
  };
  var e = a.prototype;
  return e.updateBalance = function (t, l) {
    void 0 === l && (l = null), l && (this.data.player.balance.updatedAt ? l > this.data.player.balance.updatedAt && (this.amount = t, this.data.player.balance.updatedAt = l) : (this.amount = t, this.data.player.balance.updatedAt = l));
  }, e.saveOriginData = function () {
    this.originData = _dependency4.ObjectUtils.clone(this.data);
  }, e.restoreCurrentData = function () {
    this.originData ? (this.data = _dependency4.ObjectUtils.clone(this.originData), this.originData = null) : console.warn("No originData to restore.");
  }, _dependency.createClass(a, [{
    key: "amount",
    get: function () {
      return this.data.player.balance.amount;
    },
    set: function (t) {
      this.data.player.balance.amount = t;
    }
  }, {
    key: "betAmount",
    get: function () {
      return this.data.player.balance.betAmount;
    },
    set: function (t) {
      this.data.player.balance.betAmount = t;
    }
  }]), a;
}(_dependency3.BaseModel);
o._instance = null;
_publish("default", o.Instance());
_dependency2.cclegacy._RF.pop();
