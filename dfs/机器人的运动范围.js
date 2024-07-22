/*
问题描述
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

示例
输入：m = 2, n = 3, k = 1
输出：3

提示
1 <= n,m <= 100
0 <= k <= 20
*/

function f(m, n, k) {
    const map = new Array(m).fill().map(() => new Array(n).fill(0))
    const visited = new Array(m).fill().map(() => new Array(n).fill(false))
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let result = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            map[i][j] = (String(i) + String(j)).split('').reduce((prev, current) => prev + Number(current), 0)
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
        if(visited[i][j]) return
        visited[i][j] = true
        if(k >= map[i][j]) {
            result++
            for(let k = 0; k < 4; k++) {
                const [x, y] = dir[k]
                const nextX = x + i
                const nextY = y + j
                if(nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && !visited[nextX][nextY]) {
                    dfs(nextX, nextY)
                }
            }
        }
        
    }
    console.log(result, 1111)
    return result
    // console.log(map)
}

f(2, 3, 1)
// f(36, 38, 1)