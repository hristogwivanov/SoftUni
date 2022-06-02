function seconds(input){
let sum=Number(input[0])+Number(input[1])+Number(input[2]);
let mins=0;
if (sum>=60) {
mins++
sum-=60
}
if (sum>=60) {
    mins++
    sum-=60
    }

if (sum<10)
console.log(`${mins}:0${sum}`)
else console.log(`${mins}:${sum}`)
}
seconds(["25","17","18"])