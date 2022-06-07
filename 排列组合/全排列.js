var permute = function(nums) {
  function helper(nums, track, used) {
    // debugger
    if(track.length === nums.length) {
      result.push(track.slice(0))
      return
    }
    for(let i = 0; i < nums.length; i++) {
      if(used[i]) {
        continue
      }
      track.push(nums[i])
      used[i] = true
      helper(nums, track, used)
      track.pop()
      used[i] = false
    }
  }
  let track = [],
    result = [],
    used = new Array(nums.length)
    helper(nums, track, used)
    console.log(result)
    return result
};