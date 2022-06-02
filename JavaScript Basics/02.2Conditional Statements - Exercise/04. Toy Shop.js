function toyShop(input){
let tripPrice = Number(input[0]);
let puzzlesCount = Number(input[1]);
let dollsCount= Number(input[2]);
let bearsCount= Number(input[3]);
let minionsCount= Number(input[4]);
let trucksCount= Number(input[5]);
let moneyFromPuzzles = puzzlesCount*2.6;
let moneyFromDolls = dollsCount*3;
let moneyFromBears = bearsCount*4.1;
let moneyfromMinions = minionsCount*8.2;
let moneyfromTrucks = trucksCount*2;
let moneyFromAllToys = moneyFromPuzzles+moneyFromDolls+moneyFromBears+moneyfromMinions+moneyfromTrucks;
let allToysCount = puzzlesCount+dollsCount+bearsCount+minionsCount+trucksCount;
if(allToysCount>=50) moneyFromAllToys*=0.75;
let moneyAfterRent = moneyFromAllToys*0.9;

if(moneyAfterRent>=tripPrice){
    console.log(`Yes! ${(moneyAfterRent-tripPrice).toFixed(2)} lv left.`)
}
else console.log(`Not enough money! ${(tripPrice-moneyAfterRent).toFixed(2)} lv needed.`)

}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"]
);