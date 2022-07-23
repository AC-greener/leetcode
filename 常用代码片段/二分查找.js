function binarySearch(nums, target) {
  let left = 0, right = nums.length
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    if(target === nums[mid]) {
      return mid
    } else if(nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  console.log(left, right)
  return -1
}