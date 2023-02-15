/*
给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。


输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
*/

/*
递归解法
思路：
1，确定递归的参数和返回值：参数为root节点
2，确定终止条件：当节点为空就返回
3，确定单层递归的逻辑：因为是 前序遍历，所以先进行交换左右孩子节点，然后反转左子树，反转右子树。
*/

var invertTree = function(root) {
  if(!root) return null
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root
};

/*迭代法：深度优先遍历 前序遍历 中左右
*/

var preorderTraversal = function(root) {
  let stack = []
  if(!root) return null
  stack.push(root)
  let result = []
  while(stack.length) {
    let node = stack.pop()
    if(node) {
      if(node.right) stack.push(node.right)
      if(node.left) stack.push(node.left)
      stack.push(node)
      stack.push(null)
    } else {
      node = stack.pop() //拿到需要处理的节点
      result.push(node.val)
      right = node.right
      node.right = node.left
      node.left = right
    }
  }
  return root
}

