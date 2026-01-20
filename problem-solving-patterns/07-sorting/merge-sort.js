/*
SOURCE: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072006#notes

TIME COMPLEXITY: O(nlog(n))
source: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072020#notes
if we have an array of 32 elements then no. of splits required are:
32
16 16
8 8 8 8
4 4 4 4 4 4 4 4
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
ie: 5 splits are required for 32 elements
Similarly if we have 64 elements we have 6 splits 
SPLITS:
2 => 2
4 => 3
8 => 4
16 => 4
32 => 5 splits
64 => 6
128 => 7
==========> n => log(n)
Now we need to do comparing the elements n times with each splits (left- right element comparisons)
so finally the time complexity = O(n(logn))
*/

// helper fn
function sortFn(_left, _right) {
  // takes 2 arrays (left and right parts) as arguments
  // intialize 2 iterators i and j
  let result = [];
  let i = 0;
  let j = 0;
  // if i <left.length and j < right.length, iterate to place the elements to an empty array(resultant array) by comparing the i_th and j_th elements of resp. arrays
  while (i < _left.length && j < _right.length) {
    if (_left[i] < _right[j]) {
      result.push(_left[i]);
      i++;
    } else {
      result.push(_right[j]);
      j++;
    }
  }

  // there can be leftovers on any one of  arrays after the above iteration, add those leftovers (if any) to the resultant array, as the left or right array already comes sorted by previous iteration in the main fn.
  while (i < _left.length) {
    result.push(_left[i]);
    i++;
  }
  while (j < _right.length) {
    result.push(_right[j]);
    j++;
  }
  // return resultant array
  return result;
}

// =================================================================

// function than intake the unsorted array
function main(arr) {
  // TERMINATION CONDITION: check if the arr.length <= 1
  if (arr.length <= 1) {
    // then return the arr
    return arr;
  }
  // find the middle index
  const middleIndex = Math.floor(arr.length / 2);
  // split the array to 2 equal halfs (left and right)
  // recursely split the left array part into further parts by calling the main function iteslt (first termination condition is important)
  const left = main(arr.slice(0, middleIndex));
  // recursely split the *right* array part into further parts by calling the main function iteslt
  const right = main(arr.slice(middleIndex, arr.length));

  // send the left and right part arrays to the helper function
  const finalResult = sortFn(left, right);
  console.log("result: ", finalResult);
  return finalResult;
}

// =================================================================
module.exports = {
  main,
};

// main([3, 4, 7, 6]);
