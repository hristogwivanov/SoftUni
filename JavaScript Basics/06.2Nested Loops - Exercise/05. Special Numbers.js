function special(input){
    let n=Number(input[0]);
    let result = ``;
for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
       for (let k = 0; k <= 9; k++) {
        for (let l = 0; l <=  9; l++) {
     if(n%i===0 && n%j===0 && n%k===0 && n%l===0)
     
            result+= `${i}${j}${k}${l} `;       
        }
       }
    }
}
console.log(result);


}
special(["3"])