function password(input){
let name=input[0];
let password=input[1];
let i=2;
while (input[i]!==password){
i++;
}

console.log(`Welcome ${name}!`)

}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
