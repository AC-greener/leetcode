// 中序遍历二叉树
void traverse(TreeNode root) {
  if (root == null) return;
  traverse(root.left);
  // 中序遍历代码位置
  print(root.val);
  traverse(root.right);
}

