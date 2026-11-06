// @ts-nocheck
// Project-E displayed artwork transcription; not original server mathematics.
export const displayedRules={
 project:'Project-E',bundle:'g1012',rows:4,columns:5,lineCount:40,
 evidence:{board:'Original GameView.prefab five SingleReelSetting.midCount=4; rules_03/04 grids and rules_06 example are four rows.',conflict:'GameSymbolID.ROW=3 and static debug initial are stale and disagree with actual original prefab/rules. No source client constant was changed.',symbolMeaning:'Numeric enum labels HAT/STICK/FORK/A/K/Q/J are stale names; visible original symbol_02..08 are vampire/characters/book/perfume/bullets/gavel.'},
 symbols:[{id:1,visual:'WILD',odds:{5:1000}},{id:2,visual:'dark-haired vampire',odds:{3:50,4:200,5:800}},{id:3,visual:'blond vampire',odds:{3:25,4:150,5:400}},{id:4,visual:'girl',odds:{3:25,4:150,5:400}},{id:5,visual:'book',odds:{3:20,4:75,5:200}},{id:6,visual:'perfume',odds:{3:20,4:75,5:200}},{id:7,visual:'bullets',odds:{3:10,4:50,5:150}},{id:8,visual:'gavel and stake',odds:{3:5,4:20,5:100}}],
 // Exact yellow-cell row indices from original rules_03.png then rules_04.png.
 // Diagnostic connected-component reading checked each miniature has five cells.
 paylines:[[1,1,1,1,1],[2,2,2,2,2],[0,0,0,0,0],[3,3,3,3,3],[1,2,3,2,1],[2,1,0,1,2],[0,0,1,2,3],[3,3,2,1,0],[1,0,0,0,1],[2,3,3,3,2],[0,1,2,3,3],[3,2,1,0,0],[1,0,1,2,1],[2,3,2,1,2],[0,1,0,1,0],[3,2,3,2,3],[1,2,1,0,1],[2,1,2,3,2],[0,1,1,1,0],[3,2,2,2,3],[1,1,2,3,3],[2,2,1,0,0],[1,1,0,1,1],[2,2,3,2,2],[1,2,2,2,3],[2,1,1,1,0],[0,0,1,0,0],[3,3,2,3,3],[0,1,2,2,3],[3,2,1,1,0],[0,0,0,1,2],[3,3,3,2,1],[1,0,0,1,2],[2,3,3,2,1],[0,1,1,2,3],[3,2,2,1,0],[1,0,1,2,3],[2,3,2,1,0],[0,1,2,3,2],[3,2,1,0,1]],
 scatter:{symbol:9,trigger:3,awards:{3:5,4:10,5:15},evidence:'rules_01/06: three+ SCATTER awards free games; five/ten/fifteen counts appear in source rules, with source presentation field freeSpinWon.'},
 selection:{multipliers:[4,6,8],evidence:'FreeGameAlertView.playSelectItemAnim reads currentGameState.selectFgMultiple; chosen card displays backend factor. It does not issue a selection network request.'},
 jackpot:{symbol:10,tiers:{2:'jp-mini',3:'jp-minor',4:'jp-major',5:'jp-grand'},evidence:'rules_07: 2/3/4/5 JACKPOT symbols anywhere; actual JackpotView consumes isJp and totalWinnings.'},
 localPurchase:{feature:'freeGame',featureIndex:0,featureRate:100,source:'SELF-DEFINED local test purchase; original E price and live purchase UI are not established. Do not copy dead debug FullCombo/Elixir prices.'},
 fever:{source:'rules_05(en): base-game Lucky Moment increases free-game entry; no original probabilities disclosed',own:'per-round frenzy with configurable FG probability uplift; transform frequency and selection are own optional presentation',transformSource:'published parser transformInfo, GameSymbol.getTransformAnimation and original symbol_trans Spine; E source has no active transform FSM phase'},
 unknown:['original RNG/RTP/hit and feature frequencies','symbol strip selection/start probabilities','lucky-moment/transform trigger distributions','original purchase availability/prices','exact cent rounding','jackpot pool growth/resets'],
 unsupported:['debug-only elixirFurnace/fortuneLanding/luckyWealth/pick mini-games','remote provider tables/replays/ranks'],
};
