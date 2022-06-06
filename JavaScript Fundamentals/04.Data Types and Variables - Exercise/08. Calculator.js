function calculator(first,operator,second){
let result=""+first+operator+second;
result=eval(result);
console.log(result.toFixed(2))

}
calculator(5,
    '+',
    10
    )
calculator(25.5,
    '-',
    3
    )