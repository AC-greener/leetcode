
/**
 * @param {number[]} nums
 * @return {number}
 * 
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。

 

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */
  var maxSubArray = function(nums) {
    let result = Number.MIN_SAFE_INTEGER
    let sum = 0
    for(let i = 0; i < nums.length; i++){
      sum += nums[i] 
      if(sum > result) {
        result = sum // 取区间累计的最大值（相当于不断确定最大子序终止位置）
      }
      if(sum <= 0) { // 相当于重置最大子序起始位置，因为遇到负数一定是拉低总和
        sum = 0
      }
    }
    return result
  }