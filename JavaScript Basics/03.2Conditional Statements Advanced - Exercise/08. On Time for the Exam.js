function exam(input){
hourExam=Number(input[0]);
minExam=Number(input[1]);
hourArrival=Number(input[2]);
minArrival=Number(input[3]);
timeExam=hourExam*60+minExam;
timeArrival=hourArrival*60+minArrival; 
if(timeExam<timeArrival) console.log(`Late`);
else if (timeExam-timeArrival<=30) console.log(`On time`);
else console.log(`Early`);
timeDiff=Math.abs(timeExam-timeArrival)
let hh=Math.floor(timeDiff/60);
let mm=timeDiff%60;
if(timeExam-timeArrival>=60){if (mm<10){mm='0'+mm};console.log(`${hh}:${mm} hours before the start`)}
else if(timeExam-timeArrival>0){console.log(`${mm} minutes before the start`)}
else if(timeArrival-timeExam>=60){if (mm<10){mm='0'+mm};console.log(`${hh}:${mm} hours after the start`)}
else if(timeArrival-timeExam>0){console.log(`${mm} minutes after the start`)}
}
exam(["11",
"30",
"8",
"12"])





