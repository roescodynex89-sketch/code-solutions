/**
 * LeetCode #16 - 3Sum Closest
 * Difficulty: Medium
 *
 * Problem:
 * Given an integer array nums and an integer target,
 * find three integers in nums whose sum is closest to target.
 *
 * Return the sum of the three integers.
 *
 * Example:
 * Input: nums = [-1, 2, 1, -4], target = 1
 * Output: 2
 *
 * Explanation:
 * (-1 + 2 + 1) = 2
 * 2 is closest to target 1.
 *
 * Example:
 * Input: nums = [0, 0, 0], target = 1
 * Output: 0
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */

function threeSumClosest(nums: number[], target: number): number {
  // Sort the array
  nums.sort((a, b) => a - b);

  // Start with the first three numbers
  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // If we find the exact target, return immediately
      if (sum === target) {
        return sum;
      }

      // Update closest sum
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      // Move pointers
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

// Test Cases
console.log(threeSumClosest([-1, 2, 1, -4], 1));
// 2

console.log(threeSumClosest([0, 0, 0], 1));
// 0

console.log(threeSumClosest([1, 1, 1, 0], -100));
// 2

console.log(threeSumClosest([1, 2, 3, 4], 10));
// 9
