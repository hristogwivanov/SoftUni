function printAndSum(a,b){
    let sum=0;
    let printString="";
for(a;a<=b;a++){

    printString+=`${a} `;
    sum+=a;
}
console.log(printString)

console.log(`Sum: ${sum}`)
}

printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)