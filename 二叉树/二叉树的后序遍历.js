var postorderTraversal = function(root) {
  let res=[];
  const dfs=function(root){
      if(root===null){
          return ;
      }
      dfs(root.left);
      dfs(root.right);
      res.push(root.val);
  }
  dfs(root);
  return res;
};
//先序遍历是中左右，后续遍历是左右中，那么我们只需要调整一下先序遍历的代码顺序，
// 就变成中右左的遍历顺序，然后在反转result数组，输出的结果顺序就是左右中了
var preorderTraversal = function(root) {
  if(!root) return []
  let result = []
  let stack = []
  stack.push(root)
  while(stack.length) {
    let current = stack.pop()
    result.push(current.val)
    if(current.left) {
      stack.push(current.left)
    }
    if(current.right) {
      stack.push(current.right)
    }
  }
  return result.reverse()
};

//非递归 一个栈
var postorderTraversal = function (root) {
  if (!root) return []
  let result = []
  let head = root   //代表最近一次弹出的节点
  let current = null  //  代表当前栈顶节点
  let stack = [head]
  while (stack.length !== 0) {      //如果栈不为空，则循环遍历
    current = stack[stack.length - 1]  //将栈顶的值保存在current中
    if (current.left && head !== current.left && head !== current.right) { //如果存在左子树
      stack.push(current.left)   
    } else if (current.right && head !== current.right) { //如果结点存在右子树
      stack.push(current.right) 
    } else {
      result.push(stack.pop().val)
      head = current
    }
  }
  return result
};

