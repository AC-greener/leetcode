// 每一条二叉树的「直径」长度，就是一个节点的左右子树的最大深度之和。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let result = 0
  function maxDepth(root) {
    if (root == null) return 0
    let leftMax = maxDepth(root.left)
    let rightMax = maxDepth(root.right)
    let x = leftMax + rightMax
    result = Math.max(result, x)
    return 1 + Math.max(leftMax, rightMax)
  }
  maxDepth(root)
  return result
};
