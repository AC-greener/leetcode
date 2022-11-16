var maxSubArray = function(nums) {
    let res = nums[0]
    let sum = 0
    for(let i = 0; i< nums.length; i++) {
      if(sum > 0) {//判断 截止到目前为止sum的值是否大于零
        sum += nums[i] 
      } else {
        sum = nums[i]
      }
      res = Math.max(sum, res)
    }
    return res
  };