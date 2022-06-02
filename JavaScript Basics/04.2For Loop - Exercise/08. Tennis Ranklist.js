function tennis(input) {
    let tours = Number(input[0]);
    let startingPoints = Number(input[1]);
    let points=startingPoints;
    let wins = 0;
    for (i = 1; i <= tours; i++) {
        let outcome = input[i + 1];
        switch (outcome) {
            case 'W': wins++; points += 2000; break;
            case 'F': points += 1200; break;
            case 'SF': points += 720; break;
            default: break;

        }


    }
    console.log(`Final points: ${points}`)
    console.log(`Average points: ${Math.floor((points-startingPoints)/tours)}`)
    console.log(`${(100*wins/tours).toFixed(2)}%`);
}

tennis(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
