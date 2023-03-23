/**
 * @param {string} s
 * @return {string}
 * 
给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1：

输入：s = "Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"
示例 2:

输入： s = "God Ding"
输出："doG gniD"
 */
var reverseWords = function(s) {
  s = s.split(' ')
  for(let i = 0; i < s.length; i++) {
    let j = 0, k = s[i].length - 1
    s[i] = s[i].split('')
    // debugger
    while(j < k) {
      [s[i][j], s[i][k]] = [s[i][k], s[i][j]]
      j++
      k--
    }
    s[i] = s[i].join('')
  }
  s = s.join(" ")
  return s
};
reverseWords("Let's take LeetCode contest")
reverseWords("God Ding")