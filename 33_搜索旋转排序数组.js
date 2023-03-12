/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。


示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
示例 2：

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
思路：
1，确定旋转点
旋转点是指数组中最小的元素，也就是旋转点左侧所有元素都比它大，右侧所有元素都比它小。我们可以使用二分查找的思想来找到旋转点，具体思路如下：

用两个指针left和right分别指向数组的左右两端；
计算中间位置mid，判断mid位置的元素是否小于左端点left位置的元素，如果小于，则旋转点在mid的左侧，将right指向mid，继续执行步骤2，否则旋转点在mid的右侧，将left指向mid，继续执行步骤2；
如果left和right相遇，则找到了旋转点。
2，确定目标元素位置
 */
var search = function(nums, target) {
  function findScalePoint(nums) {
    let left = 0
    let right = nums.length
    while(left < right) {
      let mid = Math.floor((left + right) / 2)
      let midValue = nums[mid]
      if(midValue > nums[left]) {
        left = mid
      } else {
        right= mid
      }
    }
    return left
  }
  function binarySearch(nums, left, right, target) {
    while(left <= right) {
      let mid = Math.floor((left + right) / 2)
      let midValue = nums[mid]
      if(midValue > target) {
        right = mid - 1
      } else if(midValue < target) {
        left = mid + 1
      } else {
        return mid
      }
    }
    return -1
  }
  binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 0, 9, 7)
  let pointLeft = findScalePoint(nums)
  // console.log('pointLeft :>> ', pointLeft);
  let x = binarySearch(nums, 0, pointLeft, target)
  let y = binarySearch(nums, pointLeft + 1, nums.length - 1, target)
  // console.log('x :>> ', x);
  // console.log('y :>> ', y);
  return x === -1 ? y : x
};
search([4,5,6,7,0,1,2], 0)
search([4,5,6,7,0,1,2], 3)
search([1], 0)
search([3, 1], 1)