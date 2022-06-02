function home(input) {
    let flowerType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalSum = 0;
    //цвете	                Роза	Далия	Лале	Нарцис	Гладиола
    //Цена на брой в лева	5	    3.80	2.80	3	    2.50
    switch (flowerType) {
        case 'Roses': totalSum = flowersCount * 5;
            if (flowersCount > 80) totalSum *= 0.9; break;
        case 'Dahlias': totalSum = flowersCount * 3.8;
            if (flowersCount > 90) totalSum *= 0.85; break;
        case 'Tulips': totalSum = flowersCount * 2.8;
            if (flowersCount > 80) totalSum *= 0.85; break;
        case 'Narcissus': totalSum = flowersCount * 3;
            if (flowersCount < 120) totalSum *= 1.15; break;
        case 'Gladiolus': totalSum = flowersCount * 2.5;
            if (flowersCount < 80) totalSum *= 1.2; break;
    }
    if (budget >= totalSum) {

        console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${(budget - totalSum).toFixed(2)} leva left.`)
    }
    else {
        console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`)
    }





}

home(["Tulips",
"88",
"260"])

