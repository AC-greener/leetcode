// 寻找回文串的问题核心思想是：从中间开始向两边扩散来判断回文串，对于最长回文子串，就是这个意思
/*
for 0 <= i < len(s):
    # 找到以 s[i] 为中心的回文串
    palindrome(s, i, i)
    # 找到以 s[i] 和 s[i+1] 为中心的回文串
    palindrome(s, i, i + 1)
    更新答案
*/

// var longestPalindrome = function(s) {
//   let result = ''
//   for(let i = 0; i < s.length; i++) {
//     let answer1 = palindrome(s, i, i)
//     console.log('answer1', answer1)
//     let answer2 = palindrome(s, i, i + 1)
//     console.log('answer2', answer2)
//     result = result.length > answer1.length ? result : answer1
//     result = result.length > answer2.length ? result : answer2
//   }
//   return result
// };

// function palindrome(s, left, right) {
//   while(left >= 0 && right < s.length && s[left] === s[right]) {
//     left--
//     right++
//   }
//   console.log('left',left)
//   console.log('right',right)
//   return s.substring(left + 1, right)
// }

function findLongestStr(s) {
  const length = s.length
  let result = ''
  for(let i = 0; i < length; i++) {
    let result1 = helper(s, i, i)
    let result2 = helper(s, i, i + 1)
    let max = result1.length > result2.length ? result1 : result2
    result = max.length > result.length ?  max : result
   
  }
  return result

  function helper(s, left, right) {
    while(left >= 0 && right < length && s[left] === s[right]) {
      //满足回文字符串的条件，移动左右指针
      left--
      right++
    }
    return s.slice(left + 1, right)
  }
}
findLongestStr("babad")
findLongestStr("cbbd")