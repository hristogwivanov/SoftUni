function Books(input){
let bookPages=Number(input[0]);
let pagesPerHour=Number(input[1]);
let days=Number(input[2]);

let hours = bookPages/pagesPerHour;
let hoursPerDay=hours/days;
console.log(hoursPerDay);
}

Books(["212 ","20 ","2 "])
