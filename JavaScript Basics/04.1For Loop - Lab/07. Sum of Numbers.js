function sum(input){
let text=input[0];
let result=0;
for(i=0;i<text.length;i++){
result+=parseInt(text[i]);
}
console.log(`The sum of the digits is:${result}`);

}
sum (["1234"])