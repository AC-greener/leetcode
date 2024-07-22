/*
家居整理师将待整理衣橱划分为 m x n 的二维矩阵 grid，其中 grid[i][j] 代表一个需要整理的格子。整理师自 grid[0][0] 开始 逐行逐列 地整理每个格子。

整理规则为：在整理过程中，可以选择 向右移动一格 或 向下移动一格，但不能移动到衣柜之外。同时，不需要整理 digit(i) + digit(j) > cnt 的格子，其中 digit(x) 表示数字 x 的各数位之和。

请返回整理师 总共需要整理多少个格子。

 

示例 1：

输入：m = 4, n = 7, cnt = 5
输出：18
 

提示：

1 <= n, m <= 100
0 <= cnt <= 20

*/

var wardrobeFinishing = function (m, n, cnt) {
  const map = new Array(m).fill().map(() => new Array(n).fill(0));
  const visited = new Array(m).fill().map(() => new Array(n).fill(false));
  const dir = [
    [0, 1],
    [1, 0],
  ];
//   const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      map[i][j] = (String(i) + String(j))
        .split("")
        .reduce((prev, current) => prev + Number(current), 0);
    }
  }
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
        if(!visited[i][j]) {
            dfs(i, j)
        }
    }
}
  function dfs(i, j) {
    if (i >= m || j >= n || visited[i][j]) return;
    visited[i][j] = true;
    if (cnt >= map[i][j]) {
      result++;
      for (let z = 0; z < 2; z++) {
        const [x, y] = dir[z];
        const nextX = x + i;
        const nextY = y + j;
        dfs(nextX, nextY);
      }
    }
  }
  return result;
};

wardrobeFinishing(2, 3, 1);
// wardrobeFinishing(16, 8, 4);


