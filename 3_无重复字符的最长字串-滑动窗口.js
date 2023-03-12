/**
 * @param {string} s
 * @return {number}
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

 var lengthOfLongestSubstring = function(s) {
  let length = s.length
  let right = 0, result = 0
  let set = []
  for(let i = 0; i < length; i++) {
    if(i != 0) {
      set.shift(s[i - 1]) //删除set的第一个元素,以这个元素开始的最长子串长度已经记录
      // debugger
    }
    while(right < length && !set.includes(s[right])) {
      // debugger
      set.push(s[right])
      right++
    }
    result = Math.max(result, right - i)
  }
  return result
};


var lengthOfLongestSubstring = function (s) {
  let set = new Set()
  let result = 0, right = 0
  for(let i = 0; i < s.length; i++) {
    debugger
    if(i !== 0) {
      set.delete(s[i-1])  //删除set的第一个元素,以这个元素开始的最长子串长度已经记录
    }
    while(right < s.length && !set.has(s[right])) {
      set.add(s[right])
      right++
    }
    result = Math.max(result, right - i)
  }
  return result
}
lengthOfLongestSubstring('abcabcbb')