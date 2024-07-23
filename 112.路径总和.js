/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) {
        return false
    }
    let result = false
    function dfs(node, targetSum) {
        if(!node) {
            return
        }
        if(node.val - targetSum === 0 && (!node.left && !node.right)) {
            result = true
            return
        }
        dfs(node.left, targetSum - node.val)
        dfs(node.right, targetSum - node.val)
    }
    dfs(root, targetSum)
    return result
};
// @lc code=end

