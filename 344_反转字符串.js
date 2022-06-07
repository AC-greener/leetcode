var reverseString = function(s) {
  let i = 0, j = s.length - 1
  while(i < j) {
    [s[i], s[j]] = [s[j], s[i]]
    i++
    j--
  }
  console.log(s)
  return s
};

reverseString(["h","e","l","l","o"])
reverseString(["H","x","b","n","a","h"])