function area(input) {
    let figure = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    if (figure == "square") console.log((a * a).toFixed(3));
    else if (figure == "rectangle") console.log((a*b).toFixed(3));
    else if (figure == "circle") console.log((Math.pow(a,2)*Math.PI).toFixed(3))
    else if (figure == "triangle") console.log((a*b/2).toFixed(3))
}

area(["triangle","4.5","20"])


