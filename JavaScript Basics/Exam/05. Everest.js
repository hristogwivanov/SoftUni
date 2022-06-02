function everest(input){
let start=5364;
let finish=8848;
let height=start;
let i=0;
let days=1;

while(height<finish){
command=input[i];
if (command==`END`) break;
if (command==`Yes`) days++;
if (days>5) break;
i++;
advance=Number(input[i]);
command=input[i];
if (command==`END`) break;
height+=advance;
i++;
}
if (height>=finish){
console.log(`Goal reached for ${days} days!`);

}
else {
console.log(`Failed!`);
console.log(height);
}

}
everest(["Yes",
"700",
"END"])





