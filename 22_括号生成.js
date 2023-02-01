/*
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

示例 2：

输入：n = 1
输出：["()"]
*/

//核心思路， 任意前缀左括号'('数量 >=  ')数量
//递归终止条件：左右括号数量都为n

var generateParenthesis = function(n) {
  let result = []
  dfs(0, 0, n, '')
  return result
  function dfs(leftNumber, rightNumber, n, str) {
    if(leftNumber === n && rightNumber === n) {
      result.push(str)
      return
    }
    if(leftNumber < n) {
      //还可以放左括号
      dfs(leftNumber + 1, rightNumber, n, str + '(')
    }
    if(rightNumber < n && leftNumber > rightNumber) {
      dfs(leftNumber, rightNumber + 1, n, str + ')')
    }
  }
};

