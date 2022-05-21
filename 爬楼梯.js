/**
 * @param {number} n
 * @return {number}
 */
/*
一个人到达第 i 层楼底包括两种方法：

选择从第 i-1 层再爬 1 步
选择从第 i-2 层再爬 2 步
然后一步步递推下来便是：

如果用 f[i] 表示达到第 i 层楼梯的所有方法，那么它进一步等于到达第 i-1 层楼梯的方法加上到达第 i-2 层楼梯的方法的和，即

f[i] = f[i-1] + f[i-2]
*/

//从第一层开始爬 cur = 1
 var climbStairs = function(n) {
    let prev = 0, cur = 1 
    for(let i = 1; i <= n; i++) {
        let temp = cur
        cur += prev
        prev = temp
    }
    return cur
};