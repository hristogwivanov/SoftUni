function boat(input) {
    let budjet = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);

    let boatRentPrice = 0;
    switch (season) {
        case `Spring`: boatRentPrice = 3000; break;
        case `Summer`: 
        case `Autumn`: boatRentPrice = 4200; break;
        case `Winter`: boatRentPrice = 2600; break;
    }
if (fishermans<=6){
boatRentPrice*=0.9;
}
else if(fishermans<=11){
boatRentPrice*=0.85;

}
else {
boatRentPrice*=0.75;

}
if(fishermans%2 ===0 && season!=="Autumn") {boatRentPrice*=0.95}
if (budjet>=boatRentPrice){console.log(`Yes! You have ${(budjet-boatRentPrice).toFixed(2)} leva left.`)
}
else console.log(`Not enough money! You need ${(boatRentPrice-budjet).toFixed(2)} leva.`)



}


boat(["3600",
"Autumn",
"6"])
