/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
//动态规划 前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格}

var maxProfit = function(prices) {
    const dp = [0];
    let minPrice = prices[0]
    for(let i = 1; i < prices.length; i++) {
        dp[i] = Math.max(dp[i -1], prices[i] - minPrice)
        if(prices[i] < minPrice) {
            minPrice = prices[i]
        }
    }
    console.log(dp)
    return dp[prices.length-1]
};
maxProfit([7,1,5,3,6,4])
maxProfit([7,6,4,3,1])
// @lc code=end

