function deposit (input){
let deposit = Number(input[0]);
let period = Number(input[1]);
let percent = Number(input[2]);

//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

let sum = deposit+period*((deposit*percent/100)/12);
console.log(sum);

}

deposit(["200 ","3 ","5.7 "])