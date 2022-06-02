function sum(input){
start=Number(input[0]);
end=Number(input[1]);
magicNumber=Number(input[2]);
let count=0;
for(x=start;x<=end;x++){
for(y=start;y<=end;y++){
count++;
if (x+y==magicNumber){
console.log(`Combination N:${count} (${x} + ${y} = ${magicNumber})`)
return;
}

}

}
console.log(`${count} combinations - neither equals ${magicNumber}`);

}

sum
(["23",
"24",
"20"])

