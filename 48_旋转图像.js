/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
   let n = matrix.length
  for (var i = 0; i < n; i++) {
    for (var j = i; j < n; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  console.log(matrix)
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].reverse()
  }
  console.log(matrix)
  return matrix
};
rotate([[1,2,3],[4,5,6],[7,8,9]])
rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])
