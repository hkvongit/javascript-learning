/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
 *E.g:
countUniqueValues([1,1,1,1,1,2]) // 2
count UniqueValues ( [1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues ( []) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
 */

function countUniqueValues(arr) {
  let counter1 = 0;
  let counter2 = 1;
  debugger;
  const arrayLength = arr.length;
  while (counter2 < arrayLength) {
    if (arr[counter1] !== arr[counter2]) {
      let temp = arr[counter1 + 1];
      arr[counter1 + 1] = arr[counter2];
      arr[counter2] = temp;
      counter1++;
    }
    counter2++;
  }
  return counter1 + 1;
}

module.exports = {
  countUniqueValues,
};
