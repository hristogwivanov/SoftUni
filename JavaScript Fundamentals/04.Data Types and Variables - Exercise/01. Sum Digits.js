function sumDigits(input){
input=input.toString();
sum=0;
for(i=0;i<input.length;i++)
{
sum+=Number(input[i]);
}
console.log(sum);
}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)