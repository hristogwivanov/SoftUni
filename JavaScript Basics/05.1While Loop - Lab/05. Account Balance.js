function balance(input){
let total=0;
let i=0;

while(input[i]!=="NoMoreMoney")
{
    if(Number(input[i])<0){console.log(`Invalid operation!`); break;}

    total+=Number(input[i]);
console.log(`Increase: ${Number(input[i]).toFixed(2)}`);
i++;


}
console.log(`Total: ${total.toFixed(2)}`);

}

balance(["120",
"45.55",
"-150"])

