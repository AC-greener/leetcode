var minDepth = function(root) {
  if (!root) { // 如果节点为空
    return 0;
  }
  
  if (!root.left && !root.right) { // 如果节点没有左右子树
    return 1;
  }
  
  let leftDepth = root.left ? minDepth(root.left) : Infinity; // 左子树的最小深度
  let rightDepth = root.right ? minDepth(root.right) : Infinity; // 右子树的最小深度
  
  return Math.min(leftDepth, rightDepth) + 1; // 返回最小深度加上根节点深度 1
};
// 首先判断根节点是否为空，如果是则说明这棵树是空的，返回深度 0。
// 然后再判断根节点是否有左右子树，如果没有，则说明这棵树只有一个节点，返回深度 1。
// 接下来分别递归求出左右子树的最小深度。如果某个节点没有左子树或右子树，则将其深度设置为正无穷。
// 最后返回左右子树最小深度中的较小值加上根节点深度 1，即为整棵树的最小深度。