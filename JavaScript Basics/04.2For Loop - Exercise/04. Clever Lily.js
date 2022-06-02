function lily(input){
let age=input[0];
let mielePrice=input[1];
let toyPrice=input[2];
let toysCount=0;
let moneyCollected=0;
for (i=1;i<=age;i++){
if(i%2===0){moneyCollected+=5*i;moneyCollected--;}
else toysCount++;
}
moneyCollected+=toysCount*toyPrice;
let diff=Math.abs(moneyCollected-mielePrice);
if(moneyCollected>=mielePrice) console.log(`Yes! ${diff.toFixed(2)}`)
else console.log(`No! ${diff.toFixed(2)}`)

}
lily(["10",
"170.00",
"6"])
