

/**
 * @param {string} digits
 * @return {string[]}
 * 
 * https://programmercarl.com/0017.%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E7%9A%84%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88.html#%E6%95%B0%E5%AD%97%E5%92%8C%E5%AD%97%E6%AF%8D%E5%A6%82%E4%BD%95%E6%98%A0%E5%B0%84
 *
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
示例 1：

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
示例 2：

输入：digits = ""
输出：[]

*/
 var letterCombinations = function(digits) {
  const result = [], resultItem = []
  let hash = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  function helper(digits, index) {
    if(resultItem.length === digits.length) {
      result.push(resultItem.join(''))
      console.log('resultItem.join :>> ', resultItem.join(''));
      return
    }
      let letters = hash[digits[index]]
      for(var j = 0; j < letters.length; j++) {
        resultItem.push(letters[j])
        helper(digits, index + 1)
        resultItem.pop(letters[j])
      }
  }
  helper(digits, 0)
  return result.filter(Boolean)
};
letterCombinations('23')
