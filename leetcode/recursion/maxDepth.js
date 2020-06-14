function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let node1 = new TreeNode(3);
let node2 = new TreeNode(9);
let node3 = new TreeNode(20);
let node4 = new TreeNode(15);
let node5 = new TreeNode(7);
node1.left = node2;
node1.right = node3;

node3.left = node4;
node3.right = node5;

//non tail recursion
var maxDepth = function(root) {
  if (!root) {
    return 0;
  } else {
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
};

//tail recursion
var maxDepth = function(root, depth = 0) {
  if (!root) {
    return depth;
  }
  const leftHeight = maxDepth(root.left, depth + 1);
  const rightHeight = maxDepth(root.right, depth + 1);
  return Math.max(leftHeight, rightHeight);
};

console.log(maxDepth(node1));
