/*
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。


思路：
有障碍的话，其实就是标记对应的dp table（dp数组）保持初始值(0)就可以了。
初始化：障碍物及其之后都是0

*/

var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  let dp = new Array(m).fill().map(() => new Array(n).fill(0))
  for (let i = 0; i < m && obstacleGrid[i][0]===0; i++) {
    dp[i][0] = 1
  }
  for (let j = 0; j < n && obstacleGrid[0][j]===0; j++) {
    dp[0][j] = 1
  }
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m-1][n-1]
};
uniquePathsWithObstacles(3, 7)