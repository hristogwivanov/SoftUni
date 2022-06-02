function kit(input){
let shirtPrice=Number(input[0]);
let requiredMoney=Number(input[1]);
let shortPrice=shirtPrice*0.75;
let socksPrice=shortPrice*0.2;
let shoesPrice=(shirtPrice+shortPrice)*2;
let sum=shirtPrice+shortPrice+socksPrice+shoesPrice;
sum=sum*0.85;
if (sum>=requiredMoney){
console.log(`Yes, he will earn the world-cup replica ball!`);
console.log(`His sum is ${sum.toFixed(2)} lv.`);
}
else{
console.log("No, he will not earn the world-cup replica ball.");
console.log(`He needs ${(requiredMoney-sum).toFixed(2)} lv. more.`);

}


}
kit(["25",
"100"])
