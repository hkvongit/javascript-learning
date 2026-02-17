Problem
https://leetcode.com/problems/invert-binary-tree/description/ 

---

To understand the Invert Binary Tree problem (LeetCode #226), let's break down the concept, the structure, and the logic required to solve it.


## 1. The Problem Statement
Given the root of a binary tree, you need to "invert" the tree and return its root.
Inverting a binary tree means that for every node in the tree, its left and right children are swapped. This is often referred to as creating a "mirror image" of the original tree.

## 2. Visualizing the Inversion
Imagine you have a tree like this:

Original Tree:

      4
    /   \
   2     7
  / \   / \
 1   3 6   9
 
 To invert it, you start at the root (4) and swap its left child (2) and right child (7). Then, you move down to the next level and swap the children of 2 and 7 as well.

 Inverted Tree (Mirror Image):
      4
    /   \
   7     2
  / \   / \
 9   6 3   1
 Notice how every left child has become a right child, and vice versa, all the way down to the leaves.

## 3. Understanding the Data Structure

In JavaScript (and most LeetCode environments), a binary tree node is typically defined as an object:

```js
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);      // The value stored in the node
    this.left = (left === undefined ? null : left); // Pointer/Reference to the left child
    this.right = (right === undefined ? null : right); // Pointer/Reference to the right child
}
```

## 4. Key Logic & Thought Process
To solve this, you need a way to visit every node and perform the swap. There are two primary ways to think about this:

#### A. The Recursive Approach (Top-Down)

Base Case: What happens if the node is null? (e.g., you've reached beyond a leaf node). You should simply return null.
The Swap: For the current node, take its left child and its right child and switch them.
Recursion: Repeat this same logic for the new left child and the new right child.

### How to represent this in JavaScript code

```js
// Define a simple node object structure for Example 2
const root = {
  val: 2,               // The root value is 2
  left: {               // The left child of the root
    val: 1,             // Value of left child is 1
    left: null,         // No left grandchild
    right: null         // No right grandchild
  },
  right: {              // The right child of the root
    val: 3,             // Value of right child is 3
    left: null,         // No left grandchild
    right: null         // No right grandchild
  }
};
```