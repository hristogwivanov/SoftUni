function numbers(input){
let start=parseInt(input[0]);
let end=parseInt(input[1]);
let sum=0;
for(let i=start;i<end;i++){
if(i%9===0){
sum+=i;
}  
}
console.log(`The sum: ${sum}`)
for(let i=start;i<end;i++){
    if(i%9===0){
        console.log(i)
    }  
    }


}
numbers(["100", "200"])