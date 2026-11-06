// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
var _export;
export { _export as roundDecimal };
var _export2;
export { _export2 as TicketBase };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "roundDecimal":
      _export = value;
      break;
    case "TicketBase":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, i, o, r, n, s, a, c, p, h, l, u, d, f, y, v, g, m, N, P, C, k, w, b, T, S, x, L;
var E, D, A, _, H, M, z, W, B, R, U, F, I, O, G, K, Y, j, J, Z, V;
_publish("roundDecimal", X), _dependency2.cclegacy._RF.push({}, "f344a+d2jhDLZmLDZ0z64Eg", "TicketBase", void 0);
var q = _dependency2._decorator.ccclass,
  Q = _dependency2._decorator.property;
function X(t, e) {
  return Math.round(Math.round(t * Math.pow(10, (e || 0) + 1)) / 10) / Math.pow(10, e || 0);
}
_publish("TicketBase", (E = q("TicketBase"), D = Q(_dependency2.Node), A = Q(_dependency2.Node), _ = Q(_dependency2.Node), H = Q({
  type: _dependency2.SpriteFrame,
  displayName: "紙屑圖案"
}), M = Q({
  type: _dependency2.Node,
  displayName: "手指節點"
}), z = Q({
  type: _dependency2.Node,
  displayName: "開獎結果節點"
}), W = Q({
  displayName: "計算進度的範圍寬度"
}), B = Q({
  displayName: "劃線寬度"
}), R = Q({
  displayName: "超過多少完成"
}), E((I = _dependency.applyDecoratedDescriptor((F = function (t) {
  var _nativeConstructor = e;
  function e() {
    for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(n).slice(1), new.target || _nativeConstructor) || this, _dependency.initializerDefineProperty(e, "maskNode", I, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "ticketNode", O, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "paperNode", G, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "paperSpriteFrame", K, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "coinNode", Y, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "resultNode", j, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "rectWidth", J, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "lineWidth", Z, _dependency.assertThisInitialized(e)), _dependency.initializerDefineProperty(e, "overProcess", V, _dependency.assertThisInitialized(e)), e.process = 0, e.paperNodePool = new _dependency2.NodePool("paper"), e.polygonPointsList = [], e.tempDrawPoints = [], e.calcDebugger = !1, e.autoPositionList = [], e._autoStep = 0, e.autoGird = {
      x: 0,
      y: 0
    }, e;
  }
  _dependency.inheritsLoose(e, t);
  var s = e.prototype;
  return s.start = function () {
    this.init();
  }, s.init = function () {
    if (this.maskNode) {
      var t = this.maskNode.getComponent(_dependency2.Mask);
      t && (t.getComponent(_dependency2.UITransform).setContentSize(0, 0), t.type = _dependency2.Mask.Type.GRAPHICS_RECT, t.inverted = !0);
    }
    this.updateAutoPositionList(), this.reset(), this.resetHitBox(), this.addEvents();
  }, s.addEvents = function () {
    var t = this;
    this.node.on(_dependency2.Node.EventType.TOUCH_START, this.touchStart, this), this.node.on(_dependency2.Node.EventType.TOUCH_MOVE, this.touchStart, this), this.node.on(_dependency2.Node.EventType.TOUCH_END, this.touchEnd, this), this.node.on(_dependency2.Node.EventType.TOUCH_CANCEL, this.touchEnd, this), _dependency2.input.on(_dependency2.Input.EventType.KEY_DOWN, function (e) {
      e.keyCode === _dependency2.KeyCode.KEY_A && t.startAuto(), e.keyCode == _dependency2.KeyCode.KEY_R && (t.reset(), t.resetHitBox());
    }, this);
  }, s.touchStart = function (t) {
    var e = this.ticketNode.getComponent(_dependency2.UITransform),
      i = t.getUILocation();
    if (this.coinNode && (this.coinNode.active = !0), e.getBoundingBoxToWorld().contains(i)) {
      var o = e.convertToNodeSpaceAR(_dependency2.v3(i.x, i.y, 0));
      return this.clearMask(_dependency2.v2(o.x, o.y)), this.startPaperAnimation(i), !0;
    }
    return this.tempDrawPoints = [], !1;
  }, s.touchEnd = function () {
    this.tempDrawPoints = [], this.calcProgress(), this.coinNode && (this.coinNode.active = !1), Log.e("current progress::::", this.process);
  }, s.startAuto = function () {
    var t = this;
    _dependency2.Tween.stopAllByTarget(this), this.touchEnd();
    this.clearMask(this.autoPositionList[0]), this.autoStep = 0;
    var e = this.autoPositionList.length - 1;
    _dependency2.tween(this).bindNodeState(false).to(2.5, {
      autoStep: e
    }, {
      onUpdate: function (e) {
        var i = Math.floor(t.autoStep);
        i > t._autoStep && (t.autoStep = i);
      }
    }).call(function () {
      t.openClear();
    }).start();
  }, s.openClear = function () {
    this.ticketNode.active = !1, this.onAutoFinish();
  }, s.onAutoFinish = function () {
    this.coinNode.active = !1, this.calcProgress();
  }, s.calcProgress = function () {
    var t = this;
    if (this.ticketNode.active) {
      var e = 0,
        i = this.ticketNode.getComponent(_dependency2.Graphics);
      this.polygonPointsList.forEach(function (o) {
        o.isHit && (e += 1, t.calcDebugger && i && (i.rect(o.rect.x, o.rect.y, o.rect.width, o.rect.height), i.fillColor = new _dependency2.Color(216, 18, 18, 255), i.fill()));
      }), this.process = Math.ceil(e / this.polygonPointsList.length * 100);
    } else this.process = 100;
  }, s.startPaperAnimation = function (t, e) {
    for (var i = this, o = _dependency2.randomRangeInt(1, 2), r = this.paperNode.getComponent(_dependency2.UITransform), n = e || r.convertToNodeSpaceAR(_dependency2.v3(t.x, t.y, 0)), s = 0; s < this.polygonPointsList.length; s++) {
      var a = this.polygonPointsList[s];
      if (_dependency2.Intersection2D.circleCircle(a.circle.position, a.circle.radius, _dependency2.v2(n.x, n.y), this.lineWidth / 2)) {
        a.isHit && (o = 0);
        break;
      }
    }
    for (var c = function () {
        var t = i.getPaperNode();
        t.active = !0, t.parent = i.paperNode, _dependency2.Tween.stopAllByTarget(t);
        _dependency2.randomRangeInt(200, -200), _dependency2.randomRangeInt(250, -250);
        var e = _dependency2.randomRangeInt(10, 5) / 10;
        t.setScale(_dependency2.v3(e, e, 1));
        var o = _dependency2.v2(n.x, n.y);
        t.setPosition(_dependency2.v3(o.x, o.y, 0));
        var r = X(e * Math.random(), 3),
          s = t.getComponent(_dependency2.UIOpacity);
        _dependency2.Tween.stopAllByTarget(s), s.opacity = 255, _dependency2.tween(s).bindNodeState(false).to(.4, {
          opacity: 0
        }).start(), _dependency2.tween(t).bindNodeState(false).to(.4, {
          position: _dependency2.v3(o.x, o.y - _dependency2.randomRangeInt(150, 70), 0),
          scale: _dependency2.v3(r, r, r),
          angle: _dependency2.randomRangeInt(90, 360)
        }).call(function () {
          t.active = !1, i.paperNodePool.put(t);
        }).start();
      }, p = 0; p < o; p++) c();
  }, s.getPaperNode = function () {
    return this.paperNodePool.size() > 0 ? this.paperNodePool.get() : this.createPaper();
  }, s.createPaper = function () {
    var t = new _dependency2.Node("paperItem");
    t.addComponent(_dependency2.UITransform);
    var e = t.addComponent(_dependency2.Sprite);
    return this.paperSpriteFrame && (e.spriteFrame = this.paperSpriteFrame), t.setParent(this.paperNode), t.layer = _dependency2.Layers.Enum.UI_2D, t.addComponent(_dependency2.UIOpacity), t;
  }, s.clearMask = function (t) {
    var e = this.maskNode.getComponent(_dependency2.Mask)._graphics,
      i = this.tempDrawPoints.length;
    if (this.tempDrawPoints.push(t), this.coinNode.setPosition(_dependency2.v3(t.x, t.y, 0)), i <= 1) {
      var o = this.lineWidth / 2;
      e.circle(t.x, t.y, o), e.fill(), this.checkHit(t, o);
    } else {
      var r = this.tempDrawPoints[i - 2],
        n = this.tempDrawPoints[i - 1];
      e.moveTo(r.x, r.y), e.lineTo(n.x, n.y), e.lineWidth = this.lineWidth, e.lineCap = _dependency2.Graphics.LineCap.ROUND, e.lineJoin = _dependency2.Graphics.LineJoin.ROUND, e.strokeColor = new _dependency2.Color(255, 255, 255, 255), e.stroke(), this.checkHit(n, this.lineWidth / 2);
    }
  }, s.checkHit = function (t, e) {
    var i = {
      position: _dependency2.v2(t.x, t.y),
      radius: e
    };
    this.polygonPointsList.forEach(function (t) {
      t.isHit || (t.isHit = _dependency2.Intersection2D.circleCircle(t.circle.position, t.circle.radius, i.position, i.radius));
    });
  }, s.reset = function () {
    var t = this;
    this.ticketNode.active = !0, this.maskNode.getComponent(_dependency2.Mask)._graphics.clear(), this.coinNode.active = !1, this.tempDrawPoints = [], this.polygonPointsList = [], this.process = 0;
    var e = this.ticketNode.getComponent(_dependency2.Graphics);
    e && e.clear(), this.paperNode.children.forEach(function (e) {
      return t.paperNodePool.put(e);
    }), this.autoStep = 0;
  }, s.isOverProcess = function () {
    return this.process >= this.overProcess;
  }, s.resetHitBox = function () {
    for (var t = this.ticketNode.getComponent(_dependency2.UITransform), e = this.resultNode.getComponent(_dependency2.UITransform), i = X(this.rectWidth / 3, 2), o = i / 2, r = 0; r < e.width; r += i) for (var n = 0; n < e.height; n += i) {
      var s = r - e.width / 2,
        a = n - e.height / 2,
        c = e.convertToWorldSpaceAR(_dependency2.v3(s, a, 0)),
        p = t.convertToNodeSpaceAR(c);
      this.polygonPointsList.push({
        rect: _dependency2.rect(p.x, p.y, i, i),
        circle: {
          position: _dependency2.v2(p.x + o, p.y + o),
          radius: o
        },
        isHit: !1
      });
    }
  }, s.updateAutoPositionList = function () {
    var t = this.ticketNode.getComponent(_dependency2.UITransform),
      e = _dependency2.v2(this.ticketNode.position.x, this.ticketNode.position.y);
    e = e.add(_dependency2.v2(-t.width / 2, t.height / 2));
    var i = this.rectWidth / 2;
    this.autoGird = {
      x: Math.floor(t.width / i),
      y: Math.floor(t.height / i)
    };
    for (var o = t.width / this.autoGird.x, r = t.height / this.autoGird.y, n = [], s = 0; s < this.autoGird.y; s++) {
      n[s] = n[s] || [];
      for (var a = 0; a < this.autoGird.x; a++) n[s][a] = _dependency2.v2(e.x + o * a, e.y - r * s);
    }
    for (var c = 0; c < n.length; c++) {
      var p, h;
      if (c % 2 == 0) (p = this.autoPositionList).push.apply(p, n[c]);else (h = this.autoPositionList).push.apply(h, n[c].reverse());
    }
  }, _dependency.createClass(e, [{
    key: "autoStep",
    get: function () {
      return this._autoStep;
    },
    set: function (t) {
      if (this._autoStep = t, t > 0) {
        this.coinNode.active = !0;
        var e = this.autoPositionList[Math.floor(t)];
        this.startPaperAnimation(_dependency2.v2(0, 0), e), this.coinNode.setPosition(_dependency2.v3(e.x, e.y, 0)), this.clearMask(e);
      }
    }
  }]), e;
}(_dependency2.Component)).prototype, "maskNode", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = _dependency.applyDecoratedDescriptor(F.prototype, "ticketNode", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = _dependency.applyDecoratedDescriptor(F.prototype, "paperNode", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = _dependency.applyDecoratedDescriptor(F.prototype, "paperSpriteFrame", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = _dependency.applyDecoratedDescriptor(F.prototype, "coinNode", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = _dependency.applyDecoratedDescriptor(F.prototype, "resultNode", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = _dependency.applyDecoratedDescriptor(F.prototype, "rectWidth", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 30;
  }
}), Z = _dependency.applyDecoratedDescriptor(F.prototype, "lineWidth", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 30;
  }
}), V = _dependency.applyDecoratedDescriptor(F.prototype, "overProcess", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 50;
  }
}), U = F)) || U));
_dependency2.cclegacy._RF.pop();
