/*
SOURCE
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11162776#overview

PROBLEM STATEMENT
- We have a longer string ("Harold says haha in hamburg")
- We have a shorter sting ("ha")
- We need to find how many times the shorter string is repeated in the longer string (here "ha" is repeated 4 times)
*/

// Long string
const largeString = "Harold says haha in hamburg";
//  short string
const shortString = "ha";

// function
function main(_largeString, _shortString) {
  // lower case both the strings
  const _largeStringCaseCorrected = _largeString.toLowerCase();
  const _shortStringCaseCorrected = _shortString.toLowerCase();
  // declare repeatitionCount = 0
  let repeatitionCount = 0;
  // loop on longer string
  for (i = 0; i < _largeStringCaseCorrected.length; i++) {
    tempI = i;
    /*
    we can avoid such an temp variable by improving the logic as explained by colt steele in this video: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11162778#overview
    logic will be 
    for (j = 0; j < _shortStringCaseCorrected.length; j++) {
      if (_largeStringCaseCorrected[i+j] !== _shortStringCaseCorrected[j]) { // here it will be "i+j"
        break;
      } else i++;
      if (j === _shortStringCaseCorrected.length - 1) repeatitionCount++;
    }
    */
    // loop on shorter string
    for (j = 0; j < _shortStringCaseCorrected.length; j++) {
      // Check if character matches btw longers and shorter string
      // if any does not match stop the inner loop of shorter string
      if (_largeStringCaseCorrected[i] !== _shortStringCaseCorrected[j]) {
        break;
      } else i++;
      // if all short string char matches then increment the repeatitionCount(+1)
      if (j === _shortStringCaseCorrected.length - 1) repeatitionCount++;
    }
    i = tempI;
  }
  return repeatitionCount;
}

console.log(main(largeString, shortString));

module.exports = {
  main,
};
