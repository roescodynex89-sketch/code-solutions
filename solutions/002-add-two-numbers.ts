/**
 * LeetCode #2 - Add Two Numbers
 * Difficulty: Medium
 *
 * Problem:
 * Add two numbers represented by two linked lists and
 * return the sum as a linked list.
 *
 * Example:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 *
 * Time Complexity: O(max(m, n))
 * Space Complexity: O(max(m, n))
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;

    const sum = x + y + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
}

// Helper Function
function createList(arr: number[]): ListNode | null {
  const dummy = new ListNode();
  let current = dummy;

  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummy.next;
}

// Helper Function
function printList(head: ListNode | null): number[] {
  const result: number[] = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  return result;
}

// Test Cases
const l1 = createList([2, 4, 3]);
const l2 = createList([5, 6, 4]);

console.log(printList(addTwoNumbers(l1, l2))); // [7,0,8]