// 请问通过题目中的跳跃规则，最多能跳多远？如果能够越过最后一格，返回 true，否则返回 false。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var jump = function (nums) {
  let n = nums.length;
  let steps = 0;
  let max = 0;
  let end = 0
  for (let i = 0; i < n - 1; i++) {
    max = Math.max(max, nums[i] + i)
    if(i === end) {
      steps++
      end = max
    }
  }
  return steps
};