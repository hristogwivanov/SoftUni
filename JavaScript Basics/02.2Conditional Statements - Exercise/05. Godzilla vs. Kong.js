function godzilla(input){
let budjet = Number(input[0]);
let statistsCount = Number(input[1]);
let outfitPrice = Number(input[2]);

let decor = budjet*(10/100); 
let totalMoneyForOutfit = statistsCount*outfitPrice;
if (statistsCount>150) totalMoneyForOutfit*=(90/100);


let totalSum=decor+totalMoneyForOutfit;

if(budjet>=totalSum){
    console.log("Action!")
    console.log(`Wingard starts filming with ${(budjet-totalSum).toFixed(2)} leva left.`)
}

else{
    console.log("Not enough money!")
    console.log(`Wingard needs ${(totalSum-budjet).toFixed(2)} leva more.`)
}

    

}

godzilla(["9587.88",
"222",
"55.68"])


