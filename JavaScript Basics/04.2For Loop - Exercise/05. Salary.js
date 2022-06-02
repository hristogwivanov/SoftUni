function salary(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);
    for (i = 1; i <= tabs; i++) {
        switch (input[i + 1]) {
            case `Facebook`: salary -= 150; break;
            case `Instagram`: salary -= 100; break;
            case `Reddit`: salary -= 50; break;
                defaut: break;


        }
if(salary<=0) {console.log("You have lost your salary."); return;}
        

    }
    console.log(salary);



}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

