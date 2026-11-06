// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-UIView";
import * as _dependency4 from "./main-Decorators";
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
var e, t, o, h, n, a, s, r, c, l, g, p, d, w;
var f, u, C, v, m, L, x;
_dependency2.cclegacy._RF.push({}, "2edc4RzmBFPh5IV9wXeS7MI", "KLineGraphView", void 0);
var M = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", (f = M("KLineGraphView"), u = _dependency4.inject("content/chartView", _dependency2.Node), C = _dependency4.inject("content/chartView/graphics", _dependency2.Graphics), f((L = _dependency.applyDecoratedDescriptor((m = function (i) {
  var _nativeConstructor = e;
  function e() {
    for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
    return e = Reflect.construct(i, [this].concat(n).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "chartView", L, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "graphics", x, _dependency.assertThisInitialized(e)), e.kLineData = [], e.config = {
      candleWidth: 10,
      candleGap: 5,
      bullishColor: _dependency2.Color.GREEN,
      bearishColor: _dependency2.Color.RED,
      lineWidth: 3,
      axisColor: _dependency2.Color.WHITE,
      axisLineWidth: 3
    }, e.padding = 40, e;
  }
  _dependency.inheritsLoose(e, i), e.getPrefabUrl = function () {
    return "prefabs/view/KLineGraphView";
  };
  var n = e.prototype;
  return n.onLoad = function () {
    i.prototype.onLoad.call(this);
  }, n.start = function () {}, n.onDestroy = function () {
    i.prototype.onDestroy.call(this);
  }, n.show = function (e) {
    i.prototype.show.call(this, e), this.init();
  }, n.init = function () {
    this.kLineData = [{
      open: 97,
      close: 102,
      high: 105,
      low: 95,
      date: "8/1"
    }, {
      open: 110,
      close: 108,
      high: 115,
      low: 105,
      date: "8/2"
    }, {
      open: 105,
      close: 107,
      high: 110,
      low: 100,
      date: "8/3"
    }, {
      open: 115,
      close: 112,
      high: 120,
      low: 110,
      date: "8/4"
    }, {
      open: 103,
      close: 105,
      high: 108,
      low: 98,
      date: "8/5"
    }, {
      open: 98,
      close: 101,
      high: 104,
      low: 94,
      date: "8/6"
    }, {
      open: 120,
      close: 115,
      high: 125,
      low: 110,
      date: "8/7"
    }, {
      open: 110,
      close: 102,
      high: 180,
      low: 10,
      date: "8/8"
    }, {
      open: 92,
      close: 95,
      high: 98,
      low: 90,
      date: "8/9"
    }, {
      open: 107,
      close: 110,
      high: 115,
      low: 105,
      date: "8/10"
    }, {
      open: 100,
      close: 102,
      high: 105,
      low: 95,
      date: "8/11"
    }, {
      open: 95,
      close: 97,
      high: 100,
      low: 90,
      date: "8/12"
    }, {
      open: 112,
      close: 110,
      high: 118,
      low: 105,
      date: "8/13"
    }, {
      open: 105,
      close: 108,
      high: 112,
      low: 102,
      date: "8/14"
    }, {
      open: 102,
      close: 100,
      high: 105,
      low: 95,
      date: "8/15"
    }, {
      open: 100,
      close: 98,
      high: 105,
      low: 92,
      date: "8/16"
    }, {
      open: 108,
      close: 110,
      high: 115,
      low: 105,
      date: "8/17"
    }, {
      open: 115,
      close: 112,
      high: 120,
      low: 110,
      date: "8/18"
    }, {
      open: 99,
      close: 100,
      high: 103,
      low: 95,
      date: "8/19"
    }, {
      open: 105,
      close: 108,
      high: 110,
      low: 100,
      date: "8/20"
    }, {
      open: 95,
      close: 97,
      high: 100,
      low: 90,
      date: "8/21"
    }, {
      open: 102,
      close: 100,
      high: 105,
      low: 95,
      date: "8/22"
    }, {
      open: 90,
      close: 92,
      high: 95,
      low: 88,
      date: "8/23"
    }, {
      open: 115,
      close: 112,
      high: 118,
      low: 110,
      date: "8/24"
    }, {
      open: 105,
      close: 107,
      high: 112,
      low: 102,
      date: "8/25"
    }, {
      open: 110,
      close: 108,
      high: 115,
      low: 105,
      date: "8/26"
    }, {
      open: 100,
      close: 102,
      high: 105,
      low: 95,
      date: "8/27"
    }, {
      open: 97,
      close: 100,
      high: 103,
      low: 95,
      date: "8/28"
    }, {
      open: 115,
      close: 112,
      high: 118,
      low: 110,
      date: "8/29"
    }, {
      open: 0,
      close: 0,
      high: 0,
      low: 0,
      date: "8/30"
    }, {
      open: 102,
      close: 100,
      high: 105,
      low: 95,
      date: "8/31"
    }], this.drawKLineGraph();
  }, n.drawKLineGraph = function () {
    var i = this;
    this.graphics && 0 !== this.kLineData.length ? (this.graphics.clear(), this.drawXAxis(), this.drawYAxis(), this.kLineData.forEach(function (e, t) {
      var o = i.padding + t * (i.config.candleWidth + i.config.candleGap),
        h = e.close > e.open;
      i.drawHighLowLine(o, e, h), i.drawCandle(o, e, h);
    })) : console.error("圖形組件未設置或無數據.");
  }, n.drawXAxis = function () {
    var i = this,
      e = this.chartView.getComponent(_dependency2.UITransform).width;
    this.chartView.getComponent(_dependency2.UITransform).height;
    this.graphics.strokeColor = this.config.axisColor, this.graphics.lineWidth = this.config.axisLineWidth;
    var t = this.padding;
    this.graphics.moveTo(this.padding, t), this.graphics.lineTo(e - this.padding - 50, t), this.graphics.stroke(), this.kLineData.forEach(function (e, o) {
      var h = parseInt(e.date.split("/")[1], 10);
      if (1 === h || h % 5 == 0) {
        var n = i.padding + o * (i.config.candleWidth + i.config.candleGap) + i.config.candleWidth / 2;
        i.drawText(h.toString(), n, t - 15);
      }
    });
  }, n.drawYAxis = function () {
    var i = this.getMaxPrice(),
      e = this.getMinPrice(),
      t = this.chartView.getComponent(_dependency2.UITransform).height - 2 * this.padding,
      o = (i - e) / 5;
    this.graphics.strokeColor = this.config.axisColor, this.graphics.lineWidth = this.config.axisLineWidth;
    var h = this.chartView.getComponent(_dependency2.UITransform).width - this.padding - 50;
    this.graphics.moveTo(h, this.padding), this.graphics.lineTo(h, t + this.padding), this.graphics.stroke();
    for (var n = 0; n <= 5; n++) {
      var a = e + n * o,
        s = this.padding + n * (t / 5);
      this.graphics.moveTo(h - 5, s), this.graphics.lineTo(h + 5, s), this.graphics.stroke();
      var c = h + 15;
      this.drawText(a.toFixed(2), c, s - 8, "left");
    }
  }, n.drawText = function (i, e, t, o) {
    void 0 === o && (o = "center");
    var h = new _dependency2.Node(),
      n = h.addComponent(_dependency2.Label);
    switch (n.string = i, n.color = this.config.axisColor, n.fontSize = 24, o) {
      case "left":
        h.getComponent(_dependency2.UITransform).setAnchorPoint(0, .5);
        break;
      case "center":
        h.getComponent(_dependency2.UITransform).setAnchorPoint(.5, .5);
        break;
      case "right":
      default:
        h.getComponent(_dependency2.UITransform).setAnchorPoint(1, .5);
    }
    h.setPosition(new _dependency2.Vec3(e, t, 0)), this.chartView.addChild(h);
  }, n.drawHighLowLine = function (i, e, t) {
    this.graphics.strokeColor = t ? this.config.bullishColor : this.config.bearishColor, this.graphics.lineWidth = this.config.lineWidth;
    var o = (this.chartView.getComponent(_dependency2.UITransform).height - 2 * this.padding) / (this.getMaxPrice() - this.getMinPrice()),
      h = this.padding + (e.low - this.getMinPrice()) * o,
      n = this.padding + (e.high - this.getMinPrice()) * o;
    this.graphics.moveTo(i + this.config.candleWidth / 2, h), this.graphics.lineTo(i + this.config.candleWidth / 2, n), this.graphics.stroke();
  }, n.drawCandle = function (i, e, t) {
    this.graphics.fillColor = t ? this.config.bullishColor : this.config.bearishColor;
    var o = (this.chartView.getComponent(_dependency2.UITransform).height - 2 * this.padding) / (this.getMaxPrice() - this.getMinPrice()),
      h = this.padding + (Math.max(e.open, e.close) - this.getMinPrice()) * o,
      n = this.padding + (Math.min(e.open, e.close) - this.getMinPrice()) * o;
    this.graphics.rect(i, n, this.config.candleWidth, h - n), this.graphics.fill();
  }, n.getMaxPrice = function () {
    return Math.max.apply(Math, this.kLineData.map(function (i) {
      return i.high;
    }));
  }, n.getMinPrice = function () {
    return Math.min.apply(Math, this.kLineData.map(function (i) {
      return i.low;
    }));
  }, e;
}(_dependency3.default)).prototype, "chartView", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = _dependency.applyDecoratedDescriptor(m.prototype, "graphics", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = m)) || v));
_dependency2.cclegacy._RF.pop();
