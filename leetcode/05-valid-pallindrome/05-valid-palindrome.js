/**
 * Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const sLowercased = s.toLowerCase();
  const arrOfS = sLowercased.split("");

  // remove non alpha numeric characters
  const filteredArr = arrOfS.filter((char) => {
    const uniCodeOfChar = char.charCodeAt(0);
    // ASCII Values: 48-57 (0-9), 65-90 (A-Z), and 97-122 (a-z).
    // checking if a number, if not check other valid chars
    if (!(uniCodeOfChar >= 48 && uniCodeOfChar <= 57)) {
      // checking if an lower alphabet, if not then return false and filter out the character
      if (!(uniCodeOfChar >= 97 && uniCodeOfChar <= 122)) {
        return false;
      }
      // checking if an uppercase alphabet, if not check other... (we already lowercased all character, so this is not required)
      /*
      if (!(uniCodeOfChar >= 65 && uniCodeOfChar <= 90)) {
      }
      */
    }
    return true;
  });

  const temp = [...filteredArr];
  const revArray = temp.reverse();
  const originalString = filteredArr.join("");
  const reverseString = revArray.join("");

  return originalString === reverseString;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
