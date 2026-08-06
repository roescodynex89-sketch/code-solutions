/**
 * LeetCode #14 - Longest Common Prefix
 * Difficulty: Easy
 *
 * Problem:
 * Given an array of strings, find the longest common prefix
 * shared by all strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example:
 * Input: strs = ["flower", "flow", "flight"]
 * Output: "fl"
 *
 * Input: strs = ["dog", "racecar", "car"]
 * Output: ""
 *
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 */

function longestCommonPrefix(strs: string[]): string {
  // Start with the first string as the prefix
  let prefix = strs[0];

  // Compare prefix with every other string
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      // No common prefix
      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}

// Test Cases
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// "fl"

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// ""

console.log(
  longestCommonPrefix(["interspecies", "interstellar", "interstate"]),
);
// "inters"

console.log(longestCommonPrefix(["a"]));
// "a"

console.log(longestCommonPrefix(["", "b"]));
// ""
