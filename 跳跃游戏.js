// 请问通过题目中的跳跃规则，最多能跳多远？如果能够越过最后一格，返回 true，否则返回 false。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = 0; //max表示可以走到的 最远走的距离
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if(max >= i) {
      max = Math.max(max, i + nums[i]);
      if(max >= n - 1) {
        return true;
      }
    }
  }
  return false
};