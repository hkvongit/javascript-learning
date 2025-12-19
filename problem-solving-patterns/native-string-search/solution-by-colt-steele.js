// Main function with params 1. long sentence 2. short sentence
function nativeStringSearch(longString, shortString) {
  // if anything is empty then return 0
  const longStringLen = longString.length;
  const shortStringLen = shortString.length;
  if (longStringLen < 1 || shortStringLen < 1) {
    return 0;
  }

  // lowercase both the sentences
  const _longString = longString.toLowerCase();
  const _shortString = shortString.toLowerCase();
  // initialize the counter = 0
  let counter = 0;
  // loop through the long sentence
  for (let i = 0; i < longStringLen; i++) {
    // loop through the short sentence
    for (let j = 0; j < shortStringLen; j++) {
      // find if character at the looped characters on both mismatches
      if (_longString[i + j] !== _shortString[j]) {
        // if mismatches then break the inner loop
        break;
      }
      // if reaches the last character the short one successfully then add the counter
      if (j === shortStringLen - 1) counter++;
    }
  }
  return counter;
}

console.log(nativeStringSearch("bu ha ha is a haha", "bu"));
