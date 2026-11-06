// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Bundles";
import * as _dependency4 from "./main-GameDataBase";
import * as _dependency5 from "./slotFramework-SlotFrameworkEvent";
import * as _dependency6 from "./slotFramework-DefinitionModel";
import * as _dependency7 from "./slotFramework-PlatformModel";
import * as _dependency8 from "./slotFramework-type2";
import * as _dependency9 from "./slotFramework-MathUtil";
import * as _dependency0 from "./slotFramework-StakeModel";
import * as _dependency1 from "./slotFramework-UrlModel";
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
var t, a, n, r, o, i, s, u, p, f, c, l;
_dependency2.cclegacy._RF.push({}, "ea5abokIe9IFYPUVPHrvdsU", "SlotFrameworkData", void 0);
var m = _publish("default", function (e) {
  var _nativeConstructor = n;
  function n() {
    for (var t, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
    return (t = Reflect.construct(e, [this].concat(n).slice(1), new.target || _nativeConstructor) || this).SLOT_VERSION = "1.1.2_4", t.tempJpPools = {
      "jp-mini": 0,
      "jp-minor": 0,
      "jp-major": 0,
      "jp-grand": 0
    }, t;
  }
  _dependency.inheritsLoose(n, e);
  var o = n.prototype;
  return o.init = function () {
    e.prototype.init.call(this);
    var t = _dependency1.default.getLanguageParam();
    this.data = {
      spinStatus: _dependency8.ESpinStatus.IDLE,
      filePaths: {
        commonSpDir: "assets/texture/common",
        iconSpDir: "assets/texture/locale/" + t + "/icon/",
        hadesPromoSpineDir: "assets/spines/promo/g1007",
        goldenSethPromoSpineDir: "assets/spines/promo/g1005",
        gameInterfaceSp: "assets/texture/gameinterface",
        prizeNotifySp: "assets/texture/prizeNotify",
        slotTableDir: "assets/texture/slottable",
        marqueePrefab: "prefabs/component/Marquee",
        marqueeItemPrefab: "prefabs/component/MarqueeItem",
        slotTableItemPrefab: "prefabs/component/SlotTableItem2",
        recordItemLPrefab: "prefabs/component/RecordItemL",
        recordItemPPrefab: "prefabs/component/RecordItemP",
        historyItemLPrefab: "prefabs/component/HistoryItemL",
        historyItemPPrefab: "prefabs/component/HistoryItemP",
        betToggleItemPrefab: "prefabs/component/BetToggleItem",
        jpBarLPrefab: "prefabs/ui/topBar/JpBarL",
        jpBarPPrefab: "prefabs/ui/topBar/JpBarP",
        menuLPrefab: "prefabs/ui/topBar/MenuL",
        menuPPrefab: "prefabs/ui/topBar/MenuP",
        infoBarPPrefab: "prefabs/ui/InfoBarP",
        infoBarPrefab: "prefabs/ui/InfoBar",
        spinBarPPrefab: "prefabs/ui/SpinBarP",
        spinBarPrefab: "prefabs/ui/SpinBarLandScape",
        rankingDir: "assets/texture/ranking",
        rankingItemLPrefab: "prefabs/component/RankingItemL",
        rankingItemPPrefab: "prefabs/component/RankingItemP",
        slotTablePageTableItemPrefab: "prefabs/component/SlotTablePageTabsItem",
        notifyPrefab: "prefabs/component/Notify"
      },
      isForceHideRankBtn: !1
    };
  }, o.onDestory = function () {}, o.clear = function () {}, o.debug = function () {
    Log.d("" + this.module);
  }, o.checkBalance = function () {
    var e = {
        ratioIndex: _dependency0.default.ratioIndex,
        ratioValue: _dependency0.default.ratioValue,
        stakeIndex: _dependency0.default.stakeIndex,
        stakeValue: _dependency0.default.stakeValue
      },
      t = e.stakeValue,
      a = e.ratioValue,
      n = _dependency6.default.getData().winlineDefs ? _dependency6.default.getData().winlineDefs.length : 1,
      r = _dependency9.default.multiply(a, t, n);
    return r = _dependency0.default.getData().extraStakeTimes * r, _dependency7.default.getData().player.balance.amount - r >= 0;
  }, o.setForceHideRankBtn = function () {
    this.data.isForceHideRankBtn = !0;
  }, o.getSpriteFrame = function (e, t, a) {
    var n = App.cache.get(this.module, t).data,
      r = null;
    if (n.forEach(function (e) {
      e.name === a && (r = e);
    }), !r) throw new Error("NOT FIND 所需SpriteFrame " + t);
    return r;
  }, o.checkBalanceAndAlert = function (e) {
    var t = !0,
      a = _dependency7.default.getData().player.balance.amount;
    if (0 === a || !this.checkBalance()) {
      var n = 0 === a ? "insufficientFundError" : "insufficientFund",
        o = function () {
          dispatch(_dependency5.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
            data: !0
          });
        },
        s = {
          text: App.getLanguage(n, [], _dependency3.EBundles[_dependency3.EBundles.wrapper]),
          confirmCb: o,
          bbrCb: o
        };
      App.gameAlert.show(s), dispatch(_dependency5.SlotFrameworkEvent.STOP_AUTO_SPIN), t = !1;
    }
    return e && e(), t;
  }, o.addEvents = function () {
    var e = this;
    this.on(_dependency5.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (t) {
      var a = t.data;
      e.spinStatus = a;
    });
  }, _dependency.createClass(n, [{
    key: "spinStatus",
    get: function () {
      return this.data.spinStatus;
    },
    set: function (e) {
      this.data.spinStatus = e;
    }
  }]), n;
}(_dependency4.GameDataBase));
m.module = _dependency3.EBundles[_dependency3.EBundles.slotFramework], m.allowReplayGameList = ["egyptian-mythology", "materialistic-women", "egyptian-mythology-golang", "golden-seth", "scarlet-three-kingdoms", "hades", "tiger-princess"], m.disableClickGameList = ["son-go-ku", "wuxia-caishen"], _dependency2.cclegacy._RF.pop();
