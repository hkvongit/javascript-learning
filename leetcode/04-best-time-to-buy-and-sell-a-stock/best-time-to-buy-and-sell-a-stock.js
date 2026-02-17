/*
Below logic is of time complexity O(n^2) which is not good.
So for a better solution check SOLUTION-2 in the same directory
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let output = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const diff = prices[j] - prices[i];
      if (diff > output) output = diff;
    }
  }

  return output;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
