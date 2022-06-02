function courier(input){
let weight=Number(input[0]);
let type=input[1];
let distance=input[2];
let price;
if (weight<1){price=0.03*1000; if (type==`express`) price=price*(1+0.8*weight);}
else if(weight<10) {price=0.05*1000; if (type==`express`) price=price*(1+0.4*weight);}
else if(weight<40) {price=0.10*1000; if (type==`express`) price=price*(1+0.05*weight);}
else if(weight<90) {price=0.15*1000; if (type==`express`) price=price*(1+0.02*weight);}
else if(weight<150) {price=0.20*1000; if (type==`express`) price=price*(1+0.01*weight);}
let cost=distance*price/1000;
console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${cost.toFixed(2)} lv.`)

}
courier(["87",
"express",
"130"])

