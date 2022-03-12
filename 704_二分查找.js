var search = function(nums, target) {
  let left = 0, right = nums.length - 1
  while(left <= right) {
    let mid = Math.floor((right - left) / 2 + left)
    if(target === nums[mid]) {
      return mid
    } else if(target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid -1
    }
  }
  return -1
};
search([-1,0,3,5,9,12], 9)
// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4

//思路：1，找到数组的middle， target和中间值作比较； target比中间值大，在右侧查找