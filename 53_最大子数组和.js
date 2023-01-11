//
var maxSubArray = function(nums) {
    let res = nums[0] //吧结果初始化为数组第一项
    let sum = 0
    for(let i = 0; i< nums.length; i++) {
      if(sum > 0) {//判断 截止到目前为止sum的值是否大于零
        sum += nums[i] 
      } else {
        //sum小于零则认为之前的sum累计小于零 无效
        sum = nums[i]
      }
      res = Math.max(sum, res)
    }
    return res
  };