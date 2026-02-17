/**
 * @param {TreeNode} root // The root of the binary tree
 * @return {TreeNode} // The root of the inverted binary tree
 */
var invertTree = function (root) {
  // Check if the current node is null (base case for recursion)
  if (root === null) {
    // If null, return null back up the call stack
    return null;
  }

  // Store the result of inverting the right subtree in a temporary variable
  const leftSide = invertTree(root.right);
  // Store the result of inverting the left subtree in a temporary variable
  const rightSide = invertTree(root.left);

  // Assign the inverted right subtree to the current node's left pointer
  root.left = leftSide;
  // Assign the inverted left subtree to the current node's right pointer
  root.right = rightSide;

  // Return the modified root node
  return root;
};

// Testing
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
