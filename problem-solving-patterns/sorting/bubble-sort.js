/*
BUBBLE SORT
- Why it is called Bubble sort ? This is because the largest value is bubbled to top (end of array if we are sorting in ascending order) and then sorted
- Source of learning: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11071946#overview\
- Visual example of the working: https://visualgo.net/en/sorting
- Time complexity - O(n²) (2 complete iterations are required in the worst case scenario)
*/

// LOGIC
// declare main function with array of number as the argument
function main(arr) {
  // start a loop in which "i" decrements from len -1 to 0
  for (i = arr.length - 1; i >= 0; i--) {
    // flag for checking any swap made in this iteration, if no swaps are made that means it is already sorted and further traversing is not required.
    let isSwapOccurred = false;
    // start a inner loop for "j: increments towards "i"
    for (j = 0; j < i; j++) {
      // compare j -th element and j+1 -th elements and swap if j-th element is larger than the j+1 -th element.
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapOccurred = true;
      }
    }
    // breaking if no swap occurred in last round
    if (!isSwapOccurred) {
      break;
    }
  }
  console.log(arr);
  return arr;
}

module.exports = {
  main,
};
