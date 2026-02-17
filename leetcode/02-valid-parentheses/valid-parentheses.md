# Valid Parentheses

https://leetcode.com/problems/valid-parentheses/description/


Easy
Topics
premium lock iconCompanies
Hint

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false


## Best solution is stack based
Efficient solution given by Google gemini
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 1. Initialize a stack to keep track of opening brackets
    const stack = [];
    
    // 2. Map closing brackets to their corresponding opening brackets
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        // 3. If the character is a closing bracket
        if (bracketMap[char]) {
            // Pop the top element from the stack (or use a dummy value if stack is empty)
            const topElement = stack.length === 0 ? '#' : stack.pop();

            // If the popped element doesn't match the required opening bracket, return false
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // 4. If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // 5. If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
};

// Examples
console.log(isValid("()"));     // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false
console.log(isValid("([)]"));   // false
```