function combinations(input){
    let x;
    let y;
    let z;
    let count=0;
    for(x=0;x<=Number(input[0]);x++)
    {
for(y=0;y<=Number(input[0]);y++){
for(z=0;z<=Number(input[0]);z++){
if(x+y+z===Number(input[0])) count++;


}


}


    }


console.log(count);

}
combinations(["25"])