/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || !grid.length) return 0;

  const m = grid.length;
  const n = grid[0].length;
  let result = 0;
  const visitMap = new Array(m).fill().map(() => new Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1" && !visitMap[i][j]) {
        result++;
        dfs(i, j);
      }
    }
  }

  function dfs(i, j) {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      grid[i][j] !== "1" ||
      visitMap[i][j]
    )
      return;

    visitMap[i][j] = true;

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  return result;
};
// numIslands([
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ])
numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);
// @lc code=end
