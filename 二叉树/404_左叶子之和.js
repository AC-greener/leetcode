/*



左叶子的明确定义：节点A的左孩子不为空，且左孩子的左右孩子都为空（说明是叶子节点），那么A节点的左孩子为左叶子节点
判断当前节点是不是左叶子是无法判断的，必须要通过节点的父节点来判断其左孩子是不是左叶子。
*/
// if (node->left != NULL && node->left->left == NULL && node->left->right == NULL) {
//   左叶子节点处理逻辑
// }

var sumOfLeftLeaves = function (root) {
  if (!root) return 0
  let midValue = 0;
  if (root.left !== null && root.left.left === null && root.left.right === null) {
    midValue += root.left.val
  }
  let left = sumOfLeftLeaves(root.left)
  let right = sumOfLeftLeaves(root.right)

  return left + right + midValue
};

//迭代法  前序遍历

var sumOfLeftLeaves = function (root, result = 0) {
  const stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    if (node) {
      if (node.right) stack.push(node.right); // 右
      if (node.left) stack.push(node.left); // 左
      stack.push(node); // 中
      stack.push(null);
    } else {// 只有遇到空节点的时候，才将处理当前栈顶节点
      node = stack.pop()
      if (node.left !== null && node.left.left === null && node.left.right === null) {
        result += node.left.val
      }
    }
  };
  return result;
};
