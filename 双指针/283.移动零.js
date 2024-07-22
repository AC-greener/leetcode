/*
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

 

示例 1:

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
示例 2:

输入: nums = [0]
输出: [0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 我们使用 nonZeroIndex 来跟踪应该放置下一个非零元素的位置。
// 我们遍历整个数组，每当遇到一个非零元素，就将其移动到 nonZeroIndex 指向的位置，然后增加 nonZeroIndex。
// 这个过程结束后，所有的非零元素都被移动到了数组的前部，保持了它们的相对顺序。
// 最后，我们从 nonZeroIndex 开始，将数组剩余的部分填充为 0。
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  // return nums;
};
