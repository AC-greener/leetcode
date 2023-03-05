/*
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:
输入: n = 4, k = 2
输出:
[
[2,4],
[3,4],
[2,3],
[1,2],
[1,3],
[1,4],
]

#

https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html#%E5%9B%9E%E6%BA%AF%E6%B3%95%E4%B8%89%E9%83%A8%E6%9B%B2
*/




var combine = function(n, k) {
  let result = []
  let path = []
  function helper(n, k, startIndex) {
    if(path.length === k) {
      result.push([...path])
      return
    }
    for(let i = startIndex; i <= n; i++ ) {
      path.push(i)
      helper(n, k, i + 1)
      path.pop()
    }
  }
  helper(n, k, 1)
  return result
};
combine(4, 2)

//还可以进行剪纸优化
// 已经选择的元素个数：path.size();

// 还需要的元素个数为: k - path.size();

// 在集合n中至多要从该起始位置 : n - (k - path.size()) + 1，开始遍历

var combine = function(n, k) {
  let result = []
  let path = []
  function helper(n, k, startIndex) {
    if(path.length === k) {
      result.push([...path])
      return
    }
    for(let i = startIndex; i <= n - (k - path.length) + 1; i++ ) {
      path.push(i)
      helper(n, k, i + 1)
      path.pop()
    }
  }
  helper(n, k, 1)
  return result
};