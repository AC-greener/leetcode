// 那我们就将访问的节点放入栈中，把要处理的节点也放入栈中但是要做标记。

// 如何标记呢，就是要处理的节点放入栈之后，紧接着放入一个空指针作为标记。 这种方法也可以叫做标记法。

// 前序遍历：中左右。压栈顺序：右左中


var preorderTraversal = function (root, res = []) { //前序遍历
  const stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    if (node) {
      if (node.right) stack.push(node.right); // 右
      if (node.left) stack.push(node.left); // 左
      stack.push(node); // 中
      stack.push(null);
    } else {// 只有遇到空节点的时候，才将下一个节点放进结果集
      node = stack.pop()
      res.push(node.val);
    }
  };
  return res;
};

// 后序遍历：左右中。压栈顺序：中左右
var preorderTraversal = function (root, res = []) {
  const stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    if (node) {
      stack.push(node); // 中
      stack.push(null);
      if (node.left) stack.push(node.left); // 左
      if (node.right) stack.push(node.right); // 右
    } else {// 只有遇到空节点的时候，才将下一个节点放进结果集
      node = stack.pop()
      res.push(node.val);
    }
  };
  return res;
};

// 中序遍历：左中右
var inorderTraversal = function (root, res = []) {
  const stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    if (node) {
      if (node.right) stack.push(node.right); // 右
      stack.push(node); // 中
      stack.push(null);
      if (node.left) stack.push(node.left); // 左
    } else {// 只有遇到空节点的时候，才将下一个节点放进结果集
      node = stack.pop()
      res.push(node.val);
    }
  };
  return res;
};
