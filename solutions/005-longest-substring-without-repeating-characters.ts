/**
 * LeetCode #3 - Longest Substring Without Repeating Characters
 * Difficulty: Medium
 *
 * Problem:
 * Given a string s, find the length of the longest substring
 * without duplicate characters.
 *
 * A substring is a continuous part of a string.
 *
 * Example:
 * Input: s = "abcabcbb"
 * Output: 3
 *
 * Input: s = "bbbbb"
 * Output: 1
 *
 * Input: s = "pwwkew"
 * Output: 3
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */


function lengthOfLongestSubstring(s: string): number {
  const seen = new Set<string>();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // If duplicate character is found,
    // remove characters from the left
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    // Add current character to the Set
    seen.add(s[right]);

    // Calculate current window length
    const currentLength = right - left + 1;

    // Update maximum length
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

// Test Cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3
console.log(lengthOfLongestSubstring(""));         // 0
console.log(lengthOfLongestSubstring("au"));       // 2
console.log(lengthOfLongestSubstring("aab"));      // 2