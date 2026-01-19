# Sliding Window - Pattern

The **sliding window** pattern is a technique for solving problems that involve arrays or lists. It works by creating a window which can either be a fixed size or change dynamically, and moves this window over the data to examine a subset of it at each step. This pattern is especially useful when you need to calculate or optimize something over a contiguous block of elements, such as finding subarrays, substrings, or sequences with certain properties.

## Examples

### 1. Maximum Sum of N Consecutive Elements

**Problem**: Given an array of integers and a number `n`, find the maximum sum of `n` consecutive elements in the array.

**Logic**: Instead of recalculating the sum of `n` elements for every position, we calculate the sum of the first `n` elements. Then, as we move the window one step to the right, we subtract the element that is leaving the window and add the element that is entering.

```javascript
function maxSum(arr, n) {
  if (arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;

  // Initial window sum
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // Sliding the window
  for (let i = n; i < arr.length; i++) {
    // Subtract the first element of previous window, add the new element
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// Example: maxSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
// First window (2+6+9) = 17
// Next: 17 - 2 + 2 = 17
// Next: 17 - 6 + 1 = 12...
```

### 2. Smallest Subarray with a Given Sum (Variable Window)

**Problem**: Given an array of positive integers and a number `S`, find the length of the smallest contiguous subarray whose sum is greater than or equal to `S`.

**Logic**: We expand the window until the sum is $\ge S$, then we try to shrink the window from the left as much as possible while keeping the sum $\ge S$ to find the minimum length.

```javascript
function minSubArrayLen(arr, s) {
  let minLen = Infinity;
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end]; // Expand window

    // Shrink window from the left as long as sum >= s
    while (currentSum >= s) {
      minLen = Math.min(minLen, end - start + 1);
      currentSum -= arr[start];
      start++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
```

### 3. Longest Substring with Unique Characters

**Problem**: Given a string, find the length of the longest substring with all unique characters.

**Logic**: Use a window and a map/object to keep track of the index of each character. If we see a character again, we move the start of the window to the position after the previous occurrence of that character.

```javascript
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      // Move start to the right of the previous occurrence
      start = Math.max(start, seen[char]);
    }
    // Update length
    longest = Math.max(longest, i - start + 1);
    // Store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
```
