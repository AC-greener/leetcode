/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
   const length = nums.length
   const result = []
  for(let i = 1; i <= length; i++) {
    if(!nums.includes(i)){
      result.push(i)
    }
  }
  return result
};
findDisappearedNumbers([4,3,2,7,8,2,3,1])
findDisappearedNumbers([1,1])