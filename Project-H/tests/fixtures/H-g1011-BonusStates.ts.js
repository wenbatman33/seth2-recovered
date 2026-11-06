System.register("chunks:///_virtual/BonusStates.ts", ["cc", "./Config.ts", "./StakeModel.ts", "./SlotFrameworkEvent.ts", "./PlatformModel.ts", "./ReplayModel.ts", "./SocketModel.ts", "./NoTouchingView.ts", "./HeavenlyTreasuresView.ts", "./JackpotGameView.ts", "./LuckyWealthView.ts", "./GameEvent.ts", "./GameSender.ts", "./types.ts", "./StateFactory.ts", "./StateId.ts"], function (t) {
  "use strict";

  var n, e, a, i, o, E, u, _, s, r, d, c, A, S, f, p, T;
  return {
    setters: [function (t) {
      n = t.cclegacy;
    }, function (t) {
      e = t.ViewZOrder;
    }, function (t) {
      a = t.default;
    }, function (t) {
      i = t.SlotFrameworkEvent;
    }, function (t) {
      o = t.default;
    }, function (t) {
      E = t.default;
    }, function (t) {
      u = t.default;
    }, function (t) {
      _ = t.default;
    }, function (t) {
      s = t.HeavenlyTreasuresView;
    }, function (t) {
      r = t.JackpotGameView;
    }, function (t) {
      d = t.default;
    }, function (t) {
      c = t.GameEvent;
    }, function (t) {
      A = t.GameSender;
    }, function (t) {
      S = t.EBonusType, f = t.BonusStateAction;
    }, function (t) {
      p = t.defineState;
    }, function (t) {
      T = t.StateId;
    }],
    execute: function () {
      t("createBonusStates", function (t) {
        return [p({
          id: T.DROP_TREASURE_INTRO,
          onEntry: function () {
            App.uiManager.open({
              type: s,
              bundle: t.data.module,
              zIndex: e.UI,
              name: "天降奇寶"
            }), dispatch(i.HIDE_REPLAY_INFO_BAR);
          },
          transitionTo: function (t) {
            if (t.event.name === c.HEAVENLY_TREASURES_RESULT_END) return T.DROP_TREASURE_CLOSE;
          }
        }), p({
          id: T.DROP_TREASURE_CLOSE,
          onEntry: function () {
            if (E.isReplay) dispatch(c.REPLAY_GAME_END);else {
              dispatch(i.STOP_AUTO_SPIN);
              var n = {
                bonusType: S.FORTUNE_LANDING,
                action: f.FINISH,
                ratioIndex: a.ratioIndex,
                ratioValue: a.ratioValue,
                stakeIndex: a.stakeIndex,
                stakeValue: a.stakeValue,
                spinId: t.data.getData().spinId,
                token: u.currentToken,
                clientType: "web"
              };
              App.senderManager.get(A).sendFortuneLandingFinishReq(n);
            }
          },
          transitionTo: function (t) {
            if (t.event.name == c.REPLAY_GAME_END) return T.MG_WAIT_REPLAY;
          }
        }), p({
          id: T.LUCKY_WEALTH_INTRO,
          onEntry: function (n) {
            var a = {
              win: n.sharedData.getData().bonusState.prize
            };
            App.uiManager.open({
              type: d,
              bundle: t.data.module,
              zIndex: e.UI,
              name: "神秘遊戲",
              args: a
            });
          },
          transitionTo: function (t) {
            if (t.event.name === c.LUCKY_WEALTH_END) return T.LUCKY_WEALTH_CLOSE;
          }
        }), p({
          id: T.LUCKY_WEALTH_CLOSE,
          onEntry: function () {
            E.isReplay ? dispatch(c.REPLAY_GAME_END) : (dispatch(i.STOP_AUTO_SPIN), dispatch(i.SEND_CLOSE_REQUEST, {
              data: t.data.getData().spinId
            }));
          },
          transitionTo: function (t) {
            var n = t.event;
            return n.name === c.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(i.UPDATE_USER_BALANCE, {
              data: {
                balance: o.amount
              }
            }), T.MG_WAIT_SPIN) : n.name == c.REPLAY_GAME_END ? T.MG_WAIT_REPLAY : void 0;
          }
        }), p({
          id: T.JP_GAME_INTRO,
          onEntry: function () {
            App.uiManager.open({
              type: r,
              bundle: t.data.module,
              zIndex: e.UI,
              name: "JP遊戲"
            });
          },
          transitionTo: function (t) {
            if (t.event.name === c.JACKPOT_GAME_PICK_END) return T.JP_GAME_CLOSE;
          }
        }), p({
          id: T.JP_GAME_CLOSE,
          onEntry: function () {
            if (E.isReplay) return App.uiManager.close(_), void dispatch(c.REPLAY_GAME_END);
            dispatch(i.STOP_AUTO_SPIN), dispatch(i.SEND_CLOSE_REQUEST, {
              data: t.data.getData().spinId
            });
          },
          transitionTo: function (t) {
            var n = t.event;
            return n.name === c.PARSER_CLOSE_SPIN_COMPLETED ? (dispatch(i.UPDATE_USER_BALANCE, {
              data: {
                balance: o.amount
              }
            }), T.MG_WAIT_SPIN) : n.name == c.REPLAY_GAME_END ? T.MG_WAIT_REPLAY : void 0;
          }
        })];
      }), n._RF.push({}, "f16d1KXmvlE3p8Iz3LVvKag", "BonusStates", void 0), n._RF.pop();
    }
  };
});
