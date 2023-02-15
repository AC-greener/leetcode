/*
给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。

请你计算该表达式。返回一个表示表达式值的整数。
示例 1：

输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
示例 2：

输入：tokens = ["4","13","5","/","+"]
输出：6
解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6

*/
//思路：使用栈，遇到操作符，则出栈两次进行计算，将计算结果重新入栈
var evalRPN = function(tokens) {
  let stack = []
  for(let i = 0; i < tokens.length; i++) {
    if(tokens[i] === '+') {
      let x = stack.pop()
      let y = stack.pop()
      stack.push(x + y)
    } else if(tokens[i] === '-') {
      let x = stack.pop()
      let y = stack.pop()
      stack.push(y - x)
    } else if(tokens[i] === '*') {
      let x = stack.pop()
      let y = stack.pop()
      stack.push(x * y)
    } else if(tokens[i] === '/') {
      let x = stack.pop()
      let y = stack.pop()
      stack.push(Math.trunc(y / x))
    } else {
      stack.push(Number(tokens[i]))
    }
  }
  console.log('stack', stack)
  return stack[0]
};
// evalRPN(["2","1","+","3","*"])
// evalRPN(["4","13","5","/","+"])
evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])
