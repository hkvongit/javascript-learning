// This solution has O(n) complexity
/*
$O(n)$ by using a Hash Map (a JavaScript Object or Map).
The Logic
Instead of comparing every pair, we can iterate through the array once and for each number:
Calculate its complement (what number we need to reach the target: target - currentNumber).
Check if that complement is already in our map.
If it is, we've found the pair!
If not, save the current number and its index in the map so a future number can find it.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let seenNumbers = Object.create({});

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let complementaryNum = target - currentNum;
    if (Object.hasOwn(seenNumbers, complementaryNum)) {
      return [seenNumbers[complementaryNum], i];
    } else {
      Object.assign(seenNumbers, { [currentNum]: i });
    }
  }
  return [];
};

console.log(twoSum([3, 2, 4], 6));
