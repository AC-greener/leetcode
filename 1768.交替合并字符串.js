/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// var mergeAlternately = function (word1, word2) {
//   let maxLen = Math.max(word1.length, word2.length);
//   let i = 0;
//   let result = ''
//   for (; i < maxLen; i++) {
//     if (!word1[i] || !word2[i]) {
//       break;
//     }
//     result = result + word1[i] + word2[i];
//   }
//   result =
//     result + (word1.length > word2.length ? word1.slice(i) : word2.slice(i));
//   return result;
// };
// 优化之后
var mergeAlternately = function(word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  const minLen = Math.min(len1, len2);
  let result = '';

  for (let i = 0; i < minLen; i++) {
      result += word1[i] + word2[i];
  }

  return result + word1.slice(minLen) + word2.slice(minLen);
};
// @lc code=end
