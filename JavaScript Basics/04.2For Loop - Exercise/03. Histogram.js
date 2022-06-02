function histogram(input){
let n=input[0];
let first=0;
let second=0;
let third=0;
let fourth=0;
let fifth=0;
for(i=1;i<=n;i++){
let number=input[i];
if(number<200) first++;
else if(number<400) second++;
else if(number<600) third++;
else if(number<800) fourth++;
else if(number>=800) fifth++;
}
console.log(`${((100*first/n).toFixed(2))}%`);
console.log(`${((100*second/n).toFixed(2))}%`);
console.log(`${((100*third/n).toFixed(2))}%`);
console.log(`${((100*fourth/n).toFixed(2))}%`);
console.log(`${((100*fifth/n).toFixed(2))}%`);



}
histogram(["3",
"1",
"2",
"999"])
