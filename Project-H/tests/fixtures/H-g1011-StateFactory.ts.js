System.register("chunks:///_virtual/StateFactory.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (t) {
  "use strict";

  var n, r;
  return {
    setters: [function (t) {
      n = t.extends;
    }, function (t) {
      r = t.cclegacy;
    }],
    execute: function () {
      t("defineState", function (t) {
        var r;
        return n({}, t, {
          transitionGuard: null != (r = t.transitionGuard) ? r : function () {
            return !0;
          },
          transitionTo: function (n) {
            var r = null == t.transitionTo ? void 0 : t.transitionTo(n);
            return r instanceof Promise ? r.then(function (t) {
              return null != t ? t : "";
            }) : null != r ? r : "";
          }
        });
      }), r._RF.push({}, "934d713uR5Nyo4dLtKaG+oQ", "StateFactory", void 0), r._RF.pop();
    }
  };
});
