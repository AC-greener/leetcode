

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
这是一个给定数字字符串 digits，返回由它能组成的所有字母组合的函数。函数中使用了回溯算法来实现。

首先定义了一个空数组 result 和一个空数组 resultItem 用于存储结果。然后定义一个哈希表 hash，其中存储了数字和字母的对应关系。

接着定义了名为 helper 的内部函数，它接收两个参数：当前处理的数字字符串 digits 和已经处理完的索引号 index。在 helper 函数内部，如果 resultItem 的长度等于 digits 的长度，说明已经生成了一种字母组合，将其转化为字符串并推入到 result 数组中，然后直接返回。

如果 resultItem 的长度小于 digits 的长度，则根据当前索引号 index 获取对应的字母串 letters。
接着循环遍历 letters 中的每一个字符，并将其依次加入到 resultItem 数组中，在递归调用 helper 函数时，将索引号加一，即下一个数字字符。当递归返回时，需要将最后一个字符从 resultItem 中弹出，以便加入下一个字符。

最后在主函数中调用 helper(digits, 0)，并过滤掉 result 数组中的空元素，返回结果。
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
