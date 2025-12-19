/*
- Binary Search is an efficient algorithm for finding a target value within a sorted array by repeatedly dividing the search interval in half. It compares the target to the middle element and eliminates half of the remaining elements based on whether the target is smaller or larger.

- source of learning: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11162784#overview

- Time complexity (Big O) -> source: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11162774#overview
if there are 16 elements, worst case is 4 steps. log2(16) = 4
if there are 32 elements then worst case is 5 steps.  log2(32) = 5
ie, every time we double the elements, the steps increase only by 1. 
Math breakdown:
-- Start with n items.
-- Step 1: Check middle → n/2 left.
-- Step 2: n/4 left.
-- ...until 1 item. (ie, it halves ($/2) the size in each step)
-- Steps needed: log₂(n) (e.g., n=1,000 → ~10 steps; n=1 million → ~20 steps).
*/
function main(arr, element) {
  // setting a start and end for the array elements
  let start = 0;
  let end = arr.length - 1;
  //
  // starting a loop for checking the middle element (condition always the max should be greater or equal to min)
  while (end >= start) {
    // find the middle element
    let middle = Math.floor((start + end) / 2);
    // compare element is less than middle, if yes reduce the end to (middle -1)
    if (element < arr[middle]) {
      end = middle - 1;
    }
    // compare element is greater than middle, if yes increase the start to (middle + 1)
    else if (element > arr[middle]) {
      start = middle + 1;
    }
    // else if the middle is the value, then return the middle (index)
    else if (element === arr[middle]) {
      return middle;
    }
  }
  return -1;
  //
  // if cannot find in loop, return -1
}

module.exports = {
  main,
};
