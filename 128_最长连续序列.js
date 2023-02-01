/*
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

*/

//超时了
var longestConsecutive = function (nums) {
  nums = nums.sort((a, b) => a - b)
  nums = nums.filter((item, index) => nums.indexOf(item) === index)
  let result = 0
  for (let i = 0; i < nums.length;) {
    let j = i + 1
    let temp = nums[i]
    while (j < nums.length && j < nums.length && (temp + 1 === nums[j] || temp === nums[j])) {
      temp = nums[j]
      j++
    }
    result = result > j - i ? result : j - i
    i = j
  }
  return result
};

//通过
var longestConsecutive = function (nums) {
  let num_set = new Set(nums);
  let result = 0;
  for (const num of num_set) {
    if (!num_set.has(num - 1)) {
      let currentNum = num;
      while (num_set.has(currentNum + 1)) {
        currentNum += 1;
      }
      result = Math.max(result, currentNum - num + 1);
    }
  }

  return result;
};

