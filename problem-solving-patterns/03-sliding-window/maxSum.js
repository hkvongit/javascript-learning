// @ts-check
/*
Link to tutorial: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11183952#overview
Problem statement: Find the maximum sum you can find for "n" consecutive elements in an array in which all elements will be numbers.
*/

function maxSumSol1(arr, pairElementCount) {
  const arrLength = arr.length;
  // Check if length is 0, if yes return null
  if (arrLength === 0) {
    return null;
  }
  // set a current max = 0
  let max = 0;
  let sumArray = [];
  // loop through the array till the first element of last pair
  for (let i = 0; i < arrLength - pairElementCount + 1; i++) {
    let sum = arr[i];
    // inner loop to take the sum of the bundle (pairs)
    for (let j = i + 1; j < i + pairElementCount; j++) {
      sum += arr[j];
    }
    sumArray.push(sum);
    if (sum > max) {
      max = sum;
    }
  }
  // return max
  return max;
}

/*
* Explanation of sliding window:
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11183952?start=538#notes
*/
function maxSumWithSlidingWindow(arr, pairCount) {
  const arrayLen = arr.length;

  if (arrayLen === 0) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < pairCount; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;

  // sliding windowing
  for (let i = pairCount; i < arrayLen; i++) {
    tempSum = tempSum - arr[i - pairCount] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

module.exports = {
  maxSumSol1,
  maxSumWithSlidingWindow,
};
