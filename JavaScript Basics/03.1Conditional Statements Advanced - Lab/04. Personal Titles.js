function titles(input) {
    let age = input[0];
    let sex = input[1];
    if (sex === 'm' && age < 16) console.log('Master')
    if (sex === 'm' && age >= 16) console.log('Mr.')
    if (sex === 'f' && age < 16)  console.log('Miss')
    if (sex === 'f' && age >= 16) console.log('Ms.')


    console.log('')




}
titles(["12",
    "f"])
