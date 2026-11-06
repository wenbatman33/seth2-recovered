// Project-C own rule-image transcription; not original server RNG or RTP.
export const displayedPaytable = {
  "status": "Manually transcribed displayed rules; not server RNG or RTP recovery",
  "sourceImage": "assets/game/content/assets/texture/locale/landscape/zh-tw/rules_08.png",
  "sourceSha256": "9ba65fcdec3e6f2fee5fb03e685cb2b41194288659f0d3875acbd7780a09cbb8",
  "symbolMappingSource": "g1009 GameSymbolID.ts numeric IDs + Project-C rules_08.png artwork",
  "payFormulaSource": "Project-C rules_01.png: totalBet / 20 * displayedPayValue",
  "betDivisor": 20,
  "symbols": [
    {
      "id": 1,
      "name": "AXE",
      "tiers": [
        {
          "minCount": 8,
          "maxCount": 9,
          "payValue": 200
        },
        {
          "minCount": 10,
          "maxCount": 11,
          "payValue": 500
        },
        {
          "minCount": 12,
          "maxCount": 30,
          "payValue": 1000
        }
      ],
      "displayName": "斧"
    },
    {
      "id": 2,
      "name": "SHIELD",
      "tiers": [
        {
          "minCount": 8,
          "maxCount": 9,
          "payValue": 50
        },
        {
          "minCount": 10,
          "maxCount": 11,
          "payValue": 200
        },
        {
          "minCount": 12,
          "maxCount": 30,
          "payValue": 500
        }
      ],
      "displayName": "盾"
    },
    {
      "id": 3,
      "name": "WINE",
      "tiers": [
        {
          "minCount": 8,
          "maxCount": 9,
          "payValue": 40
        },
        {
          "minCount": 10,
          "maxCount": 11,
          "payValue": 100
        },
        {
          "minCount": 12,
          "maxCount": 30,
          "payValue": 300
        }
      ],
      "displayName": "酒"
    },
    {
      "id": 4,
      "name": "BAG",
      "tiers": [
        {
          "minCount": 8,
          "maxCount": 9,
          "payValue": 30
        },
        {
          "minCount": 10,
          "maxCount": 11,
          "payValue": 40
        },
        {
          "minCount": 12,
          "maxCount": 30,
          "payValue": 240
        }
      ],
      "displayName": "袋"
    },
    {
      "id": 5,
      "name": "YELLOW_GEM",
      "tiers": [
        {
          "minCount": 8,
          "maxCount": 9,
          "payValue": 20
        },
        {
          "minCount": 10,
          "maxCount": 11,
          "payValue": 30
        },
        {
          "minCount": 12,
          "maxCount": 30,
          "payValue": 200
        }
      ],
      "displayName": "黃"
    },
    {
      "id": 6,
      "name": "RED_GEM",
      "tiers": [
        {
          "minCount": 8,
          "maxCount": 9,
          "payValue": 16
        },
        {
          "minCount": 10,
          "maxCount": 11,
          "payValue": 24
        },
        {
          "minCount": 12,
          "maxCount": 30,
          "payValue": 160
        }
      ],
      "displayName": "紅"
    },
    {
      "id": 7,
      "name": "PURPLE_GEM",
      "tiers": [
        {
          "minCount": 8,
          "maxCount": 9,
          "payValue": 10
        },
        {
          "minCount": 10,
          "maxCount": 11,
          "payValue": 20
        },
        {
          "minCount": 12,
          "maxCount": 30,
          "payValue": 100
        }
      ],
      "displayName": "紫"
    },
    {
      "id": 8,
      "name": "BLUE_GEM",
      "tiers": [
        {
          "minCount": 8,
          "maxCount": 9,
          "payValue": 8
        },
        {
          "minCount": 10,
          "maxCount": 11,
          "payValue": 18
        },
        {
          "minCount": 12,
          "maxCount": 30,
          "payValue": 80
        }
      ],
      "displayName": "藍"
    },
    {
      "id": 9,
      "name": "GREEN_GEM",
      "tiers": [
        {
          "minCount": 8,
          "maxCount": 9,
          "payValue": 5
        },
        {
          "minCount": 10,
          "maxCount": 11,
          "payValue": 15
        },
        {
          "minCount": 12,
          "maxCount": 30,
          "payValue": 40
        }
      ],
      "displayName": "綠"
    }
  ],
  "unknown": [
    "original symbol weights",
    "original RNG",
    "RTP distribution",
    "maximum-win cap and rounding policy"
  ]
};
