/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
 
40. 组合总和 II
给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用 一次 。

注意：解集不能包含重复的组合。 


示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
 */
var combinationSum2 = function (candidates, target) {
  const result = [],
    resultItem = [];
  const used = new Array(3).fill(false);
  candidates.sort((a, b) => a - b);
  function helper(candidates, target, sum, startIndex, used) {
    if (sum > target) return;
    if (sum === target) {
      result.push([...resultItem]);
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      // used[i - 1] == true，说明同一树枝candidates[i - 1]使用过
      // used[i - 1] == false，说明同一树层candidates[i - 1]使用过
      // 要对同一树层使用过的元素进行跳过
      if (
        i > 0 &&
        candidates[i] === candidates[i - 1] &&
        !used[i - 1]
      ) {
        continue;
      }
      sum += candidates[i];
      resultItem.push(candidates[i]);
      used[i] = true;
      helper(candidates, target, sum, i + 1, used);
      sum -= candidates[i];
      resultItem.pop();
      used[i] = false;
    }
  }
  helper(candidates, target, 0, 0, used);
  return result;
};

combinationSum2([4,4,2,1,4,2,2,1,3], 6)
combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
