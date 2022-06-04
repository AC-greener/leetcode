// dp 数组的定义：dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度。
/**
 * @param {number[]} nums
 * @return {number}
 */
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