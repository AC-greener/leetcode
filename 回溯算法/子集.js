/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  function helper(nums, start) {
    result.push(tracks.slice(0))
    for(let i = start; i < nums.length; i++) {
      tracks.push(nums[i])
      helper(nums, i + 1)
      tracks.pop()
    }
  }
  let result = [], tracks = []
  helper(nums, 0)
  return result
};
subsets([1, 2, 3])
subsets([0])
subsets([])