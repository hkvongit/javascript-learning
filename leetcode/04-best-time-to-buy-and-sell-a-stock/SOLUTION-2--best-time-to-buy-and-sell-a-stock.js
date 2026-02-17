/*
 Approach: SINGLE-PASS GREEDY APPROACH.
 -> Instead of comparing every possible pair of days, you keep track of the lowest price you've seen so far and calculate the potential profit at every step.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minStockValue = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockValue) {
      minStockValue = prices[i];
      continue;
    }
    if (prices[i] - minStockValue > maxProfit) {
      maxProfit = prices[i] - minStockValue;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
