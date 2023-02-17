/*
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
如果存在，返回 true ；否则，返回 false 。
*/

var hasPathSum = function(root, targetSum) {
  function travers(cur, count) {
    if (!cur.left && !cur.right && count == 0) return true; // 遇到叶子节点，并且计数为0
    if (!cur.left && !cur.right) return false; // 遇到叶子节点而没有找到合适的边，直接返回
    if(cur.left) {
      // if(travers(cur.left, count - cur.left.val)) return true
      //相当于
      count -= cur.left.val
      if(travers(cur.left, count)) return true
      count += cur.left.val
      
    }
    if(cur.right) {
      if(travers(cur.right, count - cur.right.val)) return true
    }
    return false
  }
  if(!root) return false
  return travers(root, targetSum - root.val)
};