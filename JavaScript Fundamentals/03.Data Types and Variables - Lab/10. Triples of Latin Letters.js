function triples(input){
for(i=0;i<input;i++){
    for(j=0;j<input;j++){
        for(k=0;k<input;k++){
            console.log(String.fromCharCode(97+i)+String.fromCharCode(97+j)+String.fromCharCode(97+k))
        }
    }
}

}
triples('3')
triples(2)