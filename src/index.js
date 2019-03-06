// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var exchange = {};
    if (currency <= 0){
        return exchange;
    }
    if (currency >= 10000){
        exchange.error = "You are rich, my friend! We don't have so much coins for exchange";
        return exchange;
    }
    var coins = {H: 0, Q: 0, D: 0, N: 0, P: 0};
    var values = [50, 25, 10, 5, 1];
    var count = 0;

    for (var property in coins){
        coins[property] =Math.floor(currency/values[count]);
        currency -= coins[property]*values[count];
        count++;
        if (coins[property] != 0){
            exchange[property] = coins[property];
        }
    }

    return exchange;
};
