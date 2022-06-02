function time(input) {

    let hours = Number(input[0]);
    let mins = Number(input[1]) + 15;
    if (mins >= 60) {

        hours = hours + 1;
        mins = mins - 60;
    }
    if (hours > 23) {

        hours -= 24;

    }
    if (mins < 10)
        console.log(`${hours}:0${mins}`)
    else
        console.log(`${hours}:${mins}`)

}
time(["23", "46"])