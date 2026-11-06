// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./main-Utils";
var _export;
export { _export as EClientTypes };
var _export2;
export { _export2 as CmmUtils };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EClientTypes":
      _export = value;
      break;
    case "CmmUtils":
      _export2 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e, n, o, r, a, i, c, u, d, l, s, p, f, m, h, v, g, C, y, w, T, b;
var E;
_publish("EClientTypes", void 0), _dependency2.cclegacy._RF.push({}, "dd3bbzXbN9GrKH1nRT+DaNN", "CmmUtils", void 0), function (t) {
  t.WEB = "web", t.WAP = "wap", t.ANDROID = "android", t.IOS = "ios", t.RN = "rn", t.UNITY_WEBVIEW = "uniWebView";
}(E || (E = _publish("EClientTypes", {})));
var A = _publish("CmmUtils", function (t) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(t, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(n, t), n.roundDecimal = function (t, e) {
    return Math.round(Math.round(t * Math.pow(10, (e || 0) + 1)) / 10) / Math.pow(10, e || 0);
  }, n.dotFormat = function (t, e) {
    /^[1-9]?[0-9]*\.[0-9]*[1-9]+$/.test(t.toString());
    return "" + this.roundDecimal(t, e);
  }, n.getEventHandler = function (t, e, n) {
    var o = new _dependency2.Component.EventHandler();
    return o.target = t, o.component = t.name, o.handler = e, n && (o.customEventData = n), o;
  }, n.labelMarquee = function (t) {
    var e = t.maskNode,
      n = t.labelNode,
      o = t.delayTime,
      r = e.getComponent(_dependency2.UITransform).width,
      d = n.getComponent(_dependency2.UITransform).width,
      l = n.getComponent(_dependency2.UITransform).anchorPoint,
      s = d - r,
      p = .07 * s,
      f = 0;
    if (d > r) switch (l.x) {
      case 0:
        f = 0;
        break;
      case .5:
        f = s / 2;
        break;
      case 1:
        f = s;
        break;
      default:
        f = 0;
    }
    n.position = _dependency2.v3(f, 0, 0), _dependency2.Tween.stopAllByTarget(t.labelNode), s > 0 && _dependency2.tween(n).bindNodeState(false).repeatForever(_dependency2.tween(n).bindNodeState(false).delay(o).to(p, {
      position: _dependency2.v3(f - s, 0, 0)
    }).delay(o).to(p, {
      position: _dependency2.v3(f, 0, 0)
    })).start();
  }, n.prefixInteger = function (t, e) {
    return (Array(e).join("0") + t).slice(-e);
  }, n.isEmptyObject = function (t) {
    return !Object.keys(t).length;
  }, n.formatNumStr = function (t) {
    var e = Math.floor(Math.log10(t) / 3),
      n = "";
    e > 0 ? n = "" + t / Math.pow(1e3, e) + ["", "K", "M", "B"][e] : n = t.toString();
    return n;
  }, n.CopyText = function (t) {
    var e = t,
      n = document.createElement("textarea");
    n.value = e, n.setAttribute("readonly", ""), n.style.contain = "strict", n.style.position = "absolute", n.style.left = "-9999px", n.style.fontSize = "12pt";
    var o,
      r = getSelection();
    r.rangeCount > 0 && (o = r.getRangeAt(0)), document.body.appendChild(n), n.select(), n.selectionStart = 0, n.selectionEnd = e.length;
    try {
      document.execCommand("copy");
    } catch (t) {}
    document.body.removeChild(n), o && (r.removeAllRanges(), r.addRange(o));
  }, n.extractContentBetweenAngleBrackets = function (t) {
    var e = t.match(/<([^<>]+)>/g);
    return e ? e.map(function (t) {
      return t.substring(1, t.length - 1);
    }) : [];
  }, n.extractNameBeforeBrackets = function (t) {
    var e = t.match(/([^<>]*)</);
    return e && e[1] ? [e[1]] : [];
  }, n.addDoubleClickProtection = function (t, e, n, o) {
    void 0 === n && (n = .5), void 0 === o && (o = _dependency2.NodeEventType.TOUCH_END);
    var r = !0;
    t.on(o, function () {
      r && (r = !1, e(), setTimeout(function () {
        r = !0;
      }, 1e3 * n));
    });
  }, n.addBtnClickEvent = function (t, e, o) {
    var r = !0,
      a = new _dependency2.EventHandler();
    a.target = t, a.component = n.extractContentBetweenAngleBrackets(t.name)[0], a.handler = _dependency2.Node.EventType.TOUCH_END, a.emit = function (t) {
      !function (t) {
        if (r) {
          r = !1, e(t);
          var n = o && o.delaySeconds ? o.delaySeconds : .5;
          setTimeout(function () {
            r = !0;
          }, 1e3 * n);
        }
      }(t);
    }, t.getComponent(_dependency2.Button).clickEvents.push(a);
  }, n.addToggleCheckEvent = function (t, e, o) {
    var r = !0,
      a = new _dependency2.EventHandler();
    a.target = t, a.component = n.extractContentBetweenAngleBrackets(t.name)[0], a.handler = _dependency2.Node.EventType.TOUCH_END, a.emit = function (t) {
      !function (t) {
        if (r) {
          r = !1, e(t);
          var n = o && o.delaySeconds ? o.delaySeconds : .5;
          setTimeout(function () {
            r = !0;
          }, 1e3 * n);
        }
      }(t);
    }, t.getComponent(_dependency2.ToggleContainer).checkEvents.push(a);
  }, n.toPascalCase = function (t) {
    return t.replace(/(\w)(\w*)/g, function (t, e, n) {
      return e.toUpperCase() + n.toLowerCase();
    });
  }, n.capitalizeFirstLetter = function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }, n.setWidget = function (t, e) {
    var o = t.getComponent(_dependency2.Widget);
    if (o) {
      ["top", "right", "bottom", "left", "horizontalCenter", "verticalCenter"].forEach(function (t, r) {
        "boolean" != typeof e[r] || !1 !== e[r] ? (o["isAlign" + n.capitalizeFirstLetter(t)] = !0, o[t] = e[r]) : o["isAlign" + n.capitalizeFirstLetter(t)] = !1;
      }), t.getComponent(_dependency2.Component).scheduleOnce(function () {
        o.updateAlignment();
      });
    } else Log.e("!!! 查無 widget 組件 請新增widget !!!");
  }, n.calculateGradientColors = function (t, e, n) {
    void 0 === e && (e = "#FFFFFF"), void 0 === n && (n = [100, 80, 60, 40, 20]);
    var o = /^#([0-9A-Fa-f]{6})$/,
      r = t.match(o),
      a = e.match(o);
    if (!r || !a) throw new Error("Invalid color format");
    for (var i = parseInt(r[1], 16), c = parseInt(a[1], 16), u = i >> 16 & 255, d = i >> 8 & 255, l = 255 & i, s = c >> 16 & 255, p = c >> 8 & 255, f = 255 & c, m = [], h = 0; h < n.length; h++) {
      var v = n[h] / 100,
        g = "#" + (Math.round(u + (s - u) * v) << 16 | Math.round(d + (p - d) * v) << 8 | Math.round(l + (f - l) * v)).toString(16).padStart(6, "0");
      m.push(g);
    }
    return m;
  }, n.calculateGradientColors2 = function (t, e, n) {
    var o = /^#([0-9A-Fa-f]{6})$/,
      r = t.match(o),
      a = e.match(o);
    if (!r || !a) throw new Error("Invalid color format");
    for (var i = parseInt(r[1], 16), c = parseInt(a[1], 16), u = i >> 16 & 255, d = i >> 8 & 255, l = 255 & i, s = ((c >> 16 & 255) - u) / (n - 1), p = ((c >> 8 & 255) - d) / (n - 1), f = ((255 & c) - l) / (n - 1), m = [], h = 0; h < n; h++) {
      var v = "#" + (Math.round(u + s * h) << 16 | Math.round(d + p * h) << 8 | Math.round(l + f * h)).toString(16).padStart(6, "0");
      m.push(v);
    }
    return m;
  }, n.createNode = function (t, e) {
    void 0 === t && (t = "newNode");
    var n = new _dependency2.Node();
    if (n.name = t, n.layer = _dependency2.Layers.Enum.UI_2D, null != e && e.Widget && n.addComponent(_dependency2.Widget), null != e && e.UIOpacity && n.addComponent(_dependency2.UIOpacity), null != e && e.Layout && n.addComponent(_dependency2.Layout), null != e && e.Button && (n.addComponent(_dependency2.Button), n.addComponent(_dependency2.Sprite)), null != e && e.subLabel) {
      var o = this.createNode("Label");
      o.addComponent(_dependency2.Label), o.setParent(n);
    }
    return null != e && e.Sprite && n.addComponent(_dependency2.Sprite), n;
  }, n.rgbaToDarkGray = function (t, e) {
    void 0 === e && (e = .5);
    var n = t.r,
      o = t.g,
      r = t.b,
      a = t.a,
      i = Math.round(n * e),
      c = Math.round(o * e),
      u = Math.round(r * e),
      d = Math.round(.299 * i + .587 * c + .114 * u);
    return new _dependency2.Color(d, d, d, a);
  }, n.debounce = function (t, e) {
    var n,
      o = this;
    return void 0 === e && (e = 250), function () {
      for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
      clearTimeout(n), n = setTimeout(function () {
        t.apply(o, a);
      }, e);
    };
  }, n.throttle = function (t, e) {
    var n = this;
    void 0 === e && (e = 500);
    var o = 0;
    return function () {
      var r = Date.now();
      if (r - o >= e) {
        for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c];
        t.apply(n, i), o = r;
      }
    };
  }, n.isWebView = function () {
    var t = navigator.userAgent,
      e = new RegExp("(" + ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)", "Android.*(wv|.0.0.0)"].join("|") + ")", "ig");
    return Boolean(t.match(e));
  }, n.getClientType = function () {
    var t = _dependency2.sys.platform,
      e = _dependency2.sys.os,
      n = E.WEB;
    return "MOBILE_BROWSER" === t && (this.isWebView() || this.isPWA() ? "Android" === e ? n = E.ANDROID : "iOS" === e && (n = E.IOS) : n = E.WAP), n;
  }, n.hashCode = function (t) {
    for (var e = 0, n = 0; n < t.length; n++) {
      e = (e << 5) - e + t.charCodeAt(n), e |= 0;
    }
    return e;
  }, n.getFakeSpinId = function () {
    // Editor's packages: origin does not always expose randomUUID.
    if(typeof crypto!=='undefined'&&typeof crypto.randomUUID==='function')return crypto.randomUUID().replace(/-/g, "").slice(0,24);
    const bytes=new Uint8Array(12);
    if(typeof crypto!=='undefined'&&typeof crypto.getRandomValues==='function'){crypto.getRandomValues(bytes);return Array.from(bytes,v=>v.toString(16).padStart(2,'0')).join('');}
    throw new Error('Web Crypto is required for internal state identifiers');
  }, n.setDirectorTick = function (t) {
    var e = this;
    _dependency2.director.tick = function (n) {
      e.preTick.call(_dependency2.director, n * t);
    };
  }, n.fadeInTween = function (t, e, o) {
    void 0 === e && (e = .3), _dependency2.Tween.stopAllByTag(n.hashCode("fadeInTween_" + t.uuid));
    var r = t.getComponent(_dependency2.UIOpacity) || t.addComponent(_dependency2.UIOpacity);
    r ? (_dependency2.Tween.stopAllByTarget(r), r.opacity = 0, _dependency2.tween(r).bindNodeState(false).tag(n.hashCode("fadeInTween_" + t.uuid)).to(e, {
      opacity: 255
    }, {
      onComplete: function () {
        r.opacity = 255, o && o();
      }
    }).start()) : console.error("未設置 opacity 組件");
  }, n.fadeOutTween = function (t, e, o) {
    void 0 === e && (e = .3), _dependency2.Tween.stopAllByTag(n.hashCode("fadeOutTween_" + t.uuid));
    var r = t.getComponent(_dependency2.UIOpacity) || t.addComponent(_dependency2.UIOpacity);
    r ? (r.opacity = 255, _dependency2.tween(r).bindNodeState(false).tag(n.hashCode("fadeOutTween_" + t.uuid)).to(e, {
      opacity: 0
    }, {
      onComplete: function () {
        o && o();
      }
    }).start()) : console.error("未設置 opacity 組件");
  }, n.benchmark = function (t, e) {
    var n = performance.now();
    e();
    var o = performance.now() - n;
    return Log.d(t + "::::::: " + o.toFixed(2) + " ms"), o;
  }, n;
}(_dependency3.Utils));
A.isPWA = function () {
  return !!window.matchMedia("(display-mode: standalone)").matches || !!window.navigator.standalone;
}, A.preTick = _dependency2.director.tick, _dependency2.cclegacy._RF.pop();
