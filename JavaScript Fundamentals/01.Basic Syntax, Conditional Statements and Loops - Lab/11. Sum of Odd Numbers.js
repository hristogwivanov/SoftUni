function sumOfOdd(num){
    let sum=0; 
for(i=0;i<num;i++){
let temp=i*2+1; 
console.log(temp);
sum+=temp;
}
console.log(`Sum: ${sum}`)

}

sumOfOdd(5)
sumOfOdd(3)