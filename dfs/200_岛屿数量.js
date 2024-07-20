/**
 * @param {character[][]} grid
 * @return {number}
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

 

示例 1：

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1

示例 2：

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3

DFS模版题目


本题思路，是用遇到一个没有遍历过的节点陆地，计数器就加一，然后把该节点陆地所能遍历到的陆地都标记上。
在遇到标记过的陆地节点和海洋节点的时候直接跳过。 这样计数器就是最终岛屿的数量。
那么如果把节点陆地所能遍历到的陆地都标记上呢，就可以使用 DFS

 */
var numIslands = function (grid) {
  let dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ]; // 四个方向
  const n = grid.length,
    m = grid[0].length;
  const visited = new Array(n).fill().map(() => new Array(m).fill(false));
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && grid[i][j] === "1") {
        visited[i][j] = true;
        result++; // 遇到没访问过的陆地，+1
        dfs(grid, visited, i, j); // 将与其链接的陆地都标记上 true
      }
    }
  }
  function dfs(grid, visited, x, y) {
    for (let i = 0; i < 4; i++) {
      let nextx = x + dir[i][0];
      let nexty = y + dir[i][1];
      if (
        nextx < 0 ||
        nextx >= grid.length ||
        nexty < 0 ||
        nexty >= grid[0].length
      )
        continue; // 越界了，直接跳过
      if (!visited[nextx][nexty] && grid[nextx][nexty] === "1") {
        // 没有访问过的 同时 是陆地的
        visited[nextx][nexty] = true;
        dfs(grid, visited, nextx, nexty);
      }
    }
  }
  return result;
};
