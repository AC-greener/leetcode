/*


找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

只使用数字1到9
每个数字 最多使用一次 
返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。


*/

var combinationSum3 = function(k, n) {
  const result = []
  let path = []
  function helper(k, n, startIndex) {
   
    // 之和等于n并长度为k
    if(path.length === k && path.reduce((pre, cur) => pre += cur, 0) === n) {
      result.push([...path])
      return
    } 
    for(let i = startIndex; i <= 9; i++) {
      path.push(i)
      helper(k, n, i + 1)
      path.pop(i)
    }
  }
  helper(k, n, 1)
  return result
};
//剪纸
var combinationSum3 = function(k, n) {
  const result = []
  let path = []
  function helper(k, n, startIndex) {
    if(path.reduce((pre, cur) => pre += cur, 0) > n) {
      return
    }
    // 之和等于n并长度为k
    if(path.length === k && path.reduce((pre, cur) => pre += cur, 0) === n) {
      result.push([...path])
      return
    } 
    for(let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i)
      helper(k, n, i + 1)
      path.pop(i)
    }
  }
  helper(k, n, 1)
  return result
};