function sum_numbers(input){
let total=Number(input[0]);
let sum=0;
let i=1;
while(sum < total){
sum+=Number(input[i]);
i++;


}
console.log(sum);

}

sum_numbers(["100",
"10",
"20",
"30",
"40"])
