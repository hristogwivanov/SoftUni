function greening(input){
sqm=Number(input[0]);
price=7.61*sqm
discount=price*0.18
final=price-discount
console.log(`The final price is: ${final} lv.`);
console.log(`The discount is: ${discount} lv.`);
}
greening([550])