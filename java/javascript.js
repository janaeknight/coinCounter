/* function coinCounter(quarters, dimes, nickels, pennies) {
    var quarterstotal = quarters * .25;
    var dimestotal = dimes * .10;
    var nickelstotal = nickels * .05;
    var penniestotal = pennies * .01;
    var total = quarterstotal + dimestotal + nickelstotal + penniestotal;
    return [total, quarterstotal, dimestotal, nickelstotal, penniestotal];
}

coinCounter();

console.log(coinCounter); */


// Total in Dollars, Total per currency, Total rolls per currency, any remainder per currency.


    var coins = {
        pennies: 200,
        nickels: 500,
        dimes: 300,
        quarters: 64
    };

    var penniesTotal = coins.pennies * .01;
    var nickelsTotal = coins.nickels * .05;
    var dimesTotal = coins.dimes * .10; 
    var quartersTotal = coins.quarters * .25;
    var totalDollarsFromCoins = penniesTotal + nickelsTotal + dimesTotal + quartersTotal;
    var penniesRolls = Math.floor(coins.pennies / 50);
    var nickelsRolls = Math.floor(coins.nickels / 40);
    var dimesRolls = Math.floor(coins.dimes / 50);
    var quartersRolls = Math.floor(coins.quarters / 40);
    let penniesRollsRemainder = Math.floor(coins.pennies % 50);
    let nickelsRollsRemainder = Math.floor(coins.nickels % 40);
    let dimesRollsRemainder = Math.floor(coins.dimes % 50);
    let quartersRollsRemainder = + Math.floor(coins.quarters % 40);


console.log("Amount in pennies: $" +penniesTotal,);
console.log("Amount in nickels: $" +nickelsTotal,);
console.log("Amount in dimes: $" +dimesTotal,);
console.log("Amount in quarters: $" +quartersTotal,);
console.log("Total amount in dollars: $" +totalDollarsFromCoins,);
    if (penniesRolls>1) {
        console.log("There are " +penniesRolls, "rolls of pennies. There are " +penniesRollsRemainder, "leftover.");
    } else if (penniesRolls===1) {
        console.log("There is " +penniesRolls, "roll of pennies. There are " +penniesRollsRemainder, "leftover."); 
    } else {
        console.log("There aren't enough pennies to make a roll. There are " +coins.pennies, "pennies.");
    }
    if (nickelsRolls>1) {
        console.log("There are " +nickelsRolls, "rolls of nickels. There are " +nickelsRollsRemainder, "leftover.");
    } else if (nickelsRolls===1) {
        console.log("There is " +nickelsRolls, "roll of nickels. There are " +nickelsRollsRemainder, "leftover."); 
    } else {
        console.log("There aren't enough nickels to make a roll. There are " +coins.nickels, "nickels.");
    }
    if (dimesRolls>1) {
        console.log("There are " +dimesRolls, "rolls of dimes. There are " +dimesRollsRemainder, "leftover.");
    } else if (dimesRolls===1) {
        console.log("There is " +dimesRolls, "roll of dimes. There are " +dimesRollsRemainder, "leftover."); 
    } else {
        console.log("There aren't enough dimes to make a roll. There are " +coins.dimes, "dimes.");
    }
    if (quartersRolls>1) {
        console.log("There are " +quartersRolls, "rolls of quarters. There are " +quartersRollsRemainder, "leftover.");
    } else if (quartersRolls===1) {
        console.log("There is " +quartersRolls, "roll of quarters. There are " +quartersRollsRemainder, "leftover."); 
    } else {
        console.log("There aren't enough quarters to make a roll. There are " +coins.quarters, "quarters.");
    }