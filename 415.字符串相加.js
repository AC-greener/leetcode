/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */
// 大数相加
// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const length = Math.max(num1.length, num2.length)
    let extra = 0
    let result = ''
    let i = num1.length - 1;
    let j = num2.length - 1;
    while(i >= 0 || j >= 0) {
        // debugger;
        const m = num1[i] ? Number(num1[i]) : 0
        const n = num2[j] ? Number(num2[j]) : 0
        let x = m + n + extra
        extra = 0
        if(x >= 10) {
            x = x % 10
            extra = 1
        }
        result = x + result
        i--
        j--
    }
    if(extra) {
        result = extra + result
    }
    return result
};
addStrings('11', '123')
// @lc code=end

