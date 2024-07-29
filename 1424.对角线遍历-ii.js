/*
 * @lc app=leetcode.cn id=1424 lang=javascript
 *
 * [1424] 对角线遍历 II
 * 
 * 给你一个列表 nums ，里面每一个元素都是一个整数列表。请你依照下面各图的规则，按顺序返回 nums 中对角线上的整数。
 * 
输入：nums = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,4,2,7,5,3,8,6,9]
输入：nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
输出：[1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    if(!nums.length) return []
    if(nums.length === 1) return nums[0]
    const result = []
    const m = nums.length
    const n = nums.reduce((pre, current) => current.length > pre ? current.length: pre, 0)
    for(let i = 0; i < m; i++) {
        let j = 0
        let k = i
        while(j < n && k >= 0 && k < m) {
            if(nums[k][j]) {
                result.push(nums[k][j])
            }
            k--
            j++
        }
    }
    for(let i = 1; i < n; i++) {
        let j = m - 1
        let k = i
        while(j >= 0 && k >= 0 && k < n) {
            if(nums[j][k]) {
                result.push(nums[j][k])
            }
            j--
            k++
        }
    }
    console.log(result)
    return result
};
findDiagonalOrder([[6],[8],[6,1,6,16]]
    )
// @lc code=end

