/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let length = s.length
  let right = -1, result = 0
  let set = new Set()
  for(let i = 0; i < length; i++) {
    if(i != 0) {
      set.delete(s[i - 1])
      // debugger
    }
    while(right + 1 < length && !set.has(s[right + 1])) {
      // debugger
      set.add(s[right + 1])
      right++
    }
    result = Math.max(result, right - i + 1)
  }
  return result
};

lengthOfLongestSubstring('abcabcbb')