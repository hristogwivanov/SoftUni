function traveling(input){
    if (input[0]==`End`) return;
let destination=input[0];
let moneyNeeded=Number(input[1]);
let i=1;
while(true){
i++;
if(input[i]=="End") break;
moneyNeeded-=Number(input[i]);
if (moneyNeeded<=0){
console.log(`Going to ${destination}!`)
i++;
if(input[i]=="End") break;
destination=input[i];
i++;
if(input[i]=="End") break;

moneyNeeded=Number(input[i]);
continue;


}


}



}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
