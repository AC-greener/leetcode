/*
给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

假设二叉树中至少有一个节点。

*/
//层序遍历
var findBottomLeftValue = function(root) {
  let queue = []
  let result = []
  queue.push(root)
  while(queue.length > 0) {
    let size = queue.length
    let level = []
    while(size) {
      let node = queue.shift()
      console.log('node', node)
      level.push(node.val)
      if(node.left) {
        queue.push(node.left)
      }
      if(node.right) {
        queue.push(node.right)
      }
      size--
    }
    result.push(level)
  }
  return result[result.length-1][0]
};