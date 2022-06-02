function exam(input){
let maxBadGrades=input[0];
let i=1;
let count=0;
let scoreSum=0;
let name;
let badGrades=0;
while(badGrades<maxBadGrades){
    command=input[i];
    if (command===`Enough`) break;
    name=command;
    i++;
    let score=Number(input[i]);
    count++;
    scoreSum+=score;
    if (score<=4)   badGrades++;
    i++;


}
if(badGrades>=maxBadGrades) console.log(`You need a break, ${badGrades} poor grades.`);
else {console.log(`Average score: ${(scoreSum/count).toFixed(2)}`);
console.log(`Number of problems: ${count}`);
console.log(`Last problem: ${name}`);

}



}

exam(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

