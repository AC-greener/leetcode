// matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] m = 3, n = 4
var spiralOrder = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let upper_bound = 0,//矩形上边界
    lower_bound = m - 1 //下边界
  let left_bound = 0, //左边界 
    right_bound = n - 1 //右边界
  let res = []
  while (res.length < m * n) {
    debugger
    if(upper_bound <= lower_bound) {
      for(let i = left_bound; i <= right_bound; i++) {
        res.push(matrix[upper_bound][i])
      }
      console.log(JSON.stringify(res))
      upper_bound++
    }
    if(left_bound <= right_bound) {
      for(let i = upper_bound; i <= lower_bound; i++) {
        res.push(matrix[i][right_bound])
      }
      console.log(JSON.stringify(res))
      right_bound--
    }
    if(upper_bound <= lower_bound) {
      for(let i = right_bound; i >= left_bound; i--) {
        res.push(matrix[lower_bound][i])
      }
      console.log(JSON.stringify(res))
      lower_bound--
    }
    if(left_bound <= right_bound) {
      for(let i = lower_bound; i >= upper_bound; i--) {
        res.push(matrix[i][left_bound])
      }
      console.log(JSON.stringify(res))
      left_bound++
    }
  }

  return res
};
spiralOrder([[7],[9],[6]])
spiralOrder([[1,2,3],[4,5,6],[7,8,9]])