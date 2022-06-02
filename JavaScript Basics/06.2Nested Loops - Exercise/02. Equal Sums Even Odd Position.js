function equalsums(input){
let start=input[0];
let end=input[1];
let printLine=``;
for (i=start;i<=end;i++){
    let currentNum="" + i;
let sumOdd=0;
let sumEven=0;
for(a=0; a<6; a++){
if (a%2===0) sumOdd+=Number(currentNum.charAt(a));
else sumEven+=Number(currentNum.charAt(a));

}
if(sumOdd===sumEven) printLine +=`${i} `;

}

console.log(printLine)
}
equalsums(["123456",
"124000"])

