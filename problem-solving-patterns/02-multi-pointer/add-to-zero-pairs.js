/**
  Source: [Colt steele - udemy tutorial](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11183942#overview)	  
  - Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
  - Very efficient for solving problems with minimal space complexity as well.
*/
function sumZero(arr) {
  const indexOfLastElement = arr.length - 1;
  let left = 0;
  let right = indexOfLastElement;
  while (left < right) {
    let elementLeft = arr[left];
    let elementRight = arr[right];
    let sum = elementLeft + elementRight;
    if (sum === 0) {
      return [elementLeft, elementRight];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return null;
}

module.exports = {
  sumZero,
};
