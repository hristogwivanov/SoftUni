function cinema(input) {
    //    •	Premiere – премиерна прожекция, на цена 12.00 лева.
    //    •	Normal – стандартна прожекция, на цена 7.50 лева.
    //    •	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
    type = input[0];
    let x = input[1];
    let y = input[2];
    let price = 0;
    switch (type) { 
case `Premiere`: price = 12; break;
case `Normal`: price = 7.5; break;
    case `Discount`: price = 5; break;
}
price=price*x*y;
console.log(`${price.toFixed(2)} leva`)
}

cinema(["Premiere",
    "10",
    "12"])
