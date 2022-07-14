/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//寻找和为tartget的两个数
var twoSum = function(nums, target) {
  let result = []
  let len = nums.length
  let left = 0, right = len - 1
  nums = nums.sort((a, b) => a - b)
  while(left < right) {
    let sum = nums[left] + nums[right]
    let low = left, hi = right
    if(sum < target) {
      left++
    } else if(sum > target){
      right--
    } else {
      result.push([nums[left] , nums[right]])
      while(left < right && left === low) left++
      while(left < right && right === hi) right--
    }
  }
  console.log(result)
};
twoSum([2,7,3,6,11,15], 9)