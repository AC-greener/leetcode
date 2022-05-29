/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const hash = {}
    nums.forEach(item => {
        if (hash[item]) {
            hash[item]++
        } else {
            hash[item] = 1
        }
    })
    for (let key in hash) {
        if (hash[key] > nums.length / 2) {
            return Number(key)
        }
    }
};
var majorityElement = function (nums) {
    let result = nums[0], count = 1
    for(let i = 1; i < nums.length; i++) {
        if(count == 0) {
            result = nums[i]
        }
        if(nums[i] === result) {
            count++
        } else {
            count--
        }
    }
    return result
};
majorityElement([2, 2, 1, 1, 1, 2, 2])
majorityElement([3, 2, 3])