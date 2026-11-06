// @ts-nocheck
/** Project-D source artwork transcription. These are public displayed rules,
 * not recovered server code, RNG, RTP or probability tables. */
export const displayedRules = Object.freeze({
 status:'visual-transcribed from original Project-D rules_01..07 PNGs',
 board:{rows:5,columns:6},betDivisor:20,minimumMatch:8,
 symbols:[
  {id:1,name:'EYE',odds:[200,500,1000]},
  {id:2,name:'SNAKE',odds:[50,200,500]},
  {id:3,name:'BOW',odds:[40,100,300]},
  {id:4,name:'MACHETE',odds:[30,40,240]},
  {id:5,name:'ORANGE_GEM',odds:[20,30,200]},
  {id:6,name:'RED_GEM',odds:[16,24,160]},
  {id:7,name:'PURPLE_GEM',odds:[10,20,100]},
  {id:8,name:'BLUE_GEM',odds:[8,18,80]},
  {id:9,name:'GREEN_GEM',odds:[5,15,40]},
 ],countBands:[[8,9],[10,11],[12,30]],
 scatter:{symbol:15,odds:{4:60,5:100,6:2000},mainTrigger:[4,6],initialFreeSpins:15,retrigger:[3,6],extraFreeSpins:5,maxAwardedFreeSpins:100},
 purchase:{feature:'freeGame',featureIndex:0,featureRate:100},
 multiplier:{min:2,max:500,source:'rules_01/02/04: sum visible multipliers on terminal winning board; FG winning multiplier is added to accumulated multiplier'},
 unsupported:['remote replay/rank/table services'],
 unknown:['original jackpot pool/award/probability model','original mystery chest amount/distribution','original symbol weights','original RNG','RTP','hit rate','scatter/multiplier/upgrade probabilities','exact upgrade ladder','rare colour probability','original cent rounding policy','scatter inclusion in multiplier subtotal'],
});
