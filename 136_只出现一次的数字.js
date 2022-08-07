/*
交换律：a ^ b ^ c <=> a ^ c ^ b

任何数于0异或为任何数 0 ^ n => n

相同的数异或为0: n ^ n => 0
*/

var singleNumber = function(nums) {
  let result = nums[0]
  for(let i = 0; i < nums.length; i++) {
    result = result ^ nums[i]
  }
  return result
};