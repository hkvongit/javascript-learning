// TWO-POINTER TECHNIQUE.

/**
 * @param {string} s - The input string to check
 * @return {boolean} - Returns true if s is a valid palindrome, false otherwise
 */
var isPalindrome = function (s) {
  // Initialize the left pointer at the very start of the input string
  let left = 0;
  // Initialize the right pointer at the very end of the input string
  let right = s.length - 1;

  // Iterate through the string moving pointers toward the center until they meet
  while (left < right) {
    // Move the left pointer forward if the current character is not a letter or number
    while (left < right && !isAlphanumeric(s[left])) {
      // Increment the left index by one
      left++;
    }
    // Move the right pointer backward if the current character is not a letter or number
    while (left < right && !isAlphanumeric(s[right])) {
      // Decrement the right index by one
      right--;
    }

    // Check if the characters at both positions are equal after converting to lowercase
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      // Return false because a mismatch means the string is not a palindrome
      return false;
    }

    // Advance the left pointer to the next character for comparison
    left++;
    // Move the right pointer back to the previous character for comparison
    right--;
  }

  // Return true if the loop finishes successfully as all valid characters matched
  return true;
};

/**
 * Helper function to determine if a character is alphanumeric (0-9, A-Z, a-z)
 * @param {string} char - The single character to check
 * @return {boolean} - True if alphanumeric, false otherwise
 */
function isAlphanumeric(char) {
  // Extract the character code (ASCII/Unicode) for the given character
  const code = char.charCodeAt(0);
  // Return true if the code falls within the numeric range (0-9)
  if (code >= 48 && code <= 57) return true;
  // Return true if the code falls within the uppercase letter range (A-Z)
  if (code >= 65 && code <= 90) return true;
  // Return true if the code falls within the lowercase letter range (a-z)
  if (code >= 97 && code <= 122) return true;
  // Return false if the character code is not within any of the valid ranges
  return false;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
