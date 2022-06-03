// 层序遍历的一般写法，通过一个 while 循环控制从上向下一层层遍历，for 循环控制每一层从左向右遍历：

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if(root == null) return []
  let queue = [], result = []
  queue.push(root)
  while(queue.length) {
    const size = queue.length, level = []
    for(let i = 0; i < size; i++) {
      const node = queue.shift()
      level.push(node.val)
      if(node.left) {
        queue.push(node.left)
      }
      if(node.right) {
        queue.push(node.right)
      }
    }
    result.push(level)
  }
  return result
};