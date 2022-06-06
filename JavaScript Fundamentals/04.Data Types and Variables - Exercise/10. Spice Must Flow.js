function spiceMustFlow(yield){
    let storage=0;
    let days=0;
    // if(yield<100){
    //     days++;
    //     storage=yield;
    //     storage-=26; 
    // }
for(yield;yield>=100;yield-=10){
storage+=yield;
days++;
storage-=26;

}
storage-=26;
if(storage<=0) storage=0;
console.log(days);
console.log(storage);
}
// spiceMustFlow(111)
// spiceMustFlow(450)
spiceMustFlow(99)