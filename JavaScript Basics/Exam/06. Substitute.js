function substitute(input){
let K=input[0];
let L=input[1];
let M=input[2];
let N=input[3];
let subs=0;


for(a=K;a<=8;a++){
for(b=9;b>=L;b--){
for(c=M;c<=8;c++){
for(d=9;d>=N;d--){
if(a%2==0&&c%2==0&&b%2==1&&d%2==1){
    if(a==c&&b==d) {console.log(`Cannot change the same player.`);}
    else {console.log(`${a}${b} - ${c}${d}`); subs++; if (subs>=6) return;}
}

}

}


}



}





}
substitute(["7",
"6",
"8",
"5"])


