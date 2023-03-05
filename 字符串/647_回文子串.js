/*
给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"

输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
*/

function countSubstrings(s) {
  const length = s.length
  let result = 0
  for(let i = 0; i < length; i++) {
    helper(s, i, i)
    helper(s, i, i + 1)
  }
  return result

  function helper(s, left, right) {
    while(left >= 0 && right < length && s[left] === s[right]) {
      //满足回文字符串的条件，移动左右指针
      left--
      right++

      result++
    }
  }
}