// @ts-nocheck
/** H original PNG rules and symbol_01..10 were actually viewed. Legacy 3-row
 * GameSymbolID constants and HAT/STICK labels are not active artwork mapping. */
export const displayedRules=Object.freeze({
 status:'visual-transcribed H rules_01..07 and source symbols; paylines pixel-assisted from viewed rules_03/04',board:{rows:4,columns:5,cells:20,paylines:40},
 symbols:[{id:1,name:'WILD_WOMAN',odds:{3:25,4:200,5:1000}},{id:2,name:'YOUNG_MAN',odds:{3:20,4:100,5:400}},{id:3,name:'OLDER_MAN',odds:{3:20,4:100,5:400}},{id:4,name:'FLOWER_FAN',odds:{3:10,4:50,5:250}},{id:5,name:'EAST',odds:{3:5,4:25,5:150}},{id:6,name:'SOUTH',odds:{3:5,4:25,5:150}},{id:7,name:'WEST',odds:{3:5,4:20,5:100}},{id:8,name:'NORTH',odds:{3:5,4:20,5:100}}],
 scatter:{symbol:9,requiredReels:[1,2,3],count:3,odds:80,freeSpins:10},jackpot:{symbol:10,tierCounts:{2:'mini',3:'minor',4:'major',5:'grand'},awardAmounts:'unknown'},
 wild:{symbol:1,substitutes:'all paying symbols except SCATTER',modifierCol:'zero-based0..4 verified by direct reelList index',fgPersistence:'active wild reels persist in native _wildDisplayedCols / WinLineView while FG; STOP_WILD dispatched on new MG spin'},
 purchaseMapping:['freeGame','buyFullCombo'],
 originalUnknown:['original RNG/RTP/hit rate','reel strips/weights','expand-wild trigger frequency/precise criterion','FG reel/expansion distribution','production feature prices/indexes (freeGame100 appears in debug only, fullCombo price unknown)','buyFullCombo exact outcome selection','scatter bet unit (debug examples conflict with displayed x80); ordinary /40 is debug-supported','cent rounding','FG retrigger rule/probability','jackpot pools/awards','fortuneLanding/luckyWealth/bonus actions'],
 ownBonusSimulation:['jpGame (12 native ingots, first3matching own deck)','fortuneLanding (issued local box tokens/amounts, native collect/finish)','luckyWealth (native prize popup/close)'],
 unsupported:['elixirFurnace (middle node is not mapped in native BuyFeatureView)','purchase popup (captured original prefab missing; definition.buyFeature hidden)','original server pools/RNG/RTP and bonus probability','remote account/rank/table/replay'],
});
