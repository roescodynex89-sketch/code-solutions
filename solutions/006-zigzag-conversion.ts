/**
 * LeetCode #6 - Zigzag Conversion
 * Difficulty: Medium
 *
 * Problem:
 * Given a string s and an integer numRows, arrange the characters
 * in a zigzag pattern on the given number of rows and then read
 * the characters row by row.
 *
 * Example:
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 * Example:
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 *
 * Example:
 * Input: s = "A", numRows = 1
 * Output: "A"

 */

function convert(s: string, numRows: number): string {
  // if there is only one row, no zigzag is needed
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  // Create
  const rows: string[] = Array(numRows).fill("");

  let currentRow = 0;
  let direction = 1;

  //  into the correct row
  for (const char of s) {
    rows[currentRow] += char;

    // Change direction at the top and bottom
    if (currentRow === 0) {
      direction = 1;
    } else if (currentRow === numRows - 1) {
      direction = -1;
    }

    currentRow += direction;
  }

  // Join
  return rows.join("");
}

// Test Cases
console.log(convert("PAYPALISHIRING", 3));
// "PAHNAPLSIIGYIR"

console.log(convert("PAYPALISHIRING", 4));
// "PINALSIGYAHRPI"

console.log(convert("A", 1));
// "A"

console.log(convert("AB", 1));
// "AB"
