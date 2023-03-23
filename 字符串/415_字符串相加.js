/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
示例 1：
输入：num1 = "11", num2 = "123"
输出："134"

示例 2：
输入：num1 = "456", num2 = "77"
输出："533"
 */
//也就是大数相加
var addStrings = function(num1, num2) {
  let i = num1.length - 1, j = num2.length - 1, add = 0;
  const ans = [];
  while (i >= 0 || j >= 0 || add != 0) {
      const x = i >= 0 ? Number(num1.charAt(i)) : 0;
      const y = j >= 0 ? Number(num2.charAt(j)) : 0;
      const result = x + y + add;
      ans.push(result % 10);
      add = Math.floor(result / 10); //进位
      i -= 1;
      j -= 1;
  }
  return ans.reverse().join('');
};

