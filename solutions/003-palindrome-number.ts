/**
 * LeetCode #9 - Palindrome Number
 * Difficulty: Easy
 *
 * Problem:
 * Given an integer x, return true if x is a palindrome,
 * and false otherwise.
 *
 * A palindrome reads the same forward and backward.
 *
 * Example:
 * Input: x = 121
 * Output: true
 *
 * Input: x = -121
 * Output: false
 *
 * Input: x = 10
 * Output: false
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x: number): boolean {
  // Negative numbers cannot be palindromes
  if (x < 0) {
    return false;
  }

  const original = x;
  let reversed = 0;

  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return original === reversed;
}

// Test Cases
console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false
console.log(isPalindrome(0));     // true
console.log(isPalindrome(1221));  // true
console.log(isPalindrome(123));   // false