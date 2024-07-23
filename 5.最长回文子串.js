/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 * 
 */
// 中心扩展法：

// 考虑每个字符（或两个相邻字符）作为回文的中心
// 向两边扩展，直到不再是回文
// 记录最长的回文子串
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = ''
    for(let i = 0; i < s.length; i++) {
        findStr(s, i, i)
        findStr(s, i, i + 1)
    }
    function findStr(str, i, j) {
        let isPalindrome = false
        while(str[i] === str[j] && i >= 0 && j < str.length) {
            isPalindrome = true
            i--
            j++
        }
        if(isPalindrome) {
            const s = str.slice(i + 1, j)
            if(s.length > result.length) {
                result = s
            }
        }
    }
    return result
};


// @lc code=end

