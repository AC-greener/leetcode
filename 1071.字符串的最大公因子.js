/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  // 如果str1 + str2不等于str2 + str1，则没有最大公因子字符串
  if (str1 + str2 !== str2 + str1) {
      return "";
  }
  
  // 使用辗转相除法计算字符串长度的最大公约数
  // 让我们用一个例子来说明这个过程：
  // 假设我们要计算 48 和 18 的最大公约数：

  // gcd(48, 18)
  // 48 % 18 = 12, 所以递归调用 gcd(18, 12)
  // gcd(18, 12)
  // 18 % 12 = 6, 所以递归调用 gcd(12, 6)
  // gcd(12, 6)
  // 12 % 6 = 0, 所以返回 6

  // 因此，48 和 18 的最大公约数是 6。
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const len = gcd(str2.length, str1.length);
  // const len = gcd(str1.length, str2.length);
  
  // 返回长度为len的前缀
  return str1.slice(0, len);
};
gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX")
// @lc code=end

