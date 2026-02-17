https://leetcode.com/problems/merge-two-sorted-lists/description/

21. Merge Two Sorted Lists
Easy
Topics
premium lock iconCompanies

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

 

Constraints:

    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.



```js
function main(array1, array2) {
  let output = [];
  let [i, j] = [0, 0];

  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      output.push(array1[i]);
      i++;
    }
    output.push(array2[j]);
    j++;
  }

  while (i < array1.length) {
    output.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    output.push(array2[j]);
    j++;
  }

  return output;
}

console.log(main([], [0]));

```