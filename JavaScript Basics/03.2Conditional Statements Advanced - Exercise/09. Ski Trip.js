function ski(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];
    let nights = days - 1;
    let sumForAllNights = 0;

    switch (roomType) {
        case `room for one person`:
            sumForAllNights = nights * 18; break;
        case `apartment`:
            sumForAllNights = nights * 25;
            if (nights < 10) { sumForAllNights *= 0.7 }
            else if (nights <= 15) {
                sumForAllNights *= 0.65
            }
            else if (nights > 15) { sumForAllNights *= 0.5 } break;
        case 'president apartment':
            sumForAllNights = nights * 35;
            if (nights < 10) { sumForAllNights *= 0.9 }
            else if (nights <= 15) {
                sumForAllNights *= 0.85
            }
            else if (nights > 15) { sumForAllNights *= 0.8 } break;

    }

    if (feedback === `positive`) sumForAllNights *= 1.25;
    else if (feedback === `negative`) sumForAllNights *= 0.9;
    console.log(sumForAllNights.toFixed(2));



}

ski(["30",
"president apartment",
"negative"])
