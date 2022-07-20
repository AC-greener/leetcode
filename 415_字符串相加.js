//也就是大数相加
var addStrings = function(num1, num2) {
  let i = num1.length - 1, j = num2.length - 1, add = 0;
  const ans = [];
  while (i >= 0 || j >= 0 || add != 0) {
      const x = i >= 0 ? Number(num1.charAt(i)) : 0;
      const y = j >= 0 ? Number(num2.charAt(j)) : 0;
      const result = x + y + add;
      ans.push(result % 10);
      add = Math.floor(result / 10);
      i -= 1;
      j -= 1;
  }
  return ans.reverse().join('');
};

