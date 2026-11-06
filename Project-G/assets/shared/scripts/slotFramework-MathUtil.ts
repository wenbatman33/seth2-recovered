// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
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
var n;
_dependency.cclegacy._RF.push({}, "04532WpIehNHqJS+2zmVzca", "MathUtil", void 0);
_publish("default", function () {
  function t() {}
  return t.getRandomNumber = function (t, n) {
    return void 0 === t && (t = 0), void 0 === n && (n = 1), Math.floor(Math.random() * (n - t + 1)) + t;
  }, t.getRandomWithSeed = function (t, n) {
    return Math.ceil((9301 * t + 49297) % 233280 / 233280 * n);
  }, t.getAngle = function (t, n) {
    return Math.atan((n.y - t.y) / (n.x - t.x));
  }, t.getDistance = function (t, n) {
    return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2));
  }, t.angleToRadian = function (t) {
    return t * Math.PI / 180;
  }, t.zeroPad = function (t, n) {
    void 0 === n && (n = 2);
    var r = t.toString();
    return r.length < n ? r.padStart(n, "0") : r;
  }, t.flattenArray = function (t) {
    return t.reduce(function (t, n) {
      return t.concat(n);
    }, []);
  }, t.unflattenArray = function (t, n) {
    for (var r = [], e = 0; e < t.length; e += n) r.push(t.slice(e, e + n));
    return r;
  }, t.transposeArray = function (t) {
    return t && 0 !== t.length && 0 !== t[0].length ? t[0].map(function (n, r) {
      return t.map(function (t) {
        return t[r];
      });
    }) : [];
  }, t.add = function (t, n) {
    return r.add(t, n);
  }, t.subtract = function (t, n) {
    return r.subtract(t, n);
  }, t.multiply = function () {
    return r.multiply.apply(r, arguments);
  }, t.divide = function (t, n) {
    return r.divide(t, n);
  }, t;
}());
var r = function () {
  function t() {}
  return t.isInteger = function (t) {
    return Math.floor(t) === t;
  }, t.toInteger = function (t) {
    var n = {
      times: 1,
      num: 0
    };
    if (this.isInteger(t)) return n.num = t, n;
    var r = t + "",
      e = r.indexOf("."),
      u = r.slice(e + 1).length,
      i = Math.pow(10, u),
      a = Number(t.toString().replace(".", ""));
    return n.times = i, n.num = a, n;
  }, t.operation = function (t, n, r) {
    var e = this.toInteger(t),
      u = this.toInteger(n),
      i = e.num,
      a = u.num,
      o = e.times,
      c = u.times,
      f = o > c ? o : c;
    switch (r) {
      case "add":
        return (o === c ? i + a : o > c ? i + a * (o / c) : i * (c / o) + a) / f;
      case "subtract":
        return (o === c ? i - a : o > c ? i - a * (o / c) : i * (c / o) - a) / f;
      case "multiply":
        return i * a / (o * c);
      case "divide":
        return i / a * (c / o);
    }
  }, t.add = function (t, n) {
    return this.operation(t, n, "add");
  }, t.subtract = function (t, n) {
    return this.operation(t, n, "subtract");
  }, t.multiply = function () {
    for (var t = this, n = arguments.length, r = new Array(n), e = 0; e < n; e++) r[e] = arguments[e];
    return r.reduce(function (n, r) {
      return t.operation(n, r, "multiply");
    });
  }, t.divide = function (t, n) {
    return this.operation(t, n, "divide");
  }, t;
}();
_dependency.cclegacy._RF.pop();
