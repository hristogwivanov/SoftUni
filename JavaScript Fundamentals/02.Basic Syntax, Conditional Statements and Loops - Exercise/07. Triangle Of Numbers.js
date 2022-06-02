function triangle(num){
    let printString="";
for(i=1;i<=num;i++){
for(y=1;y<=i;y++){
    printString+=`${i} `;
}
console.log(printString);
printString="";
}


}

triangle(3)
triangle(5)
triangle(6)