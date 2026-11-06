// @ts-nocheck
// Own simulation: visible rules independently checked; definition shape from captured debug data is not production server evidence.
export const definitionConfig={
  "oddsList": {
    "2": {
      "3": 10,
      "4": 35,
      "5": 125,
      "15": 2500
    },
    "3": {
      "3": 7,
      "4": 23,
      "5": 80,
      "15": 1600
    },
    "4": {
      "3": 5,
      "4": 15,
      "5": 50,
      "15": 1000
    },
    "5": {
      "3": 4,
      "4": 12,
      "5": 40,
      "15": 800
    },
    "6": {
      "3": 3,
      "4": 8,
      "5": 25,
      "15": 500
    },
    "7": {
      "3": 2,
      "4": 6,
      "5": 20,
      "15": 400
    },
    "8": {
      "3": 2,
      "4": 6,
      "5": 20,
      "15": 400
    }
  },
  "symbolDefs": [
    {
      "symbol": 1,
      "displayName": "WILD"
    },
    {
      "symbol": 2,
      "displayName": "S1"
    },
    {
      "symbol": 3,
      "displayName": "S2"
    },
    {
      "symbol": 4,
      "displayName": "S3"
    },
    {
      "symbol": 5,
      "displayName": "S4"
    },
    {
      "symbol": 6,
      "displayName": "S5"
    },
    {
      "symbol": 7,
      "displayName": "S6"
    },
    {
      "symbol": 8,
      "displayName": "S7"
    },
    {
      "symbol": 9,
      "displayName": "SCATTER"
    },
    {
      "symbol": 10,
      "displayName": "BONUS"
    }
  ],
  "winOddsTypes": {
    "win": 20,
    "bigWin": 20,
    "superWin": 50,
    "megaWin": 100,
    "ultraWin": 500,
    "legendaryWin": 1000
  },
  "winlineDefs": [
    {
      "order": "0",
      "line": [
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "order": "1",
      "line": [
        0,
        1,
        2,
        3,
        4
      ]
    },
    {
      "order": "2",
      "line": [
        10,
        11,
        12,
        13,
        14
      ]
    },
    {
      "order": "3",
      "line": [
        0,
        6,
        12,
        8,
        4
      ]
    },
    {
      "order": "4",
      "line": [
        10,
        6,
        2,
        8,
        14
      ]
    },
    {
      "order": "5",
      "line": [
        5,
        1,
        2,
        3,
        9
      ]
    },
    {
      "order": "6",
      "line": [
        5,
        11,
        12,
        13,
        9
      ]
    },
    {
      "order": "7",
      "line": [
        0,
        1,
        7,
        13,
        14
      ]
    },
    {
      "order": "8",
      "line": [
        10,
        11,
        7,
        3,
        4
      ]
    },
    {
      "order": "9",
      "line": [
        5,
        11,
        7,
        3,
        9
      ]
    },
    {
      "order": "10",
      "line": [
        5,
        1,
        7,
        13,
        9
      ]
    },
    {
      "order": "11",
      "line": [
        0,
        6,
        7,
        8,
        4
      ]
    },
    {
      "order": "12",
      "line": [
        10,
        6,
        7,
        8,
        14
      ]
    },
    {
      "order": "13",
      "line": [
        0,
        6,
        2,
        8,
        4
      ]
    },
    {
      "order": "14",
      "line": [
        10,
        6,
        12,
        8,
        14
      ]
    },
    {
      "order": "15",
      "line": [
        5,
        6,
        2,
        8,
        9
      ]
    },
    {
      "order": "16",
      "line": [
        5,
        6,
        12,
        8,
        9
      ]
    },
    {
      "order": "17",
      "line": [
        0,
        1,
        12,
        3,
        4
      ]
    },
    {
      "order": "18",
      "line": [
        10,
        11,
        2,
        13,
        14
      ]
    },
    {
      "order": "19",
      "line": [
        0,
        11,
        12,
        13,
        4
      ]
    }
  ],
  "extraFgRounds": 10,
  "dragonLevels": {
    "low": 1,
    "medium": 2,
    "high": 3
  },
  "autoConfirmTime": 1.5,
  "autoSpinInterval": 0.3,
  "prizeAutoNextDelay": 3,
  "smallPrizeDelay": 0.5,
  "bigPrizeDelay": 1,
  "buyFeature": [
    {
      "feature": "freeGame",
      "featureRate": 100,
      "featureIndex": 0
    },
    {
      "feature": "buyFullCombo",
      "featureRate": 100,
      "featureIndex": 1
    },
    {
      "feature": "elixirFurnace",
      "featureRate": 200,
      "featureIndex": 2
    }
  ],
  "digital": 2,
  "isDemo": true,
  "jpDefs": {
    "jp-mini": 50,
    "jp-minor": 200
  }
};
export const displayedRules={purchase:definitionConfig.buyFeature[0],unsupported:[],unknown:["original RNG/RTP and hidden distributions"]};
