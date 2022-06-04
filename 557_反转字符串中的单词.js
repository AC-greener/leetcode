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