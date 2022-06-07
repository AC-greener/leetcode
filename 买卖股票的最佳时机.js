var maxProfit = function(prices) {
  let result = 0, min = prices[0]
  for(let i = 1; i < prices.length; i++) {
    result = Math.max(result, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return result
};
maxProfit([7,1,5,3,6,4])
// maxProfit([7,6,4,3,1])