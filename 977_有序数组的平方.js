/**
 * @param {number[]} nums
 * @return {number[]}
 */
//另外一种双指针可以从数组中间开始，i指向最后一个负数, j = i + 1
var sortedSquares = function(nums) {
  let j = nums.length - 1, k = nums.length - 1, result = []  
  for(let i = 0; i <= j;) {
    let left = Math.abs(nums[i])
    let right = Math.abs(nums[j])
    if(right > left) {
      result[k--] = right * right
      j--
    } else {
      result[k--] = left * left
      i++
    }
  }
  console.log(result)
  return result
};
sortedSquares([-4,-1,0,3,10])