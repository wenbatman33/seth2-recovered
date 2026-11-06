// @ts-nocheck
/** Independently transcribed from Project-G staged-assets-02 original PNGs.
 * Source enum names are stale; visual labels below use symbol_01..09 actually viewed.
 * These public rules do not establish original RNG/RTP or hidden probabilities. */
export const displayedRules=Object.freeze({
 status:'visual-transcribed from Project-G rules_01..07 and symbol_01..09',
 board:{rows:5,columns:6},betDivisor:20,minimumMatch:8,
 symbols:[{id:1,name:'IMPERIAL_SEAL',odds:[200,500,1000]},{id:2,name:'FEATHER_FAN',odds:[50,200,500]},{id:3,name:'SWORD',odds:[40,100,300]},{id:4,name:'REPEATING_CROSSBOW',odds:[30,40,240]},{id:5,name:'YELLOW_JADE',odds:[20,30,200]},{id:6,name:'RED_JADE',odds:[16,24,160]},{id:7,name:'PURPLE_JADE',odds:[10,20,100]},{id:8,name:'BLUE_JADE',odds:[8,18,80]},{id:9,name:'GREEN_JADE',odds:[5,15,40]}],
 countBands:[[8,9],[10,11],[12,30]],
 scatter:{symbol:15,visual:'DRAGON_FLAG',odds:{4:60,5:100,6:2000},mainTrigger:[4,6],initialFreeSpins:15,retrigger:[3,6],extraFreeSpins:5,maxAwardedFreeSpins:100},
 purchase:{feature:'freeGame',featureIndex:0,featureRate:100},
 multiplier:{min:2,max:500,visibleUpgradeExample:[6,8,15,500],source:'G rules_01/02/04 terminal multiplier sum; winning FG multiplier added to accumulated sum; intermediate exact upgrade ladder unknown'},
 unsupported:['remote replay/rank/table/profile services'],
 unknown:['original jackpot pool/award/probability model','original mystery chest amount/distribution','original symbol weights','original RNG','RTP','hit rate','scatter/multiplier/upgrade probabilities','exact upgrade ladder (example6->8->15 is not a full ladder)','rare visual variant probability','original cent rounding','scatter multiplication treatment'],
});
