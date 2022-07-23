function binarySearchLeft(nums, target) {
  let left = 0, right = nums.length - 1
  let result = -1
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    debugger
    if(target === nums[mid]) {
      result = mid
      break
    } else if(nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if(result) {
    let temp = nums[result]
    while(nums[result - 1] === temp) {
      result--
    }
  }
  console.log(result)
  return result
}
function binarySearchRight(nums, target) {
  let left = 0, right = nums.length - 1
  let result = -1
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    debugger
    if(target === nums[mid]) {
      result = mid
      break
    } else if(nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if(result) {
    let temp = nums[result]
    while(nums[result + 1] === temp) {
      result++
    }
  }
  console.log(result)
  return result
}
binarySearchRight([5,7,7,7,7,7,8,8], 7)
binarySearchLeft([5,7,7,7,7,7,8,8], 7)

var searchRange = function(nums, target) {
  function binarySearchLeft(nums, target) {
    let left = 0, right = nums.length - 1
    let result = -1
    while(left <= right) {
      let mid = Math.floor((left + right) / 2)
      if(target === nums[mid]) {
        result = mid
        break
      } else if(nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    if(result !== -1) {
      let temp = nums[result]
      while(nums[result - 1] === temp) {
        result--
      }
    }
    console.log(result)
    return result
  }
  function binarySearchRight(nums, target) {
    let left = 0, right = nums.length - 1
    let result = -1
    while(left <= right) {
      let mid = Math.floor((left + right) / 2)
      if(target === nums[mid]) {
        result = mid
        break
      } else if(nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    if(result !== -1) {
      let temp = nums[result]
      while(nums[result + 1] === temp) {
        result++
      }
    }
    console.log(result)
    return result
  }
  const left = binarySearchLeft(nums, target)
  if(left != -1) {
    const right = binarySearchRight(nums, target)
    return [left, right]
  } else {
    return [-1, -1]
  }
};
searchRange([5,7,7,8,8,10], 6)