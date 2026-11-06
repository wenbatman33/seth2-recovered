System.register("chunks:///_virtual/ParseResponse.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./StakeModel.ts", "./GameConfigModel.ts", "./GameData.ts", "./GameEvent.ts"], function (t) {
  "use strict";

  var e, a, n, i, s, o;
  return {
    setters: [function (t) {
      e = t.createClass;
    }, function (t) {
      a = t.cclegacy;
    }, function (t) {
      n = t.default;
    }, function (t) {
      i = t.default;
    }, function (t) {
      s = t.default;
    }, function (t) {
      o = t.GameEvent;
    }],
    execute: function () {
      a._RF.push({}, "1c047DcErZDYLo6sT7ozQSl", "ParseResponse", void 0);
      t("default", function () {
        function t() {}
        return t.parseInit = function (t) {
          this.data.setInitData(t), n.init({
            stakeList: t.platform.game.stakeValues,
            stakeIndex: t.platform.player.settings.stakeIndex,
            ratioList: t.platform.game.ratioValues,
            ratioIndex: t.platform.player.settings.ratioIndex,
            numWinlines: t.engine.definition.winlineDefs.length
          }), i.setData(t), this.setGameType(t), dispatch(o.PARSER_INIT_COMPLETED);
        }, t.parseNewInit = function (t) {
          this.data.getData().parser.currentSpinIndex = 0, this.data.setInitData(t), n.init({
            stakeList: t.platform.game.stakeValues,
            stakeIndex: t.platform.player.settings.stakeIndex,
            ratioList: t.platform.game.ratioValues,
            ratioIndex: t.platform.player.settings.ratioIndex,
            numWinlines: t.engine.definition.winlineDefs.length
          }), i.setData(t), dispatch(o.PARSER_INIT_COMPLETED);
        }, t.parseCloseSpin = function (t) {
          dispatch(o.PARSER_CLOSE_SPIN_COMPLETED);
        }, t.setGameType = function (t) {}, e(t, null, [{
          key: "data",
          get: function () {
            return App.dataCenter.get(s);
          }
        }]), t;
      }());
      a._RF.pop();
    }
  };
});
