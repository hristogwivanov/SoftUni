function sumprimenotprime(input){
    let number;
    let sumPrime=0;
    let sumNonPrime=0;
    let isPrime=true;

for(i=0;;i++)
{if (input[i]==`stop`) break;
    else if(input[i]<0) {console.log(`Number is negative.`); continue;}
    else{
        number=Number(input[i]);
        for(let j=number-1;j>=2;j--)
        {
            if (number%j==0) {isPrime=false; break;}
        }
        if(isPrime==true) {sumPrime+=number;}
        else {sumNonPrime+=number; isPrime=true;}
    }
    
}

console.log(`Sum of all prime numbers is: ${sumPrime}`)
console.log(`Sum of all non prime numbers is: ${sumNonPrime}`)


}

sumprimenotprime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])

