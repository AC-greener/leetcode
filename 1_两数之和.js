/*
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

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
  //先排序
  nums = nums.sort((a, b) => a - b) 
  //
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