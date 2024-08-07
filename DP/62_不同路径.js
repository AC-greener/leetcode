/*
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？


示例 1：


输入：m = 3, n = 7
输出：28

*/
/*
1，dp数组的定义： dp[i][j] ：表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径。
2，递推公式：dp[i][j] = dp[i-1][j] + d[i][j-1]
3, 初始化状态:首先dp[i][0]一定都是1，因为从(0, 0)的位置到(i, 0)的路径只有一条，那么dp[0][j]也同理。.dp[0][j]为0， dp[i][0]为0
 */

var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(null).map(() => new Array(n));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
uniquePaths(3, 7);

// 20240720 二刷
function f(m, n) {
  const map = [];
  for (let i = 0; i < m; i++) {
    map[i] = [];
    for (let j = 0; j < n; j++) {
      map[i].push(0);
    }
  }
  map[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      map[i][j] = (j === 0 ? 0 : map[i][j - 1]) + (i === 0 ? 0 : map[i - 1][j]);
    }
  }
  return map[m - 1][n - 1];
}
f(3, 7);
