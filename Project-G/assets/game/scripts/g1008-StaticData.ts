// @ts-nocheck
// Recovered runtime JavaScript, not original TypeScript.
import * as _dependency from "cc";
var _export;
export { _export as emptySpin };
var _export2;
export { _export2 as freeGameSpin };
var _export3;
export { _export3 as initialData };
var _export4;
export { _export4 as oneComboSpin };
var _export5;
export { _export5 as timesComboSpin };
function _publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) _publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "emptySpin":
      _export = value;
      break;
    case "freeGameSpin":
      _export2 = value;
      break;
    case "initialData":
      _export3 = value;
      break;
    case "oneComboSpin":
      _export4 = value;
      break;
    case "timesComboSpin":
      _export5 = value;
      break;
    default:
      throw new Error('Unknown recovered export ' + name);
  }
  return value;
}
var e;
_publish({
  emptySpin: void 0,
  freeGameSpin: void 0,
  initialData: void 0,
  oneComboSpin: void 0,
  timesComboSpin: void 0
}), _dependency.cclegacy._RF.push({}, "f82cecGwVhL1bAFVgxnvvN6", "StaticData", void 0), _publish("initialData", {
  isResuming: !1,
  eventName: "initial",
  status: 200,
  message: "ok",
  token: "6d87deafa5574749a8f8e19cf6249a24",
  engine: {
    definition: {
      digital: 2,
      autoSpinInterval: .15,
      smallPrizeDelay: .5,
      oddsList: {
        1: {
          8: 200,
          9: 200,
          10: 500,
          11: 500,
          12: 1e3
        },
        2: {
          8: 50,
          9: 50,
          10: 200,
          11: 200,
          12: 500
        },
        3: {
          8: 40,
          9: 40,
          10: 100,
          11: 100,
          12: 300
        },
        4: {
          8: 30,
          9: 30,
          10: 40,
          11: 40,
          12: 240
        },
        5: {
          8: 20,
          9: 20,
          10: 30,
          11: 30,
          12: 200
        },
        6: {
          8: 16,
          9: 16,
          10: 24,
          11: 24,
          12: 160
        },
        7: {
          8: 10,
          9: 10,
          10: 20,
          11: 20,
          12: 100
        },
        8: {
          8: 8,
          9: 8,
          10: 18,
          11: 18,
          12: 80
        },
        9: {
          8: 5,
          9: 5,
          10: 15,
          11: 15,
          12: 40
        },
        15: {
          4: 60,
          5: 100,
          6: 2e3
        }
      },
      winOddsTypes: {
        bigWin: 20,
        superWin: 50,
        megaWin: 100,
        ultraWin: 300,
        legendaryWin: 1e3,
        win: 20
      },
      extraFgRounds: 5,
      bigPrizeDelay: 2,
      buyFeature: [{
        featureRate: 100,
        feature: "freeGame"
      }],
      winlineDefs: [{
        order: "0",
        line: []
      }, {
        order: "1",
        line: []
      }, {
        order: "2",
        line: []
      }, {
        order: "3",
        line: []
      }, {
        order: "4",
        line: []
      }, {
        order: "5",
        line: []
      }, {
        order: "6",
        line: []
      }, {
        order: "7",
        line: []
      }, {
        order: "8",
        line: []
      }, {
        order: "9",
        line: []
      }, {
        order: "10",
        line: []
      }, {
        order: "11",
        line: []
      }, {
        order: "12",
        line: []
      }, {
        order: "13",
        line: []
      }, {
        order: "14",
        line: []
      }, {
        order: "15",
        line: []
      }, {
        order: "16",
        line: []
      }, {
        order: "17",
        line: []
      }, {
        order: "18",
        line: []
      }, {
        order: "19",
        line: []
      }],
      gameState: {
        timesSymbols: [{
          symbol: 10,
          symbolPos: 25,
          times: 150,
          isRare: !0
        }, {
          symbol: 11,
          symbolPos: 1,
          times: 50,
          isRare: !1
        }]
      },
      autoConfirmTime: 0,
      symbolDefs: [{
        symbol: 1,
        displayName: "S1"
      }, {
        symbol: 2,
        displayName: "S2"
      }, {
        symbol: 3,
        displayName: "S3"
      }, {
        symbol: 4,
        displayName: "S4"
      }, {
        symbol: 5,
        displayName: "S5"
      }, {
        symbol: 6,
        displayName: "S6"
      }, {
        symbol: 7,
        displayName: "S7"
      }, {
        symbol: 8,
        displayName: "S8"
      }, {
        symbol: 9,
        displayName: "S9"
      }, {
        symbol: 10,
        displayName: "T1"
      }, {
        symbol: 11,
        displayName: "T2"
      }, {
        symbol: 12,
        displayName: "T3"
      }, {
        symbol: 13,
        displayName: "T4"
      }, {
        symbol: 14,
        displayName: "JP"
      }, {
        symbol: 15,
        displayName: "SCATTER"
      }],
      prizeAutoNextDelay: 10,
      isDemo: !1
    },
    gameState: [{
      action: "spin",
      totalStake: .8,
      view: [[7, 13, 8, 3, 9, 7], [4, 4, 5, 8, 15, 9], [4, 4, 7, 8, 3, 9], [5, 7, 4, 3, 3, 2], [3, 1, 1, 3, 5, 2]],
      winSymbols: [],
      timesSymbols: [{
        symbol: 13,
        symbolPos: 1,
        times: 2,
        isRare: !0
      }],
      timesUpgrade: [],
      posTransform: [],
      startFreeGame: !1,
      freeGameCount: 0,
      isJp: "",
      currentTimes: -1,
      roundWinnings: 0,
      totalWinnings: 0,
      totalViews: 1,
      currentView: 0,
      noWinReward: 0,
      spinId: "67fcda9d605e9a36e2eea052"
    }],
    spinId: "67fcda9d605e9a36e2eea052"
  },
  platform: {
    game: {
      stakeValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ratioValues: [.02, .05, .1, .2, .4, 1, 3, 4, 5, 6, 7, 8, 10],
      stakeList: null,
      stakeKeyCounts: 0
    },
    player: {
      name: "daniel12345678",
      avatar: "1",
      balance: {
        currency: "TWD",
        amount: 133148.03,
        gemAmount: 6
      },
      settings: {
        advancedSettings: {
          notify: !0,
          turbo: !0,
          sounds: {
            background: !0,
            effect: !0,
            backgroundVolume: 0,
            effectVolume: 0
          }
        },
        autoPlay: {
          stopOnWinMultiplierValue: 20,
          stopOnWinMultiplier: !0,
          stopOnJackpot: !0,
          numberOfPlays: [10, 50, 100, 200, 500, -1],
          stopOnBalance: !1,
          stopOnFreeSpin: !1
        },
        stakeIndex: 0,
        ratioIndex: 0
      },
      displayName: "天天天才啊啊",
      displayNameBlockTime: null,
      uid: 937,
      avatarUrl: "https://play.riversense.tw/avatars/1.png",
      nameDisplayOn: !0,
      clientSettings: null
    },
    gemSystem: 0,
    jackpotOn: !0,
    isInstantClose: !1,
    theme: "",
    betRecordUrl: "https://betrecord-web.riversense.tw",
    backend: "golang",
    slotRankOn: !0,
    table: {
      number: 12,
      roomId: 95234,
      status: "Full",
      detail: {
        mgCounts: [19, 47, 38, 66, 20, 67, 167, 265, 81, 181],
        dayWin: 245951.2,
        dayBet: 98539.4,
        hourWin: 0,
        hourBet: 0,
        todayWin: 0,
        todayBet: 0
      },
      lock: {
        expiredDef: 3600,
        resetDef: 86400,
        time: 0,
        count: 0,
        roomId: null
      }
    },
    tables: [{
      win: 9.98,
      bet: 10.000000000000004,
      today: {
        win: 9.98,
        bet: 10.000000000000004
      },
      roomId: 95223,
      status: "Empty",
      number: 1
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95224,
      status: "Empty",
      number: 2
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95225,
      status: "Empty",
      number: 3
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95226,
      status: "Empty",
      number: 4
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95227,
      status: "Empty",
      number: 5
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95228,
      status: "Empty",
      number: 6
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95229,
      status: "Empty",
      number: 7
    }, {
      win: .3,
      bet: .8,
      today: {
        win: .3,
        bet: .8
      },
      roomId: 95230,
      status: "Empty",
      number: 8
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95231,
      status: "Empty",
      number: 9
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95232,
      status: "Empty",
      number: 10
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95233,
      status: "Empty",
      number: 11
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95234,
      status: "Full",
      number: 12,
      user: {
        userId: 937,
        username: "daniel12345678",
        operatorId: 106
      }
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95235,
      status: "Empty",
      number: 13
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95236,
      status: "Empty",
      number: 14
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95237,
      status: "Empty",
      number: 15
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95238,
      status: "Empty",
      number: 16
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95239,
      status: "Empty",
      number: 17
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95240,
      status: "Empty",
      number: 18
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95241,
      status: "Empty",
      number: 19
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95242,
      status: "Empty",
      number: 20
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95243,
      status: "Empty",
      number: 21
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95244,
      status: "Empty",
      number: 22
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95245,
      status: "Empty",
      number: 23
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95246,
      status: "Empty",
      number: 24
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95247,
      status: "Empty",
      number: 25
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95248,
      status: "Empty",
      number: 26
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95249,
      status: "Empty",
      number: 27
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95250,
      status: "Empty",
      number: 28
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95251,
      status: "Empty",
      number: 29
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95252,
      status: "Empty",
      number: 30
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95253,
      status: "Empty",
      number: 31
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95254,
      status: "Empty",
      number: 32
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95255,
      status: "Empty",
      number: 33
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95256,
      status: "Empty",
      number: 34
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95257,
      status: "Empty",
      number: 35
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95258,
      status: "Empty",
      number: 36
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95259,
      status: "Empty",
      number: 37
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95260,
      status: "Empty",
      number: 38
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95261,
      status: "Empty",
      number: 39
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95262,
      status: "Empty",
      number: 40
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95263,
      status: "Empty",
      number: 41
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95264,
      status: "Empty",
      number: 42
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95265,
      status: "Empty",
      number: 43
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95266,
      status: "Empty",
      number: 44
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95267,
      status: "Empty",
      number: 45
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95268,
      status: "Empty",
      number: 46
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95269,
      status: "Empty",
      number: 47
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95270,
      status: "Empty",
      number: 48
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95271,
      status: "Empty",
      number: 49
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95272,
      status: "Empty",
      number: 50
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95273,
      status: "Empty",
      number: 51
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95274,
      status: "Empty",
      number: 52
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95275,
      status: "Empty",
      number: 53
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95276,
      status: "Empty",
      number: 54
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95277,
      status: "Empty",
      number: 55
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95278,
      status: "Empty",
      number: 56
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95279,
      status: "Empty",
      number: 57
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95280,
      status: "Empty",
      number: 58
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95281,
      status: "Empty",
      number: 59
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95282,
      status: "Empty",
      number: 60
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95283,
      status: "Empty",
      number: 61
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95284,
      status: "Empty",
      number: 62
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95285,
      status: "Empty",
      number: 63
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95286,
      status: "Empty",
      number: 64
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95287,
      status: "Empty",
      number: 65
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95288,
      status: "Empty",
      number: 66
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95289,
      status: "Empty",
      number: 67
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95290,
      status: "Empty",
      number: 68
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95291,
      status: "Empty",
      number: 69
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95292,
      status: "Empty",
      number: 70
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95293,
      status: "Empty",
      number: 71
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95294,
      status: "Empty",
      number: 72
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95295,
      status: "Empty",
      number: 73
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95296,
      status: "Empty",
      number: 74
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95297,
      status: "Empty",
      number: 75
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95298,
      status: "Empty",
      number: 76
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95299,
      status: "Empty",
      number: 77
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95300,
      status: "Empty",
      number: 78
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95301,
      status: "Empty",
      number: 79
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95302,
      status: "Empty",
      number: 80
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95303,
      status: "Empty",
      number: 81
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95304,
      status: "Empty",
      number: 82
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95305,
      status: "Empty",
      number: 83
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95306,
      status: "Empty",
      number: 84
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95307,
      status: "Empty",
      number: 85
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95308,
      status: "Empty",
      number: 86
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95309,
      status: "Empty",
      number: 87
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95310,
      status: "Empty",
      number: 88
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95311,
      status: "Empty",
      number: 89
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95312,
      status: "Empty",
      number: 90
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95313,
      status: "Empty",
      number: 91
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95314,
      status: "Empty",
      number: 92
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95315,
      status: "Empty",
      number: 93
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95316,
      status: "Empty",
      number: 94
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95317,
      status: "Empty",
      number: 95
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95318,
      status: "Empty",
      number: 96
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95319,
      status: "Empty",
      number: 97
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95320,
      status: "Empty",
      number: 98
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95321,
      status: "Empty",
      number: 99
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 95322,
      status: "Empty",
      number: 100
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105750,
      status: "Empty",
      number: 101
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105751,
      status: "Empty",
      number: 102
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105752,
      status: "Empty",
      number: 103
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105753,
      status: "Empty",
      number: 104
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105754,
      status: "Empty",
      number: 105
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105755,
      status: "Empty",
      number: 106
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105756,
      status: "Empty",
      number: 107
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105757,
      status: "Empty",
      number: 108
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105758,
      status: "Empty",
      number: 109
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105759,
      status: "Empty",
      number: 110
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105760,
      status: "Empty",
      number: 111
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105761,
      status: "Empty",
      number: 112
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105762,
      status: "Empty",
      number: 113
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105763,
      status: "Empty",
      number: 114
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105764,
      status: "Empty",
      number: 115
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105765,
      status: "Empty",
      number: 116
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105766,
      status: "Empty",
      number: 117
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105767,
      status: "Empty",
      number: 118
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105768,
      status: "Empty",
      number: 119
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105769,
      status: "Empty",
      number: 120
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105770,
      status: "Empty",
      number: 121
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105771,
      status: "Empty",
      number: 122
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105772,
      status: "Empty",
      number: 123
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105773,
      status: "Empty",
      number: 124
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105774,
      status: "Empty",
      number: 125
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105775,
      status: "Empty",
      number: 126
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105776,
      status: "Empty",
      number: 127
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105777,
      status: "Empty",
      number: 128
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105778,
      status: "Empty",
      number: 129
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105779,
      status: "Empty",
      number: 130
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105780,
      status: "Empty",
      number: 131
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105781,
      status: "Empty",
      number: 132
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105782,
      status: "Empty",
      number: 133
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105783,
      status: "Empty",
      number: 134
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105784,
      status: "Empty",
      number: 135
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105785,
      status: "Empty",
      number: 136
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105786,
      status: "Empty",
      number: 137
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105787,
      status: "Empty",
      number: 138
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105788,
      status: "Empty",
      number: 139
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105789,
      status: "Empty",
      number: 140
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105790,
      status: "Empty",
      number: 141
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105791,
      status: "Empty",
      number: 142
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105792,
      status: "Empty",
      number: 143
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105793,
      status: "Empty",
      number: 144
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105794,
      status: "Empty",
      number: 145
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105795,
      status: "Empty",
      number: 146
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105796,
      status: "Empty",
      number: 147
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105797,
      status: "Empty",
      number: 148
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105798,
      status: "Empty",
      number: 149
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105799,
      status: "Empty",
      number: 150
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105800,
      status: "Empty",
      number: 151
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105801,
      status: "Empty",
      number: 152
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105802,
      status: "Empty",
      number: 153
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105803,
      status: "Empty",
      number: 154
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105804,
      status: "Empty",
      number: 155
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105805,
      status: "Empty",
      number: 156
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105806,
      status: "Empty",
      number: 157
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105807,
      status: "Empty",
      number: 158
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105808,
      status: "Empty",
      number: 159
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105809,
      status: "Empty",
      number: 160
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105810,
      status: "Empty",
      number: 161
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105811,
      status: "Empty",
      number: 162
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105812,
      status: "Empty",
      number: 163
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105813,
      status: "Empty",
      number: 164
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105814,
      status: "Empty",
      number: 165
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105815,
      status: "Empty",
      number: 166
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105816,
      status: "Empty",
      number: 167
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105817,
      status: "Empty",
      number: 168
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105818,
      status: "Empty",
      number: 169
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105819,
      status: "Empty",
      number: 170
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105820,
      status: "Empty",
      number: 171
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105821,
      status: "Empty",
      number: 172
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105822,
      status: "Empty",
      number: 173
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105823,
      status: "Empty",
      number: 174
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105824,
      status: "Empty",
      number: 175
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105825,
      status: "Empty",
      number: 176
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105826,
      status: "Empty",
      number: 177
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105827,
      status: "Empty",
      number: 178
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105828,
      status: "Empty",
      number: 179
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105829,
      status: "Empty",
      number: 180
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105830,
      status: "Empty",
      number: 181
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105831,
      status: "Empty",
      number: 182
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105832,
      status: "Empty",
      number: 183
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105833,
      status: "Empty",
      number: 184
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105834,
      status: "Empty",
      number: 185
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105835,
      status: "Empty",
      number: 186
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105836,
      status: "Empty",
      number: 187
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105837,
      status: "Empty",
      number: 188
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105838,
      status: "Empty",
      number: 189
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105839,
      status: "Empty",
      number: 190
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105840,
      status: "Empty",
      number: 191
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105841,
      status: "Empty",
      number: 192
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105842,
      status: "Empty",
      number: 193
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105843,
      status: "Empty",
      number: 194
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105844,
      status: "Empty",
      number: 195
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105845,
      status: "Empty",
      number: 196
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105846,
      status: "Empty",
      number: 197
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105847,
      status: "Empty",
      number: 198
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105848,
      status: "Empty",
      number: 199
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 105849,
      status: "Empty",
      number: 200
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111849,
      status: "Empty",
      number: 201
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111850,
      status: "Empty",
      number: 202
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111851,
      status: "Empty",
      number: 203
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111852,
      status: "Empty",
      number: 204
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111853,
      status: "Empty",
      number: 205
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111854,
      status: "Empty",
      number: 206
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111855,
      status: "Empty",
      number: 207
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111856,
      status: "Empty",
      number: 208
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111857,
      status: "Empty",
      number: 209
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111858,
      status: "Empty",
      number: 210
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111859,
      status: "Empty",
      number: 211
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111860,
      status: "Empty",
      number: 212
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111861,
      status: "Empty",
      number: 213
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111862,
      status: "Empty",
      number: 214
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111863,
      status: "Empty",
      number: 215
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111864,
      status: "Empty",
      number: 216
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111865,
      status: "Empty",
      number: 217
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111866,
      status: "Empty",
      number: 218
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111867,
      status: "Empty",
      number: 219
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111868,
      status: "Empty",
      number: 220
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111869,
      status: "Empty",
      number: 221
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111870,
      status: "Empty",
      number: 222
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111871,
      status: "Empty",
      number: 223
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111872,
      status: "Empty",
      number: 224
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111873,
      status: "Empty",
      number: 225
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111874,
      status: "Empty",
      number: 226
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111875,
      status: "Empty",
      number: 227
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111876,
      status: "Empty",
      number: 228
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111877,
      status: "Empty",
      number: 229
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111878,
      status: "Empty",
      number: 230
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111879,
      status: "Empty",
      number: 231
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111880,
      status: "Empty",
      number: 232
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111881,
      status: "Empty",
      number: 233
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111882,
      status: "Empty",
      number: 234
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111883,
      status: "Empty",
      number: 235
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111884,
      status: "Empty",
      number: 236
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111885,
      status: "Empty",
      number: 237
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111886,
      status: "Empty",
      number: 238
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111887,
      status: "Empty",
      number: 239
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111888,
      status: "Empty",
      number: 240
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111889,
      status: "Empty",
      number: 241
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111890,
      status: "Empty",
      number: 242
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111891,
      status: "Empty",
      number: 243
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111892,
      status: "Empty",
      number: 244
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111893,
      status: "Empty",
      number: 245
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111894,
      status: "Empty",
      number: 246
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111895,
      status: "Empty",
      number: 247
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111896,
      status: "Empty",
      number: 248
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111897,
      status: "Empty",
      number: 249
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111898,
      status: "Empty",
      number: 250
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111899,
      status: "Empty",
      number: 251
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111900,
      status: "Empty",
      number: 252
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111901,
      status: "Empty",
      number: 253
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111902,
      status: "Empty",
      number: 254
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111903,
      status: "Empty",
      number: 255
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111904,
      status: "Empty",
      number: 256
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111905,
      status: "Empty",
      number: 257
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111906,
      status: "Empty",
      number: 258
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111907,
      status: "Empty",
      number: 259
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111908,
      status: "Empty",
      number: 260
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111909,
      status: "Empty",
      number: 261
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111910,
      status: "Empty",
      number: 262
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111911,
      status: "Empty",
      number: 263
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111912,
      status: "Empty",
      number: 264
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111913,
      status: "Empty",
      number: 265
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111914,
      status: "Empty",
      number: 266
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111915,
      status: "Empty",
      number: 267
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111916,
      status: "Empty",
      number: 268
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111917,
      status: "Empty",
      number: 269
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111918,
      status: "Empty",
      number: 270
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111919,
      status: "Empty",
      number: 271
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111920,
      status: "Empty",
      number: 272
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111921,
      status: "Empty",
      number: 273
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111922,
      status: "Empty",
      number: 274
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111923,
      status: "Empty",
      number: 275
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111924,
      status: "Empty",
      number: 276
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111925,
      status: "Empty",
      number: 277
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111926,
      status: "Empty",
      number: 278
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111927,
      status: "Empty",
      number: 279
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111928,
      status: "Empty",
      number: 280
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111929,
      status: "Empty",
      number: 281
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111930,
      status: "Empty",
      number: 282
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111931,
      status: "Empty",
      number: 283
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111932,
      status: "Empty",
      number: 284
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111933,
      status: "Empty",
      number: 285
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111934,
      status: "Empty",
      number: 286
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111935,
      status: "Empty",
      number: 287
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111936,
      status: "Empty",
      number: 288
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111937,
      status: "Empty",
      number: 289
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111938,
      status: "Empty",
      number: 290
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111939,
      status: "Empty",
      number: 291
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111940,
      status: "Empty",
      number: 292
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111941,
      status: "Empty",
      number: 293
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111942,
      status: "Empty",
      number: 294
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111943,
      status: "Empty",
      number: 295
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111944,
      status: "Empty",
      number: 296
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111945,
      status: "Empty",
      number: 297
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111946,
      status: "Empty",
      number: 298
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111947,
      status: "Empty",
      number: 299
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 111948,
      status: "Empty",
      number: 300
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121013,
      status: "Empty",
      number: 301
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121014,
      status: "Empty",
      number: 302
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121015,
      status: "Empty",
      number: 303
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121016,
      status: "Empty",
      number: 304
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121017,
      status: "Empty",
      number: 305
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121018,
      status: "Empty",
      number: 306
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121019,
      status: "Empty",
      number: 307
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121020,
      status: "Empty",
      number: 308
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121021,
      status: "Empty",
      number: 309
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121022,
      status: "Empty",
      number: 310
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121023,
      status: "Empty",
      number: 311
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121024,
      status: "Empty",
      number: 312
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121025,
      status: "Empty",
      number: 313
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121026,
      status: "Empty",
      number: 314
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121027,
      status: "Empty",
      number: 315
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121028,
      status: "Empty",
      number: 316
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121029,
      status: "Empty",
      number: 317
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121030,
      status: "Empty",
      number: 318
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121031,
      status: "Empty",
      number: 319
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121032,
      status: "Empty",
      number: 320
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121033,
      status: "Empty",
      number: 321
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121034,
      status: "Empty",
      number: 322
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121035,
      status: "Empty",
      number: 323
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121036,
      status: "Empty",
      number: 324
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121037,
      status: "Empty",
      number: 325
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121038,
      status: "Empty",
      number: 326
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121039,
      status: "Empty",
      number: 327
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121040,
      status: "Empty",
      number: 328
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121041,
      status: "Empty",
      number: 329
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121042,
      status: "Empty",
      number: 330
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121043,
      status: "Empty",
      number: 331
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121044,
      status: "Empty",
      number: 332
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121045,
      status: "Empty",
      number: 333
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121046,
      status: "Empty",
      number: 334
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121047,
      status: "Empty",
      number: 335
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121048,
      status: "Empty",
      number: 336
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121049,
      status: "Empty",
      number: 337
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121050,
      status: "Empty",
      number: 338
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121051,
      status: "Empty",
      number: 339
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121052,
      status: "Empty",
      number: 340
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121053,
      status: "Empty",
      number: 341
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121054,
      status: "Empty",
      number: 342
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121055,
      status: "Empty",
      number: 343
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121056,
      status: "Empty",
      number: 344
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121057,
      status: "Empty",
      number: 345
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121058,
      status: "Empty",
      number: 346
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121059,
      status: "Empty",
      number: 347
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121060,
      status: "Empty",
      number: 348
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121061,
      status: "Empty",
      number: 349
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121062,
      status: "Empty",
      number: 350
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121063,
      status: "Empty",
      number: 351
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121064,
      status: "Empty",
      number: 352
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121065,
      status: "Empty",
      number: 353
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121066,
      status: "Empty",
      number: 354
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121067,
      status: "Empty",
      number: 355
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121068,
      status: "Empty",
      number: 356
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121069,
      status: "Empty",
      number: 357
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121070,
      status: "Empty",
      number: 358
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121071,
      status: "Empty",
      number: 359
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121072,
      status: "Empty",
      number: 360
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121073,
      status: "Empty",
      number: 361
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121074,
      status: "Empty",
      number: 362
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121075,
      status: "Empty",
      number: 363
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121076,
      status: "Empty",
      number: 364
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121077,
      status: "Empty",
      number: 365
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121078,
      status: "Empty",
      number: 366
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121079,
      status: "Empty",
      number: 367
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121080,
      status: "Empty",
      number: 368
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121081,
      status: "Empty",
      number: 369
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121082,
      status: "Empty",
      number: 370
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121083,
      status: "Empty",
      number: 371
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121084,
      status: "Empty",
      number: 372
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121085,
      status: "Empty",
      number: 373
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121086,
      status: "Empty",
      number: 374
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121087,
      status: "Empty",
      number: 375
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121088,
      status: "Empty",
      number: 376
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121089,
      status: "Empty",
      number: 377
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121090,
      status: "Empty",
      number: 378
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121091,
      status: "Empty",
      number: 379
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121092,
      status: "Empty",
      number: 380
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121093,
      status: "Empty",
      number: 381
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121094,
      status: "Empty",
      number: 382
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121095,
      status: "Empty",
      number: 383
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121096,
      status: "Empty",
      number: 384
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121097,
      status: "Empty",
      number: 385
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121098,
      status: "Empty",
      number: 386
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121099,
      status: "Empty",
      number: 387
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121100,
      status: "Empty",
      number: 388
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121101,
      status: "Empty",
      number: 389
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121102,
      status: "Empty",
      number: 390
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121103,
      status: "Empty",
      number: 391
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121104,
      status: "Empty",
      number: 392
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121105,
      status: "Empty",
      number: 393
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121106,
      status: "Empty",
      number: 394
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121107,
      status: "Empty",
      number: 395
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121108,
      status: "Empty",
      number: 396
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121109,
      status: "Empty",
      number: 397
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121110,
      status: "Empty",
      number: 398
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121111,
      status: "Empty",
      number: 399
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121112,
      status: "Empty",
      number: 400
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121113,
      status: "Empty",
      number: 401
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121114,
      status: "Empty",
      number: 402
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121115,
      status: "Empty",
      number: 403
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121116,
      status: "Empty",
      number: 404
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121117,
      status: "Empty",
      number: 405
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121118,
      status: "Empty",
      number: 406
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121119,
      status: "Empty",
      number: 407
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121120,
      status: "Empty",
      number: 408
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121121,
      status: "Empty",
      number: 409
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121122,
      status: "Empty",
      number: 410
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121123,
      status: "Empty",
      number: 411
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121124,
      status: "Empty",
      number: 412
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121125,
      status: "Empty",
      number: 413
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121126,
      status: "Empty",
      number: 414
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121127,
      status: "Empty",
      number: 415
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121128,
      status: "Empty",
      number: 416
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121129,
      status: "Empty",
      number: 417
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121130,
      status: "Empty",
      number: 418
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121131,
      status: "Empty",
      number: 419
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121132,
      status: "Empty",
      number: 420
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121133,
      status: "Empty",
      number: 421
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121134,
      status: "Empty",
      number: 422
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121135,
      status: "Empty",
      number: 423
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121136,
      status: "Empty",
      number: 424
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121137,
      status: "Empty",
      number: 425
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121138,
      status: "Empty",
      number: 426
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121139,
      status: "Empty",
      number: 427
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121140,
      status: "Empty",
      number: 428
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121141,
      status: "Empty",
      number: 429
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121142,
      status: "Empty",
      number: 430
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121143,
      status: "Empty",
      number: 431
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121144,
      status: "Empty",
      number: 432
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121145,
      status: "Empty",
      number: 433
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121146,
      status: "Empty",
      number: 434
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121147,
      status: "Empty",
      number: 435
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121148,
      status: "Empty",
      number: 436
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121149,
      status: "Empty",
      number: 437
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121150,
      status: "Empty",
      number: 438
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121151,
      status: "Empty",
      number: 439
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121152,
      status: "Empty",
      number: 440
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121153,
      status: "Empty",
      number: 441
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121154,
      status: "Empty",
      number: 442
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121155,
      status: "Empty",
      number: 443
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121156,
      status: "Empty",
      number: 444
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121157,
      status: "Empty",
      number: 445
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121158,
      status: "Empty",
      number: 446
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121159,
      status: "Empty",
      number: 447
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121160,
      status: "Empty",
      number: 448
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121161,
      status: "Empty",
      number: 449
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121162,
      status: "Empty",
      number: 450
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121163,
      status: "Empty",
      number: 451
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121164,
      status: "Empty",
      number: 452
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121165,
      status: "Empty",
      number: 453
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121166,
      status: "Empty",
      number: 454
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121167,
      status: "Empty",
      number: 455
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121168,
      status: "Empty",
      number: 456
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121169,
      status: "Empty",
      number: 457
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121170,
      status: "Empty",
      number: 458
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121171,
      status: "Empty",
      number: 459
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121172,
      status: "Empty",
      number: 460
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121173,
      status: "Empty",
      number: 461
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121174,
      status: "Empty",
      number: 462
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121175,
      status: "Empty",
      number: 463
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121176,
      status: "Empty",
      number: 464
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121177,
      status: "Empty",
      number: 465
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121178,
      status: "Empty",
      number: 466
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121179,
      status: "Empty",
      number: 467
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121180,
      status: "Empty",
      number: 468
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121181,
      status: "Empty",
      number: 469
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121182,
      status: "Empty",
      number: 470
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121183,
      status: "Empty",
      number: 471
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121184,
      status: "Empty",
      number: 472
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121185,
      status: "Empty",
      number: 473
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121186,
      status: "Empty",
      number: 474
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121187,
      status: "Empty",
      number: 475
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121188,
      status: "Empty",
      number: 476
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121189,
      status: "Empty",
      number: 477
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121190,
      status: "Empty",
      number: 478
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121191,
      status: "Empty",
      number: 479
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121192,
      status: "Empty",
      number: 480
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121193,
      status: "Empty",
      number: 481
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121194,
      status: "Empty",
      number: 482
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121195,
      status: "Empty",
      number: 483
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121196,
      status: "Empty",
      number: 484
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121197,
      status: "Empty",
      number: 485
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121198,
      status: "Empty",
      number: 486
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121199,
      status: "Empty",
      number: 487
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121200,
      status: "Empty",
      number: 488
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121201,
      status: "Empty",
      number: 489
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121202,
      status: "Empty",
      number: 490
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121203,
      status: "Empty",
      number: 491
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121204,
      status: "Empty",
      number: 492
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121205,
      status: "Empty",
      number: 493
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121206,
      status: "Empty",
      number: 494
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121207,
      status: "Empty",
      number: 495
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121208,
      status: "Empty",
      number: 496
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121209,
      status: "Empty",
      number: 497
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121210,
      status: "Empty",
      number: 498
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121211,
      status: "Empty",
      number: 499
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 121212,
      status: "Empty",
      number: 500
    }],
    tableMeta: {
      currentPage: 1,
      tablePerPage: 500,
      totalPages: 2,
      totalTableCount: 501
    },
    slotTablesOn: !0,
    slotTableUpdated: 1,
    avatars: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13", "a14", "a15", "a16", "a17", "a18", "a19", "a20", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
  }
}), _publish("oneComboSpin", {
  token: "0333c20be2c047ed822048514b52eff3",
  engine: {
    gameState: [{
      action: "spin",
      totalStake: .4,
      view: [[5, 3, 7, 8, 7, 3], [2, 8, 1, 8, 8, 3], [2, 8, 4, 3, 8, 7], [7, 3, 4, 3, 3, 3], [7, 3, 7, 8, 3, 3]],
      winSymbols: [{
        symbol: 9,
        symbolPos: [1, 5, 11, 15, 19, 21, 23, 25, 29],
        winnings: .1
      }],
      timesSymbols: [],
      timesUpgrade: [],
      posTransform: [{
        beforePos: 17,
        afterPos: 29
      }, {
        beforePos: 13,
        afterPos: 25
      }, {
        beforePos: 9,
        afterPos: 21
      }, {
        beforePos: 7,
        afterPos: 19
      }, {
        beforePos: 3,
        afterPos: 15
      }],
      startFreeGame: !1,
      freeGameCount: 0,
      isJp: "",
      currentTimes: -1,
      roundWinnings: .1,
      totalWinnings: .1,
      totalViews: 3,
      currentView: 0,
      noWinReward: 0
    }, {
      action: "spin",
      totalStake: .4,
      view: [[5, 7, 7, 1, 7, 1], [2, 7, 1, 7, 8, 8], [2, 9, 4, 8, 8, 8], [7, 8, 4, 8, 3, 7], [7, 8, 7, 8, 3, 7]],
      winSymbols: [{
        symbol: 7,
        symbolPos: [1, 2, 4, 7, 9, 18, 23, 24, 26, 29],
        winnings: .4
      }, {
        symbol: 8,
        symbolPos: [10, 11, 15, 16, 17, 19, 21, 25, 27],
        winnings: .16
      }],
      timesSymbols: [],
      timesUpgrade: [],
      posTransform: [{
        beforePos: 20,
        afterPos: 26
      }, {
        beforePos: 14,
        afterPos: 20
      }, {
        beforePos: 13,
        afterPos: 25
      }, {
        beforePos: 12,
        afterPos: 24
      }, {
        beforePos: 8,
        afterPos: 14
      }, {
        beforePos: 6,
        afterPos: 18
      }, {
        beforePos: 5,
        afterPos: 29
      }, {
        beforePos: 3,
        afterPos: 27
      }, {
        beforePos: 0,
        afterPos: 12
      }],
      startFreeGame: !1,
      freeGameCount: 0,
      isJp: "",
      currentTimes: -1,
      roundWinnings: .66,
      totalWinnings: .66,
      totalViews: 3,
      currentView: 1,
      noWinReward: 0
    }, {
      action: "spin",
      totalStake: .4,
      view: [[9, 2, 6, 8, 5, 8], [5, 2, 7, 8, 5, 1], [5, 9, 1, 7, 7, 3], [2, 9, 4, 1, 3, 3], [2, 9, 4, 1, 3, 1]],
      winSymbols: [],
      timesSymbols: [],
      timesUpgrade: [],
      posTransform: [],
      startFreeGame: !1,
      freeGameCount: 0,
      isJp: "",
      currentTimes: -1,
      roundWinnings: .66,
      totalWinnings: .66,
      totalViews: 3,
      currentView: 2,
      noWinReward: 0
    }],
    spinId: "682bf385350d7972aa62122c"
  },
  platform: {
    player: {
      balance: {
        currency: "TWD",
        betAmount: 49153039.33,
        amount: 49153039.33
      },
      uid: 939
    },
    backend: "golang",
    game: {
      stakeValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ratioValues: [.02, .05, .1, .2, .4, 1, 3, 4, 5, 6, 7, 8, 10]
    }
  },
  status: 200,
  message: "ok",
  eventName: "spin"
}), _publish("timesComboSpin", {
  status: 200,
  message: "ok",
  eventName: "spin",
  token: "45d414da44554a2a947c6516c5c477b3",
  engine: {
    gameState: [{
      action: "spin",
      totalStake: .4,
      view: [[13, 1, 13, 3, 1, 13], [2, 8, 4, 3, 2, 8], [2, 8, 8, 9, 2, 4], [8, 6, 8, 9, 9, 5], [13, 13, 13, 13, 13, 13]],
      winSymbols: [{
        symbol: 8,
        symbolPos: [5, 7, 11, 13, 14, 18, 20, 24, 26, 28, 27, 25, 29],
        winnings: .16
      }],
      timesSymbols: [{
        symbol: 13,
        symbolPos: 2,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 29,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 28,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 27,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 26,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 25,
        times: 2,
        isRare: !0
      }, {
        symbol: 13,
        symbolPos: 24,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 0,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 5,
        times: 2,
        isRare: !1
      }],
      timesUpgrade: [],
      posTransform: [{
        beforePos: 12,
        afterPos: 24
      }, {
        beforePos: 8,
        afterPos: 26
      }, {
        beforePos: 6,
        afterPos: 18
      }, {
        beforePos: 2,
        afterPos: 20
      }, {
        beforePos: 1,
        afterPos: 13
      }, {
        beforePos: 0,
        afterPos: 12
      }],
      startFreeGame: !1,
      freeGameCount: 0,
      isJp: "",
      currentTimes: -1,
      roundWinnings: .16,
      totalWinnings: .16,
      totalViews: 2,
      currentView: 0,
      noWinReward: 0
    }, {
      action: "spin",
      totalStake: .4,
      view: [[13, 6, 5, 3, 1, 13], [1, 1, 9, 3, 2, 4], [1, 1, 9, 9, 2, 4], [2, 6, 13, 9, 9, 5], [13, 13, 13, 13, 13, 13]],
      winSymbols: [],
      timesSymbols: [{
        symbol: 13,
        symbolPos: 20,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 29,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 28,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 27,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 26,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 25,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 0,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 5,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 12,
        times: 2,
        isRare: !1
      }],
      timesUpgrade: [],
      posTransform: [],
      startFreeGame: !1,
      freeGameCount: 0,
      isJp: "",
      currentTimes: -1,
      roundWinnings: .32,
      totalWinnings: .32,
      totalViews: 2,
      currentView: 1,
      noWinReward: 0
    }],
    spinId: "6825b45aaa1915bdc8287905"
  },
  platform: {
    game: {
      ratioValues: [.02, .05, .1, .2, .4, 1, 3, 4, 5, 6, 7, 8, 10],
      stakeValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    player: {
      uid: 937,
      balance: {
        currency: "TWD",
        betAmount: 137354.45,
        amount: 137354.45
      }
    },
    backend: "golang"
  }
}), _publish("freeGameSpin", {
  resumptionType: "spin",
  eventName: "initial",
  token: "df079bc435a54dc18f800c961c084d40",
  engine: {
    definition: {
      symbolDefs: [{
        symbol: 1,
        displayName: "S1"
      }, {
        symbol: 2,
        displayName: "S2"
      }, {
        symbol: 3,
        displayName: "S3"
      }, {
        symbol: 4,
        displayName: "S4"
      }, {
        symbol: 5,
        displayName: "S5"
      }, {
        symbol: 6,
        displayName: "S6"
      }, {
        symbol: 7,
        displayName: "S7"
      }, {
        symbol: 8,
        displayName: "S8"
      }, {
        symbol: 9,
        displayName: "S9"
      }, {
        symbol: 10,
        displayName: "T1"
      }, {
        symbol: 11,
        displayName: "T2"
      }, {
        symbol: 12,
        displayName: "T3"
      }, {
        symbol: 13,
        displayName: "T4"
      }, {
        symbol: 14,
        displayName: "JP"
      }, {
        symbol: 15,
        displayName: "SCATTER"
      }],
      winOddsTypes: {
        superWin: 50,
        megaWin: 100,
        ultraWin: 300,
        legendaryWin: 1e3,
        win: 20,
        bigWin: 20
      },
      autoSpinInterval: .15,
      isDemo: !1,
      extraFgRounds: 5,
      prizeAutoNextDelay: 10,
      gameState: {
        timesSymbols: [{
          symbolPos: 25,
          times: 150,
          isRare: !0,
          symbol: 10
        }, {
          symbolPos: 1,
          times: 50,
          isRare: !1,
          symbol: 11
        }]
      },
      buyFeature: [{
        feature: "freeGame",
        featureRate: 100
      }],
      oddsList: {
        1: {
          8: 200,
          9: 200,
          10: 500,
          11: 500,
          12: 1e3
        },
        2: {
          8: 50,
          9: 50,
          10: 200,
          11: 200,
          12: 500
        },
        3: {
          8: 40,
          9: 40,
          10: 100,
          11: 100,
          12: 300
        },
        4: {
          8: 30,
          9: 30,
          10: 40,
          11: 40,
          12: 240
        },
        5: {
          8: 20,
          9: 20,
          10: 30,
          11: 30,
          12: 200
        },
        6: {
          8: 16,
          9: 16,
          10: 24,
          11: 24,
          12: 160
        },
        7: {
          8: 10,
          9: 10,
          10: 20,
          11: 20,
          12: 100
        },
        8: {
          8: 8,
          9: 8,
          10: 18,
          11: 18,
          12: 80
        },
        9: {
          8: 5,
          9: 5,
          10: 15,
          11: 15,
          12: 40
        },
        15: {
          4: 60,
          5: 100,
          6: 2e3
        }
      },
      winlineDefs: [{
        order: "0",
        line: []
      }, {
        order: "1",
        line: []
      }, {
        order: "2",
        line: []
      }, {
        order: "3",
        line: []
      }, {
        order: "4",
        line: []
      }, {
        order: "5",
        line: []
      }, {
        order: "6",
        line: []
      }, {
        order: "7",
        line: []
      }, {
        order: "8",
        line: []
      }, {
        order: "9",
        line: []
      }, {
        order: "10",
        line: []
      }, {
        order: "11",
        line: []
      }, {
        order: "12",
        line: []
      }, {
        order: "13",
        line: []
      }, {
        order: "14",
        line: []
      }, {
        order: "15",
        line: []
      }, {
        order: "16",
        line: []
      }, {
        order: "17",
        line: []
      }, {
        order: "18",
        line: []
      }, {
        order: "19",
        line: []
      }],
      autoConfirmTime: 0,
      smallPrizeDelay: .5,
      bigPrizeDelay: 2,
      digital: 2
    },
    gameState: [{
      totalWinnings: 1.2,
      noWinReward: 0,
      view: [[4, 6, 7, 7, 4, 9], [4, 7, 5, 8, 15, 8], [5, 7, 2, 8, 1, 8], [15, 6, 15, 7, 1, 9], [7, 6, 8, 6, 7, 15]],
      winSymbols: [],
      timesUpgrade: [],
      posTransform: [],
      freeGameCount: 15,
      isJp: "",
      startFreeGame: !0,
      totalViews: 29,
      timesSymbols: [],
      action: "spin",
      totalStake: .4,
      currentTimes: -1,
      roundWinnings: 1.2,
      currentView: 0
    }, {
      isJp: "",
      currentTimes: 0,
      roundWinnings: .36,
      view: [[8, 4, 8, 6, 8, 3], [8, 4, 8, 7, 8, 3], [7, 8, 6, 7, 8, 7], [7, 8, 6, 9, 4, 7], [2, 2, 5, 9, 4, 8]],
      timesSymbols: [],
      currentView: 1,
      winSymbols: [{
        winnings: .36,
        symbol: 8,
        symbolPos: [0, 2, 4, 6, 8, 10, 13, 16, 19, 29]
      }],
      startFreeGame: !1,
      freeGameCount: 14,
      totalViews: 29,
      totalStake: .4,
      timesUpgrade: [],
      totalWinnings: 1.56,
      noWinReward: 0,
      action: "freeSpin",
      posTransform: [{
        beforePos: 23,
        afterPos: 29
      }, {
        beforePos: 17,
        afterPos: 23
      }, {
        beforePos: 11,
        afterPos: 17
      }, {
        beforePos: 7,
        afterPos: 19
      }, {
        beforePos: 5,
        afterPos: 11
      }, {
        beforePos: 1,
        afterPos: 13
      }]
    }, {
      isJp: "",
      noWinReward: 0,
      view: [[3, 6, 7, 6, 13, 6], [15, 6, 7, 7, 15, 3], [7, 4, 6, 7, 8, 3], [7, 4, 6, 9, 4, 7], [2, 2, 5, 9, 4, 7]],
      startFreeGame: !1,
      freeGameCount: 14,
      posTransform: [{
        afterPos: 29,
        beforePos: 17
      }, {
        afterPos: 23,
        beforePos: 11
      }, {
        afterPos: 18,
        beforePos: 6
      }, {
        afterPos: 17,
        beforePos: 5
      }, {
        afterPos: 15,
        beforePos: 3
      }, {
        afterPos: 12,
        beforePos: 0
      }],
      totalWinnings: 1.76,
      totalViews: 29,
      action: "freeSpin",
      winSymbols: [{
        symbol: 7,
        symbolPos: [2, 8, 9, 12, 15, 18, 23, 29],
        winnings: .2
      }],
      timesSymbols: [{
        times: 4,
        isRare: !0,
        symbol: 13,
        symbolPos: 4
      }],
      currentView: 2,
      roundWinnings: .56,
      totalStake: .4,
      timesUpgrade: [{
        afterSymbol: 13,
        beforeTimes: 4,
        afterTimes: 6,
        symbolPos: 4,
        beforeSymbol: 13
      }],
      currentTimes: 0
    }, {
      action: "freeSpin",
      timesUpgrade: [{
        symbolPos: 4,
        beforeSymbol: 13,
        afterSymbol: 13,
        beforeTimes: 6,
        afterTimes: 8
      }],
      currentView: 3,
      startFreeGame: !1,
      freeGameCount: 14,
      isJp: "",
      roundWinnings: 3.76,
      totalWinnings: 4.96,
      totalViews: 29,
      view: [[6, 6, 6, 7, 13, 8], [6, 6, 6, 6, 15, 6], [3, 4, 6, 6, 8, 6], [15, 4, 6, 9, 4, 3], [2, 2, 5, 9, 4, 3]],
      winSymbols: [{
        symbolPos: [0, 1, 2, 6, 7, 8, 9, 11, 14, 15, 17, 20],
        winnings: 3.2,
        symbol: 6
      }],
      timesSymbols: [{
        symbol: 13,
        symbolPos: 4,
        times: 6,
        isRare: !0
      }],
      currentTimes: 0,
      totalStake: .4,
      posTransform: [{
        beforePos: 5,
        afterPos: 17
      }, {
        beforePos: 3,
        afterPos: 15
      }],
      noWinReward: 0
    }, {
      view: [[13, 8, 6, 10, 13, 13], [13, 8, 8, 7, 15, 13], [3, 4, 8, 7, 8, 8], [15, 4, 6, 9, 4, 3], [2, 2, 5, 9, 4, 3]],
      winSymbols: [],
      posTransform: [],
      currentTimes: 0,
      totalWinnings: 448.64,
      currentView: 4,
      totalStake: .4,
      startFreeGame: !1,
      roundWinnings: 447.44,
      totalViews: 29,
      timesSymbols: [{
        symbol: 13,
        symbolPos: 4,
        times: 8,
        isRare: !0
      }, {
        symbol: 13,
        symbolPos: 0,
        times: 2,
        isRare: !0
      }, {
        symbol: 10,
        symbolPos: 3,
        times: 100,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 5,
        times: 3,
        isRare: !0
      }, {
        symbol: 13,
        symbolPos: 6,
        times: 2,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 11,
        times: 4,
        isRare: !0
      }],
      freeGameCount: 14,
      action: "freeSpin",
      timesUpgrade: [],
      isJp: "",
      noWinReward: 0
    }, {
      action: "freeSpin",
      startFreeGame: !1,
      currentView: 5,
      totalStake: .4,
      timesSymbols: [{
        symbol: 10,
        symbolPos: 23,
        times: 200,
        isRare: !0
      }, {
        symbol: 10,
        symbolPos: 27,
        times: 150,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 28,
        times: 4,
        isRare: !0
      }],
      isJp: "",
      roundWinnings: .16,
      currentTimes: 119,
      freeGameCount: 13,
      totalWinnings: 448.8,
      totalViews: 29,
      noWinReward: 0,
      view: [[5, 5, 9, 3, 5, 3], [5, 9, 3, 8, 5, 3], [8, 6, 3, 8, 8, 9], [8, 6, 8, 6, 8, 10], [7, 2, 8, 10, 13, 6]],
      winSymbols: [{
        symbol: 8,
        symbolPos: [9, 12, 15, 16, 18, 20, 22, 26],
        winnings: .16
      }],
      timesUpgrade: [{
        symbolPos: 23,
        beforeSymbol: 10,
        afterSymbol: 10,
        beforeTimes: 200,
        afterTimes: 250
      }, {
        symbolPos: 28,
        beforeSymbol: 13,
        afterSymbol: 13,
        beforeTimes: 4,
        afterTimes: 6
      }],
      posTransform: [{
        beforePos: 14,
        afterPos: 26
      }, {
        beforePos: 10,
        afterPos: 22
      }, {
        beforePos: 8,
        afterPos: 20
      }, {
        beforePos: 6,
        afterPos: 18
      }, {
        beforePos: 4,
        afterPos: 16
      }, {
        beforePos: 3,
        afterPos: 15
      }, {
        beforePos: 2,
        afterPos: 14
      }, {
        beforePos: 0,
        afterPos: 12
      }]
    }, {
      roundWinnings: 132,
      noWinReward: 0,
      timesSymbols: [{
        times: 250,
        isRare: !0,
        symbol: 10,
        symbolPos: 23
      }, {
        times: 150,
        isRare: !1,
        symbol: 10,
        symbolPos: 27
      }, {
        times: 6,
        isRare: !0,
        symbol: 13,
        symbolPos: 28
      }, {
        times: 200,
        isRare: !0,
        symbol: 10,
        symbolPos: 2
      }, {
        times: 100,
        isRare: !0,
        symbol: 10,
        symbolPos: 8
      }],
      timesUpgrade: [],
      currentTimes: 119,
      winSymbols: [],
      currentView: 6,
      totalViews: 29,
      totalStake: .4,
      view: [[2, 5, 10, 2, 8, 3], [2, 9, 10, 3, 8, 3], [5, 6, 9, 3, 5, 9], [5, 6, 3, 6, 5, 10], [7, 2, 3, 10, 13, 6]],
      freeGameCount: 13,
      isJp: "",
      totalWinnings: 580.64,
      action: "freeSpin",
      posTransform: [],
      startFreeGame: !1
    }, {
      currentView: 7,
      totalStake: .4,
      freeGameCount: 12,
      isJp: "",
      totalWinnings: 580.64,
      view: [[3, 9, 2, 2, 3, 3], [8, 8, 8, 2, 3, 6], [8, 8, 8, 8, 4, 6], [9, 9, 9, 6, 4, 3], [9, 9, 9, 6, 3, 1]],
      roundWinnings: 0,
      winSymbols: [],
      timesSymbols: [],
      timesUpgrade: [],
      totalViews: 29,
      noWinReward: 0,
      action: "freeSpin",
      posTransform: [],
      startFreeGame: !1,
      currentTimes: 825
    }, {
      winSymbols: [],
      totalWinnings: 580.64,
      noWinReward: 0,
      posTransform: [],
      totalStake: .4,
      view: [[9, 5, 6, 6, 6, 8], [9, 5, 8, 6, 4, 4], [3, 3, 8, 3, 4, 4], [1, 3, 7, 3, 4, 4], [1, 6, 7, 3, 6, 4]],
      timesSymbols: [],
      startFreeGame: !1,
      freeGameCount: 11,
      currentTimes: 825,
      action: "freeSpin",
      timesUpgrade: [],
      isJp: "",
      roundWinnings: 0,
      totalViews: 29,
      currentView: 8
    }, {
      currentView: 9,
      noWinReward: 0,
      view: [[2, 9, 3, 1, 9, 9], [2, 13, 8, 2, 9, 5], [3, 8, 8, 2, 2, 5], [9, 8, 6, 6, 2, 3], [9, 2, 6, 6, 8, 3]],
      timesSymbols: [{
        symbol: 13,
        symbolPos: 7,
        times: 2,
        isRare: !0
      }],
      roundWinnings: 0,
      totalWinnings: 580.64,
      totalViews: 29,
      action: "freeSpin",
      totalStake: .4,
      currentTimes: 825,
      startFreeGame: !1,
      freeGameCount: 10,
      isJp: "",
      winSymbols: [],
      timesUpgrade: [],
      posTransform: []
    }, {
      view: [[9, 6, 2, 3, 4, 3], [9, 6, 2, 3, 6, 3], [5, 7, 1, 2, 6, 4], [5, 7, 7, 2, 9, 4], [2, 3, 7, 4, 9, 9]],
      winSymbols: [],
      timesUpgrade: [],
      isJp: "",
      noWinReward: 0,
      totalStake: .4,
      startFreeGame: !1,
      freeGameCount: 9,
      roundWinnings: 0,
      totalWinnings: 580.64,
      action: "freeSpin",
      posTransform: [],
      timesSymbols: [],
      currentTimes: 825,
      totalViews: 29,
      currentView: 10
    }, {
      noWinReward: 0,
      winSymbols: [{
        symbol: 7,
        symbolPos: [0, 1, 6, 7, 10, 12, 16, 17, 23],
        winnings: .2
      }],
      isJp: "",
      totalWinnings: 580.84,
      totalViews: 29,
      timesSymbols: [],
      timesUpgrade: [],
      currentTimes: 825,
      currentView: 11,
      totalStake: .4,
      freeGameCount: 8,
      posTransform: [{
        beforePos: 11,
        afterPos: 23
      }, {
        beforePos: 5,
        afterPos: 17
      }, {
        beforePos: 4,
        afterPos: 16
      }],
      startFreeGame: !1,
      roundWinnings: .2,
      action: "freeSpin",
      view: [[7, 7, 6, 9, 9, 4], [7, 7, 8, 9, 7, 15], [7, 9, 5, 8, 7, 7], [6, 9, 5, 8, 4, 7], [6, 8, 8, 4, 4, 5]]
    }, {
      startFreeGame: !1,
      freeGameCount: 8,
      currentTimes: 825,
      currentView: 12,
      totalStake: .4,
      timesUpgrade: [{
        symbolPos: 4,
        beforeSymbol: 13,
        afterSymbol: 13,
        beforeTimes: 2,
        afterTimes: 3
      }],
      roundWinnings: .3,
      noWinReward: 0,
      view: [[9, 9, 6, 9, 13, 8], [1, 9, 8, 9, 9, 8], [7, 9, 5, 8, 9, 4], [6, 9, 5, 8, 4, 15], [6, 8, 8, 4, 4, 5]],
      isJp: "",
      totalWinnings: 580.94,
      totalViews: 29,
      action: "freeSpin",
      posTransform: [{
        beforePos: 4,
        afterPos: 16
      }],
      winSymbols: [{
        symbol: 9,
        symbolPos: [0, 1, 3, 7, 9, 10, 13, 16, 19],
        winnings: .1
      }],
      timesSymbols: [{
        symbol: 13,
        symbolPos: 4,
        times: 2,
        isRare: !0
      }]
    }, {
      posTransform: [{
        beforePos: 20,
        afterPos: 26
      }, {
        beforePos: 14,
        afterPos: 20
      }, {
        beforePos: 9,
        afterPos: 21
      }, {
        beforePos: 7,
        afterPos: 25
      }, {
        beforePos: 3,
        afterPos: 15
      }, {
        beforePos: 2,
        afterPos: 14
      }, {
        beforePos: 1,
        afterPos: 19
      }],
      currentView: 13,
      timesSymbols: [{
        isRare: !0,
        symbol: 13,
        symbolPos: 16,
        times: 3
      }, {
        isRare: !0,
        symbol: 10,
        symbolPos: 10,
        times: 100
      }],
      startFreeGame: !1,
      isJp: "",
      timesUpgrade: [{
        symbolPos: 16,
        beforeSymbol: 13,
        afterSymbol: 13,
        beforeTimes: 3,
        afterTimes: 4
      }, {
        beforeSymbol: 10,
        afterSymbol: 10,
        beforeTimes: 100,
        afterTimes: 150,
        symbolPos: 10
      }],
      currentTimes: 825,
      roundWinnings: .46,
      totalWinnings: 581.1,
      winSymbols: [{
        symbolPos: [5, 8, 11, 13, 15, 19, 21, 25, 26],
        winnings: .16,
        symbol: 8
      }],
      totalStake: .4,
      view: [[9, 6, 6, 6, 9, 8], [1, 6, 8, 6, 10, 8], [7, 8, 5, 8, 13, 4], [6, 8, 5, 8, 4, 15], [6, 8, 8, 4, 4, 5]],
      freeGameCount: 8,
      totalViews: 29,
      noWinReward: 0,
      action: "freeSpin"
    }, {
      startFreeGame: !1,
      roundWinnings: .78,
      view: [[9, 3, 13, 7, 9, 10], [1, 3, 6, 8, 10, 9], [7, 15, 6, 6, 13, 4], [6, 6, 5, 6, 4, 15], [6, 6, 5, 4, 4, 5]],
      timesUpgrade: [{
        symbolPos: 16,
        beforeSymbol: 13,
        afterSymbol: 13,
        beforeTimes: 4,
        afterTimes: 6
      }, {
        afterTimes: 200,
        symbolPos: 10,
        beforeSymbol: 10,
        afterSymbol: 10,
        beforeTimes: 150
      }, {
        symbolPos: 2,
        beforeSymbol: 13,
        afterSymbol: 13,
        beforeTimes: 2,
        afterTimes: 3
      }],
      winSymbols: [{
        symbol: 6,
        symbolPos: [8, 14, 15, 18, 19, 21, 24, 25],
        winnings: .32
      }],
      timesSymbols: [{
        symbol: 13,
        symbolPos: 16,
        times: 4,
        isRare: !0
      }, {
        symbol: 10,
        symbolPos: 10,
        times: 150,
        isRare: !0
      }, {
        symbol: 13,
        symbolPos: 2,
        times: 2,
        isRare: !0
      }, {
        symbol: 10,
        symbolPos: 5,
        times: 250,
        isRare: !1
      }],
      currentTimes: 825,
      totalWinnings: 581.42,
      currentView: 14,
      totalStake: .4,
      freeGameCount: 8,
      isJp: "",
      totalViews: 29,
      noWinReward: 0,
      action: "freeSpin",
      posTransform: [{
        beforePos: 13,
        afterPos: 25
      }, {
        beforePos: 12,
        afterPos: 24
      }, {
        beforePos: 9,
        afterPos: 21
      }, {
        beforePos: 7,
        afterPos: 19
      }, {
        beforePos: 6,
        afterPos: 18
      }, {
        beforePos: 3,
        afterPos: 15
      }, {
        beforePos: 2,
        afterPos: 14
      }, {
        beforePos: 1,
        afterPos: 13
      }, {
        beforePos: 0,
        afterPos: 12
      }]
    }, {
      action: "freeSpin",
      totalStake: .4,
      view: [[8, 7, 9, 9, 9, 10], [1, 10, 10, 7, 10, 9], [9, 3, 13, 7, 13, 4], [1, 3, 5, 8, 4, 15], [7, 15, 5, 4, 4, 5]],
      winSymbols: [],
      isJp: "",
      timesUpgrade: [],
      noWinReward: 0,
      posTransform: [],
      startFreeGame: !1,
      roundWinnings: 1508.52,
      totalViews: 29,
      timesSymbols: [{
        symbol: 13,
        symbolPos: 16,
        times: 6,
        isRare: !0
      }, {
        symbol: 10,
        symbolPos: 10,
        times: 200,
        isRare: !0
      }, {
        symbol: 13,
        symbolPos: 14,
        times: 3,
        isRare: !0
      }, {
        symbol: 10,
        symbolPos: 5,
        times: 250,
        isRare: !1
      }, {
        symbol: 10,
        symbolPos: 7,
        times: 500,
        isRare: !1
      }, {
        symbol: 10,
        symbolPos: 8,
        times: 150,
        isRare: !1
      }],
      freeGameCount: 8,
      currentTimes: 825,
      totalWinnings: 2089.16,
      currentView: 15
    }, {
      totalWinnings: 2089.26,
      totalViews: 29,
      noWinReward: 0,
      currentView: 16,
      action: "freeSpin",
      totalStake: .4,
      view: [[2, 8, 6, 4, 6, 6], [3, 1, 9, 7, 9, 9], [3, 1, 9, 7, 9, 9], [2, 5, 2, 5, 6, 6], [9, 5, 9, 5, 6, 6]],
      posTransform: [{
        beforePos: 20,
        afterPos: 26
      }, {
        beforePos: 18,
        afterPos: 24
      }, {
        beforePos: 12,
        afterPos: 18
      }, {
        beforePos: 6,
        afterPos: 12
      }, {
        beforePos: 5,
        afterPos: 17
      }, {
        beforePos: 4,
        afterPos: 16
      }, {
        beforePos: 2,
        afterPos: 20
      }, {
        beforePos: 0,
        afterPos: 6
      }],
      freeGameCount: 7,
      roundWinnings: .1,
      winSymbols: [{
        symbol: 9,
        symbolPos: [8, 10, 11, 14, 16, 17, 24, 26],
        winnings: .1
      }],
      timesSymbols: [],
      currentTimes: 1934,
      timesUpgrade: [],
      startFreeGame: !1,
      isJp: ""
    }, {
      isJp: "",
      totalWinnings: 2089.58,
      totalViews: 29,
      startFreeGame: !1,
      noWinReward: 0,
      action: "freeSpin",
      view: [[10, 8, 9, 4, 3, 2], [2, 1, 9, 7, 3, 6], [3, 1, 6, 7, 6, 6], [3, 5, 6, 5, 6, 6], [2, 5, 2, 5, 6, 6]],
      freeGameCount: 7,
      currentView: 17,
      totalStake: .4,
      timesSymbols: [{
        symbol: 10,
        symbolPos: 0,
        times: 100,
        isRare: !1
      }],
      timesUpgrade: [],
      posTransform: [{
        beforePos: 10,
        afterPos: 28
      }, {
        beforePos: 8,
        afterPos: 20
      }, {
        beforePos: 5,
        afterPos: 29
      }, {
        beforePos: 4,
        afterPos: 22
      }, {
        beforePos: 2,
        afterPos: 14
      }],
      currentTimes: 1934,
      roundWinnings: .42,
      winSymbols: [{
        symbol: 6,
        symbolPos: [11, 14, 16, 17, 20, 22, 23, 28, 29],
        winnings: .32
      }]
    }, {
      currentTimes: 1934,
      currentView: 18,
      timesUpgrade: [],
      startFreeGame: !1,
      totalWinnings: 2985.44,
      view: [[10, 8, 7, 4, 9, 1], [2, 1, 7, 7, 10, 4], [3, 1, 9, 7, 8, 4], [3, 5, 9, 5, 3, 2], [2, 5, 2, 5, 3, 2]],
      timesSymbols: [{
        isRare: !1,
        symbol: 10,
        symbolPos: 0,
        times: 100
      }, {
        isRare: !0,
        symbol: 10,
        symbolPos: 10,
        times: 100
      }],
      isJp: "",
      roundWinnings: 896.28,
      noWinReward: 0,
      action: "freeSpin",
      winSymbols: [],
      posTransform: [],
      freeGameCount: 7,
      totalViews: 29,
      totalStake: .4
    }, {
      view: [[4, 2, 6, 7, 5, 8], [4, 7, 6, 3, 5, 8], [6, 7, 9, 3, 4, 4], [6, 9, 8, 6, 4, 4], [7, 9, 8, 6, 7, 1]],
      winSymbols: [],
      totalViews: 29,
      isJp: "",
      noWinReward: 0,
      freeGameCount: 6,
      currentTimes: 2134,
      roundWinnings: 0,
      currentView: 19,
      timesUpgrade: [],
      posTransform: [],
      startFreeGame: !1,
      totalWinnings: 2985.44,
      action: "freeSpin",
      totalStake: .4,
      timesSymbols: []
    }, {
      startFreeGame: !1,
      freeGameCount: 5,
      totalViews: 29,
      winSymbols: [{
        symbol: 7,
        symbolPos: [3, 7, 9, 13, 19, 22, 25, 27, 28],
        winnings: .2
      }],
      timesSymbols: [{
        symbol: 13,
        symbolPos: 8,
        times: 8,
        isRare: !1
      }, {
        symbol: 10,
        symbolPos: 11,
        times: 150,
        isRare: !1
      }, {
        symbol: 10,
        symbolPos: 17,
        times: 100,
        isRare: !1
      }],
      noWinReward: 0,
      currentView: 20,
      action: "freeSpin",
      totalStake: .4,
      timesUpgrade: [],
      isJp: "",
      currentTimes: 2134,
      totalWinnings: 2985.64,
      view: [[1, 4, 9, 7, 9, 2], [6, 7, 13, 7, 8, 10], [6, 7, 5, 6, 8, 10], [2, 7, 6, 6, 7, 5], [2, 7, 6, 7, 7, 5]],
      posTransform: [{
        beforePos: 21,
        afterPos: 27
      }, {
        beforePos: 16,
        afterPos: 28
      }, {
        beforePos: 15,
        afterPos: 21
      }, {
        beforePos: 10,
        afterPos: 22
      }, {
        beforePos: 4,
        afterPos: 16
      }, {
        beforePos: 1,
        afterPos: 25
      }],
      roundWinnings: .2
    }, {
      timesSymbols: [{
        symbol: 13,
        symbolPos: 8,
        times: 8,
        isRare: !1
      }, {
        symbol: 10,
        symbolPos: 11,
        times: 150,
        isRare: !1
      }, {
        symbol: 10,
        symbolPos: 17,
        times: 100,
        isRare: !1
      }],
      totalWinnings: 2986.12,
      totalViews: 29,
      noWinReward: 0,
      action: "freeSpin",
      totalStake: .4,
      view: [[1, 1, 9, 7, 2, 2], [6, 6, 13, 6, 9, 10], [6, 6, 5, 6, 9, 10], [2, 4, 6, 6, 8, 5], [2, 4, 6, 6, 8, 5]],
      freeGameCount: 5,
      roundWinnings: .68,
      isJp: "",
      currentTimes: 2134,
      startFreeGame: !1,
      currentView: 21,
      winSymbols: [{
        symbol: 6,
        symbolPos: [6, 7, 9, 12, 13, 15, 20, 21, 26, 27],
        winnings: .48
      }],
      timesUpgrade: [],
      posTransform: [{
        beforePos: 14,
        afterPos: 26
      }, {
        beforePos: 8,
        afterPos: 20
      }, {
        beforePos: 3,
        afterPos: 27
      }, {
        beforePos: 2,
        afterPos: 14
      }, {
        beforePos: 1,
        afterPos: 13
      }, {
        beforePos: 0,
        afterPos: 12
      }]
    }, {
      startFreeGame: !1,
      freeGameCount: 5,
      roundWinnings: 1627.92,
      noWinReward: 0,
      totalStake: .4,
      winSymbols: [],
      posTransform: [],
      timesUpgrade: [],
      currentView: 22,
      view: [[7, 4, 4, 7, 2, 2], [1, 13, 9, 3, 9, 10], [1, 1, 9, 3, 9, 10], [2, 4, 13, 7, 8, 5], [2, 4, 5, 7, 8, 5]],
      isJp: "",
      totalViews: 29,
      totalWinnings: 4613.36,
      action: "freeSpin",
      timesSymbols: [{
        symbol: 13,
        symbolPos: 20,
        times: 8,
        isRare: !1
      }, {
        symbol: 10,
        symbolPos: 11,
        times: 150,
        isRare: !1
      }, {
        symbol: 10,
        symbolPos: 17,
        times: 100,
        isRare: !1
      }, {
        symbol: 13,
        symbolPos: 7,
        times: 2,
        isRare: !0
      }],
      currentTimes: 2134
    }, {
      totalWinnings: 4613.36,
      currentView: 23,
      view: [[9, 9, 5, 6, 9, 2], [9, 6, 5, 8, 8, 2], [7, 6, 7, 8, 8, 7], [7, 4, 7, 8, 8, 1], [7, 4, 9, 8, 9, 1]],
      winSymbols: [],
      totalViews: 29,
      noWinReward: 0,
      posTransform: [],
      startFreeGame: !1,
      freeGameCount: 4,
      roundWinnings: 0,
      action: "freeSpin",
      totalStake: .4,
      isJp: "",
      currentTimes: 2394,
      timesSymbols: [],
      timesUpgrade: []
    }, {
      posTransform: [],
      roundWinnings: 0,
      noWinReward: 0,
      totalStake: .4,
      timesUpgrade: [],
      freeGameCount: 3,
      totalViews: 29,
      action: "freeSpin",
      view: [[9, 8, 9, 5, 1, 4], [3, 8, 4, 5, 1, 3], [3, 6, 4, 9, 9, 4], [8, 6, 3, 9, 9, 4], [8, 3, 3, 4, 8, 3]],
      isJp: "",
      currentView: 24,
      winSymbols: [],
      timesSymbols: [],
      totalWinnings: 4613.36,
      startFreeGame: !1,
      currentTimes: 2394
    }, {
      posTransform: [],
      isJp: "",
      currentTimes: 2394,
      currentView: 25,
      timesUpgrade: [],
      timesSymbols: [],
      startFreeGame: !1,
      totalViews: 29,
      winSymbols: [],
      totalWinnings: 4613.36,
      noWinReward: 0,
      view: [[8, 5, 6, 3, 2, 7], [8, 5, 9, 6, 2, 7], [4, 7, 9, 6, 7, 8], [5, 7, 8, 4, 7, 8], [5, 1, 8, 4, 6, 6]],
      totalStake: .4,
      freeGameCount: 2,
      roundWinnings: 0,
      action: "freeSpin"
    }, {
      action: "freeSpin",
      view: [[7, 4, 1, 3, 2, 4], [4, 5, 2, 3, 2, 6], [4, 5, 7, 9, 5, 6], [3, 6, 7, 9, 5, 4], [3, 6, 5, 2, 9, 1]],
      winSymbols: [],
      posTransform: [],
      roundWinnings: 0,
      totalViews: 29,
      noWinReward: 0,
      startFreeGame: !1,
      freeGameCount: 1,
      isJp: "",
      totalStake: .4,
      totalWinnings: 4613.36,
      timesSymbols: [],
      timesUpgrade: [],
      currentTimes: 2394,
      currentView: 26
    }, {
      timesUpgrade: [],
      freeGameCount: 0,
      currentView: 27,
      action: "freeSpin",
      view: [[7, 4, 1, 7, 4, 5], [7, 4, 1, 7, 5, 8], [6, 3, 2, 7, 3, 8], [6, 7, 2, 7, 3, 1], [8, 7, 3, 7, 5, 1]],
      startFreeGame: !1,
      roundWinnings: .2,
      totalStake: .4,
      timesSymbols: [],
      isJp: "",
      currentTimes: 2394,
      totalViews: 29,
      winSymbols: [{
        symbol: 7,
        symbolPos: [0, 3, 6, 9, 15, 19, 21, 25, 27],
        winnings: .2
      }],
      posTransform: [{
        beforePos: 13,
        afterPos: 25
      }, {
        beforePos: 7,
        afterPos: 19
      }, {
        beforePos: 1,
        afterPos: 13
      }],
      totalWinnings: 4613.56,
      noWinReward: 0
    }, {
      view: [[10, 13, 1, 15, 4, 5], [10, 10, 1, 10, 5, 8], [6, 4, 2, 10, 3, 8], [6, 4, 2, 10, 3, 1], [8, 3, 3, 13, 5, 1]],
      winSymbols: [],
      isJp: "",
      action: "freeSpin",
      totalStake: .4,
      noWinReward: 0,
      timesUpgrade: [],
      currentView: 28,
      totalWinnings: 5332.96,
      totalViews: 29,
      freeGameCount: 0,
      roundWinnings: 719.6,
      startFreeGame: !1,
      currentTimes: 2394,
      timesSymbols: [{
        isRare: !0,
        symbol: 10,
        symbolPos: 0,
        times: 100
      }, {
        isRare: !0,
        symbol: 13,
        symbolPos: 1,
        times: 2
      }, {
        isRare: !1,
        symbol: 10,
        symbolPos: 6,
        times: 250
      }, {
        isRare: !1,
        symbol: 10,
        symbolPos: 7,
        times: 150
      }, {
        isRare: !0,
        symbol: 10,
        symbolPos: 9,
        times: 100
      }, {
        isRare: !1,
        symbol: 10,
        symbolPos: 15,
        times: 100
      }, {
        isRare: !0,
        symbol: 10,
        symbolPos: 21,
        times: 500
      }, {
        isRare: !1,
        symbol: 13,
        symbolPos: 27,
        times: 2
      }],
      posTransform: []
    }],
    spinId: "68301499555133c19f1018a7"
  },
  status: 200,
  message: "ok",
  platform: {
    jackpotOn: !0,
    isInstantClose: !1,
    theme: "",
    betRecordUrl: "https://betrecord-web.riversense.tw",
    backend: "golang",
    game: {
      stakeValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ratioValues: [.02, .05, .1, .2, .4, 1, 3, 4, 5, 6, 7, 8, 10],
      stakeList: null,
      stakeKeyCounts: 0
    },
    player: {
      settings: {
        advancedSettings: {
          sounds: {
            backgroundVolume: 0,
            effectVolume: 1,
            background: !0,
            effect: !0
          },
          notify: !0,
          turbo: !1
        },
        autoPlay: {
          stopOnJackpot: !0,
          numberOfPlays: [10, 50, 100, 200, 500, -1],
          stopOnBalance: !1,
          stopOnFreeSpin: !1,
          stopOnWinMultiplierValue: 20,
          stopOnWinMultiplier: !0
        },
        stakeIndex: 0,
        ratioIndex: 0
      },
      clientSettings: null,
      name: "xiadan12345678",
      displayName: "xd002",
      balance: {
        amount: 49235810.13,
        gemAmount: 1294,
        currency: "TWD"
      },
      avatarUrl: "https://play.riversense.tw/avatars/a8.png",
      nameDisplayOn: !0,
      displayNameBlockTime: null,
      uid: 939,
      avatar: "a8"
    },
    gemSystem: 0,
    slotRankOn: !0,
    table: {
      number: 39,
      roomId: 200552,
      status: "Full",
      detail: {
        mgCounts: [0, 0, 0, 0, 0, 0],
        dayWin: 13324.46,
        dayBet: 120,
        hourWin: 0,
        hourBet: 0,
        todayWin: 0,
        todayBet: 0
      },
      lock: {
        expiredDef: 3600,
        resetDef: 86400,
        time: 0,
        count: 0,
        roomId: null
      }
    },
    tables: [{
      win: 2027.11,
      bet: 31.999999999999954,
      today: {
        win: 2000.77,
        bet: .8
      },
      roomId: 200516,
      status: "Empty",
      number: 1
    }, {
      win: 600,
      bet: 20004.4,
      today: {
        win: 600,
        bet: 2e4
      },
      roomId: 200519,
      status: "Empty",
      number: 2
    }, {
      win: 138.78,
      bet: 120.4,
      today: {
        win: 27.74,
        bet: 40.4
      },
      roomId: 200523,
      status: "Empty",
      number: 3
    }, {
      win: 50.76,
      bet: 46.4,
      today: {
        win: 50.76,
        bet: 40
      },
      roomId: 200518,
      status: "Empty",
      number: 4
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200527,
      status: "Empty",
      number: 5
    }, {
      win: 6,
      bet: 201.6,
      today: {
        win: 6,
        bet: 200
      },
      roomId: 200517,
      status: "Empty",
      number: 6
    }, {
      win: 0,
      bet: 22.000000000000007,
      today: {
        win: 0,
        bet: 5.6000000000000005
      },
      roomId: 200521,
      status: "Empty",
      number: 7
    }, {
      win: 2.4,
      bet: 83.2,
      today: {
        win: 2.4,
        bet: 80
      },
      roomId: 200522,
      status: "Empty",
      number: 8
    }, {
      win: 0,
      bet: 2.4000000000000004,
      today: {
        win: 0,
        bet: .8
      },
      roomId: 200520,
      status: "Empty",
      number: 9
    }, {
      win: 22.82,
      bet: 80,
      today: {
        win: 22.82,
        bet: 80
      },
      roomId: 200526,
      status: "Empty",
      number: 10
    }, {
      win: 19.3,
      bet: 17.600000000000005,
      today: {
        win: 19.3,
        bet: 16.400000000000006
      },
      roomId: 200524,
      status: "Empty",
      number: 11
    }, {
      win: 10603.839999999998,
      bet: 120,
      today: {
        win: 10587.619999999999,
        bet: 80
      },
      roomId: 200525,
      status: "Empty",
      number: 12
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200647,
      status: "Empty",
      number: 13
    }, {
      win: 25.48,
      bet: 100.80000000000001,
      today: {
        win: 8.5,
        bet: 54.400000000000006
      },
      roomId: 200648,
      status: "Empty",
      number: 14
    }, {
      win: 0,
      bet: 5.6000000000000005,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200528,
      status: "Empty",
      number: 15
    }, {
      win: 0,
      bet: 10.000000000000004,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200529,
      status: "Empty",
      number: 16
    }, {
      win: 24274.039999999997,
      bet: 200,
      today: {
        win: 24274.039999999997,
        bet: 200
      },
      roomId: 200530,
      status: "Empty",
      number: 17
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200531,
      status: "Empty",
      number: 18
    }, {
      win: 141.56,
      bet: 200,
      today: {
        win: 38.980000000000004,
        bet: 80
      },
      roomId: 200532,
      status: "Empty",
      number: 19
    }, {
      win: 184.97999999999996,
      bet: 165.60000000000002,
      today: {
        win: 171.77999999999997,
        bet: 160.8
      },
      roomId: 200533,
      status: "Empty",
      number: 20
    }, {
      win: 85.3,
      bet: 240.4,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200534,
      status: "Empty",
      number: 21
    }, {
      win: 30.34,
      bet: 41.199999999999996,
      today: {
        win: 30.34,
        bet: 41.199999999999996
      },
      roomId: 200535,
      status: "Empty",
      number: 22
    }, {
      win: 178.14,
      bet: 80,
      today: {
        win: 178.14,
        bet: 80
      },
      roomId: 200536,
      status: "Empty",
      number: 23
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200537,
      status: "Empty",
      number: 24
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200538,
      status: "Empty",
      number: 25
    }, {
      win: 14741.6,
      bet: 180.00000000000017,
      today: {
        win: 14671.7,
        bet: 100
      },
      roomId: 200539,
      status: "Full",
      number: 26,
      user: {
        userId: 757,
        username: "rsgtest00021",
        operatorId: 106
      }
    }, {
      win: 12,
      bet: 8.800000000000002,
      today: {
        win: 12,
        bet: 8.800000000000002
      },
      roomId: 200540,
      status: "Empty",
      number: 27
    }, {
      win: 1650,
      bet: 1103.2,
      today: {
        win: 1650,
        bet: 1100
      },
      roomId: 200541,
      status: "Empty",
      number: 28
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200542,
      status: "Empty",
      number: 29
    }, {
      win: 11.04,
      bet: .8,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200543,
      status: "Empty",
      number: 30
    }, {
      win: 4.92,
      bet: 40,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200544,
      status: "Empty",
      number: 31
    }, {
      win: 0,
      bet: 1.6,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200545,
      status: "Empty",
      number: 32
    }, {
      win: 0,
      bet: 4.3999999999999995,
      today: {
        win: 0,
        bet: .4
      },
      roomId: 200546,
      status: "Empty",
      number: 33
    }, {
      win: 32.06,
      bet: 1.2000000000000002,
      today: {
        win: 32.06,
        bet: 1.2000000000000002
      },
      roomId: 200547,
      status: "Empty",
      number: 34
    }, {
      win: 0,
      bet: 79.20000000000005,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200548,
      status: "Empty",
      number: 35
    }, {
      win: 3634674,
      bet: 28040,
      today: {
        win: 3634638,
        bet: 28e3
      },
      roomId: 200549,
      status: "Locked",
      number: 36,
      user: {
        userId: 761,
        username: "rsgtest00025",
        operatorId: 106,
        lockTime: 1747980092242,
        occupied: !0
      }
    }, {
      win: 0,
      bet: 7.200000000000002,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200550,
      status: "Empty",
      number: 37
    }, {
      win: 20.56,
      bet: 34.79999999999994,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200551,
      status: "Empty",
      number: 38
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200552,
      status: "Full",
      number: 39,
      user: {
        userId: 939,
        username: "xiadan12345678",
        operatorId: 106
      }
    }, {
      win: 59,
      bet: 120,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200553,
      status: "Full",
      number: 40,
      user: {
        userId: 762,
        username: "rsgtest00026",
        operatorId: 106
      }
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200554,
      status: "Empty",
      number: 41
    }, {
      win: 0,
      bet: 233.60000000000224,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200555,
      status: "Empty",
      number: 42
    }, {
      win: 5466.58,
      bet: 83.6,
      today: {
        win: 5429.28,
        bet: 43.2
      },
      roomId: 200556,
      status: "Full",
      number: 43,
      user: {
        userId: 760,
        username: "rsgtest00024",
        operatorId: 106
      }
    }, {
      win: 4.4,
      bet: 40,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200557,
      status: "Full",
      number: 44,
      user: {
        userId: 754,
        username: "rsgtest00018",
        operatorId: 106
      }
    }, {
      win: 98.06,
      bet: 40,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200558,
      status: "Empty",
      number: 45
    }, {
      win: 223.44,
      bet: 40,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200559,
      status: "Empty",
      number: 46
    }, {
      win: 60.239999999999995,
      bet: 125.19999999999999,
      today: {
        win: 0,
        bet: 1.6
      },
      roomId: 200560,
      status: "Empty",
      number: 47
    }, {
      win: 232.48,
      bet: 44,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200561,
      status: "Empty",
      number: 48
    }, {
      win: 64.76,
      bet: 40,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200562,
      status: "Empty",
      number: 49
    }, {
      win: 910,
      bet: 560,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200563,
      status: "Empty",
      number: 50
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200564,
      status: "Empty",
      number: 51
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200565,
      status: "Empty",
      number: 52
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200566,
      status: "Empty",
      number: 53
    }, {
      win: 86.62,
      bet: 80,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200567,
      status: "Empty",
      number: 54
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200568,
      status: "Empty",
      number: 55
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200569,
      status: "Empty",
      number: 56
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200570,
      status: "Empty",
      number: 57
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200571,
      status: "Empty",
      number: 58
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200572,
      status: "Empty",
      number: 59
    }, {
      win: 25.78,
      bet: 40,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200573,
      status: "Empty",
      number: 60
    }, {
      win: 675,
      bet: 140,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200574,
      status: "Empty",
      number: 61
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200575,
      status: "Empty",
      number: 62
    }, {
      win: 4.96,
      bet: 40,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200576,
      status: "Empty",
      number: 63
    }, {
      win: 123.65,
      bet: 341,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200577,
      status: "Empty",
      number: 64
    }, {
      win: 150,
      bet: 70,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200578,
      status: "Empty",
      number: 65
    }, {
      win: 31.22,
      bet: 40,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200579,
      status: "Empty",
      number: 66
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200580,
      status: "Empty",
      number: 67
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200581,
      status: "Empty",
      number: 68
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200582,
      status: "Empty",
      number: 69
    }, {
      win: 245.4,
      bet: 3.5999999999999996,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200583,
      status: "Empty",
      number: 70
    }, {
      win: 0,
      bet: 21,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200584,
      status: "Empty",
      number: 71
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200585,
      status: "Empty",
      number: 72
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200586,
      status: "Empty",
      number: 73
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200587,
      status: "Empty",
      number: 74
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200588,
      status: "Empty",
      number: 75
    }, {
      win: 45.86,
      bet: 80.4,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200589,
      status: "Empty",
      number: 76
    }, {
      win: 1542,
      bet: 10,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200590,
      status: "Empty",
      number: 77
    }, {
      win: 631.5,
      bet: 10,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200591,
      status: "Empty",
      number: 78
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200592,
      status: "Empty",
      number: 79
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200593,
      status: "Empty",
      number: 80
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200594,
      status: "Empty",
      number: 81
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200595,
      status: "Empty",
      number: 82
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200596,
      status: "Empty",
      number: 83
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200597,
      status: "Empty",
      number: 84
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200598,
      status: "Empty",
      number: 85
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200599,
      status: "Empty",
      number: 86
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200600,
      status: "Empty",
      number: 87
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200601,
      status: "Empty",
      number: 88
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200602,
      status: "Empty",
      number: 89
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200603,
      status: "Empty",
      number: 90
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200604,
      status: "Empty",
      number: 91
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200605,
      status: "Empty",
      number: 92
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200606,
      status: "Empty",
      number: 93
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200607,
      status: "Empty",
      number: 94
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200608,
      status: "Empty",
      number: 95
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200609,
      status: "Empty",
      number: 96
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200610,
      status: "Empty",
      number: 97
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200611,
      status: "Empty",
      number: 98
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200612,
      status: "Empty",
      number: 99
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200613,
      status: "Empty",
      number: 100
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200614,
      status: "Empty",
      number: 101
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200615,
      status: "Empty",
      number: 102
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200616,
      status: "Empty",
      number: 103
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200617,
      status: "Empty",
      number: 104
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200618,
      status: "Empty",
      number: 105
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200619,
      status: "Empty",
      number: 106
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200620,
      status: "Empty",
      number: 107
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200621,
      status: "Empty",
      number: 108
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200622,
      status: "Empty",
      number: 109
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200623,
      status: "Empty",
      number: 110
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200624,
      status: "Empty",
      number: 111
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200625,
      status: "Empty",
      number: 112
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200626,
      status: "Empty",
      number: 113
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200627,
      status: "Empty",
      number: 114
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200628,
      status: "Empty",
      number: 115
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200629,
      status: "Empty",
      number: 116
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200630,
      status: "Empty",
      number: 117
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200631,
      status: "Empty",
      number: 118
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200632,
      status: "Empty",
      number: 119
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200633,
      status: "Empty",
      number: 120
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200634,
      status: "Empty",
      number: 121
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200635,
      status: "Empty",
      number: 122
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200636,
      status: "Empty",
      number: 123
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200637,
      status: "Empty",
      number: 124
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200638,
      status: "Empty",
      number: 125
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200639,
      status: "Empty",
      number: 126
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200640,
      status: "Empty",
      number: 127
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200641,
      status: "Empty",
      number: 128
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200642,
      status: "Empty",
      number: 129
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200643,
      status: "Empty",
      number: 130
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200644,
      status: "Empty",
      number: 131
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200645,
      status: "Empty",
      number: 132
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200646,
      status: "Empty",
      number: 133
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200814,
      status: "Empty",
      number: 134
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200815,
      status: "Empty",
      number: 135
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200649,
      status: "Empty",
      number: 136
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200650,
      status: "Empty",
      number: 137
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200651,
      status: "Empty",
      number: 138
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200652,
      status: "Empty",
      number: 139
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200653,
      status: "Empty",
      number: 140
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200654,
      status: "Empty",
      number: 141
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200655,
      status: "Empty",
      number: 142
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200656,
      status: "Empty",
      number: 143
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200657,
      status: "Empty",
      number: 144
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200658,
      status: "Empty",
      number: 145
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200659,
      status: "Empty",
      number: 146
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200660,
      status: "Empty",
      number: 147
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200661,
      status: "Empty",
      number: 148
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200662,
      status: "Empty",
      number: 149
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200663,
      status: "Empty",
      number: 150
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200664,
      status: "Empty",
      number: 151
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200665,
      status: "Empty",
      number: 152
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200666,
      status: "Empty",
      number: 153
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200667,
      status: "Empty",
      number: 154
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200668,
      status: "Empty",
      number: 155
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200669,
      status: "Empty",
      number: 156
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200670,
      status: "Empty",
      number: 157
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200671,
      status: "Empty",
      number: 158
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200672,
      status: "Empty",
      number: 159
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200673,
      status: "Empty",
      number: 160
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200674,
      status: "Empty",
      number: 161
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200675,
      status: "Empty",
      number: 162
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200676,
      status: "Empty",
      number: 163
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200677,
      status: "Empty",
      number: 164
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200678,
      status: "Empty",
      number: 165
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200679,
      status: "Empty",
      number: 166
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200680,
      status: "Empty",
      number: 167
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200681,
      status: "Empty",
      number: 168
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200682,
      status: "Empty",
      number: 169
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200683,
      status: "Empty",
      number: 170
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200684,
      status: "Empty",
      number: 171
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200685,
      status: "Empty",
      number: 172
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200686,
      status: "Empty",
      number: 173
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200687,
      status: "Empty",
      number: 174
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200688,
      status: "Empty",
      number: 175
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200689,
      status: "Empty",
      number: 176
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200690,
      status: "Empty",
      number: 177
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200691,
      status: "Empty",
      number: 178
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200692,
      status: "Empty",
      number: 179
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200693,
      status: "Empty",
      number: 180
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200694,
      status: "Empty",
      number: 181
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200695,
      status: "Empty",
      number: 182
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200696,
      status: "Empty",
      number: 183
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200697,
      status: "Empty",
      number: 184
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200698,
      status: "Empty",
      number: 185
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200699,
      status: "Empty",
      number: 186
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200700,
      status: "Empty",
      number: 187
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200701,
      status: "Empty",
      number: 188
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200702,
      status: "Empty",
      number: 189
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200703,
      status: "Empty",
      number: 190
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200704,
      status: "Empty",
      number: 191
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200705,
      status: "Empty",
      number: 192
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200706,
      status: "Empty",
      number: 193
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200707,
      status: "Empty",
      number: 194
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200708,
      status: "Empty",
      number: 195
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200709,
      status: "Empty",
      number: 196
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200710,
      status: "Empty",
      number: 197
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200711,
      status: "Empty",
      number: 198
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200712,
      status: "Empty",
      number: 199
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200713,
      status: "Empty",
      number: 200
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200714,
      status: "Empty",
      number: 201
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200715,
      status: "Empty",
      number: 202
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200716,
      status: "Empty",
      number: 203
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200717,
      status: "Empty",
      number: 204
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200718,
      status: "Empty",
      number: 205
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200719,
      status: "Empty",
      number: 206
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200720,
      status: "Empty",
      number: 207
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200721,
      status: "Empty",
      number: 208
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200722,
      status: "Empty",
      number: 209
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200723,
      status: "Empty",
      number: 210
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200724,
      status: "Empty",
      number: 211
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200725,
      status: "Empty",
      number: 212
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200726,
      status: "Empty",
      number: 213
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200727,
      status: "Empty",
      number: 214
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200728,
      status: "Empty",
      number: 215
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200729,
      status: "Empty",
      number: 216
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200730,
      status: "Empty",
      number: 217
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200731,
      status: "Empty",
      number: 218
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200732,
      status: "Empty",
      number: 219
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200733,
      status: "Empty",
      number: 220
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200734,
      status: "Empty",
      number: 221
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200735,
      status: "Empty",
      number: 222
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200736,
      status: "Empty",
      number: 223
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200737,
      status: "Empty",
      number: 224
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200738,
      status: "Empty",
      number: 225
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200739,
      status: "Empty",
      number: 226
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200740,
      status: "Empty",
      number: 227
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200741,
      status: "Empty",
      number: 228
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200742,
      status: "Empty",
      number: 229
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200743,
      status: "Empty",
      number: 230
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200744,
      status: "Empty",
      number: 231
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200745,
      status: "Empty",
      number: 232
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200746,
      status: "Empty",
      number: 233
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200747,
      status: "Empty",
      number: 234
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200748,
      status: "Empty",
      number: 235
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200749,
      status: "Empty",
      number: 236
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200750,
      status: "Empty",
      number: 237
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200751,
      status: "Empty",
      number: 238
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200752,
      status: "Empty",
      number: 239
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200753,
      status: "Empty",
      number: 240
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200754,
      status: "Empty",
      number: 241
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200755,
      status: "Empty",
      number: 242
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200756,
      status: "Empty",
      number: 243
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200757,
      status: "Empty",
      number: 244
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200758,
      status: "Empty",
      number: 245
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200759,
      status: "Empty",
      number: 246
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200760,
      status: "Empty",
      number: 247
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200761,
      status: "Empty",
      number: 248
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200762,
      status: "Empty",
      number: 249
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200763,
      status: "Empty",
      number: 250
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200764,
      status: "Empty",
      number: 251
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200765,
      status: "Empty",
      number: 252
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200766,
      status: "Empty",
      number: 253
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200767,
      status: "Empty",
      number: 254
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200768,
      status: "Empty",
      number: 255
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200769,
      status: "Empty",
      number: 256
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200770,
      status: "Empty",
      number: 257
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200771,
      status: "Empty",
      number: 258
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200772,
      status: "Empty",
      number: 259
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200773,
      status: "Empty",
      number: 260
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200774,
      status: "Empty",
      number: 261
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200775,
      status: "Empty",
      number: 262
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200776,
      status: "Empty",
      number: 263
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200777,
      status: "Empty",
      number: 264
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200778,
      status: "Empty",
      number: 265
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200779,
      status: "Empty",
      number: 266
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200780,
      status: "Empty",
      number: 267
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200781,
      status: "Empty",
      number: 268
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200782,
      status: "Empty",
      number: 269
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200783,
      status: "Empty",
      number: 270
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200784,
      status: "Empty",
      number: 271
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200785,
      status: "Empty",
      number: 272
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200786,
      status: "Empty",
      number: 273
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200787,
      status: "Empty",
      number: 274
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200788,
      status: "Empty",
      number: 275
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200789,
      status: "Empty",
      number: 276
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200790,
      status: "Empty",
      number: 277
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200791,
      status: "Empty",
      number: 278
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200792,
      status: "Empty",
      number: 279
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200793,
      status: "Empty",
      number: 280
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200794,
      status: "Empty",
      number: 281
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200795,
      status: "Empty",
      number: 282
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200796,
      status: "Empty",
      number: 283
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200797,
      status: "Empty",
      number: 284
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200798,
      status: "Empty",
      number: 285
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200799,
      status: "Empty",
      number: 286
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200800,
      status: "Empty",
      number: 287
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200801,
      status: "Empty",
      number: 288
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200802,
      status: "Empty",
      number: 289
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200803,
      status: "Empty",
      number: 290
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200804,
      status: "Empty",
      number: 291
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200805,
      status: "Empty",
      number: 292
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200806,
      status: "Empty",
      number: 293
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200807,
      status: "Empty",
      number: 294
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200808,
      status: "Empty",
      number: 295
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200809,
      status: "Empty",
      number: 296
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200810,
      status: "Empty",
      number: 297
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200811,
      status: "Empty",
      number: 298
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200812,
      status: "Empty",
      number: 299
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 200813,
      status: "Empty",
      number: 300
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287940,
      status: "Empty",
      number: 301
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287937,
      status: "Empty",
      number: 302
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288004,
      status: "Empty",
      number: 303
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287941,
      status: "Empty",
      number: 304
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287943,
      status: "Empty",
      number: 305
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287959,
      status: "Empty",
      number: 306
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287939,
      status: "Empty",
      number: 307
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287938,
      status: "Empty",
      number: 308
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287944,
      status: "Empty",
      number: 309
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287973,
      status: "Empty",
      number: 310
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287961,
      status: "Empty",
      number: 311
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287945,
      status: "Empty",
      number: 312
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288026,
      status: "Empty",
      number: 313
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287951,
      status: "Empty",
      number: 314
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287942,
      status: "Empty",
      number: 315
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288021,
      status: "Empty",
      number: 316
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288006,
      status: "Empty",
      number: 317
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288024,
      status: "Empty",
      number: 318
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287954,
      status: "Empty",
      number: 319
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288005,
      status: "Empty",
      number: 320
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287949,
      status: "Empty",
      number: 321
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287948,
      status: "Empty",
      number: 322
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287946,
      status: "Empty",
      number: 323
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287992,
      status: "Empty",
      number: 324
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288012,
      status: "Empty",
      number: 325
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287967,
      status: "Empty",
      number: 326
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287984,
      status: "Empty",
      number: 327
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287975,
      status: "Empty",
      number: 328
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287977,
      status: "Empty",
      number: 329
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288029,
      status: "Empty",
      number: 330
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287958,
      status: "Empty",
      number: 331
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288013,
      status: "Empty",
      number: 332
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287947,
      status: "Empty",
      number: 333
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287991,
      status: "Empty",
      number: 334
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287950,
      status: "Empty",
      number: 335
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287990,
      status: "Empty",
      number: 336
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288010,
      status: "Empty",
      number: 337
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287962,
      status: "Empty",
      number: 338
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287955,
      status: "Empty",
      number: 339
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288018,
      status: "Empty",
      number: 340
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288025,
      status: "Empty",
      number: 341
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288032,
      status: "Empty",
      number: 342
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287976,
      status: "Empty",
      number: 343
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288001,
      status: "Empty",
      number: 344
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288022,
      status: "Empty",
      number: 345
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288027,
      status: "Empty",
      number: 346
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288030,
      status: "Empty",
      number: 347
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287987,
      status: "Empty",
      number: 348
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288009,
      status: "Empty",
      number: 349
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287953,
      status: "Empty",
      number: 350
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287952,
      status: "Empty",
      number: 351
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287957,
      status: "Empty",
      number: 352
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287988,
      status: "Empty",
      number: 353
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288007,
      status: "Empty",
      number: 354
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287986,
      status: "Empty",
      number: 355
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287968,
      status: "Empty",
      number: 356
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287999,
      status: "Empty",
      number: 357
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287989,
      status: "Empty",
      number: 358
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287996,
      status: "Empty",
      number: 359
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288e3,
      status: "Empty",
      number: 360
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287994,
      status: "Empty",
      number: 361
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287969,
      status: "Empty",
      number: 362
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287995,
      status: "Empty",
      number: 363
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287982,
      status: "Empty",
      number: 364
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287971,
      status: "Empty",
      number: 365
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287972,
      status: "Empty",
      number: 366
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287965,
      status: "Empty",
      number: 367
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287960,
      status: "Empty",
      number: 368
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287980,
      status: "Empty",
      number: 369
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287966,
      status: "Empty",
      number: 370
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287956,
      status: "Empty",
      number: 371
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287985,
      status: "Empty",
      number: 372
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288011,
      status: "Empty",
      number: 373
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287978,
      status: "Empty",
      number: 374
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288020,
      status: "Empty",
      number: 375
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287983,
      status: "Empty",
      number: 376
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287981,
      status: "Empty",
      number: 377
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287979,
      status: "Empty",
      number: 378
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288015,
      status: "Empty",
      number: 379
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287970,
      status: "Empty",
      number: 380
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288031,
      status: "Empty",
      number: 381
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288034,
      status: "Empty",
      number: 382
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288028,
      status: "Empty",
      number: 383
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287964,
      status: "Empty",
      number: 384
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288003,
      status: "Empty",
      number: 385
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287998,
      status: "Empty",
      number: 386
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288019,
      status: "Empty",
      number: 387
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287997,
      status: "Empty",
      number: 388
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288002,
      status: "Empty",
      number: 389
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287963,
      status: "Empty",
      number: 390
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287993,
      status: "Empty",
      number: 391
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288008,
      status: "Empty",
      number: 392
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288017,
      status: "Empty",
      number: 393
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288035,
      status: "Empty",
      number: 394
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288036,
      status: "Empty",
      number: 395
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 287974,
      status: "Empty",
      number: 396
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288014,
      status: "Empty",
      number: 397
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288023,
      status: "Empty",
      number: 398
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288016,
      status: "Empty",
      number: 399
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288033,
      status: "Empty",
      number: 400
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288079,
      status: "Empty",
      number: 401
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288068,
      status: "Empty",
      number: 402
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288040,
      status: "Empty",
      number: 403
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288039,
      status: "Empty",
      number: 404
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288037,
      status: "Empty",
      number: 405
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288038,
      status: "Empty",
      number: 406
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288064,
      status: "Empty",
      number: 407
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288127,
      status: "Empty",
      number: 408
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288043,
      status: "Empty",
      number: 409
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288100,
      status: "Empty",
      number: 410
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288058,
      status: "Empty",
      number: 411
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288051,
      status: "Empty",
      number: 412
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288072,
      status: "Empty",
      number: 413
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288083,
      status: "Empty",
      number: 414
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288045,
      status: "Empty",
      number: 415
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288088,
      status: "Empty",
      number: 416
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288041,
      status: "Empty",
      number: 417
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288084,
      status: "Empty",
      number: 418
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288055,
      status: "Empty",
      number: 419
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288109,
      status: "Empty",
      number: 420
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288080,
      status: "Empty",
      number: 421
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288042,
      status: "Empty",
      number: 422
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288049,
      status: "Empty",
      number: 423
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288106,
      status: "Empty",
      number: 424
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288054,
      status: "Empty",
      number: 425
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288070,
      status: "Empty",
      number: 426
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288120,
      status: "Empty",
      number: 427
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288048,
      status: "Empty",
      number: 428
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288119,
      status: "Empty",
      number: 429
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288052,
      status: "Empty",
      number: 430
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288126,
      status: "Empty",
      number: 431
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288123,
      status: "Empty",
      number: 432
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288116,
      status: "Empty",
      number: 433
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288133,
      status: "Empty",
      number: 434
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288046,
      status: "Empty",
      number: 435
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288044,
      status: "Empty",
      number: 436
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288060,
      status: "Empty",
      number: 437
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288097,
      status: "Empty",
      number: 438
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288067,
      status: "Empty",
      number: 439
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288102,
      status: "Empty",
      number: 440
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288103,
      status: "Empty",
      number: 441
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288077,
      status: "Empty",
      number: 442
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288095,
      status: "Empty",
      number: 443
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288056,
      status: "Empty",
      number: 444
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288092,
      status: "Empty",
      number: 445
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288065,
      status: "Empty",
      number: 446
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288124,
      status: "Empty",
      number: 447
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288059,
      status: "Empty",
      number: 448
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288057,
      status: "Empty",
      number: 449
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288062,
      status: "Empty",
      number: 450
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288105,
      status: "Empty",
      number: 451
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288134,
      status: "Empty",
      number: 452
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288118,
      status: "Empty",
      number: 453
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288047,
      status: "Empty",
      number: 454
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288063,
      status: "Empty",
      number: 455
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288069,
      status: "Empty",
      number: 456
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288098,
      status: "Empty",
      number: 457
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288082,
      status: "Empty",
      number: 458
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288050,
      status: "Empty",
      number: 459
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288053,
      status: "Empty",
      number: 460
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288071,
      status: "Empty",
      number: 461
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288131,
      status: "Empty",
      number: 462
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288087,
      status: "Empty",
      number: 463
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288081,
      status: "Empty",
      number: 464
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288129,
      status: "Empty",
      number: 465
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288094,
      status: "Empty",
      number: 466
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288101,
      status: "Empty",
      number: 467
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288090,
      status: "Empty",
      number: 468
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288073,
      status: "Empty",
      number: 469
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288078,
      status: "Empty",
      number: 470
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288076,
      status: "Empty",
      number: 471
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288130,
      status: "Empty",
      number: 472
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288099,
      status: "Empty",
      number: 473
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288115,
      status: "Empty",
      number: 474
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288089,
      status: "Empty",
      number: 475
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288114,
      status: "Empty",
      number: 476
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288061,
      status: "Empty",
      number: 477
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288121,
      status: "Empty",
      number: 478
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288108,
      status: "Empty",
      number: 479
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288066,
      status: "Empty",
      number: 480
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288107,
      status: "Empty",
      number: 481
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288093,
      status: "Empty",
      number: 482
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288091,
      status: "Empty",
      number: 483
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288128,
      status: "Empty",
      number: 484
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288086,
      status: "Empty",
      number: 485
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288104,
      status: "Empty",
      number: 486
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288085,
      status: "Empty",
      number: 487
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288113,
      status: "Empty",
      number: 488
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288117,
      status: "Empty",
      number: 489
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288125,
      status: "Empty",
      number: 490
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288096,
      status: "Empty",
      number: 491
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288132,
      status: "Empty",
      number: 492
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288122,
      status: "Empty",
      number: 493
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288110,
      status: "Empty",
      number: 494
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288075,
      status: "Empty",
      number: 495
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288136,
      status: "Empty",
      number: 496
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288135,
      status: "Empty",
      number: 497
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288074,
      status: "Empty",
      number: 498
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288112,
      status: "Empty",
      number: 499
    }, {
      win: 0,
      bet: 0,
      today: {
        win: 0,
        bet: 0
      },
      roomId: 288111,
      status: "Empty",
      number: 500
    }],
    tableMeta: {
      currentPage: 1,
      tablePerPage: 500,
      totalPages: 11,
      totalTableCount: 5001
    },
    slotTablesOn: !0,
    slotTableUpdated: 1,
    avatars: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13", "a14", "a15", "a16", "a17", "a18", "a19", "a20", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
  },
  isResuming: !0
}), _dependency.cclegacy._RF.pop();
