


// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
// 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
var threeSum = function(nums) {
  var twoSum = function(nums, start, target) {
    let result = []
    let len = nums.length
    let left = start, right = len - 1
    nums = nums.sort((a, b) => a - b)
    // debugger
    while(left < right) {
      let sum = nums[left] + nums[right]
      let low = nums[left], hi = nums[right]
      if(sum < target) {
        while(left < right &&  nums[left] === low) left++

      } else if(sum > target){
        while(left < right && nums[right] === hi) right--
      } else {
        result.push([nums[left] , nums[right]])
        while(left < right && nums[left] === low) left++
        while(left < right && nums[right] === hi) right--
      }
    }
    // console.log(result)
    return result
  };
  nums = nums.sort((a, b) => a - b)
  let result = []
  for(let i = 0; i < nums.length; i++) {
    // debugger
    let tuple = twoSum(nums, i + 1, 0 - nums[i])
    for(let j = 0; j < tuple.length; j++) {
      tuple[j].push(nums[i])
      result.push(tuple[j])
      // console.log(result)
    }
    while(i < nums.length && nums[i] === nums[i + 1]) i++
  }
  return result
};
threeSum([-2,0,0,2,2])
// threeSum([-1,0,1,2,-1,-4])
// threeSum([2,7,11,15], 20)
// threeSum( [-1,0,1,2,-1,-4], 0)