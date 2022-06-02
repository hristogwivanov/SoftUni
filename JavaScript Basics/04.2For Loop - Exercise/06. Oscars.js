function oscars(input) {
    let actorName = input[0];
    let points = Number(input[1]);
    let accessorsCount = Number(input[2]);
    for (i = 1; i <= accessorsCount * 2; i += 2) {
        let accessorName = input[i + 2];
        let accessorPoints = input[i + 3];
        let profit = (accessorName).length * accessorPoints / 2;
        points += profit;
        if (points > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`); return;
        }

    }
console.log(`Sorry, ${actorName} you need ${(1250.5-points).toFixed(1)} more!`)


}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
