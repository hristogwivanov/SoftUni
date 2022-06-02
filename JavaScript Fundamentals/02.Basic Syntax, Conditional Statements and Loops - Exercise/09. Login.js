function login(input){
    let errors=0;
    let password=input[0].split("").reverse().join("");

for(i=1;i<input.length;i++){
if(input[i]==password) {
    console.log(`User ${input[0]} logged in.`); return; 
}
else {
    if (errors==3) {console.log(`User ${input[0]} blocked!`); return;}
    console.log("Incorrect password. Try again.");
errors++;}

}

}

login(['Acer','login','go','let me in','recA'])
login(['sunny','rainy','cloudy','sunny','not sunny'])