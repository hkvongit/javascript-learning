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
