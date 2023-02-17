/*
1，递归函数参数以及返回值：要传入根节点，记录每一条路径的path
2，确定递归终止条件：当找到了叶子节点， 是当 cur不为空，其左右孩子都为空的时候，就找到叶子节点。

*/
var binaryTreePaths = function (root) {
  //递归遍历+递归三部曲
  let res = [];
  //1. 确定递归函数 函数参数
  const getPath = function (node, curPath) {
    //2. 确定终止条件，到叶子节点就终止
    if (!node.left && !node.right) {
      curPath += node.val
      res.push(curPath)
    }
    //3. 确定单层递归逻辑
    curPath += node.val + '->'
    if (node.left) {
      getPath(node.left, curPath)
    }
    if (node.right) {
      getPath(node.right, curPath)
    }
  }
  getPath(root, '');
  return res;
};

