/*
示例 1:
输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]
示例 2:
输入: candidates = [2,3,5], target = 8,
所求解集为:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/
var result = [], resultItem = [], sum = 0

function fn(target, candidates, resultItem, start) {

  if(sum === target) {
    //resultItem是引用类型result.push(resultItem是错误的)
    result.push([].concat(resultItem))
    return 
  }
  
  for(var i = start; i < candidates.length; i++) {
    if(sum + candidates[i] <= target) {
      resultItem.push(candidates[i])
      sum += candidates[i]
      fn(target, candidates, resultItem, i)
      sum -= candidates[i]
      resultItem.pop(candidates[i])
    }
  }
}
fn(8, [2, 3, 5], resultItem, 0)
fn(7, [2, 3, 6, 7], resultItem, 0)
// console.log(result)

var combinationSum = function(candidates, target) {
  const result = [], resultItem = []
  function help(candidates, target, startIndex) {
    if(resultItem.reduce((prev, vur) => prev + vur, 0) > target) {
      return
    }
    if(resultItem.reduce((prev, vur) => prev + vur, 0) === target) {
      result.push([...resultItem])
      return
    }
    for(let i = startIndex; i < candidates.length; i++) {
      resultItem.push(candidates[i])
      help(candidates, target, i)
      resultItem.pop()
    }
  }
  help(candidates, target, 0)
  return result
};
combinationSum([2, 3, 5], 7)