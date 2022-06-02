function min_number(input){
min=Infinity;
let i=0;
while(input[i]!=`Stop`){
if (input[i]<min) min=Number(input[i]);
i++;

}
console.log(min);

}
min_number(["-1",
"-2",
"Stop"])





