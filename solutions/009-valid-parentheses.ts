/**
 * LeetCode #20 - Valid Parentheses
 * Difficulty: Easy
 *
 * Problem:
 * Given a string s containing only '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * A string is valid if:
 * 1. Every opening bracket is closed by the same type of bracket.
 * 2. Brackets are closed in the correct order.
 * 3. Every closing bracket has a matching opening bracket.
 *
 * Example:
 * Input: s = "()"
 * Output: true
 *
 * Input: s = "()[]{}"
 * Output: true
 *
 * Input: s = "(]"
 * Output: false
 *
 * Input: s = "([])"
 * Output: true
 *
 * Input: s = "([)]"
 * Output: false
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s: string): boolean {
  const stack: string[] = [];

  const pairs: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    // Opening brackets go into the stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      // Check the most recent opening bracket
      const last = stack.pop();

      if (last !== pairs[char]) {
        return false;
      }
    }
  }

  // If stack is empty, all brackets were matched
  return stack.length === 0;
}

// Test Cases
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([])"));     // true
console.log(isValid("([)]"));     // false
console.log(isValid("{[]}"));     // true
console.log(isValid("((("));      // false
console.log(isValid("]"));        // false