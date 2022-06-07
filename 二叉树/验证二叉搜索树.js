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
 * @return {boolean}
 */
 var isValidBST = function(root) {
  let pre = -Infinity
  function travers(root) {
    if(root == null) return true
    let l = travers(root.left)
    if(root.val <= pre) return false
    pre = root.val
    let r = travers(root.right)
    return l && r
  }
  return travers(root)
};


