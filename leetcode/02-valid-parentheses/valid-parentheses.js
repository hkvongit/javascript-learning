/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const parenthesisMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const validChars = [
    ...Object.keys(parenthesisMap),
    ...Object.values(parenthesisMap),
  ];

  for (let char of s) {
    // Our concern is only for parenthesis characters
    if (validChars.some((ele) => ele === char)) {
      let complementaryChar = parenthesisMap[char];
      // if the character is a closing bracket, so to validate that we can check on the complementary is a valid value in the map
      if (complementaryChar) {
        // if the character is a closing bracket and the array is still empty that means there was no corresponding opening bracket before
        if (stack.length === 0) return false;
        // if the stack has elements
        else {
          const lastElementInStack = stack.pop();
          // if the last element in stack is not its complementary opening bracket then it is a failure
          if (lastElementInStack !== complementaryChar) return false;
        }
        // if it is an opening bracket, just push it to the array.
      } else {
        stack.push(char);
      }
    }
  }
  // if there are further elements in array that means some opening parenthesis has no proper closing brackets.
  return stack.length === 0;
};

console.log(isValid("()({}[()])"));
