
// https://leetcode.cn/problems/coin-change/solutions/975451/dai-ma-sui-xiang-lu-dai-ni-xue-tou-wan-q-80r7/
// 确定dp数组以及下标的含义
// dp[j]：凑足总额为j所需钱币的最少个数为dp[j]

// 确定递推公式
// 凑足总额为j - coins[i]的最少个数为dp[j - coins[i]]，那么只需要加上一个钱币coins[i]即dp[j - coins[i]] + 1就是dp[j]（考虑coins[i]）

// 所以dp[j] 要取所有 dp[j - coins[i]] + 1 中最小的。

// 递推公式：dp[j] = min(dp[j - coins[i]] + 1, dp[j]);
const coinChange = (coins, amount) => {
  if(!amount) {
      return 0;
  }

  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for(let i =0; i < coins.length; i++) {
      for(let j = coins[i]; j <= amount; j++) {
          dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
      }
  }
  // 没找到能装满背包的, 就返回-1
  return dp[amount] === Infinity ? -1 : dp[amount];
}

