/**
 * LeetCode #7 - Reverse Integer
 * Difficulty: Medium
 *
 * Problem:
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit
 * integer range [-2^31, 2^31 - 1], return 0.
 *
 * Example:
 * Input: x = 123
 * Output: 321
 *
 * Input: x = -123
 * Output: -321
 *
 * Input: x = 120
 * Output: 21
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x: number): number {
  // Store the sign (+1 or -1)
  const sign = x < 0 ? -1 : 1;

  // Reverse the absolute value
  const reversed =
    Number(Math.abs(x).toString().split("").reverse().join("")) * sign;

  // 32-bit integer range
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  // Overflow check
  if (reversed < INT_MIN || reversed > INT_MAX) {
    return 0;
  }

  return reversed;
}

// Test Cases
console.log(reverse(123));          // 321

console.log(reverse(120));          // 21
console.log(reverse(0));            // 0
console.log(reverse(1534236469));   // 0 (Overflow)