/**
 * Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
*/

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return null;

  let left =
    root.right === undefined || root.right === null
      ? null
      : invertTree(root.right);

  let right =
    root.left === undefined || root.left === null
      ? null
      : invertTree(root.left);

  return {
    val: root.val,
    left,
    right,
  };
};

console.log(
  invertTree({
    val: 2, // The root value is 2
    left: {
      // The left child of the root
      val: 1, // Value of left child is 1
      left: null, // No left grandchild
      right: null, // No right grandchild
    },
    right: {
      // The right child of the root
      val: 3, // Value of right child is 3
      left: null, // No left grandchild
      right: null, // No right grandchild
    },
  })
);
