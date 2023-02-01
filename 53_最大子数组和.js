/*
定义f(i)为，以索引i结尾的连续最大子数组和

     f(i-1) <= 0时， f(i) = nums[i]
   /
f(i)
   \
     f(i-1) > 0时，f(i) = f(i - 1) + nums[i]
*/

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

  var maxSubArray = function(nums) {
    let res = nums[0] 
    let prev =  nums[0]
    for(let i = 1; i< nums.length; i++) {
      if(prev > 0) {
        prev = prev + nums[i]
      } else {
        prev = nums[i]
      }
      res = Math.max(prev, res)
    }
    return res
  };