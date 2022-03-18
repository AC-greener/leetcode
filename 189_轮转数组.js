/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//解法1
 var rotate = function(nums, k) {
  let result = []
  for(let i = 0; i < nums.length; i++) {
    result[(i + k) % nums.length] = nums[i]
  }
  for (let i = 0; i < nums.length; ++i) {
    nums[i] = result[i];
  }
  return nums
};
rotate([1,2,3,4,5,6,7], 3)

// 首先对整个数组实行翻转，这样子原数组中需要翻转的子数组，就会跑到数组最前面。
// 这时候，从 kk 处分隔数组，左右两数组，各自进行翻转即可。
function reverse(nums, start, end) {
  while(start < end) {
    let temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}
var rotate = function(nums, k) {
  k = k % nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
  console.log(nums)
  return nums
};
rotate([1,2,3,4,5,6,7], 3)