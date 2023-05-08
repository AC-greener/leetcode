
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。



示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

var permute = function(nums) {
  const resultItem = [], result = []
  const used = new Array(nums.length).fill(false)
  dfs(nums, used)
  function dfs(nums, used) {
    if (resultItem.length == nums.length) {
        result.push([...resultItem]);
        return;
    }
    for(let i = 0; i < nums.length; i++) {
      if(used[i]) continue
      used[i] = true
      resultItem.push(nums[i])
      dfs(nums, used)
      used[i] = false
      resultItem.pop()
    }
  }
  return result
};
permute([1,2,3])