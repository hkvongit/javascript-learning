// This js file for any kind of practice.

// Binary search

// function
function main(_inputArray, _elementToFind) {
  // while loop within minIndex < maxIndex (terminate with -1)
  if (_inputArray.length < 1) {
    return -1;
  } else {
    let minIndex = 0;
    let maxIndex = _inputArray.length - 1;
    let midIndex = Math.floor((minIndex + maxIndex) / 2);
    while (minIndex <= maxIndex) {
      // midIndex = (minIndex + maxIndex) / 2
      midIndex = Math.floor((minIndex + maxIndex) / 2);
      // if element === midIndex
      if (_elementToFind === _inputArray[midIndex]) {
        return midIndex;
        // else if element > midIndex
      } else if (_elementToFind > _inputArray[midIndex]) {
        // minIndex = midIndex + 1
        minIndex = midIndex + 1;
        // else if element < midIndex
      } else {
        // maxIndex = minIndex - 1
        maxIndex = midIndex - 1;
      }
    }
    // return -1 element not found
    return -1;
  }
}

// argument array
// const inputArray = [5, 7, 10, 15, 24, 28, 33, 47, 65];
// element to find
// const elementToFind = 65; // index is 8

// console.log(main(inputArray, elementToFind));

module.exports = {
  main,
};
