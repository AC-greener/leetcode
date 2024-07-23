/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if(flowerbed[i] === 0 && (flowerbed[i + 1] !== 1 && flowerbed[i - 1] !== 1)) {
      n--
      i++
    }
    if(n <= 0) {
      return true
    }
  }
  return false
};

// @lc code=end

