// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

// 示例 1：
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
var twoSum = function (nums, target) {
  var length = nums.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return null
};
// // twoSum([2, 7, 11, 15], 9)
var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};
// 声明一个空的 Map 对象。
// 遍历 nums 数组，对于每个元素 nums[i]，计算出它与目标值之间的差值 complement。
// 判断 Map 中是否存在 complement，如果存在，则说明该差值已经在之前的元素中出现过了，返回该差值（即数组下标）和当前元素的下标 i。
// 如果 Map 中不存在 complement，则将当前元素及其下标存入 Map 中。
// 如果循环结束后仍未找到答案，则返回空数组。



Array.prototype.map = function(fn) {
  let result = []
  for(let i = 0; i < this.length; i++) {
    result.push(fn(i, this[i], this))
  }
  return result
}
// let str = 'http://www.baidu.com?id=3&username=xyz'

// {id:3,username:'xyz'}

function fn(str) {
  let index = -1
  let subStr = ''
  let arr = []
  let result = {}
  index = str.firstIndexOf('?')
  subStr = str.slice(index)
  arr = subStr.split('&')
  arr.forEach(item => {
    let key = '', value = ''
    let index = item.firstIndexOf('&')
    key = item.slice(0, index)
    value = item.slice(index + 1)
    result[key] = value
  })
  return result
}





















