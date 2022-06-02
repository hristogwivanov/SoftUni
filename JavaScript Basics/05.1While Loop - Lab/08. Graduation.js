function graduation(input) {
    let name = input[0];
    let sum = 0;
    let i = 0;
    let grade = 1;

    while (grade <= 12) {

        if (Number(input[i]) >= 4) {
            sum += Number(input[i]);
            i++;
            grade++;
        }
        else {
            i++;
            if (Number(input[i]) < 4) {
                console.log(`${name} has been excluded at ${grade} grade`);
                return;
            }
        }


    }
let avg=(sum/(12));
console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`)


}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
