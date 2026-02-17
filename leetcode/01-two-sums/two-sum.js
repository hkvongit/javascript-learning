// This solution has O(n^2) complexity

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let output = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        output = [i, j];
        break;
      }
    }
    if (output.length > 0) break;
  }
  return output;
};

console.log(twoSum([3, 2, 4], 6));
