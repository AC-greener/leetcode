/*
给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
测试用例的答案是一个 32-位 整数。
子数组 是数组的连续子序列。

示例 1:
输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。

示例 2:
输入: nums = [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
*/

/*
需要维护一个最大乘积和最小乘积
f(i)max = f(i-1) * nums[i] > nums[i] ? f(i-1) * nums[i] : num[i]
*/

var maxProduct = (nums) => {
  let result = nums[0]
  let prevMin = nums[0]
  let prevMax = nums[0]
  let temp1 = 0, temp2 = 0
  for (let i = 1; i < nums.length; i++) {
    temp1 = prevMin * nums[i]
    temp2 = prevMax * nums[i]
    prevMin = Math.min(temp1, temp2, nums[i])
    prevMax = Math.max(temp1, temp2, nums[i])
    result = Math.max(prevMax, result)
  }
  return result
}



// maxProduct([-2, 0, -1])
maxProduct([5,6,-3,4,-3])