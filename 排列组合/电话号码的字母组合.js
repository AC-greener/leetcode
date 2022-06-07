var letterCombinations = function (digits) {
  function helper(index) {
    // debugger
    if (track.length === digits.length) {
      console.log(111, track.slice(0))
      result.push(track.slice(0).join(''))
      return
    }
    let d = digits[index]
    for (let i = 0; i < hash[d].length; i++) {
      track.push(hash[d][i])
      helper(index + 1)
      track.pop()
    }
  }
  let track = [],
    result = [],
    hash = {
      "2": "abc",
      "3": "def",
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tuv",
      "9": "wxyz",
    }
  helper(0)
  if(digits) {
    return result
  } else {
    return []
  }
};
letterCombinations('234')