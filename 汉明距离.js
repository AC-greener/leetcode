function shito2(number) {
  let result = []
  while(number != 0) {
    result.push(number % 2)
    number = Math.floor(number / 2)
  }
  console.log(result)
  return result
}
shito2(100)
shito2(3)
shito2(4)
shito2(5)
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
  function shito2(number) {
    let result = []
    while(number != 0) {
      result.push(number % 2)
      number = Math.floor(number / 2)
    }
    return result
  }
  let xArray = shito2(x)
  let yArray = shito2(y)
  let result = 0
  if(xArray.length > yArray.length) {
    for(let i = 0; i < xArray.length; i++) {
      if(yArray[i] == undefined) {
        yArray[i] = 0
      }
      if(xArray[i] !== yArray[i]) {
        result++
      }
    }
  } else {
    for(let i = 0; i < yArray.length; i++) {
      if(xArray[i] == undefined) {
        xArray[i] = 0
      }
      if(yArray[i] !== xArray[i]) {
        result++
      }
    }
  }
  console.log(xArray)
  console.log(yArray)
  return result
};
hammingDistance(4, 2)
hammingDistance(3, 1)
hammingDistance(1, 4)
hammingDistance(x, y)
function hammingDistance(x, y) {
  let z= x ^ y, result = 0
  while( z != 0) {
    result =+ z & 1
    z = z>>1
  }
  return result
}