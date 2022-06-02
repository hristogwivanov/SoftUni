function cake(input){
let pieces=input[0]*input[1];
i=2;
while(input[i]!="STOP"){
pieces-=input[i];
i++;
if(pieces<0)
{console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`); return;}

}
console.log(`${pieces} pieces are left.`)



}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

