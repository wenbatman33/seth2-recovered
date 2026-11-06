import "./main-Application";
// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./slotFramework-LabelTextAlignFix";
import * as _dependency4 from "./main-Bundles";
import * as _dependency5 from "./main-Resource";
import * as _dependency6 from "./main-Entry";
import * as _dependency7 from "./main-Decorators";
import * as _dependency8 from "./slotFramework-SlotFrameworkData";
import * as _dependency9 from "./slotFramework-SlotFrameworkLanguage";
import * as _dependency0 from "./slotFramework-ReadyBundleModel";
import * as _dependency1 from "./slotFramework-ReplayModel";
import * as _dependency10 from "./slotFramework-SocketModel";
import * as _dependency11 from "./slotFramework-UrlModel";
import * as _dependency12 from "./slotFramework-CmmSlotUtils";
import * as _dependency13 from "./slotFramework-AutoSpinView";
import * as _dependency14 from "./slotFramework-AvatarViewL";
import * as _dependency15 from "./slotFramework-AvatarViewP";
import * as _dependency16 from "./slotFramework-GameRulesView";
import * as _dependency17 from "./slotFramework-GameRulesViewP";
import * as _dependency18 from "./slotFramework-NickNameView";
import * as _dependency19 from "./slotFramework-NoTouchingView";
import * as _dependency20 from "./slotFramework-RankingViewL";
import * as _dependency21 from "./slotFramework-RankingViewP";
import * as _dependency22 from "./slotFramework-RecordViewL";
import * as _dependency23 from "./slotFramework-RecordViewP";
import * as _dependency24 from "./slotFramework-SettingView";
import * as _dependency25 from "./slotFramework-SlotFrameworkView";
import * as _dependency26 from "./main-UrlUtils";
import * as _dependency27 from "./slotFramework-GameNameMap";
import * as _dependency28 from "./main-Config";
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, t, n, r, a, l, u, o, i, d, b, s, f, p, c, g, y, m, w, P, h, S, v, V, k, T, M, L, I, B, R, A, E, F, O;
var C;
_dependency2.cclegacy._RF.push({}, "bbf64fvbHRF+53I7dAdIX0y", "SlotFrameworkEntry", void 0);
_dependency7.registerEntry("SlotFrameworkEntry", _dependency4.EBundles[_dependency4.EBundles.slotFramework], _dependency25.default)(C = function (n) {
  var _nativeConstructor = b;
  function b() {
    for (var e, t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
    return (e = Reflect.construct(n, [this].concat(r).slice(1), new.target || _nativeConstructor) || this).language = new _dependency9.SlotFrameworkLanguage(), e.viewModeMap = new Map(), e;
  }
  _dependency.inheritsLoose(b, n);
  var s = b.prototype;
  return s.addNetHandler = function () {}, s.removeNetHandler = function () {}, s.loadResources = function (e) {
    var t = this;
    _dependency2.log("loadResources");
    var n = this.data.getData().filePaths,
      o = n.notifyPrefab,
      b = n.iconSpDir,
      s = n.hadesPromoSpineDir,
      f = n.goldenSethPromoSpineDir,
      p = n.commonSpDir,
      y = n.gameInterfaceSp,
      m = n.prizeNotifySp,
      A = n.rankingDir,
      E = n.spinBarPrefab,
      F = n.spinBarPPrefab,
      O = n.infoBarPrefab,
      C = n.infoBarPPrefab,
      D = n.betToggleItemPrefab,
      N = n.marqueePrefab,
      U = n.recordItemLPrefab,
      G = n.recordItemPPrefab,
      _ = n.marqueeItemPrefab,
      j = n.slotTableItemPrefab,
      H = n.slotTableDir,
      x = n.historyItemLPrefab,
      z = n.historyItemPPrefab,
      q = n.menuLPrefab,
      Q = n.menuPPrefab,
      X = n.jpBarLPrefab,
      Z = n.jpBarPPrefab,
      J = n.rankingItemPPrefab,
      K = n.rankingItemLPrefab,
      W = n.slotTablePageTableItemPrefab,
      Y = n.prizeNotifyPrefab;
    this.loader.getLoadResources = function () {
      var e = [{
        url: "prefabs/ui/SpinBar",
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: _dependency12.CmmSlotUtils.getOrientationTarget(O, C),
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: _dependency12.CmmSlotUtils.getOrientationTarget(E, F),
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: "prefabs/ui/topBar/TopBar",
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: "prefabs/ui/topBar/TopBarP",
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: "prefabs/ui/button/ImageButton",
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: "prefabs/ui/button/SpineButton",
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: "prefabs/ui/button/SpinButton",
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: U,
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: G,
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: j,
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: "prefabs/component/ruleItem",
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: "prefabs/component/AvatarToggleItem",
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: "prefabs/component/PrizeNotify",
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: N,
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: _,
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: D,
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: W,
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        dir: y,
        bundle: t.bundle,
        type: _dependency2.SpriteFrame
      }, {
        dir: s,
        bundle: t.bundle,
        type: _dependency2.sp.SkeletonData
      }, {
        dir: f,
        bundle: t.bundle,
        type: _dependency2.sp.SkeletonData
      }, {
        dir: b,
        bundle: t.bundle,
        type: _dependency2.SpriteFrame
      }, {
        dir: p,
        bundle: t.bundle,
        type: _dependency2.SpriteFrame
      }, {
        dir: m,
        bundle: t.bundle,
        type: _dependency2.SpriteFrame
      }, {
        dir: H,
        bundle: t.bundle,
        type: _dependency2.SpriteFrame
      }, {
        dir: A,
        bundle: t.bundle,
        type: _dependency2.SpriteFrame
      }, {
        url: o,
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: Y,
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: _dependency12.CmmSlotUtils.getOrientationTarget(x, z),
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: _dependency12.CmmSlotUtils.getOrientationTarget(K, J),
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: _dependency12.CmmSlotUtils.getOrientationTarget(X, Z),
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        url: _dependency12.CmmSlotUtils.getOrientationTarget(q, Q),
        bundle: t.bundle,
        type: _dependency2.Prefab
      }, {
        preloadView: _dependency24.default,
        bundle: t.bundle
      }, {
        preloadView: _dependency12.CmmSlotUtils.getOrientationTarget(_dependency16.default, _dependency17.default),
        bundle: t.bundle
      }, {
        preloadView: _dependency18.default,
        bundle: t.bundle
      }, {
        preloadView: _dependency12.CmmSlotUtils.getOrientationTarget(_dependency14.default, _dependency15.default),
        bundle: t.bundle
      }, {
        preloadView: _dependency12.CmmSlotUtils.getOrientationTarget(_dependency22.default, _dependency23.default),
        bundle: t.bundle
      }, {
        preloadView: _dependency12.CmmSlotUtils.getOrientationTarget(_dependency20.default, _dependency21.default),
        bundle: t.bundle
      }, {
        preloadView: _dependency13.default,
        bundle: t.bundle
      }];
      return _dependency1.default.isReplay && Object.assign(e, [{
        preloadView: _dependency19.default,
        bundle: t.bundle
      }]), e;
    }, this.loader.onLoadProgress = function () {}, this.loader.onLoadComplete = function (n) {
      _dependency5.Resource.LoaderError.SUCCESS && (_dependency0.default.setComplete(_dependency4.EBundles[t.bundle]), e(), t.openNotify());
    }, this.loader.loadResources();
  }, s.openGameView = function (e) {
    n.prototype.openGameView.call(this), App.entryManager.onCheckUpdate();
  }, s.openNotify = function () {
    var e = this.data.getData().filePaths.notifyPrefab;
    App.cache.getCacheByAsync(e, _dependency2.Prefab, this.bundle).then(function (e) {
      if (e) {
        var t = _dependency2.instantiate(e);
        App.uiManager.addView(t, _dependency28.ViewZOrder.UILoading + 20);
      }
    });
  }, s.initData = function () {
    this.initUrlConfig();
  }, s.pauseMessageQueue = function () {}, s.resumeMessageQueue = function () {}, s.onEnter = function (e) {
    n.prototype.onEnter.call(this, e), Log.d("--------------onEnterLogin--------------");
  }, s.onEnterGameView = function (e) {
    n.prototype.onEnterGameView.call(this, e);
  }, s.onUnloadBundle = function () {}, s.initUrlConfig = function () {
    _dependency11.default.setSearchParams();
    var e = _dependency26.default.getTokenFromUrl(),
      t = localStorage.getItem(e);
    if (t) _dependency10.default.currentToken = t;else {
      if (_dependency26.default.hasParam("spinId")) return;
      this.getAllViewMode(), App.storage.clear(), this.saveAllViewModeToLocalStorage(), _dependency10.default.currentToken = e;
    }
  }, s.getAllViewMode = function () {
    for (var e = Object.keys(_dependency27.GameNameMap), t = 0; t < e.length; t++) {
      var n = e[t] + "_view_mode",
        r = localStorage.getItem(n);
      null != r && this.viewModeMap.set(n, r);
    }
  }, s.saveAllViewModeToLocalStorage = function () {
    var e = Object.keys(_dependency27.GameNameMap);
    Log.e("game name keys::::::", e);
    for (var t = 0; t < e.length; t++) {
      var n = e[t] + "_view_mode";
      if (this.viewModeMap.has(n)) {
        var r = this.viewModeMap.get(n);
        r && localStorage.setItem(n, r);
      }
    }
  }, _dependency.createClass(b, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(_dependency8.default);
    }
  }]), b;
}(_dependency6.Entry));
_dependency2.cclegacy._RF.pop();
