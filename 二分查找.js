const binarySearch = function (nums, target) {
  if(nums === null || nums.length === 0) {
    return -1
  }
  let left = 0,
    right = nums.length - 1
  while(left <= right) {
    let middle = left + Math.floor((right - left) / 2)
    if(target < nums[middle]) {
      right = middle - 1
    } else if(target > nums[middle]) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return -1
}
var search = function(nums, target) {
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
  return binarySearch(nums, 0, nums.length - 1, target)
};

binarySearch([1, 4, 4, 5, 7, 7, 8, 9, 9, 10], 1)

/*

const binarySearch = function (nums, target) {
  // write your code here
   var left, right, mid;

  left = 0;
  right = nums.length - 1;
  while (left + 1 < right) {
      mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
          right = mid;
      } else if (nums[mid] > target) {
          right = mid;
      } else {
          left = mid;
      }
  }
 if(nums[left] === target) {
     return left
 }
 if(nums[right] === target) {
     return right
 }
  return -1;
}

*/