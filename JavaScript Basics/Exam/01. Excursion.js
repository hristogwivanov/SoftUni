function excursion(input){
let peopleCount=input[0];
let nightsCount=input[1];
let cardsCount=input[2];
let ticketsCount=input[3];
let nightsCost=nightsCount*20;
let cardsCost=cardsCount*1.6;
let tucketsCost=ticketsCount*6;
let pricePerPerson=nightsCost+tucketsCost+cardsCost;
let result=pricePerPerson*peopleCount*1.25;
console.log(result.toFixed(2));

}

excursion(["20",
"14",
"30",
"6"])
