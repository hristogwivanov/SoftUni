function lunch(input){
let title=input[0];
let episodeTime=Number(input[1])
let breakTime=Number(input[2])
let lunchTime=breakTime/8;
let relaxTime=breakTime/4;
if(breakTime>=(lunchTime+relaxTime+episodeTime))
console.log(`You have enough time to watch ${title} and left with ${Math.ceil(breakTime-lunchTime-relaxTime-episodeTime)} minutes free time.`)
else
console.log(`You don't have enough time to watch ${title}, you need ${Math.ceil(Math.abs(breakTime-lunchTime-relaxTime-episodeTime))} more minutes.`)
}

lunch((["Game of Thrones",
"60",
"96"])
)