function exam(input){
let count=Number(input[0]);
let top=0;
let good=0;
let middle=0;
let poor=0;
let sum=0;
for (let i=1;i<=count;i++){
sum+=Number(input[i]);
if(Number(input[i])>=5.00) top++;
else if(Number(input[i])>=4.00) good++;
else if(Number(input[i])>=3.00) middle++;
else  poor++;
}
console.log(`Top students: ${(100*(top/count)).toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${(100*(good/count)).toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${(100*(middle/count)).toFixed(2)}%`);
console.log(`Fail: ${(100*(poor/count)).toFixed(2)}%`);
console.log(`Average: ${(sum/count).toFixed(2)}`)



}
exam(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
