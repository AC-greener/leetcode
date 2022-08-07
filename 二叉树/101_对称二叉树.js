// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

var isSymmetric = function (root) {
  return isMirror(root, root)
  function isMirror(p, q) {
    if(!p && !q) return true   //两个节点都是null
    if(!p || !p) return false  //有一个是null
    if(p.val === q.val) {
      return isMirror(p.left, q.right) && isMirror(p.right, q.left)
    } else {
      return false
    }
  }
};

