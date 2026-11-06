// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
import * as _dependency2 from "./main-ReelDataSetting";
import * as _dependency3 from "./main-SymbolBase";
import * as _dependency4 from "./main-ReelEnum";
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
var e, i, o, n, s, l;
_dependency.cclegacy._RF.push({}, "f79c1p9PL5G5YvBHjcQ58lp", "ExplodeReelController", void 0);
_publish("default", function () {
  function t(t) {
    this.durationList = [.6, .5, .3, .3], this.delayFinishList = [.5, .45, .35, .35], this.symbolDelay = .05, this.easing = "bounceOut", this.reelsController = void 0, this.reelsController = t;
  }
  var e = t.prototype;
  return e.startExplode = function () {
    this.reelsController.reelList.forEach(function (t) {
      t.initSymbolListPosition();
    }), this.changeExplodeSymbolList();
  }, e.changeExplodeSymbolList = function () {
    var t = this;
    this.forEach(function (e, o, n) {
      var r = t.reelsController.reelList[e],
        a = n.getComponent(_dependency3.SymbolBase);
      if (a.isExplode) {
        a.isExplode = !1;
        var c = o + r.singleReelSetting.topCount;
        r.symbolList.splice(c, 1);
        var h = r.initPositionList[0].clone();
        if (r.singleReelSetting.scrollDirection === _dependency4.EScrollDirection.DOWN) {
          r.countDownIndex(), h = h.add(_dependency.v3(0, r.reelSetting.symbolSetting.symbolHeight, 0));
          var u = void 0;
          r.ready_cascade_frame.length > 0 && (u = r.ready_cascade_frame.pop());
          var y = r.checkSymbolId(n, u);
          y.setPosition(h), r.symbolList.splice(r.singleReelSetting.topCount, 0, y);
        } else {
          r.countUpIndex(), h = h.subtract(_dependency.v3(0, r.reelSetting.symbolSetting.symbolHeight));
          var d = r.checkSymbolId(n, void 0);
          d.setPosition(h), r.symbolList.push(d);
        }
      }
    }), this.beforeDropAnimation(), this.startDropAnimation();
  }, e.beforeDropAnimation = function () {}, e.startDropAnimation = function () {
    var t = this,
      e = !0,
      i = _dependency2.ReelDataSettingObj.getSpeedIndex(),
      o = this.durationList[i],
      s = this.delayFinishList[i];
    this.reelsController.reelList.forEach(function (i) {
      for (var n = 0, l = i.symbolList.length - 1; l >= 0; l--) {
        var r = i.symbolList[l],
          a = i.initPositionList[l].clone();
        r.y !== a.y && (e = t.dropSymbolAnimation({
          symbolNode: r,
          isFirst: e,
          delay: n,
          vec2: a,
          duration: o,
          delayFinish: s
        })), n += t.symbolDelay;
      }
    });
  }, e.dropSymbolAnimation = function (t) {
    var e = this,
      i = _dependency.tween(t.symbolNode).bindNodeState(false).delay(t.delay).to(t.duration, {
        y: t.vec2.y
      }, {
        easing: this.easing
      });
    return t.isFirst && (t.isFirst = !1, i.delay(t.delayFinish), i.call(function () {
      return e.finish();
    })), i.start(), t.isFirst;
  }, e.forEach = function (t) {
    for (var e = this.reelsController.reelList.length, i = 0; i < e; i++) for (var o = this.reelsController.reelList[i].getMidSymbolList(), n = o.length, s = 0; s < n; s++) t(i, s, o[s]);
  }, e.finish = function () {}, t;
}());
_dependency.cclegacy._RF.pop();
