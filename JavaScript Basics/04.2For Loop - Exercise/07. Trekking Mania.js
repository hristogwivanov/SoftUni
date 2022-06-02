function trekking(input){
let n=input[0];
let musala=0;
let monblanc=0;
let kilimandjaro=0;
let k2=0;
let everest=0;
let ludiHora=0;
for(i=1;i<=n;i++){
    let x=Number(input[i]);
if(x<=5) musala+=x;
else if(x<=12) monblanc+=x;
else if(x<=25) kilimandjaro+=x;
else if(x<=40) k2+=x;
else if (x>=41) everest+=x;
ludiHora+=x;

}
console.log((100*musala/ludiHora).toFixed(2)+"%");
console.log((100*monblanc/ludiHora).toFixed(2)+"%");
console.log((100*kilimandjaro/ludiHora).toFixed(2)+"%");
console.log((100*k2/ludiHora).toFixed(2)+"%");
console.log((100*everest/ludiHora).toFixed(2)+"%");
}

trekking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
