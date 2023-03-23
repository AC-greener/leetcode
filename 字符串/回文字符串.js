var isPalindrome = function(s) {
    let length = s.length
    if(length === 0 || length === 1) return false
    let left = 0, right = length - 1
    while(left < right) {
      if(s[left++] != s[right--]) {
        return false
      }
    }
    return true
};
// 首先获取字符串的长度，如果长度为 0 或者 1，则该字符串不是回文，直接返回 false。
// 定义两个指针 left 和 right，分别指向字符串的第一个和最后一个字符。
// 通过 while 循环来比较左右指针对应的字符，如果不相等，则说明该字符串不是回文，返回 false。
// 如果循环结束后，左右指针相遇了，说明该字符串是回文，返回 true。