/**
 * @param {string} s
 * @return {number}
 */

 var lengthOfLongestSubstring = function(s) {
  let length = s.length
  let right = -1, result = 0
  let set = []
  for(let i = 0; i < length; i++) {
    if(i != 0) {
      set.shift(s[i - 1]) //删除set的第一个元素,以这个元素开始的最长子串长度已经记录
      // debugger
    }
    while(right + 1 < length && !set.includes(s[right + 1])) {
      // debugger
      set.push(s[right + 1])
      right++
    }
    result = Math.max(result, right - i + 1)
  }
  return result
};

var fn = function(s) {
  const set = new Set()
  const length = s.length
  let right = -1, result = 0
  for(let i = 0; i < length; i++) {
    if(i !== 0) {
      set.delete(s[i - 1])
    }
    while(right + 1 < length && !set.has(s[right + 1])) {
      set.add(s[right + 1])
      right++
    }
    result = Math.max(result, right - i + 1)
  }
}

lengthOfLongestSubstring('abcabcbb')