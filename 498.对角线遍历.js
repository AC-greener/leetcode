/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
// 输入：mat = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// 输出：[1,2,4,7,5,3,6,8,9]
// 输入：mat = [
//     [1,2,3,10],
//     [4,5,6,11],
//     [7,8,9,12]
// ]
var findDiagonalOrder = function (mat) {
    if (!mat || mat.length === 0) return [];
    if (mat.length === 1) return mat[0];
    if (mat[0].length === 1) return mat.map((row) => row[0]);
    
    let result = [];
    let m = mat.length;
    let n = mat[0].length;
    let goUp = true;
    
    // 上半部分遍历（包括主对角线）
    for (let i = 0; i < m; i++) {
      let j = 0;
      let k = i;
      let temp = [];
      
      while (j >= 0 && j < n && k >= 0 && k < m) {
        temp.push(mat[k][j]);
        if (goUp) {
          k--;
          j++;
        } else {
          k++;
          j--;
        }
      }
      
      if (goUp) temp.reverse();
      result.push(...temp);
      goUp = !goUp;
    }
    
    // 下半部分遍历（不包括主对角线）
    for (let j = 1; j < n; j++) {
      let i = m - 1;
      let k = j;
      let temp = [];
      
      while (i >= 0 && i < m && k >= 0 && k < n) {
        temp.push(mat[i][k]);
        if (goUp) {
          i--;
          k++;
        } else {
          i++;
          k--;
        }
      }
      
      if (goUp) temp.reverse();
      result.push(...temp);
      goUp = !goUp;
    }
    
    return result;
  };
// findDiagonalOrder([[3], [2]])
// findDiagonalOrder([[2,3]])
findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// @lc code=end
