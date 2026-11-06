// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "./chunks-rollupPluginModLoBabelHelpers";
import * as _dependency2 from "cc";
import * as _dependency3 from "./slotFramework-GameRulesView";
import * as _dependency4 from "./main-Bundles";
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
var t, n, r, s, a, u, i, o, c;
var l;
_dependency2.cclegacy._RF.push({}, "ef1bbLbMRxPpaoXOjMsuQKU", "GameRulesViewP", void 0);
var p = _dependency2._decorator.ccclass;
_dependency2._decorator.property, _publish("default", p("GameRulesViewP")(l = function (e) {
  var _nativeConstructor = n;
  function n() {
    return Reflect.construct(e, arguments, new.target || _nativeConstructor) || this;
  }
  return _dependency.inheritsLoose(n, e), n.getPrefabUrl = function () {
    return "prefabs/view/GameRulesViewP";
  }, n.prototype.setRuleAssets = function () {
    var e = this,
      t = App.cache.get(this.args.bundle, this.args.background).data.find(function (e) {
        return "mg_bg" === e.name;
      });
    this.background.getComponent(_dependency2.Sprite).spriteFrame = t;
    var n = App.cache.get(this.args.bundle, this.args.rules).data.filter(function (e) {
      return e.name.includes("rule");
    });
    n.sort(function (e, t) {
      return Number(e.name.split("_")[1]) - Number(t.name.split("_")[1]);
    }), this.args.excludeIndexes && this.args.excludeIndexes.length > 0 && (n = n.filter(function (t) {
      var n = Number(t.name.split("_")[1]);
      return !(e.args.excludeIndexes.indexOf(n) > -1);
    }));
    var r = App.cache.get(_dependency4.EBundles[_dependency4.EBundles.slotFramework], "prefabs/component/ruleItem").data;
    n.forEach(function (t) {
      var n = _dependency2.instantiate(r);
      n.getComponent(_dependency2.UITransform).setContentSize(720, 1280), _dependency2.find("rule", n).getComponent(_dependency2.Sprite).spriteFrame = t, e.flag ? e.content.addChild(n) : e.pageView.addPage(n);
    });
  }, n;
}(_dependency3.default)) || l);
_dependency2.cclegacy._RF.pop();
