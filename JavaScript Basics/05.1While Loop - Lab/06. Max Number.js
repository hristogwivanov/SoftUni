function max_number(input){
max=-Infinity
let i=0;
    while(input[i]!=`Stop`){
if (input[i]>max) max=Number(input[i]);
i++


    }
console.log(max);
}

max_number(["-1",
"-2",
"Stop"])




