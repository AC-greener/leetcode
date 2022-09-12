// 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。

// 计算x的二进制表示中1的个数
function coutones(x) {
  let result = 0
  while(x !== 0) {
    x = x & (x - 1)
    result++
  }
  return result
}
var countBits = function(n) {
  let result = []
  for(let i = 0; i <= n; i++) {
    result.push(coutones(i))
  }
  return result
};