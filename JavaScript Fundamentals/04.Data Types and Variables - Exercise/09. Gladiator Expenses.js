function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
let helmets=Math.floor(lostFights/2); 
let swords=Math.floor(lostFights/3);
let shields=Math.floor(lostFights/6);
let armors=Math.floor(lostFights/12);
let cost=helmets*helmetPrice+swords*swordPrice+shields*shieldPrice+armors*armorPrice
console.log(`Gladiator expenses: ${cost.toFixed(2)} aureus`)
}
gladiatorExpenses(7,
    2,
    3,
    4,
    5
    )

    gladiatorExpenses(23,
        12.50,
        21.50,
        40,
        200        
        )