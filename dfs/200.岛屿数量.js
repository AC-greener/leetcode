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
  if (!grid.length) return 0;
  const m = grid.length;
  const n = grid[0].length;
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let result = 0;
  const visitMap = new Array(m).fill().map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visitMap[i][j] && grid[i][j] !== "0") {
        result += 1;
        dfs(i, j);
      }
    }
  }
  function dfs(i, j) {
    if (visitMap[i][j]) {
      return;
    }
    visitMap[i][j] = 1;
    for (let k = 0; k < 4; k++) {
      let [y, x] = dir[k];
      const nextX = i + x;
      const nextY = j + y;
      if (
        nextX >= 0 &&
        nextX < m &&
        nextY >= 0 &&
        nextY < n &&
        grid[nextX][nextY] === "1" &&
        !visitMap[nextX][nextY]
      ) {
        dfs(nextX, nextY);
      }
    }
  }
  console.log(result);
  console.log(visitMap);
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
