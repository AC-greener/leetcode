var singleNumber = function(nums) {
  let result = nums[0]
  for(let i = 0; i < nums.length; i++) {
    result = result ^ nums[i]
  }
  return result
};