// matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] m = 3, n = 4
var generateMatrix = function (n) {
  let matrix = new Array(n).fill(-1).map(itm => new Array(n).fill(-1))
  let upper_bound = 0,//矩形上边界
    lower_bound = n - 1 //下边界
  let left_bound = 0, //左边界 
    right_bound = n - 1 //右边界
  let res = [], num = 1
  while (num <= n * n) {
    if(upper_bound <= lower_bound) {
      for(let i = left_bound; i <= right_bound; i++) {
        matrix[upper_bound][i] = num++
      }
      console.log(JSON.stringify(res))
      upper_bound++
    }
    if(left_bound <= right_bound) {
      for(let i = upper_bound; i <= lower_bound; i++) {
        matrix[i][right_bound] = num++
      }
      console.log(JSON.stringify(res))
      right_bound--
    }
    if(upper_bound <= lower_bound) {
      for(let i = right_bound; i >= left_bound; i--) {
        matrix[lower_bound][i] = num++
      }
      console.log(JSON.stringify(res))
      lower_bound--
    }
    if(left_bound <= right_bound) {
      for(let i = lower_bound; i >= upper_bound; i--) {
        matrix[i][left_bound] = num++
      }
      console.log(JSON.stringify(res))
      left_bound++
    }
  }

  return matrix 
};
spiralOrder(3)