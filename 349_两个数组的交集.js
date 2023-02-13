/*
给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
*/
var intersection = function(nums1, nums2) {
  let resultSet = new Set()
  let nums1Set = new Set(nums1)
  for(let value of nums2) {
    if(nums1Set.has(value)) {
      resultSet.add(value)
    }
  }
  // console.log(Array.from(resultSet))
  return Array.from(resultSet)
};

intersection([1,2,2,1], [2,2])
intersection([4,9,5], [9,4,9,8,4])