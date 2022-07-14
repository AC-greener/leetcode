/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (candidates.length == 0) {
    return []
  }
  function helper(nums, start, target) {
    if (targetSum == target) {
      console.log(tracks.slice(0))
      result.push(tracks.slice(0))
      return
    }
    if (targetSum > target) {
      return
    }
    for (let i = start; i < nums.length; i++) {
      targetSum += nums[i]
      tracks.push(nums[i])
      helper(nums, i, target)
      targetSum -= nums[i]
      tracks.pop(nums[i])
    }
  }
  let result = [], tracks = [], targetSum = 0
  helper(candidates, 0, target)
  return result
};
combinationSum([2,3,6,7], 7)
combinationSum([2,3,5], 8)
combinationSum([2], 1)