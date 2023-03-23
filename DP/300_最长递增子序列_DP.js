// dp 数组的定义：dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度。
/**
 * @param {number[]} nums
 * @return {number}
 */
//  声明一个长度为 nums.length 的数组 dp，用于存储以 nums[i] 结尾的最长上升子序列的长度。
 // 初始时，dp 数组所有元素均为 1，因为每个单独的数字也可以看作是一个上升子序列。
 // 开始遍历 nums 数组，对于每个 nums[i]，在它之前的位置 j 中查找比 nums[i] 小的数，如果找到，则更新 dp[i] 的值为 dp[j] + 1。
 // 遍历完整个 nums 数组后，dp 数组中的最大值即为 LIS 的长度。
 // 返回 dp 数组中的最大值。
 var lengthOfLIS = function(nums) {
  const len = nums.length
  let dp = new Array(len).fill(1)
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  console.log(dp)
  let result = 0
  for(let i = 0; i < dp.length; i++) {
    result = Math.max(result, dp[i])
  }
  return result
};